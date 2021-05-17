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
    <div class="containerdivtitrecreationevent">
      <v-btn
        to="/"
        id="btncreereventredinterieur"
        color="accent"
        elevation="2"
        rounded
        small
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="37.69"
          height="38.729"
          viewBox="0 0 37.69 38.729"
        >
          <g
            id="Groupe_53"
            data-name="Groupe 53"
            transform="translate(-342.164 -323.941)"
          >
            <rect
              id="Rectangle_2"
              data-name="Rectangle 2"
              width="37.03"
              height="38.088"
              rx="18.515"
              transform="matrix(-1, -0.017, 0.017, -1, 379.189, 362.67)"
              fill="#e92626"
            />
            <path
              id="Tracé_11"
              data-name="Tracé 11"
              d="M8.464,7.4v0A1.054,1.054,0,0,0,8.14,6.64h0L1.793.292l0,0A1.058,1.058,0,1,0,.369,1.86L5.912,7.4.3,13.02h0a1.058,1.058,0,0,0,1.5,1.5h0L8.141,8.168h0a1.054,1.054,0,0,0,.324-.761Z"
              transform="matrix(-1, -0.017, 0.017, -1, 365.37, 350.789)"
              fill="#fff"
              stroke="#fff"
              stroke-width="1"
            />
          </g>
        </svg>
      </v-btn>
      <p class="titleinsription">LES EVENTS</p>
    </div>
    <div class="conteneurEvents">
      <div v-for="item in listeEvents" :key="item.id" class="conteneurevent">
        <p class="titredelevent">{{ item.data.name }}</p>
      </div>
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
        Lieux: "",
        tags: "",
      },
      listeEvents: [],
      error: null,
    };
  },
  components: {
    degouline: degouline,
  },
  methods: {
    Read(collection) {
      db.collection(collection)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.listeEvents.push({ id: doc.id, data: doc.data() });

            //console.log(doc.id, " => ", doc.data());
          });
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    },
    submit() {
      db.collection("activite")
        .add({
          name: this.form.name,
          lieux: this.form.Lieux,
          tags: this.form.tags,
        })
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
.containerdivtitrecreationevent {
  width: 100%;
  margin-top: 20%;
  display: inline-flex;
}
.conteneurevent {
  border-radius: 20px;
  padding: 5%;
  margin: 5%;
  box-shadow: 0px 0px 16px -3px rgba(0, 0, 0, 0.25);
}
.titredelevent {
  font-weight: 700;
}
</style>
