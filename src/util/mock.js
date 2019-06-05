export const ScheduleTimes = [
    {
        "Id": 3,
        "HousingId": 1,
        "NumberLesson": 1,
        "Start": "08:30:00",
        "End": "10:00:00"
    },
    {
        "Id": 4,
        "HousingId": 1,
        "NumberLesson": 2,
        "Start": "10:10:00",
        "End": "11:40:00"
    },
    {
        "Id": 5,
        "HousingId": 1,
        "NumberLesson": 3,
        "Start": "11:50:00",
        "End": "13:20:00"
    },
    {
        "Id": 6,
        "HousingId": 1,
        "NumberLesson": 4,
        "Start": "14:00:00",
        "End": "15:30:00"
    },
    {
        "Id": 7,
        "HousingId": 1,
        "NumberLesson": 5,
        "Start": "15:40:00",
        "End": "17:10:00"
    },
    {
        "Id": 8,
        "HousingId": 1,
        "NumberLesson": 6,
        "Start": "17:20:00",
        "End": "18:50:00"
    }
];

export const Lessons = [
    {
        "Id": 1,
        "WeekParity": 1,
        "Day": 0,
        "ScheduleTime": {
            "Id": 3,
            "Housing": null,
            "NumberLesson": 5,
            "Start": "15:40:00",
            "End": "17:10:00"
        },
        "Subject": {
            "Id": 1,
            "Name": "Рефакторинг ПО"
        },
        "LessonType": 1,
        "Group": {
            "Id": 1,
            "Housing": null,
            "Name": "ИС/б-41о"
        },
        "Teacher": {
            "Id": 1,
            "Name": "Кротов Кирилл Викторович"
        },
        "Audience": {
            "Id": 1,
            "Housing": null,
            "Name": "779"
        },
        "SubgroupType": 1
    },
    {
        "Id": 2,
        "WeekParity": 1,
        "Day": 1,
        "ScheduleTime": {
            "Id": 4,
            "Housing": null,
            "NumberLesson": 5,
            "Start": "15:40:00",
            "End": "17:10:00"
        },
        "Subject": {
            "Id": 1,
            "Name": "Рефакторинг ПО"
        },
        "LessonType": 1,
        "Group": {
            "Id": 1,
            "Housing": null,
            "Name": "ИС/б-41о"
        },
        "Teacher": {
            "Id": 1,
            "Name": "Кротов Кирилл Викторович"
        },
        "Audience": {
            "Id": 1,
            "Housing": null,
            "Name": "779"
        },
        "SubgroupType": 1
    },
    {
        "Id": 4,
        "WeekParity": 1,
        "Day": 3,
        "ScheduleTime": {
            "Id": 3,
            "Housing": null,
            "NumberLesson": 1,
            "Start": "08:30:00",
            "End": "10:00:00"
        },
        "Subject": {
            "Id": 1,
            "Name": "Рефакторинг ПО"
        },
        "LessonType": 1,
        "Group": {
            "Id": 1,
            "Housing": null,
            "Name": "ИС/б-41о"
        },
        "Teacher": {
            "Id": 1,
            "Name": "Кротов Кирилл Викторович"
        },
        "Audience": {
            "Id": 1,
            "Housing": null,
            "Name": "779"
        },
        "SubgroupType": 2
    },
    {
        "Id": 5,
        "WeekParity": 2,
        "Day": 4,
        "ScheduleTime": {
            "Id": 3,
            "Housing": null,
            "NumberLesson": 1,
            "Start": "08:30:00",
            "End": "10:00:00"
        },
        "Subject": {
            "Id": 1,
            "Name": "Рефакторинг ПО"
        },
        "LessonType": 1,
        "Group": {
            "Id": 1,
            "Housing": null,
            "Name": "ИС/б-41о"
        },
        "Teacher": {
            "Id": 1,
            "Name": "Кротов Кирилл Викторович"
        },
        "Audience": {
            "Id": 1,
            "Housing": null,
            "Name": "779"
        },
        "SubgroupType": 2
    },
    {
        "Id": 6,
        "WeekParity": 2,
        "Day": 3,
        "ScheduleTime": {
            "Id": 3,
            "Housing": null,
            "NumberLesson": 1,
            "Start": "08:30:00",
            "End": "10:00:00"
        },
        "Subject": {
            "Id": 2,
            "Name": "Управление данными"
        },
        "LessonType": 1,
        "Group": {
            "Id": 1,
            "Housing": null,
            "Name": "ИС/б-41о"
        },
        "Teacher": {
            "Id": 1,
            "Name": "Кротов Кирилл Викторович"
        },
        "Audience": {
            "Id": 1,
            "Housing": null,
            "Name": "779"
        },
        "SubgroupType": 3
    }
];

export const Subjects = [
    {
        "Id": 1,
        "Name": "Рефакторинг ПО"
    },
    {
        "Id": 2,
        "Name": "Управление данными"
    },
    {
        "Id": 9,
        "Name": "ТСПП"
    }
];

export const Groups = [
    {
        "Id": 1,
        "HousingId": 1,
        "Name": "ИС/б-41о"
    },
    {
        "Id": 2,
        "HousingId": 1,
        "Name": "ИС/б-41о"
    },
    {
        "Id": 3,
        "HousingId": 1,
        "Name": "ИС/б-41о"
    },
    {
        "Id": 4,
        "HousingId": 1,
        "Name": "ИС/б-41о"
    }
];

export const Housings = [
    {
        "Id": 1,
        "Name": "Университетская 33"
    }
];

export const Teachers = [
    {
        "Id": 1,
        "Name": "Кротов Кирилл Викторович"
    }
];
