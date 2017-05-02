$(document).ready(function(){
    // archetype array
    var archetypeArray = [
        {id: '0', text: 'Custom'}, {id: '1', text: 'Barbarian'}, {id: '2', text: 'Ranger'}, {id: '3', text: 'Monk'}, {id: '4', text: 'Paladin'}, {id: '5', text: 'Battle Mage'}, {id: '5', text: 'Mind Mage'}, {id: '6', text: 'Assassin'}, {id: '7', text: 'Cleric'}, {id: '8', text: 'Druid'}, {id: '9', text: 'Shadowdancer'}, {id: '10', text: 'Bard'}, {id: '11', text: 'Arcane Protector'}
    ]
    //armor array
    var lightArmorArray = [
        {id: 'wl1', text: 'Leather Armor'}, {id: 'wl1', text: 'Steelsilk'}, {id: 'wl1', text: 'Padded Armor'} 
    
    ]
    var mediumArmorArray = [
        {id: 'wl3', text: 'Armored Trench Coat'}, {id: 'wl3', text: 'Electropolymer Armor'}, {id: 'wl2', text: 'Chainmail'}, {id: 'wl3', text: 'Kevlar Vest'}, {id: 'wl3', text: 'Breastplate'}
    ]
    var heavyArmorArray = [
        {id: 'wl2', text: 'Yoroi Armor'}, {id: 'wl2', text: 'Plate Mail'}, {id: 'wl2', text: 'Riot Suit'}, {id: 'wl4', text: 'Power Armor'}, {id: 'wl4', text: 'Elven Plate Mail'} 
    
    ]
    var armorArray = [
        {text: 'Light', children: lightArmorArray}, 
        {text: 'Medium', children: mediumArmorArray}, 
        {text: 'Heavy',children: heavyArmorArray}     
    ] 
    
    // weapon array
    var oneHandedArray = [
        {id: 'wl0', text: 'Unarmed Strike'}, {id: 'wl2', text: 'Bowie Knife'}, {id: 'wl2', text: 'Shiv'}, {id: 'wl2', text: 'Multi-tool'}, {id: 'wl1', text: 'Scimitar'}, {id: 'wl1', text: 'Short Sword'}, {id: 'wl1', text: 'Machete'}, {id: 'wl1', text: 'Sawblade'}, {id: 'wl1', text: 'Blow Gun'}, {id: 'wl1', text: 'Dart'}, {id: 'wl2', text: 'Hatchet'}, {id: 'wl2', text: 'Dagger'}, {id: 'wl1', text: 'Mace'}, {id: 'wl1', text: 'Baseball Bat'}, {id: 'wl1', text: 'Club'}, {id: 'wl1', text: 'Improvised Weapon'}, {id: 'wl1', text: 'Warhammer'}        
    ]
    var versitileArray = [
         {id: 'wl1', text: 'Longsword'}, {id: 'wl1', text: 'Katana'}, {id: 'wl1', text: 'Falcion'}, {id: 'wl1', text: 'Short Spear'}
    ]
    var twoHandedArray = [
         {id: 'wl1', text: 'Great Sword'}, {id: 'wl1', text: 'No-dachi'}, {id: 'wl1', text: 'Claymore'}, {id: 'wl1', text: 'Bastard Sword'}, {id: 'wl1', text: 'Chainsaw'}, {id: 'wl1', text: 'Sledge Hammer'}, {id: 'wl1', text: 'Maul'},  {id: 'wl1', text: 'Great Axe'}, {id: 'wl2', text: 'Long Spear'}, {id: 'wl1', text: 'Pitchfork'}, {id: 'wl1', text: 'Staff'}, {id: 'wl2', text: 'Glaive'},  {id: 'wl2', text: 'Halberd'}, {id: 'wl2', text: 'Nanginata'}, {id: 'wl3', text: 'Flamethrower'}
    ]
    var closeRangedArray = [
         {id: 'wl1', text: 'Laser Gun'}, {id: 'wl1', text: 'Revolver'}, {id: 'wl1', text: 'Handgun'}, {id: 'wl1', text: 'Grenade'}, {id: 'wl1', text: 'Firebomb'}, {id: 'wl1', text: 'Elexir'}
    ]
    var mediumRangedArray = [
         {id: 'wl1', text: 'Light Crossbow'},  {id: 'wl1', text: 'Shortbow'},  {id: 'wl1', text: 'Pump Shotgun'},  {id: 'wl3', text: 'Submachine Gun'},  {id: 'wl3', text: 'M16'}
    ]
    var longRangedArray = [
         {id: 'wl1', text: 'Heavy Crossbow'}, {id: 'wl1', text: 'Longbow'}, {id: 'wl1', text: 'Rifle'}
    ]
    var extremeRangedArray = [
         {id: 'wl4', text: 'Sniper Rifle'}, {id: 'wl4', text: 'Phase Rifle'},  {id: 'wl2', text: 'Cannon'}
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

    $('#archetype-select').select2({ data: archetypeArray });
    $('#armor-select').select2({ data: armorArray });
    $('#weapon-select').select2({ data: weaponArray });
});






