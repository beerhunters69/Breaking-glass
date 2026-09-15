// priority: 1
onEvent('item.tags', event => {
    //Unified item tags
    event.removeAll('forge:storage_blocks/' + "charcoal")
    event.add('forge:storage_blocks/' + "charcoal", 'thermal:' + "charcoal" + '_block')

    event.removeAll('forge:dusts/' + "charcoal")
    event.add('forge:dusts/' + "charcoal", 'emendatusenigmatica:' + "charcoal" + '_dust')

    //Conversion tag
    event.add('kubejs:blocks_conversion/' + "charcoal", 'mekanism:block_charcoal')

    event.add('kubejs:dusts_conversion/' + "charcoal", 'mekanism:dust_charcoal') 
})

onEvent('recipes', event => {
    event.shapeless('1x thermal:' + "charcoal" + '_block', ['#kubejs:blocks_conversion/' + "charcoal"])
    event.remove({ output: '#kubejs:blocks_conversion/' + "charcoal" })

    event.shapeless('1x emendatusenigmatica:' + "charcoal" + '_dust', ['#kubejs:dusts_conversion/' + "charcoal"])
    event.replaceOutput(
        [
        { id: 'mekanism:processing/' + "charcoal" + '/dust/from_dirty_dust' },
        { id: 'mekanism:processing/' + "charcoal" + '/dust/from_ingot' },
        { id: 'mekanism:processing/' + "charcoal" + '/dust/from_ore' },
        { id: 'mekanism:processing/' + "charcoal" + '/dust/from_infusing' },
        { id: 'mekanism:processing/' + "charcoal" + '/to_dust' },
        { id: 'mekanism:crushing/' + "charcoal" + '_dust' },
        { id: 'mekanism:enriching/' + "charcoal" + '_dust' },
        { id: 'mekanism:reaction/wood_gasification/logs'},      
        { id: 'mekanism:reaction/wood_gasification/planks'},                  
        ], 
        '#kubejs:dusts_conversion/' + "charcoal", 
        'emendatusenigmatica:' + "charcoal" + '_dust'
    )
    event.remove({ output: '#kubejs:dusts_conversion/' + "charcoal" })

})