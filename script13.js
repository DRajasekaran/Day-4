1. For the given JSON iterate over all for loops(for,for in,for of,forEach)

	//using for loop;
    	var json=`{"name":"raj",
		"age":24,
		"state":"TamilNadu"}`;
	var obj=JSON.parse(json);
	for(var key in obj){
		console.log(`${key}:${obj[key]}`)
	}

	//using for in loop;
	var json={"name":"raj",
		"age":24,
		"state":"TamilNadu"};

	for(var key in json){
		console.log(`${key} : ${json[key]}`)
	}

	//using for of loop;
	var json=`{"name":"raj",
		"age":24,
		"state":"TamilNadu"}`;
	var obj=JSON.parse(json);
	for(var [key,value] of Object.entries(obj)){
		console.log(`${key}:${obj[key]}`)
	}

	//using forEach loop;
	var json={"name":"raj",
		"age":24,
		"state":"TamilNadu"};
	Object.entries(json).forEach(( [key,value]) =>{
		console.log(`${key}:${json[key]}`)
	});

	2. Create your own resume data in JSON format

	{
	  "basics": {
		"name": "Rajsekar",
		"label": "Engineer",
		"image": "",
		"email": "rajsekar5798@gmail.com",
		"phone": "9677193629",
		"url": "",
		"summary": "Im a engineer interested to switch career in It domain.",
		"location": {
		  "address": "4 nagappan st",
		  "postalCode": "600044",
		  "city": "chennai",
		  "countryCode": "Asia",
		  "region": "India"
		},
	  "education": [{
		"institution": "Vels university",
		"url": "https://collegedunia.com/university/25911-vels-institute-of-science-technology-and-advanced-studies-chennai",
		"area": "Mechanical Engineering",
		"studyType": "Bachelor",
		"startDate": "2017-09-05",
		"endDate": "2021-08-08",
		"score": "7.35",
	  }],
	  "awards": [{
		"title": "Athletics winner",
		"year": "2013",
		"awarder": "St.mark's matriculation school",
	  }],
	  "skills": [{
		"name": "Web Development",
		"level": "Intermediate",
		"keywords": [
		  "HTML",
		  "CSS",
		  "JavaScript",
		  "Core Java"
		]
	  }],
	  "languages": [{
		"language": "Tamil",
		"fluency": "Native speaker"
	  }],
	  "interests": [{
		"name": "Programming",
		"keywords": "Problem Solving"
	  }],
	}}