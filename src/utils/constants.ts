import type { MainCategories, SubCategories } from "@types";

export const MAIN_CATEGORIES_ARRAY = [ 'bosses', 'raids', 'clues', 'minigames', 'other' ] as const;

export const SUB_CATEGORIES_ARRAY = ["abyssal_sire","alchemical_hydra","amoxliatl","araxxor","barrows_chests","bryophyta","callisto_and_artio","cerberus","chaos_elemental","chaos_fanatic","commander_zilyana","corporeal_beast","crazy_archaeologist","dagannoth_kings","duke_sucellus","deranged_archaeologist","doom_of_mokhaiotl","fortis_colosseum","general_graardor","giant_mole","grotesque_guardians","hespori","hueycoatl","kalphite_queen","king_black_dragon","kraken","kree_arra","the_leviathan","moons_of_peril","kril_tsutsaroth","nex","obor","phantom_muspah","royal_titans","sarachnis","scorpia","scurrius","skotizo","tempoross","the_fight_caves","the_gauntlet","the_inferno","the_nightmare","thermonuclear_smoke_devil","vardorvis","venenatis_and_spindel","vetion_and_calvarion","vorkath","the_whisperer","wintertodt","yama","zalcano","zulrah","beginner_treasure_trails","easy_treasure_trails","elite_treasure_trails","third_age","hard_treasure_trails","gilded","master_treasure_trails","mimic","medium_treasure_trails","shared_treasure_trail_rewards","scroll_cases","barbarian_assault","brimhaven_agility_arena","castle_wars","fishing_trawler","giants_foundry","gnome_restaurant","guardians_of_the_rift","hallowed_sepulchre","last_man_standing","magic_training_arena","mahogany_homes","mastering_mixology","pest_control","rogues_den","shades_of_mortton","soul_wars","temple_trekking","tithe_farm","trouble_brewing","vale_totems","volcanic_mine","aerial_fishing","all_pets","camdozaal","champions_challenge","chaos_druids","chompy_bird_hunting","colossal_wyrm_agility","creature_creation","cyclopes","forestry","fossil_island_notes","gloughs_experiments","hunter_guild","monkey_backpacks","motherlode_mine","my_notes","random_events","revenants","rooftop_agility","shayzien_armour","shooting_stars","skilling_pets","slayer","tormented_demons","tzhaar","miscellaneous","chambers_of_xeric","theatre_of_blood","tombs_of_amascut"] as const;

export const MAIN_CATEGORIES: Record<MainCategories, Array<SubCategories>> = {
    "bosses": ["abyssal_sire", "alchemical_hydra", "araxxor", "amoxliatl", "barrows_chests", "bryophyta", "callisto_and_artio", "cerberus", "chaos_elemental", "chaos_fanatic", "commander_zilyana", "corporeal_beast", "crazy_archaeologist", "dagannoth_kings", "deranged_archaeologist", "doom_of_mokhaiotl", "duke_sucellus", "fortis_colosseum", "general_graardor", "giant_mole", "grotesque_guardians", "hespori", "hueycoatl", "kalphite_queen", "king_black_dragon", "kraken", "kree_arra", "the_leviathan", "moons_of_peril", "kril_tsutsaroth", "nex", "obor", "phantom_muspah", "royal_titans", "sarachnis", "scorpia", "scurrius", "skotizo", "tempoross", "the_fight_caves", "the_gauntlet", "the_inferno", "the_nightmare", "thermonuclear_smoke_devil", "vardorvis", "venenatis_and_spindel", "vetion_and_calvarion", "vorkath", "the_whisperer", "wintertodt", "yama", "zalcano", "zulrah"],
    "raids": ["chambers_of_xeric", "theatre_of_blood", "tombs_of_amascut"],
    "clues": ["beginner_treasure_trails", "easy_treasure_trails", "elite_treasure_trails", "third_age", "hard_treasure_trails", "gilded", "master_treasure_trails", "mimic", "medium_treasure_trails", "shared_treasure_trail_rewards", "scroll_cases"],
    "minigames": ["barbarian_assault", "brimhaven_agility_arena", "castle_wars", "fishing_trawler", "giants_foundry", "gnome_restaurant", "guardians_of_the_rift", "hallowed_sepulchre", "last_man_standing", "magic_training_arena", "mahogany_homes", "mastering_mixology", "pest_control", "rogues_den", "shades_of_mortton", "soul_wars", "temple_trekking", "tithe_farm", "trouble_brewing", "vale_totems", "volcanic_mine"],
    "other": ["aerial_fishing", "all_pets", "camdozaal", "champions_challenge", "chaos_druids", "chompy_bird_hunting", "colossal_wyrm_agility", "creature_creation", "cyclopes", "forestry", "fossil_island_notes", "gloughs_experiments", "hunter_guild", "monkey_backpacks", "motherlode_mine", "my_notes", "random_events", "revenants", "rooftop_agility", "shayzien_armour", "shooting_stars", "skilling_pets", "slayer", "tormented_demons", "tzhaar", "miscellaneous"],
};

export const SUB_CATEGORIES: Record<SubCategories, { boss_name?: string | Array<string>, items: Array<string> }> = {
    abyssal_sire: {
        boss_name: 'Abyssal Sire',
        items: ['13262', '25624', '7979', '13274', '13275', '13276', '13277', '13265', '4151']
    },
    alchemical_hydra: {
        boss_name: 'Alchemical Hydra',
        items: ['22746', '22966', '22988', '22983', '22971', '22973', '22969', '22804', '20849', '23064', '23077']
    },
    amoxliatl: {
        boss_name: 'Amoxliatl',
        items: ['30154', '29889', '29892', '29895']
    },
    araxxor: {
        boss_name: 'Araxxor',
        items: ['29836', '29784', '29782', '29799', '29790', '29792', '29794', '29788', '29786', '29781']
    },
    barrows_chests: {
        boss_name: 'Barrows Chests',
        items: ['4732', '4708', '4716', '4724', '4745', '4753', '4736', '4712', '4720', '4728', '4749', '4757', '4738', '4714', '4722', '4730', '4751', '4759', '4734', '4710', '4718', '4726', '4747', '4755', '4740']
    },
    bryophyta: {
        boss_name: 'Bryophyta',
        items: ['22372']
    },
    callisto_and_artio: {
        boss_name: ['Callisto', 'Artio'],
        items: ['13178', '12603', '11920', '7158', '27667', '27681']
    },
    cerberus: {
        boss_name: 'Cerberus',
        items: ['13247', '13227', '13229', '13231', '13245', '13233', '13249']
    },
    chaos_elemental: {
        boss_name: 'Chaos Elemental',
        items: ['11995', '11920', '7158']
    },
    chaos_fanatic: {
        boss_name: 'Chaos Fanatic',
        items: ['11995', '11928', '11931']
    },
    commander_zilyana: {
        boss_name: 'Commander Zilyana',
        items: ['12651', '11785', '11814', '11838', '13256', '11818', '11820', '11822']
    },
    corporeal_beast: {
        boss_name: 'Corporeal Beast',
        items: ['12816', '12819', '12823', '12827', '12833', '12829', '25521']
    },
    crazy_archaeologist: {
        boss_name: 'Crazy Archaeologist',
        items: ['11929', '11932', '11990']
    },
    dagannoth_kings: {
        boss_name: ['Dagannoth Rex', 'Dagannoth Prime', 'Dagannoth Supreme'],
        items: ['12644', '12643', '12645', '6737', '6733', '6731', '6735', '6739', '6724', '6562']
    },
    duke_sucellus: {
        boss_name: 'Duke Sucellus',
        items: ['28250', '28321', '26241', '26243', '26245', '28281', '28270', '28333', '28276', '28334']
    },
    deranged_archaeologist: {
        boss_name: 'Deranged Archaeologist',
        items: ['30895']
    },
    doom_of_mokhaiotl: {
        boss_name: 'Doom of Mokhaiotl',
        items: ['31130', '31088', '31115', '31109', '31099', '31111']
    },
    fortis_colosseum: {
        boss_name: 'Sol Heredit',
        items: ['28960', '28947', '28936', '28939', '28933', '28942', '28919', '28924', '6571']
    },
    general_graardor: {
        boss_name: 'General Graardor',
        items: ['12650', '11832', '11834', '11836', '11812', '11818', '11820', '11822']
    },
    giant_mole: {
        boss_name: 'Giant Mole',
        items: ['12646', '7418', '7416']
    },
    grotesque_guardians: {
        boss_name: 'Grotesque Guardians',
        items: ['21748', '21730', '21736', '21739', '21742', '21745', '21726']
    },
    hespori: {
        boss_name: 'Hespori',
        items: ['22994', '22883', '22885', '22881']
    },
    hueycoatl: {
        boss_name: 'Hueycoatl',
        items: ['30152', '30070', '30066', '30068', '30085', '30088']
    },
    kalphite_queen: {
        boss_name: 'Kalphite Queen',
        items: ['12647', '7981', '12885', '7158', '3140', '11920']
    },
    king_black_dragon: {
        boss_name: 'King Black Dragon',
        items: ['12653', '7980', '11920', '11286']
    },
    kraken: {
        boss_name: 'Kraken',
        items: ['12655', '12004', '11905', '12007']
    },
    kree_arra: {
        boss_name: 'KreeArra',
        items: ['12649', '11826', '11828', '11830', '11810', '11818', '11820', '11822']
    },
    the_leviathan: {
        boss_name: 'The Leviathan',
        items: ['28252', '28325', '26241', '26243', '26245', '28283', '28274', '28332', '28276', '28334']
    },
    moons_of_peril: {
        boss_name: 'Lunar Chests',
        items: ['29004', '29007', '29010', '29000', '29013', '29016', '29019', '28988', '29022', '29025', '29028', '28997', '28991']
    },
    kril_tsutsaroth: {
        boss_name: 'Kril Tsutsaroth',
        items: ['12652', '11791', '11824', '11787', '11816', '11818', '11820', '11822']
    },
    nex: {
        boss_name: 'Nex',
        items: ['26348', '26370', '26372', '26235', '26376', '26378', '26380', '26231']
    },
    obor: {
        boss_name: 'Obor',
        items: ['20756']
    },
    phantom_muspah: {
        boss_name: 'Phantom Muspah',
        items: ['27590', '27614', '27627', '27643', '27622', '27616']
    },
    royal_titans: {
        boss_name: 'The Royal Titans',
        items: ['30622', '30626', '30627', '30637', '30628', '30631', '30640']
    },
    sarachnis: {
        boss_name: 'Sarachnis',
        items: ['23495', '23525', '23517', '23528']
    },
    scorpia: {
        boss_name: 'Scorpia',
        items: ['13181', '11930', '11933', '7158']
    },
    scurrius: {
        boss_name: 'Scurrius',
        items: ['28801', '28798']
    },
    skotizo: {
        boss_name: 'Skotizo',
        items: ['21273', '19701', '21275', '19685', '6571', '19677']
    },
    tempoross: {
        boss_name: 'Tempoross',
        items: ['25602', '25559', '25592', '25594', '25596', '25598', '25576', '25578', '25580', '25582', '21028', '25588']
    },
    the_fight_caves: {
        boss_name: 'TzTok-Jad',
        items: ['13225', '6570']
    },
    the_gauntlet: {
        boss_name: ['The Gauntlet', 'The Corrupted Gauntlet'],
        items: ['23757', '23956', '4207', '25859', '23859']
    },
    the_inferno: {
        boss_name: 'TzKal-Zuk',
        items: ['21291', '21295']
    },
    the_nightmare: {
        boss_name: ['Phosanis Nightmare', 'The Nightmare'],
        items: ['24491', '24417', '24419', '24420', '24421', '24422', '24514', '24511', '24517', '24495', '25837', '25838']
    },
    thermonuclear_smoke_devil: {
        boss_name: 'Thermonuclear Smoke Devil',
        items: ['12648', '12002', '11998', '3140', '25524']
    },
    vardorvis: {
        boss_name: 'Vardorvis',
        items: ['28248', '28319', '26241', '26243', '26245', '28285', '28268', '28330', '28276', '28334']
    },
    venenatis_and_spindel: {
        boss_name: ['Venenatis', 'Spindel'],
        items: ['13177', '12605', '11920', '7158', '27670', '27687']
    },
    vetion_and_calvarion: {
        boss_name: ['Vetion', 'Calvarion'],
        items: ['13179', '12601', '11920', '7158', '27673', '27684']
    },
    vorkath: {
        boss_name: 'Vorkath',
        items: ['21992', '21907', '11286', '22006', '22106', '22111']
    },
    the_whisperer: {
        boss_name: 'The Whisperer',
        items: ['28246', '28323', '26241', '26243', '26245', '28279', '28272', '28331', '28276', '28334']
    },
    wintertodt: {
        boss_name: 'Wintertodt',
        items: ['20693', '20716', '20718', '20704', '20708', '20706', '20710', '20712', '20720', '6739']
    },
    yama: {
        boss_name: 'Yama',
        items: ['30888', '30775', '30765', '30750', '30753', '30756', '30759', '30806', '30763', '30805', '30795']
    },
    zalcano: {
        boss_name: 'Zalcano',
        items: ['23760', '23953', '23908', '6571']
    },
    zulrah: {
        boss_name: 'Zulrah',
        items: ['12921', '13200', '13201', '12936', '12932', '12927', '12922', '12938', '6571', '12934']
    },
    beginner_treasure_trails: {
        boss_name: 'Clue_beginner',
        items: ['23285', '23288', '23291', '23294', '23297', '23300', '23303', '23306', '23309', '23312', '23315', '23318', '23321', '23324', '23327', '12297']
    },
    easy_treasure_trails: {
        boss_name: 'Clue_easy',
        items: ['20211', '20217', '20214', '23351', '20205', '20208', '20166', '2587', '2583', '2585', '3472', '2589', '2595', '2591', '2593', '3473', '2597', '7332', '7338', '7344', '7350', '7356', '10306', '10308', '10310', '10312', '10314', '23366', '23369', '23372', '23375', '23378', '20193', '20184', '20187', '20190', '20196', '20178', '20169', '20172', '20175', '20181', '12225', '12227', '12229', '12233', '12231', '12235', '12237', '12239', '12243', '12241', '12215', '12217', '12219', '12223', '12221', '12205', '12207', '12209', '12213', '12211', '7362', '7366', '7364', '7368', '23381', '23384', '7394', '7390', '7386', '7396', '7392', '7388', '12453', '12449', '12445', '12455', '12451', '12447', '20199', '20202', '10458', '10464', '10462', '10466', '10460', '10468', '12193', '12195', '12253', '12255', '12265', '12267', '10316', '10320', '10318', '10322', '10324', '2631', '2633', '2635', '2637', '12247', '10392', '12245', '12249', '12251', '10398', '10394', '10396', '12375', '23363', '10404', '10424', '10406', '10426', '10412', '10432', '10414', '10434', '10408', '10428', '10410', '10430', '10366', '23354', '12297', '23360', '23357', '10280']
    },
    elite_treasure_trails: {
        boss_name: 'Clue_elite',
        items: ['12526', '12534', '12536', '12532', '12538', '20002', '12530', '12528', '19997', '19994', '12596', '23249', '12381', '12383', '12385', '12387', '12397', '12439', '12393', '12395', '12351', '12441', '12443', '19958', '19964', '19967', '19961', '19970', '19973', '19979', '19982', '19976', '19985', '19943', '19946', '19952', '19955', '19949', '12363', '12365', '12367', '12369', '23270', '23273', '12357', '12373', '12335', '19991', '19988', '12540', '12430', '12355', '12432', '12353', '12337', '23246', '23252', '23255', '20005', '12371']
    },
    third_age: {
        boss_name: ['Clue_hard', 'Clue_elite', 'Clue_master'],
        items: ['20014', '20011', '23336', '23339', '23342', '23345', '12426', '12422', '12437', '12424', '10334', '10330', '10332', '10336', '10342', '10338', '10340', '10344', '10350', '10348', '10346', '23242', '10352']
    },
    hard_treasure_trails: {
        boss_name: 'Clue_hard',
        items: ['2581', '22231', '23227', '23232', '23237', '2627', '2623', '2625', '3477', '2629', '2619', '2615', '2617', '3476', '2621', '2657', '2653', '2655', '3478', '2659', '2673', '2669', '2671', '3480', '2675', '2665', '2661', '2663', '3479', '2667', '12466', '12460', '12462', '12464', '12468', '12476', '12470', '12472', '12474', '12478', '12486', '12480', '12482', '12484', '12488', '7336', '7342', '7348', '7354', '7360', '10286', '10288', '10290', '10292', '10294', '23209', '23212', '23215', '23218', '23221', '10390', '10386', '10388', '10384', '19933', '23191', '10382', '10378', '10380', '10376', '19927', '23188', '10374', '10370', '10372', '10368', '19936', '23194', '12504', '12500', '12502', '12498', '19924', '23203', '12512', '12508', '12510', '12506', '19930', '23200', '12496', '12492', '12494', '12490', '19921', '23197', '12331', '12333', '12327', '12329', '7376', '7384', '7374', '7382', '7400', '7399', '7398', '10470', '10440', '10472', '10442', '10474', '10444', '19912', '19915', '2651', '12323', '12321', '12325', '2639', '2641', '2643', '12516', '12514', '23224', '12518', '12520', '12522', '12524', '19918', '23206', '12379', '10354', '10284']
    },
    gilded: {
        boss_name: ['Clue_hard', 'Clue_elite', 'Clue_master'],
        items: ['3486', '3481', '3483', '3485', '3488', '20146', '20149', '20152', '20155', '20158', '20161', '12389', '12391', '23258', '23261', '23264', '23267', '23276', '23279', '23282']
    },
    master_treasure_trails: {
        boss_name: 'Clue_master',
        items: ['19730', '20068', '20071', '20074', '20077', '20065', '20062', '22246', '20143', '22239', '22236', '23348', '20128', '20131', '20137', '20134', '20140', '20035', '20038', '20044', '20047', '20041', '20095', '20098', '20101', '20107', '20104', '20080', '20092', '20086', '20089', '20083', '20125', '20116', '20113', '20122', '20119', '20020', '20023', '20026', '20032', '20029', '19724', '20110', '20056', '20050', '20053', '20008', '20059', '20017']
    },
    mimic: {
        boss_name: 'Mimic',
        items: ['23185']
    },
    medium_treasure_trails: {
        boss_name: 'Clue_medium',
        items: ['2577', '2579', '12598', '23413', '23389', '2605', '2599', '2601', '3474', '2603', '2613', '2607', '2609', '3475', '2611', '7334', '7340', '7346', '7352', '7358', '10296', '10298', '10300', '10302', '10304', '23392', '23395', '23398', '23401', '23404', '12283', '12277', '12279', '12285', '12281', '12293', '12287', '12289', '12295', '12291', '7370', '7372', '7378', '7380', '10452', '10446', '10454', '10448', '10456', '10450', '12203', '12197', '12201', '12199', '12259', '12261', '12257', '12263', '12271', '12273', '12269', '12275', '7319', '7323', '7321', '7327', '7325', '12309', '12311', '12313', '2645', '2647', '2649', '12299', '12301', '12303', '12305', '12307', '12319', '20240', '20243', '12377', '20251', '20260', '20254', '20263', '20257', '20272', '20266', '20269', '12361', '12428', '12359', '20246', '23407', '23410', '10416', '10436', '10418', '10438', '10400', '10420', '10402', '10422', '12315', '12339', '12317', '12341', '12347', '12343', '12349', '12345', '20275', '10364', '10282']
    },
    shared_treasure_trail_rewards: {
        boss_name: 'Clue_all',
        items: ['3827', '3831', '3835', '12613', '12617', '12621', '3828', '3832', '3836', '12614', '12618', '12622', '3829', '3833', '3837', '12615', '12619', '12623', '3830', '3834', '3838', '12616', '12620', '12624', '20220', '20223', '20226', '20232', '20229', '20235', '12402', '12411', '12406', '12404', '12405', '12403', '12408', '12407', '12409', '12642', '12410', '21387', '7329', '7330', '7331', '10326', '10327', '20238', '10476']
    },
    scroll_cases: {
        items: ['30902', '30904', '30906', '30908', '30910', '30912', '30914', '30916', '30918', '30920', '30922', '30924', '30926']
    },
    barbarian_assault: {
        items: ['12703', '10548', '10550', '10549', '10547', '10551', '10555', '10552', '10553', '10589', '10564']
    },
    brimhaven_agility_arena: {
        items: ['2996', '29482', '2997', '21061', '21067', '21070', '21073', '21076', '21064']
    },
    castle_wars: {
        items: ['4071', '25165', '4069', '4068', '4072', '4070', '11893', '25163', '4506', '25169', '4504', '4503', '4507', '4505', '11894', '25167', '4511', '25174', '4509', '4508', '4512', '4510', '11895', '25171', '4513', '4514', '4515', '4516', '11891', '11892', '11898', '11896', '11897', '11899', '11900', '11901', '12637', '12638', '12639']
    },
    fishing_trawler: {
        items: ['13258', '13259', '13260', '13261']
    },
    giants_foundry: {
        items: ['27023', '27025', '27027', '27029', '27021', '27012', '27014', '27017', '27019']
    },
    gnome_restaurant: {
        items: ['9469', '9470', '9472', '9475']
    },
    guardians_of_the_rift: {
        boss_name: 'Rift',
        items: ['26901', '26792', '26798', '26813', '26807', '26809', '26811', '26850', '26852', '26854', '26856', '26815', '26822', '26820', '26908', '26912', '26910']
    },
    hallowed_sepulchre: {
        items: ['24711', '24719', '24721', '24723', '24725', '24727', '24731', '24729', '24733', '24740', '24844', '24763', '24765', '24767', '24769', '24771']
    },
    last_man_standing: {
        boss_name: 'LMS',
        items: ['24189', '24190', '24191', '24192', '24195', '24198', '24201', '24204', '24868', '24869', '24870', '24871', '24207', '24209', '24211', '24213', '24215', '24520', '12849', '24229', '12798', '21202', '12800', '12802', '12759', '12761', '12763', '12757', '12771', '12769', '24217', '24219']
    },
    magic_training_arena: {
        items: ['6908', '6910', '6912', '6914', '6918', '6916', '6924', '6920', '6922', '6889', '6926']
    },
    mahogany_homes: {
        items: ['24884', '24872', '24874', '24876', '24878', '24880', '25629', '24885']
    },
    mastering_mixology: {
        items: ['29974', '29978', '29982', '29986', '29992', '29996', '30002']
    },
    pest_control: {
        items: ['8841', '8839', '8840', '8842', '11663', '11665', '11664', '11666', '13072', '13073']
    },
    rogues_den: {
        items: ['5554', '5553', '5555', '5557', '5556']
    },
    shades_of_mortton: {
        items: ['12851', '25630', '3470', '25442', '25445', '25448', '25451', '25454', '25438', '25434', '25436', '25440', '25474', '25476']
    },
    soul_wars: {
        boss_name: 'Soul Wars Zeal',
        items: ['25348', '25346', '25340']
    },
    temple_trekking: {
        items: ['10941', '10939', '10940', '10933']
    },
    tithe_farm: {
        items: ['13646', '13642', '13640', '13644', '13639', '13353', '13226']
    },
    trouble_brewing: {
        items: ['8952', '8959', '8991', '8953', '8960', '8992', '8954', '8961', '8993', '8955', '8962', '8994', '8956', '8963', '8995', '8957', '8964', '8996', '8958', '8965', '8997', '8966', '8967', '8968', '8969', '8970', '8971', '8988', '8940', '8941']
    },
    vale_totems: {
        items: ['31043', '31052', '31032', '31034']
    },
    volcanic_mine: {
        items: ['21697', '25615', '21541', '27695', '12013', '12014', '12015', '12016']
    },
    aerial_fishing: {
        items: ['22840', '22846', '22844', '22842', '22838', '13258', '13259', '13260', '13261']
    },
    all_pets: {
        items: ['13262', '22746', '13178', '13247', '11995', '12651', '12816', '12644', '12643', '12645', '13225', '12650', '12646', '21748', '21291', '12647', '12653', '12655', '12649', '12652', '13181', '21273', '12648', '13177', '13179', '21992', '20693', '12921', '20851', '22473', '19730', '12703', '13320', '13321', '13322', '13324', '20659', '20661', '20663', '20665', '21509', '13071', '23495', '23760', '23757', '24491', '25348', '25602', '26348', '26901', '27352', '27590', '28246', '28250', '28248', '28252', '28801', '28960', '28962', '29836', '30152', '30154', '30622', '30888', '31130']
    },
    camdozaal: {
        items: ['25641', '25635', '25637', '25639', '25686', '25688', '25690', '25692', '25694', '25644']
    },
    champions_challenge: {
        items: ['6798', '6799', '6800', '6801', '6802', '6803', '6804', '6805', '6806', '6807', '21439']
    },
    chaos_druids: {
        items: ['20517', '20520', '20595']
    },
    chompy_bird_hunting: {
        items: ['13071', '2978', '2979', '2980', '2981', '2982', '2983', '2984', '2985', '2986', '2987', '2988', '2989', '2990', '2991', '2992', '2993', '2994', '2995']
    },
    colossal_wyrm_agility: {
        items: ['30040', '30042', '30045', '30051', '30054', '30057', '30060', '30048']
    },
    creature_creation: {
        items: ['25617', '25618', '25619', '25620', '25621', '25622', '25623']
    },
    cyclopes: {
        items: ['8844', '8845', '8846', '8847', '8848', '8849', '8850', '12954']
    },
    forestry: {
        items: ['28626', '28663', '10941', '10939', '10940', '10933', '28173', '28169', '28171', '28175', '28630', '28138', '28140', '28146', '28166', '28613', '28177', '28620', '28622', '28618', '28616', '28655', '28674']
    },
    fossil_island_notes: {
        items: ['21664', '21666', '21668', '21670', '21672', '21674', '21676', '21678', '21680', '21682']
    },
    gloughs_experiments: {
        items: ['19529', '19586', '19589', '19592', '19610', '19601']
    },
    hunter_guild: {
        items: ['28962', '29309', '29263', '29265', '29267', '29269']
    },
    monkey_backpacks: {
        items: ['24862', '24866', '24864', '24867', '24865', '24863']
    },
    motherlode_mine: {
        items: ['25627', '25628', '12013', '12014', '12015', '12016']
    },
    my_notes: {
        items: ['11341', '11342', '11343', '11344', '11345', '11346', '11347', '11348', '11349', '11350', '11351', '11352', '11353', '11354', '11355', '11356', '11357', '11358', '11359', '11360', '11361', '11362', '11363', '11364', '11365', '11366']
    },
    random_events: {
        items: ['6654', '6655', '6656', '6180', '6181', '6182', '7592', '7593', '7594', '7595', '7596', '3057', '3058', '3059', '3060', '3061', '6183', '20590', '25129', '25131', '25133', '25135', '25137']
    },
    revenants: {
        items: ['22542', '22547', '22552', '22557', '21817', '21804', '22305', '22302', '22299', '21813', '21810', '21807', '21802', '21820']
    },
    rooftop_agility: {
        items: ['11849', '11850', '11852', '11854', '11856', '11858', '11860']
    },
    shayzien_armour: {
        items: ['13357', '13358', '13359', '13360', '13361', '13362', '13363', '13364', '13365', '13366', '13367', '13368', '13369', '13370', '13371', '13372', '13373', '13374', '13375', '13376', '13377', '13378', '13379', '13380', '13381']
    },
    shooting_stars: {
        items: ['25539', '25547']
    },
    skilling_pets: {
        items: ['13320', '13321', '13322', '13324', '20659', '20661', '20663', '20665']
    },
    slayer: {
        boss_name: ['Brimstone Chests', 'Kurask', 'Wyvern'],
        items: ['7975', '7976', '7977', '7978', '7979', '20724', '21270', '20736', '20730', '4151', '4153', '6665', '6666', '11037', '11902', '20727', '8901', '21646', '21643', '21637', '6809', '10589', '11286', '4119', '4121', '4123', '4125', '4127', '4129', '4131', '11840', '13265', '11908', '12004', '11235', '12002', '3140', '20849', '21028', '21009', '22804', '22963', '22960', '22957', '22988', '22971', '22973', '22969', '4109', '4111', '4113', '4115', '4117', '4099', '4101', '4103', '4105', '4107', '23047', '23050', '23053', '23056', '23059', '24268', '24288', '24291', '24294', '24777', '26225', '26221', '26223', '26227', '26229', '28583', '29084', '29455', '29806', '29889', '29892', '29895', '30957', '31081', '31084', '31086']
    },
    tormented_demons: {
        items: ['29580', '29574', '29684']
    },
    tzhaar: {
        boss_name: ['TzHaar-Ket', 'TzHaar-Mej'],
        items: ['6568', '6524', '6528', '6523', '6525', '6526', '6522', '21298', '21301', '21304']
    },
    miscellaneous: {
        boss_name: ['Rune Dragon', 'Adamant Dragon', 'Mithril Dragon', 'Rummage Skeleton', 'Evil Chicken', 'Lizardman Shamans', 'Crystal Chest'],
        items: ['21509', '13071', '13576', '7991', '7993', '7989', '10976', '10977', '11942', '26945', '19679', '19681', '19683', '11338', '11335', '2366', '22100', '22103', '21918', '1249', '19707', '21838', '20439', '20436', '20442', '20433', '21343', '21345', '21392', '9007', '9008', '9010', '9011', '22374', '20754', '22875', '7536', '7538', '13392', '23522', '23943', '24000', '23959', '24034', '24037', '24040', '24046', '24043', '6571', '21649', '25844', '25846', '28813', '30111', '30324']
    },
    chambers_of_xeric: {
        boss_name: ['Chambers of Xeric', 'Chambers of Xeric Challenge Mode'],
        items: ['20851', '22386', '20997', '21003', '21043', '13652', '21018', '21021', '21024', '21015', '21034', '21079', '21012', '21000', '21047', '21027', '6573', '24670', '22388', '22390', '22392', '22394', '22396']
    },
    theatre_of_blood: {
        boss_name: ['Theatre of Blood', 'Theatre of Blood Hard Mode'],
        items: ['22473', '22486', '22324', '22481', '22326', '22327', '22328', '22477', '22446', '22494', '22496', '22498', '22500', '22502', '25746', '25742', '25744']
    },
    tombs_of_amascut: {
        boss_name: ['Tombs of Amascut Expert', 'Tombs of Amascut'],
        items: ['27352', '27277', '25985', '27226', '27229', '27232', '25975', '26219', '27279', '27283', '27285', '27289', '30893', '27255', '27248', '27372', '27293', '27257', '27259', '27261', '27263', '27265', '27377', '27378', '27379', '27380', '27381']
    }
};

