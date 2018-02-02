var app = angular.module('wrongServer',[]);
app.factory('wrongSer',function ($http) {
    return {
        menuPermission : menuPermission,
        wrongList :wrongList ,
        Addwrong:Addwrong,
        Editwrong:Editwrong,
        findwrongId:findwrongId,
        congealwrong:congealwrong,
        Thawwrong:Thawwrong,
        infoDriver:infoDriver,
        infoEntry:infoEntry,
        viewWrong:viewWrong,
        Mailwrong:Mailwrong,
        infoOil:infoOil,
        infoProject:infoProject,
        Addinfo:Addinfo,
        Editinfo:Editinfo,
        Balance:Balance,
        Approval:Approval,
        Oilwear:Oilwear,
        department:department,
        area:area




    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/dipatchcarwrong/guidePermission'+data);
    }
    //列表
    function wrongList(data) {
        return $http.get('/dipatchcarwrong/list',{
            params: data
        })
    }
    //添加
    function Addinfo(data){
        return $http.post('/dispatchcarinfo/add',data)
    }

    //编辑
    function Editinfo(data){
        return $http.post('/dipatchcarwrong/edit',data)
    }
    //id查询find
    function findwrongId(data){
        return $http.get('/dispatchcarinfo/find',{
            params:data
        })
    }
   /* //计算总数量
    function Countwrong() {
        return $http.get('/waitaudit/count')
    }*/
 //添加
    function Addwrong(data){
        return $http.post('/dispatchcarinfo/add',data)
    }

    //编辑
    function Editwrong(data){
        return $http.post('/dipatchcarwrong/edit',data)
    }

 /*   //删除
    function wrongDelete(data){
        return $http.get('/dispatchcarinfo/delete',{
            params: data
        })
    }*/
   //冻结
    function congealwrong(data){
        return $http.get('/dipatchcarwrong/freeze',{
            params: data
        })
    }
    //解冻
    function Thawwrong(data){
        return $http.get('/dipatchcarwrong/unfreeze',{
            params: data
        })
    }
    //查询所有司机信息和车牌号码
    function infoDriver() {
        return $http.get('/dispatchcarinfo/driver')
    }
 //查询所有用车陪同人员和用车人员和任务下达人员和所属地区和所属项目组
    function infoEntry() {
        return $http.get('/dispatchcarinfo/entry')
    }
    //附件列表
    function viewWrong(data){
        return $http.get('/dipatchcarwrong/listFile',{params:data})
    }
    //寄件
    function Mailwrong(data){
        return $http.post('/dipatchcarwrong/mail',data)
    }
    //查询所有油卡信息
    function infoOil() {
        return $http.get('/dispatchcarinfo/oil')
    }
    //查找所有项目组
    function department() {
        return $http.get('/dispatchcarinfo/department')
    }
    //查找所有项目名称
    function infoProject() {
        return $http.get('/dispatchcarinfo/allProject')
    }
    //查询所有所属地区
    function area() {
        return $http.get('/dispatchcarinfo/area')
    }
    //根据油卡编号查询油卡余额
    function Balance(data) {
        return $http.get('/dispatchcarinfo/balance',{
            params: data
        })
    }
    //根据项目名称获取立项信息
    function Approval(data) {
        return $http.get('/dispatchcarinfo/projectapproval',{
            params: data
        })
    }
    //根据司机姓名获取出车油耗
    function Oilwear(data) {
        return $http.get('/dispatchcarinfo/oilwear',{
            params: data
        })
    }



});

