import remedialBg from '../images/treatments/remedial.jpg'
import relaxationBg from '../images/treatments/relaxation.jpg'
import deepTissueBg from '../images/treatments/deepTissue.jpg'
import aromatherapyBg from '../images/treatments/aromatherapy.jpg'
import pregnancyBg from '../images/treatments/pregnancy.jpg'
import hotStoneBg from '../images/treatments/hotStone.jpg'
import coupleBg from '../images/treatments/couple.jpg'
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
      '<p>Remedial massage therapy is a massage based application used to treat a number of conditions affecting the muscles, tendons, and ligaments of the body.</p><p>This holistic treatment helps to restore the balance between muscles and the skeletal system to allow your body to function at its optimal level, with less discomfort. Your Remedial Therapist will assess any underlying causes and develop a treatment plan.</p><p>75-minute consultation is recommended for your first visit. All remedial massage services are eligible for private health insurance rebates.</p>',
  },
  {
    id: 2,
    name: 'Relaxation Massage',
    image: relaxationBg,
    description:
      '<p>Relaxation massage is recommended for people who prefer soft and light pressure in their massage session. You can ask the massage therapist to adjust the pressure to your liking.</p> <p>This gentle and smooth massage combines the most relaxing elements of Swedish and Eastern massage techniques.</p><p>Relax with soothing massage techniques performed by a qualified therapist, designed to create a deep sense of relaxation, relieve tension and soothe your fatigued body and mind.</p>',
  },
  {
    id: 3,
    name: 'Deep Tissue Massage',
    image: deepTissueBg,
    description:
      "<p>Deep tissue massage is a massage technique that's mainly used to treat musculoskeletal issues, such as strains and sports injuries.</p><p>It involves applying sustained pressure using slow, deep strokes to target the inner layers of your muscles and connective tissues.</p><p>You can ask the massage therapist to adjust the pressure to your liking.</p>",
  },
  {
    id: 4,
    name: 'Aromatherapy Massage',
    image: aromatherapyBg,
    description:
      '<p>Aroma Massaged addresses numerous physical and emotional concerns.</p><p>Your massage therapist will decide which essential oils to use, but you can let them know if you have a preference.</p><p>Essential oils have the ability to attend to all your mental, emotional, and physical needs. They can help restore you to a state of overall well-being.</p>',
  },
  {
    id: 5,
    name: 'Pregnancy Massage',
    image: pregnancyBg,
    description:
      '<p>Your pregnancy massage qualified therapist will customise this treatment to your needs, helping to relieve tension, calm your mind, and melt away individual aches and pains.</p><p>Throughout the massage our special pregnancy massage table and pillow will support your hips and joints, allowing you to relax and enjoy this nourishing treatment with extra cushioning and comfort.</p><p>Your appointment includes a professional consultation to understand your specific needs and concerns to be addressed throughout your treatment.</p>',
  },
  {
    id: 6,
    name: 'Hot Stone Massage',
    image: hotStoneBg,
    description:
      "<p>A hot stone massage is a type of massage therapy. It's used to help you relax and ease tense muscles and damaged soft tissues throughout your body.</p><p>Our massage therapist holds the stones in their hands and uses them to massage with. This allows the therapist to get deeper into the muscles without more pressure, helping their client to relax yet further.</p><p>During a hot stone massage, smooth, flat, heated stones are placed on specific parts of your body.</p>",
  },
  {
    id: 7,
    name: 'Couple Massage',
    image: coupleBg,
    description:
      '<p>Treat you and a loved one to a couples massage. For most of us daily life is full of tasks and activities, book a couples experience today and give yourselves some much needed time together to relax and unwind.</p><p>Couple massages can be booked for you and a friend, or you and a family member to create the ultimate pampering experience.</p>',
  },
  {
    id: 8,
    name: 'Sound Healing / Reiki',
    price: [
      { time: '60m', price: '$130' },
    ],
    image: singingBowlBg,
    description:
      '<p>Experience deep relaxation through the healing vibrations of singing bowls and gongs. This 60-minute session combines sound healing and Reiki energy work to calm the mind, release tension, and restore balance to your body and spirit.</p>',
  },
]

export const addOnsData = [
  { name: 'Digestive Support Abdominal Massage', price: '$55', time: '20m' },
  { name: 'Facial Sculpting Massage (Gua-Sha & Cupping)', price: '$55', time: '20m' },
  { name: 'Head & Scalp Massage', price: '$55', time: '20m' },
  { name: 'Sound Flow & Energy Touch', price: '$55', time: '20m' },
  { name: 'Leg Relief Massage', price: '$55', time: '20m' },
  { name: 'Womb Warming Abdominal Massage', price: '$55', time: '20m' },
  { name: 'Hot Stone Upgrade', price: '$20', time: '' },
  { name: 'Pregnancy Comfort Upgrade', price: '$20', time: '' },
]
