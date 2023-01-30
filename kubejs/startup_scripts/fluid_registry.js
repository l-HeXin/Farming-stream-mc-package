onEvent('fluid.registry', event => {
    // These first examples are 1.16.5 and 1.18.2 syntax
    
    // Basic "thick" (looks like lava) fluid with red tint
    event.create('thick_fluid')
      .thickTexture(0xFF0000)
      .bucketColor(0xFF0000)
      .displayName('Thick Fluid')
        .luminosity(8)
                 
    // Basic "thin" (looks like water) fluid with cyan tint, has no bucket and is not placeable
    event.create('thin_fluid')
      .thinTexture(0xFF0000)
      .bucketColor(0x00FFFF)
      .displayName('Thin Fluid')

})