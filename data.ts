import {
  PaintingHotspot,
  FindTask,
  QuizQuestion,
  TrueFalseStatement,
  DetectiveTask,
  TimelineCard,
  FillBlankTask,
  AdventureScene,
  VocabItem,
  HistoryChapter,
  TranslatedText
} from './types';

export const PAINTING_INFO = {
  title: 'El último día de Pompeya',
  titleHy: 'Պոմպեյի վերջին օրը',
  titleRu: 'Последний день Помпеи',
  artist: 'Karl Briullov (Карл Брюллов)',
  artistHy: 'Կառլ Բրյուլով',
  artistRu: 'Карл Павлович Брюллов',
  year: '1830–1833',
  medium: 'Óleo sobre lienzo (Oil on canvas)',
  mediumHy: 'Յուղաներկ կտավի վրա',
  dimensions: '456.5 cm × 651 cm (¡gigantesco!)',
  location: 'Museo Estatal Ruso, San Petersburgo',
  locationHy: 'Պետական ռուսական թանգարան, Սանկտ Պետերբուրգ',
  primaryImage: '/pompeii-brullov.jpg',
  fallbackImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Karl_Brullov_-_The_Last_Day_of_Pompeii_-_Google_Art_Project.jpg/1280px-Karl_Brullov_-_The_Last_Day_of_Pompeii_-_Google_Art_Project.jpg',
  wikimediaOriginalUrl: 'https://commons.wikimedia.org/wiki/File:Karl_Brullov_-_The_Last_Day_of_Pompeii_-_Google_Art_Project.jpg'
};

export const UI_STRINGS: Record<string, TranslatedText> = {
  appName: {
    es: 'El último día de Pompeya',
    hy: 'Պոմպեյի վերջին օրը',
    ru: 'Последний день Помпеи'
  },
  subtitle: {
    es: 'Aprende español e historia a través de la obra maestra de Karl Briullov (1833)',
    hy: 'Սովորիր իսպաներեն և պատմություն Կառլ Բրյուլովի գլուխգործոցի միջոցով (1833)',
    ru: 'Изучай испанский язык и историю с шедевром Карла Брюллова (1833)'
  },
  explorarCuadro: {
    es: 'Explorar el cuadro',
    hy: 'Ուսումնասիրել նկարը',
    ru: 'Исследовать картину'
  },
  conocerHistoria: {
    es: 'Conocer la historia',
    hy: 'Իմանալ պատմությունը',
    ru: 'Узнать историю'
  },
  juegos: {
    es: 'Juegos',
    hy: 'Խաղեր',
    ru: 'Игры'
  },
  hacerQuiz: {
    es: 'Hacer el quiz',
    hy: 'Անցնել վիկտորինան',
    ru: 'Пройти викторину'
  },
  aprenderVocabulario: {
    es: 'Aprender vocabulario',
    hy: 'Սովորել բառապաշար',
    ru: 'Учить слова'
  },
  tapToTranslate: {
    es: 'Toca cualquier frase para ver la traducción al armenio',
    hy: 'Սեղմիր ցանկացած նախադասության վրա՝ հայերեն թարգմանությունը տեսնելու համար',
    ru: 'Нажми на любое предложение, чтобы увидеть перевод на армянский'
  },
  score: {
    es: 'Puntos',
    hy: 'Միավորներ',
    ru: 'Очки'
  },
  repeat: {
    es: 'Repetir',
    hy: 'Կրկնել',
    ru: 'Повторить'
  },
  continue: {
    es: 'Continuar',
    hy: 'Շարունակել',
    ru: 'Продолжить'
  },
  toHome: {
    es: 'Ir al inicio',
    hy: 'Գլխավոր էջ',
    ru: 'На главную'
  },
  soundOn: {
    es: 'Sonido activado',
    hy: 'Ձայնը միացված է',
    ru: 'Звук включен'
  },
  soundOff: {
    es: 'Sonido silenciado',
    hy: 'Ձայնն անջատված է',
    ru: 'Звук выключен'
  }
};

// 6 CHAPTERS OF HISTORY
export const HISTORY_CHAPTERS: HistoryChapter[] = [
  {
    id: 'capitulo-1',
    number: 1,
    title: {
      es: 'Capítulo 1. La ciudad de Pompeya',
      hy: 'Գլուխ 1. Պոմպեյ քաղաքը',
      ru: 'Глава 1. Город Помпеи'
    },
    subtitle: {
      es: 'Una próspera y colorida ciudad romana junto al mar Tirreno',
      hy: 'Հռոմեական ծաղկուն և գեղեցիկ քաղաք Տիրենյան ծովի ափին',
      ru: 'Процветающий римский город у Тирренского моря'
    },
    quote: {
      es: 'Pompeya era un lugar lleno de vida, con teatros, baños públicos, panaderías y hermosas casas decoradas con frescos.',
      hy: 'Պոմպեյը լի էր կյանքով. այնտեղ կային թատրոններ, հասարակական բաղնիքներ, հացի փռեր և որմնանկարներով զարդարված շքեղ տներ։',
      ru: 'Помпеи были полны жизни: с театрами, общественными банями, пекарнями и домами с фресками.'
    },
    quoteAuthor: 'Historia romana',
    focusX: 50,
    focusY: 50,
    paragraphs: [
      {
        es: 'Pompeya era una floreciente ciudad del Imperio romano, situada cerca de la actual Nápoles, en Italia.',
        hy: 'Պոմպեյը Հռոմեական կայսրության ծաղկուն քաղաք էր, որը գտնվում էր ժամանակակից Նեապոլի մոտակայքում՝ Իտալիայում։',
        ru: 'Помпеи были процветающим городом Римской империи, расположенным недалеко от современного Неаполя.'
      },
      {
        es: 'En la ciudad vivían unas veinte mil personas que disfrutaban de un clima cálido y tierras muy fértiles.',
        hy: 'Քաղաքում ապրում էր շուրջ քսան հազար մարդ, ովքեր վայելում էին տաք կլիման և չափազանց բարեբեր հողերը։',
        ru: 'В городе проживало около двадцати тысяч человек, наслаждавшихся теплым климатом и плодородными почвами.'
      },
      {
        es: 'Las calles tenían aceras elevadas de piedra y pasos de peatones para no pisar el agua de la lluvia.',
        hy: 'Փողոցներն ունեին քարե բարձր մայթեր և հետիոտնային անցումներ, որպեսզի մարդիկ անձրևաջրերով չքայլեն։',
        ru: 'На улицах были высокие каменные тротуары и пешеходные переходы.'
      },
      {
        es: 'Los habitantes tenían tiendas, mercados, templos a los dioses y grandes anfiteatros para espectáculos.',
        hy: 'Բնակիչներն ունեին խանութներ, շուկաներ, տաճարներ՝ նվիրված աստվածներին, և մեծ ամֆիթատրոններ՝ ներկայացումների համար։',
        ru: 'У жителей были лавки, рынки, храмы богов и большие амфитеатры для зрелищ.'
      },
      {
        es: 'Nadie sospechaba que la montaña verde y tranquila que se alzaba junto a ellos era un volcán temible.',
        hy: 'Ոչ ոք չէր կասկածում, որ իրենց կողքին վեր խոյացող կանաչ ու խաղաղ լեռն իրականում ահեղ հրաբուխ էր։',
        ru: 'Никто не подозревал, что зеленая спокойная гора рядом была грозным вулканом.'
      }
    ]
  },
  {
    id: 'capitulo-2',
    number: 2,
    title: {
      es: 'Capítulo 2. La erupción del Vesubio',
      hy: 'Գլուխ 2. Վեզուվի ժայթքումը',
      ru: 'Глава 2. Извержение Везувия'
    },
    subtitle: {
      es: 'El fatídico cataclismo del año 79 d. C. que sepultó la ciudad',
      hy: 'Մ.թ. 79 թվականի ճակատագրական աղետը, որը թաղեց քաղաքը',
      ru: 'Роковая катастрофа 79 года н. э., похоронившая город'
    },
    quote: {
      es: 'Una inmensa nube negra, con forma de pino mediterráneo, cubrió por completo la luz del sol.',
      hy: 'Միջերկրածովյան սոճու տեսք ունեցող հսկայական սև ամպն ամբողջությամբ փակեց արևի լույսը։',
      ru: 'Огромное черное облако в форме сосны-пинии полностью затмило солнечный свет.'
    },
    quoteAuthor: 'Plinio el Joven, cartas a Tácito',
    focusX: 28,
    focusY: 18,
    paragraphs: [
      {
        es: 'En el año 79 después de Cristo, el monte Vesubio despertó con una fuerza destructiva sin precedentes.',
        hy: 'Քրիստոսից հետո 79 թվականին Վեզուվ լեռն արթնացավ աննախադեպ ավերիչ ուժով։',
        ru: 'В 79 году нашей эры гора Везувий проснулась с беспрецедентной разрушительной силой.'
      },
      {
        es: 'Una explosión descomunal lanzó a la atmósfera millones de toneladas de piedra pómez, gases tóxicos y ceniza caliente.',
        hy: 'Հսկայական պայթյունը մթնոլորտ նետեց միլիոնավոր տոննա չեչաքար (պեմզա), թունավոր գազեր և տաք մոխիր։',
        ru: 'Колоссальный взрыв выбросил в атмосферу миллионы тонн пемзы, токсичных газов и горячего пепла.'
      },
      {
        es: 'El cielo se volvió completamente oscuro en pleno día y los relámpagos volcánicos iluminaban el terror de la gente.',
        hy: 'Կեսօրին երկինքն ամբողջությամբ մթնեց, իսկ հրաբխային կայծակները լուսավորում էին մարդկանց սարսափը։',
        ru: 'Среди бела дня небо полностью потемнело, а вулканические молнии освещали ужас людей.'
      },
      {
        es: 'Muchos ciudadanos intentaron huir hacia el mar, protegiéndose la cabeza con almohadas y telas.',
        hy: 'Շատ քաղաքացիներ փորձում էին փախչել դեպի ծովը՝ գլուխները պաշտպանելով բարձերով և կտորներով։',
        ru: 'Многие горожане пытались бежать к морю, защищая головы подушками и тканями.'
      },
      {
        es: 'En pocas horas, la ciudad de Pompeya quedó enterrada bajo varios metros de ceniza volcánica durante diecisiete siglos.',
        hy: 'Մի քանի ժամում Պոմպեյ քաղաքը թաղվեց մի քանի մետր հրաբխային մոխրի տակ տասնյոթ դար շարունակ։',
        ru: 'За несколько часов город Помпеи оказался погребен под многометровым слоем пепла на семнадцать веков.'
      }
    ]
  },
  {
    id: 'capitulo-3',
    number: 3,
    title: {
      es: 'Capítulo 3. Karl Briullov',
      hy: 'Գլուխ 3. Կառլ Բրյուլով',
      ru: 'Глава 3. Карл Брюллов'
    },
    subtitle: {
      es: 'El genial pintor romántico y su viaje revelador a las ruinas italianas',
      hy: 'Հանճարեղ ռոմանտիկ նկարիչը և նրա բացառիկ ճամփորդությունը դեպի իտալական ավերակները',
      ru: 'Гениальный художник-романтик и его поездка к итальянским руинам'
    },
    quote: {
      es: 'Cuando caminé por las calles desenterradas de Pompeya, sentí que la tragedia acababa de suceder.',
      hy: 'Երբ քայլում էի Պոմպեյի պեղված փողոցներով, ինձ թվաց, թե ողբերգությունը հենց նոր է տեղի ունեցել։',
      ru: 'Когда я шел по раскопанным улицам Помпей, мне казалось, что трагедия произошла только что.'
    },
    quoteAuthor: 'Karl Briullov',
    focusX: 14,
    focusY: 39,
    paragraphs: [
      {
        es: 'Karl Briullov nació en San Petersburgo en 1799 en una familia de artistas con raíces francesas e italianas.',
        hy: 'Կառլ Բրյուլովը ծնվել է 1799 թվականին Սանկտ Պետերբուրգում՝ ֆրանսիական և իտալական արմատներ ունեցող արվեստագետների ընտանիքում։',
        ru: 'Карл Брюллов родился в Санкт-Петербурге в 1799 году в семье художников.'
      },
      {
        es: 'En 1827, el joven pintor visitó por primera vez las excavaciones arqueológicas de Pompeya.',
        hy: '1827 թվականին երիտասարդ նկարիչն առաջին անգամ այցելեց Պոմպեյի հնագիտական պեղումների վայրը։',
        ru: 'В 1827 году молодой художник впервые посетил археологические раскопки Помпей.'
      },
      {
        es: 'Quedó tan profundamente conmovido al ver las casas intactas y los esqueletos que decidió crear un cuadro histórico monumental.',
        hy: 'Նա այնքան խորապես հուզվեց՝ տեսնելով պահպանված տներն ու կմախքները, որ որոշեց ստեղծել մոնումենտալ պատմական կտավ։',
        ru: 'Он был так глубоко потрясен нетронутыми домами и останками, что решил создать монументальное полотно.'
      },
      {
        es: 'Briullov pasó días enteros dibujando bocetos de las ruinas romanas, las tumbas y las antiguas vasijas.',
        hy: 'Բրյուլովն օրեր շարունակ էսքիզներ էր անում հռոմեական ավերակներից, դամբարաններից և հին սափորներից։',
        ru: 'Брюллов целыми днями делал зарисовки руин, гробниц и древних сосудов.'
      },
      {
        es: 'Su patrocinador, el conde Anatoli Demídov, financió la compra de los materiales para la inmensa obra.',
        hy: 'Նրա հովանավորը՝ կոմս Անատոլի Դեմիդովը, ֆինանսավորեց նյութերի ձեռքբերումը հսկայական կտավի համար։',
        ru: 'Его меценат, граф Анатолий Демидов, профинансировал создание грандиозного полотна.'
      }
    ]
  },
  {
    id: 'capitulo-4',
    number: 4,
    title: {
      es: 'Capítulo 4. La creación de la obra',
      hy: 'Գլուխ 4. Կտավի ստեղծումը',
      ru: 'Глава 4. Создание шедевра'
    },
    subtitle: {
      es: 'Seis años de intenso trabajo, investigación rigurosa y genialidad artística',
      hy: 'Վեց տարվա լարված աշխատանք, խորը հետազոտություն և արվեստի հանճար',
      ru: 'Шесть лет упорного труда, исследований и художественного гения'
    },
    quote: {
      es: 'Briullov trabajó con tanta pasión que a menudo sus amigos tenían que sacarlo del taller casi sin fuerzas.',
      hy: 'Բրյուլովն աշխատում էր այնպիսի կրքով, որ հաճախ ընկերները ստիպված էին նրան ուժասպառ վիճակում դուրս բերել արվեստանոցից։',
      ru: 'Брюллов работал с такой страстью, что друзьям приходилось буквально выносить его из мастерской.'
    },
    quoteAuthor: 'Memorias de sus contemporáneos',
    focusX: 50,
    focusY: 50,
    paragraphs: [
      {
        es: 'Briullov tardó unos seis años en completar el cuadro, desde sus primeros bocetos en 1827 hasta su finalización en 1833.',
        hy: 'Բրյուլովից պահանջվեց շուրջ վեց տարի կտավն ավարտելու համար՝ սկսած 1827-ի առաջին էսքիզներից մինչև 1833-ի ավարտը։',
        ru: 'Брюллову потребовалось около шести лет, чтобы завершить картину (1827–1833).'
      },
      {
        es: 'El lienzo tiene un tamaño impresionante: más de cuatro metros y medio de alto por seis metros y medio de ancho.',
        hy: 'Կտավն ունի ապշեցուցիչ չափսեր՝ ավելի քան չորսուկես մետր բարձրություն և վեցուկես մետր լայնություն։',
        ru: 'Холст имеет внушительные размеры: более 4,5 метров в высоту и 6,5 метров в ширину.'
      },
      {
        es: 'Una de las grandes genialidades del pintor es la doble iluminación que usó en la escena.',
        hy: 'Նկարչի մեծագույն հանճարեղություններից մեկը տեսարանում օգտագործված կրկնակի լուսավորությունն է։',
        ru: 'Одна из главных гениальных находок художника — двойное освещение сцены.'
      },
      {
        es: 'Por un lado, la fría luz azulada de los relámpagos ilumina las figuras en primer plano.',
        hy: 'Մի կողմից՝ կայծակների սառը կապտավուն լույսը լուսավորում է առաջին պլանի կերպարներին։',
        ru: 'С одной стороны, холодный синеватый свет молний озаряет фигуры на переднем плане.'
      },
      {
        es: 'Por otro lado, el resplandor rojo y ardiente del volcán en el fondo crea un contraste dramático sobrecogedor.',
        hy: 'Մյուս կողմից՝ հետին պլանում հրաբխի շիկացած կարմիր շողքը ստեղծում է ցնցող դրամատիկ հակադրություն։',
        ru: 'С другой стороны, огненно-красное зарево вулкана на фоне создает потрясающий драматический контраст.'
      }
    ]
  },
  {
    id: 'capitulo-5',
    number: 5,
    title: {
      es: 'Capítulo 5. Los secretos del cuadro',
      hy: 'Գլուխ 5. Կտավի գաղտնիքները',
      ru: 'Глава 5. Секреты картины'
    },
    subtitle: {
      es: 'Rostros reales, autorretratos ocultos y la nobleza del espíritu humano',
      hy: 'Իրական դեմքեր, թաքնված ինքնանկար և մարդկային ոգու ազնվությունը',
      ru: 'Реальные лица, скрытый автопортрет и благородство человеческого духа'
    },
    quote: {
      es: 'En medio de la destrucción total, el ser humano no pierde su dignidad, su amor y su deseo de salvar a otros.',
      hy: 'Համատարած կործանման մեջ մարդը չի կորցնում իր արժանապատվությունը, սերն ու ուրիշներին փրկելու ձգտումը։',
      ru: 'Посреди тотального разрушения человек не теряет достоинства, любви и стремления спасти близких.'
    },
    quoteAuthor: 'Crítica de arte',
    focusX: 14,
    focusY: 39,
    paragraphs: [
      {
        es: 'A diferencia de otras escenas de desastre, Briullov no muestra caos egoísta, sino nobleza y solidaridad.',
        hy: 'Ի տարբերություն աղետի այլ տեսարանների՝ Բրյուլովը չի պատկերում եսասիրական քաոս, այլ՝ ազնվություն և համերաշխություն։',
        ru: 'В отличие от других картин катастроф, Брюллов показывает не эгоистичный хаос, а благородство и солидарность.'
      },
      {
        es: 'Vemos a dos hijos fuertes que cargan sobre sus hombros a su anciano padre para salvarlo de las piedras.',
        hy: 'Մենք տեսնում ենք երկու ուժեղ որդիների, ովքեր իրենց ուսերին են տանում տարեց հորը՝ նրան քարերից փրկելու համար։',
        ru: 'Мы видим двух сыновей, несущих на плечах пожилого отца, чтобы уберечь его от падающих камней.'
      },
      {
        es: 'El propio pintor Karl Briullov se representó a sí mismo en la esquina izquierda con una caja de pinturas en la cabeza.',
        hy: 'Ինքը՝ նկարիչ Կառլ Բրյուլովը, պատկերել է իրեն ձախ անկյունում՝ գլխավերևում ներկերի արկղը բռնած։',
        ru: 'Сам художник Карл Брюллов изобразил себя в левом углу с ящиком красок на голове.'
      },
      {
        es: 'El rostro de su gran musa y amiga, la condesa Yulia Samóilova, aparece en cuatro personajes femeninos diferentes.',
        hy: 'Նրա մեծ մուսայի և ընկերուհու՝ կոմսուհի Յուլիա Սամոյլովայի դեմքը հայտնվում է չորս տարբեր կանացի կերպարներում։',
        ru: 'Лицо его музы, графини Юлии Самойловой, появляется в четырех разных женских образах.'
      },
      {
        es: 'Ella es la mujer noble caída en el suelo en el centro, la madre con sus hijas y la dama con la vasija.',
        hy: 'Նա է կենտրոնում գետնին ընկած ազնվական կինը, աղջիկներին գրկած մայրը և սափորով տիկինը։',
        ru: 'Она — упавшая на мостовую знатная женщина в центре, мать с дочерьми и дама с кувшином.'
      }
    ]
  },
  {
    id: 'capitulo-6',
    number: 6,
    title: {
      es: 'Capítulo 6. La importancia del cuadro',
      hy: 'Գլուխ 6. Կտավի նշանակությունը',
      ru: 'Глава 6. Значение картины'
    },
    subtitle: {
      es: 'El triunfo internacional en Roma, Milán, París y el orgullo de la cultura mundial',
      hy: 'Միջազգային հաղթարշավը Հռոմում, Միլանում, Փարիզում և համաշխարհային մշակույթի հպարտությունը',
      ru: 'Международный триумф в Риме, Милане, Париже и гордость мировой культуры'
    },
    quote: {
      es: '«Y se convirtió "El último día de Pompeya" para la brocha rusa en el primer día», escribió el poeta Yevgueni Baratynski.',
      hy: '«Եվ "Պոմպեյի վերջին օրը" ռուսական վրձնի համար դարձավ առաջին օր»,— գրել է բանաստեղծ Եվգենի Բարատինսկին։',
      ru: '«И был "Последний день Помпеи" для русской кисти первый день», — писал поэт Евгений Баратынский.'
    },
    quoteAuthor: 'Yevgueni Baratynski (1834)',
    focusX: 50,
    focusY: 50,
    paragraphs: [
      {
        es: 'Cuando Briullov expuso el cuadro en Roma y Milán, miles de personas hicieron cola en la calle para contemplarlo.',
        hy: 'Երբ Բրյուլովը ցուցադրեց կտավը Հռոմում և Միլանում, հազարավոր մարդիկ հերթ կանգնեցին փողոցում այն տեսնելու համար։',
        ru: 'Когда Брюллов выставил картину в Риме и Милане, тысячи людей выстраивались в очереди, чтобы увидеть ее.'
      },
      {
        es: 'En el Salón de París de 1834, la obra ganó la prestigiosa medalla de oro del festival.',
        hy: '1834 թվականի Փարիզի սալոնում կտավն արժանացավ փառատոնի հեղինակավոր ոսկե մեդալին։',
        ru: 'На Парижском салоне 1834 года картина завоевала престижную золотую медаль.'
      },
      {
        es: 'Grandes escritores rusos como Aleksandr Pushkin y Nikolái Gógol dedicaron poemas y ensayos entusiastas a la obra.',
        hy: 'Մեծ ռուս գրողներ Ալեքսանդր Պուշկինը և Նիկոլայ Գոգոլը ոգեշունչ բանաստեղծություններ և էսսեներ նվիրեցին կտավին։',
        ru: 'Великие писатели Александр Пушкин и Николай Гоголь посвятили картине восторженные стихи и статьи.'
      },
      {
        es: 'Hoy en día, el cuadro se conserva en el Museo Estatal Ruso de San Petersburgo como una joya del Romanticismo mundial.',
        hy: 'Այսօր կտավը պահպանվում է Սանկտ Պետերբուրգի Պետական ռուսական թանգարանում՝ որպես համաշխարհային ռոմանտիզմի գոհար։',
        ru: 'Сегодня картина хранится в Государственном Русском музее Санкт-Петербурга как шедевр романтизма.'
      },
      {
        es: 'Nos enseña que, incluso ante la fuerza más terrible de la naturaleza, el amor y la compasión humana brillan con fuerza.',
        hy: 'Այն մեզ սովորեցնում է, որ նույնիսկ բնության ամենասարսափելի ուժի առաջ մարդկային սերն ու կարեկցանքը պայծառորեն շողում են։',
        ru: 'Она учит нас, что даже перед лицом страшной стихии любовь и сострадание человека сияют ярко.'
      }
    ]
  }
];

