var app = angular.module('wrongExport', ['toastr']);
app.controller('wrongExportCtrl', function($scope, wrongSer,$state,toastr){
    /*//获取内部项目编号
    infoSer.allProject().then(function(response){
        if(response.data.code==0){
            $scope.projectName = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });*/
    //添加
    $scope.workersAddFun = function(){
        var vm=$scope;
        var obj = {
            area:vm.area,
            endTime:angular.element('.endTime').val(),
            startTime:angular.element('.startTime').val(),
        };
        window.open(`/dipatchcarwrong/exportExcel${encode(obj,true)}`);
    };

});
function encode(){
    var obj = arguments[0];
    var contacat = false;
    if (arguments[1]) {
        contacat = true;
    }
    var str = '';
    var count = 0;
    for (var name in obj) {
        if (obj[name]&&( typeof obj[name]) != 'function') {
            str += (((contacat && count == 0) ? '?' : '&') + name + '=' + obj[name]);
            count++;
        }
    }
    return encodeURI(str);
}


