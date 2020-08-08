<template>
  <f7-page>
    <f7-navbar>
      <global-nav-bar />
    </f7-navbar>

    <f7-block-title>Video Gallery</f7-block-title>

    <f7-row no-gap>
      <f7-col v-for="video in videos" :key="video.name" width="50" class="demo-col-center-content">
        <f7-card class="demo-facebook-card">
          <iframe width="100%" height="100%"
            :src="video.src">
          </iframe>
        </f7-card>
      </f7-col>
    </f7-row>
  </f7-page>
</template>
<script>
import GlobalNavBar from './GlobalNavBar.vue'

export default {
  components: {
    GlobalNavBar
  },
  data() {
    return {
      videos: [{
        name: 'Hai',
        src: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1'
      },
      {
        name: 'Bye',
        src: 'https://www.youtube.com/embed/s4ObxcdXoFE'
      },
      {
        name: 'A',
        src: 'https://www.youtube.com/embed/CxBtI4Yo03w'
      },
      {
        name: 'B',
        src: 'https://www.youtube.com/embed/daN1mlSRV80'
      }]
    }
  }
}
</script>
