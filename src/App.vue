<template>
  <div id="app">
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap"
      rel="stylesheet"
    />
    <!-- ------------------------------------------HEADER-------------------------------------------- -->
    <v-navigation-drawer v-model="drawer" absolute left temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>Alertes</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Mes evenements</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Mes amis</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Paramètres</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <degouline v-if="true" id="degouline"> </degouline>
    <headere></headere>
    <img
      class="planetquitourne"
      style="position: absolute"
      src="./planetquitournerouge.gif"
    />
    <v-card class="titrecard">
      <v-card-title>T o o G e t h e r</v-card-title>
      <v-card-text
        >Faites des rencontres en faisant ce que vous aimez</v-card-text
      >
    </v-card>
    <div class="barrederecherchecontainer">
      <div class="barrederecherche">
        <v-combobox
          class="comboActivite"
          :items="act"
          clearable
          dense
          filled
          hide-selected
          small-chips
          solo
          label="Faire un foot avec..."
        ></v-combobox>
      </div>
    </div>
    <div class="containerEtapes">
      <div class="premièreligne">
        <div class="deuxieme">
          <div class="num">2</div>

          <div class="text">
            RECHERCHE <br />
            CRÉE UN ÉVÉNEMENT
          </div>
        </div>
        <div class="troisieme">
          <div class="num">3</div>
          <div class="text">
            RENCONTRE <br />
            AMUSE TOI
          </div>
        </div>
      </div>
      <br />
      <div class="deuxièmeligne">
        <div class="premier">
          <div class="num">1</div>

          <div class="text">
            RECHERCHE <br />
            CRÉE UN ÉVÉNEMENT
          </div>
        </div>
        <div class="quatrieme">
          <div class="num">4</div>

          <div class="text">
            RECHERCHE <br />
            CRÉE UN ÉVÉNEMENT
          </div>
        </div>
      </div>
    </div>
    <div class="planettournecontainer">
      <img
        class="planetquitourneavecperso"
        style="position: absolute"
        src="./avecperso.gif"
      />
    </div>
  </div>
</template>

<script>
import degouline from "./components/degoulinerouge";
import headere from "./components/header";

export default {
  name: "App",
  created: function () {},
  data: function () {
    return {
      drawer: false,
      group: null,
      act: ["slt", "lol"],
    };
  },
  components: {
    degouline: degouline,
    headere: headere,
  },
  methods: {},
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
#degouline > svg {
  width: 100%;
  height: auto;
}
#degouline {
  width: 101%;
  position: absolute;
}
.title {
  z-index: 1;
}
.planetquitourne {
  margin-top: 5%;
  margin-left: -20%;
  height: 20%;
}

.titrecard {
  margin-top: 10%;
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
.barrederecherchecontainer {
  margin-top: 15%;
  position: absolute;
  width: 100%;
}
.barrederecherche {
  border-radius: 20px;
  margin: auto;
  background-color: white;
  width: 90%;
  height: 30px;
  box-shadow: 0px 0px 16px -3px rgba(0, 0, 0, 0.25);
}
.comboActivite {
  .v-input__control {
    height: 80% !important;
  }
  .v-input__control > .v-input__slot {
    border-radius: 20px;
    box-shadow: unset !important;
    height: 30px !important;
    min-height: 20px !important;
    width: 50% !important;
    .v-select__slot > .v-input__append-inner {
      visibility: hidden;
    }
    .v-select__slot > label {
      font-size: 8px !important;
      position: unset !important;
      width: 100%;
    }
    .v-select__slot > .v-select__selections > input {
      font-size: 8px;
    }
    .v-select__slot > .v-select__selections > span {
      background-color: white;
      span {
        font-size: 8px;
      }
    }
  }
}
.containerEtapes {
  div > div > .text {
    color: black;
    font-size: 12px;
    opacity: 1;
  }
  width: 100%;
  margin-top: 50%;
  position: absolute;
  .premièreligne {
    width: 100%;
    display: inline-flex;
    justify-content: center;
    div > .num {
      color: #ff0000;
      opacity: 0.23;
      padding: 20px;
      font-size: 50px;
      font-weight: bolder;
    }
  }
  .deuxièmeligne {
    padding: 20px;
    width: 100%;
    display: inline-flex;
    justify-content: space-around;
    div > .num {
      color: #ff0000;
      opacity: 0.23;
      padding: 20px;
      font-size: 50px;
      font-weight: bolder;
    }
  }
}
.planetpersonacceuil {
  margin-top: 50%;
  margin-left: 10% !important;
  width: 90%;
  margin-left: auto;
}
.planetquitourneavecperso {
  width: 110%;
  margin-left: -5%;
  position: absolute;
  margin-bottom: -40%;
  bottom: 0;
}
.planettournecontainer {
  height: 100%;
}
</style>
