// priority: 1
onEvent('item.tags', event => {
    //Unified item tags
    event.removeAll('forge:ingots/' + "uranium")
    event.removeAll('forge:ingots/' + "yellorium")
    event.add('forge:ingots/' + "uranium", 'emendatusenigmatica:' + "uranium" + '_ingot')
    event.add('forge:ingots/' + "yellorium", 'emendatusenigmatica:' + "uranium" + '_ingot') // Extreme reactors is weird

    event.removeAll('forge:storage_blocks/' + "uranium")
    event.removeAll('forge:storage_blocks/' + "yellorium")
    event.add('forge:storage_blocks/' + "uranium", 'emendatusenigmatica:' + "uranium" + '_block')
    event.add('forge:storage_blocks/' + "yellorium", 'emendatusenigmatica:' + "uranium" + '_block') // Extreme reactors is weird

    event.removeAll('forge:dusts/' + "uranium")
    event.removeAll('forge:dusts/' + "yellorium")
    event.add('forge:dusts/' + "uranium", 'emendatusenigmatica:' + "uranium" + '_dust')
    event.add('forge:dusts/' + "yellorium", 'emendatusenigmatica:' + "uranium" + '_dust') // Extreme reactors is weird

    event.removeAll('forge:nuggets/' + "uranium")
    event.add('forge:nuggets/' + "uranium", 'emendatusenigmatica:' + "uranium" + '_nugget')
    event.add('forge:nuggets/' + "yellorium", 'emendatusenigmatica:' + "uranium" + '_nugget') // Extreme reactors is weird

    event.removeAll('forge:plates/' + "uranium")
    event.add('forge:plates/' + "uranium", 'emendatusenigmatica:' + "uranium" + '_plate')

    //Conversion tag
    event.add('kubejs:ingots_conversion/' + "uranium", 'immersiveengineering:ingot_' + "uranium")
    event.add('kubejs:ingots_conversion/' + "uranium", 'mekanism:ingot_' + "uranium")
    event.add('kubejs:ingots_conversion/' + "uranium", 'bigreactors:' + "yellorium" + '_ingot')

    event.add('kubejs:blocks_conversion/' + "uranium", 'immersiveengineering:storage_' + "uranium")
    event.add('kubejs:blocks_conversion/' + "uranium", 'mekanism:block_' + "uranium")
    event.add('kubejs:blocks_conversion/' + "uranium", 'bigreactors:' + "yellorium" + '_block')

    event.add('kubejs:dusts_conversion/' + "uranium", 'immersiveengineering:dust_' + "uranium")
    event.add('kubejs:dusts_conversion/' + "uranium", 'mekanism:dust_' + "uranium")
    event.add('kubejs:dusts_conversion/' + "uranium", 'bigreactors:' + "yellorium" + '_dust')

    event.add('kubejs:nuggets_conversion/' + "uranium", 'immersiveengineering:nugget_' + "uranium")
    event.add('kubejs:nuggets_conversion/' + "uranium", 'mekanism:nugget_' + "uranium")
    event.add('kubejs:nuggets_conversion/' + "uranium", 'bigreactors:' + "yellorium" + '_nugget')

    event.add('kubejs:plates_conversion/' + "uranium", 'immersiveengineering:plate_' + "uranium")

})

