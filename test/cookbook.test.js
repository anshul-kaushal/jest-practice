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

    });
  });

  describe('Deleting a recipe', () => {
    test('should allow a recipe to be deleted', () => {

    });
  });
});
