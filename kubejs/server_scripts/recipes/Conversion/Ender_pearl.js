// priority: 1
onEvent('item.tags', event => {
    //Unified item tags
    event.removeAll('forge:dusts/' + "ender")
    event.removeAll('appliedenergistics2:dusts/' + "ender")
    event.removeAll('forge:dusts/' + "ender_pearl")    
    event.add('forge:dusts/' + "ender", 'emendatusenigmatica:' + "ender" + '_dust')
    event.add('appliedenergistics2:dusts/' + "ender", 'emendatusenigmatica:' + "ender" + '_dust')    
    event.add('forge:dusts/' + "ender_pearl", 'emendatusenigmatica:' + "ender" + '_dust')

    //Conversion tag
    event.add('kubejs:dusts_conversion/' + "ender", 'appliedenergistics2:ender_dust')
    event.add('kubejs:dusts_conversion/' + "ender", 'thermal:ender_pearl_dust')
    event.add('kubejs:dusts_conversion/' + "ender", 'betterendforge:ender_dust')

})

onEvent('recipes', event => {
    event.shapeless('1x emendatusenigmatica:' + "ender" + '_dust', ['#kubejs:dusts_conversion/' + "ender"])
    event.replaceOutput(
        [
        { id: 'create:compat/ae2/milling/ender_pearl'},
        { id: 'appliedenergistics2:centrifuge/ender_dust'},
        { id: 'mekanism:compat/appliedenergistics2/ender_pearl_to_dust'}
        ], 
        '#kubejs:dusts_conversion/' + "ender", 
        'emendatusenigmatica:' + "ender" + '_dust'
    )
    event.remove({id: 'lazierae2:aggregator/resonating_gem'})
    event.remove({ output: '#kubejs:dusts_conversion/' + "ender" })

})