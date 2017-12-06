'use strict';
/* Generador de historias de usuario Mamen y Teresa
var user;
var need;
var reason;
var story;
function complete() {
	user = prompt('¿Quién eres?');
	need = prompt('¿Qué necesitas?');
	reason = prompt('¿Pa qué?');
	story = {user: user, need: need, reason: reason};

	var result = 'yo como ' + story.user + ' ,quiero' + story.need + ' para ' + story.reason;
	return result;

}
alert (complete());
*/
//Adalabers
var adalabers = [
	{name: "María", age: 29 , job: "Diseñadora"},
	{name: "Lucía" , age: 31, job: "Ingeniera química" },
	{name: "Susana", age: 34, job: "Periodista"},
	{name: "Rocío", age: 25 , job: "Actriz" },
	{name: "Inma", age: 21 , job: "Diseñadora"}
];
//Número Adalabers
var length = adalabers.length;
function countAdalabers(){
	return length;
}
alert(countAdalabers());
//Media de Adalabers
var first = (adalabers[0].age);
var second = (adalabers[1].age);
var third = (adalabers[2].age);
var fourth = (adalabers[3].age);
var fifth = (adalabers[4].age);
var totalage = first + second + third + fourth + fifth;
function total(){
	return totalage;
}
alert(total());
var average = totalage / 5;
function totalaverage(){
	return average;
}
alert(totalaverage());
//Adalaber más joven
var ages = [first, second, third, fourth, fifth];
var one = (adalabers[0].name);
var two = (adalabers[1].name);
var three = (adalabers[2].name);
var four = (adalabers[3].name);
var five = (adalabers[4].name);
function youngest(){
if (first < second && first < third && first < fourth && first < fifth){
	return(one);
} else if (second < first && second < third && second < fourth && second < fifth){
	return(two);
} else if (third < first && third < second && third < fourth && third < fifth){
	return(three);
} else if (fourth < first && fourth < third && fourth < second && fourth < fifth){
	return(four);
} else if (fifth < first && fifth < third && fifth < fourth && fifth < second){
	return(five);
} else {
	return("Qué paxó?")
}
}
alert(youngest()); //Intentar usar Math.min()

//Adalabers que son diseñadoras
var job1 = (adalabers[0].job);
var job2 = (adalabers[1].job);
var job3 = (adalabers[2].job);
var job4 = (adalabers[3].job);
var job5 = (adalabers[4].job);
var jobs = [job1, job2, job3, job4, job5]
function designers(){
	for (var i = 0; i < length - 1; i++){
	if (job1 == "Diseñadora"){
		return(one);
	}else if (job2 == "Diseñadora"){
		return(two);
	} else if (job3 == "Diseñadora"){
		return(three);
	}else if (job4 == "Diseñadora"){
		return(four);
	}else if (job5 == "Diseñadora"){
		return(five);
	}else{
		return("No designers")
	}
}
}
alert(designers()); //Algo me falla
