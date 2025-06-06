onEvent('recipes', event => {
    event.custom(
    {
  "type": "thermal:compression_fuel",
  "ingredient": {
    "fluid": "immersivepetroleum:gasoline",
    "amount": 1000
  },
  "energy": 1200000,
  "conditions": [
    {
      "type": "forge:mod_loaded",
      "modid": "immersivepetroleum"
    }
  ]
})
})