/**
 * Main Application Logic for Mausam Personalized Homepage
 */

class MausamApp {
  constructor() {
    this.currentCityKey = 'delhi';
    this.activePersonas = ['health', 'fitness']; // Default initial multi-persona
    this.lang = 'en';
    this.theme = 'light';
    this.viewMode = 'mobile'; // 'mobile' | 'responsive'
    this.simulatedAlertActive = false;

    this.init();
  }

  init() {
    this.initTheme();
    this.bindEvents();
    this.render();
  }

  initTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.theme = 'dark';
      document.documentElement.classList.add('dark');
    }
  }

  toggleTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    if (this.theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    this.updateThemeButton();
  }

  toggleLanguage() {
    this.lang = this.lang === 'en' ? 'hi' : 'en';
    this.render();
  }

  toggleViewMode(mode) {
    this.viewMode = mode;
    const container = document.getElementById('appViewContainer');
    const mobileChassis = document.getElementById('mobileChassis');
    const notch = document.getElementById('deviceNotch');

    if (mode === 'responsive') {
      mobileChassis.classList.remove('mobile-device-chassis');
      mobileChassis.classList.add('w-full', 'max-w-4xl', 'rounded-2xl', 'border-0', 'shadow-2xl');
      if (notch) notch.style.display = 'none';
      document.getElementById('btnMobileView').classList.remove('bg-sky-500', 'text-white');
      document.getElementById('btnMobileView').classList.add('text-slate-600', 'dark:text-slate-300');
      document.getElementById('btnDesktopView').classList.add('bg-sky-500', 'text-white');
      document.getElementById('btnDesktopView').classList.remove('text-slate-600', 'dark:text-slate-300');
    } else {
      mobileChassis.classList.add('mobile-device-chassis');
      mobileChassis.classList.remove('w-full', 'max-w-4xl', 'rounded-2xl', 'border-0', 'shadow-2xl');
      if (notch) notch.style.display = 'flex';
      document.getElementById('btnMobileView').classList.add('bg-sky-500', 'text-white');
      document.getElementById('btnMobileView').classList.remove('text-slate-600', 'dark:text-slate-300');
      document.getElementById('btnDesktopView').classList.remove('bg-sky-500', 'text-white');
      document.getElementById('btnDesktopView').classList.add('text-slate-600', 'dark:text-slate-300');
    }
  }

  togglePersona(personaId) {
    if (this.activePersonas.includes(personaId)) {
      if (this.activePersonas.length > 1) {
        this.activePersonas = this.activePersonas.filter(id => id !== personaId);
      } else {
        // keep at least one persona
        alert(this.lang === 'hi' ? 'कम से कम एक प्रोफ़ाइल सक्रिय रहनी चाहिए।' : 'At least one persona must remain active.');
        return;
      }
    } else {
      this.activePersonas.push(personaId);
    }
    this.renderFeed();
    this.renderPersonaChips();
  }

  selectAllPersonas() {
    this.activePersonas = MAUSAM_PERSONAS.map(p => p.id);
    this.renderFeed();
    this.renderPersonaChips();
  }

  selectSinglePersona(personaId) {
    this.activePersonas = [personaId];
    this.renderFeed();
    this.renderPersonaChips();
  }

  switchCity(cityKey) {
    if (MAUSAM_CITIES[cityKey]) {
      this.currentCityKey = cityKey;
      this.render();
    }
  }

  simulateSevereAlert() {
    this.simulatedAlertActive = !this.simulatedAlertActive;
    this.renderHero();
  }

  bindEvents() {
    document.getElementById('langToggleBtn')?.addEventListener('click', () => this.toggleLanguage());
    document.getElementById('themeToggleBtn')?.addEventListener('click', () => this.toggleTheme());
    document.getElementById('btnMobileView')?.addEventListener('click', () => this.toggleViewMode('mobile'));
    document.getElementById('btnDesktopView')?.addEventListener('click', () => this.toggleViewMode('responsive'));

    // City selector buttons
    document.querySelectorAll('[data-city-switch]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const cityKey = e.currentTarget.getAttribute('data-city-switch');
        this.switchCity(cityKey);
      });
    });

    // Search bar
    const searchInput = document.getElementById('citySearchInput');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        const found = Object.keys(MAUSAM_CITIES).find(key => {
          const c = MAUSAM_CITIES[key];
          return c.name.toLowerCase().includes(query) || c.hindiName.includes(query) || c.state.toLowerCase().includes(query);
        });
        if (found && query.length >= 3) {
          this.switchCity(found);
        }
      });
    }

    // AI Chat trigger
    document.getElementById('openAiChatBtn')?.addEventListener('click', () => {
      this.toggleAiChat(true);
    });
    document.getElementById('closeAiChatBtn')?.addEventListener('click', () => {
      this.toggleAiChat(false);
    });
    document.getElementById('sendAiMsgBtn')?.addEventListener('click', () => {
      this.handleAiUserMessage();
    });
    document.getElementById('aiUserInput')?.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') this.handleAiUserMessage();
    });

    // Alert simulation trigger
    document.getElementById('simulateAlertBtn')?.addEventListener('click', () => {
      this.simulateSevereAlert();
    });
  }

  updateThemeButton() {
    const btn = document.getElementById('themeToggleBtn');
    if (btn) {
      btn.innerHTML = this.theme === 'dark' ? '☀️' : '🌙';
    }
  }

  render() {
    this.updateThemeButton();
    const t = TRANSLATIONS[this.lang];
    const city = MAUSAM_CITIES[this.currentCityKey];

    // Language labels
    const langBtn = document.getElementById('langToggleBtn');
    if (langBtn) langBtn.innerText = t.langToggle;

    const appHeader = document.getElementById('appHeaderTitle');
    if (appHeader) appHeader.innerText = t.appTitle;

    const appSub = document.getElementById('appHeaderSub');
    if (appSub) appSub.innerText = t.appSubtitle;

    const searchInput = document.getElementById('citySearchInput');
    if (searchInput) searchInput.placeholder = t.searchPlaceholder;

    // Render components
    this.renderHero();
    this.renderPersonaChips();
    this.renderFeed();
  }

  renderHero() {
    const city = MAUSAM_CITIES[this.currentCityKey];
    const isHi = this.lang === 'hi';
    const container = document.getElementById('heroWeatherCard');
    if (!container) return;

    let alertData = city.imdAlert;
    if (this.simulatedAlertActive) {
      alertData = {
        level: "Red",
        title: "SIMULATED IMD RED ALERT: Flash Flood & Severe Squall",
        hindiTitle: "सिमुलेटेड आईएमडी रेड अलर्ट: तीव्र आंधी व भारी वर्षा चेतावनी",
        description: "Wind gusts exceeding 85 km/h, intense rainfall > 115mm. Take emergency shelter immediately.",
        validTill: "Valid next 3 Hours"
      };
    }

    const alertBg = alertData.level === 'Red' ? 'bg-red-500 text-white' :
                    alertData.level === 'Orange' ? 'bg-amber-500 text-white' :
                    alertData.level === 'Yellow' ? 'bg-yellow-400 text-slate-900' :
                    'bg-emerald-500 text-white';

    container.innerHTML = `
      <div class="relative overflow-hidden rounded-3xl p-6 bg-gradient-to-br from-sky-600 via-sky-700 to-indigo-800 text-white shadow-xl shadow-sky-600/20">
        <!-- Background subtle glow -->
        <div class="absolute -right-8 -top-8 w-44 h-44 rounded-full bg-white/10 blur-2xl pointer-events-none"></div>

        <!-- Top Row: Location & IMD Emblem -->
        <div class="flex items-start justify-between mb-4">
          <div>
            <div class="flex items-center gap-1.5 text-sky-200 text-xs font-semibold uppercase tracking-wider">
              <span>📍 ${city.state}</span>
              <span class="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
              <span class="text-[10px] bg-sky-950/40 px-2 py-0.5 rounded text-sky-200">LIVE DOPPLER</span>
            </div>
            <h1 class="text-3xl font-black mt-0.5 text-white">
              ${isHi ? city.hindiName : city.name}
            </h1>
          </div>
          <div class="flex flex-col items-end">
            <span class="text-2xl">${city.conditionCode === 'sunny' ? '☀️' : city.conditionCode === 'rain' ? '🌧️' : '⛅'}</span>
            <span class="text-[11px] text-sky-200 mt-1 font-mono">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} IST</span>
          </div>
        </div>

        <!-- Temperature & Condition Row -->
        <div class="flex items-end justify-between my-2">
          <div>
            <div class="text-5xl font-black tracking-tight leading-none">${city.temp}°<span class="text-2xl font-light text-sky-200">C</span></div>
            <div class="text-xs text-sky-200 mt-2 font-medium">
              ${isHi ? 'महसूस:' : 'Feels like'} <b>${city.feelsLike}°C</b> • ${isHi ? 'अधिकतम/न्यूनतम:' : 'H:'} <b>${city.high}° / L: ${city.low}°</b>
            </div>
          </div>
          <div class="text-right">
            <div class="text-sm font-bold text-sky-100 max-w-[150px] leading-snug">${city.condition}</div>
            <div class="text-xs text-sky-300 mt-1">💨 ${city.windSpeed} km/h ${city.windDir}</div>
          </div>
        </div>

        <!-- Metric Badges Row -->
        <div class="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-sky-400/30 text-center text-xs">
          <div class="bg-sky-950/30 rounded-xl p-2">
            <span class="text-sky-300 text-[10px] block">${isHi ? 'नमी (Humidity)' : 'Humidity'}</span>
            <span class="font-bold text-white">${city.humidity}%</span>
          </div>
          <div class="bg-sky-950/30 rounded-xl p-2">
            <span class="text-sky-300 text-[10px] block">${isHi ? 'दृश्यता (Visibility)' : 'Visibility'}</span>
            <span class="font-bold text-white">${city.visibility.split(' ')[0]} km</span>
          </div>
          <div class="bg-sky-950/30 rounded-xl p-2">
            <span class="text-sky-300 text-[10px] block">${isHi ? 'वर्षा (Rain)' : 'Rain Today'}</span>
            <span class="font-bold text-white">${city.rainfallToday}</span>
          </div>
        </div>

        <!-- Official IMD Alert Bar -->
        <div class="mt-4 rounded-xl p-3 ${alertBg} shadow-md imd-alert-pulse flex items-start gap-2.5">
          <span class="text-lg">🚨</span>
          <div class="flex-1 text-xs">
            <div class="font-extrabold uppercase tracking-wide flex items-center justify-between">
              <span>IMD [${alertData.level.toUpperCase()} ALERT]</span>
              <span class="text-[10px] opacity-90">${alertData.validTill}</span>
            </div>
            <div class="font-semibold mt-0.5">${isHi ? alertData.hindiTitle : alertData.title}</div>
            <p class="text-[11px] opacity-95 mt-0.5 leading-snug">${alertData.description}</p>
          </div>
        </div>
      </div>
    `;
  }

  renderPersonaChips() {
    const container = document.getElementById('personaChipsContainer');
    if (!container) return;
    const isHi = this.lang === 'hi';

    const chips = MAUSAM_PERSONAS.map(p => {
      const isActive = this.activePersonas.includes(p.id);
      const iconSvg = ICONS[p.icon] || '';
      return `
        <button 
          onclick="window.mausamApp.togglePersona('${p.id}')"
          class="persona-chip flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all ${
            isActive 
              ? 'bg-slate-900 text-white border-slate-900 dark:bg-white dark:text-slate-900 dark:border-white shadow-md active' 
              : 'bg-white/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-slate-400'
          }"
          title="${p.description}"
        >
          <span style="color: ${isActive ? (this.theme === 'dark' ? '#0f172a' : '#fff') : p.accent}">
            ${iconSvg}
          </span>
          <span>${isHi ? p.hindiName : p.name}</span>
          ${isActive ? '<span class="text-[10px] opacity-75">●</span>' : ''}
        </button>
      `;
    }).join('');

    container.innerHTML = `
      <div class="flex items-center justify-between mb-2">
        <span class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          ${isHi ? 'व्यक्तिगत प्रोफ़ाइल फ़िल्टर' : 'Personalized Persona Lenses'}
        </span>
        <div class="flex gap-2 text-xs">
          <button onclick="window.mausamApp.selectAllPersonas()" class="text-sky-600 dark:text-sky-400 font-medium hover:underline">
            ${isHi ? 'सभी 8 चुनें' : 'Select All 8'}
          </button>
          <span class="text-slate-400">•</span>
          <span class="text-slate-500 dark:text-slate-400 font-semibold">${this.activePersonas.length} Active</span>
        </div>
      </div>
      <div class="flex gap-2 overflow-x-auto pb-2 custom-scrollbar no-scrollbar">
        ${chips}
      </div>
    `;
  }

  renderFeed() {
    const container = document.getElementById('personalizedFeedContainer');
    if (!container) return;
    const city = MAUSAM_CITIES[this.currentCityKey];
    const isHi = this.lang === 'hi';

    let html = '';

    // Render cards for each active persona in order
    this.activePersonas.forEach(personaId => {
      switch (personaId) {
        case 'health':
          html += COMPONENTS.createHealthWidget(city, this.lang);
          break;
        case 'fitness':
          html += COMPONENTS.createFitnessWidget(city, this.lang);
          break;
        case 'beach':
          html += COMPONENTS.createBeachWidget(city, this.lang);
          break;
        case 'traveler':
          html += COMPONENTS.createTravelerWidget(city, this.lang);
          break;
        case 'family':
          html += COMPONENTS.createFamilyWidget(city, this.lang);
          break;
        case 'agri':
          html += COMPONENTS.createAgriWidget(city, this.lang);
          break;
        case 'commuter':
          html += COMPONENTS.createCommuterWidget(city, this.lang);
          break;
        case 'eventPlanner':
          html += COMPONENTS.createEventWidget(city, this.lang);
          break;
      }
    });

    container.innerHTML = html;
  }

  toggleAiChat(open) {
    const modal = document.getElementById('aiChatDrawer');
    if (modal) {
      if (open) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
      } else {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
      }
    }
  }

  handleAiUserMessage(customPrompt) {
    const input = document.getElementById('aiUserInput');
    const question = customPrompt || (input ? input.value.trim() : '');
    if (!question) return;

    if (input && !customPrompt) input.value = '';

    const chatBody = document.getElementById('aiChatMessages');
    if (!chatBody) return;

    // Append user question
    chatBody.innerHTML += `
      <div class="flex justify-end mb-3">
        <div class="bg-sky-600 text-white text-xs rounded-2xl rounded-tr-none px-3.5 py-2 max-w-[80%] shadow">
          ${question}
        </div>
      </div>
    `;

    chatBody.scrollTop = chatBody.scrollHeight;

    // Formulate persona-aware smart answer
    const city = MAUSAM_CITIES[this.currentCityKey];
    let reply = "";
    const qLower = question.toLowerCase();

    if (qLower.includes('jog') || qLower.includes('run') || qLower.includes('workout') || qLower.includes('दौड़')) {
      reply = `🏃 <b>Fitness Insight for ${city.name}:</b> Best running hour is <b>${city.fitness.bestHours[0].time}</b> (${city.fitness.bestHours[0].status}). Current AQI is ${city.health.aqi} and WBGT heat stress is ${city.fitness.wbgt}. Hydration interval: 25 mins.`;
    } else if (qLower.includes('beach') || qLower.includes('swim') || qLower.includes('surf') || qLower.includes('समुद्र')) {
      if (city.beach.available) {
        reply = `🌊 <b>Marine Bulletin for ${city.name}:</b> Flag status is <b>${city.beach.marineFlag}</b>. Waves are ${city.beach.waveHeight}, water temp is ${city.beach.waterTemp}. Next High Tide at ${city.beach.tides[0].time} (${city.beach.tides[0].height}). Safe in designated lifeguard zones.`;
      } else {
        reply = `🏖️ ${city.name} is an inland city. The nearest beach hubs are along the Konkan or Coromandel coast.`;
      }
    } else if (qLower.includes('rain') || qLower.includes('umbrella') || qLower.includes('बारिश')) {
      reply = `🌧️ <b>Precipitation Radar:</b> Rainfall probability today in ${city.name} is <b>${city.rainfallProb}%</b> with ${city.rainfallToday} recorded. Morning school commute rain risk is ${city.family.rainRiskMorning}.`;
    } else if (qLower.includes('crop') || qLower.includes('farm') || qLower.includes('soil') || qLower.includes('कृषि')) {
      reply = `🌾 <b>IMD Agromet Advisory:</b> Soil moisture is ${city.agri.soilMoisture}. ${city.agri.agroAdvisory} Frost status: ${city.agri.frostAlert}.`;
    } else if (qLower.includes('fog') || qLower.includes('drive') || qLower.includes('traffic') || qLower.includes('कोहरा')) {
      reply = `🌫️ <b>Commute & Visibility Alert:</b> Current visibility is ${city.commuter.fogVisibility}. ${city.commuter.criticalAlert} Road condition: ${city.commuter.roadCondition}.`;
    } else if (qLower.includes('wedding') || qLower.includes('party') || qLower.includes('event') || qLower.includes('विवाह')) {
      reply = `💍 <b>Event Comfort Advisory:</b> Comfort rating is ${city.eventPlanner.comfortIndex}. ${city.eventPlanner.weddingSuitability} Wind load risk: ${city.eventPlanner.windLoadRisk}.`;
    } else {
      reply = `🌤️ <b>Mausam Mitra Advisory for ${city.name}:</b> Current temp is ${city.temp}°C (${city.condition}), humidity ${city.humidity}%, AQI ${city.health.aqi}. IMD warning level: ${city.imdAlert.level} (${city.imdAlert.title}).`;
    }

    setTimeout(() => {
      chatBody.innerHTML += `
        <div class="flex justify-start mb-3">
          <div class="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 text-xs rounded-2xl rounded-tl-none px-3.5 py-2.5 max-w-[85%] border border-slate-200 dark:border-slate-700 shadow-sm leading-relaxed">
            ${reply}
          </div>
        </div>
      `;
      chatBody.scrollTop = chatBody.scrollHeight;
    }, 350);
  }
}

// Global initialization
window.addEventListener('DOMContentLoaded', () => {
  window.mausamApp = new MausamApp();
});
