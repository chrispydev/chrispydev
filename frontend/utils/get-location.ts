function showPosition(position: any) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const location = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
 return location
}

function getLocation() {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const location = showPosition(position);
          resolve(location);
        },
        (error) => {
          reject(error);
        }
      );
    } else {
      reject(new Error('Geolocation is not supported by this browser.'));
    }
  });
}

export default getLocation;
