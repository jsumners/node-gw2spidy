'use strict';

var grunt = require('grunt');

require('load-grunt-tasks')(grunt);

grunt.initConfig({
  shell: {
    test: {
      command: "node test/index.js"
    },
    doc: {
      command: "./node_modules/.bin/jsdoc -c jsdoc.conf ."
    }
  }
});

grunt.registerTask('test', ['shell:test']);
grunt.registerTask('doc', ['shell:doc']);