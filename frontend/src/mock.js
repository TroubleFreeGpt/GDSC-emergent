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
  { rank: 1, name: "Alex Chen", coins: 2450, tier: "Diamond" },
  { rank: 2, name: "Sarah Martinez", coins: 2180, tier: "Diamond" },
  { rank: 3, name: "Jordan Lee", coins: 1920, tier: "Platinum" },
  { rank: 4, name: "Taylor Kim", coins: 1650, tier: "Platinum" },
  { rank: 5, name: "Morgan Blake", coins: 1380, tier: "Gold" }
];
