const Controller = require('./Controller.js');
const ConvidadoService = require('../services/ConvidadoService.js');

const convidadoService = new ConvidadoService();

class ConvidadoController extends Controller {

    constructor() {
        super(convidadoService);
    }
}

module.exports = ConvidadoController;