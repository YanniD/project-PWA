<?php
$age = $_POST['age'];
$weight = $_POST['weight'];
$height = $_POST['height'];
$gender = $_POST['gender'];
$activity = $_POST['activity'];

if ($gender == 'male') {
    $result = 66 + (13.7 * $weight) + (5 * $height) - (6.8 * $age);
} else {
    $result = 655 + (9.6 * $weight) + (1.8 * $height) - (4.7 * $age);
}
$bmr = $result;
$sedentary = $bmr * 1.2;
$light = $bmr * 1.375;
$moderate = $bmr * 1.55;
$heavy = $bmr * 1.725;
$athlete = $bmr * 1.9;

switch ($activity) {
    case "sedentary":
        $result = $sedentary;
        break;
    case "light":
        $result = $light;
        break;
    case "moderate":
        $result = $moderate;
        break;
    case "heavy":
        $result = $heavy;
        break;
    case "athlete":
        $result = $athlete;
        break;
}
$resultFormatted = number_format($result);
$weekResult = $result * 7;
$weekResultFormatted = number_format($weekResult);

// ideal weight

//Men: Ideal Body Weight (kg) = 50 kg + 2.3 kg per inch over 5 feet.

//Women: Ideal Body Weight (kg) = 45.5 kg + 2.3 kg per inch over 5 feet.

// 5 feet = 152 cm
// 1 inch = 2,54cm
$fiveFeetInCm = 152;
$heightOverFiveFeet = $height - $fiveFeetInCm;
$heightOverToInches = $heightOverFiveFeet / 2.54;
if ($gender == 'male') {
    $idealWeight = 50 + (2.3 * $heightOverToInches);
} else {
    $idealWeight = 45.5 + (2.3 * $heightOverToInches);
}

$idealWeight = number_format($idealWeight);

// BMI

// BMI = weight (kg) ÷ height2 (m2)

$bmi = number_format(($weight / ($height * $height) * 10000), 2);

// Maximum muscular potential
//(Height in centimeters – 100) = Body weight in kilo (“shredded”, i.e. 5-6% body fat).

$maximumMuscle = $height - 100;
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!-- Compiled and minified CSS -->
    <link rel="stylesheet" href="css/materialize.min.css">
    <link rel="stylesheet" href="css/custom.css">
    <link rel="manifest" href="manifest.json">

</head>
<body>

<div class="container">


    <header>
        <h1 class="center-align">TDEE calculator and more</h1>
    </header>

    <h1 class="center-align">Your stats</h1>
    <p> age = <?php echo $age ?>, height = <?php echo $height ?> , weight = <?php echo $weight ?> , gender
        = <?php echo $gender ?> , activity = <?php echo $activity ?></p>


    <div class="row center-align ">
        <div class="col l4 caloriesBox">
            <h1>Your maintance calories</h1>
            <p>
                <span><?php echo $resultFormatted ?></span>
                <br>
                calories per day
            </p>
            <hr>
            <p>
                <span><?php echo $weekResultFormatted ?></span>
                <br>
                calories per week
            </p>
        </div>

        <div class="col l8">
            <p>Based on your stats, the best estimate for your maintenance calories is
                <?php echo $result ?> calories per day based on the Mifflin-St Jeor Formula, which is widely known
                to be the most accurate. The table below shows the difference if you were to have selected a
                different activity level.
            </p>
            <table class="highlight">
                <tr>
                    <td>Sedentary</td>
                    <td><?php echo $bmr ?></td>
                </tr>
                <tr>
                    <td>light</td>
                    <td><?php echo $light ?></td>
                </tr>
                <tr>
                    <td>moderate</td>
                    <td><?php echo $moderate ?></td>
                </tr>
                <tr>
                    <td>heavy</td>
                    <td><?php echo $heavy ?></td>
                </tr>
                <tr>
                    <td>athlete</td>
                    <td><?php echo $athlete ?></td>
                </tr>
            </table>
        </div>
    </div>


    <div class="row">
        <div class="col l6 center-align">
            <h1 class="center-align">Ideal weight: <?php echo $idealWeight ?></h1>

            <p>
                Your ideal body weight is estimated to be between <?php echo $idealWeight ?> kg based on the various
                formulas listed below. These formulas are based on your height and represent averages so don't take them
                too seriously, especially if you lift weights.
            </p>
            <p>
                Formula used : B.J. Devine Formula (1974) <?php echo $idealWeight ?> KG
            </p>
        </div>
        <div class="col l6">
            <h1 class="center-align">BMI score : <?php echo $bmi ?> </h1>
            <p class="center-align  ">Your BMI is <?php echo $bmi ?> which means you are classified as <span
                        id="bmiCategory"></span></p>
            <table class="centered highlight">
                <tr>
                    <td>18.5 or less is Underweight</td>
                </tr>
                <tr>
                    <td>18.5 - 24.99 is Normal Weight</td>
                </tr>
                <tr>
                    <td>25 - 29.99 is Overweight</td>
                </tr>
                <tr>
                    <td>30+ is Obese</td>
                </tr>
            </table>

        </div>
    </div>
    <div class="row">
        <div class="col l12 center-align">
            <h1>Maximum Muscular potential</h1>
            How ripped could you get? According to <a
                    href="https://leangains.com/maximum-muscular-potential-of-drug-free-athletes-updated-dec-31st/">Martin
                Berkhan's formula</a>, your maximum muscular potential is <?php echo $maximumMuscle ?> kg at 5% body
            fat.
        </div>

    </div>
    <div class="row">
        <div class="col s12 l12">
            <footer class="center-align">
                <p class="center-align">Made by yanni Derous</p>
            </footer>
        </div>

    </div>

</div>

<script src="js/jquery-3.1.0.min.js"></script>
<!-- Compiled and minified JavaScript -->
<script src="js/materialize.min.js"></script>

<script src="js/script.js"></script>
</body>
</html>