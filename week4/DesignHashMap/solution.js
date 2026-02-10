

// Solution 1: Direct Addressing (Array)
var MyHashMap = function() {
	this.size = 1000001; // constraint: 0 <= key <= 10^6
	this.arr = new Array(this.size).fill(-1);
};

MyHashMap.prototype.put = function(key, value) {
	this.arr[key] = value;
};

MyHashMap.prototype.get = function(key) {
	return this.arr[key];
};

MyHashMap.prototype.remove = function(key) {
	this.arr[key] = -1;
};

module.exports = MyHashMap;