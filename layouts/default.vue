<template>
  <v-app dark>
    <v-app-bar color="primary" dark flat fixed app>
      <v-toolbar-title class="font-weight-bold" v-text="title" />
      <v-spacer />
    </v-app-bar>

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <v-bottom-navigation v-model="bottomNav" color="primary">
      <v-btn value="dashboard">
        <span>Dashboard</span>
        <v-icon>mdi-view-dashboard</v-icon>
      </v-btn>

      <v-btn value="settings">
        <span>Settings</span>
        <v-icon>mdi-settings</v-icon>
      </v-btn>

      <v-btn value="nearby">
        <span>Nearby</span>
        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      bottomNav: 'dashboard',
      title: 'SmokeCount'
    }
  }
}
</script>

<style lang="scss">
.v {
  &-bottom-navigation {
    .v-btn {
      height: initial !important;
    }
  }
}
</style>
