var charJson =
{
    "name": "Volen", // born and raised on the outskirts of a cattle ranch to the NNW of Longsaddle (scag p.48)
    "classes": { // father is unknown, mother (Aret) is a lone Orc shaman living in a small cottage
        "Fighter": { // Aret has come to some understanding with the Kromlor family who own the ranch
            "level": 3, // Volen suspects her father is not a local, is curious to find out more about the outside world
            "hitdice": "d10"
        }
    },
    "inspirationpoints": 0,
    "hitpoints": 32, // 13 + 9
    "ac": 18, // 16 (chain mail) + 2 (shield)
    "speed": 30,
    "mainattributes": {
        "background": "Mercenary Veteran", // served four years in Red Shields mercenary band
        "race": "Half-Orc",
        "alignment": "Lawful Neutral",
        "playername": "Haffi",
        "xp": 300 // page 15 in PHB
    },
    "appearance": {
        "age": 19, // left home at 14 years of age
        "height": "6\'5\"", // 195cm
        "weight": "227 lbs.", // 103kg
        "eyes": "black", // constantly on the lookout for a potential threat, always weighing her options in case a fight breaks out
        "skin": "pale grey", // skin "like a drowned corpse" like one drunk mercenary put it
        "hair": "black" // close cut, usually covered by a helmet
    },
    "abilityscores": {
        "str": 17,
        "dex": 13,
        "con": 16,
        "int": 9,
        "wis": 12,
        "cha": 10
    },
    "savingthrow_proficiencies": [
        "str",
        "con"
    ],
    "skill_proficiences": [
        "acrobatics",
        "animal handling",
        "athletics",
        "intimidation",
        "perception"
    ],
    "attacks": {
        "longsword": {
            "ability": "str",
            "extraDmgMod": +2, // Duelist fighting style
            "die": "1d8",
            "proficient": true,
            "type": "slashing"
        },
        "handaxe": {
            "ability": "str",
            "extraDmgMod": +2, // Duelist fighting style
            "die": "1d6",
            "proficient": true,
            "type": "slashing"
        },
        "warhammer": {
            "ability": "str",
            "extraDmgMod": +2, // Duelist fighting style
            "die": "1d8",
            "proficient": true,
            "type": "bludgeoning"
        }
    },
    "equipment": {
        "coins": {
            "copper": 0,
            "silver": 0,
            "electrum": 0,
            "gold": 26,
            "platinum": 0
        },
        "other": [
            "backpack",
            "bedroll",
            "mess kit",
            "tinderbox",
            "10 torches",
            "10 days rations",
            "50\' hemp rope",
            "traveler\'s clothes", // Red Shields uniform
            "seargent\'s insignia", // left the Red Shields in good standing
            "bone dice",
            "chain mail",
            "longsword",
            "shield", // painted red
            "handaxe (pair)",
            "warhammer",
            "helmet",
            "cameo of a hideous person" // trinket 61, connected to father in some way
        ]
    },
    "personality": {
        "traits": "I keep my back to the wall, an eye out for potential threat and my sword at hand.",
        "ideals": "Ideals aren't worth killing over, or going to war for.",
        "bonds": "I work hard to suppress the Mark of Gruumsh.",
        "flaws": "I have little respect for anyone that is not a proven warrior."
    },
    "features": [ // Feat plan: Resilient (dex), Medium Armor Mastery, get Half plate armor then Dex to 16
        "Menacing: Proficient in Intimidation (p.41)",
        "Relentless Endurance: Once per long rest, drop to 1 instead of 0 hit ponts (p.41)",
        "Savage Attacks: Roll additional damage die on critical hits (p.41)",
        "Fighting Style: Duelist, +2 dmg while using a single one handed weapon (p.72)",
        "Second Wind: Once per long rest, regain hit points equal to d10 + Fighter level (p.72)",
        "Shield Master: Shove as bonus action, shield AC bonus to dex saves, evasion (p.169)",
        "Mercenary Life: I have knowledge of and contacts within mercenary companies (scag p.152)",
        "Action Surge: Additional action once per short rest (p.72)",
        "Improved Critical: Score crit on 19 or 20 (p.72)"
    ],
    "proficiencies": [ 
        "Dice games",
        "Vehicles (land)",
        "Light, medium & heavy armor",
        "Simple & martial weapons"
    ],
    "languages": [
        "Common",
        "Orc"
    ],
    "contacts": [
    "Garrik - Officer in the \'Red Shields\' mercenary band.",
    "Kara - Priest of the Red Knight, military advisor."
    ]
};
