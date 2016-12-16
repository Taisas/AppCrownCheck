angular.module('myApp', ['onsen', 'ui.bootstrap'])
    .factory('JsonData', function ($http) {
        return{
            getJson : function () {
                return $http({
                    method : 'GET',
                    url : 'data.json'
                }).success(function(data, status, headers, config) {
                    return data;
                }).error(function(data, status, headers, config) {
                    console.log(status);
                });
            }
        };
    })
    .controller('AppController', function($scope, JsonData) {
        $scope.name = '';
        $scope.exp = '';
        $scope.keywd = '';
        $scope.menus = [];
        $scope.romans = [];
        $scope.francs = [];
        $scope.englands = [];
        $scope.holyromans = [];
        $scope.names = [];
        $scope.rexdata = {};
        JsonData.getJson().then(function(res){
            $scope.menus = res.data.menus;
            $scope.romans = res.data.roma;
            $scope.francs = res.data.france;
            $scope.englands = res.data.england;
            $scope.holyromans = res.data.holyroma;
            $scope.romans.forEach(function (v, i) {
                $scope.names.push(v.name);
                $scope.rexdata[v.name ]= v.exp;
            });
            $scope.francs.forEach(function (v, i) {
                $scope.names.push(v.name);
                $scope.rexdata[v.name ]= v.exp;
            });
            $scope.englands.forEach(function (v, i) {
                $scope.names.push(v.name);
                $scope.rexdata[v.name ]= v.exp;
            });
            $scope.holyromans.forEach(function (v, i) {
                $scope.names.push(v.name);
                $scope.rexdata[v.name ]= v.exp;
            });
        });
        $scope.pushCrownPage = function (id) {
            navi.pushPage(id + '.html', { animation: "slide" });
        };
        $scope.showDedtail = function(name, exp) {
            $scope.name = name;
            $scope.exp = exp;
            navi.pushPage('detail.html', { animation: "slide" });
        };
        $scope.forwardMatch = function(value, input) {
            return value.toLowerCase().indexOf(input.toLowerCase()) === 0;
        };
        $scope.rexserch = function(key){
            $scope.name = key;
            $scope.exp = $scope.rexdata[key];
            navi.pushPage('detail.html', { animation: "slide" });
            // console.log($scope.rexdata[key]);

        };
    });
ons.ready(function() {
    console.log("Onsen UI is ready!");
});