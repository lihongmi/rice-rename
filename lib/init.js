const { join, basename } = require('path')
const vfs = require('vinyl-fs')
const { renameSync } = require('fs')
const chalk = require('chalk')
const through = require('through2')
const emptyDir  = require('empty-dir')
const { info, error, success } = require('./logger')

var fs=require("fs"),path = require('path');
var files = fs.readdirSync(__dirname);

function init(program) {
	console.log("开始重命名");
	var start=0;
	var qiandao="";
	//console.log(__dirname);
	files.forEach(function (file, index) {


		var ext=path.extname(file);

		if(ext!=".js"){
			var newName=qiandao+(++start)+ext;
			fs.rename(file,newName,function(err){
				console.log(err);
			});
		}
		console.log("图片重命名完成");

	});
}

Using the scaffold with Gulp + Webpack + Babel + BrowserSync,
In ${projectName}, you can run these commands:
  > ${chalk.bold.white('npm run dev')}         Starts the development server
  > ${chalk.bold.white('npm run dist')}        Publish your project`)
        console.log()
        console.log(`${chalk.bold.cyan('rice-rename!')} https://github.com/lihongmi/rice-rename` )

    }

}

module.exports = init
