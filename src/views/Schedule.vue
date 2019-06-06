<template>
    <fragment>
        <div class="container">
            <div class="row">
                <div class="col">
                    <Housings v-model="housing"/>
                </div>
                <div class="col" v-if="housing">
                    <Groups v-model="group"/>
                </div>
            </div>
            <div class="row mt-5" v-if="housing && group && !isLoading">
                <div class="col text-center">
                    <ScheduleTable :schedule="schedule"
                                   :time-slots="scheduleTimes"
                                   @open-form="openForm"/>
                </div>
            </div>
            <div class="row mt-5" v-if="isLoading">
                <div class="col text-center">
                    <div class="spinner-border text-primary" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            </div>
        </div>
        <ScheduleForm :id="formId"
                      :housing="housingObject"
                      :group="groupObject"
                      @reload-schedule="load()"/>
    </fragment>
</template>

<script>
    import ScheduleTable from '@/components/ScheduleTable';
    import {API_BASE, DAYS, PARITY} from '@/util/consts';
    import Groups from '@/components/form/Groups';
    import Housings from '@/components/form/Housing';
    import ScheduleForm from "@/components/ScheduleForm";

    export default {
        name: 'schedule',
        components: {
            ScheduleForm,
            Housings,
            Groups,
            ScheduleTable,
        },
        data: () => ({
            formId: null,
            housing: null,
            group: null,
            scheduleRaw: [],
            isLoading: false,
        }),
        watch: {
            group() {
                this.scheduleRaw = [];
                this.load();
            },
        },
        computed: {
            schedule() {
                let schedule = {};
                for (let i = 0; i < 7; i++) {
                    for (let l = 0; l <= 1; l++) {
                        const day = DAYS[i];
                        const parity = PARITY[l];
                        const id = `${day}-${parity}`;
                        const slots = {};

                        this.scheduleTimes.forEach(slot => {
                            slots[slot.Id] = {
                                id: slot.Id,
                                time: `${slot.Start.substr(0, 5)}-${slot.End.substr(0, 5)}`,
                                lessons: [
                                    {'Id': -1},
                                ],
                            };
                        });

                        schedule[id] = {id, day, parity, slots};
                    }
                }

                this.scheduleRaw.forEach(lesson => {
                    const day = DAYS[lesson.Day];
                    const parity = PARITY[lesson.WeekParity - 1];
                    const scheduleId = `${day}-${parity}`;
                    const slot = lesson.ScheduleTime.Id;

                    if (schedule[scheduleId].slots[slot]) {
                        if (lesson.SubgroupType === 1) {
                            schedule[scheduleId].slots[slot].lessons = [lesson];
                        } else {
                            if (schedule[scheduleId].slots[slot].lessons.length === 1) {
                                schedule[scheduleId].slots[slot].lessons = [{Id: -1}, {Id: -1}];
                            }

                            schedule[scheduleId].slots[slot].lessons[lesson.SubgroupType - 2] = lesson;
                        }
                    }
                });

                return schedule;
            },
        },
        asyncComputed: {
            async scheduleTimes() {
                if (!this.housing) {
                    return [];
                }

                return fetch(`${API_BASE}/scheduletimes?housingId=${this.housing}`)
                    .then(response => response.json());
            },
            async housingObject() {
                if (!this.group) {
                    return {};
                }

                return fetch(`${API_BASE}/housings/${this.group}`)
                    .then(response => response.json());
            },
            async groupObject() {
                if (!this.group) {
                    return {};
                }

                return fetch(`${API_BASE}/groups/${this.group}`)
                    .then(response => response.json());
            },
        },
        methods: {
            load() {
                if (this.housing && this.group) {
                    this.isLoading = true;
                    fetch(`${API_BASE}/schedules?groupId=${this.group}`)
                        .then(response => response.json())
                        .then(data => {
                            this.scheduleRaw = data;
                            this.isLoading = false;
                        });
                }
            },
            openForm(id) {
                this.formId = id;
                setTimeout(() => this.$bvModal.show('schedule-form'), 1);
            },
        },
    }
</script>
