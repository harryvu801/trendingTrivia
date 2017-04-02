angular.module('triviaApp').service('service', function($http) {

  var baseUrl = 'https://practiceapi.devmountain.com/api/trivia/questions'

  this.getQuestions = function (){
    return $http.get(baseUrl).then(function(response) {
      return response.data
    })
  }

})
