// priority: 1
onEvent('item.tags', event => {
    //Unified item tags
    event.removeAll('forge:gems/' + "coal_coke")
    event.removeAll('forge:gems/' + "coke")
    event.removeAll('forge:coal_coke')
    event.removeAll('forge:coal_petcoke')    
    event.add('forge:gems/' + "coal_coke", 'emendatusenigmatica:' + "coke" + '_gem')
    event.add('forge:gems/' + "coke", 'emendatusenigmatica:' + "coke" + '_gem')
    event.add('forge:coal_coke', 'emendatusenigmatica:coke_gem')
    event.add('forge:coal_petcoke', 'emendatusenigmatica:coke_gem')

    event.removeAll('forge:storage_blocks/' + "coal_coke")
    event.removeAll('forge:storage_blocks/' + "coke")
    event.removeAll('forge:storage_blocks/petcoke')
    event.removeAll('forge:storage_blocks/coal_petcoke')
    event.add('forge:storage_blocks/' + "coal_coke", 'emendatusenigmatica:' + "coke" + '_block')
    event.add('forge:storage_blocks/' + "coke", 'emendatusenigmatica:' + "coke" + '_block')
    event.add('forge:storage_blocks/petcoke', 'emendatusenigmatica:coke_block')
    event.add('forge:storage_blocks/coal_petcoke', 'emendatusenigmatica:coke_block')

    event.removeAll('forge:dusts/' + "coal_coke")
    event.removeAll('forge:dusts/' + "coke")
    event.removeAll('forge:dusts/' + "coal_petcoke")

    event.add('forge:dusts/' + "coal_coke", 'emendatusenigmatica:' + "coke" + '_dust')
    event.add('forge:dusts/' + "coke", 'emendatusenigmatica:' + "coke" + '_dust')
    event.add('forge:dusts/' + "coal_petcoke", 'emendatusenigmatica:' + "coke" + '_dust')    

    //Conversion tag
    event.add('kubejs:gems_conversion/' + "coke", 'thermal:' + "coal_coke")
    event.add('kubejs:gems_conversion/' + "coke", 'immersiveengineering:' + "coal_coke")
    event.add('kubejs:gems_conversion/' + "coke", 'immersivepetroleum:' + "petcoke")    

    event.add('kubejs:blocks_conversion/' + "coke", 'thermal:' + "coal_coke" + '_block')
    event.add('kubejs:blocks_conversion/' + "coke", 'immersiveengineering:' + "coke")    
    event.add('kubejs:blocks_conversion/' + "coke", 'immersivepetroleum:' + "petcoke_block")
   
    event.add('kubejs:dusts_conversion/' + "coke", 'immersiveengineering:dust_coke') 
    event.add('kubejs:dusts_conversion/' + "coke", 'immersivepetroleum:' + "petcoke_dust") 
})

onEvent('recipes', event => {
    event.shapeless('1x emendatusenigmatica:' + "coke" + '_gem', ['#kubejs:gems_conversion/' + "coke"])
    event.custom({
        "type": "immersivepetroleum:coker",
        "result": {
            "item": "emendatusenigmatica:coke_gem"
        },
        "resultfluid": {
            "tag": "forge:diesel_sulfur",
            "amount": 27
        },
        "input": {
            "count": 2,
            "base_ingredient": {
            "tag": "forge:bitumen"
            }
        },
        "inputfluid": {
            "tag": "minecraft:water",
            "amount": 125
        },
        "time": 30,
        "energy": 512
    })
    event.remove({ id: 'immersivepetroleum:coking/petcoke'})
    event.remove({ output: '#kubejs:gems_conversion/' + "coke" })

    


    event.shapeless('1x emendatusenigmatica:' + "coke" + '_block', ['#kubejs:blocks_conversion/' + "coke"])
    event.remove({ output: '#kubejs:blocks_conversion/' + "coke" })

    event.shapeless('1x emendatusenigmatica:' + "coke" + '_dust', ['#kubejs:dusts_conversion/' + "coke"])
    event.remove({ id: 'immersivepetroleum:squeezer/graphite_dust'})
    event.remove({ output: '#kubejs:dusts_conversion/' + "coke" })

})