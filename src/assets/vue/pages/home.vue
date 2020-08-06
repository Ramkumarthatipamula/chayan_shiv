<template>
  <f7-page>
    <f7-navbar>
      <f7-nav-left class="">
        <f7-link class="panel-open" open-panel="left" icon="fas fa-bars"></f7-link>
      </f7-nav-left>
      <div class="title">PJTSAU</div>
      <f7-nav-right>
        <f7-link
          class="searchbar-enable"
          data-searchbar=".searchbar-components"
          icon="fas fa-search"
        ></f7-link>
      </f7-nav-right>
      <f7-searchbar
        class="searchbar-components"
        search-container=".components-list"
        search-in="a"
        expandable
      ></f7-searchbar>
    </f7-navbar>

    <f7-row >
      <f7-col width="33">
        <f7-card class="demo-card-header-pic" outline>
          <f7-block strong>
            <p><img width="80px" height="80px" src="https://cdn.framework7.io/placeholder/nature-1000x600-3.jpg" /></p>
          <f7-card-content>
            <p>Quisque eget vestibulum nulla. </p>
          </f7-card-content>
          <f7-link href="/art1/">About</f7-link>

            <!-- <f7-link href="art1.vue">Read more</f7-link> -->
          </f7-block>
        </f7-card>
    </f7-col>
      <f7-col width="33">
        <f7-card class="demo-card-header-pic" outline>
          <f7-block strong>
            <p><img width="80px" height="80px" src="https://cdn.framework7.io/placeholder/nature-1000x600-3.jpg" /></p>
          <f7-card-content>
            <p>Quisque eget vestibulum nulla. </p>
          </f7-card-content>
            <f7-link>Read more</f7-link>
          </f7-block>
        </f7-card>
    </f7-col>
    <f7-col width="33">
        <f7-card class="demo-card-header-pic" outline>
          <f7-block strong>
            <p><img width="80px" height="80px" src="https://cdn.framework7.io/placeholder/nature-1000x600-3.jpg" /></p>
          <f7-card-content>
            <p>Quisque eget vestibulum nulla. </p>
          </f7-card-content>
            <f7-link>Read more</f7-link>
          </f7-block>
        </f7-card>
    </f7-col>
    <f7-col width="33">
      <f7-card class="demo-card-header-pic" outline>
        <f7-block strong>
          <p><img width="80px" height="80px" src="https://cdn.framework7.io/placeholder/nature-1000x600-3.jpg" /></p>
        <f7-card-content>
          <p>Quisque eget vestibulum nulla. </p>
        </f7-card-content>
        <f7-link href="/art1/">About</f7-link>

          <!-- <f7-link href="art1.vue">Read more</f7-link> -->
        </f7-block>
      </f7-card>
  </f7-col>
    <f7-col width="33">
      <f7-card class="demo-card-header-pic" outline>
        <f7-block strong>
          <p><img width="80px" height="80px" src="https://cdn.framework7.io/placeholder/nature-1000x600-3.jpg" /></p>
        <f7-card-content>
          <p>Quisque eget vestibulum nulla. </p>
        </f7-card-content>
          <f7-link>Read more</f7-link>
        </f7-block>
      </f7-card>
  </f7-col>
  <f7-col width="33">
      <f7-card class="demo-card-header-pic" outline>
        <f7-block strong>
          <p><img width="80px" height="80px" src="https://cdn.framework7.io/placeholder/nature-1000x600-3.jpg" /></p>
        <f7-card-content>
          <p>Quisque eget vestibulum nulla. </p>
        </f7-card-content>
          <f7-link>Read more</f7-link>
        </f7-block>
      </f7-card>
  </f7-col>
    </f7-row>
  </f7-page>
</template>
<script>
export default {
  data() {
    return {
      comments: [],
      show_comment_box: true,
      customValue: ''
    }
  },
  methods: {
    handleSubmit: function() {
      this.show_comment_box = false
      console.log('kkkkkkk')
      console.log(this.customValue)
      var dt = new Date();
      var date = `${(dt.getMonth()+1).toString().padStart(2, '0')} - ${dt.getDate().toString().padStart(2, '0')} - ${dt.getFullYear().toString().padStart(4, '0')} ${dt.getHours().toString().padStart(2, '0')}:${dt.getMinutes().toString().padStart(2, '0')}:${dt.getSeconds().toString().padStart(2, '0')}`
      this.comments.push({ date: date, text: this.customValue })
      this.customValue = ''
    },
    showCommentBox: function() {
      this.show_comment_box = true
    }
  },
};
</script>
