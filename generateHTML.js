const generateManager = function (Manager) {
    return `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${Manager.name}</h5>
      <p class="card-text">${Manager.id}</p>
      <a href="mailto:${Manager.email}" class="card-link">${Manager.email}</a>
      <a href="${Manager.office}" class="card-link">${Manager.office}</a>
    </div>
  </div>
    `;
}

const generateEngineer = function (Engineer) {
    return `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${Engineer.name}</h5>
      <p class="card-text">${Engineer.id}</p>
      <a href="mailto:${Engineer.email}" class="card-link">${Engineer.email}</a>
      <a href="https://github.com/${Engineer.github}" class="card-link">${Engineer.github}</a>
    </div>
  </div>
    `;
}

const generateIntern = function (Intern) {
    return `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${Intern.name}</h5>
      <p class="card-text">${Intern.id}</p>
      <a href="mailto:${Intern.email}" class="card-link">${Intern.email}</a>
      <p ${Intern.school} >${Intern.school}</p>
    </div>
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
            const internCard = generateEngineer(employee);
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

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="./dist/style.css">
    <title>Hello, world!</title>
  </head>
  <body>
      
        <!-- NavBar -->

    <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1">My Team</span>
        </div>
      </nav>

    <!-- Cards -->

<div class="row mt-5" id="cards">

${cards}

</div>

`
}

module.exports = generateHTML;