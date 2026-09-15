
onEvent('recipes', event => {
event.recipes.immersiveengineering.alloy('emendatusenigmatica:steel_ingot', '#forge:dusts/iron', Item.of('#forge:dusts/coke',2))
event.recipes.immersiveengineering.alloy(
    Item.of("kubejs:fiery_metal_composite",4), 
    '#forge:ingots/fiery', 
    Item.of('#forge:ingots/knightmetal',3))

})