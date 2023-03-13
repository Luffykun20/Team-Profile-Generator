const fs = require("fs")

//Function that markdowns and creates cards for employees
function teamGenerator(jobPosition) {
  let cards = ""
  for (let i = 0; i < jobPosition.length; i++) {

    if (jobPosition[i].getRole() === 'Manager') {

      cards += `
        <div class="col">
        <div class="card employee-card">
          <div class="card-header bg-primary text-white h-100">
            <h2 class="card-title">${jobPosition[i].getName()}</h2>
            <h3 class="card-title"><i class="fa-solid fa-mug-hot"></i> ${jobPosition[i].getRole()}</h3>
          </div>
        </div>
        <div class="card-body">
          <ul class="list-group">
            <li class="list-group-item">ID: ${jobPosition[i].getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${jobPosition[i].getEmail()}">${jobPosition[i].getEmail()}</a></li>
            <li class="list-group-item">Office number: ${jobPosition[i].getOfficeNumber()}</li>
          </ul>
        </div>
      </div>`
    }
    else if (jobPosition[i].getRole() === 'Engineer') {

      cards += `
        <div class="col">
        <div class="card employee-card">
          <div class="card-header bg-primary text-white h-100">
            <h2 class="card-title">${jobPosition[i].getName()}</h2>
            <h3 class="card-title"><i class="fa-solid fa-mug-hot"></i> ${jobPosition[i].getRole()}</h3>
          </div>
        </div>
        <div class="card-body">
          <ul class="list-group">
            <li class="list-group-item">ID: ${jobPosition[i].getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${jobPosition[i].getEmail()}">${jobPosition[i].getEmail()}</a></li>
            <li class="list-group-item">GitHub: <a href= "https://github.com/${jobPosition[i].getGitHub()}">${jobPosition[i].getGitHub()}</a></li>
          </ul>
        </div>
      </div>`
    }
    else if (jobPosition[i].getRole() === 'Intern') {
      cards += `
        <div class="col">
        <div class="card employee-card">
          <div class="card-header bg-primary text-white h-100">
            <h2 class="card-title">${jobPosition[i].getName()}</h2>
            <h3 class="card-title"><i class="fa-solid fa-mug-hot"></i> ${jobPosition[i].getRole()}</h3>
          </div>
        </div>
        <div class="card-body">
          <ul class="list-group">
            <li class="list-group-item">ID: ${jobPosition[i].getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${jobPosition[i].getEmail()}">${jobPosition[i].getEmail()}</a></li>
            <li class="list-group-item">School: ${jobPosition[i].getSchool()}</li>
          </ul>
        </div>
      </div>`
    }
  }
  console.log("Team created successfully!")
  fs.writeFileSync("./dist/team.html", MarkDown(cards))
}
//function that markdowns the Team profile HTML
function MarkDown(card) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>My Team</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
      <script src="https://kit.fontawesome.com/c9716f0f1b.js" crossorigin="anonymous"></script>
    </head>
    
    <body>
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 jumbotron mb-3 team-heading bg-danger">
            <h1 class="text-center text-white">My Team</h1>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="row team-area col-12 d-flex justify-content-center">
              <div class="row row-cols-1 row-cols-md-3 g-4">
              ${card}
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
    
    </html>`
}

module.exports = teamGenerator