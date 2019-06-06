<template>
    <b-modal
            id="schedule-form"
            size="lg"
            :title="title"
            @show="reset"
            @ok="save">
        <form class="text-center" @submit.prevent="save" v-if="!isLoading">
            <label for="input-weekParity" class="sr-only">Чет/нечет</label>
            <WeekParity v-model="weekParity" id="input-weekParity"/>

            <label for="input-day" class="sr-only">День недели</label>
            <Day v-model="day" id="input-day"/>

            <label for="input-scheduleTime" class="sr-only">Время</label>
            <ScheduleTime v-model="scheduleTime" :housing="housing" id="input-scheduleTime"/>

            <label for="input-subject" class="sr-only">Предмет</label>
            <Subjects v-model="subject" id="input-subject"/>

            <label for="input-lessonType" class="sr-only">Тип занятия</label>
            <LessonType v-model="lessonType" id="input-lessonType"/>

            <label for="input-teachers" class="sr-only">Преподаватель</label>
            <Teachers v-model="teacher" id="input-teachers"/>

            <label for="input-audience" class="sr-only">Аудитория</label>
            <Audience v-model="audience" :housing="housing" id="input-audience"/>

            <label for="input-subgroupType" class="sr-only">Подгруппа</label>
            <SubgroupType v-model="subgroupType" id="input-subgroupType"/>
        </form>
        <div class="row" v-if="isLoading">
            <div class="col text-center">
                <div class="spinner-border text-primary" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
        </div>
        <template slot="modal-footer" slot-scope="{ ok, cancel }">
            <b-button size="sm" variant="success" @click="save">Сохранить</b-button>
            <b-button size="sm" variant="secondary" @click="cancel()">Отменить</b-button>
            <b-button size="sm" variant="danger" @click="remove" v-if="id">Удалить</b-button>
        </template>
    </b-modal>
</template>

<script>
    import WeekParity from '@/components/form/WeekParity';
    import Day from '@/components/form/Day';
    import LessonType from '@/components/form/LessonType';
    import Teachers from '@/components/form/Teachers';
    import Audience from '@/components/form/Audience';
    import SubgroupType from '@/components/form/SubgroupType';
    import {API_BASE} from "@/util/consts";
    import Subjects from "@/components/form/Subjects";
    import ScheduleTime from "@/components/form/ScheduleTime";

    export default {
        name: 'ScheduleForm',
        components: {ScheduleTime, Subjects, SubgroupType, Audience, Teachers, LessonType, Day, WeekParity},
        props: ['id', 'housing', 'group'],
        data: () => ({
            weekParity: 1,
            day: 0,
            scheduleTime: 0,
            lessonType: 1,
            subject: null,
            teacher: null,
            audience: 0,
            subgroupType: 1,
            isLoading: false,
        }),
        computed: {
            title() {
                if (this.id) {
                    return 'Редактирование';
                } else {
                    return 'Добавление';
                }
            },
            schedule() {
                return {
                    Id: this.id,
                    WeekParity: this.weekParity,
                    Day: this.day,
                    ScheduleTimeId: this.scheduleTime.Id,
                    SubjectId: this.subject.Id,
                    LessonType: this.lessonType,
                    GroupId: this.group.Id,
                    TeacherId: this.teacher.Id,
                    AudienceId: this.audience.Id,
                    SubgroupType: this.subgroupType,
                };
            },
        },
        methods: {
            load() {
                if (this.id) {
                    this.isLoading = true;
                    fetch(`${API_BASE}/schedules/${this.id}`)
                        .then(response => response.json())
                        .then(data => this.populate(data));
                }
            },
            populate(data) {
                this.weekParity = data.WeekParity;
                this.day = data.Day;
                this.scheduleTime = data.ScheduleTime;
                this.subject = data.Subject;
                this.lessonType = data.LessonType;
                this.teacher = data.Teacher;
                this.audience = data.Audience;
                this.subgroupType = data.SubgroupType;

                this.isLoading = false;
            },
            save() {
                fetch(this.id ? `${API_BASE}/schedules/${this.id}` : `${API_BASE}/schedules`, {
                    method: this.id ? 'PUT' : 'POST',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(this.schedule),
                })
                    .then(() => {
                        this.$emit('reload-schedule');
                        this.$bvModal.hide('schedule-form');
                    });
            },
            remove() {
                if (!this.id) {
                    return;
                }

                fetch(`${API_BASE}/schedules/${this.id}`, {
                    method: 'DELETE',
                    credentials: 'include',
                })
                    .then(() => {
                        this.$emit('reload-schedule');
                        this.$bvModal.hide('schedule-form');
                    });
            },
            reset() {
                this.weekParity = 1;
                this.day = 0;
                this.lessonType = 1;
                this.subgroupType = 1;
                this.scheduleTime = null;
                this.subject = null;
                this.teacher = null;
                this.audience = null;

                this.load();
            },
        },
    }
</script>

<style scoped>
    .v-select {
        margin-bottom: 15px;
    }
</style>
