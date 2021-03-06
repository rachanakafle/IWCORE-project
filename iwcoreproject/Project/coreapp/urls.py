from django.urls import include, path
from rest_framework import routers
from coreapp import views
from rest_framework.authtoken.views import obtain_auth_token


router = routers.DefaultRouter()
router.register(r'users', views.MyUserViewSet)
router.register(r'project', views.ProjectViewSet)
router.register(r'partner', views.PartnerViewSet)
router.register(r'projectManager', views.ProjectManagerViewSet)
router.register(r'Developer', views. DeveloperViewset)



urlpatterns = [
    path('api/', include(router.urls)),
    path('api-token-auth/', obtain_auth_token, name='api_token_auth'),
    path('count/', views.Counter.as_view()),
]


