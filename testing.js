




function findCurrentSpouse(people, person){
	let personSpouseID = person.currentSpouse;
	console.log(personSpouseID);
		let filterSpouse = people.filter(function (people) {
    if (personSpouseID == people.id) {
      return true;
    } else {
      return false;
    }
  });
  console.log(filterSpouse);
	}
findCurrentSpouse(data, data[0]);