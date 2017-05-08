var App = {

	container: undefined,
	graphics: undefined,

	init: function(container) {
		this.container = container;
		this.initialLoad();
	},

	initialLoad: function() {
		home = new Loader([
			{id: 'homepage', src: 'data/homepage.html'}
		], this.loadCompleted.bind(this));
	},

	loadCompleted: function(results) {
		this.container.innerHTML = results['homepage'];
		this.initialTransitionIn();
	},

	initialTransitionIn: function() {
		this.container.classList.add('fade-in');
	},

	dispose: function() {
		this.container.innerHTML = '';
	}

};