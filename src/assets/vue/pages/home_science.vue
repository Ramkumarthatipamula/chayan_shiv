<template>
  <f7-page>
    <f7-navbar>
      <global-nav-bar />
    </f7-navbar>
    <f7-row>
      <f7-col>
        <f7-block-title>Home Science</f7-block-title>
        <f7-list>
          <f7-list-item link="/home_science_detail_list/" title="Food & Nutrition" badge="4" />
          <f7-list-item link="/home_science_detail_list/" title="Apparel & Textiles" badge="4" />
          <f7-list-item link="/home_science_detail_list/" title="Home Science Extension & Communication Management" badge="0" />
          <f7-list-item link="/home_science_detail_list/" title="Humen Development & Family Studies" badge="0" />
          <f7-list-item link="/home_science_detail_list/" title="Resource Management & Consumer Sciences" badge="0" />
        </f7-list>
      </f7-col>
    </f7-row>
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
