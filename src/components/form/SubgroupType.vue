<template>
    <v-select
            v-model="val"
            label="Name"
            :reduce="option => option.Id"
            :options="options"
            placeholder="Подгруппа"
    />
</template>

<script>
    import {SUBGROUP_OPTIONS} from '@/util/consts';

    export default {
        name: 'SubgroupType',
        props: ['value'],
        data: () => ({
            options: SUBGROUP_OPTIONS,
        }),
        computed: {
            val: {
                get() {
                    return this.value;
                },
                set(value) {
                    this.$emit('input', value);
                },
            },
        },
    }
</script>
