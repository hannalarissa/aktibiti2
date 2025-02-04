import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
import { randomSuperhero } from "superheroes";
import generateName from "sillyname";

inquirer
    .prompt(
        [{
            message: "Enter your name:",
            name: "name"
        }])

    .then((answers) => {

        var sillyName = generateName();
        var superhero = randomSuperhero();
        var txt = "Name: " + answers.name + "\nVillain Name: " + sillyName + "\nSuperhero Name: " + superhero;

        name2qr(answers.name);
        silly2qr(sillyName);
        super2qr(superhero);
        txtfile(txt);

        console.log("Hello", answers.name);
        console.log("your villain name will be", sillyName);
        console.log("and your superhero name will be", superhero);

        console.log("\nQR codes are generated");

    });

function name2qr(name) {
    var qr_svg = qr.image(name, { type: 'png' });
    qr_svg.pipe(fs.createWriteStream('name.png'));


}
function silly2qr(sillyName) {
    var qr_svg = qr.image(sillyName, { type: 'png' });
    qr_svg.pipe(fs.createWriteStream('sillyname.png'));


}
function super2qr(superhero) {
    var qr_svg = qr.image(superhero, { type: 'png' });
    qr_svg.pipe(fs.createWriteStream('superheroname.png'));


}
function txtfile(text) {
    fs.writeFile('myhero.txt', text, (err) => {
        if (err) throw err;
        console.log('Text file updated');
    });
}