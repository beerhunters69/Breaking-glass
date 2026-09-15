// priority: 1
onEvent('item.tags', event => {
    //Unified item tags
    event.removeAll('forge:ingots/' + "tin")
    event.add('forge:ingots/' + "tin", 'emendatusenigmatica:' + "tin" + '_ingot')

    event.removeAll('forge:storage_blocks/' + "tin")
    event.add('forge:storage_blocks/' + "tin", 'emendatusenigmatica:' + "tin" + '_block')

    event.removeAll('forge:dusts/' + "tin")
    event.add('forge:dusts/' + "tin", 'emendatusenigmatica:' + "tin" + '_dust')

    event.removeAll('forge:nuggets/' + "tin")
    event.add('forge:nuggets/' + "tin", 'emendatusenigmatica:' + "tin" + '_nugget')

    event.removeAll('forge:plates/' + "tin")
    event.add('forge:plates/' + "tin", 'emendatusenigmatica:' + "tin" + '_plate')

    event.removeAll('forge:gears/' + "tin")
    event.add('forge:gears/' + "tin", 'emendatusenigmatica:' + "tin" + '_gear')

    //Conversion tag
    event.add('kubejs:ingots_conversion/' + "tin", 'thermal:' + "tin" + '_ingot')
    event.add('kubejs:ingots_conversion/' + "tin", 'mekanism:ingot_' + "tin")

    event.add('kubejs:blocks_conversion/' + "tin", 'thermal:' + "tin" + '_block')
    event.add('kubejs:blocks_conversion/' + "tin", 'mekanism:block_' + "tin")

    event.add('kubejs:dusts_conversion/' + "tin", 'thermal:' + "tin" + '_dust')
    event.add('kubejs:dusts_conversion/' + "tin", 'mekanism:dust_' + "tin")

    event.add('kubejs:nuggets_conversion/' + "tin", 'thermal:' + "tin" + '_nugget')
    event.add('kubejs:nuggets_conversion/' + "tin", 'mekanism:nugget_' + "tin")    

    event.add('kubejs:plates_conversion/' + "tin", 'thermal:' + "tin" + '_plate')

    event.add('kubejs:gears_conversion/' + "tin", 'thermal:' + "tin" + '_gear')
})

onEvent('recipes', event => {
    event.shapeless('1x emendatusenigmatica:' + "tin" + '_ingot', ['#kubejs:ingots_conversion/' + "tin"])
    event.replaceOutput(
        [
        { id: 'create:smelting/' + "tin" + '_ingot_compat_thermal' },
        { id: 'create:blasting/ingot_' + "tin" + '_ingot_compat_thermal' },
        { id: 'thermal:compat/tconstruct/chiller_tconstruct_' + "tin" + '_ingot' },
        { id: 'productivebees:create/mixing/ingots/honeycomb_' + "tin"}
        ], 
        '#kubejs:ingots_conversion/' + "tin", 
        'emendatusenigmatica:' + "tin" + '_ingot'
    )
    event.remove({ output: '#kubejs:ingots_conversion/' + "tin" })


    event.shapeless('1x emendatusenigmatica:' + "tin" + '_block', ['#kubejs:blocks_conversion/' + "tin"])
    event.remove({ output: '#kubejs:blocks_conversion/' + "tin" })

    event.shapeless('1x emendatusenigmatica:' + "tin" + '_dust', ['#kubejs:dusts_conversion/' + "tin"])
    event.replaceOutput(
        [
        { id: 'mekanism:processing/' + "tin" + '/dust/from_dirty_dust' },
        { id: 'mekanism:processing/' + "tin" + '/dust/from_ingot' },
        { id: 'mekanism:processing/' + "tin" + '/dust/from_ore' }
        ], 
        '#kubejs:dusts_conversion/' + "tin", 
        'emendatusenigmatica:' + "tin" + '_dust'
    )
    event.remove({ output: '#kubejs:dusts_conversion/' + "tin" })

    event.shapeless('1x emendatusenigmatica:' + "tin" + '_nugget', ['#kubejs:nuggets_conversion/' + "tin"])
    event.replaceOutput(
        [
        { id: 'create:splashing/thermal/crushed_' + "tin" + '_ore' },
        { id: 'create:splashing/crushed_' + "tin" + '_ore' }
        ], 
        '#kubejs:nuggets_conversion/' + "tin", 
        'emendatusenigmatica:' + "tin" + '_nugget'
    )
    event.remove({ output: '#kubejs:nuggets_conversion/' + "tin" })

    event.shapeless('1x emendatusenigmatica:' + "tin" + '_plate', ['#kubejs:plates_conversion/' + "tin"])
    event.replaceOutput(
        [
        { id: 'immersiveengineering:crafting/plate_' + "tin" + '_hammering' },
        { id: 'create:pressing/' + "tin" + '_ingot' }
        ], 
        '#kubejs:plates_conversion/' + "tin", 
        'emendatusenigmatica:' + "tin" + '_plate'
    )
    event.remove({ output: '#kubejs:plates_conversion/' + "tin" })

    event.shapeless('1x emendatusenigmatica:' + "tin" + '_gear', ['#kubejs:gears_conversion/' + "tin"])
    event.remove({ output: '#kubejs:gears_conversion/' + "tin" })
})