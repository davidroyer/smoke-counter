<template>
  <v-app dark>
    <v-app-bar color="primary" dark flat fixed app>
      <v-toolbar-title class="font-weight-bold" v-text="title" />
      <v-spacer />
    </v-app-bar>
    <v-content>
      <v-container>
        <v-row justify="end">
          <v-col>Col1</v-col>
          <v-col>Col2</v-col>
        </v-row>
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
      clipped: false,
      drawer: false,
      fixed: false,
      bottomNav: 'dashboard',
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'SmokeCount'
    }
  }
}
</script>
