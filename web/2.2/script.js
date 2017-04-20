$(document).ready(function(){
	// Körs när sidan laddats klart
	$(".attr-table .attr-score").on("keyup change", scoreCostDice);

});


function calcSumCost(){
    var sumCost = 0;
    $(".attr-cost").each(function(){
        sumCost += +$(this).val();
    });
    $(".attr-invested").val(sumCost);
    //$(".attr-table .attr-score").prop("disabled", true);
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
    $(this).parent().next().children().first().val(cost);
    $(this).parent().next().next().children().first().val(dice);
	calcSumCost()
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

