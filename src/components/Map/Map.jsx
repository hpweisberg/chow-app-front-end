

const map = () => {
  const initMap = () => {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
  }
  
  return (
    <>
      <h1>Map</h1>
      <div id="map" className="w-84 h-84 border-red-500 bg-blue-500">
        <h4>hi</h4>
      </div>
    </>
  );
}

export default map;