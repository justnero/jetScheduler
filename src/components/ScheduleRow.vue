<template>
    <tr>
        <th scope="rowgroup" v-if="parity === 'odd'" rowspan="2">{{ dayName }}</th>
        <th scope="row">{{ typeName }}</th>
        <ScheduleCell
                v-for="timeSlot in row.slots"
                :key="timeSlot.id"
                :timeSlot="timeSlot"
                :parity="parity"
                @open-form="openForm"/>
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
        methods: {
            openForm(id) {
                this.$emit('open-form', id);
            },
        },
    }
</script>
