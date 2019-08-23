<template>
  <div class="topbar">
    <div class="loggedout_menubar">
      <img class="image-resize" src="@/assets/facebok.png" alt="facebook-text">
      <div class="login_enterfrom">
        <div class="menu logon_button">
          <button><strong>Log In</strong></button>
        </div>
        <div class="menu text">
          Password
          <div class="input"><input placeholder="  Password"></div>
          <div class="sub">Forgotten account?</div>
        </div>
        <div class="menu text">
          Email or Phone
          <div class="input"><input placeholder="  Email or Phone"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped lang="scss">
.topbar {
  width: calc(100% + 1.5em);
  height: 7.75em;
  background-image: linear-gradient(to top, #3b5998, #4e71ba);
  margin: -1em;
  overflow:hidden;
}
.loggedout_menubar {
  width:85em;
  padding-top: 1em;
  margin: 0 auto;
  height: 77.8px;
  padding-left: 1em;
}
.image-resize {
  position: absolute;
  clip: rect(0px ,21em, 7.1em,0px);
  float:left;
  width: 14.7em;
  margin: -2em;
  padding-left: 1.7em;
  padding-top: 4.15em;
}

.menu {
  float: right;
  padding-top: 0.8em;
  color: white;
}

.menu:first-child {
  padding-left: 1em;
}

.menu:last-child {
  padding-right: 1em;
}

.text {
  font-family:"lucida grande",tahoma,verdana,arial,sans-serif;
  font-size: 1em
}
.sub {
  color:#9cb4d8;
}

.logon_button {
  padding-top: 2.4em;
}
button {
  height: 2em;
  font-size: 1em;
  width: 4.5em;
  background-color: rgb(78, 113, 186);
  border: 1px solid  rgb(47, 71, 122);
  border-radius: 3px;
  color: white;
}
.input {
  padding-top: 0.5em;
}
input {
  border: 1px solid black;
  height: 2.25em;
  width: 15.9em;
  background-color: rgb(232, 240, 254)
}
</style>
