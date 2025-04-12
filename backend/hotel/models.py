from django.db import models

class Hotel(models.Model):
    name = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    total_rooms = models.IntegerField()

    def __str__(self):
        return self.name
