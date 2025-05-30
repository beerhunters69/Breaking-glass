import mods.itemstages.ItemStages;

ItemStages.createModRestriction('avaritia', s => s in [<item:avaritia:compressed_crafting_table>,<item:avaritia:double_compressed_crafting_table>], "seven").preventInventory(false).preventPickup(false);
ItemStages.createModRestriction("draconicevolution", "seven").preventInventory(false).preventPickup(false);
mods.recipestages.Recipes.setRecipeStageByMod("seven", "avaritia");
mods.recipestages.Recipes.setRecipeStageByMod("seven", "draconicevolution");
mods.recipestages.Recipes.clearRecipeStage(<item:avaritia:compressed_crafting_table>);
mods.recipestages.Recipes.clearRecipeStage(<item:avaritia:double_compressed_crafting_table>);


ItemStages.createModRestriction("mekanismtools", "six").preventInventory(false).preventPickup(false);
ItemStages.createModRestriction("mekanismgenerators", "six").preventInventory(false).preventPickup(false);
ItemStages.createModRestriction("hostilenetworks", "six").preventInventory(false).preventPickup(false);
ItemStages.createModRestriction('mekanism', s => s in [<item:mekanism:block_tin>,<item:mekanism:block_copper>,<item:mekanism:block_osmium>,<item:mekanism:ingot_tin>,<item:mekanism:ingot_copper>,<item:mekanism:ingot_osmium>], "six").preventInventory(false).preventPickup(false);
mods.recipestages.Recipes.setRecipeStageByMod("six", "mekanism");
mods.recipestages.Recipes.setRecipeStageByMod("six", "mekanismtools");
mods.recipestages.Recipes.setRecipeStageByMod("six", "mekanismgenerators");
mods.recipestages.Recipes.setRecipeStageByMod("six", "hostilenetworks");
mods.recipestages.Recipes.clearRecipeStage(<item:mekanism:block_tin>);
mods.recipestages.Recipes.clearRecipeStage(<item:mekanism:block_copper>);
mods.recipestages.Recipes.clearRecipeStage(<item:mekanism:block_osmium>);
mods.recipestages.Recipes.clearRecipeStage(<item:mekanism:ingot_tin>);
mods.recipestages.Recipes.clearRecipeStage(<item:mekanism:ingot_copper>);
mods.recipestages.Recipes.clearRecipeStage(<item:mekanism:ingot_osmium>);




ItemStages.createModRestriction("pneumaticcraft", "five").preventInventory(false).preventPickup(false);
ItemStages.createModRestriction("fluxnetworks", "five").preventInventory(false).preventPickup(false);
ItemStages.createModRestriction("bigreactors", "five").preventInventory(false).preventPickup(false);
ItemStages.restrict(<item:minecraft:netherite_sword>, "five").preventInventory(false).preventPickup(false);
ItemStages.restrict(<item:minecraft:netherite_axe>, "five").preventInventory(false).preventPickup(false);
ItemStages.restrict(<item:minecraft:netherite_pickaxe>, "five").preventInventory(false).preventPickup(false);
ItemStages.restrict(<item:minecraft:netherite_shovel>, "five").preventInventory(false).preventPickup(false);
ItemStages.restrict(<item:minecraft:netherite_hoe>, "five").preventInventory(false).preventPickup(false);
ItemStages.restrict(<item:minecraft:netherite_helmet>, "five").preventInventory(false).preventPickup(false);
ItemStages.restrict(<item:minecraft:netherite_chestplate>, "five").preventInventory(false).preventPickup(false);
ItemStages.restrict(<item:minecraft:netherite_leggings>, "five").preventInventory(false).preventPickup(false);
ItemStages.restrict(<item:minecraft:netherite_boots>, "five").preventInventory(false).preventPickup(false);

