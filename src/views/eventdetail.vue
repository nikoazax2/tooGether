<template>
  <div>
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap"
      rel="stylesheet"
    />
    <!-- ------------------------------------------HEADER-------------------------------------------- -->

    <degouline v-if="true" id="degoulinerecherche"></degouline>
    <div class="conteneurplanet">
      <img
        class="planetquitourneinscription"
        style="position: absolute"
        src="@/assets/planetquitournerouge.gif"
      />
    </div>

    <v-card class="titrecard" to="/">
      <v-card-title>T o o G e t h e r</v-card-title>
      <v-card-text
        >Faites des rencontres en faisant ce que vous aimez</v-card-text
      >
    </v-card>

    <div v-if="true" class="conteneurEvents">
      {{ lact }}
    </div>
  </div>
</template>

<script>
import degouline from "@/components/degoulinerouge";
import firebase from "firebase";
const db = firebase.firestore();
export default {
  name: "App",
  created: function() {},
  data: function() {
    return {
      drawer: false,
      group: null,
      lact: [],
      error: null,
      chargement: true,
    };
  },
  components: {
    degouline: degouline,
  },
  methods: {
    Read(collection) {
      db.collection(collection)
        .where("doc.id", "==", this.$route.params.actid)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            console.log(doc.data());
            this.lact.push(doc.data());
            this.chargement = false;
          });
        });
    },
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
  mounted() {
    this.Read("activite");
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
#degoulinerecherche > svg {
  margin-top: -10vh;
  width: 100%;
  height: auto;
}
#degoulinerecherche {
  margin-top: -10%;
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
.rowcreerevenet {
  padding-left: 15px;
  padding-top: 9px;
  border-radius: 20px;
  margin: 20px;
  height: 40px;
  box-shadow: 0px 0px 16px -3px rgba(0, 0, 0, 0.25);
  div > input {
    width: 95%;
  }
}
.btnajoutenevent {
  text-align: center;
  padding-left: 15px;
  padding-top: 9px;
  border-radius: 20px;
  margin: 20px;
  height: 40px;
  background-color: #e92626;
  color: white;
  box-shadow: 0px 0px 16px -3px rgba(233, 38, 38, 0.75);
}
.conteneurevent {
  height: 140px;
  display: flex;
  border-radius: 20px;
  padding: 1%;
  margin: 5%;
  box-shadow: 0px 0px 16px -3px rgba(0, 0, 0, 0.25);
}
.titredelevent {
  font-weight: 700;
}
.containerdivtitrerechercheevent {
  display: flex;
  justify-content: center;
  margin-top: 15%;
  text-align: center;
}
#btnrechercheevent {
  border-radius: 50%;
  margin-left: -5%;
  box-shadow: unset !important;
  span {
    margin-left: 2px;
    color: white !important;
  }
  color: red;
  background-color: red;
  border: solid 2px;
  width: 20px;
  height: 20px;
  min-width: 20px;
  min-height: 20px;
  margin-top: 3px;
  margin-bottom: 3px;
}
#caseact {
  padding: 1%;
  width: 33%;
  height: 100%;
  text-align: center;
}
.titredelevent {
  font-size: 12px;
}
.casenomdate {
  margin-top: 15%;
}
.datedelevent {
  color: #e92626;
  font-size: 9px;
}
.conteneurEvents {
  margin-top: 15%;
  height: 500px;
  overflow-y: scroll;
}
.barrederecherchecontainer {
  margin-top: 4vh;
  position: absolute;
  width: 100%;
}
</style>
