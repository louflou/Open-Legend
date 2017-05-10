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
   
   
   
  
   
   
});