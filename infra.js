
var types = window.sessionStorage.getItem('savedtypescode');
if (types) {
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
}