// INTERACTIVE HOTSPOTS FOR "EXPLORA EL CUADRO"
export const PAINTING_HOTSPOTS: PaintingHotspot[] = [
  {
    id: 'volcan-cielo',
    name: {
      es: 'El volcán Vesubio y el relámpago',
      hy: 'Վեզուվ հրաբուխը և կայծակը',
      ru: 'Вулкан Везувий и молния'
    },
    x: 28,
    y: 16,
    radiusPercent: 9,
    description: {
      es: 'En el fondo se ve el temible cráter del Vesubio expulsando columnas ardientes de lava y humo espeso. Un relámpago en zigzag rasga la oscuridad del cielo.',
      hy: 'Հետին պլանում երևում է Վեզուվի ահասարսուռ խառնարանը, որը ժայթքում է լավայի կրակոտ սյուներ և թանձր ծուխ։ Զիգզագաձև կայծակը ճեղքում է երկնքի խավարը։',
      ru: 'На фоне виден грозный кратер Везувия, извергающий столбы лавы и густой дым. Зигзаг молнии рассекает тьму неба.'
    },
    fact: {
      es: 'La erupción generó relámpagos volcánicos reales, provocados por la fricción de millones de partículas de ceniza caliente en el aire.',
      hy: 'Հրաբխային ժայթքումն առաջացրել է իրական կայծակներ, որոնք ծագել են օդում մոխրի միլիոնավոր տաք մասնիկների շփումից։',
      ru: 'Извержение породило настоящие вулканические молнии из-за трения частиц горячего пепла в воздухе.'
    },
    artSignificance: {
      es: 'Briullov utilizó este relámpago para justificar la luz blanca y fría que ilumina el rostro de los personajes principales.',
      hy: 'Բրյուլովն օգտագործել է այս կայծակը՝ բացատրելու համար սառը սպիտակ լույսը, որը լուսավորում է գլխավոր հերոսների դեմքերը։',
      ru: 'Брюллов использовал эту молнию, чтобы оправдать холодный белый свет на лицах персонажей.'
    },
    question: {
      question: {
        es: '¿Qué fenómeno ilumina el cielo nocturno y crea la luz fría sobre los personajes?',
        hy: 'Ո՞ր երևույթն է լուսավորում գիշերային երկինքը և սառը լույս սփռում կերպարների վրա։',
        ru: 'Какое явление освещает ночное небо и создает холодный свет на фигурах?'
      },
      options: [
        { es: 'Un relámpago en zigzag', hy: 'Զիգզագաձև կայծակը', ru: 'Зигзаг молнии' },
        { es: 'La luz de la luna llena', hy: 'Լիալուսնի լույսը', ru: 'Свет полной луны' },
        { es: 'Un fuego artificial romano', hy: 'Հռոմեական հրավառությունը', ru: 'Римский фейерверк' }
      ],
      correctIndex: 0,
      explanation: {
        es: '¡Correcto! El relámpago volcánico rasga la oscuridad y proporciona la luz fría y teatral.',
        hy: 'Ճիշտ է։ Հրաբխային կայծակը պատռում է խավարը և ստեղծում թատերական սառը լույսը։',
        ru: 'Верно! Вулканическая молния прорезает тьму и дает холодный свет.'
      }
    }
  },
  {
    id: 'autorretrato-briullov',
    name: {
      es: 'Autorretrato de Karl Briullov',
      hy: 'Կառլ Բրյուլովի ինքնանկարը',
      ru: 'Автопортрет Карла Брюллова'
    },
    x: 14.5,
    y: 38.5,
    radiusPercent: 6,
    description: {
      es: 'En el lado izquierdo, entre la multitud asustada, un joven artista lleva sobre su cabeza una caja de madera con pinceles y botes de pintura.',
      hy: 'Ձախ կողմում՝ վախեցած ամբոխի մեջ, երիտասարդ նկարիչն իր գլխավերևում տանում է վրձիններով և ներկերի տարաներով փայտե արկղը։',
      ru: 'Слева, среди испуганной толпы, молодой художник держит на голове ящик с кистями и красками.'
    },
    fact: {
      es: 'Es el propio pintor Karl Briullov a los 30 años. Se incluyó en el cuadro para simbolizar que el arte es testigo eterno de la historia humana.',
      hy: 'Սա ինքը՝ 30-ամյա նկարիչ Կառլ Բրյուլովն է։ Նա իրեն պատկերել է կտավում՝ խորհրդանշելու, որ արվեստը մարդկային պատմության հավերժ վկան է։',
      ru: 'Это сам художник Карл Брюллов в возрасте около 30 лет. Он включил себя как свидетеля трагедии.'
    },
    artSignificance: {
      es: 'Mientras otros huyen desesperados, él mira fijamente hacia adelante, memorizando cada detalle de la catástrofe para plasmarlo en el lienzo.',
      hy: 'Մինչ մյուսները փախչում են հուսահատված, նա ուշադիր նայում է առաջ՝ մտապահելով աղետի յուրաքանչյուր մանրուք՝ կտավին հանձնելու համար։',
      ru: 'Пока другие бегут, он смотрит вперед, запоминая каждую деталь катастрофы.'
    },
    question: {
      question: {
        es: '¿Qué objeto lleva el artista Karl Briullov sobre su cabeza?',
        hy: 'Ի՞նչ առարկա է կրում նկարիչ Կառլ Բրյուլովն իր գլխին։',
        ru: 'Какой предмет держит художник Карл Брюллов на голове?'
      },
      options: [
        { es: 'Una caja con pinceles y pinturas', hy: 'Ներկերով և վրձիններով արկղ', ru: 'Ящик с кистями и красками' },
        { es: 'Un casco de soldado romano', hy: 'Հռոմեացի զինվորի սաղավարտ', ru: 'Шлем римского воина' },
        { es: 'Un saco lleno de monedas de oro', hy: 'Ոսկե դրամներով լի պարկ', ru: 'Мешок с золотыми монетами' }
      ],
      correctIndex: 0,
      explanation: {
        es: '¡Exacto! Briullov lleva sus herramientas de pintor: su caja, pinceles y pinturas.',
        hy: 'Ճիշտ է։ Բրյուլովը տանում է իր նկարչական գործիքները՝ արկղը, վրձիններն ու ներկերը։',
        ru: 'Точно! Брюллов несет орудия своего труда: ящик, кисти и краски.'
      }
    }
  },
  {
    id: 'mujer-caida',
    name: {
      es: 'La mujer noble caída y el bebé',
      hy: 'Ընկած ազնվական կինը և մանկիկը',
      ru: 'Погибшая знатная женщина и младенец'
    },
    x: 48,
    y: 84,
    radiusPercent: 7.5,
    description: {
      es: 'En el centro mismo del primer plano, una hermosa mujer vestida de amarillo ha caído muerta del carro. A su lado, su pequeño bebé llora e intenta tocarla.',
      hy: 'Առաջին պլանի հենց կենտրոնում դեղին զգեստով գեղեցիկ կինը մահացած ընկել է կառքից։ Նրա կողքին փոքրիկ մանկիկը լալիս է և փորձում դիպչել նրան։',
      ru: 'В самом центре переднего плана прекрасная женщина в желтом одеянии выпала из колесницы. Рядом плачет ее младенец.'
    },
    fact: {
      es: 'Los arqueólogos encontraron en Pompeya esqueletos reales de madres protegiendo a sus bebés, lo que inspiró esta conmovedora escena.',
      hy: 'Հնագետները Պոմպեյում հայտնաբերել են մայրերի իրական կմախքներ, որոնք պաշտպանում էին իրենց փոքրիկներին, ինչը ոգեշնչել է այս հուզիչ տեսարանը։',
      ru: 'Археологи нашли в Помпеях реальные останки матерей, защищавших младенцев, что вдохновило этот образ.'
    },
    artSignificance: {
      es: 'Esta figura simboliza la caída y el fin del brillante mundo antiguo, pero el bebé vivo representa la esperanza de la continuidad de la vida.',
      hy: 'Այս կերպարը խորհրդանշում է հին աշխարհի անկումն ու վախճանը, բայց ողջ մնացած մանկիկը մարմնավորում է կյանքի շարունակականության հույսը։',
      ru: 'Она символизирует гибель античного мира, а живой младенец — надежду на продолжение жизни.'
    },
    question: {
      question: {
        es: '¿Qué hace el pequeño bebé junto a su madre caída?',
        hy: 'Ի՞նչ է անում փոքրիկ մանկիկն ընկած մոր կողքին։',
        ru: 'Что делает маленький ребенок рядом с упавшей матерью?'
      },
      options: [
        { es: 'Llora e intenta tocarla', hy: 'Լալիս է և փորձում դիպչել նրան', ru: 'Плачет и пытается дотянуться до нее' },
        { es: 'Duerme plácidamente', hy: 'Հանգիստ քնած է', ru: 'Спокойно спит' },
        { es: 'Juega con una piedra', hy: 'Խաղում է քարի հետ', ru: 'Играет с камнем' }
      ],
      correctIndex: 0,
      explanation: {
        es: '¡Así es! El bebé llora sin entender la tragedia, convirtiéndose en el símbolo más conmovedor del cuadro.',
        hy: 'Ճիշտ այդպես։ Երեխան լալիս է՝ չհասկանալով ողբերգությունը, և դառնում կտավի ամենահուզիչ խորհրդանիշը։',
        ru: 'Именно так! Младенец плачет, не понимая трагедии.'
      }
    }
  },
  {
    id: 'hijos-padre',
    name: {
      es: 'Los dos hijos que cargan a su anciano padre',
      hy: 'Երկու որդիները, որոնք տանում են իրենց ծեր հորը',
      ru: 'Сыновья, несущие пожилого отца'
    },
    x: 88,
    y: 64,
    radiusPercent: 7.5,
    description: {
      es: 'En el lado derecho, dos jóvenes valientes y musculosos llevan en brazos a su anciano padre debilitado, arriesgando sus vidas para no abandonarlo.',
      hy: 'Աջ կողմում երկու քաջարի և մկանուտ երիտասարդներ գրկած տանում են իրենց տկարացած ծեր հորը՝ վտանգելով կյանքը, որպեսզի նրան մենակ չթողնեն։',
      ru: 'Справа двое сильных молодых сыновей несут на руках немощного отца, рискуя жизнью, чтобы не бросить его.'
    },
    fact: {
      es: 'Esta escena recuerda el célebre mito romano de Eneas, quien rescató a su anciano padre Anquises de las llamas de la destruida Troya.',
      hy: 'Այս տեսարանը հիշեցնում է Էնեասի հայտնի հռոմեական առասպելը, ով այրվող Տրոյայից փրկեց իր ծեր հորը՝ Անքիսեսին։',
      ru: 'Эта сцена напоминает миф об Энее, спасшем отца Анхиса из горящей Трои.'
    },
    artSignificance: {
      es: 'Briullov resalta el amor filial y la devoción familiar como los valores humanos más elevados frente a la catástrofe.',
      hy: 'Բրյուլովն ընդգծում է որդիական սերն ու ընտանեկան նվիրվածությունը՝ որպես աղետի առաջ մարդկային ամենաբարձր արժեքներ։',
      ru: 'Брюллов подчеркивает сыновнюю любовь как высшую ценность перед лицом гибели.'
    },
    question: {
      question: {
        es: '¿Por qué los dos jóvenes no corren más rápido para salvarse solos?',
        hy: 'Ինչո՞ւ երկու երիտասարդներն ավելի արագ չեն վազում՝ միայն իրենց փրկելու համար։',
        ru: 'Почему молодые люди не бегут быстрее, чтобы спастись в одиночку?'
      },
      options: [
        { es: 'Porque prefieren proteger y salvar a su anciano padre', hy: 'Որովհետև նախընտրում են պաշտպանել և փրկել իրենց ծեր հորը', ru: 'Потому что спасают своего пожилого отца' },
        { es: 'Porque están buscando dinero en el suelo', hy: 'Որովհետև գետնին փող են փնտրում', ru: 'Потому что ищут монеты на земле' },
        { es: 'Porque quieren ver el volcán de cerca', hy: 'Որովհետև ուզում են հրաբուխը մոտիկից տեսնել', ru: 'Потому что хотят посмотреть на вулкан' }
      ],
      correctIndex: 0,
      explanation: {
        es: '¡Exacto! El amor hacia su padre es más fuerte que el miedo a la muerte.',
        hy: 'Ճիշտ է։ Հոր հանդեպ սերն ավելի զորեղ է, քան մահվան վախը։',
        ru: 'Верно! Любовь к отцу сильнее страха смерти.'
      }
    }
  },
  {
    id: 'joven-novia',
    name: {
      es: 'El joven y su novia desmayada',
      hy: 'Երիտասարդը և նրա ուշաթափված հարսնացուն',
      ru: 'Юноша с невестой без чувств'
    },
    x: 62,
    y: 62,
    radiusPercent: 7,
    description: {
      es: 'Un joven desesperado sostiene en sus brazos a su prometida, quien yace pálida e inconsciente, coronada con flores de boda.',
      hy: 'Հուսահատ երիտասարդն իր գրկում պահում է հարսնացուին, ով գունատ ու անգիտակից է՝ հարսանեկան ծաղկեպսակով զարդարված։',
      ru: 'Юноша в отчаянии держит на руках невесту с венком из цветов, лежащую без чувств.'
    },
    fact: {
      es: 'La corona de flores en la cabeza de la joven indica que su boda se celebraba ese mismo día trágico.',
      hy: 'Երիտասարդ աղջկա գլխի ծաղկեպսակը վկայում է, որ նրանց հարսանիքը հենց այդ ողբերգական օրն էր տեղի ունենում։',
      ru: 'Венок на голове девушки указывает на то, что их свадьба должна была состояться в этот роковой день.'
    },
    artSignificance: {
      es: 'El rostro del joven refleja una angustia desgarradora: intenta escuchar si el corazón de su amada aún late.',
      hy: 'Երիտասարդի դեմքն արտացոլում է սրտաճմլիկ տառապանք. նա փորձում է լսել՝ արդյոք իր սիրելիի սիրտը դեռ բաբախում է։',
      ru: 'Лицо юноши выражает щемящую тоску: он слушает, бьется ли еще сердце возлюбленной.'
    },
    question: {
      question: {
        es: '¿Qué adorno lleva la joven en el cabello que revela sus planes interrumpidos?',
        hy: 'Ի՞նչ զարդարանք ունի երիտասարդ աղջիկն իր մազերի մեջ, որը բացահայտում է ընդհատված ծրագրերը։',
        ru: 'Какое украшение в волосах девушки раскрывает прерванные планы?'
      },
      options: [
        { es: 'Una corona de flores de boda', hy: 'Հարսանեկան ծաղկեպսակ', ru: 'Свадебный венок из цветов' },
        { es: 'Una corona de laurel dorado', hy: 'Ոսկե դափնեպսակ', ru: 'Золотой лавровый венок' },
        { es: 'Una cinta de seda roja', hy: 'Կարմիր մետաքսե ժապավեն', ru: 'Красная шелковая лента' }
      ],
      correctIndex: 0,
      explanation: {
        es: '¡Correcto! Lleva una corona de flores, símbolo de la boda truncada por la catástrofe.',
        hy: 'Ճիշտ է։ Նա կրում է ծաղկեպսակ՝ աղետից ընդհատված հարսանիքի խորհրդանիշը։',
        ru: 'Верно! На ней венок невесты, символ разрушенного стихией счастья.'
      }
    }
  },
  {
    id: 'madre-hijas',
    name: {
      es: 'La madre con sus dos hijas abrazadas',
      hy: 'Մայրն իր երկու աղջիկներին գրկած',
      ru: 'Мать, обнимающая двух дочерей'
    },
    x: 11,
    y: 72,
    radiusPercent: 7,
    description: {
      es: 'En el extremo izquierdo, una madre sentada en el suelo abraza fuertemente a sus dos pequeñas hijas con ternura y dolor infinito.',
      hy: 'Ձախ ծայրում գետնին նստած մայրն անսահման քնքշությամբ և ցավով ամուր գրկել է իր երկու փոքրիկ դուստրերին։',
      ru: 'Слева сидящая на мостовой мать с нежностью и болью прижимает к себе двух маленьких дочерей.'
    },
    fact: {
      es: 'Para los rostros de la madre y la hija mayor, Briullov se inspiró en su amiga, la condesa Yulia Samóilova.',
      hy: 'Մոր և ավագ աղջկա դեմքերի համար Բրյուլովը ոգեշնչվել է իր ընկերուհուց՝ կոմսուհի Յուլիա Սամոյլովայից։',
      ru: 'Для лиц матери и старшей дочери художник вдохновлялся графиней Юлией Самойловой.'
    },
    artSignificance: {
      es: 'En vez de intentar escapar, la madre usa su propio cuerpo como escudo contra las cenizas y piedras ardientes que caen del cielo.',
      hy: 'Փախչելու փոխարեն՝ մայրն իր սեփական մարմինն է օգտագործում որպես վահան՝ երկնքից տեղացող մոխրի և շիկացած քարերի դեմ։',
      ru: 'Вместо бегства мать закрывает детей своим телом от града раскаленных камней.'
    },
    question: {
      question: {
        es: '¿Cómo protege la madre a sus dos hijas?',
        hy: 'Ինչպե՞ս է մայրը պաշտպանում իր երկու դուստրերին։',
        ru: 'Как мать защищает своих двух дочерей?'
      },
      options: [
        { es: 'Las abraza y las cubre con su propio cuerpo', hy: 'Գրկում և ծածկում է նրանց իր իսկ մարմնով', ru: 'Обнимает и укрывает их своим телом' },
        { es: 'Las esconde dentro de una cueva', hy: 'Թաքցնում է նրանց քարանձավում', ru: 'Прячет их в пещере' },
        { es: 'Les da paraguas de hierro', hy: 'Նրանց երկաթե անձրևանոցներ է տալիս', ru: 'Дает им железные зонтики' }
      ],
      correctIndex: 0,
      explanation: {
        es: '¡Exacto! El instinto materno hace que use su propio cuerpo para salvaguardar a sus hijas.',
        hy: 'Ճիշտ է։ Մայրական բնազդը ստիպում է նրան իր մարմնով պատսպարել երեխաներին։',
        ru: 'Верно! Материнский инстинкт велит ей закрыть детей собственным телом.'
      }
    }
  },
  {
    id: 'estatuas-cayendo',
    name: {
      es: 'Los templos y las estatuas que caen',
      hy: 'Ընկնող տաճարներն ու արձանները',
      ru: 'Падающие статуи и храмы'
    },
    x: 74,
    y: 22,
    radiusPercent: 8,
    description: {
      es: 'En la parte superior derecha, los temblores del terremoto hacen oscilar los templos romanos. Grandes estatuas de piedra de los antiguos dioses y emperadores caen al vacío.',
      hy: 'Վերին աջ մասում երկրաշարժի ցնցումները ճոճում են հռոմեական տաճարները։ Հին աստվածների և կայսրերի քարե հսկա արձանները գահավիժում են վայր։',
      ru: 'Вверху справа толчки землетрясения раскачивают храмы. Каменные статуи богов и императоров рушатся вниз.'
    },
    fact: {
      es: 'El colapso de las estatuas representa la fragilidad del poder humano ante la furia descomunal de la naturaleza.',
      hy: 'Արձանների փլուզումը խորհրդանշում է մարդկային իշխանության անզորությունը բնության հզոր զայրույթի առջև։',
      ru: 'Падение статуй показывает хрупкость человеческой власти перед лицом стихии.'
    },
    artSignificance: {
      es: 'Briullov captó el dinamismo del derrumbe en pleno vuelo, creando una sensación de movimiento y peligro inminente.',
      hy: 'Բրյուլովը պատկերել է փլուզման դինամիկան հենց ընկնելու պահին՝ ստեղծելով շարժման և մոտալուտ վտանգի տպավորություն։',
      ru: 'Художник запечатлел падение статуй в воздухе, передавая динамику момента.'
    },
    question: {
      question: {
        es: '¿Qué cae de los tejados de los templos debido a los temblores?',
        hy: 'Ի՞նչ է ընկնում տաճարների տանիքներից ցնցումների հետևանքով։',
        ru: 'Что падает с крыш храмов из-за подземных толчков?'
      },
      options: [
        { es: 'Grandes estatuas de piedra', hy: 'Քարե մեծ արձաններ', ru: 'Большие каменные статуи' },
        { es: 'Campanas de oro', hy: 'Ոսկե զանգեր', ru: 'Золотые колокола' },
        { es: 'Árboles frutales', hy: 'Պտղատու ծառեր', ru: 'Фруктовые деревья' }
      ],
      correctIndex: 0,
      explanation: {
        es: '¡Correcto! Las majestuosas estatuas de piedra de los romanos caen al suelo destrozándose.',
        hy: 'Ճիշտ է։ Հռոմեացիների քարե հոյակապ արձանները գետին են ընկնում ու փշրվում։',
        ru: 'Верно! Величественные статуи падают и разбиваются о мостовую.'
      }
    }
  },
  {
    id: 'caballo-desbocado',
    name: {
      es: 'El jinete y el caballo negro encabritado',
      hy: 'Հեծյալը և խրտչած սև ձին',
      ru: 'Всадник и вставший на дыбы вороной конь'
    },
    x: 34,
    y: 55,
    radiusPercent: 6.5,
    description: {
      es: 'Un poderoso corcel negro relincha y se encabrita aterrado por el fuego y el azufre. Su dueño lucha desesperadamente con las riendas para dominarlo.',
      hy: 'Հզոր սև նժույգը խրխնջում է և ծառս լինում՝ սարսափած կրակից ու ծծմբից։ Տերը հուսահատորեն պայքարում է սանձերի հետ՝ նրան հնազանդեցնելու համար։',
      ru: 'Могучий вороной конь встает на дыбы от ужаса перед огнем и пеплом. Всадник изо всех сил натягивает поводья.'
    },
    fact: {
      es: 'Los animales sienten los terremotos mucho antes que las personas; los caballos de Pompeya enloquecían de terror.',
      hy: 'Կենդանիները երկրաշարժը զգում են մարդկանցից շատ ավելի շուտ. Պոմպեյի ձիերը սարսափից խելագարվում էին։',
      ru: 'Животные чуют землетрясение раньше людей; кони в Помпеях были охвачены паникой.'
    },
    artSignificance: {
      es: 'Aporta una tremenda energía dinámica y caos animal a la composición, contrastando con la calma trágica de las familias.',
      hy: 'Սա կոմպոզիցիային հաղորդում է հսկայական դինամիկ էներգիա և կենդանական քաոս՝ հակադրվելով ընտանիքների ողբերգական հանդարտությանը։',
      ru: 'Этот образ вносит мощную динамику и животную панику в драматическую композицию.'
    },
    question: {
      question: {
        es: '¿De qué color es el caballo que se encabrita asustado?',
        hy: 'Ի՞նչ գույնի է վախից ծառս եղած ձին։',
        ru: 'Какого цвета конь, вставший на дыбы от страха?'
      },
      options: [
        { es: 'Negro azabache', hy: 'Սևաթույր (սև)', ru: 'Вороной (черный)' },
        { es: 'Blanco brillante', hy: 'Փայլուն սպիտակ', ru: 'Чисто белый' },
        { es: 'Marrón claro', hy: 'Բաց շագանակագույն', ru: 'Светло-коричневый' }
      ],
      correctIndex: 0,
      explanation: {
        es: '¡Correcto! Es un majestuoso corcel negro que se alza sobre sus patas traseras.',
        hy: 'Ճիշտ է։ Դա հոյակապ սև նժույգ է, որը կանգնել է հետևի ոտքերի վրա։',
        ru: 'Верно! Это мощный вороной конь, вставший на дыбы.'
      }
    }
  },
  {
    id: 'sacerdote-pagano',
    name: {
      es: 'El sacerdote pagano con el trípode',
      hy: 'Հեթանոս քուրմը զոհասեղանի հետ',
      ru: 'Языческий жрец с жертвенным треножником'
    },
    x: 23,
    y: 65,
    radiusPercent: 5.5,
    description: {
      es: 'Un sacerdote de los cultos romanos tradicionales huye asustado, tapándose la cabeza y sujetando con fuerza un trípode ritual de oro bajo el brazo.',
      hy: 'Հռոմեական ավանդական պաշտամունքի քուրմը փախչում է վախեցած՝ գլուխը ծածկած և թևի տակ ամուր պահած ոսկե ծիսական զոհասեղանը (եռոտանին)։',
      ru: 'Жрец традиционных римских культов в панике бежит, прикрыв голову и прижимая золотой треножник.'
    },
    fact: {
      es: 'El trípode era un objeto sagrado usado en los templos romanos para ofrecer sacrificios a dioses como Apolo y Júpiter.',
      hy: 'Եռոտանին սրբազան առարկա էր, որն օգտագործվում էր հռոմեական տաճարներում՝ Ապոլոն և Յուպիտեր աստվածներին զոհաբերություններ մատուցելու համար։',
      ru: 'Треножник служил священным предметом для жертвоприношений богам в римских храмах.'
    },
    artSignificance: {
      es: 'Briullov lo muestra mirando hacia atrás con pánico, sugiriendo que los antiguos dioses paganos son incapaces de salvar a sus devotos.',
      hy: 'Բրյուլովը նրան պատկերել է խուճապահար ետ նայելիս՝ ակնարկելով, որ հին հեթանոսական աստվածներն անզոր են փրկել իրենց հավատացյալներին։',
      ru: 'Художник показывает его панику, намекая на бессилие языческих богов перед катастрофой.'
    },
    question: {
      question: {
        es: '¿Qué objeto ritual sagrado lleva el sacerdote pagano bajo el brazo?',
        hy: 'Ի՞նչ սրբազան ծիսական առարկա է տանում հեթանոս քուրմն իր թևի տակ։',
        ru: 'Какой культовый предмет держит под мышкой языческий жрец?'
      },
      options: [
        { es: 'Un trípode ritual de metal dorado', hy: 'Ոսկեզօծ մետաղյա ծիսական եռոտանի', ru: 'Жертвенный треножник' },
        { es: 'Una copa de vino de madera', hy: 'Փայտե գինու գավաթ', ru: 'Деревянный кубок' },
        { es: 'Una antorcha encendida', hy: 'Վառվող ջահ', ru: 'Горящий факел' }
      ],
      correctIndex: 0,
      explanation: {
        es: '¡Así es! Lleva el trípode sagrado del templo pagano mientras huye despavorido.',
        hy: 'Ճիշտ այդպես։ Նա տանում է հեթանոսական տաճարի սրբազան եռոտանին՝ սարսափահար փախչելով։',
        ru: 'Именно так! Он уносит храмовый треножник, спасаясь бегством.'
      }
    }
  },
  {
    id: 'sacerdote-cristiano',
    name: {
      es: 'El sacerdote cristiano con la cruz y la antorcha',
      hy: 'Քրիստոնյա քահանան խաչով և ջահով',
      ru: 'Христианский священник с крестом'
    },
    x: 6.5,
    y: 56,
    radiusPercent: 5.5,
    description: {
      es: 'En el borde izquierdo, un hombre sereno con una cruz al cuello y una antorcha en la mano contempla la destrucción sin terror terrenal.',
      hy: 'Ձախ եզրին խաղաղ տեսքով մի մարդ՝ պարանոցին խաչ և ձեռքում ջահ, նայում է կործանմանը՝ առանց երկրային սարսափի։',
      ru: 'У левого края спокойный священник с крестом на шее и факелом в руке смотрит на гибель мира без паники.'
    },
    fact: {
      es: 'En Pompeya existieron tempranas comunidades cristianas secretas antes de que la religión fuera legalizada en Roma.',
      hy: 'Պոմպեյում գոյություն են ունեցել վաղ գաղտնի քրիստոնեական համայնքներ, նախքան կրոնը կօրինականացվեր Հռոմում։',
      ru: 'В Помпеях существовали ранние тайные христианские общины до признания религии Римом.'
    },
    artSignificance: {
      es: 'Contrasta directamente con el sacerdote pagano que huye: el cristiano mira al cielo con fe y serenidad espiritual.',
      hy: 'Նա ուղղակիորեն հակադրվում է փախչող հեթանոս քրմին. քրիստոնյան երկնքին է նայում հավատով և հոգևոր հանգստությամբ։',
      ru: 'Он противопоставлен бегущему язычнику: христианин взирает на небеса со спокойной верой.'
    },
    question: {
      question: {
        es: '¿Qué símbolo cuelga del pecho del sacerdote cristiano?',
        hy: 'Ի՞նչ խորհրդանիշ է կախված քրիստոնյա քահանայի կրծքին։',
        ru: 'Какой символ висит на груди христианского священника?'
      },
      options: [
        { es: 'Una cruz de fe', hy: 'Հավատի խաչը', ru: 'Крест веры' },
        { es: 'Una cabeza de león', hy: 'Առյուծի գլուխ', ru: 'Голова льва' },
        { es: 'Una luna dorada', hy: 'Ոսկե լուսին', ru: 'Золотой полумесяц' }
      ],
      correctIndex: 0,
      explanation: {
        es: '¡Correcto! Lleva una cruz pectoral, emblema de la nueva fe cristiana naciente.',
        hy: 'Ճիշտ է։ Նա կրում է կրծքի խաչ՝ նոր ծնվող քրիստոնեական հավատի խորհրդանիշը։',
        ru: 'Верно! Он носит наперсный крест — знак зарождающегося христианства.'
      }
    }
  },
  {
    id: 'plinio-madre',
    name: {
      es: 'El joven Plinio rogando a su madre que huya',
      hy: 'Երիտասարդ Պլինիոսը մորը համոզում է փախչել',
      ru: 'Юный Плиний умоляет мать бежать'
    },
    x: 93,
    y: 78,
    radiusPercent: 6.5,
    description: {
      es: 'En el extremo inferior derecho, un joven arrodillado suplica a su madre sentada y exhausta que se levante y continúe caminando para salvarse.',
      hy: 'Ստորին աջ եզրում ծնկի իջած երիտասարդը աղաչում է ուժասպառ նստած մորը ոտքի կանգնել և շարունակել քայլել՝ փրկվելու համար։',
      ru: 'В нижнем правом углу юноша на коленях умоляет обессилевшую мать подняться и идти дальше.'
    },
    fact: {
      es: 'Esta escena está basada en el relato histórico real de Plinio el Joven (de 17 años en 79 d.C.), cuyas cartas preservaron la memoria de Pompeya.',
      hy: 'Այս տեսարանը հիմնված է Պլինիոս Կրտսերի իրական պատմական նամակների վրա (նա 17 տարեկան էր 79 թ.), ով պահպանեց Պոմպեյի հիշատակը։',
      ru: 'Сцена основана на письмах 17-летнего Плиния Младшего, описавшего извержение.'
    },
    artSignificance: {
      es: 'La madre le pedía que la dejara morir para que él pudiera correr más rápido, pero el joven Plinio se negó categóricamente a abandonarla.',
      hy: 'Մայրը խնդրում էր իրեն թողնել, որպեսզի որդին ավելի արագ փախչի, բայց երիտասարդ Պլինիոսը կտրականապես հրաժարվեց լքել մորը։',
      ru: 'Мать просила оставить ее, чтобы сын бежал быстрее, но юноша наотрез отказался бросить ее.'
    },
    question: {
      question: {
        es: '¿Qué personaje histórico real de 17 años inspiró esta escena con su madre?',
        hy: 'Ո՞ր 17-ամյա իրական պատմական կերպարն է ոգեշնչել մոր հետ այս տեսարանը։',
        ru: 'Какой реальный исторический деятель в возрасте 17 лет вдохновил эту сцену?'
      },
      options: [
        { es: 'Plinio el Joven', hy: 'Պլինիոս Կրտսերը', ru: 'Плиний Младший' },
        { es: 'Julio César', hy: 'Հուլիոս Կեսարը', ru: 'Юлий Цезарь' },
        { es: 'Alejandro Magno', hy: 'Ալեքսանդր Մակեդոնացին', ru: 'Александр Македонский' }
      ],
      correctIndex: 0,
      explanation: {
        es: '¡Exacto! Plinio el Joven describió este momento conmovedor en sus cartas al historiador Tácito.',
        hy: 'Ճիշտ է։ Պլինիոս Կրտսերն այս հուզիչ դրվագը նկարագրել է պատմիչ Տակիտոսին ուղղված նամակներում։',
        ru: 'Верно! Плиний Младший описал этот момент в письмах Тациту.'
      }
    }
  },
  {
    id: 'soldado-anciana',
    name: {
      es: 'El soldado romano y el joven auxiliando a la anciana',
      hy: 'Հռոմեացի զինվորը և երիտասարդը օգնում են ծեր կնոջը',
      ru: 'Римский воин и юноша помогают старушке'
    },
    x: 79,
    y: 76,
    radiusPercent: 6.5,
    description: {
      es: 'Un fuerte legionario romano con armadura y casco ayuda a un muchacho a levantar a una anciana indefensa del suelo empedrado.',
      hy: 'Զրահով և սաղավարտով հռոմեացի ուժեղ լեգեոները օգնում է պատանուն քարապատ գետնից բարձրացնել անպաշտպան ծեր կնոջը։',
      ru: 'Римский легионер в доспехах помогает юноше поднять пожилую женщину с мостовой.'
    },
    fact: {
      es: 'Muchos soldados romanos se quedaron en sus puestos para ayudar a los civiles a escapar hacia los barcos en la bahía de Nápoles.',
      hy: 'Շատ հռոմեացի զինվորներ մնացին իրենց դիրքերում՝ օգնելու քաղաքացիներին փախչել դեպի Նեապոլի ծոցի նավերը։',
      ru: 'Многие римские воины остались на постах, помогая жителям добраться до спасительных кораблей.'
    },
    artSignificance: {
      es: 'Muestra que el deber militar y la valentía del soldado se transforman en compasión y ayuda humanitaria en tiempos de catástrofe.',
      hy: 'Ցույց է տալիս, որ զինվորական պարտքն ու քաջությունը վերածվում են կարեկցանքի և մարդասիրական օգնության աղետի պահին։',
      ru: 'Показывает, что воинский долг преображается в милосердие и помощь слабым.'
    },
    question: {
      question: {
        es: '¿Quién lleva armadura y casco romano para proteger a los ciudadanos?',
        hy: 'Ո՞վ է կրում հռոմեական զրահ և սաղավարտ՝ քաղաքացիներին պաշտպանելու համար։',
        ru: 'Кто носит римские доспехи и шлем, защищая граждан?'
      },
      options: [
        { es: 'Un soldado o legionario romano', hy: 'Հռոմեացի զինվորը (լեգեոները)', ru: 'Римский легионер' },
        { es: 'Un gladiador del coliseo', hy: 'Կոլիզեյի գլադիատորը', ru: 'Гладиатор' },
        { es: 'Un comerciante de seda', hy: 'Մետաքսի վաճառականը', ru: 'Торговец' }
      ],
      correctIndex: 0,
      explanation: {
        es: '¡Correcto! El leionario romano demuestra honor y solidaridad al ayudar a los más débiles.',
        hy: 'Ճիշտ է։ Հռոմեացի լեգեոները պատիվ և համերաշխություն է ցուցաբերում՝ օգնելով ամենաթույլերին։',
        ru: 'Верно! Римский воин проявляет честь и благородство.'
      }
    }
  }
];

