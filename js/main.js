'use strict';

var user;
var need;
var reason;
var story;
function complete() {
	user = prompt('¿Quién eres?');
	need = prompt('¿Qué necesitas?');
	reason = prompt('¿Pá qué?');
	story = {user: user, need: need, reason: reason};

	var result = 'yo como ' + story.user + ' ,quiero' + story.need + ' para ' + story.reason;
	return result;

}
alert (complete());
