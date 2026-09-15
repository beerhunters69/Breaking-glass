// priority: 1
onEvent('item.tags', event => {
    //Unified item tags
    event.removeAll('forge:ingots/' + "brass")
    event.add('forge:ingots/' + "brass", 'emendatusenigmatica:' + "brass" + '_ingot')

    event.removeAll('forge:storage_blocks/' + "brass")
    event.add('forge:storage_blocks/' + "brass", 'emendatusenigmatica:' + "brass" + '_block')

    event.removeAll('forge:nuggets/' + "brass")
    event.add('forge:nuggets/' + "brass", 'emendatusenigmatica:' + "brass" + '_nugget')

    event.removeAll('forge:plates/' + "brass")
    event.add('forge:plates/' + "brass", 'emendatusenigmatica:' + "brass" + '_plate')

    //Conversion tag
    event.add('kubejs:ingots_conversion/' + "brass", 'create:' + "brass" + '_ingot')

    event.add('kubejs:blocks_conversion/' + "brass", 'create:' + "brass" + '_block')

    event.add('kubejs:nuggets_conversion/' + "brass", 'create:' + "brass" + '_nugget')

    event.add('kubejs:plates_conversion/' + "brass", 'create:' + "brass" + '_sheet')
})

onEvent('recipes', event => {
    event.shapeless('1x emendatusenigmatica:' + "brass" + '_ingot', ['#kubejs:ingots_conversion/' + "brass"])
    event.replaceOutput(
        [
        { id: 'create:blasting/' + "brass" + '_ingot_from_crushed' },
        { id: 'create:smelting/' + "brass" + '_ingot_from_crushed' },
        { id: 'create:mixing/' + "brass" + '_ingot' },
        { id: 'thermal:compat/tconstruct/chiller_tconstruct_' + "brass" + '_ingot' },
        { id: 'productivebees:create/mixing/ingots/honeycomb_brazen'}
        ], 
        '#kubejs:ingots_conversion/' + "brass", 
        'emendatusenigmatica:' + "brass" + '_ingot'
    )
    event.remove({ output: '#kubejs:ingots_conversion/' + "brass" })


    event.shapeless('1x emendatusenigmatica:' + "brass" + '_block', ['#kubejs:blocks_conversion/' + "brass"])
    event.remove({ output: '#kubejs:blocks_conversion/' + "brass" })

    event.shapeless('1x emendatusenigmatica:' + "brass" + '_nugget', ['#kubejs:nuggets_conversion/' + "brass"])
    event.remove({ output: '#kubejs:nuggets_conversion/' + "brass" })

    event.shapeless('1x emendatusenigmatica:' + "brass" + '_plate', ['#kubejs:plates_conversion/' + "brass"])
    event.replaceOutput(
        [
        { id: 'immersiveengineering:crafting/plate_' + "brass" + '_hammering' },
        { id: 'create:pressing/' + "brass" + '_ingot' }
        ], 
        '#kubejs:plates_conversion/' + "brass", 
        'emendatusenigmatica:' + "brass" + '_plate'
    )
    event.remove({ output: '#kubejs:plates_conversion/' + "brass" })

})