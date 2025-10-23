# 🚀 **QuickAi**

**QuickAi** is a **full-stack SaaS AI platform** built using the **PERN Stack** (PostgreSQL, Express.js, React.js, Node.js).  
It provides multiple **AI-powered features** such as text generation, image editing, and resume review — all in one place.  
Users can generate creative content, edit visuals, and manage their AI-generated assets through an **intuitive dashboard**.

🌐 **Live Demo:** [https://thequick-ai.vercel.app](https://thequick-ai.vercel.app)

---

## ⚡ **Key Features**

### 🧠 **AI Tools**
- ✍️ **Article Generation** – Generate full-length articles using AI.  
- 📰 **Blog Title Generator** – Get catchy titles for your next blog.  
- 🖼️ **Image Generation** – Create stunning AI-generated images.  
- 🪄 **Background Removal** – Remove background from any image in seconds.  
- 🎯 **Object Removal** – Effortlessly erase unwanted objects from images.  
- 📄 **Resume Review** – Get AI-based feedback and improvements for your resume.

### 🌍 **Community**
- Explore images published by users in the **Community** section.  
- Like and get inspired by others’ creations.

### 📊 **Dashboard**
- View your **Active Plan** – *Free* or *Premium*.  
- Access all your **past AI creations**.  
- Upgrade your plan for enhanced usage limits and exclusive tools.

---

## 🧩 **Tech Stack**

| **Category** | **Technology** |
|--------------|----------------|
| **Frontend** | React.js, Tailwind CSS |
| **Backend** | Node.js, Express.js |
| **Database** | PostgreSQL (via [Neon Database](https://neon.tech)) |
| **Authentication** | [Clerk](https://clerk.dev) |
| **Image Handling** | [Cloudinary](https://cloudinary.com) |
| **AI Models** | [Gemini API](https://ai.google.dev/gemini-api), [Clipdrop API](https://clipdrop.co/apis) |
| **Deployment** | [Vercel](https://vercel.com) |

---

## 💳 **Billing & Payments**
- Payments are handled through **Clerk Billing**.  
- Test **Premium features** using **test cards — completely free!**  
- Simply select **“Upgrade to Premium”** in the dashboard and follow instructions.

---

## 🧠 **How It Works**

1. **Sign up / Log in** via Clerk authentication.  
2. Choose an **AI tool** (e.g., Article Generator, Image Generator, Resume Review).  
3. Enter your **prompt** or **upload an image**.  
4. Click **Generate / Process** to see results.  
5. Save your results or **publish to the community**.  
6. Visit your **Dashboard** to view all past creations and plan status.

---

## 🧾 **Installation & Setup (For Developers)**

### 1️⃣ Clone the repository
```bash
git clone https://github.com/piyushchauhan8279/QuickAi.git
cd quickai
```

### 2️⃣ Install dependencies
```bash
npm run install-all   # If using client + server folders
# OR
npm install           # If running root-level packages
```

### 3️⃣ Configure environment variables
Create a `.env` file in the root directory:
```env
DATABASE_URL=your_neon_database_url
CLERK_SECRET_KEY=your_clerk_secret_key
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
GEMINI_API_KEY=your_gemini_api_key
```

### 4️⃣ Run the development server
```bash
npm run dev
```

---

## 🧑‍💻 **For Users**

Try QuickAi live:  
👉 [https://thequick-ai.vercel.app](https://thequick-ai.vercel.app)

### Steps:
1. **Sign up** using email or Google account.  
2. Explore **Free Plan features**.  
3. Upgrade to **Premium tools** using the **test card**:  
   - Card Number: `4242 4242 4242 4242`  
   - Expiry: Any future date  
   - CVC: Any 3 digits  
   - ZIP: Any 5 digits  
4. Explore **Dashboard** and **Community**.

---

## 🛡️ **Security & Data**
- Authentication and session management via **Clerk**.  
- Images securely uploaded using **Cloudinary**.  
- Database and sensitive operations handled securely with **Neon**.

---

## ❤️ **Acknowledgments**
- [Clerk.dev](https://clerk.dev) – Secure authentication  
- [Neon.tech](https://neon.tech) – Reliable PostgreSQL database  
- [Cloudinary](https://cloudinary.com) – Media handling  
- [Gemini AI](https://ai.google.dev/gemini-api) – AI content generation  
- [Vercel](https://vercel.com) – Hosting & deployment

---

> ✨ **QuickAi** — Your all-in-one AI companion for creativity, productivity, and innovation.
