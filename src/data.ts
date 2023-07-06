export type TExample = {
    english: string;
    ukrainian: string;
};

export type TDataItem = {
    english: string;
    ukrainian: string;
    example: TExample;
};

export type TData = Array<TDataItem>;

export const VOCABULARY: TData = [
    {
        english: 'addiction',
        ukrainian: 'залежність',
        example: {
            english: 'He struggled with drug addiction for years.',
            ukrainian: 'Він боровся з наркотичною залежністю протягом років.',
        },
    },
    {
        english: 'habit',
        ukrainian: 'звичка',
        example: {
            english: 'Drinking coffee in the morning is a common habit for many people.',
            ukrainian: 'Пити каву вранці - це поширена звичка для багатьох людей.',
        },
    },
    {
        english: 'harmless',
        ukrainian: 'безшкідний',
        example: {
            english: 'Playing with toys is a harmless activity for children.',
            ukrainian: 'Гратися з іграшками - безшкідна діяльність для дітей.',
        },
    },
    {
        english: 'annoy',
        ukrainian: 'дратувати',
        example: {
            english: 'The constant noise from the construction site annoyed the residents.',
            ukrainian: 'Постійний шум з будівельного майданчика дратував мешканців.',
        },
    },
    {
        english: 'substance',
        ukrainian: 'речовина',
        example: {
            english: 'This drink contains harmful substances.',
            ukrainian: 'У цьому напої містяться шкідливі речовини.',
        },
    },
    {
        english: 'gain',
        ukrainian: 'набути',
        example: {
            english: 'He worked hard to gain the trust of his colleagues.',
            ukrainian: 'Він наполегливо працював, щоб набути довіру колег.',
        },
    },
    {
        english: 'solve',
        ukrainian: 'вирішити',
        example: {
            english: 'We need to solve this problem as soon as possible.',
            ukrainian: 'Ми повинні вирішити цю проблему якнайшвидше.',
        },
    },
    {
        english: 'gambling',
        ukrainian: 'гральний',
        example: {
            english: 'He has a gambling addiction and has lost a lot of money.',
            ukrainian: 'У нього є гральна залежність, і він втратив багато грошей.',
        },
    },
    {
        english: 'consuming',
        ukrainian: 'споживання',
        example: {
            english: 'Excessive alcohol consuming can lead to health problems.',
            ukrainian: 'Надмірне споживання алкоголю може призвести до проблем зі здоров\'ям.',
        },
    },
    {
        english: 'embarrassing',
        ukrainian: 'соромно',
        example: {
            english: 'It was embarrassing to trip and fall in front of everyone.',
            ukrainian: 'Було соромно спотикнутися й упасти перед усіма.',
        },
    },
    {
        english: 'according',
        ukrainian: 'згідно',
        example: {
            english: 'According to the weather forecast, it will rain tomorrow.',
            ukrainian: 'Згідно з прогнозом погоди, завтра буде дощ.',
        },
    },
    {
        english: 'consider',
        ukrainian: 'розглядати',
        example: {
            english: 'They will consider your proposal at the next meeting.',
            ukrainian: 'Вони розглянуть вашу пропозицію на наступному засіданні.',
        },
    },
];

export const BASIC: TData = [
    {
        english: 'afternoon',
        ukrainian: 'після полудня',
        example: {
            english: 'Let\'s meet for coffee in the afternoon.',
            ukrainian: 'Зустрінемося на каву після полудня.',
        },
    },
    {
        english: 'all day long',
        ukrainian: 'цілий день',
        example: {
            english: 'I worked on this project all day long.',
            ukrainian: 'Я працював над цим проектом цілий день.',
        },
    },
    {
        english: 'April',
        ukrainian: 'квітень',
        example: {
            english: 'My birthday is in April.',
            ukrainian: 'Мій день народження в квітні.',
        },
    },
    {
        english: 'August',
        ukrainian: 'серпень',
        example: {
            english: 'We\'re going on vacation in August.',
            ukrainian: 'Ми їдемо у відпустку у серпні.',
        },
    },
    {
        english: 'autumn',
        ukrainian: 'осінь',
        example: {
            english: 'The leaves change color in autumn.',
            ukrainian: 'Листя міняє колір восени.',
        },
    },
    {
        english: 'billion',
        ukrainian: 'мільярд',
        example: {
            english: 'He\'s worth over a billion dollars.',
            ukrainian: 'Він вартує понад мільярд доларів.',
        },
    },
    {
        english: 'boy',
        ukrainian: 'хлопчик',
        example: {
            english: 'The boy is playing in the park.',
            ukrainian: 'Хлопчик грає в парку.',
        },
    },
    {
        english: 'brother',
        ukrainian: 'брат',
        example: {
            english: 'My brother is two years older than me.',
            ukrainian: 'Мій брат старший за мене на два роки.',
        },
    },
    {
        english: 'cat',
        ukrainian: 'кіт',
        example: {
            english: 'The cat is sleeping on the couch.',
            ukrainian: 'Кіт спить на дивані.',
        },
    },
    {
        english: 'child',
        ukrainian: 'дитина',
        example: {
            english: 'The children are playing in the park.',
            ukrainian: 'Діти грають в парку.',
        },
    },
    {
        english: 'day',
        ukrainian: 'день',
        example: {
            english: 'Today is a beautiful day.',
            ukrainian: 'Сьогодні гарний день.',
        },
    },
    {
        english: 'December',
        ukrainian: 'грудень',
        example: {
            english: 'Christmas is in December.',
            ukrainian: 'Різдво в грудні.',
        },
    },
    {
        english: 'dog',
        ukrainian: 'собака',
        example: {
            english: 'The dog is chasing its tail.',
            ukrainian: 'Собака ганяється за своїм хвостом.',
        },
    },
    {
        english: 'early',
        ukrainian: 'рано',
        example: {
            english: 'I like to wake up early in the morning.',
            ukrainian: 'Мені подобається рано прокидатися вранці.',
        },
    },
    {
        english: 'eight',
        ukrainian: 'вісім',
        example: {
            english: 'She has eight siblings.',
            ukrainian: 'У неї вісім братів і сестер.',
        },
    },
    {
        english: 'eighteen',
        ukrainian: 'вісімнадцять',
        example: {
            english: 'He will turn eighteen next month.',
            ukrainian: 'Він виповниться вісімнадцять наступного місяця.',
        },
    },
    {
        english: 'eighty',
        ukrainian: 'вісімдесят',
        example: {
            english: 'She is in her eighties and still full of energy.',
            ukrainian: 'Їй вісімдесят років, і вона все ще повна енергії.',
        },
    },
    {
        english: 'eleven',
        ukrainian: 'одинадцять',
        example: {
            english: 'We\'re meeting at eleven o\'clock.',
            ukrainian: 'Ми зустрічаємося о 11 годині.',
        },
    },
    {
        english: 'evening',
        ukrainian: 'вечір',
        example: {
            english: 'Let\'s go for a walk in the evening.',
            ukrainian: 'Підемо на прогулянку ввечері.',
        },
    },
    {
        english: 'father',
        ukrainian: 'батько',
        example: {
            english: 'My father is a doctor.',
            ukrainian: 'Мій батько - лікар.',
        },
    },
    {
        english: 'February',
        ukrainian: 'лютий',
        example: {
            english: 'Her birthday is in February.',
            ukrainian: 'Її день народження в лютому.',
        },
    },
    {
        english: 'fifteen',
        ukrainian: 'п\'ятнадцять',
        example: {
            english: 'She will be fifteen years old next week.',
            ukrainian: 'Вона виповниться п\'ятнадцять наступного тижня.',
        },
    },
    {
        english: 'fifty',
        ukrainian: 'п\'ятдесят',
        example: {
            english: 'He celebrated his fiftieth birthday last month.',
            ukrainian: 'Він відсвяткував своє п\'ятдесяте народження минулого місяця.',
        },
    },
    {
        english: 'five',
        ukrainian: 'п\'ять',
        example: {
            english: 'There are five people in our family.',
            ukrainian: 'У нашій родині п\'ятеро людей.',
        },
    },
    {
        english: 'forty',
        ukrainian: 'сорок',
        example: {
            english: 'He will turn forty next year.',
            ukrainian: 'Він виповниться сорок років наступного року.',
        },
    },
    {
        english: 'four',
        ukrainian: 'чотири',
        example: {
            english: 'There are four chairs at the table.',
            ukrainian: 'На столі чотири стільці.',
        },
    },
    {
        english: 'fourteen',
        ukrainian: 'чотирнадцять',
        example: {
            english: 'She will be fourteen years old in two weeks.',
            ukrainian: 'Вона виповниться чотирнадцять наступного тижня.',
        },
    },
    {
        english: 'Friday',
        ukrainian: 'п\'ятниця',
        example: {
            english: 'We\'re going out for dinner on Friday.',
            ukrainian: 'Ми виходимо на вечерю в п\'ятницю.',
        },
    },
    {
        english: 'girl',
        ukrainian: 'дівчина',
        example: {
            english: 'The girl is reading a book in the park.',
            ukrainian: 'Дівчина читає книгу в парку.',
        },
    },
    {
        english: 'half past one',
        ukrainian: 'пів на другу',
        example: {
            english: 'The meeting starts at half past one.',
            ukrainian: 'Зустріч починається о пів на другу.',
        },
    },
    {
        english: 'hello',
        ukrainian: 'привіт',
        example: {
            english: 'She greeted him with a warm hello.',
            ukrainian: 'Вона привітала його теплим привітом.',
        },
    },
    {
        english: 'hi',
        ukrainian: 'привіт',
        example: {
            english: 'He waved and said, \'Hi!\'',
            ukrainian: 'Він помахав і сказав: \'Привіт!\'',
        },
    },
    {
        english: 'home',
        ukrainian: 'дім',
        example: {
            english: 'Let\'s go home.',
            ukrainian: 'Підемо додому.',
        },
    },
    {
        english: 'hour',
        ukrainian: 'година',
        example: {
            english: 'The movie will start in an hour.',
            ukrainian: 'Фільм почнеться через годину.',
        },
    },
    {
        english: 'house',
        ukrainian: 'будинок',
        example: {
            english: 'They just moved into a new house.',
            ukrainian: 'Вони тільки що переїхали у новий будинок.',
        },
    },
    {
        english: 'hundred',
        ukrainian: 'сто',
        example: {
            english: 'There are a hundred seats in the theater.',
            ukrainian: 'В театрі є сто місць.',
        },
    },
    {
        english: 'in twenty-four hours',
        ukrainian: 'за двадцять чотири години',
        example: {
            english: 'The package will be delivered in twenty-four hours.',
            ukrainian: 'Посилка буде доставлена за двадцять чотири години.',
        },
    },
    {
        english: 'January',
        ukrainian: 'січень',
        example: {
            english: 'The new year starts in January.',
            ukrainian: 'Новий рік починається в січні.',
        },
    },
    {
        english: 'July',
        ukrainian: 'липень',
        example: {
            english: 'We\'re planning a trip in July.',
            ukrainian: 'Ми плануємо поїздку у липні.',
        },
    },
    {
        english: 'June',
        ukrainian: 'червень',
        example: {
            english: 'His birthday is in June.',
            ukrainian: 'Його день народження в червні.',
        },
    },
    {
        english: 'late',
        ukrainian: 'пізно',
        example: {
            english: 'Don\'t stay up too late.',
            ukrainian: 'Не лягай дуже пізно.',
        },
    },
    {
        english: 'man',
        ukrainian: 'чоловік',
        example: {
            english: 'The man is reading a newspaper.',
            ukrainian: 'Чоловік читає газету.',
        },
    },
    {
        english: 'March',
        ukrainian: 'березень',
        example: {
            english: 'Spring starts in March.',
            ukrainian: 'Весна починається в березні.',
        },
    },
    {
        english: 'May',
        ukrainian: 'травень',
        example: {
            english: 'Her birthday is in May.',
            ukrainian: 'Її день народження в травні.',
        },
    },
    {
        english: 'midnight',
        ukrainian: 'північ',
        example: {
            english: 'The party ended at midnight.',
            ukrainian: 'Вечірка закінчилася о північі.',
        },
    },
    {
        english: 'million',
        ukrainian: 'мільйон',
        example: {
            english: 'He earned a million dollars last year.',
            ukrainian: 'Він заробив мільйон доларів минулого року.',
        },
    },
    {
        english: 'minute',
        ukrainian: 'хвилина',
        example: {
            english: 'I\'ll be there in a minute.',
            ukrainian: 'Я буду там через хвилину.',
        },
    },
    {
        english: 'Monday',
        ukrainian: 'понеділок',
        example: {
            english: 'The meeting is scheduled for Monday.',
            ukrainian: 'Зустріч запланована на понеділок.',
        },
    },
    {
        english: 'month',
        ukrainian: 'місяць',
        example: {
            english: 'They\'re going on vacation for a month.',
            ukrainian: 'Вони відпочиватимуть місяць.',
        },
    },
    {
        english: 'morning',
        ukrainian: 'ранок',
        example: {
            english: 'Good morning! How are you today?',
            ukrainian: 'Доброго ранку! Як ви сьогодні?',
        },
    },
    {
        english: 'mother',
        ukrainian: 'мати',
        example: {
            english: 'My mother is a teacher.',
            ukrainian: 'Моя мати - вчителька.',
        },
    },
    {
        english: 'name',
        ukrainian: 'ім\'я',
        example: {
            english: 'What\'s your name?',
            ukrainian: 'Як вас звати?',
        },
    },
    {
        english: 'night',
        ukrainian: 'ніч',
        example: {
            english: 'The stars are shining at night.',
            ukrainian: 'Зорі світять уночі.',
        },
    },
    {
        english: 'nine',
        ukrainian: 'дев\'ять',
        example: {
            english: 'She has nine cousins.',
            ukrainian: 'У неї дев\'ять двоюрідних братів і сестер.',
        },
    },
    {
        english: 'nineteen',
        ukrainian: 'дев\'ятнадцять',
        example: {
            english: 'He will be nineteen years old next month.',
            ukrainian: 'Він виповниться дев\'ятнадцять років наступного місяця.',
        },
    },
    {
        english: 'ninety',
        ukrainian: 'дев\'яносто',
        example: {
            english: 'She has ninety unread emails in her inbox.',
            ukrainian: 'У неї дев\'яносто непрочитаних електронних листів у вхідній скринці.',
        },
    },
    {
        english: 'noon',
        ukrainian: 'полудень',
        example: {
            english: 'Let\'s meet at noon.',
            ukrainian: 'Зустрінемося о полудні.',
        },
    },
    {
        english: 'November',
        ukrainian: 'листопад',
        example: {
            english: 'The weather gets colder in November.',
            ukrainian: 'Погода стає холоднішою в листопаді.',
        },
    },
    {
        english: 'number',
        ukrainian: 'число',
        example: {
            english: 'What\'s your phone number?',
            ukrainian: 'Який у вас номер телефону?',
        },
    },
    {
        english: 'October',
        ukrainian: 'жовтень',
        example: {
            english: 'Halloween is in October.',
            ukrainian: 'Хеллоуїн у жовтні.',
        },
    },
    {
        english: 'one',
        ukrainian: 'один',
        example: {
            english: 'There is only one apple left.',
            ukrainian: 'Залишилась лише одна яблука.',
        },
    },
    {
        english: 'one o\'clock',
        ukrainian: 'одна година',
        example: {
            english: 'The meeting is scheduled for one o\'clock.',
            ukrainian: 'Зустріч запланована на одну годину.',
        },
    },
    {
        english: 'one-fifteen',
        ukrainian: 'п\'ятнадцять хвилин по першій',
        example: {
            english: 'The train departs at one-fifteen.',
            ukrainian: 'Поїзд відправляється о п\'ятнадцять хвилин по першій.',
        },
    },
    {
        english: 'one-oh-five',
        ukrainian: 'п\'ять хвилин по першій',
        example: {
            english: 'She arrived at one-oh-five.',
            ukrainian: 'Вона прибула о п\'ять хвилин по першій.',
        },
    },
    {
        english: 'person',
        ukrainian: 'людина',
        example: {
            english: 'He is a kind and caring person.',
            ukrainian: 'Він добра і турботлива людина.',
        },
    },
    {
        english: 'quarter past one',
        ukrainian: 'п\'ятнадцять хвилин по першій',
        example: {
            english: 'The class starts at a quarter past one.',
            ukrainian: 'Урок починається о п\'ятнадцять хвилин по першій.',
        },
    },
    {
        english: 'Saturday',
        ukrainian: 'субота',
        example: {
            english: 'We\'re going to the beach on Saturday.',
            ukrainian: 'Ми йдемо на пляж у суботу.',
        },
    },
    {
        english: 'second',
        ukrainian: 'другий',
        example: {
            english: 'He finished in second place.',
            ukrainian: 'Він фінішував на другому місці.',
        },
    },
    {
        english: 'September',
        ukrainian: 'вересень',
        example: {
            english: 'School starts in September.',
            ukrainian: 'Школа починається в вересні.',
        },
    },
    {
        english: 'seven',
        ukrainian: 'сім',
        example: {
            english: 'She has seven siblings.',
            ukrainian: 'У неї сім братів і сестер.',
        },
    },
    {
        english: 'seventeen',
        ukrainian: 'сімнадцять',
        example: {
            english: 'He will turn seventeen next year.',
            ukrainian: 'Він виповнить сімнадцять років наступного року.',
        },
    },
    {
        english: 'seventy',
        ukrainian: 'сімдесят',
        example: {
            english: 'She has seventy unread messages.',
            ukrainian: 'У неї сімдесят непрочитаних повідомлень.',
        },
    },
    {
        english: 'sister',
        ukrainian: 'сестра',
        example: {
            english: 'My sister is a doctor.',
            ukrainian: 'Моя сестра - лікарка.',
        },
    },
    {
        english: 'six',
        ukrainian: 'шість',
        example: {
            english: 'There are six chairs at the table.',
            ukrainian: 'На столі шість стільців.',
        },
    },
    {
        english: 'sixteen',
        ukrainian: 'шістнадцять',
        example: {
            english: 'She will be sixteen years old next month.',
            ukrainian: 'Вона виповниться шістнадцять років наступного місяця.',
        },
    },
    {
        english: 'sixty',
        ukrainian: 'шістдесят',
        example: {
            english: 'He is sixty years old.',
            ukrainian: 'Йому шістдесят років.',
        },
    },
    {
        english: 'spring',
        ukrainian: 'весна',
        example: {
            english: 'Flowers bloom in spring.',
            ukrainian: 'Квіти розквітають весною.',
        },
    },
    {
        english: 'summer',
        ukrainian: 'літо',
        example: {
            english: 'I love swimming in the summer.',
            ukrainian: 'Я люблю плавати влітку.',
        },
    },
    {
        english: 'sun',
        ukrainian: 'сонце',
        example: {
            english: 'The sun is shining brightly.',
            ukrainian: 'Сонце яскраво сяє.',
        },
    },
    {
        english: 'ten',
        ukrainian: 'десять',
        example: {
            english: 'He counted to ten.',
            ukrainian: 'Він прослідкував до десяти.',
        },
    },
    {
        english: 'ten after one',
        ukrainian: 'десять хвилин по першій',
        example: {
            english: 'The bus will arrive at ten after one.',
            ukrainian: 'Автобус прибуде о десять хвилин по першій.',
        },
    },
    {
        english: 'thirteen',
        ukrainian: 'тринадцять',
        example: {
            english: 'She is thirteen years old.',
            ukrainian: 'Їй тринадцять років.',
        },
    },
    {
        english: 'thirty',
        ukrainian: 'тридцять',
        example: {
            english: 'The meeting starts at half past two.',
            ukrainian: 'Зустріч починається о пів на третю.',
        },
    },
    {
        english: 'thousand',
        ukrainian: 'тисяча',
        example: {
            english: 'He won a thousand dollars in the lottery.',
            ukrainian: 'Він виграв тисячу доларів у лотереї.',
        },
    },
    {
        english: 'three',
        ukrainian: 'три',
        example: {
            english: 'I have three siblings.',
            ukrainian: 'У мене три брати або сестри.',
        },
    },
    {
        english: 'Thursday',
        ukrainian: 'четвер',
        example: {
            english: 'Let\'s meet on Thursday.',
            ukrainian: 'Зустрінемося у четвер.',
        },
    },
    {
        english: 'time',
        ukrainian: 'час',
        example: {
            english: 'What time is it?',
            ukrainian: 'Котра година?',
        },
    },
    {
        english: 'today',
        ukrainian: 'сьогодні',
        example: {
            english: 'I have a lot of work to do today.',
            ukrainian: 'Сьогодні у мене багато роботи.',
        },
    },
    {
        english: 'tomorrow',
        ukrainian: 'завтра',
        example: {
            english: 'I have an appointment with the dentist tomorrow.',
            ukrainian: 'У мене є запис до стоматолога завтра.',
        },
    },
    {
        english: 'Tuesday',
        ukrainian: 'вівторок',
        example: {
            english: 'We have a meeting on Tuesday.',
            ukrainian: 'У нас зустріч у вівторок.',
        },
    },
    {
        english: 'twelve',
        ukrainian: 'дванадцять',
        example: {
            english: 'It\'s twelve o\'clock.',
            ukrainian: 'Дванадцята година.',
        },
    },
    {
        english: 'twenty',
        ukrainian: 'двадцять',
        example: {
            english: 'There are twenty students in the class.',
            ukrainian: 'У класі двадцять учнів.',
        },
    },
    {
        english: 'two',
        ukrainian: 'два',
        example: {
            english: 'I have two cats.',
            ukrainian: 'У мене є два коти.',
        },
    },
    {
        english: 'Wednesday',
        ukrainian: 'середа',
        example: {
            english: 'We\'re going to the movies on Wednesday.',
            ukrainian: 'Ми йдемо в кіно у середу.',
        },
    },
    {
        english: 'week',
        ukrainian: 'тиждень',
        example: {
            english: 'I\'m going on vacation next week.',
            ukrainian: 'На наступному тижні я їду у відпустку.',
        },
    },
    {
        english: 'winter',
        ukrainian: 'зима',
        example: {
            english: 'It snows a lot in winter.',
            ukrainian: 'Взимку багато сніжить.',
        },
    },
    {
        english: 'woman',
        ukrainian: 'жінка',
        example: {
            english: 'She is a successful businesswoman.',
            ukrainian: 'Вона успішна бізнесвумен.',
        },
    },
    {
        english: 'year',
        ukrainian: 'рік',
        example: {
            english: 'I\'m planning to travel next year.',
            ukrainian: 'Я планую подорожувати наступного року.',
        },
    },
    {
        english: 'yesterday',
        ukrainian: 'вчора',
        example: {
            english: 'I saw her at the mall yesterday.',
            ukrainian: 'Я бачив її у торговому центрі вчора.',
        },
    },
];

