// priority: 1
onEvent("item.registry", event => {
	// Register new items here
	// event.create("example_item").displayName("Example Item")
	
	event.create("tf_portal_item").displayName("Interdimensional transmitter")
	event.create("incomplete_tf_portal_item").displayName("Parts of the transmitter")
    event.create("zinc_hand").displayName("Zinc hand")
	event.create("duraluminium_ingot").displayName("Duraluminium ingot")
	event.create("duraluminium_dust").displayName("Duraluminium dust")
	event.create('duraluminium_base_dust').displayName("Duraluminium base dust")
	event.create("duraluminium_gear").displayName("Duraluminium gear")
	event.create("duraluminium_plate").displayName("Duraluminium plate")
	event.create("tf_inactive_portal_item").displayName("Inactive interdimensional transmitter")
	event.create("angelic_alloy_ingot").displayName("Angelic Alloy ingot")
	event.create("angelic_alloy_plate").displayName("Angelic Alloy plate")
	event.create("netherite_base").displayName("Netherite Base")
	event.create("wgnc").displayName("Weapon Grade Netherite Compound")
	event.create("fiery_metal_composite").displayName("Fiery metal composite")

})

onEvent("block.registry", event => {
	// Register new blocks here
	// event.create("example_block").material("wood").hardness(1.0).displayName("Example Block")
})

