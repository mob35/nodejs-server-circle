'use strict';
var _model = require('../models/model').model,
    controller = require('../controllers/controller'),
    core = require('../../core/controllers/core.server.controller'),
    policy = require('../policy/policy');
module.exports = function (app) {
    var url = '/api/' + _model;
    var urlWithParam = '/api/' + _model + '/:' + _model + 'id';
    // app.route(url).all(core.jwtCheck, policy.isAllowed)
    //     .get(controller.getList)
    //     .post(controller.create);

    // app.route(urlWithParam).all(core.jwtCheck, policy.isAllowed)
    //     .get(controller.read)
    //     .put(controller.update)
    //     .delete(controller.delete);
    app.route('/api/music')
        .get(controller.getList)
        .post(controller.create);

    app.route('/api/music/:musicId')
        .get(controller.read)
        .put(controller.update)
        .delete(controller.delete);

    app.route('/api/music1')
        .get(controller.getList)
        .post(controller.create);

    app.route('/api/music1/:musicId')
        .get(controller.read)
        .put(controller.update)
        .delete(controller.delete);

    app.route('/api/music2')
        .get(controller.getList)
        .post(controller.create);

    app.route('/api/music2/:musicId')
        .get(controller.read)
        .put(controller.update)
        .delete(controller.delete);

    app.route('/api/music3')
        .get(controller.getList)
        .post(controller.create);

    app.route('/api/music3/:musicId')
        .get(controller.read)
        .put(controller.update)
        .delete(controller.delete);

    app.route('/api/music4')
        .get(controller.getList)
        .post(controller.create);

    app.route('/api/music4/:musicId')
        .get(controller.read)
        .put(controller.update)
        .delete(controller.delete);

    app.param(_model + 'id', controller.getByID);
    app.param('musicId', controller.getByID);
}