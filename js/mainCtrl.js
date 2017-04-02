angular.module('triviaApp').controller('mainCtrl', function($scope,service) {

  $scope.getQuestions = function (){
    service.getQuestions().then(function (response){
      $scope.questions = response;
    })
  }
  $scope.getQuestions();

  $scope.test= "hi"
})
