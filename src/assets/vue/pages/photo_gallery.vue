<template>
  <f7-page>

    <f7-navbar>
      <global-nav-bar />
    </f7-navbar>
    
    <f7-block-title>Photo Gallery</f7-block-title>

    <f7-row no-gap>
      <f7-col width="33" class="demo-col-center-content">
        <f7-card class="demo-facebook-card">
          <f7-card-content :padding="false">
            <img style="width: 100%; height: 90px;" src="https://cdn.framework7.io/placeholder/cats-300x300-1.jpg" />
            <div class="text-align-center">
              <f7-link href="/home_science/">
                <p><h5>Cat 1</h5></p>
              </f7-link>
            </div>
          </f7-card-content>
        </f7-card>
      </f7-col>
      <f7-col width="33" class="demo-col-center-content">
        <f7-card class="demo-facebook-card">
          <f7-card-content :padding="false">
            <img style="width: 100%; height: 90px;" src="https://cdn.framework7.io/placeholder/cats-300x300-7.jpg" />
            <div class="text-align-center">
              <f7-link href="/home_science/">
                <p><h5>Cat 2</h5></p>
              </f7-link>
            </div>
          </f7-card-content>
        </f7-card>
      </f7-col>
      <f7-col width="33" class="demo-col-center-content">
        <f7-card class="demo-facebook-card">
          <f7-card-content :padding="false">
            <img style="width: 100%; height: 90px;" src="https://cdn.framework7.io/placeholder/cats-200x300-8.jpg" />
            <div class="text-align-center">
              <f7-link href="/home_science/">
                <p><h5>Cat 3</h5></p>
              </f7-link>
            </div>
          </f7-card-content>
        </f7-card>
      </f7-col>
      <f7-col width="33" class="demo-col-center-content">
        <f7-card class="demo-facebook-card">
          <f7-card-content :padding="false">
            <img style="width: 100%; height: 90px;" src="https://cdn.framework7.io/placeholder/cats-300x300-6.jpg" />
            <div class="text-align-center">
              <f7-link href="/home_science/">
                <p><h5>Cat 4</h5></p>
              </f7-link>
            </div>
          </f7-card-content>
        </f7-card>
      </f7-col>
      <f7-col width="33" class="demo-col-center-content">
        <f7-card class="demo-facebook-card">
          <f7-card-content :padding="false">
            <img style="width: 100%; height: 90px;" src="https://cdn.framework7.io/placeholder/cats-150x300-5.jpg" />
            <div class="text-align-center">
              <f7-link href="/home_science/">
                <p><h5>Cat 4</h5></p>
              </f7-link>
            </div>
          </f7-card-content>
        </f7-card>
      </f7-col>
      <f7-col width="33" class="demo-col-center-content">
        <f7-card class="demo-facebook-card">
          <f7-card-content :padding="false">
            <img style="width: 100%; height: 90px;" src="https://cdn.framework7.io/placeholder/cats-300x300-1.jpg" />
            <div class="text-align-center">
              <f7-link href="/home_science/">
                <p><h5>Cat 5</h5></p>
              </f7-link>
            </div>
          </f7-card-content>
        </f7-card>
      </f7-col>
    </f7-row>

    <!-- <f7-block-title>List</f7-block-title>
    <f7-block strong>
      <p>Here is Images page!</p>
    </f7-block> -->
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
