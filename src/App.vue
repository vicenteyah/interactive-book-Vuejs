<template>
  <!--class="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar"-->
  <header>
    <nav class="navbar navbar-dark bg-dark">
      <a class="navbar-brand" href="#">
        <img src="../src/assets/logo.png" width="60" height="60" class="d-inline-block align-top mx-5" loading="lazy">
        <a class="navbar-brand mx-3 my-2">HuasTechnology</a>
      </a>
      <form class="form-inline my-2 my-lg-0">
        <button class="btn btn-outline-success btn-lg my-2 mx-0" type="submit">Sign in</button>
        <button class="btn btn-outline-success btn-lg my-2 mx-5" @click="$router.push('/SignUp')">Sign up</button>
      </form>
    </nav>
    <main class="bd-masthead" id="content" role="main">
    <div class="container my-5">
      <div class="row">
        <div class="col-6 mx-auto col-md-4 order-md-2 my-5"></div>
        <div class="col-md-8 order-md-1 text-center text-md-left pr-md-5 my-4">
          <h1 class="mb-3">Welcome to HuasTechnology</h1>
          <h3>Las y los mexicanos de 1° y 2° de primaria podrán disfrutar y conocer actividades que los ayudarán en su aprendizaje</h3>
          <div class="d-flex flex-column flex-md-row my-4">
            <button type="button" class="btn btn-secondary btn-lg">Sign in</button>
          </div>
        </div>
      </div>
    </div>
  </main>
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

