<template>
  <f7-page>
    <f7-navbar title="About" back-link="back"></f7-navbar>

    <f7-row >
      <f7-col width="100">
        <f7-card class="demo-card-header-pic" outline>
          <f7-block strong>
            <p><img width="80px" height="80px" src="https://cdn.framework7.io/placeholder/nature-1000x600-3.jpg" /></p>
            <f7-card-content>
              <p>Quisque eget vestibulum nulla. </p>
            </f7-card-content>
          </f7-block>
        </f7-card>
      </f7-col>
    </f7-row>






    <f7-block>
      <f7-row>
        <!-- <f7-col> </f7-col> -->
        <f7-col>
          <f7-card class="demo-card-header-pic" outline v-if="comments.length > 0" v-for="(comment, index) in comments" :key="index">
            <f7-card-header class="no-border" valign="bottom" style="background-color: #e9e9e6;">
              <p class="date">Posted on {{ comment.date }}</p>
            </f7-card-header>
            <f7-card-content>
              <p v-html="comment.text">{{ comment.text }}</p>
            </f7-card-content>
          </f7-card>
        </f7-col>
      </f7-row>
    </f7-block>

    <f7-text-editor placeholder="Enter text..." :value="customValue" @texteditor:change="(v) => customValue = v" v-if="show_comment_box" />

    <f7-block>
      <f7-row>
        <f7-col> </f7-col>
        <f7-col> </f7-col>
        <f7-col>
          <f7-button fill color="green" v-if="show_comment_box" @click="handleSubmit">Submit</f7-button>
          <f7-button fill color="blue" v-else @click="showCommentBox">Comment</f7-button>
        </f7-col>
      </f7-row>
    </f7-block>

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
