/* eslint-disable jsdoc/lines-before-block */
/**
 * Represents the different categories of stones based on their geological formation.
 */
type StoneCategory =
  /** Stones formed under intense pressure and heat, often with banding and foliation. */
  | "metamorphic"

  /** Stones formed from solidified magma or lava, either intrusive or extrusive. */
  | "igneous"

  /** Stones formed from accumulated mineral and organic particles, often layered. */
  | "sedimentary"

  /** Stones formed from erupted lava and pyroclastic materials, highly porous or glassy. */
  | "volcanic"

  /** Stones found in icy environments, often mixed with frozen materials. */
  | "frozen"

  /** Stones with significant mineral content, often used as gemstones or industrial materials. */
  | "mineral";

/**
 * Represents different grades of stone quality and durability.
 */
type StoneGrade =
  /** Extremely durable, high-density stone, suitable for structural use. */
  | "high"

  /** Medium durability stone, commonly used in construction. */
  | "medium"

  /** Low durability, brittle stone, more prone to erosion and breakage. */
  | "low"

  /** Fragile stone, often decorative but unsuitable for structural use. */
  | "fragile";

/** Metamorphic stone types. */
type MetamorphicStoneTypes =
  /** A metamorphic rock with a banded or foliated texture, typically formed from igneous rocks. */
  | "amphibolite"

  /** A dense metamorphic rock with a granular texture, often used in construction. */
  | "charnockite"

  /** A high-pressure metamorphic rock composed of garnet and pyroxene. */
  | "eclogite"

  /** A coarse-grained metamorphic rock with distinct banding and foliation. */
  | "gneiss"

  /** A high-grade metamorphic rock formed under granulite facies conditions. */
  | "granulite"

  /** A fine-grained metamorphic rock formed by contact metamorphism. */
  | "hornfels"

  /** A metamorphic rock composed of recrystallized carbonate minerals, often used decoratively. */
  | "marble"

  /** A metamorphic rock with visible green mineral deposits, often used for sculpture. */
  | "mariposite"

  /** A partially melted metamorphic rock with mixed igneous and metamorphic features. */
  | "migmatite"

  /** A fine-grained metamorphic rock with a silky sheen, often used in roofing. */
  | "phyllite"

  /** A non-foliated metamorphic rock formed from quartz-rich sandstone. */
  | "quartzite"

  /** A medium-grade metamorphic rock with well-developed foliation. */
  | "schist"

  /** A schist variant rich in biotite mica, exhibiting strong foliation. */
  | "schist_biotite"

  /** A schist variant rich in chlorite minerals, typically green in color. */
  | "schist_chlorite"

  /** A schist variant rich in graphite, often used in pencils. */
  | "schist_graphite"

  /** A schist variant rich in muscovite mica, with a glittery appearance. */
  | "schist_muscovite"

  /** A schist formed under blueschist facies conditions, often blue in color. */
  | "schist_blue"

  /** A metamorphic rock with a soapy feel, composed mainly of talc. */
  | "soapstone"

  /** A metamorphic rock composed of serpentine minerals, often greenish. */
  | "serpentine"

  /** A fine-grained metamorphic rock that splits easily into thin layers. */
  | "slate"

  /** A slate variant formed in glacial environments, with unique striations. */
  | "slate_glacis"

  /** A slate variant with natural spell-conductive properties. */
  | "slate_spell"

  /** A dense metamorphic rock composed primarily of talc. */
  | "steatite"

  /** A metamorphic rock containing tremolite, often used in sculpture. */
  | "tremolite"

  /** A soft metamorphic rock composed mainly of talc. */
  | "talc";

