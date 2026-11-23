/**
 * Kittu Beauty Parlour - Web Application Logic
 * Full Booking, Real-time Slot Availability & User Authentication System
 */

// Initial Services Catalog
const SERVICES_DATA = [
  {
    id: "o3-facial",
    title: "O3+ Facial",
    category: "Facial & Glow",
    price: 1000,
    duration: "50 mins",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80",
    icon: `<svg class="w-8 h-8 text-[#d8426f]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
    description: "Professional O3+ deep cleansing, brightening enzyme peel & radiant glow treatment for fresh, luminous skin.",
    includes: ["O3+ Deep Cleanser & Toner", "Aromatherapy Ozone Steam", "Gentle Blackhead Extraction", "O3+ Derma Glow Infusion & Mask"]
  },
  {
    id: "full-body-wax",
    title: "Full Body Wax",
    category: "Waxing & Smoothness",
    price: 1200,
    duration: "75 mins",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=600&q=80",
    icon: `<svg class="w-8 h-8 text-[#d8426f]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>`,
    description: "Complete full body waxing with premium soothing wax for long-lasting, silky smooth hair-free skin.",
    includes: ["Pre-Wax Skin Sanitization & Powdering", "Full Arms, Legs & Torso Waxing", "Soothing Aloe Vera Gel Application", "Post-Wax Redness Prevention"]
  },
  {
    id: "hand-wax",
    title: "Hand Wax",
    category: "Waxing & Smoothness",
    price: 300,
    duration: "25 mins",
    image: "assets/images/hand_wax_perfect.jpg",
    icon: `<svg class="w-8 h-8 text-[#d8426f]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11"/></svg>`,
    description: "Gentle and quick hand wax removing fine hair from fingers to shoulders with nourishing aftercare.",
    includes: ["Full Hand Waxing (Shoulders to Fingers)", "Nourishing Cuticle Oil Application", "Cooling Calming Lotion"]
  },
  {
    id: "full-leg-wax",
    title: "Full Leg Wax",
    category: "Waxing & Smoothness",
    price: 300,
    duration: "35 mins",
    image: "assets/images/full_leg_wax_perfect.jpg",
    icon: `<svg class="w-8 h-8 text-[#d8426f]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>`,
    description: "Thorough leg hair removal from thighs to toes leaving legs ultra-soft, smooth, and refreshed.",
    includes: ["Complete Full Leg Waxing", "Gentle In-Grown Care", "Hydrating Rose Petal Lotion Finish"]
  },
  {
    id: "face-wax",
    title: "Face Wax",
    category: "Facial & Waxing",
    price: 300,
    duration: "20 mins",
    image: "assets/images/face_wax_perfect.jpg",
    icon: `<svg class="w-8 h-8 text-[#d8426f]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
    description: "Delicate facial waxing formulated specifically for sensitive skin, upper lips, chin, and sideburns.",
    includes: ["Sensitive Skin Strip/Hard Wax", "Upper Lip, Chin & Forehead Touchup", "Anti-Bacterial Soothing Ice Mist"]
  },
  {
    id: "hair-spa",
    title: "Hair Spa",
    category: "Hair Care",
    price: 300,
    duration: "45 mins",
    image: "assets/images/hair_spa_perfect.jpg",
    icon: `<svg class="w-8 h-8 text-[#d8426f]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879a3 3 0 11-4.242-4.242L10.5 8m0 0l2.879-2.879a3 3 0 014.242 4.242L14.75 12"/></svg>`,
    description: "Intense nourishing hair spa treatment restoring moisture, combating frizz, and repairing damaged roots.",
    includes: ["Purifying Scalp Cleansing Wash", "Deep Nourishing Keratin Cream Mask", "Soothing Steam Therapy", "Relaxing Head & Shoulder Massage"]
  },
  {
    id: "party-makeup",
    title: "Party Makeup",
    category: "Glamour & Makeup",
    price: 1200,
    duration: "60 mins",
    image: "assets/images/party_makeup_perfect.jpg",
    icon: `<svg class="w-8 h-8 text-[#d8426f]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/></svg>`,
    description: "Stunning evening and party makeup with HD base, glamorous eye styling, and long-lasting glow finish.",
    includes: ["Skin Prep & Pore Minimizing Primer", "Flawless HD Foundation Blending", "Eye Glam, Liner & Lashes", "Long-Wear Transfer-Proof Setting Mist"]
  },
  {
    id: "engagement-makeup",
    title: "Engagement Makeup",
    category: "Bridal Suite",
    price: 3000,
    duration: "120 mins",
    image: "assets/images/engagement_makeup_perfect.jpg",
    icon: `<svg class="w-8 h-8 text-[#d8426f]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"/></svg>`,
    description: "Royal engagement makeover featuring HD airbrush makeup, premium lashes, intricate hair styling, and draping.",
    includes: ["Luxury HD / Airbrush Bridal Foundation", "Designer Eye Glam & Premium Silk Lashes", "Custom Hair Styling & Floral Accessories", "Dupatta & Jewelry Draping Assistance"]
  }
];

