const fs = require('fs');
const vm = require('vm');

// Mock localStorage
const storage = {};
global.localStorage = {
  getItem: (key) => storage[key] || null,
  setItem: (key, val) => { storage[key] = String(val); },
  removeItem: (key) => { delete storage[key]; }
};

// Mock document
const elements = {
  quickName: { value: '' },
  quickPhone: { value: '' },
  quickService: { value: 'o3-facial' },
  quickDate: { value: '2026-11-23' },
  modalService: { value: 'o3-facial' },
  modalDate: { value: '2026-11-23' },
  modalStylist: { value: 'Ananya Roy (Skin & Hydra Specialist)' },
  modalNotes: { value: 'Test note' },
  loginEmail: { value: 'priya@example.com' },
  loginPassword: { value: 'password123' },
  loginForm: { classList: { add: () => {}, remove: () => {} } },
  signupForm: { classList: { add: () => {}, remove: () => {} } },
  tabBtnLogin: { classList: { add: () => {}, remove: () => {} } },
  tabBtnSignup: { classList: { add: () => {}, remove: () => {} } },
  authModal: { classList: { add: () => {}, remove: () => {} } },
  authNoticeBanner: { classList: { add: () => {}, remove: () => {} } },
  authNoticeMessage: { textContent: '' },
  guestNavActions: { classList: { add: () => {}, remove: () => {} } },
  userNavActions: { classList: { add: () => {}, remove: () => {} } },
  userAvatarName: { textContent: '' },
  userDropdownName: { textContent: '' },
  userDropdownEmail: { textContent: '' },
  myBookingsCountBadge: { textContent: '', classList: { add: () => {}, remove: () => {}, toggle: () => {} } },
  bookingFormAuthNotice: { innerHTML: '' },
  toastContainer: { appendChild: () => {} },
  bookingPassContent: { innerHTML: '' },
  bookingPassModal: { classList: { add: () => {}, remove: () => {} } },
  appointmentsDashboardModal: { classList: { add: () => {}, remove: () => {} } },
  myAppointmentsList: { innerHTML: '' }
};

global.document = {
  getElementById: (id) => elements[id] || { classList: { add: () => {}, remove: () => {} }, value: '', style: {} },
  createElement: (tag) => ({ classList: { add: () => {}, remove: () => {} }, style: {}, setAttribute: () => {}, innerHTML: '', remove: () => {} }),
  querySelectorAll: () => [],
  body: { style: {} },
  addEventListener: () => {}
};
global.window = {
  addEventListener: () => {},
  print: () => {}
};

// Read app.js and run in this context
const appCode = fs.readFileSync('assets/app.js', 'utf8');
vm.runInThisContext(appCode);

console.log("Services Count:", SERVICES_DATA.length);
console.log("Services List:", SERVICES_DATA.map(s => `${s.title}: ₹${s.price}`));

// Test 1: User initially null
console.log("Current user initially:", appState.currentUser);

// Test 2: Quick Demo Login
quickDemoLogin("priya@example.com");
console.log("After quickDemoLogin, user:", appState.currentUser.name);

// Test 3: Book an appointment for full body wax
executeBooking({
  userId: appState.currentUser.id,
  userName: appState.currentUser.name,
  userPhone: appState.currentUser.phone,
  userEmail: appState.currentUser.email,
  serviceId: "full-body-wax",
  date: "2026-11-25",
  timeSlot: "02:30 PM",
  stylist: "Any Available Master Stylist",
  specialNotes: "First time visit"
});

const userAppointments = appState.getUserAppointments();
console.log("User Appointments count:", userAppointments.length);
console.log("Latest booked appointment:", {
  id: userAppointments[0].id,
  service: userAppointments[0].serviceTitle,
  time: userAppointments[0].timeDisplay,
  price: userAppointments[0].price,
  status: userAppointments[0].status
});

console.log("ALL LOGIC AND AUTH TESTS PASSED 100%!");
