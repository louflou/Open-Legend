$(".attr-table .attr-score").on("keyup change click, scoreDiceCost");

function score(){
    
    var score = $(this).val();
    var cost = calcCost(score);
    var dice = calcCost (dice);
    $(this).parent().next().children().first().val(cost)
    $(this).parent().next().children().first().val(dice)
}

function calcCost(score){
    if(score == 0) {
        return 0;
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
    }
}

