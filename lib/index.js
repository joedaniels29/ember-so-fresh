var jsonfile = require('jsonfile');
var chalk = require('chalk');
var request = require('request');
var localFileName = './package.json';
var ember_packageURL = "https://raw.githubusercontent.com/ember-cli/ember-cli/master/blueprints/app/files/package.json";

function logerr(e) {
    console.error(chalk.bold.red(e));
}


module.exports.freshen = function () {

    jsonfile.readFile(localFileName, function (err, obj) {
        if (err) {
            console.error(chalk.bold.red(err));
            return;
        }
        request(
            ember_packageURL,
            function (err, response, body) {
                if (err) return logerr(err);
                else if (!err && response.statusCode == 200) {
                    var latest = JSON.parse(body);
                    var updatedJson = Object.assign({}, obj);
                    updatedJson["devDependencies"] = merge_options(
                        updatedJson["devDependencies"], latest["devDependencies"]);
                    jsonfile.writeFile(localFileName, updatedJson, {spaces: 2}, logerr);
                }
            });
    });

}