onEvent('recipes', event => {
    //Misc
    event.shaped('1x bigreactors:wrench', ['ABA', 'AAA', 'CAC'], {A:'kubejs:duraluminium_ingot', B: '#forge:dyes/green', C: 'minecraft:air'})

    //Reactor
    event.shaped('1x bigreactors:basic_reactorcasing', ['ABC','DEF','GHI'], {A: 'kubejs:duraluminium_ingot',B: 'immersiveengineering:ingot_hop_graphite',C: 'kubejs:duraluminium_ingot',D: 'immersiveengineering:ingot_hop_graphite',E: 'boss_tools:mars_sand',F: 'immersiveengineering:ingot_hop_graphite',G: 'kubejs:duraluminium_ingot',H: 'immersiveengineering:ingot_hop_graphite',I: 'kubejs:duraluminium_ingot'})
    event.shaped('1x bigreactors:reinforced_reactorcasing', ['ABA', 'BCB', 'ABA'], {A: 'kubejs:angelic_alloy_ingot', B: 'immersiveengineering:ingot_hop_graphite', C: 'bigreactors:basic_reactorcasing'})
    event.shaped('1x bigreactors:basic_reactorglass', ['AAA', 'BCB', 'AAA'], {A: 'minecraft:air', B:'thermal:obsidian_glass', C:'bigreactors:basic_reactorcasing'})
    event.shaped('1x bigreactors:reinforced_reactorglass', ['AAA', 'BCB', 'AAA'], {A: 'minecraft:air', B:'thermal:signalum_glass', C:'bigreactors:reinforced_reactorcasing'})
    event.shaped('1x bigreactors:basic_reactorfuelrod', ['ABA', 'CDC', 'ABA'], {A: 'kubejs:duraluminium_ingot', B: 'immersiveengineering:ingot_hop_graphite', C: 'thermal:obsidian_glass', D: '#forge:ingots/uranium'})
    event.shaped('1x bigreactors:reinforced_reactorfuelrod', ['ABA', 'CDC', 'ABA'], {A: 'kubejs:angelic_alloy_ingot', B: 'immersiveengineering:ingot_hop_graphite', C: 'thermal:signalum_glass', D: 'bigreactors:basic_reactorfuelrod'})
    event.shaped('1x bigreactors:basic_reactorcontrolrod', ['ABA', 'CDC', 'AEA'], {A: 'bigreactors:basic_reactorcasing', B: 'minecraft:redstone', C: 'kubejs:duraluminium_ingot', D: 'minecraft:piston', E: 'immersiveengineering:ingot_hop_graphite'})
    event.shaped('1x bigreactors:reinforced_reactorcontrolrod', ['ABA', 'CDC', 'ABA'], {A: 'bigreactors:reinforced_reactorcasing', B: 'immersiveengineering:ingot_hop_graphite', C: 'kubejs:angelic_alloy_ingot', D: 'bigreactors:basic_reactorcontrolrod'})
    event.shaped('1x bigreactors:basic_reactorsolidaccessport', ['ABA', 'CDC', 'AEA'], {A: 'bigreactors:basic_reactorcasing', B: 'minecraft:hopper', C: 'kubejs:duraluminium_ingot', D: 'minecraft:chest', E: 'minecraft:piston'})
    event.shaped('1x bigreactors:reinforced_reactorsolidaccessport', ['ABA', 'CDC', 'ABA'], {A: 'bigreactors:reinforced_reactorcasing', B: 'immersiveengineering:ingot_hop_graphite', C: 'kubejs:angelic_alloy_ingot', D: 'bigreactors:basic_reactorsolidaccessport'})
    event.shaped('1x bigreactors:basic_reactorredstoneport', ['ABA', 'CDC', 'AEA'], {A: 'bigreactors:basic_reactorcasing', B: 'minecraft:comparator', C: 'kubejs:duraluminium_ingot', D: 'kubejs:fiery_metal_composite', E: 'minecraft:repeater'})
    event.shaped('1x bigreactors:reinforced_reactorredstoneport', ['ABA', 'CDC', 'ABA'], {A: 'bigreactors:reinforced_reactorcasing', B: 'immersiveengineering:ingot_hop_graphite', C: 'kubejs:angelic_alloy_ingot', D: 'bigreactors:basic_reactorredstoneport'})
    event.shaped('1x bigreactors:basic_reactorchargingportfe', ['ABA', 'CDC', 'ABA'], {A:'minecraft:redstone', B: 'kubejs:duraluminium_ingot', C: 'thermal:obsidian_glass', D: 'bigreactors:basic_reactorpowertapfe_active'})
    event.shaped('1x bigreactors:reinforced_reactorchargingportfe', ['ABA', 'CDC', 'ABA'], {A:'immersiveengineering:ingot_hop_graphite', B: 'kubejs:angelic_alloy_ingot', C: 'thermal:signalum_glass', D: 'bigreactors:basic_reactorchargingportfe'})
    event.shaped('1x bigreactors:reinforced_reactorfluidaccessport', ['ABA', 'CDC', 'AEA'], {A:'bigreactors:reinforced_reactorcasing', B: 'minecraft:hopper', C: 'kubejs:angelic_alloy_ingot', D: 'minecraft:bucket', E: 'minecraft:piston'})
    event.shaped('1x bigreactors:reinforced_reactorcomputerport', ['ABA', 'CDC', 'AEA'], {A:'bigreactors:reinforced_reactorcasing', B: 'kubejs:fiery_metal_composite', C: 'kubejs:angelic_alloy_ingot', D: 'bigreactors:graphite_block', E: 'minecraft:glowstone'})
    

    //Turbine
    event.shaped('1x bigreactors:basic_turbinecasing', ['ABA', 'BCB', 'ABA'], {A: 'kubejs:duraluminium_ingot', B: 'bigreactors:cyanite_ingot', C: 'bigreactors:graphite_block'})
    event.shaped('1x bigreactors:reinforced_turbinecasing', ['ABA', 'BCB', 'ABA'], {A: 'kubejs:angelic_alloy_ingot', B: 'bigreactors:cyanite_ingot', C: 'bigreactors:basic_turbinecasing'})
    event.shaped('1x bigreactors:basic_turbineglass', ['AAA', 'BCB', 'AAA'], {A: 'minecraft:air', B:'thermal:obsidian_glass', C: 'bigreactors:basic_turbinecasing'})
    event.shaped('1x bigreactors:reinforced_turbineglass', ['AAA', 'BCB', 'AAA'], {A: 'minecraft:air', B:'thermal:signalum_glass', C: 'bigreactors:reinforced_turbinecasing'})
    event.shaped('1x bigreactors:basic_turbinerotorbearing', ['ABA', 'CDC', 'ABA'], {A: 'kubejs:duraluminium_ingot', B: 'bigreactors:graphite_block', C: 'bigreactors:basic_turbinecasing', D: 'ftbic:rubber'})
    event.shaped('1x bigreactors:reinforced_turbinerotorbearing', ['ABA', 'CDC', 'ABA'], {A: 'kubejs:angelic_alloy_ingot', B: 'bigreactors:graphite_block', C: 'ftbic:rubber', D: 'bigreactors:basic_turbinerotorbearing'})
    event.shaped('1x bigreactors:basic_turbinerotorshaft', ['ABA', 'BCB', 'ABA'], {A: 'minecraft:air', B: 'kubejs:duraluminium_ingot', C: 'bigreactors:cyanite_ingot'})
    event.shaped('1x bigreactors:reinforced_turbinerotorshaft', ['ABA', 'BCB', 'ABA'], {A: 'kubejs:angelic_alloy_ingot', B: 'bigreactors:cyanite_ingot', C: 'bigreactors:basic_turbinerotorshaft'})
    event.shaped('1x bigreactors:basic_turbinerotorblade', ['AAA', 'BCB', 'AAA'], {A: 'minecraft:air', B: 'kubejs:duraluminium_ingot', C: 'bigreactors:cyanite_ingot'})
    event.shaped('1x bigreactors:reinforced_turbinerotorblade', ['ADA', 'BCB', 'ADA'], {A: 'minecraft:air', B: 'kubejs:duraluminium_ingot', C: 'bigreactors:basic_turbinerotorblade',D: 'bigreactors:cyanite_ingot'})
    event.shaped('1x bigreactors:basic_turbineredstoneport', ['ABA', 'CDC', 'AEA'], {A: 'bigreactors:basic_turbinecasing', B: 'minecraft:comparator', C: 'kubejs:duraluminium_ingot', D: 'kubejs:fiery_metal_composite', E: 'minecraft:repeater'})
    event.shaped('1x bigreactors:reinforced_turbineredstoneport', ['ABA', 'CDC', 'ABA'], {A: 'bigreactors:reinforced_turbinecasing', B: 'immersiveengineering:ingot_hop_graphite', C: 'kubejs:angelic_alloy_ingot', D: 'bigreactors:basic_turbineredstoneport'})
    event.shaped('1x bigreactors:basic_turbinechargingportfe', ['ABA', 'CDC', 'ABA'], {A:'minecraft:redstone', B: 'kubejs:duraluminium_ingot', C: 'thermal:obsidian_glass', D: 'bigreactors:basic_turbinepowertapfe_active'})
    event.shaped('1x bigreactors:reinforced_turbinechargingportfe', ['ABA', 'CDC', 'ABA'], {A:'immersiveengineering:ingot_hop_graphite', B: 'kubejs:angelic_alloy_ingot', C: 'thermal:signalum_glass', D: 'bigreactors:basic_turbinechargingportfe'})
    event.shaped('1x bigreactors:reinforced_turbinecomputerport', ['ABA', 'CDC', 'AEA'], {A:'bigreactors:reinforced_turbinecasing', B: 'kubejs:fiery_metal_composite', C: 'kubejs:angelic_alloy_ingot', D: 'bigreactors:graphite_block', E: 'minecraft:glowstone'})

    //Reprocessor
    event.shaped('1x bigreactors:reprocessorcasing', ['ABA', 'BCB', 'ABA'], {A: 'kubejs:angelic_alloy_ingot', B: 'bigreactors:cyanite_ingot', C: 'minecraft:water_bucket'}).replaceIngredient('minecraft:water_bucket', 'minecraft:bucket')
    event.shaped('1x bigreactors:reprocessorglass', ['AAA', 'BCB', 'AAA'], {A: 'minecraft:air', B: 'thermal:signalum_glass', C: 'bigreactors:reprocessorcasing'})
    event.shaped('1x bigreactors:reprocessorcontroller', ['ABA', 'CDC', 'AEA'], {A: 'bigreactors:reprocessorcasing', B: 'minecraft:comparator', C: 'bigreactors:cyanite_ingot', D: 'minecraft:emerald', E: 'kubejs:angelic_alloy_ingot'})
    event.shaped('1x bigreactors:reprocessorfluidinjector', ['ABA', 'CDC', 'ABA'], {A: 'bigreactors:reprocessorcasing', B: 'kubejs:fiery_metal_composite', C: 'kubejs:angelic_alloy_ingot', D: 'minecraft:piston'})
    event.shaped('1x bigreactors:reprocessorcollector', ['ABA', 'CDC', 'ABA'], {A: 'bigreactors:reprocessorcasing', B: 'kubejs:angelic_alloy_ingot', C: 'minecraft:netherite_ingot', D: 'minecraft:hopper'})

    //Fluidizer
    event.shaped('1x bigreactors:fluidizercasing', ['ABA', 'BCB', 'ABA'], {A: 'kubejs:angelic_alloy_ingot', B: '#forge:ingots/uranium', C: 'minecraft:water_bucket'}).replaceIngredient('minecraft:water_bucket', 'minecraft:bucket')
    event.shaped('1x bigreactors:fluidizerglass', ['AAA', 'BCB', 'AAA'], {A: 'minecraft:air', B: 'thermal:signalum_glass', C: 'bigreactors:fluidizercasing'})
})