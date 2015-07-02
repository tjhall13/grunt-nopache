/*
 * grunt-nopache
 * https://github.com/tjhall13/grunt-nopache
 *
 * Copyright (c) 2015 Trevor Hall
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');

var NopacheServer = require('nopache').NopacheServer;

module.exports = function(grunt) {
    grunt.registerMultiTask('nopache', 'Nopache test web server.', function() {
        var done = this.async();
        
        // Merge task-specific and/or target-specific options with these defaults.
        var options = this.options({
            port: 2400,
            base: '.',
            keepAlive: false,
            php: false
        });
        
        var fromFile = false;
        
        if(options.php) {
            if(typeof options.php === 'string') {
                try {
                    if(options.php.charAt(0) === '~') {
                        options.php = path.join(process.env.HOME || process.env.HOMEPATH, options.php.substr(1));
                    }
                    var filename = path.resolve(options.php);
                    options.php = require(filename);
                    fromFile = true;
                } catch(e) {
                    grunt.fail.fatal(e);
                }
            }
            if(typeof options.php !== 'object') {
                if(fromFile) {
                    grunt.fail.fatal('Parsed file must export an object');
                } else {
                    grunt.fail.fatal('php option must be an object or file exporting an object');
                }
            }
        }
        
        var server = new NopacheServer(options.base, options.port, options.php);
        server.listen();

        if(!options.keepAlive) {
            done();
        }
    });
};
