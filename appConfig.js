export default {
  siteName: 'playful',
  globalNav: true,
  get prismicEndpoint() {
    return `https://${this.siteName}.prismic.io/api/v2`
  }
}
