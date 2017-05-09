$(document).ready(function(){
	// Körs när sidan laddats klart.
    $("#levelValue").on("change", shrinkVal);
    $("#levelValue").on("change", levelCalc);
	$(".attr-table .attr-score").on("change", scoreCostDice);
    $("#archetype-select").on("change", updateArchetypeBuild);
    $(".attr-table .attr-score").on("change", scoreCostDice);
    $("#armor-select").on("change", Armor);
    $("#shield-select").on("change", Shield);
    $("#input-might").on("change", guardAttr);
    $("#input-agility").on("change", guardAttr);
    $("#input-fortitude").on("change", toughnessAttr);
    $("#input-will").on("change", toughnessAttr);
    $("#input-presence").on("change", resolveAttr);
    $("#input-will").on("change", resolveAttr);
		$(".feats-select").on("change", calcFeatsCost);
    wealth();
});

$(document).ready(function(){
    $("select").select2();
    $("#shield-select").select2({
        placeholder: "Select Shield",
        allowClear: true,
        maximumSelectionLength: 1
    });
    $("#armor-select").select2({
        placeholder: "Select Armor",
        allowClear: true,
        maximumSelectionLength: 1
    });
    $("#perks-select").select2({
        placeholder: "Select Perks",
        allowClear: true
    });
    $("#flaws-select").select2({
        placeholder: "Select Flaws",
        allowClear: true
    });
    $("#feats-select").select2({
        placeholder: "Select Feats",
        allowClear: true,
    });
    $("#weapon-select").select2({
        placeholder: "Select Weapons",
        allowClear: true
    });

});

function calcWealth(levelValue){
    if(levelValue == 1){
        return 2;
    }else if(levelValue == 2){
        return 2;
    }else if(levelValue == 3){
        return 3;
    }else if(levelValue == 4){
        return 4;
    }else if(levelValue == 5){
        return 4;
    }else if(levelValue == 6){
        return 5;
    }else if(levelValue == 7){
        return 6;
    }else if(levelValue == 8){
        return 6;
    }else if(levelValue == 9){
        return 7;
    }else if(levelValue == 10){
        return 8;
    }
}

function levelCalc(){
    // Hanterar XP, ATTRIBUTE POINTS & maxvärdet för SCORE utifrån LEVEL.
    var levelValue = $(this).val();
    var xpValue = levelToXp(levelValue);
    var totalPoints = leveltoAttributePoints(levelValue);
    var wealthValue = calcWealth(levelValue);
    var featPoints = levelToFeatPoints(levelValue);

    $("#xp-input").val(xpValue);
    $("#attr-totalt-points").val(totalPoints);
    $("#wealth-input").val(wealthValue);
    $("#feat-total-points").val(featPoints);
    calcMaxAttrScore(levelValue);
    updateAttributePoints();
}

