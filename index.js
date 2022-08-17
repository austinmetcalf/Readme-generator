
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

const questions = [     {
    type: 'input',
    message: 'Enter the title for your project',
    name: 'title'
},{
    type: 'input',
    message: 'Please enter description of your project',
    name: 'description'
},
{
    type: 'input',
    message: 'Please enter installation instruction',
    name: 'installation'
},
{
    type: 'input',
    message: 'Please enter any use instructions for application',
    name: 'usage' 
},
{
    type: 'list',
    message: 'Please select a license',
    name: 'license',
    choices: ['Apache', 'MIT', 'Gnu', 'Mozilla', 'None']
},
{
    type: 'input',
    message: 'Please describe how developer can contribute to application',
    name: 'contributing'
},
{
    type: 'input',
    message: 'Please enter test instruction',
    name: 'tests'
},
{
    type: 'input',
    message: 'Please enter email address',
    name: 'email'
},
{
    type: 'input',
    message: 'Please enter github name',
    name: 'github'
}];



function init() {
    inquirer.prompt(questions).then(data=>{
        fs.writeFileSync('README.md', generateMarkdown(data), function(err) {
       console.log(err)
        })
    })
}


init();



