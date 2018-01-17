var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var sizeCount = 0;
  someInstance.top = null;

  var inputObj = {};

  // Implement the methods below
  someInstance.push = function(value) {
    inputObj.value = value;
    inputObj.previous = someInstance.top;
    someInstance.top = inputObj;

    // var nextValue;
    // for (var idxKeys in storage){

    //   var nextIdx = parseInt(idxKeys) + 1;
    //   nextValue = storage[nextIdx];
    //   var currentValue = storage[idxKeys];

    //   debugger;

    //   storage[nextIdx] = currentValue;
    // }
    sizeCount++;
    return sizeCount;
  };

  someInstance.pop = function() {
    if(!sizeCount) return;
    var valuePopped = storage[0];
    delete storage[0];
    sizeCount--;
    // Need adjust all others in storage
    return valuePopped;
  };

  someInstance.size = function() {
    return sizeCount;
  };

  return someInstance;
};
