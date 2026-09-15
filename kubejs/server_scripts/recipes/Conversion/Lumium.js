// priority: 1
onEvent('item.tags', event => {
    //Unified item tags
    event.removeAll('forge:ingots/' + "lumium")
    event.add('forge:ingots/' + "lumium", 'emendatusenigmatica:' + "lumium" + '_ingot')

    event.removeAll('forge:storage_blocks/' + "lumium")
    event.add('forge:storage_blocks/' + "lumium", 'emendatusenigmatica:' + "lumium" + '_block')

    event.removeAll('forge:dusts/' + "lumium")
    event.add('forge:dusts/' + "lumium", 'emendatusenigmatica:' + "lumium" + '_dust')

    event.removeAll('forge:nuggets/' + "lumium")
    event.add('forge:nuggets/' + "lumium", 'emendatusenigmatica:' + "lumium" + '_nugget')

    event.removeAll('forge:plates/' + "lumium")
    event.add('forge:plates/' + "lumium", 'emendatusenigmatica:' + "lumium" + '_plate')

    event.removeAll('forge:gears/' + "lumium")
    event.add('forge:gears/' + "lumium", 'emendatusenigmatica:' + "lumium" + '_gear')

    //Conversion tag
    event.add('kubejs:ingots_conversion/' + "lumium", 'thermal:' + "lumium" + '_ingot')

    event.add('kubejs:blocks_conversion/' + "lumium", 'thermal:' + "lumium" + '_block')
   
    event.add('kubejs:dusts_conversion/' + "lumium", 'thermal:' + "lumium" + '_dust')
  
    event.add('kubejs:nuggets_conversion/' + "lumium", 'thermal:' + "lumium" + '_nugget') 
 
    event.add('kubejs:plates_conversion/' + "lumium", 'thermal:' + "lumium" + '_plate')

    event.add('kubejs:gears_conversion/' + "lumium", 'thermal:' + "lumium" + '_gear')
})

onEvent('recipes', event => {
    event.shapeless('1x emendatusenigmatica:' + "lumium" + '_ingot', ['#kubejs:ingots_conversion/' + "lumium"])
    event.replaceOutput(
        [
        { id: 'create:smelting/ingot_' + "lumium" + '_compat_immersiveengineering' },
        { id: 'create:blasting/ingot_' + "lumium" + '_compat_immersiveengineering' },
        { id: 'thermal:compat/tconstruct/chiller_tconstruct_' + "lumium" + '_ingot' },
        { id: 'productivebees:create/mixing/ingots/honeycomb_' + "lumium"}
        ], 
        '#kubejs:ingots_conversion/' + "lumium", 
        'emendatusenigmatica:' + "lumium" + '_ingot'
    )
    event.remove({ output: '#kubejs:ingots_conversion/' + "lumium" })


    event.shapeless('1x emendatusenigmatica:' + "lumium" + '_block', ['#kubejs:blocks_conversion/' + "lumium"])
    event.remove({ output: '#kubejs:blocks_conversion/' + "lumium" })

    event.shapeless('1x emendatusenigmatica:' + "lumium" + '_dust', ['#kubejs:dusts_conversion/' + "lumium"])
    event.replaceOutput(
        [
        { id: 'mekanism:processing/' + "lumium" + '/dust/from_dirty_dust' },
        { id: 'mekanism:processing/' + "lumium" + '/dust/from_ingot' },
        { id: 'mekanism:processing/' + "lumium" + '/dust/from_ore' },
        { id: 'mekanism:processing/' + "lumium" + '/dust/from_infusing' }
        ], 
        '#kubejs:dusts_conversion/' + "lumium", 
        'emendatusenigmatica:' + "lumium" + '_dust'
    )
    event.remove({ output: '#kubejs:dusts_conversion/' + "lumium" })

    event.shapeless('1x emendatusenigmatica:' + "lumium" + '_nugget', ['#kubejs:nuggets_conversion/' + "lumium"])
    event.replaceOutput(
        [
        { id: 'create:splashing/immersiveengineering/crushed_' + "lumium" + '_ore' },
        { id: 'create:splashing/crushed_' + "lumium" + '_ore' }
        ], 
        '#kubejs:nuggets_conversion/' + "lumium", 
        'emendatusenigmatica:' + "lumium" + '_nugget'
    )
    event.remove({ output: '#kubejs:nuggets_conversion/' + "lumium" })

    event.shapeless('1x emendatusenigmatica:' + "lumium" + '_plate', ['#kubejs:plates_conversion/' + "lumium"])
    event.replaceOutput(
        [
        { id: 'immersiveengineering:crafting/plate_' + "lumium" + '_hammering' },
        { id: 'create:pressing/' + "lumium" + '_ingot' }
        ], 
        '#kubejs:plates_conversion/' + "lumium", 
        'emendatusenigmatica:' + "lumium" + '_plate'
    )
    event.remove({ output: '#kubejs:plates_conversion/' + "lumium" })

    event.shapeless('1x emendatusenigmatica:' + "lumium" + '_gear', ['#kubejs:gears_conversion/' + "lumium"])
    event.remove({ output: '#kubejs:gears_conversion/' + "lumium" })
})