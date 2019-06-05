<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark" v-if="$route.name !== 'login'">
        <div class="container">
            <a class="navbar-brand" href="#">
                <img src="@/assets/logo.png" height="30"
                     class="d-inline-block align-top" alt="">
                Расписание
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">Главная</router-link>
                    </li>

                    <li class="nav-item">
                        <router-link class="nav-link" to="/schedule">Таблица</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'NavBar',
    };
</script>

<style>
    .navbar {
        margin-bottom: 60px;
    }
</style>
