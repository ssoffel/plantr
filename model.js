const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/plantr', {
  logging: false
});

const Gardener = db.define('gardener', {
 name: {
   type: Sequelize.STRING,
   allowNUll: false
 },
 age: {
   type: Sequelize.INTEGER,
   allowNull: false,
  }
});

const Plot = db.define('plot', {
 size: {
   type: Sequelize.INTEGER,
   allowNUll: false
 },
 shaded: {
   type: Sequelize.BOOLEAN,
   allowNull: false,
  }
});

const Vegetable = db.define('vegetable', {
 name: {
   type: Sequelize.STRING,
   allowNUll: false
 },
 color: {
   type: Sequelize.STRING,
   allowNull: false,
 },
 planted_on: {
   type: Sequelize.DATE,
   allowNull: false,
  }
});

Plot.belongsTo(Gardener, { as: 'Gardener'});

Plot.belongsToMany(Vegetable, {through: 'vegetable-plot'});
Vegetable.belongsToMany(Plot, {through: 'vegetble-plot'});

//Gardener.belongsTo(Vegetable, {as: 'favorite_vegetable'});





module.exports = {
  db, Gardener, Vegetable, Plot
}
