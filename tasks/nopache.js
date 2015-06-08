/*
 * grunt-nopache
 * https://github.com/tjhall13/grunt-nopache
 *
 * Copyright (c) 2015 Trevor Hall
 * Licensed under the MIT license.
 */

'use strict';

var Nopache = require('nopache').nopache;

module.exports = function(grunt) {
    
  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('nopache', 'Nopache webserver task.', function() {
    var done = this.async();
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      port: 10000,
      base: '.',
      keepAlive: false
    });
    
    var server = new Nopache(options.base, options.port);
    
    server.listen();
    
    if(!options.keepAlive) {
        done();
    }
  });
};
