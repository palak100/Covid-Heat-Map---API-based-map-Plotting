function updateMap() {
  fetch("./data.json")
    .then((Response) => Response.json())
    .then((rsp) => {
      rsp.data.forEach((element) => {
        latitude = element.latitude;
        longitude = element.longitude;

        // we are marking the locations on the map using latitude and longitude
        cases = element.infected;
        if (cases > 255) {
          color = "rgb(255, 0, 0)";
        } else {
          color = `rgb(${cases},0,0)`;
        }
        // Create a default Marker and add it to the map.
        new mapboxgl.Marker({
          color: color,
        })
          .setLngLat([longitude, latitude])
          .addTo(map);
      });
    });
}
updateMap() 