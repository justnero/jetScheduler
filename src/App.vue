<template>
    <div id="app">
        <NavBar/>
        <router-view @signin="signin"/>
    </div>
</template>

<script>
    import NavBar from '@/components/NavBar';
    import {API_BASE} from '@/util/consts';

    export default {
        name: 'App',
        components: {
            NavBar,
        },
        data: () => ({
            isAuthorized: false,
        }),
        watch: {
            isAuthorized() {
                this.checkAuthorization();
            },
        },
        methods: {
            checkAuthorization() {
                if (!this.isAuthorized) {
                    this.$router.push({name: 'login'});
                } else if (this.$route.name === 'login') {
                    this.$router.push({name: 'home'});
                }
            },
            signin({email, password, remember}) {
                console.log(email, password, remember);
                fetch(`${API_BASE}/auth`, {
                    method: 'POST',
                    // mode: 'no-cors',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        Email: email,
                        Password: password,
                        RememberMe: remember ? '1' : '0',
                    }),
                })
                    .then(response => response.json())
                    .then(data => {
                        if (data === 'Success') {
                            this.isAuthorized = true;
                        }
                    })
            },
        },
        mounted() {
            this.checkAuthorization();
            this.$router.beforeEach(() => this.checkAuthorization());
        },
    }
</script>

<style>
    #app {
        height: 100%;
    }
</style>
