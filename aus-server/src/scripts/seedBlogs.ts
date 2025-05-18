// scripts/seedBlogs.ts

import dotenv from 'dotenv';
dotenv.config();
console.log('URI =', process.env.MONGO_URI);


import mongoose from "mongoose";
import Blog from "../models/BlogModel";

const blogs = [
  {
    title: "5 Play‑Based Activities to Spark Your Toddler’s Curiosity at Home",
    content: `## Introduction
Play is the engine of early learning. At Nurture Childcare and Education Services, we believe that combining love, play, and vigilant care helps children grow intellectually, emotionally, and socially. Here are five simple, fun, and engaging activities you can try at home using everyday materials to boost your toddler’s curiosity and development.

### 1. Color‑Sort Treasure Hunt
**Materials:** Colored paper (red, blue, green, yellow), small toys or objects
**Steps:**
1. Cut paper into large circles or squares and place them around the room.  
2. Scatter matching colored toys or objects near each paper.  
3. Invite your child to find and place each toy on the correct color paper.  
**Learning Outcome:** Color recognition, categorization skills, fine motor development.

### 2. DIY Sensory Bottle
**Materials:** Empty clear plastic bottle, water, glitter, sequins, small beads
**Steps:**
1. Fill the bottle halfway with water.  
2. Add glitter, sequins, and beads.  
3. Top off with water, secure the cap (taped for safety), and let your child shake and watch the contents swirl.  
**Learning Outcome:** Sensory exploration, focus, calming proprioceptive input.

### 3. Story‑Builders
**Materials:** Index cards or cardstock, colored markers
**Steps:**
1. Draw simple images (house, sun, tree, ball) on separate cards.  
2. Spread cards face-up and ask your child to pick cards to tell a story.  
3. Help turn their sequence into a fun narrative.  
**Learning Outcome:** Early literacy, narrative skills, creativity.

### 4. Music & Movement Jam
**Materials:** Empty containers (rice in sealed bottles), pots and pans, spoons
**Steps:**
1. Fill small bottles with rice or beans.  
2. Provide pots, pans, and wooden spoons for drumming.  
3. Play a song and encourage your child to drum along or dance.  
**Learning Outcome:** Gross motor skills, rhythm awareness, self‑expression.

### 5. Nature‑Art Collage
**Materials:** Collected leaves, petals, small sticks, paper, glue
**Steps:**
1. Take a family walk to collect natural items.  
2. Arrange and glue them onto a sheet of paper in patterns or pictures.  
3. Talk about textures and colors as you craft.  
**Learning Outcome:** Fine motor skills, environmental awareness, sensory discovery.

**Wrap‑Up**  
Try one new activity each week and watch your toddler’s excitement and skills grow! Share your creations with our educators during your next visit or tag us on social media.`,
    tags: ["play", "early-learning", "toddler"],
    images:["/blog1.png"]
  },
  {
    title: "Why Family Day Care Beats the Rest: 4 Ways Nurture Feels Like Home",
    content: `## Introduction
Choosing the right childcare provider is about more than convenience—it’s about finding a home away from home where your child can thrive. At Nurture Childcare and Education Services, our family day care model delivers personalized attention, loving routines, and vigilant care that big centers just can’t match. Here’s how we create a nurturing environment that truly feels like home.

### 1. Personalized Attention in a Home‑Style Setting
With small groups and a comfortable, home-like atmosphere, our Family Day Care Educators get to know each child’s personality, strengths, and needs. This one-on-one time means stronger bonds and faster developmental progress compared to large, impersonal childcare centers.

### 2. Seamless Routines & Flexible Hours
Our schedules mirror your home routine—naps, meals, playtime, and quiet time happen at consistent, soothing intervals. Plus, we offer flexible hours to fit your family’s unique schedule, so you can focus on work without worrying about childcare conflicts.

### 3. Love‑Infused Curriculum
We integrate emotional learning into every activity, from sharing and empathy exercises during circle time to role-play games that foster social skills. Our educators blend structured lessons with free play, ensuring your child learns kindness and cooperation alongside letters and numbers.

### 4. A Truly Vigilant Care Team
Safety and well-being are our top priorities. All educators are highly trained, background-checked, and continuously upskilled in first aid and early childhood best practices. Our rigorous safety protocols mean you can trust us with your child’s everyday adventures.

**Call to Action**  
Ready to see the Nurture difference for yourself? Schedule a visit with our founder, James Andrews, or any of our dedicated educators. Stop by for a tour and experience the love, play, and care that set us apart!`,
    tags: ["family-care", "childcare", "education"],
    images: ["/blog2.png"],
  },
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    // Clear entire blogs collection
    await Blog.deleteMany({});
    console.log("Cleared existing blogs");

    // Insert only the two dummy blogs
    await Blog.insertMany(blogs);
    console.log("Inserted dummy blogs successfully");

    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seed();