/*
$(document).ready(function(){
    $(".attr-table .attr-score").on({
        change: function(){
            alert("helloooo");
            costScoreDice();
        }
    });    
    
});
*/



$(document).ready(function(){
    var score = $(".attr-table .attr-score")
    score.change(function(){
        $(this).parent().next().children('.attr-cost').val('500');
                
    });
    
    
    
});


/*
function scoreCostDice(){
    var score = $(this).val();
    var cost = calcCost(score);
    var dice = calcDice(score);
    $(this).parent().next().children(.attr-cost).val(cost);
    $(this).parent().next().children(.attr-dice).val(dice);
}

function calcCost(score){
    if score == 0 {
        return = 0;
    }else if score == 1 {
        return = 1;
    }else if score == 2{
        return = 3;
    }else if score == 3 {
        return = 6;
    }else if score == 4 {
        return = 10;
    }else if score == 5 {
        return = 15;
    }
}

function calcDice(score){
    if score == 0 {
        return = "1d4";
    }else if score == 1 {
        return = "1d4";
    }else if score == 2{
        return = "1d6";
    }else if score == 3 {
        return = "1d8";
    }else if score == 4 {
        return = "1d10";
    }else if score == 5 {
        return = "2d6";
    }
}

*/
