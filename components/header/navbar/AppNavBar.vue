<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-container>
        <b-navbar-brand href="#">
          {{ siteName }}
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse" />
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#">
              Link
            </b-nav-item>
            <b-nav-item href="#" disabled>
              Disabled
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
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
  }
}
</script>
