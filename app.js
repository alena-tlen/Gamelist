/* ============================================================
   ДАННЫЕ ИГР
   ============================================================ */
const GAMES_DATA = [
  // --- ASSASSIN'S CREED ---
  { series: "Серия Assassin's Creed (хронология Эцио)", icon: "🗡️", games: [
    { title: "Assassin's Creed Brotherhood", time: "~15–20 ч", hours: 18, desc: "Продолжение истории Эцио Аудиторе в Риме. Создаёт братство ассасинов и мстит за семью.", tags: ["Экшен","Стелс","Одиночная"] },
    { title: "Assassin's Creed Brotherhood by xatab", time: "~15–20 ч", hours: 18, desc: "Та же игра в виде репака от xatab.", tags: ["Экшен","Стелс","Одиночная"] },
    { title: "Assassin's Creed - Revelations", time: "~8–20 ч", hours: 14, desc: "Завершение трилогии Эцио. Константинополь, печати памяти и финал истории Десмонда.", tags: ["Экшен","Стелс","Одиночная"] },
    { title: "Assassin's Creed III Remastered by xatab", time: "~20–30 ч", hours: 25, desc: "История Коннора во время Американской революции. Ремастер со всеми DLC.", tags: ["Экшен","Стелс","Одиночная"] },
  ]},
  // --- CRASH BANDICOOT ---
  { series: "Серия Crash Bandicoot", icon: "🦊", games: [
    { title: "Crash Bandicoot N Sane Trilogy", time: "~27 ч", hours: 27, desc: "Ремастер первых трёх классических платформеров о безумном бандикуте.", tags: ["Платформер","Одиночная"] },
    { title: "Crash Bandicoot 4 - It's About Time", time: "~9 ч", hours: 9, desc: "Прямое продолжение оригинальной трилогии с квантовыми масками.", tags: ["Платформер","Одиночная"] },
  ]},
  // --- SPYRO ---
  { series: "Серия Spyro", icon: "🐉", games: [
    { title: "Spyro Reignited Trilogy", time: "~20–40 ч", hours: 30, desc: "Сборник из трёх игр о драконе Спайро, полностью перерисованный.", tags: ["Платформер","Одиночная"] },
  ]},
  // --- SKYRIM ---
  { series: "The Elder Scrolls", icon: "⚔️", games: [
    { title: "The Elder Scrolls V - Skyrim", time: "∞ Бесконечно", hours: 0, infinite: true, desc: "Культовая RPG в открытом мире Скайрима. Сотни часов контента.", tags: ["RPG","Открытый мир","Одиночная"] },
  ]},
  // --- CIVILIZATION ---
  { series: "Sid Meier's Civilization", icon: "🏛️", games: [
    { title: "Sid Meier's Civilization V", time: "∞ Бесконечно", infinite: true, desc: "Глобальная пошаговая стратегия. Одна партия — десятки часов.", tags: ["Стратегия","Пошаговая"] },
    { title: "Civilization VI [Repack] by Wanterlude", time: "∞ Бесконечно", infinite: true, desc: "Продолжение с районами городов и раздельным деревом технологий.", tags: ["Стратегия","Пошаговая"] },
  ]},
  // --- DYING LIGHT ---
  { series: "Dying Light", icon: "🧟", games: [
    { title: "Dying Light", time: "~24–50 ч", hours: 35, desc: "Паркур и зомби в открытом мире Харрана. Кооператив до 4 игроков.", tags: ["Экшен","Выживание","Кооператив"] },
  ]},
  // --- GUARDIANS ---
  { series: "Marvel's Guardians of the Galaxy", icon: "🚀", games: [
    { title: "Marvel's Guardians of the Galaxy", time: "~15–20 ч", hours: 17, desc: "Сюжетное приключение с отличным юмором и саундтреком 80-х.", tags: ["Экшен","Приключение","Одиночная"] },
  ]},
  // --- STRAY ---
  { series: "Stray", icon: "🐱", games: [
    { title: "Stray", time: "~8 ч", hours: 8, desc: "Атмосферное приключение за кота в киберпанковом городе роботов.", tags: ["Приключение","Головоломка","Одиночная"] },
    { title: "Stray [FitGirl Repack]", time: "~8 ч", hours: 8, desc: "Та же игра в компактном репаке.", tags: ["Приключение","Головоломка","Одиночная"] },
  ]},
  // --- BIOSHOCK ---
  { series: "BioShock", icon: "🌊", games: [
    { title: "[R.G. Mechanics] BioShock", time: "~10–12 ч", hours: 11, desc: "Классический шутер с иммерсив-симом в подводном городе Восторг.", tags: ["Шутер","Иммерсив-сим","Одиночная"] },
  ]},
  // --- FAR CRY ---
  { series: "Far Cry", icon: "🏝️", games: [
    { title: "[R.G. Mechanics] Far Cry 3", time: "~15–20 ч", hours: 17, desc: "Открытый мир тропического острова, Ваас и охота за выживание.", tags: ["Шутер","Открытый мир","Кооператив"] },
  ]},
  // --- WASTELAND ---
  { series: "Wasteland", icon: "☢️", games: [
    { title: "[R.G. Mechanics] Wasteland 2", time: "~50–60 ч", hours: 55, desc: "Постъядерная тактическая RPG с отрядом рейнджеров в Аризоне.", tags: ["RPG","Тактическая","Одиночная"] },
  ]},
  // --- A PLAGUE TALE ---
  { series: "A Plague Tale", icon: "🐀", games: [
    { title: "A Plague Tale Innocence by xatab", time: "~12–15 ч", hours: 13, desc: "Средневековая история о детях, выживающих среди чумы и крыс.", tags: ["Приключение","Стелс","Одиночная"] },
  ]},
  // --- AMNESIA ---
  { series: "Amnesia", icon: "🕯️", games: [
    { title: "Amnesia", time: "~7–10 ч", hours: 8, desc: "Хоррор от первого лица. Нельзя сражаться — только прятаться.", tags: ["Хоррор","Выживание","Одиночная"] },
  ]},
  // --- ATOM RPG ---
  { series: "ATOM RPG", icon: "🔫", games: [
    { title: "ATOM RPG [FitGirl Repack]", time: "~80+ ч", hours: 80, desc: "Постапокалиптическая RPG в духе Fallout с советским колоритом.", tags: ["RPG","Постапокалипсис","Одиночная"] },
    { title: "ATOM RPG Trudograd [Repack by seleZen]", time: "~30–40 ч", hours: 35, desc: "Самостоятельное дополнение-сиквел в городе Трудоград.", tags: ["RPG","Постапокалипсис","Одиночная"] },
  ]},
  // --- BAROTRAUMA ---
  { series: "Barotrauma", icon: "🚢", games: [
    { title: "Barotrauma.1.13.4.0.7z", time: "∞ Бесконечно", infinite: true, desc: "Кооперативная песочница в подводной лодке на спутнике Юпитера.", tags: ["Выживание","Кооператив","Мультиплеер"] },
  ]},
  // --- BASTION ---
  { series: "Bastion", icon: "🏰", games: [
    { title: "Bastion_[R.G. Catalyst]", time: "~6–8 ч", hours: 7, desc: "Изометрический экшен с повествованием от рассказчика.", tags: ["Экшен","RPG","Одиночная"] },
  ]},
  // --- BREATHEDGE ---
  { series: "Breathedge", icon: "🐔", games: [
    { title: "Breathedge [FitGirl Repack]", time: "~10–15 ч", hours: 12, desc: "Космическое выживание с чёрным юмором и курицей в скафандре.", tags: ["Выживание","Приключение","Одиночная"] },
  ]},
  // --- CAIRN ---
  { series: "Cairn", icon: "🧗", games: [
    { title: "Cairn-InsaneRamZes", time: "~15 ч", hours: 15, desc: "Симулятор скалолазания с реалистичной физикой.", tags: ["Симулятор","Выживание","Одиночная"] },
  ]},
  // --- CYBER KNIGHTS ---
  { series: "Cyber Knights", icon: "🌆", games: [
    { title: "Cyber Knights - Flashpoint [FitGirl Repack]", time: "~15–20 ч", hours: 17, desc: "Пошаговая тактическая RPG о наёмниках в киберпанк-будущем.", tags: ["RPG","Тактическая","Одиночная"] },
  ]},
  // --- DEAD SPACE ---
  { series: "Dead Space", icon: "👽", games: [
    { title: "Dead Space [FitGirl Repack]", time: "~15–20 ч", hours: 17, desc: "Хоррор-шутер на корабле «Ишимура» с некроморфами.", tags: ["Хоррор","Шутер","Одиночная"] },
  ]},
  // --- DEATH'S DOOR ---
  { series: "Death's Door", icon: "🐦‍⬛", games: [
    { title: "Deaths_Door_1.1.5_(50052)_win_gog", time: "~10–12 ч", hours: 11, desc: "Изометрический экшен о вороне, собирающем души.", tags: ["Экшен","Souls-like","Одиночная"] },
  ]},
  // --- DISHONORED ---
  { series: "Dishonored", icon: "🎭", games: [
    { title: "Dishonored - Game of the Year Edition.by xatab", time: "~12–20 ч", hours: 16, desc: "Стелс-экшен в стимпанк-мире. Можно пройти без убийств.", tags: ["Стелс","Экшен","Одиночная"] },
  ]},
  // --- DYSMANTLE ---
  { series: "DYSMANTLE", icon: "🔨", games: [
    { title: "DYSMANTLE (2021)", time: "∞ Бесконечно", infinite: true, desc: "Постапокалиптический выживач с разрушением всего на свете.", tags: ["Выживание","Экшен","Кооператив"] },
  ]},
  // --- ELDEN RING ---
  { series: "ELDEN RING", icon: "💀", games: [
    { title: "ELDEN RING (2022)", time: "∞ Бесконечно", infinite: true, desc: "Масштабная souls-like RPG в открытом мире. Игра года 2022.", tags: ["RPG","Souls-like","Открытый мир"] },
  ]},
  // --- ENCASED ---
  { series: "Encased", icon: "🔬", games: [
    { title: "Encased [FitGirl Repack]", time: "~30–40 ч", hours: 35, desc: "Изометрическая RPG в ретро-футуристическом мире.", tags: ["RPG","Постапокалипсис","Одиночная"] },
  ]},
  // --- ERIKSHOLM ---
  { series: "Eriksholm", icon: "🌲", games: [
    { title: "Eriksholm The Stolen Dream (2025)", time: "—", unknown: true, desc: "Сюжетное приключение в скандинавском сеттинге.", tags: ["Приключение","Одиночная"] },
  ]},
  // --- FARTHEST FRONTIER ---
  { series: "Farthest Frontier", icon: "🏕️", games: [
    { title: "Farthest Frontier [FitGirl Repack]", time: "∞ Бесконечно", infinite: true, desc: "Градостроительный симулятор выживания в средневековье.", tags: ["Стратегия","Градостроительство","Одиночная"] },
  ]},
  // --- PILLARS OF ETERNITY ---
  { series: "Pillars of Eternity", icon: "📜", games: [
    { title: "game-pillars.of.eternity-(91822)", time: "~40–60 ч", hours: 50, desc: "Классическая изометрическая RPG в духе Baldur's Gate.", tags: ["RPG","Изометрическая","Одиночная"] },
  ]},
  // --- TORMENTED SOULS ---
  { series: "Tormented Souls", icon: "🕷️", games: [
    { title: "game-tormented.souls-(89972)", time: "~10–12 ч", hours: 11, desc: "Хоррор на выживание с фиксированными камерами.", tags: ["Хоррор","Выживание","Одиночная"] },
  ]},
  // --- GETTING OVER IT ---
  { series: "Getting Over It", icon: "🔨", games: [
    { title: "Getting Over It", time: "∞ Бесконечно", infinite: true, desc: "Игра-испытание: подъём по горе с молотком.", tags: ["Платформер","Испытание","Одиночная"] },
  ]},
  // --- GHOSTRUNNER ---
  { series: "Ghostrunner", icon: "🏃", games: [
    { title: "Ghostrunner.(.v.42507_446).(2020) [Decepticon] RePack", time: "~6–8 ч", hours: 7, desc: "Паркурный экшен от первого лица в киберпанк-мире.", tags: ["Экшен","Паркур","Одиночная"] },
  ]},
  // --- GOTHIC ---
  { series: "Gothic", icon: "⚒️", games: [
    { title: "Gothic II Gold 1.30, 2.6 (Union 1.0m) Repack", time: "~40–60 ч", hours: 50, desc: "Культовая RPG о каторжнике. Золотое издание с Night of the Raven.", tags: ["RPG","Открытый мир","Одиночная"] },
    { title: "Gothic_3_Forsaken_Gods_2.01.08_(14579)_win_gog", time: "~30–50 ч", hours: 40, desc: "Продолжение на континенте Миртана. Версия GOG с Forsaken Gods.", tags: ["RPG","Открытый мир","Одиночная"] },
  ]},
  // --- GRIS ---
  { series: "GRIS", icon: "🎨", games: [
    { title: "GRIS [Build 3504696]", time: "~4–5 ч", hours: 4, desc: "Атмосферный платформер о принятии горя. Ожившая акварель.", tags: ["Платформер","Арт","Одиночная"] },
  ]},
  // --- GROUNDED ---
  { series: "Grounded", icon: "🐜", games: [
    { title: "Grounded (2022)", time: "∞ Бесконечно", infinite: true, desc: "Выживание в роли уменьшившихся детей на заднем дворе.", tags: ["Выживание","Кооператив"] },
  ]},
  // --- HADES ---
  { series: "Hades", icon: "🔥", games: [
    { title: "Hades v.1.38290 (2020)", time: "∞ Бесконечно", infinite: true, desc: "Роглайк-экшен о побеге из подземного царства.", tags: ["Roguelike","Экшен","Одиночная"] },
  ]},
  // --- HELL IS US ---
  { series: "Hell is Us", icon: "😈", games: [
    { title: "Hell is Us [FitGirl Repack]", time: "—", unknown: true, desc: "Экшен-приключение с элементами хоррора в разрушенном мире.", tags: ["Экшен","Приключение","Одиночная"] },
  ]},
  // --- KINGDOM TWO CROWNS ---
  { series: "Kingdom Two Crowns", icon: "👑", games: [
    { title: "Kingdom-Two-Crowns-v2.4.0g", time: "∞ Бесконечно", infinite: true, desc: "Атмосферный стратегический roguelike о защите королевства.", tags: ["Стратегия","Roguelike","Кооператив"] },
  ]},
  // --- LAST EPOCH ---
  { series: "Last Epoch", icon: "⏳", games: [
    { title: "Last Epoch", time: "∞ Бесконечно", infinite: true, desc: "Хак-н-слеш RPG с путешествиями во времени.", tags: ["RPG","Хак-н-слеш","Мультиплеер"] },
  ]},
  // --- LITTLE NIGHTMARES ---
  { series: "Little Nightmares", icon: "🌙", games: [
    { title: "Little Nightmares by xatab", time: "~4–5 ч", hours: 4, desc: "Атмосферный хоррор-платформер о девочке в жёлтом плаще.", tags: ["Хоррор","Платформер","Одиночная"] },
  ]},
  // --- LIZARDS ---
  { series: "LIZARDS MUST DIE", icon: "🦎", games: [
    { title: "LIZARDS MUST DIE v06042024 by Pioneer", time: "—", unknown: true, desc: "Сатирическая экшен-RPG за ящерицу, мстящую людям.", tags: ["Экшен","RPG","Одиночная"] },
  ]},
  // --- MODULUS ---
  { series: "Modulus Factory", icon: "🏭", games: [
    { title: "Modulus.Factory.Automation.v1.1.1.rar", time: "∞ Бесконечно", infinite: true, desc: "Симулятор автоматизации фабрик в voxel-мире.", tags: ["Симулятор","Автоматизация","Одиночная"] },
  ]},
  // --- MORTAL SHELL ---
  { series: "Mortal Shell", icon: "🐚", games: [
    { title: "Mortal Shell by xatab", time: "~15–20 ч", hours: 17, desc: "Souls-like с механикой окаменения и вселения в тела.", tags: ["Souls-like","Экшен","Одиночная"] },
  ]},
  // --- MOUTHWASHING ---
  { series: "Mouthwashing", icon: "🚀", games: [
    { title: "Mouthwashing.Build.20077705.rar", time: "~2–3 ч", hours: 2, desc: "Психологический хоррор на космическом корабле. Нелинейный сюжет.", tags: ["Хоррор","Психологический","Одиночная"] },
  ]},
  // --- MR. PREPPER ---
  { series: "Mr. Prepper", icon: "🥫", games: [
    { title: "Mr. Prepper [FitGirl Repack]", time: "~20–30 ч", hours: 25, desc: "Симулятор строительства подземного бункера.", tags: ["Симулятор","Выживание","Одиночная"] },
  ]},
  // --- NO MAN'S SKY ---
  { series: "No Man's Sky", icon: "🌌", games: [
    { title: "No Man's Sky [FitGirl Repack]", time: "∞ Бесконечно", infinite: true, desc: "Космическая песочница с бесконечной вселенной.", tags: ["Выживание","Космос","Мультиплеер"] },
  ]},
  // --- NORLAND ---
  { series: "Norland", icon: "🏰", games: [
    { title: "Norland.Build.25211575.rar", time: "∞ Бесконечно", infinite: true, desc: "Симулятор средневекового города с интригами и RPG-элементами.", tags: ["Симулятор","Стратегия","Одиночная"] },
  ]},
  // --- NORTHGARD ---
  { series: "Northgard", icon: "🛡️", games: [
    { title: "Northgard (2018)", time: "~20–30 ч", hours: 25, desc: "RTS о викингах, осваивающих новые земли.", tags: ["Стратегия","RTS","Мультиплеер"] },
  ]},
  // --- OUTWARD ---
  { series: "Outward", icon: "🎒", games: [
    { title: "Outward - Definitive Edition (mono branch) (2022)", time: "~40–60 ч", hours: 50, desc: "Хардкорная RPG о выживании. Нужно есть, пить и спать.", tags: ["RPG","Выживание","Кооператив"] },
  ]},
  // --- PALWORLD ---
  { series: "Palworld", icon: "🐾", games: [
    { title: "Palworld-InsaneRamZes", time: "∞ Бесконечно", infinite: true, desc: "Выживание с коллекционированием палов. «Покемоны с пушками».", tags: ["Выживание","Кооператив","Мультиплеер"] },
  ]},
  // --- PATH OF EXILE ---
  { series: "Path of Exile", icon: "💎", games: [
    { title: "Path of Exile", time: "∞ Бесконечно", infinite: true, desc: "Бесплатный хак-н-слеш с бесконечным развитием и сезонами.", tags: ["RPG","Хак-н-слеш","Мультиплеер"] },
  ]},
  // --- PATHOLOGIC ---
  { series: "Pathologic", icon: "🎭", games: [
    { title: "Pathologic 2 by xatab", time: "~20–25 ч", hours: 22, desc: "Сюрреалистичный хоррор-выживач о борьбе с эпидемией.", tags: ["Хоррор","Выживание","Одиночная"] },
  ]},
  // --- PENUMBRA ---
  { series: "Penumbra", icon: "🔦", games: [
    { title: "Penumbra - Special Edition 1C RUS", time: "~10–12 ч", hours: 11, desc: "Хоррор-адвенчура от создателей Amnesia. Русская версия.", tags: ["Хоррор","Приключение","Одиночная"] },
    { title: "Penumbra Special Edition", time: "~10–12 ч", hours: 11, desc: "Та же игра, другая версия издания.", tags: ["Хоррор","Приключение","Одиночная"] },
  ]},
  // --- PREY ---
  { series: "Prey", icon: "🛸", games: [
    { title: "Prey by xatab", time: "~15–20 ч", hours: 17, desc: "Иммерсив-сим на станции, захваченной мимиками.", tags: ["Иммерсив-сим","Шутер","Одиночная"] },
  ]},
  // --- RAVENOUS DEVILS ---
  { series: "Ravenous Devils", icon: "🍖", games: [
    { title: "Ravenous_Devils_1.0.2_(59454)_win_gog", time: "~6–8 ч", hours: 7, desc: "Мрачный симулятор цирюльни и мясной лавки с чёрным юмором.", tags: ["Симулятор","Хоррор","Одиночная"] },
  ]},
  // --- RIMWORLD ---
  { series: "RimWorld", icon: "🏜️", games: [
    { title: "rimworld_1.6.4871_rev588_(64bit)_(91984)_win_gog", time: "∞ Бесконечно", infinite: true, desc: "Симулятор колонии на враждебной планете.", tags: ["Симулятор","Стратегия","Одиночная"] },
  ]},
  // --- SATURN ---
  { series: "Saturn", icon: "🪐", games: [
    { title: "Saturn (2024)", time: "—", unknown: true, desc: "Инди-игра, подробностей мало.", tags: ["Инди","Одиночная"] },
  ]},
  // --- SEKIRO ---
  { series: "Sekiro", icon: "🥷", games: [
    { title: "Sekiro - Shadows Die Twice [FitGirl Repack]", time: "~30–50 ч", hours: 40, desc: "Хардкорный экшен о синоби. Игра года 2019.", tags: ["Экшен","Souls-like","Одиночная"] },
  ]},
  // --- SHADOW GAMBIT ---
  { series: "Shadow Gambit", icon: "🏴‍☠️", games: [
    { title: "Shadow Gambit The Cursed Crew [Repack] by Wanterlude", time: "~25–30 ч", hours: 27, desc: "Стелс-стратегия о пиратах-призраках.", tags: ["Стелс","Стратегия","Одиночная"] },
  ]},
  // --- SHADOW TACTICS ---
  { series: "Shadow Tactics", icon: "🗡️", games: [
    { title: "Shadow Tactics - Aiko's Choice [FitGirl Repack]", time: "~8–10 ч", hours: 9, desc: "Дополнение к стелс-стратегии о наёмниках в Японии.", tags: ["Стелс","Стратегия","Одиночная"] },
    { title: "Shadow.Tactics.Blades.of.the.Shogun.v3.2.25.rar", time: "~25–30 ч", hours: 27, desc: "Оригинальная игра о команде специалистов в эпоху Эдо.", tags: ["Стелс","Стратегия","Одиночная"] },
  ]},
  // --- SHADOWRUN ---
  { series: "Shadowrun", icon: "🌃", games: [
    { title: "Shadowrun - Hong Kong - Extended Edition by xatab", time: "~20–30 ч", hours: 25, desc: "Тактическая RPG в киберпанк-фэнтези. Гонконг.", tags: ["RPG","Тактическая","Одиночная"] },
    { title: "Shadowrun Dragonfall Directors Cut [R.G. Catalyst]", time: "~25–30 ч", hours: 27, desc: "Тактическая RPG о команде теней в Берлине.", tags: ["RPG","Тактическая","Одиночная"] },
    { title: "Shadowrun_Returns [R.G. Catalyst]", time: "~12–15 ч", hours: 13, desc: "Первая часть возрождённой серии.", tags: ["RPG","Тактическая","Одиночная"] },
  ]},
  // --- SIEGE SURVIVAL ---
  { series: "Siege Survival", icon: "🏹", games: [
    { title: "Siege.Survival.Gloria.Victis.v20230119-P2P.rar", time: "~15–20 ч", hours: 17, desc: "Симулятор выживания в осаждённом средневековом городе.", tags: ["Выживание","Стратегия","Одиночная"] },
  ]},
  // --- SLAY THE SPIRE ---
  { series: "Slay the Spire", icon: "🃏", games: [
    { title: "Slay the Spire", time: "∞ Бесконечно", infinite: true, desc: "Карточный roguelike. Эталон жанра.", tags: ["Roguelike","Карточная","Одиночная"] },
  ]},
  // --- SOLASTA ---
  { series: "Solasta", icon: "🐉", games: [
    { title: "Solasta - Crown of the Magister [FitGirl Repack]", time: "~40–50 ч", hours: 45, desc: "Тактическая RPG по правилам D&D 5-й редакции.", tags: ["RPG","Тактическая","Одиночная"] },
  ]},
  // --- SONG OF HORROR ---
  { series: "Song of Horror", icon: "🎵", games: [
    { title: "Song_of_Horror_1.25_(54257)_win_gog", time: "~12–15 ч", hours: 13, desc: "Хоррор с необратимой смертью персонажей.", tags: ["Хоррор","Приключение","Одиночная"] },
  ]},
  // --- STARDEW VALLEY ---
  { series: "Stardew Valley", icon: "🌾", games: [
    { title: "stardew_valley_78674", time: "∞ Бесконечно", infinite: true, desc: "Уютный симулятор фермы с RPG-элементами.", tags: ["Симулятор","RPG","Кооператив"] },
  ]},
  // --- SUBMERGED ---
  { series: "Submerged", icon: "🌊", games: [
    { title: "Submerged [FitGirl Repack]", time: "~3–4 ч", hours: 3, desc: "Спокойное приключение в затопленном городе.", tags: ["Приключение","Медитативная","Одиночная"] },
  ]},
  // --- SUPERMARKET SIM ---
  { series: "Supermarket Simulator", icon: "🛒", games: [
    { title: "Supermarket.Simulator.v2026.10.05.rar", time: "∞ Бесконечно", infinite: true, desc: "Симулятор управления супермаркетом.", tags: ["Симулятор","Одиночная"] },
  ]},
  // --- TAINTED GRAIL ---
  { series: "Tainted Grail", icon: "🏆", games: [
    { title: "Tainted Grail - The Fall of Avalon [FitGirl Repack]", time: "~40–60 ч", hours: 50, desc: "Тёмное фэнтези-RPG в открытом мире.", tags: ["RPG","Открытый мир","Одиночная"] },
  ]},
  // --- THE RIFTBREAKER ---
  { series: "The Riftbreaker", icon: "⚡", games: [
    { title: "The Riftbreaker [FitGirl Repack]", time: "∞ Бесконечно", infinite: true, desc: "Экшен-RPG и симулятор базы на чужой планете.", tags: ["Экшен","Выживание","Одиночная"] },
  ]},
  // --- SINKING CITY ---
  { series: "The Sinking City", icon: "🌊", games: [
    { title: "The Sinking City Remastered [FitGirl Repack]", time: "~20–25 ч", hours: 22, desc: "Детектив в лавкрафтовском городе под водой.", tags: ["Приключение","Хоррор","Одиночная"] },
  ]},
  // --- THAUMATURGE ---
  { series: "The Thaumaturge", icon: "🔮", games: [
    { title: "The Thaumaturge.(v.73.424).(2024) [Decepticon] RePack", time: "~20–25 ч", hours: 22, desc: "Изометрическая RPG о тауматурге в Варшаве 1905 года.", tags: ["RPG","Изометрическая","Одиночная"] },
  ]},
  // --- THIEF SIM ---
  { series: "Thief Simulator", icon: "🥷", games: [
    { title: "Thief Simulator [FitGirl Repack]", time: "~15–20 ч", hours: 17, desc: "Симулятор вора: изучай дома и выноси ценности.", tags: ["Симулятор","Стелс","Одиночная"] },
  ]},
  // --- THIS WAR OF MINE ---
  { series: "This War of Mine", icon: "🕊️", games: [
    { title: "This War of Mine [FitGirl Repack]", time: "~10–15 ч", hours: 12, desc: "Антивоенный симулятор выживания мирных жителей.", tags: ["Выживание","Симулятор","Одиночная"] },
  ]},
  // --- THYMESIA ---
  { series: "Thymesia", icon: "🦅", games: [
    { title: "Thymesia_21.24723_(60325)_win_gog", time: "~15–20 ч", hours: 17, desc: "Souls-like о чумном докторе, крадущем способности.", tags: ["Souls-like","Экшен","Одиночная"] },
  ]},
  // --- TOMB RAIDER ---
  { series: "Tomb Raider", icon: "🏺", games: [
    { title: "Tomb Raider by xatab", time: "~12–15 ч", hours: 13, desc: "Перезапуск серии о молодой Ларе Крофт.", tags: ["Экшен","Приключение","Одиночная"] },
  ]},
  // --- TORCHLIGHT ---
  { series: "Torchlight", icon: "🔥", games: [
    { title: "TorchlighT.Fixed.RePack.setup.exe", time: "~15–20 ч", hours: 17, desc: "Яркий хак-н-слеш в духе Diablo.", tags: ["RPG","Хак-н-слеш","Одиночная"] },
  ]},
  // --- TUNGUSKA ---
  { series: "Tunguska", icon: "🌲", games: [
    { title: "Tunguska The Visitation (2021)", time: "~15–20 ч", hours: 17, desc: "Приключенческий экшен о Тунгусской аномалии.", tags: ["Экшен","Приключение","Одиночная"] },
  ]},
  // --- WARHAMMER 40K ---
  { series: "Warhammer 40,000", icon: "⚙️", games: [
    { title: "Warhammer 40,000 - Space Marine Collection [FitGirl Repack]", time: "~10–15 ч", hours: 12, desc: "Экшен о космодесантнике, сражающемся с орками.", tags: ["Экшен","Шутер","Мультиплеер"] },
    { title: "Warhammer 40000 - Rogue Trader [FitGirl Repack]", time: "~60–80 ч", hours: 70, desc: "Масштабная изометрическая RPG о вольном торговце.", tags: ["RPG","Изометрическая","Одиночная"] },
  ]},
  // --- WATCH DOGS ---
  { series: "Watch Dogs", icon: "💻", games: [
    { title: "Watch Dogs by xatab", time: "~15–20 ч", hours: 17, desc: "Экшен о хакере, мстящем за смерть племянницы.", tags: ["Экшен","Открытый мир","Мультиплеер"] },
  ]},
  // --- X4 ---
  { series: "X4 Foundations", icon: "🚀", games: [
    { title: "X4.Foundations-InsaneRamZes", time: "∞ Бесконечно", infinite: true, desc: "Космический симулятор с открытой вселенной.", tags: ["Симулятор","Космос","Одиночная"] },
  ]},
  // --- TAB ---
  { series: "TAB", icon: "❓", games: [
    { title: "[West4it] TAB", time: "—", unknown: true, desc: "Информации об этой игре крайне мало.", tags: ["Инди","Одиночная"] },
  ]},
  // --- CORAL ISLAND ---
  { series: "Coral Island", icon: "🌴", games: [
    { title: "[dixen18] Coral Island", time: "~57 ч", hours: 57, desc: "Уютный симулятор фермы на тропическом острове.", tags: ["Симулятор","RPG","Одиночная"] },
  ]},
  // --- EVIL WITHIN ---
  { series: "The Evil Within", icon: "🧠", games: [
    { title: "[R.G. Mechanics] The Evil Within", time: "~15–20 ч", hours: 17, desc: "Хоррор на выживание от создателя Resident Evil.", tags: ["Хоррор","Выживание","Одиночная"] },
  ]},
  // --- RESIDENT EVIL HD ---
  { series: "Resident Evil HD Remaster", icon: "🧟", games: [
    { title: "[West4it] REHD Remaster", time: "~6–9 ч", hours: 7, desc: "Ремастер классического хоррора 1996 года.", tags: ["Хоррор","Выживание","Одиночная"] },
  ]},
  // --- CRAFT THE WORLD ---
  { series: "Craft The World", icon: "⛏️", games: [
    { title: "craft_the_world_1.11.012_1_(92481)_win_gog", time: "~33 ч", hours: 33, desc: "Стратегия-песочница о племени гномов.", tags: ["Стратегия","Песочница","Одиночная"] },
  ]},
  // --- DEAD ISLAND ---
  { series: "Dead Island", icon: "🏝️", games: [
    { title: "Dead Island - Definitive Edition (2016) RePack by Canek77", time: "~16 ч", hours: 16, desc: "Открытый мир курорта, захваченного зомби.", tags: ["Экшен","Выживание","Кооператив"] },
  ]},
  // --- DEAD RISING ---
  { series: "Dead Rising", icon: "🧟", games: [
    { title: "Dead Rising [FitGirl Repack]", time: "~12 ч", hours: 12, desc: "Фотожурналист в торговом центре с зомби. 72 часа.", tags: ["Экшен","Выживание","Одиночная"] },
  ]},
  // --- HITMAN ---
  { series: "Hitman", icon: "🎯", games: [
    { title: "Hitman. Blood Money [R.G. Revenants]", time: "~10–12 ч", hours: 11, desc: "Классика стелс-экшена. Агент 47 по всему миру.", tags: ["Стелс","Экшен","Одиночная"] },
  ]},
  // --- KINGDOMS REBORN ---
  { series: "Kingdoms Reborn", icon: "🏰", games: [
    { title: "Kingdoms.Reborn.v2026.03.27.rar", time: "~20 ч", hours: 20, desc: "Градостроительный симулятор с карточной системой.", tags: ["Стратегия","Градостроительство","Одиночная"] },
  ]},
  // --- KING'S BOUNTY ---
  { series: "King's Bounty", icon: "👑", games: [
    { title: "Kings Bounty The Legend EE", time: "~35 ч", hours: 35, desc: "Пошаговая тактическая RPG с походами и битвами.", tags: ["RPG","Тактическая","Одиночная"] },
  ]},
  // --- NOITA ---
  { series: "Noita", icon: "🔮", games: [
    { title: "Noita (2019)", time: "∞ Бесконечно", infinite: true, desc: "Магический roguelike, где каждый пиксель имеет физику.", tags: ["Roguelike","Песочница","Одиночная"] },
  ]},
  // --- REMNANT ---
  { series: "Remnant", icon: "🔫", games: [
    { title: "Remnant From the Ashes Subject 2923", time: "~15–20 ч", hours: 17, desc: "Souls-like шутер с процедурной генерацией. DLC Subject 2923.", tags: ["Шутер","Souls-like","Кооператив"] },
  ]},
  // --- SHADOW OF THE TOMB RAIDER ---
  { series: "Shadow of the Tomb Raider", icon: "🏺", games: [
    { title: "Shadow of the Tomb Raider [Repack] by Wanterlude", time: "~15–20 ч", hours: 17, desc: "Финал трилогии. Лара против апокалипсиса майя.", tags: ["Экшен","Приключение","Одиночная"] },
  ]},
  // --- SPONGEBOB ---
  { series: "SpongeBob SquarePants", icon: "🧽", games: [
    { title: "SpongeBob SquarePants - BFBBR by xatab", time: "~9–11 ч", hours: 10, desc: "Ремастер классического платформера о Губке Бобе.", tags: ["Платформер","Одиночная"] },
  ]},
  // --- SABOTEUR ---
  { series: "The Saboteur", icon: "🎨", games: [
    { title: "The Saboteur", time: "~20–25 ч", hours: 22, desc: "Экшен в оккупированном Париже. Мир обретает цвет.", tags: ["Экшен","Открытый мир","Одиночная"] },
  ]},
  // --- WITCHER ---
  { series: "The Witcher", icon: "🐺", games: [
    { title: "The Witcher Enhanced Edition [Repack] by Wanterlude", time: "~35 ч", hours: 35, desc: "Первая часть приключений Геральта из Ривии.", tags: ["RPG","Открытый мир","Одиночная"] },
  ]},
  // --- КНЯЗЬ ТЬМЫ ---
  { series: "Князь тьмы", icon: "😈", games: [
    { title: "Князь тьмы от R.G. Element Arts", time: "~40–50 ч", hours: 45, desc: "Русская RPG (Sacred Underworld Gold) в тёмном фэнтези.", tags: ["RPG","Экшен","Одиночная"] },
  ]},
];

