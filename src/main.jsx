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

const phone = "+91 83050 06343";
const ownerWhatsApp = "+91 93995 11825";
const address = "Char Sahar Ka Naka, Gwalior, Madhya Pradesh";

const services = [
  { id:"o3-facial", title:"O3+ Facial", category:"Facial & Glow", price:1000, duration:"50 mins", image:"https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80", description:"Professional O3+ deep cleansing, brightening peel and radiant glow treatment.", includes:["Deep cleanser & toner","Aromatherapy ozone steam","Blackhead extraction","Derma glow infusion & mask"] },
  { id:"full-body-wax", title:"Full Body Wax", category:"Waxing & Smoothness", price:1200, duration:"75 mins", image:"https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=600&q=80", description:"Complete full body waxing with premium soothing wax.", includes:["Skin sanitization","Full arms, legs & torso wax","Aloe vera application","Redness prevention"] },
  { id:"hand-wax", title:"Hand Wax", category:"Waxing & Smoothness", price:300, duration:"25 mins", image:handWaxImage, description:"Gentle hand waxing from fingers to shoulders.", includes:["Full hand waxing","Cuticle oil","Cooling lotion"] },
  { id:"full-leg-wax", title:"Full Leg Wax", category:"Waxing & Smoothness", price:300, duration:"35 mins", image:fullLegWaxImage, description:"Thorough leg waxing for ultra-soft, smooth skin.", includes:["Complete full leg waxing","In-grown care","Rose lotion finish"] },
  { id:"face-wax", title:"Face Wax", category:"Facial & Waxing", price:300, duration:"20 mins", image:faceWaxImage, description:"Delicate facial waxing for sensitive skin.", includes:["Sensitive wax","Lip, chin & forehead touch-up","Soothing ice mist"] },
  { id:"hair-spa", title:"Hair Spa", category:"Hair Care", price:600, duration:"45 mins", image:hairSpaImage, description:"Nourishing hair spa that restores moisture and combats frizz.", includes:["Scalp cleansing","Keratin cream mask","Steam therapy","Head & shoulder massage"] },
  { id:"party-makeup", title:"Party Makeup", category:"Glamour & Makeup", price:1200, duration:"60 mins", image:partyMakeupImage, description:"Stunning HD party makeup with a long-lasting glow.", includes:["Pore minimising primer","HD foundation","Eye glam & lashes","Setting mist"] },
  { id:"engagement-makeup", title:"Engagement Makeup", category:"Bridal Suite", price:3000, duration:"120 mins", image:engagementMakeupImage, description:"Royal engagement makeover with premium styling.", includes:["HD bridal foundation","Designer eye glam","Custom hair styling","Draping assistance"] }
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
  {name:"Pinki Dhakare", service:"Bridal Makeup", text:"My bridal makeover was flawless and lasted throughout the celebration."},
  // {name:"Anjali Verma", service:"Facial & Waxing", text:"The staff was incredibly professional and the parlour is spotless."},
  // {name:"Neha Kapoor", service:"Hair Spa", text:"My hair feels softer and healthier after every visit."}
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
    <div className="modal-overlay fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm" onMouseDown={(e)=>e.target===e.currentTarget&&onClose()}>
      <div className={`modal-content-box bg-white w-full ${wide?"max-w-2xl":"max-w-lg"} rounded-3xl overflow-hidden shadow-2xl border border-[#fae2e8] max-h-[92vh] flex flex-col`}>
        {children}
      </div>
    </div>
  );
}

