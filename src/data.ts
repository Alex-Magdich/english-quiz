export type TExample = {
    english: string;
    ukrainian: string;
}

export type TDataItem = {
    english: string;
    ukrainian: string;
    example: TExample;
}
export type TData = Array<TDataItem>

export const VOCABULARY:TData = [
    {
        english: "addiction",
        ukrainian: "залежність",
        example: {
            english: "He struggled with drug addiction for years.",
            ukrainian: "Він боровся з наркотичною залежністю протягом років."
        }
    },
    {
        english: "habit",
        ukrainian: "звичка",
        example: {
            english: "Drinking coffee in the morning is a common habit for many people.",
            ukrainian: "Пити каву вранці - це поширена звичка для багатьох людей."
        }
    },
    {
        english: "harmless",
        ukrainian: "безшкідний",
        example: {
            english: "Playing with toys is a harmless activity for children.",
            ukrainian: "Гратися з іграшками - безшкідна діяльність для дітей."
        }
    },
    {
        english: "annoy",
        ukrainian: "дратувати",
        example: {
            english: "The constant noise from the construction site annoyed the residents.",
            ukrainian: "Постійний шум з будівельного майданчика дратував мешканців."
        }
    },
    {
        english: "substance",
        ukrainian: "речовина",
        example: {
            english: "This drink contains harmful substances.",
            ukrainian: "У цьому напої містяться шкідливі речовини."
        }
    },
    {
        english: "gain",
        ukrainian: "набути",
        example: {
            english: "He worked hard to gain the trust of his colleagues.",
            ukrainian: "Він наполегливо працював, щоб набути довіру колег."
        }
    },
    {
        english: "solve",
        ukrainian: "вирішити",
        example: {
            english: "We need to solve this problem as soon as possible.",
            ukrainian: "Ми повинні вирішити цю проблему якнайшвидше."
        }
    },
    {
        english: "gambling",
        ukrainian: "гральний",
        example: {
            english: "He has a gambling addiction and has lost a lot of money.",
            ukrainian: "У нього є гральна залежність, і він втратив багато грошей."
        }
    },
    {
        english: "consuming",
        ukrainian: "споживання",
        example: {
            english: "Excessive alcohol consuming can lead to health problems.",
            ukrainian: "Надмірне споживання алкоголю може призвести до проблем зі здоров'ям."
        }
    },
    {
        english: "embarrassing",
        ukrainian: "соромно",
        example: {
            english: "It was embarrassing to trip and fall in front of everyone.",
            ukrainian: "Було соромно спотикнутися й упасти перед усіма."
        }
    },
    {
        english: "according",
        ukrainian: "згідно",
        example: {
            english: "According to the weather forecast, it will rain tomorrow.",
            ukrainian: "Згідно з прогнозом погоди, завтра буде дощ."
        }
    },
    {
        english: "consider",
        ukrainian: "розглядати",
        example: {
            english: "They will consider your proposal at the next meeting.",
            ukrainian: "Вони розглянуть вашу пропозицію на наступному засіданні."
        }
    }
];