/* ============================================================
   ХРАНИЛИЩЕ (localStorage)
   ============================================================ */
const STORAGE_KEY = 'game_collection_v2';

let userData = {}; // ключ = "title" -> { status, rating, notes, hoursPlayed, startedAt, finishedAt }

function loadData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) userData = JSON.parse(raw);
  } catch(e) { console.warn('Ошибка загрузки', e); }
}

function saveData() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(userData)); }
  catch(e) { console.warn('Ошибка сохранения', e); }
}

function getGameData(title) {
  if (!userData[title]) {
    userData[title] = {
      status: 'not-started',
      rating: 0,
      notes: '',
      hoursPlayed: 0,
      startedAt: null,
      finishedAt: null,
    };
  }
  return userData[title];
}

/* ============================================================
   РЕНДЕР
   ============================================================ */
const STATUS_LABELS = {
  'not-started': 'Не начата',
  'playing': 'В процессе',
  'completed': 'Пройдена',
  '100': '100%',
  'dropped': 'Брошена',
};

const STATUS_CLASSES = {
  'not-started': 'status-not-started',
  'playing': 'status-playing',
  'completed': 'status-completed',
  '100': 'status-100',
  'dropped': 'status-dropped',
};

function render() {
  const container = document.getElementById('games-container');
  container.innerHTML = '';

  let blockIndex = 0;

  GAMES_DATA.forEach(series => {
    const block = document.createElement('div');
    block.className = 'series-block';
    block.style.animationDelay = (blockIndex * 0.03) + 's';
    blockIndex++;

    // Считаем статистику по серии
    const seriesGames = series.games;
    const seriesCompleted = seriesGames.filter(g => {
      const d = getGameData(g.title);
      return d.status === 'completed' || d.status === '100';
    }).length;

    const header = document.createElement('div');
    header.className = 'series-header';
    header.innerHTML = `
      <span class="icon">${series.icon}</span>
      <span>${series.series}</span>
      <span class="count-badge">${seriesCompleted}/${seriesGames.length} пройдено</span>
      <span class="arrow">▼</span>
    `;
    header.addEventListener('click', () => block.classList.toggle('collapsed'));
    block.appendChild(header);

    const body = document.createElement('div');
    body.className = 'series-body';

    seriesGames.forEach(game => {
      body.appendChild(createGameCard(game));
    });

    block.appendChild(body);
    container.appendChild(block);
  });

  updateStats();
  updateNowPlaying();
  populateGenreFilter();
  applyFilters();
}

