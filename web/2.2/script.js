$(document).ready(function(){
	// Körs när sidan laddats klart
    $("#levelValue").on("change", levelCalc);
	$(".attr-table .attr-score").on("change", scoreCostDice);
    $("#levelValue").on("change", levelCalc);
	$(".attr-table .attr-score").on("change", scoreCostDice);
    $("#archetype-select").on("change", updateArchetypeBuild);

});

function updateArchetypeBuild(){
    var archetype = $('#archetype-select option:selected').val();
    if(archetype = "barbarian") {
        $("#input-agility").val(2);
        $("#input-fortitude").val(4);
        $("#input-might").val(5);
        $("#input-perception").val(3);
        $("#input-will").val(3);
    }else if(archetype = "ranger"){
        $("#input-agility").val(5);
        $("#input-deception").val(2);
        $("#input-perception").val(4);
        $("#input-will").val(3);
        $("#input-influence").val(3);
    }else if(archetype = "monk"){
        $("#input-agility").val(5);
        $("#input-fortitude").val(3);
        $("#input-perception").val(3);
        $("#input-will").val(2);
        $("#input-movement").val(4);
    }else if(archetype = "paladin"){
        $("#input-fortitude").val(4);
        $("#input-presence").val(5);
        $("#input-learning").val(1);
        $("#input-perception").val(1);
        $("#input-will").val(3);
        $("#input-creation").val(3);
        $("#input-prescience").val(1);
    }else if(archetype = "battle-mage"){
        $("#input-agility").val(3);
        $("#input-fortitude").val(1);
        $("#input-might").val(1);
        $("#input-presence").val(1);
        $("#input-persuasion").val(1);
        $("#input-learning").val(2);
        $("#input-logic").val(2);
        $("#input-perception").val(2);
        $("#input-will").val(3);
        $("#input-energy").val(5);
    }else if(archetype = "mind-mage"){
        $("#input-agility").val(3);
        $("#input-presence").val(2);
        $("#input-persuasion").val(1);
        $("#input-learning").val(3);
        $("#input-logic").val(2);
        $("#input-will").val(3);
        $("#input-influence").val(5);        
    }else if(archetype = "assassin"){
        $("#input-agility").val(5);
        $("#input-fortitude").val(1);
        $("#input-deception").val(3);
        $("#input-presence").val(3);
        $("#input-persuasion").val(3);
        $("#input-perception").val(3);
    }else if(archetype = "cleric"){
        $("#input-fortitude").val(2);
        $("#input-might").val(3);
        $("#input-presence").val(1);
        $("#input-persuasion").val(1);
        $("#input-learning").val(1);
        $("#input-will").val(2);
        $("#input-protection").val(4);
        $("#input-creation").val(5);        
    }else if(archetype = "druid"){
        $("#input-agility").val(1);
        $("#input-fortitude").val(3);
        $("#input-might").val(1);
        $("#input-perception").val(2);
        $("#input-will").val(2);
        $("#input-alteration").val(4);
        $("#input-creation").val(3);
        $("#input-influence").val(4); 
    }
    
}

function updateAttributePoints(){
    var maxAttrPoints = $('#attr-totalt-points').val();
    var prevScore = $(this).data('val');
    var sumCost = calcSumCost();
    var attrAvailable = maxAttrPoints - sumCost;
    $('.attr-available').val(attrAvailable);
    if(sumCost > maxAttrPoints){
        alert("You don't have enough Attribute Points!");
    }
}

function calcSumCost(){
    var sumCost = 0;
    $(".attr-cost").each(function(){
        sumCost += +$(this).val();
    });
    $(".attr-invested").val(sumCost);
    return sumCost;
}

function scoreCostDice(){
    var score = $(this).val();
    var cost = calcCost(score);
    var dice = calcDice (score);
    $(this).parent().next().children().first().val(cost);
    $(this).parent().next().next().children().first().val(dice);
    updateAttributePoints();
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
    var totalPoints = leveltoAttributePoints (levelValue);
    $("#attr-totalt-points").val(totalPoints);
    calcMaxAttrScore(levelValue);

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

function calcMaxAttrScore(levelValue){
	if (levelValue == 3){
        $(".attr-score").attr({
            "max" : 6
        });
    }else if(levelValue == 4){
	   $(".attr-score").attr({
            "max" : 6
        });
    }else if(levelValue == 5){
	   $(".attr-score").attr({
           "max" : 7
        });
    }else if(levelValue == 6){
	   $(".attr-score").attr({
           "max" : 7
       });
    } else if(levelValue == 7){
	   $(".attr-score").attr({
           "max" : 8
       });
    }else if(levelValue == 8){
	   $(".attr-score").attr({
           "max" : 8
        });
    }else if(levelValue == 9){
	   $(".attr-score").attr({
           "max" : 9
        });
    }else if(levelValue == 10){
	   $(".attr-score").attr({
           "max" : 9
        });
    }
}
