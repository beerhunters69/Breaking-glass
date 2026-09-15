// priority: 1
onEvent('item.tags', event => {
    //Unified item tags
    event.removeAll('forge:ingots/' + "nickel")
    event.add('forge:ingots/' + "nickel", 'emendatusenigmatica:' + "nickel" + '_ingot')

    event.removeAll('forge:storage_blocks/' + "nickel")
    event.add('forge:storage_blocks/' + "nickel", 'emendatusenigmatica:' + "nickel" + '_block')

    event.removeAll('forge:dusts/' + "nickel")
    event.add('forge:dusts/' + "nickel", 'emendatusenigmatica:' + "nickel" + '_dust')

    event.removeAll('forge:nuggets/' + "nickel")
    event.add('forge:nuggets/' + "nickel", 'emendatusenigmatica:' + "nickel" + '_nugget')

    event.removeAll('forge:plates/' + "nickel")
    event.add('forge:plates/' + "nickel", 'emendatusenigmatica:' + "nickel" + '_plate')

    event.removeAll('forge:gears/' + "nickel")
    event.add('forge:gears/' + "nickel", 'emendatusenigmatica:' + "nickel" + '_gear')

    //Conversion tag
    event.add('kubejs:ingots_conversion/' + "nickel", 'immersiveengineering:ingot_' + "nickel")
    event.add('kubejs:ingots_conversion/' + "nickel", 'thermal:' + "nickel" + '_ingot')

    event.add('kubejs:blocks_conversion/' + "nickel", 'immersiveengineering:storage_' + "nickel")
    event.add('kubejs:blocks_conversion/' + "nickel", 'thermal:' + "nickel" + '_block')

    event.add('kubejs:dusts_conversion/' + "nickel", 'immersiveengineering:dust_' + "nickel")
    event.add('kubejs:dusts_conversion/' + "nickel", 'thermal:' + "nickel" + '_dust')

    event.add('kubejs:nuggets_conversion/' + "nickel", 'immersiveengineering:nugget_' + "nickel")
    event.add('kubejs:nuggets_conversion/' + "nickel", 'thermal:' + "nickel" + '_nugget')
    
    event.add('kubejs:plates_conversion/' + "nickel", 'immersiveengineering:plate_' + "nickel")
    event.add('kubejs:plates_conversion/' + "nickel", 'thermal:' + "nickel" + '_plate')

    event.add('kubejs:gears_conversion/' + "nickel", 'thermal:' + "nickel" + '_gear')
})

onEvent('recipes', event => {
    event.shapeless('1x emendatusenigmatica:' + "nickel" + '_ingot', ['#kubejs:ingots_conversion/' + "nickel"])
    event.replaceOutput(
        [
        { id: 'create:smelting/ingot_' + "nickel" + '_compat_immersiveengineering' },
        { id: 'create:blasting/ingot_' + "nickel" + '_compat_immersiveengineering' },
        { id: 'thermal:compat/tconstruct/chiller_tconstruct_' + "nickel" + '_ingot' },
        { id: 'productivebees:create/mixing/ingots/honeycomb_' + "nickel"}
        ], 
        '#kubejs:ingots_conversion/' + "nickel", 
        'emendatusenigmatica:' + "nickel" + '_ingot'
    )
    event.remove({ output: '#kubejs:ingots_conversion/' + "nickel" })


    event.shapeless('1x emendatusenigmatica:' + "nickel" + '_block', ['#kubejs:blocks_conversion/' + "nickel"])
    event.remove({ output: '#kubejs:blocks_conversion/' + "nickel" })

    event.shapeless('1x emendatusenigmatica:' + "nickel" + '_dust', ['#kubejs:dusts_conversion/' + "nickel"])
    event.replaceOutput(
        [
        { id: 'mekanism:processing/' + "nickel" + '/dust/from_dirty_dust' },
        { id: 'mekanism:processing/' + "nickel" + '/dust/from_ingot' },
        { id: 'mekanism:processing/' + "nickel" + '/dust/from_ore' }
        ], 
        '#kubejs:dusts_conversion/' + "nickel", 
        'emendatusenigmatica:' + "nickel" + '_dust'
    )
    event.remove({ output: '#kubejs:dusts_conversion/' + "nickel" })

    event.shapeless('1x emendatusenigmatica:' + "nickel" + '_nugget', ['#kubejs:nuggets_conversion/' + "nickel"])
    event.replaceOutput(
        [
        { id: 'create:splashing/immersiveengineering/crushed_' + "nickel" + '_ore' },
        { id: 'create:splashing/crushed_' + "nickel" + '_ore' }
        ], 
        '#kubejs:nuggets_conversion/' + "nickel", 
        'emendatusenigmatica:' + "nickel" + '_nugget'
    )
    event.remove({ output: '#kubejs:nuggets_conversion/' + "nickel" })

    event.shapeless('1x emendatusenigmatica:' + "nickel" + '_plate', ['#kubejs:plates_conversion/' + "nickel"])
    event.replaceOutput(
        [
        { id: 'immersiveengineering:crafting/plate_' + "nickel" + '_hammering' },
        { id: 'create:pressing/' + "nickel" + '_ingot' }
        ], 
        '#kubejs:plates_conversion/' + "nickel", 
        'emendatusenigmatica:' + "nickel" + '_plate'
    )
    event.remove({ output: '#kubejs:plates_conversion/' + "nickel" })

    event.shapeless('1x emendatusenigmatica:' + "nickel" + '_gear', ['#kubejs:gears_conversion/' + "nickel"])
    event.remove({ output: '#kubejs:gears_conversion/' + "nickel" })
})