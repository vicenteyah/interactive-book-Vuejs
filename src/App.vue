<template>
  <!--class="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar"-->
  <header>
    <nav class="navbar navbar-dark bg-dark">
      <a class="navbar-brand" href="#">
        <img src="../src/assets/logo.png" width="60" height="60" class="d-inline-block align-top mx-5" loading="lazy">
        <a class="navbar-brand mx-3 my-2">HuasTechnology</a>
      </a>
      <form class="form-inline my-2 my-lg-0">
        <router-link class="btn btn-outline-success btn-lg my-2 mx-5" to="/SignIn">Sign In</router-link>
        <router-link class="btn btn-outline-success btn-lg my-2 mx-5" to="/SignUp">Sign up</router-link>
        <router-link class="btn btn-outline-success btn-lg my-2" to="/Dashboard">Dasboard</router-link>
      </form>
    </nav>
    <div>
      <router-view/>
    </div>
  </header>
</template>

<style>
.navbar-brand{
  font-family: 'sans-serif';
  font-size: 25px;
  color: #FFFFFF;
}
.mb-3{
  font-family: sans-serif;
  font-size: 80px;
}
body{
  border: 0;
  margin: 0;
  padding: 0;
  font-family: "Lato";
  height: 100%; /*Agarra el tamaño total de la pantalla */
  background: #E91E63;
  background: linear-gradient(
    to right,
    rgba(44,62,80,0.74),
    rgba(66,185,131,0.59),
    rgba(44,62,80,0.74)
  );
}
</style>

