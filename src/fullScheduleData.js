import insta from "./Components/icons/instaGray.png";
import twitter from "./Components/icons/twitterGray.png";
import linkedIn from "./Components/icons/linkedGray.png";
import Aj from "./Components/SpeakerImgs/Aj.png";
import Alejandrina from "./Components/SpeakerImgs/Alejandrina.png";
import Alex from "./Components/SpeakerImgs/Alex.png";
import Alon from "./Components/SpeakerImgs/Alon.jpg";
import Angela from "./Components/SpeakerImgs/Angela.jpg";
import Brandi from "./Components/SpeakerImgs/Brandi.jpg";
import Charu from "./Components/SpeakerImgs/Charu.jpeg";
import Chloe from "./Components/SpeakerImgs/Chloe.png";
import Dora from "./Components/SpeakerImgs/Dora.png";
import Gefen from "./Components/SpeakerImgs/Gefen.png";
import Grace from "./Components/SpeakerImgs/Grace.png";
import Kevin from "./Components/SpeakerImgs/Kevin.png";
import Kim from "./Components/SpeakerImgs/Kim.jpg";
import Muazma from "./Components/SpeakerImgs/Muazma.png";
import Nagela from "./Components/SpeakerImgs/Nagela.png";
import Nicolas from "./Components/SpeakerImgs/Nicolas.png";
import Rahul from "./Components/SpeakerImgs/Rahul.jpeg";
import Raksha from "./Components/SpeakerImgs/Raksha.png";
import Rupal from "./Components/SpeakerImgs/Rupal.png";

import logo from "./logo.svg";

