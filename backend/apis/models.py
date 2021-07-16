from django.db import models
from django.template.defaultfilters import slugify
# Create your models here.
class BASE_MODEL(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True

class POST(BASE_MODEL):
      title = models.CharField(max_length=255, null=True, blank=True)
      slug = models.SlugField(blank=True)
      content = models.TextField(null=True, blank=True)
      is_active = models.BooleanField(null=False,default=True)

      class Meta:
          constraints = [
              models.UniqueConstraint(fields=['slug'], name='unique slug')
          ]

      def save(self, *args, **kwargs):
          slug = slugify(self.title)
          self.slug = slug
          super(POST, self).save(*args, **kwargs)

class POST_IMAGE(BASE_MODEL):
    image = models.ImageField(upload_to='post_images')
    post = models.ForeignKey(POST,on_delete=models.CASCADE)