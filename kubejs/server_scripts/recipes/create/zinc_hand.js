onEvent('recipes', event => {
 
	//циковая рука
	event.shaped(Item.of('kubejs:zinc_hand', ), // arg 1: output
  [
    ' A ',
    ' B ', // arg 2: the shape (array of strings)
    'BBB'
  ],
  {
    A: 'create:andesite_alloy',
    B: '#forge:plates/zinc'  //arg 3: the mapping object
  }
)	





})

