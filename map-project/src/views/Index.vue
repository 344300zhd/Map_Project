<template>
  <div class="box">
    <select name="mapType" @change="changeMapType" id="mapType">
      <option :value="item" v-for="(item,index) in mapTypeList" :key="index">{{ item }}</option>
    </select>
    <div class="mapBox">
      <MapBox :type="mapType"></MapBox>
    </div>
  </div>
</template>

<script>
import MapBox from "@/components/MapBox";
export default {
  name:"Index",
  components:{MapBox},
  data(){
    return{
      mapTypeList:[
        'mapbox://styles/mapbox/streets-v11',
        'mapbox://styles/mapbox/outdoors-v11',
        'mapbox://styles/mapbox/light-v10',
        'mapbox://styles/mapbox/dark-v10',
        'mapbox://styles/mapbox/satellite-v9',
        'mapbox://styles/mapbox/satellite-streets-v11',
        'mapbox://styles/mapbox/navigation-day-v1',
        'mapbox://styles/mapbox/navigation-night-v1'
      ],
      mapType:''
    }
  },
  created(){
    this.mapType = this.mapTypeList[3]
  },
  methods:{
    changeMapType(){
      let selectedIndex = document.getElementById("mapType").selectedIndex;
      this.mapType = this.mapTypeList[selectedIndex]
      console.log(this.mapType);
    }
  }
}
</script>

<style lang="scss" scoped>
.box{
  width: 100vw;
  height: 100vh;
  background-image: url('../assets/img/bg.jpg');
  background-size: cover;
  .mapBox{
    width: 800px;
    height: 500px;
    overflow: hidden;
    margin: 100px auto;
    opacity: 0.8;
  }
}
</style>