mods.recipestages.Recipes.setRecipeStageByMod("five", "pneumaticcraft");
mods.recipestages.Recipes.setRecipeStageByMod("five", "fluxnetworks");
mods.recipestages.Recipes.setRecipeStageByMod("five", "bigreactors");
mods.recipestages.Recipes.setRecipeStage("five", <item:minecraft:netherite_sword>);
mods.recipestages.Recipes.setRecipeStage("five", <item:minecraft:netherite_axe>);
mods.recipestages.Recipes.setRecipeStage("five", <item:minecraft:netherite_pickaxe>);
mods.recipestages.Recipes.setRecipeStage("five", <item:minecraft:netherite_shovel>);
mods.recipestages.Recipes.setRecipeStage("five", <item:minecraft:netherite_hoe>);
mods.recipestages.Recipes.setRecipeStage("five", <item:minecraft:netherite_helmet>);
mods.recipestages.Recipes.setRecipeStage("five", <item:minecraft:netherite_chestplate>);
mods.recipestages.Recipes.setRecipeStage("five", <item:minecraft:netherite_leggings>);
mods.recipestages.Recipes.setRecipeStage("five", <item:minecraft:netherite_boots>);





ItemStages.createModRestriction("productivebees", "four").preventInventory(false).preventPickup(false);
ItemStages.createModRestriction("ftbic", "four").preventInventory(false).preventPickup(false);
ItemStages.createModRestriction("astralsorcery", "four").preventInventory(false).preventPickup(false);
ItemStages.restrict(<item:minecraft:diamond>, "four");
ItemStages.restrict(<item:minecraft:emerald>, "four").preventInventory(false).preventPickup(false);
ItemStages.restrict(<item:minecraft:diamond_helmet>, "four").preventInventory(false).preventPickup(false);
ItemStages.restrict(<item:minecraft:diamond_chestplate>, "four").preventInventory(false).preventPickup(false);
ItemStages.restrict(<item:minecraft:diamond_leggings>, "four").preventInventory(false).preventPickup(false);
ItemStages.restrict(<item:minecraft:diamond_boots>, "four").preventInventory(false).preventPickup(false);
ItemStages.restrict(<item:minecraft:diamond_axe>, "four").preventInventory(false).preventPickup(false);
ItemStages.restrict(<item:minecraft:diamond_pickaxe>, "four").preventInventory(false).preventPickup(false);
ItemStages.restrict(<item:minecraft:diamond_sword>, "four").preventInventory(false).preventPickup(false);
ItemStages.restrict(<item:minecraft:diamond_shovel>, "four").preventInventory(false).preventPickup(false);
ItemStages.restrict(<item:minecraft:diamond_hoe>, "four").preventInventory(false).preventPickup(false);

mods.recipestages.Recipes.setRecipeStageByMod("four", "productivebees");
mods.recipestages.Recipes.setRecipeStageByMod("four", "ftbic");
mods.recipestages.Recipes.setRecipeStageByMod("four", "astralsorcery");
mods.recipestages.Recipes.setRecipeStage("five", <item:minecraft:diamond>);
mods.recipestages.Recipes.setRecipeStage("five", <item:minecraft:emerald>);
mods.recipestages.Recipes.setRecipeStage("five", <item:minecraft:diamond_helmet>);
mods.recipestages.Recipes.setRecipeStage("five", <item:minecraft:diamond_chestplate>);
mods.recipestages.Recipes.setRecipeStage("five", <item:minecraft:diamond_leggings>);
mods.recipestages.Recipes.setRecipeStage("five", <item:minecraft:diamond_boots>);
mods.recipestages.Recipes.setRecipeStage("five", <item:minecraft:diamond_axe>);
mods.recipestages.Recipes.setRecipeStage("five", <item:minecraft:diamond_pickaxe>);
mods.recipestages.Recipes.setRecipeStage("five", <item:minecraft:diamond_sword>);
mods.recipestages.Recipes.setRecipeStage("five", <item:minecraft:diamond_shovel>);
mods.recipestages.Recipes.setRecipeStage("five", <item:minecraft:diamond_hoe>);


