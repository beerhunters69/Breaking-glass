onEvent('recipes', event => {
    event.recipes.create.mixing('4x kubejs:duraluminium_dust',[
        '#forge:dusts/constantan',
        '#forge:dusts/invar',
        '#forge:dusts/steel',
        '#forge:dusts/aluminum',
        Fluid.of('immersivepetroleum:lubricant',250)
    ]).heated()
    event.recipes.create.mixing(Item.of('emendatusenigmatica:invar_dust', 3),[
        '#forge:dusts/iron',
        '#forge:dusts/nickel'
    ]).heated()
    event.recipes.create.mixing(Item.of('emendatusenigmatica:constantan_dust', 2),[
        '#forge:dusts/copper',
        '#forge:dusts/nickel'
    ]).heated()
    event.recipes.create.mixing(Item.of('appliedenergistics2:charged_certus_quartz_crystal', 32),[
        Item.of('appliedenergistics2:certus_quartz_crystal',64),
        'minecraft:redstone',
        Fluid.water(1000)
    ]).heated()
    

})