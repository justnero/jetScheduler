<template>
    <v-select
            v-model="val"
            label="Name"
            :options="groups"
            :reduce="group => group.Id"
            placeholder="Группа"
    />
</template>

<script>
    import {API_BASE} from '@/util/consts';

    export default {
        name: 'Groups',
        props: ['value', 'housing'],
        data: () => ({
            groups: [],
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
            // groups() {
            //     if(!this.housing){
            //         return this.groupsRaw;
            //     }
            //
            //     return this.groupsRaw.filter(group => group.HousingId === this.housing);
            // },
        },
        mounted() {
            this.load();
        },
        methods: {
            load() {
                fetch(`${API_BASE}/groups?housingId=${this.housing}`, {credentials: 'include'})
                    .then(response => response.json())
                    .then(data => this.groups = data);
            },
        },
    }
</script>
