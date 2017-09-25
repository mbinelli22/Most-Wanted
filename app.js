/*
Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application
function app(people){
  var searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  switch(searchType){
    case 'yes':
    searchByName(people);
    break;
    case 'no':
    searchByTraits();
    break;
    default:
    // app(people); // restart app
    alert("Invalid entry. Please enter either 'yes' or 'no'");
       // This still doesnt work. what if we made another case for when promptFor != yes || no? 
    app(people); // restart app
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
    app(people); // restart
    break;
    case "quit":
    return; // stop execution
    default:
    return mainMenu(person, people); // ask again
  }
}

function searchByName(people){
  var firstName = promptFor("What is the person's first name?", chars).toLowerCase();
  var lastName = promptFor("What is the person's last name?", chars).toLowerCase();

  var filteredPeople = people.filter(function (person) {
    if (person.lastName.toLowerCase() == lastName) {
    return true;
    } else {
      return false;
    }
  });
  console.log(filteredPeople);
  
  // TODO: find the person using the name they entered
  //var new array = people.filter
  //console.log(//array of all matching names from original - new array)
}


// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayPerson(person){
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  var personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  // TODO: finish getting the rest of the information to display
  alert(personInfo);
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


function findHeight() {
  var billyHeight = data[0].height[0];

}

function getAge () {
}

function runApp () {
  app(data);

  // var id = (data[].id);
  // var firstName = data[].firstName;
  // var lastName = data[].lastName;
  // var gender = data[].gender;
  // var dob = data[].dob;
  // var height = data[].height;
  // var weight = data[].weight;
  // var eyeColor = data[].eyeColor;
  // var occupation = data[].occupation;
  // var parents = data[].parents;
  // var currentSpouse = data[].currentSpouse;

}

runApp();




// Object Constructor
// function Person(id, firstName, lastName, gender, dob, height, weight, eyeColor, occupation, parents, currentSpouse) {
//   this.id = id;
//   this.firstName = firstname;
//   this.lastName = lastName;
//   this.gender = gender;
//   this.dob = dob;
//   this.height = height;
//   this.weight = weight;
//   this.eyeColor = eyeColor;
//   this.occupation = occupation;
//   this.parents = parents;
//   this.currentSpouse = currentSpouse;
  // this.age = function age(//current date - (data[x].dob, convert from string, adjust for zero indexing, convert to output to match date function) {
  // }
// Person(id, firstName, lastName, gender, dob, height, weight, eyeColor, occupation, parents, currentSpouse);
// person.data[0].gender; 

function searchByAge(argument) {
  let age = promptFor("What is the person's age?", chars);
    // TODO: find the person using the age they entered
}

function searchByHeight(argument) {
  let height = promptFor("What is the person's height?", chars);
    // TODO: find the person using the height they entered
    function inchesToFeet(v) {
      let feet = Math.floor(v/12);
      let inches = v%12;
      return feet + "'" + inches + "\"";
    }
    let inchesToFeetConverted = inchesToFeet(height);
}


function searchByWeight(argument) {
    let weight = promptFor("What is the person's weight?", chars);
  // TODO: find the person using the weight they entered
}

function searchByOccupation(argument) {
    let occupation = promptFor("What is the person's occupation?", chars);
  // TODO: find the person using the occupation they entered
}

function searchByEyeColor(argument) {
    let eyeColor = promptFor("What is the person's eye color", chars);
    // TODO: find the person using the eye color they entered
  }

function searchByTraits () {
  let traitType = promptFor("Enter the type of trait you want to search for. Enter 'age', 'height', 'weight', 'occupation' or 'eye color'", ageHeightWeightOccupationEyeColor).toLowerCase();
  switch (traitType) {
    case "age":
      searchByAge();
      break;
    case "height":
      searchByHeight();
      break;
    case "weight":
      searchByWeight();
      break;
    case "occupation":
      searchByOccupation();
      break;
    case "eye color":
      searchByEyeColor();
      break;
    default:
    alert("Invalid entry. Please enter either 'age' 'height' 'weight' 'occupation' or 'eye color'");
    searchByTraits();
    break;
  } 

}

