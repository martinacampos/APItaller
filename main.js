document.addEventListener("DOMContentLoaded", () => {
    const apiKey = "57e4f587f070fdb96bf3d756dbd3e52c"; 
    const boton = document.getElementById("boton");
    const ciudadBuscada = document.getElementById("ciudad");
    const informacionCiudad = document.getElementById("informacionCiudad");
  
    boton.addEventListener("click", () => {
      const ciudad = ciudadBuscada.value;
      if (ciudad) {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`; 
  
        fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => {
            const temperature = data.main.temp;
            const description = data.weather[0].description;
  
            informacionCiudad.innerHTML = `En ${ciudad}, la temperatura es de ${temperature}°C`;
          })
          .catch((error) => {
            console.error("Error al obtener los datos del tiempo:", error);
            informacionCiudad.innerHTML = "No se pudo obtener la información del tiempo.";
          });
      }
    });
  });
  