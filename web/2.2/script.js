$(document).ready(function(){
	// Körs när sidan laddats klart
    $("#levelValue").on("keyup change", levelCalc);
<<<<<<< Updated upstream
    // När man ändrar Level i General/info så hamnar värdet i id #levelValue, funktionen level Calc körs.
	$(".attr-table .attr-score").on("keyup change", scoreCostDice);
    
=======
	$(".attr-table .attr-score").on("keyup change", scoreCostDice);    
>>>>>>> Stashed changes
    
});


<<<<<<< HEAD
function updateAttributePoints(){
    var maxAttrPoints = $('#attr-totalt-points').val();
    var prevScore = $(this).data('val');
    var sumCost = calcSumCost();
    if(sumCost > maxAttrPoints){
        alert("You don't have enough Attribute Points!");
        $(this).val(prevScore);
        calcSumCost();
    }
}


=======
>>>>>>> parent of afd9725... VIKTOR & LOLA E KRÄNKTA
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
    var prevScore = $(this).data('val');
    var score = $(this).val();
    var cost = calcCost(score);
    var dice = calcDice (score);
    var sumCost = calcSumCost();
    $(this).parent().next().children().first().val(cost);
    $(this).parent().next().next().children().first().val(dice);
    if(sumCost > 20){
        alert("You don't have enough Attribute Points!");
        $(this).val(prevScore);
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
    
    // Sparar värdet från #levelValue och kör funktioner för att räkna ut xp och totalpoints, returnerar till #xp-input och #attr-total-points, 
    
    var levelValue = $(this).val();
    
    
    var xpValue = levelToXp (levelValue);
    $("#xp-input").val(xpValue);
    
    var totalPoints = leveltoAttributePoints (levelValue);
    $("#attr-totalt-points").val(totalPoints);
    
}


    
function levelToXp (levelValue){
    // Tar värdet från levelValue och returnerar korrekt värde till levelToXp
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