/* ============================================================
   КАРТОЧКА ИГРЫ
   ============================================================ */
function createGameCard(game) {
  const data = getGameData(game.title);

  const item = document.createElement('div');
  item.className = 'game-item';
  item.dataset.title = game.title;
  item.dataset.genre = game.tags[0] || '';
  item.dataset.time = game.infinite ? 'infinite' : (game.unknown ? 'unknown' : (game.hours <= 10 ? 'short' : game.hours <= 30 ? 'medium' : game.hours <= 60 ? 'long' : 'epic'));

  // Обложка (заглушка с эмодзи)
  const cover = document.createElement('div');
  cover.className = 'game-cover';
  cover.textContent = game.tags[0] === 'RPG' ? '⚔️' : game.tags[0] === 'Хоррор' ? '👻' : game.tags[0] === 'Шутер' ? '🔫' : game.tags[0] === 'Стратегия' ? '♟️' : '🎮';

  // Основное
  const main = document.createElement('div');
  main.className = 'game-main';

  const timeClass = game.infinite ? 'infinite' : (game.unknown ? 'unknown' : '');

  main.innerHTML = `
    <div class="game-top">
      <span class="game-title">${game.title}</span>
      <span class="game-time ${timeClass}">${game.time}</span>
      <span class="status-badge ${STATUS_CLASSES[data.status]}">${STATUS_LABELS[data.status]}</span>
    </div>
    <div class="game-desc">${game.desc}</div>
    <div class="game-tags">
      ${game.tags.map(t => `<span class="tag ${['RPG','Экшен','Шутер','Хоррор','Стратегия','Платформер'].includes(t) ? 'genre' : 'mode'}">${t}</span>`).join('')}
    </div>
    <div class="game-controls">
      <select class="status-select" data-title="${game.title}">
        <option value="not-started"${data.status==='not-started'?' selected':''}>Не начата</option>
        <option value="playing"${data.status==='playing'?' selected':''}>В процессе</option>
        <option value="completed"${data.status==='completed'?' selected':''}>Пройдена</option>
        <option value="100"${data.status==='100'?' selected':''}>100%</option>
        <option value="dropped"${data.status==='dropped'?' selected':''}>Брошена</option>
      </select>
      <span class="stars" data-title="${game.title}">
        ${[1,2,3,4,5].map(i => `<span class="star ${i <= data.rating ? 'active' : ''}" data-value="${i}">★</span>`).join('')}
      </span>
      <input type="number" class="hours-input" placeholder="ч" min="0" max="9999" value="${data.hoursPlayed || ''}" data-title="${game.title}" title="Сколько часов вы отыграли">
      <button class="notes-toggle" data-title="${game.title}">📝 Заметки</button>
    </div>
    <div class="progress-bar"><div class="progress-fill" style="width:${data.status==='100'?100:data.status==='completed'?80:data.status==='playing'?40:0}%"></div></div>
    <div class="game-notes ${data.notes ? 'visible' : ''}" data-title="${game.title}">
      <textarea placeholder="Ваши заметки, впечатления, советы..." data-title="${game.title}">${data.notes || ''}</textarea>
    </div>
  `;

  item.appendChild(cover);
  item.appendChild(main);
  return item;
}

