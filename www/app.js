ons.bootstrap()
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
        this.name;
        this.exp;
        $scope.menus = [];
        $scope.romans = [];
        $scope.francs = [];
        JsonData.getJson().then(function(res){
            $scope.menus = res.data.menus;
            $scope.romans = res.data.roma;
            $scope.francs = res.data.france;
        });
        this.pushCrownPage = function (id) {
            navi.pushPage(id + '.html', { animation: "slide" });
        };
        this.showDedtail = function(name, exp) {
            this.name = name;
            this.exp = exp;
            navi.pushPage('detail.html', { animation: "slide" });
        };
    });
ons.ready(function() {
    console.log("Onsen UI is ready!");
});