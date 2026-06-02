import monicaAvatar from "../images/avatar-monica.png";
import megumiAvatar from "../images/avatar-megumi.png";

export const note = {
    available: false,
    text: "Refer a friend a Massage for $20 off both yourself and your friend.",
    link: "https://www.facebook.com/purebodywork.au/photos/a.2224374394508748/2957156024563911/",
};

export const CONTACT_EMAIL = "purebodywork.wellness@gmail.com";

export const CONTACT_PHONE = {
    display: "0499 088 800",
    tel: "+61499088800",
    whatsapp: "https://wa.me/61499088800",
};

// Two practice locations — Monica works at both
export const LOCATIONS = {
    eastPerth: {
        key: "eastPerth",
        name: "East Perth",
        venue: "Urban Om Yoga",
        address: "42 Bennett Street, East Perth WA 6004",
        bookingUrl: "https://sacredflowtouch.as.me/monica",
        bookingType: "iframe",
        mapsUrl: "https://maps.app.goo.gl/bzrsTjy7vfcYTny96",
        mapsEmbed:
            "https://www.google.com/maps?q=42+Bennett+Street+East+Perth+WA+6004&output=embed",
    },
    westPerth: {
        key: "westPerth",
        name: "West Perth",
        venue: "West Perth Chiropractic",
        address: "West Perth WA",
        bookingUrl: "https://healthengine.com.au/massage-therapist/wa/west-perth/ms-monica-li/p144213",
        bookingType: "external",
        mapsUrl: "https://www.westperthchiro.com.au/",
        mapsEmbed:
            "https://www.google.com/maps?q=West+Perth+Chiropractic&output=embed",
    },
};

// Primary booking URL — kept for backward compatibility (East Perth)
export const BOOKING_URL = LOCATIONS.eastPerth.bookingUrl;

export const businessHour = [
    { id: "mon", day: "Monday", hour: "9:00am – 3:00pm", note: "East Perth" },
    { id: "tue", day: "Tuesday", hour: "9:00am – 5:00pm", note: "East Perth" },
    { id: "wed", day: "Wednesday", hour: "3:00pm – 6:00pm", note: "West Perth" },
    { id: "thu", day: "Thursday", hour: "9:20am – 2:00pm", note: "West Perth" },
    { id: "fri-am", day: "Friday", hour: "9:20am – 2:00pm", note: "West Perth" },
    { id: "fri-pm", day: "Friday", hour: "3:00pm – 6:00pm", note: "East Perth" },
    {
        id: "weekend",
        day: "Weekend",
        hour: "4:00pm – 6:30pm",
        note: "Alternate weekends · East / West Perth",
    },
    { id: "ph", day: "Public Holiday", hour: "Closed" },
    { id: "appt", day: "By appointment only", hour: "" },
];

export const members = [
    {
        id: 159109,
        name: "Monica Li",
        avatarImage: monicaAvatar,
        description:
            "Hi, I'm Monica. Originally from Taiwan, I'm a bodyworker based in Perth, Australia with over 15 years of experience, and also a mother of three.",
        fullDescription:
            "<p>My sessions integrate remedial massage, pregnancy massage, Reiki, Tibetan Singing Bowl Therapy, aromatherapy, and nervous system support. I believe healing is not always about changing ourselves, but about finally slowing down enough to listen to the feelings and inner voices that have been ignored for too long.</p><p>Since beginning my journey in massage and bodywork in 2008, I've combined clinical massage techniques with a holistic and intuitive approach to healing. My intention is to create a space where people can slow down amidst the stress and busyness of life, and reconnect with their bodies and inner selves.</p><p>My Reiki training was guided by two different Reiki Masters, while my journey with Tibetan Singing Bowls began in Bali in 2017 and continued with further studies in Melbourne in 2022. Each teacher brought different philosophies and perspectives, deepening my understanding of vibrational healing, energetic presence, chakras, and the connection between the body and nervous system.</p><p>Outside of work, I love travel, books, films, music, and philosophy. I'm endlessly curious about people, cultures, and the human experience. I believe curiosity and open-mindedness often bring us closer to truth than rushing to define or judge things too quickly.</p><p>In the space I create for you, you're allowed to put down all the roles and identities you carry, and return to what you truly feel beneath them.</p><p><em>To let the body soften.</em></p><p> <em>To let the inner voice finally be heard.</em></p><p><em>Whether it feels gentle, messy, angry, or sad — everything is welcome here.</em></p><p><em>I'm not here to rush your healing, or to change who you are.</em></p><p> What I hope to offer is a space where you can reconnect with yourself, and slowly meet the parts of you that may have never truly felt seen, understood, or held.</p><p><em>I believe we come to this Earth borrowing this body for a period of time — to experience, to learn, to feel, to love, and to grow.</em></p><p><em> And when it is finally time for us to leave, we gently return it back to the Earth.</em></p><h5>Qualifications</h5><ul><li>Massage Association of Australia</li><li>Diploma of Remedial Massage</li><li>Reiki First Degree</li><li>Tibetan Singing Bowl Therapy Level One & Two</li><li>NAHA Certified Professional Aromatherapist Level 2</li><li>First Aid – Level 2</li></ul>",
        booking: BOOKING_URL,
    },
    // {
    //   id: 164714,
    //   name: 'Megumi Matsumura',
    //   avatarImage: megumiAvatar,
    //   description:
    //     "I am Megumi, I'm prides myself in providing quality treatment and customised support in each client’s health care plan.",
    //   fullDescription:
    //     '<p>Megumi is a registered remedial massage therapist. She has been working in both an acupuncture clinic in TAS and private practice with experience treating a wide range of clients with deep tissue massage, Myofascial release with cupping, trigger point and stretching.<p>Her special interest is posture management in particular with elderly clients. She has added a dry needling certificate to her treatment repertoire and uses Myofascial cupping techniques and uses a holistic approach in order to improve both physical and emotional wellbeing where body function as a whole is of importance.</p><p>Megumi prides herself in providing quality treatment and customised support in each client’s health care plan.</p><h5>Qualification Details</h5><ul><li>CIBTAC Beautician Diploma</li><li>CIDESCO Beauty Therapy Diploma</li><li>Diploma of Beauty Therapy</li><li>Diploma of Hairdresser</li><li>Diploma of Remedial Massage</li> </ul>',
    //   booking:
    //     'https://perthhealthcare.au1.cliniko.com/bookings?practitioner_id=164714'
    // }
    // {
    //   id: 160950,
    //   name: 'Emily Yeh',
    //   avatarImage: emilyAvatar,
    //   description:
    //     'Emily is fully trained, and has a diploma in remedial massage therapy. She is registered and has a provider number for most private health funds.',
    //   fullDescription:
    //     '<p>Emily is fully trained, and has a diploma in remedial massage therapy. She is registered and has a provider number for most private health funds.</p><p>Emily specialises in relaxation, deep tissue, remedial, sport and hot stone massage. She is kind, friendly and passionate about her work.</p><p>Emily always does her best to meet her clients needs and her goal is to make you leave our clinic satisfied.</p><h5>Qualification Details</h5><ul><li>Massage association of Australia</li><li>Diploma of Remedial Massage</li></ul>',
    //   booking:
    //     'https://perthhealthcare.au1.cliniko.com/bookings?practitioner_id=160950',
    // },
];
