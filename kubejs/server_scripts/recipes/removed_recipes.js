priority: 11

onEvent('recipes', event => {

	event.remove({id: 'emendatusenigmatica:enigmatic_hammer'})

    event.remove({id: 'create:crafting/kinetics/deployer'})

	event.remove({id: 'create:crafting/kinetics/mechanical_press'})

	event.remove({id: 'twilightforest:equipment/knightmetal_pickaxe'})

	event.remove({id: 'immersiveengineering:crafting/constantan_mix'})
	event.remove({id: 'emendatusenigmatica:alloy_dust/constantan'})
	event.remove({id: 'immersiveengineering:alloysmelter/constantan'})
	event.remove({id: 'tconstruct:smeltery/alloys/molten_constantan'})
	event.remove({id: 'immersiveengineering:crafting/ingot_constantan_from_dust'})
	event.remove({id: 'immersiveengineering:crafting/ingot_constantan_from_dust_from_blasting'})
	event.remove({id: 'emendatusenigmatica:ingot_from_dust/smelting/constantan'})
	event.remove({id: 'emendatusenigmatica:ingot_from_dust/blasting/constantan'})

	event.remove({id: 'emendatusenigmatica:alloy_dust/invar'})
	event.remove({id: 'immersiveengineering:alloysmelter/invar'})
	event.remove({id: 'tconstruct:smeltery/alloys/molten_invar'})
	event.remove({id: 'immersiveengineering:crafting/ingot_invar_from_dust'})
	event.remove({id: 'immersiveengineering:crafting/ingot_invar_from_dust_from_blasting'})
	event.remove({id: 'emendatusenigmatica:ingot_from_dust/smelting/invar'})
	event.remove({id: 'emendatusenigmatica:ingot_from_dust/blasting/invar'})

	event.remove({id: 'boss_tools:engine_frame'})
	event.remove({id: 'boss_tools:iron_engine'})
	event.remove({id: 'boss_tools:rocket_nose_cone'})
	event.remove({id: 'boss_tools:iron_tank'})
	event.remove({id: 'boss_tools_giselle_addon:compat/immersiveengineering/metalpress/compressed_steel'})
	event.remove({id: 'boss_tools:rocket_fins'})
	event.remove({id: 'boss_tools:compressing/compressed_steel'})
	event.remove({id: 'boss_tools:compressing/compressed_silicon'})
	event.remove({id: 'boss_tools:compressing/compressed_desh'})
	event.remove({id: 'boss_tools:nasa_workbench'})
	event.remove({id: 'create:smelting/scoria'})

	event.remove({id: 'ftbic:blasting/industrial_grade_metal'})
	event.remove({id: 'ftbic:smelting/industrial_grade_metal'})
	
	event.remove({id: 'ars_nouveau:sunrise_2'})
	event.remove({id: 'ars_nouveau:moonfall_2'})

	event.remove({id: 'ceramics:unfired_clay_bucket'})
  event.remove({id:"minecraft:flint_and_steel"})
	
  event.remove({id: 'minecraft:ender_eye'})
  event.remove({id:"astralsorcery:infuser/ender_pearl"})
  event.remove({id:"tconstruct:smeltery/casting/ender/eye"})

  event.remove({id:"boss_tools:workbenching/tier2"})
  event.remove({id:"boss_tools:oxygen_mask"})
  event.remove({id:"boss_tools:space_suit"})
  event.remove({id:"boss_tools:oxygen_tank"})
  event.remove({id:"boss_tools:oxygen_gear"})
  event.remove({id:"boss_tools:space_leggings"})
  event.remove({id:"boss_tools:space_boots"})
  
  event.remove({id:"tconstruct:smeltery/alloys/molten_netherite"})
  event.remove({id:"minecraft:netherite_ingot"})


})

onEvent('recipes', event => {
  // 1. Список всех тегов и предметов досок
  const plankItems = [
    '#minecraft:planks',
    '#forge:planks',
    '#biomesoplenty:planks',
    '#twilightforest:planks',
    'ars_nouveau:archwood_planks',
    '#tconstruct:planks'
  ]

  // 2. Удаление рецептов
  plankItems.forEach(plank => {
    // Удаляем рецепты, где эти доски являются результатом
    event.remove({ output: plank })
    
    // Альтернативный вариант для более точного удаления:
    // event.remove({ output: plank, input: '#forge:logs' })
    // event.remove({ output: plank, input: '#minecraft:logs' })
  })

  // 3. Ваш код добавления новых рецептов рубки
  function getPlankId(logId) {
    const [namespace, path] = logId.split(':')
    
    if (logId.includes('archwood')) {
      return 'ars_nouveau:archwood_planks'
    }
    
    let woodType = path
    woodType = woodType.replace('_log', '')
    woodType = woodType.replace('_wood', '')
    woodType = woodType.replace('_stem', '')
    woodType = woodType.replace('_hyphae', '')
    woodType = woodType.replace('_bark', '')
    
    if (woodType === path) return null
    
    return `${namespace}:${woodType}_planks`
  }

  const allLogs = Ingredient.of('#kubejs:all_logs').getStacks().toArray()
  allLogs.forEach(log => {
    const logId = log.getId()
    const plankId = getPlankId(logId)
    
    if (plankId && Item.exists(plankId)) {
      event.custom({
        "type": "primutils:chopping",
        "chopAmounts": 2,
        "input": {
          "item": logId
        },
        "output": {
          "item": plankId,
          "count": 4
        }
      })
    }
  })
})
onEvent('recipes', event => {
  const plankItems = [
    '#minecraft:planks',
    '#forge:planks',
    '#biomesoplenty:planks',
    '#twilightforest:planks',
    'ars_nouveau:archwood_planks',
    '#tconstruct:planks'
  ];
  
  // Удаление стандартных рецептов крафта
  plankItems.forEach(plank => event.remove({ output: plank }));
  
  // Удаление рецептов обтесывания из Create
  plankItems.forEach(plank => {
    event.remove({ type: 'create:cutting', output: plank });
  });
  
  // Удаление всех рецептов обтесывания
  event.remove({ id: /create:cutting\/.+/ });



});