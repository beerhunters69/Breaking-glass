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

<recipetype:astralsorcery:altar>.addRecipe("rockett2", "RADIANCE", <item:boss_tools:rocket_t2>, [
    [<item:minecraft:end_crystal>, <item:tconstruct:large_plate>.withTag({Material: "tconstruct:queens_slime" as string}), <item:astralsorcery:observatory>, <item:tconstruct:large_plate>.withTag({Material: "tconstruct:queens_slime" as string}), <item:minecraft:end_crystal>],
    [<item:ftbic:thick_neutron_reflector>, <item:kubejs:angelic_alloy_plate>, <item:appliedenergistics2:singularity>, <item:kubejs:angelic_alloy_plate>, <item:ftbic:thick_neutron_reflector>],
    [<item:ftbic:thick_neutron_reflector>, <item:kubejs:angelic_alloy_plate>, <item:twilightforest:carminite_reactor>, <item:kubejs:angelic_alloy_plate>, <item:ftbic:thick_neutron_reflector>],
    [<item:ftbic:thick_neutron_reflector>, <item:kubejs:angelic_alloy_plate>, <item:appliedenergistics2:singularity>, <item:kubejs:angelic_alloy_plate>, <item:ftbic:thick_neutron_reflector>],
    [<item:kubejs:angelic_alloy_plate>,<item:immersiveengineering:capacitor_hv>, <item:boss_tools:rocket_t1>, <item:immersiveengineering:capacitor_hv>, <item:kubejs:angelic_alloy_plate>]
], 500, 4000);