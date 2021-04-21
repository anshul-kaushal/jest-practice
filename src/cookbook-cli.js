const { Cookbook } = require('./cookbook');

class CookbookCli {
  constructor(cookbook) {
    this.cookbook = cookbook;
  }

  run(command, ...args) {
    switch (command) {
      case 'list': return this.list();
      case 'add': return this.add(...args);
      case 'get': return this.get(...args);
      case 'remove': return this.remove(...args);
      default: return `Whoops, the following command is unsupported: ${command}.`;
    }
  }

  list() {
    return `You have the following recipes: ${this.cookbook.listRecipes().join(',')}`;
  }

  add(name, ingredients) {
    if (this.cookbook.listRecipes().includes(name)){
      return `recipe for ${name} already exists`;
    }
    else{
      this.cookbook.addRecipe(name, ingredients);
      return `Successfully added the following recipe: ${name}`;
    }
  }

  get(name) {
    const recipeIngredients = this.cookbook.getRecipe(name);
    if(typeof recipeIngredients === 'undefined' || recipeIngredients === null){
      return `recipe for ${name} doesn't exist in the cookbook. unable to retrieve the ingredients`
    }
    else{
      return `The ingredients for ${name} are: ${recipeIngredients}`;
    }
    
  }

  remove(name) {
    this.cookbook.removeRecipe(name);
    return `Successfully removed the following recipe: ${name}`;
  }
}

module.exports = { CookbookCli };
