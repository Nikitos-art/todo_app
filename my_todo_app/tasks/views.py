
# Create your views here.
from rest_framework.viewsets import ModelViewSet
from .models import Task
from .serializers import TaskModelSerializer



class TaskModelViewSet(ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskModelSerializer

