var jsonfile = require('jsonfile');
var chalk = require('chalk');
var request = require('request');


module.exports.freshen = function () {
    var file = './package.json';
    jsonfile.readFile(file, function (err, obj) {
        if (err) {
            console.error(chalk.bold.red(err));
            return;
        }
        request(
            "https://raw.githubusercontent.com/ember-cli/ember-cli/master/blueprints/app/files/package.json",
            function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    var latest = JSON.parse(body);
                    var updatedJson = Object.assign({}, obj);
                    updatedJson["devDependencies"] = merge_options(
                        updatedJson["devDependencies"], latest["devDependencies"]);
                    jsonfile.writeFile(
                        file, updatedJson, {spaces: 2},
                        function (err) {
                            return console.error(err);
                        });
                } else if (error) {
                    return console.error(chalk.bold.red(error));
                }
                ;
            });
    });

}