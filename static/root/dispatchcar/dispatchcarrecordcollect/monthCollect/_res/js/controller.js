var app = angular.module('monthCollect', ['toastr','angularjs-dropdown-multiselect','ipCookie']);
app.controller('monthCollectCtrl',function($scope,cordcollect,toastr){
    $scope.collect = function(){
        var vm = $scope;
        var data={
            year:vm.year,
            month:vm.month,
        };
        cordcollect.monthCollect(data).then(function(response){
            if(response.data.code == 0){
                $scope.summaryLists = response.data.data;
            }
        })
    };
});