export const ELEMENTARY: TData = [
    {
        english: 'advice',
        ukrainian: 'порада',
        example: {
            english: 'I need some advice on how to fix my car.',
            ukrainian: 'Мені потрібна деяка порада, як виправити мою машину.',
        },
    },
    {
        english: 'again',
        ukrainian: 'знову',
        example: {
            english: 'Let\'s watch that movie again.',
            ukrainian: 'Давайте подивимося цей фільм знову.',
        },
    },
    {
        english: 'although',
        ukrainian: 'хоча',
        example: {
            english: 'Although it was raining, we still went for a walk.',
            ukrainian: 'Хоча йшов дощ, ми все одно пішли на прогулянку.',
        },
    },
    {
        english: 'answer',
        ukrainian: 'відповідь',
        example: {
            english: 'Please give me an answer as soon as possible.',
            ukrainian: 'Будь ласка, дайте мені відповідь якомога швидше.',
        },
    },
    {
        english: 'any',
        ukrainian: 'будь-який',
        example: {
            english: 'Do you have any questions?',
            ukrainian: 'У вас є якісь питання?',
        },
    },
    {
        english: 'become',
        ukrainian: 'стати',
        example: {
            english: 'He wants to become a doctor when he grows up.',
            ukrainian: 'Він хоче стати лікарем, коли виросте.',
        },
    },
    {
        english: 'before',
        ukrainian: 'перед',
        example: {
            english: 'Please finish your homework before dinner.',
            ukrainian: 'Будь ласка, закінчуй своє домашнє завдання перед вечерею.',
        },
    },
    {
        english: 'believe',
        ukrainian: 'вірити',
        example: {
            english: 'I believe in you. You can do it!',
            ukrainian: 'Я вірю в тебе. Ти зможеш це зробити!',
        },
    },
    {
        english: 'book',
        ukrainian: 'книга',
        example: {
            english: 'I\'m reading an interesting book right now.',
            ukrainian: 'Я зараз читаю цікаву книгу.',
        },
    },
    {
        english: 'both',
        ukrainian: 'обидва',
        example: {
            english: 'Both of them are my friends.',
            ukrainian: 'Обидва з них мої друзі.',
        },
    },
    {
        english: 'boy',
        ukrainian: 'хлопчик',
        example: {
            english: 'The boy is playing in the park.',
            ukrainian: 'Хлопчик грає у парку.',
        },
    },
    {
        english: 'brother',
        ukrainian: 'брат',
        example: {
            english: 'My brother is older than me.',
            ukrainian: 'Мій брат старший за мене.',
        },
    },
    {
        english: 'buy',
        ukrainian: 'купити',
        example: {
            english: 'I need to buy some groceries at the supermarket.',
            ukrainian: 'Мені потрібно купити деякі продукти у супермаркеті.',
        },
    },
    {
        english: 'can',
        ukrainian: 'могти',
        example: {
            english: 'I can swim.',
            ukrainian: 'Я можу плавати.',
        },
    },
    {
        english: 'catch',
        ukrainian: 'схопити',
        example: {
            english: 'Try to catch the ball!',
            ukrainian: 'Спробуй схопити м\'яч!',
        },
    },
    {
        english: 'children',
        ukrainian: 'діти',
        example: {
            english: 'The children are playing in the park.',
            ukrainian: 'Діти грають у парку.',
        },
    },
    {
        english: 'choose',
        ukrainian: 'вибрати',
        example: {
            english: 'You can choose any color you like.',
            ukrainian: 'Ти можеш вибрати будь-який колір, який тобі подобається.',
        },
    },
    {
        english: 'climb',
        ukrainian: 'підніматися',
        example: {
            english: 'We decided to climb the mountain.',
            ukrainian: 'Ми вирішили піднятися на гору.',
        },
    },
    {
        english: 'close',
        ukrainian: 'близько',
        example: {
            english: 'The store is close to my house.',
            ukrainian: 'Магазин близько до мого будинку.',
        },
    },
    {
        english: 'clothes',
        ukrainian: 'одяг',
        example: {
            english: 'I need to buy some new clothes.',
            ukrainian: 'Мені потрібно купити новий одяг.',
        },
    },
    {
        english: 'colour',
        ukrainian: 'колір',
        example: {
            english: 'What\'s your favorite colour?',
            ukrainian: 'Який твій улюблений колір?',
        },
    },
    {
        english: 'come',
        ukrainian: 'прийти',
        example: {
            english: 'Please come to my party.',
            ukrainian: 'Будь ласка, приходь на мою вечірку.',
        },
    },
    {
        english: 'country',
        ukrainian: 'країна',
        example: {
            english: 'I would love to visit a foreign country.',
            ukrainian: 'Я б хотів відвідати іншу країну.',
        },
    },
    {
        english: 'day',
        ukrainian: 'день',
        example: {
            english: 'Today is a beautiful day.',
            ukrainian: 'Сьогодні гарний день.',
        },
    },
    {
        english: 'death',
        ukrainian: 'смерть',
        example: {
            english: 'The news of his death shocked everyone.',
            ukrainian: 'Новина про його смерть шокувала всіх.',
        },
    },
    {
        english: 'disease',
        ukrainian: 'хвороба',
        example: {
            english: 'He suffers from a rare disease.',
            ukrainian: 'Він страждає на рідкісну хворобу.',
        },
    },
    {
        english: 'do',
        ukrainian: 'робити',
        example: {
            english: 'What are you going to do tomorrow?',
            ukrainian: 'Що ти збираєшся робити завтра?',
        },
    },
    {
        english: 'door',
        ukrainian: 'двері',
        example: {
            english: 'Please close the door behind you.',
            ukrainian: 'Будь ласка, закрийте за собою двері.',
        },
    },
    {
        english: 'Earth',
        ukrainian: 'Земля',
        example: {
            english: 'The Earth is our home.',
            ukrainian: 'Земля - наш дім.',
        },
    },
    {
        english: 'edge',
        ukrainian: 'край',
        example: {
            english: 'Be careful not to fall off the edge of the cliff.',
            ukrainian: 'Будь обережний, щоб не випасти з краю скелі.',
        },
    },
    {
        english: 'enough',
        ukrainian: 'достатньо',
        example: {
            english: 'I\'ve had enough food for today.',
            ukrainian: 'Я мав достатньо їжі на сьогодні.',
        },
    },
    {
        english: 'example',
        ukrainian: 'приклад',
        example: {
            english: 'Can you give me an example of how to use this word?',
            ukrainian: 'Чи можете ви дати мені приклад, як використовувати це слово?',
        },
    },
    {
        english: 'eye',
        ukrainian: 'око',
        example: {
            english: 'Her eyes are blue.',
            ukrainian: 'Її очі сині.',
        },
    },
    {
        english: 'father',
        ukrainian: 'батько',
        example: {
            english: 'My father is a doctor.',
            ukrainian: 'Мій батько - лікар.',
        },
    },
    {
        english: 'find',
        ukrainian: 'знайти',
        example: {
            english: 'I need to find my keys. I can\'t leave without them.',
            ukrainian: 'Мені потрібно знайти свої ключі. Я не можу вийти без них.',
        },
    },
    {
        english: 'free',
        ukrainian: 'вільний',
        example: {
            english: 'I have a free day tomorrow. Let\'s go to the beach.',
            ukrainian: 'У мене завтра вільний день. Підемо на пляж.',
        },
    },
    {
        english: 'friend',
        ukrainian: 'друг',
        example: {
            english: 'She is my best friend.',
            ukrainian: 'Вона моя найкраща подруга.',
        },
    },
    {
        english: 'from',
        ukrainian: 'з',
        example: {
            english: 'I\'m from Ukraine.',
            ukrainian: 'Я з України.',
        },
    },
    {
        english: 'girl',
        ukrainian: 'дівчина',
        example: {
            english: 'The girl is playing with her toys.',
            ukrainian: 'Дівчинка грає зі своїми іграшками.',
        },
    },
    {
        english: 'give',
        ukrainian: 'дати',
        example: {
            english: 'Can you give me a pen, please?',
            ukrainian: 'Можете мені дати ручку, будь ласка?',
        },
    },
    {
        english: 'good',
        ukrainian: 'добрий',
        example: {
            english: 'She is a good student.',
            ukrainian: 'Вона хороша учениця.',
        },
    },
    {
        english: 'great',
        ukrainian: 'великий',
        example: {
            english: 'It was a great movie.',
            ukrainian: 'Це був великий фільм.',
        },
    },
    {
        english: 'group',
        ukrainian: 'група',
        example: {
            english: 'We are going on a trip with a group of friends.',
            ukrainian: 'Ми йдемо в поїздку з групою друзів.',
        },
    },
    {
        english: 'happy',
        ukrainian: 'щасливий',
        example: {
            english: 'I\'m so happy to see you.',
            ukrainian: 'Я так радий тебе бачити.',
        },
    },
    {
        english: 'have',
        ukrainian: 'мати',
        example: {
            english: 'I have a cat.',
            ukrainian: 'У мене є кіт.',
        },
    },
    {
        english: 'hear',
        ukrainian: 'чути',
        example: {
            english: 'Can you hear the music?',
            ukrainian: 'Ти чуєш музику?',
        },
    },
    {
        english: 'island',
        ukrainian: 'острів',
        example: {
            english: 'We went on vacation to a beautiful island.',
            ukrainian: 'Ми поїхали у відпустку на прекрасний острів.',
        },
    },
    {
        english: 'kind',
        ukrainian: 'добрий',
        example: {
            english: 'She is a kind person.',
            ukrainian: 'Вона добра людина.',
        },
    },
    {
        english: 'know',
        ukrainian: 'знати',
        example: {
            english: 'Do you know where the library is?',
            ukrainian: 'Ти знаєш, де бібліотека?',
        },
    },
    {
        english: 'learn',
        ukrainian: 'вчитися',
        example: {
            english: 'I want to learn how to play the piano.',
            ukrainian: 'Я хочу вивчити, як грати на фортепіано.',
        },
    },
    {
        english: 'letter',
        ukrainian: 'літера',
        example: {
            english: 'Write a letter to your grandma.',
            ukrainian: 'Напиши листа своїй бабусі.',
        },
    },
    {
        english: 'like',
        ukrainian: 'подобатися',
        example: {
            english: 'I like ice cream.',
            ukrainian: 'Мені подобається морозиво.',
        },
    },
    {
        english: 'listen',
        ukrainian: 'слухати',
        example: {
            english: 'Listen to this song. It\'s beautiful.',
            ukrainian: 'Послухай цю пісню. Вона прекрасна.',
        },
    },
    {
        english: 'live',
        ukrainian: 'жити',
        example: {
            english: 'I live in a small town.',
            ukrainian: 'Я живу в маленькому містечку.',
        },
    },
    {
        english: 'love',
        ukrainian: 'любити',
        example: {
            english: 'I love my family.',
            ukrainian: 'Я люблю свою сім\'ю.',
        },
    },
    {
        english: 'many',
        ukrainian: 'багато',
        example: {
            english: 'There are many books on the shelf.',
            ukrainian: 'На полиці багато книг.',
        },
    },
    {
        english: 'money',
        ukrainian: 'гроші',
        example: {
            english: 'I need some money to buy a new phone.',
            ukrainian: 'Мені потрібні гроші, щоб купити новий телефон.',
        },
    },
    {
        english: 'mother',
        ukrainian: 'мати',
        example: {
            english: 'My mother is a teacher.',
            ukrainian: 'Моя мати - вчителька.',
        },
    },
    {
        english: 'move',
        ukrainian: 'рухатися',
        example: {
            english: 'Please don\'t move the table.',
            ukrainian: 'Будь ласка, не рухайте стіл.',
        },
    },
    {
        english: 'next',
        ukrainian: 'наступний',
        example: {
            english: 'We can meet again next week.',
            ukrainian: 'Ми можемо зустрітися знову наступного тижня.',
        },
    },
    {
        english: 'night',
        ukrainian: 'ночі',
        example: {
            english: 'I love watching the stars at night.',
            ukrainian: 'Я люблю спостерігати за зірками вночі.',
        },
    },
    {
        english: 'number',
        ukrainian: 'число',
        example: {
            english: 'What is your phone number?',
            ukrainian: 'Який у тебе номер телефону?',
        },
    },
    {
        english: 'often',
        ukrainian: 'часто',
        example: {
            english: 'I often go jogging in the morning.',
            ukrainian: 'Я часто бігаю вранці.',
        },
    },
    {
        english: 'old',
        ukrainian: 'старий',
        example: {
            english: 'My grandfather is very old.',
            ukrainian: 'Мій дідусь дуже старий.',
        },
    },
    {
        english: 'only',
        ukrainian: 'лише',
        example: {
            english: 'I have only one sister.',
            ukrainian: 'У мене є лише одна сестра.',
        },
    },
    {
        english: 'open',
        ukrainian: 'відкритий',
        example: {
            english: 'Please open the window.',
            ukrainian: 'Будь ласка, відкрийте вікно.',
        },
    },
    {
        english: 'paper',
        ukrainian: 'папір',
        example: {
            english: 'Can you give me a piece of paper?',
            ukrainian: 'Можеш мені дати аркуш паперу?',
        },
    },
    {
        english: 'part',
        ukrainian: 'частина',
        example: {
            english: 'This is an important part of the project.',
            ukrainian: 'Це важлива частина проекту.',
        },
    },
    {
        english: 'people',
        ukrainian: 'люди',
        example: {
            english: 'There are many people in the park today.',
            ukrainian: 'Сьогодні в парку багато людей.',
        },
    },
    {
        english: 'picture',
        ukrainian: 'картинка',
        example: {
            english: 'I drew a picture of my family.',
            ukrainian: 'Я намалював картинку своєї родини.',
        },
    },
    {
        english: 'piece',
        ukrainian: 'шматок',
        example: {
            english: 'Can I have a piece of cake?',
            ukrainian: 'Чи можу я отримати шматок торта?',
        },
    },
    {
        english: 'pumpkin',
        ukrainian: 'гарбуз',
        example: {
            english: 'We carved a pumpkin for Halloween.',
            ukrainian: 'Ми вирізали гарбуз на Хелловін.',
        },
    },
    {
        english: 'rain',
        ukrainian: 'дощ',
        example: {
            english: 'Don\'t forget your umbrella. It\'s raining outside.',
            ukrainian: 'Не забудь свій парасольку. На вулиці йде дощ.',
        },
    },
    {
        english: 'really',
        ukrainian: 'дійсно',
        example: {
            english: 'I\'m really tired after a long day at work.',
            ukrainian: 'Я дійсно втомлений після довгого дня на роботі.',
        },
    },
    {
        english: 'right',
        ukrainian: 'правильний',
        example: {
            english: 'You are right. I made a mistake.',
            ukrainian: 'Ти правий. Я зробив помилку.',
        },
    },
    {
        english: 'room',
        ukrainian: 'кімната',
        example: {
            english: 'The children are playing in the room.',
            ukrainian: 'Діти грають у кімнаті.',
        },
    },
    {
        english: 'say',
        ukrainian: 'сказати',
        example: {
            english: 'What did you say? I didn\'t hear you.',
            ukrainian: 'Що ти сказав? Я тебе не почув.',
        },
    },
    {
        english: 'science',
        ukrainian: 'наука',
        example: {
            english: 'She is studying science at university.',
            ukrainian: 'Вона вивчає науку в університеті.',
        },
    },
    {
        english: 'side',
        ukrainian: 'бік',
        example: {
            english: 'Please stand on the right side of the road.',
            ukrainian: 'Будь ласка, стійте на правому боці дороги.',
        },
    },
    {
        english: 'sign',
        ukrainian: 'знак',
        example: {
            english: 'The sign says \'No parking\'.',
            ukrainian: 'На знаку написано \'Заборонено паркуватися\'.',
        },
    },
    {
        english: 'sister',
        ukrainian: 'сестра',
        example: {
            english: 'My sister is younger than me.',
            ukrainian: 'Моя сестра молодша за мене.',
        },
    },
    {
        english: 'snow',
        ukrainian: 'сніг',
        example: {
            english: 'We built a snowman in the backyard.',
            ukrainian: 'Ми збудували сніговика у задньому дворі.',
        },
    },
    {
        english: 'some',
        ukrainian: 'дещо',
        example: {
            english: 'I have some news to share with you.',
            ukrainian: 'У мене є дещо новин для тебе.',
        },
    },
    {
        english: 'straight',
        ukrainian: 'прямо',
        example: {
            english: 'Go straight and then turn left.',
            ukrainian: 'Йдіть прямо, а потім поверніть наліво.',
        },
    },
    {
        english: 'sun',
        ukrainian: 'сонце',
        example: {
            english: 'The sun is shining brightly today.',
            ukrainian: 'Сонце яскраво сяє сьогодні.',
        },
    },
    {
        english: 'sure',
        ukrainian: 'впевнений',
        example: {
            english: 'Are you sure you want to delete this file?',
            ukrainian: 'Ти впевнений, що хочеш видалити цей файл?',
        },
    },
    {
        english: 'talk',
        ukrainian: 'розмовляти',
        example: {
            english: 'We need to talk about the problem.',
            ukrainian: 'Нам потрібно поговорити про проблему.',
        },
    },
    {
        english: 'there',
        ukrainian: 'там',
        example: {
            english: 'Is there a park near your house?',
            ukrainian: 'Чи є парк біля твого будинку?',
        },
    },
    {
        english: 'they',
        ukrainian: 'вони',
        example: {
            english: 'They are going to the movies tonight.',
            ukrainian: 'Вони сьогодні вечором йдуть в кіно.',
        },
    },
    {
        english: 'today',
        ukrainian: 'сьогодні',
        example: {
            english: 'Today is a beautiful day.',
            ukrainian: 'Сьогодні прекрасний день.',
        },
    },
    {
        english: 'usually',
        ukrainian: 'зазвичай',
        example: {
            english: 'I usually have cereal for breakfast.',
            ukrainian: 'Я зазвичай їм кашу на сніданок.',
        },
    },
    {
        english: 'walk',
        ukrainian: 'гуляти',
        example: {
            english: 'Let\'s take a walk in the park.',
            ukrainian: 'Підемо погуляємо в парку.',
        },
    },
    {
        english: 'want',
        ukrainian: 'хотіти',
        example: {
            english: 'I want to buy a new car.',
            ukrainian: 'Я хочу купити нову машину.',
        },
    },
    {
        english: 'watch',
        ukrainian: 'дивитися',
        example: {
            english: 'I like to watch movies in my free time.',
            ukrainian: 'Мені подобається дивитися фільми у вільний час.',
        },
    },
    {
        english: 'water',
        ukrainian: 'вода',
        example: {
            english: 'Please bring me a glass of water.',
            ukrainian: 'Будь ласка, принеси мені склянку води.',
        },
    },
    {
        english: 'woman',
        ukrainian: 'жінка',
        example: {
            english: 'The woman is talking on the phone.',
            ukrainian: 'Жінка розмовляє по телефону.',
        },
    },
    {
        english: 'work',
        ukrainian: 'робота',
        example: {
            english: 'I have a lot of work to do today.',
            ukrainian: 'У мене сьогодні багато роботи.',
        },
    },
    {
        english: 'world',
        ukrainian: 'світ',
        example: {
            english: 'There are many beautiful places in the world.',
            ukrainian: 'У світі багато красивих місць.',
        },
    },
    {
        english: 'write',
        ukrainian: 'писати',
        example: {
            english: 'I like to write stories in my free time.',
            ukrainian: 'Мені подобається писати історії у вільний час.',
        },
    },
    {
        english: 'young',
        ukrainian: 'молодий',
        example: {
            english: 'She is a young and talented musician.',
            ukrainian: 'Вона молода та талановита музикантка.',
        },
    },
];

