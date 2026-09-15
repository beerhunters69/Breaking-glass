// priority: 1
onEvent('item.tags', event => {
    //Unified item tags
    event.removeAll('forge:ingots/' + "copper")
    event.add('forge:ingots/' + "copper", 'emendatusenigmatica:' + "copper" + '_ingot')

    event.removeAll('forge:storage_blocks/' + "copper")
    event.add('forge:storage_blocks/' + "copper", 'emendatusenigmatica:' + "copper" + '_block')

    event.removeAll('forge:dusts/' + "copper")
    event.add('forge:dusts/' + "copper", 'emendatusenigmatica:' + "copper" + '_dust')

    event.removeAll('forge:nuggets/' + "copper")
    event.add('forge:nuggets/' + "copper", 'emendatusenigmatica:' + "copper" + '_nugget')

    event.removeAll('forge:plates/' + "copper")
    event.add('forge:plates/' + "copper", 'emendatusenigmatica:' + "copper" + '_plate')

    event.removeAll('forge:gears/' + "copper")
    event.add('forge:gears/' + "copper", 'emendatusenigmatica:' + "copper" + '_gear')

    //Conversion tag
    event.add('kubejs:ingots_conversion/' + "copper", 'create:' + "copper" + '_ingot')
    event.add('kubejs:ingots_conversion/' + "copper", 'immersiveengineering:ingot_' + "copper")
    event.add('kubejs:ingots_conversion/' + "copper", 'tconstruct:' + "copper" + '_ingot')
    event.add('kubejs:ingots_conversion/' + "copper", 'thermal:' + "copper" + '_ingot')
    event.add('kubejs:ingots_conversion/' + "copper", 'mekanism:ingot_' + "copper")

    event.add('kubejs:blocks_conversion/' + "copper", 'create:' + "copper" + '_block')
    event.add('kubejs:blocks_conversion/' + "copper", 'immersiveengineering:storage_' + "copper")
    event.add('kubejs:blocks_conversion/' + "copper", 'tconstruct:' + "copper" + '_block')
    event.add('kubejs:blocks_conversion/' + "copper", 'thermal:' + "copper" + '_block')
    event.add('kubejs:blocks_conversion/' + "copper", 'mekanism:block_' + "copper")

    event.add('kubejs:dusts_conversion/' + "copper", 'immersiveengineering:dust_' + "copper")
    event.add('kubejs:dusts_conversion/' + "copper", 'thermal:' + "copper" + '_dust')
    event.add('kubejs:dusts_conversion/' + "copper", 'mekanism:dust_' + "copper")

    event.add('kubejs:nuggets_conversion/' + "copper", 'create:' + "copper" + '_nugget')
    event.add('kubejs:nuggets_conversion/' + "copper", 'immersiveengineering:nugget_' + "copper")
    event.add('kubejs:nuggets_conversion/' + "copper", 'tconstruct:' + "copper" + '_nugget')
    event.add('kubejs:nuggets_conversion/' + "copper", 'thermal:' + "copper" + '_nugget')
    event.add('kubejs:nuggets_conversion/' + "copper", 'mekanism:nugget_' + "copper")

    event.add('kubejs:plates_conversion/' + "copper", 'create:' + "copper" + '_sheet')
    event.add('kubejs:plates_conversion/' + "copper", 'immersiveengineering:plate_' + "copper")
    event.add('kubejs:plates_conversion/' + "copper", 'thermal:' + "copper" + '_plate')

    event.add('kubejs:gears_conversion/' + "copper", 'thermal:' + "copper" + '_gear')
})

onEvent('recipes', event => {
    event.shapeless('1x emendatusenigmatica:' + "copper" + '_ingot', ['#kubejs:ingots_conversion/' + "copper"])
    event.replaceOutput(
        [
        { id: 'create:blasting/' + "copper" + '_ingot_from_crushed' },
        { id: 'create:smelting/' + "copper" + '_ingot_from_crushed' },
        { id: 'thermal:compat/tconstruct/chiller_tconstruct_' + "copper" + '_ingot' },
        { id: 'productivebees:create/mixing/ingots/honeycomb_' + "copper"}
        ], 
        '#kubejs:ingots_conversion/' + "copper", 
        'emendatusenigmatica:' + "copper" + '_ingot'
    )
    event.remove({ output: '#kubejs:ingots_conversion/' + "copper" })


    event.shapeless('1x emendatusenigmatica:' + "copper" + '_block', ['#kubejs:blocks_conversion/' + "copper"])
    event.remove({ output: '#kubejs:blocks_conversion/' + "copper" })

    event.shapeless('1x emendatusenigmatica:' + "copper" + '_dust', ['#kubejs:dusts_conversion/' + "copper"])
    event.replaceOutput(
        [
        { id: 'mekanism:processing/' + "copper" + '/dust/from_dirty_dust' },
        { id: 'mekanism:processing/' + "copper" + '/dust/from_ingot' },
        { id: 'mekanism:processing/' + "copper" + '/dust/from_ore' }
        ], 
        '#kubejs:dusts_conversion/' + "copper", 
        'emendatusenigmatica:' + "copper" + '_dust'
    )
    event.remove({ output: '#kubejs:dusts_conversion/' + "copper" })

    event.shapeless('1x emendatusenigmatica:' + "copper" + '_nugget', ['#kubejs:nuggets_conversion/' + "copper"])
    event.replaceOutput(
        [
        { id: 'create:splashing/crushed_' + "copper" + '_ore' }
        ], 
        '#kubejs:nuggets_conversion/' + "copper", 
        'emendatusenigmatica:' + "copper" + '_nugget'
    )
    event.remove({ output: '#kubejs:nuggets_conversion/' + "copper" })

    event.shapeless('1x emendatusenigmatica:' + "copper" + '_plate', ['#kubejs:plates_conversion/' + "copper"])
    event.replaceOutput(
        [
        { id: 'immersiveengineering:crafting/plate_' + "copper" + '_hammering' },
        { id: 'create:pressing/' + "copper" + '_ingot' }
        ], 
        '#kubejs:plates_conversion/' + "copper", 
        'emendatusenigmatica:' + "copper" + '_plate'
    )
    event.remove({ output: '#kubejs:plates_conversion/' + "copper" })

    event.shapeless('1x emendatusenigmatica:' + "copper" + '_gear', ['#kubejs:gears_conversion/' + "copper"])
    event.remove({ output: '#kubejs:gears_conversion/' + "copper" })
})