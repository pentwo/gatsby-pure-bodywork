import monicaAvatar from '../images/avatar-monica.png'
import megumiAvatar from '../images/avatar-megumi.png'

export const note = {
  available: false,
  text: 'Refer a friend a Massage for $20 off both yourself and your friend.',
  link:
    'https://www.facebook.com/purebodywork.au/photos/a.2224374394508748/2957156024563911/',
}

export const BOOKING_URL =
  'https://perthhealthcare.au1.cliniko.com/bookings?business_id=74448&practitioner_id=159109'

export const businessHour = [
  { day: 'Monday', hour: 'Close' },
  { day: 'Tuesday', hour: '9.00 am - 5.00 pm' },
  { day: 'Wednesday', hour: '9.00 am - 5.00 pm' },
  { day: 'Thursday', hour: '9.00 am - 5.00 pm' },
  { day: 'Friday', hour: '9.00 am - 5.00 pm' },
  { day: 'Saturday', hour: '12.00 pm - 5.00 pm' },
  { day: 'Sunday', hour: '12.00 pm - 5.00 pm' },
  { day: 'Public Holiday', hour: 'Close' },
]

export const members = [
  {
    id: 159109,
    name: 'Monica Li',
    avatarImage: monicaAvatar,
    description:
      'I am passionate about helping others to improve their well-being by offering relaxing and rejuvenating treatments that nurture the self and lead to long term health solutions.',
    fullDescription:
      "<p>Monica's career in massage began in 2008,  she is enthusiastic and passionate about all things massage therapy.</p><p>Having studied vastly in the field, her amazing hands-on massage techniques combined with her Chinese Medicine understanding of the body makes her a Remedial Massage Therapist you can trust.</p><p>She has expertise in remedial massage, deep tissue massage, pregnancy massage, trigger point therapy, swedish massage, cupping and beauty therapy.</p><h5>Qualification Details</h5><ul><li>Massage association of Austalia</li><li>Diploma of Remedial Massage</li><li>Reiki First degree</li><li>Tibatan Singing bowl sounds therapy Level One & Two</li><li>NAHA Certified Professional Aromatherapist Level 2</li><li>First aid – Level 2</li></ul>",
    booking:
      'https://perthhealthcare.au1.cliniko.com/bookings?practitioner_id=159109',
  },
  {
    id: 0,
    name: 'Megumi Matsumura',
    avatarImage: megumiAvatar,
    description:
      "I am Megumi, I'm prides myself in providing quality treatment and customised support in each client’s health care plan.",
    fullDescription:
      '<p>Megumi is a registered remedial massage therapist. She has been working in both an acupuncture clinic in TAS and private practice with experience treating a wide range of clients with deep tissue massage, Myofascial release with cupping, trigger point and stretching.<p>Her special interest is posture management in particular with elderly clients. She has added a dry needling certificate to her treatment repertoire and uses Myofascial cupping techniques and uses a holistic approach in order to improve both physical and emotional wellbeing where body function as a whole is of importance.</p><p>Megumi prides herself in providing quality treatment and customised support in each client’s health care plan.</p><h5>Qualification Details</h5><ul><li>CIBTAC Beautician Diploma</li><li>CIDESCO Beauty Therapy Diploma</li><li>Diploma of Beauty Therapy</li><li>Diploma of Hairdresser</li><li>Diploma of Remedial Massage</li> </ul>',

    booking: '',
  },
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
]