export const PRE_INTERMEDIATE: TData = [
    {
        english: 'activity',
        ukrainian: 'діяльність',
        example: {
            english: 'Physical activity is important for a healthy lifestyle.',
            ukrainian: 'Фізична активність важлива для здорового способу життя.',
        },
    },
    {
        english: 'already',
        ukrainian: 'вже',
        example: {
            english: 'I have already finished my homework.',
            ukrainian: 'Я вже закінчив своє домашнє завдання.',
        },
    },
    {
        english: 'amount',
        ukrainian: 'кількість',
        example: {
            english: 'Please write down the amount of the purchase.',
            ukrainian: 'Будь ласка, запишіть суму покупки.',
        },
    },
    {
        english: 'annoy',
        ukrainian: 'дратувати',
        example: {
            english: 'Her constant complaints annoy me.',
            ukrainian: 'Її постійні скарги мене дратують.',
        },
    },
    {
        english: 'appear',
        ukrainian: 'з\'являтися',
        example: {
            english: 'The sun appears in the morning.',
            ukrainian: 'Сонце з\'являється вранці.',
        },
    },
    {
        english: 'atom',
        ukrainian: 'атом',
        example: {
            english: 'An atom is the smallest unit of matter.',
            ukrainian: 'Атом є найменшою одиницею речовини.',
        },
    },
    {
        english: 'author',
        ukrainian: 'автор',
        example: {
            english: 'She is the author of several best-selling novels.',
            ukrainian: 'Вона є авторкою кількох найпопулярніших романів.',
        },
    },
    {
        english: 'biography',
        ukrainian: 'біографія',
        example: {
            english: 'I read an interesting biography of Albert Einstein.',
            ukrainian: 'Я прочитав цікаву біографію Альберта Ейнштейна.',
        },
    },
    {
        english: 'blind',
        ukrainian: 'сліпий',
        example: {
            english: 'She was born blind and never saw the colors.',
            ukrainian: 'Вона народилася сліпою і ніколи не бачила кольорів.',
        },
    },
    {
        english: 'brain',
        ukrainian: 'мозок',
        example: {
            english: 'The brain is the most complex organ in the human body.',
            ukrainian: 'Мозок є найскладнішим органом у тілі людини.',
        },
    },

    {
        english: 'cancel',
        ukrainian: 'скасувати',
        example: {
            english: 'I need to cancel my flight reservation.',
            ukrainian: 'Мені потрібно скасувати бронювання мого рейсу.',
        },
    },
    {
        english: 'cartoon',
        ukrainian: 'мультфільм',
        example: {
            english: 'My kids love to watch cartoons on Saturday mornings.',
            ukrainian: 'Мої діти люблять дивитися мультфільми в суботні ранки.',
        },
    },
    {
        english: 'catchy',
        ukrainian: 'запам\'ятовуючий',
        example: {
            english: 'That song has a catchy tune.',
            ukrainian: 'Ця пісня має запам\'ятовуючу мелодію.',
        },
    },
    {
        english: 'character',
        ukrainian: 'персонаж',
        example: {
            english: 'Harry Potter is a famous fictional character.',
            ukrainian: 'Гаррі Поттер - це відомий художній персонаж.',
        },
    },
    {
        english: 'cinema',
        ukrainian: 'кинотеатр',
        example: {
            english: 'Let\'s go to the cinema tonight.',
            ukrainian: 'Підемо в кінотеатр сьогодні ввечері.',
        },
    },
    {
        english: 'circle',
        ukrainian: 'коло',
        example: {
            english: 'Draw a circle on the paper.',
            ukrainian: 'Намалюйте коло на папері.',
        },
    },
    {
        english: 'circus',
        ukrainian: 'цирк',
        example: {
            english: 'The circus is coming to town next week.',
            ukrainian: 'Цирк приїжджає в місто наступного тижня.',
        },
    },
    {
        english: 'common',
        ukrainian: 'загальний',
        example: {
            english: 'It\'s a common mistake among beginners.',
            ukrainian: 'Це загальна помилка серед початківців.',
        },
    },
    {
        english: 'complain',
        ukrainian: 'скаржитися',
        example: {
            english: 'She always finds something to complain about.',
            ukrainian: 'Вона завжди знаходить, про що скаржитися.',
        },
    },
    {
        english: 'compose',
        ukrainian: 'складати',
        example: {
            english: 'He likes to compose music in his free time.',
            ukrainian: 'Він любить складати музику у вільний час.',
        },
    },
    {

        english: 'composer',
        ukrainian: 'композитор',
        example: {
            english: 'Beethoven is considered one of the greatest composers of all time.',
            ukrainian: 'Бетховен вважається одним з найвеличніших композиторів усіх часів.',
        },
    },
    {
        english: 'concert',
        ukrainian: 'концерт',
        example: {
            english: 'I\'m going to a concert tonight.',
            ukrainian: 'Сьогодні ввечері я йду на концерт.',
        },
    },
    {
        english: 'congratulate',
        ukrainian: 'вітати',
        example: {
            english: 'I want to congratulate you on your success.',
            ukrainian: 'Я хочу привітати вас з успіхом.',
        },
    },
    {
        english: 'correct',
        ukrainian: 'правильний',
        example: {
            english: 'Please choose the correct answer.',
            ukrainian: 'Будь ласка, оберіть правильну відповідь.',
        },
    },
    {
        english: 'daily routine',
        ukrainian: 'щоденна рутинна',
        example: {
            english: 'I have a busy daily routine.',
            ukrainian: 'У мене щоденна заповнена рутинна.',
        },
    },
    {
        english: 'dictionary',
        ukrainian: 'словник',
        example: {
            english: 'I need to look up that word in the dictionary.',
            ukrainian: 'Мені потрібно переглянути це слово в словнику.',
        },
    },
    {
        english: 'dramatic',
        ukrainian: 'драматичний',
        example: {
            english: 'The movie had a dramatic ending.',
            ukrainian: 'У фільмі була драматична закінчення.',
        },
    },
    {
        english: 'dream',
        ukrainian: 'мріяти',
        example: {
            english: 'I dream of traveling the world.',
            ukrainian: 'Я мрію про подорожування по всьому світу.',
        },
    },
    {
        english: 'drummer',
        ukrainian: 'ударник',
        example: {
            english: 'He is an excellent drummer in the band.',
            ukrainian: 'Він чудовий ударник у гурті.',
        },
    },
    {
        english: 'enormous',
        ukrainian: 'величезний',
        example: {
            english: 'They live in an enormous house.',
            ukrainian: 'Вони живуть у величезному будинку.',
        },
    },
    {
        english: 'environment',
        ukrainian: 'навколишнє середовище',
        example: {
            english: 'We need to protect the environment for future generations.',
            ukrainian: 'Нам потрібно захищати навколишнє середовище для майбутніх поколінь.',
        },
    },
    {
        english: 'event',
        ukrainian: 'подія',
        example: {
            english: 'The Olympic Games are a major international event.',
            ukrainian: 'Олімпійські ігри - це велика міжнародна подія.',
        },
    },
    {
        english: 'excited',
        ukrainian: 'захоплений',
        example: {
            english: 'I\'m so excited about my upcoming vacation.',
            ukrainian: 'Я так захоплений моєю майбутньою відпусткою.',
        },
    },
    {
        english: 'exotic',
        ukrainian: 'екзотичний',
        example: {
            english: 'I tried an exotic dish during my trip to Asia.',
            ukrainian: 'Під час своєї поїздки до Азії я спробував екзотичну страву.',
        },
    },
    {
        english: 'expensive',
        ukrainian: 'дорогий',
        example: {
            english: 'That designer bag is too expensive for me.',
            ukrainian: 'Ця дизайнерська сумка для мене занадто дорога.',
        },
    },
    {
        english: 'fall asleep',
        ukrainian: 'заснути',
        example: {
            english: 'I usually fall asleep quickly at night.',
            ukrainian: 'Зазвичай я швидко засинаю вночі.',
        },
    },
    {
        english: 'famous',
        ukrainian: 'відомий',
        example: {
            english: 'He is a famous actor who has won many awards.',
            ukrainian: 'Він відомий актор, який отримав багато нагород.',
        },
    },
    {
        english: 'farmhouse',
        ukrainian: 'фермерський будинок',
        example: {
            english: 'They live in a beautiful farmhouse in the countryside.',
            ukrainian: 'Вони живуть у прекрасному фермерському будинку в сільській місцевості.',
        },
    },
    {
        english: 'field',
        ukrainian: 'поле',
        example: {
            english: 'Children are playing soccer in the field.',
            ukrainian: 'Діти грають у футбол на полі.',
        },
    },
    {
        english: 'find out',
        ukrainian: 'дізнатися',
        example: {
            english: 'I need to find out the time of the meeting.',
            ukrainian: 'Мені потрібно дізнатися час зустрічі.',
        },
    },
    {
        english: 'government',
        ukrainian: 'уряд',
        example: {
            english: 'The government is implementing new policies to improve the economy.',
            ukrainian: 'Уряд впроваджує нові політики для покращення економіки.',
        },
    },
    {
        english: 'guess',
        ukrainian: 'вгадувати',
        example: {
            english: 'Can you guess the answer to this riddle?',
            ukrainian: 'Ви можете вгадати відповідь на цю загадку?',
        },
    },
    {
        english: 'horror',
        ukrainian: 'жахливий',
        example: {
            english: 'I don\'t enjoy watching horror movies.',
            ukrainian: 'Я не люблю дивитися жахливі фільми.',
        },
    },
    {
        english: 'human',
        ukrainian: 'людина',
        example: {
            english: 'We are all human and make mistakes.',
            ukrainian: 'Ми всі люди і робимо помилки.',
        },
    },
    {
        english: 'important',
        ukrainian: 'важливий',
        example: {
            english: 'It\'s important to prioritize your health.',
            ukrainian: 'Важливо надавати пріоритет своєму здоров\'ю.',
        },
    },
    {
        english: 'improve',
        ukrainian: 'покращувати',
        example: {
            english: 'I want to improve my language skills.',
            ukrainian: 'Я хочу покращити свої мовні навички.',
        },
    },
    {
        english: 'inspiration',
        ukrainian: 'натхнення',
        example: {
            english: 'Nature is a great source of inspiration for artists.',
            ukrainian: 'Природа є великим джерелом натхнення для художників.',
        },
    },
    {
        english: 'intrigued',
        ukrainian: 'зацікавлений',
        example: {
            english: 'I\'m intrigued by the mystery surrounding that old house.',
            ukrainian: 'Я зацікавлений загадкою, яка оточує цей старий будинок.',
        },
    },
    {
        english: 'invent',
        ukrainian: 'винаходити',
        example: {
            english: 'Thomas Edison invented the light bulb.',
            ukrainian: 'Томас Едісон винайшов лампу.',
        },
    },
    {
        english: 'investigate',
        ukrainian: 'розслідувати',
        example: {
            english: 'The detective is investigating the crime.',
            ukrainian: 'Детектив розслідує злочин.',
        },
    },
    {
        english: 'jealous',
        ukrainian: 'заздрісний',
        example: {
            english: 'She felt jealous when she saw her ex-boyfriend with someone else.',
            ukrainian: 'Вона почувала заздрість, коли побачила свого колишнього хлопця з кимось іншим.',
        },
    },
    {
        english: 'jewellery',
        ukrainian: 'ювелірні вироби',
        example: {
            english: 'She received a beautiful piece of jewellery for her birthday.',
            ukrainian: 'Вона отримала прекрасний ювелірний виріб на свій день народження.',
        },
    },
    {
        english: 'laboratory',
        ukrainian: 'лабораторія',
        example: {
            english: 'The scientists are conducting experiments in the laboratory.',
            ukrainian: 'Вчені проводять експерименти в лабораторії.',
        },
    },
    {
        english: 'laughter',
        ukrainian: 'сміх',
        example: {
            english: 'The comedian\'s jokes always bring laughter to the audience.',
            ukrainian: 'Жарти коміка завжди приносять сміх глядачам.',
        },
    },
    {
        english: 'literature',
        ukrainian: 'література',
        example: {
            english: 'I enjoy reading classic literature.',
            ukrainian: 'Мені подобається читати класичну літературу.',
        },
    },
    {
        english: 'lucky',
        ukrainian: 'везучий',
        example: {
            english: 'I feel lucky to have such supportive friends.',
            ukrainian: 'Я почуваюся щасливим, що маю таких підтримуючих друзів.',
        },
    },
    {
        english: 'masterpiece',
        ukrainian: 'шедевр',
        example: {
            english: 'The painting is considered a masterpiece of modern art.',
            ukrainian: 'Цю картину вважають шедевром сучасного мистецтва.',
        },
    },
    {
        english: 'medicine',
        ukrainian: 'медицина',
        example: {
            english: 'He studied medicine and became a doctor.',
            ukrainian: 'Він вивчав медицину і став лікарем.',
        },
    },
    {
        english: 'melody',
        ukrainian: 'мелодія',
        example: {
            english: 'The song has a beautiful melody.',
            ukrainian: 'У цій пісні прекрасна мелодія.',
        },
    },
    {
        english: 'memory',
        ukrainian: 'пам\'ять',
        example: {
            english: 'I have a good memory and can remember things easily.',
            ukrainian: 'У мене гарна пам\'ять, і я легко запам\'ятовую речі.',
        },
    },
    {
        english: 'mention',
        ukrainian: 'згадувати',
        example: {
            english: 'He didn\'t mention anything about the party.',
            ukrainian: 'Він нічого не згадав про вечірку.',
        },
    },
    {
        english: 'message',
        ukrainian: 'повідомлення',
        example: {
            english: 'I received a message from my friend.',
            ukrainian: 'Я отримав повідомлення від свого друга.',
        },
    },
    {
        english: 'messy',
        ukrainian: 'брудний',
        example: {
            english: 'Her room is always messy and untidy.',
            ukrainian: 'Її кімната завжди брудна і незакохана.',
        },
    },
    {
        english: 'mistake',
        ukrainian: 'помилка',
        example: {
            english: 'I made a mistake in my math homework.',
            ukrainian: 'Я зробив помилку в домашньому завданні з математики.',
        },
    },
    {
        english: 'moon',
        ukrainian: 'місяць',
        example: {
            english: 'The moon shines brightly in the night sky.',
            ukrainian: 'Місяць яскраво сяє на нічному небі.',
        },
    },
    {
        english: 'mountain',
        ukrainian: 'гора',
        example: {
            english: 'They went hiking in the mountains.',
            ukrainian: 'Вони пішли в похід у гори.',
        },
    },
    {
        english: 'mysterious',
        ukrainian: 'таємничий',
        example: {
            english: 'The old house has a mysterious atmosphere.',
            ukrainian: 'У цьому старому будинку панує таємнича атмосфера.',
        },
    },
    {
        english: 'mystery',
        ukrainian: 'таємниця',
        example: {
            english: 'The detective is trying to solve the mystery.',
            ukrainian: 'Детектив намагається розгадати таємницю.',
        },
    },
    {
        english: 'nightmare',
        ukrainian: 'кошмар',
        example: {
            english: 'I had a scary nightmare last night.',
            ukrainian: 'Мені снився жахливий кошмар минулої ночі.',
        },
    },
    {
        english: 'novel',
        ukrainian: 'роман',
        example: {
            english: 'She is writing a novel about her life experiences.',
            ukrainian: 'Вона пише роман про свої життєві враження.',
        },
    },
    {
        english: 'oil',
        ukrainian: 'нафта',
        example: {
            english: 'Oil is an important natural resource.',
            ukrainian: 'Нафта є важливим природним ресурсом.',
        },
    },
    {
        english: 'payment',
        ukrainian: 'оплата',
        example: {
            english: 'Please make the payment by the end of the month.',
            ukrainian: 'Будь ласка, здійсніть оплату до кінця місяця.',
        },
    },
    {
        english: 'piano',
        ukrainian: 'фортепіано',
        example: {
            english: 'She plays the piano beautifully.',
            ukrainian: 'Вона грає на фортепіано чудово.',
        },
    },
    {
        english: 'poem',
        ukrainian: 'вірш',
        example: {
            english: 'He wrote a beautiful poem for his girlfriend.',
            ukrainian: 'Він написав прекрасний вірш для своєї дівчини.',
        },
    },
    {
        english: 'poetry',
        ukrainian: 'поезія',
        example: {
            english: 'I enjoy reading and writing poetry.',
            ukrainian: 'Мені подобається читати і писати поезію.',
        },
    },
    {
        english: 'publish',
        ukrainian: 'публікувати',
        example: {
            english: 'He wants to publish his book.',
            ukrainian: 'Він хоче опублікувати свою книгу.',
        },
    },
    {
        english: 'realize',
        ukrainian: 'розуміти',
        example: {
            english: 'She finally realized her true potential.',
            ukrainian: 'Вона нарешті розуміла свій справжній потенціал.',
        },
    },
    {
        english: 'refuse',
        ukrainian: 'відмовитися',
        example: {
            english: 'He refused to help them with their project.',
            ukrainian: 'Він відмовився допомогти їм з їхнім проектом.',
        },
    },
    {
        english: 'revise',
        ukrainian: 'переглядати',
        example: {
            english: 'I need to revise for my upcoming exam.',
            ukrainian: 'Мені потрібно переглянути для моєї майбутньої складової.',
        },
    },
    {
        english: 'scientific',
        ukrainian: 'науковий',
        example: {
            english: 'The scientist conducted a series of scientific experiments.',
            ukrainian: 'Вчений провів серію наукових експериментів.',
        },
    },
    {
        english: 'scientist',
        ukrainian: 'вчений',
        example: {
            english: 'She aspires to become a scientist and make groundbreaking discoveries.',
            ukrainian: 'Вона прагне стати вченим і зробити проривні відкриття.',
        },
    },
    {
        english: 'sentimental',
        ukrainian: 'сентиментальний',
        example: {
            english: 'He keeps a sentimental photo from his childhood in his wallet.',
            ukrainian: 'Він зберігає сентиментальну фотографію з дитинства в своєму гаманці.',
        },
    },
    {
        english: 'sheep',
        ukrainian: 'вівця',
        example: {
            english: 'The farmer has a flock of sheep on his farm.',
            ukrainian: 'На фермі фермер має стадо вівцей.',
        },
    },
    {
        english: 'solve',
        ukrainian: 'вирішувати',
        example: {
            english: 'He used his problem-solving skills to find a solution.',
            ukrainian: 'Він використовував свої навички вирішення проблем, щоб знайти рішення.',
        },
    },
    {
        english: 'step',
        ukrainian: 'крок',
        example: {
            english: 'She took a step forward towards her goals.',
            ukrainian: 'Вона зробила крок у напрямку своїх цілей.',
        },
    },
    {
        english: 'story',
        ukrainian: 'історія',
        example: {
            english: 'He told an interesting story about his travels.',
            ukrainian: 'Він розповів цікаву історію про свої подорожі.',
        },
    },
    {
        english: 'stranger',
        ukrainian: 'незнайомець',
        example: {
            english: 'She was approached by a stranger on the street.',
            ukrainian: 'На вулиці до неї підійшов незнайомець.',
        },
    },
    {
        english: 'success',
        ukrainian: 'успіх',
        example: {
            english: 'Her hard work and dedication led to success.',
            ukrainian: 'Її наполеглива праця та самовідданість привели до успіху.',
        },
    },
    {
        english: 'thought',
        ukrainian: 'думка',
        example: {
            english: 'He shared his thoughts on the matter.',
            ukrainian: 'Він поділився своїми думками з приводу цього питання.',
        },
    },
    {
        english: 'tidy up',
        ukrainian: 'прибирати',
        example: {
            english: 'She needs to tidy up her room before the guests arrive.',
            ukrainian: 'Вона повинна прибрати свою кімнату, перш ніж прийдуть гості.',
        },
    },
    {
        english: 'travel',
        ukrainian: 'подорожувати',
        example: {
            english: 'They love to travel and explore new places.',
            ukrainian: 'Вони люблять подорожувати та відкривати нові місця.',
        },
    },
    {
        english: 'unforgettable',
        ukrainian: 'незабутній',
        example: {
            english: 'The vacation was an unforgettable experience.',
            ukrainian: 'Відпустка була незабутнім досвідом.',
        },
    },
    {
        english: 'violin',
        ukrainian: 'скрипка',
        example: {
            english: 'She plays the violin with great skill.',
            ukrainian: 'Вона грає на скрипці з великим майстерністю.',
        },
    },
    {
        english: 'vocabulary',
        ukrainian: 'словниковий запас',
        example: {
            english: 'He has a wide vocabulary and can express himself effectively.',
            ukrainian: 'Він має широкий словниковий запас і може ефективно висловлюватись.',
        },
    },
    {
        english: 'wander',
        ukrainian: 'бродити',
        example: {
            english: 'They decided to wander through the city and explore its hidden gems.',
            ukrainian: 'Вони вирішили блукати по місту й досліджувати його приховані скарби.',
        },
    },
    {
        english: 'weather forecast',
        ukrainian: 'прогноз погоди',
        example: {
            english: 'I checked the weather forecast before planning my outdoor activities.',
            ukrainian: 'Я перевірив прогноз погоди перед плануванням своїх активностей на відкритому повітрі.',
        },
    },
    {
        english: 'weird',
        ukrainian: 'дивний',
        example: {
            english: 'That\'s a weird-looking creature.',
            ukrainian: 'Те дивний вигляд істоти.',
        },
    },
    {
        english: 'wheel',
        ukrainian: 'колесо',
        example: {
            english: 'He fixed the wheel of his bicycle.',
            ukrainian: 'Він виправив колесо свого велосипеда.',
        },
    },
    {
        english: 'win',
        ukrainian: 'вигравати',
        example: {
            english: 'She was determined to win the competition.',
            ukrainian: 'Вона була рішучою перемогти в змаганні.',
        },
    },
    {
        english: 'writer',
        ukrainian: 'письменник',
        example: {
            english: 'He is a talented writer and has published several novels.',
            ukrainian: 'Він талановитий письменник і опублікував кілька романів.',
        },
    },
];

