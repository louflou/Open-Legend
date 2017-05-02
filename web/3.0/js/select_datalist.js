$(document).ready(function(){
    $('#archetype-select').select2({ data: archetypeArray });
});






  archetypeArray: [
    {id: '0', text: 'Custom'}, {id: '1', text: 'Barbarian'}, {id: '2', text: 'Ranger'}, {id: '3', text: 'Monk'},
    {id: '4', text: 'Paladin'}, {id: '5', text: 'Battle Mage'}, {id: '5', text: 'Mind Mage'}, {id: '6', text: 'Assassin'}, {id: '7', text: 'Cleric'}, {id: '8', text: 'Druid'}, {id: '9', text: 'Shadowdancer'}, {id: '10', text: 'Bard'}, {id: '11', text: 'Arcane Protector'}
    
    // ... more data objects ...
  ]
