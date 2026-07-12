// priority: 0

onEvent('jei.hide.items', event => {
	// Hide items in JEI here
	// event.hide('minecraft:cobblestone')
	event.hide(item.of('appliedenergistics2:facade').ignoreNBT())
	event.hide(item.of('ae2wtlib:wireless_universal_terminal').ignoreNBT())
})