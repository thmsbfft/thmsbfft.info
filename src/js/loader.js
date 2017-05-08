function Loader(manifest, onComplete) {

	/*

		Loads a queue of documents described in a manifest.
		When all items are loaded, calls onComplete(results).
		Once displayed, results can be disposed.

	*/

	this.onComplete = onComplete;
	this.itemsToLoad = Object.keys(manifest).length;
	this.results = [];

	this.loadManifest(manifest);

};

Loader.prototype.loadManifest = function(manifest) {

	for (i in manifest) {
		this.fetch(manifest[i]);
	}
	
}

Loader.prototype.fetch = function(item) {
	
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if(xhr.readyState == 4) {
			if(xhr.status == 200) {
				this.results[item.id] = xhr.responseText;
			}
		}
	}.bind(this);

	xhr.addEventListener('loadend', this.onLoadEnd.bind(this));
	xhr.open('GET', item.src, true);
	xhr.send();

}

Loader.prototype.onLoadEnd = function(e) {

	this.itemsToLoad--;
	if(this.itemsToLoad == 0) {
		this.itemsToLoad = null;
		this.onComplete(this.results);
	}
		
}

Loader.prototype.dispose = function() {

	delete this.onComplete;
	delete this.itemsToLoad;
	delete this.results;

}