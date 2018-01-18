var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var currentQueue = {
  	sizeCount: 0, 
  	firstIdx: 0,
  	storage: {},
  	index: 0
  };

  _.extend(currentQueue, queueMethods);

  return currentQueue;

};

var queueMethods = {
	
	createQueueObj: function(value){
	    var queueObj = {};
	    queueObj.value = value;
	    return queueObj;
	},

	enqueue: function(value){
		var freshQItem = this.createQueueObj(value);
		this.storage[this.index] = freshQItem;

		this.index++;
		this.sizeCount++;

		return;
	},

	dequeue: function(){
		if(!this.sizeCount) return;
		var dequeuedValue = this.storage[this.firstIdx].value;
		delete this.storage[this.firstIdx];

		this.firstIdx++;
		this.sizeCount--;

		return dequeuedValue;
	},

	size: function(){
		return this.sizeCount;
	}

};


