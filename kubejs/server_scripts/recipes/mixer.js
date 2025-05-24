onEvent('recipes', event => {
    event.recipes.create.mixing('kubejs:duraluminium_dust',[
        '#forge:dusts/constantan',
        '#forge:dusts/invar',
        '#forge:dusts/steel',
        '#forge:dusts/aluminum',
        Fluid.of('immersivepetroleum:lubricant',250)
    ]).heated()
})