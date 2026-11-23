# Kittu Beauty Parlour Website

A luxury beauty parlour and salon web application for **Kittu Beauty Parlour** located at **Char Sahar Ka Naka, Gwalior, Madhya Pradesh**.

## Features Built

1. **Appointment Booking System**:
   - **Homepage Quick Booking Card**: Pick client name, phone, service, date, and time slot.
   - **8 Interactive Services Catalog**:
     1. O3+ Facial (₹1,000 | 50 mins)
     2. Full Body Wax (₹1,200 | 75 mins)
     3. Hand Wax (₹300 | 25 mins) — Dedicated treatment photo
     4. Full Leg Wax (₹300 | 35 mins) — Dedicated salon leg waxing photo
     5. Face Wax (₹300 | 20 mins) — Dedicated facial waxing photo
     6. Hair Spa (₹300 | 45 mins) — Dedicated luxury hair spa cream mask photo
     7. Party Makeup (₹1,200 | 60 mins) — Dedicated HD party makeover photo
     8. Engagement Makeup (₹3,000 | 120 mins) — Dedicated royal Indian engagement bridal makeover photo
   - Click "Book Service" on any card to pre-select that treatment.

2. **Appointment Booking Time Display**:
   - Visual time-slot selector grouped into **Morning**, **Afternoon**, and **Evening** slots.
   - **Appointment Booking Pass**: Instant printable/downloadable pass showing the scheduled **Booking Time** (e.g. `10:30 AM - 11:30 AM`), Date, Stylist, Status (`Confirmed` with live pulsing indicator), Price, Booking ID (`#GG-2026-XXXX`), and Venue Address (`Char Sahar Ka Naka, Gwalior, Madhya Pradesh`).
   - **My Appointments Dashboard**: Displays all current and past appointments with exact booking times, dates, service summaries, and cancellation/view pass actions.

3. **User Login Enforcement ("Without login user do not book appointment")**:
   - Strictly requires authentication before reserving time slots.
   - If an unauthenticated guest clicks **Book Now** or **Book Appointment**:
     - System intercepts the action and displays the **Client Authentication Modal** with an explanatory alert.
     - Saves the pending booking selections in `localStorage`.
   - **1-Click Demo Login** (`priya@example.com` / `password123`) for instant testing, or register a new client account.
   - Upon logging in:
     - Top navigation updates with user badge (`Priya Sharma ▾`) and **My Appointments** button with booking count.
     - Automatically completes and confirms any pending booking.
   - User dropdown menu includes:
     - *My Booked Appointments & Time*
     - *Book New Appointment*
     - *Log Out* (returns to guest mode to re-test the login restriction)

4. **Parlour Owner Hub & Automatic WhatsApp Dispatch**:
   - **👑 Owner Portal**: Accessible via the top bar and navbar to view and manage salon bookings.
   - **Custom Owner WhatsApp Number**: Enter and save any WhatsApp number; all client appointments will be sent directly to this number.
   - **1-Click Owner Login**: Instantly switch to Owner mode with full admin privileges.
   - **Automatic WhatsApp Dispatch**: When a customer books an appointment, clicking **"Book & Send to Owner on WhatsApp"** immediately creates the confirmed booking and opens WhatsApp with a pre-composed, formatted booking pass addressed to the Owner.
   - **Direct Customer Chat**: The owner can chat with any client on WhatsApp or re-send booking passes directly from the Owner Dashboard.

5. **Design & Aesthetic Fidelity**:
   - Soft blush pink (`#d8426f`, `#fdf2f4`, `#fae2e8`) & deep charcoal theme matching reference image.
   - Playfair Display, Cormorant Garamond, and cursive handwriting typography (*"Be Your Own Kind of Beautiful"*).
   - About Us section with serene spa towels & candles.
   - Client testimonial reviews (Priya Sharma, Anjali Verma, Neha Kapoor) with star ratings and controls.
   - Virtual parlor tour video modal.
   - Photo gallery highlighting parlor ambience, bridal suite, and hair styling.
   - Responsive design tailored for mobile phones, tablets, and desktops.

## How to Run

The React app can be started in development mode:

```powershell
npm install
npm run dev
```

For the production React build and WhatsApp backend, run:

```powershell
npm run serve
```

The underlying Python server can also be started directly after building:

```powershell
python server.py
```

Then open your browser and navigate to:
**http://localhost:3000**
