$(document).ready(function(){
    var archetypeArray = [
        {id: '0', text: 'Custom'}, {id: '1', text: 'Barbarian'}, {id: '2', text: 'Ranger'}, {id: '3', text: 'Monk'},
        {id: '4', text: 'Paladin'}, {id: '5', text: 'Battle Mage'}, {id: '5', text: 'Mind Mage'}, {id: '6', text: 'Assassin'}, {id: '7', text: 'Cleric'}, {id: '8', text: 'Druid'}, {id: '9', text: 'Shadowdancer'}, {id: '10', text: 'Bard'}, {id: '11', text: 'Arcane Protector'}
    ]
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
    
    var oneHandedArray = 
    
    
    var weaponArray = [
        {text: 'One-handed Melee', children: oneHandedArray},
        {text:'Versitile Melee', children: versitileArray},
        {text:'Two-handed Melee', children: twoHandedArray}
    ]

    
    $('#archetype-select').select2({ data: archetypeArray });
    $('#armor-select').select2({ data: armorArray });
});