ItemStages.createModRestriction("boss_tools", "three").preventInventory(false).preventPickup(false);
ItemStages.createModRestriction("boss_tools_giselle_addon", "three").preventInventory(false).preventPickup(false);
ItemStages.createModRestriction("immersivepetroleum", "three").preventInventory(false).preventPickup(false);
ItemStages.createModRestriction("lazierae2", "three").preventInventory(false).preventPickup(false);
ItemStages.createModRestriction("ironfurnaces", "three").preventInventory(false).preventPickup(false);
ItemStages.createModRestriction("aeadditions", "three").preventInventory(false).preventPickup(false);
ItemStages.createModRestriction("appliedenergistics2", "three").preventInventory(false).preventPickup(false);
ItemStages.createModRestriction("ae2wtlib", "three").preventInventory(false).preventPickup(false);
ItemStages.createModRestriction("aeinfinitybooster", "three").preventInventory(false).preventPickup(false);
ItemStages.createModRestriction("ae2extras", "three").preventInventory(false).preventPickup(false);
ItemStages.restrict(<item:minecraft:iron_ingot>, "three").preventInventory(false).preventPickup(false);
ItemStages.restrict(<item:minecraft:iron_helmet>, "three").preventInventory(false).preventPickup(false);
ItemStages.restrict(<item:minecraft:iron_chestplate>,"three").preventInventory(false).preventPickup(false);
ItemStages.restrict(<item:minecraft:iron_leggings>, "three").preventInventory(false).preventPickup(false);
ItemStages.restrict(<item:minecraft:iron_boots>,"three").preventInventory(false).preventPickup(false);
ItemStages.restrict(<item:minecraft:iron_axe>, "three").preventInventory(false).preventPickup(false);
ItemStages.restrict(<item:minecraft:iron_pickaxe>, "three").preventInventory(false).preventPickup(false);
ItemStages.restrict(<item:minecraft:iron_sword>, "three").preventInventory(false).preventPickup(false);
ItemStages.restrict(<item:minecraft:iron_hoe>, "three").preventInventory(false).preventPickup(false);
ItemStages.restrict(<item:minecraft:iron_shovel>, "three").preventInventory(false).preventPickup(false);
ItemStages.restrict(<item:minecraft:gold_ingot>, "three").preventInventory(false).preventPickup(false);
ItemStages.restrict(<item:minecraft:golden_helmet>, "three").preventInventory(false).preventPickup(false);
ItemStages.restrict(<item:minecraft:golden_chestplate>,"three").preventInventory(false).preventPickup(false);
ItemStages.restrict(<item:minecraft:golden_leggings>, "three").preventInventory(false).preventPickup(false);
ItemStages.restrict(<item:minecraft:golden_boots>,"three").preventInventory(false).preventPickup(false);
ItemStages.restrict(<item:minecraft:golden_axe>, "three").preventInventory(false).preventPickup(false);
ItemStages.restrict(<item:minecraft:golden_pickaxe>, "three").preventInventory(false).preventPickup(false);
ItemStages.restrict(<item:minecraft:golden_sword>, "three").preventInventory(false).preventPickup(false);
ItemStages.restrict(<item:minecraft:golden_hoe>, "three").preventInventory(false).preventPickup(false);
ItemStages.restrict(<item:minecraft:golden_shovel>, "three").preventInventory(false).preventPickup(false);
ItemStages.restrict(<item:minecraft:gold_nugget>, "three").preventInventory(false).preventPickup(false);
ItemStages.restrict(<item:minecraft:iron_nugget>, "three").preventInventory(false).preventPickup(false);
ItemStages.restrict(<item:minecraft:bucket>, "three").preventInventory(false).preventPickup(false);

