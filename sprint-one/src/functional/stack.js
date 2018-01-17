var Stack = function() {
  var someInstance = {};
  someInstance.top = null;
  someInstance.sizeCount = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  var inputObj = {};

  // Implement the methods below
  someInstance.push = function(value) {
    inputObj.value = value;
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
