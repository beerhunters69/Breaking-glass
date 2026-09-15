// priority: 1
onEvent('item.tags', event => {
    //Unified item tags
    event.removeAll('forge:ingots/' + "signalum")
    event.add('forge:ingots/' + "signalum", 'emendatusenigmatica:' + "signalum" + '_ingot')

    event.removeAll('forge:storage_blocks/' + "signalum")
    event.add('forge:storage_blocks/' + "signalum", 'emendatusenigmatica:' + "signalum" + '_block')

    event.removeAll('forge:dusts/' + "signalum")
    event.add('forge:dusts/' + "signalum", 'emendatusenigmatica:' + "signalum" + '_dust')

    event.removeAll('forge:nuggets/' + "signalum")
    event.add('forge:nuggets/' + "signalum", 'emendatusenigmatica:' + "signalum" + '_nugget')

    event.removeAll('forge:plates/' + "signalum")
    event.add('forge:plates/' + "signalum", 'emendatusenigmatica:' + "signalum" + '_plate')

    event.removeAll('forge:gears/' + "signalum")
    event.add('forge:gears/' + "signalum", 'emendatusenigmatica:' + "signalum" + '_gear')

    //Conversion tag
    event.add('kubejs:ingots_conversion/' + "signalum", 'thermal:' + "signalum" + '_ingot')

    event.add('kubejs:blocks_conversion/' + "signalum", 'thermal:' + "signalum" + '_block')
   
    event.add('kubejs:dusts_conversion/' + "signalum", 'thermal:' + "signalum" + '_dust')
  
    event.add('kubejs:nuggets_conversion/' + "signalum", 'thermal:' + "signalum" + '_nugget') 
 
    event.add('kubejs:plates_conversion/' + "signalum", 'thermal:' + "signalum" + '_plate')

    event.add('kubejs:gears_conversion/' + "signalum", 'thermal:' + "signalum" + '_gear')
})

onEvent('recipes', event => {
    event.shapeless('1x emendatusenigmatica:' + "signalum" + '_ingot', ['#kubejs:ingots_conversion/' + "signalum"])
    event.replaceOutput(
        [
        { id: 'create:smelting/ingot_' + "signalum" + '_compat_immersiveengineering' },
        { id: 'create:blasting/ingot_' + "signalum" + '_compat_immersiveengineering' },
        { id: 'thermal:compat/tconstruct/chiller_tconstruct_' + "signalum" + '_ingot' },
        { id: 'productivebees:create/mixing/ingots/honeycomb_' + "signalum"}
        ], 
        '#kubejs:ingots_conversion/' + "signalum", 
        'emendatusenigmatica:' + "signalum" + '_ingot'
    )
    event.remove({ output: '#kubejs:ingots_conversion/' + "signalum" })


    event.shapeless('1x emendatusenigmatica:' + "signalum" + '_block', ['#kubejs:blocks_conversion/' + "signalum"])
    event.remove({ output: '#kubejs:blocks_conversion/' + "signalum" })

    event.shapeless('1x emendatusenigmatica:' + "signalum" + '_dust', ['#kubejs:dusts_conversion/' + "signalum"])
    event.replaceOutput(
        [
        { id: 'mekanism:processing/' + "signalum" + '/dust/from_dirty_dust' },
        { id: 'mekanism:processing/' + "signalum" + '/dust/from_ingot' },
        { id: 'mekanism:processing/' + "signalum" + '/dust/from_ore' },
        { id: 'mekanism:processing/' + "signalum" + '/dust/from_infusing' }
        ], 
        '#kubejs:dusts_conversion/' + "signalum", 
        'emendatusenigmatica:' + "signalum" + '_dust'
    )
    event.remove({ id: 'emendatusenigmatica:alloy_dust/signalum' })
    event.shapeless('4x emendatusenigmatica:' + "signalum" + '_dust', ['3x emendatusenigmatica:copper_dust', '1x emendatusenigmatica:silver_dust', '4x minecraft:redstone'])
    event.remove({ output: '#kubejs:dusts_conversion/' + "signalum" })

    event.shapeless('1x emendatusenigmatica:' + "signalum" + '_nugget', ['#kubejs:nuggets_conversion/' + "signalum"])
    event.replaceOutput(
        [
        { id: 'create:splashing/immersiveengineering/crushed_' + "signalum" + '_ore' },
        { id: 'create:splashing/crushed_' + "signalum" + '_ore' }
        ], 
        '#kubejs:nuggets_conversion/' + "signalum", 
        'emendatusenigmatica:' + "signalum" + '_nugget'
    )
    event.remove({ output: '#kubejs:nuggets_conversion/' + "signalum" })

    event.shapeless('1x emendatusenigmatica:' + "signalum" + '_plate', ['#kubejs:plates_conversion/' + "signalum"])
    event.replaceOutput(
        [
        { id: 'immersiveengineering:crafting/plate_' + "signalum" + '_hammering' },
        { id: 'create:pressing/' + "signalum" + '_ingot' }
        ], 
        '#kubejs:plates_conversion/' + "signalum", 
        'emendatusenigmatica:' + "signalum" + '_plate'
    )
    event.remove({ output: '#kubejs:plates_conversion/' + "signalum" })

    event.shapeless('1x emendatusenigmatica:' + "signalum" + '_gear', ['#kubejs:gears_conversion/' + "signalum"])
    event.remove({ output: '#kubejs:gears_conversion/' + "signalum" })
})