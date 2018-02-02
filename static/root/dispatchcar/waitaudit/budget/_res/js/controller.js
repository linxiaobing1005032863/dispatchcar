var app = angular.module('waitBudget', ['toastr']);
app.controller('waitBudgetCtrl', function($scope, waitSer,$stateParams,$state,toastr){
    var infoEdit ={id: $stateParams.id}

    //获取ID
    waitSer.findwaitId(infoEdit).then(function(response){
        if(response.data.code==0){
            $scope.edit = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }

    });
    $scope.count=function(){
        var vm=$scope;
        var data={
            driver:vm.edit.driver,
        }
        //根据司机姓名获取出车油耗
        waitSer.Oilwear(data).then(function(response){
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
            project:vm.edit.project,
        }
        ////根据项目名称获取立项信息
        waitSer.Approval().then(function(response){
            if(response.data.code == 0){
                $scope.edit.projectApproval = response.data.data;
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    }
    $scope.count3=function(){
        var vm=$scope;
        var data={
            oilCardNumber:vm.edit.oilCardNumber,
        }
        ////根据油卡编号查询油卡余额

        waitSer.Balance(data).then(function(response){
            if(response.data.code == 0){
                $scope.edit.oilCardBalance = response.data.data;
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    }

    //查询所有司机信息和车牌号码
    waitSer.infoDriver().then(function(response){
        if(response.data.code == 0){
            $scope.infoDri = response.data.data
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });

    //查询所有用车陪同人员
    waitSer.infoEntry().then(function(response){
        if(response.data.code == 0){
            $scope.infoEnt = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    ////查找所有项目名称
    waitSer.infoProject().then(function(response){
        if(response.data.code == 0){
            $scope.infoPro = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //查询所有用车陪同人员
    waitSer.infoOil().then(function(response){
        if(response.data.code == 0){
            $scope.Oil = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });



    //预算模块负责人核对意见
    $scope.budgetsuggFun = function(){
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
            auditSugg:vm.edit.budgetModuleIdea,
            problemDes:vm.problemDes,
            problemType:vm.problemType,
            ifFreeze:vm.ifFreeze,
            addOilTime:angular.element('.addOilTime').val(),
            dispatchDate:angular.element('.dispatchDate').val(),
            endTime:angular.element('.endTime').val(),
            startTime:angular.element('.startTime').val(),
        };
        waitSer.budgetSugg(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.dispatchcar.waitaudit.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
    ////客户模块负责人核对意见
    $scope.clientFun = function(){
        var vm = $scope;
        var data = {
            id:vm.edit.id,
            auditSugg:vm.auditSugg,
            problemDes:vm.problemDes,
            problemType:vm.problemType,
            headModuleIdea:vm.headModuleIdea,
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
    //素养模块负责人核对意见
    $scope.HeadFun = function(){
        var vm = $scope;
        var data = {
            id:vm.edit.id,
            auditSugg:vm.auditSugg,
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

