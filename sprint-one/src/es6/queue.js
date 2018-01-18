class Queue {
	// Hey! Rewrite in the new style. Your code will wind up looking very similar,
	// but try not not reference your old code in writing the new style.

	constructor() {
		this.sizeCount = 0;
		this.firstIdx = 0;
		this.storage = {};
		this.index = 0;
	}

	createQueueObj(value){
		var queueObj = {};
		queueObj.value = value;
		return queueObj;
	}

	enqueue(value){
		var freshQItem = this.createQueueObj(value);
		this.storage[this.index] = freshQItem;

		this.index++;
		this.sizeCount++;

		return;
	}

	dequeue(){
		if(!this.sizeCount) return;
		var dequeuedValue = this.storage[this.firstIdx].value;
		delete this.storage[this.firstIdx];

		this.firstIdx++;
		this.sizeCount--;

		return dequeuedValue;
	}

	size(){
		return this.sizeCount;
	}
}
