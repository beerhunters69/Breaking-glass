

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




	
})