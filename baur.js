/*
Baur is Volen's older brother, he picked up basic spellcasting from their mothers (Aret) shamanism. He has been wandering the
Sword Coast for years looking to expand his knowledge on Vitalism & Necromancy. Occasionally he will linger in an area,
usually because there is an interesting library to plunder, and make a living by selling healing potions and other remedies
to the locals. 
*/
var charJson =
{
    "name": "Baur",
    "classes": {
        "Wizard": {
            "level": 5,
            "hitdice": "d6"
        }
    },
    "inspirationpoints": 0,
    "hitpoints": 40, // 9 + 8 + 7 + 7 + 9
    "ac": "12",
    "speed": 30,
    "mainattributes": {
        "background": "Wanderer", // Mixture of Outlander and Hermit
        "race": "Half-Orc",
        "alignment": "Neutral",
        "playername": "Haffi",
        "xp": 0
    },
    "appearance": {
        "age": 25,
        "height": "6\'6\"",
        "weight": "197 lbs",
        "eyes": "Black",
        "skin": "Dark Grey",
        "hair": "Black"
    },
    "abilityscores": {
        "str": 10, // +2 from Half-Orc
        "dex": 14,
        "con": 16, // +1 from Half-Orc
        "int": 16, // +1 from Keen Mind
        "wis": 13,
        "cha": 8
    },
    "savingthrow_proficiencies": [
        "int", "wis"
    ],
    "skill_proficiences": [
        "intimidation", // from Half-Orc
        "medicine", // from background
        "survival", // from background
        "arcana", // from class
        "investigation" // from class
    ],
    "attacks": {
        "Quarterstaff": {
            "ability": "str",
            "die": "1d6/1d8",
            "proficient": true,
            "type": "b"
        }
        "Dagger": {
            "ability": "dex",
            "die": "1d4",
            "proficient": true,
            "type": "p"
        },
        "Sling": {
            "ability": "dex",
            "die": "1d4",
            "proficient": true,
            "type": "b"
        }
    },
    "equipment": {
        "coins": {
            "copper": 0,
            "silver": 0,
            "electrum": 0,
            "gold": 5,
            "platinum": 0
        },
        "armor": [
            ],
        "other": [
            "Explorer\'s pack",
            "Traveler\'s clothes",
            "Winter blanket",
            "Scroll case stuffed with notes on Medicine and Necromancy",
            "Herbalism kit",
            "Component pouch",
            "Profane Staff", // Visions of the Vault p. 8
            "Healer's kit"
        ]
    },
    "personality": {
        "traits": "I am utterly serene, even in the face of disaster.",
        "ideals": "Meddling in the affairs of others only causes trouble.",
        "bonds": "My life\'s work is writing a book on Vitalism.",
        "flaws": "I\'d risk too much to uncover a lost bit of knowledge."
    },
    "features": [ // good feats: Healer, Keen Mind, War Caster
        "Darkvision (60\')", // from race
        "Relentless Endurance", // from race
        "Savage Attacks", // from race
        "Arcane Recovery: Regain spell slots on short rest (PH 115)", // from class
        "Magic Initiate: Cleric", // Spare the Dying, Thaumaturgy, Sanctuary
        "Familiar: Raven (celestial)",
        "Arcane Tradition: Necromancy",
        "Grim Harvest: Heal self when killing with spells (PH 118)",
        "Keen Mind: Always aware which way is north and what time it is, good memory. (PH 167)"
    ],
    "spellcasting": {
        "spellcastingAbility": "int",
        "spellSlots": {
            "spells0": 0,
            "spells1": 4,
            "spells2": 3,
            "spells3": 2
        },
        "spells": {
            "spells0": ["Chill Touch", "Light", "Ray of Frost", "Spare the Dying", "Thaumaturgy"],
            "spells1": ["Comprehend Languages", "Detect Magic", "False Life", "Find Familiar", "Identify", "Inflict Wounds", "Mage Armor" "Ray of Sickness", "Witch Bolt"],
            "spells2": ["Blindness/Deafness", "Gentle Repose", "Melf's Acid Arrow", "Ray of Enfeeblement"],
            "spells3": ["Animate Dead", "Bestow Curse"]
        }
    },
    "proficiencies": [
        "Herbalism kit" // from background
    ],
    "languages": [
        "Common",
        "Orc",
        "Elvish"
    ],
    "contacts": [
        ]
};
