// Mock data for GDSC EMU OctoDev Platform

export const stats = {
  members: 247,
  coinsRedeemed: 15420,
  projectsDeployed: 89,
  eventsHosted: 32
};

export const highlights = [
  {
    id: 1,
    title: "Weekly Coding Challenges",
    description: "Sharpen your skills with algorithm puzzles, CTF challenges, and timed competitions.",
    icon: "code"
  },
  {
    id: 2,
    title: "Hackathons",
    description: "Build real-world projects in 24-48 hours. Win prizes, earn coins, and ship products.",
    icon: "trophy"
  },
  {
    id: 3,
    title: "Mentorship",
    description: "Connect with industry professionals and senior devs. Get code reviews and career guidance.",
    icon: "users"
  },
  {
    id: 4,
    title: "Campus Projects",
    description: "Collaborate on open-source initiatives and tools that impact EMU students.",
    icon: "rocket"
  }
];

export const events = [
  {
    id: 1,
    title: "HackEMU 2025",
    type: "Hackathon",
    date: "2025-03-15",
    time: "9:00 AM - 9:00 PM",
    location: "Student Center, EMU",
    description: "24-hour hackathon where teams build solutions for campus challenges. Win up to 500 GDSC coins and exclusive swag.",
    coins: 500,
    spotsLeft: 45,
    totalSpots: 100,
    difficulty: "All Levels",
    tags: ["Hackathon", "Team Event", "Prizes"]
  },
  {
    id: 2,
    title: "React Mastery Workshop",
    type: "Workshop",
    date: "2025-02-20",
    time: "6:00 PM - 8:00 PM",
    location: "Sill Hall Lab 204",
    description: "Deep dive into React hooks, context, and performance optimization. Build a real-time chat app.",
    coins: 100,
    spotsLeft: 12,
    totalSpots: 30,
    difficulty: "Intermediate",
    tags: ["Workshop", "Frontend", "Hands-on"]
  },
  {
    id: 3,
    title: "Algorithm Arena",
    type: "Challenge",
    date: "2025-02-10",
    time: "7:00 PM - 9:00 PM",
    location: "Online (Discord)",
    description: "Weekly competitive programming challenge. Solve 5 problems in 2 hours. Top 10 earn bonus coins.",
    coins: 50,
    spotsLeft: null,
    totalSpots: null,
    difficulty: "Advanced",
    tags: ["Challenge", "Competitive", "Online"]
  },
  {
    id: 4,
    title: "Cloud Computing 101",
    type: "Workshop",
    date: "2025-02-25",
    time: "5:00 PM - 7:00 PM",
    location: "Pray-Harrold 301",
    description: "Introduction to AWS, GCP, and Azure. Deploy your first containerized app and learn CI/CD basics.",
    coins: 100,
    spotsLeft: 22,
    totalSpots: 40,
    difficulty: "Beginner",
    tags: ["Workshop", "Cloud", "DevOps"]
  },
  {
    id: 5,
    title: "AI/ML Project Showcase",
    type: "Hackathon",
    date: "2025-03-01",
    time: "1:00 PM - 6:00 PM",
    location: "Halle Library Atrium",
    description: "Present your AI/ML projects to judges and peers. Categories: Computer Vision, NLP, and Data Science.",
    coins: 300,
    spotsLeft: 18,
    totalSpots: 50,
    difficulty: "Advanced",
    tags: ["Hackathon", "AI/ML", "Showcase"]
  },
  {
    id: 6,
    title: "Git & GitHub Bootcamp",
    type: "Workshop",
    date: "2025-02-12",
    time: "4:00 PM - 6:00 PM",
    location: "Marshall Building 301",
    description: "Master version control, branching strategies, pull requests, and open-source contribution workflows.",
    coins: 75,
    spotsLeft: 8,
    totalSpots: 25,
    difficulty: "Beginner",
    tags: ["Workshop", "Git", "Fundamentals"]
  },
  {
    id: 7,
    title: "CTF: Capture The Flag",
    type: "Challenge",
    date: "2025-02-18",
    time: "8:00 PM - 11:00 PM",
    location: "Online (Platform TBA)",
    description: "Cybersecurity challenge covering web exploits, cryptography, and reverse engineering. Prizes for top 5.",
    coins: 200,
    spotsLeft: null,
    totalSpots: null,
    difficulty: "Advanced",
    tags: ["Challenge", "Security", "Online"]
  },
  {
    id: 8,
    title: "Mobile Dev with Flutter",
    type: "Workshop",
    date: "2025-03-05",
    time: "6:00 PM - 9:00 PM",
    location: "Strong Hall 215",
    description: "Build cross-platform mobile apps with Flutter and Dart. Create and deploy your first app to the store.",
    coins: 120,
    spotsLeft: 15,
    totalSpots: 35,
    difficulty: "Intermediate",
    tags: ["Workshop", "Mobile", "Flutter"]
  }
];

