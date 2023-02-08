const inquirer = require('inquirer');
const Square = require('./lib/square');

function run () {
    return inquirer
    .prompt([
        {type: 'list',
        message: 'What shape do you want your logo to be?',
        choices: ['Triangle', 'Square', 'Circle',],
        name: 'shape'
        },
        {type: 'input',
        message: 'What color do you want your logo?',
        name: 'color'
        },
        {type: 'input',
        message: 'What color do you want the text?',
        name: 'text'
        }
    ])
};

