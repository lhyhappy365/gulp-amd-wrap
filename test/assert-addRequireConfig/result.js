require.config({paths:{"assert-addRequireConfig/a":"//m.test.com/se/assert-addRequireConfig/assert-addRequireConfig/bundle","assert-addRequireConfig/b":"//m.test.com/se/assert-addRequireConfig/assert-addRequireConfig/bundle"}});
define('assert-addRequireConfig/b', [
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
