var app = angular.module('wrongEdit', ['toastr']);
app.controller('wrongEditCtrl', function($scope, wrongSer,$stateParams,$state,toastr){
    var infoEdit ={id: $stateParams.id}
    //获取ID
    wrongSer.findwrongId(infoEdit).then(function(response){
        if(response.data.code==0){
            $scope.edit = response.data.data;
        }

    });
    $scope.count=function(){
        var vm=$scope;
        var data={
            driver:vm.edit.driver,
        }
        //根据司机姓名获取出车油耗
        wrongSer.Oilwear(data).then(function(response){
            if(response.data.code == 0){
                $scope.oilWear = response.data.data;
            }
        });
    };

    $scope.count1=function(){
        var vm=$scope;
        var data={
            project:vm.edit.project,
        }
        ////根据项目名称获取立项信息
        wrongSer.Approval().then(function(response){
            if(response.data.code == 0){
                $scope.edit.projectApproval = response.data.data;
            }
        });
    };
    $scope.count3=function(){
        var vm=$scope;
        var data={
            oilCardNumber:vm.edit.oilCardNumber,
        }
        ////根据油卡编号查询油卡余额

        wrongSer.Balance(data).then(function(response){
            if(response.data.code == 0){
                $scope.edit.oilCardBalance = response.data.data;
            }
        });
    };

    //查询所有司机信息和车牌号码
    wrongSer.infoDriver().then(function(response){
        if(response.data.code == 0){
            $scope.infoDri = response.data.data
        }
    });

    //查询所有用车陪同人员
    wrongSer.infoEntry().then(function(response){
        if(response.data.code == 0){
            $scope.infoEnt = response.data.data;
        }
    });
    ////查找所有项目名称
    wrongSer.infoProject().then(function(response){
        if(response.data.code == 0){
            $scope.infoPro = response.data.data;
        }
    });
    //查询所有用车陪同人员
    wrongSer.infoOil().then(function(response){
        if(response.data.code == 0){
            $scope.Oil = response.data.data;
        }
    });
    //查找所有项目组
    wrongSer.department().then(function(response){
        if(response.data.code == 0){
            $scope.infoDepart = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //查询所有所属地区
    wrongSer.area().then(function(response){
        if(response.data.code == 0){
            $scope.areas = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });

    //新增出车记录
    $scope.infoEditFun = function(){
        var vm = $scope;
        var data = {
            id:vm.edit.id,
            accompanyUser :vm.edit.accompanyUser,
            addOil : vm.edit.addOil,
            addOilAmount : vm.edit.addOilAmount,
            aircondition :vm.edit.aircondition,
            carNumber : vm.edit.carNumber,
            dispatchReason : vm.edit.dispatchReason,
            downtown:vm.edit.downtown,
            driver : vm.edit.driver,
            evaluatedriver : vm.edit.evaluatedriver,
            finishTaskAmount : vm.edit.finishTaskAmount,
            group : vm.edit.group,
            mileageOfGPS :vm.edit.mileageOfGPS,
            oilCardBalance : vm.edit.oilCardBalance,
            oilPrice : vm.edit.oilPrice,
            oweOilExplain : vm.edit.oweOilExplain,
            parkCost : vm.edit.parkCost,
            planTaskAmount : vm.edit.planTaskAmount,
            principal:vm.edit.principal,
            project:vm.edit.project,
            projectApproval:vm.edit.projectApproval,
            roadCost:vm.edit.roadCost,
            siesta:vm.edit.siesta,
            startMileage:vm.edit.startMileage,
            userNumber:vm.edit.userNumber,
            area:vm.edit.area,
            acctype:vm.edit.acctype,
            oilCardNumber:vm.edit.oilCardNumber,
            addOilExplain:vm.edit.addOilExplain,
            carUser:vm.edit.carUser,
            endMileage:vm.edit.endMileage,
            overWorkTime:vm.edit.overWorkTime,
            number:vm.edit.number,
            supplementOil:vm.edit.supplementOil,
            supplementFee:vm.edit.supplementFee,
            lessOil:vm.edit.lessOil,
            lessOilFee:vm.edit.lessOilFee,
            shouldAmount:vm.edit.shouldAmount,
            getShouldAmountMoney:vm.edit.getShouldAmountMoney,
            addOilAmountMoney:vm.edit.addOilAmountMoney,
            receipt:vm.edit.receipt,
            carRentalCost:vm.edit.carRentalCost,
            oilWear:vm.edit.oilWear,
            companyDispatch:vm.edit.companyDispatch,
            punishCost:vm.edit.punishCost,
            exceptionAnalyze:vm.edit.exceptionAnalyze,
            addOilTime:angular.element('.addOilTime').val(),
            dispatchDate:angular.element('.dispatchDate').val(),
            endTime:angular.element('.endTime').val(),
            startTime:angular.element('.startTime').val(),
        };
        wrongSer.Editinfo(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.dispatchcar.dipatchcarwrong.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
});
