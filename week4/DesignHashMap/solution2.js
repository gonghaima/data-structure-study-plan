/**
 * Design HashMap - Open Addressing with Linear Probing
 * Uses a single array with linear probing for collision resolution
 */

var MyHashMap = function() {
    this.size = 2000; // Larger size to reduce collisions
    this.keys = new Array(this.size).fill(-1);
    this.values = new Array(this.size).fill(-1);
    this.deleted = new Array(this.size).fill(false);
};

MyHashMap.prototype.hash = function(key) {
    return key % this.size;
};

MyHashMap.prototype.findSlot = function(key) {
    let index = this.hash(key);
    
    while (this.keys[index] !== -1 && this.keys[index] !== key) {
        if (this.deleted[index] && this.keys[index] !== key) {
            // Skip deleted slots unless we're looking for this specific key
            index = (index + 1) % this.size;
            continue;
        }
        index = (index + 1) % this.size;
    }
    
    return index;
};

MyHashMap.prototype.put = function(key, value) {
    const index = this.findSlot(key);
    
    this.keys[index] = key;
    this.values[index] = value;
    this.deleted[index] = false;
};

MyHashMap.prototype.get = function(key) {
    let index = this.hash(key);
    
    while (this.keys[index] !== -1) {
        if (this.keys[index] === key && !this.deleted[index]) {
            return this.values[index];
        }
        index = (index + 1) % this.size;
    }
    
    return -1;
};

MyHashMap.prototype.remove = function(key) {
    let index = this.hash(key);
    
    while (this.keys[index] !== -1) {
        if (this.keys[index] === key && !this.deleted[index]) {
            this.deleted[index] = true;
            return;
        }
        index = (index + 1) % this.size;
    }
};

module.exports = MyHashMap;