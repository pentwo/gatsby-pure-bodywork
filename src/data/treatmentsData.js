import remedialBg from '../images/treatments/remedial.jpg'
import singingBowlBg from '../images/treatments/singingBowl.jpg'

export const treatmentsData = [
  {
    id: 1,
    name: 'Remedial Massage',
    price: [
      { time: '60m', price: '$120' },
      { time: '75m', price: '$150' },
      { time: '90m', price: '$180' },
      { time: '120m', price: '$240' },
    ],
    image: remedialBg,
    description:
      '<p>Remedial massage therapy is a massage based application used to treat a number of conditions affecting the muscles, tendons, and ligaments of the body.</p><p>This holistic treatment helps to restore the balance between muscles and the skeletal system to allow your body to function at its optimal level, with less discomfort. Your Remedial Therapist will assess any underlying causes and develop a treatment plan.</p><p>You may also be able to claim this treatment on your health fund. Please confirm your Health Fund at the time of booking.</p>',
  },
  {
    id: 2,
    name: 'Sound Healing / Reiki',
    price: [
      { time: '60m', price: '$130' },
      { time: '75m', price: '-' },
      { time: '90m', price: '-' },
      { time: '120m', price: '-' },
    ],
    image: singingBowlBg,
    description:
      '<p>Sound Healing and Reiki combine the power of therapeutic sound vibrations with energy healing techniques to promote deep relaxation and holistic well-being.</p><p>During a session, singing bowls and gentle energy work are used to help restore balance, release tension, and calm the mind.</p><p>This treatment creates a safe, nurturing atmosphere that supports emotional and physical healing.</p>',
  },
]

export const addOnData = [
  { id: 1, name: 'Digestive Support Abdominal Massage', duration: '20m', price: '$55' },
  { id: 2, name: 'Facial Sculpting Massage (Gua-Sha and Cupping)', duration: '20m', price: '$55' },
  { id: 3, name: 'Heavenly Head & Scalp Massage', duration: '20m', price: '$55' },
  { id: 4, name: 'Hot Stone Upgrade', duration: '20m', price: '$20' },
  { id: 5, name: 'Pregnancy Comfort Upgrade', duration: '20m', price: '$20' },
  { id: 6, name: 'Sound Flow and Energy Touch', duration: '20m', price: '$55' },
  { id: 7, name: 'Walking on Clouds - Leg Relief Massage', duration: '20m', price: '$55' },
  { id: 8, name: 'Womb Warming Abdominal Massage', duration: '20m', price: '$55' },
]
