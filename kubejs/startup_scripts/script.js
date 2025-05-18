// priority: 0

console.info("Хабиба Мир запустился")

onEvent("item.registry", event => {
	// Register new items here
	// event.create("example_item").displayName("Example Item")
	
	event.create("tf_portal_item").displayName("Interdimensional transmitter")
	event.create("incomplete_tf_portal_item").displayName("Parts of the transmitter")
	
})

onEvent("block.registry", event => {
	// Register new blocks here
	// event.create("example_block").material("wood").hardness(1.0).displayName("Example Block")
})

			// "minecraft:coal_ore"
			// "minecraft:iron_ore"
			// "minecraft:gold_ore",
            // "minecraft:diamond_ore",
            // "minecraft:lapis_ore",
            // "minecraft:redstone_ore",
            // "minecraft:emerald_ore",
            // "minecraft:nether_quartz_ore",
            // "appliedenergistics2:quartz_ore",
            // "appliedenergistics2:charged_quartz_ore",
            // "immersiveengineering:ore_copper",
            // "immersiveengineering:ore_aluminum",
            // "immersiveengineering:ore_silver",
            // "immersiveengineering:ore_lead",
            // "immersiveengineering:ore_nickel",
            // "immersiveengineering:ore_uranium",
            // "create:zinc_ore",
            // "create:copper_ore",
            // "draconicevolution:overworld_draconium_ore",
            // "astralsorcery:rock_crystal_ore",
            // "draconicevolution:nether_draconium_ore",
            // "draconicevolution:end_draconium_ore",
            // "mekanism:lead_ore",
            // "mekanism:fluorite_ore",
            // "mekanism:copper_ore",
            // "mekanism:tin_ore",
            // "mekanism:osmium_ore",
            // "mekanism:uranium_ore",
            // "bigreactors:anglesite_ore",
            // "bigreactors:yellorite_ore",
            // "bigreactors:benitoite_ore",
            // "tconstruct:copper_ore",
            // "tconstruct:cobalt_ore"