// JUEGO 1: ENCUENTRA EN EL CUADRO (12 tasks)
export const FIND_TASKS: FindTask[] = [
  {
    id: 'find-1',
    targetName: {
      es: 'El autorretrato del pintor Karl Briullov',
      hy: 'Նկարիչ Կառլ Բրյուլովի ինքնանկարը',
      ru: 'Автопортрет художника Карла Брюллова'
    },
    prompt: {
      es: '¿Dónde está el propio pintor Karl Briullov con una caja de pinturas en la cabeza?',
      hy: 'Որտե՞ղ է ինքը՝ նկարիչ Կառլ Բրյուլովը՝ ներկերի արկղը գլխին։',
      ru: 'Где находится сам художник Карл Брюллов с ящиком красок на голове?'
    },
    x: 14.5,
    y: 38.5,
    radius: 9,
    hint: {
      es: 'Busca en la parte superior izquierda, entre los escalones del templo y la gente que baja.',
      hy: 'Փնտրիր վերևի ձախ մասում՝ տաճարի աստիճանների և իջնող մարդկանց միջև։',
      ru: 'Ищи в верхней левой части картины, среди спускающихся людей.'
    },
    explanation: {
      es: '¡Bravo! Ahí está Karl Briullov. A pesar del peligro, salva sus pinceles y pinturas para documentar la tragedia.',
      hy: 'Կեցցե՛ս։ Ահա Կառլ Բրյուլովը։ Չնայած վտանգին՝ նա փրկում է իր վրձիններն ու ներկերը՝ ողբերգությունը վավերագրելու համար։',
      ru: 'Браво! Вот он — Карл Брюллов, спасающий свои краски и кисти.'
    }
  },
  {
    id: 'find-2',
    targetName: {
      es: 'La mujer caída en el suelo y su bebé',
      hy: 'Գետնին ընկած կինը և նրա մանկիկը',
      ru: 'Погибшая женщина в центре и ребенок'
    },
    prompt: {
      es: '¿Dónde está la mujer noble con vestido amarillo caída en el centro del suelo con un bebé a su lado?',
      hy: 'Որտե՞ղ է դեղին զգեստով ազնվական կինը՝ գետնին ընկած, կողքին լացող մանկիկը։',
      ru: 'Где находится женщина в желтом одеянии, упавшая на мостовую с ребенком рядом?'
    },
    x: 48,
    y: 84,
    radius: 9,
    hint: {
      es: 'Mira justo en el centro del primer plano, en el suelo de piedra.',
      hy: 'Նայիր հենց առաջին պլանի կենտրոնում՝ քարե հատակին։',
      ru: 'Посмотри прямо в центре переднего плана на мостовой.'
    },
    explanation: {
      es: '¡Excelente! Esta es la figura central del cuadro: la caída del mundo clásico y la vida inocente del niño.',
      hy: 'Հիանալի՜ է։ Սա կտավի կենտրոնական կերպարն է՝ անտիկ աշխարհի անկումը և երեխայի անմեղ կյանքը։',
      ru: 'Отлично! Это центральный образ картины — гибель старого мира и новая жизнь.'
    }
  },
  {
    id: 'find-3',
    targetName: {
      es: 'Los dos hijos que cargan a su anciano padre',
      hy: 'Երկու որդիները, որոնք տանում են իրենց ծեր հորը',
      ru: 'Сыновья, несущие отца'
    },
    prompt: {
      es: '¿Dónde están los dos jóvenes hijos que cargan en brazos a su anciano padre?',
      hy: 'Որտե՞ղ են երկու երիտասարդ որդիները, ովքեր գրկած տանում են իրենց ծեր հորը։',
      ru: 'Где находятся двое сыновей, несущих своего пожилого отца?'
    },
    x: 88,
    y: 64,
    radius: 9,
    hint: {
      es: 'Busca en el lado derecho de la pintura, a media altura.',
      hy: 'Փնտրիր նկարի աջ կողմում՝ միջին բարձրության վրա։',
      ru: 'Ищи в правой части картины на средней высоте.'
    },
    explanation: {
      es: '¡Correcto! Dos hermanos fuertes se unen para salvar a su padre, un símbolo de amor filial.',
      hy: 'Ճիշտ է։ Երկու ուժեղ եղբայրներ միավորվել են հորը փրկելու համար՝ որդիական սիրո խորհրդանիշը։',
      ru: 'Верно! Сыновья несут отца — символ сыновней любви и преданности.'
    }
  },
  {
    id: 'find-4',
    targetName: {
      es: 'El caballo negro encabritado',
      hy: 'Խրտչած սև ձին',
      ru: 'Вставший на дыбы вороной конь'
    },
    prompt: {
      es: '¿Dónde está el caballo negro que se encabrita aterrado por el volcán?',
      hy: 'Որտե՞ղ է սև ձին, որը վախից ծառս է եղել հրաբխի պատճառով։',
      ru: 'Где находится черный конь, вставший на дыбы от страха?'
    },
    x: 34,
    y: 55,
    radius: 8,
    hint: {
      es: 'Busca a la izquierda del centro, detrás de la gente que corre.',
      hy: 'Փնտրիր կենտրոնից դեպի ձախ՝ վազող մարդկանց ետևում։',
      ru: 'Ищи левее центра, за спинами бегущих людей.'
    },
    explanation: {
      es: '¡Muy bien! El caballo salvaje negro transmite el terror instintivo de los animales ante el cataclismo.',
      hy: 'Շատ ապրե՛ս։ Վայրի սև նժույգը փոխանցում է կենդանիների բնազդային սարսափն աղետի առաջ։',
      ru: 'Превосходно! Вороной конь передает первобытный ужас перед стихией.'
    }
  },
  {
    id: 'find-5',
    targetName: {
      es: 'El relámpago volcánico y el cráter del Vesubio',
      hy: 'Հրաբխային կայծակը և Վեզուվի խառնարանը',
      ru: 'Вулканическая молния и кратер'
    },
    prompt: {
      es: '¿Dónde se ve el volcán Vesubio arrojando lava y el gran relámpago en el cielo?',
      hy: 'Որտե՞ղ է երևում Վեզուվ հրաբուխը՝ լավա ժայթքելիս, և երկնքում մեծ կայծակը։',
      ru: 'Где виден извергающийся вулкан Везувий и вспышка молнии в небе?'
    },
    x: 28,
    y: 16,
    radius: 10,
    hint: {
      es: 'Mira hacia arriba en el cielo, en la parte superior izquierda.',
      hy: 'Նայիր վերև՝ երկնքին, վերին ձախ մասում։',
      ru: 'Посмотри наверх, в левую верхнюю часть полотна.'
    },
    explanation: {
      es: '¡Exacto! El cráter en llamas y el relámpago representan la furia implacable del Vesubio.',
      hy: 'Ճիշտ է։ Կրակոտ խառնարանը և կայծակը մարմնավորում են Վեզուվի անողոք զայրույթը։',
      ru: 'Точно! Огненный кратер и молния олицетворяют ярость Везувия.'
    }
  },
  {
    id: 'find-6',
    targetName: {
      es: 'Las estatuas de piedra que caen del templo',
      hy: 'Տաճարից ընկնող քարե արձանները',
      ru: 'Падающие с храма статуи'
    },
    prompt: {
      es: '¿Dónde están las grandes estatuas romanas que caen desde lo alto de los edificios?',
      hy: 'Որտե՞ղ են շենքերի վերևից ընկնող հռոմեական մեծ արձանները։',
      ru: 'Где находятся римские статуи, падающие с крыши храма?'
    },
    x: 74,
    y: 22,
    radius: 9,
    hint: {
      es: 'Observa la parte superior derecha, sobre las columnas romanas.',
      hy: 'Դիտիր վերին աջ մասը՝ հռոմեական սյուների վերևում։',
      ru: 'Посмотри в правый верхний угол, над колоннами храма.'
    },
    explanation: {
      es: '¡Bien visto! Las estatuas de los dioses caen, demostrando que ni la arquitectura más sólida pudo resistir.',
      hy: 'Լավ նկատեցի՛ր։ Աստվածների արձանները վայր են ընկնում՝ ապացուցելով, որ անգամ ամենաամուր շինությունը չդիմացավ։',
      ru: 'Отлично! Падающие статуи показывают крах античного величия.'
    }
  },
  {
    id: 'find-7',
    targetName: {
      es: 'La madre protegiendo a sus dos pequeñas hijas',
      hy: 'Մայրն իր երկու փոքրիկ աղջիկներին պաշտպանելիս',
      ru: 'Мать, защищающая двух дочерей'
    },
    prompt: {
      es: '¿Dónde está la madre sentada en el suelo abrazando y cubriendo a sus dos hijas?',
      hy: 'Որտե՞ղ է գետնին նստած մայրը, ով գրկել ու պատսպարել է իր երկու դուստրերին։',
      ru: 'Где сидит мать, обнимающая и закрывающая собой двух дочерей?'
    },
    x: 11,
    y: 72,
    radius: 9,
    hint: {
      es: 'Busca en la esquina inferior izquierda.',
      hy: 'Փնտրիր ներքևի ձախ անկյունում։',
      ru: 'Ищи в нижнем левом углу картины.'
    },
    explanation: {
      es: '¡Maravilloso! El tierno abrazo de la madre es uno de los detalles más emotivos creados por Briullov.',
      hy: 'Հիանալի՜ է։ Մոր քնքուշ գիրկը Բրյուլովի ստեղծած ամենահուզիչ մանրամասներից է։',
      ru: 'Прекрасно! Трогательное объятие матери — одна из самых душевных деталей.'
    }
  },
  {
    id: 'find-8',
    targetName: {
      es: 'El joven Plinio y su madre sentada',
      hy: 'Երիտասարդ Պլինիոսը և նրա նստած մայրը',
      ru: 'Юноша Плиний и его мать'
    },
    prompt: {
      es: '¿Dónde está el joven arrodillado rogando a su madre cansada que se levante?',
      hy: 'Որտե՞ղ է ծնկաչոք երիտասարդը, ով աղաչում է հոգնած մորը ոտքի կանգնել։',
      ru: 'Где находится юноша, стоящий на коленях и умоляющий уставшую мать встать?'
    },
    x: 93,
    y: 78,
    radius: 8.5,
    hint: {
      es: 'Mira en la esquina inferior derecha.',
      hy: 'Նայիր ներքևի աջ անկյունում։',
      ru: 'Посмотри в правый нижний угол картины.'
    },
    explanation: {
      es: '¡Acertaste! Es el joven Plinio el Joven, quien sobrevivió y escribió la crónica de la tragedia.',
      hy: 'Ճիշտ գուշակեցի՛ր։ Սա երիտասարդ Պլինիոս Կրտսերն է, ով ողջ մնաց և գրեց ողբերգության տարեգրությունը։',
      ru: 'В точку! Это юный Плиний Младший, будущий автор писем об извержении.'
    }
  },
  {
    id: 'find-9',
    targetName: {
      es: 'El sacerdote pagano con el trípode ritual de oro',
      hy: 'Հեթանոս քուրմը ոսկե ծիսական եռոտանու հետ',
      ru: 'Языческий жрец с золотым треножником'
    },
    prompt: {
      es: '¿Dónde está el sacerdote pagano que huye asustado llevando un trípode de oro?',
      hy: 'Որտե՞ղ է հեթանոս քուրմը, ով վախեցած փախչում է՝ ոսկե եռոտանին ձեռքին։',
      ru: 'Где находится языческий жрец, уносящий золотой треножник?'
    },
    x: 23,
    y: 65,
    radius: 8,
    hint: {
      es: 'Busca debajo del caballo negro, en el grupo de personas que bajan por las escaleras.',
      hy: 'Փնտրիր սև ձիու տակ՝ աստիճաններով իջնող մարդկանց խմբում։',
      ru: 'Ищи под вороным конем, среди людей на ступенях.'
    },
    explanation: {
      es: '¡Correcto! El sacerdote pagano huye con los tesoros del templo sin poder detener la catástrofe.',
      hy: 'Ճիշտ է։ Հեթանոս քուրմը փախչում է տաճարի գանձերով՝ անզոր լինելով կանգնեցնել աղետը։',
      ru: 'Верно! Жрец уносит храмовую утварь, бессильный перед стихией.'
    }
  },
  {
    id: 'find-10',
    targetName: {
      es: 'El sacerdote cristiano con la cruz y la antorcha',
      hy: 'Քրիստոնյա քահանան խաչով և ջահով',
      ru: 'Христианский священник с крестом'
    },
    prompt: {
      es: '¿Dónde está el personaje que lleva una cruz colgada al cuello y una antorcha?',
      hy: 'Որտե՞ղ է այն կերպարը, որի պարանոցից խաչ է կախված, իսկ ձեռքում՝ ջահ։',
      ru: 'Где находится персонаж с наперсным крестом и факелом в руке?'
    },
    x: 6.5,
    y: 56,
    radius: 7.5,
    hint: {
      es: 'Busca pegado al borde izquierdo del lienzo, justo detrás de la madre con sus hijas.',
      hy: 'Փնտրիր կտավի ձախ եզրին մոտ՝ դուստրերին գրկած մոր անմիջապես ետևում։',
      ru: 'Ищи у самого левого края полотна, за спиной матери с дочерьми.'
    },
    explanation: {
      es: '¡Estupendo! Representa la serenidad y la fe cristiana ante el final del mundo pagano.',
      hy: 'Հիանալի՜ է։ Նա ներկայացնում է քրիստոնեական հանդարտությունն ու հավատը հեթանոս աշխարհի վախճանի պահին։',
      ru: 'Прекрасно! Образ символизирует веру и покой среди рушащегося мира.'
    }
  },
  {
    id: 'find-11',
    targetName: {
      es: 'El joven que lleva en brazos a su novia desmayada',
      hy: 'Երիտասարդը, որը գրկել է ուշաթափված հարսնացուին',
      ru: 'Юноша с невестой на руках'
    },
    prompt: {
      es: '¿Dónde está el joven enamorado con su novia inconsciente coronada de flores?',
      hy: 'Որտե՞ղ է սիրահար երիտասարդն իր ուշագնաց հարսնացուի հետ, ով ծաղկեպսակ է կրում։',
      ru: 'Где находится юноша с бесчувственной невестой в цветочном венке?'
    },
    x: 62,
    y: 62,
    radius: 8.5,
    hint: {
      es: 'Busca a la derecha del centro de la composición, entre el templo y el camino.',
      hy: 'Փնտրիր կոմպոզիցիայի կենտրոնից դեպի աջ՝ տաճարի և ճանապարհի միջև։',
      ru: 'Ищи правее центра картины, между храмом и мостовой.'
    },
    explanation: {
      es: '¡Muy bien! Su historia es conmovedora: la boda interrumpida por la furia del Vesubio.',
      hy: 'Շատ լավ է։ Նրանց պատմությունը չափազանց հուզիչ է. հարսանիք, որն ընդհատվեց Վեզուվի զայրույթով։',
      ru: 'Отлично! Трагическая история сорванной катастрофой свадьбы.'
    }
  },
  {
    id: 'find-12',
    targetName: {
      es: 'Las monedas y joyas esparcidas por el suelo',
      hy: 'Հատակին ցրված մետաղադրամներն ու զարդերը',
      ru: 'Рассыпанные по мостовой монеты'
    },
    prompt: {
      es: '¿Dónde están las monedas de oro y joyas tiradas por el suelo que nadie recoge?',
      hy: 'Որտե՞ղ են գետնին թափված ոսկե դրամներն ու զարդերը, որոնք ոչ ոք չի հավաքում։',
      ru: 'Где рассыпаны золотые монеты и украшения, ставшие бесполезными?'
    },
    x: 42,
    y: 88,
    radius: 7.5,
    hint: {
      es: 'Mira cerca de la rueda del carro roto y la mujer caída en el suelo.',
      hy: 'Նայիր կոտրված կառքի անիվի և գետնին ընկած կնոջ մոտակայքում։',
      ru: 'Ищи около колеса разбитой повозки и упавшей женщины.'
    },
    explanation: {
      es: '¡Brillante! El oro en el suelo demuestra que la riqueza no sirve de nada ante la muerte.',
      hy: 'Փայլո՜ւն է։ Գետնին թափված ոսկին ցույց է տալիս, որ մահվան առաջ հարստությունն անզոր է։',
      ru: 'Блестяще! Золото на земле подчеркивает бесполезность богатства перед гибелью.'
    }
  }
];

