onEvent('recipes', event => {
    event.recipes.immersiveengineering.arc_furnace("kubejs:duraluminium_ingot", "kubejs:duraluminium_dust")
    event.recipes.immersiveengineering.arc_furnace('immersiveengineering:ingot_steel', 'minecraft:iron_ingot',Item.of("minecraft:coal",2),'immersiveengineering:slag')
})