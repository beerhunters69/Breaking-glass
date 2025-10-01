onEvent('recipes', event => {
    event.custom(
        {
            "type": "pneumaticcraft:assembly_laser",
            "input": {
                "item": 'kubejs:incomplete_iridium_circuit',
            },
            "result": {
                "item": 'ftbic:iridium_circuit',
            },
            "program": "laser"
        }
    )
    event.custom(
        {
            "type": "pneumaticcraft:assembly_laser",
            "input": {
                "item": 'minecraft:ender_pearl',
            },
            "result": {
                "item": 'kubejs:engraved_pearl',
            },
            "program": "laser"
        }
    )
})