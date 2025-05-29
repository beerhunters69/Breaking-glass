import mods.itemstages.ItemStages;

ItemStages.createModRestriction('avaritia', s => s in [<item:avaritia:compressed_crafting_table>,<item:avaritia:double_compressed_crafting_table>], "seven").preventInventory(false).preventPickup(false);
ItemStages.createModRestriction("draconicevolution", "seven").preventInventory(false).preventPickup(false);


ItemStages.createModRestriction("mekanism", "six").preventInventory(false).preventPickup(false);
ItemStages.createModRestriction("mekanismtools", "six").preventInventory(false).preventPickup(false);
ItemStages.createModRestriction("mekanismgenerators", "six").preventInventory(false).preventPickup(false);
ItemStages.createModRestriction("hostilenetworks", "six").preventInventory(false).preventPickup(false);



ItemStages.createModRestriction("pneumaticcraft", "five").preventInventory(false).preventPickup(false);

ItemStages.createModRestriction("fluxnetworks", "five").preventInventory(false).preventPickup(false);
ItemStages.createModRestriction("bigreactors", "five").preventInventory(false).preventPickup(false);





ItemStages.restrict(<item:minecraft:diamond>, "four").preventInventory(false).preventPickup(false);
ItemStages.restrict(<item:minecraft:emerald>, "four").preventInventory(false).preventPickup(false);
ItemStages.createModRestriction("productivebees", "four").preventInventory(false).preventPickup(false);
ItemStages.createModRestriction("ftbic", "four").preventInventory(false).preventPickup(false);
ItemStages.createModRestriction("astralsorcery", "four").preventInventory(false).preventPickup(false);
ItemStages.restrict(<item:minecraft:diamond_helmet>, "four").preventInventory(false).preventPickup(false);
ItemStages.restrict(<item:minecraft:diamond_chestplate>, "four").preventInventory(false).preventPickup(false);
ItemStages.restrict(<item:minecraft:diamond_leggings>, "four").preventInventory(false).preventPickup(false);
ItemStages.restrict(<item:minecraft:diamond_boots>, "four").preventInventory(false).preventPickup(false);
ItemStages.restrict(<item:minecraft:diamond_axe>, "four").preventInventory(false).preventPickup(false);
ItemStages.restrict(<item:minecraft:diamond_pickaxe>, "four").preventInventory(false).preventPickup(false);
ItemStages.restrict(<item:minecraft:diamond_sword>, "four").preventInventory(false).preventPickup(false);
ItemStages.restrict(<item:minecraft:diamond_shovel>, "four").preventInventory(false).preventPickup(false);
ItemStages.restrict(<item:minecraft:diamond_hoe>, "four").preventInventory(false).preventPickup(false);



ItemStages.createModRestriction("constructsarmory", "three").preventInventory(false).preventPickup(false);
ItemStages.createModRestriction("tconstruct", "three").preventInventory(false).preventPickup(false);
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



ItemStages.createModRestriction('waystones', s => <item:waystones:waystone>.matches(s), "two").preventInventory(false).preventPickup(false);


ItemStages.createModRestriction("twilightforest", "two").preventInventory(false).preventPickup(false);
ItemStages.createModRestriction("toms_storage", "two").preventInventory(false).preventPickup(false);
ItemStages.createModRestriction("immersiveengineering", "two").preventInventory(false).preventPickup(false);
ItemStages.createModRestriction("apotheosis", "two").preventInventory(false).preventPickup(false);




ItemStages.restrict(<item:boss_tools:solar_panel>,'disabled').preventInventory(false).preventPickup(false);
ItemStages.restrict(<item:boss_tools:coal_generator>,'disabled').preventInventory(false).preventPickup(false);
ItemStages.restrict(<item:boss_tools:blast_furnace>,'disabled').preventInventory(false).preventPickup(false);
ItemStages.restrict(<item:boss_tools:fuel_refinery>,'disabled').preventInventory(false).preventPickup(false);
ItemStages.restrict(<item:boss_tools:compressor>,'disabled').preventInventory(false).preventPickup(false);
ItemStages.restrict(<item:pipez:energy_pipe>,'disabled').preventInventory(false).preventPickup(false);




// ItemStages.createModRestriction('emendatusenigmatica', s => s in <tag:items:forge:chunks>, "disabled").preventInventory(false).preventPickup(false);

// ItemStages.createModRestriction("emendatusenigmatica", "disabled").hiddenName("Unfamiliar item").preventInventory(false).preventPickup(false);
// ItemStages.restrict(<item:minecraft:diamond>, "five").hiddenName("Unfamiliar item").preventInventory(false).preventPickup(false);