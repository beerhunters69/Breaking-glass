import crafttweaker.api.registries.IRecipeManager;

// <recipetype:ars_nouveau:enchanting_apparatus>.addRecipe(name as string, result as IItemStack, reagent as IIngredient, pedestalItems as IIngredient[])

<recipetype:ars_nouveau:enchanting_apparatus>.addRecipe("interdimensional.transmitter", <item:kubejs:tf_portal_item>, <item:kubejs:tf_inactive_portal_item>, [<item:ars_nouveau:mana_fiber>, <item:ars_nouveau:ritual_sunrise>, <item:ars_nouveau:mana_fiber>, <item:ars_nouveau:mana_gem>, <item:ars_nouveau:mana_gem>, <item:ars_nouveau:mana_fiber>, <item:ars_nouveau:ritual_moonfall>, <item:ars_nouveau:mana_fiber>]);

<recipetype:ars_nouveau:enchanting_apparatus>.addRecipe("dominion.wand", <item:ars_nouveau:dominion_wand>, <item:minecraft:stick>, [<item:ars_nouveau:mana_gem_block>, <item:ars_nouveau:mana_fiber>, <item:ars_nouveau:mana_gem_block>]);