import mods.itemstages.ItemStages;

ItemStages.createModRestriction('avaritia', s => s in [<item:avaritia:compressed_crafting_table>,<item:avaritia:double_compressed_crafting_table>], "seven").preventInventory(false).preventPickup(false);
ItemStages.createModRestriction("draconicevolution", "seven").preventInventory(false).preventPickup(false);


ItemStages.createModRestriction("mekanismgenerators", "six").preventInventory(false).preventPickup(false);
ItemStages.createModRestriction("hostilenetworks", "six").preventInventory(false).preventPickup(false);
ItemStages.createModRestriction('mekanism', s => s in [<item:mekanism:block_tin>,<item:mekanism:block_copper>,<item:mekanism:block_osmium>,<item:mekanism:ingot_tin>,<item:mekanism:ingot_copper>,<item:mekanism:ingot_osmium>], "six").preventInventory(false).preventPickup(false);



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



ItemStages.createModRestriction("thermal", "three").preventInventory(false).preventPickup(false);
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
ItemStages.createModRestriction("ae2fc", "three").preventInventory(false).preventPickup(false);

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


ItemStages.createModRestriction('waystones', s => <item:waystones:waystone>.matches(s), "two").preventInventory(false).preventPickup(false);
ItemStages.createModRestriction("twilightforest", "two").preventInventory(false).preventPickup(false);
ItemStages.createModRestriction("toms_storage", "two").preventInventory(false).preventPickup(false);
ItemStages.createModRestriction("immersiveengineering",s => s in [<item:immersiveengineering:alloybrick>,<item:immersiveengineering:hammer>.withTag({AS_Amulet_Holder: [362366796, -1650244384, -2012178990, 386519724]}),<item:immersiveengineering:hammer>], "two").preventInventory(false).preventPickup(false).preventUsing(false);
ItemStages.createModRestriction("apotheosis", "two").preventInventory(false).preventPickup(false);
ItemStages.createModRestriction("constructsarmory", "two").preventInventory(false).preventPickup(false);
ItemStages.createModRestriction("tconstruct", "two").preventInventory(false).preventPickup(false);

ItemStages.restrict(<item:minecraft:iron_ingot>, "two").preventInventory(false).preventPickup(false);
ItemStages.restrict(<item:minecraft:iron_helmet>, "two").preventInventory(false).preventPickup(false);
ItemStages.restrict(<item:minecraft:iron_chestplate>,"two").preventInventory(false).preventPickup(false);
ItemStages.restrict(<item:minecraft:iron_leggings>, "three").preventInventory(false).preventPickup(false);
ItemStages.restrict(<item:minecraft:iron_boots>,"two").preventInventory(false).preventPickup(false);
ItemStages.restrict(<item:minecraft:iron_axe>, "two").preventInventory(false).preventPickup(false);
ItemStages.restrict(<item:minecraft:iron_pickaxe>, "two").preventInventory(false).preventPickup(false);
ItemStages.restrict(<item:minecraft:iron_sword>, "two").preventInventory(false).preventPickup(false);
ItemStages.restrict(<item:minecraft:iron_hoe>, "two").preventInventory(false).preventPickup(false);
ItemStages.restrict(<item:minecraft:iron_shovel>, "two").preventInventory(false).preventPickup(false);


ItemStages.restrict(<item:boss_tools:solar_panel>,'disabled');
ItemStages.restrict(<item:boss_tools:coal_generator>,'disabled');
ItemStages.restrict(<item:boss_tools:blast_furnace>,'disabled');
ItemStages.restrict(<item:boss_tools:fuel_refinery>,'disabled');
ItemStages.restrict(<item:boss_tools:compressor>,'disabled');
ItemStages.restrict(<item:boss_tools_giselle_addon:electric_blast_furnace>,'disabled');
ItemStages.restrict(<item:thermal:machine_insolator>,'disabled');
ItemStages.restrict(<item:thermal:machine_furnace>,'disabled');
ItemStages.restrict(<item:thermal:machine_sawmill>,'disabled');
ItemStages.restrict(<item:thermal:machine_pulverizer>,'disabled');
ItemStages.restrict(<item:thermal:machine_smelter>,'disabled');
ItemStages.restrict(<item:thermal:machine_centrifuge>,'disabled');
ItemStages.restrict(<item:thermal:machine_press>,'disabled');
ItemStages.restrict(<item:thermal:machine_pyrolyzer>,'disabled');
ItemStages.restrict(<item:thermal:machine_refinery>,'disabled');
ItemStages.restrict(<item:thermal:dynamo_stirling>,'disabled');
ItemStages.restrict(<item:thermal:dynamo_magmatic>,'disabled');
ItemStages.restrict(<item:thermal:dynamo_numismatic>,'disabled');
ItemStages.restrict(<item:thermal:dynamo_disenchantment>,'disabled');
ItemStages.restrict(<item:thermal:dynamo_gourmand>,'disabled');
ItemStages.restrict(<item:thermal:dynamo_lapidary>,'disabled');
ItemStages.restrict(<item:pneumaticcraft:thermopneumatic_processing_plant>,'disabled');
ItemStages.restrict(<item:pneumaticcraft:refinery>,'disabled');
ItemStages.restrict(<item:pneumaticcraft:refinery_output>,'disabled');



// ItemStages.createModRestriction('emendatusenigmatica', s => s in <tag:items:forge:chunks>, "disabled").preventInventory(false).preventPickup(false);

// ItemStages.createModRestriction("emendatusenigmatica", "disabled").hiddenName("Unfamiliar item").preventInventory(false).preventPickup(false);
// ItemStages.restrict(<item:minecraft:diamond>, "five").hiddenName("Unfamiliar item").preventInventory(false).preventPickup(false);



