from django.contrib import admin
from django_summernote.admin import SummernoteModelAdmin
from apis.models import *
# Register your models here.
@admin.register(POST)
class PostAdmin(SummernoteModelAdmin):

    list_display = ('id','title','slug','_content','is_active',)
    summernote_fields = ('content',)

    def _content(self,obj):
        return obj.content[:100]
#     list_editable = ('title','slug','content','is_active',)

# @admin.register(POST_IMAGE)
# class PostImageAdmin(admin.ModelAdmin):
#
#     list_display = ('id','i',)