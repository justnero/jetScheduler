<template>
    <fragment>
        <schedule-item
                v-for="lesson in timeSlot.lessons"
                :key="lesson.Id"
                :lesson="lesson"
                :colspan="colspan"
                @open-form="openForm"/>
    </fragment>
</template>

<script>
    import ScheduleItem from '@/components/ScheduleItem';

    export default {
        name: 'ScheduleCell',
        components: {ScheduleItem},
        props: ['timeSlot', 'day', 'parity'],
        computed: {
            colspan() {
                const {lessons} = this.timeSlot;

                return lessons.length === 2 ? 1 : 2;
            },
        },
        methods: {
            openForm(id) {
                this.$emit('open-form', id !== null ? id : {
                    timeSlot: this.timeSlot,
                    day: this.day,
                    parity: this.parity,
                });
            },
        },
    }
</script>
