var simplemaps_usmap_mapdata={
  main_settings: {
    //General settings
    width: "650", //or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    
    //Label defaults
    label_color: "#fff",
    hide_labels: "no",
    border_color: "#FFFFFF",
    
    //State defaults
    state_description: "<button type=\"button\">Add entire state</button> <button type=\"button\" onclick=location.href='http://simplemaps.com/custom/us/YKkKaxLV#states'>Select specific state courts</button>",
    state_color: "#88A4BC",
    state_hover_color: "#3B729F",
    state_url: "",
    all_states_inactive: "no",
    
    //Location defaults
    location_description: "<button type=\"button\">Add entire circuit</button> <button type=\"button\">Select specifict states / courts</button>",
    location_color: "#333",
    location_opacity: "",
    location_url: "",
    location_size: "35",
    location_type: "square",
    all_locations_inactive: "no",
    url_new_tab: "no",
    auto_load: "yes",
   
    //Zoom settings
    zoom: "yes",
    initial_zoom: "-1",
    initial_zoom_solo: "no",
    popups: "on_click",
    all_states_zoomable: "no",
    location_image_url: "",
    
    //Advanced settings
    div: "map",
    label_size: "20"
  },
  state_specific: {
    HI: {
      name: "Hawaii",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "default",
      inactive: "default",
      zoomable: "default"
    },
    AK: {
      name: "Alaska"
    },
    FL: {
      name: "Florida",
      url: "http://simplemaps.com/custom/county/f3R71eaD"
    },
    NH: {
      name: "New Hampshire"
    },
    VT: {
      name: "Vermont"
    },
    ME: {
      name: "Maine"
    },
    RI: {
      name: "Rhode Island"
    },
    NY: {
      name: "New York"
    },
    PA: {
      name: "Pennsylvania"
    },
    NJ: {
      name: "New Jersey"
    },
    DE: {
      name: "Delaware"
    },
    MD: {
      name: "Maryland"
    },
    VA: {
      name: "Virginia"
    },
    WV: {
      name: "West Virginia"
    },
    OH: {
      name: "Ohio"
    },
    IN: {
      name: "Indiana"
    },
    IL: {
      name: "Illinois"
    },
    CT: {
      name: "Connecticut"
    },
    WI: {
      name: "Wisconsin"
    },
    NC: {
      name: "North Carolina"
    },
    DC: {
      name: "District of Columbia"
    },
    MA: {
      name: "Massachusetts"
    },
    TN: {
      name: "Tennessee"
    },
    AR: {
      name: "Arkansas"
    },
    MO: {
      name: "Missouri"
    },
    GA: {
      name: "Georgia"
    },
    SC: {
      name: "South Carolina"
    },
    KY: {
      name: "Kentucky"
    },
    AL: {
      name: "Alabama"
    },
    LA: {
      name: "Louisiana"
    },
    MS: {
      name: "Mississippi"
    },
    IA: {
      name: "Iowa"
    },
    MN: {
      name: "Minnesota"
    },
    OK: {
      name: "Oklahoma"
    },
    TX: {
      name: "Texas"
    },
    NM: {
      name: "New Mexico"
    },
    KS: {
      name: "Kansas"
    },
    NE: {
      name: "Nebraska"
    },
    SD: {
      name: "South Dakota"
    },
    ND: {
      name: "North Dakota"
    },
    WY: {
      name: "Wyoming"
    },
    MT: {
      name: "Montana"
    },
    CO: {
      name: "Colorado"
    },
    UT: {
      name: "Utah"
    },
    AZ: {
      name: "Arizona"
    },
    NV: {
      name: "Nevada"
    },
    OR: {
      name: "Oregon"
    },
    WA: {
      name: "Washington"
    },
    CA: {
      name: "California"
    },
    MI: {
      name: "Michigan"
    },
    ID: {
      name: "Idaho"
    },
    GU: {
      name: "Guam",
      hide: "no"
    },
    VI: {
      name: "Virgin Islands",
      hide: "no"
    },
    PR: {
      name: "Puerto Rico",
      hide: "no"
    },
    MP: {
      name: "Northern Mariana Islands",
      hide: "yes"
    }
  },
  locations: {
    "0": {
      lat: 38.833,
      lng: -104.822,
      name: "10th Circuit",
      color: "default",
      description: "default",
      url: "default",
      size: "default",
      type: "default",
      image_url: "default",
      opacity: "default"
    },
    "1": {
      lat: 39.528,
      lng: -119.813,
      name: "9th Circuit"
    },
    "2": {
      lat: "43.943",
      lng: "-97.096",
      name: "8th Circuit"
    },
    "3": {
      lat: 41.884,
      lng: -87.632,
      name: "7th Circuit"
    },
    "4": {
      lat: 44.802,
      lng: -68.771,
      name: "1st Circuit"
    },
    "5": {
      lat: 39.952,
      lng: -75.162,
      name: "3rd Circuit"
    },
    "6": {
      lat: 37.541,
      lng: -77.434,
      name: "4th Circuit"
    },
    "7": {
      lat: 33.748,
      lng: -84.391,
      name: "11th Circuit"
    },
    "8": {
      lat: "38",
      lng: -84.504,
      name: "6th Circuit"
    },
    "9": {
      lat: 31.463,
      lng: "-94",
      name: "5th Circuit"
    },
    "10": {
      lat: "43",
      lng: "-75",
      name: "2nd Circuit"
    }
  },
  regions: {
    "0": {
      name: "6th Circuit",
      states: [
        "MI",
        "OH",
        "KY",
        "TN"
      ],
      cascade: "yes",
      color: "#1374C6"
    },
    "1": {
      name: "7th Circuit",
      states: [
        "IL",
        "WI",
        "IN"
      ],
      color: "#58AE37",
      cascade: "yes"
    },
    "2": {
      name: "8th Circuit",
      states: [
        "ND",
        "SD",
        "NE",
        "MN",
        "IA",
        "MO",
        "AR"
      ],
      color: "#D73B3E",
      cascade: "yes"
    },
    "3": {
      name: "9th Circuit",
      states: [
        "WA",
        "OR",
        "CA",
        "NV",
        "AZ",
        "ID",
        "MT",
        "AK",
        "HI",
        "GU"
      ],
      cascade: "yes",
      color: "#394F7E"
    },
    "4": {
      states: [
        "WY",
        "UT",
        "CO",
        "KS",
        "OK",
        "NM"
      ],
      name: "10th Circuit",
      cascade: "yes",
      color: "#F8941F"
    },
    "5": {
      states: [
        "AL",
        "GA",
        "FL"
      ],
      name: "11th Circuit",
      cascade: "yes",
      color: "#04B19F"
    },
    "6": {
      states: [
        "WV",
        "DC",
        "MD",
        "VA",
        "NC",
        "SC"
      ],
      name: "4th Circuit",
      cascade: "yes",
      color: "#CC5200"
    },
    "7": {
      states: [
        "NY",
        "VT",
        "CT"
      ],
      name: "2nd Circuit",
      cascade: "yes",
      color: "#ED6269"
    },
    "8": {
      states: [
        "PA",
        "NJ",
        "DE",
        "VI"
      ],
      name: "3rd Circuit",
      cascade: "yes",
      color: "#CAC02D"
    },
    "9": {
      states: [
        "ME",
        "NH",
        "MA",
        "RI",
        "PR"
      ],
      name: "1st Circuit",
      cascade: "yes",
      color: "#148B33"
    },
    "10": {
      states: [
        "TX",
        "LA",
        "MS"
      ],
      name: "5th Circuit",
      cascade: "yes",
      color: "#AB468A"
    }
  }
};