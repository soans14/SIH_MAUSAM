/**
 * Mausam - Personalized Weather Intelligence Platform
 * Mock Data Engine reflecting India Meteorological Department (IMD) / MoES Standards
 */

const MAUSAM_CITIES = {
  delhi: {
    name: "New Delhi",
    hindiName: "नई दिल्ली",
    state: "National Capital Region",
    temp: 29,
    feelsLike: 32,
    condition: "Hazy Sunshine & Moderate Smog",
    conditionCode: "haze",
    high: 34,
    low: 21,
    humidity: 68,
    windSpeed: 11,
    windDir: "NW",
    pressure: 1012,
    visibility: "2.4 km (Moderate Fog / Smog)",
    dewPoint: 22,
    rainfallProb: 15,
    rainfallToday: "0.0 mm",
    imdAlert: {
      level: "Orange", // Green, Yellow, Orange, Red
      title: "Poor Air Quality & Morning Fog Advisory",
      hindiTitle: "खराब वायु गुणवत्ता एवं सुबह का कोहरा परामर्श",
      description: "Severe smog in morning hours. Low visibility on Eastern Peripheral Expressway. Sensitive groups advised indoors.",
      validTill: "Valid till 11:30 AM IST"
    },
    // Persona-specific data metrics
    health: {
      aqi: 242,
      aqiCategory: "Poor / Unhealthy",
      aqiColor: "#ef4444",
      pm25: 112,
      pm10: 210,
      pollenCount: "Moderate (38 grains/m³)",
      pollenType: "Grass & Parthenium (Congress Grass)",
      uvIndex: 7.4,
      uvCategory: "High",
      uvAdvice: "Seek shade between 11 AM - 3 PM. Apply SPF 30+ sunscreen.",
      humidityImpact: "Moderate irritation risk for asthma patients."
    },
    fitness: {
      bestHours: [
        { time: "05:30 - 06:45 AM", score: "Fair", status: "Cool, but AQI elevated (Mask recommended)", color: "yellow" },
        { time: "07:00 - 11:00 AM", score: "Poor", status: "High traffic emissions & rising heat", color: "red" },
        { time: "05:30 - 07:15 PM", score: "Good", status: "Optimal running window; mild breeze", color: "green" },
        { time: "07:30 - 09:30 PM", score: "Moderate", status: "Pleasant 26°C; moderate humidity", color: "yellow" }
      ],
      heatAlert: "Low Heat Cramp Risk",
      wbgt: "25.2°C (Green Flag)",
      sunrise: "06:12 AM",
      sunset: "06:34 PM",
      goldenHour: "05:55 PM - 06:34 PM"
    },
    beach: {
      available: false,
      message: "Inland location (Nearest coastal hub: Mumbai / Visakhapatnam)"
    },
    traveler: {
      airportStatus: "IGI Airport (DEL): Minor runway delays due to morning smog (CAT-IIIB ILS active).",
      flightImpact: "Expected 15-25 min delay on morning arrivals.",
      railStatus: "Northern Railway: 4 trains running 30m late due to haze.",
      packingAdvice: ["N95 Pollution Mask", "Light cotton jacket for evening", "Hydration flask", "Moisturizer"]
    },
    family: {
      schoolCommute: {
        score: "Moderate Caution",
        detail: "Morning haze reduces visibility to 2.4 km at 7:30 AM drop-off. Children with asthma should wear masks."
      },
      rainRiskMorning: "5% (No raincoat required)",
      playgroundHours: "Best outdoor playground window: 04:45 PM - 06:15 PM.",
      comfortRating: "72/100"
    },
    agri: {
      soilMoisture: "38% (Adequate for topsoil)",
      monsoonForecast: "Dry spell expected for next 4 days. Light drizzle likely over weekend.",
      frostAlert: "No frost risk (Min temp 21°C)",
      agroAdvisory: "Favorable conditions for mustard and winter vegetable bed preparation. Complete land tilling."
    },
    commuter: {
      trafficWeatherImpact: "Moderate",
      fogVisibility: "2.4 km (Drops to 800m near Yamuna riverbed)",
      roadCondition: "Dry; low friction hazard",
      criticalAlert: "Dense haze warning on DND Flyway & NH-48 during 06:00 - 08:30 AM."
    },
    eventPlanner: {
      comfortIndex: "Moderate (68/100)",
      weddingSuitability: "Favorable for evening lawn receptions. Evening temp drops to 24°C.",
      rainProbabilityCurve: [
        { hour: "14:00", prob: 10 }, { hour: "16:00", prob: 10 },
        { hour: "18:00", prob: 15 }, { hour: "20:00", prob: 15 },
        { hour: "22:00", prob: 5 }, { hour: "00:00", prob: 5 }
      ],
      windLoadRisk: "Low (Gusts up to 18 km/h; marquees secure)"
    }
  },

  mumbai: {
    name: "Mumbai",
    hindiName: "मुंबई",
    state: "Maharashtra",
    temp: 31,
    feelsLike: 37,
    condition: "Tropical Humid with Coastal Breeze",
    conditionCode: "partly-cloudy",
    high: 33,
    low: 26,
    humidity: 82,
    windSpeed: 21,
    windDir: "WSW",
    pressure: 1009,
    visibility: "6.0 km (Good)",
    dewPoint: 25,
    rainfallProb: 40,
    rainfallToday: "14.2 mm",
    imdAlert: {
      level: "Yellow",
      title: "High Tide & Coastal Wave Warning",
      hindiTitle: "उच्च ज्वार (हाई टाइड) एवं तटीय तरंग चेतावनी",
      description: "High tide of 4.12 meters expected at 01:45 PM. Fishermen advised not to venture beyond 10 nautical miles.",
      validTill: "Valid till 06:00 PM IST"
    },
    health: {
      aqi: 78,
      aqiCategory: "Satisfactory / Good",
      aqiColor: "#10b981",
      pm25: 24,
      pm10: 62,
      pollenCount: "Low (12 grains/m³)",
      pollenType: "Coastal flora & palm pollen",
      uvIndex: 9.1,
      uvCategory: "Very High",
      uvAdvice: "Extreme UV during midday. Sunscreen SPF 50+, wide-brim hat essential.",
      humidityImpact: "Very high humidity (82%). Heavy sweating; high risk of dehydration & heat rash."
    },
    fitness: {
      bestHours: [
        { time: "05:45 - 07:00 AM", score: "Excellent", status: "Cool Arabian sea breeze, best cardio hour", color: "green" },
        { time: "07:30 - 10:30 AM", score: "Moderate", status: "Rapidly rising humidity (Feels like 34°C)", color: "yellow" },
        { time: "11:00 - 04:30 PM", score: "Dangerous", status: "High Heat Index (Feels like 39°C); avoid running", color: "red" },
        { time: "06:15 - 08:00 PM", score: "Good", status: "Sunset jog along Marine Drive / Bandra bandstand", color: "green" }
      ],
      heatAlert: "Caution: High Heat Index (37°C)",
      wbgt: "28.5°C (Yellow Flag)",
      sunrise: "06:29 AM",
      sunset: "06:31 PM",
      goldenHour: "05:50 PM - 06:31 PM"
    },
    beach: {
      available: true,
      seaState: "Moderate to Rough",
      marineFlag: "Yellow Flag (Caution)",
      marineFlagColor: "#f59e0b",
      tides: [
        { type: "High Tide", time: "01:45 PM", height: "4.12 m" },
        { type: "Low Tide", time: "07:30 PM", height: "0.85 m" },
        { type: "Next High Tide", time: "02:10 AM (Next Day)", height: "3.80 m" }
      ],
      waveHeight: "1.6 m - 2.1 m",
      swellPeriod: "8.5 seconds",
      waterTemp: "28.2°C (Warm & inviting)",
      surfConditions: "Chippy surf at Juhu & Aksa; rip currents active near rocky promontories.",
      lifeguardStatus: "Lifeguards on active patrol along Girgaon & Juhu beach."
    },
    traveler: {
      airportStatus: "CSMIA (BOM): Normal operations. Occasional crosswind gusts up to 28 knots.",
      flightImpact: "On-time flights. Runway 27 active.",
      railStatus: "Western & Central Railway suburban local trains running on schedule.",
      packingAdvice: ["Compact umbrella / raincoat", "Anti-perspirant & light linen clothing", "Waterproof footwear", "Sunblock SPF 50+"]
    },
    family: {
      schoolCommute: {
        score: "Safe & Clear",
        detail: "Clear roads, morning breeze. Short passing shower possible near coastal suburbs."
      },
      rainRiskMorning: "25% (Light drizzle possible)",
      playgroundHours: "Best park hours: 05:00 PM - 06:45 PM (Avoid midday sun).",
      comfortRating: "65/100 (Humid)"
    },
    agri: {
      soilMoisture: "52% (High coastal soil moisture)",
      monsoonForecast: "Scattered coastal squalls likely over next 48 hours.",
      frostAlert: "No frost (Tropical coastal regime)",
      agroAdvisory: "Konkan belt: Ensure drainage channels are clear for mango and cashew plantations to prevent water stagnation."
    },
    commuter: {
      trafficWeatherImpact: "Low to Moderate",
      fogVisibility: "6.0 km (Clear visibility)",
      roadCondition: "Damp spots on Eastern & Western Express Highways",
      criticalAlert: "High tide at 01:45 PM may cause minor drainage backflow in low-lying areas near Gandhi Market if rain coincides."
    },
    eventPlanner: {
      comfortIndex: "Moderate (62/100 - High Sensible Heat)",
      weddingSuitability: "Air-conditioned banquet halls or high-velocity misty fans strongly advised for outdoor lawns.",
      rainProbabilityCurve: [
        { hour: "14:00", prob: 35 }, { hour: "16:00", prob: 40 },
        { hour: "18:00", prob: 25 }, { hour: "20:00", prob: 20 },
        { hour: "22:00", prob: 15 }, { hour: "00:00", prob: 10 }
      ],
      windLoadRisk: "Moderate (Sea gusts up to 32 km/h; tie down tensile canopies)"
    }
  },

  bengaluru: {
    name: "Bengaluru",
    hindiName: "बेंगलुरु",
    state: "Karnataka",
    temp: 24,
    feelsLike: 24,
    condition: "Pleasant Breeze & Mild Overcast",
    conditionCode: "cloudy",
    high: 27,
    low: 18,
    humidity: 58,
    windSpeed: 16,
    windDir: "E",
    pressure: 1016,
    visibility: "9.0 km (Excellent)",
    dewPoint: 16,
    rainfallProb: 20,
    rainfallToday: "2.1 mm",
    imdAlert: {
      level: "Green",
      title: "No Weather Warning in Effect",
      hindiTitle: "कोई मौसम चेतावनी नहीं (सामान्य मौसम)",
      description: "Ideal weather conditions prevailing over Bengaluru Urban & Rural districts. Pleasant daytime temps.",
      validTill: "Valid till next 24 Hours"
    },
    health: {
      aqi: 45,
      aqiCategory: "Good (Green Zone)",
      aqiColor: "#10b981",
      pm25: 12,
      pm10: 36,
      pollenCount: "High (54 grains/m³)",
      pollenType: "Gulmohar, Rain Tree & Acacia Pollen",
      uvIndex: 6.0,
      uvCategory: "Moderate",
      uvAdvice: "Pleasant outdoor weather. Standard sun protection sufficient.",
      humidityImpact: "Ideal 58% humidity. Low respiratory stress; slight pollen allergy notice."
    },
    fitness: {
      bestHours: [
        { time: "06:00 - 08:30 AM", score: "Outstanding", status: "Crisp 19°C, clean air at Cubbon Park / Lalbagh", color: "green" },
        { time: "09:00 - 12:00 PM", score: "Good", status: "Mild sunlight, pleasant for cycling", color: "green" },
        { time: "04:30 - 07:00 PM", score: "Outstanding", status: "Breezy 22°C; ideal outdoor workout", color: "green" },
        { time: "07:30 - 09:30 PM", score: "Good", status: "Pleasant night jog temperature", color: "green" }
      ],
      heatAlert: "None (Comfortable thermal regime)",
      wbgt: "20.1°C (Green Flag)",
      sunrise: "06:09 AM",
      sunset: "06:18 PM",
      goldenHour: "05:40 PM - 06:18 PM"
    },
    beach: {
      available: false,
      message: "Plateau location (Elev: 920m ASL). Nearest beach: Mangaluru / Karwar."
    },
    traveler: {
      airportStatus: "Kempegowda Int'l (BLR): Perfectly on-time operations.",
      flightImpact: "Zero weather delays.",
      railStatus: "KSR Bengaluru & Yesvantpur: Normal scheduling.",
      packingAdvice: ["Light hoodie or cardigan for chilly breeze", "Walking shoes", "Pollen allergy medication if allergic", "Sunglasses"]
    },
    family: {
      schoolCommute: {
        score: "Perfect",
        detail: "Clear skies and comfortable temperatures. No weather hindrances."
      },
      rainRiskMorning: "5% (Clear)",
      playgroundHours: "All day outdoors friendly! Peak hours: 04:00 PM - 06:30 PM.",
      comfortRating: "94/100 (Superb)"
    },
    agri: {
      soilMoisture: "44% (Healthy soil water retention)",
      monsoonForecast: "Light sporadic showers expected mid-week.",
      frostAlert: "No frost risk",
      agroAdvisory: "Favorable for floriculture, coffee plantation maintenance, and terrace gardening. Excellent time for potting."
    },
    commuter: {
      trafficWeatherImpact: "Minimal (Standard tech corridor traffic)",
      fogVisibility: "9.0 km (Crystal clear)",
      roadCondition: "Dry and clean tarmac",
      criticalAlert: "Zero weather hazards on ORR, Hosur Road & Electronic City flyover."
    },
    eventPlanner: {
      comfortIndex: "Exceptional (92/100)",
      weddingSuitability: "World-class weather for garden weddings, cocktail evenings, and outdoor concerts.",
      rainProbabilityCurve: [
        { hour: "14:00", prob: 10 }, { hour: "16:00", prob: 20 },
        { hour: "18:00", prob: 15 }, { hour: "20:00", prob: 10 },
        { hour: "22:00", prob: 5 }, { hour: "00:00", prob: 0 }
      ],
      windLoadRisk: "Low (Steady pleasant breeze 14-18 km/h)"
    }
  },

  shimla: {
    name: "Shimla",
    hindiName: "शिमला",
    state: "Himachal Pradesh",
    temp: 14,
    feelsLike: 12,
    condition: "Chilly Mountain Breeze & Clear Sky",
    conditionCode: "cold",
    high: 17,
    low: 7,
    humidity: 45,
    windSpeed: 14,
    windDir: "NNE",
    pressure: 1024,
    visibility: "10.0 km (Crystal Clear)",
    dewPoint: 4,
    rainfallProb: 10,
    rainfallToday: "0.0 mm",
    imdAlert: {
      level: "Yellow",
      title: "Ground Frost & Night Chill Advisory",
      hindiTitle: "शीतलहर एवं रात्रि तुषार (पाला) चेतावनी",
      description: "Night temperatures dipping to 6-7°C. Localized ground frost likely in shaded valleys.",
      validTill: "Valid 08:00 PM to 07:00 AM IST"
    },
    health: {
      aqi: 28,
      aqiCategory: "Pristine / Clean",
      aqiColor: "#10b981",
      pm25: 6,
      pm10: 18,
      pollenCount: "Low (9 grains/m³)",
      pollenType: "Pine and deodar spores",
      uvIndex: 8.5,
      uvCategory: "High (High Altitude UV)",
      uvAdvice: "Intense high-altitude UV radiation. UV sunglasses & SPF 40+ required despite chilly weather.",
      humidityImpact: "Dry air (45%). Skin drying & chapped lips risk; drink warm liquids."
    },
    fitness: {
      bestHours: [
        { time: "06:30 - 08:00 AM", score: "Good", status: "Crisp 9°C; brisk uphill walking / trail run", color: "green" },
        { time: "08:30 - 11:30 AM", score: "Excellent", status: "Warm mountain sun on Ridge & Mall Road", color: "green" },
        { time: "02:00 - 05:00 PM", score: "Good", status: "Comfortable 16°C; pleasant altitude workout", color: "green" },
        { time: "06:00 - 08:00 PM", score: "Poor", status: "Sharp temperature drop to 8°C; rapid cooling", color: "red" }
      ],
      heatAlert: "Cold Stress Notice",
      wbgt: "11.4°C (Cold regime)",
      sunrise: "06:14 AM",
      sunset: "06:22 PM",
      goldenHour: "05:35 PM - 06:22 PM"
    },
    beach: {
      available: false,
      message: "Himalayan Hill Station (Elev: 2,276m ASL)."
    },
    traveler: {
      airportStatus: "Shimla Jubbarhatti Airport (SLV): Operations subject to mountain gust conditions.",
      flightImpact: "Morning flights on schedule.",
      railStatus: "Kalka-Shimla Toy Train heritage rail operating smoothly.",
      packingAdvice: ["Woolen sweaters & fleece jacket", "Lip balm & cold cream moisturizer", "UV-blocking sunglasses", "Trekking shoes with grip"]
    },
    family: {
      schoolCommute: {
        score: "Chilly Morning",
        detail: "Morning 8°C. Ensure children wear warm blazers, gloves, and caps."
      },
      rainRiskMorning: "0% (Clear mountain sun)",
      playgroundHours: "Sunny afternoon is best: 01:30 PM - 04:30 PM.",
      comfortRating: "80/100"
    },
    agri: {
      soilMoisture: "32% (Dry mountain slopes)",
      monsoonForecast: "Dry spell over Himachal lower hills.",
      frostAlert: "Active Frost Alert: High probability of morning ground frost in apple orchards.",
      agroAdvisory: "Horticulture advisory: Protect young saplings and nursery beds with mulch and agro-netting against night frost."
    },
    commuter: {
      trafficWeatherImpact: "Low",
      fogVisibility: "10.0 km (No valley fog currently)",
      roadCondition: "Caution on Shimla-Kalka highway curves; watch for black ice on shaded north-facing turns at dawn",
      criticalAlert: "Slow driving recommended on steep descents before 07:30 AM."
    },
    eventPlanner: {
      comfortIndex: "Chilly Evening (70/100)",
      weddingSuitability: "Outdoor fires (Angeethi) & patio heaters required for dinner receptions after sunset.",
      rainProbabilityCurve: [
        { hour: "14:00", prob: 5 }, { hour: "16:00", prob: 10 },
        { hour: "18:00", prob: 10 }, { hour: "20:00", prob: 5 },
        { hour: "22:00", prob: 0 }, { hour: "00:00", prob: 0 }
      ],
      windLoadRisk: "Moderate mountain gusts (up to 28 km/h)"
    }
  },

  goa: {
    name: "Goa (Panaji)",
    hindiName: "गोवा (पणजी)",
    state: "Goa",
    temp: 30,
    feelsLike: 35,
    condition: "Sunny Coastal Waves & Warm Breeze",
    conditionCode: "sunny",
    high: 32,
    low: 25,
    humidity: 76,
    windSpeed: 18,
    windDir: "SW",
    pressure: 1010,
    visibility: "8.0 km (Clear)",
    dewPoint: 24,
    rainfallProb: 25,
    rainfallToday: "0.5 mm",
    imdAlert: {
      level: "Green",
      title: "Safe Coastal Conditions",
      hindiTitle: "तटीय स्थिति सामान्य एवं सुरक्षित",
      description: "Moderate sea swell. Safe for routine beach activities; follow lifeguard instructions at flagged beaches.",
      validTill: "Valid till next 24 Hours"
    },
    health: {
      aqi: 38,
      aqiCategory: "Good / Fresh",
      aqiColor: "#10b981",
      pm25: 10,
      pm10: 28,
      pollenCount: "Low (14 grains/m³)",
      pollenType: "Coconut & tropical mangrove pollen",
      uvIndex: 8.8,
      uvCategory: "Very High",
      uvAdvice: "Intense sun. Reapply SPF 50+ water-resistant sunscreen every 2 hours if swimming.",
      humidityImpact: "Tropical humidity (76%). High perspiration; drink electrolyte-rich coconut water."
    },
    fitness: {
      bestHours: [
        { time: "06:00 - 07:15 AM", score: "Outstanding", status: "Pristine beach run on hard sand during low tide", color: "green" },
        { time: "07:30 - 10:00 AM", score: "Fair", status: "Rapid sun warming; seek shady routes", color: "yellow" },
        { time: "11:00 - 04:30 PM", score: "Caution", status: "Direct tropical sun & high UV; avoid endurance workouts", color: "red" },
        { time: "05:45 - 07:15 PM", score: "Outstanding", status: "Spectacular sunset jogging breeze", color: "green" }
      ],
      heatAlert: "Warm Coastal Alert",
      wbgt: "26.8°C (Yellow Flag)",
      sunrise: "06:25 AM",
      sunset: "06:33 PM",
      goldenHour: "05:48 PM - 06:33 PM"
    },
    beach: {
      available: true,
      seaState: "Slight to Moderate",
      marineFlag: "Green Flag (Safe Swimming in designated zones)",
      marineFlagColor: "#10b981",
      tides: [
        { type: "Low Tide", time: "09:15 AM", height: "0.52 m" },
        { type: "High Tide", time: "03:40 PM", height: "2.35 m" },
        { type: "Low Tide", time: "09:50 PM", height: "0.68 m" }
      ],
      waveHeight: "1.1 m - 1.5 m",
      swellPeriod: "10.2 seconds",
      waterTemp: "28.8°C (Pleasantly warm)",
      surfConditions: "Gentle rolling waves at Morjim, Ashwem & Arambol. Great for beginners & paddle-boarders.",
      lifeguardStatus: "Drishti Marine lifeguards stationed at all major beaches from 07:00 AM to 06:30 PM."
    },
    traveler: {
      airportStatus: "Dabolim (GOI) & Mopa (GOX): All flights operating normally.",
      flightImpact: "Zero weather disruptions.",
      railStatus: "Konkan Railway trains operating on schedule.",
      packingAdvice: ["Swimwear & UV rash guard", "Reef-safe sunscreen SPF 50+", "Flip-flops & sunglasses", "Light breathable resort wear"]
    },
    family: {
      schoolCommute: {
        score: "Clear",
        detail: "Warm sunny morning; normal conditions."
      },
      rainRiskMorning: "10% (Low chance of brief drizzle)",
      playgroundHours: "Beach sand play best at low tide: 08:30 - 10:30 AM & 04:30 - 06:30 PM.",
      comfortRating: "82/100"
    },
    agri: {
      soilMoisture: "48% (Good)",
      monsoonForecast: "Post-monsoon sunny conditions with occasional convective clouds.",
      frostAlert: "No frost",
      agroAdvisory: "Ideal window for paddy harvest and drying of arecanut and spices in open yards."
    },
    commuter: {
      trafficWeatherImpact: "None",
      fogVisibility: "8.0 km (Clear coastal views)",
      roadCondition: "Dry and clear coastal highways (NH-66)",
      criticalAlert: "No weather bottlenecks on Mandovi & Zuari bridges."
    },
    eventPlanner: {
      comfortIndex: "Good (78/100)",
      weddingSuitability: "Ideal for destination beach weddings and sunset parties. Sunset at 06:33 PM offers prime photo lighting.",
      rainProbabilityCurve: [
        { hour: "14:00", prob: 15 }, { hour: "16:00", prob: 20 },
        { hour: "18:00", prob: 15 }, { hour: "20:00", prob: 10 },
        { hour: "22:00", prob: 5 }, { hour: "00:00", prob: 5 }
      ],
      windLoadRisk: "Moderate coastal breeze (18 - 24 km/h)"
    }
  }
};

