onEvent('fluid.registry', event => {
  event.create('magic_fluid_1').thinTexture(0xFC6087).displayName('液态魔力精华').bucketColor(0xFC6087)
  event.create('magic_fluid_2').thinTexture(0x00FFFF).displayName('液态魔力').bucketColor(0x00FFFF)
      
  event.create('slush').thickTexture(0xF0FFFF).displayName('雪泥').bucketColor(0xF0FFFF)
  event.create('meat_stew').thickTexture(0x8B2323).displayName('炖肉浓汤').bucketColor(0x8B2323)
  event.create('ore_forming_water').thickTexture(0x44DCFF).displayName('成矿水').bucketColor(0x44DCFF)
})