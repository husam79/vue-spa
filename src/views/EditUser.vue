<template>
  <div class="container">
    <div class="row">
      <div class="col-6 offset-2">
        <h1>Edit User</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-6 offset-2">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="form-group">
                <label>Username</label>
                <input type="text" class="form-control" v-model="user.username" />
              </div>
              <div class="form-group">
                <label>First name</label>
                <input type="text" class="form-control" v-model="user.firstname" />
              </div>
              <div class="form-group">
                <label>Last name</label>
                <input type="text" class="form-control" v-model="user.lastname" />
              </div>
            </div>
          </div>
        </div>
        <button class="btn btn-primary float-left" style="margin-left:12px;" @click="putUser()">Save</button>
        <button
          class="btn btn-danger float-right"
          style="margin-right:12px;"
          @click="deleteUser()"
        >Delete</button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "EditUser",
  methods: {
    putUser() {
      this.$http
        .put(
          "https://vue-remote-servers.firebaseio.com/users/" +
            this.$route.params.user.id +
            ".json",
          this.user
        )
        .then(
          () => {
            this.$alert(
              "The user is updated.",
              "Operation Succeeded",
              "success"
            );
          },
          (error) => {
            console.log(error);
          }
        );
    },
    deleteUser() {
      this.$confirm("Are you sure you want to delete the user?").then(() => {
        this.$http
          .delete(
            "https://vue-remote-servers.firebaseio.com/users/" +
              this.$route.params.user.id +
              ".json"
          )
          .then(
            () => {
              this.$router.push('AllUsers');
            },
            (error) => {
              console.log(error);
            }
          );
      });
    },
  },
  computed: {
    user() {
      return this.$route.params.user;
    },
  },
};
</script>

<style scoped>
.row {
  margin-top: 8px;
}
</style>