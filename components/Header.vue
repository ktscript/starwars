<template>
  <div id="nav-outer-container" class="full-nav community-content has-border nav-text-color-light">
    <div id="nav-drawer-bg"></div>
    <div id="nav-inner-container">
      <span id="navbar">
        <div id="nav-wrapper">
          <div id="nav-header-bg">
            <span class="nav-header-fade right"></span>
            <span class="nav-header-fade left"></span>
          </div>

          <div id="nav-external-links" class="social">
            <div id="chrome-controls-container">
              <div id="chrome-controls">
              </div>
            </div>
          </div>

          <div id="nav-drawer-toggle" role="button" aria-label="Open Menu">
            <div class="toggle-icon">
              <span class="bar"></span>
              <span class="bar"></span>
              <span class="bar"></span>
            </div>
          </div>
          <a id="nav-sw-logo-bar" href="/" itemprop="logo" data-cto="swlogo" title="Star Wars Home"></a>
          <a id="nav-sw-logo" href="/" itemprop="logo" data-cto="swlogo" title="Star Wars Logo"></a>
        </div>
      </span>
      <div id="nav-drawer">
        <nav id="nav-content">
          <ul id="section-links" v-if="mainRoute">
              <li itemprop="name">
                <a class="section-link community-content" :class="preview < 1 ? 'active' : ''" href="#" @click="changePreview(0)">
                  <p class="community-content-title"><span>Карточки</span><span class="vertical-bar"></span><span class="horizontal-bar"></span></p>
                </a>
              </li>
              <li itemprop="name">
                <a class="section-link video-content" :class="preview > 0 ? 'active' : ''" href="#" @click="changePreview(1)">
                  <p class="video-content-title"><span>Полоски</span><span class="vertical-bar"></span><span class="horizontal-bar"></span></p>
                </a>
              </li>
          </ul>
          <ul id="section-links" v-else>
              <li>
                <a class="section-link community-content" href="#" @click="goHome">
                  <p class="community-content-title"><span>Назад</span><span class="vertical-bar"></span><span class="horizontal-bar"></span></p>
                </a>
              </li>
          </ul>
        </nav>
      </div>
      <div id="page-overlay"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    preview () {
      return this.$store.state.preview
    },
    mainRoute () {
      return this.$route.path === '/'
    }
  },
  methods: {
    changePreview (value) {
      this.$store.commit('setPreview', value)
    },
    goHome () {
      window.location.href = '/'
    }
  }
}
</script>

<style scoped>
.emptyLi {
  width:100%;
  height: 46px;
}
</style>
