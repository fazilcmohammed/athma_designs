from django.contrib.auth.mixins import LoginRequiredMixin
from django.shortcuts import get_object_or_404, render
from django.urls import reverse_lazy
from django.views import View, generic
from django.views.generic.edit import FormView, CreateView, UpdateView, DeleteView
from django.views.generic import ListView, DetailView, TemplateView

from order.models import CartItem
from products.models import Category, Product


class IndexView(LoginRequiredMixin, View):
    template_name = "dashboard/index.html"

    def get(self, request, *args, **kwargs):
        user = self.request.user
        items = CartItem.objects.filter(user=user)
        return render(request, self.template_name, {"items": items})


class OrderView(LoginRequiredMixin, View):
    template_name = "dashboard/order/order_list.html"

    def get(self, request, *args, **kwargs):
        user = self.request.user
        items = CartItem.objects.filter(user=user)
        return render(request, self.template_name, {"items": items})


class CategoryView(LoginRequiredMixin, View):
    template_name = "dashboard/category/categories.html"

    def get(self, request, *args, **kwargs):
        user = self.request.user
        items = CartItem.objects.filter(user=user)
        return render(request, self.template_name, {"items": items})


class CategoryCreateView(generic.CreateView):
    model = Category
    template_name = "dashboard/category/add_category.html"
    fields = "__all__"

    def get_success_url(self):
        product_pk = self.kwargs.get("product_pk")
        return reverse_lazy("dashboard:product_detail", kwargs={"pk": product_pk})

    def form_valid(self, form):
        data = form.save(commit=False)
        product_pk = self.kwargs.get("product_pk")
        product = get_object_or_404(Product, pk=product_pk)
        data.product = product
        data.save()
        return super().form_valid(form)


class ProductListView(LoginRequiredMixin, generic.ListView):
    template_name = "dashboard/product/products.html"

    def get(self, request, *args, **kwargs):
        user = self.request.user
        items = CartItem.objects.filter(user=user)
        return render(request, self.template_name, {"items": items})


class ProductCreateView(generic.CreateView):
    model = Product
    template_name = "dashboard/product/add_product.html"
    fields = "__all__"

    def get_success_url(self):
        product_pk = self.kwargs.get("product_pk")
        return reverse_lazy("dashboard:product_detail", kwargs={"pk": product_pk})

    def form_valid(self, form):
        data = form.save(commit=False)
        product_pk = self.kwargs.get("product_pk")
        product = get_object_or_404(Product, pk=product_pk)
        data.product = product
        data.save()
        return super().form_valid(form)


class ProductCreate(LoginRequiredMixin, CreateView):
    model = Product
    template_name = "dashboard/product/product_create.html"
    fields="__all__"
    # success_url = reverse_lazy('web:product_list',)

    
class ProductUpdate(LoginRequiredMixin, UpdateView):
    model = Product
    template_name = "product/product_update.html"
    fields = "__all__"
        
    
class ProductDelete(LoginRequiredMixin, DeleteView):
    model = Product
    template_name = "product/product_delete.html"
    success_url = "/product_list/"
    
