'use strict';

var grunt = require('grunt');

require('load-grunt-tasks')(grunt);

grunt.initConfig({
  shell: {
    test: {
      command: 'node test/index.js'
    },
    doc: {
      command: './node_modules/.bin/jsdoc -c jsdoc.conf .'
    }
  },
  githubPages: {
    target: {
      options: {
        commitMessage: 'Publishing new documentation'
      },
      src: 'doc'
    }
  }
});

grunt.registerTask('test', ['shell:test']);
grunt.registerTask('doc', ['shell:doc']);
grunt.registerTask('publishdoc', ['githubPages:target']);