/**
 * Created by igor on 26.07.16.
 */
"use strict";

module.exports = function(grunt) {

	let arDefault = ['jsdoc2md'];

	grunt.initConfig({

		jsdoc2md: {
			oneOutputFile: {
				src: 'loader.js',
				dest: 'README.md'
			}

		},
		default : arDefault
	});

	grunt.loadNpmTasks('grunt-jsdoc-to-markdown');
	grunt.registerTask('default', arDefault);
};



