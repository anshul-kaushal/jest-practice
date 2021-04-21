const { Cookbook } = require('../src/cookbook');
const { CookbookCli } = require('../src/cookbook-cli');

describe('CookbookCli', () => {
  describe('Adding recipes', () => {
    test('should accept the recipe information and display the correct message', () => {
      const myCookbook = new Cookbook();
      const myCookbookCli = new CookbookCli(myCookbook);

      const message = myCookbookCli.run('add', 'pepperoni pizza', ['pepperoni', 'pizza']);
      const expectedMessage = `Successfully added the following recipe: pepperoni pizza`;

      expect(message).toBe(expectedMessage);
    });
  });

  describe('Listing recipes', () => {
    test('should display the correct message listing all of the recipe names', () => {
      const myCookbook = new Cookbook();
      const myCookbookCli = new CookbookCli(myCookbook);
      myCookbookCli.run('add', 'pepperoni pizza', ['pepperoni', 'pizza']);
      myCookbookCli.run('add', 'cookies', ['butter', 'dough']);

      const message = myCookbookCli.run('list');
      const expectedMessage = `You have the following recipes: pepperoni pizza,cookies`;

      expect(message).toBe(expectedMessage);
    });
  });

  describe('Retrieving a recipe', () => {
    test('should display the ingredients required to make the specified recipe', () => {
      const myCookbook = new Cookbook();
      const myCookbookCli = new CookbookCli(myCookbook);

      myCookbookCli.run('add', 'chips', ['potatoes', 'salt']);

      const message = myCookbookCli.run('get', 'chips');
      const expectedMessage = `The ingredients for chips are: potatoes,salt`;

      expect(message).toBe(expectedMessage);
    });
  });

  describe('Deleting a recipe', () => {
    test('should accept the recipe name and display the correct message', () => {
      const myCookbook = new Cookbook();
      const myCookbookCli = new CookbookCli(myCookbook);

      myCookbookCli.run('add', 'chips', ['potatoes', 'salt']);

      const message = myCookbookCli.run('remove', 'chips');
      const expectedMessage = `Successfully removed the following recipe: chips`;

      expect(message).toBe(expectedMessage);
    });
  });

  // additional tests to ensure that CookbookCli is interacting properly with Cookbook. NOTE: this only includes add and remove because these two were the only functions that were returning messages that didn't refer to the cookbook object.

  describe('Adding recipe to the cookbook', () => {
    test('should accept recipe name and ingredients and the change should be reflected in the cookbook object', () => {
      const myCookbook = new Cookbook();
      const myCookbookCli = new CookbookCli(myCookbook);
      
      myCookbookCli.run('add', 'chocolate cookies', ['butter', 'dough', 'chocolate']);

      const expectedRecipe = {'chocolate cookies': ['butter', 'dough', 'chocolate']};

      expect(myCookbook.recipes).toEqual(expectedRecipe);
    });
  });

  describe('Deleting recipe from the cookbook', () => {
    test('should accept recipe name and the change should be reflected in the cookbook object', () => {
      const myCookbook = new Cookbook();
      const myCookbookCli = new CookbookCli(myCookbook);
      
      myCookbookCli.run('add', 'butterscotch cookies', ['butter', 'dough', 'butterscotch']);

      myCookbookCli.run('remove', 'butterscotch cookies');

      const expectedRecipe = {};

      expect(myCookbook.recipes).toEqual(expectedRecipe);
    });
  });

  // stretch goals tests
  describe('Adding same recipe twice', () => {
    test('should not accept the same recipe name for the second time, and should display a message to indicate the same.', () => {
      const myCookbook = new Cookbook();
      const myCookbookCli = new CookbookCli(myCookbook);

      myCookbookCli.run('add', 'fried rice', ['rice', 'vegetables']);


      const message = `recipe for fried rice already exists`;

      expect(myCookbookCli.run('add', 'fried rice', ['rice', 'vegetables'])).toBe(message);

    })
  })
});
