<template>
  <nav>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-container>
        <b-navbar-brand href="#">
          {{ siteName }}
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse" />
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item
              v-for="navItem in nav"
              :key="navItem.link"
              :to="navItem.link"
            >
              {{navItem.title}}
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </nav>
</template>
<script>
import { BContainer, BNavbar, BNavbarBrand, BNavbarToggle, BCollapse, BNavbarNav, BNavItem } from 'bootstrap-vue'
import appConfig from '@/appConfig'
export default {
  name: 'AppNavBar',
  components: { BContainer, BNavbar, BNavbarBrand, BNavbarToggle, BCollapse, BNavbarNav, BNavItem },
  data() {
    return {
      siteName: appConfig.siteName
    }
  },
  computed: {
    pages() {
      return this.$store.getters['pages/pages']
    },
    nav() {
      const theNav = []
      this.pages.forEach((page) => {
        const navNode = {}
        navNode.link = page.uid
        navNode.title = page.data.title[0].text
        theNav.push(navNode)
      })
      return theNav
    }
  }
}
</script>