// JUEGO 2: QUIZ: ¿QUÉ SABES DE POMPEYA? (20 questions with 4 choices each)
export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q1',
    question: {
      es: '1. ¿Quién pintó el famoso cuadro «El último día de Pompeya»?',
      hy: '1. Ո՞վ է նկարել «Պոմպեյի վերջին օրը» հայտնի կտավը։',
      ru: '1. Кто написал знаменитую картину «Последний день Помпеи»?'
    },
    options: [
      { es: 'A) Pablo Picasso', hy: 'A) Պաբլո Պիկասո', ru: 'A) Пабло Пикассо' },
      { es: 'B) Karl Briullov', hy: 'B) Կառլ Բրյուլով', ru: 'B) Карл Брюллов' },
      { es: 'C) Salvador Dalí', hy: 'C) Սալվադոր Դալի', ru: 'C) Сальвадор Дали' },
      { es: 'D) Francisco de Goya', hy: 'D) Ֆրանցիսկո Գոյա', ru: 'D) Франсиско Гойя' }
    ],
    correctIndex: 1,
    explanation: {
      es: '¡Correcto! Fue el brillante pintor Karl Briullov (1799–1852), quien alcanzó fama mundial con esta obra.',
      hy: 'Ճիշտ է։ Դա փայլուն նկարիչ Կառլ Բրյուլովն էր (1799–1852), ով այս գործով ձեռք բերեց համաշխարհային փառք։',
      ru: 'Верно! Это блестящий художник Карл Брюллов (1799–1852).'
    }
  },
  {
    id: 'q2',
    question: {
      es: '2. ¿Qué volcán destruyó la antigua ciudad de Pompeya?',
      hy: '2. Ո՞ր հրաբուխը կործանեց հին Պոմպեյ քաղաքը։',
      ru: '2. Какой вулкан уничтожил древний город Помпеи?'
    },
    options: [
      { es: 'A) El monte Etna', hy: 'A) Էտնա լեռը', ru: 'A) Вулкан Этна' },
      { es: 'B) El Teide', hy: 'B) Տեյդեն', ru: 'B) Вулкан Тейде' },
      { es: 'C) El monte Vesubio', hy: 'C) Վեզուվ լեռը', ru: 'C) Вулкан Везувий' },
      { es: 'D) El monte Fuji', hy: 'D) Ֆուձի լեռը', ru: 'D) Вулкан Фудзи' }
    ],
    correctIndex: 2,
    explanation: {
      es: '¡Muy bien! El monte Vesubio, situado cerca de la bahía de Nápoles, entró en erupción y sepultó la ciudad.',
      hy: 'Շատ ապրես։ Նեապոլի ծոցի մոտ գտնվող Վեզուվ լեռը ժայթքեց և թաղեց քաղաքը։',
      ru: 'Отлично! Вулкан Везувий у Неаполитанского залива похоронил город.'
    }
  },
  {
    id: 'q3',
    question: {
      es: '3. ¿En qué año histórico se produjo la fatídica erupción del Vesubio?',
      hy: '3. Ո՞ր պատմական թվականին տեղի ունեցավ Վեզուվի ճակատագրական ժայթքումը։',
      ru: '3. В каком году произошло роковое извержение Везувия?'
    },
    options: [
      { es: 'A) En el año 79 d. C.', hy: 'A) Մ.թ. 79 թվականին', ru: 'A) В 79 году н. э.' },
      { es: 'B) En el año 1492 d. C.', hy: 'B) Մ.թ. 1492 թվականին', ru: 'B) В 1492 году н. э.' },
      { es: 'C) En el año 300 a. C.', hy: 'C) Մ.թ.ա. 300 թվականին', ru: 'C) В 300 году до н. э.' },
      { es: 'D) En el año 1914 d. C.', hy: 'D) Մ.թ. 1914 թվականին', ru: 'D) В 1914 году н. э.' }
    ],
    correctIndex: 0,
    explanation: {
      es: '¡Exacto! Ocurrió en el año 79 después de Cristo, durante el reinado del emperador Tito.',
      hy: 'Ճիշտ է։ Դա տեղի ունեցավ Քրիստոսից հետո 79 թվականին՝ Տիտոս կայսեր օրոք։',
      ru: 'Верно! Это произошло в 79 году нашей эры при императоре Тите.'
    }
  },
  {
    id: 'q4',
    question: {
      es: '4. ¿En qué año terminó Karl Briullov su cuadro monumental?',
      hy: '4. Ո՞ր թվականին Կառլ Բրյուլովն ավարտեց իր մոնումենտալ կտավը։',
      ru: '4. В каком году Карл Брюллов закончил свое монументальное полотно?'
    },
    options: [
      { es: 'A) En 1812', hy: 'A) 1812 թվականին', ru: 'A) В 1812 году' },
      { es: 'B) En 1833', hy: 'B) 1833 թվականին', ru: 'B) В 1833 году' },
      { es: 'C) En 1900', hy: 'C) 1900 թվականին', ru: 'C) В 1900 году' },
      { es: 'D) En 1750', hy: 'D) 1750 թվականին', ru: 'D) В 1750 году' }
    ],
    correctIndex: 1,
    explanation: {
      es: '¡Correcto! Briullov finalizó el cuadro en Roma en 1833 tras seis años de arduo trabajo.',
      hy: 'Ճիշտ է։ Բրյուլովն ավարտեց կտավը Հռոմում 1833 թվականին՝ վեց տարվա տքնաջան աշխատանքից հետո։',
      ru: 'Верно! Брюллов завершил полотно в Риме в 1833 году.'
    }
  },
  {
    id: 'q5',
    question: {
      es: '5. ¿En qué museo se conserva actualmente el lienzo original?',
      hy: '5. Ո՞ր թանգարանում է այսօր պահպանվում բնօրինակ կտավը։',
      ru: '5. В каком музее сейчас хранится оригинальное полотно?'
    },
    options: [
      { es: 'A) En el Museo del Louvre (París)', hy: 'A) Լուվրի թանգարանում (Փարիզ)', ru: 'A) В Лувре (Париж)' },
      { es: 'B) En el Museo Estatal Ruso (San Petersburgo)', hy: 'B) Պետական ռուսական թանգարանում (Սանկտ Պետերբուրգ)', ru: 'B) В Государственном Русском музее' },
      { es: 'C) En el Museo del Prado (Madrid)', hy: 'C) Պրադոյի թանգարանում (Մադրիդ)', ru: 'C) В музее Прадо (Мадрид)' },
      { es: 'D) En el Museo Británico (Londres)', hy: 'D) Բրիտանական թանգարանում (Լոնդոն)', ru: 'D) В Британском музее (Лондон)' }
    ],
    correctIndex: 1,
    explanation: {
      es: '¡Así es! Se exhibe con gran orgullo en el Museo Estatal Ruso de San Petersburgo.',
      hy: 'Ճիշտ այդպես։ Այն մեծ հպարտությամբ ցուցադրվում է Սանկտ Պետերբուրգի Պետական ռուսական թանգարանում։',
      ru: 'Именно так! Картина экспонируется в Государственном Русском музее в Санкт-Петербурге.'
    }
  },
  {
    id: 'q6',
    question: {
      es: '6. ¿A qué civilización pertenecía la ciudad de Pompeya?',
      hy: '6. Ո՞ր քաղաքակրթությանն էր պատկանում Պոմպեյ քաղաքը։',
      ru: '6. Какой цивилизации принадлежал город Помпеи?'
    },
    options: [
      { es: 'A) A la civilización romana', hy: 'A) Հռոմեական քաղաքակրթությանը', ru: 'A) Римской цивилизации' },
      { es: 'B) Al Imperio maya', hy: 'B) Մայաների կայսրությանը', ru: 'B) Империи майя' },
      { es: 'C) Al antiguo Egipto', hy: 'C) Հին Եգիպտոսին', ru: 'C) Древнему Египту' },
      { es: 'D) A los vikingos', hy: 'D) Վիկինգներին', ru: 'D) Викингам' }
    ],
    correctIndex: 0,
    explanation: {
      es: '¡Correcto! Pompeya era una importante y rica ciudad del Imperio romano.',
      hy: 'Ճիշտ է։ Պոմպեյը Հռոմեական կայսրության կարևոր և հարուստ քաղաքներից էր։',
      ru: 'Верно! Помпеи были богатым городом Римской империи.'
    }
  },
  {
    id: 'q7',
    question: {
      es: '7. ¿Aproximadamente cuántos metros mide el cuadro de ancho?',
      hy: '7. Մոտավորապես քանի՞ մետր է կտավի լայնությունը։',
      ru: '7. Какова примерная ширина картины в метрах?'
    },
    options: [
      { es: 'A) Alrededor de 1 metro', hy: 'A) Մոտ 1 մետր', ru: 'A) Около 1 метра' },
      { es: 'B) Más de 6 metros y medio', hy: 'B) Ավելի քան 6.5 մետր', ru: 'B) Более 6,5 метров' },
      { es: 'C) 20 metros', hy: 'C) 20 մետր', ru: 'C) 20 метров' },
      { es: 'D) 50 centímetros', hy: 'D) 50 սանտիմետր', ru: 'D) 50 сантиметров' }
    ],
    correctIndex: 1,
    explanation: {
      es: '¡Increíble! Mide exactamente 456.5 cm de alto por 651 cm de ancho, ¡es descomunal!',
      hy: 'Ապշեցուցիչ է։ Չափսերն են՝ 456.5 սմ բարձրություն և 651 սմ լայնություն. իսկական հսկա։',
      ru: 'Невероятно! Размеры картины составляют 456,5 × 651 см.'
    }
  },
  {
    id: 'q8',
    question: {
      es: '8. ¿Qué lleva sobre la cabeza el propio pintor Briullov en su autorretrato?',
      hy: '8. Ի՞նչ է կրում նկարիչ Բրյուլովն իր գլխին ինքնանկարում։',
      ru: '8. Что держит на голове сам художник Брюллов в своем автопортрете?'
    },
    options: [
      { es: 'A) Una corona de oro', hy: 'A) Ոսկե թագ', ru: 'A) Золотую корону' },
      { es: 'B) Una caja con pinceles y pinturas', hy: 'B) Վրձիններով ու ներկերով արկղ', ru: 'B) Ящик с кистями и красками' },
      { es: 'C) Una cesta con fruta', hy: 'C) Մրգով զամբյուղ', ru: 'C) Корзину с фруктами' },
      { es: 'D) Un libro sagrado', hy: 'D) Սուրբ գիրք', ru: 'D) Священную книгу' }
    ],
    correctIndex: 1,
    explanation: {
      es: '¡Correcto! Lleva una caja de madera con sus herramientas de pintor para plasmar la historia.',
      hy: 'Ճիշտ է։ Նա տանում է նկարչի իր փայտե արկղը՝ պատմությունը վրձնելու համար։',
      ru: 'Верно! Он держит ящик с красками и кистями.'
    }
  },
  {
    id: 'q9',
    question: {
      es: '9. ¿Quién fue el mecenas que financió la creación de este gran cuadro?',
      hy: '9. Ո՞վ էր այն մեկենասը (հովանավորը), ով ֆինանսավորեց այս մեծ կտավի ստեղծումը։',
      ru: '9. Кто был меценатом, профинансировавшим создание картины?'
    },
    options: [
      { es: 'A) El conde Anatoli Demídov', hy: 'A) Կոմս Անատոլի Դեմիդովը', ru: 'A) Граф Анатолий Демидов' },
      { es: 'B) El rey de España', hy: 'B) Իսպանիայի թագավորը', ru: 'B) Король Испании' },
      { es: 'C) El papa de Roma', hy: 'C) Հռոմի պապը', ru: 'C) Папа Римский' },
      { es: 'D) Napoleón Bonaparte', hy: 'D) Նապոլեոն Բոնապարտը', ru: 'D) Наполеон Бонапарт' }
    ],
    correctIndex: 0,
    explanation: {
      es: '¡Exacto! El rico noble y coleccionista Anatoli Demídov encargó y pagó la creación de la obra.',
      hy: 'Ճիշտ է։ Հարուստ ազնվական և կոլեկցիոներ Անատոլի Դեմիդովը պատվիրեց և վճարեց ստեղծագործության համար։',
      ru: 'Верно! Граф Анатолий Демидов заказал и оплатил работу.'
    }
  },
  {
    id: 'q10',
    question: {
      es: '10. ¿Qué ilustre escritora y noble inspiró los rostros de varias mujeres en el cuadro?',
      hy: '10. Ո՞ր ականավոր ազնվականուհին ոգեշնչեց կտավի մի քանի կանանց դեմքերը։',
      ru: '10. Чьи черты лица художник придал нескольким героиням картины?'
    },
    options: [
      { es: 'A) La condesa Yulia Samóilova', hy: 'A) Կոմսուհի Յուլիա Սամոյլովան', ru: 'A) Графиня Юлия Самойлова' },
      { es: 'B) Cleopatra', hy: 'B) Կլեոպատրան', ru: 'B) Клеопатра' },
      { es: 'C) La reina Victoria', hy: 'C) Վիկտորիա թագուհին', ru: 'C) Королева Виктория' },
      { es: 'D) Mona Lisa', hy: 'D) Մոնա Լիզան', ru: 'D) Мона Лиза' }
    ],
    correctIndex: 0,
    explanation: {
      es: '¡Así es! Su gran amiga y musa Yulia Samóilova prestó sus rasgos a cuatro personajes femeninos.',
      hy: 'Ճիշտ այդպես։ Նրա մեծ ընկերուհին և մուսան՝ Յուլիա Սամոյլովան, իր դիմագծերը նվիրեց չորս կանացի կերպարների։',
      ru: 'Именно так! Графиня Юлия Самойлова послужила прототипом для четырех образов.'
    }
  },
  {
    id: 'q11',
    question: {
      es: '11. ¿Qué autor antiguo describió en sus cartas la erupción real del Vesubio?',
      hy: '11. Ո՞ր անտիկ հեղինակն է իր նամակներում նկարագրել Վեզուվի իրական ժայթքումը։',
      ru: '11. Какой античный автор описал извержение Везувия в письмах?'
    },
    options: [
      { es: 'A) Plinio el Joven', hy: 'A) Պլինիոս Կրտսերը', ru: 'A) Плиний Младший' },
      { es: 'B) Homero', hy: 'B) Հոմերոսը', ru: 'B) Гомер' },
      { es: 'C) Platón', hy: 'C) Պլատոնը', ru: 'C) Платон' },
      { es: 'D) Sócrates', hy: 'D) Սոկրատեսը', ru: 'D) Сократ' }
    ],
    correctIndex: 0,
    explanation: {
      es: '¡Correcto! Plinio el Joven fue testigo presencial a los 17 años y escribió dos cartas famosas a Tácito.',
      hy: 'Ճիշտ է։ Պլինիոս Կրտսերն ականատես էր 17 տարեկանում և երկու հայտնի նամակ գրեց Տակիտոսին։',
      ru: 'Верно! 17-летний Плиний Младший был очевидцем катастрофы.'
    }
  },
  {
    id: 'q12',
    question: {
      es: '12. ¿Qué tipos de iluminación combinó Briullov para lograr un efecto dramático?',
      hy: '12. Լուսավորության ի՞նչ տեսակներ միավորեց Բրյուլովը դրամատիկ ազդեցության հասնելու համար։',
      ru: '12. Какие типы освещения совместил Брюллов для драматического эффекта?'
    },
    options: [
      { es: 'A) Luz fría de relámpago y luz cálida y roja del volcán', hy: 'A) Կայծակի սառը լույս և հրաբխի տաք ու կարմիր լույս', ru: 'A) Холодный свет молнии и теплый красный свет вулкана' },
      { es: 'B) Luz eléctrica y luz solar', hy: 'B) Էլեկտրական և արևային լույս', ru: 'B) Электрический и солнечный свет' },
      { es: 'C) Luz de velas y luz de linternas', hy: 'C) Մոմերի և լապտերների լույս', ru: 'C) Свет свечей и фонарей' },
      { es: 'D) Solo oscuridad total', hy: 'D) Միայն լիակատար խավար', ru: 'D) Только полную тьму' }
    ],
    correctIndex: 0,
    explanation: {
      es: '¡Brillante! El contraste entre la luz azul fría del rayo y el resplandor ardiente rojo es una obra maestra de la pintura.',
      hy: 'Փայլուն է։ Կայծակի սառը կապույտ լույսի և կրակոտ կարմիր շողքի հակադրությունը գեղանկարչության գլուխգործոց է։',
      ru: 'Блестяще! Контраст синей молнии и красного зарева вулкана — шедевр колористики.'
    }
  },
  {
    id: 'q13',
    question: {
      es: '13. ¿Qué premio importante ganó la pintura en el Salón de París de 1834?',
      hy: '13. Ի՞նչ կարևոր մրցանակ նվաճեց կտավը 1834 թվականի Փարիզի սալոնում։',
      ru: '13. Какую награду получила картина на Парижском салоне 1834 года?'
    },
    options: [
      { es: 'A) La Medalla de Oro del Salón', hy: 'A) Սալոնի Ոսկե մեդալը', ru: 'A) Золотую медаль Салона' },
      { es: 'B) Un premio en dinero en efectivo', hy: 'B) Դրամական մրցանակ', ru: 'B) Денежный приз' },
      { es: 'C) El título de alcalde de París', hy: 'C) Փարիզի քաղաքապետի տիտղոսը', ru: 'C) Звание мэра Парижа' },
      { es: 'D) No ganó ningún premio', hy: 'D) Ոչ մի մրցանակ չշահեց', ru: 'D) Не получила наград' }
    ],
    correctIndex: 0,
    explanation: {
      es: '¡Así es! Ganó la prestigiosa Medalla de Oro de primera clase, consagrando a Briullov en toda Europa.',
      hy: 'Ճիշտ այդպես։ Այն շահեց առաջին կարգի հեղինակավոր Ոսկե մեդալը՝ Բրյուլովին հռչակելով ողջ Եվրոպայում։',
      ru: 'Именно так! Картина удостоилась золотой медали первого класса.'
    }
  },
  {
    id: 'q14',
    question: {
      es: '14. ¿A qué movimiento artístico pertenece principalmente esta obra?',
      hy: '14. Գեղարվեստական ո՞ր ուղղությանն է պատկանում այս ստեղծագործությունը։',
      ru: '14. К какому художественному направлению относится картина?'
    },
    options: [
      { es: 'A) Romanticismo (con base clásica)', hy: 'A) Ռոմանտիզմ (կլասիցիզմի հիմքով)', ru: 'A) Романтизм (с классической основой)' },
      { es: 'B) Cubismo abstracto', hy: 'B) Աբստրակտ կուբիզմ', ru: 'B) Абстрактный кубизм' },
      { es: 'C) Arte pop moderno', hy: 'C) Ժամանակակից փոփ-արտ', ru: 'C) Поп-арт' },
      { es: 'D) Surrealismo fantástico', hy: 'D) Ֆանտաստիկ սյուրռեալիզմ', ru: 'D) Сюрреализм' }
    ],
    correctIndex: 0,
    explanation: {
      es: '¡Correcto! Es una de las mayores cumbres del Romanticismo, combinando pasión y belleza clásica.',
      hy: 'Ճիշտ է։ Այն ռոմանտիզմի բարձրակետերից է, որը միավորում է կիրքն ու դասական գեղեցկությունը։',
      ru: 'Верно! Это вершина романтизма, гармонично сочетающая классическую пластику с бурей эмоций.'
    }
  },
  {
    id: 'q15',
    question: {
      es: '15. ¿Qué poeta ruso escribió: «Y se convirtió "El último día de Pompeya" para la brocha rusa en el primer día»?',
      hy: '15. Ո՞ր ռուս բանաստեղծն է գրել. «Եվ "Պոմպեյի վերջին օրը" ռուսական վրձնի համար դարձավ առաջին օր»։',
      ru: '15. Какой русский поэт написал: «И был "Последний день Помпеи" для русской кисти первый день»?'
    },
    options: [
      { es: 'A) Yevgueni Baratynski', hy: 'A) Եվգենի Բարատինսկին', ru: 'A) Евгений Баратынский' },
      { es: 'B) León Tolstói', hy: 'B) Լև Տոլստոյը', ru: 'B) Лев Толстой' },
      { es: 'C) Fiódor Dostoievski', hy: 'C) Ֆյոդոր Դոստոևսկին', ru: 'C) Федор Достоевский' },
      { es: 'D) Antón Chéjov', hy: 'D) Անտոն Չեխովը', ru: 'D) Антон Чехов' }
    ],
    correctIndex: 0,
    explanation: {
      es: '¡Exacto! Fue el poeta Yevgueni Baratynski quien compuso estos célebres versos de admiración.',
      hy: 'Ճիշտ է։ Բանաստեղծ Եվգենի Բարատինսկին էր, ով հորինեց այս հայտնի հիացական տողերը։',
      ru: 'Верно! Поэт Евгений Баратынский выразил общий восторг современников.'
    }
  },
  {
    id: 'q16',
    question: {
      es: '16. ¿Qué animal relincha desbocado en el centro-izquierda del cuadro?',
      hy: '16. Ո՞ր կենդանին է խրխնջում և ծառս լինում կտավի կենտրոնից ձախ։',
      ru: '16. Какое животное в страхе встает на дыбы в центре слева?'
    },
    options: [
      { es: 'A) Un caballo negro', hy: 'A) Սև ձին', ru: 'A) Вороной конь' },
      { es: 'B) Un elefante africano', hy: 'B) Աֆրիկյան փիղը', ru: 'B) Слон' },
      { es: 'C) Un león de montaña', hy: 'C) Լեռնային առյուծը', ru: 'C) Лев' },
      { es: 'D) Un camello del desierto', hy: 'D) Անապատի ուղտը', ru: 'D) Верблюд' }
    ],
    correctIndex: 0,
    explanation: {
      es: '¡Muy bien! Un fogoso corcel negro que lucha aterrado contra las riendas de su dueño.',
      hy: 'Շատ ապրես։ Կրակոտ սև նժույգը, որը սարսափահար պայքարում է տիրոջ սանձերի դեմ։',
      ru: 'Отлично! Черный скакун, охваченный паникой.'
    }
  },
  {
    id: 'q17',
    question: {
      es: '17. ¿Qué material volcánico cayó durante horas sepultando la ciudad?',
      hy: '17. Ի՞նչ հրաբխային նյութ թափվեց ժամեր շարունակ՝ թաղելով քաղաքը։',
      ru: '17. Какой вулканический материал часами падал на город, погребая его?'
    },
    options: [
      { es: 'A) Ceniza ardiente y piedra pómez (lapilli)', hy: 'A) Շիկացած մոխիր և չեչաքար (լապիլի)', ru: 'A) Горячий пепел и пемза (лапилли)' },
      { es: 'B) Nieve helada', hy: 'B) Սառցե ձյուն', ru: 'B) Снег' },
      { es: 'C) Arena del desierto del Sahara', hy: 'C) Սահարայի ավազ', ru: 'C) Песок Сахары' },
      { es: 'D) Diamantes puros', hy: 'D) Մաքուր ադամանդներ', ru: 'D) Алмазы' }
    ],
    correctIndex: 0,
    explanation: {
      es: '¡Correcto! Una lluvia incesante de piedra pómez y cenizas cubrió Pompeya con un manto de varios metros.',
      hy: 'Ճիշտ է։ Չեչաքարի և մոխրի անդադար անձրևը Պոմպեյը ծածկեց մի քանի մետրանոց շերտով։',
      ru: 'Верно! Слой пепла и пемзы достиг нескольких метров.'
    }
  },
  {
    id: 'q18',
    question: {
      es: '18. ¿Por qué el cuadro de Briullov no muestra escenas desagradables de violencia entre personas?',
      hy: '18. Ինչո՞ւ Բրյուլովի կտավը չի ցուցադրում մարդկանց միջև բռնության տհաճ տեսարաններ։',
      ru: '18. Почему картина Брюллова не показывает сцен жестокости между людьми?'
    },
    options: [
      { es: 'A) Porque quiso destacar la nobleza, el amor y la dignidad humana', hy: 'A) Որովհետև ցանկացավ ընդգծել մարդկային ազնվությունը, սերն ու արժանապատվությունը', ru: 'A) Потому что хотел показать благородство и любовь' },
      { es: 'B) Porque se le acabaron las pinturas oscuras', hy: 'B) Որովհետև մուգ ներկերը վերջացել էին', ru: 'B) Потому что кончилась темная краска' },
      { es: 'C) Porque la censura le prohibió pintar personas', hy: 'C) Որովհետև գրաքննությունն արգելեց նկարել մարդկանց', ru: 'C) Из-за цензуры' },
      { es: 'D) Porque la gente no tenía miedo', hy: 'D) Որովհետև մարդիկ չէին վախենում', ru: 'D) Потому что люди не боялись' }
    ],
    correctIndex: 0,
    explanation: {
      es: '¡Exacto! El mensaje humanista de Briullov es que la belleza del amor familiar vence incluso a la muerte.',
      hy: 'Ճիշտ է։ Բրյուլովի մարդասիրական ուղերձն այն է, որ ընտանեկան սիրո գեղեցկությունը հաղթում է նույնիսկ մահվանը։',
      ru: 'Верно! Гуманистический посыл художника — красота и величие человеческого духа.'
    }
  },
  {
    id: 'q19',
    question: {
      es: '19. ¿Cuánto tiempo permaneció Pompeya olvidada bajo tierra antes de ser redescubierta?',
      hy: '19. Որքա՞ն ժամանակ Պոմպեյը մոռացված մնաց հողի տակ՝ նախքան կրկին հայտնաբերվելը։',
      ru: '19. Сколько времени Помпеи оставались погребенными до начала раскопок?'
    },
    options: [
      { es: 'A) Casi 1700 años (17 siglos)', hy: 'A) Գրեթե 1700 տարի (17 դար)', ru: 'A) Почти 1700 лет (17 веков)' },
      { es: 'B) Solo 10 años', hy: 'B) Ընդամենը 10 տարի', ru: 'B) Всего 10 лет' },
      { es: 'C) 50 años', hy: 'C) 50 տարի', ru: 'C) 50 лет' },
      { es: 'D) Más de 5000 años', hy: 'D) Ավելի քան 5000 տարի', ru: 'D) Более 5000 лет' }
    ],
    correctIndex: 0,
    explanation: {
      es: '¡Así es! Las excavaciones arqueológicas serias no comenzaron hasta mediados del siglo XVIII (hacia 1748).',
      hy: 'Ճիշտ այդպես։ Լուրջ հնագիտական պեղումները չէին սկսվել մինչև 18-րդ դարի կեսերը (մոտ 1748 թ.)։',
      ru: 'Именно так! Раскопки начались лишь в середине XVIII века.'
    }
  },
  {
    id: 'q20',
    question: {
      es: '20. ¿Qué sentimiento despierta en el espectador la contemplación de este cuadro?',
      hy: '20. Ի՞նչ զգացմունք է արթնացնում դիտողի մեջ այս կտավի ուսումնասիրությունը։',
      ru: '20. Какое чувство рождает созерцание этой картины?'
    },
    options: [
      { es: 'A) Admiración por la fuerza del arte y compasión por los seres humanos', hy: 'A) Հիացմունք արվեստի ուժով և կարեկցանք մարդկանց հանդեպ', ru: 'A) Восхищение силой искусства и сострадание к людям' },
      { es: 'B) Indiferencia y aburrimiento', hy: 'B) Անտարբերություն և ձանձրույթ', ru: 'B) Равнодушие' },
      { es: 'C) Alegría cómica', hy: 'C) Զավեշտալի ուրախություն', ru: 'C) Смех и веселье' },
      { es: 'D) Deseo de destruir monumentos antiguos', hy: 'D) Հին հուշարձանները ոչնչացնելու ցանկություն', ru: 'D) Желание ломать памятники' }
    ],
    correctIndex: 0,
    explanation: {
      es: '¡Bravo! El cuadro conmueve profundamente el corazón, exaltando la grandeza de la compasión y del arte.',
      hy: 'Կեցցե՛ս։ Կտավը խորապես հուզում է սիրտը՝ բարձրացնելով կարեկցանքի և արվեստի վեհությունը։',
      ru: 'Браво! Полотно волнует сердца, прославляя величие сострадания и силы искусства.'
    }
  }
];

