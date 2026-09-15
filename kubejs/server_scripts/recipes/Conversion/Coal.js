// priority: 1
onEvent('item.tags', event => {
    //Unified item tags
    event.removeAll('forge:dusts/' + "coal")
    event.add('forge:dusts/' + "coal", 'emendatusenigmatica:' + "coal" + '_dust')

    //Conversion tag
    event.add('kubejs:dusts_conversion/' + "coal", 'mekanism:dust_coal') 
    event.add('kubejs:dusts_conversion/' + "coal", 'lazierae2:coal_dust')     

})

onEvent('recipes', event => {
    event.shapeless('1x emendatusenigmatica:' + "coal" + '_dust', ['#kubejs:dusts_conversion/' + "coal"])
    event.replaceOutput(
        [
        { id: 'mekanism:processing/' + "coal" + '/dust/from_dirty_dust' },
        { id: 'mekanism:processing/' + "coal" + '/dust/from_ingot' },
        { id: 'mekanism:processing/' + "coal" + '/dust/from_ore' },
        { id: 'mekanism:processing/' + "coal" + '/dust/from_infusing' },
        { id: 'mekanism:processing/' + "coal" + '/to_dust' },        
        ], 
        '#kubejs:dusts_conversion/' + "coal", 
        'emendatusenigmatica:' + "coal" + '_dust'
    )
    event.remove({ output: '#kubejs:dusts_conversion/' + "coal" })

})