/* ============================================================
   СОБЫТИЯ НА КАРТОЧКАХ (делегирование)
   ============================================================ */
document.addEventListener('change', (e) => {
  if (e.target.classList.contains('status-select')) {
    const title = e.target.dataset.title;
    const d = getGameData(title);
    d.status = e.target.value;
    if (d.status === 'playing' && !d.startedAt) d.startedAt = new Date().toISOString();
    if ((d.status === 'completed' || d.status === '100') && !d.finishedAt) d.finishedAt = new Date().toISOString();
    saveData();
    updateStats();
    updateNowPlaying();
    // Обновляем бейдж и прогресс-бар
    const item = e.target.closest('.game-item');
    const badge = item.querySelector('.status-badge');
    badge.className = 'status-badge ' + STATUS_CLASSES[d.status];
    badge.textContent = STATUS_LABELS[d.status];
    const fill = item.querySelector('.progress-fill');
    fill.style.width = (d.status==='100'?100:d.status==='completed'?80:d.status==='playing'?40:0) + '%';
    applyFilters();
  }

  if (e.target.classList.contains('hours-input')) {
    const title = e.target.dataset.title;
    const d = getGameData(title);
    d.hoursPlayed = parseInt(e.target.value) || 0;
    saveData();
    updateStats();
  }
});

