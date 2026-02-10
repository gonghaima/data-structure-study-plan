
// Solution 2: Chaining (Array of Buckets)
class MyHashMap {
	constructor() {
		this.size = 1009; // a prime number for hash table size
		this.buckets = Array.from({ length: this.size }, () => []);
	}

	_hash(key) {
		return key % this.size;
	}

	put(key, value) {
		const idx = this._hash(key);
		for (let i = 0; i < this.buckets[idx].length; i++) {
			if (this.buckets[idx][i][0] === key) {
				this.buckets[idx][i][1] = value;
				return;
			}
		}
		this.buckets[idx].push([key, value]);
	}

	get(key) {
		const idx = this._hash(key);
		for (const [k, v] of this.buckets[idx]) {
			if (k === key) return v;
		}
		return -1;
	}

	remove(key) {
		const idx = this._hash(key);
		this.buckets[idx] = this.buckets[idx].filter(([k, _]) => k !== key);
	}
}

module.exports = MyHashMap;

