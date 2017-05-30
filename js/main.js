"use strict";
console.log("main.js loaded");

let $ = require('jquery');
let api = require('./api_Interact');

let today = whatDay(0);
console.log("today", today);


function whatDay(i){
    let d = new Date(),
    dMinus = new Date(d.setDate(d.getDate() - i)),
    year = dMinus.getFullYear(),
    month = dMinus.getMonth() + 1,
    day = dMinus.getDate();
    // console.log("dMinus", dMinus);

    let date = year + "-";
    if (month < 10){
        date += "0" + (month);
    }else {
        date += (month);
    }
    date += "-" + day;
    return date;
}

//
function getPic(startDate){
    api.picGetter(startDate)
    .then(function(data){
        $('.slideShow').attr({
            "style": `background-image: url(${data.url}`,
            "alt": data.title
        }).fadeIn(2500);
        $('.description').html(data.explanation).fadeIn(2500);
    });
}


//
let picOnLoad = function(today){
    console.log("picOnLoad is firing");
    // $('.slideShow').attr("style", "display: none");
    // $('.description').attr("style", "display: none");
    api.picGetter(today)
    .then(function(data){
        console.log("data", data);
        $('.slideShow').attr({
            "style": `background-image: url(${data.url}`,
            "alt": data.title
        });
        $('.description').html(data.explanation);
    });
};
picOnLoad(today);
//
// let autoRotate = setInterval(getPic(), 3000);
let i = 1;//this is wrong if someone clicks the 'next' btn.
let n = 6;//this is wrong if someone clicks the 'previous' btn.
$('.navPrevious').on("click", function(){
    $('.slideShow').fadeOut(1500);
    $('.description').fadeOut(1500);
    let startDate = whatDay(i);
    getPic(startDate);
    if (i < 7){
        i++;
        // n--;
        console.log("prev i", i, "prev n", n);
    } else {
        i = 1;
    }
});

$('.navNext').on("click", function(){
    $('.slideShow').fadeOut(1500);
    $('.description').fadeOut(1500);
    if (i === 0){
        i = 7;
    }
    let startDate = whatDay(i - 1);//my logic is broken here. How to
    getPic(startDate);
    if (i < 7){
        // n--;
        i--;
        // console.log("next i", i, "next n", n);
    }
});





