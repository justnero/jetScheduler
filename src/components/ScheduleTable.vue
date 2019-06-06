<template>
    <table class="schedule-table table table-striped">
        <thead class="thead-dark">
        <tr>
            <th scope="col" colspan="2">День</th>
            <th scope="colgroup" v-for="slot in timeSlots" :key="slot.Id" colspan="2">{{ slot.Start.substr(0, 5) }}<br>{{
                slot.End.substr(0, 5) }}
            </th>
        </tr>
        </thead>
        <tbody>
        <ScheduleRow
                v-for="row in schedule"
                :key="row.id"
                :day="row.day"
                :parity="row.parity"
                :row="row"
                @open-form="openForm"/>
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
        methods: {
            openForm(id) {
                this.$emit('open-form', id);
            },
        },
    }
</script>
