import { Event } from '/vendor/infrajs/event/Event.js'

/*
	use:
	Code.save('popup','contacts.show();');
	Event.one('Layer.onhide', function () {
		Code.remove('popup');
	}, '', layer);
*/

let Code = {}
Code.types = {};
Code.types_save = function () {
	var types = [];
	for (var i in Code.types) types.push(i);
	types = types.join('|');
	window.sessionStorage.setItem('savedtypescode', types);
}

Code.type_add = function (type) {
	Code.types[type] = true;
	Code.types_save();

}
Code.type_remove = function (type) {
	delete Code.types[type];
	Code.types_save();
}

Code.remove = function (type, code) {
	if (!window.sessionStorage) return;
	Code.type_remove(type);
	if (code) {
		var oldcode = window.sessionStorage.getItem('savedcode' + type);
		if (oldcode != code) return;//Там уже чужой код сохранён
	}
	window.sessionStorage.removeItem('savedcode' + type);
}
Code.save = function (type, code) {
	if (!window.sessionStorage) return;
	Code.type_add(type);
	window.sessionStorage.setItem('savedcode' + type, code);
}

export {Code}