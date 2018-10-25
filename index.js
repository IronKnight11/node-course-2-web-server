var allUserData = [];

function logStuff(userData) {
	console.log('logStuff');
	if (typeof userData === 'string') {
		console.log(userData);
	} else if (typeof userData === 'object') {
		for (var item in userData) {
			console.log(item + ': ' + userData[item]);
		}
	}
	console.log('test');
}

function getInput(options, callback) {
	console.log('getInput');
	allUserData.push(options);
	callback(options);
	console.log(allUserData);
}

getInput({name: "Nikola", speciality: "JavaScript"}, logStuff);