<template>
  <div class="main_body">
    <div class="contentarea">
      <div class="firsthalf">
        <strong>Facebook helps you connect and share with the people in your life.</strong>
        <img class="map-resize" src="@/assets/map.png" alt="map-image">
      </div>
      <div class="secondhalf">
        <h1>Create an account</h1>
        <p>It's quick and easy.</p>
        <div class="create">
          <input class="half-size create-input" placeholder="First name">
          <input class="half-size create-input" placeholder="Surname">
          <input class="create-input" placeholder="Mobile number or email adress">
          <input class="create-input" placeholder="New password">
          <div class="birthday">
            <div class="lower-right">
              Birthday
            </div>
            <select class="selection date-day">
              <option>Day</option>
              <option v-for="day in 31">{{(day)}}</option>
            </select>
            <select class="selection date-month">
              <option>Month</option>
              <option>Jan</option>
              <option>Feb</option>
              <option>Mar</option>
              <option>Apr</option>
              <option>May</option>
              <option>Jun</option>
              <option>Jul</option>
              <option>Aug</option>
              <option>Sep</option>
              <option>Oct</option>
              <option>Nov</option>
              <option>Dec</option>
            </select>
            <select class="selection date-year">
              <option>Year</option>
              <option v-for="year in 115">{{-1 * (year - 2020)}}</option>
            </select>
            <img class="question-resize" src="@/assets/modifiedquestionmark.png" alt="question-mark">
          </div>
          <div>
            <div class="lower-right">
              Gender
            </div>
            <input class="gendercheck" type="checkbox" name="female" value="female">
            <div class="gender female">
              Female
            </div>
            <input class="gendercheck" type="checkbox" name="male" value="male">
            <div class="gender male">
              Male
            </div>
            <input class="gendercheck" type="checkbox" name="custom" value="custom">
            <div class="gender custom">
              Custom
            </div>
            <img class="question-resize last" src="@/assets/modifiedquestionmark.png" alt="question-mark">
            <div class="sign-up-text">
              By clicking Sign Up, you agree to our <a>Terms</a>. Learn how we collect, use and share your data in our <a>Data Policy</a> and how we use cookies and similar technology in our <a>Cookie Policy</a>. You may receive SMS notifications from us and can opt out at any time.
            </div>
            <button class="sign-up">Sign Up</button>
            <div class="create-a-page">
              <a>Create a Page</a> for a celebrity, band or business.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.main_body {
  height: 54.1em;
  width: calc(100% + 1.5em);
  margin-left: -0.5em;
  margin-right: -1em;
  margin-top: 1em;
  background-image: linear-gradient(to top,#D3D8E8, white); 
  overflow: hidden;
}
.contentarea {
  width: 87em;
  margin: 0 auto;
}
.firsthalf {
  float: left;
  width: calc(60% - 5em);
  height: 54em;
  margin-right: 4em;
  padding-top: 2em;
  padding-left: 0.40em;
  word-spacing: -0.05em;
  font-size: 1.73em;
  line-height: 1.45em;
  color: #0e385f;
  font-family:"lucida grande",tahoma,verdana,arial,sans-serif;
}
.secondhalf {
  float: left;
  width: 40%;
  height: 54em;
  margin-left: -0.05em;
  padding-top: 0.6em;
  font-size: 1.55em;
  line-height: 1em;
  color: #333;
  font-family:"lucida grande",tahoma,verdana,arial,sans-serif;
}
.map-resize {
 width: 26.9em;
 height: 9.75em;
 margin-top: 0em;
}
p {
  font-size: 1.05em;
}
.create {
  padding-top: 0.28em;
}
.create-input {
  width: 21.7em;
  max-width: 35em;
  float: left;
  margin-bottom: 0.5em;
  height: 2.05em;
  border-radius: 5px;
  border: 1px solid #bdc7d8;
  padding-left: 0.5em;
  font-size: 1em;
}
.half-size {
  float: left;
  width: calc((21.5em / 2) - 0.5em);
}
.half-size:first-child {
  margin-right: 0.58em;
}
.birthday {
  padding-top: 1em;
  height: 10em;
}
.lower-right {
  font-size: 0.9em;
  color: #90949c;
  font-weight: bold;
  float: left;
  width: 100%;
  padding-top: 0.75em;
  padding-bottom: 0.45em;
}
.selection {
  float: left;
  height: 2.4em;
  padding-left: 0.5em;
  padding-right: 0.8em;
  background-color: white;
  border: 1px solid #ccd0d5;
  font-size: 0.7em;
}
.date-month {
  padding-left: 0.6em;
  padding-right: 1em;
}
.question-resize {
  float: left;
  object-fit: contain;
  width: 1.2em;
  height: 1.3em;
  margin-left: 0.4em;
  margin-top: 0.2em;
}
.gendercheck {
  float: left;
  margin: 1em;
}
.gender {
  float: left;
  padding-top: 0.45em;
  margin-left: -0.1em;
  padding-right: 0.9em;
}
.male {
  margin-right: -0.25em;
}
.last {
  margin-left: 0.25em;
}
.sign-up-text {
  color: #777;
  float: left;
  font-size: 0.63em;
  line-height: 1.3em;
  padding-top: 1.1em;
  width: 28em;
}
a {
  color: #385898;
}
.sign-up {
  float: left;
  margin-top: 1.15em;
  width: 10.36em;
  height: 2.1em;
  font-weight: bold;
  font-size: 1.05em;
  font: Arial;
  cursor: pointer;
  background: linear-gradient(#67ae55, #578843);
  background-color: #69a74e;
  box-shadow: inset 0 1px 1px #a4e388;
  border: 1px solid;
  border-color: #3b6e22 #3b6e22 #2c5115;
  border-radius: 7px;
  color: #fff;
  text-shadow: 0 1px 2px rgba(0,0,0,.5);
}
.create-a-page {
  float: left;
  padding-top: 2.7em;
  font-size: 0.72em; 
  font-weight: bold;
  border-top: 1px solid #dddfe2;
  color: #666;
}
</style>