export const INTERMEDIATE: TData = [
    {
        english: 'abolish',
        ukrainian: 'скасувати',
        example: {
            english: 'The government decided to abolish the old law.',
            ukrainian: 'Уряд вирішив скасувати старий закон.',
        },
    },
    {
        english: 'addiction',
        ukrainian: 'залежність',
        example: {
            english: 'He struggled with addiction for many years.',
            ukrainian: 'Він боровся зі залежністю протягом багатьох років.',
        },
    },
    {
        english: 'agriculture',
        ukrainian: 'сільське господарство',
        example: {
            english: 'Agriculture is an important industry in this region.',
            ukrainian: 'Сільське господарство є важливою галуззю у цьому регіоні.',
        },
    },
    {
        english: 'amateur',
        ukrainian: 'аматор',
        example: {
            english: 'He\'s an amateur photographer but takes amazing pictures.',
            ukrainian: 'Він аматорський фотограф, але робить захоплюючі знімки.',
        },
    },
    {
        english: 'ambassador',
        ukrainian: 'посол',
        example: {
            english: 'The ambassador represents their country in a foreign land.',
            ukrainian: 'Посол представляє свою країну в чужині.',
        },
    },
    {
        english: 'ambulance',
        ukrainian: 'швидка допомога',
        example: {
            english: 'The ambulance arrived quickly to the scene of the accident.',
            ukrainian: 'Швидка допомога швидко прибула на місце аварії.',
        },
    },
    {
        english: 'anger',
        ukrainian: 'гнів',
        example: {
            english: 'His face turned red with anger.',
            ukrainian: 'Його обличчя стало червоним від гніву.',
        },
    },
    {
        english: 'approve',
        ukrainian: 'затверджувати',
        example: {
            english: 'The committee will approve the proposal if it meets the requirements.',
            ukrainian: 'Комітет затвердить пропозицію, якщо вона відповідає вимогам.',
        },
    },
    {
        english: 'apron',
        ukrainian: 'фартух',
        example: {
            english: 'She tied the apron around her waist before cooking.',
            ukrainian: 'Вона зав\'язала фартух на талії перед готуванням.',
        },
    },
    {
        english: 'arrange',
        ukrainian: 'організовувати',
        example: {
            english: 'He arranged a meeting with the client to discuss the project.',
            ukrainian: 'Він організував зустріч з клієнтом, щоб обговорити проект.',
        },
    },
    {
        english: 'arrogant',
        ukrainian: 'арогантний',
        example: {
            english: 'She had a reputation for being arrogant and condescending.',
            ukrainian: 'У неї була репутація арогантної і зневажливої особи.',
        },
    },
    {
        english: 'boast',
        ukrainian: 'хвалитися',
        example: {
            english: 'He likes to boast about his achievements.',
            ukrainian: 'Він любить хвалитися своїми досягненнями.',
        },
    },
    {
        english: 'bodyguard',
        ukrainian: 'охоронець',
        example: {
            english: 'The celebrity was accompanied by two bodyguards.',
            ukrainian: 'Знаменитість була супроводжена двома охоронцями.',
        },
    },
    {
        english: 'canteen',
        ukrainian: 'столова',
        example: {
            english: 'The employees gathered in the canteen for lunch.',
            ukrainian: 'Співробітники зібралися в столовій на обід.',
        },
    },
    {
        english: 'celebrity',
        ukrainian: 'знаменитість',
        example: {
            english: 'The movie star attracted a lot of attention from the media.',
            ukrainian: 'Зірка кіно привертала багато уваги з боку ЗМІ.',
        },
    },
    {
        english: 'childhood',
        ukrainian: 'дитинство',
        example: {
            english: 'She has fond memories of her childhood in the countryside.',
            ukrainian: 'У неї є щирі спогади про своє дитинство в селі.',
        },
    },
    {
        english: 'civilian',
        ukrainian: 'цивільний',
        example: {
            english: 'During times of war, many civilians are affected by the conflict.',
            ukrainian: 'Під час війни багато цивільних постраждають від конфлікту.',
        },
    },
    {
        english: 'collapse',
        ukrainian: 'зруйнування',
        example: {
            english: 'The building collapsed after the earthquake.',
            ukrainian: 'Будівля розпалась після землетрусу.',
        },
    },
    {

        english: 'commercial',
        ukrainian: 'реклама',
        example: {
            english: 'The company filmed a commercial to promote their new product.',
            ukrainian: 'Компанія зняла рекламний ролик, щоб просунути свій новий продукт.',
        },
    },
    {
        english: 'commission',
        ukrainian: 'комісія',
        example: {
            english: 'The artist received a commission to paint a portrait.',
            ukrainian: 'Художник отримав замовлення на написання портрета.',
        },
    },
    {
        english: 'confidence',
        ukrainian: 'впевненість',
        example: {
            english: 'She spoke with confidence during the presentation.',
            ukrainian: 'Вона говорила з впевненістю під час презентації.',
        },
    },
    {
        english: 'contemptuous',
        ukrainian: 'зневажливий',
        example: {
            english: 'He gave her a contemptuous look and walked away.',
            ukrainian: 'Він кинув на неї зневажливий погляд і відійшов.',
        },
    },
    {
        english: 'contribute',
        ukrainian: 'вносити вклад',
        example: {
            english: 'Everyone can contribute to the success of the project.',
            ukrainian: 'Кожен може внести свій вклад у успіх проекту.',
        },
    },
    {
        english: 'convenient',
        ukrainian: 'зручний',
        example: {
            english: 'The hotel is conveniently located near the city center.',
            ukrainian: 'Готель розташований зручно біля центру міста.',
        },
    },
    {
        english: 'correspondence',
        ukrainian: 'листування',
        example: {
            english: 'They maintained a regular correspondence through letters.',
            ukrainian: 'Вони підтримували регулярне листування поштою.',
        },
    },
    {
        english: 'courage',
        ukrainian: 'мужність',
        example: {
            english: 'She showed great courage in standing up for what she believed in.',
            ukrainian: 'Вона проявила велику мужність, заступившись за свої переконання.',
        },
    },
    {
        english: 'craving',
        ukrainian: 'потяг',
        example: {
            english: 'She had a craving for chocolate and couldn\'t resist eating it.',
            ukrainian: 'У неї був потяг до шоколаду і вона не могла втриматися від його споживання.',
        },
    },

    {
        english: 'crawl',
        ukrainian: 'повзти',
        example: {
            english: 'The baby is learning to crawl.',
            ukrainian: 'Дитина навчається повзти.',
        },
    },
    {
        english: 'creative',
        ukrainian: 'креативний',
        example: {
            english: 'She has a creative approach to problem-solving.',
            ukrainian: 'У неї є креативний підхід до вирішення проблем.',
        },
    },
    {
        english: 'dedication',
        ukrainian: 'присвяченість',
        example: {
            english: 'His dedication to his work is commendable.',
            ukrainian: 'Його присвяченість роботі варта визнання.',
        },
    },
    {
        english: 'deliver',
        ukrainian: 'доставляти',
        example: {
            english: 'The courier will deliver the package tomorrow.',
            ukrainian: 'Кур\'єр доставить посилку завтра.',
        },
    },
    {
        english: 'depth',
        ukrainian: 'глибина',
        example: {
            english: 'The ocean has incredible depths that are yet to be explored.',
            ukrainian: 'У океану є неймовірні глибини, які ще не були досліджені.',
        },
    },
    {
        english: 'descend',
        ukrainian: 'спускатися',
        example: {
            english: 'They decided to descend the mountain before it got dark.',
            ukrainian: 'Вони вирішили спуститися з гори, поки не стемніло.',
        },
    },
    {
        english: 'destination',
        ukrainian: 'пункт призначення',
        example: {
            english: 'They finally reached their destination after a long journey.',
            ukrainian: 'Вони нарешті дісталися до пункту призначення після довгого шляху.',
        },
    },
    {
        english: 'deteriorate',
        ukrainian: 'погіршуватися',
        example: {
            english: 'His health started to deteriorate rapidly.',
            ukrainian: 'Його здоров\'я почало швидко погіршуватися.',
        },
    },
    {
        english: 'disappointment',
        ukrainian: 'розчарування',
        example: {
            english: 'Losing the game was a big disappointment for the team.',
            ukrainian: 'Програш у грі став великим розчаруванням для команди.',
        },
    },
    {
        english: 'dismiss',
        ukrainian: 'відхиляти',
        example: {

            english: 'He dismissed her ideas without considering them.',
            ukrainian: 'Він відхилив її ідеї, не розглядаючи їх.',
        },
    },
    {
        english: 'dissolve',
        ukrainian: 'розчиняти',
        example: {
            english: 'The sugar will dissolve in hot water.',
            ukrainian: 'Цукор розчиниться у гарячій воді.',
        },
    },
    {
        english: 'distribute',
        ukrainian: 'розподіляти',
        example: {
            english: 'They distribute food to the needy.',
            ukrainian: 'Вони розподіляють їжу нужденним.',
        },
    },
    {
        english: 'district',
        ukrainian: 'район',
        example: {
            english: 'He lives in the downtown district.',
            ukrainian: 'Він живе в центральному районі.',
        },
    },
    {
        english: 'elaborate',
        ukrainian: 'розробляти',
        example: {
            english: 'They had to elaborate a plan to solve the problem.',
            ukrainian: 'Вони повинні були розробити план, щоб вирішити проблему.',
        },
    },
    {
        english: 'eligible',
        ukrainian: 'підходящий',
        example: {
            english: 'Only students who meet the eligibility criteria can apply.',
            ukrainian: 'Тільки студенти, які відповідають критеріям підходу, можуть подати заяву.',
        },
    },
    {
        english: 'embarrassment',
        ukrainian: 'сором',
        example: {
            english: 'She blushed in embarrassment when her mistake was pointed out.',
            ukrainian: 'Вона зарум\'янилася від сорому, коли їй вказали на її помилку.',
        },
    },
    {
        english: 'emergency',
        ukrainian: 'надзвичайна ситуація',
        example: {
            english: 'In case of an emergency, please call the emergency hotline.',
            ukrainian: 'У разі надзвичайної ситуації, будь ласка, зателефонуйте на гарячу лінію надзвичайної ситуації.',
        },
    },
    {
        english: 'entourage',
        ukrainian: 'супровід',
        example: {
            english: 'The celebrity arrived with a large entourage.',
            ukrainian: 'Знаменитість прибула з великим супроводом.',
        },
    },
    {
        english: 'evidence',
        ukrainian: 'доказ',
        example: {
            english: 'The detective collected evidence to solve the crime.',
            ukrainian: 'Детектив зібрав докази, щоб розкрити злочин.',
        },
    },
    {
        english: 'extinction',
        ukrainian: 'вимирання',
        example: {
            english: 'Many species are at risk of extinction.',
            ukrainian: 'Багато видів перебувають під загрозою вимирання.',
        },
    },
    {
        english: 'famine',
        ukrainian: 'голод',
        example: {
            english: 'The country experienced a severe famine.',
            ukrainian: 'У країні сталася важка голодна катастрофа.',
        },
    },
    {
        english: 'flood',
        ukrainian: 'повінь',
        example: {
            english: 'The heavy rain caused a flood in the city.',
            ukrainian: 'Сильний дощ спричинив повінь у місті.',
        },
    },
    {
        english: 'generosity',
        ukrainian: 'щедрість',
        example: {
            english: 'Her generosity knew no bounds.',
            ukrainian: 'Її щедрість не знала меж.',
        },
    },
    {
        english: 'gluttony',
        ukrainian: 'пожертва',
        example: {
            english: 'His gluttony for sweets was evident in his expanding waistline.',
            ukrainian: 'Його постійне надмірне споживання солодощів було очевидним у його розширюючомуся талії.',
        },
    },
    {
        english: 'hiccup',
        ukrainian: 'ікота',
        example: {
            english: 'Drinking a glass of water helped relieve his hiccups.',
            ukrainian: 'Випити склянку води допомогло зняти його ікоту.',
        },
    },
    {
        english: 'honesty',
        ukrainian: 'чесність',
        example: {
            english: 'He valued honesty above all else.',
            ukrainian: 'Він цінував чесність над усім іншим.',
        },
    },
    {
        english: 'household',
        ukrainian: 'домашнє господарство',
        example: {
            english: 'She manages the household and takes care of the children.',
            ukrainian: 'Вона керує домашнім господарством і доглядає за дітьми.',
        },
    },
    {
        english: 'humanity',
        ukrainian: 'людство',
        example: {
            english: 'The novel explores the themes of love and humanity.',
            ukrainian: 'Роман досліджує теми кохання та людства.',
        },
    },
    {
        english: 'humiliate',
        ukrainian: 'знущатися',
        example: {
            english: 'He humiliated her in front of everyone.',
            ukrainian: 'Він знущався з неї перед усіма.',
        },
    },
    {
        english: 'interpret',
        ukrainian: 'тлумачити',
        example: {
            english: 'The translator can interpret the conversation in real time.',
            ukrainian: 'Перекладач може тлумачити розмову в режимі реального часу.',
        },
    },
    {
        english: 'investigate',
        ukrainian: 'розслідувати',
        example: {
            english: 'The detective was assigned to investigate the crime scene.',
            ukrainian: 'Детективу було доручено розслідувати місце злочину.',
        },
    },
    {
        english: 'justice',
        ukrainian: 'справедливість',
        example: {
            english: 'The judge ensured that justice was served.',
            ukrainian: 'Суддя забезпечив, що була здійснена справедливість.',
        },
    },
    {
        english: 'kindness',
        ukrainian: 'доброта',
        example: {
            english: 'Her kindness touched the hearts of many people.',
            ukrainian: 'Її доброта торкнулася сердець багатьох людей.',
        },
    },
    {
        english: 'knowledge',
        ukrainian: 'знання',
        example: {
            english: 'He has a wide knowledge of history.',
            ukrainian: 'Він має широкі знання з історії.',
        },
    },
    {
        english: 'landlord',
        ukrainian: 'власник',
        example: {
            english: 'The landlord is responsible for maintaining the property.',
            ukrainian: 'Власник відповідає за підтримку майна.',
        },
    },
    {
        english: 'liberty',
        ukrainian: 'свобода',
        example: {
            english: 'He fought for liberty and independence.',
            ukrainian: 'Він боровся за свободу та незалежність.',
        },
    },
    {
        english: 'maintain',
        ukrainian: 'підтримувати',
        example: {
            english: 'You need to maintain a healthy lifestyle.',
            ukrainian: 'Вам потрібно підтримувати здоровий спосіб життя.',
        },
    },
    {
        english: 'mature',
        ukrainian: 'дорослий',
        example: {
            english: 'She is a mature and responsible individual.',
            ukrainian: 'Вона доросла і відповідальна особа.',
        },
    },
    {
        english: 'mirror',
        ukrainian: 'дзеркало',
        example: {
            english: 'She looked at herself in the mirror.',
            ukrainian: 'Вона подивилася на себе в дзеркало.',
        },
    },
    {
        english: 'naughty',
        ukrainian: 'непослушний',
        example: {
            english: 'The naughty child misbehaved in class.',
            ukrainian: 'Непослушна дитина погано себе веде у класі.',
        },
    },
    {
        english: 'patience',
        ukrainian: 'терпіння',
        example: {
            english: 'She handled the difficult situation with patience.',
            ukrainian: 'Вона впоралася зі складною ситуацією з терпінням.',
        },
    },
    {
        english: 'persuade',
        ukrainian: 'переконувати',
        example: {
            english: 'He tried to persuade her to change her mind.',
            ukrainian: 'Він намагався переконати її змінити свою думку.',
        },
    },
    {
        english: 'petrol',
        ukrainian: 'бензин',
        example: {
            english: 'The car runs on petrol.',
            ukrainian: 'Машина працює на бензині.',
        },
    },
    {
        english: 'pleasure',
        ukrainian: 'задоволення',
        example: {
            english: 'Reading is a great pleasure for her.',
            ukrainian: 'Читання - велике задоволення для неї.',
        },
    },
    {
        english: 'prejudice',
        ukrainian: 'передубеждення',
        example: {
            english: 'We should eliminate prejudice and treat everyone equally.',
            ukrainian: 'Ми повинні усунути передубеждення і ставитися до всіх рівно.',
        },
    },
    {
        english: 'prescription',
        ukrainian: 'рецепт',
        example: {
            english: 'She filled the prescription at the pharmacy.',
            ukrainian: 'Вона виписала рецепт у аптеці.',
        },
    },
    {
        english: 'profit',
        ukrainian: 'прибуток',
        example: {
            english: 'The company made a huge profit last year.',
            ukrainian: 'Компанія зробила великий прибуток минулого року.',
        },
    },
    {
        english: 'promotion',
        ukrainian: 'продвиження',
        example: {
            english: 'She received a promotion at work.',
            ukrainian: 'Вона отримала продвиження на роботі.',
        },
    },
    {
        english: 'prosecutor',
        ukrainian: 'прокурор',
        example: {
            english: 'The prosecutor presented the evidence in court.',
            ukrainian: 'Прокурор представив докази у суді.',
        },
    },
    {
        english: 'quarrel',
        ukrainian: 'сваритися',
        example: {
            english: 'They had a quarrel over the misunderstanding.',
            ukrainian: 'Вони посварилися через непорозуміння.',
        },
    },
    {
        english: 'rapport',
        ukrainian: 'спілкування',
        example: {
            english: 'They established a good rapport with each other.',
            ukrainian: 'Вони встановили хороше спілкування між собою.',
        },
    },
    {
        english: 'referee',
        ukrainian: 'суддя',
        example: {
            english: 'The referee made a fair decision.',
            ukrainian: 'Суддя прийняв справедливе рішення.',
        },
    },
    {
        english: 'reference book',
        ukrainian: 'довідник',
        example: {
            english: 'He found the information he needed in a reference book.',
            ukrainian: 'Він знайшов потрібну інформацію у довіднику.',
        },
    },
    {
        english: 'rehearsal',
        ukrainian: 'репетиція',
        example: {
            english: 'They had a rehearsal before the performance.',
            ukrainian: 'Вони провели репетицію перед виставою.',
        },
    },
    {
        english: 'remarkable',
        ukrainian: 'неймовірний',
        example: {
            english: 'She has a remarkable ability to solve complex problems.',
            ukrainian: 'У неї неймовірна здатність вирішувати складні проблеми.',
        },
    },
    {
        english: 'resentment',
        ukrainian: 'відчуття образи',
        example: {
            english: 'He felt resentment towards his boss for the unfair treatment.',
            ukrainian: 'Він відчував відчуття образи до свого керівника за несправедливе ставлення.',
        },
    },
    {
        english: 'ruthless',
        ukrainian: 'безжалісний',
        example: {
            english: 'The ruthless dictator oppressed his people.',
            ukrainian: 'Безжалісний диктатор тиснув на своїх людей.',
        },
    },
    {
        english: 'satchel',
        ukrainian: 'портфель',
        example: {
            english: 'He carried his books in a satchel.',
            ukrainian: 'Він носив свої книги у портфелі.',
        },
    },
    {
        english: 'software',
        ukrainian: 'програмне забезпечення',
        example: {
            english: 'The company develops software for various industries.',
            ukrainian: 'Компанія розробляє програмне забезпечення для різних галузей.',
        },
    },
    {
        english: 'spokesman',
        ukrainian: 'речник',
        example: {
            english: 'He was appointed as the official spokesman for the organization.',
            ukrainian: 'Він був призначений офіційним речником організації.',
        },
    },
    {
        english: 'squeeze',
        ukrainian: 'стискати',
        example: {
            english: 'She squeezed the orange to extract the juice.',
            ukrainian: 'Вона стиснула апельсин, щоб видобути сік.',
        },
    },
    {
        english: 'stationary',
        ukrainian: 'нерухомий',
        example: {
            english: 'The car was stationary at the traffic light.',
            ukrainian: 'Машина була нерухома на світлофорі.',
        },
    },
    {
        english: 'sufficient',
        ukrainian: 'достатній',
        example: {
            english: 'She had a sufficient amount of money to buy the ticket.',
            ukrainian: 'У неї було достатньо грошей, щоб купити квиток.',
        },
    },
    {
        english: 'superstition',
        ukrainian: 'суеверіє',
        example: {
            english: 'He doesn\'t believe in superstitions.',
            ukrainian: 'Він не вірить в суєверії.',
        },
    },
    {
        english: 'surgeon',
        ukrainian: 'хірург',
        example: {
            english: 'The surgeon performed a delicate operation.',
            ukrainian: 'Хірург виконав складну операцію.',
        },
    },
    {
        english: 'surveyor',
        ukrainian: 'геодезист',
        example: {
            english: 'The surveyor measured the land for the construction project.',
            ukrainian: 'Геодезист виміряв землю для будівельного проекту.',
        },
    },
    {
        english: 'suspect',
        ukrainian: 'підозрюваний',
        example: {
            english: 'The police apprehended the suspect in the robbery case.',
            ukrainian: 'Поліція затримала підозрюваного в справі про пограбування.',
        },
    },
    {
        english: 'vacancy',
        ukrainian: 'вакансія',
        example: {
            english: 'There is a job vacancy at the company.',
            ukrainian: 'У компанії є вакансія.',
        },
    },
    {
        english: 'vain',
        ukrainian: 'пустий',
        example: {
            english: 'She was proud and vain about her appearance.',
            ukrainian: 'Вона була горда й пуста щодо свого зовнішнього вигляду.',
        },
    },
    {
        english: 'valuable',
        ukrainian: 'цінний',
        example: {
            english: 'The necklace is made of valuable diamonds.',
            ukrainian: 'Намисто виготовлене з цінних діамантів.',
        },
    },
    {
        english: 'walkie-talkie',
        ukrainian: 'радіотелефон',
        example: {
            english: 'They used walkie-talkies to communicate during the mission.',
            ukrainian: 'Вони використовували радіотелефони для спілкування під час місії.',
        },
    },
    {
        english: 'whistle',
        ukrainian: 'свисток',
        example: {
            english: 'He blew the whistle to get everyone\'s attention.',
            ukrainian: 'Він засвистів, щоб привернути увагу всіх.',
        },
    },
    {
        english: 'withdraw',
        ukrainian: 'знімати',
        example: {
            english: 'She went to the bank to withdraw some money.',
            ukrainian: 'Вона пішла до банку, щоб зняти гроші.',
        },
    },
];

