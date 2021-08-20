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
                <div v-if="preview < 1">
                  <Cards />
                </div>
                <div v-else>
                  <CardsWide />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Body',
  computed: {
    preview () {
      return this.$store.state.preview
    }
  },
  created () {
    this.loadData()
  },
  methods: {
    loadData () {
      const vm = this
      axios.get('https://swapi.dev/api/people')
        .then((data) => {
          vm.$store.commit('setCharacters', data.data.results)
        }).catch((data) => {
          vm.$bvModal.msgBoxOk('Ошибка! Не могу подключиться по API')
        })
    }
  }
}
</script>
