<template>
  <f7-page>
    <f7-navbar>
      <global-nav-bar />
    </f7-navbar>

    <f7-block-title>FAQ's</f7-block-title>
    <div v-if="isLoading">
      <f7-block class="text-align-center">
        <f7-preloader color="multi"></f7-preloader>
      </f7-block>
    </div>


    <f7-block v-else>
      <f7-card class="demo-card-header-pic" outline v-for="(comment, index) in posts" :key="index">
        <f7-card-header class="no-border" valign="bottom" style="background-color: #e9e9e6;">
          <p class="created_at">Posted on {{ comment.created_at }}</p>
        </f7-card-header>
        <f7-card-content>
          <p>Title: {{ comment.title }}</p>
          <p>Description: {{ comment.content }}</p>
        </f7-card-content>
      </f7-card>
    </f7-block>

    <!-- <f7-text-editor placeholder="Enter text..." :value="customValue" @texteditor:change="(v) => customValue = v" v-if="show_comment_box" />

    <f7-block>
      <f7-row>
        <f7-col> </f7-col>
        <f7-col> </f7-col>
        <f7-col>
          <f7-button fill color="green" v-if="show_comment_box" @click="handleSubmit">Submit</f7-button>
          <f7-button fill color="blue" v-else @click="showCommentBox">Comment</f7-button>
        </f7-col>
      </f7-row>
    </f7-block> -->
  </f7-page>
</template>
<script>
import GlobalNavBar from './GlobalNavBar.vue'
import axios from 'axios'

export default {
  components: {
    GlobalNavBar,
    axios
  },
  data() {
    return {
      posts: [],
      show_comment_box: true,
      customValue: '',
      info: '',
      isLoading: false
    }
  },
  mounted () {
  },
  created() {
    axios.interceptors.request.use(function(config) {
      // Do something before request is sent
      console.log('Start Ajax Call');
      return config;
    }, function(error) {
      // Do something with request error
      console.log('Error');
      return Promise.reject(error);
    });

    axios.interceptors.response.use(function(response) {
      // Do something with response data
      console.log('Done with Ajax call')
      return response;
    }, function(error) {
      // Do something with response error
      console.log('Error fetching the data')
      return Promise.reject(error);
    })
    this.fetchPosts()
  },
  methods: {
    handleSubmit: function() {
      this.show_comment_box = false
      console.log(this.customValue)
      var dt = new Date();
      var created_at = `${(dt.getMonth()+1).toString().padStart(2, '0')} - ${dt.getDate().toString().padStart(2, '0')} - ${dt.getFullYear().toString().padStart(4, '0')} ${dt.getHours().toString().padStart(2, '0')}:${dt.getMinutes().toString().padStart(2, '0')}:${dt.getSeconds().toString().padStart(2, '0')}`
      this.posts.push({ created_at: created_at, text: this.customValue })
      this.customValue = ''
    },
    showCommentBox: function() {
      this.show_comment_box = true
    },
    fetchPosts: function() {
      this.isLoading = true
      const url = 'https://pjtsau-mobile-app.herokuapp.com/api/v1/posts.json'
      axios.get(url)
        .then((response) => this.posts = response.data)
        .catch(error => {
          this.errorMessage = error.message;
          console.error("There was an error!", error);
        })
        .finally(() => {
  				this.isLoading = false
  			})

    }
  }
};
</script>
