angular.module('madLibsApp', []).
  controller('userInputController', function($scope) {
    $scope.initVals = [
      'Female Name',
      'Job Title',
      'Tedious Task',
      'Dirty Task',
      'Celebrity', 
      'Useless Skill',
      'Adjective', 
      'Obnoxious Celebrity', 
      'Huge Number']
  });