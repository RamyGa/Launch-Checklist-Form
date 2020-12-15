// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/




window.addEventListener("load", function () {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
      response.json().then(function (json) {
         let randomNum = Math.floor(Math.random() * Math.floor(json.length));
         let missionTarget = document.getElementById("missionTarget").innerHTML =
            `
         <h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[randomNum].name}</li>
            <li>Diameter: ${json[randomNum].diameter}</li>
            <li>Star: ${json[randomNum].star}</li>
            <li>Distance from Earth: ${json[randomNum].distance}</li>
            <li>Number of Moons: ${json[randomNum].moons}</li>
         </ol>
         <img src="${json[randomNum].image}">

         `
      })
   })
   let pilotName = document.getElementById("pilotName");
   let copilotName = document.getElementById("copilotName");
   let fuelLevel = document.getElementById("fuelLevel");
   let cargoMass = document.getElementById("cargoMass");
   let list = document.getElementById("faultyItems");
   let fuelStatus = document.getElementById("fuelStatus")
   let cargoStatus = document.getElementById("cargoStatus")
   let launchStatus = document.getElementById("launchStatus")
   let form = document.querySelector("form");
   let pilotStatus = document.getElementById("pilotStatus")
   let copilotStatus = document.getElementById("copilotStatus")


   form.addEventListener("submit", function (event) {

      let fuelAsInt = Number(fuelLevel.value);
      let cargoMassAsInt = Number(cargoMass.value);

      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {

         alert("All fields are required");

      }

      else if (isNaN(pilotName.value) && isNaN(copilotName.value) && !isNaN(fuelAsInt) && !isNaN(cargoMassAsInt)) {

         pilotStatus.innerHTML = "Pilot " + pilotName.value + " is ready for launch";
         copilotStatus.innerHTML = "Copilot " + copilotName.value + " is ready for launch";

         if (fuelAsInt < 10000 || cargoMassAsInt > 10000) {
            list.style.visibility = "visible";
            launchStatus.style.color = "RED";
            launchStatus.innerHTML = "Shuttle not ready for launch";

            if (fuelAsInt < 10000) {
               fuelStatus.innerHTML = "Fuel level too low for lanuch";
            }
            if (cargoMassAsInt > 10000) {
               cargoStatus.innerHTML = "There is too much mass for the shuttle to take off";
            }

         }


         else {
            list.style.visibility = "visible"
            launchStatus.innerHTML = "Shuttle is ready for launch";
            launchStatus.style.color = "GREEN";

            fuelStatus.innerHTML = "Fuel level high enough for launch";
            cargoStatus.innerHTML = "Cargo mass low enough for launch";
         }
      }

      else {
         alert("Make sure to enter valid information for each field!");

      }
      event.preventDefault();

   });

});