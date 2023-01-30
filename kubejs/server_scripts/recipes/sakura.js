
onEvent('recipes',event =>{
    event.remove({id:'sakura:stone_mortar'})
    event.remove({id:'sakura:plank_bamboo'})
    //竹材
    event.remove({id:'sakura:lumber_bamboo'})
    event.shapeless('sakura:lumber_bamboo', '3x minecraft:bamboo')
    
    
    
    
    //石磨
    event.custom({
        "type": "sakura:stone_mortar",
        ingredients: [
            Ingredient.of('minecraft:wheat').toJson(),//输入内容
            Ingredient.of('minecraft:wheat').toJson()
        ],
        results: [//这里的 results(包括所有类似的位置的双引号都是可加可不加的)
            Item.of('2x minecraft:wheat_seeds').toResultJson(),//100%输出苹果
            Item.of('minecraft:wheat_seeds').withChance(0.3).toResultJson()
        ],
        processingTime: 100 //所用时间
    })

    //砧板
    event.custom({
        "type": "sakura:chopping",
        ingredients: 
            Ingredient.of('minecraft:wheat').toJson()
        

    })
})