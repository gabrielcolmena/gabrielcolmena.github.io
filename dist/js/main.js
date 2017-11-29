'use strict';

//Initializing angular app
const app = angular.module('gabrielcolmena', ['ngRoute']);

//Setting endpoints
app.config(($routeProvider) => {

	$routeProvider
		.when('/', {
			templateUrl: './views/main.html',
			controller: 'mainController'
		});
});

app.controller('initController', function($scope, $http) {
	console.log('Welcome');

	$scope.values = {
		header: ['Inicio', 'Acerca de mi', 'Contacto', 'Portafolio', 'CV']
	}
});

app.controller('mainController', function($scope, $http) {
	console.log('Controller:main');
	let container = document.querySelector('#main-container');
	container.classList.add('screen-size', 'flex-v', 'space-between', 'background');
	//container.style.background = 'url(./dist/img/background.jpg)';
});
