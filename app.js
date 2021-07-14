const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true },{ useUnifiedTopology: true });


const fruitSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  review: String

});

const Fruit = mongoose.model("Fruit", fruitSchema);
const fruit = new Fruit({

  name: "Apple",
  rating: 7,
  review: "solid fruit"

  
});

fruit.save()
const pineapple = new Fruit({

  name: "Pineapple",
  rating: 10,
  review: "Okay fruit better than nothing"
})


const mango = new Fruit({

  name: "Mango",
  rating: 10,
  review: "King of fruits"
})

mango.save();
pineapple.save();

const personSchema = new mongoose.Schema({

  name: String,
  age: Number,
  favoriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

// const person = new Person({

//   name: "Amy",
//   age: 32,
//   favoriteFruit: pineapple  
// });

Person.updateOne({name: "Amy"}, {favoriteFruit: "Mango"}, function(err){

  if (err){
    console.log(err);
  }else{
    console.log("Document is updated successfully")
  }
})
//person.save();

// const orange = new Fruit({

//   name: "Orange",
//   score: 3,
//   review: "Too sour for me"
// })
// const kiwi = new Fruit({

//   name: "Kiwi",
//   score: 10,
//   review: "The best fruit!"
// })
// const banana = new Fruit({

//   name: "Banana",
//   score: 3,
//   review: "weird texture"
// })



// Fruit.insertMany([kiwi, orange, banana,], function (err){

//   if (err){
//     console.log(err);
//   }else {
//     console.log("Successfully saved all the fruits in fruitsDB")
//   }
// });


Fruit.find(function(err, fruits){
  if (err){
    console.log(err)
  }else {
    var fruitName=""
    fruits.forEach(function(fruit){

      mongoose.Connection.close; 

      fruitName = fruit.name;
      console.log(fruitName);
    }) 
    
    
  }
});
// // Connection URL
// const url = 'mongodb://localhost:27017';

// // Database Name
// const dbName = 'fruitsDB';

// //Create a new MongoClient
// const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

// // Use connect method to connect to the Server
// client.connect(function(err) {
   

//   assert.strictEqual(null, err);
//   console.log("Connected successfully to server");

//   const db = client.db(dbName);
    
//   findDocuments(db, function() {
//     client.close();
//   });
// });

// const insertDocuments = function(db, callback) {
//     // Get the documents collection
//     const collection = db.collection("fruits");
//     // Insert some documents
//     collection.insertMany([
//       {
//           name: "Apple", 
//           score: 8,
//           review: "Great fruit"
//       },
//       {
//         name: "Orange", 
//         score: 6,
//         review: "Kind a sour"  
//       },

//       {
//         name: "Banana", 
//         score: 9,
//         review: "Great stuff"
//       },
//       {
//         name: "Grapes", 
//         score: 9,
//         review: "Great stuff"
//       }
//     ], function(err, result) {
//       assert.strictEqual(err, null);
//       assert.strictEqual(4, result.result.n);
//       assert.strictEqual(4, result.ops.length);
//       console.log("Inserted 4 documents into the collection");
//       callback(result);
//     });
//   }
  const findDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('fruits');
    // Find some documents
    collection.find({}).toArray(function(err, fruits) {
      assert.strictEqual(err, null);
      console.log("Found the following records");
      console.log(fruits)
      callback(fruits);
    });
  };

  // Fruit.updateOne({"_id": "60ee9ce3cb6def02349bc1dd"}, {review: "i dont like it"}, function(err){
  //   if(err){
  //     console.log(err);
  //   }else{
  //     console.log("successfully changed the document")
  //   }
  // })

  // Fruit.deleteMany({"name": "Banana"}, function(err){

  //   if(err){
  //     console.log(err);
  //   }else {
  //     console.log("Required records are deleted");
  //   }
  // })

  // Person.deleteMany({"name": "john"}, function(err){

  //   if (err){
  //     console.log(err);
  //   }else {
  //     console.log("All document matching criteria are deleted")
  //   }
  // })