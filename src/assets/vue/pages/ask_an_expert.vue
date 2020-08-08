<template>
  <f7-page>
    <f7-navbar>
      <global-nav-bar />
    </f7-navbar>

    <f7-block-title>Asks An Experts</f7-block-title>

    <form class="list form-store-data" id="demo-form">
      <ul>
        <li class="item-content item-input">
          <div class="item-inner">
            <div class="item-title item-label">Name</div>
            <div class="item-input-wrap">
              <input name="name" type="text" placeholder="Your name">
              <span class="input-clear-button"></span>
            </div>
          </div>
        </li>
        <li class="item-content item-input">
          <div class="item-inner">
            <div class="item-title item-label">E-mail</div>
            <div class="item-input-wrap">
              <input name="email" type="email" placeholder="Your e-mail">
              <span class="input-clear-button"></span>
            </div>
          </div>
        </li>
        <li class="item-content item-input">
          <div class="item-inner">
            <div class="item-title item-label">Phone</div>
            <div class="item-input-wrap">
              <input name="phone" type="tel" placeholder="Your phone number">
              <span class="input-clear-button"></span>
            </div>
          </div>
        </li>
        <li class="item-content item-input">
          <div class="item-inner">
            <div class="item-title item-label">Location</div>
            <div class="item-input-wrap">
              <input name="phone" type="tel" placeholder="Your location">
              <span class="input-clear-button"></span>
            </div>
          </div>
        </li>
        <li class="item-content item-input">
          <div class="item-inner">
            <div class="item-title item-label">Topic</div>
            <div class="item-input-wrap">
              <input name="phone" type="tel" placeholder="Your topic">
              <span class="input-clear-button"></span>
            </div>
          </div>
        </li>
        <li class="item-content item-input">
          <div class="item-inner">
            <div class="item-title item-label">Question</div>
            <div class="item-input-wrap">
              <textarea name="bio" class="resizable" placeholder="Question"></textarea>
            </div>
          </div>
        </li>
      </ul>
        <f7-button fill color="blue">Submit</f7-button>
    </form>
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
  }
};
</script>
