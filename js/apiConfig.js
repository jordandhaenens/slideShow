"use strict";
console.log("apiConfig.js loaded");

var getKey = function(){
	return {
		url: "https://api.nasa.gov/planetary/apod",
		key: "api_key=insertYourKey"
	};
};
// console.log("getKey", getKey);

module.exports = {getKey};