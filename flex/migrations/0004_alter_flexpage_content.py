# Generated by Django 4.2.6 on 2023-10-11 12:59

from django.db import migrations
import streams.blocks
import wagtail.blocks
import wagtail.fields


class Migration(migrations.Migration):

    dependencies = [
        ('flex', '0003_alter_flexpage_content'),
    ]

    operations = [
        migrations.AlterField(
            model_name='flexpage',
            name='content',
            field=wagtail.fields.StreamField([('heading', wagtail.blocks.StructBlock([('title', wagtail.blocks.CharBlock()), ('text', wagtail.blocks.TextBlock())])), ('paragraph', streams.blocks.RichTextBlock())], blank=True, null=True, use_json_field=True),
        ),
    ]