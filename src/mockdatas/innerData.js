import background from "../assets/contact/background.svg";
import team1 from "../assets/team/team1.svg";
import face from "../assets/contact/facebook.svg";
import insta from "../assets/contact/instagram.svg";
import x from "../assets/contact/twitter.svg";
import phone from "../assets/contact/phone.svg";
import pin from "../assets/contact/pin.svg";
import mail from "../assets/contact/mail.svg";


 const innerData = {
    en: {
        contact: {
            image: background,
            text: "Questions & Answers",
            description: "Problems trying to resolve the conflict between the two major realms of Classical physics:",
            cta: "CONTACT US",
            
            main: {
                title:"We help small businesses \n with big ideas",
                subtitle: "VISIT OUR OFFICE",
                cards: [
                    {id:"cardmain1", image:phone, mail1:"georgia.young@example.com", mail2:"georgia.young@ple.com", text:"Get Support", button:"Submit Request"},
                    {id:"cardmain2", image:pin, mail1:"georgia.young@example.com", mail2:"georgia.young@ple.com", text:"Get Support", button:"Submit Request"},
                    {id:"cardmain3", image:mail, mail1:"georgia.young@example.com", mail2:"georgia.young@ple.com", text:"Get Support", button:"Submit Request"},
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
        },
    },

    tr: {
        contact: {
            image: background,
            text: "Questions & Answers",
            description: "Problems trying to resolve the conflict between \n the two major realms of Classical physics:",
            cta: "CONTACT US",
            main: {
                title:"We help small businesses \n with big ideas",
                subtitle: "OFİSİMİZİ ZİYARET EDİN",
                cards: [
                    {id:"cardmain4", image:phone, mail1:"georgia.young@example.com", mail2:"georgia.young@ple.com", text:"Get Support", button:"Submit Request"},
                    {id:"cardmain5", image:pin, mail1:"georgia.young@example.com", mail2:"georgia.young@ple.com", text:"Get Support", button:"Submit Request"},
                    {id:"cardmain6", image:mail, mail1:"georgia.young@example.com", mail2:"georgia.young@ple.com", text:"Get Support", button:"Submit Request"},
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
        },

    }



}

export default innerData