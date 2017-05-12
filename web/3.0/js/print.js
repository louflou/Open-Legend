$(document).ready(function(){
    getAllValues();
      $('#save-btn').on('click', getAllValues);

});

function getAllValues(){
    // Character Info
    var stats = {
       level: $('#levelValue').val(),
       xp: $('#xp-input').val(),
       wealth: $('#wealth-input').val(),
       speed: $('#speed-input').val()
   }
   var info = {
       cName: $('#c-name').val(),
       pName: $('#p-name').val(),
       archetype: $('#archetype-select').val(),
       description: $('#description-text').val()
   }
   var perksFlaws = {
       perks: $('#perks-select').val(),
       flaws: $('#flaws-select').val()
   }
   var featPoints = {
       total: $('#feat-total-points').val(),
       invested: $('#feat-invested-points').val(),
       available: $('#feat-available-points').val()
   }
   var feats = {
       selected: $('#feats-select1').val(),
       cost: $('#feats-cost1').val(),
   }
   // Attributes
   var attributePoints = {
       total: $('#attr-totalt-points').val(),
       invested: $('#attr-invested-points').val(),
       available: $('#attr-available-points').val()
   }
   var agility = {
       score: $('#input-agility').val(),
       cost: $('#cost-agility').val(),
       dice: $('#dice-agility').val()
   }
   var fortitude = {
       score: $('#input-fortitude').val(),
       cost: $('#cost-fortitude').val(),
       dice: $('#dice-fortitude').val()
   }
   var might = {
       score: $('#input-might').val(),
       cost: $('#cost-might').val(),
       dice: $('#dice-might').val()
   }
   var deception = {
       score: $('#input-deception').val(),
       cost: $('#cost-deception').val(),
       dice: $('#dice-deception').val()
   }
   var presence = {
       score: $('#input-presence').val(),
       cost: $('#cost-presence').val(),
       dice: $('#dice-presence').val()
   }
   var persuasion = {
       score: $('#input-persuasion').val(),
       cost: $('#cost-persuasion').val(),
       dice: $('#dice-persuasion').val()
   }
   var learning = {
       score: $('#input-learning').val(),
       cost: $('#cost-learning').val(),
       dice: $('#dice-learning').val()
   }
   var logic = {
       score: $('#input-logic').val(),
       cost: $('#cost-logic').val(),
       dice: $('#dice-logic').val()
   }
   var perception = {
       score: $('#input-perception').val(),
       cost: $('#cost-perception').val(),
       dice: $('#dice-perception').val()
   }
   var will = {
       score: $('#input-will').val(),
       cost: $('#cost-will').val(),
       dice: $('#dice-will').val()
   }
   var alteration = {
       score: $('#input-alteration').val(),
       cost: $('#cost-alteration').val(),
       dice: $('#dice-alteration').val()
   }
   var creation = {
       score: $('#input-creation').val(),
       cost: $('#cost-creation').val(),
       dice: $('#dice-creation').val()
   }
   var energy = {
       score: $('#input-energy').val(),
       cost: $('#cost-energy').val(),
       dice: $('#dice-energy').val()
   }
   var entropy = {
       score: $('#input-entropy').val(),
       cost: $('#cost-entropy').val(),
       dice: $('#dice-entropy').val()
   }
   var influence = {
       score: $('#input-influence').val(),
       cost: $('#cost-influence').val(),
       dice: $('#dice-influence').val()
   }
   var movement = {
       score: $('#input-movement').val(),
       cost: $('#cost-movement').val(),
       dice: $('#dice-movement').val()
   }
   var prescience = {
       score: $('#input-prescience').val(),
       cost: $('#cost-prescience').val(),
       dice: $('#dice-prescience').val()
   }
   var protection = {
       score: $('#input-protection').val(),
       cost: $('#cost-protection').val(),
       dice: $('#dice-protection').val()
   }
   // Defenses
   var hitPoints = {
       total: $('#sum-hitpoints').val(),
       current: $('#current-hitpoints').val()
   }
   var equipment = {
       armor: $('#armor-select').val(),
       weapons: $('#weapon-select').val(),
       shield: $('#shield-select').val()
   }
   var armorClass = {
       // Guard
       guardTotal: $('#guard-total').val(),
       guardArmor: $('#guard-armor').val(),
       guardShield: $('#guard-shield').val(),
       guardAttr: $('#guard-attr').val(),
       guardFeats: $('#guard-feats').val(),
       // Toughness
       toughTotal: $('#toughness-total').val(),
       toughAttr: $('#toughness-attr').val(),
       toughFeats: $('#toughness-feats').val(),
       // Resolve
       resolveTotal: $('#resolve-total').val(),
       resolveAttr: $('#resolve-attr').val(),
       resolveFeats: $('#resolve-feats').val()
   }
   var statsValues = [
        stats.level,
        stats.xp,
        stats.wealth,
        stats.speed,
                   ]
   var infoValues = [
       info.cName,
       info.pName,
       info.archetype,
       info.description
   ]
   var perksFlawsValues = [
       perksFlaws.perks,
       perksFlaws.flaws
   ]
   var featPointsValues = [
       featPoints.total,
       featPoints.invested,
       featPoints.available
   ]
   var featsValues = [
       feats.selected,
       feats.cost
   ]
   var attributePointsValues = [
       attributePoints.total,
       attributePoints.invested,
       attributePoints.available
   ]
   var attributeValues = [
       agility.score, agility.cost, agility.dice,
       fortitude.score, fortitude.cost, fortitude.dice,
       might.score, might.cost, might.dice,
       deception.score, deception.cost, deception.dice,
       presence.score, presence.cost, presence.dice,
       persuasion.score, persuasion.cost, persuasion.dice,
       learning.score, learning.cost, learning.dice,
       logic.score, logic.cost, logic.dice,
       perception.score, perception.cost, perception.dice,
       will.score, will.cost, will.dice,
       alteration.score, alteration.cost, alteration.dice,
       creation.score, creation.cost, creation.dice,
       energy.score, energy.cost, energy.dice,
       entropy.score, entropy.cost, entropy.dice,
       influence.score, influence.cost, influence.dice,
       movement.score, movement.cost, movement.dice,
       prescience.score, prescience.cost, prescience.dice,
       protection.score, protection.cost, protection.dice
   ]

  


}