function levelToXp (levelValue){
    // Returnerar värde för XP utifrån LEVEL.
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

function levelToFeatPoints(levelValue) {

    if (levelValue == 1){
        return 6;
    }else if (levelValue == 2){
        return 9;
    }else if (levelValue == 3){
        return 12;
    }else if (levelValue == 4){
        return 15;
    }else if (levelValue == 5){
        return 18;
    }else if (levelValue == 6){
        return 21;
    }else if (levelValue == 7){
        return 24;
    }else if (levelValue == 8){
        return 27;
    }else if (levelValue == 9){
        return 30;
    }else if (levelValue == 10){
        return 33;
    }
}

function leveltoAttributePoints(levelValue){
    // Returnerar värde för ATTRIBUTEPOINTS utifrån LEVEL.
    if (levelValue == 1) {
        shrinkVal();
        return 40;
    }else if (levelValue == 2) {
        shrinkVal();
        return 49;
    }else if (levelValue == 3) {
        shrinkVal();
        return 58;
    }else if (levelValue == 4) {
        shrinkVal();
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

function shrinkVal(){
    // Ändrar värden i SCORE om maxvärdet är överskridet.
    var aScore = $(".attr-score").val();
    var maxVal = $(".attr-score").attr("max");

    if(aScore > maxVal){
        alert("score is more than max!")
        $(".attr-score").val(maxVal);
    }
}

function calcMaxAttrScore(levelValue){
    // Förändrar maxvärdet på SCORE utifrån LEVEL.
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

function scoreCostDice(){
    // Ändrar värdet på COST och DICE utifrån SCORE.
    var score = $(this).val();
    var dice = calcDice(score);
    var cost = calcCost(score);

    $(this).parent().next().children().first().val(cost);
    $(this).parent().next().next().children().first().val(dice);
    updateAttributePoints();
    hitPoints();
}

function calcCost(score){
    // Returnerar COST utifrån SCORE.
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
    // Returnerar DICE utifrån SCORE.
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

function calcSumCost(){
    // Returnerar summan av alla COST
    var sumCost = 0;
    var maxAttrPoints = $('#attr-totalt-points').val();

    $(".attr-cost").each(function(){
        sumCost += +$(this).val();
    });
    if(sumCost > maxAttrPoints){
        alert("You have used all of your Attributes Points!");
        $(this).val(parseInt($(this).val())-1);
        $(".attr-cost").each(function(){
        sumCost += +$(this).val();
        });
        $(".attr-invested").val(sumCost);
    }else{
        $(".attr-invested").val(sumCost);
    }
    return sumCost;
}

function updateAttributePoints(){
    // Hämtar TOTAL ATTRIBUTE POINTS och beräknar hur många POINTS som är kvar och hur många som använts.
    var maxAttrPoints = $('#attr-totalt-points').val();
    var sumCost = calcSumCost();
    var attrAvailable = maxAttrPoints - sumCost;
    $(".attr-available").val(attrAvailable);

}

function updateArchetypeBuild(){
    // Hämtar ARCHETYPE och fyller i SCORE i olika ATTRIBUTES.
    var archetype = $("#archetype-select option:selected").val();
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

function hitPoints(){
    // Beräknar Hitpoints
    var sumHp = 0;
    var hitPoints = $(".total-hitpoints").val();
        $(".total-hitpoints").each(function(){
            sumHp += +$(this).val();
        });
    if(sumHp > 0){
        $("#sum-hitpoints").val(Number(sumHp) * 2 + 10);
    }
}

function Armor(){
    // sparar vald armor och returnerar värde till Guard och påverkar speed vid vissa val
	var selectedArmor = $("#armor-select option:selected").val();
	if (selectedArmor == "Leather Armor"){
		$("#guard-armor").val(1);
        $("#speed-input").val(30);
    }else if (selectedArmor == "Steelsilk"){
		$("#guard-armor").val(1);
        $("#speed-input").val(30);
    }else if (selectedArmor == "Padded Armor"){
		$("#guard-armor").val(1);
        $("#speed-input").val(30);
    }else if (selectedArmor == "Armored Trench Coat"){
		$("#guard-armor").val(2);
        $("#speed-input").val(30);
    }else if (selectedArmor == "Electropolymer Armor"){
		$("#guard-armor").val(2);
        $("#speed-input").val(30);
	}else if (selectedArmor == "Chainmail"){
	   $("#guard-armor").val(2);
       $("#speed-input").val(30);
	}else if (selectedArmor == "Kevlar Vest"){
		$("#guard-armor").val(2);
        $("#speed-input").val(30);
	}else if (selectedArmor == "Breastplate"){
		$("#guard-armor").val(2);
        $("#speed-input").val(30);
    }else if (selectedArmor == "Yoroi Armor"){
        $("#guard-armor").val(3);
        var currentSpeed = $("#speed-input").val();
        var actualSpeed = currentSpeed - 5;
        $("#speed-input").val(actualSpeed);
    }else if (selectedArmor == "Plate Mail"){
        $("#guard-armor").val(3);
        $("#speed-input").val(30);
        calcGuardTotal();
    }else if (selectedArmor == "Riot Suit"){
		$("#guard-armor").val(3);
        $("#speed-input").val(30);
		calcGuardTotal();
    }else if (selectedArmor == "Power Armor"){
        $("#guard-armor").val(3);
        $("#speed-input").val(30);
        calcGuardTotal();
    }else if (selectedArmor == "Elven Plate Mail"){
		$("#guard-armor").val(3);
        $("#speed-input").val(30);
		calcGuardTotal();
    }
    else {
        $("#speed-input").val(30);
    }
}

function Shield(){
    //Tar ett värde ifrån valt shield och returnerar till Guard.
	var selectedShield = $("#shield-select option:selected").val();
	if(selectedShield == "Small Shield"){
		$("#guard-shield").val(1);
		calcGuardTotal();
	}else if(selectedShield == "Riot Shield"){
		$("#guard-shield").val(2);
		calcGuardTotal();
	}else if(selectedShield == "Tower Shield"){
      $("#guard-shield").val(2);
			calcGuardTotal();
    }
}

function guardAttr(){
    // Räknar ihop attributen som påverkar Guard och returnerar det till rätt ruta i Guard.
    var guardAgility = $("#input-agility").val();
    var guardMight = $("#input-might").val();
    var guardAttrCalc = Number(guardMight) + Number(guardAgility);
    $("#guard-attr").val(guardAttrCalc);
		calcGuardTotal();
}

function calcGuardTotal(){
    //Kalkulerar totala värdet i Guard och returnerar det till rätt ruta
	var guardArmor = $("#guard-armor").val();
	var guardShield = $("#guard-shield").val();
	var guardAttributes = $("#guard-attr").val();
	$("#guard-total").val(10 + Number(guardArmor) + Number(guardShield) + Number(guardAttributes));
}

function toughnessAttr(){
    //Räknar ihop atttributen som påverkar Toughness och returnerar det till rätt ruta i Toughness.
	var toughnessFortitude = $("#input-fortitude").val();
	var toughnessWill = $("#input-will").val();
	var toughnessAttrCalc = Number(toughnessFortitude) + Number(toughnessWill);
	$("#toughness-attr").val(toughnessAttrCalc);
	calcToughnessTotal();
}

function calcToughnessTotal(){
    //Kalkylerar totala värdet i Toughness och returnerar det till rätt ruta
	var toughnessAttributes = $("#toughness-attr").val();
	$("#toughness-total").val(10 + Number(toughnessAttributes));
}

function resolveAttr(){
    //Räknar ihop atttributen som påverkar Resolve och returnerar det till rätt ruta i Resolve.
	var resolvePresence = $("#input-presence").val();
	var resolveWill = $("#input-will").val();
	var resolveAttrCalc = Number(resolvePresence) + Number(resolveWill);
	$("#resolve-attr").val(resolveAttrCalc);
	calcResolveTotal();
}

function calcResolveTotal(){
    //Kalkylerar totala värdet i Resolve och returnerar det till rätt ruta
	var resolveAttributes = $("#resolve-attr").val();
	$("#resolve-total").val(10 + Number(resolveAttributes));
}

function wealth(){
    var currentWealth = $('#wealth-input').val();
    if(currentWealth < 3){
        $('.wl3').attr('disabled', true);
        $('.wl4').attr('disabled', true);
    }else if(currentWealth < 2){
        $('.wl2').attr('disabled', true);
        $('.wl3').attr('disabled', true);
        $('.wl4').attr('disabled', true);
    }else if(currentWealth < 1){
        $('.wl1').attr('disabled', true);
        $('.wl2').attr('disabled', true);
        $('.wl3').attr('disabled', true);
        $('.wl4').attr('disabled', true);
    }
}

/*function calcPerksFlaws(){
	var perks = [];
	var flaws = [];
	for(selected in perks-select)
	var selectedPerks = $("#perks-select option:selected").val();
	perks.push(selectedPerks);
	console.log(perks);
}*/
function printFunction(){
    window.print();

}
function getPerks(){
    // Hämtar valda perks och sparar ner de i en array.
    var perks = [];
    $("#perks-select")


}

function calcFeatsCost(){
	//Skriver ut kostnaden för alla Feats och Tiers -Marika
	var selectedFeat = $(this).val();
	if (selectedFeat == "Alternate Form I"){
		  $(this).parent().next().children().first().val(3);
	}
	else if(selectedFeat == "Alternate Form II"){
		  $(this).parent().next().children().first().val(6);
	}
	else if(selectedFeat == "Area Manipulation I"){
		  $(this).parent().next().children().first().val(1);
	}
	else if(selectedFeat == "Area Manipulation II"){
		  $(this).parent().next().children().first().val(2);
	}
	else if(selectedFeat == "Area Manipulation III"){
		  $(this).parent().next().children().first().val(3);
	}
	else if(selectedFeat == "Area Manipulation IV"){
		  $(this).parent().next().children().first().val(4);
	}
	else if(selectedFeat == "Area Manipulation V"){
		  $(this).parent().next().children().first().val(5);
	}
	else if(selectedFeat == "Area Mastery I"){
		  $(this).parent().next().children().first().val(3);
	}
	else if(selectedFeat == "Area Mastery II"){
		  $(this).parent().next().children().first().val(6);
	}
	else if(selectedFeat == "Area Mastery III"){
		  $(this).parent().next().children().first().val(9);
	}
	else if(selectedFeat == "Attack Redirection"){
		  $(this).parent().next().children().first().val(3);
	}
	else if(selectedFeat == "Attack Specialization I"){
		  $(this).parent().next().children().first().val(3);
	}
	else if(selectedFeat == "Attack Specialization II"){
		  $(this).parent().next().children().first().val(6);
	}
	else if(selectedFeat == "Attack Specialization III"){
		  $(this).parent().next().children().first().val(9);
	}
	else if(selectedFeat == "Attack Specialization IV"){
		  $(this).parent().next().children().first().val(12);
	}
	else if(selectedFeat == "Attack Specialization V"){
		  $(this).parent().next().children().first().val(15);
	}
	else if(selectedFeat == "Attack Specialization VI"){
		  $(this).parent().next().children().first().val(18);
	}
	else if(selectedFeat == "Attack Specialization VII"){
		  $(this).parent().next().children().first().val(21);
	}
	else if(selectedFeat == "Attack Specialization VIII"){
		  $(this).parent().next().children().first().val(24);
	}
	else if(selectedFeat == "Attack Specialization IX"){
		  $(this).parent().next().children().first().val(27);
	}
	else if(selectedFeat == "Atribute Substitution I"){
		  $(this).parent().next().children().first().val(2);
	}
	else if(selectedFeat == "Atribute Substitution II"){
		  $(this).parent().next().children().first().val(4);
	}
	else if(selectedFeat == "Bane Focus"){
		  $(this).parent().next().children().first().val(3);
	}
	else if(selectedFeat == "Battle Trance"){
		  $(this).parent().next().children().first().val(3);
	}
	else if(selectedFeat == "Battlefield Oppurtunist I"){
		  $(this).parent().next().children().first().val(2);
	}
	else if(selectedFeat == "Battlefield Oppurtunist II"){
		  $(this).parent().next().children().first().val(4);
	}
	else if(selectedFeat == "Battlefield Oppurtunist III"){
		  $(this).parent().next().children().first().val(6);
	}
	else if(selectedFeat == "Battlefield Oppurtunist IV"){
		  $(this).parent().next().children().first().val(8);
	}
	else if(selectedFeat == "Battlefield Oppurtunist V"){
		  $(this).parent().next().children().first().val(10);
	}
	else if(selectedFeat == "Battlefield Punisher"){
		  $(this).parent().next().children().first().val(3);
	}
	else if(selectedFeat == "Battlefield Reflexes"){
		  $(this).parent().next().children().first().val(2);
	}
	else if(selectedFeat == "Battlefield Punisher"){
		  alert("Vet inte hur denna ska programmeras i kostnad");
	}
	else if(selectedFeat == "Boon Focus I"){
		  $(this).parent().next().children().first().val(3);
	}
	else if(selectedFeat == "Boon Focus II"){
		  $(this).parent().next().children().first().val(6);
	}
	else if(selectedFeat == "Boon Focus III"){
		  $(this).parent().next().children().first().val(9);
	}
	else if(selectedFeat == "Breakfall I"){
		  $(this).parent().next().children().first().val(2);
	}
	else if(selectedFeat == "Breakfall II"){
		  $(this).parent().next().children().first().val(4);
	}
	else if(selectedFeat == "Brutal Intimidation"){
		  $(this).parent().next().children().first().val(1);
	}
	else if(selectedFeat == "Climbing"){
		  $(this).parent().next().children().first().val(1);
	}
	else if(selectedFeat == "Combat Follow-through"){
		  $(this).parent().next().children().first().val(1);
	}
	else if(selectedFeat == "Combat Momentum"){
		  $(this).parent().next().children().first().val(1);
	}
	else if(selectedFeat == "Companion I"){
		  $(this).parent().next().children().first().val(2);
	}
	else if(selectedFeat == "Companion II"){
		  $(this).parent().next().children().first().val(4);
	}
	else if(selectedFeat == "Companion III"){
		  $(this).parent().next().children().first().val(6);
	}
	else if(selectedFeat == "Craft Mundane Item I"){
		  $(this).parent().next().children().first().val(2);
	}
	else if(selectedFeat == "Craft Mundane Item II"){
		  $(this).parent().next().children().first().val(4);
	}
	else if(selectedFeat == "Craft Craft Extraordinary Item I"){
		  $(this).parent().next().children().first().val(3);
	}
	else if(selectedFeat == "Craft Craft Extraordinary Item II"){
		  $(this).parent().next().children().first().val(6);
	}
	else if(selectedFeat == "Craft Craft Extraordinary Item III"){
		  $(this).parent().next().children().first().val(9);
	}
	else if(selectedFeat == "Crushing Blow"){
		  $(this).parent().next().children().first().val(3);
	}
	else if(selectedFeat == "Death Blow I"){
		  $(this).parent().next().children().first().val(3);
	}
	else if(selectedFeat == "Death Blow II"){
		  $(this).parent().next().children().first().val(6);
	}
	else if(selectedFeat == "Deathless Trance"){
		  $(this).parent().next().children().first().val(3);
	}
	else if(selectedFeat == "Defensive Mastery"){
		  $(this).parent().next().children().first().val(3);
	}
	else if(selectedFeat == "Defensive Reflexes I"){
		  $(this).parent().next().children().first().val(2);
	}
	else if(selectedFeat == "Defensive Reflexes II"){
		  $(this).parent().next().children().first().val(4);
	}
	else if(selectedFeat == "Defensive Reflexes III"){
		  $(this).parent().next().children().first().val(6);
	}
	else if(selectedFeat == "Defensive Reflexes IV"){
		  $(this).parent().next().children().first().val(8);
	}
	else if(selectedFeat == "Defensive Reflexes V"){
		  $(this).parent().next().children().first().val(10);
	}
	else if(selectedFeat == "Defensive Reflexes VI"){
		  $(this).parent().next().children().first().val(12);
	}
	else if(selectedFeat == "Defensive Reflexes VII"){
		  $(this).parent().next().children().first().val(14);
	}
	else if(selectedFeat == "Defensive Reflexes VIII"){
		  $(this).parent().next().children().first().val(16);
	}
	else if(selectedFeat == "Defensive Reflexes IX"){
		  $(this).parent().next().children().first().val(18);
	}
	else if(selectedFeat == "Destructive Trance"){
		  $(this).parent().next().children().first().val(3);
	}
	else if(selectedFeat == "Diehard"){
		  $(this).parent().next().children().first().val(2);
	}
	else if(selectedFeat == "Energy Resistance I"){
		  $(this).parent().next().children().first().val(2);
	}
	else if(selectedFeat == "Energy Resistance II"){
		  $(this).parent().next().children().first().val(4);
	}
	else if(selectedFeat == "Energy Resistance III"){
		  $(this).parent().next().children().first().val(6);
	}
	else if(selectedFeat == "Energy Resistance IV"){
		  $(this).parent().next().children().first().val(8);
	}
	else if(selectedFeat == "Evasive Footwork"){
		  $(this).parent().next().children().first().val(2);
	}
	else if(selectedFeat == "Extraordinary Defense I"){
		  $(this).parent().next().children().first().val(3);
	}
	else if(selectedFeat == "Extraordinary Defense II"){
		  $(this).parent().next().children().first().val(6);
	}
	else if(selectedFeat == "Extraordinary Defense III"){
		  $(this).parent().next().children().first().val(9);
	}
	else if(selectedFeat == "Extraordinary Focus"){
		  $(this).parent().next().children().first().val(3);
	}
	else if(selectedFeat == "Extraordinary Healing"){
		  $(this).parent().next().children().first().val(3);
	}
	else if(selectedFeat == "Fast Draw"){
		  $(this).parent().next().children().first().val(1);
	}
	else if(selectedFeat == "Fast Tracker"){
		  $(this).parent().next().children().first().val(2);
	}
	else if(selectedFeat == "Ferocious Minions I"){
		  $(this).parent().next().children().first().val(2);
	}
	else if(selectedFeat == "Ferocious Minions II"){
		  $(this).parent().next().children().first().val(4);
	}
	else if(selectedFeat == "Ferocious Minions III"){
		  $(this).parent().next().children().first().val(6);
	}
	else if(selectedFeat == "Fleet of Foot I"){
		  $(this).parent().next().children().first().val(2);
	}
	else if(selectedFeat == "Fleet of Foot II"){
		  $(this).parent().next().children().first().val(4);
	}
	else if(selectedFeat == "Fleet of Foot III"){
		  $(this).parent().next().children().first().val(6);
	}
	else if(selectedFeat == "Flying"){
				  $(this).parent().next().children().first().val(3);
	}
	else if(selectedFeat == "Great Leap I"){
		  $(this).parent().next().children().first().val(1);
	}
	else if(selectedFeat == "Great Leap II"){
		  $(this).parent().next().children().first().val(2);
	}
	else if(selectedFeat == "Great Leap III"){
		  $(this).parent().next().children().first().val(3);
	}
	else if(selectedFeat == "Hallucination"){
		  $(this).parent().next().children().first().val(3);
	}
	else if(selectedFeat == "Hallucination - Mass"){
		  $(this).parent().next().children().first().val(3);
	}
	else if(selectedFeat == "Heightened Invocation I"){
		  $(this).parent().next().children().first().val(2);
	}
	else if(selectedFeat == "Heightened Invocation II"){
		  $(this).parent().next().children().first().val(4);
	}
	else if(selectedFeat == "Heightened Invocation III"){
		  $(this).parent().next().children().first().val(6);
	}
	else if(selectedFeat == "Hospitaler"){
		  $(this).parent().next().children().first().val(2);
	}
	else if(selectedFeat == "Impervious Trance"){
		  $(this).parent().next().children().first().val(3);
	}
	else if(selectedFeat == "Indomitable Endurance I"){
		  $(this).parent().next().children().first().val(2);
	}
	else if(selectedFeat == "Indomitable Endurance II"){
		  $(this).parent().next().children().first().val(4);
	}
	else if(selectedFeat == "Indomitable Endurance III"){
		  $(this).parent().next().children().first().val(6);
	}
	else if(selectedFeat == "Indomitable EnduranceIV"){
		  $(this).parent().next().children().first().val(8);
	}
	else if(selectedFeat == "Indomitable Endurance V"){
		  $(this).parent().next().children().first().val(10);
	}
	else if(selectedFeat == "Indomitable Resolve I"){
		  $(this).parent().next().children().first().val(1);
	}
	else if(selectedFeat == "Indomitable Resolve II"){
		  $(this).parent().next().children().first().val(2);
	}
	else if(selectedFeat == "Indomitable Resolve III"){
		  $(this).parent().next().children().first().val(3);
	}
	else if(selectedFeat == "Inspiring Champion I"){
		  $(this).parent().next().children().first().val(2);
	}
	else if(selectedFeat == "Inspiring Champion II"){
		  $(this).parent().next().children().first().val(4);
	}
	else if(selectedFeat == "Inspiring Champion III"){
		  $(this).parent().next().children().first().val(6);
	}
	else if(selectedFeat == "Knowledge I"){
		  $(this).parent().next().children().first().val(2);
	}
	else if(selectedFeat == "Knowledge II"){
		  $(this).parent().next().children().first().val(4);
	}
	else if(selectedFeat == "Knowledge III"){
		  $(this).parent().next().children().first().val(6);
	}
	else if(selectedFeat == "Lethal Strike I"){
		  $(this).parent().next().children().first().val(3);
	}
	else if(selectedFeat == "Lethal Strike II"){
		  $(this).parent().next().children().first().val(6);
	}
	else if(selectedFeat == "Lethal Strike III"){
		  $(this).parent().next().children().first().val(9);
	}
	else if(selectedFeat == "Lethal Strike IV"){
		  $(this).parent().next().children().first().val(12);
	}
	else if(selectedFeat == "Lethal Strike V"){
		  $(this).parent().next().children().first().val(15);
	}
	else if(selectedFeat == "Lethal Strike VI"){
		  $(this).parent().next().children().first().val(18);
	}
	else if(selectedFeat == "Lethal Strike VII"){
		  $(this).parent().next().children().first().val(21);
	}
	else if(selectedFeat == "Lethal Strike VIII"){
		  $(this).parent().next().children().first().val(24);
	}
	else if(selectedFeat == "Lethal Strike IX"){
		  $(this).parent().next().children().first().val(27);
	}
	else if(selectedFeat == "Lightning Reflexes I"){
		  $(this).parent().next().children().first().val(1);
	}
	else if(selectedFeat == "Lightning Reflexes II"){
		  $(this).parent().next().children().first().val(2);
	}
	else if(selectedFeat == "Lightning Reflexes III"){
		  $(this).parent().next().children().first().val(3);
	}
	else if(selectedFeat == "Lightning Reflexes IV"){
		  $(this).parent().next().children().first().val(4);
	}
	else if(selectedFeat == "Lightning Reflexes V"){
		  $(this).parent().next().children().first().val(5);
	}
	else if(selectedFeat == "Longshot"){
		  $(this).parent().next().children().first().val(1);
	}
	else if(selectedFeat == "Martial Focus"){
		  $(this).parent().next().children().first().val(3);
	}
	else if(selectedFeat == "Master Tracker"){
		  $(this).parent().next().children().first().val(1);
	}
	else if(selectedFeat == "Mimic"){
		  $(this).parent().next().children().first().val(2);
	}
	else if(selectedFeat == "Multi-Attack Specialist I"){
		  $(this).parent().next().children().first().val(3);
	}
	else if(selectedFeat == "Multi-Attack Specialist II"){
		  $(this).parent().next().children().first().val(6);
	}
	else if(selectedFeat == "Multi-Attack Specialist III"){
		  $(this).parent().next().children().first().val(9);
	}
	else if(selectedFeat == "Multi-Attack Specialist IV"){
		  $(this).parent().next().children().first().val(12);
	}
	else if(selectedFeat == "Multi-Attack Specialist V"){
		  $(this).parent().next().children().first().val(15);
	}
	else if(selectedFeat == "Multi-Attack Specialist VI"){
		  $(this).parent().next().children().first().val(18);
	}
	else if(selectedFeat == "Multi-Bane Specialist"){
		  $(this).parent().next().children().first().val(3);
	}
	else if(selectedFeat == "Multi-Target Attack Specialist I"){
		  $(this).parent().next().children().first().val(2);
	}
	else if(selectedFeat == "Multi-Target Attack Specialist II"){
		  $(this).parent().next().children().first().val(4);
	}
	else if(selectedFeat == "Multi-Target Attack Specialist III"){
		  $(this).parent().next().children().first().val(6);
	}
	else if(selectedFeat == "Multi-Target Attack Specialist IV"){
		  $(this).parent().next().children().first().val(8);
	}
	else if(selectedFeat == "Multi-Target Boon Expert"){
		  $(this).parent().next().children().first().val(3);
	}
	else if(selectedFeat == "Multi-Target Boon Specialist I"){
		  $(this).parent().next().children().first().val(2);
	}
	else if(selectedFeat == "Multi-Target Boon Specialist II"){
		  $(this).parent().next().children().first().val(4);
	}
	else if(selectedFeat == "Multi-Target Boon Specialist III"){
		  $(this).parent().next().children().first().val(6);
	}
	else if(selectedFeat == "Multi-Target Boon Specialist IV"){
		  $(this).parent().next().children().first().val(8);
	}
	else if(selectedFeat == "Multi-Target Boon Specialist V"){
		  $(this).parent().next().children().first().val(10);
	}
	else if(selectedFeat == "Natural Defense I"){
		  $(this).parent().next().children().first().val(2);
	}
	else if(selectedFeat == "Natural Defense II"){
		  $(this).parent().next().children().first().val(4);
	}
	else if(selectedFeat == "Natural Defense III"){
		  $(this).parent().next().children().first().val(6);
	}
	else if(selectedFeat == "Overpowering Strike"){
		  $(this).parent().next().children().first().val(2);
	}
	else if(selectedFeat == "Potent Bane"){
		  $(this).parent().next().children().first().val(3);
	}
	else if(selectedFeat == "Reactionary Trance"){
		  $(this).parent().next().children().first().val(2);
	}
	else if(selectedFeat == "Reckless Attack"){
		  $(this).parent().next().children().first().val(3);
	}
	else if(selectedFeat == "Resilient"){
		  $(this).parent().next().children().first().val(3);
	}
	else if(selectedFeat == "Sentinel I"){
		  $(this).parent().next().children().first().val(3);
	}
	else if(selectedFeat == "Sentinel II"){
		  $(this).parent().next().children().first().val(6);
	}
	else if(selectedFeat == "Sentinel III"){
		  $(this).parent().next().children().first().val(9);
	}
	else if(selectedFeat == "Silencing Strike"){
		  $(this).parent().next().children().first().val(3);
	}
	else if(selectedFeat == "Skill Specialization I"){
		  $(this).parent().next().children().first().val(2);
	}
	else if(selectedFeat == "Skill Specialization II"){
		  $(this).parent().next().children().first().val(4);
	}
	else if(selectedFeat == "Skill Specialization III"){
		  $(this).parent().next().children().first().val(6);
	}
	else if(selectedFeat == "Skill Specialization IV"){
		  $(this).parent().next().children().first().val(8);
	}
	else if(selectedFeat == "Skill Specialization V"){
		  $(this).parent().next().children().first().val(10);
	}
	else if(selectedFeat == "Superior Concentration I"){
		  $(this).parent().next().children().first().val(3);
	}
	else if(selectedFeat == "Superior Concentration II"){
		  $(this).parent().next().children().first().val(6);
	}
	else if(selectedFeat == "Superior Concentration III"){
		  $(this).parent().next().children().first().val(9);
	}
	else if(selectedFeat == "Swimming"){
		  $(this).parent().next().children().first().val(1);
	}
	else if(selectedFeat == "Sworn Enemy I"){
		  $(this).parent().next().children().first().val(1);
	}
	else if(selectedFeat == "Sworn Enemy II"){
		  $(this).parent().next().children().first().val(2);
	}
	else if(selectedFeat == "Sworn Enemy III"){
		  $(this).parent().next().children().first().val(3);
	}
	else if(selectedFeat == "Sworn Enemy IV"){
		  $(this).parent().next().children().first().val(4);
	}
	else if(selectedFeat == "Sworn Enemy V"){
		  $(this).parent().next().children().first().val(5);
	}
	else if(selectedFeat == "Sworn Enemy VI"){
		  $(this).parent().next().children().first().val(6);
	}
	else if(selectedFeat == "Sworn Enemy VII"){
		  $(this).parent().next().children().first().val(7);
	}
	else if(selectedFeat == "Sworn Enemy VIII"){
		  $(this).parent().next().children().first().val(8);
	}
	else if(selectedFeat == "Sworn Enemy IX"){
		  $(this).parent().next().children().first().val(9);
	}
	else if(selectedFeat == "Tough as Nails I"){
		  $(this).parent().next().children().first().val(2);
	}
	else if(selectedFeat == "Tough as Nails II"){
		  $(this).parent().next().children().first().val(4);
	}
	else if(selectedFeat == "Tough as Nails III"){
		  $(this).parent().next().children().first().val(6);
	}
	else if(selectedFeat == "Two Weapon Brute"){
		  $(this).parent().next().children().first().val(3);
	}
	else if(selectedFeat == "Two Weapon Defense"){
		  $(this).parent().next().children().first().val(2);
	}
	else if(selectedFeat == "Unending Charm"){
		  $(this).parent().next().children().first().val(3);
	}
	else if(selectedFeat == "Untrackable"){
		  $(this).parent().next().children().first().val(1);
	}
	else if(selectedFeat == "Vicious Strike"){
		  $(this).parent().next().children().first().val(2);
	}
	else if(selectedFeat == "Wealthy"){
		  $(this).parent().next().children().first().val(3);
	}
	else if(selectedFeat == "Well-Rounded"){
		  $(this).parent().next().children().first().val(2);
	}
}