document.addEventListener('input', (e) => {
  if (e.target.tagName === 'TEXTAREA' && e.target.dataset.title) {
    const title = e.target.dataset.title;
    const d = getGameData(title);
    d.notes = e.target.value;
    saveData();
  }
});

document.addEventListener('click', (e) => {
  // Звёзды
  if (e.target.classList.contains('star')) {
    const star = e.target;
    const starsEl = star.parentElement;
    const title = starsEl.dataset.title;
    const value = parseInt(star.dataset.value);
    const d = getGameData(title);
    d.rating = (d.rating === value) ? 0 : value; // клик по той же — сброс
    saveData();
    starsEl.querySelectorAll('.star').forEach(s => {
      s.classList.toggle('active', parseInt(s.dataset.value) <= d.rating);
    });
    updateStats();
  }

  // Заметки
  if (e.target.classList.contains('notes-toggle')) {
    const title = e.target.dataset.title;
    const notesEl = document.querySelector(`.game-notes[data-title="${CSS.escape(title)}"]`);
    if (notesEl) {
      notesEl.classList.toggle('visible');
      if (notesEl.classList.contains('visible')) notesEl.querySelector('textarea').focus();
    }
  }
});

/* ============================================================
   СТАТИСТИКА
   ============================================================ */
function updateStats() {
  let total = 0, completed = 0, playing = 0, hoursPlayed = 0;

  GAMES_DATA.forEach(series => {
    series.games.forEach(game => {
      total++;
      const d = getGameData(game.title);
      if (d.status === 'completed' || d.status === '100') completed++;
      if (d.status === 'playing') playing++;
      hoursPlayed += d.hoursPlayed || 0;
    });
  });

  document.getElementById('st-total').textContent = total;
  document.getElementById('st-series').textContent = GAMES_DATA.length;
  document.getElementById('st-completed').textContent = completed;
  document.getElementById('st-playing').textContent = playing;
  document.getElementById('st-hours').textContent = hoursPlayed + 'ч';
  document.getElementById('st-progress').textContent = total ? Math.round(completed / total * 100) + '%' : '0%';
}

