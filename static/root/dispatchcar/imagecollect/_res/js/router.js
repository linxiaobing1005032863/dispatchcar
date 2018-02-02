var app = angular.module('imageModule', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.dispatchcar.imagecollect", {
        url : "/imagecollect",
        views : {
            "content@root.dispatchcar" : {
                templateUrl : "root/dispatchcar/imagecollect/_res/html/index.html",
                controller:"imageCtrl"
            },"menu@root.dispatchcar" : {
                templateUrl : "root/dispatchcar/imagecollect/_res/html/menu.html",
                controller:"imageM"
            }
        }
    }).state("root.dispatchcar.imagecollect.allCollect[12]",{
        url:"/allCollect[12]",
        views:{
            "content@root.dispatchcar.imagecollect":{
                templateUrl : "root/dispatchcar/imagecollect/allCollect/_res/html/index.html",
                controller:'allCollectCtrl'
            }
        }
    }).state("root.dispatchcar.imagecollect.dayCollect[12]",{
        url:"/dayCollect[12]",
        views:{
            "content@root.dispatchcar.imagecollect":{
                templateUrl : "root/dispatchcar/imagecollect/dayCollect/_res/html/index.html",
                controller:'dayCollectCtrl'
            }
        }
    }).state("root.dispatchcar.imagecollect.monthCollect[12]",{
        url:"/monthCollect[12]",
        views:{
            "content@root.dispatchcar.imagecollect":{
                templateUrl : "root/dispatchcar/imagecollect/monthCollect/_res/html/index.html",
                controller:'monthCollectCtrl'
            }
        }
    }).state("root.dispatchcar.imagecollect.weekCollect[12]",{
        url:"/weekCollect[12]",
        views:{
            "content@root.dispatchcar.imagecollect":{
                templateUrl : "root/dispatchcar/imagecollect/weekCollect/_res/html/index.html",
                controller:'weekCollectCtrl'
            }
        }
    })
});
