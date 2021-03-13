const expect = require("chai").expect;

describe("Functions into mmm-testing.js", function () {
	// Fake for use by newsletter.js
	Module = {};
	Module.definitions = {};
	Module.register = function (name, moduleDefinition) {
		Module.definitions[name] = moduleDefinition;
	};

	before(function () {
		// load newsfeed.js
		require("../mmm-testing.js");
		//Module.definitions.mmm-testing.config = {};
	});
});