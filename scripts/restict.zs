import mods.itemstages.ItemStages;

ItemStages.createModRestriction('avaritia', s => s in [<item:avaritia:compressed_crafting_table>,<item:avaritia:double_compressed_crafting_table>], "seven");
ItemStages.createModRestriction("draconicevolution", "seven");


ItemStages.createModRestriction("mekanism", "six");
ItemStages.createModRestriction("mekanismtools", "six");
ItemStages.createModRestriction("mekanismgenerators", "six");
ItemStages.createModRestriction("hostilenetworks", "six");



ItemStages.createModRestriction("pneumaticcraft", "five");

ItemStages.createModRestriction("fluxnetworks", "five");
ItemStages.createModRestriction("bigreactors", "five");





ItemStages.restrict(<item:minecraft:diamond>, "four");
ItemStages.createModRestriction("productivebees", "four");
ItemStages.createModRestriction("ftbic", "four");
ItemStages.createModRestriction("astralsorcery", "four");
ItemStages.restrict(<item:minecraft:diamond_helmet>, "four");
ItemStages.restrict(<item:minecraft:diamond_chestplate>, "four");
ItemStages.restrict(<item:minecraft:diamond_leggings>, "four");
ItemStages.restrict(<item:minecraft:diamond_boots>, "four");
ItemStages.restrict(<item:minecraft:diamond_axe>, "four");
ItemStages.restrict(<item:minecraft:diamond_pickaxe>, "four");
ItemStages.restrict(<item:minecraft:diamond_sword>, "four");
ItemStages.restrict(<item:minecraft:diamond_shovel>, "four");
ItemStages.restrict(<item:minecraft:diamond_hoe>, "four");



ItemStages.createModRestriction("constructsarmory", "three");
ItemStages.createModRestriction("tconstruct", "three");
ItemStages.createModRestriction("boss_tools", "three");
ItemStages.createModRestriction("boss_tools_giselle_addon", "three");
ItemStages.createModRestriction("immersivepetroleum", "three");
ItemStages.createModRestriction("lazierae2", "three");
ItemStages.createModRestriction("ironfurnaces", "three");
ItemStages.createModRestriction("aeadditions", "three");
ItemStages.createModRestriction("appliedenergistics2", "three");
ItemStages.createModRestriction("ae2wtlib", "three");
ItemStages.createModRestriction("aeinfinitybooster", "three");
ItemStages.createModRestriction("ae2extras", "three");
ItemStages.restrict(<item:minecraft:iron_ingot>, "three");
ItemStages.restrict(<item:minecraft:iron_helmet>, "three");
ItemStages.restrict(<item:minecraft:iron_chestplate>,"three");
ItemStages.restrict(<item:minecraft:iron_leggings>, "three");
ItemStages.restrict(<item:minecraft:iron_boots>,"three");
ItemStages.restrict(<item:minecraft:iron_axe>, "three");
ItemStages.restrict(<item:minecraft:iron_pickaxe>, "three");
ItemStages.restrict(<item:minecraft:iron_sword>, "three");
ItemStages.restrict(<item:minecraft:iron_hoe>, "three");
ItemStages.restrict(<item:minecraft:iron_shovel>, "three");
ItemStages.restrict(<item:minecraft:gold_ingot>, "three");
ItemStages.restrict(<item:minecraft:golden_helmet>, "three");
ItemStages.restrict(<item:minecraft:golden_chestplate>,"three");
ItemStages.restrict(<item:minecraft:golden_leggings>, "three");
ItemStages.restrict(<item:minecraft:golden_boots>,"three");
ItemStages.restrict(<item:minecraft:golden_axe>, "three");
ItemStages.restrict(<item:minecraft:golden_pickaxe>, "three");
ItemStages.restrict(<item:minecraft:golden_sword>, "three");
ItemStages.restrict(<item:minecraft:golden_hoe>, "three");
ItemStages.restrict(<item:minecraft:golden_shovel>, "three");



ItemStages.createModRestriction('waystones', s => <item:waystones:waystone>.matches(s), "two");


ItemStages.createModRestriction("twilightforest", "two");
ItemStages.createModRestriction("toms_storage", "two");
ItemStages.createModRestriction("immersiveengineering", "two");
ItemStages.createModRestriction("apotheosis", "two");




ItemStages.restrict(<item:boss_tools:solar_panel>,'disabled');
ItemStages.restrict(<item:boss_tools:coal_generator>,'disabled');
ItemStages.restrict(<item:boss_tools:blast_furnace>,'disabled');
ItemStages.restrict(<item:boss_tools:fuel_refinery>,'disabled');
ItemStages.restrict(<item:boss_tools:compressor>,'disabled');




// ItemStages.createModRestriction('emendatusenigmatica', s => s in <tag:items:forge:chunks>, "disabled");

// ItemStages.createModRestriction("emendatusenigmatica", "disabled").hiddenName("Unfamiliar item");
// ItemStages.restrict(<item:minecraft:diamond>, "five").hiddenName("Unfamiliar item");