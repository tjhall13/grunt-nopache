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
            mods: null
        });
        
        var server = new NopacheServer(options.base, options.port, options.mods);
        server.listen();

        if(!options.keepAlive) {
            done();
        }
    });
};
