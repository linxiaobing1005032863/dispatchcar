var app = angular.module('waithead', ['toastr']);
app.controller('waitheadCtrl', function($scope, waitSer,$stateParams,$state,toastr){
    var infoEdit ={id: $stateParams.id}

    //获取ID
    waitSer.findwaitId(infoEdit).then(function(response){
        if(response.data.code==0){
            $scope.edit = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }

    });

    ////客户模块负责人核对意见
    $scope.clientFun = function(){
        var vm = $scope;
        var data = {
            id:vm.edit.id,
            auditSugg:vm.auditSugg,
            problemDes:vm.problemDes,
            problemType:vm.problemType,
            headModuleIdea:vm.edit.clientModuleIdea,
            ifFreeze:vm.ifFreeze,
        };
        waitSer.Client(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.dispatchcar.waitaudit.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };

});
