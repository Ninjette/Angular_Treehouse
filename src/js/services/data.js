'use strict'
//dependency injection. This is our server. Server can give methods to controllers, to directives and even to another services.
angular.module("todoListApp")

.service('dataService', function($http){
	this.helloConsole = function(){
		console.log('This is the hello console service!');
	};

	//this referse to current service
	this.getTodos = function(callback){
		$http.get('js/todos.json')
			.then(callback)
	}
	this.deleteTodo = function(todo){
		console.log(' The '+ todo.name + " todo has been deleted.")
		//other logic
	}
	this.saveTodo = function(todo){
		console.log(' The ' + todo.name + "todo has been saved!");
		//other logic;
	}
});
