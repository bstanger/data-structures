var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var currentStack = Object.create(stackMethods);

  currentStack.sizeCount = 0, 
  currentStack.topIdx = -1, // Might not work for last item popped?
  currentStack.storage = {},
  currentStack.index = 0

  return currentStack;

};

var stackMethods = {

	newInputObj: function(value){
		var newObj = {};
		newObj.value = value;
    	newObj.previousIdx = null;
    	return newObj;
	},

	push: function(value){
		var newInputObj = this.newInputObj(value);
	    newInputObj.previousIdx = this.topIdx;
	    this.topIdx = this.index;

	    this.storage[this.index] = newInputObj;

	    this.index++;
	    this.sizeCount++;

	    return this.sizeCount;
	},

	pop: function(){
		if(!this.sizeCount) return;
	    var topObj = this.storage[this.topIdx];
	    this.topIdx = topObj.previousIdx;
	    this.sizeCount--;
	    return topObj.value;
	},

	size: function() {
		return this.sizeCount;
	}

};


