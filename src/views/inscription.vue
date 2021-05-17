<template>
  <div>
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap"
      rel="stylesheet"
    />
    <!-- ------------------------------------------HEADER-------------------------------------------- -->

    <degouline v-if="true" id="degoulineInscription"></degouline>
    <div class="conteneurplanet">
      <img
        class="planetquitourneinscription"
        style="position: absolute"
        src="@/assets/planetquitournerouge.gif"
      />
    </div>

    <v-card class="titrecard">
      <v-card-title>T o o G e t h e r</v-card-title>
      <v-card-text
        >Faites des rencontres en faisant ce que vous aimez</v-card-text
      >
    </v-card>
    <div class="containerdiv"><p class="titleinsription">INSCRIPTION</p></div>

    <form action="#" @submit.prevent="submit">
      <div class="form-group row">
        <label for="name" class="col-md-4 col-form-label text-md-right"
          >Name</label
        >

        <div class="col-md-6">
          <input
            id="name"
            type="name"
            class="form-control"
            name="name"
            value
            required
            autofocus
            v-model="form.name"
          />
        </div>
      </div>

      <div class="form-group row">
        <label for="email" class="col-md-4 col-form-label text-md-right"
          >Email</label
        >

        <div class="col-md-6">
          <input
            id="email"
            type="email"
            class="form-control"
            name="email"
            value
            required
            autofocus
            v-model="form.email"
          />
        </div>
      </div>

      <div class="form-group row">
        <label for="password" class="col-md-4 col-form-label text-md-right"
          >Password</label
        >

        <div class="col-md-6">
          <input
            id="password"
            type="password"
            class="form-control"
            name="password"
            required
            v-model="form.password"
          />
        </div>
      </div>

      <div class="form-group row mb-0">
        <div class="col-md-8 offset-md-4">
          <button type="submit" class="btn btn-primary">Register</button>
        </div>
      </div>
    </form>
    <div class="col-md-8 offset-md-4">
      <button @click="gotologin" class="btn btn-primary">Connexion</button>
    </div>
  </div>
</template>

<script>
import degouline from "@/components/degoulinerouge";
import firebase from "firebase";
const db = firebase.firestore();
export default {
  name: "App",
  created: function () {},
  data: function () {
    return {
      drawer: false,
      group: null,
      act: ["slt", "lol"],
      form: {
        name: "",
        email: "",
        password: "",
      },
      error: null,
    };
  },
  components: {
    degouline: degouline,
  },
  methods: {
    gotologin() {
      console.log("lel");
      this.$router.replace({
        name: "Acceuil",
      });
    },
    submit() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then((data) => {
          data.user
            .updateProfile({
              displayName: this.form.name,
            })
            .then(() => {
              this.Insert("users", {
                email: this.form.email,
                password: this.form.password,
              });
              this.$router.replace({
                name: "App",
              });
            });
        })
        .catch((err) => {
          this.error = err.message;
        });
    },
    Insert(collection, jsonval) {
      db.collection(collection)
        .add(jsonval)
        .then(() => {
          console.log("inserted !");
        })
        .catch((error) => {
          console.error("Error writing : ", error);
        });
    },
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap");
* {
  font-family: "Noto Sans", sans-serif;
}
#app {
  position: relative;
  height: 100vh;
}
body {
  overflow: hidden;
}
#degoulineInscription > svg {
  margin-top: -10vh;
  width: 100%;
  height: auto;
}
#degoulineInscription {
  width: 101%;
  position: absolute;
}
.title {
  z-index: 1;
}
.conteneurplanet {
  width: 100%;
}
.planetquitourneinscription {
  margin-top: -10% !important;
  height: 20%;
  left: 35%;
  width: 33vw;
  height: 33vw;
}

.titrecard {
  padding-top: 20%;
  margin-top: 0% !important;
  background-color: transparent !important;
  box-shadow: unset !important;
  text-align: center;

  .v-card__title {
    font-weight: 700;
    justify-content: center;
    color: white;
    padding-bottom: 0 !important;
    font-size: 25px;
  }
  .v-card__text {
    font-family: "Noto Sans", sans-serif;
    opacity: 0.7;
    color: white !important;
    font-size: 12px;
  }
}
.containerdiv {
  margin: auto;
  width: 100%;
  margin-top: 20%;
  .titleinsription {
    text-align: center;
    font-family: "Noto Sans", sans-serif !important;
  }
}
</style>
