onEvent('recipes', event => {
    // 1. Удаляем все старые рецепты распиловки бревен
    event.remove({type: 'create:cutting', input: '#minecraft:logs'})
    console.log('Removed all existing log cutting recipes')

    // 2. Функция для определения досок по бревну
    const getPlanks = logId => {
        const [namespace, path] = logId.split(':')
        
        // Специальные случаи
        if (path.includes('archwood')) return 'ars_nouveau:archwood_planks'
        if (path.includes('blazewood')) return 'twilightforest:blaze_planks'
        
        // Стандартная обработка
        const woodType = path
            .replace(/_log.*/, '')
            .replace(/_wood.*/, '')
            .replace(/_stem/, '')
            .replace(/_hyphae/, '')
        
        return `${namespace}:${woodType}_planks`
    }

    // 3. Добавляем новые рецепты
    Ingredient.of('#minecraft:logs').itemIds.forEach(logId => {
        const plankId = getPlanks(logId)
        
        if (Item.exists(plankId)) {
            event.recipes.createCutting(
                Item.of(plankId, 4), // 4 доски на выходе
                [logId]              // 1 бревно на входе
            )
            .id(`kubejs:cutting/${logId.replace(':', '_')}`)
            .processingTime(10) // 2.5 секунды
            
            console.log(`Added Create cutting: ${logId} → 4x ${plankId}`)
        }
    })
})

onEvent('recipes', event => {
    const allPlanks = Ingredient.of('#minecraft:planks').getStacks().toArray()

     allPlanks.forEach(plank => {
            event.recipes.create.cutting('4x minecraft:stick', plank).processingTime(50) 
        })
})


