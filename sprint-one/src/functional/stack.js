var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var sizeCount = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    sizeCount++;
    storage[0] = value;
    // Need adjust all others in storage
    
    // var nextValue;
    // for (var idxKeys in storage){
    //   console.log('looking at index ' , idxKeys);
    //   console.log('with value ' , storage[idxKeys]);
    //   nextValue = storage[idxKeys++];
    //   console.log('nextValue ' , nextValue);
    //   storage[idxKeys++] = storage[idxKeys];
    //   console.log('updated value ' , storage[idxKeys]);
    // }
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
