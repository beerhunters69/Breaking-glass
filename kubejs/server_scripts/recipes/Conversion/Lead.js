// priority: 1
onEvent('item.tags', event => {
    //Unified item tags
    event.removeAll('forge:ingots/' + "lead")
    event.add('forge:ingots/' + "lead", 'emendatusenigmatica:' + "lead" + '_ingot')

    event.removeAll('forge:storage_blocks/' + "lead")
    event.add('forge:storage_blocks/' + "lead", 'emendatusenigmatica:' + "lead" + '_block')

    event.removeAll('forge:dusts/' + "lead")
    event.add('forge:dusts/' + "lead", 'emendatusenigmatica:' + "lead" + '_dust')

    event.removeAll('forge:nuggets/' + "lead")
    event.add('forge:nuggets/' + "lead", 'emendatusenigmatica:' + "lead" + '_nugget')

    event.removeAll('forge:plates/' + "lead")
    event.add('forge:plates/' + "lead", 'emendatusenigmatica:' + "lead" + '_plate')

    event.removeAll('forge:gears/' + "lead")
    event.add('forge:gears/' + "lead", 'emendatusenigmatica:' + "lead" + '_gear')

    //Conversion tag
    event.add('kubejs:ingots_conversion/' + "lead", 'immersiveengineering:ingot_' + "lead")
    event.add('kubejs:ingots_conversion/' + "lead", 'thermal:' + "lead" + '_ingot')
    event.add('kubejs:ingots_conversion/' + "lead", 'mekanism:ingot_' + "lead")

    event.add('kubejs:blocks_conversion/' + "lead", 'immersiveengineering:storage_' + "lead")
    event.add('kubejs:blocks_conversion/' + "lead", 'thermal:' + "lead" + '_block')
    event.add('kubejs:blocks_conversion/' + "lead", 'mekanism:block_' + "lead")

    event.add('kubejs:dusts_conversion/' + "lead", 'immersiveengineering:dust_' + "lead")
    event.add('kubejs:dusts_conversion/' + "lead", 'thermal:' + "lead" + '_dust')
    event.add('kubejs:dusts_conversion/' + "lead", 'mekanism:dust_' + "lead")

    event.add('kubejs:nuggets_conversion/' + "lead", 'immersiveengineering:nugget_' + "lead")
    event.add('kubejs:nuggets_conversion/' + "lead", 'thermal:' + "lead" + '_nugget')
    event.add('kubejs:nuggets_conversion/' + "lead", 'mekanism:nugget_' + "lead")

    event.add('kubejs:plates_conversion/' + "lead", 'immersiveengineering:plate_' + "lead")
    event.add('kubejs:plates_conversion/' + "lead", 'thermal:' + "lead" + '_plate')

    event.add('kubejs:gears_conversion/' + "lead", 'thermal:' + "lead" + '_gear')
})

onEvent('recipes', event => {
    event.shapeless('1x emendatusenigmatica:' + "lead" + '_ingot', ['#kubejs:ingots_conversion/' + "lead"])
    event.replaceOutput(
        [
        { id: 'create:smelting/ingot_' + "lead" + '_compat_immersiveengineering' },
        { id: 'create:blasting/ingot_' + "lead" + '_compat_immersiveengineering' },
        { id: 'thermal:compat/tconstruct/chiller_tconstruct_' + "lead" + '_ingot' },
        { id: 'productivebees:create/mixing/ingots/honeycomb_' + "leaden"}
        ], 
        '#kubejs:ingots_conversion/' + "lead", 
        'emendatusenigmatica:' + "lead" + '_ingot'
    )
    event.remove({ output: '#kubejs:ingots_conversion/' + "lead" })


    event.shapeless('1x emendatusenigmatica:' + "lead" + '_block', ['#kubejs:blocks_conversion/' + "lead"])
    event.remove({ output: '#kubejs:blocks_conversion/' + "lead" })

    event.shapeless('1x emendatusenigmatica:' + "lead" + '_dust', ['#kubejs:dusts_conversion/' + "lead"])
    event.replaceOutput(
        [
        { id: 'mekanism:processing/' + "lead" + '/dust/from_dirty_dust' },
        { id: 'mekanism:processing/' + "lead" + '/dust/from_ingot' },
        { id: 'mekanism:processing/' + "lead" + '/dust/from_ore' }
        ], 
        '#kubejs:dusts_conversion/' + "lead", 
        'emendatusenigmatica:' + "lead" + '_dust'
    )
    event.remove({ output: '#kubejs:dusts_conversion/' + "lead" })

    event.shapeless('1x emendatusenigmatica:' + "lead" + '_nugget', ['#kubejs:nuggets_conversion/' + "lead"])
    event.replaceOutput(
        [
        { id: 'create:splashing/immersiveengineering/crushed_' + "lead" + '_ore' },
        { id: 'create:splashing/crushed_' + "lead" + '_ore' }
        ], 
        '#kubejs:nuggets_conversion/' + "lead", 
        'emendatusenigmatica:' + "lead" + '_nugget'
    )
    event.remove({ output: '#kubejs:nuggets_conversion/' + "lead" })

    event.shapeless('1x emendatusenigmatica:' + "lead" + '_plate', ['#kubejs:plates_conversion/' + "lead"])
    event.replaceOutput(
        [
        { id: 'immersiveengineering:crafting/plate_' + "lead" + '_hammering' },
        { id: 'create:pressing/' + "lead" + '_ingot' }
        ], 
        '#kubejs:plates_conversion/' + "lead", 
        'emendatusenigmatica:' + "lead" + '_plate'
    )
    event.remove({ output: '#kubejs:plates_conversion/' + "lead" })

    event.shapeless('1x emendatusenigmatica:' + "lead" + '_gear', ['#kubejs:gears_conversion/' + "lead"])
    event.remove({ output: '#kubejs:gears_conversion/' + "lead" })
})