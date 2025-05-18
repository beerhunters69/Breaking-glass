priority: 1

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = true
settings.logErroringRecipes = true

console.info('Хабиба хабоба2')

onEvent('recipes', event => {
  	
  // портал в твайлайт
  event.recipes.create.sequenced_assembly([
		'kubejs:tf_portal_item', 
	], 'minecraft:tnt', [ 
		event.recipes.createDeploying('kubejs:incomplete_tf_portal_item', ['kubejs:incomplete_tf_portal_item', 'minecraft:oak_sapling']),
		event.recipes.createDeploying('kubejs:incomplete_tf_portal_item', ['kubejs:incomplete_tf_portal_item', 'minecraft:spruce_sapling']),
		event.recipes.createDeploying('kubejs:incomplete_tf_portal_item', ['kubejs:incomplete_tf_portal_item', 'minecraft:birch_sapling']),
		event.recipes.createDeploying('kubejs:incomplete_tf_portal_item', ['kubejs:incomplete_tf_portal_item', 'minecraft:jungle_sapling']),
		event.recipes.createDeploying('kubejs:incomplete_tf_portal_item', ['kubejs:incomplete_tf_portal_item', 'minecraft:acacia_sapling']),
	]).transitionalItem('kubejs:incomplete_tf_portal_item').loops(1) 

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
	// цинковая пластина
	event.recipes.create.pressing('emendatusenigmatica:zinc_plate','#forge:ingots/zinc')
	//убрать молот из эмендатус энигматики
	event.remove({id:'emendatusenigmatica:enigmatic_hammer'})

})

onEvent('item.tags', event => {
    event.removeAll('twilightforest:portal/activator')
	event.add('twilightforest:portal/activator', 'kubejs:tf_portal_item')
})