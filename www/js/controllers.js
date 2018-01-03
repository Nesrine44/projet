angular.module("starter").controller("Mainctrl",function($scope,$ionicPopup,$timeout){
	$scope.todos=[
	{id:0,title:"Prendre un café avec les amis",description:"avant 13h",done:false},
	{id:1,title:"Réviser pour l'examen",description:"1",done:false},
	{id:2,title:"Prendre médiacament avant repas",description:"",done:false},
	{id:3,title:"Faire Zumba",description:"",done:false},
	{id:4,title:"La poubelle",description:"",done:false},

];

$scope.deleteTodoById=function(id){
	console.log("id of to do delete :",id);
	for(var i=0;i<$scope.todos.length;i++){
		if($scope.todos[i].id===id){
			$scope.todos.splice(i,1);
			return;
		}
		
	}
}



$scope.addTodo=function(){
$scope.newTodo={id:$scope.todos.length,title:"",description:"",done:false};
		var toDoTemplate='<input type="text" ng-model="newTodo.title"></br><textarea ng-model="newTodo.description" rows="5" cols="15"></textarea>';
		
	
    var myPopup = $ionicPopup.show({
    template: '<input type="text" ng-model="newTodo.title"></br><textarea ng-model="newTodo.description" rows="5" cols="15"></textarea>',
    title: 'إضافة',
    subTitle: '',
    scope: $scope,
    buttons: [
	{
       text: 'إلغاء',
	   onTap: function(e) {
	return;
	}
	},
      {
        text: '<b>Ajouter</b>',
        type: 'button-positive',
		  onTap: function(e) {
       
          if (!$scope.newTodo.title) {
       
            e.preventDefault();
          } else {
			  $scope.todos.push($scope.newTodo);
			  console.log($scope.todos);
		  }
		  }
	  }
	  ]
			 

	});
};

$scope.editTodo=function(todo){
$scope.editedTodo=todo;
		var todoTemplate='<input type="text" ng-model="editedTodo.title"></br><textarea ng-model="editedTodo.description" rows="5" cols="15"></textarea>';
		
	
    var myPopup = $ionicPopup.show({
    template: '<input type="text" ng-model="editedTodo.title"></br><textarea ng-model="editedTodo.description" rows="5" cols="15"></textarea>',
    title: 'Modifier',
    subTitle: '',
    scope: $scope,
    buttons: [
	{
       text: 'Annuler',
	   onTap: function(e) {
	return;
	}
	},
      {
        text: '<b>Ok</b>',
        type: 'button-positive',
		  onTap: function(e) {
       
          if (!$scope.editedTodo.title) {
       
            e.preventDefault();
          } else {
			  for(var i=0;i<$scope.todos.length;i++){
				  if($scope.todos[i].id===$scope.editedTodo.id){
					  $scope.todos[i]=$scope.editedTodo;
					  return;
				  }
			  };
            
          }
        }
      }
	
    ]
  });

};

  $scope.myTimer={};
  $scope.myTimer.value=10;
  $scope.myTimerFixed=$scope.myTimer.value;
 
  $scope.radius=100;
var myTimerVariable;
$scope.myCustomTimer=function(){
	$scope.myTimer.value--;
	if($scope.myTimer.value==0){
		complete(true);
		return false;
	}
	
	var myTimerVariable=
	$timeout($scope.myCustomTimer,1000);
}

$scope.start=function(){
	$timeout($scope.myCustomTimer,1000);
}

$scope.stop=function(){
	$scope.myTimer.value;
	$timeout.cancel(myTimerVariable);
complete(false)};
var complete=function(forceFulAbort){
	if(forceFulAbort){
	alert(' Le temps est fini')}else{
		alert('STOP');
	}
	}
	$scope.getStyle=function(){
		var transform='translateY(-50%) translateX(-50%)';
		return{
			'top':'50%',
			'bottom':'auto',
			'left':'50%',
			'transform':transform,
			'-moz-transform':transform,
			'webkit-transform':transform,
			'font-size':$scope.radius/3.5+'px'
			
		};
	};
	
	
 });






