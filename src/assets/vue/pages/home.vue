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
          icon="fas fa-id-card-alt fa-fw"
        ></f7-link>
        <!-- <img width="30px" height="30px" src="ciwa_logo.jpeg" class="margin-right" /> -->
      </f7-nav-right>
      <!-- <f7-searchbar
        class="searchbar-components"
        search-container=".components-list"
        search-in="a"
        expandable>
      </f7-searchbar> -->
    </f7-navbar>

    <f7-block>
      <f7-row>
        <f7-col width="33" class="text-align-left">
          <img width="60px" height="60px" src="icar_logo.png" />
        </f7-col>
        <f7-col width="33" class="text-align-center">
          <img width="60px" height="60px" src="pjtsau_logo.png" />
        </f7-col>
        <f7-col width="33" class="text-align-right">
          <img width="60px" height="60px" src="ciwa_logo.jpeg" style="margin-right: -18px;" />
        </f7-col>
      </f7-row>
    </f7-block>

    <f7-card class="demo-card-header-pic">
      <f7-block inner style="background-color: green; color: #FFFFFF; padding: 20px;">
        <h2 class="text-align-center">FARM WOMEN KNOWLEDGE GROUPS</h2>
        <h4 class="text-align-center">All India Coordinated Research Project (AICRP) on Home Science, PJTSAU, Hyderabad</h4>
      </f7-block>
    </f7-card>

    <f7-row no-gap>
      <f7-col width="33" class="demo-col-center-content">
        <f7-card class="demo-facebook-card">
          <f7-card-content :padding="false">
            <img src="https://cdn.framework7.io/placeholder/nature-1000x700-8.jpg" style="width: 100%; height: 90px;" />
            <div class="text-align-center">
              <f7-link href="/home_science/">
                <p><h5>Food Security</h5></p>
              </f7-link>
            </div>
          </f7-card-content>
        </f7-card>
      </f7-col>
      <f7-col width="33">
        <f7-card class="demo-facebook-card">
          <f7-card-content :padding="false">
            <img src="https://cdn.framework7.io/placeholder/nature-1000x600-3.jpg" style="width: 100%; height: 90px;" />
            <div class="text-align-center">
              <f7-link href="/home_science/">
                <p class="date"><h5 class="text-align-center">Women Empowerment</h5></p>
              </f7-link>
            </div>
          </f7-card-content>
        </f7-card>
      </f7-col>
      <f7-col width="33">
        <f7-card class="demo-facebook-card">
          <f7-card-content :padding="false">
            <img src="https://cdn.framework7.io/placeholder/nature-1000x700-8.jpg" style="width: 100%; height: 90px;" />
            <div class="text-align-center">
              <f7-link href="/home_science/">
                <p class="date"><h5 class="text-align-center">Home Science</h5></p>
              </f7-link>
            </div>
          </f7-card-content>
        </f7-card>
      </f7-col>
      <f7-col width="33">
        <f7-card class="demo-facebook-card">
          <f7-card-content :padding="false">
            <img src="https://cdn.framework7.io/placeholder/nature-1000x600-3.jpg" style="width: 100%; height: 90px;" />
            <div class="text-align-center">
              <f7-link href="/home_science/">
                <p class="date"><h5 class="text-align-center">Climate Change</h5></p>
              </f7-link>
            </div>
          </f7-card-content>
        </f7-card>
      </f7-col>

      <f7-col width="33">
        <f7-card class="demo-facebook-card">
          <f7-card-content :padding="false">
            <img src="https://cdn.framework7.io/placeholder/nature-1000x700-8.jpg" style="width: 100%; height: 90px;" />
            <div class="text-align-center">
              <f7-link href="/home_science/">
                <p><h5>Integrated Farming System (IFS)</h5></p>
              </f7-link>
            </div>
          </f7-card-content>
        </f7-card>
      </f7-col>
      <f7-col width="33">
        <f7-card class="demo-facebook-card">
          <f7-card-content :padding="false">
              <img src="https://cdn.framework7.io/placeholder/nature-1000x600-3.jpg" style="width: 100%; height: 90px;" />
            <div class="text-align-center">
              <f7-link href="/home_science/">
                <p class="date"><h5 class="text-align-center">Women Friendly Technologies</h5></p>
              </f7-link>
            </div>
          </f7-card-content>
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