export const UPPER_INTERMEDIATE: TData = [
    {
        english: 'abasement',
        ukrainian: 'пониження',
        example: {
            english: 'He endured abasement from his colleagues.',
            ukrainian: 'Він терпів пониження від своїх колег.',
        },
    },
    {
        english: 'abhor',
        ukrainian: 'ненавидіти',
        example: {
            english: 'I abhor violence in any form.',
            ukrainian: 'Я ненавиджу насильство в будь-якій формі.',
        },
    },
    {
        english: 'abrasive',
        ukrainian: 'абразивний',
        example: {
            english: 'She has an abrasive personality.',
            ukrainian: 'Вона має абразивну особистість.',
        },
    },
    {
        english: 'abrogate',
        ukrainian: 'скасувати',
        example: {
            english: 'The government decided to abrogate the law.',
            ukrainian: 'Уряд вирішив скасувати закон.',
        },
    },
    {
        english: 'absolution',
        ukrainian: 'вибачення',
        example: {
            english: 'He sought absolution for his sins.',
            ukrainian: 'Він шукав вибачення за свої гріхи.',
        },
    },
    {
        english: 'abstain',
        ukrainian: 'утриматися',
        example: {
            english: 'I decided to abstain from voting.',
            ukrainian: 'Я вирішив утриматися від голосування.',
        },
    },
    {
        english: 'abstemious',
        ukrainian: 'стриманий',
        example: {
            english: 'He leads an abstemious lifestyle.',
            ukrainian: 'Він веде стриманий спосіб життя.',
        },
    },
    {
        english: 'abstruse',
        ukrainian: 'загадковий',
        example: {
            english: 'The book contains abstruse concepts.',
            ukrainian: 'Книга містить загадкові концепції.',
        },
    },
    {
        english: 'accolade',
        ukrainian: 'похвала',
        example: {
            english: 'He received many accolades for his performance.',
            ukrainian: 'Він отримав багато похвал за свою виставу.',
        },
    },
    {
        english: 'affable',
        ukrainian: 'привітний',
        example: {
            english: 'He is known for his affable nature.',
            ukrainian: 'Він відомий своєю привітною натурою.',
        },
    },
    {
        english: 'affinity',
        ukrainian: 'спільність',
        example: {
            english: 'They have a strong affinity for each other.',
            ukrainian: 'Вони мають сильну спільність один з одним.',
        },
    },
    {
        english: 'affliction',
        ukrainian: 'недуга',
        example: {
            english: 'Her daughter suffers from a chronic affliction.',
            ukrainian: 'Її дочка страждає на хронічну недугу.',
        },
    },
    {
        english: 'affluent',
        ukrainian: 'заможний',
        example: {
            english: 'They live in an affluent neighborhood.',
            ukrainian: 'Вони живуть у заможному районі.',
        },
    },
    {
        english: 'alacrity',
        ukrainian: 'радість',
        example: {
            english: 'She accepted the invitation with alacrity.',
            ukrainian: 'Вона прийняла запрошення з радістю.',
        },
    },
    {
        english: 'alleviate',
        ukrainian: 'полегшити',
        example: {
            english: 'The medication helps alleviate the pain.',
            ukrainian: 'Ліки допомагають полегшити біль.',
        },
    },
    {
        english: 'ambiguous',
        ukrainian: 'неоднозначний',
        example: {
            english: 'The message was ambiguous and could be interpreted in different ways.',
            ukrainian: 'Повідомлення було неоднозначним і могло бути сприйнято різними способами.',
        },
    },
    {
        english: 'ambivalent',
        ukrainian: 'амбівалентний',
        example: {
            english: 'She felt ambivalent about the decision.',
            ukrainian: 'Вона відчувала амбівалентність стосовно рішення.',
        },
    },
    {
        english: 'amiable',
        ukrainian: 'приємний',
        example: {
            english: 'He has an amiable personality and gets along with everyone.',
            ukrainian: 'Він має приємну особистість і ладнає з усіма.',
        },
    },
    {
        english: 'animosity',
        ukrainian: 'ворожнеча',
        example: {
            english: 'There is a long history of animosity between the two families.',
            ukrainian: 'Існує довга історія ворожнечі між двома родинами.',
        },
    },
    {
        english: 'annex',
        ukrainian: 'анексувати',
        example: {
            english: 'The country decided to annex the neighboring territory.',
            ukrainian: 'Країна вирішила анексувати сусідню територію.',
        },
    },
    {
        english: 'bellicose',
        ukrainian: 'воєнний',
        example: {
            english: 'He has a bellicose attitude and always seeks conflict.',
            ukrainian: 'Він має воєнний настрій і завжди шукає конфліктів.',
        },
    },
    {
        english: 'belligerent',
        ukrainian: 'агресивний',
        example: {
            english: 'He became belligerent and started a fight.',
            ukrainian: 'Він став агресивним і почав сварку.',
        },
    },
    {
        english: 'beneficiary',
        ukrainian: 'бенефіціар',
        example: {
            english: 'She is the sole beneficiary of his will.',
            ukrainian: 'Вона є єдиним бенефіціаром його заповіту.',
        },
    },
    {
        english: 'bigot',
        ukrainian: 'фанатик',
        example: {
            english: 'He is a bigot who refuses to accept other people\'s beliefs.',
            ukrainian: 'Він є фанатиком, який відмовляється приймати переконання інших людей.',
        },
    },
    {
        english: 'bilk',
        ukrainian: 'розбагатитися',
        example: {
            english: 'He bilked people out of their money with his fraudulent schemes.',
            ukrainian: 'Він розбагатився за рахунок шахрайських схем.',
        },
    },
    {
        english: 'billow',
        ukrainian: 'хвилювати',
        example: {
            english: 'The curtains billowed in the breeze.',
            ukrainian: 'Штори хвилювалися на вітерці.',
        },
    },
    {
        english: 'blasphemy',
        ukrainian: 'богохульство',
        example: {
            english: 'His words were considered blasphemy by the religious community.',
            ukrainian: 'Його слова були вважані богохульством релігійною спільнотою.',
        },
    },
    {
        english: 'blatant',
        ukrainian: 'відкритий',
        example: {
            english: 'He showed a blatant disregard for the rules.',
            ukrainian: 'Він проявив відкрите неуважність до правил.',
        },
    },
    {
        english: 'blighted',
        ukrainian: 'погано',
        example: {
            english: 'The neighborhood was blighted by crime and poverty.',
            ukrainian: 'Цей район постраждав від злочинності та бідності.',
        },
    },
    {
        english: 'blithe',
        ukrainian: 'легкомисливий',
        example: {
            english: 'She has a blithe attitude and doesn\'t worry about anything.',
            ukrainian: 'Вона має легкомисливе ставлення і не хвилюється ні про що.',
        },
    },
    {
        english: 'blunderbuss',
        ukrainian: 'зброя',
        example: {
            english: 'He wielded a blunderbuss and scared away the intruders.',
            ukrainian: 'Він тримав зброю типу бландербас і відлякав незваного гостя.',
        },
    },
    {
        english: 'bolster',
        ukrainian: 'підсилити',
        example: {
            english: 'The new evidence bolstered his case.',
            ukrainian: 'Нові докази підсилили його справу.',
        },
    },
    {
        english: 'brazen',
        ukrainian: 'нахабний',
        example: {
            english: 'She had the brazen audacity to ask for a raise after her poor performance.',
            ukrainian: 'Вона мала нахабну наглість просити підвищення після своєї поганої роботи.',
        },
    },
    {
        english: 'brusque',
        ukrainian: 'різкий',
        example: {
            english: 'His brusque manner of speaking often offends people.',
            ukrainian: 'Його різкий спосіб спілкування часто ображає людей.',
        },
    },
    {
        english: 'capricious',
        ukrainian: 'капризний',
        example: {
            english: 'Her mood is capricious and changes frequently.',
            ukrainian: 'Її настрій капризний і часто змінюється.',
        },
    },
    {
        english: 'charisma',
        ukrainian: 'харизма',
        example: {
            english: 'He has a natural charisma that attracts people to him.',
            ukrainian: 'У нього є природна харизма, яка приваблює людей до нього.',
        },
    },
    {
        english: 'chastise',
        ukrainian: 'корегувати',
        example: {
            english: 'The teacher chastised the students for their behavior.',
            ukrainian: 'Вчитель скорегував учнів за їхню поведінку.',
        },
    },
    {
        english: 'coherent',
        ukrainian: 'зв\'язний',
        example: {
            english: 'Her arguments were clear and coherent.',
            ukrainian: 'Її аргументи були зрозумілими й зв\'язними.',
        },
    },
    {
        english: 'complicity',
        ukrainian: 'спільність',
        example: {
            english: 'He was arrested for his complicity in the crime.',
            ukrainian: 'Він був заарештований за спільність у злочині.',
        },
    },
    {
        english: 'comprehensive',
        ukrainian: 'комплексний',
        example: {
            english: 'The report provides a comprehensive analysis of the situation.',
            ukrainian: 'Звіт надає комплексний аналіз ситуації.',
        },
    },
    {
        english: 'concoct',
        ukrainian: 'вигадати',
        example: {
            english: 'He concocted a story to explain his absence.',
            ukrainian: 'Він вигадав історію, щоб пояснити свою відсутність.',
        },
    },
    {
        english: 'condone',
        ukrainian: 'допускати',
        example: {
            english: 'His silence seemed to condone their behavior.',
            ukrainian: 'Його мовчання здавалося допускати їхню поведінку.',
        },
    },
    {
        english: 'counterfeit',
        ukrainian: 'підробка',
        example: {
            english: 'They were arrested for selling counterfeit goods.',
            ukrainian: 'Їх заарештували за продаж підроблених товарів.',
        },
    },
    {
        english: 'covert',
        ukrainian: 'прихований',
        example: {
            english: 'They operated under a covert operation.',
            ukrainian: 'Вони працювали в рамках прихованої операції.',
        },
    },
    {
        english: 'cower',
        ukrainian: 'жахатися',
        example: {
            english: 'The dog cowered in fear.',
            ukrainian: 'Собака жахнулася й зігнулася від страху.',
        },
    },
    {
        english: 'creditable',
        ukrainian: 'заслужений',
        example: {
            english: 'She made a creditable effort to finish the project on time.',
            ukrainian: 'Вона зробила заслужений зусилля, щоб завершити проект вчасно.',
        },
    },
    {
        english: 'credulous',
        ukrainian: 'легковірний',
        example: {
            english: 'He is so credulous that he believes every rumor he hears.',
            ukrainian: 'Він настільки легковірний, що вірить усім чуткам, які почує.',
        },
    },
    {
        english: 'crepuscular',
        ukrainian: 'сутінковий',
        example: {
            english: 'Crepuscular animals are active during twilight.',
            ukrainian: 'Сутінкові тварини активні під час сутінків.',
        },
    },
    {
        english: 'cringe',
        ukrainian: 'відштовхуватися',
        example: {
            english: 'I cringe every time I hear her sing.',
            ukrainian: 'Я відштовхуюся кожного разу, коли чую, як вона співає.',
        },
    },
    {
        english: 'cryptic',
        ukrainian: 'загадковий',
        example: {
            english: 'The message was written in a cryptic code.',
            ukrainian: 'Повідомлення було написано загадковим кодом.',
        },
    },
    {
        english: 'enfranchise',
        ukrainian: 'надати виборче право',
        example: {
            english: 'The law enfranchised women and gave them the right to vote.',
            ukrainian: 'Закон надав жінкам виборче право і право голосу.',
        },
    },
    {
        english: 'engender',
        ukrainian: 'викликати',
        example: {
            english: 'His behavior engendered a sense of mistrust among his colleagues.',
            ukrainian: 'Його поведінка викликала почуття недовіри серед його колег.',
        },
    },
    {
        english: 'enhance',
        ukrainian: 'покращити',
        example: {
            english: 'Regular exercise can enhance your overall well-being.',
            ukrainian: 'Регулярні фізичні вправи можуть покращити вашу загальну самопочуття.',
        },
    },
    {
        english: 'ensconce',
        ukrainian: 'укрити',
        example: {
            english: 'She ensconced herself in the corner of the room.',
            ukrainian: 'Вона укрилася в кутку кімнати.',
        },
    },
    {
        english: 'enshroud',
        ukrainian: 'приховати',
        example: {
            english: 'The fog enshrouded the landscape, making it difficult to see.',
            ukrainian: 'Туман приховав пейзаж, роблячи його видимим.',
        },
    },
    {
        english: 'enunciation',
        ukrainian: 'вимова',
        example: {
            english: 'Her enunciation was so clear that everyone could understand her.',
            ukrainian: 'Її вимова була настільки чіткою, що всі могли її зрозуміти.',
        },
    },
    {
        english: 'envenom',
        ukrainian: 'отруїти',
        example: {
            english: 'The snake\'s bite can envenom its prey.',
            ukrainian: 'Укус змії може отруїти її жертву.',
        },
    },
    {
        english: 'ephemeral',
        ukrainian: 'епізодичний',
        example: {
            english: 'The beauty of the cherry blossoms is ephemeral and lasts only a few weeks.',
            ukrainian: 'Краса сакур випромінює недовгий, епізодичний період всього декілька тижнів.',
        },
    },
    {
        english: 'hamper',
        ukrainian: 'обмежити',
        example: {
            english: 'The bad weather hampered our progress.',
            ukrainian: 'Погана погода обмежувала наш прогрес.',
        },
    },
    {
        english: 'hangar',
        ukrainian: 'ангар',
        example: {
            english: 'The airplanes were stored in the hangar.',
            ukrainian: 'Літаки зберігалися в ангарі.',
        },
    },
    {
        english: 'hasten',
        ukrainian: 'поспішати',
        example: {
            english: 'We must hasten if we want to catch the train.',
            ukrainian: 'Ми повинні поспішати, якщо хочемо встигнути на поїзд.',
        },
    },
    {
        english: 'haughtiness',
        ukrainian: 'заносидність',
        example: {
            english: 'Her haughtiness made her unpopular among her colleagues.',
            ukrainian: 'Її заносидність зробила її непопулярною серед колег.',
        },
    },
    {
        english: 'headstrong',
        ukrainian: 'упертий',
        example: {
            english: 'He is a headstrong child and always wants his own way.',
            ukrainian: 'Він упертий дитина і завжди хоче йти своїм шляхом.',
        },
    },
    {
        english: 'hedonism',
        ukrainian: 'гедонізм',
        example: {
            english: 'His life was dedicated to the pursuit of hedonism.',
            ukrainian: 'Його життя було присвячене прагненню до гедонізму.',
        },
    },
    {
        english: 'kindle',
        ukrainian: 'запалювати',
        example: {
            english: 'She kindled a fire in the fireplace.',
            ukrainian: 'Вона запалила вогонь у каміні.',
        },
    },
    {
        english: 'knotty',
        ukrainian: 'складний',
        example: {
            english: 'Solving this math problem is quite knotty.',
            ukrainian: 'Вирішення цієї математичної задачі досить складне.',
        },
    },
    {
        english: 'laceration',
        ukrainian: 'поріз',
        example: {
            english: 'The deep laceration on his arm required stitches.',
            ukrainian: 'Глибокий поріз на його руці потребував швів.',
        },
    },
    {
        english: 'lachrymose',
        ukrainian: 'сльозливий',
        example: {
            english: 'The movie was so touching that it made her lachrymose.',
            ukrainian: 'Фільм був настільки торкливим, що змусив її сльозитися.',
        },
    },
    {
        english: 'lackluster',
        ukrainian: 'блідий',
        example: {
            english: 'The performance was lackluster and failed to impress the audience.',
            ukrainian: 'Виступ був блідим і не вразив аудиторію.',
        },
    },
    {
        english: 'laconic',
        ukrainian: 'лаконічний',
        example: {
            english: 'His answers were always brief and laconic.',
            ukrainian: 'Його відповіді були завжди короткими й лаконічними.',
        },
    },
    {
        english: 'lamentation',
        ukrainian: 'плач',
        example: {
            english: 'The mourners filled the air with their lamentations.',
            ukrainian: 'Плакальники наповнили повітря своїми плачами.',
        },
    },
    {
        english: 'noxious',
        ukrainian: 'отруйний',
        example: {
            english: 'The fumes from the factory were noxious and harmful to inhale.',
            ukrainian: 'Вихлопні гази з фабрики були отруйними й шкідливими для вдиху.',
        },
    },
    {
        english: 'nullify',
        ukrainian: 'анулювати',
        example: {
            english: 'The judge nullified the contract due to a breach of terms.',
            ukrainian: 'Суддя анулював контракт через порушення умов.',
        },
    },
    {
        english: 'obdurate',
        ukrainian: 'непокірний',
        example: {
            english: 'She remained obdurate and refused to change her mind.',
            ukrainian: 'Вона залишалася непокірною й відмовлялася змінювати свою думку.',
        },
    },
    {
        english: 'obfuscate',
        ukrainian: 'затуманювати',
        example: {
            english: 'His explanations only served to obfuscate the issue further.',
            ukrainian: 'Його пояснення лише додатково затуманювали проблему.',
        },
    },
    {
        english: 'objective',
        ukrainian: 'об\'єктивний',
        example: {
            english: 'She approached the topic with an objective point of view.',
            ukrainian: 'Вона підійшла до теми з об\'єктивної точки зору.',
        },
    },
    {
        english: 'oblique',
        ukrainian: 'косий',
        example: {
            english: 'He gave her an oblique look and then looked away.',
            ukrainian: 'Він кинув на неї косий погляд, а потім відвернувся.',
        },
    },
    {
        english: 'obliterate',
        ukrainian: 'викреслити',
        example: {
            english: 'The explosion obliterated the entire building.',
            ukrainian: 'Вибух викреслив увесь будинок.',
        },
    },
    {
        english: 'oblivious',
        ukrainian: 'байдужий',
        example: {
            english: 'She was completely oblivious to what was happening around her.',
            ukrainian: 'Вона була абсолютно байдужою до того, що відбувається навколо неї.',
        },
    },
    {
        english: 'placid',
        ukrainian: 'спокійний',
        example: {
            english: 'The lake was placid and reflected the surrounding mountains.',
            ukrainian: 'Озеро було спокійним і відображало навколишні гори.',
        },
    },
    {
        english: 'plaintiff',
        ukrainian: 'позивач',
        example: {
            english: 'The plaintiff presented his case to the court.',
            ukrainian: 'Позивач представив свою справу суду.',
        },
    },
    {
        english: 'plausible',
        ukrainian: 'правдоподібний',
        example: {
            english: 'Her explanation sounded plausible, but I wasn\'t entirely convinced.',
            ukrainian: 'Її пояснення звучало правдоподібно, але я не був повністю переконаний.',
        },
    },
    {
        english: 'plethora',
        ukrainian: 'багатство',
        example: {
            english: 'The store offers a plethora of options for customers.',
            ukrainian: 'Магазин пропонує безліч варіантів для покупців.',
        },
    },
    {
        english: 'pliable',
        ukrainian: 'пластичний',
        example: {
            english: 'The clay was pliable and easy to shape.',
            ukrainian: 'Глина була пластичною й легкою для формування.',
        },
    },
    {
        english: 'plumage',
        ukrainian: 'пір\'я',
        example: {
            english: 'The bird had colorful plumage.',
            ukrainian: 'У птаха було барвисте пір\'я.',
        },
    },
    {
        english: 'plummet',
        ukrainian: 'впасти',
        example: {
            english: 'The stock prices plummeted after the company\'s bankruptcy was announced.',
            ukrainian: 'Ціни на акції впали після оголошення банкрутства компанії.',
        },
    },
    {
        english: 'remuneration',
        ukrainian: 'винагорода',
        example: {
            english: 'He received a generous remuneration for his work.',
            ukrainian: 'Він отримав щедру винагороду за свою роботу.',
        },
    },
    {
        english: 'renown',
        ukrainian: 'слава',
        example: {
            english: 'The singer gained international renown for her talent.',
            ukrainian: 'Співачка здобула міжнародну славу своїм талантом.',
        },
    },
    {
        english: 'replete',
        ukrainian: 'насичений',
        example: {
            english: 'The buffet table was replete with delicious food.',
            ukrainian: 'Стіл шведського столу був насичений смачною їжею.',
        },
    },
    {
        english: 'reprieve',
        ukrainian: 'відстрочка',
        example: {
            english: 'The prisoner was granted a last-minute reprieve.',
            ukrainian: 'В\'язню було надано останню хвилину відстрочки.',
        },
    },
    {
        english: 'repudiate',
        ukrainian: 'відкидати',
        example: {
            english: 'He repudiated the allegations against him and claimed innocence.',
            ukrainian: 'Він відкинув звинувачення проти нього і стверджував свою невинність.',
        },
    },
    {
        english: 'rescind',
        ukrainian: 'відкликати',
        example: {
            english: 'The company decided to rescind the new policy due to public backlash.',
            ukrainian: 'Компанія вирішила відкликати нову політику через громадську критику.',
        },
    },
    {
        english: 'resignation',
        ukrainian: 'відставка',
        example: {
            english: 'The CEO announced his resignation from the company.',
            ukrainian: 'Генеральний директор оголосив свою відставку з компанії.',
        },
    },
    {
        english: 'resolution',
        ukrainian: 'роздільна здатність',
        example: {
            english: 'The camera has a high resolution, capturing every detail.',
            ukrainian: 'У камери висока роздільна здатність, вона фіксує кожну деталь.',
        },
    },
    {
        english: 'tangent',
        ukrainian: 'та́нгента',
        example: {
            english: 'In geometry, a tangent is a line that touches a curve at a single point.',
            ukrainian: 'У геометрії та́нгента - це лінія, що торкається кривої у одній точці.',
        },
    },
    {
        english: 'tangible',
        ukrainian: 'відчутний',
        example: {
            english: 'She wanted tangible proof of his love.',
            ukrainian: 'Вона хотіла відчутних доказів його кохання.',
        },
    },
    {
        english: 'tedium',
        ukrainian: 'нудьга',
        example: {
            english: 'The repetitive task brought on a feeling of tedium.',
            ukrainian: 'Повторювана задача викликала почуття нудьги.',
        },
    },
    {
        english: 'temper',
        ukrainian: 'характер',
        example: {
            english: 'He has a quick temper and easily gets angry.',
            ukrainian: 'У нього гарячий характер, і він легко сердиться.',
        },
    },
    {
        english: 'tenacious',
        ukrainian: 'цупкий',
        example: {
            english: 'She is a tenacious fighter who never gives up.',
            ukrainian: 'Вона - цупкий боєць, який ніколи не здається.',
        },
    },
    {
        english: 'tentative',
        ukrainian: 'попередній',
        example: {
            english: 'The agreement was tentative and subject to further negotiation.',
            ukrainian: 'Угода була попередньою й підлягала подальшим переговорам.',
        },
    },
];

