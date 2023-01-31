//mekanism:brine     盐水
onEvent('recipes',event =>{
//木头
event.custom({
        "type": "lychee:item_inside",
        "item_in": [
            {"item": 'mysticalagriculture:wood_essence'},
            {"item": 'mysticalagriculture:wood_essence'},
            {"item": 'mysticalagriculture:wood_essence'},
            {"item": 'mysticalagriculture:wood_essence'},
            {"item": 'mysticalagriculture:wood_essence'},
            {"item": 'mysticalagriculture:wood_essence'},
            {"item": 'minecraft:wheat_seeds'},
            {"item": 'mysticalagriculture:mgaic_essence'}
        ],
        "block_in": {
            "blocks": ['water'],
        },
        "post": [
            {
                "type": "drop_item",
                "item": 'minecraft:oak_log'
            }
        ]
})
//右键耕地
event.custom({
        "type": "lychee:block_interacting",
        "item_in": {
            "item": "air"
        },
        "block_in": 'minecraft:dirt',
        "contextual": [
            {"type":"is_sneaking",},
            
            {"type": "location",
            "predicate": {
                "dimension": "overworld",
            }
        }
    ],
        "post": 
            {
                "type": "place",
                "block": 'minecraft:farmland'
            }
})
//右键雪
event.custom({
    "type": "lychee:block_interacting",
    "item_in": {
        "item": "air"
    },
    "block_in": 'minecraft:snow',
    "contextual": [
        {"type":"is_sneaking",},
        {"type": "location",
        "predicate": {
            "dimension": "overworld",
            }
        }],
    "post": [
            {
                "type": "place",
                "block": 'minecraft:air'},
            {
                "type": "drop_item",
                "item": 'minecraft:snowball'
            },
            {
                "type": "drop_item",
                "item": 'minecraft:snowball',
                "contextual": {
                    "type": "chance",
                    "chance": 0.8
                }
            },
            {
                "type": "execute",
                "command": "effect give @s minecraft:mining_fatigue 5 3",
                "hide": true
            }]
})
//水
event.custom({
    "type": "lychee:item_inside",
    "item_in": [
        {"item": 'mysticalagriculture:water_essence'},
        {"item": 'mysticalagriculture:water_essence'},
        {"item": 'mysticalagriculture:water_essence'},
        {"item": 'mysticalagriculture:water_essence'},
        {"item": 'mysticalagriculture:mgaic_essence'}
    ],
    "block_in": {
        "blocks": ['air'],
    },
    "post": [
        {
            "type": "place",
            "block": 'minecraft:water'
        },
        {
            "type": "execute",
            "command": "ftbquests change_progress @p complete 6DC9203DF98E68F5",
            "hide": true
        }
    ]
})
//泥土精华
event.custom({
    "type": "lychee:item_inside",
    "item_in": [
        {"item": 'mysticalagriculture:earth_essence'},
        {"item": 'mysticalagriculture:earth_essence'},
        {"item": 'mysticalagriculture:earth_essence'},
        {"item": 'mysticalagriculture:earth_essence'},
        {"item": 'mysticalagriculture:earth_essence'},
        {"item": 'mysticalagriculture:mgaic_essence'},
    ],
    "block_in": {
        "blocks": ['water'],
    },
    "post": {
            "type": "drop_item",
            "item": 'mysticalagriculture:dirt_essence'
        }
})
//小麦种子
event.custom({
    "type": "lychee:item_inside",
    "item_in": {
        "item":'mysticalagriculture:mgaic_seeds',

    },
    "block_in": {
        "blocks": ['water'],
    },
    "post": [{
            "type": "drop_item",
            "item": 'minecraft:wheat_seeds'
        }]
})
event.custom({
    "type": "lychee:item_inside",
    "item_in": {
        "item":'mysticalagriculture:earth_seeds',

    },
    "block_in": {
        "blocks": ['water'],
    },
    "post": [{
            "type": "drop_item",
            "item": 'minecraft:wheat_seeds'
        }]
})
event.custom({
    "type": "lychee:item_inside",
    "item_in": {
        "item":'mysticalagriculture:water_seeds',

    },
    "block_in": {
        "blocks": ['water'],
    },
    "post": [{
            "type": "drop_item",
            "item": 'minecraft:wheat_seeds'
        }]
})
//泥土
event.custom({
    "type": "lychee:item_inside",
    "item_in": [
        {"item": 'mysticalagriculture:dirt_essence'},
        {"item": 'mysticalagriculture:dirt_essence'},
        {"item": 'mysticalagriculture:dirt_essence'},
        {"item": 'mysticalagriculture:dirt_essence'},
        {"item": 'mysticalagriculture:dirt_essence'},
        {"item": 'mysticalagriculture:dirt_essence'},
        {"item": 'mysticalagriculture:mgaic_essence'}
    ],
    "block_in": {
        "blocks": ['water'],
    },
    "post": [{
            "type": "drop_item",
            "item": 'minecraft:dirt'
        }]
})
//活化水晶碎片
event.custom({
    "type": "lychee:item_inside",
    "item_in": [
        {"item": 'mysticalagriculture:earth_essence'},
        {"item": 'mysticalagriculture:dirt_essence'},
        {"item": 'mysticalagriculture:dirt_essence'},
        {"item": 'mysticalagriculture:water_essence'},
        {"item": 'mysticalagriculture:water_essence'},
        {"item": 'mysticalagriculture:water_essence'},
        {"item": 'mysticalagriculture:inferium_essence'}


        

    ],
    "block_in": {
        "blocks": ['water'],
    },
    "post": [{
            "type": "drop_item",
            "item": 'mysticalagriculture:prosperity_shard'
        }]
})
//下级精华
event.custom({
    "type": "lychee:item_inside",
    "item_in": [
        {"item": 'mysticalagriculture:earth_essence'},
        {"item": 'mysticalagriculture:earth_essence'},
        {"item": 'mysticalagriculture:earth_essence'},
        {"item": 'mysticalagriculture:dirt_essence'},
        {"item": 'mysticalagriculture:dirt_essence'},
        {"item": 'mysticalagriculture:water_essence'},
        {"item": 'mysticalagriculture:mgaic_essence'}
    ],
    "block_in": {
        "blocks": ['water'],
    },
    "post": [{
            "type": "drop_item",
            "item": 'mysticalagriculture:inferium_essence'}]
})
event.custom({
    "type": "lychee:block_clicking",
    "item_in": {
        "item": "mysticalagriculture:mgaic_essence"
    },
    "block_in": 'mysticalagriculture:prosperity_ingot_block',
    "contextual": 
        {"type": "location",
        "predicate": {
            "dimension": "overworld",
        }
    },
    "post": 
        [
            {"type":"drop_item",
            "item":'mysticalagriculture:prosperity_shard'
        },
            {
            "type": "place",
            "block": 'air',
            "contextual": {
                "type": "chance",
                "chance": 0.05
            }
        },
        {
            "type": "damage_item"
        },
        {
            "type": "execute",
            "command": "clear @s mysticalagriculture:mgaic_essence 1",
            "hide": false
        }
    ]
})
//泥土种子
event.custom({
    "type": "lychee:block_clicking",
    "item_in": {
        "item": 'mysticalagriculture:prosperity_seed_base'
    },
    "block_in": 'minecraft:dirt',
    "contextual": 
        {"type": "location",
        "predicate": {
            "dimension": "overworld",
        }
    },
    "post": 
        [{
            "type":"drop_item",
            "item":'mysticalagriculture:dirt_seeds',
            "contextual": {
                "type": "chance",
                "chance": 0.7
            }
        },
            {
            "type": "place",
            "block": 'air'
        },
        {
            "type": "damage_item"
        },
        {
            "type": "execute",
            "command": "clear @s mysticalagriculture:prosperity_seed_base 1",
            "hide": false
        }]
})
//木精华
event.custom({
    "type": "lychee:item_inside",
    "item_in": [
        {"item": 'mysticalagriculture:earth_essence'},
        {"item": 'mysticalagriculture:earth_essence'},
        {"item": 'mysticalagriculture:earth_essence'},
        {"item": 'mysticalagriculture:dirt_essence'},
        {"item": 'mysticalagriculture:dirt_essence'},
        {"item": 'mysticalagriculture:inferium_essence'},
        {"item": 'mysticalagriculture:inferium_essence'},
        {"item": 'mysticalagriculture:inferium_essence'},
        {"item": 'mysticalagriculture:inferium_essence'},
        {"item": 'minecraft:dirt'},
        {"item": 'mysticalagriculture:mgaic_essence'},
        {"item": 'mysticalagriculture:mgaic_essence'}
        
    ],
    "block_in": {
        "blocks": ['water'],
    },
    "post": [{
            "type": "drop_item",
            "item": 'mysticalagriculture:wood_essence'
        }]
})
//木种子
event.custom({
    "type": "lychee:item_inside",
    "item_in": [
        {"item": 'mysticalagriculture:inferium_essence'},
        {"item": 'mysticalagriculture:inferium_essence'},
        {"item": 'mysticalagriculture:inferium_essence'},
        {"item": 'mysticalagriculture:inferium_essence'},
        {"item": 'mysticalagriculture:earth_essence'},
        {"item": 'mysticalagriculture:water_essence'},
        {"item": 'mysticalagriculture:dirt_essence'},
        {"item": 'mysticalagriculture:prosperity_seed_base'},
        {"item": 'mysticalagriculture:wood_essence'},
        {"item": 'mysticalagriculture:wood_essence'},
        {"item": 'mysticalagriculture:wood_essence'},
        {"item": 'mysticalagriculture:wood_essence'},
        {"item": 'mysticalagriculture:mgaic_essence'},
        {"item": 'mysticalagriculture:mgaic_essence'}
    ],
    "block_in": {
        "blocks": ['water'],
    },
    "post": [{
            "type": "drop_item",
            "item": 'mysticalagriculture:wood_seeds'
        }]
})
//石头精华
//泥土转石头
event.custom({
    "type": "lychee:block_interacting",
    "item_in": {
        "item": 'mysticalagriculture:mgaic_essence'
    },
    "block_in": 'minecraft:dirt',
    "contextual": 
        {"type": "location",
        "predicate": {
            "dimension": "overworld",
        }
    },
    "post": 
        [
            {
            "type": "place",
            "block": 'minecraft:stone'
        },
        {
            "type": "execute",
            "command": "clear @s mysticalagriculture:mgaic_essence 1",
            "hide": false
        }]
})
//石头转石头精华
event.custom({
    "type": "lychee:block_clicking",
    "item_in": {
        "item": 'mysticalagriculture:mgaic_essence'
    },
    "block_in": 'minecraft:stone',
    "contextual": 
        {"type": "location",
        "predicate": {
            "dimension": "overworld",
        }
    },
    "post": 
        [
            {
            "type": "place",
            "block": 'air'
        },
        {
            "type":"drop_item",
            "item":'mysticalagriculture:stone_essence'
        },
        {
            "type": "damage_item"
        },
        {
            "type": "execute",
            "command": "clear @s mysticalagriculture:mgaic_essence 1",
            "hide": false
        }]
})
//活化种子基底
event.custom({
    "type": "lychee:item_inside",
    "item_in": [
        {"item": 'mysticalagriculture:prosperity_shard'},
        {"item": 'mysticalagriculture:prosperity_shard'},
        {"item": 'mysticalagriculture:prosperity_shard'},
        {"item": 'mysticalagriculture:prosperity_shard'},
        {"item": 'mysticalagriculture:prosperity_shard'},
        {"item": 'mysticalagriculture:prosperity_shard'},
        {"item": 'mysticalagriculture:prosperity_shard'},
        {"item": 'mysticalagriculture:prosperity_shard'},
        {"item": 'minecraft:wheat_seeds'}
    ],
    "block_in": {
        "blocks": ["minecraft:water"],
    },
    "post": [{
            "type": "drop_item",
            "item": 'mysticalagriculture:prosperity_seed_base'
        }]
})


})