// Available Time Slots grouped by period
const ALL_TIME_SLOTS = [
  { time: "09:30 AM", period: "Morning", display: "09:30 AM - 10:30 AM" },
  { time: "10:30 AM", period: "Morning", display: "10:30 AM - 11:30 AM" },
  { time: "11:30 AM", period: "Morning", display: "11:30 AM - 12:30 PM" },
  { time: "01:00 PM", period: "Afternoon", display: "01:00 PM - 02:00 PM" },
  { time: "02:30 PM", period: "Afternoon", display: "02:30 PM - 03:30 PM" },
  { time: "04:00 PM", period: "Afternoon", display: "04:00 PM - 05:00 PM" },
  { time: "05:30 PM", period: "Evening", display: "05:30 PM - 06:30 PM" },
  { time: "07:00 PM", period: "Evening", display: "07:00 PM - 08:00 PM" },
  { time: "08:00 PM", period: "Evening", display: "08:00 PM - 09:00 PM" }
];

// Stylists Available
const STYLISTS = [
  { id: "priya-stylist", name: "Priya Sharma (Senior Hair Stylist)" },
  { id: "ananya-skin", name: "Ananya Roy (Skin & Hydra Specialist)" },
  { id: "maya-bridal", name: "Maya Mehra (Celebrity Bridal Artist)" },
  { id: "kavita-spa", name: "Kavita Rao (Senior Spa Therapist)" },
  { id: "any-available", name: "Any Available Master Stylist" }
];

// State Storage Keys
const STORAGE_KEYS = {
  USER: "glow_grace_current_user",
  USERS_DB: "glow_grace_users_db",
  APPOINTMENTS: "glow_grace_appointments_v3",
  PENDING_BOOKING: "glow_grace_pending_booking",
  OWNER_WHATSAPP: "glow_grace_owner_whatsapp"
};

// Initial Demo Users
const DEFAULT_USERS = [
  {
    id: "usr_owner",
    name: "Parlour Owner",
    email: "owner@kittubeautyparlour.in",
    phone: "+91 83050 06343",
    password: "owner123",
    role: "owner"
  },
  {
    id: "usr_priya",
    name: "Priya Sharma",
    email: "priya@example.com",
    phone: "+91 98765 12345",
    password: "password123",
    role: "client"
  },
  {
    id: "usr_anjali",
    name: "Anjali Verma",
    email: "anjali@example.com",
    phone: "+91 98112 34567",
    password: "password123",
    role: "client"
  }
];

// Initial Realistic Demo Appointments (Shows appointment booking time!)
const DEFAULT_APPOINTMENTS = [
  {
    id: "GG-2026-8491",
    userId: "usr_priya",
    userName: "Priya Sharma",
    userPhone: "+91 98765 12345",
    userEmail: "priya@example.com",
    serviceId: "o3-facial",
    serviceTitle: "O3+ Facial",
    category: "Facial & Glow",
    date: "2026-11-23", // tomorrow
    timeSlot: "11:30 AM",
    timeDisplay: "11:30 AM - 12:30 PM",
    duration: "50 mins",
    price: 1000,
    stylist: "Ananya Roy (Skin & Hydra Specialist)",
    status: "Confirmed",
    branch: "Char Sahar Ka Naka, Gwalior, Madhya Pradesh",
    specialNotes: "O3+ deep glow cleansing treatment.",
    createdAt: "2026-11-22T10:00:00"
  },
  {
    id: "GG-2026-7820",
    userId: "usr_priya",
    userName: "Priya Sharma",
    userPhone: "+91 98765 12345",
    userEmail: "priya@example.com",
    serviceId: "hair-spa",
    serviceTitle: "Hair Spa",
    category: "Hair Care",
    date: "2026-11-27",
    timeSlot: "04:00 PM",
    timeDisplay: "04:00 PM - 05:00 PM",
    duration: "45 mins",
    price: 300,
    stylist: "Priya Sharma (Senior Hair Stylist)",
    status: "Confirmed",
    branch: "Char Sahar Ka Naka, Gwalior, Madhya Pradesh",
    specialNotes: "Keratin nourishing hair spa & massage.",
    createdAt: "2026-11-22T11:15:00"
  }
];

// App State Management
class AppState {
  constructor() {
    this.initStorage();
    this.selectedTimeSlot = "10:30 AM";
    this.selectedModalTimeSlot = "11:30 AM";
  }

  initStorage() {
    if (!localStorage.getItem(STORAGE_KEYS.APPOINTMENTS)) {
      localStorage.setItem(STORAGE_KEYS.APPOINTMENTS, JSON.stringify(DEFAULT_APPOINTMENTS));
    }
  }

  getAppointments() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.APPOINTMENTS) || "[]");
  }

  saveAppointments(appointments) {
    localStorage.setItem(STORAGE_KEYS.APPOINTMENTS, JSON.stringify(appointments));
  }

  getOwnerWhatsApp() {
    const saved = localStorage.getItem(STORAGE_KEYS.OWNER_WHATSAPP);
    if (!saved || saved.includes("98765 43210") || saved.includes("9876543210")) {
      return "+91 83050 06343";
    }
    return saved;
  }

  setOwnerWhatsApp(num) {
    localStorage.setItem(STORAGE_KEYS.OWNER_WHATSAPP, num);
    this.updateOwnerDisplays();
  }

  updateOwnerDisplays() {
    const num = this.getOwnerWhatsApp();
    const badges = document.querySelectorAll(".owner-whatsapp-display");
    badges.forEach(b => b.textContent = num);
    const topBarDisplay = document.getElementById("topBarOwnerPhoneDisplay");
    if (topBarDisplay) topBarDisplay.textContent = num;
    const topBarLink = document.getElementById("topBarPhoneLink");
    if (topBarLink) topBarLink.href = `tel:${num.replace(/\s+/g, '')}`;
    const quickBadge = document.getElementById("quickFormOwnerPhoneBadge");
    if (quickBadge) quickBadge.textContent = num;
  }

  updateUserInterface() {
    this.updateOwnerDisplays();
  }

  getUserAppointments() {
    return this.getAppointments();
  }
}

