
const inquirer= require("inquirer")
const Engineer = require("./lib/Engineer")
const Manager=require("./lib/Manager")
const Intern=require("./lib/Intern")
const FileSystem=require("fs")
const path=require("path")
const output=path.resolve(__dirname, "dist")
const outputpath=path.join(output,"team.html")
const outputTeam=require("./src/template.js")

workteam=[]

function runApplication(){
    function makeTeam(){
        inquirer.prompt([{
            type: "list",
            name:"addEmployee",
            message:"what is your job title?",
            choices: ["Engineer","Manager","Intern","No other team members needed"]
            
        }]).then(function(input){
            switch(input.addEmployee){
                case "Manager": 
                askManager()
                break
                case "Engineer":
                askEngineer() 
                break
                case "Intern":
                askIntern()
                break
                default:
                buildHTML()
            }
        })
    }





function askManager(){
    return inquirer.prompt([{
        type:"input",
        name:"ManagerName",
        message:"what is your team Manager's name?",
    },
    {
        type:"input",
        name:"ManagerID",
        message:"what is your team Manager's ID?",
    },
    {
        type:"input",
        name:"ManagerEmail",
        message:"what is your team Manager's Email?",
    },
    {
        type:"input",
        name:"Managerofficenumber",
        message:"what is your team Manager's office number?",
    }


    

]).then(answers=>{
    const manager= new Manager(answers.ManagerName,answers.ManagerID,answers.ManagerEmail,answers.Managerofficenumber)
    workteam.push(manager)
    makeTeam()
})
}



function askEngineer(){
    return inquirer.prompt([{
        type:"input",
        name:"EngineerName",
        message:"what is your team Engineer's name?",
    },
    {
        type:"input",
        name:"EngineerID",
        message:"what is your team Engineer's ID?",
    },
    {
        type:"input",
        name:"EngineerEmail",
        message:"what is your team Engineer's Email?",
    },
    {
        type:"input",
        name:"EngineerGitHub",
        message:"what is your team Engineer's GitHub",
    }


    

]).then(answers=>{
    const engineer= new Engineer(answers.EngineerName,answers.EngineerID,answers.EngineerEmail,answers.EngineerGitHub)
    workteam.push(engineer)
    makeTeam()
})
}


function askIntern(){
    return inquirer.prompt([{
        type:"input",
        name:"InternName",
        message:"what is your team Intern's name?",
    },
    {
        type:"input",
        name:"InternID",
        message:"what is your team Intern's ID?",
    },
    {
        type:"input",
        name:"InternEmail",
        message:"what is your team Intern's Email?",
    },
    {
        type:"input",
        name:"InternSchool",
        message:"what is your team Intern's School",
    }


    

]).then(answers=>{
    const intern= new Intern(answers.InternName,answers.InternID,answers.InternEmail,answers.InternSchool)
    workteam.push(intern)
    makeTeam()
})
}











function buildHTML(){
    FileSystem.writeFileSync(outputpath,outputTeam(workteam), "UTF-8")
}
makeTeam()
}

runApplication()
// async function init() {
//     const answers= await askUser()
//     console.log(answers)
//     const TeamManager= new Manager(answers.ManagerName,answers.ManagerID,answers.ManagerEmail,
//         answers.Managerofficenumber)
//     console.log(TeamManager)
// }
// init()