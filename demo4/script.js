// This script will run against whatever database the mongo shell running it is connected to

// The documents we are working with
var chicken_soup_recipe = {
    '_id' : 'chicken_noodle_soup',
    'name': 'Chicken Noodle Soup',
    'main_ingredient': 'chicken',
    'ingredients' : ['chicken', 'noodles']
    'calories' : 180,
    'contributor' : {
        'name' : 'Grandma Ople',
        'id' : 'foodpusher65'
    }
}

var apple_pie_recipe = {
    '_id' : 'apple_pie',
    'name' : 'Apple Pie',
    'main_ingredient' : 'apple',
    'ingredients' : ['sugar', 'butter', 'apples', 'crust']
    'calories' : 230,
    'contributor' : {
        'name' : 'Joe American',
        'id' : 'joea123'
    }
}

// Insert our two recipes
db.recipes.insert(chicken_soup_recipe)
db.recipes.insert(apple_pie_recipe)

// List a collection's indexes
db.recipes.getIndexes()
db.recipes.getIndexKeys()

// '_id' has an index by default
db.recipes.find({ '_id' : 'apple_pie' }).explain()

// Create an index if one does not exist
db.recipes.createIndex({ 'main_ingredient' : 1 });

// The client remembers the index and raises no errors
db.recipes.ensureIndex({ 'main_ingredient' : 1 });

// Hint to use '_id' even though an index on 'main_ingredient' exists
db.recipes.find({ '_id' : 'chicken_noodle_soup', 'main_ingredient' : 'chicken' }).hint({ '_id' : 1 }).explain()

// Arrays of values (multikey indexes)
db.recipes.find({ 'ingredients' : 'sugar' }).explain()
db.recipes.ensureIndex({ 'ingredients' : 1 })
db.recipes.find({ 'ingredients' : 'sugar' }).explain()

// Multiple fields (compound key indexes)
db.recipes.find({ 'main_ingredient' : 'chicken', 'calories' : { '$lt' : 200 } }).explain()
db.recipes.ensureIndex({
    'main_ingredient' : 1,
    'calories' : -1
});
db.recipes.find({ 'main_ingredient' : 'chicken', 'calories' : { '$lt' : 200 } }).explain()
