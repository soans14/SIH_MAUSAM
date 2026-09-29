# 🌦️ MAUSAM - AI-Powered Personalized Mobile Application Homepage
### *Smart India Hackathon (SIH) Prototype*
**Teammates:**
- **Harsh Mishra**
- **Harsha Soans**
- **Soham Shingade**
- **Harsh Sawant**
- **Mrunmayee Joshi**
- **Gaurang Gohil**

---

## 📌 Problem Statement
> **Problem Statement Title**: Development of personalized homepage for 'Mausam' mobile application  
> **Challenge Description**: Transform the generic weather display of the official IMD Mausam app into an intelligent, hyper-personalized, context-aware homepage that dynamically adapts to distinct user personas, lifestyles, and occupational weather sensitivities.

---

## 👥 The 8 Addressed User Personas

| Persona | Key Weather Intelligence Highlighted | Impact & Utility |
| :--- | :--- | :--- |
| **1. Health-Conscious Users** | AQI (PM2.5, PM10), Pollen Count & Species, UV Radiation Index, Humidity Allergy Impact | Protects sensitive individuals, asthmatics, children, and elderly from toxic air episodes and allergen surges. |
| **2. Outdoor Fitness Enthusiasts** | Sunrise/Sunset & Golden Hour, "Best Running & Cycling Hours" Matrix, Wind Speed, WBGT Heat Stress Alerts | Optimizes morning and evening cardio routines, preventing heat exhaustion and dehydration. |
| **3. Beachgoers & Surfers** | Sea state, IMD Marine Safety Flags, High/Low Tide tables with meter levels, Swell wave height, Sea surface water temp | Ensures safe swimming, surfing, boating, and coastal recreation with real-time lifeguard guidance. |
| **4. Travelers** | Quick access to saved destination hubs, severe weather transit alerts (Flight/Airport delays, Indian Railways), AI Packing Checklist | Eliminates travel disruption surprises with predictive clothing and gear suggestions. |
| **5. Parents & Families** | Morning school drop-off commute window (7:00–8:30 AM), sudden rain radar forecast, playground outdoor comfort rating | Helps parents dress children suitably and plan daily family activities safely. |
| **6. Agriculture & Gardeners** | Soil moisture percentage, 7-day cumulative rainfall / monsoon pulse, frost warnings, IMD Agromet / GKMS advisories | Empowers farmers and terrace gardeners with actionable irrigation, sowing, and pesticide advice. |
| **7. Daily Commuters** | Highway fog visibility meter, road surface traction/slickness warning, storm and waterlogging traffic bottlenecks | Enhances road safety across national highways and urban corridors during morning smog and monsoon rain. |
| **8. Event Planners** | Hourly Rain Probability curve, "Outdoor Comfort Index" (heat + humidity + breeze), canopy/marquee wind-load risk | Eliminates guesswork for destination weddings, sports tournaments, and outdoor gatherings. |

---

## 🚀 Key Innovations in This Prototype

1. **Multi-Persona Hybrid Lens**:
   - Real users do not fit into rigid single personas. A user can be both a *Parent* and a *Fitness Enthusiast*, or a *Farmer* and a *Commuter*.
   - Our system allows selecting **multiple persona badges simultaneously**, dynamically blending and ranking prioritized intelligence cards on a single cohesive homepage.

2. **Official IMD Protocol Compliance**:
   - Strict adherence to IMD's standard 4-color coded weather alert system:
     - 🟢 **Green**: No Warning (Normal conditions)
     - 🟡 **Yellow**: Be Updated (Watch)
     - 🟠 **Orange**: Be Prepared (Alert)
     - 🔴 **Red**: Take Action (Warning / Emergency)
   - Real-time simulation toggle to test emergency Red Alert behaviors.

3. **Bilingual & Multi-lingual Ready (English & हिन्दी)**:
   - Instant language switching reflecting India's linguistic diversity and IMD's mandate to serve regional agricultural and public communities.

4. **"Mausam Mitra" AI Weather Companion**:
   - Context-aware conversational AI assistant that directly answers lifestyle weather queries (e.g., *"Can I jog at 6 AM?"*, *"Is it safe to swim in Goa today?"*, *"Should I irrigate crops tomorrow?"*).

5. **Device Simulator & Responsive Engine**:
   - Integrated realistic mobile device chassis (iPhone / Android flagship with Dynamic Island and status indicators) with an instant toggle to full-width tablet/desktop responsive view.

---

## 📂 Project Structure

```
SIH_MAUSAM/
├── index.html               # Main application entry point (includes device frame & full responsive view)
├── css/
│   └── style.css            # Custom animations, IMD alert badges, glassmorphism, theme engine
├── js/
│   ├── data.js              # Comprehensive multi-city weather data, IMD alert database, 8 persona modules
│   ├── translations.js      # English & Hindi i18n dictionary for all personas & weather terms
│   ├── components.js        # Dynamic widget builders for Health, Fitness, Beach, Travel, Family, Agri, Commuter, Event
│   └── app.js               # Application state, persona toggles, city search, AI Mausam Mitra, customizer
├── assets/
│   └── icons.js             # High-definition scalable SVG weather & persona icons
├── package.json             # NPM metadata and runner scripts
└── README.md                # Project documentation & pitch presentation
```

---

## 💻 How to Run the Prototype

### Method 1: Direct Browser Launch (Zero Installation)
Simply double-click [`index.html`](file:///d:/Coding/Github/SIH_INT_01/SIH_MAUSAM/index.html) or open it in Google Chrome, Microsoft Edge, or Mozilla Firefox.

### Method 2: Local HTTP Server (Python)
```bash
python -m http.server 3000
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Method 3: Node / Serve
```bash
npx serve . -l 3000
```

---

## 🏆 SIH Evaluation Checklist

- [x] **Health-conscious users**: AQI, PM2.5/PM10, Pollen count, UV index, humidity alerts
- [x] **Outdoor fitness enthusiasts**: Sunrise/sunset times, best running hours, wind speed, heat alerts
- [x] **Beachgoers & surfers**: Sea conditions, tide timings, wave height, water temp, marine flags
- [x] **Travelers**: Saved destinations, severe weather alerts for flights/railways, packing checklist
- [x] **Parents & families**: School commute conditions, rain alerts, playground comfort index
- [x] **Agriculture & gardeners**: Soil moisture, rainfall predictions, frost alerts, agromet advisories
- [x] **Commuters**: Weather integrated with road traffic, fog visibility meter, storm warnings
- [x] **Event planners**: Extended forecasts, rain probability curve, comfort index for weddings
- [x] **Interactive & Production Ready**: Fully interactive, bilingual, dark/light theme, AI companion
