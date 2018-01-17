var Queue = function() {
  var someInstance = {};
  someInstance.sizeCount = 0;
  someInstance.firstIdx = 0;

  // Use an object with numeric keys to store values
  var storage = {};
  var index = 0;


  var QueueItem = function(value){
    var itemObject = {};
    itemObject.value = value;
    itemObject.previous = null;
    return itemObject;
  }

  someInstance.enqueue = function(value) {
    var freshItem = new QueueItem(value);
    freshItem.previous = someInstance.last;
    storage[index] = freshItem;

    index++;
    someInstance.sizeCount++;

    return; // Something else?
  };

  someInstance.dequeue = function() {
    if(!someInstance.sizeCount) return;
    var firstInQueue = storage[someInstance.firstIdx].value;
    delete storage[someInstance.firstIdx];

    someInstance.firstIdx++;
    someInstance.sizeCount--;
    
    return firstInQueue;
  };

  someInstance.size = function() {
    return someInstance.sizeCount;
  };

  return someInstance;
};
