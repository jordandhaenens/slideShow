"use strict";
console.log("main.js loaded");

let $ = require('jquery');
let api = require('./api_Interact');


function whatDay(){
	let d = new Date(),
	year = d.getFullYear(),
	month = d.getMonth() + 1,
    day = d.getDate();

    let date = year + "-";
    if (month < 10){
    	date += "0" + (month);
    }else {
    	date += (month);
    }
    date += "-" + day;

    return date;
}

// let today = whatDay();



// api.picGetter()
// .then(function(data){
// 	console.log('data', data);
// 	// let img = `<img alt="${data.title}" src="${data.url}">`;
// 	$('.slideImg').attr("src", data.url, "alt", "${data.title}");
// 	$('.description').html(data.explanation);
// });

// let picOnLoad = function(date){
// 	api.picGetter(date)
// 	.then(function(data){
// 		$('.slideShow').html(data);
//  	});
// };


// console.log("date", date());






