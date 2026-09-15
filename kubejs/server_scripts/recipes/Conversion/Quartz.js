// priority: 1
onEvent('item.tags', event => {
    //Unified item tags

    event.removeAll('forge:dusts/' + "quartz")
    event.add('forge:dusts/' + "quartz", 'emendatusenigmatica:' + "quartz" + '_dust')

    //Conversion tag
    event.add('kubejs:dusts_conversion/' + "quartz", 'thermal:quartz_dust')
    event.add('kubejs:dusts_conversion/' + "quartz", 'mekanism:dust_quartz')
    event.add('kubejs:dusts_conversion/' + "quartz", 'appliedenergistics2:nether_quartz_dust')
})

onEvent('recipes', event => {
    event.shapeless('1x emendatusenigmatica:' + "quartz" + '_dust', ['#kubejs:dusts_conversion/' + "quartz"])
    event.replaceOutput(
        [
        { id: 'create:compat/ae2/milling/nether_quartz'},
        { id: 'mekanism:processing/' + "quartz" + '/dust/from_dirty_dust' },
        { id: 'mekanism:processing/' + "quartz" + '/dust/from_ingot' },
        { id: 'mekanism:processing/' + "quartz" + '/dust/from_ore' },
        { id: 'mekanism:processing/' + "quartz" + '/dust/from_infusing' },
        { id: 'mekanism:processing/' + "quartz" + '/to_dust' },
        { id: 'mekanism:crushing/' + "quartz" + '_dust' },
        { id: 'mekanism:enriching/' + "quartz" + '_dust' },               
        ], 
        '#kubejs:dusts_conversion/' + "quartz", 
        'emendatusenigmatica:' + "quartz" + '_dust'
    )
    event.remove({ output: '#kubejs:dusts_conversion/' + "quartz" })

})