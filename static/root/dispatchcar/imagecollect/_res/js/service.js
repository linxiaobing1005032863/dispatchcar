var app = angular.module('imageServer',[]);
app.factory('imageSer',function ($http) {
    return {
        menuPermission:menuPermission,
        dayCollect:dayCollect,
        monthCollect:monthCollect,
        allCollect:allCollect,
        weekCollect:weekCollect


    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/imagecollect/guidePermission'+data);
    }
  //图形化日汇总
    function dayCollect(data){
        return $http.get('/imagecollect/dayCollect',{params:data})
    }
    //图形化月汇总
    function monthCollect(data){
        return $http.get('/imagecollect/monthCollect',{params:data})
    }
    //图形化累计汇总
    function allCollect(data){
        return $http.get('/imagecollect/allCollect',{params:data})
    }
    //图形化周汇总
    function weekCollect(data){
        return $http.get('/imagecollect/weekCollect',{params:data})
    }
});

