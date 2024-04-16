const Controller = require('./Controller.js');
const ConviteService = require('../services/ConviteService.js');

const conviteService = new ConviteService();

class ConviteController extends Controller {

    constructor() {
        super(conviteService);
    }
}

module.exports = ConviteController;