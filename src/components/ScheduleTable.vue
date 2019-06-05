<template>
    <table class="schedule-table">
        <thead>
        <tr>
            <td colspan="2">День</td>
            <td v-for="slot in timeSlots" :key="slot.Id" colspan="2">{{ slot.Start.substr(0, 5) }}-{{ slot.End.substr(0, 5) }}</td>
        </tr>
        </thead>
        <tbody>
        <ScheduleRow
                v-for="row in schedule"
                :key="row.id"
                :day="row.day"
                :parity="row.parity"
                :row="row"/>
        </tbody>
    </table>
</template>

<script>
    import ScheduleRow from "@/components/ScheduleRow";

    export default {
        name: 'ScheduleTable',
        props: ['schedule', 'timeSlots'],
        components: {
            ScheduleRow,
        },
    }
</script>

<style>
    .schedule-table {
        border-spacing: 0;
        border-collapse: collapse;
    }
    .schedule-table td {
        border: 1px solid #000;
    }
</style>