// JUEGO 3: VERDADERO O FALSO (15 statements)
export const TRUE_FALSE_STATEMENTS: TrueFalseStatement[] = [
  {
    id: 'tf-1',
    statement: {
      es: 'Pompeya era una ciudad del Imperio romano.',
      hy: 'Պոմպեյը Հռոմեական կայսրության քաղաք էր։',
      ru: 'Помпеи были городом Римской империи.'
    },
    isTrue: true,
    explanation: {
      es: '¡Verdadero! Pompeya era una próspera urbe romana situada en la región de Campania.',
      hy: 'Ճշմարիտ է։ Պոմպեյը հռոմեական ծաղկուն քաղաք էր Կամպանիա շրջանում։',
      ru: 'Правда! Помпеи были процветающим городом Римской империи.'
    }
  },
  {
    id: 'tf-2',
    statement: {
      es: 'El Vesubio es un volcán que destruyó Pompeya en el año 79 d. C.',
      hy: 'Վեզուվը հրաբուխ է, որը կործանեց Պոմպեյը մ.թ. 79 թվականին։',
      ru: 'Везувий — вулкан, разрушивший Помпеи в 79 году н. э.'
    },
    isTrue: true,
    explanation: {
      es: '¡Verdadero! La erupción en el año 79 d.C. sepultó la ciudad bajo piedra pómez y cenizas.',
      hy: 'Ճշմարիտ է։ Մ.թ. 79 թ. ժայթքումը քաղաքը թաղեց չեչաքարի և մոխրի տակ։',
      ru: 'Правда! Извержение 79 года погребло город.'
    }
  },
  {
    id: 'tf-3',
    statement: {
      es: 'El cuadro «El último día de Pompeya» representa una fiesta alegre de carnaval.',
      hy: '«Պոմպեյի վերջին օրը» կտավը ներկայացնում է ուրախ դիմակահանդեսային տոն։',
      ru: 'Картина изображает веселый карнавальный праздник.'
    },
    isTrue: false,
    explanation: {
      es: '¡Falso! El cuadro representa la trágica catástrofe del día de la erupción volcánica.',
      hy: 'Սխալ է։ Կտավը ներկայացնում է հրաբխի ժայթքման օրվա ողբերգական աղետը։',
      ru: 'Ложь! Картина изображает трагическую катастрофу.'
    }
  },
  {
    id: 'tf-4',
    statement: {
      es: 'Karl Briullov terminó este cuadro monumental en el año 1833.',
      hy: 'Կառլ Բրյուլովն այս մոնումենտալ կտավն ավարտել է 1833 թվականին։',
      ru: 'Карл Брюллов закончил эту картину в 1833 году.'
    },
    isTrue: true,
    explanation: {
      es: '¡Verdadero! Tras seis años de trabajo intenso, Briullov lo terminó en otoño de 1833 en Roma.',
      hy: 'Ճշմարիտ է։ Վեց տարվա տքնաջան աշխատանքից հետո Բրյուլովն այն ավարտեց 1833 թ. աշնանը Հռոմում։',
      ru: 'Правда! Художник завершил полотно в 1833 году.'
    }
  },
  {
    id: 'tf-5',
    statement: {
      es: 'El propio pintor Karl Briullov se autorretrató en el lienzo con una caja de pinturas en la cabeza.',
      hy: 'Ինքը՝ նկարիչ Կառլ Բրյուլովը, պատկերել է իրեն կտավի վրա՝ գլխին ներկերի արկղով։',
      ru: 'Сам художник Карл Брюллов изобразил себя с ящиком красок на голове.'
    },
    isTrue: true,
    explanation: {
      es: '¡Verdadero! Puedes encontrar su autorretrato en la parte izquierda del cuadro.',
      hy: 'Ճշմարիտ է։ Նրա ինքնանկարը կարող ես գտնել նկարի ձախ հատվածում։',
      ru: 'Правда! Автопортрет мастера находится в левой части картины.'
    }
  },
  {
    id: 'tf-6',
    statement: {
      es: 'La pintura original de Briullov es muy pequeña, del tamaño de una hoja de papel.',
      hy: 'Բրյուլովի բնօրինակ կտավը շատ փոքր է՝ թղթի թերթի չափ։',
      ru: 'Оригинальная картина Брюллова размером с обычный лист бумаги.'
    },
    isTrue: false,
    explanation: {
      es: '¡Falso! Es un lienzo gigantesco de más de 4.5 metros de alto y 6.5 metros de ancho.',
      hy: 'Սխալ է։ Այն հսկայական կտավ է՝ ավելի քան 4.5 մետր բարձրությամբ և 6.5 մետր լայնությամբ։',
      ru: 'Ложь! Это колоссальное полотно размером 4,5 × 6,5 метров.'
    }
  },
  {
    id: 'tf-7',
    statement: {
      es: 'En el cuadro vemos a dos hijos que cargan en brazos a su anciano padre.',
      hy: 'Կտավում մենք տեսնում ենք երկու որդիների, ովքեր գրկած տանում են իրենց ծեր հորը։',
      ru: 'На картине двое сыновей несут на руках своего пожилого отца.'
    },
    isTrue: true,
    explanation: {
      es: '¡Verdadero! Esta conmovedora escena se encuentra en el lado derecho de la obra.',
      hy: 'Ճշմարիտ է։ Այս հուզիչ տեսարանը գտնվում է ստեղծագործության աջ կողմում։',
      ru: 'Правда! Трогательная сцена находится справа.'
    }
  },
  {
    id: 'tf-8',
    statement: {
      es: 'Pompeya fue destruida por un tsunami en el océano Pacífico.',
      hy: 'Պոմպեյը ոչնչացվել է Խաղաղ օվկիանոսի ցունամիից։',
      ru: 'Помпеи были смыты цунами в Тихом океане.'
    },
    isTrue: false,
    explanation: {
      es: '¡Falso! Fue destruida por la erupción del volcán Vesubio, cerca del mar Tirreno.',
      hy: 'Սխալ է։ Այն կործանվել է Վեզուվ հրաբխի ժայթքումից՝ Տիրենյան ծովի մոտ։',
      ru: 'Ложь! Город погиб от извержения вулкана Везувий.'
    }
  },
  {
    id: 'tf-9',
    statement: {
      es: 'El cuadro ganó la Medalla de Oro en el Salón de París de 1834.',
      hy: 'Կտավը նվաճեց Ոսկե մեդալ 1834 թվականի Փարիզի սալոնում։',
      ru: 'Картина получила золотую медаль на Парижском салоне 1834 года.'
    },
    isTrue: true,
    explanation: {
      es: '¡Verdadero! Francia reconoció la genialidad de Briullov otorgándole su más alto galardón.',
      hy: 'Ճշմարիտ է։ Ֆրանսիան ճանաչեց Բրյուլովի հանճարը՝ նրան շնորհելով իր բարձրագույն պարգևը։',
      ru: 'Правда! Картина получила высшую награду Парижского салона.'
    }
  },
  {
    id: 'tf-10',
    statement: {
      es: 'En el suelo del cuadro hay monedas de oro tiradas que la gente no recoge.',
      hy: 'Կտավի հատակին թափված են ոսկե մետաղադրամներ, որոնք մարդիկ չեն հավաքում։',
      ru: 'На мостовой рассыпаны золотые монеты, которые никто не подбирает.'
    },
    isTrue: true,
    explanation: {
      es: '¡Verdadero! Las monedas simbolizan que el dinero pierde todo su valor ante la catástrofe.',
      hy: 'Ճշմարիտ է։ Դրամները խորհրդանշում են, որ փողը կորցնում է իր ամբողջ արժեքն աղետի առաջ։',
      ru: 'Правда! Золото бесполезно перед лицом гибели.'
    }
  },
  {
    id: 'tf-11',
    statement: {
      es: 'Briullov tardó solo tres días en pintar todo el cuadro monumental.',
      hy: 'Բրյուլովից ընդամենը երեք օր պահանջվեց ամբողջ մոնումենտալ կտավը նկարելու համար։',
      ru: 'Брюллов написал все гигантское полотно всего за три дня.'
    },
    isTrue: false,
    explanation: {
      es: '¡Falso! Tardó unos seis años (1827–1833) recopilando datos históricos y pintando con detalle.',
      hy: 'Սխալ է։ Պահանջվեց շուրջ վեց տարի (1827–1833) պատմական նյութեր հավաքելու և մանրամասն նկարելու համար։',
      ru: 'Ложь! Работа заняла около шести лет.'
    }
  },
  {
    id: 'tf-12',
    statement: {
      es: 'El rostro de la condesa Yulia Samóilova aparece en varios personajes femeninos.',
      hy: 'Կոմսուհի Յուլիա Սամոյլովայի դեմքը հանդիպում է մի քանի կանացի կերպարներում։',
      ru: 'Лицо графини Юлии Самойловой запечатлено в нескольких женских образах.'
    },
    isTrue: true,
    explanation: {
      es: '¡Verdadero! Aparece en la mujer caída, la madre con sus hijas y la joven con la vasija.',
      hy: 'Ճշմարիտ է։ Այն հայտնվում է ընկած կնոջ, երեխաներին գրկած մոր և սափորով աղջկա կերպարներում։',
      ru: 'Правда! Ее черты видны в образах упавшей женщины, матери и девушки с кувшином.'
    }
  },
  {
    id: 'tf-13',
    statement: {
      es: 'Los edificios y las estatuas permanecieron completamente intactos durante el terremoto.',
      hy: 'Շենքերն ու արձանները լիովին անվնաս մնացին երկրաշարժի ժամանակ։',
      ru: 'Здания и статуи остались абсолютно целыми во время катастрофы.'
    },
    isTrue: false,
    explanation: {
      es: '¡Falso! En el cuadro se ve claramente cómo las estatuas y los templos se derrumban.',
      hy: 'Սխալ է։ Կտավում հստակ երևում է, թե ինչպես են արձաններն ու տաճարները փլուզվում։',
      ru: 'Ложь! На картине ясно видно падение статуй и обрушение храмов.'
    }
  },
  {
    id: 'tf-14',
    statement: {
      es: 'Un sacerdote cristiano sereno con una cruz aparece en el extremo izquierdo del cuadro.',
      hy: 'Խաչով խաղաղ քրիստոնյա քահանան հայտնվում է կտավի ձախ ծայրում։',
      ru: 'Спокойный христианский священник с крестом изображен у левого края картины.'
    },
    isTrue: true,
    explanation: {
      es: '¡Verdadero! Representa la nueva fe que mira al cielo con esperanza pacífica.',
      hy: 'Ճշմարիտ է։ Նա ներկայացնում է նոր հավատը, որը խաղաղ հույսով նայում է երկնքին։',
      ru: 'Правда! Он олицетворяет новую христианскую веру.'
    }
  },
  {
    id: 'tf-15',
    statement: {
      es: 'El escritor ruso Aleksandr Pushkin admiró profundamente esta obra maestra.',
      hy: 'Ռուս գրող Ալեքսանդր Պուշկինը խորապես հիացած էր այս գլուխգործոցով։',
      ru: 'Русский поэт Александр Пушкин глубоко восхищался этим шедевром.'
    },
    isTrue: true,
    explanation: {
      es: '¡Verdadero! Pushkin incluso escribió un célebre poema dedicado a la pintura de Briullov.',
      hy: 'Ճշմարիտ է։ Պուշկինը նույնիսկ հայտնի բանաստեղծություն ձոնեց Բրյուլովի կտավին։',
      ru: 'Правда! Пушкин посвятил картине восторженное стихотворение.'
    }
  }
];

