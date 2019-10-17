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


window.addEventListener('load', function() {
   let form = document.querySelector("form");
   form.addEventListener('submit', function(event) {
     
 

      let pilotNameInput = document.querySelector("input[name=pilotName");
      let coPilotNameInput = document.querySelector("input[name=copilotName");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel");
      let cargoMassInput = document.querySelector("input[name = cargoMass");
      if (pilotNameInput.value === "" || coPilotNameInput === "" || fuelLevelInput === "" || cargoMassInput === "") {
         alert("All fields are required!");
         event.preventDefault();
      } else if {        
         (isNaN(pilotNameInput.value) || isNaN(coPilotNameInput))
         alert("Please enter correct input value")
         event.preventDefault();

      let nameUpdate =
      `<div  id="faultyItems">
      <ol>
          <li id="pilotStatus">${pilotNameInput} Ready</li>
          <li id="copilotStatus">${copilotNameInput} Ready</li>
          <li id="fuelStatus">Fuel level high enough for launch</li>
          <li id="cargoStatus">Cargo mass low enough for launch</li>
      </ol>
       </div>`


      }

   })
})