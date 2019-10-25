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

   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
   response.json().then(function(json) {

      
      let div = document.getElementById("missionTarget");

      let bonus = Math.round(Math.random() * Math.floor(5));
      
      console.log("bonus =", bonus)
      
      div.innerHTML = `
          <h2>Mission Destination</h2>
             <ol>
                <li>Name: ${json[bonus].name}</li>
                <li>Diameter: ${json[bonus].diameter}</li>
                <li>Star: ${json[bonus].star}</li>
               <li>Distance from Earth: ${json[bonus].distance}</li>
               <li>Number of Moons: ${json[bonus].moons}</li>
            </ol>
          <img src="${json[bonus].image}">
      `
      
   })
})
      
     
 

      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
      console.log(isNaN(pilotNameInput.value))

      if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "" ){
         alert("All fields are required!");
         event.preventDefault();
       
      } else if  ((isNaN(fuelLevelInput.value) === false)  || (isNaN(cargoMassInput.value) === false) || (isNaN(pilotNameInput.value) === true) || (isNaN(cargoMassInput.value) === true)) {
         alert("Please enter correct input value")
         event.preventDefault();

     

      } else if (Number(fuelLevelInput.value) < 10000) {
            document.getElementById("faultyItems").style.visibility = "visible"
            document.getElementById("launchStatus").style.color = "red";
            document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch"
            document.getElementById("fuelStatus").innerHTML = "Not enough fuel for launch"
            event.preventDefault();

      } else if (Number(cargoMassInput.value) > 10000) {
            document.getElementById("faultyItems").style.visibility = "visible"
            document.getElementById("launchStatus").style.color = "red"; 
            document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch"
            document.getElementById("cargoStatus").innerHTML = "There is  too much mass for the shuttle to take off"
            event.preventDefault();

      } else {
            document.getElementById("faultyItems").style.visibility = "visible"
            document.getElementById("launchStatus").style.color = "green"; 
            document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotNameInput.value} Ready`
            document.getElementById("copilotStatus").innerHTML = `Co-Pilot  ${copilotNameInput.value} Ready`
            document.getElementById("launchStatus").innerHTML = "Shuttle ready for launch"
            event.preventDefault();
      }

   })
})