function App() {
  const [mobileOpen,setMobileOpen] = useState(false);
  const [serviceFiltersOpen,setServiceFiltersOpen] = useState(false);
  const [activeCategory,setActiveCategory] = useState("All Services");
  const [serviceModal,setServiceModal] = useState(null);
  const [bookingOpen,setBookingOpen] = useState(false);
  const [appointmentsOpen,setAppointmentsOpen] = useState(false);
  const [videoOpen,setVideoOpen] = useState(false);
  const [pass,setPass] = useState(null);
  const [toast,setToast] = useState("");
  const [testimonialIndex,setTestimonialIndex] = useState(0);
  const [quick,setQuick] = useState({name:"",phone:"",service:"",date:"",time:"10:30 AM"});
  const [full,setFull] = useState({name:"",phone:"",service:"",date:"",stylist:"Any Available Master Stylist",time:"11:30 AM",notes:""});
  const [appointments,setAppointments] = useState(()=>{
    try { return JSON.parse(localStorage.getItem("glow_grace_appointments_v3")) || []; } catch { return []; }
  });

  const today = new Date().toISOString().slice(0,10);

  useEffect(()=>{
    if(!toast) return;
    const id=setTimeout(()=>setToast(""),3200);
    return()=>clearTimeout(id);
  },[toast]);

  const openBooking = (serviceId="") => {
    setBookingOpen(true);
    setServiceModal(null);
    setFull(v=>({...v,service:serviceId}));
  };

  const createBooking = (data) => {
    const service = services.find(s=>s.id===data.service);
    if(!data.name||!data.phone||!service||!data.date){
      setToast("Please complete all required booking details.");
      return;
    }
    const slot = slots.find(s=>s[0]===data.time);
    const booking = {
      id:`GG-2026-${Math.floor(1000+Math.random()*9000)}`,
      userName:data.name,userPhone:data.phone,userEmail:"",
      serviceId:service.id,serviceTitle:service.title,category:service.category,
      date:data.date,timeSlot:data.time,timeDisplay:`${data.time} - ${slot ? (slot[0].includes("PM")?"Next Hour":"Next Hour") : "Next Hour"}`,
      duration:service.duration,price:service.price,stylist:data.stylist||"Any Available Master Stylist",
      status:"Confirmed",branch:address,specialNotes:data.notes||"None",createdAt:new Date().toISOString()
    };
    const next=[booking,...appointments];
    setAppointments(next);
    localStorage.setItem("glow_grace_appointments_v3",JSON.stringify(next));
    setBookingOpen(false);
    setPass(booking);
    const message = [
      "🌸 New appointment booking - Kittu Beauty Parlour",
      `Booking ID: ${booking.id}`,
      `Name: ${booking.userName}`,
      `Phone: ${booking.userPhone}`,
      `Service: ${booking.serviceTitle}`,
      `Date: ${booking.date}`,
      `Time: ${booking.timeDisplay}`,
      `Stylist: ${booking.stylist}`,
      `Price: ₹${booking.price}`,
      `Notes: ${booking.specialNotes}`
    ].join("\n");
    const whatsappUrl = `https://wa.me/${ownerWhatsApp.replace(/\D/g,"")}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl,"_blank","noopener,noreferrer");
    setToast("Appointment saved. Complete sending in WhatsApp.");
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
      <div className="bg-[#161214] text-gray-300 text-xs py-2 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex flex-wrap justify-center gap-5">
            <a href={`tel:${phone.replace(/\s/g,"")}`} className="flex items-center gap-1.5"><Icon name="phone" className="w-3.5 h-3.5 text-[#d8426f]"/>{phone}</a>
            <span className="hidden sm:flex items-center gap-1.5"><Icon name="pin" className="w-3.5 h-3.5 text-[#d8426f]"/>{address}</span>
            <span className="hidden lg:flex items-center gap-1.5"><Icon name="clock" className="w-3.5 h-3.5 text-[#d8426f]"/>Mon - Sat: 9 AM - 9 PM</span>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#fae2e8] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 sm:gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#fdf2f4] flex items-center justify-center text-[#d8426f]">✿</div>
            <div><span className="font-serif text-lg sm:text-xl lg:text-2xl font-bold block leading-tight">Kittu</span><span className="text-[8px] sm:text-[9px] uppercase tracking-[0.18em] sm:tracking-[0.22em] text-[#d8426f] font-semibold">Beauty Parlour</span></div>
          </a>
          <nav className="hidden xl:flex items-center gap-7 text-sm font-medium text-gray-700">
            {navLink("#home","Home")}
            <div className="relative">
              <button type="button" onClick={()=>setServiceFiltersOpen(value=>!value)} aria-expanded={serviceFiltersOpen} className="hover:text-[#d8426f] transition-colors">Services⌄</button>
              {serviceFiltersOpen&&<div className="absolute left-0 top-full mt-3 min-w-52 rounded-xl border border-[#fae2e8] bg-white p-2 shadow-xl z-50">
                {serviceCategories.map(category=><button type="button" key={category} onClick={()=>selectCategory(category)} className={`block w-full text-left px-3 py-2 rounded-lg text-xs ${activeCategory===category?"bg-[#fdf2f4] text-[#d8426f] font-semibold":"text-gray-700 hover:bg-[#fdf5f7]"}`}>{category}</button>)}
              </div>}
            </div>
            {navigationLinks.slice(1, -1).map(([href,label])=>navLink(href,label))}
            {navLink("#contact","Contact")}
          </nav>
          <div className="flex items-center gap-2">
            <button onClick={()=>setAppointmentsOpen(true)} className="hidden xl:flex px-3 py-2 rounded-full bg-[#fdf2f4] text-[#d8426f] text-xs font-semibold border border-[#fae2e8]"><Icon name="calendar" className="w-4 h-4 mr-1"/>My Appointments</button>
            <button onClick={()=>openBooking()} className="whitespace-nowrap py-2.5 px-3 sm:px-4 rounded-full bg-gradient-to-r from-[#d8426f] to-[#b32753] text-white text-xs sm:text-sm font-semibold"><span className="sm:hidden">Book</span><span className="hidden sm:inline">Book Appointment</span></button>
            <button onClick={()=>setMobileOpen(v=>!v)} aria-expanded={mobileOpen} aria-label={mobileOpen?"Close menu":"Open menu"} className="xl:hidden p-1.5 sm:p-2"><Icon name={mobileOpen?"close":"menu"} /></button>
          </div>
        </div>
        {mobileOpen&&<div className="xl:hidden border-t border-[#fae2e8] bg-white px-4 sm:px-6 py-4 flex flex-col gap-3 text-sm">
          {navLink("#home","Home")}{navLink("#services","Services")}
          <div className="border-t border-[#fae2e8] pt-3">
            <p className="text-[11px] uppercase tracking-wider text-gray-400 mb-2">Filter services</p>
            <div className="flex flex-wrap gap-2">{serviceCategories.map(category=><button type="button" key={category} onClick={()=>selectCategory(category)} className={`rounded-full border px-3 py-1.5 text-xs ${activeCategory===category?"bg-[#d8426f] border-[#d8426f] text-white":"border-[#fae2e8] text-gray-700"}`}>{category}</button>)}</div>
          </div>
          {navigationLinks.slice(1).map(([href,label])=>navLink(href,label))}
          <button type="button" onClick={()=>{setAppointmentsOpen(true);setMobileOpen(false)}} className="text-left hover:text-[#d8426f] transition-colors">My Appointments</button>
        </div>}
      </header>

      <main>
        <section id="home" className="relative bg-gradient-to-r from-[#fef3f5] via-[#fde9ee] to-[#fbf0f3] overflow-hidden py-12 sm:py-16">
          <div className="hero-swoosh"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              <p className="text-[11px] sm:text-xs uppercase font-bold tracking-[0.25em] text-[#d8426f]">LOOK BEAUTIFUL • FEEL CONFIDENT</p>
              <h1 className="text-4xl sm:text-6xl font-serif font-extrabold text-[#231b1f] leading-[1.12]"><span className="text-[#d8426f] block font-cormorant italic font-normal text-3xl sm:text-4xl">Welcome to</span>Kittu<br/><span className="font-normal text-3xl sm:text-5xl text-gray-800">Beauty Parlour</span></h1>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-lg mx-auto lg:mx-0">Unleash your natural beauty with expert beauty services and personalized care. Indulge in bridal styling, rejuvenating facials, luxury hair treatments and spa therapy.</p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <button onClick={()=>openBooking()} className="py-3 px-7 rounded-full bg-[#d8426f] text-white font-semibold text-sm shadow-lg flex items-center gap-2">Book Appointment <Icon name="arrow" className="w-4 h-4"/></button>
                <button onClick={()=>setVideoOpen(true)} className="py-2.5 px-5 rounded-full bg-white text-gray-800 font-semibold text-sm border border-[#fae2e8] shadow-sm">▶ &nbsp; Watch Video</button>
              </div>
            </div>
            <div className="lg:col-span-6 relative flex justify-center">
              <div className="relative w-full max-w-lg">
                <p className="absolute -top-8 right-4 z-20 font-script text-4xl text-[#d8426f] rotate-[-2deg]">Be Your Own<br/>Kind of Beautiful</p>
                <img src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=85" alt="Kittu Beauty Parlour" className="relative z-10 w-full aspect-[14/11] object-cover rounded-3xl shadow-2xl border-4 border-white"/>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12"><h2 className="text-3xl sm:text-4xl font-serif font-bold">Our Services</h2><p className="text-gray-500 mt-2">A complete range of beauty & wellness services</p><div className="w-16 h-0.5 bg-[#d8426f] mx-auto mt-3"/></div>
          <div className="flex flex-wrap justify-center gap-2 mb-7" aria-label="Filter services by category">
            {serviceCategories.map(category=><button type="button" key={category} onClick={()=>setActiveCategory(category)} aria-pressed={activeCategory===category} className={`rounded-full border px-4 py-2 text-xs font-semibold transition-colors ${activeCategory===category?"bg-[#d8426f] border-[#d8426f] text-white":"border-[#fae2e8] bg-white text-gray-600 hover:text-[#d8426f]"}`}>{category}</button>)}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {filteredServices.map(s=>(
              <article key={s.id} onClick={()=>setServiceModal(s)} className="service-card group bg-white rounded-2xl overflow-hidden p-3.5 text-left cursor-pointer border border-[#fae2e8] shadow-sm flex flex-col">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-3"><img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/><div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent"/><span className="absolute top-2 left-2 bg-black/60 text-white text-[10px] px-2 py-1 rounded-full">{s.category}</span><span className="absolute bottom-2 left-2 text-white text-[11px]">{s.duration}</span><span className="absolute bottom-2 right-2 bg-[#d8426f] text-white text-xs font-bold px-2 py-1 rounded-lg">₹{s.price}</span></div>
                <h3 className="font-serif font-bold text-base sm:text-lg group-hover:text-[#d8426f]">{s.title}</h3><p className="text-xs text-gray-500 mt-1 mb-3 line-clamp-2">{s.description}</p>
                <button onClick={(e)=>{e.stopPropagation();openBooking(s.id)}} className="mt-auto w-full py-2.5 rounded-xl bg-[#fdf2f4] text-[#d8426f] border border-[#f3b3c4] font-semibold text-xs">Book Service</button>
              </article>
            ))}
          </div>
        </section>

        <section id="quickBook" className="py-14 bg-gradient-to-b from-white to-[#fdf5f7] border-y border-[#fae2e8]/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 grid lg:grid-cols-12 gap-8 items-stretch">
            <div id="about" className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-[#fae2e8] shadow-sm">
              <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80" alt="Spa ambience" className="w-full aspect-[16/10] object-cover rounded-2xl mb-6"/>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-3">About Us</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">Kittu Beauty Parlour is dedicated to enhancing your natural beauty with premium services, professional stylists and a relaxing environment.</p>
              <ul className="space-y-3 text-sm">{["Expert & Trained Staff","Premium Products","Relaxing Ambience & Bridal Suites"].map(x=><li key={x} className="flex items-center gap-2"><span className="w-5 h-5 rounded-full bg-[#fdf2f4] text-[#d8426f] text-center">✓</span>{x}</li>)}</ul>
            </div>
            <div className="lg:col-span-6 bg-[#fdf2f4] rounded-3xl p-6 sm:p-8 border border-[#fae2e8] shadow-sm">
              <h3 className="text-xl sm:text-2xl font-serif font-bold">Book Your Appointment</h3><p className="text-xs text-gray-500 mb-4">Get ready to look your best!</p>
              <form onSubmit={(e)=>{e.preventDefault();createBooking(quick)}} className="space-y-3.5">
                <div className="grid sm:grid-cols-2 gap-3"><input value={quick.name} onChange={e=>setQuick({...quick,name:e.target.value})} placeholder="Your full name" className="w-full px-3 py-2.5 rounded-xl border border-[#fae2e8] text-xs"/><input value={quick.phone} onChange={e=>setQuick({...quick,phone:e.target.value})} placeholder="Mobile / WhatsApp" className="w-full px-3 py-2.5 rounded-xl border border-[#fae2e8] text-xs"/></div>
                <div className="grid sm:grid-cols-2 gap-3"><select value={quick.service} onChange={e=>setQuick({...quick,service:e.target.value})} className="w-full px-3 py-2.5 rounded-xl border border-[#fae2e8] text-xs"><option value="">Select a service</option>{services.map(s=><option key={s.id} value={s.id}>{s.title} — ₹{s.price}</option>)}</select><input type="date" min={today} value={quick.date} onChange={e=>setQuick({...quick,date:e.target.value})} className="w-full px-3 py-2.5 rounded-xl border border-[#fae2e8] text-xs"/></div>
                <div className="grid grid-cols-3 gap-2">{slots.map(([time])=> <button type="button" key={time} onClick={()=>setQuick({...quick,time})} className={`time-slot-btn py-2 px-2 rounded-xl text-xs ${quick.time===time?"selected":""}`}>{time}</button>)}</div>
                <button type="submit" className="w-full py-3.5 rounded-xl bg-[#25D366] text-white font-bold text-sm">Continue to WhatsApp</button>
              </form>
              <p className="text-[11px] text-gray-500 text-center mt-3">WhatsApp booking number: <strong>{ownerWhatsApp}</strong></p>
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-16 max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-10"><h2 className="text-3xl sm:text-4xl font-serif font-bold">What Our Clients Say</h2><p className="text-gray-500 text-sm mt-2">Real stories. Real confidence.</p></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">{visibleTestimonials.map(t=><article key={t.name} className="bg-white border border-[#fae2e8] rounded-2xl p-6 shadow-sm"><div className="text-[#d8426f] mb-3">★★★★★</div><p className="text-sm text-gray-600">"{t.text}"</p><h3 className="font-serif font-bold mt-4">{t.name}</h3><p className="text-xs text-gray-400">{t.service}</p></article>)}</div>
          <div className="flex justify-center gap-3 mt-6"><button onClick={()=>setTestimonialIndex(v=>v-1)} className="w-9 h-9 rounded-full border">‹</button><button onClick={()=>setTestimonialIndex(v=>v+1)} className="w-9 h-9 rounded-full border">›</button></div>
        </section>

        <section id="gallery" className="py-14 bg-[#fef5f7] border-t border-[#fae2e8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-8"><h2 className="text-3xl sm:text-4xl font-serif font-bold text-center mb-8">Our Parlour Gallery</h2><div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[["1560066984-138dadb4c035","Hair Styling Station"],["1487412720507-e7ab37603c6f","Bridal Glam Lounge"],["1570172619644-dfd03ed5d881","Hydra Facial Suite"],["1604654894610-df63bc536371","Luxury Nail Bar"]].map(([id,label])=><div key={id} className="relative rounded-2xl overflow-hidden aspect-[4/3]"><img src={`https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=600&q=80`} alt={label} className="w-full h-full object-cover hover:scale-105 transition-transform"/></div>)}
          </div></div>
        </section>
      </main>

      <footer id="contact" className="bg-[#161214] text-gray-300 pt-14 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-white/10">
          <div><div className="flex items-center gap-3 mb-4"><span className="w-10 h-10 rounded-full bg-[#2a1c22] text-[#d8426f] flex items-center justify-center">✿</span><div><span className="font-serif text-2xl font-bold text-white block">Kittu</span><span className="text-[9px] uppercase tracking-[0.22em] text-[#d8426f]">Beauty Parlour</span></div></div><p className="text-xs text-gray-400">Your sanctuary for elevated beauty and personal wellness.</p></div>
          <div><h4 className="text-xs uppercase text-white mb-4">Quick Links</h4><ul className="space-y-2 text-xs text-gray-400">{[["#home","Home"],["#services","Services"],...navigationLinks.slice(1)].map(([href,label])=><li key={href}><a href={href} className="hover:text-white transition-colors">{label}</a></li>)}</ul></div>
          <div><h4 className="text-xs uppercase text-white mb-4">Contact Us</h4><a href={`tel:${phone.replace(/\s/g,"")}`} className="text-xs flex items-center gap-2 mb-2 hover:text-white"><Icon name="phone" className="w-4 h-4 text-[#d8426f]"/>{phone}</a><p className="text-xs flex gap-2"><Icon name="pin" className="w-4 h-4 text-[#d8426f]"/>{address}</p></div>
          <div><h4 className="text-xs uppercase text-white mb-4">Quick Booking</h4><p className="text-xs text-gray-400 mb-4">Ready for your next beauty appointment?</p><button onClick={()=>openBooking()} className="py-2.5 px-5 rounded-full bg-[#d8426f] text-white text-xs">Book Appointment Now →</button></div>
        </div><div className="max-w-7xl mx-auto px-4 sm:px-8 pt-6 text-xs text-gray-500 flex flex-col sm:flex-row justify-between"><span>© 2026 Kittu Beauty Parlour</span><span>Made with ♥ for Beauty Lovers</span></div>
      </footer>

      {toast&&<div className="fixed bottom-5 right-5 z-[80] bg-[#161214] text-white px-5 py-3 rounded-xl shadow-xl text-sm toast-msg">{toast}</div>}

      <Modal open={!!serviceModal} onClose={()=>setServiceModal(null)}>
        {serviceModal&&<>
          <div className="relative h-48"><img src={serviceModal.image} alt={serviceModal.title} className="w-full h-full object-cover"/><button onClick={()=>setServiceModal(null)} className="absolute top-4 right-4 p-1.5 rounded-full bg-black/50 text-white"><Icon name="close"/></button><div className="absolute bottom-4 left-5 text-white"><p className="text-xs">{serviceModal.category}</p><h3 className="text-2xl font-serif font-bold">{serviceModal.title}</h3><p className="font-bold text-pink-200">₹{serviceModal.price} • {serviceModal.duration}</p></div></div>
          <div className="p-6 overflow-y-auto"><p className="text-sm text-gray-600 mb-4">{serviceModal.description}</p><h4 className="text-xs font-bold uppercase text-gray-400 mb-2">What's included</h4><ul className="space-y-2 text-sm">{serviceModal.includes.map(x=><li key={x} className="flex gap-2"><Icon name="check" className="w-4 h-4 text-[#d8426f]"/>{x}</li>)}</ul><button onClick={()=>openBooking(serviceModal.id)} className="w-full mt-5 py-3 rounded-xl bg-[#d8426f] text-white text-sm font-semibold">Book Appointment</button></div>
        </>}
      </Modal>

      <Modal open={bookingOpen} onClose={()=>setBookingOpen(false)}>
        <div className="bg-gradient-to-r from-[#d8426f] to-[#b32753] text-white p-6"><button onClick={()=>setBookingOpen(false)} className="float-right"><Icon name="close"/></button><h3 className="text-2xl font-serif font-bold">Book Salon Appointment</h3><p className="text-xs text-pink-100 mt-1">Choose your treatment and preferred time.</p></div>
        <form onSubmit={e=>{e.preventDefault();createBooking(full)}} className="p-6 overflow-y-auto space-y-4">
          <div className="grid sm:grid-cols-2 gap-3"><input value={full.name} onChange={e=>setFull({...full,name:e.target.value})} placeholder="Your name" className="px-3 py-2.5 rounded-xl border text-xs"/><input value={full.phone} onChange={e=>setFull({...full,phone:e.target.value})} placeholder="Phone number" className="px-3 py-2.5 rounded-xl border text-xs"/></div>
          <select value={full.service} onChange={e=>setFull({...full,service:e.target.value})} className="w-full px-3 py-2.5 rounded-xl border text-xs"><option value="">Select a service</option>{services.map(s=><option key={s.id} value={s.id}>{s.title} — ₹{s.price}</option>)}</select>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3"><input type="date" min={today} value={full.date} onChange={e=>setFull({...full,date:e.target.value})} className="px-3 py-2 rounded-xl border text-xs"/><select value={full.stylist} onChange={e=>setFull({...full,stylist:e.target.value})} className="px-3 py-2 rounded-xl border text-xs"><option>Any Available Master Stylist</option><option>Priya Sharma (Senior Hair Stylist)</option><option>Ananya Roy (Skin Specialist)</option><option>Maya Mehra (Bridal Artist)</option></select></div>
          <div className="grid grid-cols-3 gap-2">{slots.map(([time])=><button type="button" key={time} onClick={()=>setFull({...full,time})} className={`time-slot-btn py-2 rounded-xl text-xs ${full.time===time?"selected":""}`}>{time}</button>)}</div>
          <textarea value={full.notes} onChange={e=>setFull({...full,notes:e.target.value})} placeholder="Special requests (optional)" rows="2" className="w-full px-3 py-2 rounded-xl border text-xs"/>
          <button type="submit" className="w-full py-3.5 rounded-xl bg-[#25D366] text-white font-bold text-sm">Continue to WhatsApp</button>
        </form>
      </Modal>

      <Modal open={appointmentsOpen} onClose={()=>setAppointmentsOpen(false)} wide>
        <div className="bg-gradient-to-r from-[#d8426f] to-[#b32753] text-white p-6"><button onClick={()=>setAppointmentsOpen(false)} className="float-right"><Icon name="close"/></button><h3 className="text-2xl font-serif font-bold">Your Booked Appointments</h3></div>
        <div className="p-6 overflow-y-auto space-y-4">
          {appointments.length===0?<p className="text-sm text-gray-500 text-center py-8">No appointments yet.</p>:appointments.map(a=><article key={a.id} className="border border-[#fae2e8] rounded-2xl p-4 flex flex-col sm:flex-row justify-between gap-3"><div><p className="font-bold">{a.serviceTitle}</p><p className="text-xs text-gray-500">{a.date} • {a.timeSlot}</p><p className="text-xs text-emerald-600 mt-1">{a.status}</p></div><button onClick={()=>setPass(a)} className="px-4 py-2 rounded-xl bg-[#fdf2f4] text-[#d8426f] text-xs font-semibold">View Pass</button></article>)}
        </div>
      </Modal>

      <Modal open={!!pass} onClose={()=>setPass(null)}>
        {pass&&<div className="p-6"><div className="text-center border-b border-dashed pb-5"><span className="text-[#d8426f] text-3xl">✿</span><h3 className="font-serif text-2xl font-bold">Kittu Beauty Parlour</h3><p className="text-xs text-gray-500">{address}</p></div><div className="py-5 space-y-2 text-sm"><p><strong>Booking ID:</strong> #{pass.id}</p><p><strong>Client:</strong> {pass.userName}</p><p><strong>Service:</strong> {pass.serviceTitle}</p><p><strong>Date:</strong> {pass.date}</p><p><strong>Time:</strong> {pass.timeSlot}</p><p><strong>Stylist:</strong> {pass.stylist}</p><p><strong>Price:</strong> ₹{pass.price}</p></div><button onClick={()=>window.print()} className="w-full py-3 rounded-xl bg-[#d8426f] text-white text-sm font-semibold no-print">Print Booking Pass</button></div>}
      </Modal>

      <Modal open={videoOpen} onClose={()=>setVideoOpen(false)} wide>
        <div className="p-4 bg-[#161214] text-white flex justify-between"><span className="font-serif">Virtual Tour</span><button onClick={()=>setVideoOpen(false)}><Icon name="close"/></button></div><video className="w-full aspect-video" controls autoPlay muted loop poster={referenceBannerImage}><source src="https://videos.pexels.com/video-files/7987790/7987790-hd_1920_1080_25fps.mp4" type="video/mp4"/></video>
      </Modal>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
