// priority: 1
onEvent('item.tags', event => {
    //Unified item tags
    event.removeAll('forge:ingots/' + "constantan")
    event.add('forge:ingots/' + "constantan", 'emendatusenigmatica:' + "constantan" + '_ingot')

    event.removeAll('forge:storage_blocks/' + "constantan")
    event.add('forge:storage_blocks/' + "constantan", 'emendatusenigmatica:' + "constantan" + '_block')

    event.removeAll('forge:dusts/' + "constantan")
    event.add('forge:dusts/' + "constantan", 'emendatusenigmatica:' + "constantan" + '_dust')

    event.removeAll('forge:nuggets/' + "constantan")
    event.add('forge:nuggets/' + "constantan", 'emendatusenigmatica:' + "constantan" + '_nugget')

    event.removeAll('forge:plates/' + "constantan")
    event.add('forge:plates/' + "constantan", 'emendatusenigmatica:' + "constantan" + '_plate')

    event.removeAll('forge:gears/' + "constantan")
    event.add('forge:gears/' + "constantan", 'emendatusenigmatica:' + "constantan" + '_gear')

    //Conversion tag
    event.add('kubejs:ingots_conversion/' + "constantan", 'immersiveengineering:ingot_' + "constantan")
    event.add('kubejs:ingots_conversion/' + "constantan", 'thermal:' + "constantan" + '_ingot')

    event.add('kubejs:blocks_conversion/' + "constantan", 'immersiveengineering:storage_' + "constantan")
    event.add('kubejs:blocks_conversion/' + "constantan", 'thermal:' + "constantan" + '_block')

    event.add('kubejs:dusts_conversion/' + "constantan", 'immersiveengineering:dust_' + "constantan")    
    event.add('kubejs:dusts_conversion/' + "constantan", 'thermal:' + "constantan" + '_dust')

    event.add('kubejs:nuggets_conversion/' + "constantan", 'immersiveengineering:nugget_' + "constantan")    
    event.add('kubejs:nuggets_conversion/' + "constantan", 'thermal:' + "constantan" + '_nugget') 

    event.add('kubejs:plates_conversion/' + "constantan", 'immersiveengineering:plate_' + "constantan")    
    event.add('kubejs:plates_conversion/' + "constantan", 'thermal:' + "constantan" + '_plate')

    event.add('kubejs:gears_conversion/' + "constantan", 'thermal:' + "constantan" + '_gear')
})

onEvent('recipes', event => {
    event.shapeless('1x emendatusenigmatica:' + "constantan" + '_ingot', ['#kubejs:ingots_conversion/' + "constantan"])
    event.replaceOutput(
        [
        { id: 'create:smelting/ingot_' + "constantan" + '_compat_immersiveengineering' },
        { id: 'create:blasting/ingot_' + "constantan" + '_compat_immersiveengineering' },
        { id: 'thermal:compat/tconstruct/chiller_tconstruct_' + "constantan" + '_ingot' },
        { id: 'productivebees:create/mixing/ingots/honeycomb_' + "constantan"}
        ], 
        '#kubejs:ingots_conversion/' + "constantan", 
        'emendatusenigmatica:' + "constantan" + '_ingot'
    )
    event.remove({id: 'immersiveengineering:alloysmelter/constantan'})
    event.remove({id: 'tconstruct:smeltery/alloys/molten_constantan'})
    event.remove({id: 'emendatusenigmatica:ingot_from_dust/smelting/constantan'})
	event.remove({id: 'emendatusenigmatica:ingot_from_dust/blasting/constantan'})
    event.remove({ output: '#kubejs:ingots_conversion/' + "constantan" })


    event.shapeless('1x emendatusenigmatica:' + "constantan" + '_block', ['#kubejs:blocks_conversion/' + "constantan"])
    event.remove({ output: '#kubejs:blocks_conversion/' + "constantan" })

    event.shapeless('1x emendatusenigmatica:' + "constantan" + '_dust', ['#kubejs:dusts_conversion/' + "constantan"])
    event.replaceOutput(
        [
        { id: 'mekanism:processing/' + "constantan" + '/dust/from_dirty_dust' },
        { id: 'mekanism:processing/' + "constantan" + '/dust/from_ingot' },
        { id: 'mekanism:processing/' + "constantan" + '/dust/from_ore' },
        { id: 'mekanism:processing/' + "constantan" + '/dust/from_infusing' }
        ], 
        '#kubejs:dusts_conversion/' + "constantan", 
        'emendatusenigmatica:' + "constantan" + '_dust'
    )
    event.remove({id: 'emendatusenigmatica:alloy_dust/constantan'})
    event.remove({ output: '#kubejs:dusts_conversion/' + "constantan" })

    event.shapeless('1x emendatusenigmatica:' + "constantan" + '_nugget', ['#kubejs:nuggets_conversion/' + "constantan"])
    event.replaceOutput(
        [
        { id: 'create:splashing/immersiveengineering/crushed_' + "constantan" + '_ore' },
        { id: 'create:splashing/crushed_' + "constantan" + '_ore' }
        ], 
        '#kubejs:nuggets_conversion/' + "constantan", 
        'emendatusenigmatica:' + "constantan" + '_nugget'
    )
    event.remove({ output: '#kubejs:nuggets_conversion/' + "constantan" })

    event.shapeless('1x emendatusenigmatica:' + "constantan" + '_plate', ['#kubejs:plates_conversion/' + "constantan"])
    event.replaceOutput(
        [
        { id: 'immersiveengineering:crafting/plate_' + "constantan" + '_hammering' },
        { id: 'create:pressing/' + "constantan" + '_ingot' }
        ], 
        '#kubejs:plates_conversion/' + "constantan", 
        'emendatusenigmatica:' + "constantan" + '_plate'
    )
    event.remove({ output: '#kubejs:plates_conversion/' + "constantan" })

    event.shapeless('1x emendatusenigmatica:' + "constantan" + '_gear', ['#kubejs:gears_conversion/' + "constantan"])
    event.remove({ output: '#kubejs:gears_conversion/' + "constantan" })
})