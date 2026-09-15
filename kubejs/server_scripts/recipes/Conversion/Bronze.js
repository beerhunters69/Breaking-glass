// priority: 1
onEvent('item.tags', event => {
    //Unified item tags
    event.removeAll('forge:ingots/' + "bronze")
    event.add('forge:ingots/' + "bronze", 'emendatusenigmatica:' + "bronze" + '_ingot')

    event.removeAll('forge:storage_blocks/' + "bronze")
    event.add('forge:storage_blocks/' + "bronze", 'emendatusenigmatica:' + "bronze" + '_block')

    event.removeAll('forge:dusts/' + "bronze")
    event.add('forge:dusts/' + "bronze", 'emendatusenigmatica:' + "bronze" + '_dust')

    event.removeAll('forge:nuggets/' + "bronze")
    event.add('forge:nuggets/' + "bronze", 'emendatusenigmatica:' + "bronze" + '_nugget')

    event.removeAll('forge:plates/' + "bronze")
    event.add('forge:plates/' + "bronze", 'emendatusenigmatica:' + "bronze" + '_plate')

    event.removeAll('forge:gears/' + "bronze")
    event.add('forge:gears/' + "bronze", 'emendatusenigmatica:' + "bronze" + '_gear')

    //Conversion tag
    event.add('kubejs:ingots_conversion/' + "bronze", 'thermal:' + "bronze" + '_ingot')
    event.add('kubejs:ingots_conversion/' + "bronze", 'mekanism:ingot_' + "bronze")

    event.add('kubejs:blocks_conversion/' + "bronze", 'thermal:' + "bronze" + '_block')
    event.add('kubejs:blocks_conversion/' + "bronze", 'mekanism:block_' + "bronze")

    event.add('kubejs:dusts_conversion/' + "bronze", 'thermal:' + "bronze" + '_dust')
    event.add('kubejs:dusts_conversion/' + "bronze", 'mekanism:dust_' + "bronze")

    event.add('kubejs:nuggets_conversion/' + "bronze", 'thermal:' + "bronze" + '_nugget')
    event.add('kubejs:nuggets_conversion/' + "bronze", 'mekanism:nugget_' + "bronze")    

    event.add('kubejs:plates_conversion/' + "bronze", 'thermal:' + "bronze" + '_plate')

    event.add('kubejs:gears_conversion/' + "bronze", 'thermal:' + "bronze" + '_gear')
})

onEvent('recipes', event => {
    event.shapeless('1x emendatusenigmatica:' + "bronze" + '_ingot', ['#kubejs:ingots_conversion/' + "bronze"])
    event.replaceOutput(
        [
        { id: 'create:smelting/ingot_' + "bronze" + '_compat_immersiveengineering' },
        { id: 'create:blasting/ingot_' + "bronze" + '_compat_immersiveengineering' },
        { id: 'thermal:compat/tconstruct/chiller_tconstruct_' + "bronze" + '_ingot' },
        { id: 'productivebees:create/mixing/ingots/honeycomb_' + "bronze"},
        { id: 'mekanism:processing/' + "bronze" + '/ingot/from_infusing' },
        ], 
        '#kubejs:ingots_conversion/' + "bronze", 
        'emendatusenigmatica:' + "bronze" + '_ingot'
    )
    event.remove({ output: '#kubejs:ingots_conversion/' + "bronze" })


    event.shapeless('1x emendatusenigmatica:' + "bronze" + '_block', ['#kubejs:blocks_conversion/' + "bronze"])
    event.remove({ output: '#kubejs:blocks_conversion/' + "bronze" })

    event.shapeless('1x emendatusenigmatica:' + "bronze" + '_dust', ['#kubejs:dusts_conversion/' + "bronze"])
    event.replaceOutput(
        [
        { id: 'mekanism:processing/' + "bronze" + '/dust/from_dirty_dust' },
        { id: 'mekanism:processing/' + "bronze" + '/dust/from_ingot' },
        { id: 'mekanism:processing/' + "bronze" + '/dust/from_ore' },
        { id: 'mekanism:processing/' + "bronze" + '/dust/from_infusing' }
        ], 
        '#kubejs:dusts_conversion/' + "bronze", 
        'emendatusenigmatica:' + "bronze" + '_dust'
    )
    event.remove({ output: '#kubejs:dusts_conversion/' + "bronze" })

    event.shapeless('1x emendatusenigmatica:' + "bronze" + '_nugget', ['#kubejs:nuggets_conversion/' + "bronze"])
    event.replaceOutput(
        [
        { id: 'create:splashing/immersiveengineering/crushed_' + "bronze" + '_ore' },
        { id: 'create:splashing/crushed_' + "bronze" + '_ore' }
        ], 
        '#kubejs:nuggets_conversion/' + "bronze", 
        'emendatusenigmatica:' + "bronze" + '_nugget'
    )
    event.remove({ output: '#kubejs:nuggets_conversion/' + "bronze" })

    event.shapeless('1x emendatusenigmatica:' + "bronze" + '_plate', ['#kubejs:plates_conversion/' + "bronze"])
    event.replaceOutput(
        [
        { id: 'immersiveengineering:crafting/plate_' + "bronze" + '_hammering' },
        { id: 'create:pressing/' + "bronze" + '_ingot' }
        ], 
        '#kubejs:plates_conversion/' + "bronze", 
        'emendatusenigmatica:' + "bronze" + '_plate'
    )
    event.remove({ output: '#kubejs:plates_conversion/' + "bronze" })

    event.shapeless('1x emendatusenigmatica:' + "bronze" + '_gear', ['#kubejs:gears_conversion/' + "bronze"])
    event.remove({ output: '#kubejs:gears_conversion/' + "bronze" })
})