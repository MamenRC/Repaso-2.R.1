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
