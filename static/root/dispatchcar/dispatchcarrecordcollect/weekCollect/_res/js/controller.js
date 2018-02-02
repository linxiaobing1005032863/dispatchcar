var app = angular.module('weekCollect', ['toastr','angularjs-dropdown-multiselect','ipCookie']);
app.controller('weekCollectCtrl',function($scope,cordcollect,toastr){
    $scope.collect = function(){
        var vm = $scope;
        var data={
            year: vm.year,
            month:vm.month,
            week:vm.week,
        };
        cordcollect.weekCollect(data).then(function(response){
            if(response.data.code == 0){
                $scope.summaryLists = response.data.data;
            }
        })
    };
});



