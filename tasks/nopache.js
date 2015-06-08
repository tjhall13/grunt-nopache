/*
 * grunt-nopache
 * https://github.com/tjhall13/grunt-nopache
 *
 * Copyright (c) 2015 Trevor Hall
 * Licensed under the MIT license.
 */

'use strict';

var NopacheServer = require('nopache').NopacheServer;

module.exports = function(grunt) {
    grunt.registerMultiTask('nopache', 'Nopache web server task.', function() {
        var done = this.async();
        
        // Merge task-specific and/or target-specific options with these defaults.
        var options = this.options({
            port: 2400,
            base: '.',
            keepAlive: false
        });

        var server = new NopacheServer(options.base, options.port);
        server.listen();

        if(!options.keepAlive) {
            done();
        }
    });
};
