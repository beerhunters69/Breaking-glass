onEvent('recipes', event => {
    event.recipes.immersiveengineering.metal_press('kubejs:duraluminium_gear', '4x kubejs:duraluminium_ingot', 'immersiveengineering:mold_gear')

    event.recipes.immersiveengineering.metal_press('kubejs:duraluminium_plate', 'kubejs:duraluminium_ingot', 'immersiveengineering:mold_plate')
    
    event.recipes.immersiveengineering.metal_press('boss_tools:compressed_steel', Item.of('kubejs:duraluminium_ingot',9), 'boss_tools_giselle_addon:mold_compressing')
    })