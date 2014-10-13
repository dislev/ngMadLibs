angular.module('madLibsApp', [])
  .controller('userInputController', function($scope) {
    $scope.placeholder = {
      femaleName: 'Female Name',
      jobTitle: 'Job Title',
      tediousTask: 'Tedious Task',
      dirtyTask: 'Dirty Task',
      celebrity: 'Celebrity', 
      uselessSkill: 'Useless Skill',
      adjective: 'Adjective', 
      obnoxiousCelebrity: 'Obnoxious Celebrity', 
      hugeNumber: 'Huge Number'}

    $scope.resetVals = $scope.data;

    $scope.data = {
      femaleName: '',
      jobTitle: '',
      tediousTask: '',
      dirtyTask: '',
      celebrity: '', 
      uselessSkill: '',
      adjective: '', 
      obnoxiousCelebrity: '', 
      hugeNumber: null}

      $scope.reset = function(){
        $scope.submitted = false;
        $scope.data =  angular.copy($scope.resetVals);
      }
  })
  .controller('FormCtrl', ['$scope', function($scope) {
    $scope.submit = function() {
      $scope.madLibInputForm.$setPristine();
    }
}]);