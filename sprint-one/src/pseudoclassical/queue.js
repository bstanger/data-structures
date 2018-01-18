var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.sizeCount = 0, 
  this.firstIdx = 0,
  this.storage = {},
  this.index = 0

};

Queue.prototype.createQueueObj = function(value){
    var queueObj = {};
    queueObj.value = value;
    return queueObj;
};

Queue.prototype.enqueue = function(value){
	var freshQItem = this.createQueueObj(value);
	this.storage[this.index] = freshQItem;

	this.index++;
	this.sizeCount++;

	return;
};

Queue.prototype.dequeue = function(){
	if(!this.sizeCount) return;
	var dequeuedValue = this.storage[this.firstIdx].value;
	delete this.storage[this.firstIdx];

	this.firstIdx++;
	this.sizeCount--;

	return dequeuedValue;
};

Queue.prototype.size = function(){
	return this.sizeCount;
};


