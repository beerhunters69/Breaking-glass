onEvent('tags.items', event => {
  event.add('kubejs:chopping_logs', [
    '#minecraft:logs',
    '#forge:logs',
    '#biomesoplenty:logs',
    '#twilightforest:logs',
    '#tconstruct:logs',
    '#forge:logs/archwood'
  ])
})

onEvent('recipes', event => {
  // 1. Полностью очищаем старые рецепты рубки
  event.remove({ type: 'primutils:chopping' })
  console.log('Removed all existing chopping recipes')

  // 2. Функция преобразования ID бревна → досок
  const getPlankId = logId => {
    const [namespace, path] = logId.split(':')
    
    // Специальные случаи
    if (logId.includes('archwood')) return 'ars_nouveau:archwood_planks'
    
    // Общий случай
    const woodType = path
      .replace(/_log.*/, '')
      .replace(/_wood.*/, '')
      .replace(/_stem.*/, '')
      .replace(/_hyphae.*/, '')
    return `${namespace}:${woodType}_planks`
  }

  // 3. Добавляем новые рецепты
  Ingredient.of('#kubejs:chopping_logs').itemIds.forEach(logId => {
    const plankId = getPlankId(logId)
    
    if (Item.exists(plankId)) {
      event.custom({
        type: 'primutils:chopping',
        chopAmounts: 1, // Количество ударов (можно менять)
        input: { item: logId },
        output: { 
          item: plankId,
          count: 4 // Количество досок на выходе
        }
      })
      event.shapeless( Item.of(plankId), [logId])
      event.custom(
      {
        "type":"immersiveengineering:sawmill",
        "secondaries":[
          {"output":{"tag":"forge:dusts/wood"},
          "stripping":false}],
          "result":{"item":plankId,"count":6},//R
          "energy":1600,"input":
          [
            {"item":logId}
          ],
      }
      )
      console.log(`Added: ${logId} → ${plankId} (chopAmounts=3)`)
    }
  })
})


// onEvent('recipes', event => {
//     allLogs.forEach(log => {
//     event.custom({
//         "type": "primutils:chopping",
//         "chopAmounts": 1,
//         "input": {
//           "item": logId
//         },
//         "output": {
//           "item": plankId,
//           "count": 4
//         }
//       })
//        })
// })