/* ============================================================
   СЕЙЧАС ИГРАЮ
   ============================================================ */
function updateNowPlaying() {
  const list = document.getElementById('now-playing-list');
  const playing = [];
  GAMES_DATA.forEach(s => s.games.forEach(g => {
    const d = getGameData(g.title);
    if (d.status === 'playing') playing.push(g.title);
  }));

  if (playing.length === 0) {
    list.innerHTML = '<span class="empty-hint">Отметьте игру статусом «В процессе», чтобы она появилась здесь</span>';
    return;
  }

  list.innerHTML = playing.map(t => `
    <span class="now-playing-item">
      🎮 ${t}
      <button data-title="${t}" title="Завершить">×</button>
    </span>
  `).join('');

  list.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      const title = btn.dataset.title;
      const d = getGameData(title);
      d.status = 'completed';
      d.finishedAt = new Date().toISOString();
      saveData();
      render();
    });
  });
}

/* ============================================================
   ФИЛЬТРЫ
   ============================================================ */
function populateGenreFilter() {
  const genres = new Set();
  GAMES_DATA.forEach(s => s.games.forEach(g => g.tags.forEach(t => genres.add(t))));
  const sel = document.getElementById('filter-genre');
  const current = sel.value;
  sel.innerHTML = '<option value="">Все жанры</option>' +
    [...genres].sort().map(g => `<option value="${g}">${g}</option>`).join('');
  sel.value = current;
}

