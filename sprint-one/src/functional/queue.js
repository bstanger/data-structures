var Queue = function() {
  var someInstance = {};
  someInstance.sizeCount = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    someInstance.sizeCount++;
  };

  someInstance.dequeue = function() {
    if(!someInstance.sizeCount) return;
    someInstance.sizeCount--;
  };

  someInstance.size = function() {
    return someInstance.sizeCount;
  };

  return someInstance;
};
