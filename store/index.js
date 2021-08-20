export const state = () => ({
  characters: [],
  preview: 0,
  url: 'https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/ruRU/Images/disney-FW20-general-plp-iw-tiles-Desktop-400x248px_starwars_tcm224-512215.jpg'
})

export const mutations = {
  setCharacters (state, characters) {
    state.characters = characters
  },
  setPreview (state, preview) {
    state.preview = preview
  }
}
