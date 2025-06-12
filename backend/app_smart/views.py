from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics

def abre_index(request):
    mensagem = "Sensor"
    return HttpResponse(mensagem)

def cad_user(request):
    return render(request, 'Cad_User_Api.html')
