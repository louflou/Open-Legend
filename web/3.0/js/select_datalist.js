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

    $('#archetype-select').select2({ placeholder: 'Select Archetype', data: archetypeArray });
    $('#armor-select').select2({ placeholder:'Select Armor', data: armorArray });
    $('#weapon-select').select2({ placeholder:'Select Weapon', data: weaponArray });
});






