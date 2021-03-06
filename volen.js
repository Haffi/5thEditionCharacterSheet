var charJson =
{
    "name": "Volen", // born and raised on the outskirts of a cattle ranch to the NNW of Longsaddle (scag p.48)
    "classes": { // father is unknown, mother (Aret) is a lone Orc shaman living in a small cottage
        "Fighter": { // Aret has come to some understanding with the Kromlor family who own the ranch
            "level": 8, // Volen suspects her father is not a local, is curious to find out more about the outside world
            "hitdice": "d10"
        }
    },
    "inspirationpoints": 0,
    "hitpoints": 79, // 13 + 9 + 10 + 9 + 9 + 11 + 9 + 9
    "ac": 20, // 18 (plate) + 2 (shield)
    "speed": 30,
    "mainattributes": {
        "background": "Mercenary Veteran", // served four years in Red Shields mercenary band
        "race": "Half-Orc",
        "alignment": "Lawful Neutral",
        "playername": "Haffi",
        "xp": 34000 // page 15 in PHB
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
        "str": 20, // +2 Half-Orc, +1 Heavy Armor Master, +2 8th lvl ASI
        "dex": 14, // +1 Resilient feat
        "con": 16, // +1 Half-Orc
        "int": 9,
        "wis": 12,
        "cha": 10
    },
    "savingthrow_proficiencies": [
        "str",
        "con",
        "dex" // Resilient feat
    ],
    "skill_proficiences": [
        "acrobatics",
        "animal handling",
        "athletics",
        "intimidation",
        "perception"
    ],
    "attacks": {
        "Hag's Claw (longsword) +1": {
            "ability": "str",
            "extraDmgMod": +3, // Duelist fighting style
            "die": "1d8/1d10",
            "proficient": true,
            "type": "slashing"
        },
        "Mace (+0)": {
            "ability": "str",
            "extraDmgMod": +2, // Duelist fighting style
            "die": "1d8",
            "proficient": true,
            "type": "bludgeoning"
        },
        "Storm boomerang": {
            "ability": "str",
            "extraDmgMod": 0,
            "die": "4d4",
            "proficient": true,
            "type": "bludgeoning"
        }
    },
    "equipment": {
        "coins": {
            "copper": 0,
            "silver": 0,
            "electrum": 0,
            "gold": 1326,
            "platinum": 0
        },
        "other": [
            "backpack",
            "bedroll",
            "mess kit",
            "tinderbox",
            "10 torches",
            "10 days rations",
            "50' hemp rope",
            "traveler's clothes", // Red Shields uniform
            "seargent's insignia", // left the Red Shields in good standing
            "bone dice",
            "plate armor",
            "longsword +1", // found in a Sea Hag's lair
            "shield",
            "mace", // enchanted but gives no bonus
            "helmet",
            "cameo of a hideous person", // trinket 61, connected to father in some way
            "2 x Storm boomerang - +3d4 thunder damage, DC 10 con save or be stunned", // I have no idea how these regain their charges
            "'Bottled breath' (potion)"
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
        "Improved Critical: Score crit on 19 or 20 (p.72)",
        "Resilient (Dex): Gain proficiency in Dexterity saving throws (p. 168)",
        "Extra attack: Attack twice with Attack action (p. 72)",
        "Heavy Armor Master: Ignore 3 mundane damage when wearing heavy armor (p. 167)",
        "Remarkable Athlete: Add half proficiency to Strength, Dexterity & Consitution checks; jump farther (p.72)",
        "8th level ability score increase - Strength"
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
