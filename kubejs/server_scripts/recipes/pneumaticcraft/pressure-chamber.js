onEvent('recipes', event => {
    event.custom(

        {
            "type": "pneumaticcraft:pressure_chamber",
            "inputs": [
                {
                    "type": "pneumaticcraft:stacked_item",
                    "item": 'ftbic:antimatter',
                    "count":4
                },
                {
                    "item": 'appliedenergistics2:singularity'
                }
            ],
            "pressure": 17.0,
            "results": [
                {
                    "item": "kubejs:collapsed_singularity"
                }
            ]
        }
    )

})