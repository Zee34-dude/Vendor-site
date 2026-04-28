# Local Business MVP Ordering System

A simple, minimal MVP for a local business to take orders directly from customers via WhatsApp or a simple online form.

## 🚀 Features
- **Mobile-first Design:** Built with Tailwind CSS and Next.js App Router for a clean, app-like experience.
- **WhatsApp Integration:** Generates pre-filled WhatsApp messages for quick conversational ordering.
- **Form Submission:** Saves orders locally if the user prefers form submission.
- **Admin Dashboard:** A password-protected view (`/admin`) for staff to see and manage the status of incoming form orders.
- **Zero Configuration:** Uses local file system (`data/orders.json`) for data persistence. No database to set up.

## 📁 Folder Structure

```
├── app/
│   ├── admin/
│   │   └── page.tsx        # Business owner dashboard
│   ├── api/                # Next.js API Routes for the MVP
│   │   ├── auth/route.ts   # Simple password validation
│   │   └── orders/         # API to get, create, and update orders
│   ├── layout.tsx          # Main layout wrapping the minimal UI
│   ├── page.tsx            # Customer facing menu page
│   └── globals.css         # Tailwind and Custom CSS
├── lib/
│   ├── data.ts             # Hardcoded menu items and business configuration
│   ├── store.ts            # File system based database logic
│   └── types.ts            # TypeScript interfaces
├── data/
│   └── orders.json         # (Auto-generated) stores your form orders
└── tailwind.config.ts      # UI styling configuration
```

## 🛠️ Setup Instructions

### 1. Install Dependencies
Run the following command in the root of the project to install all required packages:
```bash
npm install
```

### 2. Configure Your Business
Open `lib/data.ts` and modify the top constants to reflect the actual business:
```typescript
export const BUSINESS_NAME = "Mama Zee's Kitchen";
export const BUSINESS_PHONE = "2348012345678"; // MUST NOT contain '+' or spaces
export const ADMIN_PASSWORD = "admin123";
// ... update the PRODUCTS array to match your catalogue
```

### 3. Run Locally
Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the outcome.

**To view the admin dashboard:**
Visit [http://localhost:3000/admin](http://localhost:3000/admin) and login with the password set in `ADMIN_PASSWORD`.
