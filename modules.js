/* Node is having two modules - 
1. Common JS module - It is an older way of module type, in this we will be using the key word require.
2. ES module - It is the commonly used latest way of module type , in this we will be using the key word import 
In java script in order to import any properties from any class we need to export first and then import. 
export and import can be done between the files , it doesnt have to be a class. For inheritance - it can be done only between class
*/

/* math.js 
-------------------------------------------------------------------
function add(a,b){
  return a+b;
  }

  module.exports = add
*/

/* app.js
----------------------------------------------------------------------
const add = require('./math'){
 console.log(add(10,20)) --> invoking the add function from the math.js file 
}
*/

