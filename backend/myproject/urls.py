# myproject/urls.py（または manage.py と同じディレクトリの urls.py）
from django.contrib import admin
from django.urls import path, include


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
]
#
