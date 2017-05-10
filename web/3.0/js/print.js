$(document).ready(function(){
   var characterInfo = {
       level: $('#levelValue').val(),
       xp: $('#xp-input').val(),
       wealth: $('#wealth-input').val(),
       speed: $('#speed-input').val()
   }
   alert(' XP: ' + characterInfo.xp);
});