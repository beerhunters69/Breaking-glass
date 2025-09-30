onEvent('recipes', event => {
    event.custom(
        {
            "type": "pneumaticcraft:assembly_laser",
            "input": {
                "item": 'kubejs:incomplete_irirdium_circuit',
            },
            "result": {
                "item": 'ftbic:iridium_circuit',
            },
            "program": "laser"
        }
    )
})