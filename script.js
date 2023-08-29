var btn = document.getElementById("btn");
btn.addEventListener("click",displayDetails);

var row = 1;

function displayDetails(){
	var name = document.getElementById("name").value;
	var mail = document.getElementById("mail").value;
	var age = document.getElementById("age").value;
	var web= document.getElementById("web").value;
	var img = document.getElementById("img").value;
	var male = document.getElementById("male").value;

	if(!name || !mail || !age || !web || !img  ){
		alert("please fill all the details");
		return;
	}

	var display = document.getElementById("display");

	var newRow = display.insertRow(row);

	var cell1 = newRow.insertCell(0);
	var cell2 = newRow.insertCell(1);
	var cell3 = newRow.insertCell(2);
	var cell4 = newRow.insertCell(3);
	var cell5 = newRow.insertCell(4);
	// var cell6 = newRow.insertCell(5);


	cell1.innerHTML = name;	
	cell2.innerHTML = mail;	
	cell3.innerHTML = age;	
	cell4.innerHTML = web;	
	cell5.innerHTML = img;	
	// cell6.innerHTML = skills;	

	row++;
}









































// var list1 = [];
// var list2 = [];
// var list3 = [];
// var list4 = [];
// var list5 = [];
// var list6 = [];






// var n = 1;
// var x = 0;

// 		function AddRow(){

// 			var AddRown = document.getElementById('show');
// 			var NewRow = AddRown.insertRow(n);

// 			list1[x] = document.getElementById("name").value;
// 			list2[x] = document.getElementById("mail").value;
// 			list3[x] = document.getElementById("age").value;
// 			list4[x] = document.getElementById("web").value;
// 			list5[x] = document.getElementById("img").value;
// 			list6[x] = document.getElementById("skills").value;
			

// 			var cel1 = NewRow.insertCell(0);
// 			var cel2 = NewRow.insertCell(1);
// 			var cel3 = NewRow.insertCell(2);
// 			var cel4 = NewRow.insertCell(3);
// 			var cel5 = NewRow.insertCell(4);
// 			var cel6 = NewRow.insertCell(5);
		

// 			cel1.innerHTML = list1[x];
// 			cel2.innerHTML = list2[x];
// 			cel3.innerHTML = list3[x];
// 			cel4.innerHTML = list4[x];
// 			cel5.innerHTML = list5[x];
// 			cel6.innerHTML = list6[x];
			

// 			n++;
// 			x++;
// 		}