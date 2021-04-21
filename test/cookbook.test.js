const { Cookbook } = require('../src/cookbook');

describe('Cookbook', () => {
  describe('Adding recipes', () => {
    test('should allow a recipe to be added', () => {
      const myCookbook = new Cookbook();
      myCookbook.addRecipe('mango shake', ['mango', 'milk']);

      const expectedRecipe = {'mango shake': ['mango', 'milk']};

      expect(myCookbook.recipes).toEqual(expectedRecipe);
    });
  });

  describe('Listing recipes', () => {
    test('should allow the recipes to be listed', () => {
      const myCookbook = new Cookbook();
      myCookbook.addRecipe('mango shake', ['mango', 'milk']);
      myCookbook.addRecipe('burger', ['buns', 'patty']);

      const expectedRecipesList = ['mango shake', 'burger'];

      expect(myCookbook.listRecipes()).toEqual(expectedRecipesList);
    });
  });

  describe('Retrieving a recipe', () => {
    test('should allow the ingredients for a recipe to be retrieved', () => {
      const myCookbook = new Cookbook();
      myCookbook.addRecipe('veg burger', ['buns', 'lettuce']);

      const expectedIngredients = ['buns', 'lettuce'];

      expect(myCookbook.getRecipe('veg burger')).toEqual(expectedIngredients);
    });
  });

  describe('Deleting a recipe', () => {
    test('should allow a recipe to be deleted', () => {
      const myCookbook = new Cookbook();
      myCookbook.addRecipe('strawberry shake', ['strawberries', 'milk']);
      myCookbook.removeRecipe('strawberry shake');
      

      const expectedRecipe = {}

      expect(myCookbook.recipes).toEqual(expectedRecipe);
    });
  });
});
