'use strict'
require('@fabrix/fabrix')
const {FabrixController} = require('@fabrix/fabrix/dist/common')

module.exports = class ViewController extends FabrixController{
  helloWorld (request, reply) {
    // res.render('index.pug', {
    //   title: 'Test',
    //   message: 'helloWorld'
    // })
  }
}
