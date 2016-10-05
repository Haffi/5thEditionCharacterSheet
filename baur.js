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
            "level": 1,
            "hitdice": "d6"
        }
    },
    "inspirationpoints": 0,
    "hitpoints": 9,
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
        "str": 10,
        "dex": 14,
        "con": 16,
        "int": 15,
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
            "Component pouch"
        ]
    },
    "personality": {
        "traits": "I am utterly serene, even in the face of disaster.",
        "ideals": "Meddling in the affairs of others only causes trouble.",
        "bonds": "My life\'s work is writing a book on Vitalism.",
        "flaws": "I\'d risk too much to uncover a lost bit of knowledge."
    },
    "features": [
        "Darkvision (60\')", // from race
        "Relentless Endurance", // from race
        "Savage Attacks", // from race
        "Arcane Recovery", // from class
        "Magic Initiate: Cleric" // Spare the Dying, Thaumaturgy, Sanctuary 
    ],
    "spellcasting": {
        "spellcastingAbility": "int",
        "spellSlots": {
            "spells0": 0,
            "spells1": 2
        },
        "spells": {
            "spells0": ["Chill Touch", "Light", "Ray of Frost", "Spare the Dying", "Thaumaturgy"],
            "spells1": ["Detect Magic", "False Life", "Find Familiar", "Identify", "Inflict Wounds", "Ray of Sickness", "Witch Bolt"]
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
