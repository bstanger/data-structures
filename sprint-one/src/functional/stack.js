var Stack = function() {
  var someInstance = {};
  someInstance.top = null;
  someInstance.sizeCount = 0;

  // Use an object with numeric keys to store values
  var inputObj = {};

  var newInputObj = function(value){
    var output = new Object();
    output.value = value;
    output.previous = null;
    return output;
  };

  someInstance.push = function(value) {
    var inputObj = new newInputObj(value);
    inputObj.previous = someInstance.top;
    someInstance.top = inputObj;
    someInstance.sizeCount++;
    return someInstance.sizeCount;
  };

  someInstance.pop = function() {
    if(!someInstance.sizeCount) return;
    var removed = someInstance.top.value;
    someInstance.top = someInstance.top.previous;
    someInstance.sizeCount--;
    return removed;
  };

  someInstance.size = function() {
    return someInstance.sizeCount;
  };

  return someInstance;
};
