<template>
  <b-navbar toggleable="sm" type="light" variant="light">
    <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

    <b-navbar-brand class="px-3">
      <router-link :to="{ name: 'moviesearch' }" class="no-text-decoration"
        >{{Constant.HeaderName}}</router-link
      ></b-navbar-brand
    >

    <b-collapse id="nav-text-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-text
          ><router-link :to="{ name: 'moviesearch' }" class="no-text-decoration"
            >{{Constant.SubHeaderName}}</router-link
          ></b-nav-text
        >
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "Header",
};
</script>