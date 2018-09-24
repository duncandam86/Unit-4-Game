
// create variable for random number 
var randomNumber;
// grab element from html document
$('#randomNumber').html(randomNumber);

// create  variable for random point for each crystal
// grab element from html document
var redCrystalPoint;
$('#redCrystal').html(redCrystalPoint);
var blueCrystalPoint;
$('#blueCrystal').html(blueCrystalPoint);
var yellowCrystalPoint;
$('#yellowCrystal').html(yellowCrystalPoint);
var grennCrystalPoint;
$('greenCrystal').html(grennCrystalPoint);

// create variable to count win, losses and total score from user
var wins = 0;
var losses = 0;
var totalScore;
// grab elment from html document for wins, looses and total score
$('#Wins').html(wins);
$('#Losses').html(losses);
$('#userScore').html(totalScore);

function startUp() {
    //create function to generate random number 
    randomNumber = Math.floor(Math.random() * 120 + 18) // generating numbers between 18 and 138

    //create function to generate random points for each crystal between 1 and 10
    redCrystalPoint = Math.floor(Math.random() * 9 + 1);
    blueCrystalPoint = Math.floor(Math.random() * 9 + 1);
    yellowCrystalPoint = Math.floor(Math.random() * 9 + 1);
    greenCrystalPoint = Math.floor(Math.random() * 9 + 1);

    //calling numbers
    randomNumber;
    console.log(randomNumber);
    $('#randomNumber').html(randomNumber);
    redCrystalPoint;
    console.log(redCrystalPoint);
    blueCrystalPoint;
    console.log(blueCrystalPoint);
    yellowCrystalPoint;
    console.log(yellowCrystalPoint);
    greenCrystalPoint;
    console.log(greenCrystalPoint);

    //total score starts with 0
    totalScore = 0;
    $('#userScore').html(totalScore);
}

//create function to tally wins
function win() {
    alert("🎊 You won 🎉🏆");
    wins++;
    console.log(wins);
    $('#Wins').html(wins);
    startUp();
}

//create function to tally losses
function lost() {
    alert("👎 You lost 💀");
    losses++;
    console.log(losses);
    $('#Wins').html(wins);
    startUp();
}

//create onlick function for redcrytsal
$('#redCrystal').on('click', function () {
    // add redCrystal point to totalScore
    totalScore = totalScore + redCrystalPoint;
    console.log(totalScore)
    $('#userScore').html(totalScore);
    // decide if totalScore is matched or not (win or lose)
    if (totalScore === randomNumber) {
        win();
    }
    else if (totalScore > randomNumber) {
        lost();
    }
})
//create onclick function for bluecrystal
$('#blueCrystal').on('click', function () {
    // add blueCrystal point to totalScore
    totalScore = totalScore + blueCrystalPoint;
    console.log(totalScore);
    $('#userScore').html(totalScore);
    // decide if totalScore is matched or not (win or lose)
    if (totalScore === randomNumber) {
        win();
    }
    else if (totalScore > randomNumber) {
        lost();
    }
})

//create onclick function for yellowcrystal
$('#yellowCrystal').on('click', function () {
    // add yellowCrystal point to totalScore
    totalScore = totalScore + yellowCrystalPoint;
    console.log(totalScore);
    $('#userScore').html(totalScore);
    // decide if totalScore is matched or not (win or lose)
    if (totalScore === randomNumber) {
        win();
    }
    else if (totalScore > randomNumber) {
        lost();
    }
})

//create onclick function for greencrystal
$('#greenCrystal').on('click', function () {
    // add greenCrystal point to totalScore
    totalScore = totalScore + greenCrystalPoint;
    console.log(totalScore);
    $('#userScore').html(totalScore);
    // decide if totalScore is matched or not (win or lose)
    if (totalScore === randomNumber) {
        win();
    }
    else if (totalScore > randomNumber) {
        lost();
    }
})