const fullScheduleData = [
    {
        id: 1,
        time: "August 8: 10:00AM - 10:30AM PST",
        title: "Keynote",
        location: "Stage",
        speaker: "Muazma Zahid - Senior Engineering Manager at Microsoft Azure",
        img: Muazma,
        bio: "Muazma Zahid is a Senior Engineering Manager at Microsoft Azure, where she enables customers to deploy the most demanding Data workloads on Azure. She has been a Data Engineer/Architect and Speaker for over thirteen years working on several Big Data, Cloud Computing, and AI Technologies. She is an active researcher in biomedical engineering and her research software is used in EKG machines all around the world. Muazma is an advocate of diversity and inclusion. She is President of non-profit organization Pakistani Women in Computing which is on a mission to build a strong global network of Pakistani women in technology and allies to foster the community’s growth through meaningful connections and learning opportunities. She has led several programs for AnitaB.org and currently leads the AnitaB.org Seattle community. She is also a leader at Women Who Code and Women at Microsoft. ",
        socials1: linkedIn,
        url1: "https://www.linkedin.com/in/muazmazahid/",
        socials2: twitter,
        url2: "https://twitter.com/MuazmaZahid"
    },
    {
        id: 2,
        time: "August 8: 10:30 - 11:15 AM PST",
        title: "Creative Coding in Python",
        location: "Sessions",
        speaker: "Dora Palfi - Co-founder & CEO of imagiLabs",
        img: Dora,
        bio: "Dora is the co-founder and CEO of imagiLabs, an edtech company creating fun and easy to get started with gadgets to make programming more relevant and welcoming for teenage girls! She has a Bachelor's degree in Neuroscience with a minor in Computer Science from New York University Abu Dhabi and has studied Human Computer Interaction at KTH. She has worked as a developer at Morgan Stanley and as a UX Designer at Cisco. She has years of experience teaching programming to children and teenagers as well as advocating for women in technology. True to her name Dora (as the explorer) has lived, studied and volunteered in 10 countries across 4 continents over the past 7 years. She is originally Hungarian. Along with working to bring technology closer to girls, Dora also works as a yoga teacher - bringing mindfulness closer to engineers. In 2020 Dora was named as a Cartier Women's Initiative Fellow as well as selected for Forbes’ Hungary’s 30 under 30 list.",
        prereq: "the imagiLabs app (download here)",
        description: "We will use the imagiLabs app - everyone will be able to code on their phones / tablets (potentially also use our beta webapp) to create different designs using fundamental programming concepts. You can check out this video from 26 minutes to know what to expect: https://www.youtube.com/watch?v=E0hQYAze3wY&feature=youtu.be&t=1554",
        socials1: linkedIn,
        url1: "https://www.linkedin.com/in/dorapalfi"
    },
    {
        id: 3,
        time: "August 8: 10:30 - 11:30 AM PST",
        title: "API 101 - How to get started with APIs",
        location: "Sessions",
        speaker: "Nicolas Grenié - Developer Advocate at Typeform",
        img: Nicolas,
        bio: "Nicolas is Developer Advocate at Typeform, helping developers build crazy things and be creative with APIs.",
        prereq: "Laptop, Internet, Postman (https://postman.co/)",
        description: "We will discuss what APIs are, which type of APIs are out there, how to call APIs, how to deal with oauth, and how to use webhooks. Participants should have a better understanding of this topic, and be ready to hack things after going through some examples :)",
        socials1: linkedIn,
        url1: "https://www.linkedin.com/in/nicolasgrenie/"
    },
    {
        id: 4,
        time: "August 8: 11:30 AM - 12:15 PM PST",
        title: "Guess the Number: Intro to iOS Development with SwiftUI",
        location: "Sessions",
        speaker: "Alejandrina Patrón López - iOS Software Engineer at Google",
        img: Alejandrina,
        bio: "My name's Alejandrina, but people call me Alep. I was born in Mexico and lived there until 2014 when I moved to Atlanta to pursue a degree in Computer Science. I graduated in 2018 and joined Google as a Software Engineer; I'm currently working on new features for Google Search on iOS. Besides iOS development, I enjoy running, reading, eating and drinking coffee ☕️.",
        prereq: "An Apple computer with the Xcode 11.0+ installed",
        description: "The workshop will consist of building a simple 'Guess the Number Game' app using SwiftUI, Apple's latest app development framework. The workshop will also cover a short overview of Model–view–viewmodel (MVVM), the preferred architecture used in SwiftUI.",
        socials1: linkedIn,
        url1: "https://www.linkedin.com/in/alejandrinapatron/"
    },
    {
        id: 5,
        time: "August 8: 12:00 PM - 1:00 PM PST",
        title: "How React.js can Help You Succeed in Spectra",
        location: "Sessions",
        speaker: "Kevin Vuong - Incoming Product Engineering Intern at Intel",
        img: Kevin,
        bio: "Kevin is a rising senior studying computer science and statistics at UC Davis, and will be a product engineering intern at Intel this fall. He is really passionate about product management and finds great joy in bringing people's diverse talents together to produce products that provide maximum impact to people. His latest passion project is Dawn, a soon-to-be student-run nonprofit organization dedicated to empowering social advocacy with the power of modern technology. In his free time, he loves to watch Broadway musicals, travel and sing karaoke (all pre-COVID!).",
        prereq: "Internet connection, ideally a React project set up via create-react-app",
        description: "Whether you aim to win 'best mobile hack' or are just here to learn, this workshop will help you plan your hackathon and tailor your experience to your goals. Attendees will also be introduced to React.js, a powerful library that will help you develop dynamic user interfaces and impress your hackathon judges.",
        socials1: linkedIn,
        url1: "https://linkedin.com/in/gefenskolnick"
    },
    {
        id: 6,
        time: "August 8: 12:15 - 1:00 PM PST",
        title: "Build a Cloud-Connected AR/VR App in 15 Minutes or Less",
        location: "Google Meets link",
        speaker: "Alon Grinshpoon - CEO of echoAR, Inc.",
        img: Alon,
        bio: "Alon Grinshpoon is the CEO and founder of echoAR (www.echoAR.xyz), a cloud platform for augmented reality (AR) and virtual reality (VR) that provides tools and network infrastructure to help developers & companies quickly build and deploy AR/VR apps and content. Alon received his MSc in computer science from Columbia University specializing in computer graphics, virtual and augmented reality, and human-computer interaction. Alon received his BSc in computer science and electrical engineering from Tel Aviv University specializing in software engineering, computer networks and cyber security. Alon is a former Mellanox engineer, graduate researcher at the Computer Graphics and User Interfaces Laboratory of Columbia University, and research and teaching assistant in the fields of computer networks and distributed cloud networks. Alon is a Techstars alum, NYC Media Lab alum, a Startup Leadership Program (SLP) fellow, and member of the Virtual World Society. Alon is a speaker on emerging technologies and has given talks at major AR/VR tech conferences in the US and Israel.",
        prereq: "None, but check out echoAR’s website here",
        description: "The workshop will show how to quickly create AR/VR apps with no technical skills or coding required and scale existing apps by connecting them to the cloud. Workshop participants will learn how to create real-time cloud-connected augmented and virtual reality (AR/VR) apps using the echoAR platform. Participants are encouraged to bring a laptop and an Android phone, or just follow along the live demonstration. Platforms for experimentation include: Google ARCore, WebXR, Vuforia, Unity-based apps, and more.",
        socials1: linkedIn,
        url1: "https://www.linkedin.com/in/alongrinshpoon/"
    },
    {
        id: 7,
        time: "August 8: 1:15 - 2:00 PM PST",
        title: "Designing Systems for Cognitive Enhancement",
        location: "Sessions",
        speaker: "Angela Vujic - PhD/Graduate Research Assistant at MIT Media Lab",
        img: Angela,
        bio: "Angela Vujic is a PHD researcher at the MIT Media Lab. She works at the intersection of computer science, neuroscience and design to develop biosensing technology for mental and emotional health. Motivated by discoveries linking gut health to mental health, Angela seeks to start a new area in her field coined gut-brain computer interfacing (GBCI). She developed and is testing a GBCI that could enable individuals to sense and modulate their gut state, with the goal of connecting it to their mental wellbeing. Previously, she completed her bachelor’s in computer science at Georgia Tech and was part of the GT BrainLab. She invented MoodLens, novel fiber optic display integrated in brainwave-sensing glasses, built to help individuals with severe paralysis express emotion via eye contact. She has presented internationally, first-authored prestigious peer-reviewed publications, and won multiple awards for her work.",
        prereq: "Just an Internet connection!",
        description: "While today's pervasive digital devices put the world’s information at our fingertips, they do not help us with some of the cognitive skills that are arguably more important to leading a successful life, such as motivation, attention, memory, creativity, and emotion regulation. I will discuss research from my group, Fluid Interfaces. We aim to create new opportunities for enhancing cognitive skills in compact, wearable form factors, that consider the individual and real-life solutions and interventions. Our work is highly interdisciplinary and combines insights and methods from human computer interaction, sensor technologies, machine learning, brain-computer interfaces, psychology, and neuroscience. We will discuss the motivation, design, implementation and ethics of cognitive enhancement.",
        socials1: linkedIn,
        url1: "https://www.linkedin.com/in/angela-vujic/"
    },
    {
        id: 8,
        time: "August 8: 2:30 - 3:15 PM PST",
        title: "An Intro to Android App Development",
        location: "Sessions",
        speaker: "Rahul Pandey - Android Engineer at Facebook & Lecturer at Stanford",
        img: Rahul,
        bio: "Rahul is an Android engineer and teacher. He works at Facebook and lectures at Stanford, where he teaches an Android class.",
        prereq: "Android Studio, plus an Android emulator or phone. Here's the setup guide: https://youtu.be/KU-Hcl7QS44",
        description: "Everything you need to know to build your own interactive Android apps! We'll cover the fundamentals of events, images, and multi-screen apps. Recommended to have installed the necessary software *before* the workshop: https://youtu.be/KU-Hcl7QS44",
        socials1: linkedIn,
        url1: "https://www.linkedin.com/in/rpandey1234/"
    },
    {
        id: 9,
        time: "August 8: 3:30 - 4:15 PM PST",
        title: "Data Science 101: How to Build a Predictive Model Using R",
        location: "Sessions",
        speaker: "Rupal Mehta - MBA Candidate at The University of Texas at Dallas",
        img: Rupal,
        bio: "Rupal was born and raised in Houston, TX and currently lives in Dallas to pursue her MBA and MS in Business Analytics at The University of Texas at Dallas. She graduated from the University of Houston in 2016 with a degree in Public Relations. After graduation, Rupal worked as a public relations specialist at Harris Health System before joining Uber as their Brand Ambassador Manager. She was responsible for creating Uber Eats’ first-ever college brand ambassador program, which piloted in Houston and Austin. Rupal then took her talents to Seattle, Washington, where she worked for two early to mid-stage startups within customer success and marketing, Flyhomes and Icertis, respectively. Rupal returned to Texas to expand her network and expertise in Marketing and Business Analytics, which is why she chose UT Dallas MBA for her dual degree program. You can take the girl out of Texas, but you can’t take Texas out of the girl!",
        prereq: "RStudio, if you want to poke around with the files I share during the workshop.",
        description: "I plan on covering the basics of R, how it is applicable in today's tech scene and how simple it can be to learn once you get the foundations down. I will be showing a demo of basic data mining and then creating a predictive model based on a few different algorithmic methods. Participants will be able to see the simplicity of R and walk away with resources to learn the language on their own.",
        socials1: linkedIn,
        url1: "https://www.linkedin.com/in/rupalmehtatx/"
    },
    {
        id: 10,
        time: "August 8: 4:30 - 5:30 PM PST",
        title: "Panel on Diversity and Inclusion in Tech",
        location: "Stage",
        speaker: "Raksha Muthukumar - Software Engineer at Google",
        img: Raksha,
        bio: "Raksha is a technologist, organizer, and storyteller. She's been a progressive activist since 2011 and has brought that passion with her as she entered the world of technology. She is currently an organizer with NYC-DSA's Tech Action group, committed to promoting progressive technology policy in New York.",
        socials1: linkedIn,
        url1: "https://www.linkedin.com/in/rakshamuth",

        speaker3: "AJ Williams - Enterprise Support Specialist at Stripe",
        img3: Aj,
        bio3: "Hi, I'm AJ! I work both as a product specialist with our Enterprise users and as a Global Lead to our Black Community ERG at Stripe. I'm passionate about proactive strategies: I love a good preemptive beta product, forward thinking policy decisions, and projects that aim to permanently elevate BIPoC voices, career goals, and recognition. In my spare time? SoundCloud rappers, plants, bad(?) TV",
        socials3: linkedIn,
        url5: "https://www.linkedin.com/in/alexis-joi-williams/",

        speaker2: "Nagela Nukuna - Dual Degree Graduate Student (MPP/MBA) at HKS/MIT Sloan",
        img2: Nagela,
        bio2: "Nagela Nukuna is a Joint Degree student at the Harvard Kennedy School and the MIT Sloan School of Management. She attended Georgia Tech for her undergraduate degree, where she studied Industrial Engineering. It was during that time that she rekindled her passion for serving her community through leadership. During her Senior Year, she served as Student Body President, working on a range of issues, from sexual assault on campus to higher education access for different communities. After working in the Tech after college, Nagela wanted to recommit to her passion of serving others, using leadership and innovation to drive social change. In practice, Nagela is passionate about removing structural barriers and opening opportunities up for marginalized but highly talented youth. She now is focused on developing scalable solutions for social policies, and designing more equitable systems in our world today.",
        socials2: linkedIn,
        url4: "https://www.linkedin.com/in/nagelanukuna/",

        speaker4: "Brandi Van de Houten - Software Engineer II at Microsoft",
        img4: Brandi,
        bio4: "I am a software engineer working on engineering fundamentals for OneDrive and SharePoint at Microsoft. I have been at Microsoft since graduating from Georgia Tech in 2017. As part of the LGBTQI+ community, I have been actively working to improve the diversity and inclusion on my team through organized meetings and talks.",
        socials4: linkedIn,
        url6: "https://www.linkedin.com/in/brandi-van-de-houten-1012a063/",

    },
    {
        id: 11,
        time: "August 8: 5:30 - 6:00 PM PST",
        title: "Navigating Non-Software Engineering Roles in Tech",
        location: "Sessions",
        speaker: "Nagela Nukuna - Dual Degree Graduate Student (MPP/MBA) at HKS/MIT Sloan",
        img: Nagela,
        bio: "Nagela Nukuna is a Joint Degree student at the Harvard Kennedy School and the MIT Sloan School of Management. She attended Georgia Tech for her undergraduate degree, where she studied Industrial Engineering. It was during that time that she rekindled her passion for serving her community through leadership. During her Senior Year, she served as Student Body President, working on a range of issues, from sexual assault on campus to higher education access for different communities. After working in the Tech after college, Nagela wanted to recommit to her passion of serving others, using leadership and innovation to drive social change. In practice, Nagela is passionate about removing structural barriers and opening opportunities up for marginalized but highly talented youth. She now is focused on developing scalable solutions for social policies, and designing more equitable systems in our world today.",
        prereq: "Nothing needed besides enthusiasm!",
        description: "During my time at Google (in my first role), I worked on the Systems and Data team in their HR division. I learned how data and systems were developed for the hiring process, and it shed light into the *numerous* roles available in Tech that are non-SWE (colloquially referred to as 'non-Tech', which is somewhat misleading). This workshop will cover best practices to applying to Tech companies (especially for non-SWE/SRE roles), what roles exist beyond coding roles, what they should be looking for and highlighting on resumes and in interviews, best ways to prepare for non-technical interviews, common myths, roadblocks in the process and how to mitigate them, thinking through how to advocate for yourself with pay (literally there are so many topics to cover), etc.",
        socials1: linkedIn,
        url1: "https://www.linkedin.com/in/nagelanukuna/"
    },
    {
        id: 12,
        time: "August 9: 10:00 - 10:30 AM PST",
        title: "Prototyping Wearable Computers",
        location: "Sessions",
        speaker: "Charu Thomas - CEO of Oculogx",
        img: Charu,
        bio: "Charu Thomas is the Founder of Oculogx. Oculogx builds tech that makes order fulfillment more efficient. Oculogx customers include companies like Google, Walmart, and Newell Brands. Prior to founding Oculogx, she was an internationally awarded Wearable Computing researcher from Georgia Tech’s #1 Industrial Engineering program. Her work has been recognized by premier institutions like Microsoft, the USPTO, and ACM and she has been featured in top-tier publications like Forbes, Business Insider and TechCrunch.",
        prereq: "Ideally, participants would have some hardware basics: arduinos and wires are helpful. If you have access to a 3D printer, that would be amazing.",
        description: "The design process for wearable computers. How do you go from idea to prototype? How do you iterate and test? I will also be sharing some wearables I and close friends have designed and the process.",
        socials1: linkedIn,
        url1: "https://www.linkedin.com/in/charuthomas/"
    },
    {
        id: 13,
        time: "August 9: 10:30 - 11:30 AM PST",
        title: "Going Beyond the Data: Storytelling for the Professional World",
        location: "Sessions",
        speaker: "Alex Berry - Career Coach & Community Facilitator at Chocolate Milk Diplomacy",
        img: Alex,
        bio: "W. R. Alex Berry (call him Alex) is a Portland-based Technical Program Manager within Intel’s Global Supply Chain. He combines his corporate experience from four industries (chemical, forestry, pharmaceutical, and manufacturing), his nonprofit leadership, and his global travels to build bridges between the public and private sectors. After graduating from Georgia Tech with a B.S. in Industrial & Systems Engineering and a dual Business/Mandarin minor, Alex has dedicated the last five years to creating sustainable programming at the intersection of technology, business, and societal impact. With this in mind, Alex created a social business (Chocolate Milk Diplomacy - #CMD) that empowers underserved and marginalized communities with the career development support they need. His black-owned business works with students, early career professionals, and career changers on resumes and cover letters, skill mapping, interview preparation, career navigation, and more! After work, you can find Alex leading within the community - collaborating with nonprofits that support minorities, first-gen students, and those facing homelessness. A true introvert, Alex recharges by playing soccer, watching anime, and drinking chocolate milk! Alex and #CMD would love to connect with you!",
        prereq: "Just a computer! I will prepare and digitize all materials ahead of time. Will also give any attendees free access to my company's career development resources",
        description: "A facilitated conversation all about some best practices in story telling and how that applies to your resume, interviewing, and career transitions. Participants will learn about structuring interview stories, turning trauma narratives into resilience epics, and crafting branding statements.",
        socials1: linkedIn,
        url1: "https://www.linkedin.com/in/alexberrycmd/"
    },
    {
        id: 14,
        time: "August 9: 11:30 AM - 12:15 PM PST",
        title: "Foundations of Brand and Marketing Strategy for Technologists",
        location: "Sessions",
        speaker: "Chloe Belangia - Corporate Communications Specialist at LiveRamp; Founder & Creative Director of Place & Passage",
        img: Chloe,
        bio: "Chloe Belangia is the Founder and Creative Director of Place & Passage, a newly launched network of digital platforms to educate and empower young professionals. Former TEDx organizer, self-development junkie, and advocate for deep chats over cheap wine, Chloe started Place & Passage and subsequent podcast, Passages, out of her passion to share stories, education, and empowerment for ambitious young millennials and the entrepreneurially minded. Besides her side hustles in writing, photography, and media, Chloe currently works as a Corporate Communications Specialist for LiveRamp, the leading data connectivity platform for brands and their partners. Chloe holds a B.S. in Computational Media and Marketing certificate from the Georgia Institute of Technology, where she specialized in Interaction Design, Experimental Media, Consumer Behavior and Digital Brand Strategy. Chloe lives and works in San Francisco, California.",
        prereq: "Pen & paper :) I'd love to get creative and have participants write & draw",
        description: "Define and build a brand identity for products and technology, Marketing research and strategy 101, How to connect your brand story and mission with media and digital platforms.",
        socials1: linkedIn,
        url1: "https://www.linkedin.com/in/chloebelangia/"
    },
    {
        id: 15,
        time: "August 9: 12:15 - 1:00 PM PST",
        title: "Product Management Workshop",
        location: "Sessions",
        speaker: "Gefen Skolnick - Founder of Couplet Coffee and former PM at Tesla, Hulu, and Mend",
        img: Gefen,
        bio: "I'm currently studying linguistics and computer science at UCLA, lead venture partner at Contrary Capital, formerly worked in product management at Tesla, Hulu, Mend, and Outfox AI. My pronouns are she/her, and I'm also a poet, artist, and community organizer. Please ping me if you'd like to chat, I'm always open for a call or coffee in LA! I founded a community space for underrepresented founders to connect with one another, and welcomes future founders, allies & venture capitalists who want to help out and invest in underrepresented folks. Join us on Bunch of Founders!",
        prereq: "None!",
        description: "This workshop will go through defining product management at different companies and what the role entails, a quick run-through of what PM interviews look like, and tactics to land your next product role from a personal, and career development perspective.",
        socials1: linkedIn,
        url1: "https://linkedin.com/in/gefenskolnick"
    },
    {
        id: 16,
        time: "August 9: 1:00 - 2:00 PM PST",
        title: "Demo and Devpost Office Hours",
        location: "Sessions",
        img: logo,
        prereq: "None!",
        description: "If you need help with creating your demo video or submitting your project to Devpost, feel free to hop into these office hours!",
    },
    {
        id: 17,
        time: "August 9: 2:30 - 3:30 PM PST",
        title: "Recruiting 101 and the Impact of Covid 19",
        location: "Sessions",
        speaker: "Kim Nguyen - Senior Technical Recruiter at F5 Networks, Inc.",
        img: Kim,
        bio: "Kim holds degrees in both Computer Engineering as well as Electrical Engineering from the University of Washington. She started her professional career as an engineer but quickly realized her true passion was helping young people make the transition from college to career. She has engineered and recruited at Microsoft, has served as the first ever Career Counselor for the Allen School and currently is building a University Recruiting program at F5 Networks, headquartered in downtown Seattle.",
        prereq: "None, but you can find my career guide here",
        description: "My workshop is for students who are interested in pursuing a software engineering career but don't know where to get started.",
        socials1: linkedIn,
        url1: "https://www.linkedin.com/in/kimberly-nguyen-024bb218"
    },
    {
        id: 18,
        time: "August 9: 3:30 - 4:30 PM PST",
        title: "How to Land a UX Design Internship Spending $0 on Learning Material",
        location: "Sessions",
        speaker: "Grace Ling - UX Design Intern at Electronic Arts",
        img: Grace,
        bio: "Grace Ling is a UX Design Intern at Electronic Arts and founder of Design Buddies, the fastest growing design community. She is a Computer Science and Engineering student. She also enjoys drawing, designing games, social media and blogging, hosting events, running, hiking, traveling, and exploring boba shops.",
        prereq: "Enthusiasm!",
        description: "I'm planning to talk about my journey in learning design on my own, and interview and networking experience. I'll highlight lessons learned and actionable tips for attendees. I've also done a similar presentation and wrote a Medium article, but this time, I'll be including more of my experience at Electronic Arts. I will be asking the audience questions along the way to see what background they have to tailor my talk towards. Participants will have actionable tips (design, networking, personal branding, career development) and access to design resources that they can use to learn design on their own to land their internship/first job in design.",
        socials1: linkedIn,
        url1: "https://www.linkedin.com/in/graceling/"
    },
]

export default fullScheduleData
