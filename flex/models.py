from django.db import models
from wagtail.admin.panels import FieldPanel
from wagtail.fields import StreamField
from wagtail.models import Page
from wagtail.search import index

from streams import blocks


# Create your models here.


class FlexPAge(Page):
    template = 'flex/flex_page.html'

    subtitle = models.CharField(max_length=255, null=True, blank=True)
    content = StreamField([
        ('heading', blocks.TitleAndTextBlock()),
        ('paragraph', blocks.RichTextBlock()),
        ('cards', blocks.CardBlock()),
    ], use_json_field=True, null=True, blank=True)


    content_panels = Page.content_panels + [
        FieldPanel("subtitle"),
        FieldPanel("content"),
    ]
    # promote_panels = Page.promote_panels + [
    #     FieldPanel("subtitle"),
    # ]
    search_fields = Page.search_fields + [
        index.SearchField('subtitle'),

    ]
    class Meta: #noqa
        verbose_name = "Flex Page"
        verbose_name_plural = "Flex Pages"
