var app = angular.module('monthCollect', ['toastr']);
app.controller('monthCollectCtrl', function($scope,imageSer,toastr){
	   imageSer.monthCollect().then(function(response){
            if(response.data.code == 0){
                $scope.figureWeeks = response.data.data;
                var myChart = echarts.init(document.getElementById('monthImg'));
                var option2=$scope.figureWeeks;
                myChart.setOption(option2);
            }
        });
    //月汇总
/*    $scope.nowMonths = [1,2,3,4,5,6,7,8,9,10,11,12];*/
    $scope.collect = function() {

        var data = {
            year:$scope.year,
            month:$scope.month,

        };
        imageSer.monthCollect(data).then(function(response){
            if(response.data.code == 0){
                $scope.figureWeeks = response.data.data;
                var myChart = echarts.init(document.getElementById('monthImg'));
                var option2=$scope.figureWeeks;
                myChart.setOption(option2);
            }
        });

       /* var fourChart = echarts.init(document.getElementById('monthImg'));
        fourChart.title = {
            text:'出车管理日汇总',
        };
        option = {
            color: ['#01a1af', '#01b8be', '#0094d4', '#016ed3'],
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'none',        // 默认为直线，可选为：'line' | 'shadow'
                },
            },
            legend: {
                data:['综合资源部', '佛山1', '湛江'],
                itemWidth: 40,
                itemHeight: 20,
                textStyle: {
                    fontSize: 15,
                    color: '#000',

                }
            },
            grid: {
                left: '3%',
                right: '4%',
                top: '5%',
                bottom: '8%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    // data: ['综合资源部', '佛山1', '湛江'],
                    data: ['商务需求', '项目需求', '待签订协议数', '可用司机', '还需司机数', '待解除协议数'],
                    axisTick: {
                        alignWithLabel: true,
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#666',
                            width: 1,//这里是为了突出显示加上的
                        }
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    axisLine: {
                        lineStyle: {
                            color: '#666',
                            width: 1,//这里是为了突出显示加上的
                        }
                    },
                    axisTick: {
                        show: false
                    },
                }
            ],
            series: [
                {
                    name: '综合资源部',
                    type: 'bar',
                    barWidth: '20%',
                    data: [10, 20, 5, 100,11,45]
                },
                {
                    name: '佛山1',
                    type: 'bar',
                    barWidth: '20%',
                    data: [50, 10, 60, 200,88,65]
                },
                {
                    name: '湛江',
                    type: 'bar',
                    barWidth: '20%',
                    data: [300, 152, 50, 200,56,66]
                },

            ]
        };
        fourChart.setOption(option);*/
      }


});

