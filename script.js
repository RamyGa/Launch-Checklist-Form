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
   let pilotName = document.getElementById("pilotName");
   let copilotName = document.getElementById("copilotName");
   let fuelLevel = document.getElementById("fuelLevel");
   let cargoMass =document.getElementById("cargoMass");
   let list =document.getElementById("faultyItems");
   let fuelStatus = document.getElementById("fuelStatus")
   let cargoStatus = document.getElementById("cargoStatus")
   let launchStatus = document.getElementById("launchStatus")
   let form = document.querySelector("form");

   let fuelAsInt = Number(fuelLevel.value);
   let cargoMassAsInt = Number(cargoMass.value);

   console.log(typeof(x));
   form.addEventListener("submit", function (event) {
      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         
         alert("All fields are required");
       
      }

      else if(isNaN(pilotName.value) && isNaN(copilotName.value) && !isNaN(fuelAsInt) && !isNaN(cargoMassAsInt) ){
          if (fuelAsInt < 10000 || cargoMassAsInt > 10000 ){
           list.style.visibility = "visible";
            launchStatus.style.color = "RED";  
            launchStatus.innerHTML = "Shuttle not ready for launch";

           
            if(cargoMassAsInt > 10000){
               cargoStatus.innerHTML = "There is too much mass for the shuttle to take off";    
            }
            if(fuelAsInt < 10000){
               fuelStatus.innerHTML = "Fuel level too low for lanuch";
            }

         }
         

         else{
            list.style.visibility = "visible" 
            launchStatus.innerHTML = "Shuttle is ready for launch";
            launchStatus.style.color = "GREEN";
         }
      }

      else  {
         alert("Make sure to enter valid information for each field!");
        
      }

 
   event.preventDefault();
 

   });

   
   

});