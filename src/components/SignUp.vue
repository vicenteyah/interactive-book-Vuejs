<template>
<div class="container">
<div class="row my-5">
    <div class="col-sm">
      
    </div>
<div class="card"  style="width: 38rem;">
  <div class="card-body">
    <form>
        <div class="form-group">
            <label for="exampleInputName">Name</label>
            <input type="Name" class="form-control" id="exampleInputName" aria-describedby="NamelHelp">
        </div>
        <div class="form-group col-md-4">
            <label for="inputState">Gender</label>
            <select id="inputState" class="form-control">
            <option selected>Choose...</option>
            <option>Female</option>
            <option>Male</option>
        </select>
        </div>
        <div class="form-group">
            <label for="exampleInputInstitution">Institution</label>
            <input type="institition" class="form-control" id="exampleInputInstitution" aria-describedby="InstitutonlHelp">
        </div>
        <div class="form-group">
            <label for="exampleInputStudiesLevel">Studies level</label>
            <input type="StudiesLevel" class="form-control" id="exampleInputStudiesLevel" aria-describedby="StudiesLevellHelp">
        </div>
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1">
        </div>
        <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Sign In</button>
    </form>
  </div>
</div>
    <div class="col-sm">

    </div>
</div>  
</div>
</template>
