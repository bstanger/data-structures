var Stack = function() {
  var someInstance = {};
  someInstance.top = null;

  // Use an object with numeric keys to store values
  var storage = {};
  var sizeCount = 0;

  var inputObj = {};

  // Implement the methods below
  someInstance.push = function(value) {
    inputObj.value = value;
    inputObj.previous = someInstance.top;
    someInstance.top = inputObj;
    sizeCount++;
    return sizeCount;
  };

  someInstance.pop = function() {
    if(!sizeCount) return;
    var removed = someInstance.top.value;
    someInstance.top = someInstance.top.previous;
    sizeCount--;
    return removed;
  };

  someInstance.size = function() {
    return sizeCount;
  };

  return someInstance;
};