mods.recipestages.Recipes.setRecipeStageByMod("three", "boss_tools");
mods.recipestages.Recipes.setRecipeStageByMod("three", "boss_tools_giselle_addon");
mods.recipestages.Recipes.setRecipeStageByMod("three", "immersivepetroleum");
mods.recipestages.Recipes.setRecipeStageByMod("three", "lazierae2");
mods.recipestages.Recipes.setRecipeStageByMod("three", "ironfurnaces");
mods.recipestages.Recipes.setRecipeStageByMod("three", "aeadditions");
mods.recipestages.Recipes.setRecipeStageByMod("three", "appliedenergistics2");
mods.recipestages.Recipes.setRecipeStageByMod("three", "ae2wtlib");
mods.recipestages.Recipes.setRecipeStageByMod("three", "aeinfinitybooster");
mods.recipestages.Recipes.setRecipeStageByMod("three", "ae2extras");
mods.recipestages.Recipes.setRecipeStage("three", <item:minecraft:iron_ingot>);
mods.recipestages.Recipes.setRecipeStage("three", <item:minecraft:iron_helmet>);
mods.recipestages.Recipes.setRecipeStage("three", <item:minecraft:iron_chestplate>);
mods.recipestages.Recipes.setRecipeStage("three", <item:minecraft:iron_leggings>);
mods.recipestages.Recipes.setRecipeStage("three", <item:minecraft:iron_boots>);
mods.recipestages.Recipes.setRecipeStage("three", <item:minecraft:iron_axe>);
mods.recipestages.Recipes.setRecipeStage("three", <item:minecraft:iron_pickaxe>);
mods.recipestages.Recipes.setRecipeStage("three", <item:minecraft:iron_sword>);
mods.recipestages.Recipes.setRecipeStage("three", <item:minecraft:iron_hoe>);
mods.recipestages.Recipes.setRecipeStage("three", <item:minecraft:iron_shovel>);
mods.recipestages.Recipes.setRecipeStage("three", <item:minecraft:gold_ingot>);
mods.recipestages.Recipes.setRecipeStage("three", <item:minecraft:golden_helmet>);
mods.recipestages.Recipes.setRecipeStage("three", <item:minecraft:golden_chestplate>);
mods.recipestages.Recipes.setRecipeStage("three", <item:minecraft:golden_leggings>);
mods.recipestages.Recipes.setRecipeStage("three", <item:minecraft:golden_boots>);
mods.recipestages.Recipes.setRecipeStage("three", <item:minecraft:golden_axe>);
mods.recipestages.Recipes.setRecipeStage("three", <item:minecraft:golden_pickaxe>);
mods.recipestages.Recipes.setRecipeStage("three", <item:minecraft:golden_sword>);
mods.recipestages.Recipes.setRecipeStage("three", <item:minecraft:golden_hoe>);
mods.recipestages.Recipes.setRecipeStage("three", <item:minecraft:golden_shovel>);
mods.recipestages.Recipes.setRecipeStage("three", <item:minecraft:gold_nugget>);
mods.recipestages.Recipes.setRecipeStage("three", <item:minecraft:iron_nugget>);
mods.recipestages.Recipes.setRecipeStage("three", <item:minecraft:bucket>);



ItemStages.createModRestriction('waystones', s => <item:waystones:waystone>.matches(s), "two").preventInventory(false).preventPickup(false);
ItemStages.createModRestriction("twilightforest", "two").preventInventory(false).preventPickup(false);
ItemStages.createModRestriction("toms_storage", "two").preventInventory(false).preventPickup(false);
ItemStages.createModRestriction("immersiveengineering", "two").preventInventory(false).preventPickup(false);
ItemStages.createModRestriction("apotheosis", "two").preventInventory(false).preventPickup(false);
ItemStages.createModRestriction("constructsarmory", "two").preventInventory(false).preventPickup(false);
ItemStages.createModRestriction("tconstruct", "two").preventInventory(false).preventPickup(false);
mods.recipestages.Recipes.setRecipeStage("two", <item:waystones:waystone>);
mods.recipestages.Recipes.setRecipeStageByMod("two", "twilightforest");
mods.recipestages.Recipes.setRecipeStageByMod("two", "toms_storage");
mods.recipestages.Recipes.setRecipeStageByMod("two", "immersiveengineering");
mods.recipestages.Recipes.setRecipeStageByMod("two", "apotheosis");
mods.recipestages.Recipes.setRecipeStageByMod("two", "constructsarmory");
mods.recipestages.Recipes.setRecipeStageByMod("two", "tconstruct");


ItemStages.restrict(<item:boss_tools:solar_panel>,'disabled').preventInventory(false).preventPickup(false);
ItemStages.restrict(<item:boss_tools:coal_generator>,'disabled').preventInventory(false).preventPickup(false);
ItemStages.restrict(<item:boss_tools:blast_furnace>,'disabled').preventInventory(false).preventPickup(false);
ItemStages.restrict(<item:boss_tools:fuel_refinery>,'disabled').preventInventory(false).preventPickup(false);
ItemStages.restrict(<item:boss_tools:compressor>,'disabled').preventInventory(false).preventPickup(false);
ItemStages.restrict(<item:pipez:energy_pipe>,'disabled').preventInventory(false).preventPickup(false);




// ItemStages.createModRestriction('emendatusenigmatica', s => s in <tag:items:forge:chunks>, "disabled").preventInventory(false).preventPickup(false);

// ItemStages.createModRestriction("emendatusenigmatica", "disabled").hiddenName("Unfamiliar item").preventInventory(false).preventPickup(false);
// ItemStages.restrict(<item:minecraft:diamond>, "five").hiddenName("Unfamiliar item").preventInventory(false).preventPickup(false);



