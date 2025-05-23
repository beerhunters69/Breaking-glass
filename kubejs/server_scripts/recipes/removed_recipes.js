priority: 11
onEvent('recipes', event => {

	//убрать молот из эмендатус энигматики
	event.remove({id: 'emendatusenigmatica:enigmatic_hammer'})
    event.remove({id: 'create:crafting/kinetics/deployer'})
	event.remove({id: 'create:crafting/kinetics/mechanical_press'})
	event.remove({id: 'twilightforest:equipment/knightmetal_pickaxe'})

})
