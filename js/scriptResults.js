$(document).ready(function(){
    getData();
    removeHostingBanner();
});

let getData = function () {
    let age = sessionStorage.getItem("age");
    let height = sessionStorage.getItem("height");
    let weight = sessionStorage.getItem("weight");
    let gender = sessionStorage.getItem("gender");
    let activity = sessionStorage.getItem("activity");
    let resultsCalories =calculateCalories(age,height,weight,gender,activity);
    let currentResult = resultsCalories[0];
    let weekResult = currentResult * 7;
    let idealWeight = calculateIdealWeight(height,gender);
    let bmi = calculateBmi(weight,height);
    let maxMuscle = calculateMaxMuscle(height);
    fillInSite(age,height,weight,gender,activity,currentResult,weekResult,idealWeight,bmi,maxMuscle,resultsCalories);
};

let calculateCalories = function (age,height,weight,gender,activity) {
    let result = 0;
    if (gender == 'male') {
        result = 66 + (13.7 * weight) + (5 * height) - (6.8 * age);
    } else {
        result = 655 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
    }
    let bmr = result;
    let sedentary = bmr * 1.2;
    let light = bmr * 1.375;
    let moderate = bmr * 1.55;
    let heavy = bmr * 1.725;
    let athlete = bmr * 1.9;

    switch (activity) {
        case "sedentary":
            result = sedentary;
            break;
        case "light":
            result = light;
            break;
        case "moderate":
            result = moderate;
            break;
        case "heavy":
            result = heavy;
            break;
        case "athlete":
            result = athlete;
            break;
    }
    result = parseInt(result);
    let arrayWithAllResults = [result,bmr,sedentary,light,moderate,heavy,athlete];
    return arrayWithAllResults;
};

let calculateIdealWeight = function (height,gender,) {
    // ideal weight

    //Men: Ideal Body Weight (kg) = 50 kg + 2.3 kg per inch over 5 feet.

    //Women: Ideal Body Weight (kg) = 45.5 kg + 2.3 kg per inch over 5 feet.

    // 5 feet = 152 cm
    // 1 inch = 2,54cm

    let fiveFeetInCm = 152;
    let heightOverFiveFeet = height - fiveFeetInCm;
    let heightOverToInches = heightOverFiveFeet / 2.54;
    let idealWeight = 0;

    if (gender == 'male') {
        idealWeight = 50 + (2.3 * heightOverToInches);
    } else {
        idealWeight = 45.5 + (2.3 * heightOverToInches);
    }

    return idealWeight;

};

let calculateBmi = function(weight,height){
    // BMI

    // BMI = weight (kg) ÷ height2 (m2)

    let bmi = (weight / (height * height) * 10000);
    let num = Number(bmi);
    let roundedString = num.toFixed(2);
    let rounded = Number(roundedString);
    return rounded;
};

let calculateMaxMuscle = function(height){
    // Maximum muscular potential
    //(Height in centimeters – 100) = Body weight in kilo (“shredded”, i.e. 5-6% body fat).

    let maximumMuscle = height - 100;
    return maximumMuscle;
};


let fillInStats = function(age,height,weight,gender,activity){
    $("#statsInput").text("age = "+age + " height = "  + height + " weight = " + weight + " gender = " + gender + " activity = " + activity);
};

let fillInCalories = function (result,weekResult) {
    $(".caloriesDay").text(result);
    $(".caloriesWeek").text(weekResult);
};

let fillInActivityCalories = function (arrayResults,activity) {
    $(".sedentary").text(parseInt(arrayResults[1]));
    $(".light_exercise").text(parseInt(arrayResults[2]));
    $(".moderate").text(parseInt(arrayResults[3]));
    $(".heavy").text(parseInt(arrayResults[4]));
    $(".athlete").text(parseInt(arrayResults[5]));
    if(activity == 'sedentary'){
        $(".sedentary").parent().css("color","blue");
    }
    if(activity == 'light'){
        $(".light_exercise").parent().css("color","blue");
    }
    if(activity == 'moderate'){
        $(".moderate").parent().css("color","blue");
    }
    if(activity == 'heavy'){
        $(".heavy").parent().css("color","blue");
    }
    if(activity == 'athlete'){
        $(".athlete").parent().css("color","blue");
    }

};

let fillIdealWeight =function (idealWeight) {
    $(".idealWeight").text(parseInt(idealWeight));
};

let fillInBMI = function (bmi) {
    $(".bmi").text(bmi);
    if(bmi <18.5){
        $(".underweight td").css("color","blue");
    }
    if(bmi>18.5 && bmi <24.99){
        $(".normal td").css("color","blue");
    }
    if(bmi>25 && bmi <29.99){
        $(".overweight td").css("color","blue");
    }
    if(bmi>29.99){
        $(".obese td").css("color","blue");
    }
};

let fillInMaxMuscle = function (maxMuscle) {
    $(".maxMuscle").text(maxMuscle);
};

let fillInSite = function (age,height,weight,gender,activity,result,weekResult,idealWeight,bmi,maxMuscle,arrayResults) {
    fillInStats(age,height,weight,gender,activity);
    fillInCalories(result,weekResult);
    fillInActivityCalories(arrayResults,activity);
    fillIdealWeight(idealWeight);
    fillInBMI(bmi);
    fillInMaxMuscle(maxMuscle);
};
