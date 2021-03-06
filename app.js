Vue.component("greeting", {
  template:
    '<p>Hey there, I am a {{name}}. <button class="badge badge-success btn btn-default btn-small" v-on:click="changeName">CHange Name</button></p>',
  data: function() {
    return {
      name: "Jeff"
    };
  },
  methods: {
    changeName: function() {
      this.name = "Mike";
    }
  }
});
new Vue({
  el: "#app",
  data: {
    name: "Shaun",
    Job: "Software Engineer",
    website: "http://nazirnoori.blog",
    email: "",
    password: ""
  },
  methods: {
    greet: function(name) {
      return "Welcome to  " + name + "'s portfolio.";
    }
  }
});
// Here is a new instance of vue
new Vue({
  el: "#app2",
  data: {
    point: 0,
    name: "Shaun"
  },
  methods: {
    greet: function(time) {
      return "Good " + time + " " + this.name;
    },
    add: function(inc) {
      this.point += inc;
    },
    sub: function(dec) {
      this.point -= dec;
      if (this.point <= 0) {
        alert("You can't give shaun a negative point.");
        this.point++;
      }
    }
  }
});

// New instance
var app3 = new Vue({
  el: "#app3",
  data: {
    title: "Conditionals!",
    error: false,
    success: false
  },
  methods: {}
});

new Vue({
  el: "#app4",
  data: {
    title: "Looping: v-for",
    names: ["Nazir", "Bashir", "Farshad", "Shadab"],
    details: [
      { name: "nazir", age: 25 },
      { name: "Bashir", age: 25 },
      { name: "Farshad", age: 26 },
      { name: "Shadab", age: 15 }
    ]
  },
  methods: {
    myMethod: function() {
      return app3.title;
    }
  }
});
