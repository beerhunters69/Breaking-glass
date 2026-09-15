priority: 10

onEvent('recipes', event => {

  //Misc  
  event.remove({id:'bigreactors:misc/wrench'})

  //Reactor
  event.remove({id: 'bigreactors:reactor/basic/casing'})
  event.remove({id: 'bigreactors:reactor/basic/glass'})
  event.remove({id: 'bigreactors:reactor/basic/fuelrod_ingots_uranium'})
  event.remove({id: 'bigreactors:reactor/basic/controlrod'})
  event.remove({id: 'bigreactors:reactor/basic/solidaccessport'})
  event.remove({id: 'bigreactors:reactor/basic/redstoneport'})
  event.remove({id: 'bigreactors:reactor/basic/chargingfe'})
  event.remove({id: 'bigreactors:reactor/reinforced/casing'})
  event.remove({id: 'bigreactors:reactor/reinforced/casing_upgrade'})
  event.remove({id: 'bigreactors:reactor/reinforced/glass'})
  event.remove({id: 'bigreactors:reactor/reinforced/fuelrod_ingots_uranium'})
  event.remove({id: 'bigreactors:reactor/reinforced/controlrod'})
  event.remove({id: 'bigreactors:reactor/reinforced/solidaccessport'})
  event.remove({id: 'bigreactors:reactor/reinforced/fluidaccessport'})
  event.remove({id: 'bigreactors:reactor/reinforced/computerport'})  
  event.remove({id: 'bigreactors:reactor/reinforced/redstoneport'})
  event.remove({id: 'bigreactors:reactor/reinforced/chargingfe'})

  //Turbine
  event.remove({id: 'bigreactors:turbine/basic/casing'})
  event.remove({id: 'bigreactors:turbine/basic/glass'})
  event.remove({id: 'bigreactors:turbine/basic/bearing'})
  event.remove({id: 'bigreactors:turbine/basic/shaft'})
  event.remove({id: 'bigreactors:turbine/basic/blade'})
  event.remove({id: 'bigreactors:turbine/basic/redstoneport'})
  event.remove({id: 'bigreactors:turbine/basic/chargingfe'})
  event.remove({id: 'bigreactors:turbine/reinforced/casing'})
  event.remove({id: 'bigreactors:turbine/reinforced/casing_upgrade'})
  event.remove({id: 'bigreactors:turbine/reinforced/glass'})
  event.remove({id: 'bigreactors:turbine/reinforced/bearing'})
  event.remove({id: 'bigreactors:turbine/reinforced/shaft'})
  event.remove({id: 'bigreactors:turbine/reinforced/blade'})
  event.remove({id: 'bigreactors:turbine/reinforced/computerport'})
  event.remove({id: 'bigreactors:turbine/reinforced/redstoneport'})
  event.remove({id: 'bigreactors:turbine/reinforced/chargingfe'})

  //Reprocessor
  event.remove({id: 'bigreactors:reprocessor/casing'})
  event.remove({id: 'bigreactors:reprocessor/glass'})
  event.remove({id: 'bigreactors:reprocessor/controller'})  
  event.remove({id: 'bigreactors:reprocessor/fluidinjector'})
  event.remove({id: 'bigreactors:reprocessor/collector'})

  //Fluidizer
  event.remove({id: 'bigreactors:fluidizer/casing'})
  event.remove({id: 'bigreactors:fluidizer/glass'})
})