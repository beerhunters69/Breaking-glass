// priority: 1
onEvent('item.tags', event => {
    //Unified item tags
    event.removeAll('forge:ingots/' + "silver")
    event.add('forge:ingots/' + "silver", 'emendatusenigmatica:' + "silver" + '_ingot')

    event.removeAll('forge:storage_blocks/' + "silver")
    event.add('forge:storage_blocks/' + "silver", 'emendatusenigmatica:' + "silver" + '_block')

    event.removeAll('forge:dusts/' + "silver")
    event.add('forge:dusts/' + "silver", 'emendatusenigmatica:' + "silver" + '_dust')

    event.removeAll('forge:nuggets/' + "silver")
    event.add('forge:nuggets/' + "silver", 'emendatusenigmatica:' + "silver" + '_nugget')

    event.removeAll('forge:plates/' + "silver")
    event.add('forge:plates/' + "silver", 'emendatusenigmatica:' + "silver" + '_plate')

    event.removeAll('forge:gears/' + "silver")
    event.add('forge:gears/' + "silver", 'emendatusenigmatica:' + "silver" + '_gear')

    //Conversion tag
    event.add('kubejs:ingots_conversion/' + "silver", 'immersiveengineering:ingot_' + "silver")
    event.add('kubejs:ingots_conversion/' + "silver", 'thermal:' + "silver" + '_ingot')

    event.add('kubejs:blocks_conversion/' + "silver", 'immersiveengineering:storage_' + "silver")
    event.add('kubejs:blocks_conversion/' + "silver", 'thermal:' + "silver" + '_block')

    event.add('kubejs:dusts_conversion/' + "silver", 'immersiveengineering:dust_' + "silver")
    event.add('kubejs:dusts_conversion/' + "silver", 'thermal:' + "silver" + '_dust')

    event.add('kubejs:nuggets_conversion/' + "silver", 'immersiveengineering:nugget_' + "silver")
    event.add('kubejs:nuggets_conversion/' + "silver", 'thermal:' + "silver" + '_nugget')

    event.add('kubejs:plates_conversion/' + "silver", 'immersiveengineering:plate_' + "silver")
    event.add('kubejs:plates_conversion/' + "silver", 'thermal:' + "silver" + '_plate')

    event.add('kubejs:gears_conversion/' + "silver", 'thermal:' + "silver" + '_gear')
})

onEvent('recipes', event => {
    event.shapeless('1x emendatusenigmatica:' + "silver" + '_ingot', ['#kubejs:ingots_conversion/' + "silver"])
    event.replaceOutput(
        [
        { id: 'create:smelting/ingot_' + "silver" + '_compat_immersiveengineering' },
        { id: 'create:blasting/ingot_' + "silver" + '_compat_immersiveengineering' },
        { id: 'thermal:compat/tconstruct/chiller_tconstruct_' + "silver" + '_ingot' },
        { id: 'thermal:compat/tconstruct/chiller_tconstruct_' + "silver" + '_ingot' },
        { id: 'productivebees:create/mixing/ingots/honeycomb_' + "silver"}
        ], 
        '#kubejs:ingots_conversion/' + "silver", 
        'emendatusenigmatica:' + "silver" + '_ingot'
    )
    event.remove({ output: '#kubejs:ingots_conversion/' + "silver" })


    event.shapeless('1x emendatusenigmatica:' + "silver" + '_block', ['#kubejs:blocks_conversion/' + "silver"])
    event.remove({ output: '#kubejs:blocks_conversion/' + "silver" })

    event.shapeless('1x emendatusenigmatica:' + "silver" + '_dust', ['#kubejs:dusts_conversion/' + "silver"])
    event.replaceOutput(
        [
        { id: 'mekanism:processing/' + "silver" + '/dust/from_ingot' },
        { id: 'mekanism:processing/' + "silver" + '/dust/from_ore' }
        ], 
        '#kubejs:dusts_conversion/' + "silver", 
        'emendatusenigmatica:' + "silver" + '_dust'
    )
    event.remove({ output: '#kubejs:dusts_conversion/' + "silver" })

    event.shapeless('1x emendatusenigmatica:' + "silver" + '_nugget', ['#kubejs:nuggets_conversion/' + "silver"])
    event.replaceOutput(
        [
        { id: 'create:splashing/immersiveengineering/crushed_' + "silver" + '_ore' }
        ], 
        '#kubejs:nuggets_conversion/' + "silver", 
        'emendatusenigmatica:' + "silver" + '_nugget'
    )
    event.remove({ output: '#kubejs:nuggets_conversion/' + "silver" })

    event.shapeless('1x emendatusenigmatica:' + "silver" + '_plate', ['#kubejs:plates_conversion/' + "silver"])
    event.replaceOutput(
        [
        { id: 'immersiveengineering:crafting/plate_' + "silver" + '_hammering' },
        { id: 'create:pressing/' + "silver" + '_ingot' }
        ], 
        '#kubejs:plates_conversion/' + "silver", 
        'emendatusenigmatica:' + "silver" + '_plate'
    )
    event.remove({ output: '#kubejs:plates_conversion/' + "silver" })

    event.shapeless('1x emendatusenigmatica:' + "silver" + '_gear', ['#kubejs:gears_conversion/' + "silver"])
    event.remove({ output: '#kubejs:gears_conversion/' + "silver" })
})