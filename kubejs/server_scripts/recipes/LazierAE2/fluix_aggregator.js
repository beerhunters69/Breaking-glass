onEvent('recipes', event => {
    event.custom(
      {

        "type": "lazierae2:aggregator",
        "process_time": 120,
        "energy_cost": 2000,
        "output": {
          "item": "lazierae2:resonating_gem"
        },
        "input": [
          {
            "item": "appliedenergistics2:sky_dust"
          },
          {
            "tag": "forge:gems/mana"
          },
          {
            "item": "emendatusenigmatica:ender_dust"
          }
        ]
      }
    )
    event.custom(
      {

        "type": "lazierae2:aggregator",
        "process_time": 30,
        "energy_cost": 500,
        "output": {
          "item": "lazierae2:resonating_gem"
        },
        "input": [
          {
            "item": "appliedenergistics2:sky_dust"
          },
          {
            "item": "minecraft:diamond"
          },
          {
            "item": "emendatusenigmatica:ender_dust"
          }
        ]
      }
    )
})