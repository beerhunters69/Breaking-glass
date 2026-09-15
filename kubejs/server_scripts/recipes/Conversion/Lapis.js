// priority: 1
onEvent('item.tags', event => {
    //Unified item tags
    event.removeAll('forge:dusts/' + "lapis")
    event.add('forge:dusts/' + "lapis", 'emendatusenigmatica:' + "lapis" + '_dust')

    event.removeAll('forge:gears/' + "lapis")
    event.add('forge:gears/' + "lapis", 'emendatusenigmatica:' + "lapis" + '_gear')

    //Conversion tag
    event.add('kubejs:dusts_conversion/' + "lapis", 'thermal:' + "lapis" + '_dust')
    event.add('kubejs:dusts_conversion/' + "lapis", 'mekanism:' + "dust_" + 'lapis_lazuli')  
    
    event.add('kubejs:gears_conversion/' + "lapis", 'thermal:' + "lapis" + '_gear')
})

onEvent('recipes', event => {
    event.shapeless('1x emendatusenigmatica:' + "lapis" + '_dust', ['#kubejs:dusts_conversion/' + "lapis"])
    event.replaceOutput(
        {id: 'mekanism:processing/' + "lapis_lazuli" + '/to_dust' }, 
        '#kubejs:dusts_conversion/' + "lapis", 
        'emendatusenigmatica:' + "lapis" + '_dust'
    )
    event.remove({ output: '#kubejs:dusts_conversion/' + "lapis" })
    
    event.shapeless('1x emendatusenigmatica:' + "lapis" + '_gear', ['#kubejs:gears_conversion/' + "lapis"])
    event.remove({ output: '#kubejs:gears_conversion/' + "lapis" })
})