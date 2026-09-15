// priority: 1
onEvent('item.tags', event => {
    //Unified item tags
    event.removeAll('forge:ingots/' + "invar")
    event.add('forge:ingots/' + "invar", 'emendatusenigmatica:' + "invar" + '_ingot')

    event.removeAll('forge:storage_blocks/' + "invar")
    event.add('forge:storage_blocks/' + "invar", 'emendatusenigmatica:' + "invar" + '_block')

    event.removeAll('forge:dusts/' + "invar")
    event.add('forge:dusts/' + "invar", 'emendatusenigmatica:' + "invar" + '_dust')

    event.removeAll('forge:nuggets/' + "invar")
    event.add('forge:nuggets/' + "invar", 'emendatusenigmatica:' + "invar" + '_nugget')

    event.removeAll('forge:plates/' + "invar")
    event.add('forge:plates/' + "invar", 'emendatusenigmatica:' + "invar" + '_plate')

    event.removeAll('forge:gears/' + "invar")
    event.add('forge:gears/' + "invar", 'emendatusenigmatica:' + "invar" + '_gear')

    //Conversion tag
    event.add('kubejs:ingots_conversion/' + "invar", 'thermal:' + "invar" + '_ingot')

    event.add('kubejs:blocks_conversion/' + "invar", 'thermal:' + "invar" + '_block')
   
    event.add('kubejs:dusts_conversion/' + "invar", 'thermal:' + "invar" + '_dust')
  
    event.add('kubejs:nuggets_conversion/' + "invar", 'thermal:' + "invar" + '_nugget') 
 
    event.add('kubejs:plates_conversion/' + "invar", 'thermal:' + "invar" + '_plate')

    event.add('kubejs:gears_conversion/' + "invar", 'thermal:' + "invar" + '_gear')
})

onEvent('recipes', event => {
    event.shapeless('1x emendatusenigmatica:' + "invar" + '_ingot', ['#kubejs:ingots_conversion/' + "invar"])
    event.replaceOutput(
        [
        { id: 'create:smelting/ingot_' + "invar" + '_compat_immersiveengineering' },
        { id: 'create:blasting/ingot_' + "invar" + '_compat_immersiveengineering' },
        { id: 'thermal:compat/tconstruct/chiller_tconstruct_' + "invar" + '_ingot' },
        { id: 'productivebees:create/mixing/ingots/honeycomb_' + "invar"}
        ], 
        '#kubejs:ingots_conversion/' + "invar", 
        'emendatusenigmatica:' + "invar" + '_ingot'
    )
    event.remove({id: 'immersiveengineering:alloysmelter/invar'})
    event.remove({id: 'tconstruct:smeltery/alloys/molten_invar'})
    event.remove({id: 'emendatusenigmatica:ingot_from_dust/smelting/invar'})
	event.remove({id: 'emendatusenigmatica:ingot_from_dust/blasting/invar'})
    event.remove({ output: '#kubejs:ingots_conversion/' + "invar" })


    event.shapeless('1x emendatusenigmatica:' + "invar" + '_block', ['#kubejs:blocks_conversion/' + "invar"])
    event.remove({ output: '#kubejs:blocks_conversion/' + "invar" })

    event.shapeless('1x emendatusenigmatica:' + "invar" + '_dust', ['#kubejs:dusts_conversion/' + "invar"])
    event.replaceOutput(
        [
        { id: 'mekanism:processing/' + "invar" + '/dust/from_dirty_dust' },
        { id: 'mekanism:processing/' + "invar" + '/dust/from_ingot' },
        { id: 'mekanism:processing/' + "invar" + '/dust/from_ore' },
        { id: 'mekanism:processing/' + "invar" + '/dust/from_infusing' }
        ], 
        '#kubejs:dusts_conversion/' + "invar", 
        'emendatusenigmatica:' + "invar" + '_dust'
    )
    event.remove({id: 'emendatusenigmatica:alloy_dust/invar'})
    event.remove({ output: '#kubejs:dusts_conversion/' + "invar" })

    event.shapeless('1x emendatusenigmatica:' + "invar" + '_nugget', ['#kubejs:nuggets_conversion/' + "invar"])
    event.replaceOutput(
        [
        { id: 'create:splashing/immersiveengineering/crushed_' + "invar" + '_ore' },
        { id: 'create:splashing/crushed_' + "invar" + '_ore' }
        ], 
        '#kubejs:nuggets_conversion/' + "invar", 
        'emendatusenigmatica:' + "invar" + '_nugget'
    )
    event.remove({ output: '#kubejs:nuggets_conversion/' + "invar" })

    event.shapeless('1x emendatusenigmatica:' + "invar" + '_plate', ['#kubejs:plates_conversion/' + "invar"])
    event.replaceOutput(
        [
        { id: 'immersiveengineering:crafting/plate_' + "invar" + '_hammering' },
        { id: 'create:pressing/' + "invar" + '_ingot' }
        ], 
        '#kubejs:plates_conversion/' + "invar", 
        'emendatusenigmatica:' + "invar" + '_plate'
    )
    event.remove({ output: '#kubejs:plates_conversion/' + "invar" })

    event.shapeless('1x emendatusenigmatica:' + "invar" + '_gear', ['#kubejs:gears_conversion/' + "invar"])
    event.remove({ output: '#kubejs:gears_conversion/' + "invar" })
})