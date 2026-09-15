// priority: 1
onEvent('item.tags', event => {
    //Unified item tags
    event.removeAll('forge:ingots/' + "steel")
    event.add('forge:ingots/' + "steel", 'emendatusenigmatica:' + "steel" + '_ingot')

    event.removeAll('forge:storage_blocks/' + "steel")
    event.add('forge:storage_blocks/' + "steel", 'emendatusenigmatica:' + "steel" + '_block')

    event.removeAll('forge:dusts/' + "steel")
    event.add('forge:dusts/' + "steel", 'emendatusenigmatica:' + "steel" + '_dust')

    event.removeAll('forge:nuggets/' + "steel")
    event.add('forge:nuggets/' + "steel", 'emendatusenigmatica:' + "steel" + '_nugget')
    
    event.removeAll('forge:plates/' + "steel")
    event.add('forge:plates/' + "steel", 'emendatusenigmatica:' + "steel" + '_plate')


    //Conversion tag
    event.add('kubejs:ingots_conversion/' + "steel", 'immersiveengineering:ingot_' + "steel")
    event.add('kubejs:ingots_conversion/' + "steel", 'mekanism:ingot_' + "steel")
    event.add('kubejs:ingots_conversion/' + 'steel', 'boss_tools:steel_ingot')

    event.add('kubejs:blocks_conversion/' + "steel", 'immersiveengineering:storage_' + "steel")
    event.add('kubejs:blocks_conversion/' + "steel", 'mekanism:block_' + "steel")
    event.add('kubejs:blocks_conversion/' + 'steel', 'boss_tools:steel_block')

    event.add('kubejs:dusts_conversion/' + "steel", 'immersiveengineering:dust_' + "steel")    
    event.add('kubejs:dusts_conversion/' + "steel", 'mekanism:dust_' + "steel")

    event.add('kubejs:nuggets_conversion/' + "steel", 'immersiveengineering:nugget_' + "steel")   
    event.add('kubejs:nuggets_conversion/' + "steel", 'mekanism:nugget_' + "steel")    
    event.add('kubejs:nuggets_conversion/' + 'steel', 'boss_tools:steel_nugget')

    event.add('kubejs:plates_conversion/' + "steel", 'immersiveengineering:plate_' + "steel")
})

onEvent('recipes', event => {
    event.shapeless('1x emendatusenigmatica:' + "steel" + '_ingot', ['#kubejs:ingots_conversion/' + "steel"])
    event.replaceOutput(
        [
        { id: 'create:smelting/' + "steel" + '_ingot_compat_thermal' },
        { id: 'create:blasting/ingot_' + "steel" + '_ingot_compat_thermal' },
        { id: 'thermal:compat/tconstruct/chiller_tconstruct_' + "steel" + '_ingot' }
        ], 
        '#kubejs:ingots_conversion/' + "steel", 
        'emendatusenigmatica:' + "steel" + '_ingot'
    )
    event.remove({ id: 'boss_tools_giselle_addon:smelting/steel_ingot_from_compresseds'}) //compresseds likely means compressed steel
    event.remove({ id: 'boss_tools_giselle_addon:blasting/steel_ingot_from_compresseds'})
    event.remove({ id: 'immersivepetroleum:arcfurnace/steel'})
    event.remove({ output: '#kubejs:ingots_conversion/' + "steel" })


    event.shapeless('1x emendatusenigmatica:' + "steel" + '_block', ['#kubejs:blocks_conversion/' + "steel"])
    event.remove({ output: '#kubejs:blocks_conversion/' + "steel" })

    event.shapeless('1x emendatusenigmatica:' + "steel" + '_dust', ['#kubejs:dusts_conversion/' + "steel"])
    event.replaceOutput(
        [
        { id: 'mekanism:processing/' + "steel" + '/dust/from_dirty_dust' },
        { id: 'mekanism:processing/' + "steel" + '/dust/from_ingot' },
        { id: 'mekanism:processing/' + "steel" + '/dust/from_ore' },
        { id: 'productivebees:create/mixing/ingots/honeycomb_' + "steel"},
        { id: 'mekanism:processing/' + "steel" + '/enriched_iron_to_dust' },
        ], 
        '#kubejs:dusts_conversion/' + "steel", 
        'emendatusenigmatica:' + "steel" + '_dust'
    )
    event.remove({ output: '#kubejs:dusts_conversion/' + "steel" })

    event.shapeless('1x emendatusenigmatica:' + "steel" + '_nugget', ['#kubejs:nuggets_conversion/' + "steel"])
    event.replaceOutput(
        [
        { id: 'create:splashing/thermal/crushed_' + "steel" + '_ore' },
        { id: 'create:splashing/crushed_' + "steel" + '_ore' }
        ], 
        '#kubejs:nuggets_conversion/' + "steel", 
        'emendatusenigmatica:' + "steel" + '_nugget'
    )
    event.remove({ output: '#kubejs:nuggets_conversion/' + "steel" })

    event.shapeless('1x emendatusenigmatica:' + "steel" + '_plate', ['#kubejs:plates_conversion/' + "steel"])
    event.replaceOutput(
        [
        { id: 'immersiveengineering:crafting/plate_' + "steel" + '_hammering' },
        { id: 'create:pressing/' + "steel" + '_ingot' }
        ], 
        '#kubejs:plates_conversion/' + "steel", 
        'emendatusenigmatica:' + "steel" + '_plate'
    )
    event.remove({ output: '#kubejs:plates_conversion/' + "steel" })
})