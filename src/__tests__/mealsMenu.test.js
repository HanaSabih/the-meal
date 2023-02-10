/**
 * @jest-environment jsdom
 * */

import { mealsCnt } from '../modules/mealsMenu.js';

describe('Testing items counter', () => {
  const data = [
    {
      strMeal: 'Apam balik',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/adxcbq1619787919.jpg',
      idMeal: '53049',
    },
    {
      strMeal: 'Apple & Blackberry Crumble',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/xvsurr1511719182.jpg',
      idMeal: '52893',
    },
    {
      strMeal: 'Apple Frangipan Tart',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/wxywrq1468235067.jpg',
      idMeal: '52768',
    },
    {
      strMeal: 'Bakewell tart',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/wyrqqq1468233628.jpg',
      idMeal: '52767',
    },
    {
      strMeal: 'Banana Pancakes',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/sywswr1511383814.jpg',
      idMeal: '52855',
    },
    {
      strMeal: 'Battenberg Cake',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/ywwrsp1511720277.jpg',
      idMeal: '52894',
    },
    {
      strMeal: 'BeaverTails',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/ryppsv1511815505.jpg',
      idMeal: '52928',
    },
    {
      strMeal: 'Blackberry Fool',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/rpvptu1511641092.jpg',
      idMeal: '52891',
    },
    {
      strMeal: 'Bread and Butter Pudding',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/xqwwpy1483908697.jpg',
      idMeal: '52792',
    },
    {
      strMeal: 'Budino Di Ricotta',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/1549542877.jpg',
      idMeal: '52961',
    },
    {
      strMeal: 'Canadian Butter Tarts',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/wpputp1511812960.jpg',
      idMeal: '52923',
    },
    {
      strMeal: 'Carrot Cake',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/vrspxv1511722107.jpg',
      idMeal: '52897',
    },
    {
      strMeal: 'Cashew Ghoriba Biscuits',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/t3r3ka1560461972.jpg',
      idMeal: '52976',
    },
    {
      strMeal: 'Chelsea Buns',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/vqpwrv1511723001.jpg',
      idMeal: '52898',
    },
    {
      strMeal: 'Chinon Apple Tarts',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/qtqwwu1511792650.jpg',
      idMeal: '52910',
    },
  ];

  const count = mealsCnt(data);

  test('Number of items are 15', () => {
    expect(count).toBe(15);
  });
});
