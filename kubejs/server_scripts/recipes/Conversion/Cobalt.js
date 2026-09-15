// priority: 1
onEvent('item.tags', event => {
    //Unified item tags
    event.removeAll('forge:ingots/' + "cobalt")
    event.add('forge:ingots/' + "cobalt", 'emendatusenigmatica:' + "cobalt" + '_ingot')

    event.removeAll('forge:storage_blocks/' + "cobalt")
    event.add('forge:storage_blocks/' + "cobalt", 'emendatusenigmatica:' + "cobalt" + '_block')

    event.removeAll('forge:nuggets/' + "cobalt")
    event.add('forge:nuggets/' + "cobalt", 'emendatusenigmatica:' + "cobalt" + '_nugget')

    //Conversion tag
    event.add('kubejs:ingots_conversion/' + "cobalt", 'tconstruct:' + "cobalt" + '_ingot')

    event.add('kubejs:blocks_conversion/' + "cobalt", 'tconstruct:' + "cobalt" + '_block')

    event.add('kubejs:nuggets_conversion/' + "cobalt", 'tconstruct:' + "cobalt" + '_nugget')
})

onEvent('recipes', event => {
    event.shapeless('1x emendatusenigmatica:' + "cobalt" + '_ingot', ['#kubejs:ingots_conversion/' + "cobalt"])
    event.replaceOutput(
        [
        { id: 'create:smelting/' + "cobalt" + '_ingot_compat_thermal' },
        { id: 'create:blasting/ingot_' + "cobalt" + '_ingot_compat_thermal' },
        { id: 'thermal:compat/tconstruct/chiller_tconstruct_' + "cobalt" + '_ingot' },
        ], 
        '#kubejs:ingots_conversion/' + "cobalt", 
        'emendatusenigmatica:' + "cobalt" + '_ingot'
    )
    event.remove({ output: '#kubejs:ingots_conversion/' + "cobalt" })


    event.shapeless('1x emendatusenigmatica:' + "cobalt" + '_block', ['#kubejs:blocks_conversion/' + "cobalt"])
    event.remove({ output: '#kubejs:blocks_conversion/' + "cobalt" })

    event.shapeless('1x emendatusenigmatica:' + "cobalt" + '_nugget', ['#kubejs:nuggets_conversion/' + "cobalt"])
    event.replaceOutput(
        [
        { id: 'create:splashing/thermal/crushed_' + "cobalt" + '_ore' },
        { id: 'create:splashing/crushed_' + "cobalt" + '_ore' },
        { id: 'productivebees:create/mixing/tconstruct/honeycomb_' + "cobalt"}
        ], 
        '#kubejs:nuggets_conversion/' + "cobalt", 
        'emendatusenigmatica:' + "cobalt" + '_nugget'
    )
    event.remove({ output: '#kubejs:nuggets_conversion/' + "cobalt" })
})