/*
 * @Author: qiansc
 * @Date: 2019-04-24 15:54:24
 * @Last Modified by: qiansc
 * @Last Modified time: 2019-10-17 16:37:33
 */

import { existsSync, readFileSync, unlinkSync } from 'fs';
import * as gulp from 'gulp';
import * as path from 'path';
import * as concat from 'gulp-concat';
import { addRequireConfig } from '../src/addRequireConfig';
import * as gulpif from 'gulp-if';
import { resolve } from 'dns';

describe('addRequireConfig Test', () => {
    it('addRequireConfig', () => {
        const file = `${__dirname}\/dist\/assert-addRequireConfig\/bundle.js`;
        const isNotMainJs = function (file) {
            return !file.path.match('assert-addRequireConfig/main.js');
        };
        var p = new Promise((resolve) => {
            gulp.src(`${__dirname}\/assert-addRequireConfig/*.js`)
            .pipe(gulpif(isNotMainJs, concat('./assert-addRequireConfig/bundle.js')))
            .pipe(
                addRequireConfig({
                    mainJs: 'main.js',
                    deloyDir: '//m.test.com/se/',
                    sourceDir: path.resolve('test')
                })
            )
            .pipe(
                gulp.dest(`${__dirname}\/dist\/`)
            ).on('end',
                () => {
                    const code = readFileSync(file).toString();
                    resolve(code)
                }
            );
        });
    });
});
