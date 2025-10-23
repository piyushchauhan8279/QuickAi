🚀 QuickAi

QuickAi is a full-stack SaaS AI platform built using the PERN Stack (PostgreSQL, Express.js, React.js, Node.js).
It provides multiple AI-powered features such as text generation, image editing, and resume review — all in one place.
Users can generate creative content, edit visuals, and manage their AI-generated assets through an intuitive dashboard.

🌐 Live Demo: https://thequick-ai.vercel.app

⚡ Key Features
🧠 AI Tools

✍️ Article Generation – Generate full-length articles using AI.

📰 Blog Title Generator – Get catchy titles for your next blog.

🖼️ Image Generation – Create stunning AI-generated images.

🪄 Background Removal – Remove background from any image in seconds.

🎯 Object Removal – Effortlessly erase unwanted objects from images.

📄 Resume Review – Get AI-based feedback and improvements for your resume.

🌍 Community

Explore images published by users in the Community section.

Like and get inspired by others’ creations.

📊 Dashboard

View your Active Plan – Free or Premium.

Access all your past AI creations.

Upgrade your plan for enhanced usage limits and exclusive tools.

🧩 Tech Stack
Category	Technology
Frontend	React.js, Tailwind CSS
Backend	Node.js, Express.js
Database	PostgreSQL (via Neon Database
)
Authentication	Clerk

Image Handling	Cloudinary

AI Models	Gemini API
, Clipdrop API

Deployment	Vercel
💳 Billing & Payments

Payments are handled through Clerk Billing.

You can test the premium features using test cards — absolutely free!

Simply select “Upgrade to Premium” in the dashboard and follow the on-screen instructions.

🧠 How It Works

Sign up / Log in via Clerk authentication.

Choose an AI tool (e.g., Article Generator, Image Generator, Resume Review).

Enter your prompt or upload an image.

Click Generate / Process to see the magic happen.

Save your results or publish them to the community.

Visit your Dashboard to view all past creations or check your plan status.

🧾 Installation & Setup (For Developers)

If you want to run this project locally:

1️⃣ Clone the repository
git clone https://github.com/piyushchauhan8279/QuickAi.git
cd quickai

2️⃣ Install dependencies

If your project has separate client and server folders, use:

npm run install-all


(You can set this up using concurrently as explained in the root package.json)

Otherwise:

npm install

3️⃣ Configure environment variables

Create a .env file in the root directory and add the following keys:

DATABASE_URL=your_neon_database_url
CLERK_SECRET_KEY=your_clerk_secret_key
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
GEMINI_API_KEY=your_gemini_api_key

4️⃣ Run the development server
npm run dev

🧑‍💻 For Users

You can directly try QuickAi live:
👉 https://thequick-ai.vercel.app

Steps:

Sign up using your email or Google account.

Try out Free Plan features.

To unlock Premium tools, click on “Upgrade Plan”.

Use the test card for payments:

Card Number: 4242 4242 4242 4242

Expiry: Any future date

CVC: Any 3 digits

ZIP: Any 5 digits

Explore the Dashboard and Community sections!

🛡️ Security & Data

All user authentication and session handling are managed securely by Clerk.

Images are uploaded and stored securely using Cloudinary.

Database and sensitive operations are handled using Neon, with encryption and secure API endpoints.

❤️ Acknowledgments

Clerk.dev
 – For secure authentication

Neon.tech
 – For reliable PostgreSQL database

Cloudinary
 – For media handling

Gemini AI
 – For intelligent content generation

Vercel
 – For hosting and deployment

✨ QuickAi — Your all-in-one AI companion for creativity, productivity, and innovation.

Would you like me to also make a version with badges (like “Made with PERN”, “MIT License”, “Live Demo”) for a more GitHub-pro look at the top?
