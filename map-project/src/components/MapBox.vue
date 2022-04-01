<template>
  <div id="mapBox"></div>
</template>

<script>
import mapbox from "mapbox-gl";
import MapboxLanguage  from '@mapbox/mapbox-gl-language';
import "mapbox-gl/dist/mapbox-gl.css";
export default {
  name: "MapBox",
  props: {
    type: {
      type: String,
      default: "mapbox://styles/mapbox/navigation-night-v1",
    },
  },
  watch: {
    type(nval, oval) {
      if (nval) {
        this.initMap()
      }
    },
  },
  methods: {
    initMap() {
      // access token
      mapbox.accessToken = "pk.eyJ1Ijoiem91aGFvZG9uZyIsImEiOiJjbDFid3ZzdGEwMXk4M2NsZ3UybTc1YzhiIn0.2yE99uLb5fsqKCZpsZk8TA";
      // 英文标注转换为中文   
      mapbox.setRTLTextPlugin("https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.1.0/mapbox-gl-rtl-text.js");
      const map = new mapbox.Map({
        container: "mapBox",
        style: this.type,
        center: [113.883591, 22.580351],
        zoom: 8,
      });
      let language = new MapboxLanguage({ defaultLanguage: "zh-Hans" });
      map.addControl(language);
      // create the popup
      let popup = new mapbox.Popup({ offset: 25 }).setText(
        "广东省深圳市艺奥科技有限公司"
      );
      // create dom element for the marker
      let el = document.createElement("div");
      el.id = "marker";
      // location
      let monument = [113.883591, 22.580351];
      // create the marker
      new mapbox.Marker(el).setLngLat(monument).setPopup(popup).addTo(map);
    },
  },
  mounted() {
      this.initMap()
  },
};
</script>

<style lang="scss">
#mapBox {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
#marker {
  background-image: url("../assets/img/logo.png");
  background-size: cover;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
}
.mapbox-popup {
  max-width: 200px;
}
</style>