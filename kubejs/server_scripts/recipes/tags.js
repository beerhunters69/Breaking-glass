// priority: 1

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true



onEvent('item.tags', event => {
    event.removeAll('twilightforest:portal/activator')
	event.add('twilightforest:portal/activator', 'kubejs:tf_portal_item')
    event.add('forge:dusts/duralumium','kubejs:duraluminium_dust')
    event.add('forge:ingots/duralumium','kubejs:duraluminium_ingot')
    event.add('forge:ingots/chromatic_compound','create:chromatic_compound')
    event.add('forge:dusts/netherite_base','kubejs:netherite_base')
    event.add('forge:dusts/blaze','minecraft:blaze_powder')
})

onEvent('fluid.tags', event => {
  event.add('forge:liquid_starlight', 'astralsorcery:liquid_starlight')
  event.add('forge:molten_angelic_alloy', 'kubejs:molten_angelic_alloy')
  event.add('forge:molten_cwgnc', 'kubejs:molten_cwgnc')
  event.add('forge:molten_wgnc', 'kubejs:molten_wgnc')
  event.add('forge:latex', 'thermal:latex')

})