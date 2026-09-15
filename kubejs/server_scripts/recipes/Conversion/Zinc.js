// priority: 1
onEvent('item.tags', event => {
    //Unified item tags
    event.removeAll('forge:ingots/' + "zinc")
    event.add('forge:ingots/' + "zinc", 'emendatusenigmatica:' + "zinc" + '_ingot')

    event.removeAll('forge:storage_blocks/' + "zinc")
    event.add('forge:storage_blocks/' + "zinc", 'emendatusenigmatica:' + "zinc" + '_block')

    event.removeAll('forge:nuggets/' + "zinc")
    event.add('forge:nuggets/' + "zinc", 'emendatusenigmatica:' + "zinc" + '_nugget')

    //Conversion tag
    event.add('kubejs:ingots_conversion/' + "zinc", 'create:' + "zinc" + '_ingot')

    event.add('kubejs:blocks_conversion/' + "zinc", 'create:' + "zinc" + '_block')

    event.add('kubejs:nuggets_conversion/' + "zinc", 'create:' + "zinc" + '_nugget')
})

onEvent('recipes', event => {
    event.shapeless('1x emendatusenigmatica:' + "zinc" + '_ingot', ['#kubejs:ingots_conversion/' + "zinc"])
    event.replaceOutput(
        [
        { id: 'create:blasting/' + "zinc" + '_ingot_from_crushed' },
        { id: 'create:smelting/' + "zinc" + '_ingot_from_crushed' },
        { id: 'thermal:compat/tconstruct/chiller_tconstruct_' + "zinc" + '_ingot' },
        { id: 'productivebees:create/mixing/ingots/honeycomb_' + "zinc"}
        ], 
        '#kubejs:ingots_conversion/' + "zinc", 
        'emendatusenigmatica:' + "zinc" + '_ingot'
    )
    event.remove({ output: '#kubejs:ingots_conversion/' + "zinc" })


    event.shapeless('1x emendatusenigmatica:' + "zinc" + '_block', ['#kubejs:blocks_conversion/' + "zinc"])
    event.remove({ output: '#kubejs:blocks_conversion/' + "zinc" })

    event.shapeless('1x emendatusenigmatica:' + "zinc" + '_nugget', ['#kubejs:nuggets_conversion/' + "zinc"])
    event.replaceOutput(
        [
        { id: 'create:splashing/crushed_' + "zinc" + '_ore' }
        ], 
        '#kubejs:nuggets_conversion/' + "zinc", 
        'emendatusenigmatica:' + "zinc" + '_nugget'
    )
    event.remove({ output: '#kubejs:nuggets_conversion/' + "zinc" })
})