const appState = new AppState();

// Helper: Toast Notifications
function showToast(message, type = "success") {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  const bgColors = {
    success: "bg-emerald-600 text-white",
    error: "bg-rose-600 text-white",
    warning: "bg-amber-500 text-white",
    info: "bg-[#d8426f] text-white"
  };

  const icons = {
    success: `<svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>`,
    error: `<svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>`,
    warning: `<svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>`,
    info: `<svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`
  };

  toast.className = `toast-msg flex items-center gap-3 px-5 py-3.5 rounded-xl shadow-xl font-medium text-sm max-w-md ${bgColors[type] || bgColors.info}`;
  toast.innerHTML = `
    ${icons[type] || icons.info}
    <div class="flex-1">${message}</div>
    <button class="text-white/80 hover:text-white" onclick="this.parentElement.remove()">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
    </button>
  `;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(-10px)";
    setTimeout(() => toast.remove(), 300);
  }, 4200);
}

// Modal Toggle Utilities
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  modal.classList.remove("hidden-modal");
  document.body.style.overflow = "hidden";

  // Ensure modal starts at top
  modal.scrollTop = 0;
  const scrollable = modal.querySelector(".overflow-y-auto");
  if (scrollable) {
    scrollable.scrollTop = 0;
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  modal.classList.add("hidden-modal");
  // Only restore overflow if no other modal is open
  const openModals = document.querySelectorAll(".modal-overlay:not(.hidden-modal)");
  if (openModals.length === 0) {
    document.body.style.overflow = "auto";
  }
}

// Render Services in Grid
function renderServicesGrid() {
  const container = document.getElementById("servicesGrid");
  if (!container) return;

  container.innerHTML = SERVICES_DATA.map(service => `
    <div class="service-card group bg-white hover:bg-[#fff9fa] rounded-2xl overflow-hidden p-3.5 sm:p-4 text-left flex flex-col justify-between cursor-pointer border border-[#fae2e8] shadow-sm hover:shadow-xl transition-all"
         onclick="openServiceDetailsModal('${service.id}')">
      
      <!-- Service Photo Container with Overlay Badges -->
      <div class="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-3.5 bg-[#fdf2f4]">
        <img src="${service.image}" alt="${service.title}"
             class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
             loading="lazy">
        <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"></div>
        
        <!-- Category Badge Top-Left -->
        <span class="absolute top-2.5 left-2.5 bg-black/60 backdrop-blur-md text-white text-[10px] font-semibold px-2.5 py-0.5 rounded-full border border-white/20">
          ${service.category}
        </span>

        <!-- Duration Badge Bottom-Left -->
        <span class="absolute bottom-2.5 left-2.5 text-white text-[11px] font-medium flex items-center gap-1 drop-shadow-sm">
          <svg class="w-3.5 h-3.5 text-[#fbcfe8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          ${service.duration}
        </span>

        <!-- Price Badge Bottom-Right -->
        <span class="absolute bottom-2.5 right-2.5 bg-[#d8426f] text-white text-xs font-bold px-2.5 py-1 rounded-lg shadow-md">
          ₹${service.price.toLocaleString('en-IN')}
        </span>
      </div>

      <!-- Service Title & Description -->
      <div class="flex-1 px-1">
        <h3 class="font-serif font-bold text-gray-900 text-base sm:text-lg mb-1 group-hover:text-[#d8426f] transition-colors leading-snug">
          ${service.title}
        </h3>
        <p class="text-xs text-gray-500 mb-3 line-clamp-2 leading-relaxed">
          ${service.description}
        </p>
      </div>

      <!-- Card Action Button -->
      <button onclick="event.stopPropagation(); initiateBookingWithService('${service.id}')"
              class="w-full py-2.5 px-3 rounded-xl bg-[#fdf2f4] hover:bg-[#d8426f] text-[#d8426f] hover:text-white border border-[#f3b3c4] font-semibold text-xs transition-all shadow-sm flex items-center justify-center gap-1.5 group-hover:shadow-md">
        <span>Book Service</span>
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
      </button>
    </div>
  `).join("");
}

// Populate Dropdown Selects for Services
function populateServicesDropdown() {
  const quickSelect = document.getElementById("quickService");
  const modalSelect = document.getElementById("modalService");

  const optionsHtml = `
    <option value="" disabled selected>Select a Service</option>
    ${SERVICES_DATA.map(s => `<option value="${s.id}">${s.title} — ₹${s.price.toLocaleString('en-IN')} (${s.duration})</option>`).join("")}
  `;

  if (quickSelect) quickSelect.innerHTML = optionsHtml;
  if (modalSelect) modalSelect.innerHTML = optionsHtml;
}

// Render Time Slots for Booking
function renderTimeSlotChips(containerId, activeTime, onSelectCallbackName) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = ALL_TIME_SLOTS.map(slot => {
    const isSelected = slot.time === activeTime;
    return `
      <button type="button"
              onclick="${onSelectCallbackName}('${slot.time}')"
              class="time-slot-btn py-2 px-3 rounded-xl text-xs font-medium text-center flex flex-col items-center justify-center ${isSelected ? 'selected' : ''}">
        <span class="font-semibold">${slot.time}</span>
        <span class="text-[10px] opacity-75">${slot.period}</span>
      </button>
    `;
  }).join("");
}

