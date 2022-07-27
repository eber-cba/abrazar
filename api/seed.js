const sequelize = require("./config/index");
const Homeless = require("./models/Homeless");
const Vinculaciones = require("./models/Vinculaciones");
const Comentarios = require("./models/Comentarios");
const Notificaciones = require("./models/Notificaciones");
const Usuarios = require("./models/Usuarios");
const Direcciones = require("./models/Direcciones");

require("./config/association");

const homeless = [
  {
    nombre: "Pedro",
    apellido: "gonzales",
    edad: 34,
    genero: "masculino",
    nacionalidad: "Peru",
    provincia: "lima",
    localidad: "lima",
    necesidadesUrgentes: "ir al dentista,operarse",
    otrasNecesidades: "comida para su mascota",
    sueños: "viajar a españa",
    fotos: "https://www.ppic.org/wp-content/uploads/GettyImages-916886476.jpg",
    apodo: "no tiene",
    trabajo: "changas",
    educacion: "primaria completa",
    problemasDeSalud: "diabetes",
    medicamentos: "paracetamol",
    situacion: "estable",
    telefono: 1245,
    datoExtra: "",
    usuariosId: 1,
  },

  {
    nombre: "Horacio",
    apellido: "quiroga",
    edad: 60,
    genero: "masculino",
    nacionalidad: "Argentina",
    provincia: "buenos aires",
    localidad: "caballito",
    necesidadesUrgentes: "comida,agua",
    otrasNecesidades: "ropa",
    sueños: "conocer a messi",
    fotos: "https://www.mungos.org/app/uploads/2022/04/4Q6A3556a.jpg",
    apodo: "cacho",
    trabajo: "changas",
    educacion: "secundaria completa",
    problemasDeSalud: "psoriasis",
    medicamentos: "fsa12",
    situacion: "estable",
    datoExtra: "vi",
    usuariosId: 1,
  },

  {
    nombre: "claudia",
    apellido: "bracamonte",
    edad: 64,
    genero: "femenino",
    nacionalidad: "argentina",
    provincia: "cordoba",
    localidad: "capital",
    necesidadesUrgentes: "ropa,comida",
    otrasNecesidades: "comida para su mascota",
    sueños: "tener una mascota",
    fotos: "https://static.dw.com/image/55439071_303.jpg",
    apodo: "clau",
    trabajo: "changas",
    educacion: "secundaria incompleta",
    problemasDeSalud: "ataques de panico",
    medicamentos: "valium",
    situacion: "moderado",
    telefono: 124578,
    datoExtra: "ga",
    usuariosId: 2,
  },

  {
    nombre: "Graciela",
    apellido: "lam",
    edad: 34,
    genero: "femenino",
    nacionalidad: "colombia",
    provincia: "oparsm",
    localidad: "capital",
    necesidadesUrgentes: "comida, abrigo",
    otrasNecesidades: "comida para su mascota",
    sueños: "conocer a su mama",
    fotos:
      "https://s3.amazonaws.com/medill.wordpress.offload/WP%20Media%20Folder%20-%20medill-reports-chicago/wp-content/uploads/sites/3/2019/12/Degrane-photo-2-for-Ehrmann-piece.jpg",
    apodo: "flaca",
    trabajo: "no trabaja",
    educacion: "primaria completa",
    problemasDeSalud: "addicones",
    medicamentos: "diazepam",
    situacion: "estable",
    telefono: 1245,
    datoExtra: "",
    usuariosId: 3,
  },

  {
    nombre: "Estaban",
    apellido: "Quito",
    edad: 51,
    genero: "masculino",
    nacionalidad: "argentina",
    provincia: "bariloche",
    localidad: "capital",
    necesidadesUrgentes: "ropa,comida",
    otrasNecesidades: "comida para su mascota",
    sueños: "tener su propia casa",
    fotos: "https://www.greatspeech.co/wp-content/uploads/2018/12/homeless.jpg",
    apodo: "ruso",
    trabajo: "changas",
    educacion: "primaria incompleta",
    problemasDeSalud: "bronquitis",
    medicamentos: "ibuprofeno",
    situacion: "estable",
    telefono: 125678,
    datoExtra: "",
    usuariosId: 3,
  },
];
const vinculaciones = [
  {
    nombre: "laura",
    apellido: "martinez",
    email: "",
    nacionalidad: "argentina",
    provincia: "buenos aires",
    localidad: "gonzales catan",
    ubicacionActual: "cordoba capital",
    barrio: "residencial america",
    telefono: 21512,
    tipoDeRelacion: "hermana",
    edad: 55,
    datoExtra: "",
    homelessId: 1,
  },
  {
    nombre: "diego",
    apellido: "velez",
    email: "diego@gmal.com",
    nacionalidad: "colombia",
    provincia: "cordoba",
    localidad: "",
    ubicacionActual: "cordoba",
    barrio: "lugones",
    telefono: 51221512,
    tipoDeRelacion: "hermano",
    edad: 25,
    datoExtra: "",
    homelessId: 1,
  },
  {
    nombre: "luis",
    apellido: "perez",
    email: "",
    nacionalidad: "argentino",
    provincia: "buenos aires",
    localidad: "capital",
    ubicacionActual: "la rioja",
    barrio: "ssn martin",
    telefono: 66621512,
    tipoDeRelacion: "padre",
    edad: 55,
    datoExtra: "",
    homelessId: 2,
  },
  {
    nombre: "katerine",
    apellido: "alanzetq",
    email: "kat@gami.com",
    nacionalidad: "urugay",
    provincia: "sf",
    localidad: "as",
    ubicacionActual: "cordoba",
    barrio: "",
    telefono: 21512,
    tipoDeRelacion: "nueva cordoba",
    edad: 85,
    datoExtra: "",
    homelessId: 3,
  },
  {
    nombre: "victoria",
    apellido: "basan",
    email: "basan@gmai.com",
    nacionalidad: "argentina",
    provincia: "mar del plata",
    localidad: "capital",
    ubicacionActual: "buenos aires",
    barrio: "caballito",
    telefono: 21512,
    tipoDeRelacion: "conocido",
    edad: 38,
    datoExtra: "",
    homelessId: 5,
  },
  {
    nombre: "sebastian",
    apellido: "manus",
    email: "semanu@gmail.com",
    nacionalidad: "argentina",
    provincia: "cordoba",
    localidad: "capital",
    ubicacionActual: "cordoba",
    barrio: "patricios",
    telefono: 2741512,
    tipoDeRelacion: "amigo",
    edad: 55,
    datoExtra: "",
    homelessId: 5,
  },
  {
    nombre: "luisa",
    apellido: "sagal",
    email: "sga@gmail.com",
    nacionalidad: "italia",
    provincia: "",
    localidad: "",
    ubicacionActual: "cordoba capital",
    barrio: "velez sanfield",
    telefono: 21512,
    tipoDeRelacion: "abuela",
    edad: 99,
    datoExtra: "",
    homelessId: 3,
  },
];

