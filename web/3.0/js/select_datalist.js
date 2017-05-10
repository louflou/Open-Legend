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

    var feats1Array = [
        
        {id: 'Alternate Form I', text:'Alternate Form I'}, {id: 'Alternate Form II', text: 'Alternate Form II'}, {id: 'Area Manipulation I', text: 'Area Manipulation I'}, {id: 'Area Manipulation II', text: 'Area Manipulation II'}
    
    ]

    
    // Gives data to HTML select tags 
    
    
    
    $('#feats-select1').select2({
        placeholder: 'Select Feats',
        data: feats1Array,
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
        maximumSelectionLength: 1
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






