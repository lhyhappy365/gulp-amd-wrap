define("assert-addRequireConfig/a", [
    'require',
    '@scope/moduleA',
    'assert/moduleB'
], function (require, moduleA, moduleB) {
    'use strict';
    const fishObj = { name: 'nimo' };
    ;
    ;
    require([
        'A',
        'assert/B',
        '/C',
        '@D/E'
    ], function (a, b, c, d) {
        console.log(a, b, c, d);
        return 5;
    });
    return fishObj;
});
