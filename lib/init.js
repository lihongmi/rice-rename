const { join, basename } = require('path')
var fs=require("fs"),path = require('path');

function init(program) {
	const customPrj = program.args[0] || ''
	console.log(customPrj)

	const dest = join(process.cwd(), customPrj)

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


module.exports = init
