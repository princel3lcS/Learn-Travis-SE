<template>
  <div class='hello'>
    <section class="hero is-dark is-large is-fullheight">
      <div class="hero">
        <div class="container">
          <br>
          <div class="columns">
            <div class="column is-5 box">
              <div class="columns">
                <div class="column is-3">
                  <label class="title is-4" style="color : #0080ff;">Name </label>
                </div><br>
                <div class="column is-9">
                  <input type="text" name="" value="" class="input" v-model="newUser.Name">
                </div>
              </div>
              <div class="columns">
                <div class="column is-3">
                  <label class="title is-4" style="color : #0080ff;">LName </label>
                </div>
                <div class="column is-9">
                  <input type="text" name="" value="" class="input" v-model="newUser.lastName">
                </div>
              </div>
              <div class="columns">
                <div class="column is-3">
                  <label class="title is-4" style="color : #0080ff;">Tel </label>
                </div>
                <div class="column is-9">
                  <input type="text" name="" value="" class="input" v-model="newUser.Tel">
                </div>
              </div>
              <div class="columns">
                <div class="column is-3">
                  <label class="title is-5" style="color : #0080ff;">Nickname </label>
                </div>
                <div class="column is-9">
                  <input type="text" name="" value="" class="input" v-model="newUser.nickName">
                </div>
              </div>
              <div class="columns is-centered" style="padding : 0px 0px 16px 0px">
                <button @click="add()"type="button" name="button" class="button is-success is-large">เพิ่ม</button>
              </div>
            </div>
            <div class="column is-7 box" style="margin-left : 16px; background-color : #00D1BB;">
              <div class="column is-3 box"  v-for="u in User" style="float : left; margin : 10px;">
                เทส->ชื่อ : {{u.Name}} <br>
                นามสกุล : {{u.lastName}} <br>
                เบอร์ : {{u.Tel}} <br>
                ชื่อเล่น : {{u.nickName}} <br>
                <button type="button" @click="del(u)" name="button" class="button is-small is-danger is-centered">ลบ</button>
              </div>
            </div>
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
      msg: 'Welcome to Your Vue.js App',
      newUser: {
        Name: '',
        lastName: '',
        Tel: '',
        nickName: ''
      },
      A: ''
    }
  },
  methods: {
    add () {
      userRef.push(this.newUser)
      this.newUser.Name = ''
      this.newUser.lastName = ''
      this.newUser.Tel = ''
      this.newUser.nickName = ''
    },
    del (u) {
      userRef.child(u['.key']).remove()
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
