onEvent('recipes', event => {
    event.custom(
        {
            "type": "ftbic:extruding",
            "inputItems": [
                {
                    "ingredient": {
                        "tag": "forge:plates/netherite"
                    },
                    "count": 1
                }
            ],
            "outputItems": [
                {
                    "item": "kubejs:netherite_wire",
                    "count": 2
                }
            ]
        }
    )
}
)