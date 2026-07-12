onEvent('recipes', event => {
    event.shapeless(
        "refinedstorage:raw_basic_processor", // arg 1: output
        [
            'refinedstorage:processor_binding',
            'minecraft:iron_ingot',
            'minecraft:redstone', 
            '#forge:silicon',	       // arg 2: the array of inputs
        ]
        ).stage("three")

    event.shapeless(
        "refinedstorage:raw_improved_processor", // arg 1: output
        [
            'refinedstorage:processor_binding',
            'minecraft:gold_ingot',
            'minecraft:redstone', 
            '#forge:silicon',	       // arg 2: the array of inputs
        ]
        ).stage("three")

    event.shapeless(
        "refinedstorage:raw_advanced_processor", // arg 1: output
        [
            'refinedstorage:processor_binding',
            '#forge:gems/mana',
            'minecraft:redstone', 
            '#forge:silicon',	       // arg 2: the array of inputs
        ]
        ).stage("three")
})

