<?php
header("Strict-Transport-Security:max-age=63072000");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Form</title>
    <meta name="author" content="Yanni Derous">
    <meta name="description" content="TDEE calculator and more">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link rel="shortcut icon" type="image/png" href="images/icons/favicon.ico"/>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!-- Compiled and minified CSS -->
    <link rel="stylesheet" href="css/materialize.min.css">
    <link rel="stylesheet"  href="css/custom.css">
    <link rel="manifest" href="manifest.json">
</head>

<body>
<div class="container">
    <h1>Learn how many calories you burn every day</h1>
    <form id="calculateForm" action="result.html" onsubmit="event.preventDefault(); calculateData();">
        <div id="radio">
            <div id="genderGroup">
                <label for="genderGroup">Gender: </label>
            <label>
                <input class="with-gap" name="gender" type="radio" value="male" checked />
                <span>male</span>
            </label>
            <label>
                <input class=with-gap name="gender" type="radio" value="female"/>
                <span>female</span>
            </label>
            </div>
        </div>
        <div class="input-field col s6">
            <input placeholder="Age" id="age" name="age" min="1" max="110" type="number" required=required class="validate">
            <label for="age">Age</label>
        </div>
        <div class="input-field col s6">
            <input placeholder="height" id="height" name="height" type="number" required="required" min="120" max="230" class="validate">
            <label for="height">Height(In CM)</label>
        </div>
        <div class="input-field col s6">
            <input placeholder="weight" id="weight" name="weight" type="number" min="20" max="200" required="required" class="validate">
            <label for="weight">Weight(In KG)</label>
        </div>
        <div class="input-field col s12 l12">
            <select name="activity" id="activity">
                <option value="sedentary">sedentary</option>
                <option value="light">light</option>
                <option value="moderate">medium</option>
                <option value="heavy">heavy</option>
                <option value="athlete">athlete</option>
            </select>
            <label for="activity">Activity</label>
        </div>

        <button class="btn waves-effect waves-light" type="submit" name="submit" value="submit">
            <i class="material-icons right">send</i>
        </button>
    </form>

</div>


    <script src="js/jquery-3.1.0.min.js"></script>
    <script src="js/materialize.min.js"></script>
    <script src="js/script.js"></script>


</body>
</html>