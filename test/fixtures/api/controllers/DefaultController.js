'use strict'
require('@fabrix/fabrix')
const Boom = require('boom')

const {FabrixController} = require('@fabrix/fabrix/dist/common')
/**
   * @module DefaultController
   *
   * @description Default Controller included with a new fabrix app
   * @see {@link http://fabrix.app/doc/api/controllers}
   * @this fabrixApp
   */
module.exports = class DefaultController extends FabrixController {
  notFound(request, res) {
    return Boom.notFound()
  }
  serverError(request) {
    return Boom.serverError()
  }
  info(request) {
    return this.app.services.DefaultService.getApplicationInfo()
  }
  policySuccess(request) {
    return this.app.services.DefaultService.getApplicationInfo()
  }
  policyFail(req) {
    return this.app.services.DefaultService.getApplicationInfo()
  }
  policyIntercept(request) {
    return this.app.services.DefaultService.getApplicationInfo()
  }
  echo(request) {
    return request.body
  }
}
