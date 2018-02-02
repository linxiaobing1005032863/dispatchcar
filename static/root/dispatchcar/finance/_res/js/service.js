var app = angular.module('finServer',[]);
app.factory('finSer',function ($http) {
    return {
        menuPermission : menuPermission,
        finList :finList ,
        finAudit:finAudit,
        Receivefin:Receivefin,
        findfinId:findfinId,
        finanSugg:finanSugg,
        viewFin:viewFin,
        changeCar:changeCar,
        Countfin:Countfin,
        infoEntry:infoEntry,
        Balance:Balance,
        Approval:Approval,
        Oilwear:Oilwear,
        infoOil:infoOil,
        infoProject:infoProject,
        infoDriver:infoDriver
 };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/finance/guidePermission'+data);
    }
    //出车核对修改记录列表
    function changeCar(data) {
        return $http.get('/checkchangecar/list',{
            params: data
        })
    }
    //核对分析
    function finanSugg(data){
        return $http.post('/finance/financialSugg',data)
    }
    //列表
    function finList(data) {
        return $http.get('/finance/list',{
            params: data
        })
    }
    //审核详情
    function finAudit(data){
        return $http.get('/finance/audit',{
            params:data
        })
    }
    //收到票据
    function Receivefin(data){
        return $http.post('/finance/receive',data)
    }
    //id查询find
    function findfinId(data){
        return $http.get('/finance/find',{
            params:data
        })
    }
    //计算总数量
    function Countfin() {
        return $http.get('/waitaudit/count')
    }
    //附件列表
    function viewFin(data){
        return $http.get('/finance/listFile',{params:data})
    }
    //查询所有司机信息和车牌号码
    function infoDriver(data) {
        return $http.get('/dispatchcarinfo/driver',{
            params: data
        })
    }
    /* //查询所有用车陪同人员和用车人员和任务下达人员和所属地区和所属项目组
     function infoEntry(data) {
     return $http.get('/dispatchcarinfo/entry',{
     params: data
     })
     }*/
    //查询所有用车陪同人员和用车人员和任务下达人员和所属地区和所属项目组
    function infoEntry(data) {
        return $http.get('/dispatchcarinfo/entry',{
            params: data
        })
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


    //附件列表
    function viewInfo(data){
        return $http.get('/dispatchcarinfo/listFile',{params:data})
    }
    //寄件
    function Mailinfo(data){
        return $http.post('/dispatchcarinfo/mail',data)
    }
    //查询所有油卡信息
    function infoOil() {
        return $http.get('/dispatchcarinfo/oil')
    }
    //查找所有项目名称
    function infoProject() {
        return $http.get('/dispatchcarinfo/allProject')
    }
    /*  //添加
     function Addinfo(data){
     return $http.post('/dispatchcarinfo/add',data)
     }

     //编辑
     function Editinfo(data){
     return $http.post('/dispatchcarinfo/edit',data)
     }*/
    /*

     //删除
     function infoDelete(data){
     return $http.get('/dispatchcarinfo/delete',{
     params: data
     })
     }
     //冻结
     function congealinfo(data){
     return $http.get('/dispatchcarinfo/freeze',{
     params: data
     })
     }
     //解冻
     function Thawinfo(data){
     return $http.get('/dispatchcarinfo/unfreeze',{
     params: data
     })
     }
     //查询所有司机信息和车牌号码
     function infoDriver() {
     return $http.get('/dispatchcarinfo/find/driver')
     }
     //查询所有用车陪同人员和用车人员和任务下达人员和所属地区和所属项目组
     function infoEntry() {
     return $http.get('/dispatchcarinfo/find/entry')
     }
     /!*!//当月预算范围
     function getAllArea() {
     return $http.get('/bonusbudget/findPay/reserve')
     }*!/
     //附件列表
     function viewInfo(data){
     return $http.get('/dispatchcarinfo/listFile',{params:data})
     }
     //寄件
     function Mailinfo(data){
     return $http.post('/dispatchcarinfo/mail',data)
     }
     //查询所有油卡信息
     function infoOil() {
     return $http.get('/dispatchcarinfo/find/oil')
     }
     //查找所有项目名称
     function infoProject() {
     return $http.get('/dispatchcarinfo/find/allProject')
     }

     */

});

