from django.db import models
from wagtail.admin.panels import FieldPanel

from wagtail.models import Page


class HomePage(Page):
    template = "home/home_page.html"

    introduction = models.TextField()
    image = models.ForeignKey(
        "wagtailimages.Image",
        blank=True,
        null=True,
        on_delete=models.SET_NULL,
        related_name="+",
        help_text="Add an image related to the home page",
    )
    subtitle = models.CharField(max_length=255, null=True, blank=True)
    date_published = models.DateTimeField(
        verbose_name="date published", null=True, blank=True
    )
    content_panels = Page.content_panels + [
        FieldPanel("introduction"),
        FieldPanel("subtitle"),
        FieldPanel("image"),
        FieldPanel("date_published"),

    ]
    promote_panels = Page.promote_panels + [
        FieldPanel("subtitle"),
    ]

    class Meta:
        verbose_name = "Home Page"
        verbose_name_plural = "Home Pages"