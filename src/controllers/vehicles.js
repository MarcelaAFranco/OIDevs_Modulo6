const dbConn = require("../../banco/dbConn.js");
const Vehicles = require("../dao/vehicles")(dbConn);

// CADASTRAR
exports.createOne = (req, res) => {
	Vehicles.save(req.body, (id, err) => {
	  if(err) {
		res.status(500).json({ msg: err });
	  } else {
		res.status(201).json({ id, ...req.body });
	  }
	});
};

// BUSCAR TODOS
exports.getAll = (req, res) => {
	const callback = (err, data) => {
		if (err)
			return res.status(500).json({msg: err});
		return res.json(data);
	};

	Vehicles.findAll(callback);
};

// BUSCAR UM ESPECÍFICO
exports.getOne = (req, res) => {
	const { id } = req.params;

	const callback = (err, data) => {
		if (err)
			return res.status(500).json( {msg: err});
		else if (data.length)
			return res.status(200).json(data[0]);
		return res.status(404).json({ msg: 'Vehicle not found!'});
	};

	const brandsList = ['audi', 'bmw', 'bentley', 'chevrolet', 'chrysler',
		'dodge', 'fiat', 'ford', 'gmc', 'honda', 'hyundai', 'jaguar',
		'jeep', 'kia', 'land rover', 'maserati', 'mazda', 'mercedes-benz', 'mitsubishi', 'nissan', 'polestar', 'porsche', 'ram', 'rivian',
		'rolls-royce', 'subaru', 'suzuki', 'tesla', 'toyota', 'volkswagen', 'volvo'];
	for(let i = 0; i < brandsList.length; i++) {
		if (String(id).toLowerCase() == brandsList[i]) {
			Vehicles.findByBrand(id, callback);
			return ;
		}
	}
	Vehicles.findById(id, callback);
};

// ALTERAR
exports.changeOne = (req, res) => {
	Vehicles.updatePartial(req.params.id, req.body, (err) => {
		if (err)
			return res.status(500).send({msg: err});
		return res.status(204).send({msg: 'Vehicle info updated!'});
	});
}

// DELETAR
exports.removeOne = (req, res) => {
  const { id } = req.params;

  Vehicles.deleteOne(id, (err, data) => {
    if (!err)
    	return res.status(204).json({msg: 'Vehicle deleted!'});
  });
}
