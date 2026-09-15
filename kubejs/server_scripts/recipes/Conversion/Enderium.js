// priority: 1
onEvent('item.tags', event => {
    //Unified item tags
    event.removeAll('forge:ingots/' + "enderium")
    event.add('forge:ingots/' + "enderium", 'emendatusenigmatica:' + "enderium" + '_ingot')

    event.removeAll('forge:storage_blocks/' + "enderium")
    event.add('forge:storage_blocks/' + "enderium", 'emendatusenigmatica:' + "enderium" + '_block')

    event.removeAll('forge:dusts/' + "enderium")
    event.add('forge:dusts/' + "enderium", 'emendatusenigmatica:' + "enderium" + '_dust')

    event.removeAll('forge:nuggets/' + "enderium")
    event.add('forge:nuggets/' + "enderium", 'emendatusenigmatica:' + "enderium" + '_nugget')

    event.removeAll('forge:plates/' + "enderium")
    event.add('forge:plates/' + "enderium", 'emendatusenigmatica:' + "enderium" + '_plate')

    event.removeAll('forge:gears/' + "enderium")
    event.add('forge:gears/' + "enderium", 'emendatusenigmatica:' + "enderium" + '_gear')

    //Conversion tag
    event.add('kubejs:ingots_conversion/' + "enderium", 'thermal:' + "enderium" + '_ingot')

    event.add('kubejs:blocks_conversion/' + "enderium", 'thermal:' + "enderium" + '_block')
   
    event.add('kubejs:dusts_conversion/' + "enderium", 'thermal:' + "enderium" + '_dust')
  
    event.add('kubejs:nuggets_conversion/' + "enderium", 'thermal:' + "enderium" + '_nugget') 
 
    event.add('kubejs:plates_conversion/' + "enderium", 'thermal:' + "enderium" + '_plate')

    event.add('kubejs:gears_conversion/' + "enderium", 'thermal:' + "enderium" + '_gear')
})

onEvent('recipes', event => {
    event.shapeless('1x emendatusenigmatica:' + "enderium" + '_ingot', ['#kubejs:ingots_conversion/' + "enderium"])
    event.replaceOutput(
        [
        { id: 'create:smelting/ingot_' + "enderium" + '_compat_immersiveengineering' },
        { id: 'create:blasting/ingot_' + "enderium" + '_compat_immersiveengineering' },
        { id: 'thermal:compat/tconstruct/chiller_tconstruct_' + "enderium" + '_ingot' }
        ], 
        '#kubejs:ingots_conversion/' + "enderium", 
        'emendatusenigmatica:' + "enderium" + '_ingot'
    )
    event.recipes.immersiveengineering.arc_furnace('emendatusenigmatica:enderium_ingot', 'emendatusenigmatica:enderium_dust')
    event.replaceOutput(
        {id: 'productivebees:create/mixing/ingots/honeycomb_' + "enderium"}, 
        '#kubejs:ingots_conversion/' + "enderium", 
        'emendatusenigmatica:' + "enderium" + '_dust'
    )
    event.remove({ id: 'emendatusenigmatica:ingot_from_dust/blasting/enderium'})
    event.remove({ id: 'emendatusenigmatica:ingot_from_dust/smelting/enderium'})   
    event.remove({ id: 'tconstruct:smeltery/alloys/molten_enderium'})
    event.remove({ output: '#kubejs:ingots_conversion/' + "enderium" })


    event.shapeless('1x emendatusenigmatica:' + "enderium" + '_block', ['#kubejs:blocks_conversion/' + "enderium"])
    event.remove({ output: '#kubejs:blocks_conversion/' + "enderium" })

    event.shapeless('1x emendatusenigmatica:' + "enderium" + '_dust', ['#kubejs:dusts_conversion/' + "enderium"])

    event.replaceOutput(
        [
        { id: 'mekanism:processing/' + "enderium" + '/dust/from_dirty_dust' },
        { id: 'mekanism:processing/' + "enderium" + '/dust/from_ingot' },
        { id: 'mekanism:processing/' + "enderium" + '/dust/from_ore' },
        { id: 'mekanism:processing/' + "enderium" + '/dust/from_infusing' }
        ], 
        '#kubejs:dusts_conversion/' + "enderium", 
        'emendatusenigmatica:' + "enderium" + '_dust'
    )
    event.remove({ id: 'emendatusenigmatica:alloy_dust/enderium' })
    event.shapeless('2x emendatusenigmatica:' + "enderium" + '_dust', ['3x emendatusenigmatica:lead_dust', '#forge:dusts/diamond', '2x emendatusenigmatica:ender_dust'])
    event.remove({ output: '#kubejs:dusts_conversion/' + "enderium" })

    event.shapeless('1x emendatusenigmatica:' + "enderium" + '_nugget', ['#kubejs:nuggets_conversion/' + "enderium"])
    event.replaceOutput(
        [
        { id: 'create:splashing/immersiveengineering/crushed_' + "enderium" + '_ore' },
        { id: 'create:splashing/crushed_' + "enderium" + '_ore' }
        ], 
        '#kubejs:nuggets_conversion/' + "enderium", 
        'emendatusenigmatica:' + "enderium" + '_nugget'
    )
    event.remove({ output: '#kubejs:nuggets_conversion/' + "enderium" })

    event.shapeless('1x emendatusenigmatica:' + "enderium" + '_plate', ['#kubejs:plates_conversion/' + "enderium"])
    event.replaceOutput(
        [
        { id: 'immersiveengineering:crafting/plate_' + "enderium" + '_hammering' },
        { id: 'create:pressing/' + "enderium" + '_ingot' }
        ], 
        '#kubejs:plates_conversion/' + "enderium", 
        'emendatusenigmatica:' + "enderium" + '_plate'
    )
    event.remove({ output: '#kubejs:plates_conversion/' + "enderium" })

    event.shapeless('1x emendatusenigmatica:' + "enderium" + '_gear', ['#kubejs:gears_conversion/' + "enderium"])
    event.remove({ output: '#kubejs:gears_conversion/' + "enderium" })
})