/** Igneous stone types. */
type IgneousStoneTypes =
  /** A fine-grained volcanic rock high in silica, typically light-colored. */
  | "andesite"

  /** A dark, fine-grained volcanic rock low in silica. */
  | "basalt"

  /** A rare igneous rock rich in carbonate minerals. */
  | "carbonatite"

  /** An intermediate volcanic rock between andesite and rhyolite. */
  | "dacite"

  /** A coarse-grained intrusive rock composed of plagioclase and hornblende. */
  | "diorite"

  /** A diorite variant with quartz inclusions. */
  | "diorite_quartz"

  /** A light-colored volcanic rock rich in feldspar. */
  | "felsite"

  /** A coarse-grained intrusive rock rich in iron and magnesium. */
  | "gabbro"

  /** A gneiss variant formed from mafic igneous rocks. */
  | "gneiss_mafic"

  /** A coarse-grained intrusive rock high in silica, commonly used in construction. */
  | "granite"

  /** An ultramafic rock composed of olivine and pyroxene. */
  | "peridotite"

  /** A rare ultramafic volcanic rock from the Archean eon. */
  | "komatiite"

  /** A dark igneous rock with large crystals embedded in a fine-grained matrix. */
  | "lamprophyre"

  /** A dense volcanic rock formed from rapidly cooled magma. */
  | "magmastone"

  /** A medium-grained intrusive rock with alkali feldspar. */
  | "monzonite"

  /** A fictional ore-bearing rock with magical properties. */
  | "netherite"

  /** A volcanic glass formed from rapidly cooled felsic lava. */
  | "obsidian"

  /** A coarse-grained intrusive rock with large crystals. */
  | "pegmatite"

  /** A light-colored volcanic rock rich in feldspathoids. */
  | "phonolite"

  /** An igneous rock with large phenocrysts in a fine-grained matrix. */
  | "porphyry"

  /** A tonalite variant with porphyritic texture. */
  | "tonalite_porphyritic"

  /** A pyroclastic rock formed from volcanic ash. */
  | "pyroclast"

  /** A quartz variant with reddish coloration from iron oxides. */
  | "quartz_red"

  /** A volcanic rock intermediate between dacite and rhyolite. */
  | "rhyodacite"

  /** A light-colored volcanic rock high in silica. */
  | "rhyolite"

  /** A medium-grained intrusive rock composed of alkali feldspar. */
  | "syenite"

  /** A fine-grained volcanic rock with trachytic texture. */
  | "trachyte"

  /** A consolidated pyroclastic rock composed of volcanic ash. */
  | "tuff";

/** Sedimentary stone types. */
type SedimentaryStoneType =
  /** A fine-grained rock composed of gypsum, often used decoratively. */
  | "alabaster"

  /** A hard coal formed from ancient plant matter. */
  | "anthracite"

  /** A metamorphosed claystone with fine laminations. */
  | "argillite"

  /** A sandstone rich in feldspar, often pink or red in color. */
  | "arkose"

  /** A coarse-grained sedimentary rock with rounded clasts. */
  | "breccia"

  /** A soft, white limestone composed of coccoliths. */
  | "chalk"

  /** A hard, dense sedimentary rock composed of microcrystalline quartz. */
  | "chert"

  /** A limestone composed of shell fragments, often used decoratively. */
  | "coquina"

  /** A sedimentary rock composed of diatoms' siliceous remains. */
  | "diatomite"

  /** A limestone variant with magnesium carbonate. */
  | "dolomite"

  /** A sedimentary rock formed from compacted clay particles. */
  | "flint"

  /** A reddish sedimentary rock composed of iron oxide and quartz. */
  | "red_jasper"

  /** A sedimentary rock formed from glacial till. */
  | "glacial_erratic"

  /** A loosely cemented sandstone with angular grains. */
  | "greywacke"

  /** A porous limestone formed by precipitation from mineral springs. */
  | "travertine"

  /** A limestone variant rich in fossilized remains. */
  | "limestone_fossiliferous"

  /** A limestone composed of ooids, often used in construction. */
  | "limestone_oolitic"

  /** A sedimentary rock formed from mud and clay particles. */
  | "mudstone"

  /** A soft brown coal formed from compressed plant matter. */
  | "lignite"

  /** A sedimentary rock formed from silt-sized particles. */
  | "siltstone"

  /** A sedimentary rock composed of sand-sized mineral particles. */
  | "sandstone"

  /** A fine-grained sedimentary rock composed of clay minerals. */
  | "shale"

  /** A black shale variant rich in organic material. */
  | "shale_black"

  /** A shale variant impregnated with hydrocarbons. */
  | "shale_oil"

  /** A dense sedimentary rock formed from volcanic ash. */
  | "gossan"

  /** A sedimentary rock containing iron oxide concretions. */
  | "huntstone"

  /** A carbon-rich sedimentary rock used in jewelry. */
  | "jet"

  /** A metamorphosed coal with high carbon content. */
  | "shungite";

