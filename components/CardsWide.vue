<template>
    <div class="some-box">
        <a :href="'profile?p='+i" v-for="(card, i) in cards" :key="i" :value="card">
            <div class="item">
                <div><img :src="url" /></div>
                <div><p>{{ card.name }}</p></div>
            </div>
        </a>
    </div>
</template>

<script>
export default {
  name: 'CardsWide',
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
.some-box a {
    width: 100%;
    margin: 10px;
}
.some-box a:hover {
    text-decoration: none;
}
.some-box a:hover div div p {
    color:rgba(75,213,238,0.8);
}
.item:not(.hidden-item) {
    height: 250px;
    /*background: blue;*/
    border: 1px solid #ccc;
    border-radius: 10px;
}
.item:hover {
    box-shadow: 0 10px 20px rgba(255, 255, 255, 0.5); /* Параметры тени */
}
.item div {
    display: inline-flex;
}

.item div:nth-child(2){
  transform: translateY(-50%);
  height: 248px;

}
.item div:nth-child(2) p{
    margin-left: 10vh;
    font-size: 48px;
}
</style>
