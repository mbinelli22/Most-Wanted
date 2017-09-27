/*
Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application
function app(people){
  addAge(people);
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


function addAge (people) {
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

// Menu function to call once you find who you are looking for
function mainMenu(person, people, firstAndLastName){
  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. 
  We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }

  var displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

  switch(displayOption){
    case "info":
    displayInfo(person, people, firstAndLastName);
    break;
    case "family":
    displayFamily(person);
    break;
    case "descendants":
    displayDecendants(person);
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

function displayInfo (person ) {
  let personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  personInfo += "Gender: " + person.gender + "\n";
  personInfo += "D.O.B.: " + person.dob + "\n";
  personInfo += "Height: " + person.height + "\n";
  personInfo += "Weight: " + person.weight + "\n";
  personInfo += "Eye Color: " + person.eyeColor + "\n";
  personInfo += "Occupation: " + person.occupation + "\n";
  alert(personInfo);  
}

function displayFamily(person) {
  let familyInfo = "Parents: " + findParents(people, person) + "\n";
  familyInfo += "Siblings: " + findSiblings (people, person) + "\n";
  familyInfo += "Spouse: " + findCurrentSpouse(people, person) + "\n";
  familyInfo += "Offspring: " + findChildren(people, person) + "\n";
 alert(familyInfo);
}


function displayDescendants(person) {
// must use iteration
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
  console.log(filteredByLastName)

  let firstName = promptFor("What is the person's FIRST name?", chars).toLowerCase();
  let firstAndLastName = filteredByLastName.filter(function (person) {
    if (person.firstName.toLowerCase() == firstName) {
      return true;
    } else {
      return false;
    }
  });
  console.log(firstAndLastName);
  mainMenu(firstAndLastName[0], people, firstAndLastName[0].firstName + " " + firstAndLastName[0].lastName);
  return firstAndLastName;
}

function calculateAge (indexedDobArray) {
  let today = new Date();
  let age = today.getFullYear() - indexedDobArray[2];

  if (today.getMonth() < indexedDobArray[0] || (today.getMonth() == indexedDobArray[0] && today.getDate() < indexedDobArray[1])) {
    age--;
  }
  return age;
}

function searchByAge(people) {
  let age = promptFor("What is the person's age?", chars);
  let filteredByAge = people.filter(function (person) {
        if (person.age == age) {
          return true;
        } else {
          return false;
        }
          return(filteredByAge);
     });
     function checkForExistence(filteredByAge){
              if (filteredByAge.length == 0){
              alert("No one in our database has that age. Please try another age.");
              searchByAge(people);
              }else{
                console.log(filteredByAge);
              }
            }
  checkForExistence(filteredByAge);

  mainMenu(filteredByAge);

}

function searchByHeight(people) {
  let height = promptFor("What is the person's height IN INCHES?", chars);
  let filteredByHeight = people.filter(function (person) {
                if (person.height == height) {
               return true;
              } else {
              return false;}
           
          return(filteredByHeight);
     });
     
function checkForExistence(filteredByHeight){
  if (filteredByHeight.length == 0){
  alert("No one in our database has that height. Please try another height, in inches only.");
  searchByHeight(people);
  }
  else{
  console.log(filteredByHeight);
  }
   }
  checkForExistence(filteredByHeight);
}  


function searchByOccupation(people) {
  let occupation = promptFor("What is the person's occupation?", chars);
  let filteredByOccupation = people.filter(function (person) {
        if (person.occupation == occupation) {
          return true;
        } else {
          return false;
        }
          return(filteredByOccupation);
     });
     function checkForExistence(filteredByOccupation){
              if (filteredByOccupation.length == 0){
              alert("No one in our database is employed thus. Please try another occupation.");
              searchByOccupation(people);
              }else{
                console.log(filteredByOccupation);
              }
            }
  checkForExistence(filteredByOccupation);
}


function searchByEyeColor(people) {
  let eyeColor = promptFor("What is the person's eye color?", chars);
  let filteredByEyeColor;

  filteredByEyeColor = people.filter(function (person) {
    if (person.eyeColor == eyeColor) {
      return true;
    } else {
      return false;
    }
  });
  console.log(filteredByEyeColor);
}

function searchByWeight(people) {
  let weight = promptFor("What is the person's weight IN POUNDS?", chars);
  let filteredByWeight = people.filter(function (person) {
                if (person.weight == weight) {
               return true;
              } else {
              return false;}
           
          return(filteredByWeight);
     });
     function checkForExistence(filteredByWeight){
              if (filteredByWeight.length == 0){
              alert("No one in our database has that weight. Please try another weight, in pounds only.");
              searchByWeight(people);
              }else{
                console.log(filteredByWeight);
              }
            }
  checkForExistence(filteredByWeight);
}

// mainMenu(filteredPeople[0],people);


function searchByEyeColor(people) {
 let eyeColor = promptFor("What is the person's eye color?", chars);
  let filteredByColor = people.filter(function (person) {
                if (person.eyeColor == eyeColor) {
               return true;
              } else {
              return false;}
           
          return(filteredByColor);
     });
     function checkForExistence(filteredByColor){
              if (filteredByColor.length == 0){
              alert("No one in our database has that eye color. Please try another color.");
              searchByEyeColor(people);
              }else{
                console.log(filteredByColor);
              }
            }
  checkForExistence(filteredByColor);
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

function findCurrentSpouse(people, person) {
  let personSpouseID = person.currentSpouse;
  console.log(personSpouseID);
  let filterSpouse = people.filter(function (people)  {
    if (personSpouseID == people.id) {
      return true;
    } else {
      return false;
    }
  });
  console.log(filterSpouse);
}

function findParents(people, person) {
  let personParents = []
  for (let i = 0; i < people.length; i++ ) {
    for(let j=0; j<person.parents.length; j++) {
      if (people[i].id === person.parents[j]) {
      personParents.push(people[i]);
      }
    }
  }
  console.log(personParents);
}

function findChildren (people,person) {
  
    let children = [];
    for (let i = 0; i < people.length; i++) {
      for (let j=0; j<people[i].parents.length; j++) {
        if (person.id == people[i].parents[j]) {
          children.push(people[i]);
        }
      }
    }
    console.log(children);
}

function findSiblings (people,person) {
let parents = findParents(person);
let children = findChildren(parents);
console.log(children)
}

function findDescendants (people) {

}