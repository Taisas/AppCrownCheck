ons.bootstrap()
    .controller('AppController', function() {
        this.pushes = 0;
        this.pops = 0;
        this.menus = [
            ['ローマ皇帝', 'a001'],
            ['フランス王', 'a002'],
            ['イングランド王', 'a003'],
            ['神聖ローマ帝国皇帝', 'a004']
        ];
        this.pushCrownPage = function (id) {
            navi.pushPage(id + '.html');
        }
    });
ons.ready(function() {
    console.log("Onsen UI is ready!");
});