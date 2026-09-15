// priority: 1

onEvent('item.tags', event => {
    //Unified tags
    event.removeAll('forge:dusts/netherite')
    event.add('forge:dusts/netherite', 'mekanism:dust_netherite')

    //Conversion tag
    event.add('kubejs:dusts/netherite', 'thermal:netherite_dust')
})

onEvent('recipes', event => {
    event.shapeless('1x mekanism:dust_netherite', ['#kubejs:dusts/netherite'])
    event.remove({ output: '#kubejs:dusts/netherite' })
})