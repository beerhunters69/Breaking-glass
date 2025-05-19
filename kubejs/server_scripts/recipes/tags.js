// priority: 1

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Хабиба хабоба2')


onEvent('item.tags', event => {
    event.removeAll('twilightforest:portal/activator')
	event.add('twilightforest:portal/activator', 'kubejs:tf_portal_item')
})

