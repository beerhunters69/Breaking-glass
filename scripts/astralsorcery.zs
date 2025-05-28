// <recipetype:astralsorcery:altar>.addRecipe(name as string, altarType as string, output as IItemStack, ingredients as IIngredient[][], duration as int, starlightRequired as int)
// <recipetype:astralsorcery:altar>.addRecipe(name as string, altarType as string, output as IItemStack, pattern as string[], ingredients as IIngredient[string], duration as int, starlightRequired as int)


val air = <item:minecraft:air>;


<recipetype:astralsorcery:altar>.addRecipe("altar_test", "RADIANCE", <item:minecraft:dirt>, [
[air, air, air, air, air],
[air, <item:minecraft:diamond>, air, air, air],
[air, air, air, air, air],
[air, air, air, air, air],
[air, air, air, air, air]
], 50, 8000);

<recipetype:astralsorcery:altar>.addRecipe("constellation_paper", "DISCOVERY", <item:astralsorcery:constellation_paper>, [
[air, air, air, air, air],
[air, <item:minecraft:emerald>, <item:minecraft:diamond>, <item:minecraft:emerald>, air],
[air, <item:minecraft:diamond>, <item:astralsorcery:parchment>, <item:minecraft:diamond>, air],
[air, <item:minecraft:emerald>, <item:minecraft:diamond>, <item:minecraft:emerald>, air],
[air, air, air, air, air]
], 50, 750);