// JUEGO 4: DETECTIVE DEL ARTE (12 tasks)
export const DETECTIVE_TASKS: DetectiveTask[] = [
  {
    id: 'det-1',
    title: {
      es: 'Misterio 1: El secreto de la luz dual',
      hy: 'Առեղծված 1. Կրկնակի լույսի գաղտնիքը',
      ru: 'Загадка 1: Тайна двойного света'
    },
    mystery: {
      es: '¿Cómo logra el pintor que unas personas se vean iluminadas de blanco y el fondo se vea de un rojo ardiente?',
      hy: 'Ինչպե՞ս է նկարիչը հասնում նրան, որ որոշ մարդիկ լուսավորվեն սպիտակով, իսկ հետին պլանը՝ կրակոտ կարմիրով։',
      ru: 'Как художник добился того, что передний план залит белым светом, а фон — огненно-красным?'
    },
    clue: {
      es: 'Fíjate en dos fuentes luminosas opuestas: arriba a la izquierda y en el horizonte.',
      hy: 'Ուշադրություն դարձրու երկու հակադիր լույսի աղբյուրներին՝ վերևում ձախից և հորիզոնում։',
      ru: 'Обрати внимание на два разных источника света: молнию и лаву.'
    },
    focusX: 28,
    focusY: 18,
    question: {
      es: '¿Cuáles son las dos fuentes de luz en el cuadro?',
      hy: 'Որո՞նք են լույսի երկու աղբյուրները կտավում։',
      ru: 'Каковы два источника света на полотне?'
    },
    options: [
      {
        text: {
          es: 'La luz fría y azulada del relámpago frente a la luz roja ardiente del volcán en erupción',
          hy: 'Կայծակի սառը կապտավուն լույսը՝ հրաբխի ժայթքող կրակոտ կարմիր լույսի դեմ',
          ru: 'Холодный свет молнии и раскаленный красный свет извергающегося вулкана'
        },
        isCorrect: true,
        explanation: {
          es: '¡Brillante deducción! Briullov inventó este contraste maestro para exaltar la tensión dramática.',
          hy: 'Փայլուն հետևություն։ Բրյուլովը հորինեց այս վարպետական հակադրությունը դրամատիկ լարվածությունն ուժեղացնելու համար։',
          ru: 'Блестяще! Этот прием создает потрясающее драматическое напряжение.'
        }
      },
      {
        text: {
          es: 'Dos farolas eléctricas modernas en la calle romana',
          hy: 'Երկու ժամանակակից էլեկտրական լապտերներ հռոմեական փողոցում',
          ru: 'Два электрических фонаря на римской улице'
        },
        isCorrect: false,
        explanation: {
          es: 'No, en la antigua Roma no existía la electricidad.',
          hy: 'Ոչ, հին Հռոմում էլեկտրականություն գոյություն չուներ։',
          ru: 'Нет, в древнем Риме не было электричества.'
        }
      }
    ]
  },
  {
    id: 'det-2',
    title: {
      es: 'Misterio 2: El misterio de las cuatro mujeres',
      hy: 'Առեղծված 2. Չորս կանանց առեղծվածը',
      ru: 'Загадка 2: Тайна четырех женских лиц'
    },
    mystery: {
      es: '¿Por qué cuatro mujeres diferentes en el cuadro tienen rasgos faciales tan parecidos?',
      hy: 'Ինչո՞ւ են կտավի չորս տարբեր կանայք ունենում դեմքի այդքան նման գծեր։',
      ru: 'Почему четыре разные женщины на картине имеют такое портретное сходство?'
    },
    clue: {
      es: 'El artista estaba profundamente enamorado de su mejor amiga y musa artística.',
      hy: 'Նկարիչը խորապես սիրահարված էր իր լավագույն ընկերուհուն և արվեստի մուսային։',
      ru: 'Художник был вдохновлен своей близкой подругой и музой.'
    },
    focusX: 48,
    focusY: 84,
    question: {
      es: '¿Quién sirvió de modelo para estas cuatro figuras?',
      hy: 'Ո՞վ ծառայեց որպես բնորդուհի այս չորս կերպարների համար։',
      ru: 'Кто послужил моделью для этих женских образов?'
    },
    options: [
      {
        text: {
          es: 'La condesa Yulia Samóilova, su gran amor y benefactora',
          hy: 'Կոմսուհի Յուլիա Սամոյլովան՝ նրա մեծ սերն ու բարերարուհին',
          ru: 'Графиня Юлия Самойлова — муза и близкий друг художника'
        },
        isCorrect: true,
        explanation: {
          es: '¡Correcto! Briullov inmortalizó a Samóilova en diversas etapas y emociones del cuadro.',
          hy: 'Ճիշտ է։ Բրյուլովն անմահացրեց Սամոյլովային կտավի տարբեր իրավիճակներում և հույզերում։',
          ru: 'Верно! Брюллов увековечил ее черты в нескольких образах.'
        }
      },
      {
        text: {
          es: 'Eran cuatro hermanas gemelas reales de Pompeya',
          hy: 'Նրանք Պոմպեյի չորս իրական երկվորյակ քույրեր էին',
          ru: 'Это были четыре реальные сестры-близняшки'
        },
        isCorrect: false,
        explanation: {
          es: 'No, no eran gemelas; eran creaciones artísticas inspiradas en una sola musa.',
          hy: 'Ոչ, նրանք երկվորյակներ չէին, այլ մեկ մուսայից ներշնչված կերպարներ։',
          ru: 'Нет, это собирательные художественные образы.'
        }
      }
    ]
  },
  {
    id: 'det-3',
    title: {
      es: 'Misterio 3: El testigo con la caja de pinturas',
      hy: 'Առեղծված 3. Վկան՝ ներկերի արկղով',
      ru: 'Загадка 3: Свидетель с ящиком красок'
    },
    mystery: {
      es: '¿Por qué un hombre en medio del pánico lleva un objeto tan inusual sobre la cabeza?',
      hy: 'Ինչո՞ւ է խուճապի մեջ գտնվող մարդն այդպիսի անսովոր իր տանում գլխին։',
      ru: 'Почему человек посреди паники несет столь необычный предмет на голове?'
    },
    clue: {
      es: 'Ese hombre no huye con oro ni joyas, sino con herramientas de creación.',
      hy: 'Այդ մարդը չի փախչում ոսկով կամ զարդերով, այլ արարման գործիքներով։',
      ru: 'Он спасает не золото, а орудия творчества.'
    },
    focusX: 14.5,
    focusY: 38.5,
    question: {
      es: '¿Qué simboliza la presencia de Karl Briullov en su propio cuadro?',
      hy: 'Ի՞նչ է խորհրդանշում Կառլ Բրյուլովի ներկայությունն իր սեփական կտավում։',
      ru: 'Что символизирует присутствие художника в толпе?'
    },
    options: [
      {
        text: {
          es: 'El artista como testigo que preserva la verdad y la memoria de la historia a través del arte',
          hy: 'Նկարիչը՝ որպես վկա, որն արվեստի միջոցով պահպանում է պատմության ճշմարտությունն ու հիշողությունը',
          ru: 'Художник как свидетель трагедии, сохраняющий память через искусство'
        },
        isCorrect: true,
        explanation: {
          es: '¡Extraordinario! El arte trasciende la catástrofe y vence al olvido de los siglos.',
          hy: 'Արտասովոր է։ Արվեստը հաղթահարում է աղետը և հաղթում դարերի մոռացությանը։',
          ru: 'Верно! Искусство сильнее времени и забвения.'
        }
      },
      {
        text: {
          es: 'Que el pintor no tenía sombrero y usó la caja para protegerse del sol',
          hy: 'Որ նկարիչը գլխարկ չուներ և արկղն օգտագործեց արևից պաշտպանվելու համար',
          ru: 'Что у него не было шляпы от солнца'
        },
        isCorrect: false,
        explanation: {
          es: 'No, tiene un significado simbólico y artístico mucho más profundo.',
          hy: 'Ոչ, այն ունի շատ ավելի խորը խորհրդանշական և գեղարվեստական իմաստ։',
          ru: 'Нет, это глубокий символ роли художника.'
        }
      }
    ]
  },
  {
    id: 'det-4',
    title: {
      es: 'Misterio 4: La novia que perdió el conocimiento',
      hy: 'Առեղծված 4. Ուշաթափված հարսնացուն',
      ru: 'Загадка 4: Потерявшая сознание невеста'
    },
    mystery: {
      es: '¿Cómo sabemos con certeza que la joven en brazos de su novio iba a casarse?',
      hy: 'Ինչպե՞ս ենք վստահ գիտենք, որ երիտասարդի գրկում գտնվող աղջիկն ամուսնանալու էր։',
      ru: 'Как зритель узнает, что девушка на руках юноши — невеста?'
    },
    clue: {
      es: 'Mira con atención su tocado floral en la cabeza.',
      hy: 'Ուշադիր նայիր նրա գլխի ծաղկե զարդարանքին։',
      ru: 'Взгляни на ее прическу и венок.'
    },
    focusX: 62,
    focusY: 62,
    question: {
      es: '¿Qué detalle confirma que era una novia?',
      hy: 'Ո՞ր մանրուքն է հաստատում, որ նա հարսնացու էր։',
      ru: 'Какая деталь подтверждает, что она невеста?'
    },
    options: [
      {
        text: {
          es: 'Lleva una corona de flores amarillas tradicional de las bodas romanas',
          hy: 'Նա կրում է հռոմեական հարսանիքների ավանդական դեղին ծաղկեպսակ',
          ru: 'На ней венок из цветов, традиционный для римских невест'
        },
        isCorrect: true,
        explanation: {
          es: '¡Acertaste! Los romanos coronaban a las novias con flores el día de su matrimonio.',
          hy: 'Ճիշտ գուշակեցի՛ր։ Հռոմեացիներն ամուսնության օրը հարսնացուներին զարդարում էին ծաղկեպսակով։',
          ru: 'Верно! Римляне украшали невест венками из трав и цветов.'
        }
      },
      {
        text: {
          es: 'Lleva un cartel que dice "Recién casados"',
          hy: 'Նրա վրա կա գրություն՝ «Նորապսակներ»',
          ru: 'Табличка "молодожены"'
        },
        isCorrect: false,
        explanation: {
          es: 'No, los pintores clásicos transmitían los mensajes a través de símbolos visuales refinados.',
          hy: 'Ոչ, դասական նկարիչները մտքերն արտահայտում էին նուրբ տեսողական խորհրդանիշներով։',
          ru: 'Нет, художник передал это через символику.'
        }
      }
    ]
  },
  {
    id: 'det-5',
    title: {
      es: 'Misterio 5: Dos religiones frente a la muerte',
      hy: 'Առեղծված 5. Երկու կրոններ մահվան առաջ',
      ru: 'Загадка 5: Две веры перед лицом смерти'
    },
    mystery: {
      es: '¿Por qué Briullov colocó a un sacerdote pagano y a uno cristiano tan cerca en la misma pintura?',
      hy: 'Ինչո՞ւ Բրյուլովը նույն կտավում այդքան մոտ տեղադրեց հեթանոս քրմին և քրիստոնյա քահանային։',
      ru: 'Зачем Брюллов поместил рядом языческого жреца и христианского пастыря?'
    },
    clue: {
      es: 'Observa sus miradas y posturas opuestas: uno huye con oro, el otro mira al cielo con serenidad.',
      hy: 'Դիտիր նրանց հակադիր հայացքներն ու կեցվածքը. մեկը փախչում է ոսկով, մյուսը հանդարտ նայում է երկնքին։',
      ru: 'Сравни их поведение: один бежит с золотом, другой смотрит ввысь.'
    },
    focusX: 15,
    focusY: 60,
    question: {
      es: '¿Qué idea filosófica expresa este contraste?',
      hy: 'Ի՞նչ փիլիսոփայական գաղափար է արտահայտում այս հակադրությունը։',
      ru: 'Какую философскую идею выражает этот контраст?'
    },
    options: [
      {
        text: {
          es: 'El ocaso del viejo mundo pagano y el nacimiento de una nueva era espiritual basada en la fe',
          hy: 'Հին հեթանոսական աշխարհի մայրամուտը և հավատի վրա հիմնված նոր հոգևոր դարաշրջանի ծնունդը',
          ru: 'Закат языческого античного мира и зарождение новой веры'
        },
        isCorrect: true,
        explanation: {
          es: '¡Magistral! La historia se transforma: mientras el mundo pagano colapsa, surge una nueva espiritualidad.',
          hy: 'Վարպետությո՜ւն։ Պատմությունը վերափոխվում է. քանի դեռ հեթանոս աշխարհը փլուզվում է, ծնվում է նոր հոգևորություն։',
          ru: 'Великолепно! Это глубокий исторический и духовный символизм.'
        }
      },
      {
        text: {
          es: 'Que ambos sacerdotes eran grandes amigos y salían a pasear juntos',
          hy: 'Որ երկու հոգևորականներն էլ մտերիմ ընկերներ էին և միասին զբոսնում էին',
          ru: 'Что они были друзьями и вышли погулять'
        },
        isCorrect: false,
        explanation: {
          es: 'No, simbolizan dos visiones del mundo totalmente contrarias ante la muerte.',
          hy: 'Ոչ, նրանք խորհրդանշում են մահվան առաջ աշխարհայացքի երկու լիովին հակադիր մոտեցումներ։',
          ru: 'Нет, это глубокий идейный конфликт.'
        }
      }
    ]
  },
  {
    id: 'det-6',
    title: {
      es: 'Misterio 6: El oro abandonado en el suelo',
      hy: 'Առեղծված 6. Գետնին լքված ոսկին',
      ru: 'Загадка 6: Брошенное золото на мостовой'
    },
    mystery: {
      es: '¿Por qué nadie se agacha a recoger las monedas de oro y brazaletes en la calle?',
      hy: 'Ինչո՞ւ ոչ ոք կռացած չի հավաքում ոսկե դրամներն ու ապարանջանները փողոցում։',
      ru: 'Почему никто не подбирает рассыпанные драгоценности?'
    },
    clue: {
      es: 'Piensa en qué es lo verdaderamente valioso cuando tu vida está en peligro extremo.',
      hy: 'Մտածիր, թե ինչն է իսկապես արժեքավոր, երբ կյանքդ ծայրահեղ վտանգի տակ է։',
      ru: 'Подумай, что имеет ценность, когда рушится мир.'
    },
    focusX: 42,
    focusY: 88,
    question: {
      es: '¿Qué lección moral nos transmite el pintor con este detalle?',
      hy: 'Ի՞նչ բարոյական դաս է մեզ փոխանցում նկարիչն այս մանրուքով։',
      ru: 'Какую мораль несет эта деталь зрителям?'
    },
    options: [
      {
        text: {
          es: 'La riqueza material no tiene ningún valor frente a la vida humana y el amor familiar',
          hy: 'Նյութական հարստությունը ոչ մի արժեք չունի մարդկային կյանքի և ընտանեկան սիրո առաջ',
          ru: 'Материальное богатство ничтожно перед лицом жизни и любви'
        },
        isCorrect: true,
        explanation: {
          es: '¡Exacto! El dinero se convierte en simple polvo cuando la supervivencia está en juego.',
          hy: 'Ճիշտ է։ Փողը վերածվում է սովորական փոշու, երբ խնդիրը ողջ մնալն է։',
          ru: 'Верно! Золото теряет всякую цену перед смертью.'
        }
      },
      {
        text: {
          es: 'Que las monedas eran falsas y de chocolate',
          hy: 'Որ դրամները կեղծ էին և շոկոլադից',
          ru: 'Что монеты были шоколадными'
        },
        isCorrect: false,
        explanation: {
          es: 'Eran monedas de oro auténticas, pero el valor de la vida es infinitamente superior.',
          hy: 'Դրանք իսկական ոսկե դրամներ էին, բայց կյանքի արժեքն անհամեմատ ավելի բարձր է։',
          ru: 'Нет, это настоящее золото, ставшее ненужным.'
        }
      }
    ]
  },
  {
    id: 'det-7',
    title: {
      es: 'Misterio 7: El homenaje a la mitología romana',
      hy: 'Առեղծված 7. Ձոն հռոմեական դիցաբանությանը',
      ru: 'Загадка 7: Отсылка к римскому мифу'
    },
    mystery: {
      es: '¿Qué famoso héroe de la historia romana inspiró a los dos hijos cargando a su padre anciano?',
      hy: 'Հռոմեական պատմության ո՞ր հայտնի հերոսն է ոգեշնչել իրենց ծեր հորը տանող երկու որդիների կերպարը։',
      ru: 'Какой легендарный герой вдохновил сцену спасения отца сыновьями?'
    },
    clue: {
      es: 'Huyó de Troya en llamas cargando a su padre Anquises en la espalda.',
      hy: 'Նա փախավ այրվող Տրոյայից՝ իր մեջքին տանելով հորը՝ Անքիսեսին։',
      ru: 'Он вынес отца из горящей Трои.'
    },
    focusX: 88,
    focusY: 64,
    question: {
      es: '¿Cómo se llama ese célebre héroe troyano y antepasado de Roma?',
      hy: 'Ի՞նչ է այդ հռչակավոր տրոյացի հերոսի և Հռոմի նախահոր անունը։',
      ru: 'Как звали этого знаменитого героя?'
    },
    options: [
      {
        text: {
          es: 'Eneas, el héroe legendario cantado por Virgilio',
          hy: 'Էնեասը՝ Վերգիլիոսի գովերգած լեգենդար հերոսը',
          ru: 'Эней — легендарный герой поэмы Вергилия'
        },
        isCorrect: true,
        explanation: {
          es: '¡Extraordinario! Briullov conectó la tragedia de Pompeya con el mito fundacional de Roma.',
          hy: 'Արտակարգ է։ Բրյուլովը Պոմպեյի ողբերգությունը կապեց Հռոմի հիմնադրման առասպելի հետ։',
          ru: 'Верно! Это прямая отсылка к Энею и Анхису.'
        }
      },
      {
        text: {
          es: 'Hércules limpiando los establos',
          hy: 'Հերկուլեսը՝ ախոռները մաքրելիս',
          ru: 'Геракл'
        },
        isCorrect: false,
        explanation: {
          es: 'No, se refiere al devoto hijo Eneas salvando a su anciano padre.',
          hy: 'Ոչ, խոսքը նվիրյալ որդու՝ Էնեասի մասին է, ով փրկեց ծեր հորը։',
          ru: 'Нет, это образ Энея.'
        }
      }
    ]
  },
  {
    id: 'det-8',
    title: {
      es: 'Misterio 8: El carro destrozado',
      hy: 'Առեղծված 8. Ջախջախված կառքը',
      ru: 'Загадка 8: Разбитая колесница'
    },
    mystery: {
      es: '¿Por qué hay una rueda rota y caballos fugitivos en medio de la calle?',
      hy: 'Ինչո՞ւ փողոցի մեջտեղում կոտրված անիվ կա և փախչող ձիեր։',
      ru: 'Откуда взялось сломанное колесо посреди улицы?'
    },
    clue: {
      es: 'La mujer del vestido amarillo no caminaba a pie; iba en un vehículo noble.',
      hy: 'Դեղին զգեստով կինը ոտքով չէր քայլում, նա ազնվական փոխադրամիջոցով էր ընթանում։',
      ru: 'Знатная женщина ехала в повозке.'
    },
    focusX: 37,
    focusY: 44,
    question: {
      es: '¿Qué le ocurrió al carro de la mujer noble?',
      hy: 'Ի՞նչ պատահեց ազնվական կնոջ կառքին։',
      ru: 'Что случилось с повозкой?'
    },
    options: [
      {
        text: {
          es: 'Los caballos se asustaron por los temblores, el carro volcó en el pavimento y la mujer salió despedida',
          hy: 'Ձիերը խրտնեցին ցնցումներից, կառքը շրջվեց քարապատին, և կինը դուրս թռավ',
          ru: 'Кони испугались толчков, повозка перевернулась, и женщина упала на камни'
        },
        isCorrect: true,
        explanation: {
          es: '¡Correcto! El caos del terremoto provocó el violento vuelco del carro.',
          hy: 'Ճիշտ է։ Երկրաշարժի քաոսն առաջացրեց կառքի կատաղի շրջվելը։',
          ru: 'Верно! Колесница разбилась от толчков.'
        }
      },
      {
        text: {
          es: 'Se le pinchó un neumático moderno',
          hy: 'Ժամանակակից անվադողը ծակվեց',
          ru: 'Спустило шину'
        },
        isCorrect: false,
        explanation: {
          es: 'No, eran carros de madera y hierro de la época romana.',
          hy: 'Ոչ, դրանք հռոմեական դարաշրջանի փայտե ու երկաթե կառքեր էին։',
          ru: 'Нет, это античная колесница.'
        }
      }
    ]
  },
  {
    id: 'det-9',
    title: {
      es: 'Misterio 9: La arquitectura clásica en ruinas',
      hy: 'Առեղծված 9. Դասական ճարտարապետությունն ավերակներում',
      ru: 'Загадка 9: Рушащаяся античная архитектура'
    },
    mystery: {
      es: '¿Qué edificios reales de Pompeya dibujó Briullov en el fondo del cuadro?',
      hy: 'Պոմպեյի ո՞ր իրական շինություններն է նկարել Բրյուլովը կտավի հետին պլանում։',
      ru: 'Какие реальные постройки Помпей запечатлел художник?'
    },
    clue: {
      es: 'El artista visitó en persona la llamada "Calle de las Tumbas" en 1827.',
      hy: 'Նկարիչն անձամբ այցելել է «Դամբարանների փողոց» կոչվող վայրը 1827 թվականին։',
      ru: 'Художник посетил знаменитую "Улицу гробниц" в 1827 году.'
    },
    focusX: 74,
    focusY: 22,
    question: {
      es: '¿En qué lugar auténtico de las excavaciones situó Briullov la escena?',
      hy: 'Պեղումների ո՞ր իսկական վայրում Բրյուլովը տեղադրեց տեսարանը։',
      ru: 'В каком подлинном месте раскопок разворачивается действие?'
    },
    options: [
      {
        text: {
          es: 'En la Vía de los Sepulcros (Calle de las Tumbas), ante la tumba de Scaurus',
          hy: 'Դամբարանների փողոցում (Via dei Sepolcri)՝ Սկավրոսի դամբարանի դիմաց',
          ru: 'На Улице гробниц (Гробница Скавра у Геркуланских ворот)'
        },
        isCorrect: true,
        explanation: {
          es: '¡Asombroso conocimiento histórico! Briullov copió las tumbas y pedestales con rigor arqueológico.',
          hy: 'Զարմանալի պատմական գիտելիք։ Բրյուլովը դամբարաններն ու պատվանդանները պատկերել է հնագիտական ճշգրտությամբ։',
          ru: 'Блестяще! Художник точно воспроизвел архитектуру Гробницы Скавра.'
        }
      },
      {
        text: {
          es: 'En la plaza central de Madrid',
          hy: 'Մադրիդի կենտրոնական հրապարակում',
          ru: 'На площади в Мадриде'
        },
        isCorrect: false,
        explanation: {
          es: 'No, está situado exactamente en las ruinas reales de Pompeya.',
          hy: 'Ոչ, այն տեղադրված է հենց Պոմպեյի իրական ավերակներում։',
          ru: 'Нет, это подлинные руины Помпей.'
        }
      }
    ]
  },
  {
    id: 'det-10',
    title: {
      es: 'Misterio 10: La belleza en medio de la tragedia',
      hy: 'Առեղծված 10. Գեղեցկությունը ողբերգության մեջ',
      ru: 'Загадка 10: Красота среди трагедии'
    },
    mystery: {
      es: '¿Por qué los cuerpos de las personas se ven tan atléticos, nobles y bellos a pesar del desastre?',
      hy: 'Ինչո՞ւ են մարդկանց մարմիններն այդքան մարզական, ազնիվ և գեղեցիկ՝ չնայած աղետին։',
      ru: 'Почему тела людей столь пластичны и прекрасны во время катастрофы?'
    },
    clue: {
      es: 'Briullov combinó la pasión del Romanticismo con los ideales estéticos de la escultura clásica grecorromana.',
      hy: 'Բրյուլովը ռոմանտիզմի կիրքը միավորեց հունահռոմեական դասական քանդակագործության գեղագիտական իդեալների հետ։',
      ru: 'Художник следовал традициям классической античной скульптуры.'
    },
    focusX: 50,
    focusY: 50,
    question: {
      es: '¿Qué principio artístico aplicó el pintor a sus personajes?',
      hy: 'Ի՞նչ գեղարվեստական սկզբունք կիրառեց նկարիչն իր կերպարների համար։',
      ru: 'Какому художественному принципу следовал мастер?'
    },
    options: [
      {
        text: {
          es: 'El ideal clásico de belleza física y dignidad moral, inspirado en la escultura antigua',
          hy: 'Ֆիզիկական գեղեցկության և բարոյական արժանապատվության դասական իդեալը՝ ներշնչված անտիկ քանդակից',
          ru: 'Классический идеал гармонии и достоинства человеческого тела'
        },
        isCorrect: true,
        explanation: {
          es: '¡Exacto! El hombre no pierde su belleza ni su nobleza incluso cuando el mundo se desmorona.',
          hy: 'Ճիշտ է։ Մարդը չի կորցնում իր գեղեցկությունն ու ազնվականությունը նույնիսկ այն ժամանակ, երբ աշխարհը փլուզվում է։',
          ru: 'Верно! Человек прекрасен и величественен даже перед лицом гибели.'
        }
      },
      {
        text: {
          es: 'Quería vender ropa deportiva romana',
          hy: 'Ուզում էր հռոմեական մարզահագուստ վաճառել',
          ru: 'Хотел рекламировать спорт'
        },
        isCorrect: false,
        explanation: {
          es: 'Es una de las características fundamentales de la gran pintura clásica europea.',
          hy: 'Սա եվրոպական մեծ դասական գեղանկարչության հիմնարար հատկանիշներից է։',
          ru: 'Нет, это законы высокого искусства.'
        }
      }
    ]
  },
  {
    id: 'det-11',
    title: {
      es: 'Misterio 11: Las cartas que salvaron la historia',
      hy: 'Առեղծված 11. Նամակները, որոնք փրկեցին պատմությունը',
      ru: 'Загадка 11: Письма, спасшие историю'
    },
    mystery: {
      es: '¿Cómo supieron los historiadores los detalles exactos de cómo fue la erupción hace dos mil años?',
      hy: 'Ինչպե՞ս պատմաբաններն իմացան երկու հազար տարի առաջ տեղի ունեցած ժայթքման ճշգրիտ մանրամասները։',
      ru: 'Откуда ученые узнали точные детали катастрофы двухтысячелетней давности?'
    },
    clue: {
      es: 'El joven arrodillado con su madre en la esquina derecha fue quien escribió esos testimonios.',
      hy: 'Աջ անկյունում մոր հետ ծնկի իջած երիտասարդն էր, ով գրեց այդ վկայությունները։',
      ru: 'Юноша в правом углу стал летописцем события.'
    },
    focusX: 93,
    focusY: 78,
    question: {
      es: '¿A través de qué fuente histórica llegó a nosotros la descripción del Vesubio?',
      hy: 'Ո՞ր պատմական աղբյուրի միջոցով մեզ հասավ Վեզուվի նկարագրությունը։',
      ru: 'Через какой исторический источник мы знаем об извержении?'
    },
    options: [
      {
        text: {
          es: 'A través de las cartas de Plinio el Joven dirigidas al historiador romano Tácito',
          hy: 'Պլինիոս Կրտսերի նամակների միջոցով՝ ուղղված հռոմեացի պատմիչ Տակիտոսին',
          ru: 'Благодаря сохранившимся письмам Плиния Младшего к Тациту'
        },
        isCorrect: true,
        explanation: {
          es: '¡Brillante! Plinio describió con precisión científica la nube en forma de pino y la lluvia de piedras.',
          hy: 'Փայլուն է։ Պլինիոսը գիտական ճշգրտությամբ նկարագրեց սոճու տեսք ունեցող ամպն ու քարերի անձրևը։',
          ru: 'Верно! Плиний точно описал форму облака-пинии и падающую пемзу.'
        }
      },
      {
        text: {
          es: 'A través de un video grabado con teléfono móvil',
          hy: 'Բջջային հեռախոսով նկարահանված տեսանյութի միջոցով',
          ru: 'По видеозаписи'
        },
        isCorrect: false,
        explanation: {
          es: 'En el año 79 d.C. solo existían los manuscritos en papiro y pergamino.',
          hy: 'Մ.թ. 79 թվականին գոյություն ունեին միայն պապիրուսի և մագաղաթի ձեռագրերը։',
          ru: 'Нет, это древнеримские рукописи.'
        }
      }
    ]
  },
  {
    id: 'det-12',
    title: {
      es: 'Misterio 12: El manto de protección',
      hy: 'Առեղծված 12. Պաշտպանության թիկնոցը',
      ru: 'Загадка 12: Покрывало защиты'
    },
    mystery: {
      es: '¿Qué sostiene sobre sus cabezas la familia en los escalones del templo para defenderse?',
      hy: 'Ի՞նչ է պահում իրենց գլխավերևում տաճարի աստիճանների ընտանիքը՝ պաշտպանվելու համար։',
      ru: 'Чем укрываются люди на ступенях храма слева?'
    },
    clue: {
      es: 'Desde el cielo caían piedras pómez ardientes y cenizas incandescentes.',
      hy: 'Երկնքից տեղում էին շիկացած չեչաքարեր և այրող մոխիր։',
      ru: 'С неба сыпались горячие камни и пепел.'
    },
    focusX: 20,
    focusY: 48,
    question: {
      es: '¿Cómo intentan protegerse de las piedras que caen del cielo?',
      hy: 'Ինչպե՞ս են նրանք փորձում պաշտպանվել երկնքից ընկնող քարերից։',
      ru: 'Как они спасаются от каменного града?'
    },
    options: [
      {
        text: {
          es: 'Extienden una manta y ropa pesada sobre sus cabezas como refugio improvisado',
          hy: 'Գլխավերևում բացում են ծանր ծածկոց և հագուստ՝ որպես ինքնաշեն ապաստան',
          ru: 'Натягивают плотную ткань и плащи над головами как навес'
        },
        isCorrect: true,
        explanation: {
          es: '¡Así es! Históricamente, la gente usaba cojines, telas y mantas para amortiguar los golpes de las piedras.',
          hy: 'Ճիշտ այդպես։ Պատմականորեն մարդիկ օգտագործում էին բարձեր, կտորներ և ծածկոցներ՝ քարերի հարվածները մեղմելու համար։',
          ru: 'Верно! Люди привязывали подушки и укрывались плащами от камней.'
        }
      },
      {
        text: {
          es: 'Están bailando con una sábana blanca',
          hy: 'Նրանք պարում են սպիտակ սավանով',
          ru: 'Танцуют с простыней'
        },
        isCorrect: false,
        explanation: {
          es: 'No, es un gesto desesperado para salvar a sus seres queridos de la lluvia de fuego.',
          hy: 'Ոչ, դա հուսահատ քայլ է՝ հարազատներին կրակի անձրևից փրկելու համար։',
          ru: 'Нет, это попытка уберечься от огненного града.'
        }
      }
    ]
  }
];

// JUEGO 5: ORDENA LA HISTORIA (Timeline Cards)
export const TIMELINE_CARDS: TimelineCard[] = [
  {
    id: 't-1',
    year: 'Siglo I a. C. – 79 d. C.',
    title: {
      es: 'La vida cotidiana en Pompeya',
      hy: 'Առօրյա կյանքը Պոմպեյում',
      ru: 'Повседневная жизнь в Помпеях'
    },
    description: {
      es: 'Pompeya florece como una ciudad romana llena de comercio, baños, templos y hermosas villas.',
      hy: 'Պոմպեյը ծաղկում է որպես հռոմեական քաղաք՝ լի առևտրով, բաղնիքներով, տաճարներով և շքեղ վիլլաներով։',
      ru: 'Помпеи процветают как богатый римский курортный город.'
    },
    correctOrder: 1
  },
  {
    id: 't-2',
    year: 'Año 79 d. C.',
    title: {
      es: 'La fatídica erupción del Vesubio',
      hy: 'Վեզուվի ճակատագրական ժայթքումը',
      ru: 'Роковое извержение Везувия'
    },
    description: {
      es: 'El volcán explota con furia. La ciudad queda sepultada bajo cenizas y piedra pómez durante siglos.',
      hy: 'Հրաբուխը պայթում է կատաղությամբ։ Քաղաքը դարերով թաղվում է մոխրի և չեչաքարի տակ։',
      ru: 'Вулкан взрывается, и город оказывается погребен под пеплом.'
    },
    correctOrder: 2
  },
  {
    id: 't-3',
    year: '1748',
    title: {
      es: 'El inicio de las excavaciones arqueológicas',
      hy: 'Հնագիտական պեղումների սկիզբը',
      ru: 'Начало археологических раскопок'
    },
    description: {
      es: 'Los arqueólogos descubren las ruinas intactas de Pompeya bajo tierra, asombrando al mundo entero.',
      hy: 'Հնագետները հողի տակ հայտնաբերում են Պոմպեյի անվնաս ավերակները՝ զարմացնելով ամբողջ աշխարհին։',
      ru: 'Археологи открывают нетронутые руины города под землей.'
    },
    correctOrder: 3
  },
  {
    id: 't-4',
    year: '1827',
    title: {
      es: 'Karl Briullov visita las ruinas romanas',
      hy: 'Կառլ Բրյուլովն այցելում է հռոմեական ավերակները',
      ru: 'Карл Брюллов посещает раскопки'
    },
    description: {
      es: 'El pintor camina emocionado por las calles desenterradas y decide crear una pintura monumental.',
      hy: 'Նկարիչը հուզմունքով քայլում է պեղված փողոցներով և որոշում ստեղծել մոնումենտալ կտավ։',
      ru: 'Художник потрясен увиденным и решает написать грандиозную картину.'
    },
    correctOrder: 4
  },
  {
    id: 't-5',
    year: '1830–1833',
    title: {
      es: 'La creación de la obra en el taller de Roma',
      hy: 'Կտավի ստեղծումը Հռոմի արվեստանոցում',
      ru: 'Создание картины в Риме'
    },
    description: {
      es: 'Briullov trabaja incansablemente en un lienzo de más de 6 metros, cuidando cada detalle histórico.',
      hy: 'Բրյուլովն անխոնջ աշխատում է ավելի քան 6 մետրանոց կտավի վրա՝ մանրակրկիտ պահպանելով պատմական ճշմարտությունը։',
      ru: 'Брюллов неустанно трудится над огромным полотном.'
    },
    correctOrder: 5
  },
  {
    id: 't-6',
    year: '1833–1834',
    title: {
      es: 'El triunfo internacional en Europa',
      hy: 'Միջազգային հաղթարշավը Եվրոպայում',
      ru: 'Международный триумф в Европе'
    },
    description: {
      es: 'El cuadro se exhibe con éxito clamoroso en Milán, gana la Medalla de Oro en París y llega a Rusia.',
      hy: 'Կտավը ցնցող հաջողությամբ ցուցադրվում է Միլանում, նվաճում Փարիզի Ոսկե մեդալը և հասնում Ռուսաստան։',
      ru: 'Картина триумфально выставляется в Риме, Париже и Петербурге.'
    },
    correctOrder: 6
  }
];

