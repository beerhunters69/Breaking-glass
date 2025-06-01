onEvent('recipes', event => {
event.custom({
    "type":"immersiveengineering:mixer","inputs":
    [
    {"count":3,"base_ingredient":{"tag":"forge:dusts/cobalt"}},
    {"count":2,"base_ingredient":{"tag":"astralsorcery:stardust"}},
    {"tag":"forge:dusts/duralumium"},
    {"tag":"forge:dusts/diamond"},
    {"tag":"forge:ingots/chromatic_compound"}

]
    ,"result":{"fluid":"kubejs:molten_angelic_alloy","amount":1152},"fluid":{"tag":"forge:liquid_starlight","amount":1000},"energy":3200})

event.custom(
{
  "type": "tconstruct:casting_table",
  "cast": {
    "tag": "tconstruct:casts/multi_use/ingot"
  },
  "fluid": {
    "tag": "forge:molten_angelic_alloy",
    "amount": 144
  },
  "result": "kubejs:angelic_alloy_ingot",
  "cooling_time": 60
})

event.custom({
    "type":"immersiveengineering:mixer","inputs":
    [{"count":4,"base_ingredient":{"tag":"forge:dusts/netherite_base"}}],
    "result":{"fluid":"tconstruct:molten_netherite","amount":144},
    "fluid":{"tag":"tconstruct:molten_gold","amount":576},"energy":3200
  })

event.custom({
    "type":"immersiveengineering:mixer","inputs":
    [
      {"count":2,"base_ingredient":{"tag":"forge:dusts/iridium"}},
      {"count":1,"base_ingredient":{"tag":"forge:dusts/blaze"}},
      {"count":1,"base_ingredient":{"tag":"forge:dusts/netherite"}}
    ],
    "result":{"fluid":"kubejs:molten_cwgnc","amount":720},
    "fluid":{"tag":"forge:molten_enderium","amount":288},"energy":3200
  })
event.custom(
{"type":"immersiveengineering:refinery",
  "result":{"fluid":"kubejs:molten_wgnc","amount":288},
  "input0":{"tag":"forge:molten_cobalt","amount":144},
  "input1":{"tag":"forge:molten_cwgnc","amount":144},
  "energy":3200}
)
event.custom(
{
  "type": "tconstruct:casting_table",
  "cast": {
    "tag": "tconstruct:casts/multi_use/ingot"
  },
  "fluid": {
    "tag": "forge:molten_wgnc",
    "amount": 144
  },
  "result": "kubejs:wgnc",
  "cooling_time": 60
})
})

