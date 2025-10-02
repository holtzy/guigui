var APP_DATA = {
  "scenes": [
    {
      "id": "0-couloir_entree",
      "name": "Entree",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0.3,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.29268168537428,
          "pitch": 0.12233300004801606,
          "rotation": 0,
          "target": "10-cuisine_entree",
		  "new_scene_view_params": { "yaw": -2.5, "pitch": 0, "roll": 0, "fov": 1.5707963267948966 }
        },
        {
          "yaw": 0.31791610282304816,
          "pitch": 0.23703205548033424,
          "rotation": 0,
          "target": "8-couloir_milieu",
		  "new_scene_view_params": { "yaw": -2.8, "pitch": 0, "roll": 0, "fov": 1.5707963267948966 }
        },
        {
          "yaw": 1.7410851196757093,
          "pitch": 0.4037782881205345,
          "rotation": 0,
          "target": "14-salon_entree",
		  "new_scene_view_params": { "yaw": -0.8, "pitch": 0, "roll": 0, "fov": 1.5707963267948966 }
        },
        {
          "yaw": -2.7798032811934785,
          "pitch": 0.04071182174073584,
          "rotation": 0,
          "target": "1-cave",
		  "new_scene_view_params": { "yaw": 1, "pitch": 0, "roll": 0, "fov": 1.5707963267948966 }
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-cave",
      "name": "cave",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -1.4401729045363965,
        "pitch": 0.020291060377539694,
        "fov": 1.2712470872013175
      },
      "linkHotspots": [
        {
          "yaw": -1.5854396749129869,
          "pitch": 0.004582909061475959,
          "rotation": 0,
          "target": "0-couloir_entree",
		  "new_scene_view_params": { "yaw": 0.3, "pitch": 0, "roll": 0, "fov": 1.5707963267948966 }
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.6260124367530615,
          "pitch": 0.4061549895716503,
          "title": "Stock matériaux",
          "text": "Sera rangé le moment venu"
        },
        {
          "yaw": -2.0568806196222624,
          "pitch": 0.785146289558762,
          "title": "Cave",
          "text": "Surface 20m2"
        }
      ]
    },
    {
      "id": "2-chambre1",
      "name": "chambre1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.23865477939134294,
        "pitch": -0.0007804010411263107,
        "fov": 1.2712470872013175
      },
      "linkHotspots": [
        {
          "yaw": 0.22145434559842947,
          "pitch": -0.34033302467770454,
          "rotation": 0,
          "target": "3-chambre1_vue",
		  "new_scene_view_params": { "yaw": 3, "pitch": 0, "roll": 0, "fov": 1.5707963267948966 }
        },
        {
          "yaw": -2.657231490570851,
          "pitch": 0.16118083119635251,
          "rotation": 0,
          "target": "8-couloir_milieu",
		  "new_scene_view_params": { "yaw": -1.3, "pitch": 0, "roll": 0, "fov": 1.5707963267948966 }
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.8909245570972786,
          "pitch": 0.4360080848652963,
          "title": "Lit",
          "text": "Lit 2 places 140 cm"
        }
      ]
    },
    {
      "id": "3-chambre1_vue",
      "name": "chambre1_vue",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 3.0953197760139233,
        "pitch": 0.1759723204283805,
        "fov": 1.2712470872013175
      },
      "linkHotspots": [
        {
          "yaw": 0.12188471002941981,
          "pitch": 0.1931795768741118,
          "rotation": 0,
          "target": "2-chambre1",
		  "new_scene_view_params": { "yaw": 3.5, "pitch": 0, "roll": 0, "fov": 1.5707963267948966 }
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.169217842444745,
          "pitch": 0.14441715847777026,
          "title": "Tramway",
          "text": "Arrêt Charles de Gaulle à 200m"
        }
      ]
    },
    {
      "id": "4-chambre2",
      "name": "chambre2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 2.970413521351224,
        "pitch": 0.07489573712877551,
        "fov": 1.2712470872013175
      },
      "linkHotspots": [
        {
          "yaw": -2.959951427598792,
          "pitch": -0.2104649962391818,
          "rotation": 0,
          "target": "5-chambre2_vue",
		  "new_scene_view_params": { "yaw": 3.2, "pitch": 0, "roll": 0, "fov": 1.5707963267948966 }
        },
        {
          "yaw": -0.3151634097760869,
          "pitch": 0.10667745439878118,
          "rotation": 0,
          "target": "8-couloir_milieu",
		  "new_scene_view_params": { "yaw": 1.8, "pitch": 0, "roll": 0, "fov": 1.5707963267948966 }
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-chambre2_vue",
      "name": "chambre2_vue",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 3.087224104992913,
        "pitch": 0.05496982225768754,
        "fov": 1.2712470872013175
      },
      "linkHotspots": [
        {
          "yaw": 0.13226610800288086,
          "pitch": 0.25683514294078513,
          "rotation": 0,
          "target": "4-chambre2",
		  "new_scene_view_params": { "yaw": 0, "pitch": 0, "roll": 0, "fov": 1.5707963267948966 }
        },
        {
          "yaw": -2.458115839528812,
          "pitch": 0.3264666829990439,
          "rotation": 0,
          "target": "19-terrasse",
		  "new_scene_view_params": { "yaw": 3, "pitch": 0, "roll": 0, "fov": 1.5707963267948966 }
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-chambre3",
      "name": "chambre3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.7660517322661562,
          "pitch": -0.3817006361575963,
          "rotation": 0,
          "target": "7-chambre3_vue",
		  "new_scene_view_params": { "yaw": 3, "pitch": 0, "roll": 0, "fov": 1.5707963267948966 }
        },
        {
          "yaw": -2.3342637262741803,
          "pitch": 0.18442221297399009,
          "rotation": 0,
          "target": "8-couloir_milieu",
		  "new_scene_view_params": { "yaw": 1.8, "pitch": 0, "roll": 0, "fov": 1.5707963267948966 }
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-chambre3_vue",
      "name": "chambre3_vue",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.5149182455718506,
          "pitch": 0.460914537202159,
          "rotation": 0,
          "target": "19-terrasse",
		  "new_scene_view_params": { "yaw": 2.8, "pitch": 0, "roll": 0, "fov": 1.5707963267948966 }
        },
        {
          "yaw": 0.0895010843026558,
          "pitch": 0.24928026166398531,
          "rotation": 0,
          "target": "6-chambre3",
		  "new_scene_view_params": { "yaw": -2.5, "pitch": 0, "roll": 0, "fov": 1.5707963267948966 }
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-couloir_milieu",
      "name": "Couloir",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.2986242530899226,
          "pitch": 0.08024344407369988,
          "rotation": 0,
          "target": "0-couloir_entree",
		  "new_scene_view_params": { "yaw": 3.2, "pitch": 0, "roll": 0, "fov": 1.5707963267948966 }
        },
        {
          "yaw": -0.596634463950009,
          "pitch": 0.09172766852713998,
          "rotation": 11.780972450961727,
          "target": "6-chambre3",
		  "new_scene_view_params": { "yaw": 1, "pitch": 0, "roll": 0, "fov": 1.5707963267948966 }
        },
        {
          "yaw": -1.907200266618883,
          "pitch": 0.14768362134810964,
          "rotation": 0.7853981633974483,
          "target": "4-chambre2",
		  "new_scene_view_params": { "yaw": 3, "pitch": 0, "roll": 0, "fov": 1.5707963267948966 }
        },
        {
          "yaw": 2.5299352827111594,
          "pitch": 0.2003812325855705,
          "rotation": 5.497787143782138,
          "target": "2-chambre1",
		  "new_scene_view_params": { "yaw": 0.5, "pitch": 0, "roll": 0, "fov": 1.5707963267948966 }
        },
        {
          "yaw": -2.762931166403682,
          "pitch": 0.04743452512322044,
          "rotation": 0,
          "target": "9-couloir_placard",
		  "new_scene_view_params": { "yaw": 3, "pitch": 0, "roll": 0, "fov": 1.5707963267948966 }
        },
        {
          "yaw": 0.9965069366479611,
          "pitch": 0.17581317769060334,
          "rotation": 0.7853981633974483,
          "target": "18-sdb_couloir",
		  "new_scene_view_params": { "yaw": 2.8, "pitch": 0, "roll": 0, "fov": 1.5707963267948966 }
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-couloir_placard",
      "name": "couloir_placard",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.0749588993075427,
          "pitch": 0.13236869651429473,
          "rotation": 0.7853981633974483,
          "target": "2-chambre1",
		  "new_scene_view_params": { "yaw": 0.5, "pitch": 0, "roll": 0, "fov": 1.5707963267948966 }
        },
        {
          "yaw": 0.09878055183054002,
          "pitch": 0.1933379138489144,
          "rotation": 0,
          "target": "8-couloir_milieu",
		  "new_scene_view_params": { "yaw": 0.2, "pitch": 0, "roll": 0, "fov": 1.5707963267948966 }
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-cuisine_entree",
      "name": "Cuisine",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.42090232662952864,
          "pitch": 0.11042175166114276,
          "rotation": 0,
          "target": "0-couloir_entree",
		  "new_scene_view_params": { "yaw": 1.8, "pitch": 0, "roll": 0, "fov": 1.5707963267948966 }
        },
        {
          "yaw": -2.7736083402526113,
          "pitch": 0.09832423198980322,
          "rotation": 0,
          "target": "11-cuisine_fond",
		  "new_scene_view_params": { "yaw": -1, "pitch": 0, "roll": 0, "fov": 1.5707963267948966 }
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.5309542680597223,
          "pitch": -0.7536114190719587,
          "title": "Micro-ondes",
          "text": "Text"
        }
      ]
    },
    {
      "id": "11-cuisine_fond",
      "name": "Loggia",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.0837068575776136,
          "pitch": -0.04392270477919169,
          "rotation": 0,
          "target": "12-cuisine_vue",
		  "new_scene_view_params": { "yaw": 0.3, "pitch": 0, "roll": 0, "fov": 1.5707963267948966 }
        },
        {
          "yaw": 2.177216473941245,
          "pitch": 0.13836321328490442,
          "rotation": 0,
          "target": "10-cuisine_entree",
		  "new_scene_view_params": { "yaw": 0.5, "pitch": 0, "roll": 0, "fov": 1.5707963267948966 }
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.533271497407938,
          "pitch": 0.25546915169695694,
          "title": "Lave linge",
          "text": "Lave linge 6kg"
        },
        {
          "yaw": 0.09227045673609524,
          "pitch": 0.27432103229052274,
          "title": "Lave vaisselle",
          "text": "Lave vaisselle 6 couverts"
        }
      ]
    },
    {
      "id": "12-cuisine_vue",
      "name": "Vue de la cuisine",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.3213585202379896,
        "pitch": 0.030057302479022496,
        "fov": 1.2712470872013175
      },
      "linkHotspots": [
        {
          "yaw": -3.0379802714542308,
          "pitch": 0.25814664278682997,
          "rotation": 0,
          "target": "11-cuisine_fond",
		  "new_scene_view_params": { "yaw": 2, "pitch": 0, "roll": 0, "fov": 1.5707963267948966 }
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.5890256790894686,
          "pitch": 0.14325943445840927,
          "title": "Tramway",
          "text": "Arrêt Charles de Gaulle à 200m"
        }
      ]
    },
    {
      "id": "13-parking",
      "name": "parking",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.03174391020273859,
        "pitch": -0.031825379095437256,
        "fov": 1.2712470872013175
      },
      "linkHotspots": [
        {
          "yaw": -2.3790478723965567,
          "pitch": -0.5537943134150591,
          "rotation": 0,
          "target": "19-terrasse",
		  "new_scene_view_params": { "yaw": 0, "pitch": 0, "roll": 0, "fov": 1.5707963267948966 }
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.494534550731199,
          "pitch": -0.6163396904645104,
          "title": "Appartement",
          "text": "Appartement au 4ème étage"
        }
      ]
    },
    {
      "id": "14-salon_entree",
      "name": "salon_entree",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5894100224662289,
          "pitch": 0.29492054981021454,
          "rotation": 0,
          "target": "16-salon_tv",
		  "new_scene_view_params": { "yaw": 2.5, "pitch": 0, "roll": 0, "fov": 1.5707963267948966 }
        },
        {
          "yaw": -0.41643513575411184,
          "pitch": 0.06757329779248167,
          "rotation": 0,
          "target": "15-salon_fond",
		  "new_scene_view_params": { "yaw": 2, "pitch": 0, "roll": 0, "fov": 1.5707963267948966 }
        },
        {
          "yaw": -0.7509532694755272,
          "pitch": -0.0013062161057568744,
          "rotation": 5.497787143782138,
          "target": "19-terrasse",
		  "new_scene_view_params": { "yaw": 1.3, "pitch": 0, "roll": 0, "fov": 1.5707963267948966 }
        },
        {
          "yaw": 2.6893517623415253,
          "pitch": 0.3777116976486852,
          "rotation": 0,
          "target": "0-couloir_entree",
		  "new_scene_view_params": { "yaw": -1, "pitch": 0, "roll": 0, "fov": 1.5707963267948966 }
        },
        {
          "yaw": 2.4865096040668444,
          "pitch": 0.12755021876764872,
          "rotation": 0,
          "target": "10-cuisine_entree",
		  "new_scene_view_params": { "yaw": -2.5, "pitch": 0, "roll": 0, "fov": 1.5707963267948966 }
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-salon_fond",
      "name": "salon_fond",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.32979147851121837,
          "pitch": 0.09536464112367327,
          "rotation": 0,
          "target": "19-terrasse",
		  "new_scene_view_params": { "yaw": 1.3, "pitch": 0, "roll": 0, "fov": 1.5707963267948966 }
        },
        {
          "yaw": -1.2240870663474954,
          "pitch": 0.13563354679138584,
          "rotation": 0,
          "target": "14-salon_entree",
		  "new_scene_view_params": { "yaw": 2.5, "pitch": 0, "roll": 0, "fov": 1.5707963267948966 }
        },
        {
          "yaw": -1.65949659780604,
          "pitch": 0.10748435645331256,
          "rotation": 0,
          "target": "16-salon_tv",
		  "new_scene_view_params": { "yaw": -2.5, "pitch": 0, "roll": 0, "fov": 1.5707963267948966 }
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-salon_tv",
      "name": "salon_TV",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -2.4889553171805474,
        "pitch": 0.211826985592241,
        "fov": 1.2712470872013175
      },
      "linkHotspots": [
        {
          "yaw": -1.0569335023717805,
          "pitch": 0.5038191317539784,
          "rotation": 0,
          "target": "14-salon_entree",
		  "new_scene_view_params": { "yaw": -2.5, "pitch": 0, "roll": 0, "fov": 1.5707963267948966 }
        },
        {
          "yaw": 0.6128291570375701,
          "pitch": 0.1530354151582003,
          "rotation": 0,
          "target": "15-salon_fond",
		  "new_scene_view_params": { "yaw": 1.5, "pitch": 0, "roll": 0, "fov": 1.5707963267948966 }
        },
        {
          "yaw": 0.36324619549690595,
          "pitch": 0.11145854396112576,
          "rotation": 5.497787143782138,
          "target": "19-terrasse",
		  "new_scene_view_params": { "yaw": 1.3, "pitch": 0, "roll": 0, "fov": 1.5707963267948966 }
        },
        {
          "yaw": -1.6401851322457848,
          "pitch": 0.342278384013472,
          "rotation": 5.497787143782138,
          "target": "0-couloir_entree",
		  "new_scene_view_params": { "yaw": -1.5, "pitch": 0, "roll": 0, "fov": 1.5707963267948966 }
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.5038625733352013,
          "pitch": 0.4172697240693033,
          "title": "TV",
          "text": "80cm"
        }
      ]
    },
    {
      "id": "17-sdb",
      "name": "sdb",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 2.341390994820796,
        "pitch": 0.10907203678495847,
        "fov": 1.2712470872013175
      },
      "linkHotspots": [
        {
          "yaw": -0.7385713240072995,
          "pitch": 0.16406602267335302,
          "rotation": 0.7853981633974483,
          "target": "18-sdb_couloir",
		  "new_scene_view_params": { "yaw": 1, "pitch": 0, "roll": 0, "fov": 1.5707963267948966 }
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-sdb_couloir",
      "name": "sdb_couloir",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.7633290829265906,
          "pitch": 0.2026364851028717,
          "rotation": 5.497787143782138,
          "target": "17-sdb",
		  "new_scene_view_params": { "yaw": 2.3, "pitch": 0, "roll": 0, "fov": 1.5707963267948966 }
        },
        {
          "yaw": 0.5386093259073093,
          "pitch": 0.13463412976256528,
          "rotation": 0,
          "target": "8-couloir_milieu",
		  "new_scene_view_params": { "yaw": -1.5, "pitch": 0, "roll": 0, "fov": 1.5707963267948966 }
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-terrasse",
      "name": "terrasse",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 3.0314888955149346,
        "pitch": 0.18902346371840473,
        "fov": 1.2712470872013175
      },
      "linkHotspots": [
        {
          "yaw": 0.6361884613030693,
          "pitch": -0.11566653715400221,
          "rotation": 0,
          "target": "5-chambre2_vue",
		  "new_scene_view_params": { "yaw": 0, "pitch": 0, "roll": 0, "fov": 1.5707963267948966 }
        },
        {
          "yaw": -0.8338543252124619,
          "pitch": -0.1138614300203038,
          "rotation": 0,
          "target": "7-chambre3_vue",
		  "new_scene_view_params": { "yaw": 0, "pitch": 0, "roll": 0, "fov": 1.5707963267948966 }
        },
        {
          "yaw": -1.3411586069239902,
          "pitch": 0.1194283561166003,
          "rotation": 0,
          "target": "15-salon_fond",
		  "new_scene_view_params": { "yaw": -2.7, "pitch": 0, "roll": 0, "fov": 1.5707963267948966 }
        },
        {
          "yaw": -2.244816339617948,
          "pitch": 0.7114196868156561,
          "rotation": 0,
          "target": "13-parking",
		  "new_scene_view_params": { "yaw": 0.7, "pitch": 0, "roll": 0, "fov": 1.5707963267948966 }
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.620587822660031,
          "pitch": 0.9690585202315436,
          "title": "Parking",
          "text": "Parking sécurisé"
        }
      ]
    }
  ],
  "name": "Colocation Vert Parc",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
