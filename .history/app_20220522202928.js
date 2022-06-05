//Common JS every file is module
//Modules - Encapsulated Code (only share minimum)


const names = require('./4-name');
const sayHi = require('./5-utils');
const data = require('./6-alt-flavour');

sayHi('susan')
sayHi(names.bill)
sayHi(names.chris)



