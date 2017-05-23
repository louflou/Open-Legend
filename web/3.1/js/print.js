$(document).ready(function(){
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
    }
    var info = {
       cName: $('#c-name').val(),
       pName: $('#p-name').val(),
       archetype: $('#archetype-select').val(),
       description: $('#description-text').val()
   }
   var perksFlaws = {
    }
    var perksFlaws = {
       perks: $('#perks-select').val(),
       flaws: $('#flaws-select').val()  
   }
   var featPoints = {
    }
    var featPoints = {
       total: $('#feat-total-points').val(),
       invested: $('#feat-invested-points').val(),
       available: $('#feat-available-points').val()
   }
   var feats = {
    }
    var feats = {
       selected: $('#feats-select1').val(),
       cost: $('#feats-cost1').val(),
   }
   // Attributes
   var attributePoints = {
    }
    // Attributes
    var attributePoints = {
       total: $('#attr-totalt-points').val(),
       invested: $('#attr-invested-points').val(),
       available: $('#attr-available-points').val()       
   }
   var agility = {
    }
    var agility = {
       score: $('#input-agility').val(),
       cost: $('#cost-agility').val(),
       dice: $('#dice-agility').val()       
   }
   var fortitude = {
    }
    var fortitude = {
       score: $('#input-fortitude').val(),
       cost: $('#cost-fortitude').val(),
       dice: $('#dice-fortitude').val()       
   }
   var might = {
    }
    var might = {
       score: $('#input-might').val(),
       cost: $('#cost-might').val(),
       dice: $('#dice-might').val()       
   }
   var deception = {
    }
    var deception = {
       score: $('#input-deception').val(),
       cost: $('#cost-deception').val(),
       dice: $('#dice-deception').val()
   }
   var presence = {
    }
    var presence = {
       score: $('#input-presence').val(),
       cost: $('#cost-presence').val(),
       dice: $('#dice-presence').val()
   }
   var persuasion = {
    }
    var persuasion = {
       score: $('#input-persuasion').val(),
       cost: $('#cost-persuasion').val(),
       dice: $('#dice-persuasion').val()
   }
   var learning = {
    }
    var learning = {
       score: $('#input-learning').val(),
       cost: $('#cost-learning').val(),
       dice: $('#dice-learning').val()
   }
   var logic = {
    }
    var logic = {
       score: $('#input-logic').val(),
       cost: $('#cost-logic').val(),
       dice: $('#dice-logic').val()
   }
   var perception = {
    }
    var perception = {
       score: $('#input-perception').val(),
       cost: $('#cost-perception').val(),
       dice: $('#dice-perception').val()
   }
   var will = {
    }
    var will = {
       score: $('#input-will').val(),
       cost: $('#cost-will').val(),
       dice: $('#dice-will').val()
   }
   var alteration = {
    }
    var alteration = {
       score: $('#input-alteration').val(),
       cost: $('#cost-alteration').val(),
       dice: $('#dice-alteration').val()
   }
   var creation = {
    }
    var creation = {
       score: $('#input-creation').val(),
       cost: $('#cost-creation').val(),
       dice: $('#dice-creation').val()
   }
   var energy = {
    }
    var energy = {
       score: $('#input-energy').val(),
       cost: $('#cost-energy').val(),
       dice: $('#dice-energy').val()
   }
   var entropy = {
    }
    var entropy = {
       score: $('#input-entropy').val(),
       cost: $('#cost-entropy').val(),
       dice: $('#dice-entropy').val()
   }
   var influence = {
    }
    var influence = {
       score: $('#input-influence').val(),
       cost: $('#cost-influence').val(),
       dice: $('#dice-influence').val()
   }
   var movement = {
    }
    var movement = {
       score: $('#input-movement').val(),
       cost: $('#cost-movement').val(),
       dice: $('#dice-movement').val()
   }
   var prescience = {
    }
    var prescience = {
       score: $('#input-prescience').val(),
       cost: $('#cost-prescience').val(),
       dice: $('#dice-prescience').val()
   }
   var protection = {
    }
    var protection = {
       score: $('#input-protection').val(),
       cost: $('#cost-protection').val(),
       dice: $('#dice-protection').val()
   }
   // Defenses
   var hitPoints = {
    }
    // Defenses
    var hitPoints = {
       total: $('#sum-hitpoints').val(),
       current: $('#current-hitpoints').val()
   }
   var equipment = {
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
       toughTotal: $('#tough-total').val(),
       toughAttr: $('#tough-attr').val(),
       toughFeats: $('#tough-feats').val(),
       resolveTotal: $('#resolve-total').val(),
       resolveAttr: $('#resolve-attr').val(),
       resolveFeats: $('#resolve-feats').val()
   }
   if (perksFlaws.perks.length > perksFlaws.flaws.length){
       alert('You need the same amount of Perks as Flaws. Please add some Flaws or remove some Perks!');
   }else if (perksFlaws.perks.length < perksFlaws.flaws.length){
       alert('You need the same amount of Perks as Flaws. Please remove some Flaws or add some Perks!');
   }
    
    function printPerksFlaws(){
        // Hämtar värden från Perks & Flaws och Lägger till i print MODAL
        perks = "";
        for(i = 0; i < perksFlaws.perks.length;){
            perks += perksFlaws.perks[i] + "<br>";
            i++;
        }
        $('#pf-perks').html(perks);
        flaws = "";
        for(i = 0; i < perksFlaws.flaws.length;){
            flaws += perksFlaws.flaws[i] + "<br>";
            i++;
        }
        $('#pf-flaws').html(flaws);
    }

    $("#modall").on("click", function() {
        // Placerar ut värden till printdokument
        $('#stats-level').html(stats.level);
        $('#stats-xp').html(stats.xp);
        $('#stats-wealth').html(stats.wealth);
        $('#stats-speed').html(stats.speed);
        $('#info-name').html(info.cName);
        $('#info-player').html(info.pName);
        $('#info-archetype').html(info.archetype);
        $('#info-description').html(info.description);
        
        printPerksFlaws();
        
        $('#fp-total').html(featPoints.total);
        $('#fp-invested').html(featPoints.invested);
        $('#fp-available').html(featPoints.available);
        
        $('#feat-feats').html(feats.selected);
        $('#feat-cost').html(feats.cost);
        
        $('#a-total').html(attributePoints.total);
        $('#a-invested').html(attributePoints.invested);
        $('#a-available').html(attributePoints.available);
        
        $('#agility.s').html(agility.score);
        $('#agility.c').html(agility.cost);
        $('#agility.d').html(agility.dice);
        $('#fortitude.s').html(fortitude.score);
        $('#fortitude.c').html(fortitude.cost);
        $('#fortitude.d').html(fortitude.dice);
        $('#fortitude.s').html(fortitude.score);
        $('#fortitude.c').html(fortitude.cost);
        $('#fortitude.d').html(fortitude.dice);
        $('#deception.s').html(deception.score);
        $('#deception.c').html(deception.cost);
        $('#deception.d').html(deception.dice);
        $('#presence.s').html(presence.score);
        $('#presence.c').html(presence.cost);
        $('#presence.d').html(presence.dice);
        $('#persuasion.s').html(persuasion.score);
        $('#persuasion.c').html(persuasion.cost);
        $('#persuasion.d').html(persuasion.dice);
        $('#learning.s').html(learning.score);
        $('#learning.c').html(learning.cost);
        $('#learning.d').html(learning.dice);
        $('#logic.s').html(logic.score);
        $('#logic.c').html(logic.cost);
        $('#logic.d').html(logic.dice);
        $('#perception.s').html(perception.score);
        $('#perception.c').html(perception.cost);
        $('#perception.d').html(perception.dice);
        $('#will.s').html(will.score);     
        $('#will.c').html(will.cost);     
        $('#will.d').html(will.dice);
        
        $('#alteration.s').html(alteration.score);
        $('#alteration.c').html(alteration.cost);     
        $('#alteration.d').html(alteration.dice);     
        $('#creation.s').html(creation.score);
        $('#creation.c').html(creation.cost);     
        $('#creation.d').html(creation.dice);
        $('#energy.s').html(energy.score);     
        $('#energy.c').html(energy.cost);     
        $('#energy.d').html(energy.dice);
        $('#entropy.s').html(entropy.score);
        $('#entropy.c').html(entropy.cost);
        $('#entropy.d').html(entropy.dice);
        $('#influence.s').html(influence.score);
        $('#influence.c').html(influence.cost);
        $('#influence.d').html(influence.dice);
        $('#movement.s').html(movement.score);
        $('#movement.c').html(movement.cost);
        $('#movement.d').html(movement.dice);
        $('#prescience.s').html(prescience.score);
        $('#prescience.c').html(prescience.cost);
        $('#prescience.d').html(prescience.dice);
        $('#protection.s').html(protection.score);
        $('#protection.c').html(protection.cost);
        $('#protection.d').html(protection.dice);
        
        $('#hp.t').html(hitPoints.total);
        $('#hp.c').html(hitPoints.current);
        
        $('#armor-cell').html(equipment.armor);
        $('#weapons-cell').html(equipment.weapons);
        $('#shield-cell').html(equipment.shield);
        
        $('#ac.guard.t').html(armorClass.guardTotal);
        $('#ac.guard.a').html(armorClass.guardArmor);
        $('#ac.guard.s').html(armorClass.guardShield);
        $('#ac.guard.attr').html(armorClass.guardAttr);
        $('#ac.guard.f').html(armorClass.guardFeats);
        
        $('#ac.tough.t').html(armorClass.toughTotal);
        $('#ac.tough.attr').html(armorClass.toughAttr);
        $('#ac.tough.f').html(armorClass.toughFeats);
        
        $('#ac.resolve.t').html(armorClass.resolveTotal);
        $('#ac.resolve.attr').html(armorClass.resolveAttr);
        $('#ac.resolve.f').html(armorClass.resolveFeats);

    });
}