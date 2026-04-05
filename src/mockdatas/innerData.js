import background from "../assets/contact/background.svg";
import team1 from "../assets/team/team1.svg";
import face from "../assets/contact/facebook.svg";
import insta from "../assets/contact/instagram.svg";
import x from "../assets/contact/twitter.svg";
import linkedin from "../assets/contact/linkedin.svg";
import phone from "../assets/contact/phone.svg";
import pin from "../assets/contact/pin.svg";
import mail from "../assets/contact/mail.svg";
import main from "../assets/team/main.svg";
import side from "../assets/team/side.svg";
import sidetwo from "../assets/team/sidetwo.svg";
import framedots from "../assets/about/framedots.svg";
import shopping from "../assets/about/shopping.svg";
import video from "../assets/about/video.svg";

const innerData = {
    en: {
        contact: {
            image: background,
            text: "Questions & Answers",
            description: "Problems trying to resolve the conflict between the two major realms of Classical physics:",
            cta: "CONTACT US",

            main: {
                title: "We help small businesses \n with big ideas",
                subtitle: "VISIT OUR OFFICE",
                cards: [
                    { id: "cardmain1", image: phone, mail1: "georgia.young@example.com", mail2: "georgia.young@ple.com", text: "Get Support", button: "Submit Request" },
                    { id: "cardmain2", image: pin, mail1: "georgia.young@example.com", mail2: "georgia.young@ple.com", text: "Get Support", button: "Submit Request" },
                    { id: "cardmain3", image: mail, mail1: "georgia.young@example.com", mail2: "georgia.young@ple.com", text: "Get Support", button: "Submit Request" },
                ]
            },

            offer: {
                title: "Let's Talk",
                subtitle: "WE can't WAIT TO MEET YOU",
                button: "Try it free now",
            }
        },


        team: {
            title: "Meet Our Team",
            description: "Problems trying to resolve the conflict between  the two major realms of Classical physics: Newtonian mechanics",
            members: [
                { id: "squad1", name: "Aziz Takcı", title: "Full Stack Developer", image: team1 },
                { id: "squad2", name: "Gökhan Özdemir", title: "Project Manager", image: team1 },
            ],
            icons: [
                { id: "iconface", image: face },
                { id: "iconinsta", image: insta },
                { id: "iconx", image: x },
            ],

            top: {
                title: "Innovation tailored for you",
                subtitle: "WHAT WE DO",
            },

            infoTop: {
                title: "Team",
                breadcrumb: ["Home", "Team"],
            },
            infoMain: {
                mainImage: main,
                images: [
                    { id: "infoImg1", image: side, },
                    { id: "infoImg2", image: sidetwo, },
                    { id: "infoImg3", image: sidetwo, },
                    { id: "infoImg4", image: side, },
                ]
            },

            offer: {
                title: "Start your 14 days free trial",
                description: "Met minim Mollie non desert Alamo est sit cliquey dolor \n do met sent. RELIT official consequent.",
                button: "Try it free now",
                icons: [
                    { id: "teamoffer1", image: x },
                    { id: "teamoffer2", image: face },
                    { id: "teamoffer3", image: insta },
                    { id: "teamoffer4", image: linkedin },
                ]
            },
        },
         about: {
            top: {
                title: "ABOUT US",
                subtitle: "ABOUT COMPANY",
                description: "We know how large objects will act, \n but things on a small scale",
                button: "Get Quote Now",
                imagebg: framedots,
                imagefront: shopping,
            },

            strip: {
                title: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.",
                subtitle: "Problems trying",
                description:"Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics",
            },

            infoStrip: [
                {id:"infostrip1", value: "15K", description:"Happy Customers",},
                {id:"infostrip2", value: "150K", description:"Monthly Visitors",},
                {id:"infostrip3", value: "15", description:"Countries  Worldwide",},
                {id:"infostrip4", value: "100", description: "Top Partners",},
            ],

            video: video,

            upperBrandLogo: {
                title: "Big Companies Are Here",
                description: "Problems trying to resolve the conflict between \n the two major realms of Classical physics: Newtonian mechanics",
            },

        },
    },

    tr: {
        contact: {
            image: background,
            text: "Questions & Answers",
            description: "Problems trying to resolve the conflict between \n the two major realms of Classical physics:",
            cta: "CONTACT US",
            main: {
                title: "We help small businesses \n with big ideas",
                subtitle: "OFİSİMİZİ ZİYARET EDİN",
                cards: [
                    { id: "cardmain4", image: phone, mail1: "georgia.young@example.com", mail2: "georgia.young@ple.com", text: "Get Support", button: "Submit Request" },
                    { id: "cardmain5", image: pin, mail1: "georgia.young@example.com", mail2: "georgia.young@ple.com", text: "Get Support", button: "Submit Request" },
                    { id: "cardmain6", image: mail, mail1: "georgia.young@example.com", mail2: "georgia.young@ple.com", text: "Get Support", button: "Submit Request" },
                ]
            },
            offer: {
                title: "Let's Talk",
                subtitle: "WE can't WAIT TO MEET YOU",
                button: "Try it free now",
            },
        },
        team: {
            title: "Ekibimiz İle Tanışın",
            description: "Klasik fiziğin iki büyük alanı olan \n Newton mekaniği arasındaki çelişkiyi çözmeye yönelik problemler",
            members: [
                { id: "squad1", name: "Aziz Takcı", title: "Full Stack Developer", image: team1 },
                { id: "squad2", name: "Gökhan Özdemir", title: "Project Manager", image: team1 },
            ],
            icons: [
                { id: "iconface", image: face },
                { id: "iconinsta", image: insta },
                { id: "iconx", image: x },
            ],
            top: {
                title: "Innovation tailored for you",
                subtitle: "WHAT WE DO",
            },

            infoTop: {
                title: "Team",
                breadcrumb: ["Home", "Team"],
            },

            infoMain: {
                mainImage: main,
                images: [
                    { id: "infoImg5", image: side, },
                    { id: "infoImg6", image: sidetwo, },
                    { id: "infoImg7", image: side, },
                    { id: "infoImg8", image: sidetwo, },
                ]
            },

            offer: {
                title: "Start your 14 days free trial",
                description: "Met minim Mollie non desert Alamo est sit cliquey dolor \n do met sent. RELIT official consequent.",
                button: "Try it free now",
                icons: [
                    { id: "teamoffer5", image: x },
                    { id: "teamoffer6", image: face },
                    { id: "teamoffer7", image: insta },
                    { id: "teamoffer8", image: linkedin },
                ]
            },
        },
        about: {
            top: {
                title: "Hakkımızda",
                subtitle: "Şirketimiz Hakkında",
                description: "We know how large objects will act, \n but things on a small scale",
                button: "Hemen Teklif Al",
                imagebg: framedots,
                imagefront: shopping,
            },

            strip: {
                title: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.",
                subtitle: "Problems trying",
                description:"Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics",
            },

            infoStrip: [
                {id:"infostrip5", value: "15K", description:"Mutlu Müşteriler",},
                {id:"infostrip6", value: "150K", description:"Aylık Ziyaretçi",},
                {id:"infostrip7", value: "15", description:"Küresel İş Ortakları",},
                {id:"infostrip8", value: "100", description: "Ortaklar",},
            ],

            video: video,

            upperBrandLogo: {
                title: "Güçlü Şirketler Burada",
                description: "Problems trying to resolve the conflict between \n the two major realms of Classical physics: Newtonian mechanics",
            },

        },

    }



}

export default innerData