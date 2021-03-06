var app = angular.module('payModule', [{
    files:[
        "root/dispatchcar/waitpay/_res/js/service.js",
    ]
}]);
app.controller('payModuleCtrl',function ($scope,$state) {
    if ($state.current.url == '/waitpay') {//默认加载列表
        $state.go('root.dispatchcar.waitpay.list[12]')
    }
    $scope.$emit('isVi',true);//判断是否出现搜索按钮
}).controller('payMenuCtrl',function($scope,$state,$rootScope,$location,paySer){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass = urlName.split('?')[0] + "Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list[12]' && window.location.href.indexOf('id=') == -1){
            $scope.menuClass = 'listMenu';
        }
    });
    if (window.location.href.split('id=')[1]) {//如果是刷新进来的页面，没有经过list
        $scope.idListd = window.location.href.split('id=')[1];
        $scope.idListd1 = window.location.href.split('id=')[1];
        if($location.search().name){$scope.menuClass = $location.search().name + 'Menu'}
    }
    //功能权限
    $scope.menuCheck = function (name) {
        var buttonName = name;
        $scope.buttonShow = true;
        paySer.menuPermission(buttonName).then(function(response){
            if(response.data.code == 0 && response.data.data){
                $scope[buttonName] = true;
            }else{
                $scope[buttonName] = false;
            }
        });
        $scope.menuAdd = false;
    };
    //监听到父Ctrl后改变事件
    $scope.$on("getId", function(event, msg){
        $scope.idListd = msg;
    });
    $scope.$on("getId1", function(event, msg){
        $scope.idListd1 = msg;
    });
    $scope.$on('pageId',function(event,flag){
        $scope.page = flag;
    });
    if(!$scope.page){
        $scope.page = $location.search().page;
    }
    $scope.congeal = function(){
        if($scope.idListd){
            $state.go('root.dispatchcar.waitpay.list[12]',{id:$scope.idListd,name:'congeal',page:$scope.page});
            $scope.menuClass = 'congealMenu';
        }
    };
    $scope.pay = function(){
        if($scope.idListd){
            $state.go('root.dispatchcar.waitpay.list[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'payMenu';

        }
    };
    $scope.export = function(){
        $scope.menuClass = 'exportMenu';
        $scope.idListd = ''
    };
    $scope.delete = function(){
        if($scope.idListd){
            $state.go('root.dispatchcar.waitpay.list[12]',{id:$scope.idListd,name:'delete',page:$scope.page});
            $scope.menuClass = 'deleteMenu';
        }
    };
    $scope.upload = function(){
        if($scope.idListd){
            $state.go('root.dispatchcar.waitpay.upload[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'uploadMenu'
        }
    };
    $scope.view = function(){
        if($scope.idListd){
            $state.go('root.dispatchcar.waitpay.view[12]',{id:$scope.idListd,view:1,page:$scope.page});
            $scope.menuClass = 'viewMenu'
        }
    };
    $scope.payMoney = function(){
        $scope.menuClass = 'payMoneyMenu';
        $scope.idListd = ''
    };
    $scope.import = function(){
        $scope.menuClass = 'importMenu';
        $scope.idListd = ''
    };
    $scope.change = function(){
        $scope.menuClass = 'changeMenu';
        $scope.idListd = ''
    };
    $scope.edit = function(){
        if($scope.idListd){
            $state.go('root.dispatchcar.waitpay.edit[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'editMenu'
        }
    };
    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
    $scope.pay = function(){
        if($scope.idListd){
            $state.go('root.dispatchcar.waitpay.pay[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'payMenu'
        }
    };
    $scope.audit = function(){
        if($scope.idListd){
            $state.go('root.dispatchcar.waitpay.audit[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'auditMenu'
        }
    };
     $scope.predict = function(){
        if($scope.idListd){
            $state.go('root.dispatchcar.waitpay.predict[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'predictMenu'
        }
    };
     $scope.principalsugg = function(){
        if($scope.idListd){
            $state.go('root.dispatchcar.waitpay.principalsugg[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'principalsuggMenu'
        }
    };
   /* $scope.change = function(){
        if($scope.idListd){
            $state.go('root.dispatchcar.waitpay.change[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'changeMenu'
        }
    };*/
   /*  $scope.payMoney = function(){
        if($scope.idListd){
            $state.go('root.dispatchcar.waitpay.payMoney[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'payMoneyMenu'
        }
    };*/
    $scope.add = function(){
        $scope.menuClass = 'addMenu';
        $scope.idListd = ''
    };
    $scope.mail = function(){
        $scope.menuClass = 'mailMenu';
        $scope.idListd = ''
    };



});


