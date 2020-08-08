module.exports = {
  pet_rarity_offset: {
    common: 0,
    uncommon: 6,
    rare: 11,
    epic: 16,
    legendary: 20
  },

  pet_levels: [
    100,
    110,
    120,
    130,
    145,
    160,
    175,
    190,
    210,
    230,
    250,
    275,
    300,
    330,
    360,
    400,
    440,
    490,
    540,
    600,
    660,
    730,
    800,
    880,
    960,
    1050,
    1150,
    1260,
    1380,
    1510,
    1650,
    1800,
    1960,
    2130,
    2310,
    2500,
    2700,
    2920,
    3160,
    3420,
    3700,
    4000,
    4350,
    4750,
    5200,
    5700,
    6300,
    7000,
    7800,
    8700,
    9700,
    10800,
    12000,
    13300,
    14700,
    16200,
    17800,
    19500,
    21300,
    23200,
    25200,
    27400,
    29800,
    32400,
    35200,
    38200,
    41400,
    44800,
    48400,
    52200,
    56200,
    60400,
    64800,
    69400,
    74200,
    79200,
    84700,
    90700,
    97200,
    104200,
    111700,
    119700,
    128200,
    137200,
    146700,
    156700,
    167700,
    179700,
    192700,
    206700,
    221700,
    237700,
    254700,
    272700,
    291700,
    311700,
    333700,
    357700,
    383700,
    411700,
    441700,
    476700,
    516700,
    561700,
    611700,
    666700,
    726700,
    791700,
    861700,
    936700,
    1016700,
    1101700,
    1191700,
    1286700,
    1386700,
    1496700,
    1616700,
    1746700,
    1886700
  ],

  pet_data: {
    "BAT": {
      head: "/head/382fc3f71b41769376a9e92fe3adbaac3772b999b219c9d6b4680ba9983e527",
      type: "mining",
      emoji: "🦇",
      stats: {
    	common: [
    	  {
    		stat: "Intelligence",
    		base: 1,
    		scaling: 1,
    		suffix: ""
    	  },
    	  {
    		stat: "Speed",
    		base: 0,
    		scaling: 0.0505050505,
    		suffix: ""
    	  }
    	],
    	uncommon: [
    	  {
    		stat: "Intelligence",
    		base: 1,
    		scaling: 1,
    		suffix: ""
    	  },
    	  {
    		stat: "Speed",
    		base: 0,
    		scaling: 0.0505050505,
    		suffix: ""
    	  }
    	],
    	rare: [
    	  {
    		stat: "Intelligence",
    		base: 1,
    		scaling: 1,
    		suffix: ""
    	  },
    	  {
    		stat: "Speed",
    		base: 0,
    		scaling: 0.0505050505,
    		suffix: ""
    	  }
    	],
    	epic: [
    	  {
    		stat: "Intelligence",
    		base: 1,
    		scaling: 1,
    		suffix: ""
    	  },
    	  {
    		stat: "Speed",
    		base: 0,
    		scaling: 0.0505050505,
    		suffix: ""
    	  }
    	],
    	legendary: [
    	  {
    		stat: "Intelligence",
    		base: 1,
    		scaling: 1,
    		suffix: ""
    	  },
    	  {
    		stat: "Speed",
    		base: 0,
    		scaling: 0.0505050505,
    		suffix: ""
    	  }
    	]
      },
      abilities: {
    	common: [
    	  {
    		name: "Candy Lover",
    		scalings: [
    		  {
    			name: "chance",
    			base: 0.1,
    			scaling: 0.1,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Increase the chance for mobs to drop Candy by §f{{chance}}%§7."
    		]
    	  }
    	],
    	uncommon: [
    		{
    			name: "Candy Lover",
    			scalings: [
    			  {
    				name: "chance",
    				base: 0.1,
    				scaling: 0.150505,
    				rounding: 1
    			  }
    			],
    			lore: [
    			  "§7Increase the chance for mobs to drop Candy by §f{{chance}}%§7."
    			]
    		}
    	],
    	rare: [
    		{
    			name: "Candy Lover",
    			scalings: [
    			  {
    				name: "chance",
    				base: 0.1,
    				scaling: 0.150505,
    				rounding: 1
    			  }
    			],
    			lore: [
    			  "§7Increase the chance for mobs to drop Candy by §f{{chance}}%§7."
    			]
    		},
    		{
    			name: "Nightmare",
    			scalings: [
    			  {
    				name: "intelligence",
    				base: 0.2,
    				scaling: 0.2,
    				rounding: 1
    			  },
    			  {
    				name: "speed",
    				base: 0.4,
    				scaling: 0.4,
    				rounding: 1
    			  }
    			],
    			lore: [
    			  "§7During night, gain §b+{{intelligence}} Intelligence§7, §f+{{speed}}% Speed§7, and night vision."
    			]
    		}
    	],
    	epic: [
    		{
    			name: "Candy Lover",
    			scalings: [
    			  {
    				name: "chance",
    				base: 0.2,
    				scaling: 0.2,
    				rounding: 1
    			  }
    			],
    			lore: [
    			  "§7Increase the chance for mobs to drop Candy by §f{{chance}}%§7."
    			]
    		},
    		{
    			name: "Nightmare",
    			scalings: [
    			  {
    				name: "intelligence",
    				base: 0.3,
    				scaling: 0.3,
    				rounding: 1
    			  },
    			  {
    				name: "speed",
    				base: 0.5,
    				scaling: 0.5,
    				rounding: 1
    			  }
    			],
    			lore: [
    			  "§7During night, gain §b+{{intelligence}} Intelligence§7, §f+{{speed}}% Speed§7, and night vision."
    			]
    		}

    	],
    	legendary: [
    		{
    			name: "Candy Lover",
    			scalings: [
    			  {
    				name: "chance",
    				base: 0.2,
    				scaling: 0.2,
    				rounding: 1
    			  }
    			],
    			lore: [
    			  "§7Increase the chance for mobs to drop Candy by §f{{chance}}%§7."
    			]
    		},
    		{
    			name: "Nightmare",
    			scalings: [
    			  {
    				name: "intelligence",
    				base: 0.3,
    				scaling: 0.3,
    				rounding: 1
    			  },
    			  {
    				name: "speed",
    				base: 0.5,
    				scaling: 0.5,
    				rounding: 1
    			  }
    			],
    			lore: [
    			  "§7During night, gain §b+{{intelligence}} Intelligence§7, §f+{{speed}}% Speed§7, and night vision."
    			]
    		},
    		{
    			name: "Fast Hooks",
    			scalings: [
    			  {
    				name: "cdr",
    				base: 0.75,
    				scaling: 0.75,
    				rounding: 1
    			  }
    			],
    			lore: [
    			  "§7Decreases the cooldown of your grappling hook by §f{{cdr}}%§7."
    			]
    		}
    	]
      }
    },
    "BLAZE": {
      head: "/head/b78ef2e4cf2c41a2d14bfde9caff10219f5b1bf5b35a49eb51c6467882cb5f0",
      type: "combat",
      emoji: "🔥",
      stats: {
    	epic: [
    	  {
    		stat: "Intelligence",
    		base: 1,
    		scaling: 1,
    		suffix: ""
    	  },
    	  {
    		stat: "Defense",
    		base: 10,
    		scaling: 0.202020202,
    		suffix: ""
    	  }
    	],
    	legendary: [
    	  {
    		stat: "Intelligence",
    		base: 1,
    		scaling: 1,
    		suffix: ""
    	  },
    	  {
    		stat: "Defense",
    		base: 10,
    		scaling: 0.202020202,
    		suffix: ""
    	  }
    	]
      },
      abilities: {
    	epic: [
    	  {
    		name: "Nether Embodiment",
    		scalings: [
    		  {
    			name: "superior",
    			base: 0.2,
    			scaling: 0.2,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Increases all stats by §f{{superior}}%§7 while in the Blazing Fortress."
    		]
    	  },
    	  {
    		name: "Bling Armor",
    		scalings: [
    		  {
    			name: "armorboost",
    			base: 0.4,
    			scaling: 0.4,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Upgrades Blaze Armor stats and ability by §f{{armorboost}}%§7."
    		]
    	  }
    	],
    	legendary: [
    	  {
    		name: "Nether Embodiment",
    		scalings: [
    		  {
    			name: "superior",
    			base: 0.2,
    			scaling: 0.2,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Increases all stats by §f{{superior}}%§7 while in the Blazing Fortress."
    		]
    	  },
    	  {
    		name: "Bling Armor",
    		scalings: [
    		  {
    			name: "armorboost",
    			base: 0.4,
    			scaling: 0.4,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Upgrades Blaze Armor stats and ability by §f{{armorboost}}%§7."
    		]
    	  },
    	  {
    		name: "Fusion-Style Potato",
    		scalings: [],
    		lore: [
    		  "§7Doubles all effects of Hot Potato Books."
    		]
    	  }
    	]
      }
    },
    "CHICKEN": {
      head: "/head/7f37d524c3eed171ce149887ea1dee4ed399904727d521865688ece3bac75e",
      type: "farming",
      emoji: "🐔",
      stats: {
    	common: [
    		{
    			stat: "Health",
    			base: 2,
    			scaling: 2,
    			suffix: ""
    		}
    	],
    	uncommon: [
    		{
    			stat: "Health",
    			base: 2,
    			scaling: 2,
    			suffix: ""
    		}
    	],
    	rare: [
    		{
    			stat: "Health",
    			base: 2,
    			scaling: 2,
    			suffix: ""
    		}
    	],
    	epic: [
    		{
    			stat: "Health",
    			base: 2,
    			scaling: 2,
    			suffix: ""
    		}
    	],
    	legendary: [
    		{
    			stat: "Health",
    			base: 2,
    			scaling: 2,
    			suffix: ""
    		}
    	]
      },
      abilities: {
    	common: [
    		{
    			name: "Light Feet",
    			scalings: [
    				{
    						name: "reduce",
    						base: 0.3,
    						scaling: 0.3,
    						rounding: 1
    				}
    			],
    			lore: [
    				"§7Reduces fall damage by §f{{reduce}}%§7."
    			]
    		}
    	],
    	uncommon: [
    		{
    			name: "Light Feet",
    			scalings: [
    				{
    						name: "reduce",
    						base: 0.4,
    						scaling: 0.4,
    						rounding: 1
    				}
    			],
    			lore: [
    				"§7Reduces fall damage by §f{{reduce}}%§7."
    			]
    		}
    	],
    	rare: [
    		{
    			name: "Light Feet",
    			scalings: [
    				{
    						name: "reduce",
    						base: 0.4,
    						scaling: 0.4,
    						rounding: 1
    				}
    			],
    			lore: [
    				"§7Reduces fall damage by §f{{reduce}}%§7."
    			]
    		},
    		{
    			name: "Eggstra",
    			scalings: [
    				{
    						name: "dropchance",
    						base: 0.8,
    						scaling: 0.8,
    						rounding: 1
    				}
    			],
    			lore: [
    				"§7Killing chickens has a §f{{dropchance}}%",
    				"§7chance to drop an egg."
    			]
    		}
    	],
    	epic: [
    		{
    			name: "Light Feet",
    			scalings: [
    				{
    						name: "reduce",
    						base: 0.5,
    						scaling: 0.5,
    						rounding: 1
    				}
    			],
    			lore: [
    				"§7Reduces fall damage by §f{{reduce}}%§7."
    			]
    		},
    		{
    			name: "Eggstra",
    			scalings: [
    				{
    						name: "dropchance",
    						base: 1,
    						scaling: 1,
    						rounding: 1
    				}
    			],
    			lore: [
    				"§7Killing chickens has a §f{{dropchance}}%",
    				"§7chance to drop an egg."
    			]
    		}

    	],
    	legendary: [
    		{
    			name: "Light Feet",
    			scalings: [
    				{
    						name: "reduce",
    						base: 0.5,
    						scaling: 0.5,
    						rounding: 1
    				}
    			],
    			lore: [
    				"§7Reduces fall damage by §f{{reduce}}%§7."
    			]
    		},
    		{
    			name: "Eggstra",
    			scalings: [
    				{
    						name: "dropchance",
    						base: 1,
    						scaling: 1,
    						rounding: 1
    				}
    			],
    			lore: [
    				"§7Killing chickens has a §f{{dropchance}}%",
    				"§7chance to drop an egg."
    			]
    		},
    		{
    			name: "Mighty Chickens",
    			scalings: [
    				{
    						name: "boost",
    						base: 1,
    						scaling: 1,
    						rounding: 1
    				}
    			],
    			lore: [
    				"§7Chicken minions work §f{{boost}}% §7faster",
    				"§7while on your island."
    			]
    		}
    	]
      }
    },
    "HORSE": {
      head: "/head/36fcd3ec3bc84bafb4123ea479471f9d2f42d8fb9c5f11cf5f4e0d93226",
      type: "combat",
      emoji: "🐴",
      stats: {
    	common: [
    		{
    			stat: "Intelligence",
    			base: 0,
    			scaling: 0.505050505,
    			suffix: ""
    		},
    		{
    			stat: "Speed",
    			base: 0,
    			scaling: 0.2525252525,
    			suffix: ""
    		}
    	],
    	uncommon: [
    		{
    			stat: "Intelligence",
    			base: 0,
    			scaling: 0.505050505,
    			suffix: ""
    		},
    		{
    			stat: "Speed",
    			base: 0,
    			scaling: 0.2525252525,
    			suffix: ""
    		}
    	],
    	rare: [
    		{
    			stat: "Intelligence",
    			base: 0,
    			scaling: 0.505050505,
    			suffix: ""
    		},
    		{
    			stat: "Speed",
    			base: 0,
    			scaling: 0.2525252525,
    			suffix: ""
    		}
    	],
    	epic: [
    		{
    			stat: "Intelligence",
    			base: 0,
    			scaling: 0.505050505,
    			suffix: ""
    		},
    		{
    			stat: "Speed",
    			base: 0,
    			scaling: 0.2525252525,
    			suffix: ""
    		}
    	],
    	legendary: [
    		{
    			stat: "Intelligence",
    			base: 0,
    			scaling: 0.505050505,
    			suffix: ""
    		},
    		{
    			stat: "Speed",
    			base: 0,
    			scaling: 0.2525252525,
    			suffix: ""
    		}
    	]
      },
      abilities: {
    	common: [
    	  {
    		name: "Rideable",
    		scalings: [],
    		lore: [
    		  "§7Right-click your summoned pet to ride it!"
    		]
    	  }
    	],
    	uncommon: [
    	  {
    		name: "Rideable",
    		scalings: [],
    		lore: [
    		  "§7Right-click your summoned pet to ride it!"
    		]
    	  }
    	],
    	rare: [
    	  {
    		name: "Rideable",
    		scalings: [],
    		lore: [
    		  "§7Right-click your summoned pet to ride it!"
    		]
    	  },
    	  {
    		name: "Run",
    		scalings: [
    			{
    				name: "speed",
    				base: 1.1,
    				scaling: 1.09898989898999,
    				rounding: 1
    			}
    		],
    		lore: [
    		  "§7Increases the speed of your mount by §f{{speed}}§7."
    		]
    	  }
    	],
    	epic: [
    	  {
    		name: "Rideable",
    		scalings: [],
    		lore: [
    		  "§7Right-click your summoned pet to ride it!"
    		]
    	  },
    	  {
    		name: "Run",
    		scalings: [
    			{
    				name: "speed",
    				base: 1.1,
    				scaling: 1.201010101,
    				rounding: 1
    			}
    		],
    		lore: [
    		  "§7Increases the speed of your mount by §f{{speed}}§7."
    		]
    	  }
    	],
    	legendary: [
    	  {
    		name: "Rideable",
    		scalings: [],
    		lore: [
    		  "§7Right-click your summoned pet to ride it!"
    		]
    	  },
    	  {
    		name: "Run",
    		scalings: [
    			{
    				name: "speed",
    				base: 1.1,
    				scaling: 1.2,
    				rounding: 1
    			}
    		],
    		lore: [
    		  "§7Increases the speed of your mount by §f{{speed}}§7."
    		]
    	  },
    	  {
    		name: "Ride Into Battle",
    		scalings: [
    			{
    				name: "damage",
    				base: 0.25,
    				scaling: 0.25,
    				rounding: 1
    			}
    		],
    		lore: [
    		  "§7While riding your horse, gain  §f{{damage}}§7 bow damage."
    		]
    	  },
    	  {
    		name: "Look at my horse",
    		scalings: [],
    		lore: [
    		  "§7My horse is amazing."
    		]
    	  }
    	]
      }
    },
    "JERRY": {
      head: "/head/822d8e751c8f2fd4c8942c44bdb2f5ca4d8ae8e575ed3eb34c18a86e93b",
      type: "combat",
      emoji: "🧑",
      stats: {
    	common: [
    		{
    			stat: "Intelligence",
    			base: -1,
    			scaling: -1,
    			suffix: ""
    		}
    	],
    	uncommon: [
    		{
    			stat: "Intelligence",
    			base: -1,
    			scaling: -1,
    			suffix: ""
    		}
    	],
    	rare: [
    		{
    			stat: "Intelligence",
    			base: -1,
    			scaling: -1,
    			suffix: ""
    		}
    	],
    	epic: [
    		{
    			stat: "Intelligence",
    			base: -1,
    			scaling: -1,
    			suffix: ""
    		}
    	],
    	legendary: [
    		{
    			stat: "Intelligence",
    			base: -1,
    			scaling: -1,
    			suffix: ""
    		}
    	]
      },
      abilities: {
    	common: [
    	  {
    		name: "Jerry",
    		scalings: [],
    		lore: [
    		  "§7Gain §650%§7 chance to deal your regular damage."
    		]
    	  },
    	  {
    		name: "Jerry",
    		scalings: [],
    		lore: [
    		  "§7Gain §6100%§7 chance to receive a normal amount of drops from mobs."
    		]
    	  }
    	],
    	uncommon: [
    	  {
    		name: "Jerry",
    		scalings: [],
    		lore: [
    		  "§7Gain §650%§7 chance to deal your regular damage."
    		]
    	  },
    	  {
    		name: "Jerry",
    		scalings: [],
    		lore: [
    		  "§7Gain §6100%§7 chance to receive a normal amount of drops from mobs."
    		]
    	  }
    	],
    	rare: [
    	  {
    		name: "Jerry",
    		scalings: [],
    		lore: [
    		  "§7Gain §650%§7 chance to deal your regular damage."
    		]
    	  },
    	  {
    		name: "Jerry",
    		scalings: [],
    		lore: [
    		  "§7Gain §6100%§7 chance to receive a normal amount of drops from mobs."
    		]
    	  }
    	],
    	epic: [
    	  {
    		name: "Jerry",
    		scalings: [],
    		lore: [
    		  "§7Gain §650%§7 chance to deal your regular damage."
    		]
    	  },
    	  {
    		name: "Jerry",
    		scalings: [],
    		lore: [
    		  "§7Gain §6100%§7 chance to receive a normal amount of drops from mobs."
    		]
    	  }
    	],
    	legendary: [
    	  {
    		name: "Jerry",
    		scalings: [],
    		lore: [
    		  "§7Gain §650%§7 chance to deal your regular damage."
    		]
    	  },
    	  {
    		name: "Jerry",
    		scalings: [],
    		lore: [
    		  "§7Gain §6100%§7 chance to receive a normal amount of drops from mobs."
    		]
    	  },
    	  {
    		name: "Jerry",
    		scalings: [
    			{
    				name: "damage",
    				base: 0,
    				scaling: 0.10101010101,
    				rounding: 1
    			}
    		],
    		lore: [
    		  "§Actually adds §f{{damage}} Damage §7to the Aspect of the Jerry."
    		]
    	  }
    	]
      }
    },
    "OCELOT": {
      head: "/head/5657cd5c2989ff97570fec4ddcdc6926a68a3393250c1be1f0b114a1db1",
      type: "foraging",
      emoji: "🐈",
      stats: {
    	common: [
    	  {
    		stat: "Speed",
    		base: 0,
    		scaling: 0.505050505,
    		suffix: ""
    	  }
    	],
    	uncommon: [
    	  {
    		stat: "Speed",
    		base: 0,
    		scaling: 0.505050505,
    		suffix: ""
    	  }
    	],
    	rare: [
    	  {
    		stat: "Speed",
    		base: 0,
    		scaling: 0.505050505,
    		suffix: ""
    	  }
    	],
    	epic: [
    	  {
    		stat: "Speed",
    		base: 0,
    		scaling: 0.505050505,
    		suffix: ""
    	  }
    	],
    	legendary: [
    	  {
    		stat: "Speed",
    		base: 0,
    		scaling: 0.505050505,
    		suffix: ""
    	  }
    	]
      },
      abilities: {
    	common: [
    	  {
    		name: "Foraging Exp Boost",
    	    scalings: [
    		  {
    			name: "foragingxp",
    			base: 0.2,
    			scaling: 0.2,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Boosts your Foraging experience by §f{{foragingxp}}%§7."
    	    ]
    	  }
    	],
    	uncommon: [
    	  {
    		name: "Foraging Exp Boost",
    	    scalings: [
    		  {
    			name: "foragingxp",
    			base: 0.2,
    			scaling: 0.25050505,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Boosts your Foraging experience by §f{{foragingxp}}%§7."
    	    ]
    	  }
    	],
    	rare: [
    	  {
    		name: "Foraging Exp Boost",
    	    scalings: [
    		  {
    			name: "foragingxp",
    			base: 0.2,
    			scaling: 0.25050505,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Boosts your Foraging experience by §f{{foragingxp}}%§7."
    	    ]
    	  },
    	  {
    		name: "Tree Hugger",
    	    scalings: [
    		  {
    			name: "foragingminionbuff",
    			base: 0.3,
    			scaling: 0.3,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Foraging minions work §f{{foragingminionbuff}}% §7faster while on your island."
    	    ]
    	  }
    	],
    	epic: [
    	  {
    		name: "Foraging Exp Boost",
    	    scalings: [
    		  {
    			name: "foragingxp",
    			base: 0.2,
    			scaling: 0.301010101,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Boosts your Foraging experience by §f{{foragingxp}}%§7."
    	    ]
    	  },
    	  {
    		name: "Tree Hugger",
    	    scalings: [
    		  {
    			name: "foragingminionbuff",
    			base: 0.3,
    			scaling: 0.3,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Foraging minions work §f{{foragingminionbuff}}% §7faster while on your island."
    	    ]
    	  }
    	],
    	legendary: [
    	  {
    		name: "Foraging Exp Boost",
    	    scalings: [
    		  {
    			name: "foragingxp",
    			base: 0.2,
    			scaling: 0.301010101,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Boosts your Foraging experience by §f{{foragingxp}}%§7."
    	    ]
    	  },
    	  {
    		name: "Tree Hugger",
    	    scalings: [
    		  {
    			name: "foragingminionbuff",
    			base: 0.3,
    			scaling: 0.3,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Foraging minions work §f{{foragingminionbuff}}% §7faster while on your island."
    	    ]
    	  },
    	  {
    		name: "Tree Essence",
    		scalings: [
    		  {
    			name: "treexp",
    			base: 0.3,
    			scaling: 0.3,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Gain a §f{{treexp}}% §7chance to get exp from breaking a log."
    	    ]
    	  }
    	]
      }
    },
    "PIGMAN": {
      head: "/head/63d9cb6513f2072e5d4e426d70a5557bc398554c880d4e7b7ec8ef4945eb02f2",
      type: "combat",
      emoji: "🐷",
      stats: {
    	epic: [
    	  {
    		stat: "Strength",
    		base: 1,
    		scaling: 0.49494949494949,
    		suffix: ""
    	  },
    	  {
    		stat: "Defense",
    		base: 1,
    		scaling: 0.49494949494949,
    		suffix: ""
    	  }
    	],
    	legendary: [
    	  {
    		stat: "Strength",
    		base: 1,
    		scaling: 0.49494949494949,
    		suffix: ""
    	  },
    	  {
    		stat: "Defense",
    		base: 1,
    		scaling: 0.49494949494949,
    		suffix: ""
    	  }
    	]
      },
      abilities: {
    	epic: [
    	  {
    		name: "Bacon Farmer",
    		scalings: [
    		  {
    			name: "speedbuff",
    			base: 0.3,
    			scaling: 0.3,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Pig minions work §f{{speedbuff}}% §7faster while on your island."
    		]
    	  },
    	  {
    		name: "Pork Master",
    		scalings: [
    		  {
    			name: "damage",
    			base: 0.4,
    			scaling: 0.4,
    			rounding: 1
    		  },
    		  {
    			name: "strength",
    			base: 0.25,
    			scaling: 0.25,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Buffs the Pigman Sword by §f{{damage}} Damage §7and §c{{strength}} Strength§7."
    		]
    	  }
    	],
    	legendary: [
    	  {
    		name: "Bacon Farmer",
    		scalings: [
    		  {
    			name: "speedbuff",
    			base: 0.3,
    			scaling: 0.3,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Pig minions work §f{{speedbuff}}% §7faster while on your island."
    		]
    	  },
    	  {
    		name: "Pork Master",
    		scalings: [
    		  {
    			name: "damage",
    			base: 0.4,
    			scaling: 0.4,
    			rounding: 1
    		  },
    		  {
    			name: "strength",
    			base: 0.25,
    			scaling: 0.25,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Buffs the Pigman Sword by §f{{damage}} Damage §7and §c{{strength}} Strength§7."
    		]
    	  },
    	  {
    		name: "Giant Slayer",
    		scalings: [
    		  {
    			name: "damage",
    			base: 0.2,
    			scaling: 0.2505050505,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Deal §f{{damage}}%§7 extra damage to monsters level 100 and up."
    		]
    	  }
    	]
      }
    },
    "RABBIT": {
      head: "/head/117bffc1972acd7f3b4a8f43b5b6c7534695b8fd62677e0306b2831574b",
      type: "farming",
      emoji: "🐇",
      stats: {
    	common: [
    	  {
    		stat: "Health",
    		base: 1,
    		scaling: 1,
    		suffix: ""
    	  },
    	  {
    		stat: "Speed",
    		base: 0,
    		scaling: 0.20202020202,
    		suffix: ""
    	  }
    	],
    	uncommon: [
    	  {
    		stat: "Health",
    		base: 1,
    		scaling: 1,
    		suffix: ""
    	  },
    	  {
    		stat: "Speed",
    		base: 0,
    		scaling: 0.20202020202,
    		suffix: ""
    	  }
    	],
    	rare: [
    	  {
    		stat: "Health",
    		base: 1,
    		scaling: 1,
    		suffix: ""
    	  },
    	  {
    		stat: "Speed",
    		base: 0,
    		scaling: 0.20202020202,
    		suffix: ""
    	  }
    	],
    	epic: [
    	  {
    		stat: "Health",
    		base: 1,
    		scaling: 1,
    		suffix: ""
    	  },
    	  {
    		stat: "Speed",
    		base: 0,
    		scaling: 0.20202020202,
    		suffix: ""
    	  }
    	],
    	legendary: [
    	  {
    		stat: "Health",
    		base: 1,
    		scaling: 1,
    		suffix: ""
    	  },
    	  {
    		stat: "Speed",
    		base: 0,
    		scaling: 0.20202020202,
    		suffix: ""
    	  }
    	]
      },
      abilities: {
    	common: [
    		{
    			name: "Happy Feet",
    			scalings: [
    			  {
    				name: "speed",
    				base: 0.3,
    				scaling: 0.3,
    				rounding: 1
    			  }
    			],
    			lore: [
    			  "§7Jump potions also give §f+{{speed}} Speed§7."
    			]
    		}
    	],
    	uncommon: [
    		{
    			name: "Happy Feet",
    			scalings: [
    			  {
    				name: "speed",
    				base: 0.4,
    				scaling: 0.4,
    				rounding: 1
    			  }
    			],
    			lore: [
    			  "§7Jump potions also give §f+{{speed}} Speed§7."
    			]
    		}
    	],
    	rare: [
    		{
    			name: "Happy Feet",
    			scalings: [
    			  {
    				name: "speed",
    				base: 0.4,
    				scaling: 0.4,
    				rounding: 1
    			  }
    			],
    			lore: [
    			  "§7Jump potions also give §f+{{speed}} Speed§7."
    			]
    		},
    		{
    			name: "Farming Exp Boost",
    			scalings: [
    			  {
    				name: "boost",
    				base: 0.25,
    				scaling: 0.25,
    				rounding: 1
    			  }
    			],
    			lore: [
    			  "§7Boosts your Farming exp by §f+{{boost}}%§7."
    			]
    		}
    	],
    	epic: [
    		{
    			name: "Happy Feet",
    			scalings: [
    			  {
    				name: "speed",
    				base: 0.5,
    				scaling: 0.5,
    				rounding: 1
    			  }
    			],
    			lore: [
    			  "§7Jump potions also give §f+{{speed}} Speed§7."
    			]
    		},
    		{
    			name: "Farming Exp Boost",
    			scalings: [
    			  {
    				name: "boost",
    				base: 0.3,
    				scaling: 0.3,
    				rounding: 1
    			  }
    			],
    			lore: [
    			  "§7Boosts your Farming exp by §f+{{boost}}%§7."
    			]
    		}

    	],
    	legendary: [
    		{
    			name: "Happy Feet",
    			scalings: [
    			  {
    				name: "speed",
    				base: 0.5,
    				scaling: 0.5,
    				rounding: 1
    			  }
    			],
    			lore: [
    			  "§7Jump potions also give §f+{{speed}} Speed§7."
    			]
    		},
    		{
    			name: "Farming Exp Boost",
    			scalings: [
    			  {
    				name: "boost",
    				base: 0.3,
    				scaling: 0.3,
    				rounding: 1
    			  }
    			],
    			lore: [
    			  "§7Boosts your Farming exp by §f+{{boost}}%§7."
    			]
    		},
    		{
    			name: "Efficient Farming",
    			scalings: [
    			  {
    				name: "boost",
    				base: 0.3,
    				scaling: 0.3,
    				rounding: 1
    			  }
    			],
    			lore: [
    			  "§7Farming minions work §f+{{boost}}%§7 faster",
    			  "§7while on your island."
    			]
    		}
    	]
      }
    },
    "SHEEP": {
      head: "/head/64e22a46047d272e89a1cfa13e9734b7e12827e235c2012c1a95962874da0",
      type: "alchemy",
      emoji: "🐑",
      stats: {
    	common: [
    	  {
    		stat: "Intelligence",
    		base: 1,
    		scaling: 1,
    		suffix: ""
    	  },
    	  {
    		stat: "Ability Damage",
    		base: 0,
    		scaling: 0.505050505,
    		suffix: ""
    	  }
    	],
    	uncommon: [
    	  {
    		stat: "Intelligence",
    		base: 1,
    		scaling: 1,
    		suffix: ""
    	  },
    	  {
    		stat: "Ability Damage",
    		base: 0,
    		scaling: 0.505050505,
    		suffix: ""
    	  }
    	],
    	rare: [
    	  {
    		stat: "Intelligence",
    		base: 1,
    		scaling: 1,
    		suffix: ""
    	  },
    	  {
    		stat: "Ability Damage",
    		base: 0,
    		scaling: 0.505050505,
    		suffix: ""
    	  }
    	],
    	epic: [
    	  {
    		stat: "Intelligence",
    		base: 1,
    		scaling: 1,
    		suffix: ""
    	  },
    	  {
    		stat: "Ability Damage",
    		base: 0,
    		scaling: 0.505050505,
    		suffix: ""
    	  }
    	],
    	legendary: [
    	  {
    		stat: "Intelligence",
    		base: 1,
    		scaling: 1,
    		suffix: ""
    	  },
    	  {
    		stat: "Ability Damage",
    		base: 0,
    		scaling: 0.505050505,
    		suffix: ""
    	  }
    	]
      },
      abilities: {
    	common: [
    	  {
    		name: "Mana Saver",
    	    scalings: [
    		  {
    			name: "manareduce",
    			base: 0.1,
    			scaling: 0.1,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Reduces the §bMana §7cost of abilities by §f{{manareduce}}%§7."
    	    ]
    	  }
    	],
    	uncommon: [
    	  {
    		name: "Mana Saver",
    	    scalings: [
    		  {
    			name: "manareduce",
    			base: 0.1,
    			scaling: 0.1,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Reduces the §bMana §7cost of abilities by §f{{manareduce}}%§7."
    	    ]
    	  }
    	],
    	rare: [
    	  {
    		name: "Mana Saver",
    	    scalings: [
    		  {
    			name: "manareduce",
    			base: 0.1,
    			scaling: 0.1,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Reduces the §bMana §7cost of abilities by §f{{manareduce}}%§7."
    	    ]
    	  },
    	  {
    		name: "Overheal",
    	    scalings: [
    		  {
    			name: "shield",
    			base: 0.1,
    			scaling: 0.1,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Gives a $f{{shield}}% §7shield after not taking Damage for 10s."
    	    ]
    	  }
    	],
    	epic: [
    	  {
    		name: "Mana Saver",
    	    scalings: [
    		  {
    			name: "manareduce",
    			base: 0.2,
    			scaling: 0.2,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Reduces the §bMana §7cost of abilities by §f{{manareduce}}%§7."
    	    ]
    	  },
    	  {
    		name: "Overheal",
    	    scalings: [
    		  {
    			name: "shield",
    			base: 0.1,
    			scaling: 0.1,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Gives a $f{{shield}}% §7shield after not taking Damage for 10s."
    	    ]
    	  }

    	],
    	legendary: [
    	  {
    		name: "Mana Saver",
    	    scalings: [
    		  {
    			name: "manareduce",
    			base: 0.2,
    			scaling: 0.2,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Reduces the §bMana §7cost of abilities by §f{{manareduce}}%§7."
    	    ]
    	  },
    	  {
    		name: "Overheal",
    	    scalings: [
    		  {
    			name: "shield",
    			base: 0.1,
    			scaling: 0.1,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Gives a §f{{shield}}% §7shield after not taking Damage for 10s."
    	    ]
    	  },
    	  {
    		name: "Dungeon Wizard",
    		scalings: [
    		  {
    			name: "manaincrease",
    			base: 0.25,
    			scaling: 0.25,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Increases your total §bMana §7by §f{{manaincrease}}% §7while in Dungeons."
    	    ]
    	  }
    	]
      }

    },
    "SILVERFISH": {
      head: "/head/da91dab8391af5fda54acd2c0b18fbd819b865e1a8f1d623813fa761e924540",
      type: "mining",
      emoji: "🐛",
      stats: {
    	common: [
    	  {
    		stat: "Defense",
    		base: 1,
    		scaling: 1,
    		suffix: ""
    	  },
    	  {
    		stat: "Health",
    		base: 1,
    		scaling: 0.19191919191,
    		suffix: ""
    	  }
    	],
    	uncommon: [
    	  {
    		stat: "Defense",
    		base: 1,
    		scaling: 1,
    		suffix: ""
    	  },
    	  {
    		stat: "Health",
    		base: 1,
    		scaling: 0.19191919191,
    		suffix: ""
    	  }
    	],
    	rare: [
    	  {
    		stat: "Defense",
    		base: 1,
    		scaling: 1,
    		suffix: ""
    	  },
    	  {
    		stat: "Health",
    		base: 1,
    		scaling: 0.19191919191,
    		suffix: ""
    	  }
    	],
    	epic: [
    	  {
    		stat: "Defense",
    		base: 1,
    		scaling: 1,
    		suffix: ""
    	  },
    	  {
    		stat: "Health",
    		base: 1,
    		scaling: 0.19191919191,
    		suffix: ""
    	  }
    	],
    	legendary: [
    	  {
    		stat: "Defense",
    		base: 1,
    		scaling: 1,
    		suffix: ""
    	  },
    	  {
    		stat: "Health",
    		base: 1,
    		scaling: 0.19191919191,
    		suffix: ""
    	  }
    	]
      },
      abilities: {
    	common: [
    	  {
    		name: "True Defense Boost",
    		scalings: [
    		  {
    			name: "truedef",
    			base: 0.1,
    			scaling: 0.04949494949,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Boosts your §fTrue Defense§7 by §f{{truedef}}§7."
    		]
    	  }
    	],
    	uncommon: [
    	  {
    		name: "True Defense Boost",
    		scalings: [
    		  {
    			name: "truedef",
    			base: 0.1,
    			scaling: 0.1,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Boosts your §fTrue Defense§7 by §f{{truedef}}§7."
    		]
    	  }
    	],
    	rare: [
    	  {
    		name: "True Defense Boost",
    		scalings: [
    		  {
    			name: "truedef",
    			base: 0.1,
    			scaling: 0.1,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Boosts your §fTrue Defense§7 by §f{{truedef}}§7."
    		]
    	  },
    	  {
    		name: "Mining Exp Boost",
    		scalings: [
    		  {
    			name: "boost",
    			base: 0.2,
    			scaling: 0.250505,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Boosts your Mining exp by §f{{boost}}%§7."
    		]
    	  }
    	],
    	epic: [
    	  {
    		name: "True Defense Boost",
    		scalings: [
    		  {
    			name: "truedef",
    			base: 0.15,
    			scaling: 0.15,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Boosts your §fTrue Defense§7 by §f{{truedef}}§7."
    		]
    	  },
    	  {
    		name: "Mining Exp Boost",
    		scalings: [
    		  {
    			name: "boost",
    			base: 0.3,
    			scaling: 0.3,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Boosts your Mining exp by §f{{boost}}%§7."
    		]
    	  }

    	],
    	legendary: [
    	  {
    		name: "True Defense Boost",
    		scalings: [
    		  {
    			name: "truedef",
    			base: 0.15,
    			scaling: 0.15,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Boosts your §fTrue Defense§7 by §f{{truedef}}§7."
    		]
    	  },
    	  {
    		name: "Mining Exp Boost",
    		scalings: [
    		  {
    			name: "boost",
    			base: 0.3,
    			scaling: 0.3,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Boosts your Mining exp by §f{{boost}}%§7."
    		]
    	  },
    	  {
    		name: "Dexterity",
    		scalings: [],
    		lore: [
    		  "§7Gives permanent §eHaste III§7."
    		]
    	  }
    	]
      }
    },
    "WITHER_SKELETON": {
      head: "/head/f5ec964645a8efac76be2f160d7c9956362f32b6517390c59c3085034f050cff",
      type: "mining",
      emoji: "💀",
      stats: {
    	epic: [
    	  {
    		stat: "Crit Damage",
    		base: 0,
    		scaling: 0.2525252525,
    		suffix: "%"
    	  },
    	  {
    		stat: "Crit Chance",
    		base: 0,
    		scaling: 0.0505050505,
    		suffix: "%"
    	  },
    	  {
    		stat: "Defense",
    		base: 0,
    		scaling: 0.2525252525,
    		suffix: ""
    	  },
    	  {
    		stat: "Strength",
    		base: 0,
    		scaling: 0.2525252525,
    		suffix: ""
    	  },
    	  {
    		stat: "Intelligence",
    		base: 0,
    		scaling: 0.2525252525,
    		suffix: ""
    	  }
    	],
    	legendary: [
    	  {
    		stat: "Crit Damage",
    		base: 0,
    		scaling: 0.2525252525,
    		suffix: "%"
    	  },
    	  {
    		stat: "Crit Chance",
    		base: 0,
    		scaling: 0.0505050505,
    		suffix: "%"
    	  },
    	  {
    		stat: "Defense",
    		base: 0,
    		scaling: 0.2525252525,
    		suffix: ""
    	  },
    	  {
    		stat: "Strength",
    		base: 0,
    		scaling: 0.2525252525,
    		suffix: ""
    	  },
    	  {
    		stat: "Intelligence",
    		base: 0,
    		scaling: 0.2525252525,
    		suffix: ""
    	  }
    	]
      },
      abilities: {
    	epic: [
    	  {
    		name: "Stronger Bones",
    		scalings: [
    		  {
    			name: "reduction",
    			base: 0.3,
    			scaling: 0.3,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Take §f{{reduction}}%§7 less damage from Skeletons."
    		]
    	  },
    	  {
    		name: "Wither Blood",
    		scalings: [
    		  {
    			name: "boost",
    			base: 0.5,
    			scaling: 0.5,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Deal §f{{boost}}%§7 more damage against wither mobs."
    		]
    	  }
    	],
    	legendary: [
    	  {
    		name: "Stronger Bones",
    		scalings: [
    		  {
    			name: "reduction",
    			base: 0.3,
    			scaling: 0.3,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Take §f{{reduction}}%§7 less damage from Skeletons."
    		]
    	  },
    	  {
    		name: "Wither Blood",
    		scalings: [
    		  {
    			name: "boost",
    			base: 0.5,
    			scaling: 0.5,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Deal §f{{boost}}%§7 more damage against wither mobs."
    		]
    	  },
    	  {
    		name: "Death's Touch",
    		scalings: [
    		  {
    			name: "wither",
    			base: 2,
    			scaling: 2,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Upon hitting an enemy inflict the wither effect for §f{{wither}}%§7 damage over 3 seconds.",
    		  "§7",
    		  "§7Does not stack."
    		]
    	  }
    	]
      }
    },
    "SKELETON_HORSE": {
      head: "/head/47effce35132c86ff72bcae77dfbb1d22587e94df3cbc2570ed17cf8973a",
      type: "combat",
      emoji: "🐴",
      stats: {
    	legendary: [
    		{
    			stat: "Intelligence",
    			base: 1,
    			scaling: 1,
    			suffix: ""
    		},
    		{
    			stat: "Speed",
    			base: 0,
    			scaling: 0.50505050505,
    			suffix: ""
    		}
    	]
      },
      abilities: {
    	legendary: [
    		{
    		name: "Rideable",
    		scalings: [],
    		lore: [
    		  "§7Right-click your summoned pet to ride!"
    		]
    	  },
    	  {
    		name: "Run",
    		scalings: [
    		  {
    			name: "speed",
    			base: 1,
    			scaling: 1.50505050505,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Increases the speed of your mount by §f{{speed}}%§7."
    		]
    	  },
    	  {
    		name: "Ride Into Battle",
    		scalings: [
    		  {
    			name: "damage",
    			base: 0.4,
    			scaling: 0.4,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7While riding your horse, gain §f+{{damage}}% §7bow damage."
    		]
    	  }
    	]
      }
    },
    "WOLF": {
      head: "/head/dc3dd984bb659849bd52994046964c22725f717e986b12d548fd169367d494",
      type: "combat",
      emoji: "🐺",
      stats: {
    	common: [
    	  {
    		stat: "Speed",
    		base: 0,
    		scaling: 0.2020202,
    		suffix: ""
    	  },
    	  {
    		stat: "Crit Damage",
    		base: 0,
    		scaling: 0.1010101,
    		suffix: "%"
    	  },
    	  {
    		stat: "True Defense",
    		base: 0,
    		scaling: 0.1010101,
    		suffix: ""
    	  },
    	  {
    		stat: "Health",
    		base: 0,
    		scaling: 0.5050505,
    		suffix: ""
    	  }
    	],
    	uncommon: [
    	  {
    		stat: "Speed",
    		base: 0,
    		scaling: 0.2020202,
    		suffix: ""
    	  },
    	  {
    		stat: "Crit Damage",
    		base: 0,
    		scaling: 0.1010101,
    		suffix: "%"
    	  },
    	  {
    		stat: "True Defense",
    		base: 0,
    		scaling: 0.1010101,
    		suffix: ""
    	  },
    	  {
    		stat: "Health",
    		base: 0,
    		scaling: 0.5050505,
    		suffix: ""
    	  }
    	],
    	rare: [
    	  {
    		stat: "Speed",
    		base: 0,
    		scaling: 0.2020202,
    		suffix: ""
    	  },
    	  {
    		stat: "Crit Damage",
    		base: 0,
    		scaling: 0.1010101,
    		suffix: "%"
    	  },
    	  {
    		stat: "True Defense",
    		base: 0,
    		scaling: 0.1010101,
    		suffix: ""
    	  },
    	  {
    		stat: "Health",
    		base: 0,
    		scaling: 0.5050505,
    		suffix: ""
    	  }
    	],
    	epic: [
    	  {
    		stat: "Speed",
    		base: 0,
    		scaling: 0.2020202,
    		suffix: ""
    	  },
    	  {
    		stat: "Crit Damage",
    		base: 0,
    		scaling: 0.1010101,
    		suffix: "%"
    	  },
    	  {
    		stat: "True Defense",
    		base: 0,
    		scaling: 0.1010101,
    		suffix: ""
    	  },
    	  {
    		stat: "Health",
    		base: 0,
    		scaling: 0.5050505,
    		suffix: ""
    	  }
    	],
    	legendary: [
    	  {
    		stat: "Speed",
    		base: 0,
    		scaling: 0.2020202,
    		suffix: ""
    	  },
    	  {
    		stat: "Crit Damage",
    		base: 0,
    		scaling: 0.1010101,
    		suffix: "%"
    	  },
    	  {
    		stat: "True Defense",
    		base: 0,
    		scaling: 0.1010101,
    		suffix: ""
    	  },
    	  {
    		stat: "Health",
    		base: 0,
    		scaling: 0.5050505,
    		suffix: ""
    	  }
    	]
      },
      abilities: {
    	common: [
    	  {
    		name: "Alpha Dog",
    	    scalings: [
    		  {
    			name: "lesswolfdmg",
    			base: 0.1,
    			scaling: 0.1,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Take §f{{lesswolfdmg}}% §7less damage from wolves."
    	    ]
    	  }
    	],
    	uncommon: [
    	  {
    		name: "Alpha Dog",
    	    scalings: [
    		  {
    			name: "lesswolfdmg",
    			base: 0.2,
    			scaling: 0.2,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Take §f{{lesswolfdmg}}% §7less damage from wolves."
    	    ]
    	  }
    	],
    	rare: [
    	  {
    		name: "Alpha Dog",
    	    scalings: [
    		  {
    			name: "lesswolfdmg",
    			base: 0.2,
    			scaling: 0.2,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Take §f{{lesswolfdmg}}% §7less damage from wolves."
    	    ]
    	  },
    	  {
    		name: "Pack Leader",
    	    scalings: [
    		  {
    			name: "dmgperlevel",
    			base: 0.1,
    			scaling: 0.1,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Gain §9{{dmgperlevel}}% Crit Damage §7 for every nearby wolf (max 10)."
    	    ]
    	  }
    	],
    	epic: [
    	  {
    		name: "Alpha Dog",
    	    scalings: [
    		  {
    			name: "lesswolfdmg",
    			base: 0.3,
    			scaling: 0.3,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Take §f{{lesswolfdmg}}% §7less damage from wolves."
    	    ]
    	  },
    	  {
    		name: "Pack Leader",
    	    scalings: [
    		  {
    			name: "dmgperlevel",
    			base: 0.15,
    			scaling: 0.15,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Gain §9{{dmgperlevel}}% Crit Damage §7 for every nearby wolf (max 10)."
    	    ]
    	  }
    	],
    	legendary: [
    	  {
    		name: "Alpha Dog",
    	    scalings: [
    		  {
    			name: "lesswolfdmg",
    			base: 0.3,
    			scaling: 0.3,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Take §f{{lesswolfdmg}}% §7less damage from wolves."
    	    ]
    	  },
    	  {
    		name: "Pack Leader",
    	    scalings: [
    		  {
    			name: "dmgperlevel",
    			base: 0.15,
    			scaling: 0.15,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Gain §9{{dmgperlevel}}% Crit Damage §7 for every nearby wolf (max 10)."
    	    ]
    	  },
    	  {
    		name: "Combat Exp Boost",
    		scalings: [
    		  {
    			name: "combatboost",
    			base: 0.3,
    			scaling: 0.3,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Boosts your Combat exp by §f{{combatboost}}%§7."
    	    ]
    	  }
    	]
      }
    },
    "ENDERMAN": {
      head: "/head/6eab75eaa5c9f2c43a0d23cfdce35f4df632e9815001850377385f7b2f039ce1",
      type: "combat",
      emoji: "🔮",
      stats: {
    	common: [
    	  {
    		stat: "Crit Damage",
    		base: 0.75,
    		scaling: 0.75,
    		suffix: "%"
    	  }
    	],
    	uncommon: [
    	  {
    		stat: "Crit Damage",
    		base: 0.75,
    		scaling: 0.75,
    		suffix: "%"
    	  }
    	],
    	rare: [
    	  {
    		stat: "Crit Damage",
    		base: 0.75,
    		scaling: 0.75,
    		suffix: "%"
    	  }
    	],
    	epic: [
    	  {
    		stat: "Crit Damage",
    		base: 0.75,
    		scaling: 0.75,
    		suffix: "%"
    	  }
    	],
    	legendary: [
    	  {
    		stat: "Crit Damage",
    		base: 0.75,
    		scaling: 0.75,
    		suffix: "%"
    	  }
    	]
      },
      abilities: {
    	common: [
    	  {
    		name: "Enderian",
    		scalings: [
    		  {
    			name: "reduction",
    			base: 0.1,
    			scaling: 0.1,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Take §f{{reduction}}% §7 less damage from end monsters."
    		]
    	  }
    	],
    	uncommon: [
    	  {
    		name: "Enderian",
    		scalings: [
    		  {
    			name: "reduction",
    			base: 0.2,
    			scaling: 0.2,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Take §f{{reduction}}% §7 less damage from end monsters."
    		]
    	  }
    	],
    	rare: [
    	  {
    		name: "Enderian",
    		scalings: [
    		  {
    			name: "reduction",
    			base: 0.2,
    			scaling: 0.2,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Take §f{{reduction}}% §7 less damage from end monsters."
    		]
    	  },
    	  {
    		name: "Teleport Savy",
    		scalings: [
    		  {
    			name: "buff",
    			base: 0.4,
    			scaling: 0.4,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Buffs the Aspect of the End ability granting §f+{{buff}} Damage§7 for 5s on use."
    		]
    	  }
    	],
    	epic: [
    	  {
    		name: "Enderian",
    		scalings: [
    		  {
    			name: "reduction",
    			base: 0.3,
    			scaling: 0.3,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Take §f{{reduction}}% §7 less damage from end monsters."
    		]
    	  },
    	  {
    		name: "Teleport Savy",
    		scalings: [
    		  {
    			name: "buff",
    			base: 0.4,
    			scaling: 0.4,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Buffs the Aspect of the End ability granting §f+{{buff}} Damage§7 for 5s on use."
    		]
    	  }
    	],
    	legendary: [
    	  {
    		name: "Enderian",
    		scalings: [
    		  {
    			name: "reduction",
    			base: 0.3,
    			scaling: 0.3,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Take §f{{reduction}}% §7 less damage from end monsters."
    		]
    	  },
    	  {
    		name: "Teleport Savy",
    		scalings: [
    		  {
    			name: "buff",
    			base: 0.4,
    			scaling: 0.4,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Buffs the Aspect of the End ability granting §f+{{buff}} Damage§7 for 5s on use."
    		]
    	  },
    	  {
    		name: "Zealot Madness",
    		scalings: [
    		  {
    			name: "odds",
    			base: 0.25,
    			scaling: 0.25,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Increases your odds to find a special Zealot by §f{{odds}}%§7."
    		]
    	  }
    	]
      }
    },
    "PHOENIX": {
      head: "/head/23aaf7b1a778949696cb99d4f04ad1aa518ceee256c72e5ed65bfa5c2d88d9e",
      type: "combat",
      emoji: "🐦",
      stats: {
    	epic: [
    	  {
    		stat: "Strength",
    		base: 10,
    		scaling: 0.50505050505,
    		suffix: ""
    	  },
    	  {
    		stat: "Intelligence",
    		base: 51,
    		scaling: 1,
    		suffix: ""
    	  }
    	],
    	legendary: [
    	  {
    		stat: "Strength",
    		base: 10,
    		scaling: 0.50505050505,
    		suffix: ""
    	  },
    	  {
    		stat: "Intelligence",
    		base: 51,
    		scaling: 1,
    		suffix: ""
    	  }
    	]
      },
      abilities: {
    	epic: [
    	  {
    		name: "Rekindle",
    		scalings: [
    		  {
    			name: "strength",
    			base: 10,
    			scaling: 0.10101010101,
    			rounding: 1
    		  },
    		  {
    			name: "duration",
    			base: 2,
    			scaling: 0.0202020202,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Before death, become immune and gain §c+{{strength}} Strength §7 for §a{{duration}} §7seconds (3 minutes cooldown)."
    		]
    	  },
    	  {
    		name: "Fourth Flare",
    		scalings: [
    		  {
    			name: "strength",
    			base: 10,
    			scaling: 0.1404040404,
    			rounding: 1
    		  },
    		  {
    			name: "duration",
    			base: 2,
    			scaling: 0.04040404040404,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7On 4th melee strike, ignite mobs, dealing §c+{{strength}}x §7your §9Crit Damage§7 each second for §a{{duration}}§7 seconds."
    		]
    	  }
    	],
    	legendary: [
    	  {
    		name: "Rekindle",
    		scalings: [
    		  {
    			name: "strength",
    			base: 10,
    			scaling: 0.20202020202,
    			rounding: 1
    		  },
    		  {
    			name: "duration",
    			base: 2,
    			scaling: 0.0202020202,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Before death, become immune and gain §c+{{strength}} Strength §7 for §a{{duration}} §7seconds (3 minutes cooldown)."
    		]
    	  },
    	  {
    		name: "Fourth Flare",
    		scalings: [
    		  {
    			name: "strength",
    			base: 10,
    			scaling: 0.202020202,
    			rounding: 1
    		  },
    		  {
    			name: "duration",
    			base: 2,
    			scaling: 0.04040404040404,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7On 4th melee strike, ignite mobs, dealing §c+{{strength}}x §7your §9Crit Damage§7 each second for §a{{duration}}§7 seconds."
    		]
    	  },
    	  {
    		name: "Magic Bird",
    		scalings: [],
    		lore: [
    		  "§7You may always fly on your Private Island"
    		]
        },
    	  {
    		name: "Eternal Coins",
    		scalings: [],
    		lore: [
    		  "§7Don't lose §6coins§7 from death."
    		]
    	  }
    	]
      }
    },
    "MAGMA_CUBE": {
      head: "/head/38957d5023c937c4c41aa2412d43410bda23cf79a9f6ab36b76fef2d7c429",
      type: "combat",
      emoji: "🌋",
      stats: {
    	common: [
    	  {
    		stat: "Health",
    		base: 0,
    		scaling: 0.50505050505,
    		suffix: ""
    	  },
    	  {
    		stat: "Defense",
    		base: 0,
    		scaling: 0.33333333333,
    		suffix: ""
    	  },
    	  {
    		stat: "Strength",
    		base: 0,
    		scaling: 0.2020202020202,
    		suffix: ""
    	  }
    	],
    	uncommon: [
    	  {
    		stat: "Health",
    		base: 0,
    		scaling: 0.50505050505,
    		suffix: ""
    	  },
    	  {
    		stat: "Defense",
    		base: 0,
    		scaling: 0.33333333333,
    		suffix: ""
    	  },
    	  {
    		stat: "Strength",
    		base: 0,
    		scaling: 0.2020202020202,
    		suffix: ""
    	  }
    	],
    	rare: [
    	  {
    		stat: "Health",
    		base: 0,
    		scaling: 0.50505050505,
    		suffix: ""
    	  },
    	  {
    		stat: "Defense",
    		base: 0,
    		scaling: 0.33333333333,
    		suffix: ""
    	  },
    	  {
    		stat: "Strength",
    		base: 0,
    		scaling: 0.2020202020202,
    		suffix: ""
    	  }
    	],
    	epic: [
    	  {
    		stat: "Health",
    		base: 0,
    		scaling: 0.50505050505,
    		suffix: ""
    	  },
    	  {
    		stat: "Defense",
    		base: 0,
    		scaling: 0.33333333333,
    		suffix: ""
    	  },
    	  {
    		stat: "Strength",
    		base: 0,
    		scaling: 0.2020202020202,
    		suffix: ""
    	  }
    	],
    	legendary: [
    	  {
    		stat: "Health",
    		base: 0,
    		scaling: 0.50505050505,
    		suffix: ""
    	  },
    	  {
    		stat: "Defense",
    		base: 0,
    		scaling: 0.33333333333,
    		suffix: ""
    	  },
    	  {
    		stat: "Strength",
    		base: 0,
    		scaling: 0.2020202020202,
    		suffix: ""
    	  }
    	]
      },
      abilities: {
    	common: [
    	  {
    		name: "Slimy Minions",
    		scalings: [
    		  {
    			name: "boost",
    			base: 0.2,
    			scaling: 0.2,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Slime Minions work §f{{boost}}%§7 faster while on your island."
    		]
    	  }
    	],
    	uncommon: [
    	  {
    		name: "Slimy Minions",
    		scalings: [
    		  {
    			name: "boost",
    			base: 0.2,
    			scaling: 0.2,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Slime Minions work §f{{boost}}%§7 faster while on your island."
    		]
    	  }
    	],
    	rare: [
    	  {
    		name: "Slimy Minions",
    		scalings: [
    		  {
    			name: "boost",
    			base: 0.25,
    			scaling: 0.25,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Slime Minions work §f{{boost}}%§7 faster while on your island."
    		]
    	  },
    	  {
    		name: "Salt Blade",
    		scalings: [
    		  {
    			name: "damage",
    			base: 0.2,
    			scaling: 0.2,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Deal §f{{damage}}%§7 more damage to slimes."
    		]
    	  }
    	],
    	epic: [
    	  {
    		name: "Slimy Minions",
    		scalings: [
    		  {
    			name: "boost",
    			base: 0.3,
    			scaling: 0.3,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Slime Minions work §f{{boost}}%§7 faster while on your island."
    		]
    	  },
    	  {
    		name: "Salt Blade",
    		scalings: [
    		  {
    			name: "damage",
    			base: 0.2,
    			scaling: 0.25050505,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Deal §f{{damage}}%§7 more damage to slimes."
    		]
    	  }
    	],
    	legendary: [
    	  {
    		name: "Slimy Minions",
    		scalings: [
    		  {
    			name: "boost",
    			base: 0.3,
    			scaling: 0.3,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Slime Minions work §f{{boost}}%§7 faster while on your island."
    		]
    	  },
    	  {
    		name: "Salt Blade",
    		scalings: [
    		  {
    			name: "damage",
    			base: 0.2,
    			scaling: 0.25050505,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Deal §f{{damage}}%§7 more damage to slimes."
    		]
    	  },
    	  {
    		name: "Hot Ember",
    		scalings: [
    		  {
    			name: "buff",
    			base: 1,
    			scaling: 1,
    			rounding: 0
    		  }
    		],
    		lore: [
    		  "§7Buffs the stats of Ember Armor by §f{{buff}}%§7."
    		]
    	  }
    	]
      }
    },
    "FLYING_FISH": {
      head: "/head/40cd71fbbbbb66c7baf7881f415c64fa84f6504958a57ccdb8589252647ea",
      type: "fishing",
      emoji: "🐟",
      stats: {
    	rare: [
    	  {
    		stat: "Defense",
    		base: 0,
    		scaling: 0.404040404,
    		suffix: ""
    	  },
    	  {
    		stat: "Strength",
    		base: 0,
    		scaling: 0.404040404,
    		suffix: ""
    	  }
    	],
    	epic: [
    	  {
    		stat: "Defense",
    		base: 0,
    		scaling: 0.505050505,
    		suffix: ""
    	  },
    	  {
    		stat: "Strength",
    		base: 0,
    		scaling: 0.505050505,
    		suffix: ""
    	  }
    	],
    	legendary: [
    	  {
    		stat: "Defense",
    		base: 0,
    		scaling: 0.505050505,
    		suffix: ""
    	  },
    	  {
    		stat: "Strength",
    		base: 0,
    		scaling: 0.505050505,
    		suffix: ""
    	  }
    	]
      },
      abilities: {
    	rare: [
    	  {
    		name: "Quick Reel",
    	    scalings: [
    		  {
    			name: "fishspeed",
    			base: 0.1,
    			scaling: 0.1252525,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Increases the fishing speed by §f{{fishspeed}}%§7."
    	    ]
    	  },
    	  {
    		name: "Water Bender",
    	    scalings: [
    		  {
    			name: "waterstrength",
    			base: 0.4,
    			scaling: 0.4,
    			rounding: 1
    		  },
    		  {
    			name: "waterdefense",
    			base: 0.4,
    			scaling: 0.4,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Gives §c{{waterstrength}} Strength §7and §a{{waterdefense}} Defense §7when near water."
    	    ]
    	  }
    	],
    	epic: [
    	  {
    		name: "Quick Reel",
    	    scalings: [
    		  {
    			name: "fishspeed",
    			base: 0.1,
    			scaling: 0.15050505,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Increases the fishing speed by §f{{fishspeed}}%§7."
    	    ]
    	  },
    	  {
    		name: "Water Bender",
    	    scalings: [
    		  {
    			name: "waterstrength",
    			base: 0.5,
    			scaling: 0.5,
    			rounding: 1
    		  },
    		  {
    			name: "waterdefense",
    			base: 0.5,
    			scaling: 0.5,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Gives §c{{waterstrength}} Strength §7and §a{{waterdefense}} Defense §7when near water."
    	    ]
    	  }
    	],
    	legendary: [
    	  {
    		name: "Quick Reel",
    	    scalings: [
    		  {
    			name: "fishspeed",
    			base: 0.1,
    			scaling: 0.15050505,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Increases the fishing speed by §f{{fishspeed}}%§7."
    	    ]
    	  },
    	  {
    		name: "Water Bender",
    	    scalings: [
    		  {
    			name: "waterstrength",
    			base: 0.5,
    			scaling: 0.5,
    			rounding: 1
    		  },
    		  {
    			name: "waterdefense",
    			base: 0.5,
    			scaling: 0.5,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Gives §c{{waterstrength}} Strength §7and §a{{waterdefense}} Defense §7when near water."
    	    ]
    	  },
    	  {
    		name: "Deep Sea Diver",
    		scalings: [
    		  {
    			name: "diverstats",
    			base: 0.3,
    			scaling: 0.3,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Increases the stats of Diver's Armor by §f{{diverstats}}%§7."
    	    ]
    	  }
    	]
      }
    },
    "BLUE_WHALE": {
      head: "/head/dab779bbccc849f88273d844e8ca2f3a67a1699cb216c0a11b44326ce2cc20",
      type: "fishing",
      emoji: "🐋",
      stats: {
    	common: [
    	  {
    		stat: "Health",
    		base: 2,
    		scaling: 2,
    		suffix: ""
    	  }
    	],
    	uncommon: [
    	  {
    		stat: "Health",
    		base: 2,
    		scaling: 2,
    		suffix: ""
    	  }
    	],
    	rare: [
    	  {
    		stat: "Health",
    		base: 2,
    		scaling: 2,
    		suffix: ""
    	  }
    	],
    	epic: [
    	  {
    		stat: "Health",
    		base: 2,
    		scaling: 2,
    		suffix: ""
    	  }
    	],
    	legendary: [
    	  {
    		stat: "Health",
    		base: 2,
    		scaling: 2,
    		suffix: ""
    	  }
    	]
      },
      abilities: {
    	common: [
    	  {
    		name: "Ingest",
    	    scalings: [
    		  {
    			name: "potboost",
    			base: 0.5,
    			scaling: 0.5,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7All potions heal §c+{{potboost}}HP§7."
    	    ]
    	  }
    	],
    	uncommon: [
    	  {
    		name: "Ingest",
    	    scalings: [
    		  {
    			name: "potboost",
    			base: 1,
    			scaling: 1,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7All potions heal §c+{{potboost}}HP§7."
    	    ]
    	  }
    	],
    	rare: [
    	  {
    		name: "Ingest",
    	    scalings: [
    		  {
    			name: "potboost",
    			base: 1.5,
    			scaling: 1.5,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7All potions heal §c+{{potboost}}HP§7."
    	    ]
    	  },
    	  {
    		name: "Bulk",
    	    scalings: [
    		  {
    			name: "defenseperhealth",
    			base: 0,
    			scaling: 0.03030303,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Gain §a+{{defenseperhealth}} Defense §7per §c30 Max Health§7."
    	    ]
    	  }
    	],
    	epic: [
    	  {
    		name: "Ingest",
    	    scalings: [
    		  {
    			name: "potboost",
    			base: 2,
    			scaling: 2,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7All potions heal §c+{{potboost}}HP§7."
    	    ]
    	  },
    	  {
    		name: "Bulk",
    	    scalings: [
    		  {
    			name: "defenseperhealth",
    			base: 0,
    			scaling: 0.03030303,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Gain §a+{{defenseperhealth}} Defense §7per §c25 Max Health§7."
    	    ]
    	  }
    	],
    	legendary: [
    	  {
    		name: "Ingest",
    	    scalings: [
    		  {
    			name: "potboost",
    			base: 2,
    			scaling: 2.505050505,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7All potions heal §c+{{potboost}}HP§7."
    	    ]
    	  },
    	  {
    		name: "Bulk",
    	    scalings: [
    		  {
    			name: "defenseperhealth",
    			base: 0,
    			scaling: 0.03030303,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Gain §a+{{defenseperhealth}} Defense §7per §c20 Max Health§7."
    	    ]
    	  },
    	  {
    		name: "Archimedes",
    		scalings: [
    		  {
    			name: "extramaxhealth",
    			base: 0.1,
    			scaling: 0.2010101,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Gain §c+{{extramaxhealth}}% Max Health§7."
    	    ]
    	  }
    	]
      }
    },
    "TIGER": {
      head: "/head/fc42638744922b5fcf62cd9bf27eeab91b2e72d6c70e86cc5aa3883993e9d84",
      type: "combat",
      emoji: "🐯",
      stats: {
    	common: [
    	  {
    		stat: "Strength",
    		base: 5,
    		scaling: 0.1010101,
    		suffix: ""
    	  },
    	  {
    		stat: "Crit Chance",
    		base: 0,
    		scaling: 0.05050505,
    		suffix: "%"
    	  },
    	  {
    		stat: "Crit Damage",
    		base: 0,
    		scaling: 0.5050505,
    		suffix: "%"
    	  }
    	],
    	uncommon: [
    	  {
    		stat: "Strength",
    		base: 5,
    		scaling: 0.1010101,
    		suffix: ""
    	  },
    	  {
    		stat: "Crit Chance",
    		base: 0,
    		scaling: 0.05050505,
    		suffix: "%"
    	  },
    	  {
    		stat: "Crit Damage",
    		base: 0,
    		scaling: 0.5050505,
    		suffix: "%"
    	  }
    	],
    	rare: [
    	  {
    		stat: "Strength",
    		base: 5,
    		scaling: 0.1010101,
    		suffix: ""
    	  },
    	  {
    		stat: "Crit Chance",
    		base: 0,
    		scaling: 0.05050505,
    		suffix: "%"
    	  },
    	  {
    		stat: "Crit Damage",
    		base: 0,
    		scaling: 0.5050505,
    		suffix: "%"
    	  }
    	],
    	epic: [
    	  {
    		stat: "Strength",
    		base: 5,
    		scaling: 0.1010101,
    		suffix: ""
    	  },
    	  {
    		stat: "Crit Chance",
    		base: 0,
    		scaling: 0.05050505,
    		suffix: "%"
    	  },
    	  {
    		stat: "Crit Damage",
    		base: 0,
    		scaling: 0.5050505,
    		suffix: "%"
    	  }
    	],
    	legendary: [
    	  {
    		stat: "Strength",
    		base: 5,
    		scaling: 0.1010101,
    		suffix: ""
    	  },
    	  {
    		stat: "Crit Chance",
    		base: 0,
    		scaling: 0.05050505,
    		suffix: "%"
    	  },
    	  {
    		stat: "Crit Damage",
    		base: 0,
    		scaling: 0.5050505,
    		suffix: "%"
    	  }
    	]
      },
      abilities: {
    	common: [
    	  {
    		name: "Merciless Swipe",
    	    scalings: [
    		  {
    			name: "twicestrike",
    			base: 0.1,
    			scaling: 0.05050505,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Attacks have a §f{{twicestrike}}% §7chance to strike twice."
    	    ]
    	  }
    	],
    	uncommon: [
    	  {
    		name: "Merciless Swipe",
    	    scalings: [
    		  {
    			name: "twicestrike",
    			base: 0.1,
    			scaling: 0.1,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Attacks have a §f{{twicestrike}}% §7chance to strike twice."
    	    ]
    	  }
    	],
    	rare: [
    	  {
    		name: "Merciless Swipe",
    	    scalings: [
    		  {
    			name: "twicestrike",
    			base: 0.1,
    			scaling: 0.1,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Attacks have a §f{{twicestrike}}% §7chance to strike twice."
    	    ]
    	  },
    	  {
    		name: "Hemorrhage",
    	    scalings: [
    		  {
    			name: "healingreduce",
    			base: 0.3,
    			scaling: 0.3,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Melee attacks reduce healing by §f{{healingreduce}}% §7for 10 seconds."
    	    ]
    	  }
    	],
    	epic: [
    	  {
    		name: "Merciless Swipe",
    	    scalings: [
    		  {
    			name: "twicestrike",
    			base: 0.2,
    			scaling: 0.2,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Attacks have a §f{{twicestrike}}% §7chance to strike twice."
    	    ]
    	  },
    	  {
    		name: "Hemorrhage",
    	    scalings: [
    		  {
    			name: "healingreduce",
    			base: 0.55,
    			scaling: 0.55,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Melee attacks reduce healing by §f{{healingreduce}}% §7for 10 seconds."
    	    ]
    	  }
    	],
    	legendary: [
    	  {
    		name: "Merciless Swipe",
    	    scalings: [
    		  {
    			name: "twicestrike",
    			base: 0.2,
    			scaling: 0.2,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Attacks have a §f{{twicestrike}}% §7chance to strike twice."
    	    ]
    	  },
    	  {
    		name: "Hemorrhage",
    	    scalings: [
    		  {
    			name: "healingreduce",
    			base: 0.55,
    			scaling: 0.55,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Melee attacks reduce healing by §f{{healingreduce}}% §7for 10 seconds."
    	    ]
    	  },
    	  {
    		name: "Apex Predator",
    		scalings: [
    		  {
    			name: "extradamage",
    			base: 0.2,
    			scaling: 0.2,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Deal §f+{{extradamage}}% §7damage against targets with no other mobs within 15 blocks."
    	    ]
    	  }
    	]
      }
    },
    "LION": {
      head: "/head/38ff473bd52b4db2c06f1ac87fe1367bce7574fac330ffac7956229f82efba1",
      type: "foraging",
      emoji: "🦁",
      stats: {
    	common: [
    	  {
    		stat: "Strength",
    		base: 0,
    		scaling: 0.505050505,
    		suffix: ""
    	  },
    	  {
    		stat: "Speed",
    		base: 0,
    		scaling: 0.25252525,
    		suffix: ""
    	  }
    	],
    	uncommon: [
    	  {
    		stat: "Strength",
    		base: 0,
    		scaling: 0.505050505,
    		suffix: ""
    	  },
    	  {
    		stat: "Speed",
    		base: 0,
    		scaling: 0.25252525,
    		suffix: ""
    	  }
    	],
    	rare: [
    	  {
    		stat: "Strength",
    		base: 0,
    		scaling: 0.505050505,
    		suffix: ""
    	  },
    	  {
    		stat: "Speed",
    		base: 0,
    		scaling: 0.25252525,
    		suffix: ""
    	  }
    	],
    	epic: [
    	  {
    		stat: "Strength",
    		base: 0,
    		scaling: 0.505050505,
    		suffix: ""
    	  },
    	  {
    		stat: "Speed",
    		base: 0,
    		scaling: 0.25252525,
    		suffix: ""
    	  }
    	],
    	legendary: [
    	  {
    		stat: "Strength",
    		base: 0,
    		scaling: 0.505050505,
    		suffix: ""
    	  },
    	  {
    		stat: "Speed",
    		base: 0,
    		scaling: 0.25252525,
    		suffix: ""
    	  }
    	]
      },
      abilities: {
    	common: [
    	  {
    		name: "Primal Force",
    	    scalings: [
    		  {
    			name: "weapondmgbuff",
    			base: 0,
    			scaling: 0.03030303,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Adds §f+{{weapondmgbuff}} Damage §7to your weapons."
    	    ]
    	  }
    	],
    	uncommon: [
    	  {
    		name: "Primal Force",
    	    scalings: [
    		  {
    			name: "weapondmgbuff",
    			base: 0.05,
    			scaling: 0.05,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Adds §f+{{weapondmgbuff}} Damage §7to your weapons."
    	    ]
    	  }
    	],
    	rare: [
    	  {
    		name: "Primal Force",
    	    scalings: [
    		  {
    			name: "weapondmgbuff",
    			base: 0.1,
    			scaling: 0.1,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Adds §f+{{weapondmgbuff}} Damage §7to your weapons."
    	    ]
    	  },
    	  {
    		name: "First Pounce",
    	    scalings: [
    		  {
    			name: "firsthitdmg",
    			base: 0.3,
    			scaling: 0.3,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Increases damage dealt by §f{{firsthitdmg}}% §7on your first hit on a mob."
    	    ]
    	  }
    	],
    	epic: [
    	  {
    		name: "Primal Force",
    	    scalings: [
    		  {
    			name: "weapondmgbuff",
    			base: 0.15,
    			scaling: 0.15,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Adds §f+{{weapondmgbuff}} Damage §7to your weapons."
    	    ]
    	  },
    	  {
    		name: "First Pounce",
    	    scalings: [
    		  {
    			name: "firsthitdmg",
    			base: 0.4,
    			scaling: 0.4,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Increases damage dealt by §f{{firsthitdmg}}% §7on your first hit on a mob."
    	    ]
    	  }
    	],
    	legendary: [
    	  {
    		name: "Primal Force",
    	    scalings: [
    		  {
    			name: "weapondmgbuff",
    			base: 0.2,
    			scaling: 0.2,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Adds §f+{{weapondmgbuff}} Damage §7to your weapons."
    	    ]
    	  },
    	  {
    		name: "First Pounce",
    	    scalings: [
    		  {
    			name: "firsthitdmg",
    			base: 0.5,
    			scaling: 0.5,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Increases damage dealt by §f{{firsthitdmg}}% §7on your first hit on a mob."
    	    ]
    	  },
    	  {
    		name: "King of the Jungle",
    		scalings: [
    		  {
    			name: "mobextradmg",
    			base: 0.3,
    			scaling: 0.3,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Deal §f+{{mobextradmg}}% Damage §7against mobs below level 80."
    	    ]
    	  }
    	]
      }
    },
    "PARROT": {
      head: "/head/5df4b3401a4d06ad66ac8b5c4d189618ae617f9c143071c8ac39a563cf4e4208",
      type: "alchemy",
      emoji: "🦜",
      stats: {
    	epic: [
    	  {
    		stat: "Intelligence",
    		base: 1,
    		scaling: 1,
    		suffix: ""
    	  },
    	  {
    		stat: "Crit Damage",
    		base: 0,
    		scaling: 0.101010101,
    		suffix: "%"
    	  }
    	],
    	legendary: [
    	  {
    		stat: "Intelligence",
    		base: 1,
    		scaling: 1,
    		suffix: ""
    	  },
    	  {
    		stat: "Crit Damage",
    		base: 0,
    		scaling: 0.101010101,
    		suffix: "%"
    	  }
    	]
      },
      abilities: {
    	epic: [
    	  {
    		name: "Flamboyant",
    	    scalings: [
    		  {
    			name: "level",
    			base: 1,
    			scaling: 0.14141414,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Adds §a{{level}} §7level to intimidation accessories."
    	    ]
    	  },
    	  {
    		name: "Repeat",
    	    scalings: [
    		  {
    			name: "potionboost",
    			base: 5.3,
    			scaling: 0.35050505,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Boosts potions duration by §f{{potionboost}}%§7."
    	    ]
    	  }

    	],
    	legendary: [
    	  {
    		name: "Flamboyant",
    	    scalings: [
    		  {
    			name: "level",
    			base: 1,
    			scaling: 0.14141414,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Adds §a{{level}} §7level to intimidation accessories."
    	    ]
    	  },
    	  {
    		name: "Repeat",
    	    scalings: [
    		  {
    			name: "potionboost",
    			base: 5.3,
    			scaling: 0.35050505,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Boosts potions duration by §f{{potionboost}}%§7."
    	    ]
    	  },
    	  {
    		name: "Bird Discourse",
    		scalings: [
    		  {
    			name: "strengthboost",
    			base: 5.2,
    			scaling: 0.250505050505,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Gives §c+{{strengthboost}} Strength§7 to players within 20 Blocks (doesn't stack)."
    	    ]
    	  }
    	]
      }
    },
    "SNOWMAN": {
      head: "/head/11136616d8c4a87a54ce78a97b551610c2b2c8f6d410bc38b858f974b113b208",
      type: "combat",
      emoji: "⛄",
      stats: {
    	legendary: [
    		{
    			stat: "Damage",
    			base: 0,
    			scaling: 0.2525252525,
    			suffix: ""
    		},
    		{
    			stat: "Strength",
    			base: 0,
    			scaling: 0.2525252525,
    			suffix: ""
    		},
    		{
    			stat: "Crit Damage",
    			base: 0,
    			scaling: 0.2525252525,
    			suffix: "%"
    		}
    	]
      },
      abilities: {
    	legendary: [
    	  {
    		name: "Blizzard",
    		scalings: [
    		  {
    			name: "range",
    			base: 4,
    			scaling: 0.04040404040404,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Slow all enemies within §a{{range}} §7blocks."
    		]
    	  },
    	  {
    		name: "Frostbite",
    		scalings: [
    		  {
    			name: "reduce",
    			base: 0.1,
    			scaling: 0.15050505,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Your freezing aura slows enemy attacks causing you to take §f{{reduce}}% §7reduced damage."
    		]
    	  },
    	  {
    		name: "Snow Cannon",
    		scalings: [],
    		lore: [
    		  "§7Your snowman fires a snowball dealing §f5x§7 your §cStrength§7 when a mob gets close to you (1s cooldown)"
    		]
    	  }
    	]
      }
    },
    "TURTLE": {
      head: "/head/212b58c841b394863dbcc54de1c2ad2648af8f03e648988c1f9cef0bc20ee23c",
      type: "combat",
      emoji: "🐢",
      stats: {
    	epic: [
    	  {
    		stat: "Health",
    		base: 0,
    		scaling: 0.5050505,
    		suffix: ""
    	  },
    	  {
    		stat: "Defense",
    		base: 0,
    		scaling: 1.01010101,
    		suffix: ""
    	  }
    	],
    	legendary: [
    	  {
    		stat: "Health",
    		base: 0,
    		scaling: 0.5050505,
    		suffix: ""
    	  },
    	  {
    		stat: "Defense",
    		base: 0,
    		scaling: 1.01010101,
    		suffix: ""
    	  }
    	]
      },
      abilities: {
    	epic: [
    	  {
    		name: "Turtle Tactics",
    	    scalings: [
    		  {
    			name: "extradefense",
    			base: 3,
    			scaling: 0.17171717,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Gain §a+{{extradefense}}% Defense§7."
    	    ]
    	  },
    	  {
    		name: "Genius Amniote",
    	    scalings: [
    		  {
    			name: "waterdefense",
    			base: 5,
    			scaling: 0.35353535,
    			rounding: 1
    		  },
    		  {
    			name: "waterhealth",
    			base: 0,
    			scaling: 0.2020202,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Gain §a+{{waterdefense}} Defense §7and regen §c+{{waterhealth}}HP §7per second when near or in water."
    	    ]
    	  }
    	],
    	legendary: [
    	  {
    		name: "Turtle Tactics",
    	    scalings: [
    		  {
    			name: "extradefense",
    			base: 3,
    			scaling: 0.17171717,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Gain §a+{{extradefense}}% Defense§7."
    	    ]
    	  },
    	  {
    		name: "Genius Amniote",
    	    scalings: [
    		  {
    			name: "waterdefense",
    			base: 5,
    			scaling: 0.45454545,
    			rounding: 1
    		  },
    		  {
    			name: "waterhealth",
    			base: 0,
    			scaling: 0.25252525,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Gain §a+{{waterdefense}} Defense §7and regen §c+{{waterhealth}}HP §7per second when near or in water."
    	    ]
    	  },
    	  {
    		name: "Unflippable",
    		scalings: [
    		],
    		lore: [
    		  "§7Gain immunity to knockback."
    	    ]
    	  }
    	]
      }
    },
    "BEE": {
      head: "/head/7e941987e825a24ea7baafab9819344b6c247c75c54a691987cd296bc163c263",
      type: "farming",
      emoji: "🐝",
      stats: {
        "common": [
          {
            stat: "Intelligence",
            base: 0,
            scaling: 0.5,
            suffix: ""
          },
          {
            stat: "Strength",
            base: 5,
            scaling: 0.25,
            suffix: ""
          },
          {
            stat: "Speed",
            base: 0,
            scaling: 0.1,
            suffix: ""
          }
        ],
        "uncommon": [
          {
            stat: "Intelligence",
            base: 0,
            scaling: 0.5,
            suffix: ""
          },
          {
            stat: "Strength",
            base: 5,
            scaling: 0.25,
            suffix: ""
          },
          {
            stat: "Speed",
            base: 0,
            scaling: 0.1,
            suffix: ""
          }
        ],
        "rare": [
          {
            stat: "Intelligence",
            base: 0,
            scaling: 0.5,
            suffix: ""
          },
          {
            stat: "Strength",
            base: 5,
            scaling: 0.25,
            suffix: ""
          },
          {
            stat: "Speed",
            base: 0,
            scaling: 0.1,
            suffix: ""
          }
        ],
        "epic": [
          {
            stat: "Intelligence",
            base: 0,
            scaling: 0.5,
            suffix: ""
          },
          {
            stat: "Strength",
            base: 5,
            scaling: 0.25,
            suffix: ""
          },
          {
            stat: "Speed",
            base: 0,
            scaling: 0.1,
            suffix: ""
          }
        ],
        "legendary": [
          {
            stat: "Intelligence",
            base: 0,
            scaling: 0.5,
            suffix: ""
          },
          {
            stat: "Strength",
            base: 5,
            scaling: 0.25,
            suffix: ""
          },
          {
            stat: "Speed",
            base: 0,
            scaling: 0.1,
            suffix: ""
          }
        ]
      },
      abilities: {
        common: [
          {
            name: "Hive",
            scalings: [
              {
                name: "intelligence",
                base: 1,
                scaling: 0.0202020202,
                rounding: 1
              },
              {
                name: "strength",
                base: 1,
                scaling: 0.0202020202,
                rounding: 1
              }
            ],
            lore: [
              "§7Gain §b+{{intelligence}} Intelligence",
              "§7and §c+{{strength}} Strength §7for each",
              "§7nearby bee.",
              "",
              "§7(Max 15 Bees)"
            ]
          }
        ],
        uncommon: [
          {
            name: "Hive",
            scalings: [
              {
                name: "intelligence",
                base: 1,
                scaling: 0.0505050505,
                rounding: 1
              },
              {
                name: "strength",
                base: 1,
                scaling: 0.0505050505,
                rounding: 1
              }
            ],
            lore: [
              "§7Gain §b+{{intelligence}} Intelligence",
              "§7and §c+{{strength}} Strength §7for each",
              "§7nearby bee.",
              "",
              "§7(Max 15 Bees)"
            ]
          }
        ],
        rare: [
          {
            name: "Hive",
            scalings: [
              {
                name: "intelligence",
                base: 1,
                scaling: 0.089899,
                rounding: 1
              },
              {
                name: "strength",
                base: 1,
                scaling: 0.069697,
                rounding: 1
              }
            ],
            lore: [
              "§7Gain §b+{{intelligence}} Intelligence",
              "§7and §c+{{strength}} Strength §7for each",
              "§7nearby bee.",
              "",
              "§7(Max 15 Bees)"
            ]
          },
          {
            name: "Busy Buzz Buzz",
            scalings: [
              {
                name: "chance",
                base: 0.5,
                scaling: 0.5,
                rounding: 1
              }
            ],
            lore: [
              "§7Has §f{{chance}}% §7chance for flowers",
              "§7to drop an extra one"
            ]
          }
        ],
        epic: [
          {
            name: "Hive",
            scalings: [
              {
                name: "intelligence",
                base: 1.1,
                scaling: 0.140404,
                rounding: 1
              },
              {
                name: "strength",
                base: 1.1,
                scaling: 0.110101,
                rounding: 1
              }
            ],
            lore: [
              "§7Gain §b+{{intelligence}} Intelligence",
              "§7and §c+{{strength}} Strength §7for each",
              "§7nearby bee.",
              "",
              "§7(Max 15 Bees)"
            ]
          },
          {
            name: "Busy Buzz Buzz",
            scalings: [
              {
                name: "chance",
                base: 1,
                scaling: 1,
                rounding: 1
              }
            ],
            lore: [
              "§7Has §f{{chance}}% §7chance for flowers",
              "§7to drop an extra one"
            ]
          }
        ],
        legendary: [
          {
            name: "Hive",
            scalings: [
              {
                name: "intelligence",
                base: 1.2,
                scaling: 0.189899,
                rounding: 1
              },
              {
                name: "strength",
                base: 1.1,
                scaling: 0.140404,
                rounding: 1
              }
            ],
            lore: [
              "§7Gain §b+{{intelligence}} Intelligence",
              "§7and §c+{{strength}} Strength §7for each",
              "§7nearby bee.",
              "",
              "§7(Max 15 Bees)"
            ]
          },
          {
            name: "Busy Buzz Buzz",
            scalings: [
              {
                name: "chance",
                base: 1,
                scaling: 1,
                rounding: 1
              }
            ],
            lore: [
              "§7Has §f{{chance}}% §7chance for flowers",
              "§7to drop an extra one"
            ]
          },
          {
            name: "Weaponized Honey",
            scalings: [
              {
                name: "absorption",
                base: 5.2,
                scaling: 0.2,
                rounding: 1
              }
            ],
            lore: [
              "§7Gain §f{{absorption}}% §7of received",
              "§7damage as Absorption."
            ]
          }
        ]
      }
    },
    "ENDER_DRAGON": {
      head: "/head/aec3ff563290b13ff3bcc36898af7eaa988b6cc18dc254147f58374afe9b21b9",
      type: "combat",
      emoji: "🐲",
      stats: {
    	epic: [
    	  {
    		stat: "Strength",
    		base: 0,
    		scaling: 0.50505050505,
    		suffix: ""
    	  },
    	  {
    		stat: "Crit Damage",
    		base: 0,
    		scaling: 0.50505050505,
    		suffix: "%"
    	  },
    	  {
    		stat: "Crit Chance",
    		base: 0,
    		scaling: 0.10101010101,
    		suffix: "%"
    	  }
    	],
    	legendary: [
    	  {
    		stat: "Strength",
    		base: 0,
    		scaling: 0.50505050505,
    		suffix: ""
    	  },
    	  {
    		stat: "Crit Damage",
    		base: 0,
    		scaling: 0.50505050505,
    		suffix: "%"
    	  },
    	  {
    		stat: "Crit Chance",
    		base: 0,
    		scaling: 0.10101010101,
    		suffix: "%"
    	  }
    	]
      },
      abilities: {
    	epic: [
    	  {
    		name: "End Strike",
    		scalings: [
    		  {
    			name: "damage",
    			base: 0.2,
    			scaling: 0.2,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Deal §f+{{damage}}%§7 more damage to end mobs."
    		]
    	  },
    	  {
    		name: "One with the Dragons",
    		scalings: [
    		  {
    			name: "damage",
    			base: 0.5,
    			scaling: 0.5,
    			rounding: 1
    		  },
    		  {
    			name: "strength",
    			base: 0.3,
    			scaling: 0.3,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Buffs the Aspect of the Dragons sword by §f+{{damage}} Damage §7and §c+{{strength}} Strength§7."
    		]
    	  }
    	],
    	legendary: [
    	  {
    		name: "End Strike",
    		scalings: [
    		  {
    			name: "damage",
    			base: 0.2,
    			scaling: 0.2,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Deal §f+{{damage}}%§7 more damage to end mobs."
    		]
    	  },
    	  {
    		name: "One with the Dragons",
    		scalings: [
    		  {
    			name: "damage",
    			base: 0.5,
    			scaling: 0.5,
    			rounding: 1
    		  },
    		  {
    			name: "strength",
    			base: 0.3,
    			scaling: 0.3,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Buffs the Aspect of the Dragons sword by §f+{{damage}} Damage §7and §c+{{strength}} Strength§7."
    		]
    	  },
    	  {
    		name: "Superior",
    		scalings: [
    		  {
    			name: "superior",
    			base: 0.5,
    			scaling: 0.5,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Increases all stats by §f{{superior}}%§7."
    		]
    	  }
    	]
      }
    },
    "GUARDIAN": {
      head: "/head/221025434045bda7025b3e514b316a4b770c6faa4ba9adb4be3809526db77f9d",
      type: "combat",
      emoji: "🐡",
      stats: {
    	common: [
    	  {
    		stat: "Intelligence",
    		base: 1,
    		scaling: 1,
    		suffix: ""
    	  },
    	  {
    		stat: "Defense",
    		base: 0,
    		scaling: 0.50505050505,
    		suffix: ""
    	  }
    	],
    	uncommon: [
    	  {
    		stat: "Intelligence",
    		base: 1,
    		scaling: 1,
    		suffix: ""
    	  },
    	  {
    		stat: "Defense",
    		base: 0,
    		scaling: 0.50505050505,
    		suffix: ""
    	  }
    	],
    	rare: [
    	  {
    		stat: "Intelligence",
    		base: 1,
    		scaling: 1,
    		suffix: ""
    	  },
    	  {
    		stat: "Defense",
    		base: 0,
    		scaling: 0.50505050505,
    		suffix: ""
    	  }
    	],
    	epic: [
    	  {
    		stat: "Intelligence",
    		base: 1,
    		scaling: 1,
    		suffix: ""
    	  },
    	  {
    		stat: "Defense",
    		base: 0,
    		scaling: 0.50505050505,
    		suffix: ""
    	  }
    	],
    	legendary: [
    	  {
    		stat: "Intelligence",
    		base: 1,
    		scaling: 1,
    		suffix: ""
    	  },
    	  {
    		stat: "Defense",
    		base: 0,
    		scaling: 0.50505050505,
    		suffix: ""
    	  }
    	]
      },
      abilities: {
    	common: [
    	  {
    		name: "Laserbeam",
    		scalings: [
    		  {
    			name: "zap",
    			base: 0.2,
    			scaling: 0.018181818,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Zaps your enemies for §b{{zap}}x§7 your §bIntelligence§7 every 3s."
    		]
    	  }
    	],
    	uncommon: [
    	  {
    		name: "Laserbeam",
    		scalings: [
    		  {
    			name: "zap",
    			base: 0.2,
    			scaling: 0.048484848,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Zaps your enemies for §b{{zap}}x§7 your §bIntelligence§7 every 3s."
    		]
    	  }
    	],
    	rare: [
    	  {
    		name: "Laserbeam",
    		scalings: [
    		  {
    			name: "zap",
    			base: 0.2,
    			scaling: 0.098989899,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Zaps your enemies for §b{{zap}}x§7 your §bIntelligence§7 every 3s."
    		]
    	  },
    	  {
    		name: "Enchanting Exp Boost",
    		scalings: [
    		  {
    			name: "boost",
    			base: 0.25,
    			scaling: 0.3,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Boosts your Enchanting exp by §f{{boost}}%§7."
    		]
    	  }
    	],
    	epic: [
    	  {
    		name: "Laserbeam",
    		scalings: [
    		  {
    			name: "zap",
    			base: 0.2,
    			scaling: 0.1494949495,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Zaps your enemies for §b{{zap}}x§7 your §bIntelligence§7 every 3s."
    		]
    	  },
    	  {
    		name: "Enchanting Exp Boost",
    		scalings: [
    		  {
    			name: "boost",
    			base: 0.3,
    			scaling: 0.3,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Boosts your Enchanting exp by §f{{boost}}%§7."
    		]
    	  }
    	],
    	legendary: [
    	  {
    		name: "Laserbeam",
    		scalings: [
    		  {
    			name: "zap",
    			base: 0.2,
    			scaling: 0.2,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Zaps your enemies for §b{{zap}}x§7 your §bIntelligence§7 every 3s."
    		]
    	  },
    	  {
    		name: "Enchanting Exp Boost",
    		scalings: [
    		  {
    			name: "boost",
    			base: 0.3,
    			scaling: 0.3,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Boosts your Enchanting exp by §f{{boost}}%§7."
    		]
    	  },
    	  {
    		name: "Mana Pool",
    		scalings: [
    		  {
    			name: "regen",
    			base: 0.3,
    			scaling: 0.3,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Regenerate §f{{regen}}% extra mana§7, doubled when near or in water."
    		]
    	  }
    	]
      }
    },
    "SQUID": {
      head: "/head/01433be242366af126da434b8735df1eb5b3cb2cede39145974e9c483607bac",
      type: "fishing",
      emoji: "🦑",
      stats: {
    	common: [
    	  {
    		stat: "Intelligence",
    		base: 0,
    		scaling: 0.505050505,
    		suffix: ""
    	  },
    	  {
    		stat: "Health",
    		base: 0,
    		scaling: 0.505050505,
    		suffix: ""
    	  }
    	],
    	uncommon: [
    	  {
    		stat: "Intelligence",
    		base: 0,
    		scaling: 0.505050505,
    		suffix: ""
    	  },
    	  {
    		stat: "Health",
    		base: 0,
    		scaling: 0.505050505,
    		suffix: ""
    	  }
    	],
    	rare: [
    	  {
    		stat: "Intelligence",
    		base: 0,
    		scaling: 0.505050505,
    		suffix: ""
    	  },
    	  {
    		stat: "Health",
    		base: 0,
    		scaling: 0.505050505,
    		suffix: ""
    	  }
    	],
    	epic: [
    	  {
    		stat: "Intelligence",
    		base: 0,
    		scaling: 0.505050505,
    		suffix: ""
    	  },
    	  {
    		stat: "Health",
    		base: 0,
    		scaling: 0.505050505,
    		suffix: ""
    	  }
    	],
    	legendary: [
    	  {
    		stat: "Intelligence",
    		base: 0,
    		scaling: 0.505050505,
    		suffix: ""
    	  },
    	  {
    		stat: "Health",
    		base: 0,
    		scaling: 0.505050505,
    		suffix: ""
    	  }
    	]
      },
      abilities: {
    	common: [
    	  {
    		name: "More Ink",
    	    scalings: [
    		  {
    			name: "doublesquid",
    			base: 0.5,
    			scaling: 0.5,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Gain a §f{{doublesquid}}% §7chance to get double drops from squids."
    	    ]
    	  }
    	],
    	uncommon: [
    	  {
    		name: "More Ink",
    	    scalings: [
    		  {
    			name: "doublesquid",
    			base: 0.8,
    			scaling: 0.74949494,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Gain a §f{{doublesquid}}% §7chance to get double drops from squids."
    	    ]
    	  }
    	],
    	rare: [
    	  {
    		name: "More Ink",
    	    scalings: [
    		  {
    			name: "doublesquid",
    			base: 0.8,
    			scaling: 0.74949494,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Gain a §f{{doublesquid}}% §7chance to get double drops from squids."
    	    ]
    	  },
    	  {
    		name: "Ink Specialty",
    	    scalings: [
    		  {
    			name: "wanddamage",
    			base: 0.3,
    			scaling: 0.3,
    			rounding: 1
    		  },
    		  {
    			name: "wandstrength",
    			base: 0.1,
    			scaling: 0.1,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Buffs the Ink Wand by §f{{wanddamage}} Damage §7and §c{{wandstrength}} Strength§7."
    	    ]
    	  }
    	],
    	epic: [
    	  {
    		name: "More Ink",
    	    scalings: [
    		  {
    			name: "doublesquid",
    			base: 1,
    			scaling: 1,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Gain a §f{{doublesquid}}% §7chance to get double drops from squids."
    	    ]
    	  },
    	  {
    		name: "Ink Specialty",
    	    scalings: [
    		  {
    			name: "wanddamage",
    			base: 0.4,
    			scaling: 0.4,
    			rounding: 1
    		  },
    		  {
    			name: "wandstrength",
    			base: 0.2,
    			scaling: 0.2,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Buffs the Ink Wand by §f{{wanddamage}} Damage §7and §c{{wandstrength}} Strength§7."
    	    ]
    	  }
    	],
    	legendary: [
    	  {
    		name: "More Ink",
    	    scalings: [
    		  {
    			name: "doublesquid",
    			base: 0.8,
    			scaling: 0.74949494,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Gain a §f{{doublesquid}}% §7chance to get double drops from squids."
    	    ]
    	  },
    	  {
    		name: "Ink Specialty",
    	    scalings: [
    		  {
    			name: "wanddamage",
    			base: 0.3,
    			scaling: 0.3,
    			rounding: 1
    		  },
    		  {
    			name: "wandstrength",
    			base: 0.1,
    			scaling: 0.1,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Buffs the Ink Wand by §f{{wanddamage}} Damage §7and §c{{wandstrength}} Strength§7."
    	    ]
    	  },
    	  {
    		name: "Fishing Exp Boost",
    		scalings: [
    		  {
    			name: "fishboost",
    			base: 0.3,
    			scaling: 0.3,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Boosts your Fishing exp by §f{{fishboost}}%§7."
    	    ]
    	  }
    	]
      }
    },
    "GIRAFFE": {
      head: "/head/176b4e390f2ecdb8a78dc611789ca0af1e7e09229319c3a7aa8209b63b9",
      type: "foraging",
      emoji: "🦒",
      stats: {
    	common: [
    	  {
    		stat: "Health",
    		base: 1,
    		scaling: 1,
    		suffix: ""
    	  },
    	  {
    		stat: "Crit Chance",
    		base: 0,
    		scaling: 0.05050505,
    		suffix: "%"
    	  }
    	],
    	uncommon: [
    	  {
    		stat: "Health",
    		base: 1,
    		scaling: 1,
    		suffix: ""
    	  },
    	  {
    		stat: "Crit Chance",
    		base: 0,
    		scaling: 0.05050505,
    		suffix: "%"
    	  }
    	],
    	rare: [
    	  {
    		stat: "Health",
    		base: 1,
    		scaling: 1,
    		suffix: ""
    	  },
    	  {
    		stat: "Crit Chance",
    		base: 0,
    		scaling: 0.05050505,
    		suffix: "%"
    	  }
    	],
    	epic: [
    	  {
    		stat: "Health",
    		base: 1,
    		scaling: 1,
    		suffix: ""
    	  },
    	  {
    		stat: "Crit Chance",
    		base: 0,
    		scaling: 0.05050505,
    		suffix: "%"
    	  }
    	],
    	legendary: [
    	  {
    		stat: "Health",
    		base: 1,
    		scaling: 1,
    		suffix: ""
    	  },
    	  {
    		stat: "Crit Chance",
    		base: 0,
    		scaling: 0.05050505,
    		suffix: "%"
    	  }
    	]
      },
      abilities: {
    	common: [
    	  {
    		name: "Good Heart",
    	    scalings: [
    		  {
    			name: "healthregen",
    			base: 0.1,
    			scaling: 0.0494949,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Regen §c{{healthregen}} Health §7per Second."
    	    ]
    	  }
    	],
    	uncommon: [
    	  {
    		name: "Good Heart",
    	    scalings: [
    		  {
    			name: "healthregen",
    			base: 0.1,
    			scaling: 0.1,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Regen §c{{healthregen}} Health §7per Second."
    	    ]
    	  }
    	],
    	rare: [
    	  {
    		name: "Good Heart",
    	    scalings: [
    		  {
    			name: "healthregen",
    			base: 0.1,
    			scaling: 0.15050505,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Regen §c{{healthregen}} Health §7per Second."
    	    ]
    	  },
    	  {
    		name: "Higher Ground",
    	    scalings: [
    		  {
    			name: "midairstrength",
    			base: 0.4,
    			scaling: 0.4,
    			rounding: 1
    		  },
    		  {
    			name: "midairdmg",
    			base: 20.1,
    			scaling: 0.1,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Grants §c+{{midairstrength}} Strength §7and §9{{midairdmg}} Crit Damage §7when mid air."
    	    ]
    	  }
    	],
    	epic: [
    	  {
    		name: "Good Heart",
    	    scalings: [
    		  {
    			name: "healthregen",
    			base: 0.2,
    			scaling: 0.2,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Regen §c{{healthregen}} Health §7per Second."
    	    ]
    	  },
    	  {
    		name: "Higher Ground",
    	    scalings: [
    		  {
    			name: "midairstrength",
    			base: 0.5,
    			scaling: 0.5,
    			rounding: 1
    		  },
    		  {
    			name: "midairdmg",
    			base: 20.1,
    			scaling: 0.25050505,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Grants §c+{{midairstrength}} Strength §7and §9{{midairdmg}} Crit Damage §7when mid air."
    	    ]
    	  }
    	],
    	legendary: [
    	  {
    		name: "Good Heart",
    	    scalings: [
    		  {
    			name: "healthregen",
    			base: 0.2,
    			scaling: 0.25050505,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Regen §c{{healthregen}} Health §7per Second."
    	    ]
    	  },
    	  {
    		name: "Higher Ground",
    	    scalings: [
    		  {
    			name: "midairstrength",
    			base: 0.5,
    			scaling: 0.5,
    			rounding: 1
    		  },
    		  {
    			name: "midairdmg",
    			base: 24.2,
    			scaling: 0.36161616,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Grants §c+{{midairstrength}} Strength §7and §9{{midairdmg}} Crit Damage §7when mid air."
    	    ]
    	  },
    	  {
    		name: "Long Neck",
    		scalings: [
    		  {
    			name: "dodgechance",
    			base: 0.25,
    			scaling: 0.25,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7See enemies from afar and gain §f+{{dodgechance}}% §7dodge chance."
    	    ]
    	  }
    	]
      }
    },
    "ELEPHANT": {
      head: "/head/7071a76f669db5ed6d32b48bb2dba55d5317d7f45225cb3267ec435cfa514",
      type: "farming",
      emoji: "🐘",
      stats: {
    	common: [
    		{
    			stat: "Health",
    			base: 1,
    			scaling: 1,
          suffix: ""
    		},
    		{
    			stat: "Intelligence",
    			base: 0,
    			scaling: 0.75757575,
          suffix: ""
    		}
    	],
    	uncommon: [
    		{
    			stat: "Health",
    			base: 1,
    			scaling: 1,
          suffix: ""
    		},
    		{
    			stat: "Intelligence",
    			base: 0,
    			scaling: 0.75757575,
          suffix: ""
    		}
    	],
    	rare: [
    		{
    			stat: "Health",
    			base: 1,
    			scaling: 1,
          suffix: ""
    		},
    		{
    			stat: "Intelligence",
    			base: 0,
    			scaling: 0.75757575,
          suffix: ""
    		}
    	],
    	epic: [
    		{
    			stat: "Health",
    			base: 1,
    			scaling: 1,
          suffix: ""
    		},
    		{
    			stat: "Intelligence",
    			base: 0,
    			scaling: 0.75757575,
          suffix: ""
    		}
    	],
    	legendary: [
    		{
    			stat: "Health",
    			base: 1,
    			scaling: 1,
          suffix: ""
    		},
    		{
    			stat: "Intelligence",
    			base: 0,
    			scaling: 0.75757575,
          suffix: ""
    		}
    	]
      },
      abilities: {
    	common: [
    		{
    			name: "Stomp",
    			scalings: [
    			  {
    				name: "defense",
    				base: 0.1,
    				scaling: 0.150505,
    				rounding: 1
    			  }
    			],
    			lore: [
    			  "§7Gain §a{{defense}} Defense §7for",
    			  "§7every §f100 Speed§7."
    			]
    		}
    	],
    	uncommon: [
    		{
    			name: "Stomp",
    			scalings: [
    			  {
    				name: "defense",
    				base: 0.1,
    				scaling: 0.150505,
    				rounding: 1
    			  }
    			],
    			lore: [
    			  "§7Gain §a{{defense}} Defense §7for",
    			  "§7every §f100 Speed§7."
    			]
    		}
    	],
    	rare: [
    		{
    			name: "Stomp",
    			scalings: [
    			  {
    				name: "defense",
    				base: 0.1,
    				scaling: 0.150505,
    				rounding: 1
    			  }
    			],
    			lore: [
    			  "§7Gain §a{{defense}} Defense §7for",
    			  "§7every §f100 Speed§7."
    			]
    		},
    		{
    			name: "Walking Fortress",
    			scalings: [
    			  {
    				name: "health",
    				base: 0,
    				scaling: 0.00808081,
    				rounding: 1
    			  }
    			],
    			lore: [
    			  "§7Gain §c{{health}} Health §7for",
    			  "§7every §a10 Defense§7."
    			]
    		}
    	],
    	epic: [
    		{
    			name: "Stomp",
    			scalings: [
    			  {
    				name: "defense",
    				base: 0.2,
    				scaling: 0.2,
    				rounding: 1
    			  }
    			],
    			lore: [
    			  "§7Gain §a{{defense}} Defense §7for",
    			  "§7every §f100 Speed§7."
    			]
    		},
    		{
    			name: "Walking Fortress",
    			scalings: [
    			  {
    				name: "health",
    				base: 0,
    				scaling: 0.0101010101,
    				rounding: 1
    			  }
    			],
    			lore: [
    			  "§7Gain §c{{health}} Health §7for",
    			  "§7every §a10 Defense§7."
    			]
    		}
    	],
    	legendary: [
    		{
    			name: "Stomp",
    			scalings: [
    			  {
    				name: "defense",
    				base: 0.2,
    				scaling: 0.2,
    				rounding: 1
    			  }
    			],
    			lore: [
    			  "§7Gain §a{{defense}} Defense §7for",
    			  "§7every §f100 Speed§7."
    			]
    		},
    		{
    			name: "Walking Fortress",
    			scalings: [
    			  {
    				name: "health",
    				base: 0,
    				scaling: 0.0101010101,
    				rounding: 1
    			  }
    			],
    			lore: [
    			  "§7Gain §c{{health}} Health §7for",
    			  "§7every §a10 Defense§7."
    			]
    		},
    		{
    			name: "Trunk Efficiency",
    			scalings: [
    			  {
    				name: "chance",
    				base: 0,
    				scaling: 0.2525252525,
    				rounding: 1
    			  }
    			],
    			lore: [
    			  "§7Grants a §f{{chance}}% §7chance to get",
    			  "§7double crops while farming."
    			]
    		}
    	]
      }
    },
    "MONKEY": {
      head: "/head/13cf8db84807c471d7c6922302261ac1b5a179f96d1191156ecf3e1b1d3ca",
      type: "foraging",
      emoji: "🐒",
      stats: {
    	common: [
    	  {
    		stat: "Speed",
    		base: 0,
    		scaling: 0.2020202,
    		suffix: ""
    	  },
    	  {
    		stat: "Intelligence",
    		base: 0,
    		scaling: 0.505050505,
    		suffix: ""
    	  }
    	],
    	uncommon: [
    	  {
    		stat: "Speed",
    		base: 0,
    		scaling: 0.2020202,
    		suffix: ""
    	  },
    	  {
    		stat: "Intelligence",
    		base: 0,
    		scaling: 0.505050505,
    		suffix: ""
    	  }
    	],
    	rare: [
    	  {
    		stat: "Speed",
    		base: 0,
    		scaling: 0.2020202,
    		suffix: ""
    	  },
    	  {
    		stat: "Intelligence",
    		base: 0,
    		scaling: 0.505050505,
    		suffix: ""
    	  }
    	],
    	epic: [
    	  {
    		stat: "Speed",
    		base: 0,
    		scaling: 0.2020202,
    		suffix: ""
    	  },
    	  {
    		stat: "Intelligence",
    		base: 0,
    		scaling: 0.505050505,
    		suffix: ""
    	  }
    	],
    	legendary: [
    	  {
    		stat: "Speed",
    		base: 0,
    		scaling: 0.2020202,
    		suffix: ""
    	  },
    	  {
    		stat: "Intelligence",
    		base: 0,
    		scaling: 0.505050505,
    		suffix: ""
    	  }
    	]
      },
      abilities: {
    	common: [
    	  {
    		name: "Treeborn",
    	    scalings: [
    		  {
    			name: "doublelogs",
    			base: 0.2,
    			scaling: 0.2,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Increase double drop rates for logs by §f{{doublelogs}}%§7."
    	    ]
    	  }
    	],
    	uncommon: [
    	  {
    		name: "Treeborn",
    	    scalings: [
    		  {
    			name: "doublelogs",
    			base: 0.25,
    			scaling: 0.25,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Increase double drop rates for logs by §f{{doublelogs}}%§7."
    	    ]
    	  }
    	],
    	rare: [
    	  {
    		name: "Treeborn",
    	    scalings: [
    		  {
    			name: "doublelogs",
    			base: 0.25,
    			scaling: 0.25,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Increase double drop rates for logs by §f{{doublelogs}}%§7."
    	    ]
    	  },
    	  {
    		name: "Vine Swing",
    	    scalings: [
    		  {
    			name: "parkspeed",
    			base: 0.8,
    			scaling: 0.74949494,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Gain §f+{{parkspeed}} Speed §7while in The Park."
    	    ]
    	  }
    	],
    	epic: [
    	  {
    		name: "Treeborn",
    	    scalings: [
    		  {
    			name: "doublelogs",
    			base: 0.3,
    			scaling: 0.3,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Increase double drop rates for logs by §f{{doublelogs}}%§7."
    	    ]
    	  },
    	  {
    		name: "Vine Swing",
    	    scalings: [
    		  {
    			name: "parkspeed",
    			base: 1,
    			scaling: 1,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Gain §f+{{parkspeed}} Speed §7while in The Park."
    	    ]
    	  }
    	],
    	legendary: [
    	  {
    		name: "Treeborn",
    	    scalings: [
    		  {
    			name: "doublelogs",
    			base: 0.3,
    			scaling: 0.3,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Increase double drop rates for logs by §f{{doublelogs}}%§7."
    	    ]
    	  },
    	  {
    		name: "Vine Swing",
    	    scalings: [
    		  {
    			name: "parkspeed",
    			base: 1,
    			scaling: 1,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Gain §f+{{parkspeed}} Speed §7while in The Park."
    	    ]
    	  },
    	  {
    		name: "Evolved Axes",
    		scalings: [
    		  {
    			name: "axecooldown",
    			base: 0.5,
    			scaling: 0.5,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Reduce the cooldown of the Jungle Axe and Treecapitator by §f{{axecooldown}}%§7."
    	    ]
    	  }
    	]
      }
    },
    "SPIDER": {
      head: "/head/cd541541daaff50896cd258bdbdd4cf80c3ba816735726078bfe393927e57f1",
      type: "combat",
      emoji: "🕷️",
      stats: {
    	common: [
    		{
    			stat: "Strength",
    			base: 0,
    			scaling: 0.101010101,
    			suffix: ""
    		},
    		{
    			stat: "Crit Chance",
    			base: 0,
    			scaling: 0.101010101,
    			suffix: "%"
    		}
    	],
    	uncommon: [
    		{
    			stat: "Strength",
    			base: 0,
    			scaling: 0.101010101,
    			suffix: ""
    		},
    		{
    			stat: "Crit Chance",
    			base: 0,
    			scaling: 0.101010101,
    			suffix: "%"
    		}
    	],
    	rare: [
    		{
    			stat: "Strength",
    			base: 0,
    			scaling: 0.101010101,
    			suffix: ""
    		},
    		{
    			stat: "Crit Chance",
    			base: 0,
    			scaling: 0.101010101,
    			suffix: "%"
    		}
    	],
    	epic: [
    		{
    			stat: "Strength",
    			base: 0,
    			scaling: 0.101010101,
    			suffix: ""
    		},
    		{
    			stat: "Crit Chance",
    			base: 0,
    			scaling: 0.101010101,
    			suffix: "%"
    		}
    	],
    	legendary: [
    		{
    			stat: "Strength",
    			base: 0,
    			scaling: 0.101010101,
    			suffix: ""
    		},
    		{
    			stat: "Crit Chance",
    			base: 0,
    			scaling: 0.101010101,
    			suffix: "%"
    		}
    	]
      },
      abilities: {
    	common: [
    	  {
    		name: "One With The Spider",
    		scalings: [
    		  {
    			name: "strength",
    			base: 0.1,
    			scaling: 0.1,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Gain §c+{{strength}} Strength§7 for every nearby spider.",
    		  "§7 Max 10 spiders"
    		]
    	  }
    	],
    	uncommon: [
    	  {
    		name: "One With The Spider",
    		scalings: [
    		  {
    			name: "strength",
    			base: 0.1,
    			scaling: 0.1,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Gain §c+{{strength}} Strength§7 for every nearby spider.",
    		  "§7 Max 10 spiders"
    		]
    	  }
    	],
    	rare: [
    	  {
    		name: "One With The Spider",
    		scalings: [
    		  {
    			name: "strength",
    			base: 0.1,
    			scaling: 0.1,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Gain §c+{{strength}} Strength§7 for every nearby spider.",
    		  "§7 Max 10 spiders"
    		]
    	  },
    	  {
    		name: "Web-Weaver",
    		scalings: [
    		  {
    			name: "slow",
    			base: 0.4,
    			scaling: 0.4,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Upon hitting a monster it becomes slowed by §f{{slow}}%§7."
    		]
    	  }
    	],
    	epic: [
    	  {
    		name: "One With The Spider",
    		scalings: [
    		  {
    			name: "strength",
    			base: 0.1,
    			scaling: 0.1,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Gain §c+{{strength}} Strength§7 for every nearby spider.",
    		  "§7 Max 10 spiders"
    		]
    	  },
    	  {
    		name: "Web-Weaver",
    		scalings: [
    		  {
    			name: "slow",
    			base: 0.4,
    			scaling: 0.4,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Upon hitting a monster it becomes slowed by §f{{slow}}%§7."
    		]
    	  }
    	],
    	legendary: [
    	  {
    		name: "One With The Spider",
    		scalings: [
    		  {
    			name: "strength",
    			base: 0.1,
    			scaling: 0.1,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Gain §c+{{strength}} Strength§7 for every nearby spider.",
    		  "§7 Max 10 spiders"
    		]
    	  },
    	  {
    		name: "Web-Weaver",
    		scalings: [
    		  {
    			name: "slow",
    			base: 0.4,
    			scaling: 0.4,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Upon hitting a monster it becomes slowed by §f{{slow}}%§7."
    		]
    	  },
    	  {
    		name: "Spider Whisperer",
    		scalings: [
    		  {
    			name: "boost",
    			base: 0.3,
    			scaling: 0.3,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Spider and tarantula minions work §f{{boost}}%§7 faster while on your island."
    		]
    	  }
    	]
      }
    },
    "ENDERMITE": {
      head: "/head/5a1a0831aa03afb4212adcbb24e5dfaa7f476a1173fce259ef75a85855",
      type: "mining",
      emoji: "🐛",
      stats: {
    	common: [
    	  {
    		stat: "Intelligence",
    		base: 1,
    		scaling: 1,
    		suffix: ""
    	  }
    	],
    	uncommon: [
    	  {
    		stat: "Intelligence",
    		base: 1,
    		scaling: 1,
    		suffix: ""
    	  }
    	],
    	rare: [
    	  {
    		stat: "Intelligence",
    		base: 1,
    		scaling: 1,
    		suffix: ""
    	  }
    	],
    	epic: [
    	  {
    		stat: "Intelligence",
    		base: 1,
    		scaling: 1,
    		suffix: ""
    	  }
    	],
    	legendary: [
    	  {
    		stat: "Intelligence",
    		base: 1,
    		scaling: 1,
    		suffix: ""
    	  }
    	]
      },
      abilities: {
    	common: [
    	  {
    		name: "More Stonks",
    		scalings: [
    		  {
    			name: "chance",
    			base: 0.4,
    			scaling: 0.4,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Gain more exp orbs for breaking end stone and gain a §f+{{chance}}%§7 chance to get an extra block dropped."
    		]
    	  }
    	],
    	uncommon: [
    	  {
    		name: "More Stonks",
    		scalings: [
    		  {
    			name: "chance",
    			base: 0.4,
    			scaling: 0.4,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Gain more exp orbs for breaking end stone and gain a §f+{{chance}}%§7 chance to get an extra block dropped."
    		]
    	  }
    	],
    	rare: [
    	  {
    		name: "More Stonks",
    		scalings: [
    		  {
    			name: "chance",
    			base: 0.5,
    			scaling: 0.5,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Gain more exp orbs for breaking end stone and gain a §f+{{chance}}%§7 chance to get an extra block dropped."
    		]
    	  },
    	  {
    		name: "Pearl Muncher",
    		scalings: [
    		  {
    			name: "coins",
    			base: 5,
    			scaling: 0.0505050505,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Upon picking up an ender pearl, consume it and gain §6{{coins}} coins§7."
    		]
    	  }
    	],
    	epic: [
    	  {
    		name: "More Stonks",
    		scalings: [
    		  {
    			name: "chance",
    			base: 0.5,
    			scaling: 0.5,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Gain more exp orbs for breaking end stone and gain a §f+{{chance}}%§7 chance to get an extra block dropped."
    		]
    	  },
    	  {
    		name: "Pearl Muncher",
    		scalings: [
    		  {
    			name: "coins",
    			base: 5,
    			scaling: 0.0505050505,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Upon picking up an ender pearl, consume it and gain §6{{coins}} coins§7."
    		]
    	  }

    	],
    	legendary: [
    	  {
    		name: "More Stonks",
    		scalings: [
    		  {
    			name: "chance",
    			base: 0.5,
    			scaling: 0.5,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Gain more exp orbs for breaking end stone and gain a §f+{{chance}}%§7 chance to get an extra block dropped."
    		]
    	  },
    	  {
    		name: "Pearl Muncher",
    		scalings: [
    		  {
    			name: "coins",
    			base: 5,
    			scaling: 0.0505050505,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Upon picking up an ender pearl, consume it and gain §6{{coins}} coins§7."
    		]
    	  },
    	  {
    		name: "Pearl Powered",
    		scalings: [
    		  {
    			name: "speed",
    			base: 10.4,
    			scaling: 0.4,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Upon consuming an ender pearl, gain §f+{{speed}} speed§7 for 10 seconds."
    		]
    	  }
    	]
      }
    },
    "GHOUL": {
      head: "/head/87934565bf522f6f4726cdfe127137be11d37c310db34d8c70253392b5ff5b",
      type: "combat",
      emoji: "🧟",
      stats: {
    	epic: [
    		{
    			stat: "Health",
    			base: 1,
    			scaling: 1,
    			suffix: ""
    		},
    		{
    			stat: "Intelligence",
    			base: 0.7,
    			scaling: 0.7,
    			suffix: ""
    		}
    	],
    	legendary: [
    		{
    			stat: "Health",
    			base: 1,
    			scaling: 1,
    			suffix: ""
    		},
    		{
    			stat: "Intelligence",
    			base: 0.7,
    			scaling: 0.7,
    			suffix: ""
    		}
    	]
      },
      abilities: {
    	epic: [
    	  {
    		name: "Amplified Healing",
    		scalings: [
    		  {
    			name: "boost",
    			base: 0.25,
    			scaling: 0.25,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Increases all healing by §f{{boost}}%§7."
    		]
    	  },
    	  {
    		name: "Zombie Arm",
    		scalings: [
    		  {
    			name: "boost",
    			base: 0.5,
    			scaling: 0.5,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Increases the health and range of the Zombie sword by §f{{boost}}%§7."
    		]
    	  }
    	],
    	legendary: [
    	  {
    		name: "Amplified Healing",
    		scalings: [
    		  {
    			name: "boost",
    			base: 0.25,
    			scaling: 0.25,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Increases all healing by §f{{boost}}%§7."
    		]
    	  },
    	  {
    		name: "Zombie Arm",
    		scalings: [
    		  {
    			name: "boost",
    			base: 0.5,
    			scaling: 0.5,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Increases the health and range of the Zombie sword by §f{{boost}}%§7."
    		]
    	  },
    	  {
    		name: "Reaper Soul",
    		scalings: [
    		  {
    			name: "boost",
    			base: 1,
    			scaling: 1,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Increases the health and lifespan of the Reaper Scythe zombies by §f{{boost}}%§7."
    		]
    	  }
    	]
      }
    },
    "JELLYFISH": {
      head: "/head/913f086ccb56323f238ba3489ff2a1a34c0fdceeafc483acff0e5488cfd6c2f1",
      type: "alchemy",
      emoji: "🎐",
      stats: {
    	epic: [
    	  {
    		stat: "Health",
    		base: 2,
    		scaling: 2,
    		suffix: ""
    	  }
    	],
    	legendary: [
    	  {
    		stat: "Health",
    		base: 2,
    		scaling: 2,
    		suffix: ""
    	  }
    	]
      },
      abilities: {

    	epic: [
    	  {
    		name: "Radiant Regeneration",
    	    scalings: [
    		  {
    			name: "increasehealthregen",
    			base: 1,
    			scaling: 1,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7While in dungeons, increases your base health §7regen by §f{{increasehealthregen}}% §7and heals players withing 8 blocks",
    		  "§7by up to 10hp/s."
    	    ]
    	  },
    	  {
    		name: "Hungry Healer",
    	    scalings: [
    		],
    		lore: [
    		  "§7While in dungeons, for every 1000 you heal",
    		  "§7teammates apply the enchanted golden apple",
    		  "§7effect to all lpayers within 10 blocks (10s cooldown)."
    	    ]
    	  }
    	],
    	legendary: [
    	  {
    		name: "Radiant Regeneration",
    	    scalings: [
    		  {
    			name: "increasehealthregen",
    			base: 1,
    			scaling: 1,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7While in dungeons, increases your base health",
    		  "§7regen by §f{{increasehealthregen}}% §7and heals players withing 8 blocks",
    		  "§7by up to 10hp/s."
    	    ]
    	  },
    	  {
    		name: "Hungry Healer",
    	    scalings: [
    		],
    		lore: [
    		  "§7While in dungeons, for every 1000 you heal",
    		  "§7teammates apply the enchanted golden apple",
    		  "§7effect to all lpayers within 10 blocks (10s cooldown)."
    	    ]
    	  },
    	  {
    		name: "Powerful Potions",
    		scalings: [
    		  {
    			name: "potionincrease",
    			base: 0.5,
    			scaling: 0.5,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7While in dungeons, increase the effectiveness of",
    		  "§7Instant Health and Mana splash potions by §f{{potionincrease}}%§7."
    	    ]
    	  }
    	]
      }
    },
    "PIG": {
      head: "/head/621668ef7cb79dd9c22ce3d1f3f4cb6e2559893b6df4a469514e667c16aa4",
      type: "farming",
      emoji: "🐷",
      stats: {
    	common: [
    		{
    			stat: "Speed",
    			base: 0,
    			scaling: 0.25252525252,
          suffix: "%"
    		}
    	],
    	uncommon: [
    		{
    			stat: "Speed",
    			base: 0,
    			scaling: 0.25252525252,
          suffix: "%"
    		}
    	],
    	rare: [
    		{
    			stat: "Speed",
    			base: 0,
    			scaling: 0.25252525252,
          suffix: "%"
    		}
    	],
    	epic: [
    		{
    			stat: "Speed",
    			base: 0,
    			scaling: 0.25252525252,
          suffix: "%"
    		}
    	],
    	legendary: [
    		{
    			stat: "Speed",
    			base: 0,
    			scaling: 0.25252525252,
          suffix: "%"
    		}
    	]
      },
      abilities: {
    	common: [
    		{
    			name: "Ridable",
    			scalings: [],
    			lore: [
    				"§7Right-click your summoned pet",
    				"§7to ride it!"
    			]
    		},
    		{
    			name: "Run",
    			scalings: [
    				{
    					name: "speed",
    					base: 0.3,
    					scaling: 0.3,
    					rounding: 1
    				}
    			],
    			lore: [
    				"§7Increases the speed of your",
    				"§7mount by §f{{speed}}%§7."
    			]
    		}
    	],
    	uncommon: [
    		{
    			name: "Ridable",
    			scalings: [],
    			lore: [
    				"§7Right-click your summoned pet",
    				"§7to ride it!"
    			]
    		},
    		{
    			name: "Run",
    			scalings: [
    				{
    					name: "speed",
    					base: 0.4,
    					scaling: 0.4,
    					rounding: 1
    				}
    			],
    			lore: [
    				"§7Increases the speed of your",
    				"§7mount by §f{{speed}}%§7."
    			]
    		}
    	],
    	rare: [
    		{
    			name: "Ridable",
    			scalings: [],
    			lore: [
    				"§7Right-click your summoned pet",
    				"§7to ride it!"
    			]
    		},
    		{
    			name: "Run",
    			scalings: [
    				{
    					name: "speed",
    					base: 0.4,
    					scaling: 0.4,
    					rounding: 1
    				}
    			],
    			lore: [
    				"§7Increases the speed of your",
    				"§7mount by §f{{speed}}%§7."
    			]
    		},
    		{
    			name: "Sprint",
    			scalings: [
    				{
    					name: "speed",
    					base: 0.4,
    					scaling: 0.4,
    					rounding: 1
    				}
    			],
    			lore: [
    				"§7While holding an Enchanted Carrot on",
    				"§7a Stick, increase the speed of your",
    				"§7mount by §f{{speed}}%§7."
    			]
    		}
    	],
    	epic: [
    		{
    			name: "Ridable",
    			scalings: [],
    			lore: [
    				"§7Right-click your summoned pet",
    				"§7to ride it!"
    			]
    		},
    		{
    			name: "Run",
    			scalings: [
    				{
    					name: "speed",
    					base: 0.5,
    					scaling: 0.5,
    					rounding: 1
    				}
    			],
    			lore: [
    				"§7Increases the speed of your",
    				"§7mount by §f{{speed}}%§7."
    			]
    		},
    		{
    			name: "Sprint",
    			scalings: [
    				{
    					name: "speed",
    					base: 0.5,
    					scaling: 0.5,
    					rounding: 1
    				}
    			],
    			lore: [
    				"§7While holding an Enchanted Carrot on",
    				"§7a Stick, increase the speed of your",
    				"§7mount by §f{{speed}}%§7."
    			]
    		}

    	],
    	legendary: [
    		{
    			name: "Ridable",
    			scalings: [],
    			lore: [
    				"§7Right-click your summoned pet",
    				"§7to ride it!"
    			]
    		},
    		{
    			name: "Run",
    			scalings: [
    				{
    					name: "speed",
    					base: 0.4,
    					scaling: 0.4,
    					rounding: 1
    				}
    			],
    			lore: [
    				"§7Increases the speed of your",
    				"§7mount by §f{{speed}}%§7."
    			]
    		},
    		{
    			name: "Sprint",
    			scalings: [
    				{
    					name: "speed",
    					base: 0.4,
    					scaling: 0.4,
    					rounding: 1
    				}
    			],
    			lore: [
    				"§7While holding an Enchanted Carrot on",
    				"§7a Stick, increase the speed of your",
    				"§7mount by §f{{speed}}%§7."
    			]
    		},
    		{
    			name: "Trample",
    			scalings: [],
    			lore: [
    				"§7While on your private island, break",
    				"§7all the crops your pig rides over"
    			]
    		}
    	]
      }
    },
    "ROCK": {
      head: "/head/cb2b5d48e57577563aca31735519cb622219bc058b1f34648b67b8e71bc0fa",
      type: "mining",
      emoji: "🗿",
      stats: {
    	common: [
    	  {
    		stat: "Defense",
    		base: 2,
    		scaling: 2,
    		suffix: ""
    	  },
    	  {
    		stat: "True Defense",
    		base: 1,
    		scaling: 0.09090909,
    		suffix: ""
    	  }
    	],
    	uncommon: [
    	  {
    		stat: "Defense",
    		base: 2,
    		scaling: 2,
    		suffix: ""
    	  },
    	  {
    		stat: "True Defense",
    		base: 1,
    		scaling: 0.09090909,
    		suffix: ""
    	  }
    	],
    	rare: [
    	  {
    		stat: "Defense",
    		base: 2,
    		scaling: 2,
    		suffix: ""
    	  },
    	  {
    		stat: "True Defense",
    		base: 1,
    		scaling: 0.09090909,
    		suffix: ""
    	  }
    	],
    	epic: [
    	  {
    		stat: "Defense",
    		base: 2,
    		scaling: 2,
    		suffix: ""
    	  },
    	  {
    		stat: "True Defense",
    		base: 1,
    		scaling: 0.09090909,
    		suffix: ""
    	  }
    	],
    	legendary: [
    	  {
    		stat: "Defense",
    		base: 2,
    		scaling: 2,
    		suffix: ""
    	  },
    	  {
    		stat: "True Defense",
    		base: 1,
    		scaling: 0.09090909,
    		suffix: ""
    	  }
    	]
      },
      abilities: {
    	common: [
    	  {
    		name: "Rideable",
    		scalings: [],
    		lore: [
    		  "§7Right-click your summoned pet to ride it!"
    		]
    	  },
    	  {
    		name: "Sailing Stone",
    		scalings: [],
    		lore: [
    		  "§7Sneak to move your rock to your location (15s cooldown)."
    		]
    	  }
    	],
    	uncommon: [
    	  {
    		name: "Rideable",
    		scalings: [],
    		lore: [
    		  "§7Right-click your summoned pet to ride it!"
    		]
    	  },
    	  {
    		name: "Sailing Stone",
    		scalings: [],
    		lore: [
    		  "§7Sneak to move your rock to your location (15s cooldown)."
    		]
    	  }
    	],
    	rare: [
    	  {
    		name: "Rideable",
    		scalings: [],
    		lore: [
    		  "§7Right-click your summoned pet to ride it!"
    		]
    	  },
    	  {
    		name: "Sailing Stone",
    		scalings: [],
    		lore: [
    		  "§7Sneak to move your rock to your location (15s cooldown)."
    		]
    	  },
    	  {
    		name: "Fortify",
    		scalings: [
    			{
    				name: "defense",
    				base: 0.2,
    				scaling: 0.2,
    				rounding: 1
    			}
    		],
    		lore: [
    		  "§7While sitting on your rock, gain §a+{{defense}}% defense§7."
    		]
    	  }
    	],
    	epic: [
    	  {
    		name: "Rideable",
    		scalings: [],
    		lore: [
    		  "§7Right-click your summoned pet to ride it!"
    		]
    	  },
    	  {
    		name: "Sailing Stone",
    		scalings: [],
    		lore: [
    		  "§7Sneak to move your rock to your location (15s cooldown)."
    		]
    	  },
    	  {
    		name: "Fortify",
    		scalings: [
    			{
    				name: "defense",
    				base: 0.2,
    				scaling: 0.25050505,
    				rounding: 1
    			}
    		],
    		lore: [
    		  "§7While sitting on your rock, gain §a+{{defense}}% defense§7."
    		]
    	  }

    	],
    	legendary: [
    	  {
    		name: "Rideable",
    		scalings: [],
    		lore: [
    		  "§7Right-click your summoned pet to ride it!"
    		]
    	  },
    	  {
    		name: "Sailing Stone",
    		scalings: [],
    		lore: [
    		  "§7Sneak to move your rock to your location (15s cooldown)."
    		]
    	  },
    	  {
    		name: "Fortify",
    		scalings: [
    			{
    				name: "defense",
    				base: 0.2,
    				scaling: 0.25050505,
    				rounding: 1
    			}
    		],
    		lore: [
    		  "§7While sitting on your rock, gain §a+{{defense}}% defense§7."
    		]
    	  },

    	  {
    		name: "Steady Ground",
    		scalings: [
    			{
    				name: "damage",
    				base: 0.3,
    				scaling: 0.3,
    				rounding: 1
    			}
    		],
    		lore: [
    		  "§7While sitting on your rock, gain §c+{{damage}}% damage§7."
    		]
    	  }
    	]
      }
    },
    "SKELETON": {
      head: "/head/fca445749251bdd898fb83f667844e38a1dff79a1529f79a42447a0599310ea4",
      type: "combat",
      emoji: "💀",
      stats: {
    	common: [
    	  {
    		stat: "Crit Chance",
    		base: 0.15,
    		scaling: 0.15,
    		suffix: "%"
    	  },
    	  {
    		stat: "Crit Damage",
    		base: 0.3,
    		scaling: 0.3,
    		suffix: "%"
    	  }
    	],
    	uncommon: [
    	  {
    		stat: "Crit Chance",
    		base: 0.15,
    		scaling: 0.15,
    		suffix: "%"
    	  },
    	  {
    		stat: "Crit Damage",
    		base: 0.3,
    		scaling: 0.3,
    		suffix: "%"
    	  }
    	],
    	rare: [
    	  {
    		stat: "Crit Chance",
    		base: 0.15,
    		scaling: 0.15,
    		suffix: "%"
    	  },
    	  {
    		stat: "Crit Damage",
    		base: 0.3,
    		scaling: 0.3,
    		suffix: "%"
    	  }
    	],
    	epic: [
    	  {
    		stat: "Crit Chance",
    		base: 0.15,
    		scaling: 0.15,
    		suffix: "%"
    	  },
    	  {
    		stat: "Crit Damage",
    		base: 0.3,
    		scaling: 0.3,
    		suffix: "%"
    	  }
    	],
    	legendary: [
    	  {
    		stat: "Crit Chance",
    		base: 0.15,
    		scaling: 0.15,
    		suffix: "%"
    	  },
    	  {
    		stat: "Crit Damage",
    		base: 0.3,
    		scaling: 0.3,
    		suffix: "%"
    	  }
    	]
      },
      abilities: {
    	common: [
    	  {
    		name: "Bone Arrows",
    		scalings: [
    		  {
    			name: "damage",
    			base: 0.1,
    			scaling: 0.1,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Increase arrow damage by §f{{damage}}%§7 which is tripled while in dungeons."
    		]
    	  }
    	],
    	uncommon: [
    	  {
    		name: "Bone Arrows",
    		scalings: [
    		  {
    			name: "damage",
    			base: 0.1,
    			scaling: 0.1303030303,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Increase arrow damage by §f{{damage}}%§7 which is tripled while in dungeons."
    		]
    	  }
    	],
    	rare: [
    	  {
    		name: "Bone Arrows",
    		scalings: [
    		  {
    			name: "damage",
    			base: 0.1,
    			scaling: 0.1606060606,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Increase arrow damage by §f{{damage}}%§7 which is tripled while in dungeons."
    		]
    	  },
    	  {
    		name: "Combo",
    		scalings: [],
    		lore: [
    		  "§7Gain a combo stack for every bow hit granting §c+3 Strength§7. Max 16 stacks, stacks disappear after 8 seconds."
    		]
    	  }
    	],
    	epic: [
    	  {
    		name: "Bone Arrows",
    		scalings: [
    		  {
    			name: "damage",
    			base: 0.1,
    			scaling: 0.201010101,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Increase arrow damage by §f{{damage}}%§7 which is tripled while in dungeons."
    		]
    	  },
    	  {
    		name: "Combo",
    		scalings: [],
    		lore: [
    		  "§7Gain a combo stack for every bow hit granting §c+3 Strength§7. Max 17 stacks, stacks disappear after 8 seconds."
    		]
    	  }
    	],
    	legendary: [
    	  {
    		name: "Bone Arrows",
    		scalings: [
    		  {
    			name: "damage",
    			base: 0.1,
    			scaling: 0.201010101,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Increase arrow damage by §f{{damage}}%§7 which is tripled while in dungeons."
    		]
    	  },
    	  {
    		name: "Combo",
    		scalings: [],
    		lore: [
    		  "§7Gain a combo stack for every bow hit granting §c+3 Strength§7. Max 20 stacks, stacks disappear after 8 seconds."
    		]
        },
    	  {
    		name: "Skeletal Defense",
    		scalings: [],
    		lore: [
    		  "§7Your skeleton shoots an arrow dealing 60x your §9Crit Damage§7 when a mob gets close to you (15s cooldown)."
    		]
    	  }
      ]
      }
    },
    "ZOMBIE": {
      head: "/head/56fc854bb84cf4b7697297973e02b79bc10698460b51a639c60e5e417734e11",
      type: "combat",
      emoji: "🧟",
      stats: {
    	common: [
    	  {
    		stat: "Crit Damage",
    		base: 0,
    		scaling: 0.3030303,
    		suffix: "%"
    	  },
    	  {
    		stat: "Health",
    		base: 1,
    		scaling: 1,
    		suffix: ""
    	  }
    	],
    	uncommon: [
    	  {
    		stat: "Crit Damage",
    		base: 0,
    		scaling: 0.3030303,
    		suffix: "%"
    	  },
    	  {
    		stat: "Health",
    		base: 1,
    		scaling: 1,
    		suffix: ""
    	  }
    	],
    	rare: [
    	  {
    		stat: "Crit Damage",
    		base: 0,
    		scaling: 0.3030303,
    		suffix: "%"
    	  },
    	  {
    		stat: "Health",
    		base: 1,
    		scaling: 1,
    		suffix: ""
    	  }
    	],
    	epic: [
    	  {
    		stat: "Crit Damage",
    		base: 0,
    		scaling: 0.3030303,
    		suffix: "%"
    	  },
    	  {
    		stat: "Health",
    		base: 1,
    		scaling: 1,
    		suffix: ""
    	  }
    	],
    	legendary: [
    	  {
    		stat: "Crit Damage",
    		base: 0,
    		scaling: 0.3030303,
    		suffix: "%"
    	  },
    	  {
    		stat: "Health",
    		base: 1,
    		scaling: 1,
    		suffix: ""
    	  }
    	]
      },
      abilities: {
    	common: [
    	  {
    		name: "Chomp",
    	    scalings: [
    		  {
    			name: "zombiekillhp",
    			base: 0.1,
    			scaling: 0.25151515,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Gain §c+{{zombiekillhp}} Health §7per zombie kill."
    	    ]
    	  }
    	],
    	uncommon: [
    	  {
    		name: "Chomp",
    	    scalings: [
    		  {
    			name: "zombiekillhp",
    			base: 0.1,
    			scaling: 0.25151515,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Gain §c+{{zombiekillhp}} Health §7per zombie kill."
    	    ]
    	  }
    	],
    	rare: [
    	  {
    		name: "Chomp",
    	    scalings: [
    		  {
    			name: "zombiekillhp",
    			base: 0.1,
    			scaling: 0.25151515,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Gain §c+{{zombiekillhp}} Health §7per zombie kill."
    	    ]
    	  },
    	  {
    		name: "Rotten Blade",
    	    scalings: [
    		  {
    			name: "zombiedmg",
    			base: 0.2,
    			scaling: 0.2,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Deal §f{{zombiedmg}} §7more §fDamage §7to zombies."
    	    ]
    	  }
    	],
    	epic: [
    	  {
    		name: "Chomp",
    	    scalings: [
    		  {
    			name: "zombiekillhp",
    			base: 0.1,
    			scaling: 0.25151515,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Gain §c+{{zombiekillhp}} Health §7per zombie kill."
    	    ]
    	  },
    	  {
    		name: "Rotten Blade",
    	    scalings: [
    		  {
    			name: "zombiedmg",
    			base: 0.2,
    			scaling: 0.2,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Deal §f{{zombiedmg}} §7more §fDamage §7to zombies."
    	    ]
    	  }
    	],
    	legendary: [
    	  {
    		name: "Chomp",
    	    scalings: [
    		  {
    			name: "zombiekillhp",
    			base: 0.1,
    			scaling: 0.25151515,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Gain §c+{{zombiekillhp}} Health §7per zombie kill."
    	    ]
    	  },
    	  {
    		name: "Rotten Blade",
    	    scalings: [
    		  {
    			name: "zombiedmg",
    			base: 0.2,
    			scaling: 0.2,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Deal §f{{zombiedmg}} §7more §fDamage §7to zombies."
    	    ]
    	  },
    	  {
    		name: "Living Dead",
    		scalings: [
    		  {
    			name: "undeadbuff",
    			base: 0.25,
    			scaling: 0.25,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Increases §aDefense §7of all undead armor sets by §f{{undeadbuff}}%§7."
    	    ]
    	  }
    	]
      }
    },
    "DOLPHIN": {
      head: "/head/cefe7d803a45aa2af1993df2544a28df849a762663719bfefc58bf389ab7f5",
      type: "fishing",
      emoji: "🐬",
      stats: {
    	common: [
    	  {
    		stat: "Intelligence",
    		base: 1,
    		scaling: 1,
    		suffix: ""
    	  },
    	  {
    		stat: "Sea Creature Chance",
    		base: 0,
    		scaling: 0.0505050505,
    		suffix: "%"
    	  }
    	],
    	uncommon: [
    	  {
    		stat: "Intelligence",
    		base: 1,
    		scaling: 1,
    		suffix: ""
    	  },
    	  {
    		stat: "Sea Creature Chance",
    		base: 0,
    		scaling: 0.0505050505,
    		suffix: "%"
    	  }
    	],
    	rare: [
    	  {
    		stat: "Intelligence",
    		base: 1,
    		scaling: 1,
    		suffix: ""
    	  },
    	  {
    		stat: "Sea Creature Chance",
    		base: 0,
    		scaling: 0.0505050505,
    		suffix: "%"
    	  }
    	],
    	epic: [
    	  {
    		stat: "Intelligence",
    		base: 1,
    		scaling: 1,
    		suffix: ""
    	  },
    	  {
    		stat: "Sea Creature Chance",
    		base: 0,
    		scaling: 0.0505050505,
    		suffix: "%"
    	  }
    	],
    	legendary: [
    	  {
    		stat: "Intelligence",
    		base: 1,
    		scaling: 1,
    		suffix: ""
    	  },
    	  {
    		stat: "Sea Creature Chance",
    		base: 0,
    		scaling: 0.0505050505,
    		suffix: "%"
    	  }
    	]
      },
      abilities: {
    	common: [
    	  {
    		name: "Pod Tactics",
    	    scalings: [
    		  {
    			name: "fishspeed",
    			base: 0.03,
    			scaling: 0.03,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Increases your fishing speed by §f{{fishspeed}}% §7for each nearby player up to §f15%§7."
    	    ]
    	  }
    	],
    	uncommon: [
    	  {
    		name: "Pod Tactics",
    	    scalings: [
    		  {
    			name: "fishspeed",
    			base: 0.04,
    			scaling: 0.04,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Increases your fishing speed by §f{{fishspeed}}% §7for each nearby player up to §f20%§7."
    	    ]
    	  }
    	],
    	rare: [
    	  {
    		name: "Pod Tactics",
    	    scalings: [
    		  {
    			name: "fishspeed",
    			base: 0.04,
    			scaling: 0.04,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Increases your fishing speed by §f{{fishspeed}}% §7for each nearby player up to §f20%§7."
    	    ]
    	  },
    	  {
    		name: "Echolocation",
    	    scalings: [
    		  {
    			name: "seacreaturechance",
    			base: 0.07,
    			scaling: 0.07,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Increases sea creatures catch chance by §f{{seacreaturechance}}%§7."
    	    ]
    	  }
    	],
    	epic: [
    	  {
    		name: "Pod Tactics",
    	    scalings: [
    		  {
    			name: "fishspeed",
    			base: 0.05,
    			scaling: 0.05,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Increases your fishing speed by §f{{fishspeed}}% §7for each nearby player up to §f20%§7."
    	    ]
    	  },
    	  {
    		name: "Echolocation",
    	    scalings: [
    		  {
    			name: "seacreaturechance",
    			base: 0.1,
    			scaling: 0.1,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Increases sea creatures catch chance by §f{{seacreaturechance}}%§7."
    	    ]
    	  }
    	],
    	legendary: [
    	  {
    		name: "Pod Tactics",
    	    scalings: [
    		  {
    			name: "fishspeed",
    			base: 0.05,
    			scaling: 0.05,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Increases your fishing speed by §f{{fishspeed}}% §7for each nearby player up to §f20%§7."
    	    ]
    	  },
    	  {
    		name: "Echolocation",
    	    scalings: [
    		  {
    			name: "seacreaturechance",
    			base: 0.1,
    			scaling: 0.1,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Increases sea creatures catch chance by §f{{seacreaturechance}}%§7."
    	    ]
    	  },
    	  {
    		name: "Splash Surprise",
    		scalings: [
    		],
    		lore: [
    		  "§7Stun sea creatures for §f5s §7after fishing them up."
    	    ]
    	  }
    	]
      }
    },
    "BABY_YETI": {
      head: "/head/ab126814fc3fa846dad934c349628a7a1de5b415021a03ef4211d62514d5",
      type: "fishing",
      emoji: "❄️",
      stats: {
    	epic: [
    	  {
    		stat: "Intelligence",
    		base: 0,
    		scaling: 0.75757575,
    		suffix: ""
    	  },
    	  {
    		stat: "Strength",
    		base: 0,
    		scaling: 0.4040404,
    		suffix: ""
    	  }
    	],
    	legendary: [
    	  {
    		stat: "Intelligence",
    		base: 0,
    		scaling: 0.75757575,
    		suffix: ""
    	  },
    	  {
    		stat: "Strength",
    		base: 0,
    		scaling: 0.4040404,
    		suffix: ""
    	  }
    	]
      },
      abilities: {
    	epic: [
    	  {
    		name: "Cold Breeze",
    	    scalings: [
    		  {
    			name: "snowstrength",
    			base: 0.5,
    			scaling: 0.5,
    			rounding: 1
    		  },
    		  {
    			name: "snowcritdamage",
    			base: 0.5,
    			scaling: 0.5,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Gives §c{{snowstrength}} Strength §7and §9{{snowcritdamage}} Crit Damage §7when near snow."
    	    ]
    	  },
    	  {
    		name: "Ice Shields",
    	    scalings: [
    		  {
    			name: "strengthasdefense",
    			base: 1,
    			scaling: 1,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Gain §f{{strengthasdefense}}% §7of your strength as §aDefense§7."
    	    ]
    	  }
    	],
    	legendary: [
    	  {
    		name: "Cold Breeze",
    	    scalings: [
    		  {
    			name: "snowstrength",
    			base: 0.5,
    			scaling: 0.5,
    			rounding: 1
    		  },
    		  {
    			name: "snowcritdamage",
    			base: 0.5,
    			scaling: 0.5,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Gives §c{{snowstrength}} Strength §7and §9{{snowcritdamage}} Crit Damage §7when near snow."
    	    ]
    	  },
    	  {
    		name: "Ice Shields",
    	    scalings: [
    		  {
    			name: "strengthasdefense",
    			base: 1,
    			scaling: 1,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Gain §f{{strengthasdefense}}% §7of your strength as §aDefense§7."
    	    ]
    	  },
    	  {
    		name: "Yeti Fury",
    		scalings: [
    		  {
    			name: "yetibuffdamage",
    			base: 1,
    			scaling: 1,
    			rounding: 1
    		  },
    		  {
    			name: "yetibuffintel",
    			base: 1,
    			scaling: 1,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Buffs the Yeti sword by §f{{yetibuffdamage}} Damage §7and §b{{yetibuffintel}} Intelligence§7."
    	    ]
    	  }
    	]
      }
    },
    "HOUND": {
      head: "/head/b7c8bef6beb77e29af8627ecdc38d86aa2fea7ccd163dc73c00f9f258f9a1457",
      type: "combat",
      emoji: "👹",
      stats: {
    	epic: [
    	  {
    		stat: "Strength",
    		base: 0,
    		scaling: 0.04949494949,
    		suffix: ""
    	  },
    	  {
    		stat: "Bonus Attack Speed",
    		base: 0,
    		scaling: 0.1515151515,
    		suffix: "%"
    	  }
    	],
    	legendary: [
    	  {
    		stat: "Strength",
    		base: 0,
    		scaling: 0.04949494949,
    		suffix: ""
    	  },
    	  {
    		stat: "Bonus Attack Speed",
    		base: 0,
    		scaling: 0.1515151515,
    		suffix: "%"
    	  }
    	]
      },
      abilities: {
    	epic: [
    	  {
    		name: "Scavenger",
    		scalings: [
    		  {
    			name: "coins",
    			base: 0.1,
    			scaling: 0.494949494,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Gain §6+{{coins}} coins§7 per monster kill."
    		]
    	  },
    	  {
    		name: "Finder",
    		scalings: [
    		  {
    			name: "coins",
    			base: 0.1,
    			scaling: 0.1,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Increases the chance for monsters to drop their armor by §f{{coins}}%§7."
    		]
    	  }
    	],
    	legendary: [
    	  {
    		name: "Scavenger",
    		scalings: [
    		  {
    			name: "coins",
    			base: 0.1,
    			scaling: 0.494949494,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Gain §6+{{coins}} coins§7 per monster kill."
    		]
    	  },
    	  {
    		name: "Finder",
    		scalings: [
    		  {
    			name: "coins",
    			base: 0.1,
    			scaling: 0.1,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Increases the chance for monsters to drop their armor by §f{{coins}}%§7."
    		]
    	  },
    	  {
    		name: "Fury Claws",
    		scalings: [
    		  {
    			name: "attackspeed",
    			base: 0.1,
    			scaling: 0.1,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Grants §e{{attackspeed}}% Bonus Attack Speed§7."
    		]
    	  }
    	]
      }
    },
    "TARANTULA": {
      head: "/head/8300986ed0a04ea79904f6ae53f49ed3a0ff5b1df62bba622ecbd3777f156df8",
      type: "combat",
      emoji: "🕸️",
      stats: {
    	epic: [
    		{
    			stat: "Crit Chance",
    			base: 0,
    			scaling: 0.1010101,
    			suffix: "%"
    		},
    		{
    			stat: "Crit Damage",
    			base: 0,
    			scaling: 0.303030303,
    			suffix: "%"
    		},
    		{
    			stat: "Strength",
    			base: 0,
    			scaling: 0.1010101,
    			suffix: ""
    		}
    	],
    	legendary: [
    		{
    			stat: "Crit Chance",
    			base: 0,
    			scaling: 0.1010101,
    			suffix: "%"
    		},
    		{
    			stat: "Crit Damage",
    			base: 0,
    			scaling: 0.303030303,
    			suffix: "%"
    		},
    		{
    			stat: "Strength",
    			base: 0,
    			scaling: 0.1010101,
    			suffix: ""
    		}
    	]
      },
      abilities: {
    	epic: [
    	  {
    		name: "Webbed Cells",
    		scalings: [
    		  {
    			name: "reduce",
    			base: 0.3,
    			scaling: 0.3,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Anti-healing is §f{{reduce}}% §7less effective against you."
    		]
    	  },
    	  {
    		name: "Eight Lets",
    		scalings: [
    		  {
    			name: "reduce",
    			base: 0.5,
    			scaling: 0.297979798,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Decreases the mana cost of Spider and Tarantula boots by §f{{reduce}}%§7."
    		]
    	  }
    	],
    	legendary: [
    	  {
    		name: "Webbed Cells",
    		scalings: [
    		  {
    			name: "reduce",
    			base: 0.3,
    			scaling: 0.3,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Anti-healing is §f{{reduce}}% §7less effective against you."
    		]
    	  },
    	  {
    		name: "Eight Lets",
    		scalings: [
    		  {
    			name: "reduce",
    			base: 0.5,
    			scaling: 0.297979798,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Decreases the mana cost of Spider and Tarantula boots by §f{{reduce}}%§7."
    		]
    	  },
    	  {
    		name: "Arachnid Slayer",
    		scalings: [
    		  {
    			name: "reduce",
    			base: 0.4,
    			scaling: 0.4,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Gain §f{{reduce}}%§7 more combat xp from spiders."
    		]
    	  }
    	]
      }
    },
    "BLACK_CAT": {
      head: "/head/e4b45cbaa19fe3d68c856cd3846c03b5f59de81a480eec921ab4fa3cd81317",
      type: "combat",
      emoji: "🐱",
      stats: {
    	legendary: [
    	  {
    		stat: "Intelligence",
    		base: 1,
    		scaling: 1,
    		suffix: ""
    	  },
    	  {
    		stat: "Speed",
    		base: 0,
    		scaling: 0.25252525,
    		suffix: ""
    	  }
    	]
      },
      abilities: {
    	legendary: [
    	  {
    		name: "Hunter",
    		scalings: [,
    		  {
    			name: "speed",
    			base: 1,
    			scaling: 1,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Increases your speed and speed cap by §f+{{speed}}§7."
    		]
    	  },
    	  {
    		name: "Omen",
    		scalings: [,
    		  {
    			name: "petluck",
    			base: 0.15,
    			scaling: 0.15,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Grants §d+{{petluck}} Pet Luck§7."
    		]
    	  },
    	  {
    		name: "Supernatural",
    		scalings: [,
    		  {
    			name: "magicfind",
    			base: 0.15,
    			scaling: 0.15,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Grants §b+{{magicfind}} Magic Find§7."
    		]
    	  }
    	]
      }
    },
    "GOLEM": {
      head: "/head/89091d79ea0f59ef7ef94d7bba6e5f17f2f7d4572c44f90f76c4819a714",
      type: "combat",
      emoji: "🗿",
      stats: {
    	epic: [
    		{
    			stat: "Health",
    			base: 1,
    			scaling: 1.50505050505,
    			suffix: ""
    		},
    		{
    			stat: "Strength",
    			base: 0,
    			scaling: 0.50505050505,
    			suffix: ""
    		}
    	],
    	legendary: [
    		{
    			stat: "Health",
    			base: 1,
    			scaling: 1.50505050505,
    			suffix: ""
    		},
    		{
    			stat: "Strength",
    			base: 0,
    			scaling: 0.50505050505,
    			suffix: ""
    		}
    	]
      },
      abilities: {
    	epic: [
    	  {
    		name: "Last Stand",
    		scalings: [
    		  {
    			name: "boost",
    			base: 0.3,
    			scaling: 0.3,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7While below 15% HP, deal §f{{boost}}% §7more damage."
    		]
    	  },
    	  {
    		name: "Ricochet",
    		scalings: [
    		  {
    			name: "boost",
    			base: 0.2,
    			scaling: 0.2,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Your iron plating causes §f{{boost}}% §7of attacks to ricochet and hit the attacker."
    		]
    	  }
    	],
    	legendary: [
    	  {
    		name: "Last Stand",
    		scalings: [
    		  {
    			name: "boost",
    			base: 0.3,
    			scaling: 0.3,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7While below 15% HP, deal §f{{boost}}% §7more damage."
    		]
    	  },
    	  {
    		name: "Ricochet",
    		scalings: [
    		  {
    			name: "boost",
    			base: 0.2,
    			scaling: 0.250505,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Your iron plating causes §f{{boost}}% §7of attacks to ricochet and hit the attacker."
    		]
    	  },
    	  {
    		name: "Toss",
    		scalings: [
    		  {
    			name: "boost",
    			base: 203,
    			scaling: 3,
    			rounding: 1
    		  }
    		],
    		lore: [
    		  "§7Every 5 hits, throw the enemy up into the air and deal §f{{boost}}% §7damage (10s cooldown)."
    		]
    	  }
    	]
      }
    },
    "SPIRIT": {
      head: "/head/8d9ccc670677d0cebaad4058d6aaf9acfab09abea5d86379a059902f2fe22655",
      type: "combat",
      emoji: "👻",
      stats: {
    	epic: [
    		{
    			stat: "Intelligence",
    			base: 1,
    			scaling: 1,
    			suffix: ""
    		},
    		{
    			stat: "Speed",
    			base: 0,
    			scaling: 0.2929292929,
    			suffix: ""
    		}
    	],
    	legendary: [
    		{
    			stat: "Intelligence",
    			base: 1,
    			scaling: 1,
    			suffix: ""
    		},
    		{
    			stat: "Speed",
    			base: 0,
    			scaling: 0.2929292929,
    			suffix: ""
    		}
    	]
      },
      abilities: {
    	epic: [
    	  {
    		name: "Spirit Assistance",
    		scalings: [],
    		lore: [
    		  "§7Spawns and assists you when you are ghost in dungeons."
    		]
    	  },
    	  {
    		name: "Spirit Leap",
    		scalings: [],
    		lore: [
    		  "§7Grants a §f+10%§7 chance for mini-bosses in dungeons to drop 5 Spirit Leap Pearls"
    		]
    	  }
    	],
    	legendary: [
    	  {
    		name: "Spirit Assistance",
    		scalings: [],
    		lore: [
    		  "§7Spawns and assists you when you are ghost in dungeons."
    		]
    	  },
    	  {
    		name: "Spirit Leap",
    		scalings: [],
    		lore: [
    		  "§7Grants a §f+10%§7 chance for mini-bosses in dungeons to drop 5 Spirit Leap Pearls"
    		]
    	  },
    	  {
    		name: "Spirit Cooldowns",
    		scalings: [
    			{
    				name: "cdr",
    				base: 5.5,
    				scaling: 0.449494949,
    				rounding: 1
    			}
    		],
    		lore: [
    		  "§7Reduces the cooldown of your ghost abilities in dungeons by §f{{cdr}}%§7."
    		]
    	  }
    	]
      }
    }
  },

  pet_value: {
      "common": 1,
      "uncommon": 2,
      "rare": 3,
      "epic": 4,
      "legendary": 5
  },

  pet_rewards: {
    0: {
      magic_find: 0
    },
    10: {
      magic_find: 1
    },
    25: {
      magic_find: 2
    },
    50: {
      magic_find: 3
    },
    75: {
      magic_find: 4
    },
    100: {
      magic_find: 5
    },
    130: {
      magic_find: 6
    },
    175: {
      magic_find: 7
    }
  },

  pet_items: {
    PET_ITEM_ALL_SKILLS_BOOST_COMMON: {
      description: "§7Gives +§a10% §7pet exp for all skills"
    },
    PET_ITEM_BIG_TEETH_COMMON: {
      description: "§7Increases §9Crit Chance §7by §a5%",
      stats: {
          crit_chance: 5
      }
    },
    PET_ITEM_IRON_CLAWS_COMMON: {
      description: "§7Increases the pet's §9Crit Damage §7by §a40% §7and §9Crit Chance §7by §a40%"
    },
    PET_ITEM_SHARPENED_CLAWS_UNCOMMON: {
      description: "§7Increases §9Crit Damage §7by §a15%",
      stats: {
          crit_damage: 15
      }
    },
    PET_ITEM_HARDENED_SCALES_UNCOMMON: {
      description: "§7Increases §aDefense §7by §a25",
      stats: {
          defense: 25
      }
    },
    PET_ITEM_BUBBLEGUM: {
      description: "§7Your pet fuses its power with placed §aOrbs §7to give them §a2x §7duration"
    },
    PET_ITEM_LUCKY_CLOVER: {
      description: "§7Increases §bMagic Find §7by §a7",
      stats: {
          magic_find: 7
      }
    },
    PET_ITEM_TEXTBOOK: {
      description: "§7Increases the pet's §bIntelligence §7by §a100%"
    },
    PET_ITEM_SADDLE: {
      description: "§7Increase horse speed by §a50% §7 and jump boost by §a100%"
    },
    PET_ITEM_EXP_SHARE: {
      description: "§7While unequipped this pet gains §a25% §7of the equipped pet's xp, this is §7split between all pets holding the item."
    },
    PET_ITEM_TIER_BOOST: {
      description: "§7Boosts the §ararity §7of your pet by 1 tier!"
    },
    PET_ITEM_COMBAT_SKILL_BOOST_COMMON: {
      description: "§7Gives +§a20% §7pet exp for Combat"
    },
    PET_ITEM_COMBAT_SKILL_BOOST_UNCOMMON: {
      description: "§7Gives +§a30% §7pet exp for Combat"
    },
    PET_ITEM_COMBAT_SKILL_BOOST_RARE: {
      description: "§7Gives +§a40% §7pet exp for Combat"
    },
    PET_ITEM_COMBAT_SKILL_BOOST_EPIC: {
      description: "§7Gives +§a50% §7pet exp for Combat"
    },
    PET_ITEM_FISHING_SKILL_BOOST_COMMON: {
      description: "§7Gives +§a20% §7pet exp for Fishing"
    },
    PET_ITEM_FISHING_SKILL_BOOST_UNCOMMON: {
      description: "§7Gives +§a30% §7pet exp for Fishing"
    },
    PET_ITEM_FISHING_SKILL_BOOST_RARE: {
      description: "§7Gives +§a40% §7pet exp for Fishing"
    },
    PET_ITEM_FISHING_SKILL_BOOST_EPIC: {
      description: "§7Gives +§a50% §7pet exp for Fishing"
    },
    PET_ITEM_FORAGING_SKILL_BOOST_COMMON: {
      description: "§7Gives +§a20% §7pet exp for Foraging"
    },
    PET_ITEM_FORAGING_SKILL_BOOST_UNCOMMON: {
      description: "§7Gives +§a30% §7pet exp for Foraging"
    },
    PET_ITEM_FORAGING_SKILL_BOOST_RARE: {
      description: "§7Gives +§a40% §7pet exp for Foraging"
    },
    PET_ITEM_FORAGING_SKILL_BOOST_EPIC: {
      description: "§7Gives +§a50% §7pet exp for Foraging"
    },
    PET_ITEM_MINING_SKILL_BOOST_COMMON: {
      description: "§7Gives +§a20% §7pet exp for Mining"
    },
    PET_ITEM_MINING_SKILL_BOOST_UNCOMMON: {
      description: "§7Gives +§a30% §7pet exp for Mining"
    },
    PET_ITEM_MINING_SKILL_BOOST_RARE: {
      description: "§7Gives +§a40% §7pet exp for Mining"
    },
    PET_ITEM_MINING_SKILL_BOOST_EPIC: {
      description: "§7Gives +§a50% §7pet exp for Mining"
    },
    PET_ITEM_FARMING_SKILL_BOOST_COMMON: {
      description: "§7Gives +§a20% §7pet exp for Farming"
    },
    PET_ITEM_FARMING_SKILL_BOOST_UNCOMMON: {
      description: "§7Gives +§a30% §7pet exp for Farming"
    },
    PET_ITEM_FARMING_SKILL_BOOST_RARE: {
      description: "§7Gives +§a40% §7pet exp for Farming"
    },
    PET_ITEM_FARMING_SKILL_BOOST_EPIC: {
      description: "§7Gives +§a50% §7pet exp for Farming"
    }
  }
}
