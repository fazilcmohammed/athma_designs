from django.views.generic import FormView, TemplateView
from django.core.mail import send_mail
from django.conf import settings
from django.urls import reverse_lazy
from .forms import ContactForm
from .models import Contact

class ContactView(FormView):
    template_name = 'core/contact.html'
    form_class = ContactForm
    success_url = reverse_lazy('contact:success')
    
    def form_valid(self, form):
        # Save to database
        submission = form.save()
        
        # Send email (with error handling)
        try:
            self.send_contact_email(form.cleaned_data)
        except Exception as e:
            # Log the error but don't prevent form submission
            print(f"Failed to send email: {str(e)}")
        
        return super().form_valid(form)
    
    def send_contact_email(self, cleaned_data):
        """Handles email sending with validation"""
        if not hasattr(settings, 'CONTACT_EMAIL'):
            raise ImproperlyConfigured("CONTACT_EMAIL setting is missing")
        
        if not settings.CONTACT_EMAIL:
            raise ImproperlyConfigured("CONTACT_EMAIL cannot be empty")
        
        send_mail(
            subject=f"New Contact: {cleaned_data['subject']}",
            message=self.format_email_message(cleaned_data),
            from_email=f"{cleaned_data['name']} <{cleaned_data['email']}>",
            recipient_list=[settings.CONTACT_EMAIL],
            fail_silently=False,
        )
    
    def format_email_message(self, cleaned_data):
        """Formats a consistent email message"""
        return f"""
        New contact form submission:
        
        Name: {cleaned_data['name']}
        Email: {cleaned_data['email']}
        Phone: {cleaned_data.get('phone', 'Not provided')}
        Subject: {cleaned_data['subject']}
        
        Message:
        {cleaned_data['message']}
        
        ---
        This message was sent from your website contact form.
        """

class ContactSuccessView(TemplateView):
    template_name = 'success.html'  