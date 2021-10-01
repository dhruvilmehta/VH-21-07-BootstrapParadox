export const HospitalHelper = async () => {
  try {
    const res = await fetch("http://localhost:5000/get-hospitals");
    const data = await res.json();
    return data
  } catch (err) {
    console.log(err);
  }
};


export const Location = (h) => {
  let a=1
    navigator.geolocation.getCurrentPosition(function (position) {
      const dist = distance(position, h.lat, h.long);
      // h.distance = dist;
      // console.log(typeof(h.distance))
      console.log("c",dist)
      a=dist
    });
    console.log("ss",a)
  };
  const distance = (position, lat1, lon1) => {

    var lat2 = position.coords.latitude;
    var lon2 = position.coords.longitude;
    var p = 0.017453292519943295; 
    var c = Math.cos;
    var a =
      0.5 -
      c((lat2 - lat1) * p) / 2 +
      (c(lat1 * p) * c(lat2 * p) * (1 - c((lon2 - lon1) * p))) / 2;

    return 12742 * Math.asin(Math.sqrt(a));
  };