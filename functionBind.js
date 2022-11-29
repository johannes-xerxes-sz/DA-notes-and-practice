// function bind():
// *******example 1:*******
var alice = {
 name: 'alice',
 shout: function(){
   alert(this.name);
 }
}

var bind = function(fn, contx) {
  // for (var each of b) {
  //   this.bind(b);
  // }
  var fn = this,
  args = arguments.slice(1);

  return function() {
    return fn.apply(contx, args);
  }
};

Function.prototype.bind = function(a) {
  var context = this,
    args = Array.from(arguments);

    return function() {
      context.apply(a, args);
    }
};



var boundShout = bind(alice.shout, alice);
boundShout(); // alerts 'alice'
boundShout = bind(alice.shout, {name: 'bob'});
boundShout(); // alerts 'bob'
var func = function(a, b){ return a + b };
var boundFunc = bind(func, null, 'foo');
var result = boundFunc('bar');
result === 'foobar'; // true
