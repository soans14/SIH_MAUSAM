/**
 * UI Components & Widget Builders for all 8 Mausam Personas
 */

const COMPONENTS = {
  // 1. HEALTH-CONSCIOUS WIDGET
  createHealthWidget(cityData, lang = 'en') {
    const h = cityData.health;
    const isHi = lang === 'hi';
    return `
      <div class="card-weather bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-2xl p-5 border border-pink-500/20 shadow-lg shadow-pink-500/5 transition-all hover:border-pink-500/40">
        <div class="flex items-center justify-between mb-4 pb-2 border-b border-slate-200 dark:border-slate-800">
          <div class="flex items-center gap-2.5">
            <span class="p-2 rounded-xl bg-pink-100 dark:bg-pink-950/60 text-pink-600 dark:text-pink-400">
              ${ICONS.HeartPulse}
            </span>
            <div>
              <h3 class="font-bold text-slate-800 dark:text-slate-100 text-base">
                ${isHi ? 'स्वास्थ्य एवं श्वसन सुरक्षा' : 'Health & Respiratory Intelligence'}
              </h3>
              <p class="text-xs text-slate-500 dark:text-slate-400">
                ${isHi ? 'वायु गुणवत्ता, परागकण एवं यूवी एक्सपोज़र' : 'AQI, Pollen & UV Radiation Impact'}
              </p>
            </div>
          </div>
          <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-pink-50 dark:bg-pink-900/40 text-pink-600 dark:text-pink-300 border border-pink-200 dark:border-pink-800">
            ${isHi ? 'स्वास्थ्य प्राथमिकता' : 'Health Priority'}
          </span>
        </div>

        <!-- AQI Meter -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
          <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60">
            <div class="flex justify-between items-start mb-1">
              <span class="text-xs font-medium text-slate-500 dark:text-slate-400">AQI Index</span>
              <span class="text-xs font-bold px-2 py-0.5 rounded text-white" style="background-color: ${h.aqiColor}">${h.aqi}</span>
            </div>
            <div class="text-sm font-semibold text-slate-800 dark:text-slate-100">${h.aqiCategory}</div>
            <div class="mt-2 text-[11px] text-slate-500 flex justify-between">
              <span>PM2.5: <b>${h.pm25} µg/m³</b></span>
              <span>PM10: <b>${h.pm10} µg/m³</b></span>
            </div>
          </div>

          <!-- Pollen Level -->
          <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60">
            <div class="flex justify-between items-start mb-1">
              <span class="text-xs font-medium text-slate-500 dark:text-slate-400">${isHi ? 'परागकण (Pollen)' : 'Pollen Count'}</span>
              <span class="text-xs font-bold text-amber-500">● ${h.pollenCount.split(' ')[0]}</span>
            </div>
            <div class="text-sm font-semibold text-slate-800 dark:text-slate-100">${h.pollenCount}</div>
            <p class="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">${h.pollenType}</p>
          </div>

          <!-- UV Radiation Index -->
          <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60">
            <div class="flex justify-between items-start mb-1">
              <span class="text-xs font-medium text-slate-500 dark:text-slate-400">UV Index</span>
              <span class="text-xs font-bold text-purple-600 dark:text-purple-400">${h.uvIndex} / 12</span>
            </div>
            <div class="text-sm font-semibold text-slate-800 dark:text-slate-100">${h.uvCategory}</div>
            <p class="text-[11px] text-slate-500 dark:text-slate-400 mt-1">Sunscreen & UV Shield</p>
          </div>
        </div>

        <!-- Health Guidance Advisory Callout -->
        <div class="p-3 rounded-xl bg-pink-50/70 dark:bg-pink-950/30 border border-pink-200/70 dark:border-pink-800/50 flex items-start gap-2.5">
          <span class="text-pink-600 mt-0.5">⚠️</span>
          <div class="text-xs text-pink-900 dark:text-pink-200 leading-relaxed">
            <b>${isHi ? 'स्वास्थ्य परामर्श:' : 'Medical Advisory:'}</b> ${h.uvAdvice} ${h.humidityImpact}
          </div>
        </div>
      </div>
    `;
  },

  // 2. OUTDOOR FITNESS ENTHUSIASTS WIDGET
  createFitnessWidget(cityData, lang = 'en') {
    const f = cityData.fitness;
    const isHi = lang === 'hi';
    const hoursHtml = f.bestHours.map(h => {
      const badgeClass = h.color === 'green' ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-300' :
                         h.color === 'yellow' ? 'bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border-amber-300' :
                         'bg-red-100 dark:bg-red-950/60 text-red-700 dark:text-red-300 border-red-300';
      return `
        <div class="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-700/50">
          <div class="flex items-center gap-2">
            <span class="text-xs font-bold text-slate-700 dark:text-slate-200">${h.time}</span>
            <span class="text-[10px] font-semibold px-2 py-0.5 rounded-full border ${badgeClass}">${h.score}</span>
          </div>
          <span class="text-xs text-slate-600 dark:text-slate-400 text-right truncate max-w-[210px]">${h.status}</span>
        </div>
      `;
    }).join('');

    return `
      <div class="card-weather bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-2xl p-5 border border-orange-500/20 shadow-lg shadow-orange-500/5 transition-all hover:border-orange-500/40">
        <div class="flex items-center justify-between mb-4 pb-2 border-b border-slate-200 dark:border-slate-800">
          <div class="flex items-center gap-2.5">
            <span class="p-2 rounded-xl bg-orange-100 dark:bg-orange-950/60 text-orange-600 dark:text-orange-400">
              ${ICONS.Flame}
            </span>
            <div>
              <h3 class="font-bold text-slate-800 dark:text-slate-100 text-base">
                ${isHi ? 'आउटडोर फिटनेस एवं रनिंग प्लानर' : 'Outdoor Fitness & Workout Window'}
              </h3>
              <p class="text-xs text-slate-500 dark:text-slate-400">
                ${isHi ? 'सर्वोत्तम रनिंग घंटे, सूर्योदय व हीट अलर्ट' : 'Best Running Hours, Solar Cycle & WBGT Alert'}
              </p>
            </div>
          </div>
          <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-orange-50 dark:bg-orange-900/40 text-orange-600 dark:text-orange-300 border border-orange-200 dark:border-orange-800">
            ${f.heatAlert}
          </span>
        </div>

        <!-- Sun Cycle & Wind Banner -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-2.5 mb-4 text-center">
          <div class="p-2.5 rounded-xl bg-orange-50/50 dark:bg-slate-800/40 border border-orange-200/50 dark:border-slate-700">
            <span class="text-[11px] text-slate-500 dark:text-slate-400 block">🌅 ${isHi ? 'सूर्योदय' : 'Sunrise'}</span>
            <span class="font-bold text-sm text-slate-800 dark:text-slate-200">${f.sunrise}</span>
          </div>
          <div class="p-2.5 rounded-xl bg-orange-50/50 dark:bg-slate-800/40 border border-orange-200/50 dark:border-slate-700">
            <span class="text-[11px] text-slate-500 dark:text-slate-400 block">🌇 ${isHi ? 'सूर्यास्त' : 'Sunset'}</span>
            <span class="font-bold text-sm text-slate-800 dark:text-slate-200">${f.sunset}</span>
          </div>
          <div class="p-2.5 rounded-xl bg-orange-50/50 dark:bg-slate-800/40 border border-orange-200/50 dark:border-slate-700">
            <span class="text-[11px] text-slate-500 dark:text-slate-400 block">✨ Golden Hour</span>
            <span class="font-bold text-xs text-amber-600 dark:text-amber-400">${f.goldenHour}</span>
          </div>
          <div class="p-2.5 rounded-xl bg-orange-50/50 dark:bg-slate-800/40 border border-orange-200/50 dark:border-slate-700">
            <span class="text-[11px] text-slate-500 dark:text-slate-400 block">🌡️ WBGT Stress</span>
            <span class="font-bold text-xs text-slate-800 dark:text-slate-200">${f.wbgt}</span>
          </div>
        </div>

        <!-- Running Hours List -->
        <div class="space-y-2">
          <div class="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            ${isHi ? 'घंटे अनुसार अनुकूलता (Running & Cycling)' : 'Hourly Running & Cycling Feasibility'}
          </div>
          ${hoursHtml}
        </div>
      </div>
    `;
  },

  // 3. BEACHGOERS & SURFERS WIDGET
  createBeachWidget(cityData, lang = 'en') {
    const b = cityData.beach;
    const isHi = lang === 'hi';
    if (!b.available) {
      return `
        <div class="card-weather bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-2xl p-5 border border-cyan-500/20 shadow-lg">
          <div class="flex items-center gap-2.5 mb-2">
            <span class="p-2 rounded-xl bg-cyan-100 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400">${ICONS.Waves}</span>
            <h3 class="font-bold text-slate-800 dark:text-slate-100 text-base">${isHi ? 'तटीय एवं सर्फिंग गाइड' : 'Coastal & Surfer Marine Forecast'}</h3>
          </div>
          <p class="text-xs text-slate-500 dark:text-slate-400 italic">⚠️ ${b.message}</p>
        </div>
      `;
    }

    const tidesHtml = b.tides.map(t => `
      <div class="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-700/60 text-center">
        <span class="text-[11px] font-medium text-cyan-600 dark:text-cyan-400 block">${t.type}</span>
        <span class="text-sm font-bold text-slate-800 dark:text-slate-100">${t.time}</span>
        <span class="text-xs text-slate-500 block">${t.height}</span>
      </div>
    `).join('');

    return `
      <div class="card-weather bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-2xl p-5 border border-cyan-500/20 shadow-lg shadow-cyan-500/5 transition-all hover:border-cyan-500/40">
        <div class="flex items-center justify-between mb-4 pb-2 border-b border-slate-200 dark:border-slate-800">
          <div class="flex items-center gap-2.5">
            <span class="p-2 rounded-xl bg-cyan-100 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400">
              ${ICONS.Waves}
            </span>
            <div>
              <h3 class="font-bold text-slate-800 dark:text-slate-100 text-base">
                ${isHi ? 'तटीय एवं सर्फिंग समुद्री बुलेटिन' : 'Beachgoers & Surfers Marine Bulletin'}
              </h3>
              <p class="text-xs text-slate-500 dark:text-slate-400">
                ${isHi ? 'ज्वार-भाटा समय, तरंग ऊंचाई एवं जल तापमान' : 'Tide Timings, Wave Swell & Water Temp'}
              </p>
            </div>
          </div>
          <span class="text-xs font-bold px-3 py-1 rounded-full text-white" style="background-color: ${b.marineFlagColor}">
            🚩 ${b.marineFlag}
          </span>
        </div>

        <!-- Wave & Ocean metrics -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-2.5 mb-4">
          <div class="p-2.5 rounded-xl bg-cyan-50/50 dark:bg-slate-800/40 border border-cyan-200/50 dark:border-slate-700">
            <span class="text-[11px] text-slate-500 dark:text-slate-400 block">🌊 Wave Height</span>
            <span class="font-bold text-sm text-slate-800 dark:text-slate-200">${b.waveHeight}</span>
          </div>
          <div class="p-2.5 rounded-xl bg-cyan-50/50 dark:bg-slate-800/40 border border-cyan-200/50 dark:border-slate-700">
            <span class="text-[11px] text-slate-500 dark:text-slate-400 block">⏱️ Swell Period</span>
            <span class="font-bold text-sm text-slate-800 dark:text-slate-200">${b.swellPeriod}</span>
          </div>
          <div class="p-2.5 rounded-xl bg-cyan-50/50 dark:bg-slate-800/40 border border-cyan-200/50 dark:border-slate-700">
            <span class="text-[11px] text-slate-500 dark:text-slate-400 block">🏊 Water Temp</span>
            <span class="font-bold text-sm text-slate-800 dark:text-slate-200">${b.waterTemp.split(' ')[0]}</span>
          </div>
          <div class="p-2.5 rounded-xl bg-cyan-50/50 dark:bg-slate-800/40 border border-cyan-200/50 dark:border-slate-700">
            <span class="text-[11px] text-slate-500 dark:text-slate-400 block">🛟 Lifeguards</span>
            <span class="font-bold text-xs text-emerald-600 dark:text-emerald-400">Active Duty</span>
          </div>
        </div>

        <!-- Tides Grid -->
        <div class="mb-3">
          <div class="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">
            ${isHi ? 'आज का ज्वार-भाटा चक्र (Tide Timings):' : 'Today\'s Tidal Sequence:'}
          </div>
          <div class="grid grid-cols-3 gap-2">
            ${tidesHtml}
          </div>
        </div>

        <div class="text-xs text-cyan-900 dark:text-cyan-200 p-2.5 rounded-xl bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800">
          🏄 <b>Surfer Note:</b> ${b.surfConditions}
        </div>
      </div>
    `;
  },

  // 4. TRAVELERS WIDGET
  createTravelerWidget(cityData, lang = 'en') {
    const t = cityData.traveler;
    const isHi = lang === 'hi';
    const packingHtml = t.packingAdvice.map(item => `
      <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-purple-50 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 text-xs border border-purple-200 dark:border-purple-800">
        ✓ ${item}
      </span>
    `).join('');

    return `
      <div class="card-weather bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-2xl p-5 border border-purple-500/20 shadow-lg shadow-purple-500/5 transition-all hover:border-purple-500/40">
        <div class="flex items-center justify-between mb-4 pb-2 border-b border-slate-200 dark:border-slate-800">
          <div class="flex items-center gap-2.5">
            <span class="p-2 rounded-xl bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400">
              ${ICONS.Plane}
            </span>
            <div>
              <h3 class="font-bold text-slate-800 dark:text-slate-100 text-base">
                ${isHi ? 'यात्री एवं उड़ान मौसम सहायक' : 'Traveler, Flight & Transit Hub'}
              </h3>
              <p class="text-xs text-slate-500 dark:text-slate-400">
                ${isHi ? 'उड़ान/ट्रेन मौसम व्यवधान एवं स्मार्ट पैकिंग सूची' : 'Airport Flight Delays, Weather Warnings & Smart Packing'}
              </p>
            </div>
          </div>
          <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-purple-50 dark:bg-purple-900/40 text-purple-600 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
            ✈️ Active Transit
          </span>
        </div>

        <!-- Airport & Rail Status -->
        <div class="space-y-2.5 mb-4">
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-700/60 flex items-start gap-2.5">
            <span class="text-lg">🛫</span>
            <div>
              <div class="text-xs font-bold text-slate-800 dark:text-slate-100">${t.airportStatus}</div>
              <div class="text-[11px] text-purple-600 dark:text-purple-400 mt-0.5">${t.flightImpact}</div>
            </div>
          </div>

          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-700/60 flex items-start gap-2.5">
            <span class="text-lg">🚆</span>
            <div>
              <div class="text-xs font-bold text-slate-800 dark:text-slate-100">Indian Railways Status</div>
              <div class="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5">${t.railStatus}</div>
            </div>
          </div>
        </div>

        <!-- Smart Packing AI Suggestions -->
        <div>
          <div class="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">
            🎒 ${isHi ? 'मौसम आधारित स्मार्ट पैकिंग सुझाव:' : 'AI Weather-Adaptive Packing List:'}
          </div>
          <div class="flex flex-wrap gap-2">
            ${packingHtml}
          </div>
        </div>
      </div>
    `;
  },

  // 5. PARENTS & FAMILIES WIDGET
  createFamilyWidget(cityData, lang = 'en') {
    const fam = cityData.family;
    const isHi = lang === 'hi';
    return `
      <div class="card-weather bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-2xl p-5 border border-blue-500/20 shadow-lg shadow-blue-500/5 transition-all hover:border-blue-500/40">
        <div class="flex items-center justify-between mb-4 pb-2 border-b border-slate-200 dark:border-slate-800">
          <div class="flex items-center gap-2.5">
            <span class="p-2 rounded-xl bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400">
              ${ICONS.Users}
            </span>
            <div>
              <h3 class="font-bold text-slate-800 dark:text-slate-100 text-base">
                ${isHi ? 'परिवार एवं स्कूल आवागमन डैशबोर्ड' : 'Parents & Family Daily Routine'}
              </h3>
              <p class="text-xs text-slate-500 dark:text-slate-400">
                ${isHi ? 'स्कूल बस मौसम, वर्षा अलर्ट एवं खेल का समय' : 'Morning School Drop-off, Sudden Rain Alert & Playtime'}
              </p>
            </div>
          </div>
          <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
            Comfort: ${fam.comfortRating}
          </span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
          <div class="p-3.5 rounded-xl bg-blue-50/50 dark:bg-slate-800/50 border border-blue-200/60 dark:border-slate-700">
            <div class="flex items-center gap-2 text-xs font-bold text-blue-700 dark:text-blue-300 mb-1">
              🚌 ${isHi ? 'सुबह स्कूल आवागमन (07:00 - 08:30 AM)' : 'School Commute Window'}
            </div>
            <p class="text-xs text-slate-700 dark:text-slate-300">${fam.schoolCommute.detail}</p>
          </div>

          <div class="p-3.5 rounded-xl bg-blue-50/50 dark:bg-slate-800/50 border border-blue-200/60 dark:border-slate-700">
            <div class="flex items-center gap-2 text-xs font-bold text-blue-700 dark:text-blue-300 mb-1">
              🌧️ ${isHi ? 'वर्षा की संभावना' : 'Morning Rain Risk'}
            </div>
            <p class="text-xs text-slate-700 dark:text-slate-300">${fam.rainRiskMorning}</p>
          </div>
        </div>

        <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 flex items-center justify-between text-xs">
          <span class="text-slate-600 dark:text-slate-300">🛝 <b>${isHi ? 'पार्क व खेलकूद समय:' : 'Optimal Outdoor Playtime:'}</b></span>
          <span class="font-bold text-blue-600 dark:text-blue-400">${fam.playgroundHours}</span>
        </div>
      </div>
    `;
  },

  // 6. AGRICULTURE & GARDENERS WIDGET
  createAgriWidget(cityData, lang = 'en') {
    const ag = cityData.agri;
    const isHi = lang === 'hi';
    return `
      <div class="card-weather bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-2xl p-5 border border-emerald-500/20 shadow-lg shadow-emerald-500/5 transition-all hover:border-emerald-500/40">
        <div class="flex items-center justify-between mb-4 pb-2 border-b border-slate-200 dark:border-slate-800">
          <div class="flex items-center gap-2.5">
            <span class="p-2 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400">
              ${ICONS.Sprout}
            </span>
            <div>
              <h3 class="font-bold text-slate-800 dark:text-slate-100 text-base">
                ${isHi ? 'कृषि एवं बागवानी मौसम परामर्श' : 'Agriculture & Agro-Met Guidance'}
              </h3>
              <p class="text-xs text-slate-500 dark:text-slate-400">
                ${isHi ? 'मृदा नमी, वर्षा पूर्वानुमान एवं तुषार अलर्ट (IMD Agromet)' : 'Soil Moisture, Monsoon Pulse & Frost Alert (IMD Agromet)'}
              </p>
            </div>
          </div>
          <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
            GKMS IMD
          </span>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 gap-2.5 mb-3.5">
          <div class="p-2.5 rounded-xl bg-emerald-50/50 dark:bg-slate-800/40 border border-emerald-200/50 dark:border-slate-700">
            <span class="text-[11px] text-slate-500 dark:text-slate-400 block">🌱 Soil Moisture</span>
            <span class="font-bold text-sm text-slate-800 dark:text-slate-200">${ag.soilMoisture}</span>
          </div>
          <div class="p-2.5 rounded-xl bg-emerald-50/50 dark:bg-slate-800/40 border border-emerald-200/50 dark:border-slate-700">
            <span class="text-[11px] text-slate-500 dark:text-slate-400 block">❄️ Frost Advisory</span>
            <span class="font-bold text-xs text-amber-600 dark:text-amber-400">${ag.frostAlert}</span>
          </div>
          <div class="p-2.5 rounded-xl bg-emerald-50/50 dark:bg-slate-800/40 border border-emerald-200/50 dark:border-slate-700 col-span-2 md:col-span-1">
            <span class="text-[11px] text-slate-500 dark:text-slate-400 block">🌧️ 7-Day Rainfall</span>
            <span class="font-bold text-xs text-slate-800 dark:text-slate-200 truncate block">${ag.monsoonForecast}</span>
          </div>
        </div>

        <div class="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800">
          <div class="text-xs font-bold text-emerald-900 dark:text-emerald-200 mb-1 flex items-center gap-1.5">
            🌾 ${isHi ? 'ग्रामीण कृषि मौसम सेवा परामर्श:' : 'Agro-Met Expert Recommendation:'}
          </div>
          <p class="text-xs text-emerald-800 dark:text-emerald-300 leading-relaxed">${ag.agroAdvisory}</p>
        </div>
      </div>
    `;
  },

  // 7. COMMUTERS WIDGET
  createCommuterWidget(cityData, lang = 'en') {
    const c = cityData.commuter;
    const isHi = lang === 'hi';
    return `
      <div class="card-weather bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-2xl p-5 border border-yellow-500/20 shadow-lg shadow-yellow-500/5 transition-all hover:border-yellow-500/40">
        <div class="flex items-center justify-between mb-4 pb-2 border-b border-slate-200 dark:border-slate-800">
          <div class="flex items-center gap-2.5">
            <span class="p-2 rounded-xl bg-yellow-100 dark:bg-yellow-950/60 text-yellow-600 dark:text-yellow-400">
              ${ICONS.Car}
            </span>
            <div>
              <h3 class="font-bold text-slate-800 dark:text-slate-100 text-base">
                ${isHi ? 'दैनिक यात्री एवं सड़क दृश्यता' : 'Commuter Highway & Visibility Radar'}
              </h3>
              <p class="text-xs text-slate-500 dark:text-slate-400">
                ${isHi ? 'कोहरा दृश्यता मीटर, सड़क फिसलन एवं तूफ़ान चेतावनी' : 'Fog Visibility, Road Slickness & Storm Impacts'}
              </p>
            </div>
          </div>
          <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-yellow-50 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-300 border border-yellow-200 dark:border-yellow-800">
            Impact: ${c.trafficWeatherImpact}
          </span>
        </div>

        <div class="grid grid-cols-2 gap-3 mb-3">
          <div class="p-3 rounded-xl bg-yellow-50/50 dark:bg-slate-800/50 border border-yellow-200/60 dark:border-slate-700">
            <span class="text-[11px] text-slate-500 dark:text-slate-400 block">🌫️ Visibility</span>
            <span class="font-bold text-sm text-slate-800 dark:text-slate-200">${c.fogVisibility}</span>
          </div>
          <div class="p-3 rounded-xl bg-yellow-50/50 dark:bg-slate-800/50 border border-yellow-200/60 dark:border-slate-700">
            <span class="text-[11px] text-slate-500 dark:text-slate-400 block">🛣️ Road Traction</span>
            <span class="font-bold text-sm text-slate-800 dark:text-slate-200">${c.roadCondition}</span>
          </div>
        </div>

        <div class="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60 text-xs text-amber-900 dark:text-amber-200">
          ⚠️ <b>${isHi ? 'सड़क चेतावनी:' : 'Road Alert:'}</b> ${c.criticalAlert}
        </div>
      </div>
    `;
  },

  // 8. EVENT PLANNERS WIDGET
  createEventWidget(cityData, lang = 'en') {
    const ep = cityData.eventPlanner;
    const isHi = lang === 'hi';
    const rainBars = ep.rainProbabilityCurve.map(curve => `
      <div class="flex-1 flex flex-col items-center">
        <span class="text-[10px] text-slate-500 dark:text-slate-400 mb-1">${curve.prob}%</span>
        <div class="w-full bg-slate-100 dark:bg-slate-800 rounded-t h-16 flex items-end">
          <div class="w-full rounded-t ${curve.prob > 30 ? 'bg-indigo-500' : 'bg-indigo-300'}" style="height: ${Math.max(curve.prob, 8)}%"></div>
        </div>
        <span class="text-[10px] font-bold text-slate-700 dark:text-slate-300 mt-1">${curve.hour}</span>
      </div>
    `).join('');

    return `
      <div class="card-weather bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-2xl p-5 border border-indigo-500/20 shadow-lg shadow-indigo-500/5 transition-all hover:border-indigo-500/40">
        <div class="flex items-center justify-between mb-4 pb-2 border-b border-slate-200 dark:border-slate-800">
          <div class="flex items-center gap-2.5">
            <span class="p-2 rounded-xl bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
              ${ICONS.Calendar}
            </span>
            <div>
              <h3 class="font-bold text-slate-800 dark:text-slate-100 text-base">
                ${isHi ? 'इवेंट प्लानर एवं विवाह मौसम सूचकांक' : 'Event Planner & Outdoor Gatherings'}
              </h3>
              <p class="text-xs text-slate-500 dark:text-slate-400">
                ${isHi ? 'वर्षा प्रायिकता वक्र, कम्फर्ट इंडेक्स एवं टेंट सुरक्षा' : 'Rain Probability Curve, Comfort Index & Marquee Wind-load'}
              </p>
            </div>
          </div>
          <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
            Comfort: ${ep.comfortIndex.split(' ')[0]}
          </span>
        </div>

        <div class="grid grid-cols-2 gap-2.5 mb-3.5">
          <div class="p-2.5 rounded-xl bg-indigo-50/50 dark:bg-slate-800/40 border border-indigo-200/50 dark:border-slate-700">
            <span class="text-[11px] text-slate-500 dark:text-slate-400 block">💍 Gathering Viability</span>
            <span class="font-semibold text-xs text-slate-800 dark:text-slate-200">${ep.weddingSuitability}</span>
          </div>
          <div class="p-2.5 rounded-xl bg-indigo-50/50 dark:bg-slate-800/40 border border-indigo-200/50 dark:border-slate-700">
            <span class="text-[11px] text-slate-500 dark:text-slate-400 block">⛺ Canopy / Wind Hazard</span>
            <span class="font-semibold text-xs text-slate-800 dark:text-slate-200">${ep.windLoadRisk}</span>
          </div>
        </div>

        <div>
          <div class="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">
            ${isHi ? 'शाम की वर्षा प्रायिकता वक्र (%):' : 'Hourly Rain Probability Curve (%):'}
          </div>
          <div class="flex items-end gap-1.5 p-2 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-700">
            ${rainBars}
          </div>
        </div>
      </div>
    `;
  }
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = { COMPONENTS };
}
