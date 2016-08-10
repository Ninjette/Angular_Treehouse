angular.module("todoListApp")
.directive('helloWorld',function(){
	return {
		template: "This is helloWolrd directive",
		restrict: 'A'
	}
})
//angular.module("todoListApp", [])
//.controller('mainCtrl', function($scope,dataService){
//  $scope.helloConsole = dataService.helloConsole;
//  $scope.addTodo = function(){
//	  var todo = {
//	  	name : "This is new"
//	  };
//	  $scope.todos.push(todo);
//  };
//  dataService.getTodos(function(response){
//      $scope.todos = response.data;
//  });
//	$scope.deleteTodo = function(todo,index){
//		dataService.deleteTodo(todo);
//		$scope.todos.splice(index,1);
//	};
//	$scope.saveTodo = function(todo,index){
//		dataService.saveTodo(todo);
//	};
//})
//.service("dataService",function($http){
//  this.helloConsole = function(){
//	  
//  };
//  
//  this.getTodos = function(callback){
//    $http.get('mock/todos.json').then(callback);
//  };
//  
//  this.deleteTodo = function(todo){
//	  console.log("the " + todo.name + " has been deleted");
//  };
//  this.saveTodo = function(todo){
//	  console.log("the " + todo.name + " has been saved");
//  };
//});