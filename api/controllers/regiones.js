const axios = require("axios");

class RegionesController {
  static paises(req, res) {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => res.send(console.log("req.back",res.data)))
      .catch((err) => console.log(err));
  }

  static provincias(req, res) {
    const idPais = req.params.idPais;
    axios
      .get(
        `https://sandbox.actividades.techo.org/ajax/paises/${idPais}/provincias`
      )
      .then((r) => JSON.parse(r.text))
      .then((provincias) => res.status(200).send(provincias))
      .catch((err) => console.log(err));
  }

  static localidades(req, res) {
    const idPais = req.params.idPais;
    const idProv = req.params.idProv;
    axios
      .get(
        `https://sandbox.actividades.techo.org/ajax/paises/${idPais}/provincias/${idProv}/localidades`
      )
      .then((r) => JSON.parse(r.text))
      .then((localidades) => res.status(200).send(localidades))
      .catch((err) => console.log(err));
  }
}

module.exports = RegionesController;
