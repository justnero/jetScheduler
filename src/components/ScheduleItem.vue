<template>
    <td :class="['time-slot', {active: active}]" @click="click">
        {{ label }}
    </td>
</template>

<script>
    export default {
        name: 'ScheduleItem',
        props: ['lesson'],
        computed: {
            label() {
                return this.lesson.Id === -1 ? '–' : this.lesson.Subject.Name;
            },
            active() {
                return false;
            },
        },
        methods: {
            click() {
                this.$emit('open-form', this.lesson.Id === -1 ? null : this.lesson.Id);
                // this.$bvModal.show('schedule-form');
            },
        },
    }
</script>

<style lang="scss">
    .time-slot {
        border-left: 1px solid rgba(60, 60, 60, 0.26);
        text-align: center;

        &.active {

        }
    }
</style>

