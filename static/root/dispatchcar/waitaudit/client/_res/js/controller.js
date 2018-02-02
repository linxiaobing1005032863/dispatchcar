var app = angular.module('waitclient', ['toastr']);
app.controller('waitclientCtrl', function($scope, waitSer,$stateParams,$state,toastr){
    var infoEdit ={id: $stateParams.id}

    //获取ID
    waitSer.findwaitId(infoEdit).then(function(response){
        if(response.data.code==0){
            $scope.edit = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }

    });

    //素养模块负责人核对意见
    $scope.HeadFun = function(){
        var vm = $scope;
        var data = {
            id:vm.edit.id,
            auditSugg:vm.edit.headModuleIdea,
            problemDes:vm.problemDes,
            problemType:vm.problemType,
            headModuleIdea:vm.headModuleIdea,
            ifFreeze:vm.ifFreeze,
        };
        waitSer.Head(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.dispatchcar.waitaudit.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
});

