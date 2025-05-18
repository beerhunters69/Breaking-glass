priority: 1

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = true
settings.logErroringRecipes = true

console.info('Хабиба хабоба2')

onEvent('recipes', event => {

	event.shaped('3x minecraft:stone', [
    'SAS',
    'S S',
    'SAS'
  ], {
    S: 'minecraft:sponge',
    A: 'minecraft:apple'
  }).stage('stage_1')

  	



  event.recipes.create.sequenced_assembly([
		'kubejs:tf_portal_item', // this is the item that will appear in JEI as the result
	], 'minecraft:tnt', [ // 'create:golden_sheet' is the input
		// the transitional item set by `transitionalItem('create:incomplete_large_cogwheel')` is the item used during the intermediate stages of the assembly
		event.recipes.createDeploying('kubejs:incomplete_tf_portal_item', ['kubejs:incomplete_tf_portal_item', 'minecraft:oak_sapling']),
		// like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
		event.recipes.createDeploying('kubejs:incomplete_tf_portal_item', ['kubejs:incomplete_tf_portal_item', 'minecraft:spruce_sapling']),
		event.recipes.createDeploying('kubejs:incomplete_tf_portal_item', ['kubejs:incomplete_tf_portal_item', 'minecraft:birch_sapling']),
		event.recipes.createDeploying('kubejs:incomplete_tf_portal_item', ['kubejs:incomplete_tf_portal_item', 'minecraft:jungle_sapling']),
		event.recipes.createDeploying('kubejs:incomplete_tf_portal_item', ['kubejs:incomplete_tf_portal_item', 'minecraft:acacia_sapling']),
	]).transitionalItem('kubejs:incomplete_tf_portal_item').loops(1) // set the transitional item and the number of loops

	// Change recipes here
})

onEvent('item.tags', event => {
    event.removeAll('twilightforest:portal/activator')
	event.add('twilightforest:portal/activator', 'kubejs:tf_portal_item')
})