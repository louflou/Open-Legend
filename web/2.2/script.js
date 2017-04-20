$(document).ready(function(){
	// Körs när sidan laddats klart
    $("#levelValue").on("keyup change", levelCalc);
	$(".attr-table .attr-score").on("keyup change", scoreCostDice);
    
    
});


function calcSumCost(){
    var sumCost = 0;
    $(".attr-cost").each(function(){
        sumCost += +$(this).val();
    });
    $(".attr-invested").val(sumCost);
    return sumCost;  
}

/*
function updateAttributePoints(cost){
    if(sumCost >= 40){
            alert("SUM IS GRATER THAN MAX VALUE");
        $(this).parent().next().children().first().val();
            
    }
}
*/


function scoreCostDice(){
    var score = $(this).val();
    var cost = calcCost(score);
    var dice = calcDice (score);
    var sumCost = calcSumCost();
    $(this).parent().next().children().first().val(cost);
    $(this).parent().next().next().children().first().val(dice);
    if(sumCost > 40){
        alert("You don't have enough Attribute Points!");
    }
    
    // updateAttributePoints(cost)
}

function calcCost(score){
    if(score == 0) {
        return "";
    }else if (score == 1) {
        return 1;
    }else if (score == 2) {
        return 3;
    }else if (score == 3) {
        return 6;
    }else if (score == 4) {
        return 10;
    }else if (score == 5) {
        return 15;
    }else if (score == 6){
        return 21;
    }else if (score == 7){
        return 28;
    }else if (score == 8){
        return 36;
    }else if (score == 9){
        return 45;
    }
}

function calcDice(score){
    if (score == 0) {
        return "";
    }else if (score == 1) {
        return "1d4";
    }else if (score == 2) {
        return "1d6";
    }else if (score == 3) {
        return "1d8";
    }else if (score == 4) {
        return "1d10";
    }else if (score == 5) {
        return "2d6";
    }else if (score == 6) {
        return "2d8";
    }else if (score == 7) {
        return "2d10";
    }else if (score == 8) {
        return "3d8";
    }else if (score == 9) {
        return "3d10";
    }
}

function levelCalc(){
    
    var levelValue = $(this).val();
    
    var xpValue = levelToXp (levelValue);
    $("#xp-input").val(xpValue);
    console.log("hej")
    var totalPoints = leveltoAttributePoints (levelValue);
    $("#attr-totalt-points").val(totalPoints);
    
}


    
function levelToXp (levelValue){
    
    if (levelValue == 1) {
        return "";
    }else if (levelValue == 2) {
        return 3;
    }else if (levelValue == 3) {
        return 6;
    }else if (levelValue == 4) {
        return 9;
    }else if (levelValue == 5) {
        return 12;
    }else if (levelValue == 6) {
        return 15;
    }else if (levelValue == 7) {
        return 18;
    }else if (levelValue == 8) {
        return 21;
    }else if (levelValue == 9) {
        return 24;
    }else if (levelValue == 10) {
        return 27;
    }
    
 
}

function leveltoAttributePoints(levelValue){
    
    if (levelValue == 1) {
        return 40;
    }else if (levelValue == 2) {
        return 49;
    }else if (levelValue == 3) {
        return 58;
    }else if (levelValue == 4) {
        return 67;
    }else if (levelValue == 5) {
        return 76;
    }else if (levelValue == 6) {
        return 85;
    }else if (levelValue == 7) {
        return 94;
    }else if (levelValue == 8) {
        return 103;
    }else if (levelValue == 9) {
        return 112;
    }else if (levelValue == 10) {
        return 121;
    }
}


