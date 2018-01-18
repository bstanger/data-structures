class Stack {
	// Hey! Rewrite in the new style. Your code will wind up looking very similar,
	// but try not not reference your old code in writing the new style.

	constructor() {
		this.sizeCount = 0;
		this.topIdx = -1; // Might not work for last item popped?
		this.storage = {};
		this.index = 0;
	}

	newInputObj(value){
		var newObj = {};
		newObj.value = value;
    	newObj.previousIdx = null;
    	return newObj;
	}

	push(value){
		var newInputObj = this.newInputObj(value);
	    newInputObj.previousIdx = this.topIdx;
	    this.topIdx = this.index;

	    this.storage[this.index] = newInputObj;

	    this.index++;
	    this.sizeCount++;

	    return this.sizeCount;
	}

	pop(){
		if(!this.sizeCount) return;
	    var topObj = this.storage[this.topIdx];
	    this.topIdx = topObj.previousIdx;
	    this.sizeCount--;
	    return topObj.value;
	}

	size() {
		return this.sizeCount;
	}

}