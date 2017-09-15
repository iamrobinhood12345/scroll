"""Views for main app."""
from django.views.generic import TemplateView


class HomeView(TemplateView):
    """Home View."""

    template_name = 'scroll_project/home.html'
