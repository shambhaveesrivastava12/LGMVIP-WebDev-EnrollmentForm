var btn = document.getElementById("btn");
btn.addEventListener("click",displayDetails);

var row = 1;

function displayDetails(){
	var name = document.getElementById("name").value;
	var mail = document.getElementById("mail").value;
	var age = document.getElementById("age").value;
	var web= document.getElementById("web").value;
	var img = document.getElementById("img").value;
	var gender = document.querySelector('input[name="gender"]:checked');
	var skillsArray = document.querySelectorAll('input[name="skills"]:checked');

	if(!name || !mail || !age || !web || !img || !gender ||skillsArray.length===0){
		alert("please fill all the details");
		return;
	}

	var skills = Array.from(skillsArray).map(skill => skill.value).join(", ");

	var display = document.getElementById("display");

	var newRow = display.insertRow(row);

	var cell1 = newRow.insertCell(0);
	var cell2 = newRow.insertCell(1);
	var cell3 = newRow.insertCell(2);
	var cell4 = newRow.insertCell(3);
	var cell5 = newRow.insertCell(4);
	var cell6 = newRow.insertCell(5);
	var cell7 = newRow.insertCell(6);


	cell1.innerHTML = name;	
	cell2.innerHTML = mail;	
	cell3.innerHTML = age;	
	cell4.innerHTML = web;	
	cell5.innerHTML = img;	
	cell6.innerHTML = gender.value;	
	cell7.innerHTML = skills;	
		

	row++;
}









































