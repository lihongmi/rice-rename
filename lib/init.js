const { join, basename } = require('path')
var fs=require("fs"),path = require('path');

function init(program) {
	const customPrj = program.args[0] || ''
	console.log(customPrj)

	const dest = join(process.cwd(), customPrj)
	console.log(dest)


	var files = fs.readdirSync(dest);

	var start=0;
	var qiandao="";
	files.forEach(function (file, index) {


		var ext=path.extname(file);

		if(ext!=".js"){
			var newName=qiandao+(++start)+ext;
			fs.rename(file,newName,function(err){
				if(err!=null){
					console.log("rename error");
				}
			});
		}

	});
}


Using the scaffold with Gulp + Webpack + Babel + BrowserSync,
In ${projectName}, you can run these commands:
> ${chalk.bold.white('npm run dev')}         Starts the development server
> ${chalk.bold.white('npm run dist')}        Publish your project`)
console.log()
console.log(`${chalk.bold.cyan('Omi!')} https://alloyteam.github.io/omi` )

}

}

module.exports = init
