// priority: 1
onEvent('item.tags', event => {
    //Unified item tags
    event.removeAll('forge:dusts/' + 'gold')
    event.add('forge:dusts/' + 'gold', 'emendatusenigmatica:' + 'gold' + '_dust')

    event.removeAll('forge:plates/' + 'gold')
    event.add('forge:plates/' + 'gold', 'emendatusenigmatica:' + 'gold' + '_plate')

    event.removeAll('forge:gears/' + 'gold')
    event.add('forge:gears/' + 'gold', 'emendatusenigmatica:' + 'gold' + '_gear')


    //Conversion tag
    event.add('kubejs:dusts_conversion/' + 'gold', 'immersiveengineering:dust_gold')
    event.add('kubejs:dusts_conversion/' + 'gold', 'thermal:gold_dust')
    event.add('kubejs:dusts_conversion/' + 'gold', 'mekanism:dust_gold')
    event.add('kubejs:dusts_conversion/' + 'gold', 'appliedenergistics2:gold_dust')

    event.add('kubejs:plates_conversion/' + 'gold', 'create:golden_sheet')
    event.add('kubejs:plates_conversion/' + 'gold', 'immersiveengineering:plate_gold')
    event.add('kubejs:plates_conversion/' + 'gold', 'thermal:gold_plate')

    event.add('kubejs:gears_conversion/' + 'gold', 'thermal:gold_gear')

})

onEvent('recipes', event => {
    event.shapeless('1x emendatusenigmatica:' + "gold" + '_dust', ['#kubejs:dusts_conversion/' + "gold"])
    event.replaceOutput(
        [
        { id: 'mekanism:processing/' + "gold" + '/dust/from_dirty_dust' },
        { id: 'mekanism:processing/' + "gold" + '/dust/from_ingot' },
        { id: 'mekanism:processing/' + "gold" + '/dust/from_ore' },
        ], 
        '#kubejs:dusts_conversion/' + "gold", 
        'emendatusenigmatica:' + "gold" + '_dust'
    )
    event.remove({ output: '#kubejs:dusts_conversion/' + "gold" })

    event.shapeless('1x emendatusenigmatica:' + "gold" + '_plate', ['#kubejs:plates_conversion/' + "gold"])
    event.replaceOutput(
        [
        { id: 'immersiveengineering:crafting/plate_' + "gold" + '_hammering' },
        { id: 'create:pressing/' + "gold" + '_ingot' },
        { id: 'create:sequenced_assembly/precision_mechanism'}
        ], 
        '#kubejs:plates_conversion/' + "gold", 
        'emendatusenigmatica:' + "gold" + '_plate'
    )
    event.remove({ output: '#kubejs:plates_conversion/' + "gold" })

    event.shapeless('1x emendatusenigmatica:' + "gold" + '_gear', ['#kubejs:gears_conversion/' + "gold"])
    event.remove({ output: '#kubejs:gears_conversion/' + "gold" })

})