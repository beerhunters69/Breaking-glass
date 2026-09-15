// priority: 1
onEvent('item.tags', event => {
    //Unified item tags
    event.removeAll('forge:dusts/' + "emerald")
    event.add('forge:dusts/' + "emerald", 'emendatusenigmatica:' + "emerald" + '_dust')

    event.removeAll('forge:gears/' + "emerald")
    event.add('forge:gears/' + "emerald", 'emendatusenigmatica:' + "emerald" + '_gear')

    //Conversion tag
    event.add('kubejs:dusts_conversion/' + "emerald", 'mekanism:dust_emerald')
    event.add('kubejs:dusts_conversion/' + "emerald", 'thermal:emerald_dust')
    
    event.add('kubejs:gears_conversion/' + "emerald", 'thermal:' + "emerald" + '_gear')
})

onEvent('recipes', event => {
    event.shapeless('1x emendatusenigmatica:' + "emerald" + '_dust', ['#kubejs:dusts_conversion/' + "emerald"])
    event.replaceOutput(
        [
        { id: 'mekanism:processing/emerald/to_dust'}
        ], 
        '#kubejs:dusts_conversion/' + "emerald", 
        'emendatusenigmatica:' + "emerald" + '_dust'
    )
    event.remove({ output: '#kubejs:dusts_conversion/' + "emerald" })

    event.shapeless('1x emendatusenigmatica:' + "emerald" + '_gear', ['#kubejs:gears_conversion/' + "emerald"])
    event.remove({ output: '#kubejs:gears_conversion/' + "emerald" })
})