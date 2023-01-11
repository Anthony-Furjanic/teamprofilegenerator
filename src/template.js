const Employee = require("../lib/Employee")

const outputTeam= team=>{
    function makeManager(manager){
     
     
       return `
       <div>
        <p>${
            manager.getName()
        }</p>

        <p>${
            manager.getRole()
        }</p>
        <p>${
            manager.getid()
        }</p>
        <p>${
            manager.getemail()
        }</p>
        <p>${
            manager.getofficenumber()
        }</p>

        
        </div>`

    }
    function makeEngineer(Engineer){
        return `
        <p>${
            Engineer.getName()
        }</p>
        <p>${
            Engineer.getRole()
        }</p>
        <p>${
            Engineer.getid()
        }</p>
        <p>${
            Engineer.getemail()
        }</p>
        <p>${
            Engineer.getGithub()
        }</p>
        `
    }
    function makeIntern(Intern){
        return `
        <p>${
            Intern.getName()
        }</p>
        <p>${
            Intern.getRole()
        }</p>
        <p>${
            Intern.getid()
        }</p>
        <p>${
            Intern.getemail()
        }</p>
        <p>${
            Intern.getSchool()
        }</p>
        
        
        
        
        
        `

    }

    const array=[]
    array.push(team.filter(employee=>employee.getRole()=="Manager").map(manager=>makeManager(manager)))
    array.push(team.filter(employee=>employee.getRole()=="Engineer").map(engineer=>makeEngineer(engineer)))
    array.push(team.filter(employee=>employee.getRole()=="Intern").map(intern=>makeIntern(intern)))
    return array.join("")
}

module.exports=team=>{
    return`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="style.css" rel="stylesheet">
</head>
<body>
    <div>${outputTeam(team)}</div>
</body>
</html>
   `
}


