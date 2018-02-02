var app = angular.module('finPrincipalsugg', ['toastr']);
app.controller('finPrincipalsuggCtrl', function($scope, finSer,$stateParams,$state,toastr){
    var infoAudit ={id: $stateParams.id}
    //获取ID
    finSer.findfinId(infoAudit).then(function(response){
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
        finSer.Oilwear(data).then(function(response){
            if(response.data.code == 0){
                $scope.oilWear = response.data.data;
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };

    $scope.count1=function(){
        var vm=$scope;
        var data={
            project:vm.edit.project,
        }
        ////根据项目名称获取立项信息
        finSer.Approval().then(function(response){
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

        finSer.Balance(data).then(function(response){
            if(response.data.code == 0){
                $scope.edit.oilCardBalance = response.data.data;
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    }

    //查询所有司机信息和车牌号码
    finSer.infoDriver().then(function(response){
        if(response.data.code == 0){
            $scope.infoDri = response.data.data
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });

    //查询所有用车陪同人员
    finSer.infoEntry().then(function(response){
        if(response.data.code == 0){
            $scope.infoEnt = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    ////查找所有项目名称
    finSer.infoProject().then(function(response){
        if(response.data.code == 0){
            $scope.infoPro = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //查询所有用车陪同人员
    finSer.infoOil().then(function(response){
        if(response.data.code == 0){
            $scope.Oil = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
$scope.infoEditFun = function() {
    var vm = $scope;
    var data = {
             id:vm.edit.id,
             number:vm.edit.number,
             driver:vm.edit.driver,
             companyDispatch:vm.edit.companyDispatch,
             carUser:vm.edit.carUser,
             userNumber:vm.edit.userNumber,
             area:vm.edit.area,
             group:vm.edit.group,
             projectApproval:vm.edit.projectApproval,
             project:vm.edit.project,
             acctype:vm.edit.acctype,
             dispatchDate:vm.edit.dispatchDate,
             siesta:vm.edit.siesta,
             dispatchReason:vm.edit.dispatchReason,
             accompanyUser:vm.edit.accompanyUser,
             carNumber:vm.edit.carNumber,
             oilCardNumber:vm.edit.oilCardNumber,
             aircondition:vm.edit.aircondition,
             downtown:vm.edit.downtown,
             addOil:vm.edit.addOil,
             addOilExplain:vm.edit.addOilExplain,
             supplementOil:vm.edit.supplementOil,
             supplementFee:vm.edit.supplementFee,
			oweOilExplain:vm.edit.oweOilExplain,
			lessOil:vm.edit.lessOil,
			lessOilFee:vm.edit.lessOilFee,
			addOilTime:vm.edit.addOilTime,
			shouldAmount:vm.edit.shouldAmount,
			getShouldAmountMoney:vm.edit.getShouldAmountMoney,
			addOilAmount:vm.edit.addOilAmount,
			addOilAmountMoney:vm.edit.addOilAmountMoney,
			oilCardBalance:vm.edit.oilCardBalance,
			oilPrice:vm.edit.oilPrice,
			principal:vm.edit.principal,
			planTaskAmount:vm.edit.planTaskAmount,
			finishTaskAmount:vm.edit.finishTaskAmount,
			startMileage:vm.edit.startMileage,
			endMileage:vm.edit.endMileage,
			mileageSubtract:vm.edit.mileageSubtract,
			mileageOfGPS:vm.edit.mileageOfGPS,
			parkCost:vm.edit.parkCost,
			roadCost:vm.edit.roadCost,
			mealCost:vm.edit.mealCost,
			evaluatedriver:vm.edit.evaluatedriver,
			receipt:vm.edit.receipt,
			projectCharge:vm.edit.projectCharge,
			projectChargeIdea:vm.edit.projectChargeIdea,
			ifPass:vm.edit.ifPass,
			clientModule:vm.edit.clientModule,
			clientModuleIdea:vm.edit.clientModuleIdea,
			clientDate:vm.edit.clientDate,
			ifFreeze:vm.edit.ifFreeze,
			headModule:vm.edit.headModule,
			headModuleIdea:vm.edit.headModuleIdea,
			headDate:vm.edit.headDate,
			budgetAuditUser:vm.edit.budgetAuditUser,
			budgetModuleIdea:vm.edit.budgetModuleIdea,
			budgetAuditTime:vm.edit.budgetAuditTime,
			accountModule:vm.edit.accountModule,
			accountModuleIdea:vm.edit.accountModuleIdea,
			accountDate:vm.edit.accountDate,
			isCorrect:vm.edit.isCorrect,
			sender:vm.edit.sender,
			sendDate:vm.edit.sendDate,
			ifSendArchiveAL:vm.edit.ifSendArchiveAL,
			ifSendReimbursementAl:vm.edit.ifSendReimbursementAl,
			totalParking:vm.edit.totalParking,
			totalReceipts:vm.edit.totalReceipts,
			ifSendAddOilReceipts:vm.edit.ifSendAddOilReceipts,
			receiver:vm.receiver,
			receiveDate:vm.edit.receiveDate,
			receiveReceipts:vm.receiveReceipts,
			moneyModule:vm.edit.moneyModule,
			moneyModuleIdea:vm.edit.moneyModuleIdea,
			moneyDate:vm.edit.moneyDate,
			expectPayDate:vm.edit.expectPayDate,
			paymentSchedule:vm.edit.paymentSchedule,
			ifPayed:vm.edit.ifPayed,
			carRentalCost:vm.edit.carRentalCost,
			status:vm.edit.status,
			principalAuditTime:vm.edit.principalAuditTime,
			findType:vm.edit.findType,
			overWorkCost:vm.edit.overWorkCost,
			  problemType:vm.problemType,
             problemDes:vm.problemDes,
             auditSugg:vm.auditSugg,
             oilWear:vm.oilWear,
             overWorkTime:vm.edit.overWorkTime,
             dispatchDate:angular.element('.dispatchDate').val(),
	        startTime:angular.element('.startTime').val(),
	        endTime:angular.element('.endTime').val(),
	        addOilTime:angular.element('.addOilTime').val(),
	        clientDate:angular.element('.clientDate').val(),
	        headDate:angular.element('.headDate').val(),
	        budgetAuditTime:angular.element('.budgetAuditTime').val(),
	        accountDate:angular.element('.accountDate').val(),
	        receiveDate:angular.element('.receiveDate').val(),
	        moneyDate:angular.element('.moneyDate').val(),
	        expectPayDate:angular.element('.expectPayDate').val(),
	        principalAuditTime:angular.element('.principalAuditTime').val(),
      
    };
    finSer.finanSugg(data).then(function (response) {
        if(response.data.code == 0){
            $state.go('root.dispatchcar.finance.list[12]');
            toastr.success( "审核成功", '温馨提示');
        }else {
            toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
});

//自定义过滤器
app.filter('addCover',function(){
    return function(val){
        var result;
        switch(val){
            case "MAIN":
                result = "主营业务成本";
                break;
            case "MARKET":
                result = "市场费";
                break;
            case "TRAINING":
                result = "培训费";
                break;
            case true:
                result = "是";
                break;
            case false:
                result = "否";
                break;
        }
        return result;
    }

});
app.filter('driver',function(){
    return function(val){
        var result;
        switch(val){
            case "GOOD":
                result = "优秀";
                break;
            case "WELL":
                result = "良好";
                break;
            case "BAD":
                result = "恶劣 ";
                break;
            case true:
                result = "是";
                break;
            case false:
                result = "否";
                break;
        }
        return result;
    }

});
app.filter('staTus',function(){
    return function(val){
        var result;
        switch(val){
            case "THAW":
                result = "解冻";
                break;
            case "CONGEAL":
                result = "冻结";
                break;
            case "DELETE":
                result = "删除 ";
                break;
            case "NOACTIVE":
                result = "未激活";
                break;
            case "UNREVIEW":
                result = "未审核";
                break;
            case true:
                result = "是";
                break;
            case false:
                result = "否";
                break;
        }
        return result;
    }

});
app.filter('Type',function(){
    return function(val){
        var result;
        switch(val){
            case "WAITAUDIT":
                result = "等待审核";
                break;
            case "FINANCEAUDIT":
                result = "财务核对";
                break;
            case "WAITPAY":
                result = "等待付款 ";
                break;
            case "PAYED":
                result = "已付款";
                break;
            case "WRONG":
                result = "WRONG";
                break;
            case true:
                result = "是";
                break;
            case false:
                result = "否";
                break;
        }
        return result;
    }

});
app.filter('pay',function(){
    return function(val){
        var result;
        switch(val){
            case true:
                result = "是";
                break;
            case false:
                result = "否";
                break;
        }
        return result;
    }
});
