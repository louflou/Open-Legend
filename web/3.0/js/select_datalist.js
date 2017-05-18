$(document).ready(function(){
    // archetype array
    var archetypeArray = [
        {id: '0', text: 'Custom'}, {id: '1', text: 'Barbarian'}, {id: '2', text: 'Ranger'}, {id: '3', text: 'Monk'}, {id: '4', text: 'Paladin'}, {id: '5', text: 'Battle Mage'}, {id: '5', text: 'Mind Mage'}, {id: '6', text: 'Assassin'}, {id: '7', text: 'Cleric'}, {id: '8', text: 'Druid'}, {id: '9', text: 'Shadowdancer'}, {id: '10', text: 'Bard'}, {id: '11', text: 'Arcane Protector'}
    ]
    //armor array
    var lightArmorArray = [
        {id: 'Leather Armor', text: 'Leather Armor'}, {id: 'Steelsilk', text: 'Steelsilk'}, {id: 'Padded Armor', text: 'Padded Armor'} 
    ]
    var mediumArmorArray = [
        {id: 'Armored Trench Coat', text: 'Armored Trench Coat'}, {id: 'Electropolymer Armor', text: 'Electropolymer Armor'}, {id: 'Chainmail', text: 'Chainmail'}, {id: 'Kevlar Vest', text: 'Kevlar Vest'}, {id: 'Breastplate', text: 'Breastplate'}
    ]
    var heavyArmorArray = [
        {id: 'Yoroi Armor', text: 'Yoroi Armor'}, {id: 'Plate Mail', text: 'Plate Mail'}, {id: 'Riot Suit', text: 'Riot Suit'}, {id: 'Power Armor', text: 'Power Armor'}, {id: 'Elven Plate Mail', text: 'Elven Plate Mail'} 
    ]
    var armorArray = [
        {text: 'Light', children: lightArmorArray}, 
        {text: 'Medium', children: mediumArmorArray}, 
        {text: 'Heavy',children: heavyArmorArray}     
    ] 
    // weapon array
    var oneHandedArray = [
        {id: 'Unarmed Strike', text: 'Unarmed Strike'}, {id: 'Bowie Knife', text: 'Bowie Knife'}, {id: 'Shiv', text: 'Shiv'}, {id: 'Multi-tool', text: 'Multi-tool'}, {id: 'Scimitar', text: 'Scimitar'}, {id: 'Short Sword', text: 'Short Sword'}, {id: 'Machete', text: 'Machete'}, {id: 'Sawblade', text: 'Sawblade'}, {id: 'Blow Gun', text: 'Blow Gun'}, {id: 'Dart', text: 'Dart'}, {id: 'Hatchet', text: 'Hatchet'}, {id: 'Dagger', text: 'Dagger'}, {id: 'Mace', text: 'Mace'}, {id: 'Baseball Bat', text: 'Baseball Bat'}, {id: 'Club', text: 'Club'}, {id: 'Improvised Weapon', text: 'Improvised Weapon'}, {id: 'Warhammer', text: 'Warhammer'}        
    ]
    var versitileArray = [
         {id: 'Longsword', text: 'Longsword'}, {id: 'Katana', text: 'Katana'}, {id: 'Falcion', text: 'Falcion'}, {id: 'Short Spear', text: 'Short Spear'}
    ]
    var twoHandedArray = [
         {id: 'Great Sword', text: 'Great Sword'}, {id: 'No-dachi', text: 'No-dachi'}, {id: 'Claymore', text: 'Claymore'}, {id: 'Bastard Sword', text: 'Bastard Sword'}, {id: 'Chainsaw', text: 'Chainsaw'}, {id: 'Sledge Hammer', text: 'Sledge Hammer'}, {id: 'Maul', text: 'Maul'},  {id: 'Great Axe', text: 'Great Axe'}, {id: 'Long Spear', text: 'Long Spear'}, {id: 'Pitchfork', text: 'Pitchfork'}, {id: 'Staff', text: 'Staff'}, {id: 'Glaive', text: 'Glaive'},  {id: 'Halberd', text: 'Halberd'}, {id: 'Naginata', text: 'Naginata'}, {id: 'Flamethrower', text: 'Flamethrower'}
    ]
    var closeRangedArray = [
         {id: 'Laser Gun', text: 'Laser Gun'}, {id: 'Revolver', text: 'Revolver'}, {id: 'Handgun', text: 'Handgun'}, {id: 'Grenade', text: 'Grenade'}, {id: 'Firebomb', text: 'Firebomb'}, {id: 'Elexir', text: 'Elexir'}
    ]
    var mediumRangedArray = [
         {id: 'Light Crossbow', text: 'Light Crossbow'},  {id: 'Shortbow', text: 'Shortbow'},  {id: 'Pump Shotgun', text: 'Pump Shotgun'},  {id: 'Submachine Gun', text: 'Submachine Gun'},  {id: 'M16', text: 'M16'}
    ]
    var longRangedArray = [
         {id: 'Heavy Crossbow', text: 'Heavy Crossbow'}, {id: 'Longbow', text: 'Longbow'}, {id: 'Rifle', text: 'Rifle'}
    ]
    var extremeRangedArray = [
         {id: 'Sniper Rifle', text: 'Sniper Rifle'}, {id: 'Phase Rifle', text: 'Phase Rifle'},  {id: 'Cannon', text: 'Cannon'}
    ]
    var weaponArray = [
        {text: 'One-handed Melee', children: oneHandedArray},
        {text: 'Versitile Melee', children: versitileArray},
        {text: 'Two-handed Melee', children: twoHandedArray},
        {text: 'Close Ranged', children: closeRangedArray},
        {text: 'Medium Ranged', children: mediumRangedArray},
        {text: 'Long Ranged', children: longRangedArray},
        {text: 'Extreme Ranged', children: extremeRangedArray}
    ]
    //shield Array
    var shieldArray = [
        {id: 'Small Shield', text: 'Small Shield'},
        {id: 'Riot Shield', text: 'Riot Shield'},
        {id: 'Tower Shield', text: 'Tower Shield'}
    ]
    // Perks Array
    var perksArray = [
    	{id: 'Ageless', text: 'Ageless'}, {id: 'Artisan', text:'Artisan'}, {id: 'Asctetic', text:'Asctetic'}, {id: 'Attractive', text:'Attractive'},
    	{id: 'Brute', text:'Brute'}, {id: 'Courageous', text:'Courageous'}, {id: 'Crowd Favorite', text: 'Crowd Favorite'}, {id: 'Disease Immunity', text: 'Disease Immunity'},
    	{id: 'Divine Agent', text: 'Divine Agent'}, {id: 'Divine Insight', text: 'Divine Insight'}, {id: 'Ear of the Emperor', text: 'Ear of the Emperor'},
		{id: 'Extraordinary Presence', text: 'Extraordinary Presence'}, {id: 'Fugitive', text: 'Fugitive'}, {id: 'Idol', text: 'Idol'}, {id: 'Innocent', text: 'Innocent'}, {id: 'Jack of All Trades', text: 'Jack of All Trades'},
		{id: 'Legendary Bloodline', text: 'Legendary Bloodline'}, {id: 'Local Hero', text: 'Local Hero'}, {id: 'Lucky', text: 'Lucky'}, {id: 'Merchant', text: 'Merchant'}, 
		{id: 'Natures Ally', text: 'Natures Ally'}, {id: 'Observant', text: 'Observant'}, {id: 'Profession', text: 'Profession'}, {id: 'Pure-hearted', text: 'Pure-hearted'},     	
		{id: 'Resilient', text: 'Resilient'}, {id: 'Scavenger', text: 'Scavenger'}, {id: 'Scent', text: 'Scent'}, {id: 'Scolar', text: 'Scolar'}, {id: 'Silver Tongue', text: 'Silver Tongue'},
		{id: 'Stone Sense', text: 'Stone Sense'}, {id: 'Street Rat', text: 'Street Rat'}, {id: 'Upper Class', text: 'Upper Class'}, {id: 'Vagabond', text: 'Vagabond'}, {id: 'Warriors Code', text: 'Warriors Code'},
		{id: 'Wisperer of the Wild', text: 'Wisperer of the Wild'}
    ]
    var flawsArray = [    
        {id: 'Absent-minded', text: 'Absent-minded'}, {id: 'Addiction', text: 'Addiction'}, {id: 'Ambitious', text: 'Ambitious'}, 
        {id: 'Bloodlust', text: 'Bloodlust'}, {id: 'Brash', text:'Brash'}, {id: 'Bravado', text: 'Bravado'}, 
        {id: 'Cosmetic Deformity', text: ' Cosmetic Deformity'}, {id: 'Compulsion', text: 'Compulsion'}, {id: 'Cowardly', text: 'Cowardly'}, 
        {id: 'Dimwitted', text: 'Dimwitted'}, {id: 'Disabled', text: 'Disabled'}, {id: 'Greedy', text: 'Greedy'}, 
        {id: 'Honest', text: 'Honest'}, {id: 'Hot Tempered', text: 'Hot Tempered'}, {id: 'Illiterate', text: 'Illiterate'}, 
        {id: 'Literal Minded', text: 'Literal Minded'}, {id: 'Mood Disorderd', text: 'Mood Disorderd'}, {id: 'Naive', text: 'Naive'}, 
        {id: 'Overt', text: 'Overt'}, {id: 'Overweight', text: 'Overweight'}, {id: 'Pacifist', text: 'Pacifist'}, 
        {id: 'Phobia', text: 'Phobia'}, {id: 'Proud', text: 'Proud'}, {id: 'Psychotic', text: 'Psychotic'}, 
        {id: 'Short-winded', text: 'Short-winded'}, {id: 'Sick', text: 'Sick'}, {id: 'Socially Awkward', text: 'Socially Awkward'}, 
        {id: 'Stubborn', text: 'Stubborn'}, {id: 'Unoordinated', text: 'Uncoordinated'}, {id: 'Vengful', text: 'Vengful'}, 
        {id: 'Zealous', text: 'Zealous'}
    ]
    var featsArray = [   
        {id: 'Alternate Form I', text:'Alternate Form I'}, {id: 'Alternate Form II', text: 'Alternate Form II'}, {id: 'Area Manipulation I', text: 'Area Manipulation I'}, {id: 'Area Manipulation II', text: 'Area Manipulation II'},
        {id:'Area Manipulation III', text:'Area Manipulation III'}, {id:'Area Manipulation IV', text:'Area Manipulation IV'}, {id:'Area Manipulation V', text:'Area Manipulation V'}, {id:'Armor Mastery I', text:'Armor Mastery I'},
        {id:'Armor Mastery II', text:'Armor Mastery II'}, {id:'Attack Redirection', text:'Attack Redirection'}, {id:'Attack Specialization I', text:'Attack Specialization I'}, {id:'Attack Specialization II', text:'Attack Specialization II'},
        {id:'Attack Specialization III', text:'Attack Specialization III'}, {id:'Attack Specialization IV', text:'Attack Specialization IV'}, {id:'Attack Specialization V', text:'Attack Specialization V'},
        {id:'Attack Specialization VI', text:'Attack Specialization VI'}, {id:'Attack Specialization VII', text:'Attack Specialization VII'}, {id:'Attack Specialization VIII', text:'Attack Specialization VIII'},
        {id:'Attack Specialization IX', text:'Attack Specialization IX'}, {id:'Attribute Substitution I', text:'Attribute Substitution I'}, {id:'Attribute Substitution II', text:'Attribute Substitution II'}, 
        {id:'Bane Focus', text:'Bane Focus'}, {id:'Battle Trance', text:'Battle Trance'}, {id:'Battlefield Opportunist I', text:'Battlefield Opportunist I'}, {id:'Battlefield Opportunist II', text:'Battlefield Opportunist II'},
        {id:'Battlefield Opportunist III', text:'Battlefield Opportunist III'}, {id:'Battlefield Opportunist IV', text:'Battlefield Opportunist IV'}, {id:'Battlefield Opportunist V', text:'Battlefield Opportunist V'},
        {id:'Battlefield Punisher', text:'Battlefield Punisher'}, {id:'Battlefield Reflexes', text:'Battlefield Reflexes'}, {id:'Boon Access (1-9 points)', text:'Boon Access (1-9 points)'},
        {id:'Boon Focus I', text:'Boon Focus I'}, {id:'Boon Focus II', text:'Boon Focus II'}, {id:'Boon Focus III', text:'Boon Focus III'}, {id:'Breakfall I', text:'Breakfall I'}, {id:'Breakfall II', text:'Breakfall II'},
        {id:'Brutal Intimidation', text:'Brutal Intimidation'}, {id:'Climbing', text:'Climbing'}, {id:'Combat Follow-through', text:'Combat Follow-through'}, {id:'Combat Momentum', text:'Combat Momentum'},
        {id:'Companion I', text:'Companion I'}, {id:'Companion II', text:'Companion II'}, {id:'Companion III', text:'Companion III'}, {id:'Craft Mundane Item I', text:'Craft Mundane Item I'},
        {id:'Craft Mundane Item II', text:'Craft Mundane Item II'}, {id:'Craft Extraordinary Item I', text:'Craft Extraordinary Item I'}, {id:'Craft Extraordinary Item II', text:'Craft Extraordinary Item II'},
        {id:'Craft Extraordinary Item III', text:'Craft Extraordinary Item III'}, {id:'Crushing Blow', text:'Crushing Blow'}, {id:'Death Blow I', text:'Death Blow I'}, {id:'Death Blow II', text:'Death Blow II'},
        {id:'Deathless Trance', text:'Deathless Trance'}, {id:'Defensive Mastery', text:'Defensive Mastery'}, {id:'Defensive Reflexes I', text:'Defensive Reflexes I'}, {id:'Defensive Reflexes II', text:'Defensive Reflexes II'},
        {id:'Defensive Reflexes III', text:'Defensive Reflexes III'}, {id:'Defensive Reflexes IV', text:'Defensive Reflexes IV'}, {id:'Defensive Reflexes V', text:'Defensive Reflexes V'}, {id:'Defensive Reflexes VI', text:'Defensive Reflexes VI'},
        {id:'Defensive Reflexes VII', text:'Defensive Reflexes VII'}, {id:'Defensive Reflexes VIII', text:'Defensive Reflexes VIII'}, {id:'Defensive Reflexes IX', text:'Defensive Reflexes IX'}, {id:'Destructive Trance', text:'Destructive Trance'},
        {id:'Diehard', text:'Diehard'}, {id:'Energy Resistance I', text:'Energy Resistance I'}, {id:'Energy Resistance II', text:'Energy Resistance II'}, {id:'Energy Resistance III', text:'Energy Resistance III'},
        {id:'Energy Resistance IV', text:'Energy Resistance IV'}, {id:'Evasive Footwork', text:'Evasive Footwork'}, {id:'Extraordinary Defense I', text:'Extraordinary Defense I'}, {id:'Extraordinary Defense II', text:'Extraordinary Defense II'},
        {id:'Extraordinary Defense III', text:'Extraordinary Defense III'}, {id:'Extraordinary Focus', text:'Extraordinary Focus'}, {id:'Extraordinary Healing', text:'Extraordinary Healing'}, {id:'Fast Draw', text:'Fast Draw'},
        {id:'Fast Tracker', text:'Fast Tracker'}, {id:'Fleet of Foot I', text:'Fleet of Foot I'}, {id:'Fleet of Foot II', text:'Fleet of Foot II'}, {id:'Fleet of Foot III', text:'Fleet of Foot III'}, {id:'Flying', text:'Flying'},
        {id:'Ferocious Minions I', text:'Ferocious Minions I'}, {id:'Ferocious Minions II', text:'Ferocious Minions II'}, {id:'Ferocious Minions III', text:'Ferocious Minions III'}, {id:'Great Leap I', text:'Great Leap I'},
        {id:'Great Leap II', text:'Great Leap II'}, {id:'Great Leap III', text:'Great Leap III'}, {id:'Hallucination', text:'Hallucination'}, {id:'Hallucination - Mass', text:'Hallucination - Mass'}, {id:'Heightened Invocation I', text:'Heightened Invocation I'},
        {id:'Heightened Invocation II', text:'Heightened Invocation II'}, {id:'Heightened Invocation III', text:'Heightened Invocation III'}, {id:'Hospitaler', text:'Hospitaler'}, {id:'Impervious Trance', text:'Impervious Trance'},
        {id:'Indomitable Endurance I', text:'Indomitable Endurance I'}, {id:'Indomitable Endurance II', text:'Indomitable Endurance II'}, {id:'Indomitable Endurance III', text:'Indomitable Endurance III'},
        {id:'Indomitable Endurance IV', text:'Indomitable Endurance IV'}, {id:'Indomitable Endurance V', text:'Indomitable Endurance V'}, {id:'Indomitable Resolve I', text:'Indomitable Resolve I'},
        {id:'Indomitable Resolve II', text:'Indomitable Resolve II'}, {id:'Indomitable Resolve III', text:'Indomitable Resolve III'}, {id:'Inspiring Champion I', text:'Inspiring Champion I'}, {id:'Inspiring Champion II', text:'Inspiring Champion II'},
        {id:'Inspiring Champion III', text:'Inspiring Champion III'}, {id:'Knowledge I', text:'Knowledge I'}, {id:'Knowledge II', text:'Knowledge II'}, {id:'Knowledge III', text:'Knowledge III'}, 
        {id:'Lethal Strike I', text:'Lethal Strike I'}, {id:'Lethal Strike II', text:'Lethal Strike II'}, {id:'Lethal Strike III', text:'Lethal Strike III'}, {id:'Lethal Strike IV', text:'Lethal Strike IV'},
        {id:'Lethal Strike V', text:'Lethal Strike V'}, {id:'Lethal Strike VI', text:'Lethal Strike VI'}, {id:'Lethal Strike VII', text:'Lethal Strike VII'}, {id:'Lethal Strike VIII', text:'Lethal Strike VIII'},
        {id:'Lethal Strike IX', text:'Lethal Strike IX'}, {id:'Lightning Reflexes I', text:'Lightning Reflexes I'}, {id:'Lightning Reflexes II', text:'Lightning Reflexes II'}, {id:'Lightning Reflexes III', text:'Lightning Reflexes III'},
        {id:'Lightning Reflexes IV', text:'Lightning Reflexes IV'}, {id:'Lightning Reflexes V', text:'Lightning Reflexes V'}, {id:'Longshot', text:'Longshot'}, {id:'Martial Focus', text:'Martial Focus'}, {id:'Master Tracker', text:'Master Tracker'},
        {id:'Mimic', text:'Mimic'}, {id:'Multi-Attack Specialist I', text:'Multi-Attack Specialist I'}, {id:'Multi-Attack Specialist II', text:'Multi-Attack Specia'}, {id:'Multi-Attack Specialistlist II III', text:'Multi-Attack Specialist III'},
        {id:'Multi-Attack Specialist IV', text:'Multi-Attack Specialist IV'}, {id:'Multi-Attack Specialist V', text:'Multi-Attack Specialist V'}, {id:'Multi-Attack Specialist VI', text:'Multi-Attack Specialist VI'},
        {id:'Multi-Bane Specialist', text:'Multi-Bane Specialist'}, {id:'Multi-Target Attack Specialist I', text:'Multi-Target Attack Specialist I'}, {id:'Multi-Target Attack Specialist II', text:'Multi-Target Attack Specialist II'},
        {id:'Multi-Target Attack Specialist III', text:'Multi-Target Attack Specialist III'}, {id:'Multi-Target Attack Specialist IV', text:'Multi-Target Attack Specialist IV'}, {id:'Multi-Target Attack Specialist V', text:'Multi-Target Attack Specialist V'},
        {id:'Multi-Target Boon Expert', text:'Multi-Target Boon Expert'}, {id:'Multi-Target Boon Specialist I', text:'Multi-Target Boon Specialist I'}, {id:'Multi-Target Boon Specialist II', text:'Multi-Target Boon Specialist II'},
        {id:'Multi-Target Boon Specialist III', text:'Multi-Target Boon Specialist III'}, {id:'Multi-Target Boon Specialist IV', text:'Multi-Target Boon Specialist IV'}, {id:'Multi-Target Boon Specialist V', text:'Multi-Target Boon Specialist V'},
        {id:'Natural Defense I', text:'Natural Defense I'}, {id:'Natural Defense II', text:'Natural Defense II'}, {id:'Natural Defense III', text:'Natural Defense III'}, {id:'Overpowering Strike', text:'Overpowering Strike'}, 
        {id:'Potent Bane', text:'Potent Bane'}, {id:'Reactionary Trance', text:'Reactionary Trance'}, {id:'Reckless Attack', text:'Reckless Attack'}, {id:'Resilient', text:'Resilient'}, {id:'Sentinel I', text:'Sentinel I'},
        {id:'Sentinel II', text:'Sentinel II'}, {id:'Sentinel III', text:'Sentinel III'}, {id:'Silencing Strike', text:'Silencing Strike'}, {id:'Skill Specialization I', text:'Skill Specialization I'}, {id:'Skill Specialization II', text:'Skill Specialization II'},
        {id:'Skill Specialization III', text:'Skill Specialization III'}, {id:'Skill Specialization IV', text:'Skill Specialization IV'}, {id:'Skill Specialization V', text:'Skill Specialization V'}, {id:'Superior Concentration I', text:'Superior Concentration I'},
        {id:'Superior Concentration II', text:'Superior Concentration II'}, {id:'Superior Concentration III', text:'Superior Concentration III'}, {id:'Swimming', text:'Swimming'}, {id:'Sworn Enemy I', text:'Sworn Enemy I'},
        {id:'Sworn Enemy II', text:'Sworn Enemy II'}, {id:'Sworn Enemy III', text:'Sworn Enemy III'}, {id:'Sworn Enemy IV', text:'Sworn Enemy IV'}, {id:'Sworn Enemy V', text:'Sworn Enemy V'}, {id:'Sworn Enemy VI', text:'Sworn Enemy VI'},
        {id:'Sworn Enemy VII', text:'Sworn Enemy VII'}, {id:'Sworn Enemy VIII', text:'Sworn Enemy VIII'}, {id:'Sworn Enemy IX', text:'Sworn Enemy IX'}, {id:'Sworn Enemy X', text:'Sworn Enemy X'},
        {id:'Tough as Nails I', text:'Tough as Nails I'}, {id:'Tough as Nails II', text:'Tough as Nails II'}, {id:'Two Weapon Brute', text:'Two Weapon Brute'}, {id:'Two Weapon Defense', text:'Two Weapon Defense'},
        {id:'Unending Charm', text:'Unending Charm'}, {id:'Untrackable', text:'Untrackable'}, {id:'Vicious Strike', text:'Vicious Strike'}, {id:'Wealthy', text:'Wealthy'}, {id:'Well-Rounded', text:'Well-Rounded'}
    ]  
    // Gives data to HTML select tags 
    $('#feats-select1').select2({
        placeholder: 'Select Feats',
        data: featsArray,
        maximumSelectionLength: 1
    });

    $('#feats-select2').select2({
        placeholder: 'Select Feats',
        data: featsArray,
        maximumSelectionLength: 1
    });
    
    $('#feats-select3').select2({
        placeholder: 'Select Feats',
        data: featsArray,
        maximumSelectionLength: 1
    });

    $('#feats-select4').select2({
        placeholder: 'Select Feats',
        data: featsArray,
        maximumSelectionLength: 1
    });
    
    $('#feats-select5').select2({
        placeholder: 'Select Feats',
        data: featsArray,
        maximumSelectionLength: 1
    });

    $('#feats-select6').select2({
        placeholder: 'Select Feats',
        data: featsArray,
        maximumSelectionLength: 1
    });

    $('#feats-select7').select2({
        placeholder: 'Select Feats',
        data: featsArray,
        maximumSelectionLength: 1
    });

    $('#feats-select8').select2({
        placeholder: 'Select Feats',
        data: featsArray,
        maximumSelectionLength: 1
    });

    $('#feats-select9').select2({
        placeholder: 'Select Feats',
        data: featsArray,
        maximumSelectionLength: 1
    });

    $('#feats-select10').select2({
        placeholder: 'Select Feats',
        data: featsArray,
        maximumSelectionLength: 1
    });
   
    $('#archetype-select').select2({
        placeholder: 'Select Archetype', 
        data: archetypeArray,
        maximumSelectionLength: 1 
    });
    $('#armor-select').select2({
        placeholder:'Select Armor', 
        data: armorArray,
        maximumSelectionLength: 3
    });
    $('#weapon-select').select2({
        placeholder:'Select Weapon', 
        data: weaponArray 
    });
    $('#shield-select').select2({
        placeholder:'Select Shield',
        data: shieldArray,
        maximumSelectionLength: 1
    });
    
    $('#archetype-select').select2({ 
        placeholder: 'Select Archetype', 
        data: archetypeArray 
    });
    $('#armor-select').select2({ 
        placeholder:'Select Armor', 
        data: armorArray 
    });
    $('#weapon-select').select2({ 
        placeholder:'Select Weapon', 
        data: weaponArray 
    });
    $('#perks-select').select2({ 
        placeholder:'Select Perks', 
        data: perksArray 
    });
    $('#flaws-select').select2({ 
        placeholder:'Select Flaws', 
        data:flawsArray 
    });
    
});






