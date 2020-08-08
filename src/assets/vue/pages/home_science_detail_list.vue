<template>
  <f7-page>
    <f7-navbar>
      <global-nav-bar />
    </f7-navbar>
    <f7-card
      title="Article 1"
      content="Card with header and footer. Articles are used to display card titles and footers for additional information or just for custom actions.">
    </f7-card>
    <f7-card
      title="Article 2"
      content="Card with header and footer. Articles are used to display card titles and footers for additional information or just for custom actions.">
    </f7-card>
    <f7-card
      title="Article 3"
      content="Card with header and footer. Articles are used to display card titles and footers for additional information or just for custom actions.">
    </f7-card>
  </f7-page>
</template>

<script>
import GlobalNavBar from './GlobalNavBar.vue'

export default {
  components: {
    GlobalNavBar
  }
}
</script>
