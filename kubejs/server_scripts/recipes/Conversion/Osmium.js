// priority: 1
onEvent('item.tags', event => {
    //Unified item tags
    event.removeAll('forge:ingots/' + "osmium")
    event.add('forge:ingots/' + "osmium", 'emendatusenigmatica:' + "osmium" + '_ingot')

    event.removeAll('forge:storage_blocks/' + "osmium")
    event.add('forge:storage_blocks/' + "osmium", 'emendatusenigmatica:' + "osmium" + '_block')

    event.removeAll('forge:dusts/' + "osmium")
    event.add('forge:dusts/' + "osmium", 'emendatusenigmatica:' + "osmium" + '_dust')

    event.removeAll('forge:nuggets/' + "osmium")
    event.add('forge:nuggets/' + "osmium", 'emendatusenigmatica:' + "osmium" + '_nugget')

    //Conversion tag
    event.add('kubejs:ingots_conversion/' + "osmium", 'mekanism:ingot_' + "osmium")

    event.add('kubejs:blocks_conversion/' + "osmium", 'mekanism:block_' + "osmium")

    event.add('kubejs:dusts_conversion/' + "osmium", 'mekanism:dust_' + "osmium")

    event.add('kubejs:nuggets_conversion/' + "osmium", 'mekanism:nugget_' + "osmium")

})

onEvent('recipes', event => {
    event.shapeless('1x emendatusenigmatica:' + "osmium" + '_ingot', ['#kubejs:ingots_conversion/' + "osmium"])
    event.replaceOutput(
        [
        { id: 'create:smelting/ingot_' + "osmium" + '_compat_mekanism' },
        { id: 'create:blasting/ingot_' + "osmium" + '_compat_mekanism' },
        { id: 'thermal:compat/tconstruct/chiller_tconstruct_' + "osmium" + '_ingot' },
        { id: 'productivebees:create/mixing/ingots/honeycomb_' + "osmium"}
        ], 
        '#kubejs:ingots_conversion/' + "osmium", 
        'emendatusenigmatica:' + "osmium" + '_ingot'
    )
    event.remove({ output: '#kubejs:ingots_conversion/' + "osmium" })


    event.shapeless('1x emendatusenigmatica:' + "osmium" + '_block', ['#kubejs:blocks_conversion/' + "osmium"])
    event.remove({ output: '#kubejs:blocks_conversion/' + "osmium" })

    event.shapeless('1x emendatusenigmatica:' + "osmium" + '_dust', ['#kubejs:dusts_conversion/' + "osmium"])
    event.replaceOutput(
        [
        { id: 'mekanism:processing/' + "osmium" + '/dust/from_dirty_dust' },
        { id: 'mekanism:processing/' + "osmium" + '/dust/from_ingot' },
        { id: 'mekanism:processing/' + "osmium" + '/dust/from_ore' }
        ], 
        '#kubejs:dusts_conversion/' + "osmium", 
        'emendatusenigmatica:' + "osmium" + '_dust'
    )
    event.remove({ output: '#kubejs:dusts_conversion/' + "osmium" })

    event.shapeless('1x emendatusenigmatica:' + "osmium" + '_nugget', ['#kubejs:nuggets_conversion/' + "osmium"])
    event.replaceOutput(
        [
        { id: 'create:splashing/mekanism/crushed_' + "osmium" + '_ore' },
        { id: 'create:splashing/crushed_' + "osmium" + '_ore' }
        ], 
        '#kubejs:nuggets_conversion/' + "osmium", 
        'emendatusenigmatica:' + "osmium" + '_nugget'
    )
    event.remove({ output: '#kubejs:nuggets_conversion/' + "osmium" })
})