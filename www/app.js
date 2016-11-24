ons.bootstrap()
    .controller('AppController', function() {
        this.pushes = 0;
        this.pops = 0;
        this.menus = [
            'ローマ皇帝',
            'フランス王',
            'イングランド王',
            '神聖ローマ帝国皇帝'
        ];
    });
ons.ready(function() {
    console.log("Onsen UI is ready!");
});