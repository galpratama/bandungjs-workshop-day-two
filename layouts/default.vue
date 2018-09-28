<template>
  <div>
    <b-navbar toggleable="md" type="light" style="border-bottom: 1px solid #eee;">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand nuxt :to="'/'">👨‍💻 BelajarNuxt</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav>
          <b-nav-item nuxt :to="'/'">Blog</b-nav-item>
          <b-nav-item nuxt :to="'/about'">About</b-nav-item>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>

    <!-- navbar-1.vue -->
    <nuxt/>
  </div>
</template>

<style>
.container {
  margin-top: 2em;
  font-family: 'Merriweather', serif;
  line-height: 1.7rem;
  color: #46494c;
}

.container img {
  width: 100%;
}
</style>


