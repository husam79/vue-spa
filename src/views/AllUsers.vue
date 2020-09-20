<template>
  <div class="container">
    <div class="row">
      <h2>All Users</h2>
      <button style="margin-left:16px;" class="btn btn-primary" @click="getData()">Retrieve</button>
    </div>
    <hr />
    <div class="row" v-for="usr in users" v-bind:key="usr.username">
      <div class="col-2">{{usr.username}}</div>
      <div class="col-4">{{usr.firstname}} {{usr.lastname}}</div>
      <div class="col-1">
        <router-link :to="{name: 'EditUser', params: {user:usr}}">Edit</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "",
        firstname: "",
        lastname: "",
      },
      users: [],
    };
  },
  methods: {
    getData: function () {
      this.$http
        .get("https://vue-remote-servers.firebaseio.com/users.json")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const tmpArray = [];

          for (let key in data) {
            let withId = data[key];
            withId.id = key;
            tmpArray.push(data[key]);
          }

          this.users = tmpArray;
        });
    },
  },
};
</script>

<style scoped>
.row{
    margin-top:8px;
}
</style>