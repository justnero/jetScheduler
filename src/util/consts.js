export const API_BASE = 'https://sevsuschedule.somee.com/api';

export const DAYS = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

export const DAY_NAMES = {
    'monday': 'Понедельник',
    'tuesday': 'Вторник',
    'wednesday': 'Среда',
    'thursday': 'Четверг',
    'friday': 'Пятница',
    'saturday': 'Суббота',
    'sunday': 'Воскресенье',
};

export const PARITY = ['odd', 'even'];

export const PARITY_NAMES = {
    'odd': 'Нечет',
    'even': 'Чет',
};

export const PARITY_OPTIONS = [
    {
        Id: 1,
        Name: 'Нечет',
    },
    {
        Id: 2,
        Name: 'Чет',
    },
];

export const DAY_OPTIONS = [
    {
        Id: 0,
        Name: 'Понедельник',
    },
    {
        Id: 1,
        Name: 'Вторник',
    },
    {
        Id: 2,
        Name: 'Среда',
    },
    {
        Id: 3,
        Name: 'Четверг',
    },
    {
        Id: 4,
        Name: 'Пятница',
    },
    {
        Id: 5,
        Name: 'Суббота',
    },
    {
        Id: 6,
        Name: 'Воскресенье',
    },
];

export const SUBGROUP_OPTIONS = [
    {
        Id: 1,
        Name: 'Все',
    },
    {
        Id: 2,
        Name: 'Первая',
    },
    {
        Id: 3,
        Name: 'Вторая',
    },
];

export const LESSON_OPTIONS = [
    {
        Id: 1,
        Name: 'Лекция',
    },
    {
        Id: 2,
        Name: 'Практика',
    },
    {
        Id: 3,
        Name: 'Семинар',
    },
    {
        Id: 4,
        Name: 'Лабораторная',
    },
];