function applyFilters() {
  const query = document.getElementById('search').value.toLowerCase().trim();
  const genre = document.getElementById('filter-genre').value;
  const status = document.getElementById('filter-status').value;
  const time = document.getElementById('filter-time').value;

  document.querySelectorAll('.series-block').forEach(block => {
    let visible = 0;
    block.querySelectorAll('.game-item').forEach(item => {
      const title = item.dataset.title.toLowerCase();
      const desc = item.querySelector('.game-desc').textContent.toLowerCase();
      const data = getGameData(item.dataset.title);
      const itemGenre = item.dataset.genre;
      const itemTime = item.dataset.time;

      let show = true;
      if (query && !title.includes(query) && !desc.includes(query)) show = false;
      if (genre && itemGenre !== genre) show = false;
      if (status && data.status !== status) show = false;
      if (time && itemTime !== time) show = false;

      item.style.display = show ? '' : 'none';
      if (show) visible++;
    });
    block.classList.toggle('hidden', visible === 0);
  });
}

document.getElementById('search').addEventListener('input', applyFilters);
document.getElementById('filter-genre').addEventListener('change', applyFilters);
document.getElementById('filter-status').addEventListener('change', applyFilters);
document.getElementById('filter-time').addEventListener('change', applyFilters);

/* ============================================================
   СОРТИРОВКА
   ============================================================ */
