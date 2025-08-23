
# Smart Equipment Booking & Inventory System

## Problem Recap
Engineering labs, workshops, and makerspaces often manage bookings using messy spreadsheets or verbal agreements. This causes:  
- **Double-bookings** of machines  
- **No tracking** of consumables/tools  
- **Lack of accountability** for damaged or misused equipment  

This system digitizes and organizes equipment booking and inventory management, making the process efficient and scalable.  

---

## Core Features

### User Accounts & Authentication
- Roles:  
  - **Student/User** → Can view and book equipment  
  - **Lab Manager** → Approves/denies bookings, manages inventory  
  - **Admin** → Full control (users, managers, reports)  
- JWT authentication with role-based access control  
- Profile info includes: `name`, `ID`, `department`, `email`  

### Equipment Catalog
- Browse machines & tools  
- Equipment details page with:  
  - Description  
  - Usage guide (PDF/manual)  
  - Availability calendar  
  - Condition: `Available`, `Under Maintenance`, `In Repair`  
- “Add to Cart” → Users select items for booking (cart = pending reservation)  

### Booking & Reservation System
- Select date & timeslot for equipment  
- Backend checks conflicts before confirming booking  
- Manager approval required for restricted machines (e.g., CNC, laser cutter)  
- Booking states:  
- Pending → Approved → Active → Completed/Cancelled

### Approval Workflow
- Automatic approval for low-risk tools (e.g., soldering station)  
- Manual approval for sensitive/high-cost equipment  
- Managers can view and process pending requests  

### Inventory & Maintenance Tracking
- Equipment status: `Available`, `Reserved`, `Under Maintenance`  
- Consumables tracking:  
- Linked to machines (e.g., 3D printer filament stock)  
- Automatic low-stock alerts  
- Maintenance logs for each equipment item  

### Analytics Dashboard
- Equipment usage heatmap (most used machines, busiest times)  
- Consumables usage stats  
- Pending vs. completed bookings  
- Export reports (`CSV`, `PDF`)  

### Optional Add-ons
- Email/SMS reminders before booking time  
- QR code check-in/check-out for equipment  
- Penalty system for repeated no-shows/damages  
- AI-powered predictions for equipment demand  

---

## Tech Stack
- **Frontend**: React  
- Booking calendar  
- Equipment catalog with filters (availability, type)  
- Admin dashboard with analytics  
- **Backend**: Node.js + Express  
- Authentication API (JWT)  
- Booking management API  
- Equipment & inventory CRUD  
- **Database**: MongoDB  
- Stores users, bookings, equipment, consumables, maintenance logs  

---

## System Flow

### Booking Flow
1. User browses catalog → Adds equipment to cart  
2. Selects timeslot → Creates booking request  
3. If auto-approved → Booking confirmed  
4. If requires approval → Manager reviews → Approves/Rejects  
5. User receives confirmation and reminders  
6. At booking time → User checks in (optional QR scan)  

### Maintenance Flow
1. User reports issue → Creates maintenance log  
2. Equipment status changes to **Under Maintenance**  
3. Manager assigns repair → Updates log  
4. Once resolved → Status returns to **Available**  

### Analytics Flow
- System logs every booking and consumable usage  
- Admin dashboard displays aggregated data:  
- Equipment utilization rates  
- Popular machines  
- Peak booking hours  
- Consumables restock alerts  

---

## Why This Project Stands Out
- **CRUD-heavy**: Users, equipment, bookings, consumables, maintenance  
- **Role-based access**: Demonstrates advanced backend logic  
- **Real-world utility**: Relevant for makerspaces, labs, and universities  
- **Extendable**: Can scale into a SaaS platform with subscription tiers  
- **Strong UI/UX**: Interactive booking calendars and dashboards  
