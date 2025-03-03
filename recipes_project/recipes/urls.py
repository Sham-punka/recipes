from django.urls import path
from .views import CategoryList, RecipeDetail
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

schema_view = get_schema_view(
    openapi.Info(
        title="Recipes API",
        default_version='v1',
        description="API для рецептов",
    ),
    public=True,
)

urlpatterns = [
    path('categories/', CategoryList.as_view(), name='category-list'),
    path('recipes/<int:pk>/', RecipeDetail.as_view(), name='recipe-detail'),
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
]