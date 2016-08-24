var fs = require('fs');

try {
    var stats = fs.statSync('./dist');
}
catch(e) {
    fs.mkdirSync('./dist');
}

var fichiers = fs.readdirSync('./src');

for (var i=0; i<fichiers.length; i++) {
    var fichier = fichiers[i];
    var src = './src/' + fichier;

    var stats = fs.statSync(src);

    if (stats.isFile()) {
        var dest = './dist/' + fichier;
        var contenu = fs.readFileSync(src);
        fs.writeFileSync(dest, contenu);
    }

}