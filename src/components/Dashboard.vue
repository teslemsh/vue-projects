<template>
  <div class="col-md-12 mt-8">
    <v-content>
      <v-row>
        <v-col>
          <section class="cards">
            <article class="card card--2" :style="modules[0].color">
              <a to="#" class="card_link text-center">
                <div class="hover">
                  <v-avatar size="80">
                    <v-img
                      color="white"
                      src="https://logos-blueland.s3-eu-west-1.amazonaws.com/SID.png"
                    ></v-img>
                  </v-avatar>
                </div>
              </a>
              <v-card class="card__info text-center" hover>
                <h4 class="card__title text">Naturgy SID</h4>
                <span class="card__category">Progreso de tu proyecto</span>
                <v-divider></v-divider>
                <v-progress-linear value="75" color="green" height="25" reactive>
                  <strong>75%</strong>
                </v-progress-linear>
                <v-avatar size="80">
                  <v-icon color="#AD8862">mdi-account-star</v-icon>
                </v-avatar>
                <v-avatar size="80">
                  <v-icon color="#AD8862">mdi-account-star</v-icon>
                </v-avatar>
                <v-avatar size="80">
                  <v-icon color="#AD8862">mdi-account-star-outline</v-icon>
                </v-avatar>
                <div class="mt-10">
                  <h2 class="card__title text">Skills</h2>
                  <v-row>
                    <v-col cols="1">
                      <v-icon size="35" color="#AD8862">mdi-language-python</v-icon>
                    </v-col>
                    <v-col col="3">
                      <v-progress-linear
                        icon="mdi-nodejs"
                        color="#AD8862"
                        height="25"
                        striped
                        value="10"
                        reactive
                      >
                        <strong>25%</strong>
                      </v-progress-linear>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="1">
                      <v-icon size="35" color="#FFE01B">mdi-nodejs</v-icon>
                    </v-col>
                    <v-col col="3">
                      <v-progress-linear
                        icon="mdi-nodejs"
                        color="#FFE01B"
                        height="25"
                        striped
                        value="35"
                        reactive
                      >
                        <strong>35%</strong>
                      </v-progress-linear>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="1">
                      <v-icon size="35" color="#ECAF39">mdi-aws</v-icon>
                    </v-col>
                    <v-col col="3">
                      <v-progress-linear
                        icon="mdi-nodejs"
                        color="#ECAF39"
                        height="25"
                        striped
                        value="45"
                        reactive
                      >
                        <strong>45%</strong>
                      </v-progress-linear>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="1">
                      <v-icon size="35" color="#B5C91C">mdi-vuejs</v-icon>
                    </v-col>
                    <v-col col="3">
                      <v-progress-linear
                        icon="mdi-nodejs"
                        color="#B5C91C"
                        height="25"
                        striped
                        value="100"
                        reactive
                      >
                        <strong>100%</strong>
                      </v-progress-linear>
                    </v-col>
                  </v-row>
                  <br />
                </div>
              </v-card>
            </article>
          </section>
        </v-col>
        <v-col>
          <section class="cards">
            <article class="card card--2" :style="modules[1].color">
              <a to="#" class="card_link text-center">
                <div class="hover">
                  <v-avatar size="80">
                    <v-img
                      color="white"
                      src="https://avataaars.io/?avatarStyle=Transparent&topType=LongHairMiaWallace&accessoriesType=Prescription02&hairColor=Platinum&facialHairType=BeardMagestic&facialHairColor=Black&clotheType=ShirtCrewNeck&clotheColor=Gray02&eyeType=WinkWacky&eyebrowType=UnibrowNatural&mouthType=Grimace&skinColor=Tanned"
                    ></v-img>
                  </v-avatar>
                </div>
              </a>
              <v-card class="card__info text-center" hover>
                <h4 class="card__title text">{{modules[1].name}}</h4>
                <span class="card__category">{{modules[1].nickname}}</span>
                <div class="mt-10">
                  <v-row v-for="i in modules[1].skills" :key="i">
                    <v-col cols="1">
                      <v-icon size="35" :color="i.color">{{i.icon}}</v-icon>
                    </v-col>
                    <v-col col="3">
                      <v-progress-linear
                        :icon="i.icon"
                        :color="i.color"
                        height="25"
                        striped
                        :value="i.knowledge"
                        reactive
                      >
                        <strong>{{i.knowledge}}%</strong>
                      </v-progress-linear>
                    </v-col>
                    <v-col cols="1" v-if="i.intention">
                      <v-icon size="30" :color="i.color">mdi-thumb-up-outline</v-icon>
                    </v-col>
                    <v-col cols="1" v-if="i.intention==false">
                      <v-icon size="30" :color="i.color">mdi-thumb-down-outline</v-icon>
                    </v-col>
                  </v-row>
                </div>
              </v-card>
            </article>
          </section>
        </v-col>
      </v-row>
    </v-content>
  </div>
</template>
<script>
import router from "../router/index";
import { RepositoryFactory } from "../api/RepositoryFactory";
import { async } from "q";

const ModulesRepository = RepositoryFactory.get("modules");

export default {
  props: {
    source: String
  },
  computed: {
    inputStyles() {
      return {
        background: "#66DBF4"
      };
    }
  },
  data: () => ({
    show: false,
    drawer: null,
    drawerRight: null,
    right: false,
    left: false,

    items: [
      {
        text: "Incio",
        disabled: false,
        to: "dashboard"
      },
      {
        text: "Modelo Operacional",
        disabled: false
        //to: "breadcrumbs_link_1"
      }
    ],
    modules: []
  }),
  created() {
    this.fetch();
  },
  methods: {
    async fetch() {
      const data = await ModulesRepository.get();
      this.modules = data;
    },
    goToSubModules(module) {
      this.$store.dispatch("updateSelectedModuleAction", module);
      router.push("module-sections");
    }
  }
};
</script>
<style lang="css" scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto+Slab:100,300,400,700");
@import url("https://fonts.googleapis.com/css?family=Raleway:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i");

* {
  box-sizing: border-box;
}

.card__clock-info {
  float: right;
}

.card__info-hover {
  position: absolute;
  padding: 16px;
  width: 100%;
  opacity: 0;
  top: 0;
}
.card__title--hover {
  color: white !important;
}
.card {
  margin-right: 25px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0, 1);
  background-color: #fff;
  position: relative;
  border-radius: 12px;
  width: 100%;
  overflow: hidden;
  box-shadow: 0px 13px 10px -7px rgba(0, 0, 0, 0.1);
}

.card__info {
  z-index: 2;
  background-color: #fff;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  padding: 16px 24px 24px 24px;
}

.card__category {
  font-family: "Raleway", sans-serif;
  text-transform: uppercase;
  font-size: 13px;
  letter-spacing: 2px;
  font-weight: 500;
  color: #868686;
}

.card__title {
  color: #2f4050 !important;
  margin-top: 5px;
  margin-bottom: 10px;
}

.card__by {
  font-size: 12px;
  font-family: "Raleway", sans-serif;
  font-weight: 500;
}

.card:hover .card__img--hover {
  height: 100%;
  opacity: 0.3;
}

.card:hover .card__info {
  position: relative;
}

.card:hover .card__info-hover {
  opacity: 1;
}
</style>