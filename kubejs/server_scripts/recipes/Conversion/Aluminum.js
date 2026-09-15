// priority: 1
onEvent('item.tags', event => {
    //Unified item tags
    event.removeAll('forge:ingots/' + "aluminum")
    event.add('forge:ingots/' + "aluminum", 'emendatusenigmatica:' + "aluminum" + '_ingot')

    event.removeAll('forge:storage_blocks/' + "aluminum")
    event.add('forge:storage_blocks/' + "aluminum", 'emendatusenigmatica:' + "aluminum" + '_block')

    event.removeAll('forge:dusts/' + "aluminum")
    event.add('forge:dusts/' + "aluminum", 'emendatusenigmatica:' + "aluminum" + '_dust')

    event.removeAll('forge:nuggets/' + "aluminum")
    event.add('forge:nuggets/' + "aluminum", 'emendatusenigmatica:' + "aluminum" + '_nugget')

    event.removeAll('forge:plates/' + "aluminum")
    event.add('forge:plates/' + "aluminum", 'emendatusenigmatica:' + "aluminum" + '_plate')

    event.removeAll('forge:rods/aluminum')
    event.add('forge:rods/aluminum', 'emendatusenigmatica:aluminum_rod')

    //Conversion tag
    event.add('kubejs:ingots_conversion/' + "aluminum", 'immersiveengineering:ingot_' + "aluminum")

    event.add('kubejs:blocks_conversion/' + "aluminum", 'immersiveengineering:storage_' + "aluminum")

    event.add('kubejs:dusts_conversion/' + "aluminum", 'immersiveengineering:dust_' + "aluminum")

    event.add('kubejs:nuggets_conversion/' + "aluminum", 'immersiveengineering:nugget_' + "aluminum")

    event.add('kubejs:plates_conversion/' + "aluminum", 'immersiveengineering:plate_' + "aluminum")

    event.add('kubejs:rods_conversion/' + "aluminum", 'immersiveengineering:stick_' + "aluminum")

})

onEvent('recipes', event => {
    event.shapeless('1x emendatusenigmatica:' + "aluminum" + '_ingot', ['#kubejs:ingots_conversion/' + "aluminum"])
    event.replaceOutput(
        [
        { id: 'create:smelting/ingot_' + "aluminum" + '_compat_immersiveengineering' },
        { id: 'create:blasting/ingot_' + "aluminum" + '_compat_immersiveengineering' },
        { id: 'thermal:compat/tconstruct/chiller_tconstruct_' + "aluminum" + '_ingot' },
        { id: 'productivebees:create/mixing/ingots/honeycomb_aluminium' } //because productive bees uses british spelling for aluminum
        ], 
        '#kubejs:ingots_conversion/' + "aluminum", 
        'emendatusenigmatica:' + "aluminum" + '_ingot'
    )
    event.remove({ output: '#kubejs:ingots_conversion/' + "aluminum" })


    event.shapeless('1x emendatusenigmatica:' + "aluminum" + '_block', ['#kubejs:blocks_conversion/' + "aluminum"])
    event.remove({ output: '#kubejs:blocks_conversion/' + "aluminum" })

    event.shapeless('1x emendatusenigmatica:' + "aluminum" + '_dust', ['#kubejs:dusts_conversion/' + "aluminum"])
    event.replaceOutput(
        [
        { id: 'mekanism:processing/' + "aluminum" + '/dust/from_ingot' },
        { id: 'mekanism:processing/' + "aluminum" + '/dust/from_ore' }
        ], 
        '#kubejs:dusts_conversion/' + "aluminum", 
        'emendatusenigmatica:' + "aluminum" + '_dust'
    )
    event.remove({ output: '#kubejs:dusts_conversion/' + "aluminum" })

    event.shapeless('1x emendatusenigmatica:' + "aluminum" + '_nugget', ['#kubejs:nuggets_conversion/' + "aluminum"])
    event.replaceOutput(
        [
        { id: 'create:splashing/immersiveengineering/crushed_' + "aluminum" + '_ore' }
        ], 
        '#kubejs:nuggets_conversion/' + "aluminum", 
        'emendatusenigmatica:' + "aluminum" + '_nugget'
    )
    event.remove({ output: '#kubejs:nuggets_conversion/' + "aluminum" })

    event.shapeless('1x emendatusenigmatica:' + "aluminum" + '_plate', ['#kubejs:plates_conversion/' + "aluminum"])
    event.replaceOutput(
        [
        { id: 'immersiveengineering:crafting/plate_' + "aluminum" + '_hammering' },
        { id: 'create:pressing/' + "aluminum" + '_ingot' }
        ], 
        '#kubejs:plates_conversion/' + "aluminum", 
        'emendatusenigmatica:' + "aluminum" + '_plate'
    )
    event.remove({ output: '#kubejs:plates_conversion/' + "aluminum" })

    event.shapeless('1x emendatusenigmatica:' + "aluminum" + '_rod', ['#kubejs:rods_conversion/' + "aluminum"])
    event.remove({ output: '#kubejs:rods_conversion/' + "aluminum" })
})