
const phoneInputField = document.querySelector("#phone");
const phoneInputField2 = document.querySelector("#phone2");
   
   function getIp(callback) {
fetch('https://ipinfo.io/41.47.128.120?token=6f23784d8e0441', { headers: { 'Accept': 'application/json' }})
.then((resp) => resp.json())
.catch(() => {
  return {
    country: "eg",
  };
})
.then((resp) => callback(resp.country));
}
const phoneInput = window.intlTelInput(phoneInputField, {
initialCountry: "auto",
geoIpLookup: getIp,
utilsScript:
"https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});
const phoneInput2 = window.intlTelInput(phoneInputField2, {
initialCountry: "auto",
geoIpLookup: getIp,
utilsScript:
"https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});
