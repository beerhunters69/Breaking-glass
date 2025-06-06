
onEvent('recipes', event => {
event.recipes.immersiveengineering.alloy('immersiveengineering:ingot_steel', '#forge:dusts/iron', Item.of('#minecraft:coals',4))
event.recipes.immersiveengineering.alloy(
    Item.of("kubejs:fiery_metal_composite",4), 
    '#forge:ingots/fiery', 
    Item.of('#forge:ingots/knightmetal',3))

})