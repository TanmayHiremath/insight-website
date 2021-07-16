from django.shortcuts import render
from rest_framework.views import APIView
from django.http import JsonResponse
from apis.models import *
# Create your views here.
class Posts(APIView):
      def get(self, request):
            posts = POST.objects.all()
            result = []
            for post in posts:
                  data = {
                        'title':post.title,
                        'content':post.content,
                        'is_active':post.is_active,
                        'slug': post.slug
                  }
                  result.append(data)

            return JsonResponse({'data': result}, status=200)
class Post(APIView):
      def get(self,request, slug='hello'):
            print(slug)
            post = POST.objects.get(slug=slug)
            data = {
                  'title': post.title,
                  'content': post.content,
                  'is_active': post.is_active,
                  'slug': post.slug
            }
            return JsonResponse({'data': data}, status=200)