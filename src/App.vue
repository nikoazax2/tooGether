<template>
  <div id="app">
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
import firebase from "./firebaseInit";
const db = firebase.firestore();
export default {
  name: "App",
  data: function () {
    return {
      lesUsers: [],
    };
  },

  components: {},
  methods: {
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
    Read(collection) {
      db.collection(collection)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.lesUsers.push({ id: doc.id, data: doc.data() });

            //console.log(doc.id, " => ", doc.data());
          });
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    },
    update(collection, id, jsontoupdtae) {
      db.collection(collection)
        .doc(id)
        .update(jsontoupdtae)
        .then(() => {
          console.log("Document successfully updated!");
        })
        .catch((error) => {
          // The document probably doesn't exist.
          console.error("Error updating document: ", error);
        });
    },
    delete(collection, id) {
      db.collection(collection)
        .doc(id)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
        });
    },
  },
  mounted() {
    // this.Insert("users", { name: "nico", mdp: "lezink" });
    this.Read("users");
  },
  created() {
    setTimeout(() => {
      //console.log(this.lesUsers[0].id);
      /* this.update("users", this.lesUsers[0].id, {
        name: "nicola",
        mdp: "lezink",
      }); */
      //this.delete("users", this.lesUsers[0].id);
    }, 2000);
  },
  watch: {},
};
</script>

<style lang="scss">
</style>
