export const siteConfig = {
    theme: {
        colors: {
            primary: {
                DEFAULT: '#666ed8',
                light: '#7c83df',  // Lighter shade
                dark: '#5059c8',   // Darker shade
                50: '#f3f4fb',     // Very light for backgrounds
                100: '#e7e9f7',    // Light for hover states
                600: '#666ed8',    // Main color
                700: '#5059c8'     // Dark for hover states
            }
        }
    },
    name: "Shelter in a Storm",
    shortName: "Shelter",
    description: "Providing emergency assistance and support to those in need in our Lake Ozark community.",
    title: {
        default: "Shelter in a Storm",
        template: "%s | Shelter in a Storm - Lake Ozark"
    },
    author: "Helping Miller & Camden Counties",
    developer: {
        name: "Ben Trimmer",
        url: "https://benji.services/",
        reportUrl: "/report"
    },
    metadata: {
        keywords: ["Shelter in a Storm", "food pantry", "emergency assistance", "Lake Ozark", "Missouri", "community support", "homeless shelter", "emergency food"],
        language: "en",
        themeColor: "#666ed8",
        openGraph: {
            image: "https://cdn.shelterinastorm.org/images/hero.jpg"
        },
        favicon: "https://cdn.shelterinastorm.org/images/brand.png"
    },
    fonts: {
        google: {
            families: ["Inter:wght@400;500;600;700", "Gochi+Hand"]
        }
    },
    contact: {
        phone: "573-365-3366",
        emergency: "573-365-3366",
        email: "compliance@shelterinastorm.org",
        hours: "24/7 for emergency food assistance"
    },
    shelter: {
        hero: {
            title: "Emergency Assistance When You Need It Most",
            subtitle: "God works through people to help them through their storm.",
            cta: [
                {
                    text: "Get Help",
                    href: "/get-help",
                    primary: true
                },
                {
                    text: "Make a Donation",
                    href: "/donate",
                    primary: false
                }
            ]
        },
        mission: {
            title: "Our Mission",
            description: "Our mission is to share the love of Jesus Christ by providing emergency basic needs for our neighbors in Miller and Camden counties which is all made possible through loving donations.",
            values: [
                {
                    title: "Community First",
                    description: "We prioritize the needs of our local community by providing immediate assistance and support.",
                    icon: "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                },
                {
                    title: "24/7 Availability",
                    description: "Our emergency food pantry is accessible around the clock, ensuring help is always available when needed.",
                    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                },
                {
                    title: "No Paperwork Required",
                    description: "Access our food pantry without any documentation or registration - just come as you are when you need help.",
                    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                },
                {
                    title: "Faith in Action",
                    description: "Guided by Christian values, we demonstrate love through practical assistance and support.",
                    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                },
                {
                    title: "Local Focus",
                    description: "Dedicated to serving Miller and Camden counties with targeted support for our neighbors.",
                    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                },
                {
                    title: "Sustainable Impact",
                    description: "Creating lasting positive change through emergency assistance and community partnerships.",
                    icon: "M13 10V3L4 14h7v7l9-11h-7z"
                },
                // Add more values
            ]
        },
        services: [
            {
                title: "Emergency Food Pantry",
                description: "Open 7 days a week, 24 hours a day. Located under our portico. \"Take what you need, leave some for others.\"",
                link: "/services/food-pantry",
                image: "https://images.squarespace-cdn.com/content/v1/53c68a2de4b0929c16dd9bf2/1623779915649-KOGVC81NLQDLR632328M/ribbon-cutting+photo+best.jpg?format=2500w",
                icon: "food-bank"
            },
            {
                title: "Emergency Assistance",
                description: "Please fill out the form if you need help you with a temporary crisis or to prevent homelessness.",
                link: "/get-help",
                image: "https://media.istockphoto.com/id/1199696901/photo/happy-interracial-couple-handshake-bank-manager-take-mortgage-loan.jpg?s=612x612&w=0&k=20&c=_ovUfKCtMnZ-cN4YE31W92p3cpDLuw5MFRzFRPj2oB0=",
                icon: "food-bank"
            }
        ],
        pantry: {
            title: "Pantry of Blessings",
            description: "Our Pantry of Blessings provides non-perishable food and hygiene items on an emergency basis, 24 hours a day. Located on the west side of the church at 1560 Bagnell Dam Blvd., the pantry is always accessible to those in need.",
            location: {
                address: "1560 Bagnell Dam Blvd.",
                city: "Lake Ozark",
                state: "MO",
                zip: "65049",
                directions: "Located on the west side of Lake Ozark Christian Church"
            }
        },
        donors: [
            { 
                name: "Dierbergs", 
                logo: "https://mrcheckout.net/wp-content/uploads/2022/06/Dierbergs.png",
                url: "https://www.dierbergs.com/store-locations/lakeview-pointe"
            },
            { 
                name: "HyVee", 
                logo: "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Hy-Vee.svg/1200px-Hy-Vee.svg.png",
                url: "https://www.hy-vee.com/stores/detail.aspx?s=230"
            },
            { 
                name: "Target", 
                logo: "https://static.vecteezy.com/system/resources/previews/027/127/443/non_2x/target-logo-target-icon-transparent-free-png.png",
                url: "https://www.target.com/sl/osage-beach/1914"
            },
            { 
                name: "Woods", 
                logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPIU4q1sXG-b23nA8aSIOId56s40rOD2HOKQ&s",
                url: "https://www.woodssupermarket.com/stores/lake-ozark/"
            },
            { 
                name: "Hope House of Miller County", 
                logo: "https://hopehouseofmillercounty.com/wp-content/uploads/2022/12/Hope-House-Logo-e1511208623755.png",
                url: "https://hopehouseofmillercounty.com"
            },
            { 
                name: "Menards",
                logo: "https://1000logos.net/wp-content/uploads/2020/11/Menards-logo.png",
                url: "https://www.menards.com/store-details/store.html?store=3288   "
            },
            { 
                name: "Walmart",
                logo: "https://corporate.walmart.com/content/dam/corporate/site-images/WMT-Spark-New-SparkYellow-RGB.svg",
                url: "https://www.walmart.com/store/815-osage-beach-mo  "
            },
            { 
                name: "First Bank of the Lake",
                logo: "https://www.fblake.bank/assets/img/first-bank-of-the-lake-logo.svg",
                url: "https://www.fblake.bank"
            },
            { 
                name: "Central Bank",
                logo: "https://d31s10tn3clc14.cloudfront.net/imgs/bankreviewlogos/centralbank_theozarks_17633.png",
                url: "https://www.centralbank.net/lake/"
            },
            { 
                name: "RE/MAX",
                logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLBHLiEGvZC6LeVNfFKtYzguC7vhNRmyiMvw&s",
                url: "https://www.facebook.com/remaxlotofoundation/"
            },
            { 
                name: "Infuze Credit Union",
                logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWRYNHYfh4iE2Z05o9WTYKyhuNYm6LTCOjgQ&s",
                url: "https://www.infuzecu.org/"
            }
            
        ],

        partners: [
            {
                name: "Compass Health Network",
                logo: "https://compasshealthnetwork.org/wp-content/uploads/2023/12/CHN-2023-logo-01-768x180.png",
                url: "https://compasshealthnetwork.org/locations/osage-beach/"
            },
            {
                name: "Central Ozarks Medical Center",
                logo: "https://centralozarks.org/wp-content/uploads/2020/07/COMC-Logo-Resized.jpg", 
                url: "https://www.centralozarks.org/"
            },
            {
                name: "Encompassed Purpose",
                logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_luo0bRxZjB90J6pSUzAoCQS95NTH8Ir9Uw&s",
                url: "https://encompassedpurpose.com/"
            },
            {
                name: "First Christian Church Eldon",
                logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS91ApfmDOjnlnsGHCdEA0PnMKaUetQQJ6i_g&s",
                url: "http://www.eldonfirstchristian.com/"
            },
            {
                name: "Hope House of Miller County",
                logo: "https://hopehouseofmillercounty.com/wp-content/uploads/2022/12/Hope-House-Logo-e1511208623755.png",
                url: "https://hopehouseofmillercounty.com/"
            },
            {
                name: "Local Area Needs Initiative",
                logo: "https://static.wixstatic.com/media/10c148_8e6a7f16d09f4cb09ab8c3e8ed61af46~mv2.png/v1/fill/w_158,h_66,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/LANI%20LOGO.png",
                url: "https://www.localareaneeds.org/"
            },
            {
                name: "The Answers Project",
                logo: "https://cdn.shelterinastorm.org/partners/answers-project.png",
                url: "https://get2answers.org/"
            }
        ],


        team: [
            {
                name: "Audrey Tanner",
                role: "Executive Director",
                image: "https://cdn.shelterinastorm.org/team/coming-soon.jpg",
                bio: "A bio for this team member is not yet available. Check back soon!"
            },
            // Add more team members
        ],
        ein: "43-1193150",
        impact: {
            stats: {
                individualsHelped: 200,
                pantryItemsTaken: 6000,
                donationsUsed: 55000
            }
        }
    }
} 