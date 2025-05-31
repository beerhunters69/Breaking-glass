// priority: 1

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Хабиба хабоба2')


onEvent('item.tags', event => {
    event.removeAll('twilightforest:portal/activator')
	event.add('twilightforest:portal/activator', 'kubejs:tf_portal_item')
    event.add('forge:dusts/duralumium','kubejs:duraluminium_dust')
    event.add('forge:ingots/duralumium','kubejs:duraluminium_ingot')
    event.add('forge:ingots/chromatic_compound','create:chromatic_compound')

})

onEvent('fluid.tags', event => {
  // Get the #forge:cobblestone tag collection and add Diamond Ore to it
  event.add('forge:liquid_starlight', 'astralsorcery:liquid_starlight')
  event.add('forge:molten_angelic_alloy', 'kubejs:molten_angelic_alloy')


})