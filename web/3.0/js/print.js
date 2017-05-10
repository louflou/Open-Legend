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
   
   $('#perks-select').on('select', alert(perksFlaws.perks));
   
   
});