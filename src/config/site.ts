/**
 * @Author: BensonByte
 * @Date:   08/24/25 07:29:00 C8T
 * @Last Modified by:   BensonByte
 * @Last Modified time: 09/09/25 19:29:27 C9T
 */
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
        url: "https://bentrimmer.com/",
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
                image: "https://cdn.shelterinastorm.org/images/foodbank.jpeg",
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
                name: "Trackly",
                logo: "https://trackly.works/images/ui/favicon.png",
                url: "https://trackly.works"
            },
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
                logo: "https://cdn.shelterinastorm.org/images/firstbank.png",
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
                logo: null,
                url: "https://encompassedpurpose.com/"
            },
            {
                name: "First Christian Church Eldon",
                logo: "https://cdn.shelterinastorm.org/images/First%20Christian%20Church%20Eldon(15).png",
                url: "http://www.eldonfirstchristian.com/"
            },
            {
                name: "Hope House of Miller County",
                logo: "https://hopehouseofmillercounty.com/wp-content/uploads/2022/12/Hope-House-Logo-e1511208623755.png",
                url: "https://hopehouseofmillercounty.com/"
            },
            {
                name: "Lake Ozark Christian Church",
                logo: "https://cdn-locc-org.vercel.app/media/LOCC-header.png",
                url: "https://lakeozarkdisciples.org/"
            },
            {
                name: "Local Area Needs Initiative",
                logo: "https://static.wixstatic.com/media/10c148_8e6a7f16d09f4cb09ab8c3e8ed61af46~mv2.png/v1/fill/w_158,h_66,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/LANI%20LOGO.png",
                url: "https://www.localareaneeds.org/"
            },
            {
                name: "The Answers Project",
                logo: null,
                url: "https://get2answers.org/"
            }
        ],


        team: [
               {
                name: "Audrey",
                role: "Director",
                image: "https://cdn.shelterinastorm.org/team/BioPic-Audrey.jpg",
                bio: "Audrey is passionate about helping people with their emergency basic needs around the Lake.  She has over 25 years experience serving in the non-profit sector as well as professional experience in sales and planning and coordinating fundraising events.  Her background has given her skills to collaborate with local business donors and establish relationships with local partners to better serve our clients.  Through her own personal hardships and God-led healing, she is driven to share His love through helping people going through their own storms.  Her hope is that the services provided help to grow the relationship between the client and God.  Audrey is a wife, mother to 5, and grandmother to 2.  In her spare time, she enjoys being on the water, visiting her family, traveling, golfing, and doing a jigsaw puzzle on a rare quiet evening."
            },
                 {
                name: "Gregg",
                role: "Committee Member",
                image: "https://cdn.shelterinastorm.org/team/BioPic-Gregg.jpg",
                bio: "After vacationing at the Lake for nearly 25 years, Gregg and his wife, Debbie, became permanent residents in 2012.  He and his wife are parents of 3 adult children and proud grandparents of 6 grandchildren and 6 great grandchildren.  Both are active members of Lake Ozark Christian Church where they serve as Deacons.  Gregg's primary skill set is in management.  He is also an empathic listener----a skill he developed during his tenure at the UMKC School of Medicine where he was continually looking for ways to gain support or find a way forward to maintain viable partnerships.  Gregg is an avid golfer and also works part-time at an area golf course.  He has a Bachelor's Degree from Missouri Western and a Masters in Public Administration with an emphasis in Health Services from the University of Missouri."
            },
                             {
                name: "Paula",
                role: "Committee Member",
                image: "https://cdn.shelterinastorm.org/team/BioPic-Paula.jpg",
                bio: "Paula is a longtime member of Lake Ozark Christian Church.  She has served as deacon and on many church committees, along with the church council.  She is a retired registered nurse, having worked for a local public health department for more than 20 years.  Paula served as their WIC (Women, Infant, Children Supplemental Food Program) Coordinator and Communicable Disease Coordinator.  In her public health work, she was able to educate, refer, and get assistance for many clients in need.  Paula saw her career as a ministry to be able to help others."
            },
                             {
                name: "Joe",
                role: "Committee Member",
                image: "https://cdn.shelterinastorm.org/team/BioPic-Joe.jpg",
                bio: "Joe is a retired educator.  Receiving degrees from the University of Missouri and Oklahoma State University, he spent almost 40 years as a teacher and administrator at OSU and Cal State Fullerton.  He also served in the Navy with an air squadron aboard the USS Kitty Hawk and USS Saratoga.  After retiring, he and his wife Margaret became members of Lake Ozark Christian Church.  He has served on the Leadership Council and currently serves as an Elder, a 'Shelter in a Storm' committee member, helps teach the Adult Sunday School Bible Class, and serves on other church committees."
            },
                             {
                name: "Katherine",
                role: "Committee Member",
                image: "https://cdn.shelterinastorm.org/team/BioPic-Katherine.jpeg",
                bio: "Katherine has a passion for helping families in need. She joined the church in 2024 as a single mother of two and understands the hardships that we all face and the inherent need for support. She found this support at Lake Ozark Christian Church and immediately became involved with Shelter in a Storm so that she could offer support back to the same community that has supported and loved her. Katherine has a bachelor's degree in psychology and has experience in social work and teaching. She and her children have lived in Ohio, Texas, Washington and Missouri (but Missouri is by far their favorite). She loves keeping the emergency food pantry supplied with items that benefit those in need and helping the program and the community in any other way that she can."
            },
                             {
                name: "Janell",
                role: "Committee Member",
                image: "https://cdn.shelterinastorm.org/team/BioPic-Janell.jpg",
                bio: "Janell has been married to Mike for 59 years.  They have 3 sons, 11 grandchildren, 1 great granddaughter, and 1 on the way.  She is a former middle school teacher.  She volunteers at the Hope House in Miller County.  After learning about all the services 'Shelter in a Storm' offers her local community, she decided to be a part of this ministry to help others."
            },
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
