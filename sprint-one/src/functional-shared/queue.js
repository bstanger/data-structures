var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var currentQueue = {};
  currentQueue.sizeCount = 0;
  extend(currentQueue, queueMethods);

  return currentQueue;

};

var queueMethods = {
	// createQueueObj: function(value){
	//     var queueObj = {};
	//     queueObj.value = value;
	//     queueObj.previous = null;
	//     return queueObj;
	// },

	size: function(){
		return this.sizeCount;
	}

};

var extend = function(obj, methods){
	for (var key in methods) {
		obj[key] = methods[key];
	}
};


