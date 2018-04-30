const { db, Vegetable, Gardener, Plot } = require('./model');


db.sync( {force: true}).then(function(value){
  console.log("successful connection")
}).catch(err => {
  console.log(err);
}).finally(() => {
  //db.close()
}).then(()=>{



Vegetable.create({ name: "Carrot", color: "Orange", planted_on: Date.now() })
.then(value => {
  console.log('created');
}).catch(error => {
  console.error(error)
})

Vegetable.create({ name: "Spinich", color: "brown", planted_on: Date.now() })
.then(value => {
  console.log('created');
}).catch(error => {
  console.error(error)
})

Vegetable.create({ name: "Lettuce", color: "green", planted_on: Date.now() })
.then(value => {
  console.log('created');
}).catch(error => {
  console.error(error)
})

const gardener1 = Gardener.create({ name: "Johny Appleseed", age: 35 })
const plot1 = gardener1.then( gardener => {
  return Plot.create({ GardenerId: gardener.id, size: 4, shaded: false})
})

const plot2 = plot1.then((plot) => {
  console.log('Plot Created: ', plot)
})

});







db.authenticate().then(() => {
  console.log('connected to the database');
})
