/*
Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application
function app(people){
  splitBirthday(people);
  var searchType = prompt("Do you know the name of the person you are looking for? Enter 'yes' or 'no'").toLowerCase();
  switch(searchType){
    case 'yes':
    searchByName(people);
    break;
    case 'no':
    searchByTraits(people);
    break;
    default:
    alert("Invalid entry. Please enter either 'yes' or 'no'.");
    app(people);
    break;
  }
} 

function splitBirthday (people) {
  for (i=0; i < people.length; i++) {
    let dobArray = people[i].dob.split("/");
    let month = dobArray[0]-1;
    let day = parseInt(dobArray[1]);
    let year = parseInt(dobArray[2]);
    let indexedDobArray = [month, day, year];
    let personAge = calculateAge(indexedDobArray);
    people[i].age = personAge;
  }
}

function calculateAge (indexedDobArray) {
  let today = new Date();
  let age = today.getFullYear() - indexedDobArray[2];

  if (today.getMonth() < indexedDobArray[0] || (today.getMonth() == indexedDobArray[0] && today.getDate() < indexedDobArray[1])) {
    age--;
  }
  return age;
}

// Menu function to call once you find who you are looking for
function mainMenu(person, people){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. 
  We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }

  var displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

  switch(displayOption){
    case "info":
    // TODO: get person's info
    break;
    case "family":
    // TODO: get person's family
    break;
    case "descendants":
    // TODO: get person's descendants
    break;
    case "restart":
    app(people); // restart
    break;
    case "quit":
    return; // stop execution
    default:
    return mainMenu(person, people); // ask again
  }
}

function searchByTraits (people) {
  let traitType = promptFor("Enter the type of trait you want to search for. Enter 'age', 'height', 'weight', 'occupation' or 'eye color'", searchByFeature).toLowerCase();
  switch (traitType) {
    case "age":
      searchByAge(people);
      break;
    case "height":
      searchByHeight(people);
      break;
    case "weight":
      searchByWeight(people);
      break;
    case "occupation":
      searchByOccupation(people);
      break;
    case "eye color":
      searchByEyeColor(people);
      break;
    default:
    alert("Invalid entry. Please enter either 'age' 'height' 'weight' 'occupation' or 'eye color'");
    searchByTraits();
    break;
  } 
}

function searchByName(people){

  let lastName = promptFor("What is the person's LAST name?", chars).toLowerCase();

  let filteredByLastName = people.filter(function (person) {
    if (person.lastName.toLowerCase() == lastName) {
      return true;
    } else {
      return false;
    }
  });
  console.log(filteredByLastName);

  let firstName = promptFor("What is the person's FIRST name?", chars).toLowerCase();
  let firstAndLastName = filteredByLastName.filter(function (person) {
    if (person.firstName.toLowerCase() == firstName) {
      return true;
    } else {
      return false;
    }
  });
  console.log(firstAndLastName);
}

function searchByAge(people) {
  let age = promptFor("What is the person's age?", chars);
  let filteredByAge;
  if (age > 0) {
  filteredByAge = people.filter(function (person) {
        if (person.age == age) {
          return true;
        } else {
          return false;
        }
    });
  } else {
    alert("Not a valid age.  Please enter person's age.");
    return searchByAge(people);
  }
  console.log(filteredByAge);
}

function searchByHeight(people) {
  let height = promptFor("What is the person's height IN INCHES?", chars);
  let filteredByHeight;
  if (height > 0) {
  filteredByHeight = people.filter(function (person) {
        if (person.height == height) {
          return true;
        } else {
          return false;
        }
    });
  } else {
    alert("Not a valid height.  Please enter height IN INCHES.");
    return searchByHeight(people);
  }
  console.log(filteredByHeight);
}

function searchByOccupation(filteredPeople) {

    let filteredOcc = [];
    let occupation = promptFor("What is the person\'s occupation?", chars).toLowerCase();
    let searchedOcc = filteredOcc.push
    let filteredOccupations = data.filter (function (data) {
    if (data.filter == occupation.toLowerCase()) {
    return true;
    } else {
      return false;
    }
  });
  console.log("These are the people we found matching your search:" + filteredOcc);
}

function searchByWeight(people) {

  let weight = promptFor("What is the person's weight in pounds?", chars);
  let filteredByWeight;
  if (weight > 0) {
    filteredByWeight = people.filter(function (person) {
      if (person.weight == weight) {
        return true;
      } else {
        return false;
      }
    });
  } else {
    alert("Not a valid weight.  Please enter the person's weight IN POUNDS.")
    return searchByWeight(people);
  }
  console.log(filteredByWeight);
}

function searchByEyeColor(argument) {

    let eyeColor = promptFor("What is the person\'s eye color?", chars);
       // TODO: find the person using the eye color they entered
  }

// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayPerson(person){
  var personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  alert(personInfo);
}

function promptFor(question, valid){
  do{
    var response = prompt(question).trim();
  } while(!response || !valid(response));
    return response;
  }

function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

function searchByFeature(input){
  return input.toLowerCase() == "age" || input.toLowerCase() == "height" || input.toLowerCase() == "weight" || input.toLowerCase() == "occupation" || input.toLowerCase() == "eye color";
}

function chars(input){
  return true;
}