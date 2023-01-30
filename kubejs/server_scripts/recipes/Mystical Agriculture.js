// 监听玩家登录事件 player.logged_in
onEvent('player.logged_in', event => {
    if (!event.player.stages.has('starting_items')) {
        event.player.stages.add('starting_items')
        event.player.give('4x mysticalagriculture:mgaic_seeds')
        event.player.give(Item.of('patchouli:guide_book', '{"patchouli:book":"patchouli:guide_book"}'))
    }
  })
onEvent('recipes',event =>{
    event.remove({mod: 'mysticalagriculture'})
    event.remove({mod: 'mysticalagradditions'})
})