const direcciones = [
  { nombre: "parque sarmiento", deHora: 10, hastaHora: 12, homelessId: 1 },
  { nombre: "buen pastor", deHora: 15, hastaHora: 21, homelessId: 1 },
  { nombre: "plaza san martin", deHora: 6, hastaHora: 21, homelessId: 2 },
  { nombre: "patio olmos", deHora: 9, hastaHora: 21, homelessId: 3 },
  { nombre: "plaza las americas", deHora: 5, hastaHora: 21, homelessId: 4 },
];
const users = [
  {
    name: "eber",
    email: "ebercoronel29@gmail.com",
    password: "1245",
    rol: 1,
  },
  { name: "maria", email: "maria@gmail.com", password: "a1245" },
  { name: "cacho", email: "cacho@gmail.com", password: "1234" },
];

const comentarios = [
  {
    post: "este es mi primer comentario",
    usuariosId: 1,
  },
  {
    post: "este es mi segundo comentario",
    usuariosId: 1,
  },
  {
    post: "este es mi tercer comentario",
    usuariosId: 1,
  },
  {
    post: "este es mi primer comentario",
    usuariosId: 2,
  },
  {
    post: "este es mi segundo comentario",
    usuariosId: 2,
  },
  {
    post: "este es mi tercer comentario",
    usuariosId: 2,
  },
  {
    post: "este es mi primer comentario",
    usuariosId: 3,
  },
  {
    post: "este es mi segundo comentario",
    usuariosId: 3,
  },
];

const notificaciones = [
  {
    postId: 1, // usuarioId 1 tendra 3 notificaciones
  },
  {
    postId: 2, // usuarioId 2 tendra 2 notificaciones
  },
  {
    postId: 3, // usuarioId 3 tendra 2 notificaciones
  },
];

sequelize
  .sync({ force: false })
  .then(() => {
    // Conexión establecida
    console.log("Conexión establecida...");
  })

  .then(() => {
    // Rellenar homeless
    homeless.forEach((homeles) => Homeless.create(homeles));
  })
  .then(() => {
    // Rellenar direcciones
    direcciones.forEach((direccion) => Direcciones.create(direccion));
  })
  .then(() => {
    vinculaciones.forEach((vinculos) => Vinculaciones.create(vinculos));
  })
  .then(() => {
    comentarios.forEach((comentario) => Comentarios.create(comentario));
  })
  .then(() => {
    notificaciones.forEach((notificacion) =>
      Notificaciones.create(notificacion)
    );
  })
  .then(() => {
    Usuarios.bulkCreate(users);
  });