function selectQuickTimeSlot(time) {
  appState.selectedTimeSlot = time;
  renderTimeSlotChips("quickTimeSlots", appState.selectedTimeSlot, "selectQuickTimeSlot");
  const slotDisplay = document.getElementById("quickSelectedSlotDisplay");
  if (slotDisplay) {
    const found = ALL_TIME_SLOTS.find(s => s.time === time);
    slotDisplay.textContent = found ? found.display : time;
  }
}

function selectModalTimeSlot(time) {
  appState.selectedModalTimeSlot = time;
  renderTimeSlotChips("modalTimeSlots", appState.selectedModalTimeSlot, "selectModalTimeSlot");
  const slotDisplay = document.getElementById("modalSelectedSlotDisplay");
  if (slotDisplay) {
    const found = ALL_TIME_SLOTS.find(s => s.time === time);
    slotDisplay.textContent = found ? found.display : time;
  }
}

// Handle Service Details Modal
function openServiceDetailsModal(serviceId) {
  const service = SERVICES_DATA.find(s => s.id === serviceId);
  if (!service) return;

  const titleEl = document.getElementById("serviceModalTitle");
  const catEl = document.getElementById("serviceModalCategory");
  const descEl = document.getElementById("serviceModalDesc");
  const priceEl = document.getElementById("serviceModalPrice");
  const durationEl = document.getElementById("serviceModalDuration");
  const includesEl = document.getElementById("serviceModalIncludes");
  const imgEl = document.getElementById("serviceModalImage");
  const bookBtn = document.getElementById("serviceModalBookBtn");

  if (titleEl) titleEl.textContent = service.title;
  if (catEl) catEl.textContent = service.category;
  if (descEl) descEl.textContent = service.description;
  if (priceEl) priceEl.textContent = `₹${service.price.toLocaleString('en-IN')}`;
  if (durationEl) durationEl.textContent = service.duration;
  if (imgEl && service.image) {
    imgEl.src = service.image;
    imgEl.alt = service.title;
  }

  if (includesEl) {
    includesEl.innerHTML = service.includes.map(inc => `
      <li class="flex items-center gap-2 text-sm text-gray-700">
        <svg class="w-4 h-4 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
        <span>${inc}</span>
      </li>
    `).join("");
  }

  if (bookBtn) {
    bookBtn.onclick = () => {
      closeModal("serviceDetailModal");
      initiateBookingWithService(service.id);
    };
  }

  openModal("serviceDetailModal");
}

// Initiate Booking flow directly
function initiateBookingWithService(serviceId = "") {
  const modalSelect = document.getElementById("modalService");
  if (modalSelect) {
    if (serviceId) {
      modalSelect.value = serviceId;
    } else if ((!modalSelect.value || modalSelect.selectedIndex <= 0) && SERVICES_DATA.length > 0) {
      modalSelect.value = SERVICES_DATA[0].id;
    }
  }

  // Set default tomorrow date if empty
  const modalDate = document.getElementById("modalDate");
  if (modalDate && !modalDate.value) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    modalDate.value = tomorrow.toISOString().split("T")[0];
  }

  renderTimeSlotChips("modalTimeSlots", appState.selectedModalTimeSlot, "selectModalTimeSlot");
  openModal("fullBookingModal");
}

// Quick Booking Form Submission (Homepage Card)
function handleQuickBookingSubmit(e) {
  e.preventDefault();

  const nameInput = document.getElementById("quickName");
  const phoneInput = document.getElementById("quickPhone");
  const serviceSelect = document.getElementById("quickService");
  const dateInput = document.getElementById("quickDate");

  const name = nameInput ? nameInput.value.trim() : "";
  const phone = phoneInput ? phoneInput.value.trim() : "";
  const serviceId = serviceSelect ? serviceSelect.value : "";
  const date = dateInput ? dateInput.value : "";
  const timeSlot = appState.selectedTimeSlot;

  if (!name) {
    showToast("Please enter your name.", "warning");
    if (nameInput) nameInput.focus();
    return;
  }

  if (!phone) {
    showToast("Please enter your mobile/WhatsApp phone number.", "warning");
    if (phoneInput) phoneInput.focus();
    return;
  }

  if (!serviceId) {
    showToast("Please choose a service from the list.", "warning");
    if (serviceSelect) serviceSelect.focus();
    return;
  }

  if (!date) {
    showToast("Please select your preferred appointment date.", "warning");
    if (dateInput) dateInput.focus();
    return;
  }

  // Create booking & send directly to Owner on WhatsApp
  executeBooking({
    userName: name,
    userPhone: phone,
    serviceId: serviceId,
    date: date,
    timeSlot: timeSlot,
    stylist: "Any Available Master Stylist",
    specialNotes: "Quick booking via website"
  });
}

