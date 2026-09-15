// priority: 1
onEvent('item.tags', event => {
    //Unified item tags
    event.removeAll('forge:dusts/' + "diamond")
    event.add('forge:dusts/' + "diamond", 'emendatusenigmatica:' + "diamond" + '_dust')

    event.removeAll('forge:gears/' + "diamond")
    event.add('forge:gears/' + "diamond", 'emendatusenigmatica:' + "diamond" + '_gear')

    //Conversion tag
    event.add('kubejs:dusts_conversion/' + "diamond", 'mekanism:dust_diamond')
    event.add('kubejs:dusts_conversion/' + "diamond", 'thermal:diamond_dust')
    
    event.add('kubejs:gears_conversion/' + "diamond", 'thermal:' + "diamond" + '_gear')
})

onEvent('recipes', event => {
    event.shapeless('1x emendatusenigmatica:' + "diamond" + '_dust', ['#kubejs:dusts_conversion/' + "diamond"])
    event.replaceOutput(
        [
        { id: 'mekanism:processing/diamond/to_dust'}
        ], 
        '#kubejs:dusts_conversion/' + "diamond", 
        'emendatusenigmatica:' + "diamond" + '_dust'
    )
    event.remove({ output: '#kubejs:dusts_conversion/' + "diamond" })

    event.shapeless('1x emendatusenigmatica:' + "diamond" + '_gear', ['#kubejs:gears_conversion/' + "diamond"])
    event.remove({ output: '#kubejs:gears_conversion/' + "diamond" })
})