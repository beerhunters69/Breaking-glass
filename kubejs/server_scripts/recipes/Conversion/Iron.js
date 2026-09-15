// priority: 1
onEvent('item.tags', event => {
    //Unified item tags
    event.removeAll('forge:dusts/' + 'iron')
    event.add('forge:dusts/' + 'iron', 'emendatusenigmatica:' + 'iron' + '_dust')

    event.removeAll('forge:plates/' + 'iron')
    event.add('forge:plates/' + 'iron', 'emendatusenigmatica:' + 'iron' + '_plate')

    event.removeAll('forge:gears/' + 'iron')
    event.add('forge:gears/' + 'iron', 'emendatusenigmatica:' + 'iron' + '_gear')

    event.removeAll('forge:rods/' + 'iron')
    event.add('forge:rods/' + 'iron', 'emendatusenigmatica:' + 'iron' + '_rod')

    //Conversion tag
    event.add('kubejs:dusts_conversion/' + 'iron', 'immersiveengineering:dust_iron')
    event.add('kubejs:dusts_conversion/' + 'iron', 'thermal:iron_dust')
    event.add('kubejs:dusts_conversion/' + 'iron', 'mekanism:dust_iron')
    event.add('kubejs:dusts_conversion/' + 'iron', 'appliedenergistics2:iron_dust')

    event.add('kubejs:plates_conversion/' + 'iron', 'create:iron_sheet')
    event.add('kubejs:plates_conversion/' + 'iron', 'immersiveengineering:plate_iron')
    event.add('kubejs:plates_conversion/' + 'iron', 'thermal:iron_plate')
    event.add('kubejs:plates_conversion/' + 'iron', 'boss_tools:iron_plate')

    event.add('kubejs:gears_conversion/' + 'iron', 'thermal:iron_gear')

    event.add('kubejs:rods_conversion/' + 'iron', 'immersiveengineering:stick_iron')
    event.add('kubejs:rods_conversion/' + 'iron', 'boss_tools:iron_stick')

})

onEvent('recipes', event => {
    event.shapeless('1x emendatusenigmatica:' + "iron" + '_dust', ['#kubejs:dusts_conversion/' + "iron"])
    event.replaceOutput(
        [
        { id: 'mekanism:processing/' + "iron" + '/dust/from_dirty_dust' },
        { id: 'mekanism:processing/' + "iron" + '/dust/from_ingot' },
        { id: 'mekanism:processing/' + "iron" + '/dust/from_ore' },
        ], 
        '#kubejs:dusts_conversion/' + "iron", 
        'emendatusenigmatica:' + "iron" + '_dust'
    )
    event.remove({ output: '#kubejs:dusts_conversion/' + "iron" })

    event.shapeless('1x emendatusenigmatica:' + "iron" + '_plate', ['#kubejs:plates_conversion/' + "iron"])
    event.replaceOutput(
        [
        { id: 'immersiveengineering:crafting/plate_' + "iron" + '_hammering' },
        { id: 'create:pressing/' + "iron" + '_ingot' }
        ], 
        '#kubejs:plates_conversion/' + "iron", 
        'emendatusenigmatica:' + "iron" + '_plate'
    )
    event.remove({ output: '#kubejs:plates_conversion/' + "iron" })

    event.shapeless('1x emendatusenigmatica:' + "iron" + '_gear', ['#kubejs:gears_conversion/' + "iron"])
    event.remove({ output: '#kubejs:gears_conversion/' + "iron" })

    event.shapeless('1x emendatusenigmatica:' + "iron" + '_rod', ['#kubejs:rods_conversion/' + "iron"])
    event.remove({ output: '#kubejs:rods_conversion/' + "iron" })
})