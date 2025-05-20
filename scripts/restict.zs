import mods.itemstages.ItemStages;


ItemStages.createModRestriction("draconicevolution", "seven");
ItemStages.createModRestriction("avaritia", "seven");


ItemStages.createModRestriction("mekanism", "six");
ItemStages.createModRestriction("mekanismtools", "six");
ItemStages.createModRestriction("mekanismgenerators", "six");
ItemStages.createModRestriction("hostilenetworks", "six");



ItemStages.createModRestriction("pneumaticcraft", "five");
ItemStages.restrict(<item:minecraft:diamond>, "five");
ItemStages.createModRestriction("fluxnetworks", "five");
ItemStages.createModRestriction("bigreactors", "five");
ItemStages.restrict(<item:minecraft:diamond_helmet>, "five");
ItemStages.restrict(<item:minecraft:diamond_chestplate>, "five");
ItemStages.restrict(<item:minecraft:diamond_leggings>, "five");
ItemStages.restrict(<item:minecraft:diamond_boots>, "five");
ItemStages.restrict(<item:minecraft:diamond_axe>, "five");
ItemStages.restrict(<item:minecraft:diamond_pickaxe>, "five");
ItemStages.restrict(<item:minecraft:diamond_sword>, "five");






ItemStages.createModRestriction("resourcefulbees", "four");
ItemStages.createModRestriction("ftbic", "four");
ItemStages.createModRestriction("astralsorcery", "four");



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



ItemStages.createModRestriction('waystones', s => <item:waystones:waystone>.matches(s), "two");


ItemStages.createModRestriction("twilightforest", "two");
ItemStages.createModRestriction("toms_storage", "two");
ItemStages.createModRestriction("immersiveengineering", "two");
ItemStages.createModRestriction("apotheosis", "two");




ItemStages.createModRestriction('boss_tools:solar_panel','disabled');
ItemStages.createModRestriction('boss_tools:coal_generator','disabled');
ItemStages.createModRestriction('boss_tools:blast_furnace','disabled');
ItemStages.createModRestriction('boss_tools:fuel_refinery','disabled');
ItemStages.createModRestriction('boss_tools:compressor','disabled');




// ItemStages.createModRestriction('emendatusenigmatica', s => s in <tag:items:forge:chunks>, "disabled");

// ItemStages.createModRestriction("emendatusenigmatica", "disabled").hiddenName("Unfamiliar item");
// ItemStages.restrict(<item:minecraft:diamond>, "five").hiddenName("Unfamiliar item");