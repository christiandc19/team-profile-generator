const generateManager = function (Manager) {
    return `
    <div id="card">
    <div class="card-body bg-primary">
      <h5 class="card-title">${Manager.name}</h5>
      <p class="card-text"> <i class="fa fa-solid fa-mug-hot"></i> Manager</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID Number: ${Manager.id}</li>
      <li class="list-group-item">Email: <a href="mailto:${Manager.email}">${Manager.email}</a></li>
      <li class="list-group-item"><p class="card-text mt-2">Office Number: ${Manager.officeNumber}</p></li>
    </ul>
    </div>
    `;
}

const generateEngineer = function (Engineer) {
    return `
    <div id="card">
    <div class="card-body bg-primary">
      <h5 class="card-title">${Engineer.name}</h5>
      <p class="card-text"> <i class="fa fa-solid fa-glasses"></i> Engineer</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID Number: ${Engineer.id}</li>
      <li class="list-group-item">Email: <a href="mailto:${Engineer.email}" class="card-link">${Engineer.email}</a></li>
      <li class="list-group-item"><p class="card-text mt-2">Github: <a href="https://github.com/${Engineer.github}">${Engineer.github}</a></p></li>
    </ul>
    </div>
    `;
}

const generateIntern = function (Intern) {
    return `
    <div id="card">
    <div class="card-body bg-primary">
      <h5 class="card-title">${Intern.name}</h5>
      <p class="card-text"> <i class="fa fa-solid fa-user-graduate"></i> Intern</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID Number: ${Intern.id}</li>
      <li class="list-group-item">Email: <a href="mailto:${Intern.email}"> ${Intern.email}</a></li>
      <li class="list-group-item">School: ${Intern.school}</li>
    </ul>
    </div>
    `;

}

generateHTML = (myTeam) => {
    
    arr = [];

    for (let i = 0; i < myTeam.length; i++) {
        const employee = myTeam[i];
        const role = employee.getRole();

        if (role === "Manager") {
            const managerCard = generateManager(employee);
            arr.push(managerCard);
        }

        if (role === "Engineer") {
            const engineerCard = generateEngineer(employee);
            arr.push(engineerCard);
        }

        if (role === "Intern") {
            const internCard = generateIntern(employee);
            arr.push(internCard);
        }
    }


    const cards = arr.join("");
    
    console.log(cards);

    const generateTeam = generateTeamCard(cards);
    return generateTeam;
}

const generateTeamCard = function(cards) {
return `
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Font Awesome Icon -->
    <script src="https://kit.fontawesome.com/a4ff3ab2fb.js" crossorigin="anonymous"></script>

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="./dist/style.css">
    <title>Hello, world!</title>
  </head>
  <body>
      
        <!-- NavBar -->
<div id="header">
    <h1>My Team</h1>
</div>
    <!-- Cards -->

<div class="row mt-5 mb-5" id="cards">

${cards}

</div>

`
}

module.exports = generateHTML;