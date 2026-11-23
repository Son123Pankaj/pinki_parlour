import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import engagementMakeupImage from "../assets/images/engagement_makeup_perfect.jpg";
import faceWaxImage from "../assets/images/face_wax_perfect.jpg";
import fullLegWaxImage from "../assets/images/full_leg_wax_perfect.jpg";
import hairSpaImage from "../assets/images/hair_spa_perfect.jpg";
import handWaxImage from "../assets/images/hand_wax_perfect.jpg";
import partyMakeupImage from "../assets/images/party_makeup_perfect.jpg";
import referenceBannerImage from "../assets/images/reference_banner.jpg";
import "../assets/style.css";

const phone = "+91 93995 11825";
const address = "Char Sahar Ka Naka, Gwalior, Madhya Pradesh";

const services = [
  {
    id: "o3-facial",
    title: "O3+ Facial",
    category: "Facial & Glow",
    price: 1000,
    duration: "50 mins",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=85",
    description: "Professional O3+ deep cleansing, brightening peel and radiant glow treatment designed to remove tanning and restore youthful radiance.",
    includes: [
      "Deep pore cleansing & clarifying rose toner",
      "Aromatherapy ozone steam & pore therapy",
      "Gentle blackhead & whitehead extraction",
      "Derma glow brightening massage (15 mins)",
      "Radiance whitening infusion peel-off mask",
      "Soothing antioxidant serum & SPF glow shield"
    ]
  },
  {
    id: "full-body-wax",
    title: "Full Body Wax",
    category: "Waxing & Smoothness",
    price: 1200,
    duration: "75 mins",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1000&q=85",
    description: "Complete full body waxing with premium soothing wax for silky smooth, hair-free skin with long-lasting freshness.",
    includes: [
      "100% hygienic sanitized setup & single-use disposable strips",
      "Full arms, underarms, full legs & back waxing",
      "Premium gentle honey-aloe soothing wax",
      "Post-wax calming aloe vera massage",
      "Ingrown hair prevention & dead skin removal",
      "Silky touch skin lasting up to 4 weeks"
    ]
  },
  {
    id: "hand-wax",
    title: "Hand Wax",
    category: "Waxing & Smoothness",
    price: 300,
    duration: "25 mins",
    image: handWaxImage,
    description: "Gentle hand waxing from fingers to shoulders, thoroughly removing fine hair and deep sun tan.",
    includes: [
      "Full hand waxing (fingertips to shoulders)",
      "Underarm waxing & cleansing included",
      "Cuticle nourishment & elbow tan lightening",
      "Cooling rose lotion & relaxing massage finish",
      "Gentle on sensitive skin with zero burn risk"
    ]
  },
  {
    id: "full-leg-wax",
    title: "Full Leg Wax",
    category: "Waxing & Smoothness",
    price: 300,
    duration: "35 mins",
    image: fullLegWaxImage,
    description: "Thorough leg waxing for ultra-soft, touchably smooth legs with complete post-wax cooling care.",
    includes: [
      "Complete full leg waxing (feet to thighs)",
      "Gentle strip wax suitable for sensitive skin",
      "Exfoliation of dead skin cells & ingrown care",
      "Cooling herbal lotion & redness relief finish",
      "Super smooth finish lasting 3 to 4 weeks"
    ]
  },
  {
    id: "face-wax",
    title: "Face Wax",
    category: "Facial & Waxing",
    price: 300,
    duration: "20 mins",
    image: faceWaxImage,
    description: "Delicate facial waxing formulated specifically for sensitive skin, leaving face clear, smooth and radiant.",
    includes: [
      "Gentle peel-off wax for sensitive facial skin",
      "Upper lip, chin, sideburns & forehead touch-up",
      "Eyebrow alignment & precise shaping",
      "Cooling ice mist & pure aloe vera massage",
      "Instant bright, hair-free and flawless glow"
    ]
  },
  {
    id: "hair-spa",
    title: "Hair Spa",
    category: "Hair Care",
    price: 600,
    duration: "45 mins",
    image: hairSpaImage,
    description: "Deep conditioning keratin hair spa that restores essential moisture, eliminates stubborn frizz, and repairs damage.",
    includes: [
      "Clarifying scalp cleanse & detox shampoo",
      "Intensive keratin & protein repair hair mask",
      "Warm steam therapy for deep follicle penetration",
      "Relaxing 15-min head, neck & shoulder acupressure",
      "Frizz-control gloss serum & quick blow-dry",
      "Adds bounce, natural shine and silky softness"
    ]
  },
  {
    id: "party-makeup",
    title: "Party Makeup",
    category: "Glamour & Makeup",
    price: 1200,
    duration: "60 mins",
    image: partyMakeupImage,
    description: "Stunning HD party makeup customized to match your outfit and lighting for any special celebration or reception.",
    includes: [
      "Hydrating skin prep & pore-blurring primer",
      "Waterproof HD long-stay foundation & concealer",
      "Smokey/glitter eye artistry & winged eyeliner",
      "Handcrafted 3D fluttery eyelash application",
      "Sculpted contouring, blush & high-shine highlighter",
      "12-hour transfer-proof setting spray finish"
    ]
  },
  {
    id: "engagement-makeup",
    title: "Engagement Makeup",
    category: "Bridal Suite",
    price: 3000,
    duration: "120 mins",
    image: engagementMakeupImage,
    description: "Royal engagement and bridal makeover with luxury styling, photogenic base and designer draping assistance.",
    includes: [
      "High-definition bridal base with 16-hr longevity",
      "Designer 3D eye glam with custom glitter cut-crease",
      "Custom hairstyle with fresh flowers/accessories",
      "Dupatta, saree or lehenga draping assistance",
      "Jewellery fixing & bindi/accessory placement",
      "Complimentary touch-up kit for the celebration"
    ]
  }
];

const highlights = [
  { icon: "shield", title: "100% Hygienic Setup", desc: "Single-use disposable sheets, sanitized tools & sterilized equipment." },
  { icon: "sparkles", title: "Premium Branded Products", desc: "Original O3+, Rica Wax, L'Oréal, MAC & Lotus Professional." },
  { icon: "heart", title: "Home Service Available", desc: "Doorstep parlour comfort with expert lead stylist Pinki Dhakare." },
  { icon: "clock", title: "Flexible Timings & Booking", desc: "Mon - Sat: 9 AM to 9 PM with instant WhatsApp appointment booking." }
];

const serviceCategories = ["All Services", ...new Set(services.map(service => service.category))];
const navigationLinks = [
  ["#home", "Home"],
  ["#about", "About"],
  ["#gallery", "Gallery"],
  ["#testimonials", "Testimonials"],
  ["#quickBook", "Book Slot"],
  ["#contact", "Contact"]
];

const slots = [
  ["09:30 AM","Morning"],["10:30 AM","Morning"],["11:30 AM","Morning"],
  ["01:00 PM","Afternoon"],["02:30 PM","Afternoon"],["04:00 PM","Afternoon"],
  ["05:30 PM","Evening"],["07:00 PM","Evening"],["08:00 PM","Evening"]
];

const testimonials = [
  {
    name: "Pinki Dhakare",
    service: "Owner & Lead Stylist",
    rating: 5,
    text: "With over 8 years of beauty artistry in Gwalior, my priority is giving every client personalized care, flawless styling, and radiant confidence."
  },
  {
    name: "Pooja Sharma",
    service: "Engagement Makeup",
    rating: 5,
    text: "Pinki di did my engagement makeup and it looked stunning in every single photograph! It lasted the entire night without smudging."
  },
  {
    name: "Anjali Verma",
    service: "O3+ Facial & Hand Wax",
    rating: 5,
    text: "The parlour is completely hygienic and clean. The facial gave my skin an instant glow, and the waxing was completely gentle!"
  },
  {
    name: "Neha Kapoor",
    service: "Keratin Hair Spa",
    rating: 5,
    text: "My rough, frizzy hair became so soft and silky after just one hair spa session. Definitely the best parlour in Char Sahar Ka Naka."
  },
  {
    name: "Ritu Tomar",
    service: "Party Makeup & Hair Styling",
    rating: 5,
    text: "Got party makeup done for my sister's wedding. Everyone complimented my look! Very affordable price and luxury service."
  }
];

function Icon({name, className="w-5 h-5"}) {
  const paths = {
    phone:<><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.35 1.9.66 2.8a2 2 0 0 1-.45 2.11L8.05 9.9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.31 1.84.53 2.8.66A2 2 0 0 1 22 16.92z"/></>,
    pin:<><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="2.5"/></>,
    calendar:<><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/></>,
    clock:<><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
    menu:<><path d="M4 6h16M4 12h16M4 18h16"/></>,
    close:<><path d="M6 6l12 12M18 6L6 18"/></>,
    arrow:<><path d="M5 12h14M13 6l6 6-6 6"/></>,
    check:<><path d="M20 6L9 17l-5-5"/></>,
    zoom:<><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></>,
    maximize:<><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></>,
    cart:<><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></>,
    trash:<><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></>,
    plus:<><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></>,
    sparkles:<><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3z"/></>,
    shield:<><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></>,
    heart:<><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></>,
    star:<><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></>,
    sun:<><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></>,
    moon:<><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></>,
    whatsapp:<><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/><path d="M9.5 9.5c.2-.5.5-.5.8-.5h.6c.2 0 .4.1.5.4l.7 1.7c.1.3.1.5 0 .7l-.4.5c-.1.1-.2.3-.1.5.3.6.8 1.2 1.4 1.7.6.5 1.3.8 1.9 1 .2.1.4 0 .5-.1l.6-.7c.2-.2.4-.2.7-.1l1.7.8c.3.1.4.3.4.5v.6c0 .8-.6 1.5-1.4 1.5-2.2 0-4.4-1-6-2.6-1.6-1.6-2.6-3.8-2.6-6 0-.8.7-1.4 1.5-1.4z"/></>
  };
  return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">{paths[name]}</svg>;
}