// 8 Defined Personas mapped to the SIH Problem Statement
const MAUSAM_PERSONAS = [
  {
    id: "health",
    name: "Health-Conscious",
    hindiName: "स्वास्थ्य-सचेत",
    icon: "HeartPulse",
    accent: "#ec4899",
    tagline: "AQI, Pollen & Respiratory Safety",
    description: "Prioritizes air quality index, UV exposure, pollen allergies, and asthma warnings.",
    widgets: ["aqiCard", "pollenCard", "uvIndexCard", "healthAdvisoryCard"]
  },
  {
    id: "fitness",
    name: "Outdoor Fitness",
    hindiName: "आउटडोर फिटनेस",
    icon: "Flame",
    accent: "#f97316",
    tagline: "Best Running Hours & Heat Alerts",
    description: "Optimizes workout planning with sunrise/sunset, optimal cardio hours, and wind speed.",
    widgets: ["runningHoursCard", "sunCycleCard", "heatAlertCard", "windCard"]
  },
  {
    id: "beach",
    name: "Beachgoer & Surfer",
    hindiName: "तटीय व सर्फर",
    icon: "Waves",
    accent: "#06b6d4",
    tagline: "Tides, Sea Waves & Water Temp",
    description: "Delivers sea state, marine safety flags, high/low tide times, wave heights, and surf conditions.",
    widgets: ["marineFlagCard", "tideTableCard", "seaWaveCard", "waterTempCard"]
  },
  {
    id: "traveler",
    name: "Traveler & Commuter",
    hindiName: "यात्री व पर्यटन",
    icon: "Plane",
    accent: "#8b5cf6",
    tagline: "Saved Cities, Flights & Packing Tips",
    description: "Quick access to saved destinations, flight delay risks, and smart packing suggestions.",
    widgets: ["travelAlertCard", "savedCitiesCard", "packingChecklistCard", "transitDelayCard"]
  },
  {
    id: "family",
    name: "Parents & Families",
    hindiName: "माता-पिता व परिवार",
    icon: "Users",
    accent: "#3b82f6",
    tagline: "School Commute & Rain Radar",
    description: "Keeps families prepared with morning school drop-off conditions, sudden rain radar, and park times.",
    widgets: ["schoolCommuteCard", "rainRadarAlertCard", "playgroundCard", "familySafetyCard"]
  },
  {
    id: "agri",
    name: "Agriculture & Gardening",
    hindiName: "कृषि एवं बागवानी",
    icon: "Sprout",
    accent: "#10b981",
    tagline: "Soil Moisture & Crop Guidance",
    description: "Empowers farmers and home gardeners with soil moisture, frost warnings, and IMD Agromet advisories.",
    widgets: ["soilMoistureCard", "agrometAdvisoryCard", "rainfallPredictionCard", "frostAlertCard"]
  },
  {
    id: "commuter",
    name: "Daily Commuter",
    hindiName: "दैनिक यात्री",
    icon: "Car",
    accent: "#eab308",
    tagline: "Traffic Visibility & Fog Warnings",
    description: "Integrates road weather with traffic delays, fog visibility meters, and storm alerts.",
    widgets: ["fogVisibilityCard", "roadSlicknessCard", "commuteRouteWeatherCard", "stormWarningCard"]
  },
  {
    id: "eventPlanner",
    name: "Event Planner",
    hindiName: "इवेंट प्लानर",
    icon: "Calendar",
    accent: "#6366f1",
    tagline: "Rain Probability & Comfort Index",
    description: "Guides outdoor weddings, celebrations, and sports with rain probability curves and comfort indices.",
    widgets: ["comfortIndexCard", "rainProbabilityCurveCard", "windLoadCard", "extendedEventForecastCard"]
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { MAUSAM_CITIES, MAUSAM_PERSONAS };
}
