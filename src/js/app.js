var App = {

	container: undefined,

	init: function(container) {
		this.container = container;
		Loader.init();
		this.initialLoad();
	},

	initialLoad: function() {
		Loader.load([
			{id: 'homepage', src: 'data/homepage.html'}
		], this.loadCompleted.bind(this)); // Binding allows to keep the App scope on callback
	},

	loadCompleted: function() {
		this.container.innerHTML = Loader.getContentById('homepage');
		this.initialTransitionIn();
	},

	initialTransitionIn: function() {
		console.log('initialTransitionIn');
	},

	dispose: function() {
		this.container.innerHTML = '';
	}	

};