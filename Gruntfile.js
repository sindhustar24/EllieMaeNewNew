module.exports = function (grunt) {
  
    grunt.initConfig({
        pkg:grunt.file.readJSON("package.json"),
        sass:{
            dist: {
                options:{
                    style: 'expanded'
                },
                files:{
                    'css/styles.css' : 'css/styles.scss'
                }
            }
        }
        
    });
    
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.registerTask('default',['sass']);
    
};