function Modal({open, onClose, children, wide=false}) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);
  if (!open) return null;
  return (
    <div className="modal-overlay fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-sm" onMouseDown={(e)=>e.target===e.currentTarget&&onClose()}>
      <div className={`modal-content-box bg-white dark:bg-[#1a1417] text-gray-900 dark:text-gray-100 w-full ${wide?"max-w-3xl lg:max-w-4xl":"max-w-lg"} rounded-3xl overflow-hidden shadow-2xl border border-[#fae2e8] dark:border-[#38242d] max-h-[94vh] flex flex-col`}>
        {children}
      </div>
    </div>
  );
}

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [serviceFiltersOpen, setServiceFiltersOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All Services");
  const [serviceModal, setServiceModal] = useState(null);
  const [fullImageModal, setFullImageModal] = useState(null);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [appointmentsOpen, setAppointmentsOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const [pass, setPass] = useState(null);
  const [toast, setToast] = useState("");
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  // Theme Toggler
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem("kittu_parlour_theme_v2") || "light"; } catch { return "light"; }
  });

  // Track scroll state for CARDS bouncing on scroll
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("kittu_parlour_theme_v2", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(t => (t === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    let scrollTimer;
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        setIsScrolling(false);
      }, 700);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimer);
    };
  }, []);

  // Booking forms with User Details + Location
  const [quick, setQuick] = useState({name:"", phone:"", location:"", service:"", date:"", time:"10:30 AM"});
  const [full, setFull] = useState({name:"", phone:"", location:"", service:"", date:"", time:"11:30 AM"});
  
  // Multi-service booking details form
  const [multiBooking, setMultiBooking] = useState({
    name: "",
    phone: "",
    location: "",
    date: "",
    time: "10:30 AM"
  });

  const [appointments, setAppointments] = useState(()=>{
    try { return JSON.parse(localStorage.getItem("glow_grace_appointments_v3")) || []; } catch { return []; }
  });

  const [cart, setCart] = useState(()=>{
    try { return JSON.parse(localStorage.getItem("kittu_parlour_cart_v3")) || []; } catch { return []; }
  });

  useEffect(()=>{
    localStorage.setItem("kittu_parlour_cart_v3", JSON.stringify(cart));
  },[cart]);

  const today = new Date().toISOString().slice(0,10);

  useEffect(()=>{
    if(!toast) return;
    const id=setTimeout(()=>setToast(""),3200);
    return()=>clearTimeout(id);
  },[toast]);

  const openBooking = (serviceId="") => {
    setBookingOpen(true);
    setServiceModal(null);
    setFullImageModal(null);
    setCartOpen(false);
    setFull(v=>({...v,service:serviceId}));
  };

  const toggleServiceInCart = (service, e) => {
    if (e) e.stopPropagation();
    if (cart.some(item => item.id === service.id)) {
      setCart(prev => prev.filter(item => item.id !== service.id));
      setToast(`Removed "${service.title}" from selection.`);
    } else {
      setCart(prev => [...prev, service]);
      setToast(`🌸 Added "${service.title}" to selection!`);
    }
  };

  const removeFromCart = (serviceId) => {
    setCart(prev => prev.filter(item => item.id !== serviceId));
    setToast("Item removed.");
  };

  const cartTotal = useMemo(() => cart.reduce((sum, item) => sum + item.price, 0), [cart]);

  // Submit Multi-Service Booking directly to WhatsApp: ONLY user details + location
  const submitMultiBooking = (e) => {
    if (e) e.preventDefault();
    if (cart.length === 0) {
      setToast("Please select at least 1 service first.");
      return;
    }
    if (!multiBooking.name || !multiBooking.phone || !multiBooking.location || !multiBooking.date) {
      setToast("Please enter Name, Phone, Location/Address and Date.");
      return;
    }

    const bookingId = `GG-MULTI-${Math.floor(1000 + Math.random() * 9000)}`;

    const newBooking = {
      id: bookingId,
      userName: multiBooking.name,
      userPhone: multiBooking.phone,
      location: multiBooking.location,
      serviceTitle: `${cart.length} Services (${cart.map(c=>c.title).join(", ")})`,
      category: "Multi-Service Package",
      date: multiBooking.date,
      timeSlot: multiBooking.time,
      price: cartTotal,
      status: "Confirmed",
      createdAt: new Date().toISOString()
    };

    const next = [newBooking, ...appointments];
    setAppointments(next);
    localStorage.setItem("glow_grace_appointments_v3", JSON.stringify(next));

    // ONLY user details + location + services
    const whatsappMessage = [
      "🌸 *New Booking Request*",
      `*Name:* ${multiBooking.name}`,
      `*Phone:* ${multiBooking.phone}`,
      `*Location:* ${multiBooking.location}`,
      `*Services:*`,
      ...cart.map((s, idx) => `  ${idx + 1}. ${s.title} (₹${s.price})`),
      `*Total Price:* ₹${cartTotal}`,
      `*Date:* ${multiBooking.date}`,
      `*Time:* ${multiBooking.time}`
    ].join("\n");

    const whatsappUrl = `https://wa.me/${phone.replace(/\D/g, "")}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setCartOpen(false);
    setPass(newBooking);
    setToast("Booking request sent to WhatsApp!");
  };

  // Submit Single Service Booking: ONLY user details + location
  const createBooking = (data) => {
    const service = services.find(s=>s.id===data.service);
    if(!data.name || !data.phone || !data.location || !service || !data.date){
      setToast("Please fill Name, Phone, Location and Date.");
      return;
    }
    const booking = {
      id:`GG-2026-${Math.floor(1000+Math.random()*9000)}`,
      userName:data.name,
      userPhone:data.phone,
      location:data.location,
      serviceId:service.id,
      serviceTitle:service.title,
      date:data.date,
      timeSlot:data.time,
      price:service.price,
      status:"Confirmed",
      createdAt:new Date().toISOString()
    };
    const next=[booking,...appointments];
    setAppointments(next);
    localStorage.setItem("glow_grace_appointments_v3",JSON.stringify(next));
    setBookingOpen(false);
    setPass(booking);

    // ONLY user details + location + service
    const message = [
      "🌸 *New Booking Request*",
      `*Name:* ${data.name}`,
      `*Phone:* ${data.phone}`,
      `*Location:* ${data.location}`,
      `*Service:* ${service.title} (₹${service.price})`,
      `*Date:* ${data.date}`,
      `*Time:* ${data.time}`
    ].join("\n");

    const whatsappUrl = `https://wa.me/${phone.replace(/\D/g,"")}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl,"_blank","noopener,noreferrer");
    setToast("Booking request sent to WhatsApp!");
  };

  const visibleTestimonials = useMemo(()=>[0,1,2].map(i=>testimonials[(testimonialIndex+i)%testimonials.length]),[testimonialIndex]);

  const navLink=(href,label)=> <a href={href} onClick={()=>setMobileOpen(false)} className="hover:text-[#d8426f] transition-colors">{label}</a>;
  const selectCategory=(category)=>{
    setActiveCategory(category);
    setServiceFiltersOpen(false);
    setMobileOpen(false);
    document.getElementById("services")?.scrollIntoView({behavior:"smooth"});
  };
  const filteredServices=activeCategory==="All Services"
    ? services
    : services.filter(service=>service.category===activeCategory);

  return (
    <>
      {/* Top Banner Bar */}
      <div className="bg-[#161214] text-gray-300 text-xs py-2 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex flex-wrap justify-center gap-5">
            <a href={`tel:${phone.replace(/\s/g,"")}`} className="flex items-center gap-1.5 hover:text-[#d8426f] transition-colors">
              <Icon name="phone" className="w-3.5 h-3.5 text-[#d8426f]"/>{phone}
            </a>
            <span className="hidden sm:flex items-center gap-1.5"><Icon name="pin" className="w-3.5 h-3.5 text-[#d8426f]"/>{address}</span>
            <span className="hidden lg:flex items-center gap-1.5"><Icon name="clock" className="w-3.5 h-3.5 text-[#d8426f]"/>Mon - Sat: 9 AM - 9 PM</span>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-pink-300">
            <span>✨ Home Service by Pinki Dhakare</span>
            <span className="hidden sm:inline">• 100% Hygienic</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-40 bg-white/95 dark:bg-[#161114]/95 backdrop-blur-md border-b border-[#fae2e8] dark:border-[#38242d] shadow-sm transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 sm:gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#fdf2f4] dark:bg-[#2c1a22] flex items-center justify-center text-[#d8426f] font-bold text-lg shadow-sm">✿</div>
            <div>
              <span className="font-serif text-lg sm:text-xl lg:text-2xl font-bold block leading-tight text-gray-900 dark:text-white">Kittu</span>
              <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.18em] sm:tracking-[0.22em] text-[#d8426f] font-semibold">Beauty Parlour</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-7 text-sm font-medium text-gray-700 dark:text-gray-200">
            {navLink("#home","Home")}
            <div className="relative">
              <button type="button" onClick={()=>setServiceFiltersOpen(value=>!value)} aria-expanded={serviceFiltersOpen} className="hover:text-[#d8426f] transition-colors flex items-center gap-1">
                Services <span className="text-xs">⌄</span>
              </button>
              {serviceFiltersOpen&&<div className="absolute left-0 top-full mt-3 min-w-52 rounded-xl border border-[#fae2e8] dark:border-[#38242d] bg-white dark:bg-[#1c1519] p-2 shadow-xl z-50">
                {serviceCategories.map(category=><button type="button" key={category} onClick={()=>selectCategory(category)} className={`block w-full text-left px-3 py-2 rounded-lg text-xs ${activeCategory===category?"bg-[#fdf2f4] dark:bg-[#2c1a22] text-[#d8426f] font-semibold":"text-gray-700 dark:text-gray-300 hover:bg-[#fdf5f7] dark:hover:bg-[#251b22]"}`}>{category}</button>)}
              </div>}
            </div>
            {navigationLinks.slice(1, -1).map(([href,label])=>navLink(href,label))}
            {navLink("#contact","Contact")}
          </nav>

          {/* Header Action Buttons & Theme Toggler */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Dark / Light Theme Toggle Button */}
            <button 
              type="button" 
              onClick={toggleTheme} 
              aria-label={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
              className="p-2 sm:px-3 sm:py-2 rounded-full border border-[#fae2e8] dark:border-[#38242d] bg-[#fdf2f4] dark:bg-[#251a21] text-gray-800 dark:text-gray-200 text-xs font-semibold flex items-center gap-1.5 hover:bg-[#fce5eb] dark:hover:bg-[#32212b] transition-all"
              title={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
            >
              <Icon name={theme === "dark" ? "sun" : "moon"} className="w-4 h-4 text-amber-500"/>
              <span className="hidden sm:inline font-bold">{theme === "dark" ? "Light" : "Dark"}</span>
            </button>

            {/* Cart Button in Header */}
            <button 
              type="button" 
              onClick={()=>setCartOpen(true)} 
              title="View Selected Services (Cart)"
              className="relative px-3.5 py-2 rounded-full bg-[#fdf2f4] dark:bg-[#2c1a22] text-[#d8426f] text-xs font-bold border border-[#fae2e8] dark:border-[#38242d] flex items-center gap-1.5 hover:bg-[#fce5eb] dark:hover:bg-[#381f2b] transition-all shadow-sm"
            >
              <Icon name="cart" className="w-4 h-4"/>
              <span className="hidden sm:inline">Cart</span>
              {cart.length > 0 && (
                <span className="w-5 h-5 rounded-full bg-[#d8426f] text-white text-[11px] font-bold flex items-center justify-center -ml-0.5">
                  {cart.length}
                </span>
              )}
            </button>

            <button onClick={()=>setAppointmentsOpen(true)} className="hidden xl:flex px-3 py-2 rounded-full bg-[#fdf2f4] dark:bg-[#2c1a22] text-[#d8426f] text-xs font-semibold border border-[#fae2e8] dark:border-[#38242d]"><Icon name="calendar" className="w-4 h-4 mr-1"/>Appointments</button>
            
            <button onClick={()=>openBooking()} className="whitespace-nowrap py-2.5 px-3.5 sm:px-4 rounded-full bg-gradient-to-r from-[#d8426f] to-[#b32753] hover:from-[#c4335f] hover:to-[#9f1f45] text-white text-xs sm:text-sm font-semibold shadow-md hover:shadow-lg transition-all">
              <span className="sm:hidden">Book</span><span className="hidden sm:inline">Book Slot</span>
            </button>

            <button onClick={()=>setMobileOpen(v=>!v)} aria-expanded={mobileOpen} aria-label={mobileOpen?"Close menu":"Open menu"} className="xl:hidden p-1.5 sm:p-2 text-gray-700 dark:text-gray-200 hover:text-[#d8426f]"><Icon name={mobileOpen?"close":"menu"} /></button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileOpen&&<div className="xl:hidden border-t border-[#fae2e8] dark:border-[#38242d] bg-white dark:bg-[#1c1519] px-4 sm:px-6 py-4 flex flex-col gap-3 text-sm">
          {navLink("#home","Home")}{navLink("#services","Services")}
          <div className="border-t border-[#fae2e8] dark:border-[#38242d] pt-3">
            <p className="text-[11px] uppercase tracking-wider text-gray-400 mb-2">Filter services</p>
            <div className="flex flex-wrap gap-2">{serviceCategories.map(category=><button type="button" key={category} onClick={()=>selectCategory(category)} className={`rounded-full border px-3 py-1.5 text-xs ${activeCategory===category?"bg-[#d8426f] border-[#d8426f] text-white":"border-[#fae2e8] dark:border-[#38242d] text-gray-700 dark:text-gray-300"}`}>{category}</button>)}</div>
          </div>
          {navigationLinks.slice(1).map(([href,label])=>navLink(href,label))}
          <div className="flex items-center justify-between pt-3 border-t border-[#fae2e8] dark:border-[#38242d]">
            <button type="button" onClick={()=>{setCartOpen(true);setMobileOpen(false)}} className="text-left text-[#d8426f] font-bold flex items-center gap-1.5">
              <Icon name="cart" className="w-4 h-4"/> View Cart ({cart.length})
            </button>
            <button type="button" onClick={()=>{setAppointmentsOpen(true);setMobileOpen(false)}} className="text-left text-gray-700 dark:text-gray-300 hover:text-[#d8426f] transition-colors">
              Appointments
            </button>
          </div>
        </div>}
      </header>

      {/* ================= 4. LUXURY ANNOUNCEMENT MARQUEE ================= */}
      <div className="bg-gradient-to-r from-[#d8426f] via-[#c4335f] to-[#b32753] text-white py-2 text-xs font-semibold tracking-wide shadow-sm overflow-hidden border-b border-pink-700/50">
        <div className="marquee-container">
          <div className="marquee-track flex items-center gap-6 whitespace-nowrap">
            <span className="flex items-center gap-1.5">🌸 <strong>Kittu Beauty Parlour Gwalior</strong></span>
            <span>•</span>
            <span>✨ Specialized Bridal & Party Makeup</span>
            <span>•</span>
            <span>🏡 Doorstep Home Service Available with Pinki Dhakare</span>
            <span>•</span>
            <span>🌿 100% Original Products: O3+, Rica Wax & L'Oréal</span>
            <span>•</span>
            <span>📍 Location: Char Sahar Ka Naka, Gwalior</span>
            <span>•</span>
            <span>📞 Call / WhatsApp Booking: +91 93995 11825</span>
            <span>•</span>
            <span>⏱ Timings: Mon - Sat (9 AM - 9 PM)</span>
            <span>•</span>
            <span className="flex items-center gap-1.5">🌸 <strong>Kittu Beauty Parlour Gwalior</strong></span>
            <span>•</span>
            <span>✨ Specialized Bridal & Party Makeup</span>
            <span>•</span>
            <span>🏡 Doorstep Home Service Available with Pinki Dhakare</span>
            <span>•</span>
            <span>🌿 100% Original Products: O3+, Rica Wax & L'Oréal</span>
            <span>•</span>
            <span>📍 Location: Char Sahar Ka Naka, Gwalior</span>
            <span>•</span>
            <span>📞 Call / WhatsApp Booking: +91 93995 11825</span>
            <span>•</span>
            <span>⏱ Timings: Mon - Sat (9 AM - 9 PM)</span>
            <span>•</span>
          </div>
        </div>
      </div>

      <main>
        {/* Hero Section */}
        <section id="home" className="relative bg-gradient-to-r from-[#fef3f5] via-[#fde9ee] to-[#fbf0f3] dark:from-[#1a1216] dark:via-[#1e1419] dark:to-[#171014] overflow-hidden py-12 sm:py-16 transition-colors">
          <div className="hero-swoosh"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              <p className="text-[11px] sm:text-xs uppercase font-bold tracking-[0.25em] text-[#d8426f]">LOOK BEAUTIFUL • FEEL CONFIDENT</p>
              <h1 className="text-4xl sm:text-6xl font-serif font-extrabold text-[#231b1f] dark:text-white leading-[1.12]">
                <span className="text-[#d8426f] block font-cormorant italic font-normal text-3xl sm:text-4xl">Welcome to</span>
                Kittu<br/>
                <span className="font-normal text-3xl sm:text-5xl text-gray-800 dark:text-gray-200">Beauty Parlour</span>
              </h1>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed max-w-lg mx-auto lg:mx-0">
                Enhance your natural beauty with expert bridal makeover, gentle waxing, revitalizing facials and luxury hair spa. Specialized home service available across Gwalior by Pinki Dhakare.
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <button onClick={()=>openBooking()} className="py-3 px-7 rounded-full bg-[#d8426f] hover:bg-[#c4335f] text-white font-semibold text-sm shadow-lg hover:shadow-xl transition-all flex items-center gap-2">
                  Book Appointment <Icon name="arrow" className="w-4 h-4"/>
                </button>
                <button onClick={()=>setVideoOpen(true)} className="py-2.5 px-5 rounded-full bg-white dark:bg-[#1f171b] text-gray-800 dark:text-gray-200 font-semibold text-sm border border-[#fae2e8] dark:border-[#38242d] shadow-sm hover:border-[#d8426f] transition-all">
                  ▶ &nbsp; Watch Video Tour
                </button>
              </div>
            </div>
            <div className="lg:col-span-6 relative flex justify-center">
              <div className="relative w-full max-w-lg">
                <p className="absolute -top-8 right-4 z-20 font-script text-4xl text-[#d8426f] rotate-[-2deg]">Be Your Own<br/>Kind of Beautiful</p>
                <img src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=85" alt="Kittu Beauty Parlour" className="relative z-10 w-full aspect-[14/11] object-cover rounded-3xl shadow-2xl border-4 border-white dark:border-[#2f1c24] cursor-pointer hover:scale-[1.01] transition-transform" onClick={()=>setFullImageModal({image:"https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=90", title:"Kittu Beauty Parlour Lounge", category:"Salon Ambiance"})}/>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us / Key Points Strip */}
        <section className="py-8 bg-white dark:bg-[#171114] border-b border-[#fae2e8] dark:border-[#38242d] transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {highlights.map((h)=>(
              <div key={h.title} className="p-4 rounded-2xl bg-[#fffafb] dark:bg-[#1f161a] border border-[#fae4ea] dark:border-[#34222a] flex items-start gap-3.5 hover:border-[#f3b3c4] hover:shadow-sm transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#fdf2f4] dark:bg-[#2c1a22] text-[#d8426f] flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Icon name={h.icon} className="w-5 h-5"/>
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-gray-900 dark:text-white leading-snug">{h.title}</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services Section with Cards Bouncing on Page Scroll */}
        <section id="services" className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-10">
            <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#d8426f]">EXCLUSIVE TREATMENTS</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#231b1f] dark:text-white mt-1">Our Services</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">Click any service to view full photo and details. Select multiple to book together on WhatsApp.</p>
            <div className="w-16 h-0.5 bg-[#d8426f] mx-auto mt-3"/>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-8" aria-label="Filter services by category">
            {serviceCategories.map(category=>(
              <button 
                type="button" 
                key={category} 
                onClick={()=>setActiveCategory(category)} 
                aria-pressed={activeCategory===category} 
                className={`rounded-full border px-4 py-2 text-xs font-semibold transition-all ${activeCategory===category?"bg-[#d8426f] border-[#d8426f] text-white shadow-sm":"border-[#fae2e8] dark:border-[#38242d] bg-white dark:bg-[#1c1519] text-gray-600 dark:text-gray-300 hover:text-[#d8426f] hover:border-[#f3b3c4]"}`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Services Grid with Cards Bouncing on Page Scroll */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
            {filteredServices.map((s, idx)=>{
              const isSelected = cart.some(item => item.id === s.id);
              return (
                <article 
                  key={s.id} 
                  onClick={()=>setServiceModal(s)} 
                  className={`service-card group bg-white dark:bg-[#1c1519] rounded-2xl overflow-hidden p-3.5 text-left cursor-pointer border ${isSelected ? "border-[#d8426f] ring-2 ring-[#d8426f]/30" : "border-[#fae2e8] dark:border-[#38242d]"} shadow-sm flex flex-col relative transition-all ${isScrolling ? "scroll-bouncing-card" : ""}`}
                  style={{ animationDelay: isScrolling ? `${(idx % 4) * 0.08}s` : "0s" }}
                >
                  {/* Image Container: Clicking card or image opens the full proper service modal */}
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-3 bg-gray-100 dark:bg-gray-800">
                    <img 
                      src={s.image} 
                      alt={s.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none"/>
                    
                    {/* Category Pill */}
                    <span className="absolute top-2 left-2 bg-black/60 backdrop-blur-sm text-white text-[10px] font-semibold px-2 py-0.5 rounded-full border border-white/20">
                      {s.category}
                    </span>

                    {/* Direct Fullscreen Photo Button */}
                    <button 
                      type="button"
                      onClick={(e)=>{
                        e.stopPropagation();
                        setFullImageModal(s);
                      }}
                      title="Direct Fullscreen Photo"
                      className="absolute top-2 right-2 px-2.5 py-1 rounded-full bg-black/60 hover:bg-[#d8426f] text-white text-[10px] font-semibold flex items-center gap-1 backdrop-blur-sm border border-white/20 shadow transition-all hover:scale-105"
                    >
                      <Icon name="maximize" className="w-3 h-3 text-pink-300"/>
                      <span>Zoom</span>
                    </button>

                    {/* Duration */}
                    <span className="absolute bottom-2 left-2 text-white text-[11px] font-medium flex items-center gap-1 drop-shadow">
                      <Icon name="clock" className="w-3.5 h-3.5 text-pink-300"/>
                      {s.duration}
                    </span>

                    {/* Price - Clear, Bold, Never Clipped */}
                    <span className="absolute bottom-2 right-2 bg-gradient-to-r from-[#d8426f] to-[#b32753] text-white text-xs font-extrabold px-3 py-1 rounded-lg shadow-md">
                      ₹{s.price}
                    </span>
                  </div>

                  {/* Card Information */}
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="font-serif font-bold text-base sm:text-lg text-gray-900 dark:text-white group-hover:text-[#d8426f] transition-colors leading-snug">
                        {s.title}
                      </h3>
                      {isSelected && (
                        <span className="bg-[#fdf2f4] dark:bg-[#341d27] text-[#d8426f] text-[10px] font-bold px-2 py-0.5 rounded-full border border-[#f3b3c4] whitespace-nowrap">
                          ✓ Selected
                        </span>
                      )}
                    </div>
                    
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 mb-2.5 line-clamp-2 leading-relaxed">
                      {s.description}
                    </p>

                    {/* Key Highlights bullet points on card */}
                    <div className="text-[11px] text-gray-600 dark:text-gray-300 space-y-1 mb-3 pt-2 border-t border-[#fae2e8]/70 dark:border-[#38242d]">
                      {s.includes.slice(0, 2).map((item)=>(
                        <div key={item} className="flex items-center gap-1.5 truncate">
                          <span className="text-[#d8426f] font-bold text-xs flex-shrink-0">✓</span>
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Bottom Action Buttons: Multi-Select + View Details + Direct Book */}
                    <div className="mt-auto flex items-center gap-1.5 pt-1">
                      <button 
                        type="button"
                        onClick={(e)=>{
                          e.stopPropagation();
                          setServiceModal(s);
                        }}
                        className="py-2 px-2.5 rounded-xl bg-[#fdf2f4] dark:bg-[#2c1a22] hover:bg-[#fae1e7] text-[#d8426f] border border-[#f3b3c4] font-semibold text-xs flex items-center justify-center gap-1 transition-all"
                        title="View complete details and photo"
                      >
                        <Icon name="zoom" className="w-3.5 h-3.5"/>
                        <span>Details</span>
                      </button>

                      {/* Multi-Service Select Button */}
                      <button 
                        type="button"
                        onClick={(e)=>toggleServiceInCart(s, e)}
                        className={`flex-1 py-2 px-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1 transition-all ${isSelected ? "bg-[#d8426f] text-white shadow" : "bg-white dark:bg-[#1a1417] text-gray-700 dark:text-gray-200 border border-[#fae2e8] dark:border-[#38242d] hover:border-[#d8426f] hover:text-[#d8426f]"}`}
                        title={isSelected ? "Remove from selection" : "Select for multiple booking"}
                      >
                        <Icon name={isSelected ? "check" : "plus"} className="w-3.5 h-3.5"/>
                        <span>{isSelected ? "Selected" : "Select"}</span>
                      </button>

                      <button 
                        type="button"
                        onClick={(e)=>{
                          e.stopPropagation();
                          openBooking(s.id);
                        }} 
                        className="py-2 px-3 rounded-xl bg-gradient-to-r from-[#d8426f] to-[#b32753] hover:from-[#c4335f] hover:to-[#9f1f45] text-white font-semibold text-xs shadow-sm hover:shadow transition-all text-center whitespace-nowrap"
                        title="Direct single service booking"
                      >
                        Book
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Quick Booking & About Section - (Clean without any middle cart button) */}
        <section id="quickBook" className="py-14 bg-gradient-to-b from-white to-[#fdf5f7] dark:from-[#171114] dark:to-[#1a1216] border-y border-[#fae2e8]/60 dark:border-[#38242d] transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 grid lg:grid-cols-12 gap-8 items-stretch">
            <div id="about" className="lg:col-span-6 bg-white dark:bg-[#1c1519] rounded-3xl p-6 sm:p-8 border border-[#fae2e8] dark:border-[#38242d] shadow-sm flex flex-col justify-between">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80" 
                  alt="Spa ambience" 
                  className="w-full aspect-[16/10] object-cover rounded-2xl mb-6 cursor-pointer hover:scale-[1.01] transition-transform"
                  onClick={()=>setFullImageModal({image:"https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85", title:"Relaxing Spa Ambience", category:"Parlour Atmosphere"})}
                />
                <span className="text-[11px] uppercase tracking-wider font-bold text-[#d8426f]">ABOUT PINKI DHAKARE & PARLOUR</span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 dark:text-white mt-1 mb-3">About Us</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-5">
                  Kittu Beauty Parlour is dedicated to enhancing your natural elegance with certified beauty artistry, pure hygienic products, and dedicated bridal care in Gwalior.
                </p>
                <ul className="space-y-2.5 text-sm">
                  {[
                    "Expert & Certified Staff led by Pinki Dhakare",
                    "100% Genuine, skin-friendly and hypoallergenic products",
                    "Relaxing Ambience, private bridal suite & sanitization",
                    "Doorstep home service available on advance booking"
                  ].map(x=>(
                    <li key={x} className="flex items-center gap-2.5 text-gray-700 dark:text-gray-300">
                      <span className="w-5 h-5 rounded-full bg-[#fdf2f4] dark:bg-[#2c1a22] text-[#d8426f] text-xs font-bold flex items-center justify-center flex-shrink-0">✓</span>
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Quick WhatsApp Booking Form with Location Field */}
            <div className="lg:col-span-6 bg-[#fdf2f4] dark:bg-[#20181d] rounded-3xl p-6 sm:p-8 border border-[#fae2e8] dark:border-[#38242d] shadow-sm">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 dark:text-white">Book Your Appointment</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Quick booking via WhatsApp with instant confirmation.</p>
              <p className="text-xs text-[#d8426f] font-semibold mt-1 mb-4">🌸 Home service available with Pinki Dhakare.</p>
              
              <form onSubmit={(e)=>{e.preventDefault();createBooking(quick)}} className="space-y-3">
                <div className="grid sm:grid-cols-2 gap-3">
                  <input required value={quick.name} onChange={e=>setQuick({...quick,name:e.target.value})} placeholder="Your full name *" className="w-full px-3 py-2.5 rounded-xl border border-[#fae2e8] dark:border-[#38242d] text-xs bg-white dark:bg-[#161114] text-gray-900 dark:text-white focus:outline-[#d8426f]"/>
                  <input required value={quick.phone} onChange={e=>setQuick({...quick,phone:e.target.value})} placeholder="Mobile / WhatsApp *" className="w-full px-3 py-2.5 rounded-xl border border-[#fae2e8] dark:border-[#38242d] text-xs bg-white dark:bg-[#161114] text-gray-900 dark:text-white focus:outline-[#d8426f]"/>
                </div>

                {/* Location / Address Field */}
                <div>
                  <input required value={quick.location} onChange={e=>setQuick({...quick,location:e.target.value})} placeholder="Your Location / Area in Gwalior (e.g. Char Sahar Ka Naka, Morar) *" className="w-full px-3 py-2.5 rounded-xl border border-[#fae2e8] dark:border-[#38242d] text-xs bg-white dark:bg-[#161114] text-gray-900 dark:text-white focus:outline-[#d8426f]"/>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  <select required value={quick.service} onChange={e=>setQuick({...quick,service:e.target.value})} className="w-full px-3 py-2.5 rounded-xl border border-[#fae2e8] dark:border-[#38242d] text-xs bg-white dark:bg-[#161114] text-gray-900 dark:text-white focus:outline-[#d8426f]">
                    <option value="">Select a service *</option>
                    {services.map(s=><option key={s.id} value={s.id}>{s.title} — ₹{s.price}</option>)}
                  </select>
                  <input required type="date" min={today} value={quick.date} onChange={e=>setQuick({...quick,date:e.target.value})} className="w-full px-3 py-2.5 rounded-xl border border-[#fae2e8] dark:border-[#38242d] text-xs bg-white dark:bg-[#161114] text-gray-900 dark:text-white focus:outline-[#d8426f]"/>
                </div>
                <div>
                  <label className="text-[11px] font-semibold text-gray-600 dark:text-gray-300 block mb-1.5">Select Preferred Slot:</label>
                  <div className="grid grid-cols-3 gap-2">
                    {slots.map(([time])=> (
                      <button type="button" key={time} onClick={()=>setQuick({...quick,time})} className={`time-slot-btn py-2 px-2 rounded-xl text-xs ${quick.time===time?"selected":""}`}>
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
                <button type="submit" className="w-full py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2">
                  <Icon name="whatsapp" className="w-4 h-4"/>
                  <span>Continue to WhatsApp Booking</span>
                  <Icon name="arrow" className="w-4 h-4" />
                </button>
              </form>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 text-center mt-3">WhatsApp booking number: <strong className="text-gray-700 dark:text-gray-200">{phone}</strong></p>
            </div>
          </div>
        </section>

        {/* Client Testimonials */}
        <section id="testimonials" className="py-16 max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-10">
            <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#d8426f]">TESTIMONIALS</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 dark:text-white mt-1">What Our Clients Say</h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">Real feedback from clients across Gwalior.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {visibleTestimonials.map(t=>(
              <article key={t.name + t.service} className="testimonial-card bg-white dark:bg-[#1c1519] border border-[#fae2e8] dark:border-[#38242d] rounded-2xl p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="text-amber-400 mb-3 text-sm flex gap-1">
                    {[...Array(5)].map((_, i)=>(
                      <span key={i} className="text-amber-400">★</span>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed italic">"{t.text}"</p>
                </div>
                <div className="mt-5 pt-3 border-t border-[#fae2e8] dark:border-[#38242d]">
                  <h3 className="font-serif font-bold text-gray-900 dark:text-white">{t.name}</h3>
                  <p className="text-xs text-[#d8426f] font-medium">{t.service}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="flex justify-center gap-3 mt-6">
            <button onClick={()=>setTestimonialIndex(v=>(v - 1 + testimonials.length) % testimonials.length)} className="w-9 h-9 rounded-full border border-[#fae2e8] dark:border-[#38242d] hover:bg-[#fdf2f4] dark:hover:bg-[#2c1a22] text-gray-700 dark:text-gray-200 hover:text-[#d8426f] flex items-center justify-center font-bold">‹</button>
            <button onClick={()=>setTestimonialIndex(v=>(v + 1) % testimonials.length)} className="w-9 h-9 rounded-full border border-[#fae2e8] dark:border-[#38242d] hover:bg-[#fdf2f4] dark:hover:bg-[#2c1a22] text-gray-700 dark:text-gray-200 hover:text-[#d8426f] flex items-center justify-center font-bold">›</button>
          </div>
        </section>

        {/* Parlour Gallery Section */}
        <section id="gallery" className="py-14 bg-[#fef5f7] dark:bg-[#181115] border-t border-[#fae2e8] dark:border-[#38242d] transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="text-center mb-8">
              <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#d8426f]">PHOTO GALLERY</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-center text-gray-900 dark:text-white mt-1">Our Parlour Gallery</h2>
              <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm mt-1">Click any photo to view in high resolution.</p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                ["1560066984-138dadb4c035","Hair Styling Station"],
                ["1487412720507-e7ab37603c6f","Bridal Glam Lounge"],
                ["1570172619644-dfd03ed5d881","Hydra Facial Suite"],
                ["1604654894610-df63bc536371","Luxury Nail & Waxing Bar"]
              ].map(([id,label])=>(
                <div 
                  key={id} 
                  onClick={()=>setFullImageModal({
                    image:`https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1200&q=85`,
                    title: label,
                    category: "Parlour Gallery"
                  })}
                  className="gallery-card relative rounded-2xl overflow-hidden aspect-[4/3] group bg-gray-200 dark:bg-gray-800 border border-[#fae2e8] dark:border-[#38242d] shadow-sm"
                  title="Click to view full photo"
                >
                  <img 
                    src={`https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=600&q=80`} 
                    alt={label} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity"/>
                  <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white">
                    <span className="text-xs font-semibold drop-shadow">{label}</span>
                    <span className="p-1 rounded-full bg-white/20 backdrop-blur-sm group-hover:bg-[#d8426f] transition-colors">
                      <Icon name="zoom" className="w-3.5 h-3.5"/>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-[#161214] text-gray-300 pt-14 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-full bg-[#2a1c22] text-[#d8426f] flex items-center justify-center font-bold text-lg">✿</span>
              <div>
                <span className="font-serif text-2xl font-bold text-white block">Kittu</span>
                <span className="text-[9px] uppercase tracking-[0.22em] text-[#d8426f]">Beauty Parlour</span>
              </div>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Your trusted sanctuary for bridal makeovers, soothing waxing, rejuvenating facials and personalized beauty care in Gwalior.
            </p>
          </div>
          <div>
            <h4 className="text-xs uppercase text-white font-bold tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              {[["#home","Home"],["#services","Services"],...navigationLinks.slice(1)].map(([href,label])=>(
                <li key={href}><a href={href} className="hover:text-white transition-colors">{label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase text-white font-bold tracking-wider mb-4">Contact Us</h4>
            <a href={`tel:${phone.replace(/\s/g,"")}`} className="text-xs flex items-center gap-2 mb-2 hover:text-white">
              <Icon name="phone" className="w-4 h-4 text-[#d8426f]"/>{phone}
            </a>
            <p className="text-xs flex gap-2 text-gray-400">
              <Icon name="pin" className="w-4 h-4 text-[#d8426f] flex-shrink-0"/>{address}
            </p>
            <p className="text-xs flex gap-2 text-gray-400 mt-2">
              <Icon name="clock" className="w-4 h-4 text-[#d8426f] flex-shrink-0"/>Mon - Sat: 9 AM to 9 PM
            </p>
          </div>
          <div>
            <h4 className="text-xs uppercase text-white font-bold tracking-wider mb-4">Quick Booking</h4>
            <p className="text-xs text-gray-400 mb-4">Ready for your next salon experience?</p>
            <button onClick={()=>openBooking()} className="py-2.5 px-5 rounded-full bg-[#d8426f] hover:bg-[#c4335f] text-white text-xs font-semibold shadow transition-all">
              Book Appointment Now →
            </button>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-6 text-xs text-gray-500 flex flex-col sm:flex-row justify-between gap-2">
          <span>© 2026 Kittu Beauty Parlour • Pinki Dhakare</span>
          <span>Made with ♥ for Beauty Lovers in Gwalior</span>
        </div>
      </footer>

      {/* Toast Notification */}
      {toast&&<div className="fixed bottom-5 right-5 z-[80] bg-[#161214] text-white px-5 py-3 rounded-xl shadow-xl text-sm toast-msg border border-pink-900 flex items-center gap-2">{toast}</div>}

      {/* ================= 1. SERVICE DETAILS MODAL (Proper, Beautiful, Uncut View) ================= */}
      <Modal open={!!serviceModal} onClose={()=>setServiceModal(null)} wide>
        {serviceModal&&<>
          {/* Top Modal Header with Clean Title & Price */}
          <div className="px-4 sm:px-6 py-3.5 sm:py-4 border-b border-[#fae2e8] dark:border-[#38242d] bg-white dark:bg-[#1a1417] flex items-center justify-between gap-3 flex-shrink-0">
            <div className="min-w-0 pr-2">
              <span className="text-[10px] sm:text-xs uppercase font-bold tracking-wider text-[#d8426f] block">{serviceModal.category}</span>
              <h3 className="text-lg sm:text-2xl font-serif font-bold text-gray-900 dark:text-white leading-tight truncate">{serviceModal.title}</h3>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              <span className="bg-gradient-to-r from-[#d8426f] to-[#b32753] text-white text-sm sm:text-base font-bold px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-xl shadow whitespace-nowrap">
                ₹{serviceModal.price}
              </span>
              <button 
                type="button"
                onClick={()=>setServiceModal(null)} 
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-white/10 dark:hover:bg-white/20 text-gray-600 dark:text-gray-300 flex items-center justify-center transition-colors flex-shrink-0"
                aria-label="Close"
              >
                <Icon name="close" className="w-4 h-4 sm:w-5 sm:h-5"/>
              </button>
            </div>
          </div>

          {/* Middle Body - Scrollable without cutting buttons */}
          <div className="p-5 sm:p-6 overflow-y-auto space-y-4 flex-1">
            {/* Clean Image Area */}
            <div className="relative rounded-2xl overflow-hidden bg-[#161214] max-h-[340px] sm:max-h-[380px] flex items-center justify-center">
              <img 
                src={serviceModal.image} 
                alt={serviceModal.title} 
                className="w-full max-h-[340px] sm:max-h-[380px] object-cover sm:object-contain"
              />
              <button 
                type="button" 
                onClick={()=>setFullImageModal(serviceModal)} 
                className="absolute top-3 right-3 px-3 py-1.5 rounded-full bg-black/60 hover:bg-[#d8426f] text-white text-xs font-semibold backdrop-blur-sm border border-white/20 flex items-center gap-1.5 shadow transition-all hover:scale-105"
                title="Fullscreen Image View"
              >
                <Icon name="maximize" className="w-3.5 h-3.5 text-pink-300"/>
                <span>Zoom Photo</span>
              </button>
              <span className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full flex items-center gap-1">
                <Icon name="clock" className="w-3.5 h-3.5 text-pink-300"/>
                {serviceModal.duration}
              </span>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1.5">Service Overview</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{serviceModal.description}</p>
            </div>

            {/* What's Included / Key Highlights */}
            <div className="bg-[#fef5f7] dark:bg-[#22181e] border border-[#fae2e8] dark:border-[#38242d] rounded-2xl p-4 sm:p-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#d8426f] mb-3 flex items-center gap-1.5">
                <Icon name="sparkles" className="w-4 h-4 text-[#d8426f]" />
                What's Included in this Treatment
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                {serviceModal.includes.map(x=>(
                  <li key={x} className="flex items-start gap-2">
                    <span className="w-4 h-4 rounded-full bg-[#fdf2f4] dark:bg-[#2c1a22] text-[#d8426f] flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">✓</span>
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-xs text-[#d8426f] font-semibold flex items-center gap-1.5">
              <span>🌸</span> Home service available in Gwalior with lead stylist Pinki Dhakare.
            </p>
          </div>

          {/* Fixed Footer with 100% Guaranteed Visible Buttons (Outside scrollable content) */}
          <div className="p-4 sm:p-5 border-t border-[#fae2e8] dark:border-[#38242d] bg-[#fffafb] dark:bg-[#1a1417] flex flex-col sm:flex-row items-center justify-between gap-3 flex-shrink-0">
            <div className="flex items-center gap-2 self-start sm:self-auto">
              <span className="text-xs text-gray-500 dark:text-gray-400">Total Price:</span>
              <span className="text-xl sm:text-2xl font-serif font-bold text-[#d8426f] whitespace-nowrap">₹{serviceModal.price}</span>
              <span className="text-xs text-gray-400 font-medium">({serviceModal.duration})</span>
            </div>
            <div className="flex flex-wrap items-center justify-end gap-2 w-full sm:w-auto">
              <button 
                type="button"
                onClick={()=>toggleServiceInCart(serviceModal)}
                className={`px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition-all flex-shrink-0 ${cart.some(c=>c.id===serviceModal.id) ? "bg-[#d8426f] text-white border-[#d8426f]" : "bg-[#fdf2f4] dark:bg-[#2c1a22] text-[#d8426f] border-[#f3b3c4]"}`}
              >
                <Icon name={cart.some(c=>c.id===serviceModal.id) ? "check" : "cart"} className="w-4 h-4"/>
                <span>{cart.some(c=>c.id===serviceModal.id) ? "✓ Added" : "+ Add to Cart"}</span>
              </button>
              <button 
                type="button"
                onClick={()=>openBooking(serviceModal.id)} 
                className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-[#d8426f] to-[#b32753] hover:from-[#c4335f] hover:to-[#9f1f45] text-white text-xs font-bold shadow-md transition-all whitespace-nowrap flex-shrink-0"
              >
                Book Appointment
              </button>
              <button 
                type="button"
                onClick={()=>setServiceModal(null)}
                className="px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1c1519] hover:bg-gray-100 dark:hover:bg-white/10 text-gray-700 dark:text-gray-300 text-xs font-bold transition-colors flex-shrink-0"
              >
                Close
              </button>
            </div>
          </div>
        </>}
      </Modal>

      {/* ================= 2. FULLSCREEN IMAGE LIGHTBOX MODAL ================= */}
      <Modal open={!!fullImageModal} onClose={()=>setFullImageModal(null)} wide>
        {fullImageModal&& (
          <div className="bg-[#120e10] text-white flex flex-col max-h-[94vh] lightbox-content">
            {/* Header bar */}
            <div className="px-4 sm:px-6 py-3 border-b border-white/10 flex items-center justify-between gap-3 flex-shrink-0">
              <div className="min-w-0 pr-2">
                <span className="text-[10px] uppercase tracking-wider text-pink-300 font-semibold block">{fullImageModal.category || "Parlour Photo"}</span>
                <h3 className="font-serif text-base sm:text-xl font-bold text-white truncate">{fullImageModal.title}</h3>
              </div>
              <div className="flex items-center gap-2.5 sm:gap-3 flex-shrink-0">
                {fullImageModal.price && (
                  <span className="bg-[#d8426f] text-white text-xs sm:text-sm font-bold px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-xl shadow whitespace-nowrap">
                    ₹{fullImageModal.price}
                  </span>
                )}
                <button 
                  type="button"
                  onClick={()=>setFullImageModal(null)} 
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors flex-shrink-0"
                  title="Close"
                  aria-label="Close"
                >
                  <Icon name="close" className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>

            {/* Uncropped Full Image Display Area */}
            <div className="p-3 sm:p-5 flex-1 flex items-center justify-center overflow-auto bg-black/85 min-h-[300px]">
              <img 
                src={fullImageModal.image} 
                alt={fullImageModal.title} 
                className="max-h-[62vh] w-auto max-w-full object-contain rounded-xl shadow-2xl border border-white/10"
              />
            </div>

            {/* Footer with Service Information and 100% Guaranteed Visible Buttons */}
            <div className="p-3.5 sm:p-4 border-t border-white/10 bg-[#161214] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs flex-shrink-0">
              <div className="text-gray-300 flex flex-wrap items-center justify-center sm:justify-start gap-2 text-xs">
                {fullImageModal.duration && (
                  <span className="bg-white/10 px-2.5 py-1 rounded-full text-white font-medium flex items-center gap-1">
                    <Icon name="clock" className="w-3 h-3 text-pink-300"/>
                    {fullImageModal.duration}
                  </span>
                )}
                <span className="text-pink-300 font-semibold flex items-center gap-1">
                  🌸 100% Original Photo & Authentic Service
                </span>
              </div>
              <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2 w-full sm:w-auto">
                {fullImageModal.id && (
                  <>
                    <button 
                      type="button"
                      onClick={(e)=>toggleServiceInCart(fullImageModal, e)}
                      className={`px-3.5 py-2 rounded-full border text-xs font-semibold flex items-center justify-center gap-1.5 transition-all flex-shrink-0 ${cart.some(c=>c.id===fullImageModal.id) ? "bg-[#d8426f] text-white border-[#d8426f]" : "bg-white/10 hover:bg-white/20 text-white border-white/20"}`}
                    >
                      <Icon name="cart" className="w-3.5 h-3.5"/>
                      <span>{cart.some(c=>c.id===fullImageModal.id) ? "✓ Added" : "+ Add to Cart"}</span>
                    </button>
                    <button 
                      type="button"
                      onClick={()=>{
                        const sId = fullImageModal.id;
                        setFullImageModal(null);
                        openBooking(sId);
                      }}
                      className="px-4 py-2 rounded-full bg-gradient-to-r from-[#d8426f] to-[#b32753] hover:from-[#c4335f] text-white text-xs font-bold shadow transition-all whitespace-nowrap flex-shrink-0"
                    >
                      Book Service
                    </button>
                  </>
                )}
                <button 
                  type="button"
                  onClick={()=>setFullImageModal(null)} 
                  className="px-4 py-2 rounded-full bg-white/20 hover:bg-white/30 text-white text-xs font-bold transition-colors whitespace-nowrap flex-shrink-0"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </Modal>

      {/* ================= 3. MULTI-SERVICE CART MODAL ================= */}
      <Modal open={cartOpen} onClose={()=>setCartOpen(false)} wide>
        <div className="flex flex-col max-h-[90vh] bg-white dark:bg-[#1a1417] text-gray-900 dark:text-gray-100 rounded-3xl overflow-hidden">
          
          {/* Header */}
          <div className="flex-shrink-0 bg-gradient-to-r from-[#d8426f] to-[#b32753] text-white p-4 sm:p-5 flex items-center justify-between shadow-md">
            <div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold flex items-center gap-2">
                <Icon name="cart" className="w-6 h-6"/>
                Selected Services Cart ({cart.length})
              </h3>
              <p className="text-xs text-pink-100 mt-0.5">Select services, fill your details & location below, and send directly on WhatsApp.</p>
            </div>
            <button onClick={()=>setCartOpen(false)} className="p-2 rounded-full hover:bg-white/20 transition-colors" aria-label="Close">
              <Icon name="close" className="w-5 h-5"/>
            </button>
          </div>

          {/* Scrollable Content: Selected List + Booking Details Form */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5">
            {cart.length === 0 ? (
              <div className="text-center py-12 space-y-3">
                <div className="w-14 h-14 rounded-full bg-[#fdf2f4] dark:bg-[#2c1a22] text-[#d8426f] flex items-center justify-center mx-auto text-2xl">
                  <Icon name="cart" className="w-7 h-7"/>
                </div>
                <h4 className="font-serif font-bold text-lg text-gray-800 dark:text-gray-200">No Services Selected Yet</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 max-w-sm mx-auto">
                  Click "+ Select" on any service cards to combine multiple treatments into one WhatsApp appointment!
                </p>
                <button 
                  type="button"
                  onClick={()=>{
                    setCartOpen(false);
                    document.getElementById("services")?.scrollIntoView({behavior:"smooth"});
                  }}
                  className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#d8426f] to-[#b32753] text-white text-xs font-semibold shadow hover:shadow-md transition-all"
                >
                  Explore Services Now
                </button>
              </div>
            ) : (
              <>
                {/* 1. Review Selected Services */}
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400">
                      1. Selected Services ({cart.length})
                    </span>
                    <button 
                      type="button"
                      onClick={()=>{
                        setCartOpen(false);
                        document.getElementById("services")?.scrollIntoView({behavior:"smooth"});
                      }}
                      className="text-xs text-[#d8426f] hover:underline font-bold flex items-center gap-1"
                    >
                      <Icon name="plus" className="w-3.5 h-3.5"/>
                      Add More Services
                    </button>
                  </div>

                  <div className="space-y-2.5">
                    {cart.map((item)=>(
                      <div key={item.id} className="border border-[#fae2e8] dark:border-[#38242d] rounded-2xl p-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-[#fffafb] dark:bg-[#21181d] hover:border-[#f3b3c4] transition-all">
                        {/* Thumbnail & Info */}
                        <div className="flex items-center gap-3 min-w-0 flex-1">
                          <div 
                            className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden flex-shrink-0 cursor-zoom-in relative group border border-[#fae2e8] dark:border-[#38242d]"
                            onClick={()=>setFullImageModal(item)}
                            title="Click to view full photo (Puri Image)"
                          >
                            <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform"/>
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white transition-opacity">
                              <Icon name="zoom" className="w-4 h-4 text-pink-300"/>
                            </div>
                          </div>

                          <div className="min-w-0">
                            <h4 className="font-serif font-bold text-sm text-gray-900 dark:text-white truncate">{item.title}</h4>
                            <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-2 mt-0.5">
                              <span>⏱ {item.duration}</span>
                              <span>•</span>
                              <span className="font-bold text-[#d8426f]">₹{item.price}</span>
                            </p>
                          </div>
                        </div>

                        {/* Action Buttons for this item */}
                        <div className="flex items-center gap-2 w-full sm:w-auto justify-end pt-2 sm:pt-0 border-t sm:border-t-0 border-[#fae2e8] dark:border-[#38242d]">
                          <button 
                            type="button" 
                            onClick={()=>setFullImageModal(item)} 
                            className="px-3 py-1.5 rounded-xl bg-white dark:bg-[#1a1417] text-gray-700 dark:text-gray-300 hover:text-[#d8426f] border border-[#fae2e8] dark:border-[#38242d] text-xs font-semibold flex items-center gap-1.5 transition-colors"
                            title="View Full Photo (Puri Image)"
                          >
                            <Icon name="zoom" className="w-3.5 h-3.5 text-[#d8426f]"/>
                            <span>Puri Image</span>
                          </button>
                          
                          <button 
                            type="button" 
                            onClick={()=>removeFromCart(item.id)} 
                            className="px-3 py-1.5 rounded-xl bg-white dark:bg-[#1a1417] text-red-500 hover:bg-red-50 dark:hover:bg-red-950/40 border border-[#fae2e8] dark:border-[#38242d] text-xs font-semibold flex items-center gap-1 transition-colors"
                            title="Remove service from cart"
                          >
                            <Icon name="trash" className="w-3.5 h-3.5"/>
                            <span>Remove</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2. User Details Form for Multi-service booking: ONLY user details + location */}
                <div className="bg-[#fef5f7] dark:bg-[#251a21] border border-[#fae2e8] dark:border-[#38242d] rounded-2xl p-4 sm:p-5 space-y-3.5">
                  <div className="border-b border-[#fae2e8] dark:border-[#38242d] pb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#d8426f]">
                      2. Enter Details for WhatsApp Booking
                    </span>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                      Only your details and location will be sent directly on WhatsApp.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] font-semibold text-gray-700 dark:text-gray-300 block mb-1">Your Full Name *</label>
                      <input 
                        type="text" 
                        required 
                        value={multiBooking.name} 
                        onChange={e=>setMultiBooking({...multiBooking, name: e.target.value})} 
                        placeholder="e.g. Pooja Sharma" 
                        className="w-full px-3 py-2.5 rounded-xl border border-[#fae2e8] dark:border-[#38242d] bg-white dark:bg-[#1c1519] text-xs text-gray-900 dark:text-white focus:outline-[#d8426f]"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-semibold text-gray-700 dark:text-gray-300 block mb-1">Mobile / WhatsApp Number *</label>
                      <input 
                        type="tel" 
                        required 
                        value={multiBooking.phone} 
                        onChange={e=>setMultiBooking({...multiBooking, phone: e.target.value})} 
                        placeholder="e.g. +91 98765 43210" 
                        className="w-full px-3 py-2.5 rounded-xl border border-[#fae2e8] dark:border-[#38242d] bg-white dark:bg-[#1c1519] text-xs text-gray-900 dark:text-white focus:outline-[#d8426f]"
                      />
                    </div>
                  </div>

                  {/* Location / Address Input */}
                  <div>
                    <label className="text-[11px] font-semibold text-gray-700 dark:text-gray-300 block mb-1">Your Location / Address in Gwalior *</label>
                    <input 
                      type="text" 
                      required 
                      value={multiBooking.location} 
                      onChange={e=>setMultiBooking({...multiBooking, location: e.target.value})} 
                      placeholder="e.g. Char Sahar Ka Naka, Morar, Lashkar, Gwalior" 
                      className="w-full px-3 py-2.5 rounded-xl border border-[#fae2e8] dark:border-[#38242d] bg-white dark:bg-[#1c1519] text-xs text-gray-900 dark:text-white focus:outline-[#d8426f]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] font-semibold text-gray-700 dark:text-gray-300 block mb-1">Preferred Date *</label>
                      <input 
                        type="date" 
                        required 
                        min={today} 
                        value={multiBooking.date} 
                        onChange={e=>setMultiBooking({...multiBooking, date: e.target.value})} 
                        className="w-full px-3 py-2.5 rounded-xl border border-[#fae2e8] dark:border-[#38242d] bg-white dark:bg-[#1c1519] text-xs text-gray-900 dark:text-white focus:outline-[#d8426f]"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-semibold text-gray-700 dark:text-gray-300 block mb-1">Select Time Slot:</label>
                      <div className="grid grid-cols-3 gap-1.5">
                        {slots.slice(0, 6).map(([time])=>(
                          <button 
                            type="button" 
                            key={time} 
                            onClick={()=>setMultiBooking({...multiBooking, time})} 
                            className={`time-slot-btn py-1.5 px-1 text-center rounded-lg text-[11px] transition-all ${multiBooking.time===time?"selected font-bold":""}`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Fixed Footer: Always Visible Buttons */}
          {cart.length > 0 && (
            <div className="flex-shrink-0 border-t border-[#fae2e8] dark:border-[#38242d] bg-white dark:bg-[#1a1417] p-4 sm:p-5 shadow-2xl z-20">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-3">
                <div>
                  <span className="text-xs text-gray-500 dark:text-gray-400">Total for {cart.length} Service(s):</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-serif font-bold text-[#d8426f]">₹{cartTotal}</span>
                    <span className="text-xs text-gray-400">
                      (~{cart.reduce((acc, c) => acc + parseInt(c.duration || "30"), 0)} mins total)
                    </span>
                  </div>
                </div>
                <button 
                  type="button" 
                  onClick={()=>setCart([])} 
                  className="text-xs text-gray-500 hover:text-red-500 transition-colors flex items-center gap-1 font-medium"
                >
                  <Icon name="trash" className="w-3.5 h-3.5"/>
                  <span>Clear Selection</span>
                </button>
              </div>

              {/* Big, Clear Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <button 
                  type="button"
                  onClick={()=>{
                    setCartOpen(false);
                    document.getElementById("services")?.scrollIntoView({behavior:"smooth"});
                  }} 
                  className="w-full sm:w-1/3 py-3 rounded-xl border border-[#fae2e8] dark:border-[#38242d] bg-[#fdf2f4] dark:bg-[#251a21] text-[#d8426f] text-xs font-bold hover:bg-[#fce5eb] transition-all flex items-center justify-center gap-1.5"
                >
                  <Icon name="plus" className="w-4 h-4"/>
                  <span>+ Add More Services</span>
                </button>

                <button 
                  type="button"
                  onClick={submitMultiBooking} 
                  className="w-full sm:w-2/3 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  <Icon name="whatsapp" className="w-5 h-5"/>
                  <span>Send Booking to WhatsApp</span>
                  <Icon name="arrow" className="w-4 h-4"/>
                </button>
              </div>
            </div>
          )}
        </div>
      </Modal>

      {/* ================= 4. SINGLE BOOKING MODAL (With User Location Field) ================= */}
      <Modal open={bookingOpen} onClose={()=>setBookingOpen(false)}>
        <div className="bg-gradient-to-r from-[#d8426f] to-[#b32753] text-white p-6">
          <button onClick={()=>setBookingOpen(false)} className="float-right hover:text-pink-200 transition-colors"><Icon name="close"/></button>
          <h3 className="text-2xl font-serif font-bold">Book Appointment</h3>
          <p className="text-xs text-pink-100 mt-1">Enter your details and location to book on WhatsApp.</p>
        </div>
        <form onSubmit={e=>{e.preventDefault();createBooking(full)}} className="p-6 overflow-y-auto space-y-3.5">
          <div className="grid sm:grid-cols-2 gap-3">
            <input required value={full.name} onChange={e=>setFull({...full,name:e.target.value})} placeholder="Your full name *" className="px-3 py-2.5 rounded-xl border border-[#fae2e8] dark:border-[#38242d] bg-white dark:bg-[#161114] text-gray-900 dark:text-white text-xs focus:outline-[#d8426f]"/>
            <input required value={full.phone} onChange={e=>setFull({...full,phone:e.target.value})} placeholder="Mobile / WhatsApp *" className="px-3 py-2.5 rounded-xl border border-[#fae2e8] dark:border-[#38242d] bg-white dark:bg-[#161114] text-gray-900 dark:text-white text-xs focus:outline-[#d8426f]"/>
          </div>

          {/* User Location Field */}
          <div>
            <input required value={full.location} onChange={e=>setFull({...full,location:e.target.value})} placeholder="Your Location / Area in Gwalior *" className="w-full px-3 py-2.5 rounded-xl border border-[#fae2e8] dark:border-[#38242d] bg-white dark:bg-[#161114] text-gray-900 dark:text-white text-xs focus:outline-[#d8426f]"/>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <select required value={full.service} onChange={e=>setFull({...full,service:e.target.value})} className="w-full px-3 py-2.5 rounded-xl border border-[#fae2e8] dark:border-[#38242d] bg-white dark:bg-[#161114] text-gray-900 dark:text-white text-xs focus:outline-[#d8426f]">
              <option value="">Select a service *</option>
              {services.map(s=><option key={s.id} value={s.id}>{s.title} — ₹{s.price}</option>)}
            </select>
            <input required type="date" min={today} value={full.date} onChange={e=>setFull({...full,date:e.target.value})} className="px-3 py-2 rounded-xl border border-[#fae2e8] dark:border-[#38242d] bg-white dark:bg-[#161114] text-gray-900 dark:text-white text-xs focus:outline-[#d8426f]"/>
          </div>

          <div>
            <label className="text-xs text-gray-600 dark:text-gray-300 block mb-1">Time Slot:</label>
            <div className="grid grid-cols-3 gap-2">
              {slots.map(([time])=><button type="button" key={time} onClick={()=>setFull({...full,time})} className={`time-slot-btn py-2 rounded-xl text-xs ${full.time===time?"selected":""}`}>{time}</button>)}
            </div>
          </div>
          <button type="submit" className="w-full py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow transition-all flex items-center justify-center gap-2">
            <Icon name="whatsapp" className="w-4 h-4"/>
            <span>Continue to WhatsApp Booking</span>
          </button>
        </form>
      </Modal>

      {/* ================= 5. MY APPOINTMENTS MODAL ================= */}
      <Modal open={appointmentsOpen} onClose={()=>setAppointmentsOpen(false)} wide>
        <div className="bg-gradient-to-r from-[#d8426f] to-[#b32753] text-white p-6">
          <button onClick={()=>setAppointmentsOpen(false)} className="float-right hover:text-pink-200"><Icon name="close"/></button>
          <h3 className="text-2xl font-serif font-bold">Your Booked Appointments</h3>
        </div>
        <div className="p-6 overflow-y-auto space-y-4">
          {appointments.length===0?(
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center py-8">No saved appointments yet.</p>
          ):(
            appointments.map(a=>(
              <article key={a.id} className="border border-[#fae2e8] dark:border-[#38242d] rounded-2xl p-4 flex flex-col sm:flex-row justify-between gap-3 bg-white dark:bg-[#1f161a]">
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">{a.serviceTitle}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{a.date} • {a.timeSlot}</p>
                  {a.location && <p className="text-xs text-gray-600 dark:text-gray-300 mt-0.5">📍 {a.location}</p>}
                  <p className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold mt-1">Status: {a.status}</p>
                </div>
                <button onClick={()=>setPass(a)} className="px-4 py-2 rounded-xl bg-[#fdf2f4] dark:bg-[#2c1a22] text-[#d8426f] text-xs font-semibold hover:bg-[#fae1e7] transition-colors">
                  View Pass
                </button>
              </article>
            ))
          )}
        </div>
      </Modal>

      {/* ================= 6. BOOKING PASS / RECEIPT MODAL ================= */}
      <Modal open={!!pass} onClose={()=>setPass(null)}>
        {pass&&<div className="p-6">
          <div className="text-center border-b border-dashed border-gray-300 dark:border-gray-700 pb-5">
            <span className="text-[#d8426f] text-3xl">✿</span>
            <h3 className="font-serif text-2xl font-bold text-gray-900 dark:text-white">Kittu Beauty Parlour</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">{address}</p>
          </div>
          <div className="py-5 space-y-2 text-sm text-gray-800 dark:text-gray-200">
            <p><strong>Booking ID:</strong> #{pass.id}</p>
            <p><strong>Client:</strong> {pass.userName}</p>
            <p><strong>Phone:</strong> {pass.userPhone}</p>
            {pass.location && <p><strong>Location:</strong> {pass.location}</p>}
            <p><strong>Service:</strong> {pass.serviceTitle}</p>
            <p><strong>Date:</strong> {pass.date}</p>
            <p><strong>Time:</strong> {pass.timeSlot}</p>
            <p><strong>Price:</strong> ₹{pass.price}</p>
          </div>
          <button onClick={()=>window.print()} className="w-full py-3 rounded-xl bg-[#d8426f] text-white text-sm font-semibold no-print hover:bg-[#c4335f] transition-all">
            Print Booking Pass
          </button>
        </div>}
      </Modal>

      {/* ================= 7. VIDEO TOUR MODAL ================= */}
      <Modal open={videoOpen} onClose={()=>setVideoOpen(false)} wide>
        <div className="p-4 bg-[#161214] text-white flex justify-between items-center">
          <span className="font-serif font-bold text-lg">Parlour Virtual Tour</span>
          <button onClick={()=>setVideoOpen(false)}><Icon name="close"/></button>
        </div>
        <video className="w-full aspect-video" controls autoPlay muted loop poster={referenceBannerImage}>
          <source src="https://videos.pexels.com/video-files/7987790/7987790-hd_1920_1080_25fps.mp4" type="video/mp4"/>
        </video>
      </Modal>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
