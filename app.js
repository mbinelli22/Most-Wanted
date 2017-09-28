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
function mainMenu(person, people, firstAndLastName, filteredByAge, filteredByHeight, filteredByOccupation, filteredByWeight, filteredByColor){
  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. 
  We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Could not find that individual.");
    return app(people);
  }

  var displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

  switch(displayOption){
    case "info":
    displayInfo(person, people, firstAndLastName, filteredByAge, filteredByHeight, filteredByOccupation, filteredByWeight, filteredByColor);
    break;
    case "family":
    displayFamily(people, person);
    break;
    case "descendants":
    findDescendants(person, people, firstAndLastName, filteredByAge, filteredByHeight, filteredByOccupation, filteredByWeight, filteredByColor);
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
  personInfo += "Gender: " + person.gender + "\n";
  personInfo += "D.O.B.: " + person.dob + "\n";
  personInfo += "Height: " + person.height + "\n";
  personInfo += "Weight: " + person.weight + "\n";
  personInfo += "Eye Color: " + person.eyeColor + "\n";
  personInfo += "Occupation: " + person.occupation + "\n";
  alert(personInfo);
  alert("Thank you for using our program. To search again, close this and click the start searching button again."); 
}

function displayFamily(people, person) {
  let familyInfo = "Parents: " + findParents(people, person) + "\n";
  familyInfo += "Siblings: " + findSiblings (people, person) + "\n";
  familyInfo += "Spouse: " + findCurrentSpouse(people, person) + "\n";
  familyInfo += "Offspring: " + findChildren(people, person) + "\n";
 alert(familyInfo);
}

function findDescendants (people, person) {
  for (let i = 0; i < people.length; i++) {

   for (let j=0; j<people[i].parents.length; j++) {
      let descendants = [];
      if (person.id == people[i].parents[j]) {
       descendants.push(people[i]);
      }
    }
  }
  findDescendants(people, descendants);
  console.log(descendants);
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

  let firstName = promptFor("What is the person's FIRST name?", chars).toLowerCase();
  let firstAndLastName = filteredByLastName.filter(function (person) {
    if (person.firstName.toLowerCase() == firstName) {
      return true;
    } else {
      return false;
    }
  });
  mainMenu(firstAndLastName[0], people, firstAndLastName[0].firstName + " " + firstAndLastName[0].lastName);
  return firstAndLastName;
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
  } 
  else if (filteredByAge.length > 1){
    console.log(filteredByAge);
    let multipleSearch=promptFor("There are more than one person with that age. Need more information. If you want to search by name, type 'name'. Or you can search by different traits by typing 'trait'.", chars).toLowerCase();
      switch(multipleSearch){ 
        case "name":
        searchByName(people);
        break;
        case "trait":
        searchByTraits(people);
        break;
        default:
        return checkForExistence(); 
        break;
        }
    }
  else{
  console.log(filteredByAge);
  mainMenu(filteredByAge[0], people, filteredByAge[0].firstName + " " + filteredByAge[0].lastName);
  return filteredByAge;
  }
}
  checkForExistence(filteredByAge);
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
  else if (filteredByHeight.length > 1){
   console.log(filteredByHeight);
   let multipleSearch=promptFor("There are more than one person with that height. Need more information. If you want to search by name, type 'name'. Or you can search by different traits by typing 'trait'.", chars).toLowerCase();
     switch(multipleSearch){
       case "name":
       searchByName(people);
       break;
       case "trait":
       searchByTraits(people);
       break;
       default:
       return checkForExistence(); 
       break;
       }
    }
  else{
  console.log(filteredByHeight);
  mainMenu(filteredByHeight[0], people, filteredByHeight[0].firstName + " " + filteredByHeight[0].lastName);
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
     });
          console.log(filteredByOccupation);
