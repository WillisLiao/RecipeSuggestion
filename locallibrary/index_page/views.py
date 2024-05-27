from django.shortcuts import render
from django.http import HttpResponse
from .models import Recipes

# Create your views here.

def login_page(request):
    return render(request, 'login.html')


def sign_up_page(request):
    return render(request, 'sign_up.html')

def home_page(request):
    return render(request, 'index.html')

def multistep_form_page(request):
    return render(request, 'multistep_form.html')

def logged_in_page(request):
        return render(request, 'logged_in.html')

def suggestion_page(request):
        return render(request, 'suggestion.html')

def buy_recipe_page(request):
    if request.method == 'POST':
        # 獲取表單數據
        meal = request.POST.get('meal')  # 早/中/晚餐
        cuisine = request.POST.get('cuisine')  # 菜式風格
        ingredients = request.POST.get('ingredients')  # 食材
        dietary_needs = request.POST.get('dietary-needs')  # 飲食需求
                # 打印獲取到的數據
        print(meal)


        # 構建查詢
        query = Recipes.objects.all()
        if cuisine:
            query = query.filter(category=cuisine)  # 假設 category 欄位代表餐點時間
        # if ingredients:
        #     query = query.filter(ingredients__icontains=ingredients)  # 假設 ingredients 欄位存有食材列表
        # if dietary_needs:
        #     query = query.filter(dietary_needs__icontains=dietary_needs)  # 假設 dietary_needs 欄位存有飲食需求

        # 返回篩選結果到模板
        return render(request, 'BuyRecipe.html', {'recipes': query})

    return render(request, 'BuyRecipe.html')

def food_journal_page(request):
        return render(request, 'FoodJournal.html')






#logged in
def suggestion_page2(request):
        return render(request, 'suggestion2.html')

def buy_recipe_page2(request):
        return render(request, 'BuyRecipe2.html')

def food_journal_page2(request):
        return render(request, 'FoodJournal2.html')

recommended_dish_range = range(10) #Buy recipe 推薦食材的列表的行數

