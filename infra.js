import { Controller } from '/vendor/infrajs/controller/src/Controller.js'
import { Event } from '/vendor/infrajs/event/Event.js'
import { DOM } from '/vendor/akiyatkin/load/DOM.js'

DOM.wait('load').then(() => {
	//code
	if (!window.sessionStorage) return;
	var types = window.sessionStorage.getItem('savedtypescode');
	if (!types) return;
	types = types.split('|');
	for (var i = 0, l = types.length; i < l; i++) {
		var type = types[i];
		var code = window.sessionStorage.getItem('savedcode' + type);
		if (code) {
			try {
				eval(code);
			} catch (e) {
				console.error('memcode error', code);
			}
		}
	}
})