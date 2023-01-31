onEvent("recipes",event =>{
    event.remove({id:'minecraft:oak_planks'})
})

onEvent('player.tick',event =>{
    
    let x = event.player.x
    let y = event.player.y
    let z = event.player.z
    //event.player.runCommand("say "+x+" "+y+" "+z)
})
onEvent('block.break',event =>{
    let block_break_pos = event.block.pos
    event.server.tell(pos)
})

//潜行右键雪，掉落雪，雪减少一层，效果挖掘疲劳
/*
var snow_right_click_time = 1 
onEvent('block.right_click',event =>{
    if (!event.player.isHoldingInAnyHand('#minecraft:all') 
    && event.player.crouching 
    && event.block.id == 'minecraft:snow' 
    && event.server.overworld 
    && !snow_right_click_time == 1
      )
    {   
        var block_right_blockstate = event.block.blockState.isLadder
        let block_right_click_pos = event.block.pos;
        event.player.runCommand(
        "say "
        +block_right_click_pos
        )
        snow_right_click_time++
    }
    else{
        snow_right_click_time = 0
    }
})
*/