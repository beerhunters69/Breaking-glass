// priority: 1
onEvent('item.tags', event => {
    //Unified item tags
    event.removeAll('forge:ingots/' + "graphite")
    event.add('forge:ingots/' + "graphite", 'immersiveengineering:' + 'ingot_' + "hop_graphite")


    //Conversion tag
    event.add('kubejs:ingots_conversion/' + "graphite", 'bigreactors:' + "graphite" + '_ingot')

})

onEvent('recipes', event => {
    event.shapeless('1x immersiveengineering:' + 'ingot_' + "hop_graphite", ['#kubejs:ingots_conversion/' + "graphite"])
    event.replaceOutput(
        { id: 'bigreactors:crafting/graphite_storage_to_component'}, 
        '#kubejs:ingots_conversion/graphite',
        'immersiveengineering:ingot_hop_graphite'
    )
    event.remove({ output: '#kubejs:ingots_conversion/' + "graphite" })
    event.remove({ output: 'bigreactors:graphite_block'})
    event.shapeless('bigreactors:graphite_block', '9x immersiveengineering:ingot_hop_graphite')
})