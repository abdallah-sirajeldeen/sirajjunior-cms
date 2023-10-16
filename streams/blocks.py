from wagtail import blocks
from wagtail.images.blocks import ImageChooserBlock


class TitleAndTextBlock(blocks.StructBlock):
    title = blocks.CharBlock()
    text = blocks.TextBlock()

    class Meta:
        label = "Title and text"
        # icon = "placeholder"
        icon = 'edit'
        template = "streams/title_and_text_block.html"


class RichTextBlock(blocks.RichTextBlock):
    class Meta:
        label = "Rich text"
        icon = "edit"
        template = "streams/rich_text_block.html"


# class HeroBlock(blocks.BaseBlock):
#     title = blocks.CharBlock(required=True)
#     description = blocks.CharBlock(required=False)
#     image = ImageChooserBlock(required=False)
#
#     class Meta:
#         icon = 'image'
#         template = 'streams/hero_block.html'

class CardBlock(blocks.StructBlock):
    title = blocks.CharBlock()
    cards = blocks.ListBlock(
        blocks.StructBlock(
            [
                ("image", ImageChooserBlock(required=True)),
                ("title", blocks.CharBlock(required=True)),
                ("text", blocks.TextBlock(required=True)),
                ("button_page", blocks.PageChooserBlock(required=False)),
                ("link", blocks.URLBlock(required=False)),
            ]
        )
    )
    class Meta:
        label = "Staff Card"
        icon = "edit"
        template = "streams/card_block.html"
