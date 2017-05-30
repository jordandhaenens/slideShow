"use strict";
console.log("api_Interact.js loaded");

let info = require('./apiConfig'),
	api = info.getKey(),
	$ = require('jquery');


let apiInfo = {
	url: api.url,
	key: api.key
};

// console.log("apiInfo", apiInfo);

function picGetter(startDate){
	console.log("url", apiInfo.url);
	console.log("key", apiInfo.key);
	console.log("startDate", startDate);
	return new Promise(function(resolve, reject){
		$.ajax({
			url: `${apiInfo.url}?${apiInfo.key}&date=${startDate}`
		}).done(function(data){
			resolve(data);
		}).fail(function(error){
			reject(error);
		});
	});
}


module.exports = {picGetter};