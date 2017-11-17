<template>
  <div class='hello'>
    <section class="hero is-dark is-large">
      <div class="hero-body">
        <div class="container">
          <div class="columns">

          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Firebase from 'firebase'
var config = {
  apiKey: 'AIzaSyAvPUgACNsdm67jybvqj8uqhEEZ3P6jpus',
  authDomain: 'diary-d4514.firebaseapp.com',
  databaseURL: 'https://diary-d4514.firebaseio.com',
  projectId: 'diary-d4514',
  storageBucket: 'diary-d4514.appspot.com',
  messagingSenderId: '949443692997'
}
let app = Firebase.initializeApp(config)
let db = app.database()
let userRef = db.ref('User')
export default {
  name: 'HelloWorld',
  firebase: {
    User: userRef
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
