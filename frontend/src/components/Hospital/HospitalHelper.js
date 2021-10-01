export const HospitalHelper = async () => {
  try {
    const res = await fetch("http://localhost:5000/get-hospitals");
    const data = await res.json();
    return data
  } catch (err) {
    console.log(err);
  }
};

  export const distance = (userLat,userLong, {lat, long}) => {
    var p = 0.017453292519943295; // Math.PI / 180
    var c = Math.cos;
    var a =
      0.5 -
      c((userLat - lat) * p) / 2 +
      (c(lat * p) * c(userLat * p) * (1 - c((userLong - long) * p))) / 2;

    return 12742 * Math.asin(Math.sqrt(a));
  };