// JUEGO 6: COMPLETA LA FRASE (15 tasks)
export const FILL_BLANK_TASKS: FillBlankTask[] = [
  {
    id: 'fb-1',
    sentenceBefore: 'El volcán Vesubio',
    sentenceAfter: 'en el año 79 d. C.',
    missingWord: 'entró en erupción',
    options: ['cantó', 'entró en erupción', 'estudió'],
    correctIndex: 1,
    fullTranslation: {
      es: 'El volcán Vesubio entró en erupción en el año 79 d. C.',
      hy: 'Վեզուվ հրաբուխը ժայթքեց մ.թ. 79 թվականին։',
      ru: 'Вулкан Везувий начал извергаться в 79 году н. э.'
    },
    explanation: {
      es: 'En español decimos que un volcán «entra en erupción».',
      hy: 'Իսպաներենում ասում ենք, որ հրաբուխը «entró en erupción» (ժայթքեց)։',
      ru: 'Правильное выражение — «entrar en erupción».'
    }
  },
  {
    id: 'fb-2',
    sentenceBefore: 'Las personas intentaban',
    sentenceAfter: 'de la ciudad en peligro.',
    missingWord: 'escapar',
    options: ['bailar', 'escapar', 'dormir'],
    correctIndex: 1,
    fullTranslation: {
      es: 'Las personas intentaban escapar de la ciudad en peligro.',
      hy: 'Մարդիկ փորձում էին փախչել վտանգի մեջ գտնվող քաղաքից։',
      ru: 'Люди пытались убежать из опасного города.'
    },
    explanation: {
      es: 'El verbo «escapar» significa huir de una situación peligrosa.',
      hy: '«Escapar» բայը նշանակում է փախչել վտանգավոր իրավիճակից։',
      ru: 'Глагол «escapar» означает спасаться бегством.'
    }
  },
  {
    id: 'fb-3',
    sentenceBefore: 'Karl Briullov fue un gran',
    sentenceAfter: 'romántico del siglo XIX.',
    missingWord: 'pintor',
    options: ['médico', 'pintor', 'marinero'],
    correctIndex: 1,
    fullTranslation: {
      es: 'Karl Briullov fue un gran pintor romántico del siglo XIX.',
      hy: 'Կառլ Բրյուլովը 19-րդ դարի մեծ ռոմանտիկ նկարիչ էր։',
      ru: 'Карл Брюллов был великим художником-романтиком XIX века.'
    },
    explanation: {
      es: 'Briullov era un «pintor» (artista que pinta cuadros).',
      hy: 'Բրյուլովը «pintor» էր (նկարիչ, ով կտավներ է նկարում)։',
      ru: 'Брюллов — великий художник («pintor»).'
    }
  },
  {
    id: 'fb-4',
    sentenceBefore: 'Una nube espesa de',
    sentenceAfter: 'cubrió completamente el cielo.',
    missingWord: 'ceniza',
    options: ['flores', 'ceniza', 'azúcar'],
    correctIndex: 1,
    fullTranslation: {
      es: 'Una nube espesa de ceniza cubrió completamente el cielo.',
      hy: 'Մոխրի թանձր ամպն ամբողջությամբ փակեց երկինքը։',
      ru: 'Густое облако пепла полностью закрыло небо.'
    },
    explanation: {
      es: 'La «ceniza» volcánica es el residuo pulverizado que expulsa el cráter.',
      hy: 'Հրաբխային «ceniza»-ն (մոխիր) այն փոշիացած նյութն է, որը ժայթքում է խառնարանից։',
      ru: '«Ceniza» переводится как пепел.'
    }
  },
  {
    id: 'fb-5',
    sentenceBefore: 'Los dos hijos decidieron',
    sentenceAfter: 'a su anciano padre.',
    missingWord: 'proteger',
    options: ['olvidar', 'proteger', 'vender'],
    correctIndex: 1,
    fullTranslation: {
      es: 'Los dos hijos decidieron proteger a su anciano padre.',
      hy: 'Երկու որդիները որոշեցին պաշտպանել իրենց ծեր հորը։',
      ru: 'Два сына решили защитить своего престарелого отца.'
    },
    explanation: {
      es: '«Proteger» significa cuidar a alguien de un daño o peligro.',
      hy: '«Proteger» նշանակում է պաշտպանել որևէ մեկին վնասից կամ վտանգից։',
      ru: '«Proteger» — защищать, оберегать.'
    }
  },
  {
    id: 'fb-6',
    sentenceBefore: 'Un potente',
    sentenceAfter: 'en zigzag iluminó la oscuridad.',
    missingWord: 'relámpago',
    options: ['árbol', 'relámpago', 'río'],
    correctIndex: 1,
    fullTranslation: {
      es: 'Un potente relámpago en zigzag iluminó la oscuridad.',
      hy: 'Զիգզագաձև հզոր կայծակը լուսավորեց խավարը։',
      ru: 'Мощная молния зигзагом озарила тьму.'
    },
    explanation: {
      es: 'Un «relámpago» es el destello de luz eléctrica en el cielo durante una tormenta.',
      hy: '«Relámpago»-ն կայծակն է՝ երկնքում էլեկտրական լույսի բռնկումը։',
      ru: '«Relámpago» — молния.'
    }
  },
  {
    id: 'fb-7',
    sentenceBefore: 'El cuadro de Briullov es una gran',
    sentenceAfter: 'maestra del arte universal.',
    missingWord: 'obra',
    options: ['casa', 'obra', 'pelota'],
    correctIndex: 1,
    fullTranslation: {
      es: 'El cuadro de Briullov es una gran obra maestra del arte universal.',
      hy: 'Բրյուլովի կտավը համաշխարհային արվեստի մեծ գլուխգործոց է։',
      ru: 'Картина Брюллова — великий шедевр мирового искусства.'
    },
    explanation: {
      es: 'La expresión «obra maestra» significa creación artística de máxima calidad (шедевр / գլուխգործոց).',
      hy: '«Obra maestra» նշանակում է բարձրագույն որակի ստեղծագործություն (գլուխգործոց)։',
      ru: '«Obra maestra» — шедевр.'
    }
  },
  {
    id: 'fb-8',
    sentenceBefore: 'En los rostros de los ciudadanos se observa un gran',
    sentenceAfter: 'ante la catástrofe.',
    missingWord: 'miedo',
    options: ['sueño', 'miedo', 'hambre'],
    correctIndex: 1,
    fullTranslation: {
      es: 'En los rostros de los ciudadanos se observa un gran miedo ante la catástrofe.',
      hy: 'Քաղաքացիների դեմքերին նկատվում է մեծ վախ աղետի առջև։',
      ru: 'На лицах горожан виден сильный страх перед стихией.'
    },
    explanation: {
      es: '«Miedo» es la emoción producida por un peligro real o inminente.',
      hy: '«Miedo»-ն վախն է՝ վտանգից առաջացած զգացմունքը։',
      ru: '«Miedo» — страх.'
    }
  },
  {
    id: 'fb-9',
    sentenceBefore: 'Los arqueólogos encontraron las',
    sentenceAfter: 'intactas de la ciudad romana.',
    missingWord: 'ruinas',
    options: ['computadoras', 'ruinas', 'aviones'],
    correctIndex: 1,
    fullTranslation: {
      es: 'Los arqueólogos encontraron las ruinas intactas de la ciudad romana.',
      hy: 'Հնագետները գտան հռոմեական քաղաքի անվնաս ավերակները։',
      ru: 'Археологи обнаружили нетронутые руины римского города.'
    },
    explanation: {
      es: 'Las «ruinas» son los restos arquitectónicos de edificios antiguos.',
      hy: '«Ruinas»-ը հնագույն շինությունների ավերակներն ու մնացորդներն են։',
      ru: '«Ruinas» — руины, развалины.'
    }
  },
  {
    id: 'fb-10',
    sentenceBefore: 'A pesar del peligro, las personas no perdieron la',
    sentenceAfter: 'de salvar a los suyos.',
    missingWord: 'esperanza',
    options: ['bicicleta', 'esperanza', 'ropa'],
    correctIndex: 1,
    fullTranslation: {
      es: 'A pesar del peligro, las personas no perdieron la esperanza de salvar a los suyos.',
      hy: 'Չնայած վտանգին՝ մարդիկ չկորցրին հույսը փրկելու իրենց հարազատներին։',
      ru: 'Несмотря на опасность, люди не теряли надежды спасти близких.'
    },
    explanation: {
      es: 'La «esperanza» es la confianza de lograr lo que se desea (հույս / надежда).',
      hy: '«Esperanza» նշանակում է հույս՝ հավատ ապագայի հանդեպ։',
      ru: '«Esperanza» — надежда.'
    }
  },
  {
    id: 'fb-11',
    sentenceBefore: 'El caballo negro se encabritó porque estaba muy',
    sentenceAfter: 'por las llamas.',
    missingWord: 'asustado',
    options: ['alegre', 'asustado', 'dormido'],
    correctIndex: 1,
    fullTranslation: {
      es: 'El caballo negro se encabritó porque estaba muy asustado por las llamas.',
      hy: 'Սև ձին ծառս եղավ, որովհետև շատ վախեցած էր բոցերից։',
      ru: 'Черный конь встал на дыбы, потому что был сильно напуган пламенем.'
    },
    explanation: {
      es: '«Asustado» significa lleno de pánico y temor.',
      hy: '«Asustado» նշանակում է վախեցած, սարսափած։',
      ru: '«Asustado» — испуганный.'
    }
  },
  {
    id: 'fb-12',
    sentenceBefore: 'En el suelo de piedra cayeron numerosas',
    sentenceAfter: 'romanas de oro.',
    missingWord: 'monedas',
    options: ['manzanas', 'monedas', 'mesas'],
    correctIndex: 1,
    fullTranslation: {
      es: 'En el suelo de piedra cayeron numerosas monedas romanas de oro.',
      hy: 'Քարե հատակին ընկան բազմաթիվ ոսկե հռոմեական մետաղադրամներ։',
      ru: 'На каменную мостовую упало множество римских золотых монет.'
    },
    explanation: {
      es: 'Las «monedas» son piezas de metal acuñadas que sirven de dinero.',
      hy: '«Monedas»-ը մետաղադրամներն են (դրամները)։',
      ru: '«Monedas» — монеты.'
    }
  },
  {
    id: 'fb-13',
    sentenceBefore: 'Las enormes',
    sentenceAfter: 'de piedra cayeron desde los techos de los templos.',
    missingWord: 'estatuas',
    options: ['estatuas', 'nubes', 'cartas'],
    correctIndex: 0,
    fullTranslation: {
      es: 'Las enormes estatuas de piedra cayeron desde los techos de los templos.',
      hy: 'Քարե հսկա արձաններն ընկան տաճարների տանիքներից։',
      ru: 'Огромные каменные статуи упали с крыш храмов.'
    },
    explanation: {
      es: 'Una «estatua» es una escultura de bulto que representa una figura humana o divina.',
      hy: '«Estatua»-ն արձանն է՝ քանդակը։',
      ru: '«Estatua» — статуя.'
    }
  },
  {
    id: 'fb-14',
    sentenceBefore: 'La madre usó su propio cuerpo para',
    sentenceAfter: 'a sus dos pequeñas hijas.',
    missingWord: 'abrazar',
    options: ['dibujar', 'abrazar', 'cocinar'],
    correctIndex: 1,
    fullTranslation: {
      es: 'La madre usó su propio cuerpo para abrazar a sus dos pequeñas hijas.',
      hy: 'Մայրն իր մարմինն օգտագործեց իր երկու փոքրիկ դուստրերին գրկելու համար։',
      ru: 'Мать своим телом обнимала двух маленьких дочерей.'
    },
    explanation: {
      es: '«Abrazar» significa estrechar entre los brazos en señal de cariño y protección.',
      hy: '«Abrazar» նշանակում է գրկել՝ սիրո և պաշտպանության նշանով։',
      ru: '«Abrazar» — обнимать.'
    }
  },
  {
    id: 'fb-15',
    sentenceBefore: 'El cuadro de Pompeya nos enseña el gran valor de la',
    sentenceAfter: 'humana en momentos difíciles.',
    missingWord: 'solidaridad',
    options: ['computación', 'solidaridad', 'comida'],
    correctIndex: 1,
    fullTranslation: {
      es: 'El cuadro de Pompeya nos enseña el gran valor de la solidaridad humana en momentos difíciles.',
      hy: 'Պոմպեյի կտավը մեզ սովորեցնում է մարդկային համերաշխության մեծ արժեքը դժվար պահերին։',
      ru: 'Картина учит нас огромной ценности человеческой солидарности в трудные минуты.'
    },
    explanation: {
      es: 'La «solidaridad» es el apoyo mutuo e incondicional hacia los demás.',
      hy: '«Solidaridad»-ը փոխադարձ համերաշխությունն ու աջակցությունն է։',
      ru: '«Solidaridad» — солидарность, взаимовыручка.'
    }
  }
];

