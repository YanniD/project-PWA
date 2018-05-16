$(document).ready(function(){
    console.log("ready");
    $('select').formSelect();
    removeHostingBanner()
});
    //Remove the banner on the free hosting site
let removeHostingBanner = function(){
    $("[title='Hosted on free web hosting 000webhost.com. Host your own website for FREE.']").parent().remove();
};

let calculateData = function () {
    let gender = $("input[name=\"gender\"]:checked").val();
    let height = $("#height").val();
    let weight = $("#weight").val();
    let age = $("#age").val();
    let activity = $("#activity").val();


    if (typeof(Storage) !== "undefined") {
        sessionStorage.setItem("gender", gender);
        sessionStorage.setItem("height", height);
        sessionStorage.setItem("weight", weight);
        sessionStorage.setItem("age", age);
        sessionStorage.setItem("activity", activity);

    } else {
        console.log("no support");
    }
    location.replace("result.html");

};





if('serviceWorker' in navigator){
    try{
    navigator.serviceWorker.register('sw.js');
    console.log("SW registered");
    } catch(error){
        console.log("SW failed regirstraiotn");
    }
}