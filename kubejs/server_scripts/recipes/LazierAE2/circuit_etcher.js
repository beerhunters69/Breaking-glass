onEvent('recipes', event => {
    event.custom(
        {
        "type": "lazierae2:etcher",
        "process_time": 100,
        "energy_cost": 1000,
        "output": {
            "item": "appliedenergistics2:engineering_processor"
        },
        "input": [
            {
            "tag": "forge:gems/mana"
            },
            {
            "tag": "forge:dusts/redstone"
            },
            {
            "tag": "forge:silicon"
            }
        ]
        }
    )
})