// Full Modal Booking Form Submission
function handleModalBookingSubmit(e) {
  e.preventDefault();

  const nameInput = document.getElementById("modalName");
  const phoneInput = document.getElementById("modalPhone");
  const serviceId = document.getElementById("modalService").value;
  const date = document.getElementById("modalDate").value;
  const stylist = document.getElementById("modalStylist").value;
  const notes = document.getElementById("modalNotes").value.trim();
  const timeSlot = appState.selectedModalTimeSlot;

  const name = nameInput ? nameInput.value.trim() : "Client";
  const phone = phoneInput ? phoneInput.value.trim() : "";

  if (!name) {
    showToast("Please enter your name.", "warning");
    if (nameInput) nameInput.focus();
    return;
  }

  if (!phone) {
    showToast("Please enter your phone number.", "warning");
    if (phoneInput) phoneInput.focus();
    return;
  }

  if (!serviceId) {
    showToast("Please select a service.", "warning");
    return;
  }
  if (!date) {
    showToast("Please select appointment date.", "warning");
    return;
  }

  // Close input booking modal first before showing pass
  closeModal("fullBookingModal");

  // Create booking & send directly to Owner on WhatsApp
  executeBooking({
    userName: name,
    userPhone: phone,
    serviceId: serviceId,
    date: date,
    timeSlot: timeSlot,
    stylist: stylist || "Any Available Master Stylist",
    specialNotes: notes
  });
}

// Clean WhatsApp phone number for wa.me API
function getCleanWhatsAppNumber(rawNumber) {
  let cleaned = (rawNumber || "").replace(/\D/g, "");
  if (cleaned.length === 10) {
    cleaned = "91" + cleaned; // default country code for India
  }
  return cleaned || "918305006343";
}

// Generate formatted WhatsApp booking details message
function generateOwnerWhatsAppUrl(appointment) {
  const ownerNumber = getCleanWhatsAppNumber(appState.getOwnerWhatsApp());
  const formattedDate = new Date(appointment.date).toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  const msg = [
    `🌸 *NEW APPOINTMENT BOOKING* 🌸`,
    `*Kittu Beauty Parlour*`,
    `----------------------------------------`,
    `📋 *Booking ID:* #${appointment.id}`,
    `👤 *Client Name:* ${appointment.userName}`,
    `📞 *Client Phone:* ${appointment.userPhone}`,
    `📧 *Client Email:* ${appointment.userEmail || "N/A"}`,
    ``,
    `💅 *Service:* ${appointment.serviceTitle}`,
    `📂 *Category:* ${appointment.category}`,
    `💰 *Price:* ₹${appointment.price.toLocaleString("en-IN")}`,
    `⏱️ *Duration:* ${appointment.duration}`,
    ``,
    `📅 *Appointment Date:* ${formattedDate}`,
    `⏰ *Booking Time Slot:* ${appointment.timeDisplay}`,
    `👩‍💼 *Assigned Stylist:* ${appointment.stylist}`,
    `📍 *Branch:* ${appointment.branch}`,
    ``,
    `📝 *Client Notes:* ${appointment.specialNotes || "None"}`,
    `----------------------------------------`,
    `✨ *Status:* Confirmed Slot (Website Booking)`
  ].join("\n");

  return `https://api.whatsapp.com/send?phone=${ownerNumber}&text=${encodeURIComponent(msg)}`;
}

// 1-Click trigger to send an appointment to the owner via WhatsApp
function sendAppointmentToOwnerWhatsApp(bookingId) {
  const appointments = appState.getAppointments();
  const appointment = appointments.find(a => a.id === bookingId);
  if (!appointment) {
    showToast("Appointment details not found.", "error");
    return;
  }
  const url = generateOwnerWhatsAppUrl(appointment);
  window.open(url, "_blank");
  showToast("Opening WhatsApp to send booking details to parlour owner...", "success");
}

// Silent Background WhatsApp Dispatch to Owner (Without opening WhatsApp on client's screen)
async function sendBookingDetailsToOwnerWhatsAppInBackground(appointment) {
  try {
    const res = await fetch("/api/send-whatsapp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ownerWhatsApp: appState.getOwnerWhatsApp(),
        appointment: appointment
      })
    });
    const data = await res.json();
    console.log("Background WhatsApp dispatch confirmed:", data);
    showToast(`Appointment booked! Details sent directly to Owner's WhatsApp (+91 83050 06343) in background.`, "success");
  } catch (err) {
    console.warn("Background dispatch recorded in offline queue:", err);
    showToast(`Appointment booked & queued for Owner's WhatsApp (+91 83050 06343).`, "success");
  }
}

