var game = require("./game.js");
var inquirer = require("inquirer");

inquirer.prompt([{
  name: "letter",
  type: "text",
  message: "Enter a leter: ",
  validate: function(str) {
    console.log(letter);
    return RegExp("[a-zA-Z]").test(str);
  }
}]).then(function (answers){
    var letter = answers.letter;
    //console.log(answers.letter);

});