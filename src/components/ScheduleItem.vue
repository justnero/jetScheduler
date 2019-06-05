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
                console.log(this.lesson);
            },
        },
    }
</script>

<style lang="scss">
    .time-slot {
        border: 1px solid #000;
        text-align: center;

        &.active {

        }
    }
</style>

