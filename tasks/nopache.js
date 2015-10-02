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
            base: '.',
            port: 2400,
            keepAlive: false,
            mods: { }
        });
        var mods = options.mods;
        delete options['mods'];
        
        var server = new NopacheServer(options, mods);
        server.listen();

        if(!options.keepAlive) {
            server.close();
            done();
        }
    });
};