document.getElementById('sort-by').addEventListener('change', (e) => {
  const mode = e.target.value;
  const container = document.getElementById('games-container');
  const blocks = [...container.querySelectorAll('.series-block')];

  blocks.forEach(block => {
    const body = block.querySelector('.series-body');
    const items = [...body.querySelectorAll('.game-item')];

    if (mode === 'title') items.sort((a,b) => a.dataset.title.localeCompare(b.dataset.title));
    else if (mode === 'time') items.sort((a,b) => {
      const ta = a.querySelector('.game-time').textContent;
      const tb = b.querySelector('.game-time').textContent;
      const na = parseInt(ta.match(/\d+/)?.[0] || 9999);
      const nb = parseInt(tb.match(/\d+/)?.[0] || 9999);
      return na - nb;
    });
    else if (mode === 'rating') items.sort((a,b) => {
      return (getGameData(b.dataset.title).rating || 0) - (getGameData(a.dataset.title).rating || 0);
    });
    else if (mode === 'status') {
      const order = { 'playing': 0, 'completed': 1, '100': 2, 'not-started': 3, 'dropped': 4 };
      items.sort((a,b) => order[getGameData(a.dataset.title).status] - order[getGameData(b.dataset.title).status]);
    } else {
      // default — вернуть исходный порядок
      items.sort((a,b) => a.dataset.title.localeCompare(b.dataset.title));
    }

    items.forEach(i => body.appendChild(i));
  });
});

/* ============================================================
   СВЕРНУТЬ / РАЗВЕРНУТЬ ВСЕ
   ============================================================ */
document.getElementById('collapse-all').addEventListener('click', () => {
  const blocks = document.querySelectorAll('.series-block');
  const anyExpanded = [...blocks].some(b => !b.classList.contains('collapsed'));
  blocks.forEach(b => b.classList.toggle('collapsed', anyExpanded));
});

/* ============================================================
   РАНДОМ
   ============================================================ */
function showRandomGame() {
  const pool = [];
  GAMES_DATA.forEach(s => s.games.forEach(g => {
    const d = getGameData(g.title);
    if (d.status !== 'completed' && d.status !== '100' && d.status !== 'dropped') pool.push(g);
  }));
  if (pool.length === 0) return;
  const game = pool[Math.floor(Math.random() * pool.length)];
  document.getElementById('random-title').textContent = game.title;
  document.getElementById('random-desc').textContent = game.desc;
  document.getElementById('random-modal').classList.add('visible');
}

document.getElementById('random-btn').addEventListener('click', showRandomGame);
document.getElementById('random-again').addEventListener('click', showRandomGame);
document.getElementById('random-close').addEventListener('click', () => {
  document.getElementById('random-modal').classList.remove('visible');
});
document.getElementById('random-modal').addEventListener('click', (e) => {
  if (e.target.id === 'random-modal') e.target.classList.remove('visible');
});

/* ============================================================
   ЭКСПОРТ / ИМПОРТ
   ============================================================ */
document.getElementById('export-btn').addEventListener('click', () => {
  const blob = new Blob([JSON.stringify(userData, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'game-collection-' + new Date().toISOString().slice(0,10) + '.json';
  a.click();
  URL.revokeObjectURL(url);
});

document.getElementById('import-btn').addEventListener('click', () => {
  document.getElementById('import-file').click();
});

document.getElementById('import-file').addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (ev) => {
    try {
      const imported = JSON.parse(ev.target.result);
      userData = { ...userData, ...imported };
      saveData();
      render();
      alert('Импорт выполнен успешно!');
    } catch(err) { alert('Ошибка импорта: неверный формат JSON'); }
  };
  reader.readAsText(file);
});

/* ============================================================
   СБРОС
   ============================================================ */
document.getElementById('reset-btn').addEventListener('click', () => {
  if (confirm('Сбросить весь прогресс? Это действие необратимо.')) {
    userData = {};
    saveData();
    render();
  }
});

/* ============================================================
   ТЕМА
   ============================================================ */
const themeToggle = document.getElementById('theme-toggle');
const savedTheme = localStorage.getItem('theme') || 'dark';
if (savedTheme === 'light') {
  document.body.classList.add('light');
  themeToggle.textContent = '☀️';
}
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  const isLight = document.body.classList.contains('light');
  themeToggle.textContent = isLight ? '☀️' : '🌙';
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
});

/* ============================================================
   ШОРТКАТЫ
   ============================================================ */
document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.key === 'f') {
    e.preventDefault();
    document.getElementById('search').focus();
  }
  if (e.key === 'Escape') {
    document.getElementById('search').value = '';
    applyFilters();
    document.getElementById('random-modal').classList.remove('visible');
  }
});

/* ============================================================
   СТАРТ
   ============================================================ */
loadData();
render();
