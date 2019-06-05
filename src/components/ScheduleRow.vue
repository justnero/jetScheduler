<template>
    <tr>
        <td v-if="parity === 'odd'" rowspan="2">{{ dayName }}</td>
        <td>{{ typeName }}</td>
        <ScheduleCell
                v-for="timeSlot in row.slots"
                :key="timeSlot.id"
                :timeSlot="timeSlot"
                :parity="parity"/>
    </tr>
</template>

<script>
    import ScheduleCell from "@/components/ScheduleCell";
    import {DAY_NAMES} from "@/util/consts";
    import {PARITY_NAMES} from "../util/consts";

    export default {
        name: 'ScheduleRow',
        components: {
            ScheduleCell,
        },
        props: ['day', 'parity', 'row'],
        computed: {
            dayName() {
                return DAY_NAMES[this.day];
            },
            typeName() {
                return PARITY_NAMES[this.parity];
            },
        },
    }
</script>
