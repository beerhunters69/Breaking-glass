import mods.itemstages.ItemStages;

//Item restrictions for construction wand

//Stage two

ItemStages.restrict(<item:constructionwand:iron_wand>, "two").preventInventory(false).preventPickup(false);

//Stage three

ItemStages.restrict(<item:constructionwand:diamond_wand>, "three").preventInventory(false).preventPickup(false);
ItemStages.restrict(<item:constructionwand:infinity_wand>, "three").preventInventory(false).preventPickup(false);

ItemStages.restrict(<item:constructionwand:core_angel>, "three").preventInventory(false).preventPickup(false);
ItemStages.restrict(<item:constructionwand:core_destruction>, "three").preventInventory(false).preventPickup(false);


