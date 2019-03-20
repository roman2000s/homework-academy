var bind = function(fn, context) {
  var bindArgs = [].slice.call(arguments, 2);
  return function() {
    var fnArgs = [].slice.call(arguments);
    return fn.apply(context, bindArgs.concat(fnArgs));
  };
};