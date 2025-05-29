# views.py
from django.shortcuts import redirect, get_object_or_404, render
from urllib.parse import quote
from . models import Product

def product_detail(request, product_id):
    product = get_object_or_404(Product, id=product_id)
    
    if request.method == 'POST':
        # Create WhatsApp message
        message = f"Hi, I'm interested in buying: {product.name}\n\n"
        message += f"Product URL: {request.build_absolute_uri(product.get_absolute_url())}\n"
        message += f"Price: {product.price}\n\n"
        message += "Please let me know how to proceed!"
        
        # Encode message for URL
        encoded_message = quote(message)
        
        # Redirect to WhatsApp with prefilled message
        whatsapp_url = f"https://wa.me/919876543210?text={encoded_message}"
        return redirect(whatsapp_url)
    
    return render(request, 'product_detail.html', {'product': product})


# utils.py
from django.conf import settings
from urllib.parse import quote

def get_whatsapp_order_link(product, request):
    message = (
        f"Order Request: {product.name}\n"
        f"Price: {product.price}\n"
        f"URL: {request.build_absolute_uri(product.get_absolute_url())}\n\n"
        "Customer Details:\n"
        f"Name: [Customer Name]\n"
        f"Phone: [Customer Phone]\n"
        "Please confirm availability and provide payment details."
    )
    return f"https://wa.me/{settings.WHATSAPP_NUMBER}?text={quote(message)}"