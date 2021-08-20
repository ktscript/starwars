<template>
    <div class="some-box">
        <a :href="'profile?p='+i" v-for="(card, i) in cards" :key="i" :value="card">
            <div class="item">
                <img :src="url" />
                <p>{{ card.name }}</p>
            </div>
        </a>
    </div>
</template>

<script>
export default {
  name: 'Cards',
  computed: {
    cards () {
      return this.$store.state.characters
    },
    url () {
      return this.$store.state.url
    }
  }
}
</script>

<style scoped>
.some-box {
    max-width: 80%;
    margin: 0 auto;
    padding: 10px;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: center;
    -webkit-flex-wrap: wrap;
    -moz-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    -o-flex-wrap: wrap;
    flex-wrap: wrap;
}
.item {
    width: 215px;
    margin: 10px;
}
.item:not(.hidden-item) {
    height: 250px;
    border: 1px solid #ccc;
    border-radius: 10px;
}
.item:hover {
    box-shadow: 0 10px 20px rgba(255, 255, 255, 0.5); /* Параметры тени */
}
.some-box a:hover {
    text-decoration: none;
}
.some-box a:hover div p {
    color:rgba(75,213,238,0.8);
}
.item img {
    margin-top: 15px;
    width:100%;
}
.item p {
    text-align: center;
    margin-top: 35px;
    text-transform: uppercase;
}
a.item:hover {
    text-decoration: none;
}
</style>
