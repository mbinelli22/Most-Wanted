/*
Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application
function app(people){
  // splitBirthday(people);
  var searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  switch(searchType){
    case 'yes':
    searchByName(people);
    break;
    case 'no':
    searchByTraits(people);
    break;
    default:
    alert("Invalid entry. Please enter either 'yes' or 'no'");
    app(people); 
    break;
  }
}

function searchByTraits (people) {
  let traitType = promptFor("Enter the type of trait you want to search for. Enter 'age', 'height', 'weight', 'occupation' or 'eye color'", ageHeightWeightOccupationEyeColor).toLowerCase();
  switch (traitType) {
    case "age":
      getBirthday(people);
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
    app(people); 
    break;
    case "quit":
    return; 
    default:
    return mainMenu(person, people); 
  }
}

function displayInfo (person) {
  let personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  personInfo += "Gender" + person.gender + "\n";
  personInfo += "D.O.B." + person.dob + "\n";
  personInfo += "Height" + person.height + "\n";
  personInfo += "Weight" + person.weight + "\n";
  personInfo += "Eye Color" + person.eyeColor + "\n";
  personInfo += "Occupation" + person.occupation + "\n";
  alert(personInfo);  
}

function displayFamily(person) {
  let familyInfo = ""
}

function displayDecendants(person) {
  
}

// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

// function that prompts and validates user input
function promptFor(question, valid){
  do{
    var response = prompt(question).trim();
  } while(!response || !valid(response));
  return response;
}

// helper function to pass into promptFor to validate yes/no answers
function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

// helper function to pass into promptFor to validate for the searchByTraits function
function ageHeightWeightOccupationEyeColor(input){
  return input.toLowerCase() == "age" || input.toLowerCase() == "height" || input.toLowerCase() == "weight" || input.toLowerCase() == "occupation" || input.toLowerCase() == "eye color";
}

// helper function to pass in as default promptFor validation
function chars(input){

  return true; // default validation only
}

app(data);
mainMenu(people,person);

// Object Constructor
function Person(id, firstName, lastName, gender, dob, height, weight, eyeColor, occupation, parents, currentSpouse) {
  this.id = id;
  this.firstName = firstname;
  this.lastName = lastName;
  this.gender = gender;
  this.dob = dob;
  this.height = height;
  this.weight = weight;
  this.eyeColor = eyeColor;
  this.occupation = occupation;
  this.parents = parents;
  this.currentSpouse = currentSpouse;
  }

function searchByName(people){
  let lastName = promptFor("What is the person's last name?", chars).toLowerCase();
  let filteredByLastName = people.filter(function (person) {
    if (person.lastName.toLowerCase() == lastName) {
      return true;
    } else {
      return false;
    }
  });
  console.log(filteredByLastName);

 let firstName = promptFor("What is the person's first name?", chars).toLowerCase();
 let firstAndLastName = filteredByLastName.filter(function (person) {
    if (person.firstName.toLowerCase() == firstName) {
      return true;
    } else {
      return false;
    }
  });
  console.log(firstAndLastName);
}

// function splitBirthday (people) {
//   for (i = 0, i < people[i].length, i++) {
//     let dobArray = people[i].dob.split("/");
//     let month = dobArray[0]-1;
//     let day = dobArray[1];
//     let year = dobArray[2];
//     let indexedDobArray = [month, day, year];
//     let personAge = calculateAge(indexedDobArray);
//     people[i].age = personAge;
//   }
//   return indexedDobArray;
// }

function calculateAge(splitBirthday) {
    let age = promptFor("What is the person's age?", chars);
    let today = new Date();
    let birthDate = new Date(people);
    let birthdayYear = today.getFullYear() - age;
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate() )) {
        age--;
    }

    return birthdayYear;
    searchByAge();
}

function searchByAge(people) {
  let filteredByAge = people.filter(function (person) {
    if (people[i].age == age) {
      return true;
    } else {
      return false;
    }
  });
  console.log(filteredByAge);
}


function searchByHeight(people) {

  let height = promptFor("What is the person\'s height?", chars);
  let filteredByHeight = people.filter(function (person) {
    if (person.height == height) {
      return true;
    } else {
      return false;
    }
  });
  console.log(filteredByHeight);
}


function searchByWeight(people) {

  let weight = promptFor("What is the person\'s weight?", chars);
  let filteredByWeight = people.filter(function (person) {
    if (person.weight == weight) {
      return true;
    } else {
      return false;
    }
  });
  console.log(filteredByWeight);
}

function searchByOccupation(people) {

    let occupation = promptFor("What is the person\'s occupation?", chars)
    let filteredOccupations = data.filter(function (occupation) {
    if (data.occupation == occupation) {
    return true;
    } else {
      return false;
    } 

  });
  alert("These are the people we found matching your search:" + filteredOccupations);
}

function searchByEyeColor(people) {

    let eyeColor = promptFor("What is the person\'s eye color?", chars);
       // TODO: find the person using the eye color they entered
  }