export const VERBS: TData = [
    {
        english: 'back away',
        ukrainian: 'відступити назад',
        example: {
            english: 'The dog growled, causing the child to back away.',
            ukrainian: 'Собака заревіла, що змусило дитину відступити назад.',
        },
    },
    {
        english: 'be back',
        ukrainian: 'повернутися',
        example: {
            english: 'I\'ll be back in a few minutes.',
            ukrainian: 'Я повернусь через кілька хвилин.',
        },
    },
    {
        english: 'be off',
        ukrainian: 'бути відсутнім',
        example: {
            english: 'She\'s off on vacation for two weeks.',
            ukrainian: 'Вона відсутня на відпустці протягом двох тижнів.',
        },
    },
    {
        english: 'be out',
        ukrainian: 'бути поза домом',
        example: {
            english: 'He\'s out at the moment. Can I take a message?',
            ukrainian: 'Він зараз поза домом. Чи можу передати повідомлення?',
        },
    },
    {
        english: 'be over',
        ukrainian: 'завершитися',
        example: {
            english: 'The concert will be over by 10 p.m.',
            ukrainian: 'Концерт завершиться до 22:00.',
        },
    },
    {
        english: 'be up to',
        ukrainian: 'займатися, мати справу',
        example: {
            english: 'What have you been up to lately?',
            ukrainian: 'Чим ти займаєшся останнім часом?',
        },
    },
    {
        english: 'blow out',
        ukrainian: 'згасити',
        example: {
            english: 'She blew out the candles on her birthday cake.',
            ukrainian: 'Вона згасила свічки на своєму дні народження.',
        },
    },
    {
        english: 'blow up',
        ukrainian: 'вибухнути',
        example: {
            english: 'The old building was blown up to make way for a new one.',
            ukrainian: 'Стару будівлю підривали, щоб зробити місце для нової.',
        },
    },
    {
        english: 'break down',
        ukrainian: 'зламатися',
        example: {
            english: 'My car broke down on the way to work.',
            ukrainian: 'Мій автомобіль зламався на шляху до роботи.',
        },
    },
    {
        english: 'break up',
        ukrainian: 'розійтися',
        example: {
            english: 'They decided to break up after five years of dating.',
            ukrainian: 'Вони вирішили розійтися після п\'яти років знайомства.',
        },
    },
    {
        english: 'call back',
        ukrainian: 'передзвонити',
        example: {
            english: 'I missed his call, so I need to call him back.',
            ukrainian: 'Я пропустив його дзвінок, тому мені потрібно передзвонити йому.',
        },
    },
    {
        english: 'call off',
        ukrainian: 'скасувати',
        example: {
            english: 'They had to call off the meeting due to bad weather.',
            ukrainian: 'Вони змушені були скасувати зустріч через погану погоду.',
        },
    },
    {
        english: 'calm down',
        ukrainian: 'заспокоїтися',
        example: {
            english: 'Take a deep breath and try to calm down.',
            ukrainian: 'Глибоко вдихніть і спробуйте заспокоїтися.',
        },
    },
    {
        english: 'carry around',
        ukrainian: 'нести з собою',
        example: {
            english: 'She always carries around a notebook to write down her ideas.',
            ukrainian: 'Вона завжди носить з собою блокнот, щоб записувати свої ідеї.',
        },
    },
    {
        english: 'carry on',
        ukrainian: 'продовжувати',
        example: {
            english: 'They decided to carry on with the project despite the challenges.',
            ukrainian: 'Вони вирішили продовжувати проект незважаючи на труднощі.',
        },
    },
    {
        english: 'carry out',
        ukrainian: 'виконувати',
        example: {
            english: 'We need to carry out a thorough investigation.',
            ukrainian: 'Нам потрібно провести ретельне розслідування.',
        },
    },
    {
        english: 'carry over',
        ukrainian: 'перенести',
        example: {
            english: 'You can carry over your unused vacation days to the next year.',
            ukrainian: 'Ви можете перенести невикористані дні відпустки на наступний рік.',
        },
    },
    {
        english: 'check in',
        ukrainian: 'реєструватися',
        example: {
            english: 'Please check in at the front desk upon arrival.',
            ukrainian: 'Будь ласка, зареєструйтесь на стійці реєстрації по прибутті.',
        },
    },
    {
        english: 'clean up',
        ukrainian: 'прибирати',
        example: {
            english: 'Let\'s clean up the house before the guests arrive.',
            ukrainian: 'Давайте приберемо будинок, перш ніж прийдуть гості.',
        },
    },
    {
        english: 'come across',
        ukrainian: 'натрапити',
        example: {
            english: 'I came across an interesting article while browsing the internet.',
            ukrainian: 'Я натрапив на цікаву статтю, переглядаючи інтернет.',
        },
    },
    {
        english: 'come along',
        ukrainian: 'приходити разом',
        example: {
            english: 'Why don\'t you come along with us to the concert?',
            ukrainian: 'Чому б тобі не прийти разом з нами на концерт?',
        },
    },
    {
        english: 'come from',
        ukrainian: 'походити з',
        example: {
            english: 'He comes from a small town in the countryside.',
            ukrainian: 'Він походить з маленького містечка на селі.',
        },
    },
    {
        english: 'come in',
        ukrainian: 'увійти',
        example: {
            english: 'Please come in and make yourself at home.',
            ukrainian: 'Будь ласка, увійдіть і почуйте себе, як вдома.',
        },
    },
    {
        english: 'come off',
        ukrainian: 'відбутися',
        example: {
            english: 'The event will come off as planned.',
            ukrainian: 'Подія відбудеться, як заплановано.',
        },
    },
    {
        english: 'come on',
        ukrainian: 'пошевелитися',
        example: {
            english: 'Come on, we\'re going to be late!',
            ukrainian: 'Пошевелись, ми запізнимося!',
        },
    },
    {
        english: 'come over',
        ukrainian: 'завітати',
        example: {
            english: 'Why don\'t you come over for dinner tonight?',
            ukrainian: 'Чому б тобі не завітати сьогодні ввечері на вечерю?',
        },
    },
    {
        english: 'count on',
        ukrainian: 'рахувати на',
        example: {
            english: 'You can always count on her to help you.',
            ukrainian: 'Ви завжди можете розраховувати на неї, щоб допомогти вам.',
        },
    },
    {
        english: 'cut off',
        ukrainian: 'відрізати',
        example: {
            english: 'The driver cut me off on the highway.',
            ukrainian: 'Водій відірвав мене на автостраді.',
        },
    },
    {
        english: 'end up',
        ukrainian: 'закінчити',
        example: {
            english: 'I thought I would become a doctor, but I ended up being a teacher.',
            ukrainian: 'Я думав, що стану лікарем, але виявився вчителем.',
        },
    },
    {
        english: 'figure out',
        ukrainian: 'зрозуміти',
        example: {
            english: 'I can\'t figure out how to solve this math problem.',
            ukrainian: 'Я не можу зрозуміти, як вирішити цю математичну задачу.',
        },
    },
    {
        english: 'find out',
        ukrainian: 'дізнатися',
        example: {
            english: 'I need to find out the time of the train departure.',
            ukrainian: 'Мені потрібно дізнатися час відправлення поїзда.',
        },
    },
    {
        english: 'get around',
        ukrainian: 'пересуватися',
        example: {
            english: 'She uses public transportation to get around the city.',
            ukrainian: 'Вона користується громадським транспортом, щоб пересуватися по місту.',
        },
    },
    {
        english: 'get back',
        ukrainian: 'повернутися',
        example: {
            english: 'I\'ll get back to you with an answer as soon as possible.',
            ukrainian: 'Я повернусь до вас з відповіддю якнайшвидше.',
        },
    },
    {
        english: 'get down',
        ukrainian: 'спуститися',
        example: {
            english: 'Careful! Don\'t get down from the ladder too quickly.',
            ukrainian: 'Уважно! Не спускайтесь зі сходівки занадто швидко.',
        },
    },
    {
        english: 'get on',
        ukrainian: 'сісти',
        example: {
            english: 'Let\'s get on the bus before it gets too crowded.',
            ukrainian: 'Давайте сідати в автобус, перш ніж стане дуже людно.',
        },
    },
    {
        english: 'get out',
        ukrainian: 'вийти',
        example: {
            english: 'Get out of the car and walk the last few blocks.',
            ukrainian: 'Вийдіть з машини і пройдіть останні кілька кварталів пішки.',
        },
    },
    {
        english: 'get over',
        ukrainian: 'пережити',
        example: {
            english: 'It took her a long time to get over her breakup.',
            ukrainian: 'Їй знадобилося багато часу, щоб пережити розставання.',
        },
    },
    {
        english: 'get up',
        ukrainian: 'підніматися',
        example: {
            english: 'I usually get up at 7 AM on weekdays.',
            ukrainian: 'Зазвичай я піднімаюся о 7 годині ранку по буднях.',
        },
    },
    {
        english: 'give up',
        ukrainian: 'покинути',
        example: {
            english: 'Don\'t give up, keep trying until you succeed.',
            ukrainian: 'Не здавайся, продовжуй намагатися, поки не досягнеш успіху.',
        },
    },
    {
        english: 'go away',
        ukrainian: 'відійти',
        example: {
            english: 'Please go away and leave me alone.',
            ukrainian: 'Будь ласка, піди геть і залиш мене у спокої.',
        },
    },
    {
        english: 'go in',
        ukrainian: 'входити',
        example: {
            english: 'You can go in now, the meeting is about to start.',
            ukrainian: 'Ви можете заходити, зустріч скоро почнеться.',
        },
    },
    {
        english: 'go on',
        ukrainian: 'траплятися',
        example: {
            english: 'What\'s going on? Why is there so much noise?',
            ukrainian: 'Що відбувається? Чому такий галас?',
        },
    },
    {
        english: 'go out',
        ukrainian: 'вийти',
        example: {
            english: 'Let\'s go out for dinner tonight.',
            ukrainian: 'Давайте сьогодні ввечері підемо на вечерю.',
        },
    },
    {
        english: 'go through',
        ukrainian: 'пройти через',
        example: {
            english: 'She\'s going through a difficult time right now.',
            ukrainian: 'Вона переживає важкий час зараз.',
        },
    },
    {
        english: 'go up',
        ukrainian: 'підніматися',
        example: {
            english: 'The price of gasoline is going up again.',
            ukrainian: 'Ціна на бензин знову піднімається.',
        },
    },
    {
        english: 'grow up',
        ukrainian: 'вирости',
        example: {
            english: 'When I grow up, I want to be a firefighter.',
            ukrainian: 'Коли я виросту, я хочу бути пожежником.',
        },
    },
    {
        english: 'hang up',
        ukrainian: 'положити трубку',
        example: {
            english: 'I need to hang up now, I\'ll call you back later.',
            ukrainian: 'Мені зараз потрібно повісити трубку, я вам перезвоню пізніше.',
        },
    },
    {
        english: 'hold out',
        ukrainian: 'триматися',
        example: {
            english: 'We held out hope until the very end.',
            ukrainian: 'Ми тримались надії до самого кінця.',
        },
    },
    {
        english: 'hold up',
        ukrainian: 'затримати',
        example: {
            english: 'Sorry I\'m late, I was held up in traffic.',
            ukrainian: 'Вибачте за запізнення, мене затримали в пробці.',
        },
    },
    {
        english: 'keep up',
        ukrainian: 'тримати ритм',
        example: {
            english: 'You need to keep up with the latest trends.',
            ukrainian: 'Вам потрібно триматися в курсі останніх тенденцій.',
        },
    },
    {
        english: 'let in',
        ukrainian: 'впустити',
        example: {
            english: 'Can you let me in? I forgot my keys.',
            ukrainian: 'Можете мене впустити? Я забув ключі.',
        },
    },
    {
        english: 'let out',
        ukrainian: 'випустити',
        example: {
            english: 'Please let the dog out into the backyard.',
            ukrainian: 'Будь ласка, випустіть собаку на заднє подвір\'я.',
        },
    },
    {
        english: 'lie down',
        ukrainian: 'лежати',
        example: {
            english: 'I\'m going to lie down for a few minutes and rest.',
            ukrainian: 'Я ляжу на декілька хвилин і відпочину.',
        },
    },
    {
        english: 'look for',
        ukrainian: 'шукати',
        example: {
            english: 'I need to look for my lost keys.',
            ukrainian: 'Мені потрібно шукати свої загублені ключі.',
        },
    },
    {
        english: 'look forward to',
        ukrainian: 'очікувати з нетерпінням',
        example: {
            english: 'I\'m looking forward to our vacation next month.',
            ukrainian: 'З нетерпінням чекаю нашого відпустки наступного місяця.',
        },
    },
    {
        english: 'look out',
        ukrainian: 'бути обережним',
        example: {
            english: 'Look out! There\'s a car coming.',
            ukrainian: 'Будьте обережні! Їде машина.',
        },
    },
    {
        english: 'look over',
        ukrainian: 'переглядати',
        example: {
            english: 'Please look over this document and make any necessary changes.',
            ukrainian: 'Будь ласка, перегляньте цей документ і внесіть необхідні зміни.',
        },
    },
    {
        english: 'make up',
        ukrainian: 'вигадувати',
        example: {
            english: 'Don\'t make up stories to impress people.',
            ukrainian: 'Не вигадуйте історії, щоб вразити людей.',
        },
    },
    {
        english: 'move in',
        ukrainian: 'переїхати',
        example: {
            english: 'They\'re planning to move in together next month.',
            ukrainian: 'Вони планують переїхати разом наступного місяця.',
        },
    },
    {
        english: 'move on',
        ukrainian: 'рухатися далі',
        example: {
            english: 'It\'s time to move on and start a new chapter in your life.',
            ukrainian: 'Прийшов час рухатися далі і розпочати нову главу в своєму житті.',
        },
    },
    {
        english: 'pick up',
        ukrainian: 'підібрати',
        example: {
            english: 'Can you pick up some groceries on your way home?',
            ukrainian: 'Можете підібрати кілька продуктів у дорозі додому?',
        },
    },
    {
        english: 'point out',
        ukrainian: 'вказати',
        example: {
            english: 'She pointed out the mistake in the report.',
            ukrainian: 'Вона вказала на помилку в звіті.',
        },
    },
    {
        english: 'pull on',
        ukrainian: 'потягнути',
        example: {
            english: 'She pulled on the rope to open the curtain.',
            ukrainian: 'Вона потягнула за мотузку, щоб відкрити занавіску.',
        },
    },
    {
        english: 'pull up',
        ukrainian: 'зупинитися',
        example: {
            english: 'The taxi pulled up to the curb.',
            ukrainian: 'Таксі зупинилося біля тротуару.',
        },
    },
    {
        english: 'put away',
        ukrainian: 'прибрати',
        example: {
            english: 'After dinner, please put away the dishes.',
            ukrainian: 'Після обіду, будь ласка, приберіть посуд.',
        },
    },
    {
        english: 'put down',
        ukrainian: 'покласти',
        example: {
            english: 'He put down the book and stood up.',
            ukrainian: 'Він поклав книгу і встав.',
        },
    },
    {
        english: 'put in',
        ukrainian: 'вставити',
        example: {
            english: 'Please put in a new lightbulb.',
            ukrainian: 'Будь ласка, вставте нову лампочку.',
        },
    },
    {
        english: 'put on',
        ukrainian: 'надіти',
        example: {
            english: 'Don\'t forget to put on your coat before going outside.',
            ukrainian: 'Не забудьте надіти пальто перед виходом на вулицю.',
        },
    },
    {
        english: 'put up',
        ukrainian: 'розмістити',
        example: {
            english: 'We can put up the guests in the spare bedroom.',
            ukrainian: 'Ми можемо розмістити гостей в запасній спальні.',
        },
    },
    {
        english: 'run away',
        ukrainian: 'втекти',
        example: {
            english: 'The dog ran away when the door was left open.',
            ukrainian: 'Собака втекла, коли двері залишили відчиненими.',
        },
    },
    {
        english: 'run into',
        ukrainian: 'зустріти',
        example: {
            english: 'I ran into an old friend at the grocery store.',
            ukrainian: 'Я зустрів старого друга в супермаркеті.',
        },
    },
    {
        english: 'run off',
        ukrainian: 'втікати',
        example: {
            english: 'The robbers ran off when they heard the police sirens.',
            ukrainian: 'Злодії втекли, коли почули сирени поліції.',
        },
    },
    {
        english: 'set down',
        ukrainian: 'поставити',
        example: {
            english: 'Please set the groceries down on the kitchen counter.',
            ukrainian: 'Будь ласка, поставте продукти на кухонний стіл.',
        },
    },
    {
        english: 'settle down',
        ukrainian: 'усісти',
        example: {
            english: 'The children need to settle down and focus on their homework.',
            ukrainian: 'Діти повинні усістися і сконцентруватися на домашніх завданнях.',
        },
    },
    {
        english: 'show up',
        ukrainian: 'з\'явитися',
        example: {
            english: 'He didn\'t show up for the meeting.',
            ukrainian: 'Він не з\'явився на зустріч.',
        },
    },
    {
        english: 'shut down',
        ukrainian: 'вимкнути',
        example: {
            english: 'The computer shut down unexpectedly.',
            ukrainian: 'Комп\'ютер вимкнувся несподівано.',
        },
    },
    {
        english: 'shut up',
        ukrainian: 'замкнутися',
        example: {
            english: 'I wish he would shut up and stop talking.',
            ukrainian: 'Я бажаю, щоб він замкнувся і перестав говорити.',
        },
    },
    {
        english: 'sit down',
        ukrainian: 'усісти',
        example: {
            english: 'Please sit down and make yourself comfortable.',
            ukrainian: 'Будь ласка, усідьте і почуйте себе комфортно.',
        },
    },
    {
        english: 'sit up',
        ukrainian: 'підійматися',
        example: {
            english: 'He sat up in bed and reached for his glasses.',
            ukrainian: 'Він підійнявся в ліжку і дістав окуляри.',
        },
    },
    {
        english: 'spread out',
        ukrainian: 'розташувати',
        example: {
            english: 'Let\'s spread out the picnic blanket and have lunch.',
            ukrainian: 'Давайте розкладемо пікнік покривало і пообідаємо.',
        },
    },
    {
        english: 'stand by',
        ukrainian: 'бути на зв\'язку',
        example: {
            english: 'Please stand by for further instructions.',
            ukrainian: 'Будь ласка, будьте на зв\'язку для отримання подальших інструкцій.',
        },
    },
    {
        english: 'stand up',
        ukrainian: 'встати',
        example: {
            english: 'Everyone stood up when the bride entered the room.',
            ukrainian: 'Всі встали, коли наречена увійшла в кімнату.',
        },
    },
    {
        english: 'switch on',
        ukrainian: 'увімкнути',
        example: {
            english: 'Can you switch on the lights, please?',
            ukrainian: 'Можете увімкнути світло, будь ласка?',
        },
    },
    {
        english: 'take away',
        ukrainian: 'забрати',
        example: {
            english: 'I\'ll take away the empty plates after you finish eating.',
            ukrainian: 'Я заберу порожні тарілки, коли ви закінчите їсти.',
        },
    },
    {
        english: 'take back',
        ukrainian: 'повернути',
        example: {
            english: 'I need to take back this book to the library.',
            ukrainian: 'Мені потрібно повернути цю книгу до бібліотеки.',
        },
    },
    {
        english: 'take off',
        ukrainian: 'злітати',
        example: {
            english: 'The plane will take off in ten minutes.',
            ukrainian: 'Літак злітає через десять хвилин.',
        },
    },
    {
        english: 'take on',
        ukrainian: 'взяти на себе',
        example: {
            english: 'She\'s taking on more responsibilities at work.',
            ukrainian: 'Вона бере на себе більше відповідальності на роботі.',
        },
    },
    {
        english: 'take out',
        ukrainian: 'вийняти',
        example: {
            english: 'Can you take out the trash, please?',
            ukrainian: 'Можете вийняти сміття, будь ласка?',
        },
    },
    {
        english: 'take over',
        ukrainian: 'перехопити',
        example: {
            english: 'The new manager will take over the department next month.',
            ukrainian: 'Новий менеджер перехопить департамент наступного місяця.',
        },
    },
    {
        english: 'turn into',
        ukrainian: 'перетворитися',
        example: {
            english: 'The caterpillar will turn into a butterfly.',
            ukrainian: 'Гусінь перетвориться на метелика.',
        },
    },
    {
        english: 'turn off',
        ukrainian: 'вимкнути',
        example: {
            english: 'Don\'t forget to turn off the lights before you leave.',
            ukrainian: 'Не забудьте вимкнути світло перед виходом.',
        },
    },
    {
        english: 'turn on',
        ukrainian: 'увімкнути',
        example: {
            english: 'Please turn on the television.',
            ukrainian: 'Будь ласка, увімкніть телевізор.',
        },
    },
    {
        english: 'turn out',
        ukrainian: 'виявитися',
        example: {
            english: 'The event turned out to be a great success.',
            ukrainian: 'Захід виявився великим успіхом.',
        },
    },
    {
        english: 'turn over',
        ukrainian: 'перевернути',
        example: {
            english: 'Can you please turn over the page?',
            ukrainian: 'Будь ласка, переверніть сторінку.',
        },
    },
    {
        english: 'wake up',
        ukrainian: 'прокинутися',
        example: {
            english: 'I usually wake up at 7 a.m.',
            ukrainian: 'Зазвичай я прокидаюся о 7 ранку.',
        },
    },
    {
        english: 'walk in',
        ukrainian: 'увійти',
        example: {
            english: 'He walked in without knocking on the door.',
            ukrainian: 'Він увійшов, не стукнувши у двері.',
        },
    },
    {
        english: 'walk over',
        ukrainian: 'підійти',
        example: {
            english: 'Can you walk over to the store and buy some milk?',
            ukrainian: 'Можете підійти до магазину і купити трохи молока?',
        },
    },
    {
        english: 'work up',
        ukrainian: 'збудувати',
        example: {
            english: 'I need to work up the courage to ask for a promotion.',
            ukrainian: 'Мені потрібно набратися мужності, щоб попросити підвищення.',
        },
    },
    {
        english: 'write down',
        ukrainian: 'записати',
        example: {
            english: 'Don\'t forget to write down your appointment in the calendar.',
            ukrainian: 'Не забудьте записати свою зустріч у календар.',
        },
    },
];
