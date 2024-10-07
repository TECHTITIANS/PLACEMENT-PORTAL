function initMap() {
    // Replace with your actual API key
    const apiKey = "AIzaSyDDstdSa4hdRFVz3J9laa6kMyF8gqfH-BI";
  
    // Create a new map centered on Government Engineering College Bharuch (replace with actual coordinates)
    const map = new google.maps.Map(document.getElementById("map-container"), {
      zoom: 14,
      center: { lat: 21.7537, lng: 73.2088 }, // Replace with GEC Bharuch coordinates
    });
  
    // Define company locations and information (replace with your company data)
    const companies = [
      {
        name: " GNFC ",
        lat: 21.72,
        lng: 72.97,
        description: "A leading company in the tech industry."
      },
      {
        name: "TCS",
        lat: 22.59,
        lng: 73.18,
        description: "A prominent player in the manufacturing sector."
      },
      {
        name: "WIPRO",
        lat: 22.57,
        lng: 73.18,
        description: "A prominent player in the manufacturing sector."
      }
      ,
      {
        name: "GODREJ",
        lat: 22.34,
        lng: 73.01,
        description: "A prominent player in the manufacturing sector."
      }
     ,
     {
      name: "MICRON",
      lat: 23.03,
      lng: 72.67,
      description: "A prominent player in the manufacturing sector."
    },
    {
      name: "ADANI",
      lat: 22.59,
      lng: 73.15,
      description: "A prominent player in the manufacturing sector."
    }
     ,
     {
      name: "RELIANCE",
      lat: 22.53,
      lng: 73.15,
      description: "A prominent player in the manufacturing sector."
    }
     ,
      // Add more companies as needed
    ];
  
    // Create markers for each company location
    companies.forEach(company => {
      const marker = new google.maps.Marker({
        position: { lat: company.lat, lng: company.lng },
        map: map,
        title: company.name
      });
  
      // Add info window on marker click (optional)
      const infoWindow = new google.maps.InfoWindow({
        content: `<b>${company.name}</b><br>${company.description}`
      });
      marker.addListener("click", () => {
        infoWindow.open(map, marker);
      });
    });
  }
  