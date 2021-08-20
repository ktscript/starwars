<template>
    <div id="body-wrapper" class="" data-section="community">
        <div id="burger-container">
            <div id="background-styles" style="background-position: center top 181px;">
                <div class="starfield star-left"></div>
                <div class="starfield star-right"></div>
                <div class="site-default-gradient">
                    <div class="safety-color"></div>
                </div>
                <div id="body-bg">
                    <div class="safety-color"></div>
                    <div class="main"></div>
                    <div class="color-fade"></div>
                </div>
            </div>
            <div id="main">
                <div class="some-box" v-if="profile">
                    <div class="card_block">
                        <div><img :src="url" /></div>
                        <div class="info_block">
                            <p><h3>{{ profile.name }}</h3></p>
                            <p>Birth year: {{ profile.birth_year }}</p>
                            <p>Gender: {{ profile.gender }}</p>
                            <p>Height: {{ profile.height }}</p>
                            <p>Mass: {{ profile.mass }}</p>
                            <p>Eye color: {{ profile.eye_color }}</p>
                            <p>Skin color: : {{ profile.skin_color }}</p>
                            <p>Homeworld: <a :href="profile.homeworld">Planet</a></p>
                            <p>Starships:
                              <details class="starships">
                                <summary>more...</summary>
                                <p v-for="(starship, k) in profile.starships" :key="k" :value="starship" class="starships">
                                    <a :href="starship">Starship {{k}}</a>
                                </p>
                              </details>
                            </p>
                            <p>Vehicles:
                              <details class="vehicles">
                                <summary>more...</summary>
                                <p v-for="(vehicle, j) in profile.vehicles" :key="j" :value="vehicle" class="vehicles">
                                    <a :href="vehicle">Vehicle {{j}}</a>
                                </p>
                              </details>
                            </p>
                            <br/>
                            <p>Films:
                              <details class="films">
                                <summary>more...</summary>
                                <p v-for="(film, i) in profile.films" :key="i" :value="film" class="films">
                                    <a :href="film">Film {{i}}</a>
                                </p>
                              </details>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'CardProfile',
  created () {
    if (!this.$store.state.characters.length) {
      const vm = this
      axios.get('https://swapi.dev/api/people')
        .then((data) => {
          vm.$store.commit('setCharacters', data.data.results)
        })
    }
  },
  computed: {
    profile () {
      const page = typeof this.$route.query.p === 'undefined' ? 0 : this.$route.query.p
      return this.$store.state.characters[page]
    },
    url () {
      return this.$store.state.url
    }
  }
}
</script>

<style scoped>
.some-box {
    max-width: 60%;
    margin: 0 auto;
}

.some-box h3 {
    font-size: 32px;
    color:rgba(75,213,238,0.8);
    font-weight: 900;
}

.films,
.vehicles,
.starships {
    margin-left: 20px;
}
.card_block {
    padding: 30px;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: left;
    -webkit-flex-wrap: wrap;
    -moz-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    -o-flex-wrap: wrap;
    flex-wrap: wrap;
}
.info_block {
    margin-left: 30px;
}
.info_block p {
    margin-bottom: 10px;
}
</style>
