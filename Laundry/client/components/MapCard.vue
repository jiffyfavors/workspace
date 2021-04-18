<template>
  <v-bottom-sheet inset v-model="diag">
    <v-card>
    	<v-card-title>Store Location</v-card-title>
    	<v-card-text>
      <div class="mapcontainer">
        <GMap id="gmap" ref="gMap" :center="location" :options="mapoption" :zoom="15">
          <GMapMarker ref="gmapmarker" :position="location" :options="{ icon: selectedmarker }" />
        </GMap>
      </div>
      </v-card-text>
      <v-card-actions>
      	<v-btn outlined block @click.stop="openMap" text>Get Direction</v-btn>
      </v-card-actions>
    </v-card>
  </v-bottom-sheet>
</template>

<script>
export default {
  props: {
    location: {
      type: Object,
      required: true,
      default: {

        lat: 0,
        lng: 0

      }
    }
  },
  data: () => ({
  	diag:false,
    selectedmarker: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHUSURBVHgB5VU7SwNBEJ7LmZBgMC+UdKKx0MZCG2srwcbCB2glpFDQ3to/IegvSAIWPrBJIySlipUKKqYLaHJ3iWIelzu/DTk8j71H7MQPltmZnflmZ3b3juivQ3BzCIfDI4FAYBvTRV3XR7tBglCCOIP9oFwuv/46QSwWWwfZIaaDNi7vGOlqtZqhfhPE4/EViAy5V6ljE8uVSuXYc4JkMjncarUeMR0ib5Db7fZEvV6vWBd8PG+Q73LIFYyj3lAsa1G/37/D4+JWgPbcQkybd9jpdGYVRXlmSiQSSYmieMWmhgMuwI0kSTPkpQJgzKJnDfJuKYryBJH7sVNBSPGI7BKoFl3n+GguMY4JHiz6GtoybiisRczmEtPFAM+Ifl6i5DmTKYqeX+Nssj19lUz9N2J4XNxDTiQSkwi4oz6ADU3hLdxb7dwW9RyL5B0FHrltAgZUsEce4eRrmwB3ugCRJ3fk4VvsOwEDHtcWxKeDy4emaWmHdRKdFpvNphQKhdhFmOet42D3sftTJw7X/wHgw/U8h1ywkJ/gYJeI/wi/g8kdmqqqG5Alk62Er+emG7nXBFSr1aroNSNknwOVzZnNS6xIHtFoNF6CweAbpheyLOfo3+ALfrSuzJ1F8EsAAAAASUVORK5CYII=',

    mapoption: {
      fullscreenControl: false,
      streetViewControl: false,
      mapTypeControl: false,
      zoomControl: true,
      gestureHandling: 'greedy'
    }
  }),
  methods:{
  	showDialog(){
  		this.diag = true
  	},
  	openMap() {
            const coord = this.location
            var ioslink = 'maps://maps.google.com/maps?/dir/?api=&destination=' + coord.lat + ',' + coord.lng + '&amp;ll=';
            var other_link = 'https://www.google.com/maps/dir/?api=1&destination=' + coord.lat + ',' + coord.lng + '&amp;ll='
            if ((navigator.platform.indexOf("iPhone") != -1) || (navigator.platform.indexOf("iPad") != -1) || (navigator.platform.indexOf("iPod") != -1)) window.open(ioslink, '_blank');
            else window.open(other_link, '_blank');
        },
  }
};
</script>
