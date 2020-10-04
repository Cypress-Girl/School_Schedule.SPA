const weekday = [
    {name: "ПОНЕДЕЛЬНИК", title: "ПН"},
    {name: "ВТОРНИК", title: "ВТ"},
    {name: "СРЕДА", title: "СР"},
    {name: "ЧЕТВЕРГ", title: "ЧТ"},
    {name: "ПЯТНИЦА", title: "ПТ"},
    {name: "СУББОТА", title: "СБ"},
    {name: "ВОСКРЕСЕНЬЕ", title: "ВС"}
]

const SUB_ALGEBRA = "Алгебра";
const SUB_GEOMETRY = "Геометрия";
const SUB_RUSSIAN = "Русский язык";
const SUB_LITERATURE = "Литература";
const SUB_GEOGRAPHY = "География";
const SUB_HISTORY = "История";
const SUB_PE = "Физ-ра";
const SUB_SOCIAL = "Обществознание";
const SUB_BIOLOGY = "Биология";
const SUB_ENGLISH = "Английский язык";
const SUB_COMPUTER = "Информатика";
const SUB_PHYSICS = "Физика";
const SUB_TECHNOLOGY = "Технология";
const SUB_NATIVE_LANG = "Родной язык";
const SUB_MUSIC = "Музыка";
const SUB_ART = "ИЗО";
const SUB_OPEN_PE = "Внеурочка физ-ра";
const SUB_OPEN_MATHS = "Внеурочка математика";

const WED_DAY = 2;
const FRI_DAY = 4;
const SUT_DAY = 5;
const SUN_DAY = 6;

const TYPE_SCHEDULE_SCHOOl = 0;
const TYPE_SCHEDULE_ADD_CLASS = 1;
const TYPE_SCHEDULE_SUMMARY = 2;

const lessonTime = [
    "13:10 - 13:50",
    "14:00 - 14:40",
    "14:55 - 15:35",
    "15:40 - 16:20",
    "16:25 - 17:05",
    "17:10 - 17:50",
    "17:55 - 18:35"
]

const schedule = [
    {"first": 1, "subjects": [SUB_ALGEBRA, SUB_GEOGRAPHY, SUB_HISTORY, SUB_PE, SUB_RUSSIAN, SUB_LITERATURE]},
    {"first": 0, "subjects": [SUB_SOCIAL, SUB_BIOLOGY, SUB_GEOMETRY, SUB_ENGLISH, SUB_ALGEBRA, SUB_COMPUTER, SUB_OPEN_PE]},
    {"first": 0, "subjects": [SUB_RUSSIAN, SUB_PHYSICS, SUB_LITERATURE, SUB_ALGEBRA, SUB_GEOMETRY, SUB_GEOGRAPHY]},
    {"first": 0, "subjects": [SUB_OPEN_MATHS, SUB_PE, SUB_ENGLISH, SUB_TECHNOLOGY, SUB_TECHNOLOGY, SUB_NATIVE_LANG, SUB_NATIVE_LANG]},
    {"first": 0, "subjects": [SUB_MUSIC, SUB_ENGLISH, SUB_ALGEBRA, SUB_RUSSIAN, SUB_HISTORY, SUB_ART, SUB_PHYSICS]},
]

const scheduleArt = [
    {day: SUT_DAY, time: "15:00 - 18:00"},
    {day: SUN_DAY, time: "10:00 - 13:00"}
]

const scheduleEnglish = [
    {day: WED_DAY, time: "20:00 - 21:00"},
    {day: FRI_DAY, time: "20:00 - 21:00"}
]

export {weekday, lessonTime, schedule, scheduleArt, scheduleEnglish, TYPE_SCHEDULE_ADD_CLASS, TYPE_SCHEDULE_SCHOOl, TYPE_SCHEDULE_SUMMARY};