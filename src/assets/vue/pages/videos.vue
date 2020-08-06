<template>
  <f7-page>
    <f7-navbar title="Videos" back-link="Back"></f7-navbar>
    <f7-row>
      <f7-col width="50" v-for="video in videos" :key="video.name">
        <f7-card class="demo-card-header-pic" outline>
          <iframe width="100%" height="200%"
            :src="video.src">
          </iframe>
        </f7-card>
      </f7-col>
    </f7-row>
  </f7-page>
</template>
<script>
export default {
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
