import inquirer from "inquirer";
import fs from "fs";
import qr from "qr-image";

    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Enter the URL',
                name: "URL"
            }

        ])
    .then((answers) => {

        {
            const name = answers.URL
            var qr_svg = qr.image(`${name}`, { type: 'png' });
            qr_svg.pipe(fs.createWriteStream('qr.png'));
            fs.writeFile("url.txt", `${name}`, (err) => {
                if (err) console.log(err);

                console.log("File saved successfully", answers);
            })
        }

    })
    .catch((error) => {
        if (error.isTtyError) {

            console.log("err")
        } else {
            console.log("successfull");

        }

    });







