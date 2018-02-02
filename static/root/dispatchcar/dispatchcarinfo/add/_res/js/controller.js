var app = angular.module('infoAdd', ['toastr','ipCookie']);
app.controller('infoAddCtrl', function($scope, infoSer,$state,toastr,ipCookie,$location){
    $scope.count=function(){
        var vm=$scope;
        var data={
            driver:vm.driver,
        }
        //根据司机姓名获取出车油耗
        infoSer.Oilwear(data).then(function(response){
            if(response.data.code == 0){
                $scope.oilWear = response.data.data;
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    }

    $scope.count1=function(){
        var vm=$scope;
        var data={
            project:vm.project,
        }
        ////根据项目名称获取立项信息
        infoSer.Approval().then(function(response){
            if(response.data.code == 0){
                $scope.projectApproval = response.data.data;
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    }
    $scope.count3=function(){
        var vm=$scope;
        var data={
            oilCardNumber:vm.oilCardNumber,
        }
        ////根据油卡编号查询油卡余额

        infoSer.Balance(data).then(function(response){
            if(response.data.code == 0){
                $scope.oilCardBalance = response.data.data;
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    }

    //查询所有司机信息和车牌号码
    infoSer.infoDriver().then(function(response){
        if(response.data.code == 0){
            $scope.infoDri = response.data.data
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });

    //查询所有用车陪同人员
    infoSer.infoEntry().then(function(response){
        if(response.data.code == 0){
            $scope.infoEnt = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //查找所有项目组
    infoSer.department().then(function(response){
        if(response.data.code == 0){
            $scope.infoDepart = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //查询所有所属地区
    infoSer.area().then(function(response){
        if(response.data.code == 0){
            $scope.areas = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    ////查找所有项目名称
    infoSer.infoProject().then(function(response){
        if(response.data.code == 0){
            $scope.infoPro = response.data.data;
        }
    });
    //查询所有用车陪同人员
    infoSer.infoOil().then(function(response){
        if(response.data.code == 0){
            $scope.Oil = response.data.data;
        }
    });

    //新增出车记录
    $scope.infoAddFun = function(){
        var vm = $scope;
        var data = {
            accompanyUser :vm.accompanyUser,
            addOil : vm.addOil,
            addOilAmount : vm.addOilAmount,
            aircondition :vm.aircondition,
            carNumber : vm.carNumber,
            dispatchReason : vm.dispatchReason,
            downtown:vm.downtown,
            driver : vm.driver,
            evaluatedriver : vm.evaluatedriver,
            finishTaskAmount : vm.finishTaskAmount,
            group : vm.group,
            mileageOfGPS :vm.mileageOfGPS,
            oilCardBalance : vm.oilCardBalance,
            oilPrice : vm.oilPrice,
            oweOilExplain : vm.oweOilExplain,
            parkCost : vm.parkCost,
            planTaskAmount : vm.planTaskAmount,
            principal:vm.principal,
            project:vm.project,
            projectApproval:vm.projectApproval,
            roadCost:vm.roadCost,
            siesta:vm.siesta,
            startMileage:vm.startMileage,
            userNumber:vm.userNumber,
            area:vm.area,
            acctype:vm.acctype,
            oilCardNumber:vm.oilCardNumber,
            addOilExplain:vm.addOilExplain,
            carUser:vm.carUser,
            endMileage:vm.endMileage,
            overWorkTime:vm.overWorkTime,
            number:vm.number,
            supplementOil:vm.supplementOil,
            supplementFee:vm.supplementFee,
            lessOil:vm.lessOil,
            lessOilFee:vm.lessOilFee,
             shouldAmount:vm.shouldAmount,
            getShouldAmountMoney:vm.getShouldAmountMoney,
            addOilAmountMoney:vm.addOilAmountMoney,
            receipt:vm.receipt,
             carRentalCost:vm.carRentalCost,
            oilWear:vm.oilWear,
            addOilTime:angular.element('.addOilTime').val(),
            dispatchDate:angular.element('.dispatchDate').val(),
            endTime:angular.element('.endTime').val(),
            startTime:angular.element('.startTime').val(),
        };

        infoSer.Addinfo(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.dispatchcar.dispatchcarinfo.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }
        });

    };
});





