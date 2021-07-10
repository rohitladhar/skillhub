from django.db import models


class DashBoard(models.Model):
    objects = models.Manager()
    object = models.Manager()
    group_options = (
        ('not specified', 'Not Specified'),
        ('alpha', 'alpha'),
        ('beta', 'beta'),
        ('gamma', 'gamma')
    )
    username = models.CharField(max_length=50)
    question = models.CharField(max_length=200)
    date = models.CharField(max_length=50)
    group = models.CharField(choices=group_options, default='not specified', max_length=20)

    def __str__(self):
        return self.question


class ApprenticeResponse(models.Model):
    objects = models.Manager()
    object = models.Manager()
    group_options = (
        ('not specified', 'Not Specified'),
        ('alpha', 'alpha'),
        ('beta', 'beta'),
        ('gamma', 'gamma')
    )
    username = models.CharField(max_length=100)
    question = models.ForeignKey(DashBoard, on_delete=models.CASCADE, related_name='apprentice',blank=True)
    answer = models.CharField(max_length=500)
    group = models.CharField(choices=group_options, default='not specified', max_length=20)
    favour = models.BooleanField(default=False)
    is_status = models.CharField(max_length=30,default='active')


    
