var i18n = {

	i18nMap : null,

	init : function(translationsMap) {
		this.i18nMap = translationsMap;
	},

	trn : function (singular, plural, quantity) {
		var args = [].splice.call(arguments, 3);
		var text = quantity != 1 ? plural : singular;
		[].unshift.call(args, text);
		return this.tr.apply(this, args);
	},
	
	tr : function (singular) {
		if (!this.i18nMap) throw new Error("Not initialized");

		var text = singular
		if (typeof(this.i18nMap) != 'undefined' && this.i18nMap[singular]) {
			text = this.i18nMap[singular];
		}

		var args = arguments;

		return text.replace(/\{(\d+)\}/g, function(match, p1) {
			return args[parseInt(p1, 10) + 1];
		});
	}
};

module.exports = i18n;