// JUEGO 7: ¿QUÉ HARÍAS TÚ? (Interactive historical adventure reconstruction)
export const ADVENTURE_SCENES: AdventureScene[] = [
  {
    id: 'escena-1',
    title: {
      es: 'Escena 1: El despertar de la montaña',
      hy: 'Տեսարան 1. Լեռան արթնացումը',
      ru: 'Сцена 1: Пробуждение горы'
    },
    situation: {
      es: 'Es una mañana cálida en Pompeya. De repente, la tierra tiembla fuertemente y un estruendo ensordecedor resuena. Al mirar hacia el monte Vesubio, ves una gigantesca nube oscura con forma de pino que asciende hacia el cielo.',
      hy: 'Տաք առավոտ է Պոմպեյում։ Հանկարծ գետինն ուժգին ցնցվում է, և խլացուցիչ որոտ է հնչում։ Նայելով դեպի Վեզուվ լեռը՝ տեսնում ես սոճու տեսք ունեցող հսկայական մութ ամպ, որը բարձրանում է դեպի երկինք։',
      ru: 'Теплое утро в Помпеях. Земля содрогается, раздается глухой гул. Над Везувием поднимается черное облако в форме пинии.'
    },
    choices: [
      {
        text: {
          es: 'Aviso de inmediato a mi familia y busco mantas para cubrirnos la cabeza.',
          hy: 'Անմիջապես տեղեկացնում եմ ընտանիքիս և փնտրում ծածկոցներ՝ գլուխներս ծածկելու համար։',
          ru: 'Срочно предупреждаю семью и беру покрывала защитить головы.'
        },
        nextSceneId: 'escena-2',
        feedback: {
          es: '¡Excelente decisión! La rápida reacción y la preparación son vitales para protegerse de las piedras volcánicas.',
          hy: 'Հիանալի որոշում։ Արագ արձագանքն ու պատրաստվածությունը կենսական են հրաբխային քարերից պաշտպանվելու համար։',
          ru: 'Отличное решение! Быстрота и защита головы спасли тысячи жизней.'
        },
        survivalTip: {
          es: 'Plinio el Joven relata que los pompeyanos se ataban almohadas a la cabeza con telas para defenderse de la lluvia de pumita.',
          hy: 'Պլինիոս Կրտսերը պատմում է, որ պոմպեյցիները բարձեր էին կապում գլխներին կտորներով՝ պեմզայի անձրևից պաշտպանվելու համար։',
          ru: 'Жители подвязывали подушки к голове платками от града пемзы.'
        },
        usefulPhrase: {
          es: '«¡Rápido, debemos ponernos a salvo!»',
          hy: '«Արա՛գ, մենք պետք է ապահով տեղ գտնենք»',
          ru: '«Быстрее, мы должны спастись!»'
        }
      },
      {
        text: {
          es: 'Me quedo quieto en la plaza del foro contemplando el humo con curiosidad.',
          hy: 'Անշարժ մնում եմ ֆորումի հրապարակում՝ հետաքրքրությամբ դիտելով ծուխը։',
          ru: 'Остаюсь на площади форума, с любопытством разглядывая дым.'
        },
        nextSceneId: 'escena-2',
        feedback: {
          es: 'Cuidado: la curiosidad en un cataclismo puede ser peligrosa. La nube no es vapor, contiene gases ardientes y piedras.',
          hy: 'Զգույշ եղիր. աղետի ժամանակ հետաքրքրասիրությունը կարող է վտանգավոր լինել։ Ամպը գոլորշի չէ, այն պարունակում է շիկացած գազեր և քարեր։',
          ru: 'Осторожно: потеря времени опасна. Это не просто дым, а смертоносная туча.'
        },
        survivalTip: {
          es: 'En caso de erupción volcánica, la evacuación inmediata es la medida más sensata.',
          hy: 'Հրաբխի ժայթքման դեպքում անհապաղ տարհանումն ամենախելամիտ քայլն է։',
          ru: 'При извержении вулкана немедленная эвакуация — лучший выбор.'
        },
        usefulPhrase: {
          es: '«El tiempo es oro en una emergencia.»',
          hy: '«Արտակարգ իրավիճակում ժամանակը ոսկի է»',
          ru: '«Время дорого в чрезвычайной ситуации.»'
        }
      }
    ]
  },
  {
    id: 'escena-2',
    title: {
      es: 'Escena 2: La lluvia de piedras pómez',
      hy: 'Տեսարան 2. Չեչաքարերի (պեմզայի) անձրևը',
      ru: 'Сцена 2: Дождь из пемзы'
    },
    situation: {
      es: 'El sol desaparece por completo y el día se convierte en noche profunda. Del cielo caen millones de fragmentos de roca caliente (lapilli) que golpean los tejados con violencia. El aire huele a azufre.',
      hy: 'Արևն ամբողջությամբ անհետանում է, և ցերեկը վերածվում է խոր գիշերվա։ Երկնքից տեղում են տաք քարերի (լապիլիների) միլիոնավոր բեկորներ, որոնք ուժգնորեն հարվածում են տանիքներին։ Օդը ծծմբի հոտ է առնում։',
      ru: 'Солнце гаснет среди бела дня. На крыши с грохотом обрушиваются раскаленные куски пемзы. В воздухе пахнет серой.'
    },
    choices: [
      {
        text: {
          es: 'Humedezco una tela con agua para taparme la boca y la nariz contra los gases tóxicos.',
          hy: 'Կտորը թրջում եմ ջրով՝ բերանս և քիթս ծածկելու թունավոր գազերից։',
          ru: 'Смачиваю ткань водой, чтобы закрыть дыхательные пути от ядовитого пепла.'
        },
        nextSceneId: 'escena-3',
        feedback: {
          es: '¡Sabia elección de supervivencia! Un paño húmedo actúa como filtro natural contra la ceniza fina y los vapores sulfurosos.',
          hy: 'Գոյատևման իմաստուն ընտրություն։ Թաց կտորը գործում է որպես բնական ֆիլտր մանր մոխրի և ծծմբային գոլորշիների դեմ։',
          ru: 'Мудрое решение! Влажная ткань защищает легкие от микрочастиц пепла.'
        },
        survivalTip: {
          es: 'La ceniza volcánica respirada en seco daña gravemente los pulmones. Humedecer la tela salva vidas.',
          hy: 'Չոր շնչված հրաբխային մոխիրը ծանր վնասում է թոքերը։ Կտորը թրջելը կյանքեր է փրկում։',
          ru: 'Пепел цементируется в легких. Влажная повязка жизненно необходима.'
        },
        usefulPhrase: {
          es: '«Protégete el rostro y respira despacio.»',
          hy: '«Պաշտպանի՛ր դեմքդ և հանգիստ շնչի՛ր»',
          ru: '«Защити лицо и дыши медленно.»'
        }
      },
      {
        text: {
          es: 'Me refugio en el interior de una casa romana de piedra bajo el tejado.',
          hy: 'Ապաստանում եմ հռոմեական քարե տան ներսում՝ տանիքի տակ։',
          ru: 'Прячусь внутри дома под крышей.'
        },
        nextSceneId: 'escena-3',
        feedback: {
          es: 'Peligro: el peso de varias toneladas de ceniza acumulada en el tejado puede provocar el derrumbe del techo.',
          hy: 'Վտանգ. տանիքին կուտակված մի քանի տոննա մոխրի ծանրությունը կարող է տանիքի փլուզում առաջացնել։',
          ru: 'Опасность: крыши домов не выдерживали многотонного веса пемзы и обрушивались.'
        },
        survivalTip: {
          es: 'En Pompeya, muchas personas fallecieron al derrumbarse los techos de las casas por el peso del material piroclástico.',
          hy: 'Պոմպեյում շատերը զոհվեցին տների տանիքների փլուզումից՝ կուտակված հրաբխային նյութի ծանրության տակ։',
          ru: 'Многие погибли под обломками рухнувших перекрытий.'
        },
        usefulPhrase: {
          es: '«¡Cuidado con los techos inestables!»',
          hy: '«Զգո՛ւյշ եղիր անկայուն տանիքների հետ»',
          ru: '«Опасайся ненадежных крыш!»'
        }
      }
    ]
  },
  {
    id: 'escena-3',
    title: {
      es: 'Escena 3: Solidaridad en las calles',
      hy: 'Տեսարան 3. Համերաշխությունը փողոցներում',
      ru: 'Сцена 3: Солидарность на улицах'
    },
    situation: {
      es: 'Avanzas por la Vía de los Sepulcros. Entre la multitud asustada, ves a una anciana caída en el suelo y a dos jóvenes que dudan sobre qué hacer. A unos metros hay monedas de oro esparcidas.',
      hy: 'Առաջ ես շարժվում Դամբարանների փողոցով։ Վախեցած ամբոխի մեջ տեսնում ես գետնին ընկած տարեց կնոջ և երկու երիտասարդի, ովքեր տատանվում են, թե ինչ անել։ Մի քանի մետր հեռու թափված են ոսկե դրամներ։',
      ru: 'Ты идешь по Улице гробниц. На мостовой упала пожилая женщина. Рядом рассыпаны золотые монеты.'
    },
    choices: [
      {
        text: {
          es: 'Ignoro el dinero, me acerco a los jóvenes y juntos ayudamos a levantar a la anciana.',
          hy: 'Անտեսում եմ փողը, մոտենում երիտասարդներին և միասին օգնում ենք բարձրացնել տարեց կնոջը։',
          ru: 'Забываю о золоте и вместе с юношами помогаю поднять пожилую женщину.'
        },
        nextSceneId: 'escena-4',
        feedback: {
          es: '¡Gesto noble y heroico! La compasión hacia los más vulnerables es la esencia misma que retrató Briullov en su obra.',
          hy: 'Ազնիվ և հերոսական քայլ։ Ամենախոցելիների հանդեպ կարեկցանքն այն բուն էությունն է, որը Բրյուլովը պատկերել է իր կտավում։',
          ru: 'Благородный поступок! Сострадание к слабым — главная идея шедевра Брюллова.'
        },
        survivalTip: {
          es: 'Apoyarse en grupo y cuidar a los débiles aumenta la moral y las probabilidades de supervivencia.',
          hy: 'Խմբով գործելը և թույլերին հոգ տանելը բարձրացնում է ոգին և ողջ մնալու հավանականությունը։',
          ru: 'Взаимопомощь помогала спастись семьям и соседям.'
        },
        usefulPhrase: {
          es: '«¡Ven, te ayudamos a caminar!»',
          hy: '«Ե՛կ, մենք կօգնենք քեզ քայլել»',
          ru: '«Пойдем, мы поможем тебе идти!»'
        }
      },
      {
        text: {
          es: 'Me detengo a recoger todas las monedas de oro que pueda en mi túnica.',
          hy: 'Կանգ եմ առնում՝ հավաքելու հնարավորինս շատ ոսկե դրամներ իմ թիկնոցի մեջ։',
          ru: 'Останавливаюсь, чтобы набить карманы золотыми монетами.'
        },
        nextSceneId: 'escena-4',
        feedback: {
          es: 'Grave error: el peso del oro te retrasará y el tiempo apremia. En el cuadro, el oro abandonado muestra su inutilidad.',
          hy: 'Ծանր սխալ. ոսկու ծանրությունը կդանդաղեցնի քեզ, իսկ ժամանակը սուղ է։ Կտավում լքված ոսկին ցույց է տալիս դրա անօգուտ լինելը։',
          ru: 'Ошибка: тяжелый груз замедлит шаг, а драгоценные минуты уходят.'
        },
        survivalTip: {
          es: 'Los arqueólogos encontraron muchos cuerpos de personas que perecieron aferradas a cofres de monedas pesadas.',
          hy: 'Հնագետները հայտնաբերել են շատերի մարմիններ, ովքեր զոհվել էին՝ ծանր դրամների սնդուկներից կառչած։',
          ru: 'Многие погибли, пытаясь унести тяжелые сундуки с серебром и золотом.'
        },
        usefulPhrase: {
          es: '«La vida vale más que todo el oro del mundo.»',
          hy: '«Կյանքն ավելի թանկ է, քան աշխարհի ամբողջ ոսկին»',
          ru: '«Жизнь дороже всего золота мира.»'
        }
      }
    ]
  },
  {
    id: 'escena-4',
    title: {
      es: 'Escena 4: El cruce de caminos',
      hy: 'Տեսարան 4. Ճանապարհների խաչմերուկը',
      ru: 'Сцена 4: Развилка дорог'
    },
    situation: {
      es: 'Llegas a las puertas de la ciudad. Hay dos direcciones posibles: el camino costero hacia el puerto de Nápoles o el camino que bordea las laderas montañosas.',
      hy: 'Հասնում ես քաղաքի դարպասներին։ Երկու հնարավոր ուղղություն կա՝ ափամերձ ճանապարհը դեպի Նեապոլի նավահանգիստ կամ լեռնալանջերով անցնող ճանապարհը։',
      ru: 'Ты у городских ворот. Две дороги: прибрежный путь к морю или тропа в сторону гор.'
    },
    choices: [
      {
        text: {
          es: 'Elijo el camino abierto hacia la costa del mar, lejos de las laderas del volcán.',
          hy: 'Ընտրում եմ բաց ճանապարհը դեպի ծովափ՝ հեռու հրաբխի լանջերից։',
          ru: 'Выбираю путь к побережью, подальше от склонов горы.'
        },
        nextSceneId: 'escena-5',
        feedback: {
          es: '¡Muy acertado! Alejarse de la trayectoria directa de los flujos piroclásticos hacia el mar era la vía de escape principal.',
          hy: 'Շատ ճիշտ է։ Ծովի ուղղությամբ հեռանալը պիրոկլաստիկ հոսքերի անմիջական ուղուց փրկության գլխավոր ճանապարհն էր։',
          ru: 'Верно! Бегство к морю подальше от пирокластических потоков спасло больше всего людей.'
        },
        survivalTip: {
          es: 'La flota romana dirigida por Plinio el Viejo acudió en naves para evacuar a los refugiados de la costa.',
          hy: 'Հռոմեական նավատորմը՝ Պլինիոս Ավագի գլխավորությամբ, նավերով շտապեց տարհանել ափամերձ փախստականներին։',
          ru: 'Римский флот под командованием Плиния Старшего эвакуировал людей с побережья.'
        },
        usefulPhrase: {
          es: '«¡Hacia la costa, no nos detengamos!»',
          hy: '«Դեպի ափ, կանգ չառնե՛նք»',
          ru: '«К побережью, не останавливаемся!»'
        }
      },
      {
        text: {
          es: 'Intento volver a la ciudad a buscar mi carro con caballos.',
          hy: 'Փորձում եմ վերադառնալ քաղաք՝ գտնելու ձիերով կառքս։',
          ru: 'Пытаюсь вернуться в город за своей повозкой.'
        },
        nextSceneId: 'escena-5',
        feedback: {
          es: '¡Peligro extremo! Nunca debes retroceder hacia la zona cero del desastre. Las calles están intransitables.',
          hy: 'Ծայրահեղ վտանգ։ Երբեք չպետք է ետ գնալ դեպի աղետի կենտրոն։ Փողոցներն անանցանելի են։',
          ru: 'Смертельно опасно! Никогда нельзя возвращаться назад в эпицентр стихии.'
        },
        survivalTip: {
          es: 'Los carros volcaban con facilidad en las calles bloqueadas por escombros y rocas.',
          hy: 'Կառքերը հեշտությամբ շրջվում էին քարերով ու բեկորներով փակված փողոցներում։',
          ru: 'Колесницы застревали в завалах и опрокидывались.'
        },
        usefulPhrase: {
          es: '«Nunca mires atrás cuando huyes del peligro.»',
          hy: '«Երբեք ետ մի՛ նայիր, երբ փախչում ես վտանգից»',
          ru: '«Не оглядывайся назад, спасаясь от опасности.»'
        }
      }
    ]
  },
  {
    id: 'escena-5',
    title: {
      es: 'Escena 5: La niebla sulfurosa y la calma',
      hy: 'Տեսարան 5. Ծծմբային մշուշը և հանգստությունը',
      ru: 'Сцена 5: Серная мгла и самообладание'
    },
    situation: {
      es: 'A medida que te alejas de Pompeya con el grupo de supervivientes, el aire se vuelve más denso. La gente alrededor empieza a perder la calma y a llorar desconsoladamente. Se necesita serenidad para no desorientarse.',
      hy: 'Քանի դեռ հեռանում ես Պոմպեյից ողջ մնացածների խմբի հետ, օդն ավելի է խտանում։ Շուրջը մարդիկ սկսում են կորցնել հանգստությունն ու սրտաճմլիկ լաց լինել։ Սթափություն է պետք չմոլորվելու համար։',
      ru: 'По мере удаления от города мгла сгущается. Начинается паника. Чтобы не сбиться с пути, нужно хладнокровие.'
    },
    choices: [
      {
        text: {
          es: 'Hablo con voz tranquila a mis acompañantes, nos tomamos de las manos y avanzamos juntos.',
          hy: 'Հանգիստ ձայնով խոսում եմ ուղեկիցներիս հետ, բռնում ենք միմյանց ձեռքերը և առաջ շարժվում միասին։',
          ru: 'Говорю спокойным голосом, мы беремся за руки и идем цепочкой.'
        },
        nextSceneId: 'escena-6',
        feedback: {
          es: '¡Conducta ejemplar! En la oscuridad total de la ceniza, mantenerse unidos físicamente evitaba que los miembros de la familia se perdieran.',
          hy: 'Օրինակելի վարքագիծ։ Մոխրի լիակատար խավարում ֆիզիկապես միասին մնալը թույլ չէր տալիս, որ ընտանիքի անդամները կորչեն։',
          ru: 'Образцово! Держась за руки, люди не теряли близких в кромешной тьме.'
        },
        survivalTip: {
          es: 'Plinio el Joven describió que en la niebla negra la gente solo se reconocía gritando sus nombres en la oscuridad.',
          hy: 'Պլինիոս Կրտսերը նկարագրել է, որ սև մշուշում մարդիկ միմյանց ճանաչում էին միայն խավարում անունները կանչելով։',
          ru: 'Плиний вспоминал, что во тьме люди узнавали друг друга лишь по голосам.'
        },
        usefulPhrase: {
          es: '«¡Manteneos unidos y no os soltéis!»',
          hy: '«Միասի՛ն եղեք և բաց մի՛ թողեք իրար»',
          ru: '«Держитесь вместе и не отпускайте рук!»'
        }
      },
      {
        text: {
          es: 'Empiezo a correr a ciegas sin mirar hacia dónde voy.',
          hy: 'Սկսում եմ կուրորեն վազել՝ առանց նայելու, թե ուր եմ գնում։',
          ru: 'Начинаю бежать вслепую, не разбирая дороги.'
        },
        nextSceneId: 'escena-6',
        feedback: {
          es: 'Correr a ciegas en la oscuridad puede provocar caídas en barrancos o choques con muros derruidos.',
          hy: 'Խավարում կուրորեն վազելը կարող է հանգեցնել ձորն ընկնելուն կամ փլուզված պատերին բախվելուն։',
          ru: 'Бег вслепую грозит падением в обрыв или удушьем от одышки.'
        },
        survivalTip: {
          es: 'Caminar con paso firme y constante gasta menos oxígeno y previene accidentes.',
          hy: 'Հաստատուն և հավասարաչափ քայլքը խնայում է թթվածինը և կանխում դժբախտ պատահարները։',
          ru: 'Размеренный шаг экономит кислород и предотвращает травмы.'
        },
        usefulPhrase: {
          es: '«La calma es el mejor escudo contra el pánico.»',
          hy: '«Հանգստությունը լավագույն վահանն է խուճապի դեմ»',
          ru: '«Спокойствие — лучший щит от паники.»'
        }
      }
    ]
  },
  {
    id: 'escena-6',
    title: {
      es: 'Escena 6: La luz del nuevo día',
      hy: 'Տեսարան 6. Նոր օրվա լույսը',
      ru: 'Сцена 6: Свет нового дня'
    },
    situation: {
      es: 'Tras horas de marcha agotadora en la penumbra, llegas a una colina segura cerca de Miseno. A lo lejos, el volcán va calmando su furia. Los primeros rayos del sol rompen la bruma. Tú y tus acompañantes habéis sobrevivido.',
      hy: 'Մթության մեջ ժամեր տևած սպառիչ երթից հետո հասնում ես ապահով բլրի՝ Միզենոյի մոտակայքում։ Հեռվում հրաբուխն աստիճանաբար մեղմում է իր զայրույթը։ Արևի առաջին շողերը ճեղքում են մշուշը։ Դու և քո ուղեկիցները ողջ եք մնացել։',
      ru: 'После часов тяжелого пути вы достигаете безопасных холмов Мизено. Первые лучи солнца пробивают мглу. Вы спаслись.'
    },
    choices: [
      {
        text: {
          es: 'Doy gracias por la vida, ayudo a curar las heridas de los heridos y comparto el agua que queda.',
          hy: 'Շնորհակալություն եմ հայտնում կյանքի համար, օգնում եմ բուժել վիրավորների վերքերը և կիսում եմ մնացած ջուրը։',
          ru: 'Благодарю за спасение, помогаю перевязать раненых и делюсь водой.'
        },
        nextSceneId: 'escena-final',
        feedback: {
          es: '¡Has completado la travesía con honor, coraje y humanidad! Al igual que en la obra de Karl Briullov, la nobleza del espíritu vence a la tragedia.',
          hy: 'Դու ավարտեցիր ճանապարհը պատվով, քաջությամբ և մարդասիրությամբ։ Ինչպես Կառլ Բրյուլովի կտավում, ոգու ազնվությունը հաղթում է ողբերգությանը։',
          ru: 'Ты прошел испытание с честью, мужеством и человечностью!'
        },
        survivalTip: {
          es: 'Los supervivientes de Pompeya fueron acogidos en ciudades vecinas como Nápoles y Cumas, fundando nuevos hogares.',
          hy: 'Պոմպեյից փրկվածներին ընդունեցին հարևան քաղաքներում, ինչպիսիք են Նեապոլն ու Կումասը, որտեղ նրանք նոր տներ հիմնեցին։',
          ru: 'Выживших помпеянцев приютили в Неаполе и Кумах, где они начали новую жизнь.'
        },
        usefulPhrase: {
          es: '«Siempre hay esperanza mientras estemos juntos.»',
          hy: '«Միշտ հույս կա, քանի դեռ մենք միասին ենք»',
          ru: '«Пока мы вместе, надежда жива.»'
        }
      }
    ]
  },
  {
    id: 'escena-final',
    title: {
      es: 'Epílogo: Memoria eterna',
      hy: 'Վերջաբան. Հավերժական հիշողություն',
      ru: 'Эпилог: Вечная память'
    },
    situation: {
      es: 'Han pasado casi dos mil años. La ciudad de Pompeya descansa bajo el sol italiano y la genial pintura de Karl Briullov en el Museo Ruso continúa conmoviendo a millones de personas de todo el mundo. Has aprendido la historia, la empatía y valiosas palabras en español.',
      hy: 'Անցել է գրեթե երկու հազար տարի։ Պոմպեյ քաղաքը հանգչում է իտալական արևի տակ, իսկ Ռուսական թանգարանում Կառլ Բրյուլովի հանճարեղ կտավը շարունակում է հուզել աշխարհի միլիոնավոր մարդկանց։ Դու սովորեցիր պատմություն, կարեկցանք և արժեքավոր իսպաներեն բառեր։',
      ru: 'Прошло два тысячелетия. Картина Карла Брюллова продолжает волновать миллионы людей. Ты освоил важные слова и пережил великую историю.'
    },
    isEnding: true,
    choices: []
  }
];

// VOCABULARIO INTERACTIVO (Comprehensive interactive cards)
export const VOCABULARY_LIST: VocabItem[] = [
  {
    id: 'v1',
    wordEs: 'el volcán',
    article: 'el',
    partOfSpeech: 'sustantivo masculino',
    pronunciation: '[el bol-KAHN]',
    translationHy: 'հրաբուխ',
    translationRu: 'вулкан',
    category: 'volcan',
    exampleSentenceEs: 'El volcán Vesubio arrojó columnas de fuego y humo ardiente.',
    exampleSentenceHy: 'Վեզուվ հրաբուխը կրակի և շիկացած ծխի սյուներ արձակեց։',
    exampleSentenceRu: 'Вулкан Везувий извергал столбы огня и раскаленного дыма.'
  },
  {
    id: 'v2',
    wordEs: 'la ceniza',
    article: 'la',
    partOfSpeech: 'sustantivo femenino',
    pronunciation: '[lah theh-NEE-thah]',
    translationHy: 'մոխիր',
    translationRu: 'пепел',
    category: 'volcan',
    exampleSentenceEs: 'La ceniza volcánica cubrió las calles con un manto de varios metros.',
    exampleSentenceHy: 'Հրաբխային մոխիրը ծածկեց փողոցները մի քանի մետրանոց շերտով։',
    exampleSentenceRu: 'Вулканический пепел покрыл улицы многометровым слоем.'
  },
  {
    id: 'v3',
    wordEs: 'la erupción',
    article: 'la',
    partOfSpeech: 'sustantivo femenino',
    pronunciation: '[lah eh-roop-THYOHN]',
    translationHy: 'ժայթքում',
    translationRu: 'извержение',
    category: 'volcan',
    exampleSentenceEs: 'La gran erupción del año 79 sorprendió a todos los habitantes.',
    exampleSentenceHy: '79 թվականի մեծ ժայթքումն անակնկալի բերեց բոլոր բնակիչներին։',
    exampleSentenceRu: 'Великое извержение 79 года застало жителей врасплох.'
  },
  {
    id: 'v4',
    wordEs: 'el miedo',
    article: 'el',
    partOfSpeech: 'sustantivo masculino',
    pronunciation: '[el MYEH-doh]',
    translationHy: 'վախ, սարսափ',
    translationRu: 'страх',
    category: 'emociones',
    exampleSentenceEs: 'Sentían mucho miedo al escuchar el rugido de la montaña.',
    exampleSentenceHy: 'Նրանք մեծ վախ էին զգում՝ լսելով լեռան մռնչյունը։',
    exampleSentenceRu: 'Они испытывали сильный страх, слыша гул горы.'
  },
  {
    id: 'v5',
    wordEs: 'el peligro',
    article: 'el',
    partOfSpeech: 'sustantivo masculino',
    pronunciation: '[el peh-LEE-groh]',
    translationHy: 'վտանգ',
    translationRu: 'опасность',
    category: 'emociones',
    exampleSentenceEs: 'Corrieron juntos para escapar del peligro inminente.',
    exampleSentenceHy: 'Նրանք միասին վազեցին՝ փախչելու մոտալուտ վտանգից։',
    exampleSentenceRu: 'Они бежали вместе, чтобы спастись от опасности.'
  },
  {
    id: 'v6',
    wordEs: 'la ciudad',
    article: 'la',
    partOfSpeech: 'sustantivo femenino',
    pronunciation: '[lah thyoo-DAHD]',
    translationHy: 'քաղաք',
    translationRu: 'город',
    category: 'arte',
    exampleSentenceEs: 'Pompeya era una hermosa ciudad romana con templos y teatros.',
    exampleSentenceHy: 'Պոմպեյը գեղեցիկ հռոմեական քաղաք էր՝ տաճարներով և թատրոններով։',
    exampleSentenceRu: 'Помпеи были прекрасным римским городом с храмами и театрами.'
  },
  {
    id: 'v7',
    wordEs: 'la pintura',
    article: 'la',
    partOfSpeech: 'sustantivo femenino',
    pronunciation: '[lah peen-TOO-rah]',
    translationHy: 'նկար, գեղանկարչություն',
    translationRu: 'картина, живопись',
    category: 'arte',
    exampleSentenceEs: 'Esta pintura histórica mide más de seis metros de ancho.',
    exampleSentenceHy: 'Այս պատմական նկարն ունի ավելի քան վեց մետր լայնություն։',
    exampleSentenceRu: 'Эта историческая картина имеет ширину более шести метров.'
  },
  {
    id: 'v8',
    wordEs: 'el pintor',
    article: 'el',
    partOfSpeech: 'sustantivo masculino',
    pronunciation: '[el peen-TOHR]',
    translationHy: 'նկարիչ',
    translationRu: 'художник',
    category: 'arte',
    exampleSentenceEs: 'El pintor Karl Briullov visitó las excavaciones en 1827.',
    exampleSentenceHy: 'Նկարիչ Կառլ Բրյուլովն այցելեց պեղումները 1827 թվականին։',
    exampleSentenceRu: 'Художник Карл Брюллов посетил раскопки в 1827 году.'
  },
  {
    id: 'v9',
    wordEs: 'la esperanza',
    article: 'la',
    partOfSpeech: 'sustantivo femenino',
    pronunciation: '[lah ehs-peh-RAHN-thah]',
    translationHy: 'հույս',
    translationRu: 'надежда',
    category: 'emociones',
    exampleSentenceEs: 'El niño vivo en el cuadro simboliza la esperanza de la humanidad.',
    exampleSentenceHy: 'Կտավում ողջ մնացած երեխան խորհրդանշում է մարդկության հույսը։',
    exampleSentenceRu: 'Живой ребенок на картине символизирует надежду.'
  },
  {
    id: 'v10',
    wordEs: 'la familia',
    article: 'la',
    partOfSpeech: 'sustantivo femenino',
    pronunciation: '[lah fah-MEE-lyah]',
    translationHy: 'ընտանիք',
    translationRu: 'семья',
    category: 'personas',
    exampleSentenceEs: 'Cada familia intentaba protegerse mutuamente con amor.',
    exampleSentenceHy: 'Յուրաքանչյուր ընտանիք փորձում էր սիրով պաշտպանել միմյանց։',
    exampleSentenceRu: 'Каждая семья с любовью защищала друг друга.'
  },
  {
    id: 'v11',
    wordEs: 'escapar',
    partOfSpeech: 'verbo en infinitivo',
    pronunciation: '[ehs-kah-PAHR]',
    translationHy: 'փախչել',
    translationRu: 'убегать, спасаться',
    category: 'acciones',
    exampleSentenceEs: 'Las personas intentan escapar de la ciudad.',
    exampleSentenceHy: 'Մարդիկ փորձում են փախչել քաղաքից։',
    exampleSentenceRu: 'Люди пытаются убежать из города.'
  },
  {
    id: 'v12',
    wordEs: 'proteger',
    partOfSpeech: 'verbo en infinitivo',
    pronunciation: '[proh-teh-HEHR]',
    translationHy: 'պաշտպանել',
    translationRu: 'защищать, оберегать',
    category: 'acciones',
    exampleSentenceEs: 'El padre intenta proteger a sus hijos de las piedras ardientes.',
    exampleSentenceHy: 'Հայրը փորձում է պաշտպանել իր երեխաներին շիկացած քարերից։',
    exampleSentenceRu: 'Отец пытается защитить детей от горящих камней.'
  },
  {
    id: 'v13',
    wordEs: 'el relámpago',
    article: 'el',
    partOfSpeech: 'sustantivo masculino',
    pronunciation: '[el reh-LAHM-pah-goh]',
    translationHy: 'կայծակ',
    translationRu: 'молния',
    category: 'volcan',
    exampleSentenceEs: 'El relámpago en zigzag ilumina los rostros pálidos de la gente.',
    exampleSentenceHy: 'Զիգզագաձև կայծակը լուսավորում է մարդկանց գունատ դեմքերը։',
    exampleSentenceRu: 'Зигзаг молнии озаряет бледные лица людей.'
  },
  {
    id: 'v14',
    wordEs: 'las ruinas',
    article: 'las',
    partOfSpeech: 'sustantivo femenino plural',
    pronunciation: '[lahs RWWEE-nahs]',
    translationHy: 'ավերակներ',
    translationRu: 'руины',
    category: 'arte',
    exampleSentenceEs: 'Las ruinas de Pompeya se conservaron bajo la ceniza durante siglos.',
    exampleSentenceHy: 'Պոմպեյի ավերակները դարեր շարունակ պահպանվեցին մոխրի տակ։',
    exampleSentenceRu: 'Руины Помпей веками хранились под слоем пепла.'
  },
  {
    id: 'v15',
    wordEs: 'la estatua',
    article: 'la',
    partOfSpeech: 'sustantivo femenino',
    pronunciation: '[lah ehs-TAH-twah]',
    translationHy: 'արձան',
    translationRu: 'статуя',
    category: 'arte',
    exampleSentenceEs: 'Las pesadas estatuas de piedra caen de los templos romanos.',
    exampleSentenceHy: 'Քարե ծանր արձաններն ընկնում են հռոմեական տաճարներից։',
    exampleSentenceRu: 'Тяжелые каменные статуи падают с римских храмов.'
  },
  {
    id: 'v16',
    wordEs: 'el terremoto',
    article: 'el',
    partOfSpeech: 'sustantivo masculino',
    pronunciation: '[el teh-rreh-MOH-toh]',
    translationHy: 'երկրաշարժ',
    translationRu: 'землетрясение',
    category: 'volcan',
    exampleSentenceEs: 'El terremoto hizo temblar los cimientos de todas las casas.',
    exampleSentenceHy: 'Երկրաշարժը ցնցեց բոլոր տների հիմքերը։',
    exampleSentenceRu: 'Землетрясение сотрясло фундаменты домов.'
  },
  {
    id: 'v17',
    wordEs: 'el caballo',
    article: 'el',
    partOfSpeech: 'sustantivo masculino',
    pronunciation: '[el kah-BAH-yoh]',
    translationHy: 'ձի',
    translationRu: 'конь, лошадь',
    category: 'personas',
    exampleSentenceEs: 'El caballo negro relincha y se encabrita aterrado por el fuego.',
    exampleSentenceHy: 'Սև ձին խրխնջում է և ծառս լինում՝ կրակից սարսափած։',
    exampleSentenceRu: 'Черный конь встает на дыбы от страха перед огнем.'
  },
  {
    id: 'v18',
    wordEs: 'el templo',
    article: 'el',
    partOfSpeech: 'sustantivo masculino',
    pronunciation: '[el TEHM-ploh]',
    translationHy: 'տաճար',
    translationRu: 'храм',
    category: 'arte',
    exampleSentenceEs: 'Los romanos construían columnas de mármol para cada templo.',
    exampleSentenceHy: 'Հռոմեացիները մարմարե սյուներ էին կառուցում յուրաքանչյուր տաճարի համար։',
    exampleSentenceRu: 'Римляне возводили мраморные колонны для храмов.'
  },
  {
    id: 'v19',
    wordEs: 'ayudar',
    partOfSpeech: 'verbo en infinitivo',
    pronunciation: '[ah-yoo-DAHR]',
    translationHy: 'օգնել',
    translationRu: 'помогать',
    category: 'acciones',
    exampleSentenceEs: 'Los jóvenes deciden ayudar a las personas más vulnerables.',
    exampleSentenceHy: 'Երիտասարդները որոշում են օգնել առավել խոցելի մարդկանց։',
    exampleSentenceRu: 'Молодые люди решают помочь слабым.'
  },
  {
    id: 'v20',
    wordEs: 'el soldado',
    article: 'el',
    partOfSpeech: 'sustantivo masculino',
    pronunciation: '[el sohl-DAH-doh]',
    translationHy: 'զինվոր',
    translationRu: 'солдат, воин',
    category: 'personas',
    exampleSentenceEs: 'El soldado romano lleva un casco y una coraza de hierro.',
    exampleSentenceHy: 'Հռոմեացի զինվորը կրում է սաղավարտ և երկաթե զրահ։',
    exampleSentenceRu: 'Римский воин носит шлем и железные доспехи.'
  }
];
