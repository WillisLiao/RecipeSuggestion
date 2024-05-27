from django.contrib import admin
from django.urls import  path
from . import views

urlpatterns = [
    path('login/', views.login_page, name = 'login'),
    path('sign_up/', views.sign_up_page, name = 'sign_up'),
    path('home/', views.home_page, name='home'),
    path('multistep_form/', views.multistep_form_page, name = 'multistep_form'),
    path('logged_in/', views.logged_in_page, name = 'logged_in'),
    path('suggestion/', views.suggestion_page, name = 'suggestion'),
    path('BuyRecipe/', views.buy_recipe_page, name ='buy_recipe'),
    path('FoodJournal/', views.food_journal_page, name = 'food_journal'),

    path('suggestion2/', views.suggestion_page2, name = 'suggestion2'),
    path('BuyRecipe2/', views.buy_recipe_page2, name ='buy_recipe2'),
    path('FoodJournal2/', views.food_journal_page2, name = 'food_journal2'),




]   