onEvent('recipes', event => {
  event.custom(
    {
      "type": "immersiveengineering:refinery",
      "result": { "fluid": 'pneumaticcraft:plastic', "amount": 2000 },
      "input0": { "tag": "forge:lubricant", "amount": 1000 },
      "input1": { "tag": "forge:molten/coal", "amount": 1000 },
      "energy": 3200
    }
  )
  event.custom(
    {
      "type": "immersiveengineering:refinery",
      "result": { "fluid": 'kubejs:molten_rubber', "amount": 2000 },
      "input0": { "tag": "forge:latex", "amount": 1000 },
      "input1": { "tag": "minecraft:water", "amount": 1000 },
      "energy": 3200
    }
  )
})