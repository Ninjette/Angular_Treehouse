'use strict';

angular.module("todoListApp")
.controller('mainCtrl', function($scope, dataService){ // , dataService - dependency injection
	$scope.helloWorld = function(){
		console.log('hello there! This is the helloworld controller function, in the mainCtrl');
	};
	$scope.helloConsole = dataService.helloConsole;
	$scope.learningNgChange = function(){
		console.log('an input changed');
	};

	dataService.getTodos(function(response){
		console.log(response.data);
		$scope.todos = response.data;
	});

	$scope.deleteTodo = function(todo, $index){
		dataService.deleteTodo(todo);
		$scope.todos.splice($index, 1)
	}
	$scope.saveTodo = function(todo){
		dataService.saveTodo(todo);
	}
	$scope.addTodo = function(){
		var todo = {name : "This is a new todo"};
		$scope.todos.unshift(todo);
	};
	
})

.controller('coolCtrl', function($scope){
	$scope.whoAmI = function(){
		console.log("hello there, this is coolCtrl function");
	};
	$scope.helloWorld = function(){
		console.log('This is HelloWorld from not mainCtrl');
	};
})

.controller('iAmASibling',function($scope){
	$scope.foobar = 1234;
})