export const leaderboard = [
  { rank: 1, name: "Alex Chen", coins: 2450, tier: "Diamond", avatar: "AC" },
  { rank: 2, name: "Sarah Martinez", coins: 2180, tier: "Diamond", avatar: "SM" },
  { rank: 3, name: "Jordan Lee", coins: 1920, tier: "Platinum", avatar: "JL" },
  { rank: 4, name: "Taylor Kim", coins: 1650, tier: "Platinum", avatar: "TK" },
  { rank: 5, name: "Morgan Blake", coins: 1380, tier: "Gold", avatar: "MB" },
  { rank: 6, name: "Chris Parker", coins: 1120, tier: "Gold", avatar: "CP" },
  { rank: 7, name: "Jamie Wilson", coins: 890, tier: "Silver", avatar: "JW" },
  { rank: 8, name: "Riley Davis", coins: 720, tier: "Silver", avatar: "RD" },
  { rank: 9, name: "Cameron Singh", coins: 540, tier: "Bronze", avatar: "CS" },
  { rank: 10, name: "Avery Johnson", coins: 380, tier: "Bronze", avatar: "AJ" }
];

// Current logged-in student data
export const currentStudent = {
  id: 1,
  name: "Alex Chen",
  email: "alex.chen@emich.edu",
  avatar: "AC",
  coins: 2450,
  tier: "Diamond",
  xp: 8750,
  nextTierXP: 10000,
  eventsAttended: 12,
  challengesCompleted: 28,
  projectsDeployed: 5,
  joinedDate: "2024-09-01"
};

// Challenges data
export const challenges = [
  {
    id: 1,
    title: "Binary Search Master",
    description: "Implement binary search in 3 different languages",
    difficulty: "Intermediate",
    coins: 150,
    xp: 300,
    status: "completed",
    deadline: "2025-02-15",
    category: "Algorithms"
  },
  {
    id: 2,
    title: "REST API Builder",
    description: "Create a complete REST API with authentication",
    difficulty: "Advanced",
    coins: 300,
    xp: 600,
    status: "in-progress",
    deadline: "2025-02-28",
    category: "Backend"
  },
  {
    id: 3,
    title: "CSS Animation Showcase",
    description: "Build 5 smooth CSS animations without libraries",
    difficulty: "Beginner",
    coins: 100,
    xp: 200,
    status: "not-started",
    deadline: "2025-02-20",
    category: "Frontend"
  },
  {
    id: 4,
    title: "Docker Deployment",
    description: "Containerize and deploy a full-stack app",
    difficulty: "Advanced",
    coins: 250,
    xp: 500,
    status: "not-started",
    deadline: "2025-03-05",
    category: "DevOps"
  },
  {
    id: 5,
    title: "Machine Learning Basics",
    description: "Train your first ML model with Python",
    difficulty: "Intermediate",
    coins: 200,
    xp: 400,
    status: "in-progress",
    deadline: "2025-03-10",
    category: "AI/ML"
  }
];