/** Volcanic stone types. */
type VolcanicStoneType =
  /** A volcanic breccia formed from fragmented lava. */
  | "breccia_volcanic"

  /** A glassy volcanic rock with a perlitic texture. */
  | "perlite"

  /** A vesicular volcanic rock formed from rapidly cooled lava. */
  | "pumice_volcanic"

  /** A reddish scoria formed from oxidized iron. */
  | "scoria_red"

  /** A volcanic slag formed from rapidly cooled lava. */
  | "slag_volcanic"

  /** A welded pyroclastic rock formed from volcanic ash. */
  | "ignimbrite"

  /** A smooth ropy lava rock formed from basaltic lava. */
  | "pahoehoe"

  /** A pyroclastic material ejected during volcanic eruptions. */
  | "tephra"

  /** A glassy volcanic rock with a porphyritic texture. */
  | "vitrophyre";

/** Frozen stone types. */
type FrozenStoneType =
  /** A glacial erratic transported by ice movement. */
  | "erratic_glacial"

  /** A marble variant formed in freezing environments. */
  | "marble_frost"

  /** A permanently frozen ground containing ice and organic material. */
  | "permafrost"

  /** A quartzite variant with ice inclusions. */
  | "quartzite_frozen"

  /** A stone formed from compacted snow and ice. */
  | "frostone"

  /** A stone formed from glacial ice and rock fragments. */
  | "icestone"

  /** A stone formed from frozen sleet and mineral particles. */
  | "sleetstone"

  /** A stone formed from compressed snow and ice. */
  | "snowstone";

/** Mineral stone types. */
type MineralStoneType =
  /** A cryptocrystalline quartz variant with banded colors. */
  | "agate"

  /** A purple variety of quartz, often used in jewelry. */
  | "amethyst"

  /** A plutonic rock composed of labradorite and pyroxene. */
  | "anorthosite"

  /** A blue-green gemstone from the beryl family. */
  | "aquamarine"

  /** A copper oxide mineral, often used as an ore. */
  | "cuprite"

  /** A sodium aluminum fluoride mineral, historically used in metallurgy. */
  | "cryolite"

  /** A precious gemstone formed from carbon under high pressure. */
  | "diamond"

  /** A green gemstone from the beryl family. */
  | "emerald"

  /** A red gemstone from the corundum family. */
  | "ruby"

  /** A blue gemstone from the corundum family. */
  | "sapphire"

  /** A pink to red gemstone from the garnet group. */
  | "garnet"

  /** A calcium sulfate mineral used in construction. */
  | "gypsum"

  /** A sodium-rich feldspar with labradorescence. */
  | "labradorite"

  /** A metamorphic rock composed of jasper and hematite. */
  | "jasper_mookaite"

  /** A sodium aluminum silicate from the pyroxene group. */
  | "jadeite"

  /** A magnesium-rich silicate with bladed crystals. */
  | "kyanite"

  /** A calcium-rich feldspar with aventurescence. */
  | "larvikite"

  /** A hydrous magnesium silicate, often used in cosmetics. */
  | "talc"

  /** A sodium-rich feldspar with moonstone effect. */
  | "moonstone"

  /** A magnesium iron silicate with a layered structure. */
  | "mica"

  /** A mica variant rich in chlorite, often green in color. */
  | "mica_chlorite"

  /** A calcium magnesium carbonate, often blue in color. */
  | "marcasite"

  /** A boron silicate gemstone with piezoelectric properties. */
  | "tourmaline"

  /** A calcium aluminum silicate gemstone. */
  | "topaz"

  /** A hydrated iron phosphate, often blue-green in color. */
  | "turquoise"

  /** A zirconium silicate gemstone, often used as a diamond simulant. */
  | "zircon"

  /** A magnesium iron silicate mineral, often olive-green. */
  | "olivine"

  /** A hydrated silica mineral with play-of-color. */
  | "opal"

  /** A magnesium silicate mineral, often yellow in color. */
  | "citrine"

  /** A magnesium aluminum oxide gemstone. */
  | "spinel"

  /** A native element sulfur mineral, often yellow in color. */
  | "sulphur"

  /** A blue metamorphic rock containing lazurite. */
  | "lapis"

  /** A green gem-quality variety of olivine. */
  | "peridot"

  /** A cryptocrystalline quartz variant, often used in jewelry. */
  | "quartz"

  /** A greenish mineral from the chlorite group. */
  | "chlorite"

  /** A calcium aluminum garnet with high refractive index. */
  | "andradite";

