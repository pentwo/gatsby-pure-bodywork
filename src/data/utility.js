import monicaAvatar from '../images/avatar-monica.jpg'
import emilyAvatar from '../images/avatar-emily.jpg'

export const BOOKING_URL =
  'https://perthhealthcare.au1.cliniko.com/bookings?business_id=74448&practitioner_id=159109'

export const businessHour = [
  { day: 'Monday', hour: '8.00 am - 8.00 pm' },
  { day: 'Tuesday', hour: '8.00 am - 8.00 pm' },
  { day: 'Wednesday', hour: '10.00 am - 6.00 pm' },
  { day: 'Thursday', hour: '8.00 am - 8.00 pm' },
  { day: 'Friday', hour: '8.00 am - 8.00 pm' },
  { day: 'Saturday', hour: '8.00 am - 6.00 pm' },
  { day: 'Sunday / Public Holiday', hour: '8.00 am - 6.00 pm' },
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
    id: 160950,
    name: 'Emily Yeh',
    avatarImage: emilyAvatar,
    description:
      'Emily is fully trained, and has a diploma in remedial massage therapy. She is registered and has a provider number for most private health funds.',
    fullDescription:
      '<p>Emily is fully trained, and has a diploma in remedial massage therapy. She is registered and has a provider number for most private health funds.</p><p>Emily specialises in relaxation, deep tissue, remedial, sport and hot stone massage. She is kind, friendly and passionate about her work.</p><p>Emily always does her best to meet her clients needs and her goal is to make you leave our clinic satisfied.</p><h5>Qualification Details</h5><ul><li>Massage association of Australia</li><li>Diploma of Remedial Massage</li></ul>',
    booking:
      'https://perthhealthcare.au1.cliniko.com/bookings?practitioner_id=160950',
  },
]
