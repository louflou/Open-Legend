$(document).ready(function(){
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
   var attributePoints = {
       total: $('#attr-total-points').val(),
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
   
   
   
  
   
   
});