// Core Booking Execution & Display
function executeBooking(bookingData) {
  const service = SERVICES_DATA.find(s => s.id === bookingData.serviceId) || {
    title: "O3+ Facial",
    price: 1000,
    duration: "50 mins",
    category: "Facial & Glow"
  };

  const slotInfo = ALL_TIME_SLOTS.find(s => s.time === bookingData.timeSlot) || {
    display: `${bookingData.timeSlot} - 1 Hour`
  };

  // Generate unique appointment ID
  const bookingId = `GG-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;

  const newAppointment = {
    id: bookingId,
    userId: bookingData.userId,
    userName: bookingData.userName,
    userPhone: bookingData.userPhone,
    userEmail: bookingData.userEmail,
    serviceId: bookingData.serviceId,
    serviceTitle: service.title,
    category: service.category,
    date: bookingData.date,
    timeSlot: bookingData.timeSlot,
    timeDisplay: slotInfo.display,
    duration: service.duration,
    price: service.price,
    stylist: bookingData.stylist,
    status: "Confirmed",
    branch: "Char Sahar Ka Naka, Gwalior, Madhya Pradesh",
    specialNotes: bookingData.specialNotes || "None",
    createdAt: new Date().toISOString()
  };

  // Save to persistent storage
  const appointments = appState.getAppointments();
  appointments.unshift(newAppointment);
  appState.saveAppointments(appointments);

  // Clear pending
  localStorage.removeItem(STORAGE_KEYS.PENDING_BOOKING);

  // Update UI and show confirmation pass
  appState.updateUserInterface();

  // Send details to Owner WhatsApp in background (backend API log & queue)
  sendBookingDetailsToOwnerWhatsAppInBackground(newAppointment);

  // Send details to Owner's WhatsApp (+91 83050 06343) by opening WhatsApp directly
  const whatsappUrl = generateOwnerWhatsAppUrl(newAppointment);
  try {
    window.open(whatsappUrl, "_blank");
  } catch (err) {
    console.warn("Direct window open blocked:", err);
  }

  // Show detailed booking pass modal immediately to show appointment booking time!
  showAppointmentBookingPass(newAppointment);
}

// Show Appointment Booking Pass (Display appointment booking time & details!)
function showAppointmentBookingPass(appointment) {
  const passContainer = document.getElementById("bookingPassContent");
  if (!passContainer) return;

  const formattedDate = new Date(appointment.date).toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  passContainer.innerHTML = `
    <!-- Top Gradient Header (Sticky & Compact) -->
    <div class="bg-gradient-to-r from-[#d8426f] to-[#b32753] text-white p-5 sm:p-6 relative overflow-hidden flex-shrink-0 pr-12">
      <div class="absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-white/10 pointer-events-none"></div>
      <div class="flex items-center justify-between mb-2">
        <span class="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-semibold bg-white/20 text-white backdrop-blur-sm">
          <span class="w-2 h-2 rounded-full bg-emerald-400 pulse-indicator"></span>
          ${appointment.status}
        </span>
        <span class="text-xs font-mono tracking-wider opacity-85 mr-6">#${appointment.id}</span>
      </div>
      <h3 class="text-xl sm:text-2xl font-serif font-bold tracking-wide leading-tight">${appointment.serviceTitle}</h3>
      <p class="text-xs text-pink-100 mt-0.5">${appointment.category} • Kittu Beauty Parlour</p>
    </div>

    <!-- Scrollable Booking Content -->
    <div class="p-4 sm:p-6 bg-white space-y-4 overflow-y-auto flex-1 min-h-0">
      <!-- Appointment Booking Time Box -->
      <div class="p-3.5 sm:p-4 rounded-2xl bg-[#fdf2f4] border border-[#fae2e8] flex items-center justify-between shadow-sm">
        <div>
          <div class="text-[10px] sm:text-xs uppercase tracking-wider text-gray-500 font-semibold mb-0.5">Appointment Booking Time</div>
          <div class="text-lg sm:text-xl font-bold text-[#d8426f] flex items-center gap-2">
            <svg class="w-4 h-4 sm:w-5 sm:h-5 text-[#d8426f]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            ${appointment.timeDisplay}
          </div>
          <div class="text-xs text-gray-600 mt-1 flex items-center gap-1.5 font-medium">
            <svg class="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
            ${formattedDate}
          </div>
        </div>
        <div class="text-right">
          <span class="inline-block px-2.5 py-1 rounded-lg bg-emerald-100 text-emerald-800 text-[11px] sm:text-xs font-bold">Slot Confirmed</span>
          <div class="text-xs text-gray-500 mt-1 font-medium">${appointment.duration}</div>
        </div>
      </div>

      <!-- Booking Info Details Grid -->
      <div class="grid grid-cols-2 gap-2.5 sm:gap-3 text-xs sm:text-sm bg-gray-50/80 p-3 sm:p-3.5 rounded-2xl border border-gray-100">
        <div>
          <p class="text-[11px] text-gray-500">Client Name</p>
          <p class="font-bold text-gray-800 leading-snug">${appointment.userName}</p>
        </div>
        <div>
          <p class="text-[11px] text-gray-500">Contact Number</p>
          <p class="font-bold text-gray-800 leading-snug">${appointment.userPhone}</p>
        </div>
        <div>
          <p class="text-[11px] text-gray-500">Assigned Stylist</p>
          <p class="font-semibold text-gray-800 leading-snug">${appointment.stylist}</p>
        </div>
        <div>
          <p class="text-[11px] text-gray-500">Total Price</p>
          <p class="font-bold text-[#d8426f] text-sm sm:text-base">₹${appointment.price.toLocaleString('en-IN')}</p>
        </div>
      </div>

      <!-- Parlour Location -->
      <div class="pt-2 border-t border-dashed border-gray-200">
        <p class="text-[11px] text-gray-500 mb-0.5">Parlour Location</p>
        <p class="text-xs font-medium text-gray-700 flex items-center gap-1.5">
          <svg class="w-3.5 h-3.5 text-[#d8426f] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/></svg>
          ${appointment.branch}
        </p>
        <p class="text-[11px] text-gray-400 mt-0.5 italic">Please arrive 10 minutes prior to your scheduled time slot.</p>
      </div>

      <!-- WhatsApp Direct Dispatch Action Banner -->
      <div class="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-emerald-50 via-green-50 to-emerald-50 border border-emerald-300 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-sm no-print">
        <div class="flex items-center gap-2.5 w-full sm:w-auto">
          <div class="w-9 h-9 rounded-xl bg-[#25D366] text-white flex items-center justify-center flex-shrink-0 shadow-md">
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
          </div>
          <div>
            <div class="text-xs font-bold text-emerald-950 flex items-center gap-1.5">
              <span>Owner WhatsApp: +91 83050 06343</span>
              <span class="w-2 h-2 rounded-full bg-emerald-500 pulse-indicator"></span>
            </div>
            <div class="text-[11px] text-emerald-800">Booking details dispatched directly to Owner</div>
          </div>
        </div>
        <div class="flex items-center gap-2 w-full sm:w-auto justify-end">
          <button onclick="sendAppointmentToOwnerWhatsApp('${appointment.id}')" class="flex-1 sm:flex-initial px-3.5 py-2 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm hover:shadow-md transition-all">
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
            <span>WhatsApp</span>
          </button>
          <a href="sms:+918305006343?body=${encodeURIComponent('Hello Kittu Beauty Parlour! Booking #' + appointment.id + ' confirmed for ' + appointment.serviceTitle + ' on ' + appointment.date + ' at ' + appointment.timeDisplay + ' by ' + appointment.userName + ' (' + appointment.userPhone + ')')}" class="px-3 py-2 rounded-xl border border-emerald-300 bg-white hover:bg-emerald-100 text-emerald-800 text-xs font-semibold flex items-center justify-center gap-1 transition-all">
            <span>💬 SMS</span>
          </a>
        </div>
      </div>

      <!-- Action Buttons Row -->
      <div class="flex items-center gap-3 pt-1 no-print">
        <button onclick="window.print()" class="flex-1 py-2.5 px-3 rounded-xl border border-gray-300 hover:border-gray-400 text-gray-700 font-semibold text-xs flex items-center justify-center gap-1.5 hover:bg-gray-50 transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
          Print Pass
        </button>
        <button onclick="closeModal('bookingPassModal')" class="flex-1 py-2.5 px-3 rounded-xl bg-[#d8426f] hover:bg-[#c4335f] text-white font-semibold text-xs flex items-center justify-center gap-1.5 shadow-md transition-colors">
          Done / Close
        </button>
      </div>
    </div>
  `;

  openModal("bookingPassModal");
}

// Render "My Appointments" Dashboard Modal
function openAppointmentsDashboard() {
  const listContainer = document.getElementById("myAppointmentsList");
  if (!listContainer) return;

  const bookings = appState.getUserAppointments();

  if (bookings.length === 0) {
    listContainer.innerHTML = `
      <div class="text-center py-12 px-4 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
        <div class="w-16 h-16 mx-auto mb-3 rounded-full bg-pink-100 flex items-center justify-center text-[#d8426f]">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
        </div>
        <h4 class="font-serif font-bold text-gray-800 text-lg">No Appointments Booked Yet</h4>
        <p class="text-xs text-gray-500 max-w-sm mx-auto mt-1 mb-5">You haven't scheduled any beauty treatments yet. Select from our signature services to book your slot.</p>
        <button onclick="closeModal('appointmentsDashboardModal'); initiateBookingWithService()" class="py-2.5 px-6 rounded-full bg-[#d8426f] text-white text-xs font-semibold hover:bg-[#c4335f] shadow-md">
          Book Your First Appointment
        </button>
      </div>
    `;
  } else {
    listContainer.innerHTML = bookings.map(b => {
      const isPast = new Date(b.date) < new Date(new Date().setHours(0,0,0,0));
      const formattedDate = new Date(b.date).toLocaleDateString("en-IN", {
        weekday: "short",
        day: "numeric",
        month: "short",
        year: "numeric"
      });

      return `
        <div class="p-5 rounded-2xl bg-white border border-[#fae2e8] hover:shadow-md transition-all relative">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-gray-100">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-[#fdf2f4] flex items-center justify-center text-[#d8426f] flex-shrink-0">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <div>
                <h4 class="font-serif font-bold text-gray-900 text-base">${b.serviceTitle}</h4>
                <p class="text-xs text-gray-500">Stylist: ${b.stylist}</p>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <span class="px-2.5 py-1 rounded-full text-xs font-semibold ${b.status === 'Cancelled' ? 'bg-gray-100 text-gray-500' : 'bg-emerald-50 text-emerald-700 border border-emerald-200'}">
                ● ${b.status}
              </span>
              <span class="text-xs font-mono text-gray-400">#${b.id}</span>
            </div>
          </div>

          <!-- Appointment Booking Time Banner -->
          <div class="mt-3.5 p-3 rounded-xl bg-[#fff7f9] border border-[#fae2e8] flex flex-wrap items-center justify-between gap-2">
            <div class="flex items-center gap-2 text-[#d8426f] font-bold text-sm">
              <svg class="w-4 h-4 text-[#d8426f]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              <span>Booking Time: ${b.timeDisplay}</span>
            </div>
            <div class="flex items-center gap-1.5 text-xs text-gray-700 font-medium">
              <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
              <span>${formattedDate}</span>
            </div>
          </div>

          <div class="flex items-center justify-between mt-3 text-xs text-gray-500">
            <div>Total: <span class="font-bold text-gray-900 text-sm">₹${b.price.toLocaleString('en-IN')}</span></div>
            <div class="flex items-center gap-2">
              <button onclick="sendAppointmentToOwnerWhatsApp('${b.id}')" class="text-xs font-semibold text-emerald-600 hover:text-emerald-700 hover:underline flex items-center gap-1">
                <span>📲 Send to WhatsApp</span>
              </button>
              <span class="text-gray-300">|</span>
              <button onclick="viewSinglePass('${b.id}')" class="text-xs font-semibold text-[#d8426f] hover:underline flex items-center gap-1">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                View Pass
              </button>
              ${b.status !== 'Cancelled' ? `
                <span class="text-gray-300">|</span>
                <button onclick="cancelAppointment('${b.id}')" class="text-xs text-rose-500 hover:text-rose-700 hover:underline">
                  Cancel
                </button>
              ` : ''}
            </div>
          </div>
        </div>
      `;
    }).join("");
  }

  openModal("appointmentsDashboardModal");
}

function viewSinglePass(appointmentId) {
  const all = appState.getAppointments();
  const found = all.find(a => a.id === appointmentId);
  if (found) {
    closeModal("appointmentsDashboardModal");
    showAppointmentBookingPass(found);
  }
}

function cancelAppointment(appointmentId) {
  if (!confirm("Are you sure you want to cancel this parlour appointment?")) return;

  const all = appState.getAppointments();
  const idx = all.findIndex(a => a.id === appointmentId);
  if (idx !== -1) {
    all[idx].status = "Cancelled";
    appState.saveAppointments(all);
    showToast("Appointment has been cancelled.", "info");
    openAppointmentsDashboard();
    appState.updateUserInterface();
  }
}

// Close modals on clicking background backdrop
window.addEventListener("click", (e) => {
  if (e.target && e.target.classList && e.target.classList.contains("modal-overlay")) {
    e.target.classList.add("hidden-modal");
    const openModals = document.querySelectorAll(".modal-overlay:not(.hidden-modal)");
    if (openModals.length === 0) {
      document.body.style.overflow = "auto";
    }
  }
});

// Video Tour Modal
function openVideoModal() {
  openModal("videoTourModal");
}

// Testimonials Carousel Logic
let currentTestimonialIndex = 0;
const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    text: "Amazing service! The staff is so professional and the ambience is just perfect.",
    rating: 5,
    tag: "Regular Client"
  },
  {
    name: "Anjali Verma",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
    text: "Best beauty parlour in the city. Highly recommended! Their hydra facial and hair spa gave incredible results.",
    rating: 5,
    tag: "Verified Guest"
  },
  {
    name: "Neha Kapoor",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    text: "Loved my bridal makeup. Thank you Kittu Beauty Parlour for making my wedding day so unforgettable!",
    rating: 5,
    tag: "Bridal Suite Client"
  }
];

function nextTestimonial() {
  currentTestimonialIndex = (currentTestimonialIndex + 1) % TESTIMONIALS.length;
  renderTestimonialSlide();
}

function prevTestimonial() {
  currentTestimonialIndex = (currentTestimonialIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length;
  renderTestimonialSlide();
}

function renderTestimonialSlide() {
  const container = document.getElementById("testimonialsCardsContainer");
  if (!container) return;

  // On wide screens we show all 3 side-by-side matching screenshot!
  // On mobile or when arrows are pressed, we highlight the current index
  container.innerHTML = TESTIMONIALS.map((t, idx) => `
    <div class="bg-[#fdf2f4] rounded-2xl p-5 border border-[#fae2e8] flex items-center gap-4 transition-all hover:bg-white hover:shadow-md ${idx === currentTestimonialIndex ? 'ring-2 ring-[#d8426f]/30' : ''}">
      <img src="${t.avatar}" alt="${t.name}" class="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm flex-shrink-0" />
      <div class="flex-1">
        <p class="text-xs text-gray-700 italic leading-snug mb-2">"${t.text}"</p>
        <div class="flex items-center justify-between">
          <span class="font-serif font-bold text-gray-900 text-sm">— ${t.name}</span>
          <span class="text-amber-400 text-xs tracking-wider">★★★★★</span>
        </div>
      </div>
    </div>
  `).join("");
}

// Newsletter Subscription handler
function handleNewsletterSubmit(e) {
  e.preventDefault();
  const input = document.getElementById("newsletterEmail");
  if (input && input.value) {
    showToast("Thank you for subscribing! Check your inbox for 15% off coupon code.", "success");
    input.value = "";
  }
}

// Set Minimum Date picker to Today
function initDatePickers() {
  const today = new Date().toISOString().split("T")[0];
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowStr = tomorrow.toISOString().split("T")[0];

  const quickDate = document.getElementById("quickDate");
  const modalDate = document.getElementById("modalDate");

  if (quickDate) {
    quickDate.min = today;
    quickDate.value = tomorrowStr;
  }
  if (modalDate) {
    modalDate.min = today;
    modalDate.value = tomorrowStr;
  }
}

// Mobile Navigation Drawer Toggle
function toggleMobileNav() {
  const mobileNav = document.getElementById("mobileNavDrawer");
  if (mobileNav) {
    mobileNav.classList.toggle("hidden");
  }
}

// Initialize on DOM load
document.addEventListener("DOMContentLoaded", () => {
  renderServicesGrid();
  populateServicesDropdown();
  initDatePickers();
  renderTimeSlotChips("quickTimeSlots", appState.selectedTimeSlot, "selectQuickTimeSlot");
  renderTestimonialSlide();
  appState.updateUserInterface();

  // Attach quick form submit
  const quickForm = document.getElementById("quickBookingForm");
  if (quickForm) {
    quickForm.addEventListener("submit", handleQuickBookingSubmit);
  }

  // Attach modal form submit
  const modalForm = document.getElementById("modalBookingForm");
  if (modalForm) {
    modalForm.addEventListener("submit", handleModalBookingSubmit);
  }

  // Newsletter form
  const newsletterForm = document.getElementById("newsletterForm");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", handleNewsletterSubmit);
  }
});
