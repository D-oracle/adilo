<template>
  <router-view></router-view>
</template>

<script>
// import Preview from './Preview.vue'
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // Preview,
    // HelloWorld
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

body {
    font-family: Poppins;
    /* color: #444444; */
  }
  
  a {
    /* color: #4154f1; */
    text-decoration: none;
  }
  
  a:hover {
    /* color: #717ff5; */
    text-decoration: none;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: "Nunito", sans-serif;
  }
  
  /*--------------------------------------------------------------
  # Sections
  --------------------------------------------------------------*/
  
  .section-header {
    text-align: center;
    padding-bottom: 40px;
  }
  
  .form-switch {
    padding-left: 0.5em;
  }
  
  .section-header h2 {
    font-size: 13px;
    letter-spacing: 1px;
    font-weight: 700;
    margin: 0;
    /* color: #4154f1; */
    text-transform: uppercase;
  }
  
  .section-header p {
    margin: 10px 0 0 0;
    padding: 0;
    font-size: 38px;
    line-height: 42px;
    font-weight: 700;
    /* color: #012970; */
  }
  
  @media (max-width: 768px) {
    .section-header p {
      font-size: 28px;
      line-height: 32px;
    }
  }
  
  /*--------------------------------------------------------------
  # Header
  --------------------------------------------------------------*/
  .header {
    transition: all 0.5s;
    z-index: 997;
    padding: 10px 0;
  }
  
  .header.header-scrolled {
    background: #fff;
    /* padding: 15px 0; */
    /* box-shadow: 0px 2px 20px rgba(1, 41, 112, 0.1); */
  }
  
  .header .logo {
    line-height: 0;
  }
  
  .header .logo img {
    max-height: 40px;
    /* margin-right: 6px; */
  }
  
  .header .logo span {
    font-size: 30px;
    font-weight: 700;
    letter-spacing: 1px;
    /* color: #012970; */
    font-family: "Nunito", sans-serif;
    margin-top: 3px;
  }
  
  /*--------------------------------------------------------------
  # Navigation Menu
  --------------------------------------------------------------*/
  /**
  * Desktop Navigation 
  */
  .navbar {
    padding: 0;
  }
  
  .navbar ul {
    margin: 0;
    padding: 0;
    display: flex;
    list-style: none;
    align-items: center;
  }
  
  .navbar li {
    position: relative;
  }
  
  .nav-link {
    color: black!important;
    margin-left: auto;
    margin-right: auto;
  }
  
  .nav-item {
    padding-left: 35px;
    padding-right: 35px;
  }
  
  .vl {
    border-left: 1px solid black;
    height: 40px;
  }
  
  .navbar a, .navbar a:focus {
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* padding: 10px 0 10px 30px; */
    margin-left: auto;
    margin-right: auto;
    font-family: "Nunito", sans-serif;
    font-size: 16px;
    font-weight: 700;
    white-space: nowrap;
    transition: 0.3s;
  }
  
  .navbar a i, .navbar a:focus i {
    font-size: 12px;
    line-height: 0;
    /* margin-left: 5px; */
  }
  
  .active {
    border-top: 2px solid #4154f1;
    /* padding-top: -20px; */
    color: black!important;
  }
  
  .navbar .dropdown ul {
    display: block;
    position: absolute;
    left: 14px;
    top: calc(100% + 30px);
    margin: 0;
    padding: 10px 0;
    z-index: 99;
    color: black;
    opacity: 0;
    visibility: hidden;
    background: #fff;
    box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
    transition: 0.3s;
    border-radius: 4px;
  }
  
  .navbar .dropdown ul li {
    min-width: 200px;
  }
  
  .sidepanel {
    /* border: 1px solid #399be1; */
    top: 9px;
    left: 0px;
    width: 356px;
    height: 870px;
    /* UI Properties */
    background: #f1f3f5 0% 0% no-repeat padding-box;
    /* opacity: 0.3; */
  }
  
  .sidemenu {
    top: 8px;
    left: 18px;
    width: 276px;
    height: 53px;
    color: black;
    /* UI Properties */
    border-radius: 10px;
    /* opacity: 1; */
  }
  
  .activemenu {
    top: 127px;
    /* left: 18px; */
    width: 236px;
    color: black;
    height: 53px;
    background: #bdc1ca 0% 0% no-repeat padding-box;
    border: 1px solid #0DABD838;
    border-radius: 10px;
  }
  
  .navbar .dropdown ul a {
    padding: 10px 20px;
    font-size: 15px;
    text-transform: none;
    color: black;
    font-weight: 600;
  }
  
  .navbar .dropdown ul a i {
    font-size: 12px;
    color: black;
  }
  
  .navbar .dropdown:hover > ul {
    opacity: 1;
    top: 100%;
    visibility: visible;
  }
  
  .navbar .dropdown .dropdown ul {
    top: 0;
    left: calc(100% - 30px);
    visibility: hidden;
  }
  
  .navbar .dropdown .dropdown:hover > ul {
    opacity: 1;
    top: 0;
    left: 100%;
    visibility: visible;
  }
  
  @media (max-width: 1366px) {
    .navbar .dropdown .dropdown ul {
      left: -90%;
    }
    .navbar .dropdown .dropdown:hover > ul {
      left: -100%;
    }
  }
  
  @media (max-width: 991px) {
    .mobile-nav-toggle {
      display: block;
    }
    .navbar ul {
      display: none;
    }
  }
  
  .list-item {
    padding: 15px;
    margin: 20px;
  }
  
</style>
