// priority: 0

console.info("Хабиба Мир запустился")

onEvent("item.registry", event => {
	// Register new items here
	// event.create("example_item").displayName("Example Item")
	
	event.create("tf_portal_item").displayName("Interdimensional transmitter")
	event.create("incomplete_tf_portal_item").displayName("Parts of the transmitter")
    event.create("zinc_hand").displayName("Zinc hand")
	
	event.create("duraluminium_ingot").displayName("Duraluminium ingot")
	event.create("duraluminium_dust").displayName("Duraluminium dust")
	event.create('duraluminium_base_dust').displayName("Duraluminium base dust")
})

onEvent("block.registry", event => {
	// Register new blocks here
	// event.create("example_block").material("wood").hardness(1.0).displayName("Example Block")
})

	