const Homeless = require("../models/Homeless");
const Vinculaciones = require("../models/Vinculaciones");
const Direcciones = require("../models/Direcciones");
const Comentarios = require("../models/Comentarios");
const Usuarios = require("../models/Usuarios");
const Notificaciones = require("../models/Notificaciones")
 // de uno a muchos(un usuario puede tener muchas homeless)
Usuarios.hasMany(Homeless, { as: "homeless", foreignKey: "usuariosId" });

Homeless.belongsTo(Usuarios, { as: "usuarios" });

// de uno a muchos (un homeless puede tener muchos vinculaciones)
Homeless.hasMany(Vinculaciones, {
  as: "vinculacion",
  foreignKey: "homelessId",
});
Vinculaciones.belongsTo(Homeless, { as: "homeless" });

// de uno a muchos(un homeless puede tener muchas direcciones)
Homeless.hasMany(Direcciones, { as: "direccion", foreignKey: "homelessId" });
Direcciones.belongsTo(Homeless, { as: "homeless" });

// de uno a muchos(un usuario puede tener muchos posts)
Usuarios.hasMany(Comentarios, { as: "comentario", foreignKey: "usuariosId" });
Comentarios.belongsTo(Usuarios, { as: "usuarios" });

// de uno a muchos(un post puede tener muchas notificaciones)

Comentarios.hasMany(Notificaciones, { as: "notificacion", foreignKey: "postId" });
Notificaciones.belongsTo(Comentarios, { as: "comentario" });