function checkForExistence(filteredByOccupation){
  if (filteredByOccupation.length == 0){
    alert("No one in our database is employed thus. Please try another occupation.");
    searchByOccupation(people);
    }
  else if (filteredByOccupation.length > 1){
    console.log(filteredByOccupation);
    let multipleSearch=promptFor("There are more than one person with that occupation. Need more information. If you want to search by name, type 'name'. Or you can search by different traits by typing 'trait'.", chars).toLowerCase();
      switch(multipleSearch){
        case "name":
        searchByName(people);
        break;
        case "trait":
        searchByTraits(people);
        break;
        default:
        break;
        }
    }
        else{
          console.log(filteredByOccupation);
          mainMenu(filteredByOccupation[0], people, filteredByOccupation[0].firstName + " " + filteredByOccupation[0].lastName);
              }
            }
  checkForExistence(filteredByOccupation);
  return(filteredByOccupation);
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
    }
  else if (filteredByWeight.length > 1){
    console.log(filteredByWeight)
    let multipleSearch=promptFor("There are more than one person with that weight. Need more information. If you want to search by name, type 'name'. Or you can search by different traits by typing 'trait'.", chars).toLowerCase();
      switch(multipleSearch){
        case "name":
        searchByName(people);
        break;
        case "trait":
        searchByTraits(people);
        break;
        default:
        return checkForExistence(); 
        break;
        }
    }
  else{
    console.log(filteredByWeight);
    mainMenu(filteredByWeight[0], people, filteredByWeight[0].firstName + " " + filteredByWeight[0].lastName);
    }
  }
  checkForExistence(filteredByWeight);
}

function searchByEyeColor(people) {
 let eyeColor = promptFor("What is the person's eye color?", chars);
  let filteredByColor = people.filter(function (person) {
    if (person.eyeColor == eyeColor) {
    return true;
    } else {
    return false;}
           
    return(filteredByColor);
    console.log(filteredByColor);
     });
function checkForExistence(filteredByColor){
  if (filteredByColor.length == 0){
    alert("No one in our database has that eye color. Please try another color.");
    searchByEyeColor(people);
  }
  else if (filteredByColor.length > 1){
    console.log(filteredByColor);
    let multipleSearch=promptFor("There are more than one person with that eye color. Need more information. If you want to search by name, type 'name'. Or you can search by different traits by typing 'trait'.", chars).toLowerCase();
      switch(multipleSearch){
        case "name":
        searchByName(people);
        break;
        case "trait":
        searchByTraits(people);
        break;
        default:
        return checkForExistence(); 
        break;
        }
    }
  else{
    console.log(filteredByColor);
    mainMenu(filteredByColor[0], people, filteredByColor[0].firstName + " " + filteredByColor[0].lastName);
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
  let filterSpouse = people.filter(function (people)  {
    if (personSpouseID == people.id) {
      return true;
    } else {
      return false;
    }
  });
  let currentSpouseName = filterSpouse[0].firstName + " " + filterSpouse[0].lastName;
  return currentSpouseName;
}

function findParents(people, person,) {
  //let personParents = [];
  let parentNames = "";
  for (let i = 0; i < people.length; i++ ) {
    for(let j=0; j<person.parents.length; j++) {
      if (people[i].id === person.parents[j]) {
        //personParents.push(people[i]);
        parentNames += people[i].firstName + " " + people[i].lastName + ", ";
      }
    }
  }
  //return personParents;
  return parentNames;
}

function findChildrenArray (people,person) {
  let children = []
  // let childrenNames = "";
  for (let i = 0; i < people.length; i++) {
    for (let j=0; j<people[i].parents.length; j++) {
      if (person.id == people[i].parents[j]) {
        children.push(people[i]);
        //childrenNames += people[i].firstName + " " + people[i].lastName + ", ";
      }
    }
  }
  return children;
  //return childrenNames;
}

function findChildren (people,person) {
  let childrenNames = "";
  for (let i = 0; i < people.length; i++) {
    for (let j=0; j<people[i].parents.length; j++) {
      if (person.id == people[i].parents[j]) {
        childrenNames += people[i].firstName + " " + people[i].lastName + ", ";
      }
    }
  }
  return childrenNames;
}

function findSiblings (people,person) {
  let parents = findParents(people, person);
  let childrenOfParents = findChildren(people, parents);
  return childrenOfParents;
}

function findDescendants (people, person) {
let  descendants = findChildrenArray(people, person);
  for (let i=0; i<descendants.length; i++) {
    descendants = descendants.concat(findDescendants(people, descendants[i]));
  }
  console.log(descendants);
  return descendants;
}