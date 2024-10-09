	var numberList = [
		{ id: 1, name: "amjad", email: "hafizaamir786@gmail.com", designation: "Technician" },
		{ id: 2, name: "adnan", email: "aamir786@gmail.com", designation: "Analyst" },
		{ id: 3, name: "irfan", email: "hafiz786@gmail.com", designation: "Consultant" },
		{ id: 4, name: "asif", email: "afimir786@gmail.com", designation: "Accountant" },
		{ id: 5, name: "shahzad", email: "izaamisss786@gmail.com", designation: "Teacher" },
		{ id: 6, name: "Tariq", email: "fizaaqwe86@gmail.com", designation: "Watchman" },
		{ id: 7, name: "Hussai", email: "izaamir786@gmail.com", designation: "Global Managemen" },
	];
	for (var i = 0; i < numberList.length; i++) {
		var idtr = document.createElement("tr");

		var idtd = document.createElement("td");

		var natd = document.createElement("td");

		var emtd = document.createElement("td");

		var detd = document.createElement("td");

		idtd.innerHTML = numberList[i]['id'];

		natd.innerHTML = numberList[i]['name'];

		emtd.innerHTML = numberList[i]['email'];

		detd.innerHTML = numberList[i]['designation'];

		idtr.appendChild(idtd);

		idtr.appendChild(natd);

		idtr.appendChild(emtd);

		idtr.appendChild(detd);

		document.getElementById('tboid').appendChild(idtr);
	}