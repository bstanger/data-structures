var Stack = function() {
  var someInstance = {};
  someInstance.topIdx = -1;
  someInstance.sizeCount = 0;

  // Use an object with numeric keys to store values
  // Note: time permitting, I should go back and use the numeric keys.  I misunderstood that before.
  var storage = {};
  var index = 0;

  var newInputObj = function(value){
    var output = new Object();
    output.value = value;
    output.previousIdx = null;
    return output;
  };

  someInstance.push = function(value) {
    var inputObj = new newInputObj(value);
    inputObj.previousIdx = someInstance.topIdx;
    someInstance.topIdx = index;

    storage[index] = inputObj;

    index++;
    someInstance.sizeCount++;

    return someInstance.sizeCount;
  };

  someInstance.pop = function() {
    if(!someInstance.sizeCount) return;
    var topObj = storage[someInstance.topIdx];
    someInstance.topIdx = topObj.previousIdx;
    someInstance.sizeCount--;
    return topObj.value;
  };

  someInstance.size = function() {
    return someInstance.sizeCount;
  };

  return someInstance;
};
