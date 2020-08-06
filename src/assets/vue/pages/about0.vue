<template>
  <f7-page>
    <f7-navbar title="About" back-link="back"></f7-navbar>
    <f7-block-title>Historical Background</f7-block-title>
    <f7-block strong>
      <p>Second Joint Indo-American Team (1960) headed by Dr. N.S. Randhawa recommended specifically the establishment of Farm Universities and spelt out the basic objectives of these Universities asInstitutional Autonomy ,Inclusion of Agriculture, Veterinary / Animal Husbandry and Home Science and Integration of Teaching, Research and Extension .Later, the report of the Second National Education Commission (1964-66), headed by Dr. D.S. Kothari stressed the need for establishing at least one Agricultural University in each Indian State. As a result, the Andhra Pradesh Agricultural University (APAU) was established on June 12, 1964 at Hyderabad. Sri O. PullaReddi, I.C.S. (Retired) was the first Vice-Chancellor of the University.</p>

      <p>In accordance with the provisions of the Andhra Pradesh Agricultural University Act, 1963, some of the Colleges of Agriculture and Veterinary Science were transferred from the Universities to which they had been affiliated to the Andhra Pradesh Agricultural University during June, 1964. These were: College of Agriculture and Veterinary Science, Hyderabad (established in 1961, affiliated to Osmania University), Agricultural College, Bapatla(established in 1945, affiliated to Andhra University), Sri Venkateswara Agricultural College, Tirupati (established in 1961, affiliated to Sri Venkateswara University) and Andhra Veterinary College, Tirupati (established in 1961, also affiliated to Sri Venkateswara University). In addition, 41 Agricultural Research Stations, functioning under the Department of Agriculture and four Research Stations of the Animal Husbandry Department were transferred to the University in July, 1966 and May, 1967, respectively.</p>

      <p>The University was formally inaugurated on March 20, 1965 byShri LalBahadurShastri, the then Hon'ble Prime Minister of India. Another Significant milestone was the inauguration of the University's building programme by Smt Indira Gandhi the then Hon’blePrime Minister of India on June 23. 1966.Subsequently, the University was renamed as Acharya N G Ranga Agricultural University (ANGRAU) on November 7, 1996 in honour and memory of an outstanding Parliamentarian, Acharya N.G. Ranga who rendered remarkableself less service for the cause of the farmers and is regarded as an outstanding educationist, Kissan leader and freedom fighter.</p>
    </f7-block>

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
