var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.sizeCount = 0, 
  this.topIdx = -1, // Might not work for last item popped?
  this.storage = {},
  this.index = 0

};

Stack.prototype.newInputObj = function(value){
	var newObj = {};
	newObj.value = value;
	newObj.previousIdx = null;
	return newObj;
};

Stack.prototype.push = function(value){
	var newInputObj = this.newInputObj(value);
    newInputObj.previousIdx = this.topIdx;
    this.topIdx = this.index;

    this.storage[this.index] = newInputObj;

    this.index++;
    this.sizeCount++;

    return this.sizeCount;
};

Stack.prototype.pop = function(){
	if(!this.sizeCount) return;
    var topObj = this.storage[this.topIdx];
    this.topIdx = topObj.previousIdx;
    this.sizeCount--;
    return topObj.value;
};

Stack.prototype.size = function() {
	return this.sizeCount;
};