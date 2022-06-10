const Homeless = require("../models/Homeless")
const Familiares = require("../models/Familiares")
 
Homeless.hasMany(Familiares,{as:"familiares",foreingKey:"familiaresId"})
Familiares.belongsTo(Homeless,{as:"homeless"})