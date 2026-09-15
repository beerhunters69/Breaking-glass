// priority: 1
onEvent('item.tags', event => {
    //Unified item tags
    event.removeAll('forge:gems/' + "sulfur")
    event.add('forge:gems/' + "sulfur", 'emendatusenigmatica:' + "sulfur" + '_gem')

    event.removeAll('forge:storage_blocks/' + "sulfur")
    event.add('forge:storage_blocks/' + "sulfur", 'emendatusenigmatica:' + "sulfur" + '_block')

    event.removeAll('forge:dusts/' + "sulfur")
    event.add('forge:dusts/' + "sulfur", 'emendatusenigmatica:' + "sulfur" + '_dust')

    //Conversion tag
    event.add('kubejs:gems_conversion/' + "sulfur", 'thermal:' + 'sulfur')
    event.add('kubejs:gems_conversion/' + "sulfur", 'betterendforge:crystalline_sulphur')

    event.add('kubejs:blocks_conversion/' + "sulfur", 'thermal:' + "sulfur" + '_block')
   
    event.add('kubejs:dusts_conversion/' + "sulfur", 'thermal:' + "sulfur" + '_dust')
    event.add('kubejs:dusts_conversion/' + "sulfur", 'immersiveengineering:' + "dust_" + 'sulfur')
    event.add('kubejs:dusts_conversion/' + "sulfur", 'mekanism:' + "dust_" + 'sulfur')  
})

onEvent('recipes', event => {
    event.shapeless('1x emendatusenigmatica:' + "sulfur" + '_gem', ['#kubejs:gems_conversion/' + "sulfur"])
    event.replaceOutput(
        [
        { id: 'create:compat/thermal/crushing/sulfur_ore'},
        { id: 'thermal:compat/tconstruct/chiller_tconstruct_' + "sulfur" + '_gem' },
        { id: 'productivebees:create/mixing/dusts/honeycomb_' + "sulfur"},
        { id: 'thermal:smelting/sulfur_from_blasting'},
        { id: 'thermal:smelting/sulfur_from_smelting'},
        ], 
        '#kubejs:gems_conversion/' + "sulfur", 
        'emendatusenigmatica:' + "sulfur" + '_gem'
    )
    event.remove({ output: '#kubejs:gems_conversion/' + "sulfur" })


    event.shapeless('1x emendatusenigmatica:' + "sulfur" + '_block', ['#kubejs:blocks_conversion/' + "sulfur"])
    event.remove({ output: '#kubejs:blocks_conversion/' + "sulfur" })

    event.shapeless('1x emendatusenigmatica:' + "sulfur" + '_dust', ['#kubejs:dusts_conversion/' + "sulfur"])
    event.replaceOutput(
        [
        { id: 'mekanism:processing/' + "sulfur" + '/dust/from_dirty_dust' },
        { id: 'mekanism:processing/' + "sulfur" + '/dust/from_gem' },
        { id: 'mekanism:processing/' + "sulfur" + '/dust/from_ore' },
        { id: 'mekanism:processing/' + "sulfur" + '/dust/from_infusing' },
        { id: 'mekanism:injecting/gunpowder_to_sulfur' },
        { id: 'mekanism:reaction/coal_gasification/blocks_coals' },
        { id: 'mekanism:reaction/coal_gasification/dusts_coals' },
        { id: 'mekanism:reaction/coal_gasification/coals' },        
        ], 
        '#kubejs:dusts_conversion/' + "sulfur", 
        'emendatusenigmatica:' + "sulfur" + '_dust'
    )
    event.custom({
        "type": "immersivepetroleum:hydrotreater",
        "time": 1,
        "energy": 512,
        "result": {
            "fluid": "immersivepetroleum:diesel",
            "amount": 7
        },
        "input": {
            "tag": "forge:diesel_sulfur",
            "amount": 7
        },
        "secondary_input": {
            "tag": "minecraft:water",
            "amount": 7
        },
        "secondary_result": {
            "item": "emendatusenigmatica:sulfur_dust",
            "chance": "0.02"
        }

    })
    event.remove({ id: 'immersivepetroleum:hydrotreater/sulfur_recovery'})
    event.remove({ output: '#kubejs:dusts_conversion/' + "sulfur" })
})