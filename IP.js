//sorry for the code it is very much lengthy and Dirty I just took a challenge to make this project just with position thats why the code is lengthy and dirty 
// Getting Html element in Javascript
/* Get button from html */                const clickbtn = document.getElementById('Show')
/* Get IP from html */                     const ip = document.getElementById('span-1')
/* Get Locate from html */                  const locate = document.getElementById('span-2')
/* Get Latitude from html */                 const latitudeDB = document.getElementById('span-3')
/* Get Longitude from html */                 const longitudeDB = document.getElementById('span-4')
/* Get Timezone from html */                   const timezoneDB = document.getElementById('span-5')
/* Get Postal from html */                      const postalDB = document.getElementById('span-6')
/* Get Org from html */                          const orgDB = document.getElementById('span-7')
/* Get Population from html */                    const populationDB = document.getElementById('span-8')
/* Get Capital from html */                        const capitalDB = document.getElementById('span-9')
/* Get Country-code from html */                    const codeDB = document.getElementById('span-10')
/* Get Calling-code from html */                     const callingcodeDB = document.getElementById('span-11')
/* Get Area from html */                              const areaDB = document.getElementById('span-12')
/* Get Currency from html */                           const currencyDB = document.getElementById('span-13')
/* Get Continent from html */                           const continentDB = document.getElementById('span-14')
/* Get Loader from html */                               const loader = document.querySelector('.loader')
/* Get Deatail Div from html */                           const detail = document.querySelector('.detail')
                                                           const map = document.getElementById('map')
                                                           const anchor = document.getElementById('anchor')
  
/* jquery start */
/* main syntax */       $(document).ready(function(){
/* Button onclick */       $('#Show').click(function(){ 
/* Preloader */              $('.loader').css("display" , "flex");
                             $('.detail').css("display" , "none");
    
/* Getting the response from API */      axios.get("https://ipapi.co/json/").then(response =>{
/* Preloader */                           $('.loader').css("display" , "none");
/* During load ,hide element */           $('.detail').css("display" , "block");
/* Print the whole Response in console */ console.log(response)
/* Get IP Address */                      ip.textContent = `${response.data.ip}`
/* Get LOCATION */                        locate.textContent = `${response.data.city}, ${response.data.region}, ${response.data.country_name}` 
/* Get LATITUDE */                        latitudeDB.textContent = `${response.data.latitude} `
/* Get LONGITUDE */                       longitudeDB.textContent = `${response.data.longitude}`                                   
/* Get TIMEZONE */                        timezoneDB.textContent = `${response.data.timezone}`
/* Get POSTAL */                          postalDB.textContent = `${response.data.postal}`
/* Get ORG */                             orgDB.textContent = `${response.data.org}`
/* Get POPULATION */                      populationDB.textContent = `${response.data.country_population}`
/* Get CAPITAL */                         capitalDB.textContent = `${response.data.country_capital}`
/* Get COUNTRY-CODE */                    codeDB.textContent = `${response.data.country_code}`
/* Get CALLING-CODE */                    callingcodeDB.textContent = `${response.data.country_calling_code}`
/* Get AREA */                            areaDB.textContent = ` ${response.data.country_area}`
/* Get CURRENCY */                        currencyDB.textContent = ` ${response.data.currency_name}`
/* Get CONTINENT*/                        continentDB.textContent = `${response.data.continent_code}`
                                           
                                        
                                      


/* Response Data Styling */
      $('#span-1').css({
        "color" : "white"
      });
      $('#span-2').css({
        "color" : "white"
      });
      $('#span-3').css({
        "color" : "white"
      });
      $('#span-4').css({
        "color" : "white"
      });
      $('#span-5').css({
        "color" : "white"
      });
      $('#span-6').css({
        "color" : "white"
      });
      $('#span-7').css({
        "color" : "white"
      });
      $('#span-8').css({
        "color" : "white"
      });
      $('#span-9').css({
        "color" : "white"
      });
      $('#span-10').css({
        "color" : "white"
      });
      $('#span-11').css({
        "color" : "white"
      });      
      $('#span-12').css({
        "color" : "white"
      });
      $('#span-13').css({
        "color" : "white"
      });
      $('#span-14').css({
        "color" : "white"
      });
       
     });
    });
    
/* Button Hover Effect                    */
    $('#Show').mouseenter(function () { 
      $('#Show').css({
        "width" : "200px",
        "letterSpacing" : "4px"
         
      });
    });
    $('#Show').mouseleave(function () { 
      $('#Show').css({
        "width" : "150px",
        "transiton" : "all 1s linear",
        "letterSpacing" : "0px"
      });
    });
    
  }); /* Jquery end */
  function link() { 

   }
