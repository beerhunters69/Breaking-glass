onEvent('recipes', event => {
    event.recipes.immersiveengineering.arc_furnace("kubejs:duraluminium_ingot", "kubejs:duraluminium_dust")
    event.recipes.immersiveengineering.arc_furnace('immersiveengineering:ingot_steel', 'minecraft:iron_ingot',Item.of("minecraft:coal",2),'immersiveengineering:slag')
    // event.recipes.immersiveengineering.arc_furnace('mysticalagriculture:prosperity_seed_base','twilightforest:magic_beans',Item.of('mysticalagriculture:prosperity_shard',4))

    //Beeblock
    event.recipes.immersiveengineering.arc_furnace(
        'productivebees:spawn_egg_ashy_mining_bee',
        'minecraft:egg',
        Item.of('minecraft:iron_pickaxe')
    )
    event.recipes.immersiveengineering.arc_furnace(
        'productivebees:spawn_egg_blue_banded_bee',
        'minecraft:egg',
        'minecraft:blue_dye'
    )
    event.recipes.immersiveengineering.arc_furnace(
        'productivebees:spawn_egg_chocolate_mining_bee',
        'minecraft:egg',
        [Item.of('minecraft:iron_pickaxe'),'minecraft:cocoa_beans']
    )
    event.recipes.immersiveengineering.arc_furnace(
        Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:crystalline"}}'),
        'minecraft:egg',
        'minecraft:quartz'
    )
    event.recipes.immersiveengineering.arc_furnace(
        Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:draconic"}}'),
        'minecraft:egg',
        'minecraft:dragon_egg'
    )
    event.recipes.immersiveengineering.arc_furnace(
        Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:ender"}}'),
        'minecraft:egg',
        'minecraft:ender_pearl'
    )
    event.recipes.immersiveengineering.arc_furnace(
        Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:glowing"}}'),
        'minecraft:egg',
        'minecraft:glowstone'
    )
    event.recipes.immersiveengineering.arc_furnace(
        Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:gold"}}'),
        'minecraft:egg',
        'minecraft:gold_block'
    )
    event.recipes.immersiveengineering.arc_furnace(
        'productivebees:spawn_egg_leafcutter_bee',
        'minecraft:egg',
        Item.of('minecraft:shears')
    )
    event.recipes.immersiveengineering.arc_furnace(
        Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:magmatic"}}'),
        'minecraft:egg',
        'minecraft:magma_block'
    )
    event.recipes.immersiveengineering.arc_furnace(
        'productivebees:spawn_egg_mason_bee',
        'minecraft:egg',
        'minecraft:grass'
    )
    event.recipes.immersiveengineering.arc_furnace(
        'productivebees:spawn_egg_neon_cuckoo_bee',
        'minecraft:egg',
        'minecraft:redstone_lamp'
    )
    event.recipes.immersiveengineering.arc_furnace(
        'productivebees:spawn_egg_nomad_bee',
        'minecraft:egg',
        Item.of('minecraft:wooden_sword')
    )
    event.recipes.immersiveengineering.arc_furnace(
        Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:prismarine"}}'),
        'minecraft:egg',
        'minecraft:prismarine_shard'
    )
    event.recipes.immersiveengineering.arc_furnace(
        'productivebees:spawn_egg_reed_bee',
        'minecraft:egg',
        'minecraft:sugar_cane'
    )
    event.recipes.immersiveengineering.arc_furnace(
        'productivebees:spawn_egg_resin_bee',
        'minecraft:egg',
        'minecraft:slime_ball'
    )
    event.recipes.immersiveengineering.arc_furnace(
        Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:skeletal"}}'),
        'minecraft:egg',
        'minecraft:bone'
    )
    event.recipes.immersiveengineering.arc_furnace(
        Item.of('productivebees:spawn_egg_configurable_bee', '{EntityTag:{type:"productivebees:sugarbag"}}'),
        'minecraft:egg',
        'minecraft:sugar'
    )
    event.recipes.immersiveengineering.arc_furnace(
        'productivebees:spawn_egg_sweaty_bee',
        'minecraft:egg',
        'minecraft:sand'
    )
    //Beeblock end
    event.recipes.immersiveengineering.arc_furnace(
        'ftbic:industrial_grade_metal',
        'kubejs:duraluminium_plate',
    )
})