/** Physical subtypes of stone. */
type StoneSubTypePhysical =
  /** A large rock formed through natural weathering processes. */
  | "boulder"

  /** An irregularly shaped rock fragment larger than a pebble. */
  | "chunk"

  /** A rounded stone smoothed by water erosion. */
  | "cobble"

  /** A stone with visible crystal structures. */
  | "crystalline"

  /** Broken stone fragments from erosion or collapse. */
  | "debris"

  /** Fine rock particles often airborne or settling as sediment. */
  | "dust"

  /** A small, broken stone piece from fractures. */
  | "fragment"

  /** A hollow rock with internal crystal formations. */
  | "geode"

  /** Small, loose rock fragments from weathering. */
  | "gravel"

  /** A small, rounded stone smoothed by water. */
  | "pebble"

  /** Ultrafine rock dust from grinding or erosion. */
  | "powder"

  /** A small, broken stone piece from fractures. */
  | "rubble"

  /** A finely ground rock particle, common in deserts. */
  | "sand"

  /** A sharp, broken stone fragment. */
  | "shard";

/** Processed stone subtypes. */
type StoneSubTypeProcessed =
  /** Stone units shaped for construction use. */
  | "brick"

  /** Stone carved into artistic forms. */
  | "carved"

  /** Stone with shallow carvings forming text or images. */
  | "chiseled"

  /** Stone with visible fracture lines. */
  | "cracked"

  /** Stone coated with a glossy protective layer. */
  | "lacquered"

  /** Stone shaped for architectural structures. */
  | "column"

  /** Stone compressed under high pressure. */
  | "compressed"

  /** Stone cut for precision applications. */
  | "cut"

  /** Stone decorated with additional materials. */
  | "embellished"

  /** Stone with engraved intricate designs. */
  | "engraved"

  /** Stone infused with magical elements. */
  | "infused"

  /** Stone strengthened with other materials. */
  | "reinforced"

  /** Stone shaped into curved architectural forms. */
  | "arch"

  /** Stone with repeated artistic designs. */
  | "patterned"

  /** Stone with a smooth, reflective surface. */
  | "polished"

  /** Stone shaped into step-like structures. */
  | "stairs"

  /** Stone sealed with a protective resin. */
  | "varnished"

  /** Stone carved with ancient symbols. */
  | "runic"

  /** Thin, flat slabs used for flooring. */
  | "tile"

  /** Broad, thick, flat-cut stone pieces. */
  | "slab"

  /** Stone with a uniform texture and no rough edges. */
  | "smooth"

  /** Stone crafted into three-dimensional shapes. */
  | "sculpted"

  /** Stone used in large structural walls. */
  | "wall"

  /** Stone with artificial or natural coloration. */
  | "stained"

  /** Stone covered with a thin layer of gold. */
  | "gilded"

  /** Flat, durable stone used in pathways. */
  | "paver"

  /** Stone imbued with supernatural properties. */
  | "arcane"

  /** Stone magically enhanced for special abilities. */
  | "enchanted";

