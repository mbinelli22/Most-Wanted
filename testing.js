


// function findCurrentSpouse(people, person){
// 	let personSpouseID = person.currentSpouse;
// 	// console.log(personSpouseID);
// 		let filterSpouse = people.filter(function (people) {
//     if (personSpouseID == people.id) {
//       return true;
//     } else {
//       return false;
//     }
//   });
//   console.log(filterSpouse);
// 	}
// findCurrentSpouse(data, data[0]);


// function findParents(people, person) {
//   let personParentsID = person.parents;
//   let filterParents = people.filter(function (people) {
//     if (personParentsID == people.id) {
//       return true;
//     } else {
//       return false;
//     }
//   });
//   console.log(filterParents);
// }
// findParents(data, data[12]);


function findParents(people, person) {
  let personParents = []
  for (let i = 0; i < people.length; i++ ){
    for(let j=0; j<person.parents.length; j++) {
      if (people[i].id === person.parents[j]) {
      personParents.push(people[i]);
      }
    }
  }
  console.log(personParents);
}





