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
    author: "Lake Ozark Christian Church",
    developer: {
        name: "PixelPulse Creations, LLC",
        url: "https://benji.services/",
        reportUrl: "/report"
    },
    metadata: {
        keywords: ["Shelter in a Storm", "food pantry", "emergency assistance", "Lake Ozark", "Missouri", "community support", "homeless shelter", "emergency food"],
        language: "en",
        themeColor: "#666ed8",
        openGraph: {
            image: "https://cms-images.life.church/lc-site/pages/homepage/Evergreen%20Heros/Attendance/Attendance_Hero_Evegreen-Desktop-2.jpg"
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
        email: "name@ben.com",
        hours: "24/7 for emergency food assistance"
    },
    shelter: {
        hero: {
            title: "Emergency Assistance When You Need It Most",
            subtitle: "Providing 24/7 access to food and emergency assistance in the Lake Ozark area.",
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
            description: "Our mission is to share the love of Jesus Christ by providing emergency basic needs for our neighbors in Miller and Camden counties which is all made possible through loving donations."
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
                description: "Please call if you are low-income with an emergency housing or transportation need.",
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
        partners: [
            { 
                name: "Dierbergs", 
                logo: "https://mrcheckout.net/wp-content/uploads/2022/06/Dierbergs.png",
                url: "https://www.dierbergs.com"
            },
            { 
                name: "HyVee", 
                logo: "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Hy-Vee.svg/1200px-Hy-Vee.svg.png",
                url: "https://www.hy-vee.com"
            },
            { 
                name: "Smart Postal Center", 
                logo: "https://www.themailboxstore.net/app/uploads/2018/02/SmartShip-300x125.png",
                url: "http://www.smartpostalcenters.com"
            },
            { 
                name: "Target", 
                logo: "https://static.vecteezy.com/system/resources/previews/027/127/443/non_2x/target-logo-target-icon-transparent-free-png.png",
                url: "https://www.target.com"
            },
            { 
                name: "UPS Store", 
                logo: "https://media.nbcsandiego.com/2021/10/UPSStore.jpg?quality=85&strip=all&resize=1200%2C675",
                url: "https://www.theupsstore.com"
            },
            { 
                name: "Woods", 
                logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPIU4q1sXG-b23nA8aSIOId56s40rOD2HOKQ&s",
                url: "https://www.woodssupermarket.com/"
            },
            { 
                name: "Hope House of Miller County", 
                logo: "https://hopehouseofmillercounty.com/wp-content/uploads/2022/12/Hope-House-Logo-e1511208623755.png",
                url: "https://hopehouseofmillercounty.com"
            }
        ]
    }
} 