/** Environmental stone variations. */
type StoneSubTypeEnvironmental =
  /** Stone coated with ice, slippery to the touch. */
  | "icy"

  /** Stone covered in moss, indicating moisture. */
  | "mossy"

  /** Stone formed from volcanic activity, often porous. */
  | "volcanic"

  /** Stone shaped by glacial movement. */
  | "glacial"

  /** Stone containing radioactive minerals. */
  | "radioactive"

  /** Stone mixed with residual smelting material. */
  | "slaggy"

  /** Stone coated with mud, wet or dried. */
  | "muddy"

  /** Stone covered in snow, found in cold biomes. */
  | "snowy"

  /** Stone with frost formations on the surface. */
  | "frosty"

  /** Stone worn down by natural elements over time. */
  | "weathered"

  /** Stone reduced in size by wind or water. */
  | "eroded"

  /** Stone covered in lichen, indicating age. */
  | "lichened"

  /** Stone with a hard outer layer from mineral buildup. */
  | "crusted"

  /** Stone colored by minerals or artificially. */
  | "stained"

  /** Stone coated with fine volcanic ash. */
  | "volcanic_ash"

  /** Stone covered with fine particles from dry conditions. */
  | "dusty";

/** Functional stone subtypes. */
type StoneSubTypeFunctional =
  /** Stone imbued with magical energy. */
  | "charged"

  /** Stone infused with mana for spellcasting. */
  | "mana_infused"

  /** Stone corrupted by void energies. */
  | "void_tainted"

  /** Stone bound to a specific soul or entity. */
  | "soulbound"

  /** Stone infected by blight or decay. */
  | "blighted"

  /** Stone enhanced with kinetic energy. */
  | "energized"

  /** Stone with magnetic properties. */
  | "magnetized"

  /** Stone amplified by external forces. */
  | "empowered"

  /** Stone afflicted by a curse. */
  | "cursed"

  /** Stone cleansed of impurities. */
  | "purified"

  /** Stone enhanced with additional minerals. */
  | "enriched"

  /** Stone with high electrical conductivity. */
  | "conductive"

  /** Stone vibrating at specific frequencies. */
  | "resonant";

/** Special stone subtypes. */
type StoneSubTypeSpecial =
  /** A central stone with concentrated properties. */
  | "core"

  /** A small, irregular stone piece. */
  | "fragment"

  /** Fibrous mineral strands within stone. */
  | "fiber"

  /** A mixture of stone particles and binders. */
  | "aggregate"

  /** A liquid suspension of stone particles. */
  | "slurry"

  /** A small, solid piece of valuable stone. */
  | "nugget"

  /** A dense grouping of crystals. */
  | "cluster"

  /** The distilled essence of stone properties. */
  | "essence"

  /** Tiny crystalline structures within stone. */
  | "crystallite"

  /** A stone precursor for growth or replication. */
  | "seed"

  /** Leftover material after stone processing. */
  | "residue"

  /** A purified form of stone components. */
  | "extract";

/** Luminescent stone subtypes. */
type StoneSubTypeLuminescent =
  /** Stone emitting consistent light. */
  | "glowing"

  /** Stone absorbing and re-emitting light in darkness. */
  | "phosphorescent"

  /** Stone emitting intense, bright light. */
  | "radiant"

  /** Stone emitting light and heat. */
  | "incandescent"

  /** Stone emitting a soft, natural glow. */
  | "luminous"

  /** Stone displaying shifting colors with angle. */
  | "iridescent"

  /** Stone glowing due to biological or magical factors. */
  | "bioluminescent";

/** Abrasive stone subtypes. */
type StoneSubTypeAbrasive =
  /** Stone with small, sharp particles. */
  | "gritty"

  /** Stone with rough, uneven texture. */
  | "coarse"

  /** Stone with an irregular, uneven surface. */
  | "rough";

/** Textural stone subtypes. */
type StoneSubTypeTextural =
  /** Stone with many small holes or cavities. */
  | "porous"

  /** Stone with tightly packed mineral grains. */
  | "dense"

  /** Stone with visible stratification. */
  | "layered";

// Resource stone type definitions with renamed and sorted values
type ResourceStoneMetamorphic = `stone_${MetamorphicStoneTypes}`;
type ResourceStoneIgneous = `stone_${IgneousStoneTypes}`;
type ResourceStoneSedimentary = `stone_${SedimentaryStoneType}`;
type ResourceStoneVolcanic = `stone_${VolcanicStoneType}`;
type ResourceStoneFrozen = `stone_${FrozenStoneType}`;
type ResourceStoneMineral = `stone_${MineralStoneType}`;
