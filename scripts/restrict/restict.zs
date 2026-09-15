import mods.itemstages.ItemStages;

//General mod restrictions

//Stage two

ItemStages.createModRestriction("twilightforest", "two").preventInventory(false).preventPickup(false);
ItemStages.createModRestriction("toms_storage", "two").preventInventory(false).preventPickup(false);
ItemStages.createModRestriction("apotheosis", "two").preventInventory(false).preventPickup(false);
ItemStages.createModRestriction("constructsarmory", "two").preventInventory(false).preventPickup(false);
ItemStages.createModRestriction("tconstruct", "two").preventInventory(false).preventPickup(false);


ItemStages.createModRestriction('waystones', s => <item:waystones:waystone>.matches(s), "two").preventInventory(false).preventPickup(false);
ItemStages.createModRestriction("immersiveengineering",s => s in [<item:immersiveengineering:alloybrick>,<item:immersiveengineering:hammer>.withTag({AS_Amulet_Holder: [362366796, -1650244384, -2012178990, 386519724]}),<item:immersiveengineering:hammer>],  "two").preventInventory(false).preventPickup(false).preventUsing(false);

//Stage three

ItemStages.createModRestriction("thermal", "three").preventInventory(false).preventPickup(false);
ItemStages.createModRestriction("boss_tools", "three").preventInventory(false).preventPickup(false);
ItemStages.createModRestriction("boss_tools_giselle_addon", "three").preventInventory(false).preventPickup(false);
ItemStages.createModRestriction("immersivepetroleum", "three").preventInventory(false).preventPickup(false);
ItemStages.createModRestriction("lazierae2", "three").preventInventory(false).preventPickup(false);
ItemStages.createModRestriction("ironfurnaces", "three").preventInventory(false).preventPickup(false);
ItemStages.createModRestriction("aeadditions", "three").preventInventory(false).preventPickup(false);
ItemStages.createModRestriction("appliedenergistics2", "three").preventInventory(false).preventPickup(false);
ItemStages.createModRestriction("ae2wtlib", "three").preventInventory(false).preventPickup(false);
ItemStages.createModRestriction("ae2extras", "three").preventInventory(false).preventPickup(false);
ItemStages.createModRestriction("ae2fc", "three").preventInventory(false).preventPickup(false);
ItemStages.createModRestriction("extrastorage", "three").preventInventory(false).preventPickup(false);
ItemStages.createModRestriction("refinedstorage", "three").preventInventory(false).preventPickup(false);
ItemStages.createModRestriction("cabletiers", "three").preventInventory(false).preventPickup(false);
ItemStages.createModRestriction("refinedstorageaddons", "three").preventInventory(false).preventPickup(false);
ItemStages.createModRestriction("rslargepatterns", "three").preventInventory(false).preventPickup(false);
ItemStages.createModRestriction("universalgrid", "three").preventInventory(false).preventPickup(false);
ItemStages.createModRestriction("rsinfinitybooster", "three").preventInventory(false).preventPickup(false);
ItemStages.createModRestriction("rsrequestify", "three").preventInventory(false).preventPickup(false);
ItemStages.createModRestriction("aeinfinitybooster", "three").preventInventory(false).preventPickup(false);
ItemStages.createModRestriction("scannable", "three").preventInventory(false).preventPickup(false);
ItemStages.createModRestriction("cookingforblockheads", "three").preventInventory(false).preventPickup(false);
ItemStages.createModRestriction("jecalculation", "three").preventInventory(false).preventPickup(false);

//Stage four

ItemStages.createModRestriction("productivebees", "four").preventInventory(false).preventPickup(false);
ItemStages.createModRestriction("ftbic", "four").preventInventory(false).preventPickup(false);
ItemStages.createModRestriction("astralsorcery", "four").preventInventory(false).preventPickup(false);
ItemStages.createModRestriction("buildinggadgets", "four").preventInventory(false).preventPickup(false);

//Stage five

ItemStages.createModRestriction("pneumaticcraft", "five").preventInventory(false).preventPickup(false);
ItemStages.createModRestriction("fluxnetworks", "five").preventInventory(false).preventPickup(false);
ItemStages.createModRestriction("bigreactors", "five").preventInventory(false).preventPickup(false);

//Stage six

ItemStages.createModRestriction("mekanismgenerators", "six").preventInventory(false).preventPickup(false);
ItemStages.createModRestriction("hostilenetworks", "six").preventInventory(false).preventPickup(false);
ItemStages.createModRestriction('mekanism', s => s in [<item:mekanism:block_tin>,<item:mekanism:block_copper>,<item:mekanism:block_osmium>,<item:mekanism:ingot_tin>,<item:mekanism:ingot_copper>,<item:mekanism:ingot_osmium>], "six").preventInventory(false).preventPickup(false);
ItemStages.createModRestriction("betterendforge", "six").preventInventory(false).preventPickup(false);

//Stage seven

ItemStages.createModRestriction('avaritia', s => s in [<item:avaritia:compressed_crafting_table>,<item:avaritia:double_compressed_crafting_table>], "seven").preventInventory(false).preventPickup(false);
ItemStages.createModRestriction("draconicevolution", "seven").preventInventory(false).preventPickup(false);

//Disabled

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
ItemStages.restrict(<item:appliedenergistics2:grindstone>,'disabled');
ItemStages.restrict(<item:appliedenergistics2:crank>,'disabled');

//Didn't belong anywhere else (for now)

ItemStages.restrict(<item:emendatusenigmatica:brass_dust>, "two").preventInventory(false).preventPickup(false);
ItemStages.restrict(<item:emendatusenigmatica:bronze_dust>, "two").preventInventory(false).preventPickup(false);
ItemStages.restrict(<item:thermal:bronze_dust>, "two").preventInventory(false).preventPickup(false);
ItemStages.restrict(<item:mekanism:dust_bronze>, "two").preventInventory(false).preventPickup(false);
ItemStages.restrict(<item:emendatusenigmatica:enigmatic_fortunizer>, "five").preventInventory(false).preventPickup(false);