// Shop products
export const products = [
  {
    id: 1,
    name: "GDSC T-Shirt",
    description: "Official GDSC EMU black tee with OctoDev logo",
    price: 500,
    stock: 24,
    image: "https://via.placeholder.com/300x300/0C1F3F/4C83FF?text=GDSC+Tee",
    category: "Apparel",
    popularity: 95
  },
  {
    id: 2,
    name: "Laptop Sticker Pack",
    description: "10 holographic stickers featuring OctoDev and Google colors",
    price: 150,
    stock: 50,
    image: "https://via.placeholder.com/300x300/0C1F3F/00FF9C?text=Stickers",
    category: "Accessories",
    popularity: 88
  },
  {
    id: 3,
    name: "Priority Event Access",
    description: "Skip the waitlist for the next 3 workshops",
    price: 300,
    stock: 15,
    image: "https://via.placeholder.com/300x300/0C1F3F/FBBC04?text=Priority+Pass",
    category: "Perks",
    popularity: 92
  },
  {
    id: 4,
    name: "GDSC Hoodie",
    description: "Premium navy hoodie with embroidered OctoDev",
    price: 800,
    stock: 12,
    image: "https://via.placeholder.com/300x300/0C1F3F/4285F4?text=Hoodie",
    category: "Apparel",
    popularity: 98
  },
  {
    id: 5,
    name: "1-on-1 Mentorship Session",
    description: "60-minute code review with industry professional",
    price: 400,
    stock: 8,
    image: "https://via.placeholder.com/300x300/0C1F3F/34A853?text=Mentorship",
    category: "Perks",
    popularity: 85
  },
  {
    id: 6,
    name: "Mechanical Keyboard",
    description: "RGB mechanical keyboard with custom GDSC keycaps",
    price: 1200,
    stock: 5,
    image: "https://via.placeholder.com/300x300/0C1F3F/EA4335?text=Keyboard",
    category: "Tech",
    popularity: 90
  },
  {
    id: 7,
    name: "GitHub Pro 1 Year",
    description: "Free GitHub Pro subscription for 12 months",
    price: 250,
    stock: 20,
    image: "https://via.placeholder.com/300x300/0C1F3F/4C83FF?text=GitHub+Pro",
    category: "Perks",
    popularity: 87
  },
  {
    id: 8,
    name: "Custom Domain",
    description: ".dev domain registration for your portfolio",
    price: 180,
    stock: 30,
    image: "https://via.placeholder.com/300x300/0C1F3F/00FF9C?text=.dev+Domain",
    category: "Perks",
    popularity: 79
  }
];

// Coin transactions
export const coinTransactions = [
  {
    id: 1,
    type: "earned",
    amount: 150,
    description: "Completed Binary Search Master challenge",
    date: "2025-02-10",
    balance: 2450
  },
  {
    id: 2,
    type: "spent",
    amount: -500,
    description: "Redeemed GDSC T-Shirt",
    date: "2025-02-08",
    balance: 2300
  },
  {
    id: 3,
    type: "earned",
    amount: 100,
    description: "Attended React Mastery Workshop",
    date: "2025-02-05",
    balance: 2800
  },
  {
    id: 4,
    type: "earned",
    amount: 50,
    description: "Algorithm Arena Challenge (Top 10)",
    date: "2025-02-02",
    balance: 2700
  },
  {
    id: 5,
    type: "spent",
    amount: -300,
    description: "Purchased Priority Event Access",
    date: "2025-01-28",
    balance: 2650
  }
];

// Admin stats
export const adminStats = {
  totalStudents: 247,
  activeEvents: 8,
  totalCoinsIssued: 324500,
  challengesActive: 12,
  shopItemsSold: 156,
  averageAttendance: 78
};

// Recent admin actions
export const recentActions = [
  {
    id: 1,
    admin: "Dr. Smith",
    action: "Added new challenge: Docker Deployment",
    timestamp: "2025-02-15 14:30",
    type: "challenge"
  },
  {
    id: 2,
    admin: "Prof. Johnson",
    action: "Updated HackEMU 2025 event details",
    timestamp: "2025-02-15 11:20",
    type: "event"
  },
  {
    id: 3,
    admin: "Dr. Smith",
    action: "Awarded 50 bonus coins to top 10 students",
    timestamp: "2025-02-14 16:45",
    type: "coins"
  },
  {
    id: 4,
    admin: "Prof. Lee",
    action: "Added new shop item: Mechanical Keyboard",
    timestamp: "2025-02-14 09:15",
    type: "shop"
  },
  {
    id: 5,
    admin: "Dr. Smith",
    action: "Approved 15 new student registrations",
    timestamp: "2025-02-13 13:00",
    type: "students"
  }
];

// Purchase history
export const purchaseHistory = [
  {
    id: 1,
    productName: "GDSC T-Shirt",
    coins: 500,
    date: "2025-02-08",
    status: "Delivered"
  },
  {
    id: 2,
    productName: "Priority Event Access",
    coins: 300,
    date: "2025-01-28",
    status: "Active"
  },
  {
    id: 3,
    productName: "Laptop Sticker Pack",
    coins: 150,
    date: "2025-01-15",
    status: "Delivered"
  }
];