onEvent('recipes', event => {
    event.shapeless('1x emendatusenigmatica:' + "uranium" + '_ingot', ['#kubejs:ingots_conversion/' + "uranium"])
    event.replaceOutput(
        [
        { id: 'create:smelting/ingot_' + "uranium" + '_compat_immersiveengineering' },
        { id: 'create:blasting/ingot_' + "uranium" + '_compat_immersiveengineering' },
        { id: 'thermal:compat/tconstruct/chiller_tconstruct_' + "uranium" + '_ingot' },
        { id: 'productivebees:create/mixing/ingots/honeycomb_' + "radioactive"},
        { id: 'bigreactors:smelting/yellorium_from_ore' },
        { id: 'bigreactors:blasting/yellorium_from_ore' }
        ], 
        '#kubejs:ingots_conversion/' + "uranium", 
        'emendatusenigmatica:' + "uranium" + '_ingot'
    )
    event.remove({ id: 'bigreactors:fluidizer/solid/yellorium' })
    event.remove({ id: 'bigreactors:fluidizer/solid/yellorium9' })
    event.remove({ id: 'bigreactors:fluidizer/solidmixing/verderium_1' })
    event.remove({ id: 'bigreactors:fluidizer/solidmixing/verderium9_1' })
    event.remove({ id: 'bigreactors:fluidizer/solidmixing/verderium_2' })
    event.remove({ id: 'bigreactors:fluidizer/solidmixing/verderium9_2' })
    //This section should be in it's own file, but i'll move it to a proper place when the other dev notices this :)
    event.custom({
        "type": "bigreactors:fluidizersolid",
        "ingredient": {
            "ingredient": {
            "item": "emendatusenigmatica:" + "uranium" + "_ingot"
            },
            "count": 1
        },
        "result": {
            "fluid": "bigreactors:yellorium",
            "count": 1000
        }
    })
    event.custom({
        "type": "bigreactors:fluidizersolid",
        "ingredient": {
            "ingredient": {
            "item": "emendatusenigmatica:" + "uranium" + "_block"
            },
            "count": 1
        },
        "result": {
            "fluid": "bigreactors:yellorium",
            "count": 9000
        }
    })
    event.custom({
        "type": "bigreactors:fluidizersolidmixing",
        "ingredient1": {
            "ingredient": {
            "item": "emendatusenigmatica:" + "uranium" + "_ingot"
            },
            "count": 2
        },
        "ingredient2": {
            "ingredient": {
            "item": "bigreactors:blutonium_ingot"
            },
            "count": 1
        },
        "result": {
            "fluid": "bigreactors:verderium",
            "count": 2000
        }
    })
    event.custom({
        "type": "bigreactors:fluidizersolidmixing",
        "ingredient1": {
            "ingredient": {
            "item": "emendatusenigmatica:" + "uranium" + "_block"
            },
            "count": 2
        },
        "ingredient2": {
            "ingredient": {
            "item": "bigreactors:blutonium_block"
            },
            "count": 1
        },
        "result": {
            "fluid": "bigreactors:verderium",
            "count": 18000
        }
    })
    event.custom({
        "type": "bigreactors:fluidizersolidmixing",
        "ingredient1": {
            "ingredient": {
            "item": "bigreactors:blutonium_ingot" 
            },
            "count": 1
        },
        "ingredient2": {
            "ingredient": {
            "item": "emendatusenigmatica:" + "uranium" + "_ingot"
            },
            "count": 2
        },
        "result": {
            "fluid": "bigreactors:verderium",
            "count": 2000
        }
    })
    event.custom({
        "type": "bigreactors:fluidizersolidmixing",
        "ingredient1": {
            "ingredient": {
            "item": "bigreactors:blutonium_block"
            },
            "count": 1
        },
        "ingredient2": {
            "ingredient": {
            "item": "emendatusenigmatica:" + "uranium" + "_block"
            },
            "count": 2
        },
        "result": {
            "fluid": "bigreactors:verderium",
            "count": 18000
        }
    })
    event.remove({ id: 'bigreactors:reactor/reinforced/fuelrod_ingots_yellorium' })
    event.remove({ id: 'bigreactors:reactor/reinforced/controller_ingots_yellorium' })
    event.remove({ id: 'bigreactors:reactor/basic/fuelrod_ingots_yellorium' })
    event.remove({ id: 'bigreactors:reactor/basic/controller_ingots_yellorium' })
    event.remove({ id: 'bigreactors:misc/book/erguide' })
    event.remove({ output: '#kubejs:ingots_conversion/' + "uranium" })


    event.shapeless('1x emendatusenigmatica:' + "uranium" + '_block', ['#kubejs:blocks_conversion/' + "uranium"])
    event.remove({ output: '#kubejs:blocks_conversion/' + "uranium" })

    event.shapeless('1x emendatusenigmatica:' + "uranium" + '_dust', ['#kubejs:dusts_conversion/' + "uranium"])
    event.replaceOutput(
        [
        { id: 'mekanism:processing/' + "uranium" + '/dust/from_dirty_dust' },
        { id: 'mekanism:processing/' + "uranium" + '/dust/from_ingot' },
        { id: 'mekanism:processing/' + "uranium" + '/dust/from_ore' }
        ], 
        '#kubejs:dusts_conversion/' + "uranium", 
        'emendatusenigmatica:' + "uranium" + '_dust'
    )
    event.remove({ output: '#kubejs:dusts_conversion/' + "uranium" })

    event.shapeless('1x emendatusenigmatica:' + "uranium" + '_nugget', ['#kubejs:nuggets_conversion/' + "uranium"])
    event.replaceOutput(
        [
        { id: 'create:splashing/immersiveengineering/crushed_' + "uranium" + '_ore' },
        { id: 'create:splashing/crushed_' + "uranium" + '_ore' }
        ], 
        '#kubejs:nuggets_conversion/' + "uranium", 
        'emendatusenigmatica:' + "uranium" + '_nugget'
    )
    event.remove({ output: '#kubejs:nuggets_conversion/' + "uranium" })

    event.shapeless('1x emendatusenigmatica:' + "uranium" + '_plate', ['#kubejs:plates_conversion/' + "uranium"])
    event.remove({ output: '#kubejs:plates_conversion/' + "uranium" })

})