export const ITEMS: Record<string, { name: string, categories: Array<SubCategories>}> = {
  '1249': {
    name: 'Dragon spear',
    categories: ['miscellaneous']
  },
  '2366': {
    name: 'Shield left half',
    categories: ['miscellaneous']
  },
  '2577': {
    name: 'Ranger boots',
    categories: ['medium_treasure_trails']
  },
  '2579': {
    name: 'Wizard boots',
    categories: ['medium_treasure_trails']
  },
  '2581': {
    name: 'Robin hood hat',
    categories: ['hard_treasure_trails']
  },
  '2583': {
    name: 'Black platebody (t)',
    categories: ['easy_treasure_trails']
  },
  '2585': {
    name: 'Black platelegs (t)',
    categories: ['easy_treasure_trails']
  },
  '2587': {
    name: 'Black full helm (t)',
    categories: ['easy_treasure_trails']
  },
  '2589': {
    name: 'Black kiteshield (t)',
    categories: ['easy_treasure_trails']
  },
  '2591': {
    name: 'Black platebody (g)',
    categories: ['easy_treasure_trails']
  },
  '2593': {
    name: 'Black platelegs (g)',
    categories: ['easy_treasure_trails']
  },
  '2595': {
    name: 'Black full helm (g)',
    categories: ['easy_treasure_trails']
  },
  '2597': {
    name: 'Black kiteshield (g)',
    categories: ['easy_treasure_trails']
  },
  '2599': {
    name: 'Adamant platebody (t)',
    categories: ['medium_treasure_trails']
  },
  '2601': {
    name: 'Adamant platelegs (t)',
    categories: ['medium_treasure_trails']
  },
  '2603': {
    name: 'Adamant kiteshield (t)',
    categories: ['medium_treasure_trails']
  },
  '2605': {
    name: 'Adamant full helm (t)',
    categories: ['medium_treasure_trails']
  },
  '2607': {
    name: 'Adamant platebody (g)',
    categories: ['medium_treasure_trails']
  },
  '2609': {
    name: 'Adamant platelegs (g)',
    categories: ['medium_treasure_trails']
  },
  '2611': {
    name: 'Adamant kiteshield (g)',
    categories: ['medium_treasure_trails']
  },
  '2613': {
    name: 'Adamant full helm (g)',
    categories: ['medium_treasure_trails']
  },
  '2615': {
    name: 'Rune platebody (g)',
    categories: ['hard_treasure_trails']
  },
  '2617': {
    name: 'Rune platelegs (g)',
    categories: ['hard_treasure_trails']
  },
  '2619': {
    name: 'Rune full helm (g)',
    categories: ['hard_treasure_trails']
  },
  '2621': {
    name: 'Rune kiteshield (g)',
    categories: ['hard_treasure_trails']
  },
  '2623': {
    name: 'Rune platebody (t)',
    categories: ['hard_treasure_trails']
  },
  '2625': {
    name: 'Rune platelegs (t)',
    categories: ['hard_treasure_trails']
  },
  '2627': {
    name: 'Rune full helm (t)',
    categories: ['hard_treasure_trails']
  },
  '2629': {
    name: 'Rune kiteshield (t)',
    categories: ['hard_treasure_trails']
  },
  '2631': {
    name: 'Highwayman mask',
    categories: ['easy_treasure_trails']
  },
  '2633': {
    name: 'Blue beret',
    categories: ['easy_treasure_trails']
  },
  '2635': {
    name: 'Black beret',
    categories: ['easy_treasure_trails']
  },
  '2637': {
    name: 'White beret',
    categories: ['easy_treasure_trails']
  },
  '2639': {
    name: 'Tan cavalier',
    categories: ['hard_treasure_trails']
  },
  '2641': {
    name: 'Dark cavalier',
    categories: ['hard_treasure_trails']
  },
  '2643': {
    name: 'Black cavalier',
    categories: ['hard_treasure_trails']
  },
  '2645': {
    name: 'Red headband',
    categories: ['medium_treasure_trails']
  },
  '2647': {
    name: 'Black headband',
    categories: ['medium_treasure_trails']
  },
  '2649': {
    name: 'Brown headband',
    categories: ['medium_treasure_trails']
  },
  '2651': {
    name: "Pirate's hat",
    categories: ['hard_treasure_trails']
  },
  '2653': {
    name: 'Zamorak platebody',
    categories: ['hard_treasure_trails']
  },
  '2655': {
    name: 'Zamorak platelegs',
    categories: ['hard_treasure_trails']
  },
  '2657': {
    name: 'Zamorak full helm',
    categories: ['hard_treasure_trails']
  },
  '2659': {
    name: 'Zamorak kiteshield',
    categories: ['hard_treasure_trails']
  },
  '2661': {
    name: 'Saradomin platebody',
    categories: ['hard_treasure_trails']
  },
  '2663': {
    name: 'Saradomin platelegs',
    categories: ['hard_treasure_trails']
  },
  '2665': {
    name: 'Saradomin full helm',
    categories: ['hard_treasure_trails']
  },
  '2667': {
    name: 'Saradomin kiteshield',
    categories: ['hard_treasure_trails']
  },
  '2669': {
    name: 'Guthix platebody',
    categories: ['hard_treasure_trails']
  },
  '2671': {
    name: 'Guthix platelegs',
    categories: ['hard_treasure_trails']
  },
  '2673': {
    name: 'Guthix full helm',
    categories: ['hard_treasure_trails']
  },
  '2675': {
    name: 'Guthix kiteshield',
    categories: ['hard_treasure_trails']
  },
  '2978': {
    name: 'Chompy bird hat',
    categories: ['chompy_bird_hunting']
  },
  '2979': {
    name: 'Chompy bird hat',
    categories: ['chompy_bird_hunting']
  },
  '2980': {
    name: 'Chompy bird hat',
    categories: ['chompy_bird_hunting']
  },
  '2981': {
    name: 'Chompy bird hat',
    categories: ['chompy_bird_hunting']
  },
  '2982': {
    name: 'Chompy bird hat',
    categories: ['chompy_bird_hunting']
  },
  '2983': {
    name: 'Chompy bird hat',
    categories: ['chompy_bird_hunting']
  },
  '2984': {
    name: 'Chompy bird hat',
    categories: ['chompy_bird_hunting']
  },
  '2985': {
    name: 'Chompy bird hat',
    categories: ['chompy_bird_hunting']
  },
  '2986': {
    name: 'Chompy bird hat',
    categories: ['chompy_bird_hunting']
  },
  '2987': {
    name: 'Chompy bird hat',
    categories: ['chompy_bird_hunting']
  },
  '2988': {
    name: 'Chompy bird hat',
    categories: ['chompy_bird_hunting']
  },
  '2989': {
    name: 'Chompy bird hat',
    categories: ['chompy_bird_hunting']
  },
  '2990': {
    name: 'Chompy bird hat',
    categories: ['chompy_bird_hunting']
  },
  '2991': {
    name: 'Chompy bird hat',
    categories: ['chompy_bird_hunting']
  },
  '2992': {
    name: 'Chompy bird hat',
    categories: ['chompy_bird_hunting']
  },
  '2993': {
    name: 'Chompy bird hat',
    categories: ['chompy_bird_hunting']
  },
  '2994': {
    name: 'Chompy bird hat',
    categories: ['chompy_bird_hunting']
  },
  '2995': {
    name: 'Chompy bird hat',
    categories: ['chompy_bird_hunting']
  },
  '2996': {
    name: 'Agility arena ticket',
    categories: ['brimhaven_agility_arena']
  },
  '2997': {
    name: "Pirate's hook",
    categories: ['brimhaven_agility_arena']
  },
  '3057': {
    name: 'Mime mask',
    categories: ['random_events']
  },
  '3058': {
    name: 'Mime top',
    categories: ['random_events']
  },
  '3059': {
    name: 'Mime legs',
    categories: ['random_events']
  },
  '3060': {
    name: 'Mime gloves',
    categories: ['random_events']
  },
  '3061': {
    name: 'Mime boots',
    categories: ['random_events']
  },
  '3140': {
    name: 'Dragon chainbody',
    categories: ['kalphite_queen', 'thermonuclear_smoke_devil', 'slayer']
  },
  '3470': {
    name: 'Fine cloth',
    categories: ['shades_of_mortton']
  },
  '3472': {
    name: 'Black plateskirt (t)',
    categories: ['easy_treasure_trails']
  },
  '3473': {
    name: 'Black plateskirt (g)',
    categories: ['easy_treasure_trails']
  },
  '3474': {
    name: 'Adamant plateskirt (t)',
    categories: ['medium_treasure_trails']
  },
  '3475': {
    name: 'Adamant plateskirt (g)',
    categories: ['medium_treasure_trails']
  },
  '3476': {
    name: 'Rune plateskirt (g)',
    categories: ['hard_treasure_trails']
  },
  '3477': {
    name: 'Rune plateskirt (t)',
    categories: ['hard_treasure_trails']
  },
  '3478': {
    name: 'Zamorak plateskirt',
    categories: ['hard_treasure_trails']
  },
  '3479': {
    name: 'Saradomin plateskirt',
    categories: ['hard_treasure_trails']
  },
  '3480': {
    name: 'Guthix plateskirt',
    categories: ['hard_treasure_trails']
  },
  '3481': {
    name: 'Gilded platebody',
    categories: ['gilded']
  },
  '3483': {
    name: 'Gilded platelegs',
    categories: ['gilded']
  },
  '3485': {
    name: 'Gilded plateskirt',
    categories: ['gilded']
  },
  '3486': {
    name: 'Gilded full helm',
    categories: ['gilded']
  },
  '3488': {
    name: 'Gilded kiteshield',
    categories: ['gilded']
  },
  '3827': {
    name: 'Saradomin page 1',
    categories: ['shared_treasure_trail_rewards']
  },
  '3828': {
    name: 'Saradomin page 2',
    categories: ['shared_treasure_trail_rewards']
  },
  '3829': {
    name: 'Saradomin page 3',
    categories: ['shared_treasure_trail_rewards']
  },
  '3830': {
    name: 'Saradomin page 4',
    categories: ['shared_treasure_trail_rewards']
  },
  '3831': {
    name: 'Zamorak page 1',
    categories: ['shared_treasure_trail_rewards']
  },
  '3832': {
    name: 'Zamorak page 2',
    categories: ['shared_treasure_trail_rewards']
  },
  '3833': {
    name: 'Zamorak page 3',
    categories: ['shared_treasure_trail_rewards']
  },
  '3834': {
    name: 'Zamorak page 4',
    categories: ['shared_treasure_trail_rewards']
  },
  '3835': {
    name: 'Guthix page 1',
    categories: ['shared_treasure_trail_rewards']
  },
  '3836': {
    name: 'Guthix page 2',
    categories: ['shared_treasure_trail_rewards']
  },
  '3837': {
    name: 'Guthix page 3',
    categories: ['shared_treasure_trail_rewards']
  },
  '3838': {
    name: 'Guthix page 4',
    categories: ['shared_treasure_trail_rewards']
  },
  '4068': {
    name: 'Decorative sword',
    categories: ['castle_wars']
  },
  '4069': {
    name: 'Decorative armour',
    categories: ['castle_wars']
  },
  '4070': {
    name: 'Decorative armour',
    categories: ['castle_wars']
  },
  '4071': {
    name: 'Decorative helm',
    categories: ['castle_wars']
  },
  '4072': {
    name: 'Decorative shield',
    categories: ['castle_wars']
  },
  '4099': {
    name: 'Mystic hat (dark)',
    categories: ['slayer']
  },
  '4101': {
    name: 'Mystic robe top (dark)',
    categories: ['slayer']
  },
  '4103': {
    name: 'Mystic robe bottom (dark)',
    categories: ['slayer']
  },
  '4105': {
    name: 'Mystic gloves (dark)',
    categories: ['slayer']
  },
  '4107': {
    name: 'Mystic boots (dark)',
    categories: ['slayer']
  },
  '4109': {
    name: 'Mystic hat (light)',
    categories: ['slayer']
  },
  '4111': {
    name: 'Mystic robe top (light)',
    categories: ['slayer']
  },
  '4113': {
    name: 'Mystic robe bottom (light)',
    categories: ['slayer']
  },
  '4115': {
    name: 'Mystic gloves (light)',
    categories: ['slayer']
  },
  '4117': {
    name: 'Mystic boots (light)',
    categories: ['slayer']
  },
  '4119': {
    name: 'Bronze boots',
    categories: ['slayer']
  },
  '4121': {
    name: 'Iron boots',
    categories: ['slayer']
  },
  '4123': {
    name: 'Steel boots',
    categories: ['slayer']
  },
  '4125': {
    name: 'Black boots',
    categories: ['slayer']
  },
  '4127': {
    name: 'Mithril boots',
    categories: ['slayer']
  },
  '4129': {
    name: 'Adamant boots',
    categories: ['slayer']
  },
  '4131': {
    name: 'Rune boots',
    categories: ['slayer']
  },
  '4151': {
    name: 'Abyssal whip',
    categories: ['abyssal_sire', 'slayer']
  },
  '4153': {
    name: 'Granite maul',
    categories: ['slayer']
  },
  '4207': {
    name: 'Crystal weapon seed',
    categories: ['the_gauntlet']
  },
  '4503': {
    name: 'Decorative sword',
    categories: ['castle_wars']
  },
  '4504': {
    name: 'Decorative armour',
    categories: ['castle_wars']
  },
  '4505': {
    name: 'Decorative armour',
    categories: ['castle_wars']
  },
  '4506': {
    name: 'Decorative helm',
    categories: ['castle_wars']
  },
  '4507': {
    name: 'Decorative shield',
    categories: ['castle_wars']
  },
  '4508': {
    name: 'Decorative sword',
    categories: ['castle_wars']
  },
  '4509': {
    name: 'Decorative armour',
    categories: ['castle_wars']
  },
  '4510': {
    name: 'Decorative armour',
    categories: ['castle_wars']
  },
  '4511': {
    name: 'Decorative helm',
    categories: ['castle_wars']
  },
  '4512': {
    name: 'Decorative shield',
    categories: ['castle_wars']
  },
  '4513': {
    name: 'Castlewars hood',
    categories: ['castle_wars']
  },
  '4514': {
    name: 'Castlewars cloak',
    categories: ['castle_wars']
  },
  '4515': {
    name: 'Castlewars hood',
    categories: ['castle_wars']
  },
  '4516': {
    name: 'Castlewars cloak',
    categories: ['castle_wars']
  },
  '4708': {
    name: "Ahrim's hood",
    categories: ['barrows_chests']
  },
  '4710': {
    name: "Ahrim's staff",
    categories: ['barrows_chests']
  },
  '4712': {
    name: "Ahrim's robetop",
    categories: ['barrows_chests']
  },
  '4714': {
    name: "Ahrim's robeskirt",
    categories: ['barrows_chests']
  },
  '4716': {
    name: "Dharok's helm",
    categories: ['barrows_chests']
  },
  '4718': {
    name: "Dharok's greataxe",
    categories: ['barrows_chests']
  },
  '4720': {
    name: "Dharok's platebody",
    categories: ['barrows_chests']
  },
  '4722': {
    name: "Dharok's platelegs",
    categories: ['barrows_chests']
  },
  '4724': {
    name: "Guthan's helm",
    categories: ['barrows_chests']
  },
  '4726': {
    name: "Guthan's warspear",
    categories: ['barrows_chests']
  },
  '4728': {
    name: "Guthan's platebody",
    categories: ['barrows_chests']
  },
  '4730': {
    name: "Guthan's chainskirt",
    categories: ['barrows_chests']
  },
  '4732': {
    name: "Karil's coif",
    categories: ['barrows_chests']
  },
  '4734': {
    name: "Karil's crossbow",
    categories: ['barrows_chests']
  },
  '4736': {
    name: "Karil's leathertop",
    categories: ['barrows_chests']
  },
  '4738': {
    name: "Karil's leatherskirt",
    categories: ['barrows_chests']
  },
  '4740': {
    name: 'Bolt rack',
    categories: ['barrows_chests']
  },
  '4745': {
    name: "Torag's helm",
    categories: ['barrows_chests']
  },
  '4747': {
    name: "Torag's hammers",
    categories: ['barrows_chests']
  },
  '4749': {
    name: "Torag's platebody",
    categories: ['barrows_chests']
  },
  '4751': {
    name: "Torag's platelegs",
    categories: ['barrows_chests']
  },
  '4753': {
    name: "Verac's helm",
    categories: ['barrows_chests']
  },
  '4755': {
    name: "Verac's flail",
    categories: ['barrows_chests']
  },
  '4757': {
    name: "Verac's brassard",
    categories: ['barrows_chests']
  },
  '4759': {
    name: "Verac's plateskirt",
    categories: ['barrows_chests']
  },
  '5553': {
    name: 'Rogue top',
    categories: ['rogues_den']
  },
  '5554': {
    name: 'Rogue mask',
    categories: ['rogues_den']
  },
  '5555': {
    name: 'Rogue trousers',
    categories: ['rogues_den']
  },
  '5556': {
    name: 'Rogue gloves',
    categories: ['rogues_den']
  },
  '5557': {
    name: 'Rogue boots',
    categories: ['rogues_den']
  },
  '6180': {
    name: 'Lederhosen top',
    categories: ['random_events']
  },
  '6181': {
    name: 'Lederhosen shorts',
    categories: ['random_events']
  },
  '6182': {
    name: 'Lederhosen hat',
    categories: ['random_events']
  },
  '6183': {
    name: 'Frog token',
    categories: ['random_events']
  },
  '6522': {
    name: 'Toktz-xil-ul',
    categories: ['tzhaar']
  },
  '6523': {
    name: 'Toktz-xil-ak',
    categories: ['tzhaar']
  },
  '6524': {
    name: 'Toktz-ket-xil',
    categories: ['tzhaar']
  },
  '6525': {
    name: 'Toktz-xil-ek',
    categories: ['tzhaar']
  },
  '6526': {
    name: 'Toktz-mej-tal',
    categories: ['tzhaar']
  },
  '6528': {
    name: 'Tzhaar-ket-om',
    categories: ['tzhaar']
  },
  '6562': {
    name: 'Mud battlestaff',
    categories: ['dagannoth_kings']
  },
  '6568': {
    name: 'Obsidian cape',
    categories: ['tzhaar']
  },
  '6570': {
    name: 'Fire cape',
    categories: ['the_fight_caves']
  },
  '6571': {
    name: 'Uncut onyx',
    categories: ['fortis_colosseum', 'skotizo', 'zalcano', 'zulrah', 'miscellaneous']
  },
  '6573': {
    name: 'Onyx',
    categories: ['chambers_of_xeric']
  },
  '6654': {
    name: 'Camo top',
    categories: ['random_events']
  },
  '6655': {
    name: 'Camo bottoms',
    categories: ['random_events']
  },
  '6656': {
    name: 'Camo helmet',
    categories: ['random_events']
  },
  '6665': {
    name: 'Mudskipper hat',
    categories: ['slayer']
  },
  '6666': {
    name: 'Flippers',
    categories: ['slayer']
  },
  '6724': {
    name: 'Seercull',
    categories: ['dagannoth_kings']
  },
  '6731': {
    name: 'Seers ring',
    categories: ['dagannoth_kings']
  },
  '6733': {
    name: 'Archers ring',
    categories: ['dagannoth_kings']
  },
  '6735': {
    name: 'Warrior ring',
    categories: ['dagannoth_kings']
  },
  '6737': {
    name: 'Berserker ring',
    categories: ['dagannoth_kings']
  },
  '6739': {
    name: 'Dragon axe',
    categories: ['dagannoth_kings', 'wintertodt']
  },
  '6798': {
    name: 'Earth warrior champion scroll',
    categories: ['champions_challenge']
  },
  '6799': {
    name: 'Ghoul champion scroll',
    categories: ['champions_challenge']
  },
  '6800': {
    name: 'Giant champion scroll',
    categories: ['champions_challenge']
  },
  '6801': {
    name: 'Goblin champion scroll',
    categories: ['champions_challenge']
  },
  '6802': {
    name: 'Hobgoblin champion scroll',
    categories: ['champions_challenge']
  },
  '6803': {
    name: 'Imp champion scroll',
    categories: ['champions_challenge']
  },
  '6804': {
    name: 'Jogre champion scroll',
    categories: ['champions_challenge']
  },
  '6805': {
    name: 'Lesser demon champion scroll',
    categories: ['champions_challenge']
  },
  '6806': {
    name: 'Skeleton champion scroll',
    categories: ['champions_challenge']
  },
  '6807': {
    name: 'Zombie champion scroll',
    categories: ['champions_challenge']
  },
  '6809': {
    name: 'Granite legs',
    categories: ['slayer']
  },
  '6889': {
    name: "Mage's book",
    categories: ['magic_training_arena']
  },
  '6908': {
    name: 'Beginner wand',
    categories: ['magic_training_arena']
  },
  '6910': {
    name: 'Apprentice wand',
    categories: ['magic_training_arena']
  },
  '6912': {
    name: 'Teacher wand',
    categories: ['magic_training_arena']
  },
  '6914': {
    name: 'Master wand',
    categories: ['magic_training_arena']
  },
  '6916': {
    name: 'Infinity top',
    categories: ['magic_training_arena']
  },
  '6918': {
    name: 'Infinity hat',
    categories: ['magic_training_arena']
  },
  '6920': {
    name: 'Infinity boots',
    categories: ['magic_training_arena']
  },
  '6922': {
    name: 'Infinity gloves',
    categories: ['magic_training_arena']
  },
  '6924': {
    name: 'Infinity bottoms',
    categories: ['magic_training_arena']
  },
  '6926': {
    name: 'Bones to peaches',
    categories: ['magic_training_arena']
  },
  '7158': {
    name: 'Dragon 2h sword',
    categories: ['callisto_and_artio', 'chaos_elemental', 'kalphite_queen', 'scorpia', 'venenatis_and_spindel', 'vetion_and_calvarion']
  },
  '7319': {
    name: 'Red boater',
    categories: ['medium_treasure_trails']
  },
  '7321': {
    name: 'Orange boater',
    categories: ['medium_treasure_trails']
  },
  '7323': {
    name: 'Green boater',
    categories: ['medium_treasure_trails']
  },
  '7325': {
    name: 'Blue boater',
    categories: ['medium_treasure_trails']
  },
  '7327': {
    name: 'Black boater',
    categories: ['medium_treasure_trails']
  },
  '7329': {
    name: 'Red firelighter',
    categories: ['shared_treasure_trail_rewards']
  },
  '7330': {
    name: 'Green firelighter',
    categories: ['shared_treasure_trail_rewards']
  },
  '7331': {
    name: 'Blue firelighter',
    categories: ['shared_treasure_trail_rewards']
  },
  '7332': {
    name: 'Black shield (h1)',
    categories: ['easy_treasure_trails']
  },
  '7334': {
    name: 'Adamant shield (h1)',
    categories: ['medium_treasure_trails']
  },
  '7336': {
    name: 'Rune shield (h1)',
    categories: ['hard_treasure_trails']
  },
  '7338': {
    name: 'Black shield (h2)',
    categories: ['easy_treasure_trails']
  },
  '7340': {
    name: 'Adamant shield (h2)',
    categories: ['medium_treasure_trails']
  },
  '7342': {
    name: 'Rune shield (h2)',
    categories: ['hard_treasure_trails']
  },
  '7344': {
    name: 'Black shield (h3)',
    categories: ['easy_treasure_trails']
  },
  '7346': {
    name: 'Adamant shield (h3)',
    categories: ['medium_treasure_trails']
  },
  '7348': {
    name: 'Rune shield (h3)',
    categories: ['hard_treasure_trails']
  },
  '7350': {
    name: 'Black shield (h4)',
    categories: ['easy_treasure_trails']
  },
  '7352': {
    name: 'Adamant shield (h4)',
    categories: ['medium_treasure_trails']
  },
  '7354': {
    name: 'Rune shield (h4)',
    categories: ['hard_treasure_trails']
  },
  '7356': {
    name: 'Black shield (h5)',
    categories: ['easy_treasure_trails']
  },
  '7358': {
    name: 'Adamant shield (h5)',
    categories: ['medium_treasure_trails']
  },
  '7360': {
    name: 'Rune shield (h5)',
    categories: ['hard_treasure_trails']
  },
  '7362': {
    name: 'Studded body (g)',
    categories: ['easy_treasure_trails']
  },
  '7364': {
    name: 'Studded body (t)',
    categories: ['easy_treasure_trails']
  },
  '7366': {
    name: 'Studded chaps (g)',
    categories: ['easy_treasure_trails']
  },
  '7368': {
    name: 'Studded chaps (t)',
    categories: ['easy_treasure_trails']
  },
  '7370': {
    name: "Green d'hide body (g)",
    categories: ['medium_treasure_trails']
  },
  '7372': {
    name: "Green d'hide body (t)",
    categories: ['medium_treasure_trails']
  },
  '7374': {
    name: "Blue d'hide body (g)",
    categories: ['hard_treasure_trails']
  },
  '7376': {
    name: "Blue d'hide body (t)",
    categories: ['hard_treasure_trails']
  },
  '7378': {
    name: "Green d'hide chaps (g)",
    categories: ['medium_treasure_trails']
  },
  '7380': {
    name: "Green d'hide chaps (t)",
    categories: ['medium_treasure_trails']
  },
  '7382': {
    name: "Blue d'hide chaps (g)",
    categories: ['hard_treasure_trails']
  },
  '7384': {
    name: "Blue d'hide chaps (t)",
    categories: ['hard_treasure_trails']
  },
  '7386': {
    name: 'Blue skirt (g)',
    categories: ['easy_treasure_trails']
  },
  '7388': {
    name: 'Blue skirt (t)',
    categories: ['easy_treasure_trails']
  },
  '7390': {
    name: 'Blue wizard robe (g)',
    categories: ['easy_treasure_trails']
  },
  '7392': {
    name: 'Blue wizard robe (t)',
    categories: ['easy_treasure_trails']
  },
  '7394': {
    name: 'Blue wizard hat (g)',
    categories: ['easy_treasure_trails']
  },
  '7396': {
    name: 'Blue wizard hat (t)',
    categories: ['easy_treasure_trails']
  },
  '7398': {
    name: 'Enchanted robe',
    categories: ['hard_treasure_trails']
  },
  '7399': {
    name: 'Enchanted top',
    categories: ['hard_treasure_trails']
  },
  '7400': {
    name: 'Enchanted hat',
    categories: ['hard_treasure_trails']
  },
  '7416': {
    name: 'Mole claw',
    categories: ['giant_mole']
  },
  '7418': {
    name: 'Mole skin',
    categories: ['giant_mole']
  },
  '7536': {
    name: 'Fresh crab claw',
    categories: ['miscellaneous']
  },
  '7538': {
    name: 'Fresh crab shell',
    categories: ['miscellaneous']
  },
  '7592': {
    name: 'Zombie shirt',
    categories: ['random_events']
  },
  '7593': {
    name: 'Zombie trousers',
    categories: ['random_events']
  },
  '7594': {
    name: 'Zombie mask',
    categories: ['random_events']
  },
  '7595': {
    name: 'Zombie gloves',
    categories: ['random_events']
  },
  '7596': {
    name: 'Zombie boots',
    categories: ['random_events']
  },
  '7975': {
    name: 'Crawling hand',
    categories: ['slayer']
  },
  '7976': {
    name: 'Cockatrice head',
    categories: ['slayer']
  },
  '7977': {
    name: 'Basilisk head',
    categories: ['slayer']
  },
  '7978': {
    name: 'Kurask head',
    categories: ['slayer']
  },
  '7979': {
    name: 'Abyssal head',
    categories: ['abyssal_sire', 'slayer']
  },
  '7980': {
    name: 'Kbd heads',
    categories: ['king_black_dragon']
  },
  '7981': {
    name: 'Kq head',
    categories: ['kalphite_queen']
  },
  '7989': {
    name: 'Big bass',
    categories: ['miscellaneous']
  },
  '7991': {
    name: 'Big swordfish',
    categories: ['miscellaneous']
  },
  '7993': {
    name: 'Big shark',
    categories: ['miscellaneous']
  },
  '8839': {
    name: 'Void knight top',
    categories: ['pest_control']
  },
  '8840': {
    name: 'Void knight robe',
    categories: ['pest_control']
  },
  '8841': {
    name: 'Void knight mace',
    categories: ['pest_control']
  },
  '8842': {
    name: 'Void knight gloves',
    categories: ['pest_control']
  },
  '8844': {
    name: 'Bronze defender',
    categories: ['cyclopes']
  },
  '8845': {
    name: 'Iron defender',
    categories: ['cyclopes']
  },
  '8846': {
    name: 'Steel defender',
    categories: ['cyclopes']
  },
  '8847': {
    name: 'Black defender',
    categories: ['cyclopes']
  },
  '8848': {
    name: 'Mithril defender',
    categories: ['cyclopes']
  },
  '8849': {
    name: 'Adamant defender',
    categories: ['cyclopes']
  },
  '8850': {
    name: 'Rune defender',
    categories: ['cyclopes']
  },
  '8901': {
    name: 'Black mask (10)',
    categories: ['slayer']
  },
  '8940': {
    name: 'Rum',
    categories: ['trouble_brewing']
  },
  '8941': {
    name: 'Rum',
    categories: ['trouble_brewing']
  },
  '8952': {
    name: 'Blue naval shirt',
    categories: ['trouble_brewing']
  },
  '8953': {
    name: 'Green naval shirt',
    categories: ['trouble_brewing']
  },
  '8954': {
    name: 'Red naval shirt',
    categories: ['trouble_brewing']
  },
  '8955': {
    name: 'Brown naval shirt',
    categories: ['trouble_brewing']
  },
  '8956': {
    name: 'Black naval shirt',
    categories: ['trouble_brewing']
  },
  '8957': {
    name: 'Purple naval shirt',
    categories: ['trouble_brewing']
  },
  '8958': {
    name: 'Grey naval shirt',
    categories: ['trouble_brewing']
  },
  '8959': {
    name: 'Blue tricorn hat',
    categories: ['trouble_brewing']
  },
  '8960': {
    name: 'Green tricorn hat',
    categories: ['trouble_brewing']
  },
  '8961': {
    name: 'Red tricorn hat',
    categories: ['trouble_brewing']
  },
  '8962': {
    name: 'Brown tricorn hat',
    categories: ['trouble_brewing']
  },
  '8963': {
    name: 'Black tricorn hat',
    categories: ['trouble_brewing']
  },
  '8964': {
    name: 'Purple tricorn hat',
    categories: ['trouble_brewing']
  },
  '8965': {
    name: 'Grey tricorn hat',
    categories: ['trouble_brewing']
  },
  '8966': {
    name: 'Cutthroat flag',
    categories: ['trouble_brewing']
  },
  '8967': {
    name: 'Gilded smile flag',
    categories: ['trouble_brewing']
  },
  '8968': {
    name: 'Bronze fist flag',
    categories: ['trouble_brewing']
  },
  '8969': {
    name: 'Lucky shot flag',
    categories: ['trouble_brewing']
  },
  '8970': {
    name: 'Treasure flag',
    categories: ['trouble_brewing']
  },
  '8971': {
    name: 'Phasmatys flag',
    categories: ['trouble_brewing']
  },
  '8988': {
    name: 'The stuff',
    categories: ['trouble_brewing']
  },
  '8991': {
    name: 'Blue navy slacks',
    categories: ['trouble_brewing']
  },
  '8992': {
    name: 'Green navy slacks',
    categories: ['trouble_brewing']
  },
  '8993': {
    name: 'Red navy slacks',
    categories: ['trouble_brewing']
  },
  '8994': {
    name: 'Brown navy slacks',
    categories: ['trouble_brewing']
  },
  '8995': {
    name: 'Black navy slacks',
    categories: ['trouble_brewing']
  },
  '8996': {
    name: 'Purple navy slacks',
    categories: ['trouble_brewing']
  },
  '8997': {
    name: 'Grey navy slacks',
    categories: ['trouble_brewing']
  },
  '9007': {
    name: 'Right skull half',
    categories: ['miscellaneous']
  },
  '9008': {
    name: 'Left skull half',
    categories: ['miscellaneous']
  },
  '9010': {
    name: 'Top of sceptre',
    categories: ['miscellaneous']
  },
  '9011': {
    name: 'Bottom of sceptre',
    categories: ['miscellaneous']
  },
  '9469': {
    name: 'Grand seed pod',
    categories: ['gnome_restaurant']
  },
  '9470': {
    name: 'Gnome scarf',
    categories: ['gnome_restaurant']
  },
  '9472': {
    name: 'Gnome goggles',
    categories: ['gnome_restaurant']
  },
  '9475': {
    name: 'Mint cake',
    categories: ['gnome_restaurant']
  },
  '10280': {
    name: 'Willow comp bow',
    categories: ['easy_treasure_trails']
  },
  '10282': {
    name: 'Yew comp bow',
    categories: ['medium_treasure_trails']
  },
  '10284': {
    name: 'Magic comp bow',
    categories: ['hard_treasure_trails']
  },
  '10286': {
    name: 'Rune helm (h1)',
    categories: ['hard_treasure_trails']
  },
  '10288': {
    name: 'Rune helm (h2)',
    categories: ['hard_treasure_trails']
  },
  '10290': {
    name: 'Rune helm (h3)',
    categories: ['hard_treasure_trails']
  },
  '10292': {
    name: 'Rune helm (h4)',
    categories: ['hard_treasure_trails']
  },
  '10294': {
    name: 'Rune helm (h5)',
    categories: ['hard_treasure_trails']
  },
  '10296': {
    name: 'Adamant helm (h1)',
    categories: ['medium_treasure_trails']
  },
  '10298': {
    name: 'Adamant helm (h2)',
    categories: ['medium_treasure_trails']
  },
  '10300': {
    name: 'Adamant helm (h3)',
    categories: ['medium_treasure_trails']
  },
  '10302': {
    name: 'Adamant helm (h4)',
    categories: ['medium_treasure_trails']
  },
  '10304': {
    name: 'Adamant helm (h5)',
    categories: ['medium_treasure_trails']
  },
  '10306': {
    name: 'Black helm (h1)',
    categories: ['easy_treasure_trails']
  },
  '10308': {
    name: 'Black helm (h2)',
    categories: ['easy_treasure_trails']
  },
  '10310': {
    name: 'Black helm (h3)',
    categories: ['easy_treasure_trails']
  },
  '10312': {
    name: 'Black helm (h4)',
    categories: ['easy_treasure_trails']
  },
  '10314': {
    name: 'Black helm (h5)',
    categories: ['easy_treasure_trails']
  },
  '10316': {
    name: "Bob's red shirt",
    categories: ['easy_treasure_trails']
  },
  '10318': {
    name: "Bob's blue shirt",
    categories: ['easy_treasure_trails']
  },
  '10320': {
    name: "Bob's green shirt",
    categories: ['easy_treasure_trails']
  },
  '10322': {
    name: "Bob's black shirt",
    categories: ['easy_treasure_trails']
  },
  '10324': {
    name: "Bob's purple shirt",
    categories: ['easy_treasure_trails']
  },
  '10326': {
    name: 'Purple firelighter',
    categories: ['shared_treasure_trail_rewards']
  },
  '10327': {
    name: 'White firelighter',
    categories: ['shared_treasure_trail_rewards']
  },
  '10330': {
    name: '3rd age range top',
    categories: ['third_age']
  },
  '10332': {
    name: '3rd age range legs',
    categories: ['third_age']
  },
  '10334': {
    name: '3rd age range coif',
    categories: ['third_age']
  },
  '10336': {
    name: '3rd age vambraces',
    categories: ['third_age']
  },
  '10338': {
    name: '3rd age robe top',
    categories: ['third_age']
  },
  '10340': {
    name: '3rd age robe',
    categories: ['third_age']
  },
  '10342': {
    name: '3rd age mage hat',
    categories: ['third_age']
  },
  '10344': {
    name: '3rd age amulet',
    categories: ['third_age']
  },
  '10346': {
    name: '3rd age platelegs',
    categories: ['third_age']
  },
  '10348': {
    name: '3rd age platebody',
    categories: ['third_age']
  },
  '10350': {
    name: '3rd age full helmet',
    categories: ['third_age']
  },
  '10352': {
    name: '3rd age kiteshield',
    categories: ['third_age']
  },
  '10354': {
    name: 'Amulet of glory (t4)',
    categories: ['hard_treasure_trails']
  },
  '10364': {
    name: 'Strength amulet (t)',
    categories: ['medium_treasure_trails']
  },
  '10366': {
    name: 'Amulet of magic (t)',
    categories: ['easy_treasure_trails']
  },
  '10368': {
    name: 'Zamorak bracers',
    categories: ['hard_treasure_trails']
  },
  '10370': {
    name: "Zamorak d'hide body",
    categories: ['hard_treasure_trails']
  },
  '10372': {
    name: 'Zamorak chaps',
    categories: ['hard_treasure_trails']
  },
  '10374': {
    name: 'Zamorak coif',
    categories: ['hard_treasure_trails']
  },
  '10376': {
    name: 'Guthix bracers',
    categories: ['hard_treasure_trails']
  },
  '10378': {
    name: "Guthix d'hide body",
    categories: ['hard_treasure_trails']
  },
  '10380': {
    name: 'Guthix chaps',
    categories: ['hard_treasure_trails']
  },
  '10382': {
    name: 'Guthix coif',
    categories: ['hard_treasure_trails']
  },
  '10384': {
    name: 'Saradomin bracers',
    categories: ['hard_treasure_trails']
  },
  '10386': {
    name: "Saradomin d'hide body",
    categories: ['hard_treasure_trails']
  },
  '10388': {
    name: 'Saradomin chaps',
    categories: ['hard_treasure_trails']
  },
  '10390': {
    name: 'Saradomin coif',
    categories: ['hard_treasure_trails']
  },
  '10392': {
    name: 'A powdered wig',
    categories: ['easy_treasure_trails']
  },
  '10394': {
    name: 'Flared trousers',
    categories: ['easy_treasure_trails']
  },
  '10396': {
    name: 'Pantaloons',
    categories: ['easy_treasure_trails']
  },
  '10398': {
    name: 'Sleeping cap',
    categories: ['easy_treasure_trails']
  },
  '10400': {
    name: 'Black elegant shirt',
    categories: ['medium_treasure_trails']
  },
  '10402': {
    name: 'Black elegant legs',
    categories: ['medium_treasure_trails']
  },
  '10404': {
    name: 'Red elegant shirt',
    categories: ['easy_treasure_trails']
  },
  '10406': {
    name: 'Red elegant legs',
    categories: ['easy_treasure_trails']
  },
  '10408': {
    name: 'Blue elegant shirt',
    categories: ['easy_treasure_trails']
  },
  '10410': {
    name: 'Blue elegant legs',
    categories: ['easy_treasure_trails']
  },
  '10412': {
    name: 'Green elegant shirt',
    categories: ['easy_treasure_trails']
  },
  '10414': {
    name: 'Green elegant legs',
    categories: ['easy_treasure_trails']
  },
  '10416': {
    name: 'Purple elegant shirt',
    categories: ['medium_treasure_trails']
  },
  '10418': {
    name: 'Purple elegant legs',
    categories: ['medium_treasure_trails']
  },
  '10420': {
    name: 'White elegant blouse',
    categories: ['medium_treasure_trails']
  },
  '10422': {
    name: 'White elegant skirt',
    categories: ['medium_treasure_trails']
  },
  '10424': {
    name: 'Red elegant blouse',
    categories: ['easy_treasure_trails']
  },
  '10426': {
    name: 'Red elegant skirt',
    categories: ['easy_treasure_trails']
  },
  '10428': {
    name: 'Blue elegant blouse',
    categories: ['easy_treasure_trails']
  },
  '10430': {
    name: 'Blue elegant skirt',
    categories: ['easy_treasure_trails']
  },
  '10432': {
    name: 'Green elegant blouse',
    categories: ['easy_treasure_trails']
  },
  '10434': {
    name: 'Green elegant skirt',
    categories: ['easy_treasure_trails']
  },
  '10436': {
    name: 'Purple elegant blouse',
    categories: ['medium_treasure_trails']
  },
  '10438': {
    name: 'Purple elegant skirt',
    categories: ['medium_treasure_trails']
  },
  '10440': {
    name: 'Saradomin crozier',
    categories: ['hard_treasure_trails']
  },
  '10442': {
    name: 'Guthix crozier',
    categories: ['hard_treasure_trails']
  },
  '10444': {
    name: 'Zamorak crozier',
    categories: ['hard_treasure_trails']
  },
  '10446': {
    name: 'Saradomin cloak',
    categories: ['medium_treasure_trails']
  },
  '10448': {
    name: 'Guthix cloak',
    categories: ['medium_treasure_trails']
  },
  '10450': {
    name: 'Zamorak cloak',
    categories: ['medium_treasure_trails']
  },
  '10452': {
    name: 'Saradomin mitre',
    categories: ['medium_treasure_trails']
  },
  '10454': {
    name: 'Guthix mitre',
    categories: ['medium_treasure_trails']
  },
  '10456': {
    name: 'Zamorak mitre',
    categories: ['medium_treasure_trails']
  },
  '10458': {
    name: 'Saradomin robe top',
    categories: ['easy_treasure_trails']
  },
  '10460': {
    name: 'Zamorak robe top',
    categories: ['easy_treasure_trails']
  },
  '10462': {
    name: 'Guthix robe top',
    categories: ['easy_treasure_trails']
  },
  '10464': {
    name: 'Saradomin robe legs',
    categories: ['easy_treasure_trails']
  },
  '10466': {
    name: 'Guthix robe legs',
    categories: ['easy_treasure_trails']
  },
  '10468': {
    name: 'Zamorak robe legs',
    categories: ['easy_treasure_trails']
  },
  '10470': {
    name: 'Saradomin stole',
    categories: ['hard_treasure_trails']
  },
  '10472': {
    name: 'Guthix stole',
    categories: ['hard_treasure_trails']
  },
  '10474': {
    name: 'Zamorak stole',
    categories: ['hard_treasure_trails']
  },
  '10476': {
    name: 'Purple sweets',
    categories: ['shared_treasure_trail_rewards']
  },
  '10547': {
    name: 'Healer hat',
    categories: ['barbarian_assault']
  },
  '10548': {
    name: 'Fighter hat',
    categories: ['barbarian_assault']
  },
  '10549': {
    name: 'Runner hat',
    categories: ['barbarian_assault']
  },
  '10550': {
    name: 'Ranger hat',
    categories: ['barbarian_assault']
  },
  '10551': {
    name: 'Fighter torso',
    categories: ['barbarian_assault']
  },
  '10552': {
    name: 'Runner boots',
    categories: ['barbarian_assault']
  },
  '10553': {
    name: 'Penance gloves',
    categories: ['barbarian_assault']
  },
  '10555': {
    name: 'Penance skirt',
    categories: ['barbarian_assault']
  },
  '10564': {
    name: 'Granite body',
    categories: ['barbarian_assault']
  },
  '10589': {
    name: 'Granite helm',
    categories: ['barbarian_assault', 'slayer']
  },
  '10933': {
    name: 'Lumberjack boots',
    categories: ['temple_trekking', 'forestry']
  },
  '10939': {
    name: 'Lumberjack top',
    categories: ['temple_trekking', 'forestry']
  },
  '10940': {
    name: 'Lumberjack legs',
    categories: ['temple_trekking', 'forestry']
  },
  '10941': {
    name: 'Lumberjack hat',
    categories: ['temple_trekking', 'forestry']
  },
  '10976': {
    name: 'Long bone',
    categories: ['miscellaneous']
  },
  '10977': {
    name: 'Curved bone',
    categories: ['miscellaneous']
  },
  '11037': {
    name: 'Brine sabre',
    categories: ['slayer']
  },
  '11235': {
    name: 'Dark bow',
    categories: ['slayer']
  },
  '11286': {
    name: 'Draconic visage',
    categories: ['king_black_dragon', 'vorkath', 'slayer']
  },
  '11335': {
    name: 'Dragon full helm',
    categories: ['miscellaneous']
  },
  '11338': {
    name: 'Chewed bones',
    categories: ['miscellaneous']
  },
  '11341': {
    name: 'Ancient page',
    categories: ['my_notes']
  },
  '11342': {
    name: 'Ancient page',
    categories: ['my_notes']
  },
  '11343': {
    name: 'Ancient page',
    categories: ['my_notes']
  },
  '11344': {
    name: 'Ancient page',
    categories: ['my_notes']
  },
  '11345': {
    name: 'Ancient page',
    categories: ['my_notes']
  },
  '11346': {
    name: 'Ancient page',
    categories: ['my_notes']
  },
  '11347': {
    name: 'Ancient page',
    categories: ['my_notes']
  },
  '11348': {
    name: 'Ancient page',
    categories: ['my_notes']
  },
  '11349': {
    name: 'Ancient page',
    categories: ['my_notes']
  },
  '11350': {
    name: 'Ancient page',
    categories: ['my_notes']
  },
  '11351': {
    name: 'Ancient page',
    categories: ['my_notes']
  },
  '11352': {
    name: 'Ancient page',
    categories: ['my_notes']
  },
  '11353': {
    name: 'Ancient page',
    categories: ['my_notes']
  },
  '11354': {
    name: 'Ancient page',
    categories: ['my_notes']
  },
  '11355': {
    name: 'Ancient page',
    categories: ['my_notes']
  },
  '11356': {
    name: 'Ancient page',
    categories: ['my_notes']
  },
  '11357': {
    name: 'Ancient page',
    categories: ['my_notes']
  },
  '11358': {
    name: 'Ancient page',
    categories: ['my_notes']
  },
  '11359': {
    name: 'Ancient page',
    categories: ['my_notes']
  },
  '11360': {
    name: 'Ancient page',
    categories: ['my_notes']
  },
  '11361': {
    name: 'Ancient page',
    categories: ['my_notes']
  },
  '11362': {
    name: 'Ancient page',
    categories: ['my_notes']
  },
  '11363': {
    name: 'Ancient page',
    categories: ['my_notes']
  },
  '11364': {
    name: 'Ancient page',
    categories: ['my_notes']
  },
  '11365': {
    name: 'Ancient page',
    categories: ['my_notes']
  },
  '11366': {
    name: 'Ancient page',
    categories: ['my_notes']
  },
  '11663': {
    name: 'Void mage helm',
    categories: ['pest_control']
  },
  '11664': {
    name: 'Void ranger helm',
    categories: ['pest_control']
  },
  '11665': {
    name: 'Void melee helm',
    categories: ['pest_control']
  },
  '11666': {
    name: 'Void seal(8)',
    categories: ['pest_control']
  },
  '11785': {
    name: 'Armadyl crossbow',
    categories: ['commander_zilyana']
  },
  '11787': {
    name: 'Steam battlestaff',
    categories: ['kril_tsutsaroth']
  },
  '11791': {
    name: 'Staff of the dead',
    categories: ['kril_tsutsaroth']
  },
  '11810': {
    name: 'Armadyl hilt',
    categories: ['kree_arra']
  },
  '11812': {
    name: 'Bandos hilt',
    categories: ['general_graardor']
  },
  '11814': {
    name: 'Saradomin hilt',
    categories: ['commander_zilyana']
  },
  '11816': {
    name: 'Zamorak hilt',
    categories: ['kril_tsutsaroth']
  },
  '11818': {
    name: 'Godsword shard 1',
    categories: ['commander_zilyana', 'general_graardor', 'kree_arra', 'kril_tsutsaroth']
  },
  '11820': {
    name: 'Godsword shard 2',
    categories: ['commander_zilyana', 'general_graardor', 'kree_arra', 'kril_tsutsaroth']
  },
  '11822': {
    name: 'Godsword shard 3',
    categories: ['commander_zilyana', 'general_graardor', 'kree_arra', 'kril_tsutsaroth']
  },
  '11824': {
    name: 'Zamorakian spear',
    categories: ['kril_tsutsaroth']
  },
  '11826': {
    name: 'Armadyl helmet',
    categories: ['kree_arra']
  },
  '11828': {
    name: 'Armadyl chestplate',
    categories: ['kree_arra']
  },
  '11830': {
    name: 'Armadyl chainskirt',
    categories: ['kree_arra']
  },
  '11832': {
    name: 'Bandos chestplate',
    categories: ['general_graardor']
  },
  '11834': {
    name: 'Bandos tassets',
    categories: ['general_graardor']
  },
  '11836': {
    name: 'Bandos boots',
    categories: ['general_graardor']
  },
  '11838': {
    name: 'Saradomin sword',
    categories: ['commander_zilyana']
  },
  '11840': {
    name: 'Dragon boots',
    categories: ['slayer']
  },
  '11849': {
    name: 'Mark of grace',
    categories: ['rooftop_agility']
  },
  '11850': {
    name: 'Graceful hood',
    categories: ['rooftop_agility']
  },
  '11852': {
    name: 'Graceful cape',
    categories: ['rooftop_agility']
  },
  '11854': {
    name: 'Graceful top',
    categories: ['rooftop_agility']
  },
  '11856': {
    name: 'Graceful legs',
    categories: ['rooftop_agility']
  },
  '11858': {
    name: 'Graceful gloves',
    categories: ['rooftop_agility']
  },
  '11860': {
    name: 'Graceful boots',
    categories: ['rooftop_agility']
  },
  '11891': {
    name: 'Saradomin banner',
    categories: ['castle_wars']
  },
  '11892': {
    name: 'Zamorak banner',
    categories: ['castle_wars']
  },
  '11893': {
    name: 'Decorative armour',
    categories: ['castle_wars']
  },
  '11894': {
    name: 'Decorative armour',
    categories: ['castle_wars']
  },
  '11895': {
    name: 'Decorative armour',
    categories: ['castle_wars']
  },
  '11896': {
    name: 'Decorative armour',
    categories: ['castle_wars']
  },
  '11897': {
    name: 'Decorative armour',
    categories: ['castle_wars']
  },
  '11898': {
    name: 'Decorative armour',
    categories: ['castle_wars']
  },
  '11899': {
    name: 'Decorative armour',
    categories: ['castle_wars']
  },
  '11900': {
    name: 'Decorative armour',
    categories: ['castle_wars']
  },
  '11901': {
    name: 'Decorative armour',
    categories: ['castle_wars']
  },
  '11902': {
    name: 'Leaf-bladed sword',
    categories: ['slayer']
  },
  '11905': {
    name: 'Trident of the seas (full)',
    categories: ['kraken']
  },
  '11908': {
    name: 'Uncharged trident',
    categories: ['slayer']
  },
  '11920': {
    name: 'Dragon pickaxe',
    categories: [
      'callisto_and_artio',
      'chaos_elemental',
      'kalphite_queen',
      'king_black_dragon',
      'venenatis_and_spindel',
      'vetion_and_calvarion'
    ]
  },
  '11928': {
    name: 'Odium shard 1',
    categories: ['chaos_fanatic']
  },
  '11929': {
    name: 'Odium shard 2',
    categories: ['crazy_archaeologist']
  },
  '11930': {
    name: 'Odium shard 3',
    categories: ['scorpia']
  },
  '11931': {
    name: 'Malediction shard 1',
    categories: ['chaos_fanatic']
  },
  '11932': {
    name: 'Malediction shard 2',
    categories: ['crazy_archaeologist']
  },
  '11933': {
    name: 'Malediction shard 3',
    categories: ['scorpia']
  },
  '11942': {
    name: 'Ecumenical key',
    categories: ['miscellaneous']
  },
  '11990': {
    name: 'Fedora',
    categories: ['crazy_archaeologist']
  },
  '11995': {
    name: 'Pet chaos elemental',
    categories: ['chaos_elemental', 'chaos_fanatic', 'all_pets']
  },
  '11998': {
    name: 'Smoke battlestaff',
    categories: ['thermonuclear_smoke_devil']
  },
  '12002': {
    name: 'Occult necklace',
    categories: ['thermonuclear_smoke_devil', 'slayer']
  },
  '12004': {
    name: 'Kraken tentacle',
    categories: ['kraken', 'slayer']
  },
  '12007': {
    name: 'Jar of dirt',
    categories: ['kraken']
  },
  '12013': {
    name: 'Prospector helmet',
    categories: ['volcanic_mine', 'motherlode_mine']
  },
  '12014': {
    name: 'Prospector jacket',
    categories: ['volcanic_mine', 'motherlode_mine']
  },
  '12015': {
    name: 'Prospector legs',
    categories: ['volcanic_mine', 'motherlode_mine']
  },
  '12016': {
    name: 'Prospector boots',
    categories: ['volcanic_mine', 'motherlode_mine']
  },
  '12193': {
    name: 'Ancient robe top',
    categories: ['easy_treasure_trails']
  },
  '12195': {
    name: 'Ancient robe legs',
    categories: ['easy_treasure_trails']
  },
  '12197': {
    name: 'Ancient cloak',
    categories: ['medium_treasure_trails']
  },
  '12199': {
    name: 'Ancient crozier',
    categories: ['medium_treasure_trails']
  },
  '12201': {
    name: 'Ancient stole',
    categories: ['medium_treasure_trails']
  },
  '12203': {
    name: 'Ancient mitre',
    categories: ['medium_treasure_trails']
  },
  '12205': {
    name: 'Bronze platebody (g)',
    categories: ['easy_treasure_trails']
  },
  '12207': {
    name: 'Bronze platelegs (g)',
    categories: ['easy_treasure_trails']
  },
  '12209': {
    name: 'Bronze plateskirt (g)',
    categories: ['easy_treasure_trails']
  },
  '12211': {
    name: 'Bronze full helm (g)',
    categories: ['easy_treasure_trails']
  },
  '12213': {
    name: 'Bronze kiteshield (g)',
    categories: ['easy_treasure_trails']
  },
  '12215': {
    name: 'Bronze platebody (t)',
    categories: ['easy_treasure_trails']
  },
  '12217': {
    name: 'Bronze platelegs (t)',
    categories: ['easy_treasure_trails']
  },
  '12219': {
    name: 'Bronze plateskirt (t)',
    categories: ['easy_treasure_trails']
  },
  '12221': {
    name: 'Bronze full helm (t)',
    categories: ['easy_treasure_trails']
  },
  '12223': {
    name: 'Bronze kiteshield (t)',
    categories: ['easy_treasure_trails']
  },
  '12225': {
    name: 'Iron platebody (t)',
    categories: ['easy_treasure_trails']
  },
  '12227': {
    name: 'Iron platelegs (t)',
    categories: ['easy_treasure_trails']
  },
  '12229': {
    name: 'Iron plateskirt (t)',
    categories: ['easy_treasure_trails']
  },
  '12231': {
    name: 'Iron full helm (t)',
    categories: ['easy_treasure_trails']
  },
  '12233': {
    name: 'Iron kiteshield (t)',
    categories: ['easy_treasure_trails']
  },
  '12235': {
    name: 'Iron platebody (g)',
    categories: ['easy_treasure_trails']
  },
  '12237': {
    name: 'Iron platelegs (g)',
    categories: ['easy_treasure_trails']
  },
  '12239': {
    name: 'Iron plateskirt (g)',
    categories: ['easy_treasure_trails']
  },
  '12241': {
    name: 'Iron full helm (g)',
    categories: ['easy_treasure_trails']
  },
  '12243': {
    name: 'Iron kiteshield (g)',
    categories: ['easy_treasure_trails']
  },
  '12245': {
    name: 'Beanie',
    categories: ['easy_treasure_trails']
  },
  '12247': {
    name: 'Red beret',
    categories: ['easy_treasure_trails']
  },
  '12249': {
    name: 'Imp mask',
    categories: ['easy_treasure_trails']
  },
  '12251': {
    name: 'Goblin mask',
    categories: ['easy_treasure_trails']
  },
  '12253': {
    name: 'Armadyl robe top',
    categories: ['easy_treasure_trails']
  },
  '12255': {
    name: 'Armadyl robe legs',
    categories: ['easy_treasure_trails']
  },
  '12257': {
    name: 'Armadyl stole',
    categories: ['medium_treasure_trails']
  },
  '12259': {
    name: 'Armadyl mitre',
    categories: ['medium_treasure_trails']
  },
  '12261': {
    name: 'Armadyl cloak',
    categories: ['medium_treasure_trails']
  },
  '12263': {
    name: 'Armadyl crozier',
    categories: ['medium_treasure_trails']
  },
  '12265': {
    name: 'Bandos robe top',
    categories: ['easy_treasure_trails']
  },
  '12267': {
    name: 'Bandos robe legs',
    categories: ['easy_treasure_trails']
  },
  '12269': {
    name: 'Bandos stole',
    categories: ['medium_treasure_trails']
  },
  '12271': {
    name: 'Bandos mitre',
    categories: ['medium_treasure_trails']
  },
  '12273': {
    name: 'Bandos cloak',
    categories: ['medium_treasure_trails']
  },
  '12275': {
    name: 'Bandos crozier',
    categories: ['medium_treasure_trails']
  },
  '12277': {
    name: 'Mithril platebody (g)',
    categories: ['medium_treasure_trails']
  },
  '12279': {
    name: 'Mithril platelegs (g)',
    categories: ['medium_treasure_trails']
  },
  '12281': {
    name: 'Mithril kiteshield (g)',
    categories: ['medium_treasure_trails']
  },
  '12283': {
    name: 'Mithril full helm (g)',
    categories: ['medium_treasure_trails']
  },
  '12285': {
    name: 'Mithril plateskirt (g)',
    categories: ['medium_treasure_trails']
  },
  '12287': {
    name: 'Mithril platebody (t)',
    categories: ['medium_treasure_trails']
  },
  '12289': {
    name: 'Mithril platelegs (t)',
    categories: ['medium_treasure_trails']
  },
  '12291': {
    name: 'Mithril kiteshield (t)',
    categories: ['medium_treasure_trails']
  },
  '12293': {
    name: 'Mithril full helm (t)',
    categories: ['medium_treasure_trails']
  },
  '12295': {
    name: 'Mithril plateskirt (t)',
    categories: ['medium_treasure_trails']
  },
  '12297': {
    name: 'Black pickaxe',
    categories: ['beginner_treasure_trails', 'easy_treasure_trails']
  },
  '12299': {
    name: 'White headband',
    categories: ['medium_treasure_trails']
  },
  '12301': {
    name: 'Blue headband',
    categories: ['medium_treasure_trails']
  },
  '12303': {
    name: 'Gold headband',
    categories: ['medium_treasure_trails']
  },
  '12305': {
    name: 'Pink headband',
    categories: ['medium_treasure_trails']
  },
  '12307': {
    name: 'Green headband',
    categories: ['medium_treasure_trails']
  },
  '12309': {
    name: 'Pink boater',
    categories: ['medium_treasure_trails']
  },
  '12311': {
    name: 'Purple boater',
    categories: ['medium_treasure_trails']
  },
  '12313': {
    name: 'White boater',
    categories: ['medium_treasure_trails']
  },
  '12315': {
    name: 'Pink elegant shirt',
    categories: ['medium_treasure_trails']
  },
  '12317': {
    name: 'Pink elegant legs',
    categories: ['medium_treasure_trails']
  },
  '12319': {
    name: 'Crier hat',
    categories: ['medium_treasure_trails']
  },
  '12321': {
    name: 'White cavalier',
    categories: ['hard_treasure_trails']
  },
  '12323': {
    name: 'Red cavalier',
    categories: ['hard_treasure_trails']
  },
  '12325': {
    name: 'Navy cavalier',
    categories: ['hard_treasure_trails']
  },
  '12327': {
    name: "Red d'hide body (g)",
    categories: ['hard_treasure_trails']
  },
  '12329': {
    name: "Red d'hide chaps (g)",
    categories: ['hard_treasure_trails']
  },
  '12331': {
    name: "Red d'hide body (t)",
    categories: ['hard_treasure_trails']
  },
  '12333': {
    name: "Red d'hide chaps (t)",
    categories: ['hard_treasure_trails']
  },
  '12335': {
    name: 'Briefcase',
    categories: ['elite_treasure_trails']
  },
  '12337': {
    name: 'Sagacious spectacles',
    categories: ['elite_treasure_trails']
  },
  '12339': {
    name: 'Pink elegant blouse',
    categories: ['medium_treasure_trails']
  },
  '12341': {
    name: 'Pink elegant skirt',
    categories: ['medium_treasure_trails']
  },
  '12343': {
    name: 'Gold elegant blouse',
    categories: ['medium_treasure_trails']
  },
  '12345': {
    name: 'Gold elegant skirt',
    categories: ['medium_treasure_trails']
  },
  '12347': {
    name: 'Gold elegant shirt',
    categories: ['medium_treasure_trails']
  },
  '12349': {
    name: 'Gold elegant legs',
    categories: ['medium_treasure_trails']
  },
  '12351': {
    name: 'Musketeer hat',
    categories: ['elite_treasure_trails']
  },
  '12353': {
    name: 'Monocle',
    categories: ['elite_treasure_trails']
  },
  '12355': {
    name: 'Big pirate hat',
    categories: ['elite_treasure_trails']
  },
  '12357': {
    name: 'Katana',
    categories: ['elite_treasure_trails']
  },
  '12359': {
    name: 'Leprechaun hat',
    categories: ['medium_treasure_trails']
  },
  '12361': {
    name: 'Cat mask',
    categories: ['medium_treasure_trails']
  },
  '12363': {
    name: 'Bronze dragon mask',
    categories: ['elite_treasure_trails']
  },
  '12365': {
    name: 'Iron dragon mask',
    categories: ['elite_treasure_trails']
  },
  '12367': {
    name: 'Steel dragon mask',
    categories: ['elite_treasure_trails']
  },
  '12369': {
    name: 'Mithril dragon mask',
    categories: ['elite_treasure_trails']
  },
  '12371': {
    name: 'Lava dragon mask',
    categories: ['elite_treasure_trails']
  },
  '12373': {
    name: 'Dragon cane',
    categories: ['elite_treasure_trails']
  },
  '12375': {
    name: 'Black cane',
    categories: ['easy_treasure_trails']
  },
  '12377': {
    name: 'Adamant cane',
    categories: ['medium_treasure_trails']
  },
  '12379': {
    name: 'Rune cane',
    categories: ['hard_treasure_trails']
  },
  '12381': {
    name: "Black d'hide body (g)",
    categories: ['elite_treasure_trails']
  },
  '12383': {
    name: "Black d'hide chaps (g)",
    categories: ['elite_treasure_trails']
  },
  '12385': {
    name: "Black d'hide body (t)",
    categories: ['elite_treasure_trails']
  },
  '12387': {
    name: "Black d'hide chaps (t)",
    categories: ['elite_treasure_trails']
  },
  '12389': {
    name: 'Gilded scimitar',
    categories: ['gilded']
  },
  '12391': {
    name: 'Gilded boots',
    categories: ['gilded']
  },
  '12393': {
    name: 'Royal gown top',
    categories: ['elite_treasure_trails']
  },
  '12395': {
    name: 'Royal gown bottom',
    categories: ['elite_treasure_trails']
  },
  '12397': {
    name: 'Royal crown',
    categories: ['elite_treasure_trails']
  },
  '12402': {
    name: 'Nardah teleport',
    categories: ['shared_treasure_trail_rewards']
  },
  '12403': {
    name: 'Digsite teleport',
    categories: ['shared_treasure_trail_rewards']
  },
  '12404': {
    name: 'Feldip hills teleport',
    categories: ['shared_treasure_trail_rewards']
  },
  '12405': {
    name: 'Lunar isle teleport',
    categories: ['shared_treasure_trail_rewards']
  },
  '12406': {
    name: "Mort'ton teleport",
    categories: ['shared_treasure_trail_rewards']
  },
  '12407': {
    name: 'Pest control teleport',
    categories: ['shared_treasure_trail_rewards']
  },
  '12408': {
    name: 'Piscatoris teleport',
    categories: ['shared_treasure_trail_rewards']
  },
  '12409': {
    name: 'Tai bwo wannai teleport',
    categories: ['shared_treasure_trail_rewards']
  },
  '12410': {
    name: 'Iorwerth camp teleport',
    categories: ['shared_treasure_trail_rewards']
  },
  '12411': {
    name: "Mos le'harmless teleport",
    categories: ['shared_treasure_trail_rewards']
  },
  '12422': {
    name: '3rd age wand',
    categories: ['third_age']
  },
  '12424': {
    name: '3rd age bow',
    categories: ['third_age']
  },
  '12426': {
    name: '3rd age longsword',
    categories: ['third_age']
  },
  '12428': {
    name: 'Penguin mask',
    categories: ['medium_treasure_trails']
  },
  '12430': {
    name: 'Afro',
    categories: ['elite_treasure_trails']
  },
  '12432': {
    name: 'Top hat',
    categories: ['elite_treasure_trails']
  },
  '12437': {
    name: '3rd age cloak',
    categories: ['third_age']
  },
  '12439': {
    name: 'Royal sceptre',
    categories: ['elite_treasure_trails']
  },
  '12441': {
    name: 'Musketeer tabard',
    categories: ['elite_treasure_trails']
  },
  '12443': {
    name: 'Musketeer pants',
    categories: ['elite_treasure_trails']
  },
  '12445': {
    name: 'Black skirt (g)',
    categories: ['easy_treasure_trails']
  },
  '12447': {
    name: 'Black skirt (t)',
    categories: ['easy_treasure_trails']
  },
  '12449': {
    name: 'Black wizard robe (g)',
    categories: ['easy_treasure_trails']
  },
  '12451': {
    name: 'Black wizard robe (t)',
    categories: ['easy_treasure_trails']
  },
  '12453': {
    name: 'Black wizard hat (g)',
    categories: ['easy_treasure_trails']
  },
  '12455': {
    name: 'Black wizard hat (t)',
    categories: ['easy_treasure_trails']
  },
  '12460': {
    name: 'Ancient platebody',
    categories: ['hard_treasure_trails']
  },
  '12462': {
    name: 'Ancient platelegs',
    categories: ['hard_treasure_trails']
  },
  '12464': {
    name: 'Ancient plateskirt',
    categories: ['hard_treasure_trails']
  },
  '12466': {
    name: 'Ancient full helm',
    categories: ['hard_treasure_trails']
  },
  '12468': {
    name: 'Ancient kiteshield',
    categories: ['hard_treasure_trails']
  },
  '12470': {
    name: 'Armadyl platebody',
    categories: ['hard_treasure_trails']
  },
  '12472': {
    name: 'Armadyl platelegs',
    categories: ['hard_treasure_trails']
  },
  '12474': {
    name: 'Armadyl plateskirt',
    categories: ['hard_treasure_trails']
  },
  '12476': {
    name: 'Armadyl full helm',
    categories: ['hard_treasure_trails']
  },
  '12478': {
    name: 'Armadyl kiteshield',
    categories: ['hard_treasure_trails']
  },
  '12480': {
    name: 'Bandos platebody',
    categories: ['hard_treasure_trails']
  },
  '12482': {
    name: 'Bandos platelegs',
    categories: ['hard_treasure_trails']
  },
  '12484': {
    name: 'Bandos plateskirt',
    categories: ['hard_treasure_trails']
  },
  '12486': {
    name: 'Bandos full helm',
    categories: ['hard_treasure_trails']
  },
  '12488': {
    name: 'Bandos kiteshield',
    categories: ['hard_treasure_trails']
  },
  '12490': {
    name: 'Ancient bracers',
    categories: ['hard_treasure_trails']
  },
  '12492': {
    name: "Ancient d'hide body",
    categories: ['hard_treasure_trails']
  },
  '12494': {
    name: 'Ancient chaps',
    categories: ['hard_treasure_trails']
  },
  '12496': {
    name: 'Ancient coif',
    categories: ['hard_treasure_trails']
  },
  '12498': {
    name: 'Bandos bracers',
    categories: ['hard_treasure_trails']
  },
  '12500': {
    name: "Bandos d'hide body",
    categories: ['hard_treasure_trails']
  },
  '12502': {
    name: 'Bandos chaps',
    categories: ['hard_treasure_trails']
  },
  '12504': {
    name: 'Bandos coif',
    categories: ['hard_treasure_trails']
  },
  '12506': {
    name: 'Armadyl bracers',
    categories: ['hard_treasure_trails']
  },
  '12508': {
    name: "Armadyl d'hide body",
    categories: ['hard_treasure_trails']
  },
  '12510': {
    name: 'Armadyl chaps',
    categories: ['hard_treasure_trails']
  },
  '12512': {
    name: 'Armadyl coif',
    categories: ['hard_treasure_trails']
  },
  '12514': {
    name: 'Explorer backpack',
    categories: ['hard_treasure_trails']
  },
  '12516': {
    name: 'Pith helmet',
    categories: ['hard_treasure_trails']
  },
  '12518': {
    name: 'Green dragon mask',
    categories: ['hard_treasure_trails']
  },
  '12520': {
    name: 'Blue dragon mask',
    categories: ['hard_treasure_trails']
  },
  '12522': {
    name: 'Red dragon mask',
    categories: ['hard_treasure_trails']
  },
  '12524': {
    name: 'Black dragon mask',
    categories: ['hard_treasure_trails']
  },
  '12526': {
    name: 'Fury ornament kit',
    categories: ['elite_treasure_trails']
  },
  '12528': {
    name: 'Dark infinity colour kit',
    categories: ['elite_treasure_trails']
  },
  '12530': {
    name: 'Light infinity colour kit',
    categories: ['elite_treasure_trails']
  },
  '12532': {
    name: 'Dragon sq shield ornament kit',
    categories: ['elite_treasure_trails']
  },
  '12534': {
    name: 'Dragon chainbody ornament kit',
    categories: ['elite_treasure_trails']
  },
  '12536': {
    name: 'Dragon legs/skirt ornament kit',
    categories: ['elite_treasure_trails']
  },
  '12538': {
    name: 'Dragon full helm ornament kit',
    categories: ['elite_treasure_trails']
  },
  '12540': {
    name: 'Deerstalker',
    categories: ['elite_treasure_trails']
  },
  '12596': {
    name: "Rangers' tunic",
    categories: ['elite_treasure_trails']
  },
  '12598': {
    name: 'Holy sandals',
    categories: ['medium_treasure_trails']
  },
  '12601': {
    name: 'Ring of the gods',
    categories: ['vetion_and_calvarion']
  },
  '12603': {
    name: 'Tyrannical ring',
    categories: ['callisto_and_artio']
  },
  '12605': {
    name: 'Treasonous ring',
    categories: ['venenatis_and_spindel']
  },
  '12613': {
    name: 'Bandos page 1',
    categories: ['shared_treasure_trail_rewards']
  },
  '12614': {
    name: 'Bandos page 2',
    categories: ['shared_treasure_trail_rewards']
  },
  '12615': {
    name: 'Bandos page 3',
    categories: ['shared_treasure_trail_rewards']
  },
  '12616': {
    name: 'Bandos page 4',
    categories: ['shared_treasure_trail_rewards']
  },
  '12617': {
    name: 'Armadyl page 1',
    categories: ['shared_treasure_trail_rewards']
  },
  '12618': {
    name: 'Armadyl page 2',
    categories: ['shared_treasure_trail_rewards']
  },
  '12619': {
    name: 'Armadyl page 3',
    categories: ['shared_treasure_trail_rewards']
  },
  '12620': {
    name: 'Armadyl page 4',
    categories: ['shared_treasure_trail_rewards']
  },
  '12621': {
    name: 'Ancient page 1',
    categories: ['shared_treasure_trail_rewards']
  },
  '12622': {
    name: 'Ancient page 2',
    categories: ['shared_treasure_trail_rewards']
  },
  '12623': {
    name: 'Ancient page 3',
    categories: ['shared_treasure_trail_rewards']
  },
  '12624': {
    name: 'Ancient page 4',
    categories: ['shared_treasure_trail_rewards']
  },
  '12637': {
    name: 'Saradomin halo',
    categories: ['castle_wars']
  },
  '12638': {
    name: 'Zamorak halo',
    categories: ['castle_wars']
  },
  '12639': {
    name: 'Guthix halo',
    categories: ['castle_wars']
  },
  '12642': {
    name: 'Lumberyard teleport',
    categories: ['shared_treasure_trail_rewards']
  },
  '12643': {
    name: 'Pet dagannoth supreme',
    categories: ['dagannoth_kings', 'all_pets']
  },
  '12644': {
    name: 'Pet dagannoth prime',
    categories: ['dagannoth_kings', 'all_pets']
  },
  '12645': {
    name: 'Pet dagannoth rex',
    categories: ['dagannoth_kings', 'all_pets']
  },
  '12646': {
    name: 'Baby mole',
    categories: ['giant_mole', 'all_pets']
  },
  '12647': {
    name: 'Kalphite princess',
    categories: ['kalphite_queen', 'all_pets']
  },
  '12648': {
    name: 'Pet smoke devil',
    categories: ['thermonuclear_smoke_devil', 'all_pets']
  },
  '12649': {
    name: "Pet kree'arra",
    categories: ['kree_arra', 'all_pets']
  },
  '12650': {
    name: 'Pet general graardor',
    categories: ['general_graardor', 'all_pets']
  },
  '12651': {
    name: 'Pet zilyana',
    categories: ['commander_zilyana', 'all_pets']
  },
  '12652': {
    name: "Pet k'ril tsutsaroth",
    categories: ['kril_tsutsaroth', 'all_pets']
  },
  '12653': {
    name: 'Prince black dragon',
    categories: ['king_black_dragon', 'all_pets']
  },
  '12655': {
    name: 'Pet kraken',
    categories: ['kraken', 'all_pets']
  },
  '12703': {
    name: 'Pet penance queen',
    categories: ['barbarian_assault', 'all_pets']
  },
  '12757': {
    name: 'Blue dark bow paint',
    categories: ['last_man_standing']
  },
  '12759': {
    name: 'Green dark bow paint',
    categories: ['last_man_standing']
  },
  '12761': {
    name: 'Yellow dark bow paint',
    categories: ['last_man_standing']
  },
  '12763': {
    name: 'White dark bow paint',
    categories: ['last_man_standing']
  },
  '12769': {
    name: 'Frozen whip mix',
    categories: ['last_man_standing']
  },
  '12771': {
    name: 'Volcanic whip mix',
    categories: ['last_man_standing']
  },
  '12798': {
    name: 'Steam staff upgrade kit',
    categories: ['last_man_standing']
  },
  '12800': {
    name: 'Dragon pickaxe upgrade kit',
    categories: ['last_man_standing']
  },
  '12802': {
    name: 'Ward upgrade kit',
    categories: ['last_man_standing']
  },
  '12816': {
    name: 'Pet dark core',
    categories: ['corporeal_beast', 'all_pets']
  },
  '12819': {
    name: 'Elysian sigil',
    categories: ['corporeal_beast']
  },
  '12823': {
    name: 'Spectral sigil',
    categories: ['corporeal_beast']
  },
  '12827': {
    name: 'Arcane sigil',
    categories: ['corporeal_beast']
  },
  '12829': {
    name: 'Spirit shield',
    categories: ['corporeal_beast']
  },
  '12833': {
    name: 'Holy elixir',
    categories: ['corporeal_beast']
  },
  '12849': {
    name: 'Granite clamp',
    categories: ['last_man_standing']
  },
  '12851': {
    name: 'Amulet of the damned (full)',
    categories: ['shades_of_mortton']
  },
  '12885': {
    name: 'Jar of sand',
    categories: ['kalphite_queen']
  },
  '12921': {
    name: 'Pet snakeling',
    categories: ['zulrah', 'all_pets']
  },
  '12922': {
    name: 'Tanzanite fang',
    categories: ['zulrah']
  },
  '12927': {
    name: 'Serpentine visage',
    categories: ['zulrah']
  },
  '12932': {
    name: 'Magic fang',
    categories: ['zulrah']
  },
  '12934': {
    name: "Zulrah's scales",
    categories: ['zulrah']
  },
  '12936': {
    name: 'Jar of swamp',
    categories: ['zulrah']
  },
  '12938': {
    name: 'Zul-andra teleport',
    categories: ['zulrah']
  },
  '12954': {
    name: 'Dragon defender',
    categories: ['cyclopes']
  },
  '13071': {
    name: 'Chompy chick',
    categories: ['all_pets', 'chompy_bird_hunting', 'miscellaneous']
  },
  '13072': {
    name: 'Elite void top',
    categories: ['pest_control']
  },
  '13073': {
    name: 'Elite void robe',
    categories: ['pest_control']
  },
  '13177': {
    name: 'Venenatis spiderling',
    categories: ['venenatis_and_spindel', 'all_pets']
  },
  '13178': {
    name: 'Callisto cub',
    categories: ['callisto_and_artio', 'all_pets']
  },
  '13179': {
    name: "Vet'ion jr.",
    categories: ['vetion_and_calvarion', 'all_pets']
  },
  '13181': {
    name: "Scorpia's offspring",
    categories: ['scorpia', 'all_pets']
  },
  '13200': {
    name: 'Tanzanite mutagen',
    categories: ['zulrah']
  },
  '13201': {
    name: 'Magma mutagen',
    categories: ['zulrah']
  },
  '13225': {
    name: 'Tzrek-jad',
    categories: ['the_fight_caves', 'all_pets']
  },
  '13226': {
    name: 'Herb sack',
    categories: ['tithe_farm']
  },
  '13227': {
    name: 'Eternal crystal',
    categories: ['cerberus']
  },
  '13229': {
    name: 'Pegasian crystal',
    categories: ['cerberus']
  },
  '13231': {
    name: 'Primordial crystal',
    categories: ['cerberus']
  },
  '13233': {
    name: 'Smouldering stone',
    categories: ['cerberus']
  },
  '13245': {
    name: 'Jar of souls',
    categories: ['cerberus']
  },
  '13247': {
    name: 'Hellpuppy',
    categories: ['cerberus', 'all_pets']
  },
  '13249': {
    name: 'Key master teleport',
    categories: ['cerberus']
  },
  '13256': {
    name: "Saradomin's light",
    categories: ['commander_zilyana']
  },
  '13258': {
    name: 'Angler hat',
    categories: ['fishing_trawler', 'aerial_fishing']
  },
  '13259': {
    name: 'Angler top',
    categories: ['fishing_trawler', 'aerial_fishing']
  },
  '13260': {
    name: 'Angler waders',
    categories: ['fishing_trawler', 'aerial_fishing']
  },
  '13261': {
    name: 'Angler boots',
    categories: ['fishing_trawler', 'aerial_fishing']
  },
  '13262': {
    name: 'Abyssal orphan',
    categories: ['abyssal_sire', 'all_pets']
  },
  '13265': {
    name: 'Abyssal dagger',
    categories: ['abyssal_sire', 'slayer']
  },
  '13274': {
    name: 'Bludgeon spine',
    categories: ['abyssal_sire']
  },
  '13275': {
    name: 'Bludgeon claw',
    categories: ['abyssal_sire']
  },
  '13276': {
    name: 'Bludgeon axon',
    categories: ['abyssal_sire']
  },
  '13277': {
    name: 'Jar of miasma',
    categories: ['abyssal_sire']
  },
  '13320': {
    name: 'Heron',
    categories: ['all_pets', 'skilling_pets']
  },
  '13321': {
    name: 'Rock golem',
    categories: ['all_pets', 'skilling_pets']
  },
  '13322': {
    name: 'Beaver',
    categories: ['all_pets', 'skilling_pets']
  },
  '13324': {
    name: 'Baby chinchompa',
    categories: ['all_pets', 'skilling_pets']
  },
  '13353': {
    name: "Gricoller's can",
    categories: ['tithe_farm']
  },
  '13357': {
    name: 'Shayzien gloves (1)',
    categories: ['shayzien_armour']
  },
  '13358': {
    name: 'Shayzien boots (1)',
    categories: ['shayzien_armour']
  },
  '13359': {
    name: 'Shayzien helm (1)',
    categories: ['shayzien_armour']
  },
  '13360': {
    name: 'Shayzien greaves (1)',
    categories: ['shayzien_armour']
  },
  '13361': {
    name: 'Shayzien platebody (1)',
    categories: ['shayzien_armour']
  },
  '13362': {
    name: 'Shayzien gloves (2)',
    categories: ['shayzien_armour']
  },
  '13363': {
    name: 'Shayzien boots (2)',
    categories: ['shayzien_armour']
  },
  '13364': {
    name: 'Shayzien helm (2)',
    categories: ['shayzien_armour']
  },
  '13365': {
    name: 'Shayzien greaves (2)',
    categories: ['shayzien_armour']
  },
  '13366': {
    name: 'Shayzien platebody (2)',
    categories: ['shayzien_armour']
  },
  '13367': {
    name: 'Shayzien gloves (3)',
    categories: ['shayzien_armour']
  },
  '13368': {
    name: 'Shayzien boots (3)',
    categories: ['shayzien_armour']
  },
  '13369': {
    name: 'Shayzien helm (3)',
    categories: ['shayzien_armour']
  },
  '13370': {
    name: 'Shayzien greaves (3)',
    categories: ['shayzien_armour']
  },
  '13371': {
    name: 'Shayzien platebody (3)',
    categories: ['shayzien_armour']
  },
  '13372': {
    name: 'Shayzien gloves (4)',
    categories: ['shayzien_armour']
  },
  '13373': {
    name: 'Shayzien boots (4)',
    categories: ['shayzien_armour']
  },
  '13374': {
    name: 'Shayzien helm (4)',
    categories: ['shayzien_armour']
  },
  '13375': {
    name: 'Shayzien greaves (4)',
    categories: ['shayzien_armour']
  },
  '13376': {
    name: 'Shayzien platebody (4)',
    categories: ['shayzien_armour']
  },
  '13377': {
    name: 'Shayzien gloves (5)',
    categories: ['shayzien_armour']
  },
  '13378': {
    name: 'Shayzien boots (5)',
    categories: ['shayzien_armour']
  },
  '13379': {
    name: 'Shayzien helm (5)',
    categories: ['shayzien_armour']
  },
  '13380': {
    name: 'Shayzien greaves (5)',
    categories: ['shayzien_armour']
  },
  '13381': {
    name: 'Shayzien body (5)',
    categories: ['shayzien_armour']
  },
  '13392': {
    name: "Xeric's talisman (inert)",
    categories: ['miscellaneous']
  },
  '13576': {
    name: 'Dragon warhammer',
    categories: ['miscellaneous']
  },
  '13639': {
    name: 'Seed box',
    categories: ['tithe_farm']
  },
  '13640': {
    name: "Farmer's boro trousers",
    categories: ['tithe_farm']
  },
  '13642': {
    name: "Farmer's jacket",
    categories: ['tithe_farm']
  },
  '13644': {
    name: "Farmer's boots",
    categories: ['tithe_farm']
  },
  '13646': {
    name: "Farmer's strawhat",
    categories: ['tithe_farm']
  },
  '13652': {
    name: 'Dragon claws',
    categories: ['chambers_of_xeric']
  },
  '19529': {
    name: 'Zenyte shard',
    categories: ['gloughs_experiments']
  },
  '19586': {
    name: 'Light frame',
    categories: ['gloughs_experiments']
  },
  '19589': {
    name: 'Heavy frame',
    categories: ['gloughs_experiments']
  },
  '19592': {
    name: 'Ballista limbs',
    categories: ['gloughs_experiments']
  },
  '19601': {
    name: 'Ballista spring',
    categories: ['gloughs_experiments']
  },
  '19610': {
    name: 'Monkey tail',
    categories: ['gloughs_experiments']
  },
  '19677': {
    name: 'Ancient shard',
    categories: ['skotizo']
  },
  '19679': {
    name: 'Dark totem base',
    categories: ['miscellaneous']
  },
  '19681': {
    name: 'Dark totem middle',
    categories: ['miscellaneous']
  },
  '19683': {
    name: 'Dark totem top',
    categories: ['miscellaneous']
  },
  '19685': {
    name: 'Dark totem',
    categories: ['skotizo']
  },
  '19701': {
    name: 'Jar of darkness',
    categories: ['skotizo']
  },
  '19707': {
    name: 'Amulet of eternal glory',
    categories: ['miscellaneous']
  },
  '19724': {
    name: 'Left eye patch',
    categories: ['master_treasure_trails']
  },
  '19730': {
    name: 'Bloodhound',
    categories: ['master_treasure_trails', 'all_pets']
  },
  '19912': {
    name: 'Zombie head',
    categories: ['hard_treasure_trails']
  },
  '19915': {
    name: 'Cyclops head',
    categories: ['hard_treasure_trails']
  },
  '19918': {
    name: 'Nunchaku',
    categories: ['hard_treasure_trails']
  },
  '19921': {
    name: "Ancient d'hide boots",
    categories: ['hard_treasure_trails']
  },
  '19924': {
    name: "Bandos d'hide boots",
    categories: ['hard_treasure_trails']
  },
  '19927': {
    name: "Guthix d'hide boots",
    categories: ['hard_treasure_trails']
  },
  '19930': {
    name: "Armadyl d'hide boots",
    categories: ['hard_treasure_trails']
  },
  '19933': {
    name: "Saradomin d'hide boots",
    categories: ['hard_treasure_trails']
  },
  '19936': {
    name: "Zamorak d'hide boots",
    categories: ['hard_treasure_trails']
  },
  '19943': {
    name: 'Arceuus scarf',
    categories: ['elite_treasure_trails']
  },
  '19946': {
    name: 'Hosidius scarf',
    categories: ['elite_treasure_trails']
  },
  '19949': {
    name: 'Lovakengj scarf',
    categories: ['elite_treasure_trails']
  },
  '19952': {
    name: 'Piscarilius scarf',
    categories: ['elite_treasure_trails']
  },
  '19955': {
    name: 'Shayzien scarf',
    categories: ['elite_treasure_trails']
  },
  '19958': {
    name: 'Dark tuxedo jacket',
    categories: ['elite_treasure_trails']
  },
  '19961': {
    name: 'Dark tuxedo cuffs',
    categories: ['elite_treasure_trails']
  },
  '19964': {
    name: 'Dark trousers',
    categories: ['elite_treasure_trails']
  },
  '19967': {
    name: 'Dark tuxedo shoes',
    categories: ['elite_treasure_trails']
  },
  '19970': {
    name: 'Dark bow tie',
    categories: ['elite_treasure_trails']
  },
  '19973': {
    name: 'Light tuxedo jacket',
    categories: ['elite_treasure_trails']
  },
  '19976': {
    name: 'Light tuxedo cuffs',
    categories: ['elite_treasure_trails']
  },
  '19979': {
    name: 'Light trousers',
    categories: ['elite_treasure_trails']
  },
  '19982': {
    name: 'Light tuxedo shoes',
    categories: ['elite_treasure_trails']
  },
  '19985': {
    name: 'Light bow tie',
    categories: ['elite_treasure_trails']
  },
  '19988': {
    name: "Blacksmith's helm",
    categories: ['elite_treasure_trails']
  },
  '19991': {
    name: 'Bucket helm',
    categories: ['elite_treasure_trails']
  },
  '19994': {
    name: 'Ranger gloves',
    categories: ['elite_treasure_trails']
  },
  '19997': {
    name: 'Holy wraps',
    categories: ['elite_treasure_trails']
  },
  '20002': {
    name: 'Dragon scimitar ornament kit',
    categories: ['elite_treasure_trails']
  },
  '20005': {
    name: 'Ring of nature',
    categories: ['elite_treasure_trails']
  },
  '20008': {
    name: 'Fancy tiara',
    categories: ['master_treasure_trails']
  },
  '20011': {
    name: '3rd age axe',
    categories: ['third_age']
  },
  '20014': {
    name: '3rd age pickaxe',
    categories: ['third_age']
  },
  '20017': {
    name: 'Ring of coins',
    categories: ['master_treasure_trails']
  },
  '20020': {
    name: 'Lesser demon mask',
    categories: ['master_treasure_trails']
  },
  '20023': {
    name: 'Greater demon mask',
    categories: ['master_treasure_trails']
  },
  '20026': {
    name: 'Black demon mask',
    categories: ['master_treasure_trails']
  },
  '20029': {
    name: 'Old demon mask',
    categories: ['master_treasure_trails']
  },
  '20032': {
    name: 'Jungle demon mask',
    categories: ['master_treasure_trails']
  },
  '20035': {
    name: 'Samurai kasa',
    categories: ['master_treasure_trails']
  },
  '20038': {
    name: 'Samurai shirt',
    categories: ['master_treasure_trails']
  },
  '20041': {
    name: 'Samurai gloves',
    categories: ['master_treasure_trails']
  },
  '20044': {
    name: 'Samurai greaves',
    categories: ['master_treasure_trails']
  },
  '20047': {
    name: 'Samurai boots',
    categories: ['master_treasure_trails']
  },
  '20050': {
    name: 'Obsidian cape (r)',
    categories: ['master_treasure_trails']
  },
  '20053': {
    name: 'Half moon spectacles',
    categories: ['master_treasure_trails']
  },
  '20056': {
    name: 'Ale of the gods',
    categories: ['master_treasure_trails']
  },
  '20059': {
    name: 'Bucket helm (g)',
    categories: ['master_treasure_trails']
  },
  '20062': {
    name: 'Torture ornament kit',
    categories: ['master_treasure_trails']
  },
  '20065': {
    name: 'Occult ornament kit',
    categories: ['master_treasure_trails']
  },
  '20068': {
    name: 'Armadyl godsword ornament kit',
    categories: ['master_treasure_trails']
  },
  '20071': {
    name: 'Bandos godsword ornament kit',
    categories: ['master_treasure_trails']
  },
  '20074': {
    name: 'Saradomin godsword ornament kit',
    categories: ['master_treasure_trails']
  },
  '20077': {
    name: 'Zamorak godsword ornament kit',
    categories: ['master_treasure_trails']
  },
  '20080': {
    name: "Mummy's head",
    categories: ['master_treasure_trails']
  },
  '20083': {
    name: "Mummy's body",
    categories: ['master_treasure_trails']
  },
  '20086': {
    name: "Mummy's hands",
    categories: ['master_treasure_trails']
  },
  '20089': {
    name: "Mummy's legs",
    categories: ['master_treasure_trails']
  },
  '20092': {
    name: "Mummy's feet",
    categories: ['master_treasure_trails']
  },
  '20095': {
    name: 'Ankou mask',
    categories: ['master_treasure_trails']
  },
  '20098': {
    name: 'Ankou top',
    categories: ['master_treasure_trails']
  },
  '20101': {
    name: 'Ankou gloves',
    categories: ['master_treasure_trails']
  },
  '20104': {
    name: "Ankou's leggings",
    categories: ['master_treasure_trails']
  },
  '20107': {
    name: 'Ankou socks',
    categories: ['master_treasure_trails']
  },
  '20110': {
    name: 'Bowl wig',
    categories: ['master_treasure_trails']
  },
  '20113': {
    name: 'Arceuus hood',
    categories: ['master_treasure_trails']
  },
  '20116': {
    name: 'Hosidius hood',
    categories: ['master_treasure_trails']
  },
  '20119': {
    name: 'Lovakengj hood',
    categories: ['master_treasure_trails']
  },
  '20122': {
    name: 'Piscarilius hood',
    categories: ['master_treasure_trails']
  },
  '20125': {
    name: 'Shayzien hood',
    categories: ['master_treasure_trails']
  },
  '20128': {
    name: 'Hood of darkness',
    categories: ['master_treasure_trails']
  },
  '20131': {
    name: 'Robe top of darkness',
    categories: ['master_treasure_trails']
  },
  '20134': {
    name: 'Gloves of darkness',
    categories: ['master_treasure_trails']
  },
  '20137': {
    name: 'Robe bottom of darkness',
    categories: ['master_treasure_trails']
  },
  '20140': {
    name: 'Boots of darkness',
    categories: ['master_treasure_trails']
  },
  '20143': {
    name: 'Dragon defender ornament kit',
    categories: ['master_treasure_trails']
  },
  '20146': {
    name: 'Gilded med helm',
    categories: ['gilded']
  },
  '20149': {
    name: 'Gilded chainbody',
    categories: ['gilded']
  },
  '20152': {
    name: 'Gilded sq shield',
    categories: ['gilded']
  },
  '20155': {
    name: 'Gilded 2h sword',
    categories: ['gilded']
  },
  '20158': {
    name: 'Gilded spear',
    categories: ['gilded']
  },
  '20161': {
    name: 'Gilded hasta',
    categories: ['gilded']
  },
  '20166': {
    name: 'Wooden shield (g)',
    categories: ['easy_treasure_trails']
  },
  '20169': {
    name: 'Steel platebody (g)',
    categories: ['easy_treasure_trails']
  },
  '20172': {
    name: 'Steel platelegs (g)',
    categories: ['easy_treasure_trails']
  },
  '20175': {
    name: 'Steel plateskirt (g)',
    categories: ['easy_treasure_trails']
  },
  '20178': {
    name: 'Steel full helm (g)',
    categories: ['easy_treasure_trails']
  },
  '20181': {
    name: 'Steel kiteshield (g)',
    categories: ['easy_treasure_trails']
  },
  '20184': {
    name: 'Steel platebody (t)',
    categories: ['easy_treasure_trails']
  },
  '20187': {
    name: 'Steel platelegs (t)',
    categories: ['easy_treasure_trails']
  },
  '20190': {
    name: 'Steel plateskirt (t)',
    categories: ['easy_treasure_trails']
  },
  '20193': {
    name: 'Steel full helm (t)',
    categories: ['easy_treasure_trails']
  },
  '20196': {
    name: 'Steel kiteshield (t)',
    categories: ['easy_treasure_trails']
  },
  '20199': {
    name: "Monk's robe top (g)",
    categories: ['easy_treasure_trails']
  },
  '20202': {
    name: "Monk's robe (g)",
    categories: ['easy_treasure_trails']
  },
  '20205': {
    name: "Golden chef's hat",
    categories: ['easy_treasure_trails']
  },
  '20208': {
    name: 'Golden apron',
    categories: ['easy_treasure_trails']
  },
  '20211': {
    name: 'Team cape zero',
    categories: ['easy_treasure_trails']
  },
  '20214': {
    name: 'Team cape x',
    categories: ['easy_treasure_trails']
  },
  '20217': {
    name: 'Team cape i',
    categories: ['easy_treasure_trails']
  },
  '20220': {
    name: 'Holy blessing',
    categories: ['shared_treasure_trail_rewards']
  },
  '20223': {
    name: 'Unholy blessing',
    categories: ['shared_treasure_trail_rewards']
  },
  '20226': {
    name: 'Peaceful blessing',
    categories: ['shared_treasure_trail_rewards']
  },
  '20229': {
    name: 'Honourable blessing',
    categories: ['shared_treasure_trail_rewards']
  },
  '20232': {
    name: 'War blessing',
    categories: ['shared_treasure_trail_rewards']
  },
  '20235': {
    name: 'Ancient blessing',
    categories: ['shared_treasure_trail_rewards']
  },
  '20238': {
    name: 'Charge dragonstone jewellery scroll',
    categories: ['shared_treasure_trail_rewards']
  },
  '20240': {
    name: 'Crier coat',
    categories: ['medium_treasure_trails']
  },
  '20243': {
    name: 'Crier bell',
    categories: ['medium_treasure_trails']
  },
  '20246': {
    name: 'Black leprechaun hat',
    categories: ['medium_treasure_trails']
  },
  '20251': {
    name: 'Arceuus banner',
    categories: ['medium_treasure_trails']
  },
  '20254': {
    name: 'Hosidius banner',
    categories: ['medium_treasure_trails']
  },
  '20257': {
    name: 'Lovakengj banner',
    categories: ['medium_treasure_trails']
  },
  '20260': {
    name: 'Piscarilius banner',
    categories: ['medium_treasure_trails']
  },
  '20263': {
    name: 'Shayzien banner',
    categories: ['medium_treasure_trails']
  },
  '20266': {
    name: 'Black unicorn mask',
    categories: ['medium_treasure_trails']
  },
  '20269': {
    name: 'White unicorn mask',
    categories: ['medium_treasure_trails']
  },
  '20272': {
    name: 'Cabbage round shield',
    categories: ['medium_treasure_trails']
  },
  '20275': {
    name: 'Gnomish firelighter',
    categories: ['medium_treasure_trails']
  },
  '20433': {
    name: 'Evil chicken feet',
    categories: ['miscellaneous']
  },
  '20436': {
    name: 'Evil chicken wings',
    categories: ['miscellaneous']
  },
  '20439': {
    name: 'Evil chicken head',
    categories: ['miscellaneous']
  },
  '20442': {
    name: 'Evil chicken legs',
    categories: ['miscellaneous']
  },
  '20517': {
    name: 'Elder chaos top',
    categories: ['chaos_druids']
  },
  '20520': {
    name: 'Elder chaos robe',
    categories: ['chaos_druids']
  },
  '20590': {
    name: 'Stale baguette',
    categories: ['random_events']
  },
  '20595': {
    name: 'Elder chaos hood',
    categories: ['chaos_druids']
  },
  '20659': {
    name: 'Giant squirrel',
    categories: ['all_pets', 'skilling_pets']
  },
  '20661': {
    name: 'Tangleroot',
    categories: ['all_pets', 'skilling_pets']
  },
  '20663': {
    name: 'Rocky',
    categories: ['all_pets', 'skilling_pets']
  },
  '20665': {
    name: 'Rift guardian',
    categories: ['all_pets', 'skilling_pets']
  },
  '20693': {
    name: 'Phoenix',
    categories: ['wintertodt', 'all_pets']
  },
  '20704': {
    name: 'Pyromancer garb',
    categories: ['wintertodt']
  },
  '20706': {
    name: 'Pyromancer robe',
    categories: ['wintertodt']
  },
  '20708': {
    name: 'Pyromancer hood',
    categories: ['wintertodt']
  },
  '20710': {
    name: 'Pyromancer boots',
    categories: ['wintertodt']
  },
  '20712': {
    name: 'Warm gloves',
    categories: ['wintertodt']
  },
  '20716': {
    name: 'Tome of fire (empty)',
    categories: ['wintertodt']
  },
  '20718': {
    name: 'Burnt page',
    categories: ['wintertodt']
  },
  '20720': {
    name: 'Bruma torch',
    categories: ['wintertodt']
  },
  '20724': {
    name: 'Imbued heart',
    categories: ['slayer']
  },
  '20727': {
    name: 'Leaf-bladed battleaxe',
    categories: ['slayer']
  },
  '20730': {
    name: 'Mist battlestaff',
    categories: ['slayer']
  },
  '20736': {
    name: 'Dust battlestaff',
    categories: ['slayer']
  },
  '20754': {
    name: 'Giant key',
    categories: ['miscellaneous']
  },
  '20756': {
    name: 'Hill giant club',
    categories: ['obor']
  },
  '20849': {
    name: 'Dragon thrownaxe',
    categories: ['alchemical_hydra', 'slayer']
  },
  '20851': {
    name: 'Olmlet',
    categories: ['all_pets', 'chambers_of_xeric']
  },
  '20997': {
    name: 'Twisted bow',
    categories: ['chambers_of_xeric']
  },
  '21000': {
    name: 'Twisted buckler',
    categories: ['chambers_of_xeric']
  },
  '21003': {
    name: 'Elder maul',
    categories: ['chambers_of_xeric']
  },
  '21009': {
    name: 'Dragon sword',
    categories: ['slayer']
  },
  '21012': {
    name: 'Dragon hunter crossbow',
    categories: ['chambers_of_xeric']
  },
  '21015': {
    name: "Dinh's bulwark",
    categories: ['chambers_of_xeric']
  },
  '21018': {
    name: 'Ancestral hat',
    categories: ['chambers_of_xeric']
  },
  '21021': {
    name: 'Ancestral robe top',
    categories: ['chambers_of_xeric']
  },
  '21024': {
    name: 'Ancestral robe bottom',
    categories: ['chambers_of_xeric']
  },
  '21027': {
    name: 'Dark relic',
    categories: ['chambers_of_xeric']
  },
  '21028': {
    name: 'Dragon harpoon',
    categories: ['tempoross', 'slayer']
  },
  '21034': {
    name: 'Dexterous prayer scroll',
    categories: ['chambers_of_xeric']
  },
  '21043': {
    name: 'Kodai insignia',
    categories: ['chambers_of_xeric']
  },
  '21047': {
    name: 'Torn prayer scroll',
    categories: ['chambers_of_xeric']
  },
  '21061': {
    name: 'Graceful hood',
    categories: ['brimhaven_agility_arena']
  },
  '21064': {
    name: 'Graceful cape',
    categories: ['brimhaven_agility_arena']
  },
  '21067': {
    name: 'Graceful top',
    categories: ['brimhaven_agility_arena']
  },
  '21070': {
    name: 'Graceful legs',
    categories: ['brimhaven_agility_arena']
  },
  '21073': {
    name: 'Graceful gloves',
    categories: ['brimhaven_agility_arena']
  },
  '21076': {
    name: 'Graceful boots',
    categories: ['brimhaven_agility_arena']
  },
  '21079': {
    name: 'Arcane prayer scroll',
    categories: ['chambers_of_xeric']
  },
  '21202': {
    name: 'Lava staff upgrade kit',
    categories: ['last_man_standing']
  },
  '21270': {
    name: 'Eternal gem',
    categories: ['slayer']
  },
  '21273': {
    name: 'Skotos',
    categories: ['skotizo', 'all_pets']
  },
  '21275': {
    name: 'Dark claw',
    categories: ['skotizo']
  },
  '21291': {
    name: 'Jal-nib-rek',
    categories: ['the_inferno', 'all_pets']
  },
  '21295': {
    name: 'Infernal cape',
    categories: ['the_inferno']
  },
  '21298': {
    name: 'Obsidian helmet',
    categories: ['tzhaar']
  },
  '21301': {
    name: 'Obsidian platebody',
    categories: ['tzhaar']
  },
  '21304': {
    name: 'Obsidian platelegs',
    categories: ['tzhaar']
  },
  '21343': {
    name: 'Mining gloves',
    categories: ['miscellaneous']
  },
  '21345': {
    name: 'Superior mining gloves',
    categories: ['miscellaneous']
  },
  '21387': {
    name: 'Master scroll book (empty)',
    categories: ['shared_treasure_trail_rewards']
  },
  '21392': {
    name: 'Expert mining gloves',
    categories: ['miscellaneous']
  },
  '21439': {
    name: "Champion's cape",
    categories: ['champions_challenge']
  },
  '21509': {
    name: 'Herbi',
    categories: ['all_pets', 'miscellaneous']
  },
  '21541': {
    name: 'Volcanic mine teleport',
    categories: ['volcanic_mine']
  },
  '21637': {
    name: 'Wyvern visage',
    categories: ['slayer']
  },
  '21643': {
    name: 'Granite boots',
    categories: ['slayer']
  },
  '21646': {
    name: 'Granite longsword',
    categories: ['slayer']
  },
  '21649': {
    name: 'Merfolk trident',
    categories: ['miscellaneous']
  },
  '21664': {
    name: 'Scribbled note',
    categories: ['fossil_island_notes']
  },
  '21666': {
    name: 'Partial note',
    categories: ['fossil_island_notes']
  },
  '21668': {
    name: 'Ancient note',
    categories: ['fossil_island_notes']
  },
  '21670': {
    name: 'Ancient writings',
    categories: ['fossil_island_notes']
  },
  '21672': {
    name: 'Experimental note',
    categories: ['fossil_island_notes']
  },
  '21674': {
    name: 'Paragraph of text',
    categories: ['fossil_island_notes']
  },
  '21676': {
    name: 'Musty smelling note',
    categories: ['fossil_island_notes']
  },
  '21678': {
    name: 'Hastily scrawled note',
    categories: ['fossil_island_notes']
  },
  '21680': {
    name: 'Old writing',
    categories: ['fossil_island_notes']
  },
  '21682': {
    name: 'Short note',
    categories: ['fossil_island_notes']
  },
  '21697': {
    name: 'Ash covered tome',
    categories: ['volcanic_mine']
  },
  '21726': {
    name: 'Granite dust',
    categories: ['grotesque_guardians']
  },
  '21730': {
    name: 'Black tourmaline core',
    categories: ['grotesque_guardians']
  },
  '21736': {
    name: 'Granite gloves',
    categories: ['grotesque_guardians']
  },
  '21739': {
    name: 'Granite ring',
    categories: ['grotesque_guardians']
  },
  '21742': {
    name: 'Granite hammer',
    categories: ['grotesque_guardians']
  },
  '21745': {
    name: 'Jar of stone',
    categories: ['grotesque_guardians']
  },
  '21748': {
    name: 'Noon',
    categories: ['grotesque_guardians', 'all_pets']
  },
  '21802': {
    name: 'Revenant cave teleport',
    categories: ['revenants']
  },
  '21804': {
    name: 'Ancient crystal',
    categories: ['revenants']
  },
  '21807': {
    name: 'Ancient emblem',
    categories: ['revenants']
  },
  '21810': {
    name: 'Ancient totem',
    categories: ['revenants']
  },
  '21813': {
    name: 'Ancient statuette',
    categories: ['revenants']
  },
  '21817': {
    name: 'Bracelet of ethereum (uncharged)',
    categories: ['revenants']
  },
  '21820': {
    name: 'Revenant ether',
    categories: ['revenants']
  },
  '21838': {
    name: 'Shaman mask',
    categories: ['miscellaneous']
  },
  '21907': {
    name: "Vorkath's head",
    categories: ['vorkath']
  },
  '21918': {
    name: 'Dragon limbs',
    categories: ['miscellaneous']
  },
  '21992': {
    name: 'Vorki',
    categories: ['vorkath', 'all_pets']
  },
  '22006': {
    name: 'Skeletal visage',
    categories: ['vorkath']
  },
  '22100': {
    name: 'Dragon metal slice',
    categories: ['miscellaneous']
  },
  '22103': {
    name: 'Dragon metal lump',
    categories: ['miscellaneous']
  },
  '22106': {
    name: 'Jar of decay',
    categories: ['vorkath']
  },
  '22111': {
    name: 'Dragonbone necklace',
    categories: ['vorkath']
  },
  '22231': {
    name: 'Dragon boots ornament kit',
    categories: ['hard_treasure_trails']
  },
  '22236': {
    name: 'Dragon platebody ornament kit',
    categories: ['master_treasure_trails']
  },
  '22239': {
    name: 'Dragon kiteshield ornament kit',
    categories: ['master_treasure_trails']
  },
  '22246': {
    name: 'Anguish ornament kit',
    categories: ['master_treasure_trails']
  },
  '22299': {
    name: 'Ancient medallion',
    categories: ['revenants']
  },
  '22302': {
    name: 'Ancient effigy',
    categories: ['revenants']
  },
  '22305': {
    name: 'Ancient relic',
    categories: ['revenants']
  },
  '22324': {
    name: 'Ghrazi rapier',
    categories: ['theatre_of_blood']
  },
  '22326': {
    name: 'Justiciar faceguard',
    categories: ['theatre_of_blood']
  },
  '22327': {
    name: 'Justiciar chestguard',
    categories: ['theatre_of_blood']
  },
  '22328': {
    name: 'Justiciar legguards',
    categories: ['theatre_of_blood']
  },
  '22372': {
    name: "Bryophyta's essence",
    categories: ['bryophyta']
  },
  '22374': {
    name: 'Mossy key',
    categories: ['miscellaneous']
  },
  '22386': {
    name: 'Metamorphic dust',
    categories: ['chambers_of_xeric']
  },
  '22388': {
    name: "Xeric's guard",
    categories: ['chambers_of_xeric']
  },
  '22390': {
    name: "Xeric's warrior",
    categories: ['chambers_of_xeric']
  },
  '22392': {
    name: "Xeric's sentinel",
    categories: ['chambers_of_xeric']
  },
  '22394': {
    name: "Xeric's general",
    categories: ['chambers_of_xeric']
  },
  '22396': {
    name: "Xeric's champion",
    categories: ['chambers_of_xeric']
  },
  '22446': {
    name: 'Vial of blood',
    categories: ['theatre_of_blood']
  },
  '22473': {
    name: "Lil' zik",
    categories: ['all_pets', 'theatre_of_blood']
  },
  '22477': {
    name: 'Avernic defender hilt',
    categories: ['theatre_of_blood']
  },
  '22481': {
    name: 'Sanguinesti staff (uncharged)',
    categories: ['theatre_of_blood']
  },
  '22486': {
    name: 'Scythe of vitur (uncharged)',
    categories: ['theatre_of_blood']
  },
  '22494': {
    name: 'Sinhaza shroud tier 1',
    categories: ['theatre_of_blood']
  },
  '22496': {
    name: 'Sinhaza shroud tier 2',
    categories: ['theatre_of_blood']
  },
  '22498': {
    name: 'Sinhaza shroud tier 3',
    categories: ['theatre_of_blood']
  },
  '22500': {
    name: 'Sinhaza shroud tier 4',
    categories: ['theatre_of_blood']
  },
  '22502': {
    name: 'Sinhaza shroud tier 5',
    categories: ['theatre_of_blood']
  },
  '22542': {
    name: "Viggora's chainmace (u)",
    categories: ['revenants']
  },
  '22547': {
    name: "Craw's bow (u)",
    categories: ['revenants']
  },
  '22552': {
    name: "Thammaron's sceptre (u)",
    categories: ['revenants']
  },
  '22557': {
    name: 'Amulet of avarice',
    categories: ['revenants']
  },
  '22746': {
    name: 'Ikkle hydra',
    categories: ['alchemical_hydra', 'all_pets']
  },
  '22804': {
    name: 'Dragon knife',
    categories: ['alchemical_hydra', 'slayer']
  },
  '22838': {
    name: 'Fish sack',
    categories: ['aerial_fishing']
  },
  '22840': {
    name: 'Golden tench',
    categories: ['aerial_fishing']
  },
  '22842': {
    name: 'Pearl barbarian rod',
    categories: ['aerial_fishing']
  },
  '22844': {
    name: 'Pearl fly fishing rod',
    categories: ['aerial_fishing']
  },
  '22846': {
    name: 'Pearl fishing rod',
    categories: ['aerial_fishing']
  },
  '22875': {
    name: 'Hespori seed',
    categories: ['miscellaneous']
  },
  '22881': {
    name: 'Attas seed',
    categories: ['hespori']
  },
  '22883': {
    name: 'Iasor seed',
    categories: ['hespori']
  },
  '22885': {
    name: 'Kronos seed',
    categories: ['hespori']
  },
  '22957': {
    name: "Drake's claw",
    categories: ['slayer']
  },
  '22960': {
    name: "Drake's tooth",
    categories: ['slayer']
  },
  '22963': {
    name: 'Broken dragon hasta',
    categories: ['slayer']
  },
  '22966': {
    name: "Hydra's claw",
    categories: ['alchemical_hydra']
  },
  '22969': {
    name: "Hydra's heart",
    categories: ['alchemical_hydra', 'slayer']
  },
  '22971': {
    name: "Hydra's fang",
    categories: ['alchemical_hydra', 'slayer']
  },
  '22973': {
    name: "Hydra's eye",
    categories: ['alchemical_hydra', 'slayer']
  },
  '22983': {
    name: 'Hydra leather',
    categories: ['alchemical_hydra']
  },
  '22988': {
    name: 'Hydra tail',
    categories: ['alchemical_hydra', 'slayer']
  },
  '22994': {
    name: 'Bottomless compost bucket',
    categories: ['hespori']
  },
  '23047': {
    name: 'Mystic hat (dusk)',
    categories: ['slayer']
  },
  '23050': {
    name: 'Mystic robe top (dusk)',
    categories: ['slayer']
  },
  '23053': {
    name: 'Mystic robe bottom (dusk)',
    categories: ['slayer']
  },
  '23056': {
    name: 'Mystic gloves (dusk)',
    categories: ['slayer']
  },
  '23059': {
    name: 'Mystic boots (dusk)',
    categories: ['slayer']
  },
  '23064': {
    name: 'Jar of chemicals',
    categories: ['alchemical_hydra']
  },
  '23077': {
    name: 'Alchemical hydra heads',
    categories: ['alchemical_hydra']
  },
  '23185': {
    name: 'Ring of 3rd age',
    categories: ['mimic']
  },
  '23188': {
    name: "Guthix d'hide shield",
    categories: ['hard_treasure_trails']
  },
  '23191': {
    name: "Saradomin d'hide shield",
    categories: ['hard_treasure_trails']
  },
  '23194': {
    name: "Zamorak d'hide shield",
    categories: ['hard_treasure_trails']
  },
  '23197': {
    name: "Ancient d'hide shield",
    categories: ['hard_treasure_trails']
  },
  '23200': {
    name: "Armadyl d'hide shield",
    categories: ['hard_treasure_trails']
  },
  '23203': {
    name: "Bandos d'hide shield",
    categories: ['hard_treasure_trails']
  },
  '23206': {
    name: 'Dual sai',
    categories: ['hard_treasure_trails']
  },
  '23209': {
    name: 'Rune platebody (h1)',
    categories: ['hard_treasure_trails']
  },
  '23212': {
    name: 'Rune platebody (h2)',
    categories: ['hard_treasure_trails']
  },
  '23215': {
    name: 'Rune platebody (h3)',
    categories: ['hard_treasure_trails']
  },
  '23218': {
    name: 'Rune platebody (h4)',
    categories: ['hard_treasure_trails']
  },
  '23221': {
    name: 'Rune platebody (h5)',
    categories: ['hard_treasure_trails']
  },
  '23224': {
    name: 'Thieving bag',
    categories: ['hard_treasure_trails']
  },
  '23227': {
    name: 'Rune defender ornament kit',
    categories: ['hard_treasure_trails']
  },
  '23232': {
    name: 'Tzhaar-ket-om ornament kit',
    categories: ['hard_treasure_trails']
  },
  '23237': {
    name: 'Berserker necklace ornament kit',
    categories: ['hard_treasure_trails']
  },
  '23242': {
    name: '3rd age plateskirt',
    categories: ['third_age']
  },
  '23246': {
    name: 'Fremennik kilt',
    categories: ['elite_treasure_trails']
  },
  '23249': {
    name: "Rangers' tights",
    categories: ['elite_treasure_trails']
  },
  '23252': {
    name: 'Giant boot',
    categories: ['elite_treasure_trails']
  },
  '23255': {
    name: "Uri's hat",
    categories: ['elite_treasure_trails']
  },
  '23258': {
    name: 'Gilded coif',
    categories: ['gilded']
  },
  '23261': {
    name: "Gilded d'hide vambraces",
    categories: ['gilded']
  },
  '23264': {
    name: "Gilded d'hide body",
    categories: ['gilded']
  },
  '23267': {
    name: "Gilded d'hide chaps",
    categories: ['gilded']
  },
  '23270': {
    name: 'Adamant dragon mask',
    categories: ['elite_treasure_trails']
  },
  '23273': {
    name: 'Rune dragon mask',
    categories: ['elite_treasure_trails']
  },
  '23276': {
    name: 'Gilded pickaxe',
    categories: ['gilded']
  },
  '23279': {
    name: 'Gilded axe',
    categories: ['gilded']
  },
  '23282': {
    name: 'Gilded spade',
    categories: ['gilded']
  },
  '23285': {
    name: 'Mole slippers',
    categories: ['beginner_treasure_trails']
  },
  '23288': {
    name: 'Frog slippers',
    categories: ['beginner_treasure_trails']
  },
  '23291': {
    name: 'Bear feet',
    categories: ['beginner_treasure_trails']
  },
  '23294': {
    name: 'Demon feet',
    categories: ['beginner_treasure_trails']
  },
  '23297': {
    name: 'Jester cape',
    categories: ['beginner_treasure_trails']
  },
  '23300': {
    name: 'Shoulder parrot',
    categories: ['beginner_treasure_trails']
  },
  '23303': {
    name: "Monk's robe top (t)",
    categories: ['beginner_treasure_trails']
  },
  '23306': {
    name: "Monk's robe (t)",
    categories: ['beginner_treasure_trails']
  },
  '23309': {
    name: 'Amulet of defence (t)',
    categories: ['beginner_treasure_trails']
  },
  '23312': {
    name: 'Sandwich lady hat',
    categories: ['beginner_treasure_trails']
  },
  '23315': {
    name: 'Sandwich lady top',
    categories: ['beginner_treasure_trails']
  },
  '23318': {
    name: 'Sandwich lady bottom',
    categories: ['beginner_treasure_trails']
  },
  '23321': {
    name: 'Rune scimitar ornament kit (guthix)',
    categories: ['beginner_treasure_trails']
  },
  '23324': {
    name: 'Rune scimitar ornament kit (saradomin)',
    categories: ['beginner_treasure_trails']
  },
  '23327': {
    name: 'Rune scimitar ornament kit (zamorak)',
    categories: ['beginner_treasure_trails']
  },
  '23336': {
    name: '3rd age druidic robe top',
    categories: ['third_age']
  },
  '23339': {
    name: '3rd age druidic robe bottoms',
    categories: ['third_age']
  },
  '23342': {
    name: '3rd age druidic staff',
    categories: ['third_age']
  },
  '23345': {
    name: '3rd age druidic cloak',
    categories: ['third_age']
  },
  '23348': {
    name: 'Tormented ornament kit',
    categories: ['master_treasure_trails']
  },
  '23351': {
    name: 'Cape of skulls',
    categories: ['easy_treasure_trails']
  },
  '23354': {
    name: 'Amulet of power (t)',
    categories: ['easy_treasure_trails']
  },
  '23357': {
    name: 'Rain bow',
    categories: ['easy_treasure_trails']
  },
  '23360': {
    name: 'Ham joint',
    categories: ['easy_treasure_trails']
  },
  '23363': {
    name: 'Staff of bob the cat',
    categories: ['easy_treasure_trails']
  },
  '23366': {
    name: 'Black platebody (h1)',
    categories: ['easy_treasure_trails']
  },
  '23369': {
    name: 'Black platebody (h2)',
    categories: ['easy_treasure_trails']
  },
  '23372': {
    name: 'Black platebody (h3)',
    categories: ['easy_treasure_trails']
  },
  '23375': {
    name: 'Black platebody (h4)',
    categories: ['easy_treasure_trails']
  },
  '23378': {
    name: 'Black platebody (h5)',
    categories: ['easy_treasure_trails']
  },
  '23381': {
    name: 'Leather body (g)',
    categories: ['easy_treasure_trails']
  },
  '23384': {
    name: 'Leather chaps (g)',
    categories: ['easy_treasure_trails']
  },
  '23389': {
    name: 'Spiked manacles',
    categories: ['medium_treasure_trails']
  },
  '23392': {
    name: 'Adamant platebody (h1)',
    categories: ['medium_treasure_trails']
  },
  '23395': {
    name: 'Adamant platebody (h2)',
    categories: ['medium_treasure_trails']
  },
  '23398': {
    name: 'Adamant platebody (h3)',
    categories: ['medium_treasure_trails']
  },
  '23401': {
    name: 'Adamant platebody (h4)',
    categories: ['medium_treasure_trails']
  },
  '23404': {
    name: 'Adamant platebody (h5)',
    categories: ['medium_treasure_trails']
  },
  '23407': {
    name: 'Wolf mask',
    categories: ['medium_treasure_trails']
  },
  '23410': {
    name: 'Wolf cloak',
    categories: ['medium_treasure_trails']
  },
  '23413': {
    name: 'Climbing boots (g)',
    categories: ['medium_treasure_trails']
  },
  '23495': {
    name: 'Sraracha',
    categories: ['sarachnis', 'all_pets']
  },
  '23517': {
    name: 'Giant egg sac(full)',
    categories: ['sarachnis']
  },
  '23522': {
    name: 'Mask of ranul',
    categories: ['miscellaneous']
  },
  '23525': {
    name: 'Jar of eyes',
    categories: ['sarachnis']
  },
  '23528': {
    name: 'Sarachnis cudgel',
    categories: ['sarachnis']
  },
  '23757': {
    name: 'Youngllef',
    categories: ['the_gauntlet', 'all_pets']
  },
  '23760': {
    name: 'Smolcano',
    categories: ['zalcano', 'all_pets']
  },
  '23859': {
    name: 'Gauntlet cape',
    categories: ['the_gauntlet']
  },
  '23908': {
    name: 'Zalcano shard',
    categories: ['zalcano']
  },
  '23943': {
    name: 'Elven signet',
    categories: ['miscellaneous']
  },
  '23953': {
    name: 'Crystal tool seed',
    categories: ['zalcano']
  },
  '23956': {
    name: 'Crystal armour seed',
    categories: ['the_gauntlet']
  },
  '23959': {
    name: 'Enhanced crystal teleport seed',
    categories: ['miscellaneous']
  },
  '24000': {
    name: 'Crystal grail',
    categories: ['miscellaneous']
  },
  '24034': {
    name: 'Dragonstone full helm',
    categories: ['miscellaneous']
  },
  '24037': {
    name: 'Dragonstone platebody',
    categories: ['miscellaneous']
  },
  '24040': {
    name: 'Dragonstone platelegs',
    categories: ['miscellaneous']
  },
  '24043': {
    name: 'Dragonstone boots',
    categories: ['miscellaneous']
  },
  '24046': {
    name: 'Dragonstone gauntlets',
    categories: ['miscellaneous']
  },
  '24189': {
    name: "Deadman's chest",
    categories: ['last_man_standing']
  },
  '24190': {
    name: "Deadman's legs",
    categories: ['last_man_standing']
  },
  '24191': {
    name: "Deadman's cape",
    categories: ['last_man_standing']
  },
  '24192': {
    name: 'Armadyl halo',
    categories: ['last_man_standing']
  },
  '24195': {
    name: 'Bandos halo',
    categories: ['last_man_standing']
  },
  '24198': {
    name: 'Seren halo',
    categories: ['last_man_standing']
  },
  '24201': {
    name: 'Ancient halo',
    categories: ['last_man_standing']
  },
  '24204': {
    name: 'Brassica halo',
    categories: ['last_man_standing']
  },
  '24207': {
    name: "Victor's cape (1)",
    categories: ['last_man_standing']
  },
  '24209': {
    name: "Victor's cape (10)",
    categories: ['last_man_standing']
  },
  '24211': {
    name: "Victor's cape (50)",
    categories: ['last_man_standing']
  },
  '24213': {
    name: "Victor's cape (100)",
    categories: ['last_man_standing']
  },
  '24215': {
    name: "Victor's cape (500)",
    categories: ['last_man_standing']
  },
  '24217': {
    name: 'Guthixian icon',
    categories: ['last_man_standing']
  },
  '24219': {
    name: 'Swift blade',
    categories: ['last_man_standing']
  },
  '24229': {
    name: 'Ornate maul handle',
    categories: ['last_man_standing']
  },
  '24268': {
    name: 'Basilisk jaw',
    categories: ['slayer']
  },
  '24288': {
    name: "Dagon'hai hat",
    categories: ['slayer']
  },
  '24291': {
    name: "Dagon'hai robe top",
    categories: ['slayer']
  },
  '24294': {
    name: "Dagon'hai robe bottom",
    categories: ['slayer']
  },
  '24417': {
    name: "Inquisitor's mace",
    categories: ['the_nightmare']
  },
  '24419': {
    name: "Inquisitor's great helm",
    categories: ['the_nightmare']
  },
  '24420': {
    name: "Inquisitor's hauberk",
    categories: ['the_nightmare']
  },
  '24421': {
    name: "Inquisitor's plateskirt",
    categories: ['the_nightmare']
  },
  '24422': {
    name: 'Nightmare staff',
    categories: ['the_nightmare']
  },
  '24491': {
    name: 'Little nightmare',
    categories: ['the_nightmare', 'all_pets']
  },
  '24495': {
    name: 'Jar of dreams',
    categories: ['the_nightmare']
  },
  '24511': {
    name: 'Harmonised orb',
    categories: ['the_nightmare']
  },
  '24514': {
    name: 'Volatile orb',
    categories: ['the_nightmare']
  },
  '24517': {
    name: 'Eldritch orb',
    categories: ['the_nightmare']
  },
  '24520': {
    name: "Victor's cape (1000)",
    categories: ['last_man_standing']
  },
  '24670': {
    name: 'Twisted ancestral colour kit',
    categories: ['chambers_of_xeric']
  },
  '24711': {
    name: 'Hallowed mark',
    categories: ['hallowed_sepulchre']
  },
  '24719': {
    name: 'Hallowed token',
    categories: ['hallowed_sepulchre']
  },
  '24721': {
    name: 'Hallowed grapple',
    categories: ['hallowed_sepulchre']
  },
  '24723': {
    name: 'Hallowed focus',
    categories: ['hallowed_sepulchre']
  },
  '24725': {
    name: 'Hallowed symbol',
    categories: ['hallowed_sepulchre']
  },
  '24727': {
    name: 'Hallowed hammer',
    categories: ['hallowed_sepulchre']
  },
  '24729': {
    name: 'Dark dye',
    categories: ['hallowed_sepulchre']
  },
  '24731': {
    name: 'Hallowed ring',
    categories: ['hallowed_sepulchre']
  },
  '24733': {
    name: 'Dark acorn',
    categories: ['hallowed_sepulchre']
  },
  '24740': {
    name: 'Strange old lockpick (full)',
    categories: ['hallowed_sepulchre']
  },
  '24763': {
    name: 'Mysterious page',
    categories: ['hallowed_sepulchre']
  },
  '24765': {
    name: 'Mysterious page',
    categories: ['hallowed_sepulchre']
  },
  '24767': {
    name: 'Mysterious page',
    categories: ['hallowed_sepulchre']
  },
  '24769': {
    name: 'Mysterious page',
    categories: ['hallowed_sepulchre']
  },
  '24771': {
    name: 'Mysterious page',
    categories: ['hallowed_sepulchre']
  },
  '24777': {
    name: 'Blood shard',
    categories: ['slayer']
  },
  '24844': {
    name: 'Ring of endurance (uncharged)',
    categories: ['hallowed_sepulchre']
  },
  '24862': {
    name: 'Karamjan monkey',
    categories: ['monkey_backpacks']
  },
  '24863': {
    name: 'Zombie monkey',
    categories: ['monkey_backpacks']
  },
  '24864': {
    name: 'Maniacal monkey',
    categories: ['monkey_backpacks']
  },
  '24865': {
    name: 'Skeleton monkey',
    categories: ['monkey_backpacks']
  },
  '24866': {
    name: 'Kruk jr',
    categories: ['monkey_backpacks']
  },
  '24867': {
    name: 'Princely monkey',
    categories: ['monkey_backpacks']
  },
  '24868': {
    name: 'Golden armadyl special attack',
    categories: ['last_man_standing']
  },
  '24869': {
    name: 'Golden bandos special attack',
    categories: ['last_man_standing']
  },
  '24870': {
    name: 'Golden saradomin special attack',
    categories: ['last_man_standing']
  },
  '24871': {
    name: 'Golden zamorak special attack',
    categories: ['last_man_standing']
  },
  '24872': {
    name: "Carpenter's helmet",
    categories: ['mahogany_homes']
  },
  '24874': {
    name: "Carpenter's shirt",
    categories: ['mahogany_homes']
  },
  '24876': {
    name: "Carpenter's trousers",
    categories: ['mahogany_homes']
  },
  '24878': {
    name: "Carpenter's boots",
    categories: ['mahogany_homes']
  },
  '24880': {
    name: "Amy's saw",
    categories: ['mahogany_homes']
  },
  '24884': {
    name: 'Supply crate',
    categories: ['mahogany_homes']
  },
  '24885': {
    name: 'Hosidius blueprints',
    categories: ['mahogany_homes']
  },
  '25129': {
    name: "Beekeeper's hat",
    categories: ['random_events']
  },
  '25131': {
    name: "Beekeeper's top",
    categories: ['random_events']
  },
  '25133': {
    name: "Beekeeper's legs",
    categories: ['random_events']
  },
  '25135': {
    name: "Beekeeper's gloves",
    categories: ['random_events']
  },
  '25137': {
    name: "Beekeeper's boots",
    categories: ['random_events']
  },
  '25163': {
    name: 'Decorative boots',
    categories: ['castle_wars']
  },
  '25165': {
    name: 'Decorative full helm',
    categories: ['castle_wars']
  },
  '25167': {
    name: 'Decorative boots',
    categories: ['castle_wars']
  },
  '25169': {
    name: 'Decorative full helm',
    categories: ['castle_wars']
  },
  '25171': {
    name: 'Decorative boots',
    categories: ['castle_wars']
  },
  '25174': {
    name: 'Decorative full helm',
    categories: ['castle_wars']
  },
  '25340': {
    name: 'Ectoplasmator',
    categories: ['soul_wars']
  },
  '25346': {
    name: 'Soul cape',
    categories: ['soul_wars']
  },
  '25348': {
    name: "Lil' creator",
    categories: ['soul_wars', 'all_pets']
  },
  '25434': {
    name: "Zealot's robe top",
    categories: ['shades_of_mortton']
  },
  '25436': {
    name: "Zealot's robe bottom",
    categories: ['shades_of_mortton']
  },
  '25438': {
    name: "Zealot's helm",
    categories: ['shades_of_mortton']
  },
  '25440': {
    name: "Zealot's boots",
    categories: ['shades_of_mortton']
  },
  '25442': {
    name: 'Bronze locks',
    categories: ['shades_of_mortton']
  },
  '25445': {
    name: 'Steel locks',
    categories: ['shades_of_mortton']
  },
  '25448': {
    name: 'Black locks',
    categories: ['shades_of_mortton']
  },
  '25451': {
    name: 'Silver locks',
    categories: ['shades_of_mortton']
  },
  '25454': {
    name: 'Gold locks',
    categories: ['shades_of_mortton']
  },
  '25474': {
    name: "Tree wizards' journal",
    categories: ['shades_of_mortton']
  },
  '25476': {
    name: 'Bloody notes',
    categories: ['shades_of_mortton']
  },
  '25521': {
    name: 'Jar of spirits',
    categories: ['corporeal_beast']
  },
  '25524': {
    name: 'Jar of smoke',
    categories: ['thermonuclear_smoke_devil']
  },
  '25539': {
    name: 'Celestial ring (uncharged)',
    categories: ['shooting_stars']
  },
  '25547': {
    name: 'Star fragment',
    categories: ['shooting_stars']
  },
  '25559': {
    name: 'Big harpoonfish',
    categories: ['tempoross']
  },
  '25576': {
    name: 'Tome of water (empty)',
    categories: ['tempoross']
  },
  '25578': {
    name: 'Soaked page',
    categories: ['tempoross']
  },
  '25580': {
    name: 'Tackle box',
    categories: ['tempoross']
  },
  '25582': {
    name: 'Fish barrel',
    categories: ['tempoross']
  },
  '25588': {
    name: 'Spirit flakes',
    categories: ['tempoross']
  },
  '25592': {
    name: 'Spirit angler headband',
    categories: ['tempoross']
  },
  '25594': {
    name: 'Spirit angler top',
    categories: ['tempoross']
  },
  '25596': {
    name: 'Spirit angler waders',
    categories: ['tempoross']
  },
  '25598': {
    name: 'Spirit angler boots',
    categories: ['tempoross']
  },
  '25602': {
    name: 'Tiny tempor',
    categories: ['tempoross', 'all_pets']
  },
  '25615': {
    name: 'Large water container',
    categories: ['volcanic_mine']
  },
  '25617': {
    name: 'Tea flask',
    categories: ['creature_creation']
  },
  '25618': {
    name: 'Plain satchel',
    categories: ['creature_creation']
  },
  '25619': {
    name: 'Green satchel',
    categories: ['creature_creation']
  },
  '25620': {
    name: 'Red satchel',
    categories: ['creature_creation']
  },
  '25621': {
    name: 'Black satchel',
    categories: ['creature_creation']
  },
  '25622': {
    name: 'Gold satchel',
    categories: ['creature_creation']
  },
  '25623': {
    name: 'Rune satchel',
    categories: ['creature_creation']
  },
  '25624': {
    name: 'Unsired',
    categories: ['abyssal_sire']
  },
  '25627': {
    name: 'Coal bag',
    categories: ['motherlode_mine']
  },
  '25628': {
    name: 'Gem bag',
    categories: ['motherlode_mine']
  },
  '25629': {
    name: 'Plank sack',
    categories: ['mahogany_homes']
  },
  '25630': {
    name: 'Flamtaer bag',
    categories: ['shades_of_mortton']
  },
  '25635': {
    name: 'Barronite head',
    categories: ['camdozaal']
  },
  '25637': {
    name: 'Barronite handle',
    categories: ['camdozaal']
  },
  '25639': {
    name: 'Barronite guard',
    categories: ['camdozaal']
  },
  '25641': {
    name: 'Barronite mace',
    categories: ['camdozaal']
  },
  '25644': {
    name: 'Imcando hammer',
    categories: ['camdozaal']
  },
  '25686': {
    name: 'Ancient globe',
    categories: ['camdozaal']
  },
  '25688': {
    name: 'Ancient ledger',
    categories: ['camdozaal']
  },
  '25690': {
    name: 'Ancient astroscope',
    categories: ['camdozaal']
  },
  '25692': {
    name: 'Ancient treatise',
    categories: ['camdozaal']
  },
  '25694': {
    name: 'Ancient carcanet',
    categories: ['camdozaal']
  },
  '25742': {
    name: 'Holy ornament kit',
    categories: ['theatre_of_blood']
  },
  '25744': {
    name: 'Sanguine ornament kit',
    categories: ['theatre_of_blood']
  },
  '25746': {
    name: 'Sanguine dust',
    categories: ['theatre_of_blood']
  },
  '25837': {
    name: 'Slepey tablet',
    categories: ['the_nightmare']
  },
  '25838': {
    name: 'Parasitic egg',
    categories: ['the_nightmare']
  },
  '25844': {
    name: 'Orange egg sac',
    categories: ['miscellaneous']
  },
  '25846': {
    name: 'Blue egg sac',
    categories: ['miscellaneous']
  },
  '25859': {
    name: 'Enhanced crystal weapon seed',
    categories: ['the_gauntlet']
  },
  '25975': {
    name: 'Lightbearer',
    categories: ['tombs_of_amascut']
  },
  '25985': {
    name: "Elidinis' ward",
    categories: ['tombs_of_amascut']
  },
  '26219': {
    name: "Osmumten's fang",
    categories: ['tombs_of_amascut']
  },
  '26221': {
    name: 'Ancient ceremonial top',
    categories: ['slayer']
  },
  '26223': {
    name: 'Ancient ceremonial legs',
    categories: ['slayer']
  },
  '26225': {
    name: 'Ancient ceremonial mask',
    categories: ['slayer']
  },
  '26227': {
    name: 'Ancient ceremonial gloves',
    categories: ['slayer']
  },
  '26229': {
    name: 'Ancient ceremonial boots',
    categories: ['slayer']
  },
  '26231': {
    name: 'Nihil shard',
    categories: ['nex']
  },
  '26235': {
    name: 'Zaryte vambraces',
    categories: ['nex']
  },
  '26241': {
    name: 'Virtus mask',
    categories: ['duke_sucellus', 'the_leviathan', 'vardorvis', 'the_whisperer']
  },
  '26243': {
    name: 'Virtus robe top',
    categories: ['duke_sucellus', 'the_leviathan', 'vardorvis', 'the_whisperer']
  },
  '26245': {
    name: 'Virtus robe bottom',
    categories: ['duke_sucellus', 'the_leviathan', 'vardorvis', 'the_whisperer']
  },
  '26348': {
    name: 'Nexling',
    categories: ['nex', 'all_pets']
  },
  '26370': {
    name: 'Ancient hilt',
    categories: ['nex']
  },
  '26372': {
    name: 'Nihil horn',
    categories: ['nex']
  },
  '26376': {
    name: 'Torva full helm (damaged)',
    categories: ['nex']
  },
  '26378': {
    name: 'Torva platebody (damaged)',
    categories: ['nex']
  },
  '26380': {
    name: 'Torva platelegs (damaged)',
    categories: ['nex']
  },
  '26792': {
    name: 'Abyssal pearls',
    categories: ['guardians_of_the_rift']
  },
  '26798': {
    name: 'Catalytic talisman',
    categories: ['guardians_of_the_rift']
  },
  '26807': {
    name: 'Abyssal green dye',
    categories: ['guardians_of_the_rift']
  },
  '26809': {
    name: 'Abyssal blue dye',
    categories: ['guardians_of_the_rift']
  },
  '26811': {
    name: 'Abyssal red dye',
    categories: ['guardians_of_the_rift']
  },
  '26813': {
    name: 'Abyssal needle',
    categories: ['guardians_of_the_rift']
  },
  '26815': {
    name: 'Ring of the elements',
    categories: ['guardians_of_the_rift']
  },
  '26820': {
    name: "Guardian's eye",
    categories: ['guardians_of_the_rift']
  },
  '26822': {
    name: 'Abyssal lantern',
    categories: ['guardians_of_the_rift']
  },
  '26850': {
    name: 'Hat of the eye',
    categories: ['guardians_of_the_rift']
  },
  '26852': {
    name: 'Robe top of the eye',
    categories: ['guardians_of_the_rift']
  },
  '26854': {
    name: 'Robe bottoms of the eye',
    categories: ['guardians_of_the_rift']
  },
  '26856': {
    name: 'Boots of the eye',
    categories: ['guardians_of_the_rift']
  },
  '26901': {
    name: 'Abyssal protector',
    categories: ['guardians_of_the_rift', 'all_pets']
  },
  '26908': {
    name: 'Intricate pouch',
    categories: ['guardians_of_the_rift']
  },
  '26910': {
    name: 'Tarnished locket',
    categories: ['guardians_of_the_rift']
  },
  '26912': {
    name: 'Lost bag',
    categories: ['guardians_of_the_rift']
  },
  '26945': {
    name: "Pharaoh's sceptre (uncharged)",
    categories: ['miscellaneous']
  },
  '27012': {
    name: 'Double ammo mould',
    categories: ['giants_foundry']
  },
  '27014': {
    name: "Kovac's grog",
    categories: ['giants_foundry']
  },
  '27017': {
    name: 'Smithing catalyst',
    categories: ['giants_foundry']
  },
  '27019': {
    name: 'Ore pack',
    categories: ['giants_foundry']
  },
  '27021': {
    name: 'Colossal blade',
    categories: ['giants_foundry']
  },
  '27023': {
    name: 'Smiths tunic',
    categories: ['giants_foundry']
  },
  '27025': {
    name: 'Smiths trousers',
    categories: ['giants_foundry']
  },
  '27027': {
    name: 'Smiths boots',
    categories: ['giants_foundry']
  },
  '27029': {
    name: 'Smiths gloves',
    categories: ['giants_foundry']
  },
  '27226': {
    name: 'Masori mask',
    categories: ['tombs_of_amascut']
  },
  '27229': {
    name: 'Masori body',
    categories: ['tombs_of_amascut']
  },
  '27232': {
    name: 'Masori chaps',
    categories: ['tombs_of_amascut']
  },
  '27248': {
    name: 'Cursed phalanx',
    categories: ['tombs_of_amascut']
  },
  '27255': {
    name: 'Menaphite ornament kit',
    categories: ['tombs_of_amascut']
  },
  '27257': {
    name: "Icthlarin's shroud (tier 1)",
    categories: ['tombs_of_amascut']
  },
  '27259': {
    name: "Icthlarin's shroud (tier 2)",
    categories: ['tombs_of_amascut']
  },
  '27261': {
    name: "Icthlarin's shroud (tier 3)",
    categories: ['tombs_of_amascut']
  },
  '27263': {
    name: "Icthlarin's shroud (tier 4)",
    categories: ['tombs_of_amascut']
  },
  '27265': {
    name: "Icthlarin's shroud (tier 5)",
    categories: ['tombs_of_amascut']
  },
  '27277': {
    name: "Tumeken's shadow (uncharged)",
    categories: ['tombs_of_amascut']
  },
  '27279': {
    name: 'Thread of elidinis',
    categories: ['tombs_of_amascut']
  },
  '27283': {
    name: 'Breach of the scarab',
    categories: ['tombs_of_amascut']
  },
  '27285': {
    name: 'Eye of the corruptor',
    categories: ['tombs_of_amascut']
  },
  '27289': {
    name: 'Jewel of the sun',
    categories: ['tombs_of_amascut']
  },
  '27293': {
    name: 'Cache of runes',
    categories: ['tombs_of_amascut']
  },
  '27352': {
    name: "Tumeken's guardian",
    categories: ['all_pets', 'tombs_of_amascut']
  },
  '27372': {
    name: 'Masori crafting kit',
    categories: ['tombs_of_amascut']
  },
  '27377': {
    name: 'Remnant of akkha',
    categories: ['tombs_of_amascut']
  },
  '27378': {
    name: 'Remnant of ba-ba',
    categories: ['tombs_of_amascut']
  },
  '27379': {
    name: 'Remnant of kephri',
    categories: ['tombs_of_amascut']
  },
  '27380': {
    name: 'Remnant of zebak',
    categories: ['tombs_of_amascut']
  },
  '27381': {
    name: 'Ancient remnant',
    categories: ['tombs_of_amascut']
  },
  '27590': {
    name: 'Muphin',
    categories: ['phantom_muspah', 'all_pets']
  },
  '27614': {
    name: 'Venator shard',
    categories: ['phantom_muspah']
  },
  '27616': {
    name: 'Ancient essence',
    categories: ['phantom_muspah']
  },
  '27622': {
    name: 'Frozen cache',
    categories: ['phantom_muspah']
  },
  '27627': {
    name: 'Ancient icon',
    categories: ['phantom_muspah']
  },
  '27643': {
    name: 'Charged ice',
    categories: ['phantom_muspah']
  },
  '27667': {
    name: 'Claws of callisto',
    categories: ['callisto_and_artio']
  },
  '27670': {
    name: 'Fangs of venenatis',
    categories: ['venenatis_and_spindel']
  },
  '27673': {
    name: "Skull of vet'ion",
    categories: ['vetion_and_calvarion']
  },
  '27681': {
    name: 'Voidwaker hilt',
    categories: ['callisto_and_artio']
  },
  '27684': {
    name: 'Voidwaker blade',
    categories: ['vetion_and_calvarion']
  },
  '27687': {
    name: 'Voidwaker gem',
    categories: ['venenatis_and_spindel']
  },
  '27695': {
    name: 'Dragon pickaxe (broken)',
    categories: ['volcanic_mine']
  },
  '28138': {
    name: 'Funky shaped log',
    categories: ['forestry']
  },
  '28140': {
    name: 'Log basket',
    categories: ['forestry']
  },
  '28146': {
    name: 'Log brace',
    categories: ['forestry']
  },
  '28166': {
    name: 'Clothes pouch blueprint',
    categories: ['forestry']
  },
  '28169': {
    name: 'Forestry top',
    categories: ['forestry']
  },
  '28171': {
    name: 'Forestry legs',
    categories: ['forestry']
  },
  '28173': {
    name: 'Forestry hat',
    categories: ['forestry']
  },
  '28175': {
    name: 'Forestry boots',
    categories: ['forestry']
  },
  '28177': {
    name: 'Felling axe handle',
    categories: ['forestry']
  },
  '28246': {
    name: 'Wisp',
    categories: ['the_whisperer', 'all_pets']
  },
  '28248': {
    name: 'Butch',
    categories: ['vardorvis', 'all_pets']
  },
  '28250': {
    name: 'Baron',
    categories: ['duke_sucellus', 'all_pets']
  },
  '28252': {
    name: "Lil'viathan",
    categories: ['the_leviathan', 'all_pets']
  },
  '28268': {
    name: 'Blood quartz',
    categories: ['vardorvis']
  },
  '28270': {
    name: 'Ice quartz',
    categories: ['duke_sucellus']
  },
  '28272': {
    name: 'Shadow quartz',
    categories: ['the_whisperer']
  },
  '28274': {
    name: 'Smoke quartz',
    categories: ['the_leviathan']
  },
  '28276': {
    name: 'Chromium ingot',
    categories: ['duke_sucellus', 'the_leviathan', 'vardorvis', 'the_whisperer']
  },
  '28279': {
    name: 'Bellator vestige',
    categories: ['the_whisperer']
  },
  '28281': {
    name: 'Magus vestige',
    categories: ['duke_sucellus']
  },
  '28283': {
    name: 'Venator vestige',
    categories: ['the_leviathan']
  },
  '28285': {
    name: 'Ultor vestige',
    categories: ['vardorvis']
  },
  '28319': {
    name: "Executioner's axe head",
    categories: ['vardorvis']
  },
  '28321': {
    name: 'Eye of the duke',
    categories: ['duke_sucellus']
  },
  '28323': {
    name: "Siren's staff",
    categories: ['the_whisperer']
  },
  '28325': {
    name: "Leviathan's lure",
    categories: ['the_leviathan']
  },
  '28330': {
    name: 'Strangled tablet',
    categories: ['vardorvis']
  },
  '28331': {
    name: 'Sirenic tablet',
    categories: ['the_whisperer']
  },
  '28332': {
    name: 'Scarred tablet',
    categories: ['the_leviathan']
  },
  '28333': {
    name: 'Frozen tablet',
    categories: ['duke_sucellus']
  },
  '28334': {
    name: "Awakener's orb",
    categories: ['duke_sucellus', 'the_leviathan', 'vardorvis', 'the_whisperer']
  },
  '28583': {
    name: 'Warped sceptre (uncharged)',
    categories: ['slayer']
  },
  '28613': {
    name: 'Cape pouch',
    categories: ['forestry']
  },
  '28616': {
    name: 'Pheasant cape',
    categories: ['forestry']
  },
  '28618': {
    name: 'Pheasant boots',
    categories: ['forestry']
  },
  '28620': {
    name: 'Pheasant hat',
    categories: ['forestry']
  },
  '28622': {
    name: 'Pheasant legs',
    categories: ['forestry']
  },
  '28626': {
    name: 'Fox whistle',
    categories: ['forestry']
  },
  '28630': {
    name: "Twitcher's gloves",
    categories: ['forestry']
  },
  '28655': {
    name: 'Petal garland',
    categories: ['forestry']
  },
  '28663': {
    name: 'Golden pheasant egg',
    categories: ['forestry']
  },
  '28674': {
    name: 'Sturdy beehive parts',
    categories: ['forestry']
  },
  '28798': {
    name: "Scurrius' spine",
    categories: ['scurrius']
  },
  '28801': {
    name: 'Scurry',
    categories: ['scurrius', 'all_pets']
  },
  '28813': {
    name: 'Broken zombie axe',
    categories: ['miscellaneous']
  },
  '28919': {
    name: 'Tonalztics of ralos (uncharged)',
    categories: ['fortis_colosseum']
  },
  '28924': {
    name: 'Sunfire splinters',
    categories: ['fortis_colosseum']
  },
  '28933': {
    name: 'Sunfire fanatic helm',
    categories: ['fortis_colosseum']
  },
  '28936': {
    name: 'Sunfire fanatic cuirass',
    categories: ['fortis_colosseum']
  },
  '28939': {
    name: 'Sunfire fanatic chausses',
    categories: ['fortis_colosseum']
  },
  '28942': {
    name: 'Echo crystal',
    categories: ['fortis_colosseum']
  },
  '28947': {
    name: "Dizana's quiver (uncharged)",
    categories: ['fortis_colosseum']
  },
  '28960': {
    name: 'Smol heredit',
    categories: ['fortis_colosseum', 'all_pets']
  },
  '28962': {
    name: 'Quetzin',
    categories: ['all_pets', 'hunter_guild']
  },
  '28988': {
    name: 'Blue moon spear',
    categories: ['moons_of_peril']
  },
  '28991': {
    name: 'Atlatl dart',
    categories: ['moons_of_peril']
  },
  '28997': {
    name: 'Dual macuahuitl',
    categories: ['moons_of_peril']
  },
  '29000': {
    name: 'Eclipse atlatl',
    categories: ['moons_of_peril']
  },
  '29004': {
    name: 'Eclipse moon chestplate',
    categories: ['moons_of_peril']
  },
  '29007': {
    name: 'Eclipse moon tassets',
    categories: ['moons_of_peril']
  },
  '29010': {
    name: 'Eclipse moon helm',
    categories: ['moons_of_peril']
  },
  '29013': {
    name: 'Blue moon chestplate',
    categories: ['moons_of_peril']
  },
  '29016': {
    name: 'Blue moon tassets',
    categories: ['moons_of_peril']
  },
  '29019': {
    name: 'Blue moon helm',
    categories: ['moons_of_peril']
  },
  '29022': {
    name: 'Blood moon chestplate',
    categories: ['moons_of_peril']
  },
  '29025': {
    name: 'Blood moon tassets',
    categories: ['moons_of_peril']
  },
  '29028': {
    name: 'Blood moon helm',
    categories: ['moons_of_peril']
  },
  '29084': {
    name: 'Sulphur blades',
    categories: ['slayer']
  },
  '29263': {
    name: 'Guild hunter headwear',
    categories: ['hunter_guild']
  },
  '29265': {
    name: 'Guild hunter top',
    categories: ['hunter_guild']
  },
  '29267': {
    name: 'Guild hunter legs',
    categories: ['hunter_guild']
  },
  '29269': {
    name: 'Guild hunter boots',
    categories: ['hunter_guild']
  },
  '29309': {
    name: "Huntsman's kit",
    categories: ['hunter_guild']
  },
  '29455': {
    name: 'Teleport anchoring scroll',
    categories: ['slayer']
  },
  '29482': {
    name: 'Brimhaven voucher',
    categories: ['brimhaven_agility_arena']
  },
  '29574': {
    name: 'Burning claw',
    categories: ['tormented_demons']
  },
  '29580': {
    name: 'Tormented synapse',
    categories: ['tormented_demons']
  },
  '29684': {
    name: 'Guthixian temple teleport',
    categories: ['tormented_demons']
  },
  '29781': {
    name: 'Coagulated venom',
    categories: ['araxxor']
  },
  '29782': {
    name: 'Spider cave teleport',
    categories: ['araxxor']
  },
  '29784': {
    name: 'Araxyte venom sack',
    categories: ['araxxor']
  },
  '29786': {
    name: 'Jar of venom',
    categories: ['araxxor']
  },
  '29788': {
    name: 'Araxyte head',
    categories: ['araxxor']
  },
  '29790': {
    name: 'Noxious point',
    categories: ['araxxor']
  },
  '29792': {
    name: 'Noxious blade',
    categories: ['araxxor']
  },
  '29794': {
    name: 'Noxious pommel',
    categories: ['araxxor']
  },
  '29799': {
    name: 'Araxyte fang',
    categories: ['araxxor']
  },
  '29806': {
    name: 'Aranea boots',
    categories: ['slayer']
  },
  '29836': {
    name: 'Nid',
    categories: ['araxxor', 'all_pets']
  },
  '29889': {
    name: 'Glacial temotli',
    categories: ['amoxliatl', 'slayer']
  },
  '29892': {
    name: 'Pendant of ates (inert)',
    categories: ['amoxliatl', 'slayer']
  },
  '29895': {
    name: 'Frozen tear',
    categories: ['amoxliatl', 'slayer']
  },
  '29974': {
    name: 'Prescription goggles',
    categories: ['mastering_mixology']
  },
  '29978': {
    name: 'Alchemist labcoat',
    categories: ['mastering_mixology']
  },
  '29982': {
    name: 'Alchemist pants',
    categories: ['mastering_mixology']
  },
  '29986': {
    name: 'Alchemist gloves',
    categories: ['mastering_mixology']
  },
  '29992': {
    name: "Alchemist's amulet",
    categories: ['mastering_mixology']
  },
  '29996': {
    name: 'Reagent pouch',
    categories: ['mastering_mixology']
  },
  '30002': {
    name: 'Chugging barrel (disassembled)',
    categories: ['mastering_mixology']
  },
  '30040': {
    name: 'Colossal wyrm teleport scroll',
    categories: ['colossal_wyrm_agility']
  },
  '30042': {
    name: 'Calcified acorn',
    categories: ['colossal_wyrm_agility']
  },
  '30045': {
    name: 'Graceful hood',
    categories: ['colossal_wyrm_agility']
  },
  '30048': {
    name: 'Graceful cape',
    categories: ['colossal_wyrm_agility']
  },
  '30051': {
    name: 'Graceful top',
    categories: ['colossal_wyrm_agility']
  },
  '30054': {
    name: 'Graceful legs',
    categories: ['colossal_wyrm_agility']
  },
  '30057': {
    name: 'Graceful gloves',
    categories: ['colossal_wyrm_agility']
  },
  '30060': {
    name: 'Graceful boots',
    categories: ['colossal_wyrm_agility']
  },
  '30066': {
    name: 'Tome of earth (empty)',
    categories: ['hueycoatl']
  },
  '30068': {
    name: 'Soiled page',
    categories: ['hueycoatl']
  },
  '30070': {
    name: 'Dragon hunter wand',
    categories: ['hueycoatl']
  },
  '30085': {
    name: 'Hueycoatl hide',
    categories: ['hueycoatl']
  },
  '30088': {
    name: 'Huasca seed',
    categories: ['hueycoatl']
  },
  "30111": {
    name: "Helmet of the moon",
    categories: ['miscellaneous']
  },
  '30152': {
    name: 'Huberte',
    categories: ['hueycoatl', 'all_pets']
  },
  '30154': {
    name: 'Moxi',
    categories: ['amoxliatl', 'all_pets']
  },
  '30324': {
    name: 'Broken zombie helmet',
    categories: ['miscellaneous']
  },
  '30622': {
    name: 'Bran',
    categories: ['royal_titans', 'all_pets']
  },
  '30626': {
    name: 'Deadeye prayer scroll',
    categories: ['royal_titans']
  },
  '30627': {
    name: 'Mystic vigour prayer scroll',
    categories: ['royal_titans']
  },
  '30628': {
    name: 'Ice element staff crown',
    categories: ['royal_titans']
  },
  '30631': {
    name: 'Fire element staff crown',
    categories: ['royal_titans']
  },
  '30637': {
    name: 'Giantsoul amulet',
    categories: ['royal_titans']
  },
  '30640': {
    name: 'Desiccated page',
    categories: ['royal_titans']
  },
  '30750': {
    name: 'Oathplate helm',
    categories: ['yama']
  },
  '30753': {
    name: 'Oathplate chest',
    categories: ['yama']
  },
  '30756': {
    name: 'Oathplate legs',
    categories: ['yama']
  },
  '30759': {
    name: 'Soulflame horn',
    categories: ['yama']
  },
  '30763': {
    name: 'Forgotten lockbox',
    categories: ['yama']
  },
  '30765': {
    name: 'Oathplate shards',
    categories: ['yama']
  },
  '30775': {
    name: 'Chasm teleport scroll',
    categories: ['yama']
  },
  '30795': {
    name: 'Barrel of demonic tallow (full)',
    categories: ['yama']
  },
  '30805': {
    name: 'Dossier',
    categories: ['yama']
  },
  '30806': {
    name: 'Rite of vile transference',
    categories: ['yama']
  },
  '30888': {
    name: 'Yami',
    categories: ['yama', 'all_pets']
  },
  '30893': {
    name: 'Jewel of amascut',
    categories: ['tombs_of_amascut']
  },
  '30895': {
    name: 'Steel ring',
    categories: ['deranged_archaeologist']
  },
  '30902': {
    name: 'Minor beginner scroll case',
    categories: ['scroll_cases']
  },
  '30904': {
    name: 'Major beginner scroll case',
    categories: ['scroll_cases']
  },
  '30906': {
    name: 'Minor easy scroll case',
    categories: ['scroll_cases']
  },
  '30908': {
    name: 'Major easy scroll case',
    categories: ['scroll_cases']
  },
  '30910': {
    name: 'Minor medium scroll case',
    categories: ['scroll_cases']
  },
  '30912': {
    name: 'Major medium scroll case',
    categories: ['scroll_cases']
  },
  '30914': {
    name: 'Minor hard scroll case',
    categories: ['scroll_cases']
  },
  '30916': {
    name: 'Major hard scroll case',
    categories: ['scroll_cases']
  },
  '30918': {
    name: 'Minor elite scroll case',
    categories: ['scroll_cases']
  },
  '30920': {
    name: 'Major elite scroll case',
    categories: ['scroll_cases']
  },
  '30922': {
    name: 'Minor master scroll case',
    categories: ['scroll_cases']
  },
  '30924': {
    name: 'Major master scroll case',
    categories: ['scroll_cases']
  },
  '30926': {
    name: 'Mimic scroll case',
    categories: ['scroll_cases']
  },
  '30957': {
    name: 'Earthbound tecpatl',
    categories: ['slayer']
  },
  '31032': {
    name: 'Ent branch',
    categories: ['vale_totems']
  },
  '31034': {
    name: 'Greenman mask',
    categories: ['vale_totems']
  },
  '31043': {
    name: 'Fletching knife',
    categories: ['vale_totems']
  },
  '31052': {
    name: 'Bow string spool',
    categories: ['vale_totems']
  },
  '31081': {
    name: 'Antler guard',
    categories: ['slayer']
  },
  '31084': {
    name: "Alchemist's signet",
    categories: ['slayer']
  },
  '31086': {
    name: 'Broken antler',
    categories: ['slayer']
  },
  '31088': {
    name: 'Avernic treads',
    categories: ['doom_of_mokhaiotl']
  },
  '31099': {
    name: 'Mokhaiotl waystone',
    categories: ['doom_of_mokhaiotl']
  },
  '31109': {
    name: 'Mokhaiotl cloth',
    categories: ['doom_of_mokhaiotl']
  },
  '31111': {
    name: 'Demon tear',
    categories: ['doom_of_mokhaiotl']
  },
  '31115': {
    name: 'Eye of ayak (uncharged)',
    categories: ['doom_of_mokhaiotl']
  },
  '31130': {
    name: 'Dom',
    categories: ['doom_of_mokhaiotl', 'all_pets']
  },
  
};
