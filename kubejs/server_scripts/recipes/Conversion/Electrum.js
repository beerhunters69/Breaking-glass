// priority: 1
onEvent('item.tags', event => {
    //Unified item tags
    event.removeAll('forge:ingots/' + "electrum")
    event.add('forge:ingots/' + "electrum", 'emendatusenigmatica:' + "electrum" + '_ingot')

    event.removeAll('forge:storage_blocks/' + "electrum")
    event.add('forge:storage_blocks/' + "electrum", 'emendatusenigmatica:' + "electrum" + '_block')

    event.removeAll('forge:dusts/' + "electrum")
    event.add('forge:dusts/' + "electrum", 'emendatusenigmatica:' + "electrum" + '_dust')

    event.removeAll('forge:nuggets/' + "electrum")
    event.add('forge:nuggets/' + "electrum", 'emendatusenigmatica:' + "electrum" + '_nugget')

    event.removeAll('forge:plates/' + "electrum")
    event.add('forge:plates/' + "electrum", 'emendatusenigmatica:' + "electrum" + '_plate')

    event.removeAll('forge:gears/' + "electrum")
    event.add('forge:gears/' + "electrum", 'emendatusenigmatica:' + "electrum" + '_gear')

    //Conversion tag
    event.add('kubejs:ingots_conversion/' + "electrum", 'immersiveengineering:ingot_' + "electrum")
    event.add('kubejs:ingots_conversion/' + "electrum", 'thermal:' + "electrum" + '_ingot')

    event.add('kubejs:blocks_conversion/' + "electrum", 'immersiveengineering:storage_' + "electrum")
    event.add('kubejs:blocks_conversion/' + "electrum", 'thermal:' + "electrum" + '_block')

    event.add('kubejs:dusts_conversion/' + "electrum", 'immersiveengineering:dust_' + "electrum")    
    event.add('kubejs:dusts_conversion/' + "electrum", 'thermal:' + "electrum" + '_dust')

    event.add('kubejs:nuggets_conversion/' + "electrum", 'immersiveengineering:nugget_' + "electrum")    
    event.add('kubejs:nuggets_conversion/' + "electrum", 'thermal:' + "electrum" + '_nugget') 

    event.add('kubejs:plates_conversion/' + "electrum", 'immersiveengineering:plate_' + "electrum")    
    event.add('kubejs:plates_conversion/' + "electrum", 'thermal:' + "electrum" + '_plate')

    event.add('kubejs:gears_conversion/' + "electrum", 'thermal:' + "electrum" + '_gear')
})

onEvent('recipes', event => {
    event.shapeless('1x emendatusenigmatica:' + "electrum" + '_ingot', ['#kubejs:ingots_conversion/' + "electrum"])
    event.replaceOutput(
        [
        { id: 'create:smelting/ingot_' + "electrum" + '_compat_immersiveengineering' },
        { id: 'create:blasting/ingot_' + "electrum" + '_compat_immersiveengineering' },
        { id: 'thermal:compat/tconstruct/chiller_tconstruct_' + "electrum" + '_ingot' },
        { id: 'productivebees:create/mixing/ingots/honeycomb_' + "electrum"}
        ], 
        '#kubejs:ingots_conversion/' + "electrum", 
        'emendatusenigmatica:' + "electrum" + '_ingot'
    )
    event.blasting('1x emendatusenigmatica:' + "electrum" + '_ingot', 'emendatusenigmatica:' + "electrum" + '_dust')
    event.smelting('1x emendatusenigmatica:' + "electrum" + '_ingot', 'emendatusenigmatica:' + "electrum" + '_dust')
    event.remove({ output: '#kubejs:ingots_conversion/' + "electrum" })


    event.shapeless('1x emendatusenigmatica:' + "electrum" + '_block', ['#kubejs:blocks_conversion/' + "electrum"])
    event.remove({ output: '#kubejs:blocks_conversion/' + "electrum" })

    event.shapeless('1x emendatusenigmatica:' + "electrum" + '_dust', ['#kubejs:dusts_conversion/' + "electrum"])
    event.replaceOutput(
        [
        { id: 'mekanism:processing/' + "electrum" + '/dust/from_dirty_dust' },
        { id: 'mekanism:processing/' + "electrum" + '/dust/from_ingot' },
        { id: 'mekanism:processing/' + "electrum" + '/dust/from_ore' },
        { id: 'mekanism:processing/' + "electrum" + '/dust/from_infusing' }
        ], 
        '#kubejs:dusts_conversion/' + "electrum", 
        'emendatusenigmatica:' + "electrum" + '_dust'
    )
    event.remove({ output: '#kubejs:dusts_conversion/' + "electrum" })

    event.shapeless('1x emendatusenigmatica:' + "electrum" + '_nugget', ['#kubejs:nuggets_conversion/' + "electrum"])
    event.replaceOutput(
        [
        { id: 'create:splashing/immersiveengineering/crushed_' + "electrum" + '_ore' },
        { id: 'create:splashing/crushed_' + "electrum" + '_ore' }
        ], 
        '#kubejs:nuggets_conversion/' + "electrum", 
        'emendatusenigmatica:' + "electrum" + '_nugget'
    )
    event.remove({ output: '#kubejs:nuggets_conversion/' + "electrum" })

    event.shapeless('1x emendatusenigmatica:' + "electrum" + '_plate', ['#kubejs:plates_conversion/' + "electrum"])
    event.replaceOutput(
        [
        { id: 'immersiveengineering:crafting/plate_' + "electrum" + '_hammering' },
        { id: 'create:pressing/' + "electrum" + '_ingot' }
        ], 
        '#kubejs:plates_conversion/' + "electrum", 
        'emendatusenigmatica:' + "electrum" + '_plate'
    )
    event.remove({ output: '#kubejs:plates_conversion/' + "electrum" })

    event.shapeless('1x emendatusenigmatica:' + "electrum" + '_gear', ['#kubejs:gears_conversion/' + "electrum"])
    event.remove({ output: '#kubejs:gears_conversion/' + "electrum" })
})