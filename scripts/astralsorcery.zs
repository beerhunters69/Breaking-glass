// <recipetype:astralsorcery:altar>.addRecipe(name as string, altarType as string, output as IItemStack, ingredients as IIngredient[][], duration as int, starlightRequired as int)
// <recipetype:astralsorcery:altar>.addRecipe(name as string, altarType as string, output as IItemStack, pattern as string[], ingredients as IIngredient[string], duration as int, starlightRequired as int)


val air = <item:minecraft:air>;


<recipetype:astralsorcery:altar>.addRecipe("constellation_paper", "DISCOVERY", <item:astralsorcery:constellation_paper>, [
[air, air, air, air, air],
[air, <item:minecraft:emerald>, <item:minecraft:diamond>, <item:minecraft:emerald>, air],
[air, <item:minecraft:diamond>, <item:astralsorcery:parchment>, <item:minecraft:diamond>, air],
[air, <item:minecraft:emerald>, <item:minecraft:diamond>, <item:minecraft:emerald>, air],
[air, air, air, air, air]
], 50, 750);

<recipetype:astralsorcery:altar>.addRecipe("creative_motor", "RADIANCE", <item:create:creative_motor>, [
[<item:appliedenergistics2:64k_cell_component>, <item:minecraft:purple_carpet>, <item:minecraft:purple_carpet>, <item:astralsorcery:resonating_gem>, <item:astralsorcery:resonating_gem>],
[<item:immersiveengineering:graphite_electrode>.withTag({graphDmg: 0 as int}), <item:immersiveengineering:graphite_electrode>.withTag({graphDmg: 0 as int}), <item:kubejs:angelic_alloy_ingot>, <item:kubejs:angelic_alloy_ingot>, <item:kubejs:angelic_alloy_ingot>],
[<item:minecraft:magma_block>, <item:minecraft:nether_star>, <item:immersiveengineering:graphite_electrode>.withTag({graphDmg: 0 as int}), <item:immersiveengineering:graphite_electrode>.withTag({graphDmg: 0 as int}), <item:astralsorcery:colored_lens_spectral>],
[<item:immersiveengineering:graphite_electrode>.withTag({graphDmg: 0 as int}), <item:immersiveengineering:graphite_electrode>.withTag({graphDmg: 0 as int}), <item:kubejs:angelic_alloy_ingot>, <item:kubejs:angelic_alloy_ingot>, <item:kubejs:angelic_alloy_ingot>],
[<item:appliedenergistics2:64k_cell_component>, <item:minecraft:purple_carpet>, <item:minecraft:purple_carpet>, <item:astralsorcery:resonating_gem>, <item:astralsorcery:resonating_gem>]
], 500, 4000);