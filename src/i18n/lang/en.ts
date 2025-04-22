
const en = {
  home: {
    welcome: "Welcome to MediLingua",
    tagline: "Connect with healthcare providers who speak your language.",
    findDoctor: "Find your doctor",
    availabilityFeature: {
      title: "Find a doctor accepting new patients",
      subtitle: "New feature on MediLingua",
      description: "In the area, it's often difficult to find a doctor who accepts new patients. MediLingua helps you not only find a doctor who speaks your language, but also shows you which doctors are available for new registrations.",
      cta: "Search available doctors"
    },
    mainContent: "MediLingua connects you with healthcare professionals who speak your language, ensuring clear communication during your medical consultations. When a direct match isn't possible, our professional translation services bridge the gap, so you never face language barriers in healthcare again. We believe everyone deserves quality medical care they can fully understand and participate in. Your health is too important for miscommunication.",
    aboutUs: "MediLingua was born from five years of experience in the Belgian healthcare system, witnessing firsthand how language barriers can compromise medical care. Our founder, a multilingual doctor, saw patients struggling to communicate symptoms, understand diagnoses, and follow treatment plans simply because of language differences. MediLingua solves this problem through our dual approach: matching patients with language-compatible healthcare providers and offering specialized medical translation services when perfect matches aren't available. We're committed to making healthcare accessible to everyone, ensuring accurate medical communication, and fostering an inclusive healthcare environment where language is never an obstacle to quality care."
  },
  about: {
    title: "About MediLingua",
    body: `MediLingua is the multilingual healthcare platform making it easy to connect patients with doctors who speak their language.
With support for Dutch, English, French, Italian, Russian, Armenian, Bulgarian, and Turkish, we're breaking barriers in European healthcare.`,
    faq: {
      title: "Frequently Asked Questions",
      questions: [
        {
          question: "How does MediLingua match me with a doctor?",
          answer: "Our algorithm matches you based on your language preferences, location, medical needs, and doctor availability. You can filter results based on specialty, language fluency level, and location distance."
        },
        {
          question: "What if there's no doctor available who speaks my language?",
          answer: "If we can't find a perfect match, we offer professional medical translation services for your appointments. Our translators are specialized in healthcare and ensure accurate communication between you and your doctor."
        },
        {
          question: "How does the translation service work?",
          answer: "You can request an in-person translator to join your appointment, use our video translation service, or access written translation for medical documents. Simply select the service when booking your appointment."
        },
        {
          question: "Is my medical information kept private?",
          answer: "Absolutely. We follow strict GDPR and healthcare privacy regulations. Your medical information is encrypted, securely stored, and only shared with the healthcare providers you choose to consult with."
        },
        {
          question: "What does MediLingua cost?",
          answer: "Basic doctor search and matching is free. There may be fees for premium features, translation services, or expedited appointments, clearly displayed before you commit to any payment."
        },
        {
          question: "Is MediLingua covered by insurance?",
          answer: "Many Belgian health insurance providers cover our translation services. Check with your insurance provider or contact us for a current list of partnering insurers."
        },
        {
          question: "Can I use MediLingua for emergency medical needs?",
          answer: "MediLingua is not designed for emergencies. For urgent medical situations, please call emergency services at 112 in Belgium or visit your nearest emergency department."
        },
        {
          question: "Do you verify the languages spoken by doctors?",
          answer: "Yes, we verify language proficiency claims through a combination of certification checks, peer reviews, and patient feedback to ensure quality communication."
        },
        {
          question: "Can I book appointments through MediLingua?",
          answer: "Yes, you can book appointments directly through our platform with participating healthcare providers, including specifying translation needs if required."
        },
        {
          question: "Is MediLingua available throughout Belgium?",
          answer: "We currently serve major Belgian cities with plans to expand to more remote areas. Our translation services are available nationwide."
        }
      ]
    },
    specialties: {
      generalPractitioner: {
        description: "A General Practitioner (GP) provides primary care for all types of health problems. They treat acute and chronic illnesses, offer preventive care, and refer to specialists when necessary. Visit a GP for initial health concerns, routine check-ups, and ongoing management of health conditions.",
        searchTerms: ["family doctor", "primary care", "house doctor", "general medicine", "family physician"]
      },
      pediatrician: {
        description: "Pediatricians specialize in the health of infants, children, and adolescents up to age 18. They manage children's physical, behavioral, and mental health issues, and provide developmental guidance, vaccinations, and treatment for illnesses. Consult a pediatrician for your child's routine check-ups and when they're ill.",
        searchTerms: ["children's doctor", "baby doctor", "child health", "kids specialist", "infant care"]
      },
      cardiologist: {
        description: "Cardiologists diagnose and treat heart and blood vessel conditions. They handle heart attacks, heart failure, arrhythmias, valve diseases, and circulation problems. See a cardiologist if you experience chest pain, shortness of breath, irregular heartbeat, or have risk factors for heart disease.",
        searchTerms: ["heart doctor", "circulation specialist", "heart specialist", "chest pain doctor", "heart disease"]
      },
      dermatologist: {
        description: "Dermatologists specialize in skin, hair, and nail health. They treat conditions like acne, eczema, psoriasis, skin cancer, and cosmetic concerns. Visit a dermatologist for persistent skin problems, changing moles, severe acne, hair loss, or allergic reactions affecting the skin.",
        searchTerms: ["skin doctor", "acne specialist", "eczema treatment", "mole check", "skin cancer screening"]
      },
      neurologist: {
        description: "Neurologists diagnose and treat disorders of the brain, spinal cord, and nervous system. This includes headaches, stroke, epilepsy, multiple sclerosis, and neurodegenerative diseases. Consult a neurologist for severe headaches, seizures, movement difficulties, memory problems, or unexplained numbness.",
        searchTerms: ["brain doctor", "headache specialist", "seizure doctor", "nerve specialist", "stroke doctor"]
      },
      psychiatrist: {
        description: "Psychiatrists diagnose, treat, and prevent mental, emotional, and behavioral disorders. They can prescribe medication and provide therapy for depression, anxiety, bipolar disorder, schizophrenia, and addiction. See a psychiatrist for persistent mood changes, severe anxiety, thoughts of self-harm, or substance abuse issues.",
        searchTerms: ["mental health doctor", "depression specialist", "anxiety treatment", "medication psychiatry", "addiction psychiatrist"]
      },
      surgeon: {
        description: "Surgeons perform operations to treat injuries, diseases, and deformities. They specialize in various areas such as general surgery, orthopedics, neurosurgery, or cardiothoracic surgery. A surgeon is typically seen after referral from another doctor when a condition requires surgical intervention.",
        searchTerms: ["operation doctor", "surgical specialist", "orthopedic surgeon", "neurosurgeon", "heart surgeon"]
      },
      ophthalmologist: {
        description: "Ophthalmologists are eye specialists who diagnose and treat eye diseases, prescribe glasses or contacts, and perform eye surgeries. They handle conditions like cataracts, glaucoma, macular degeneration, and diabetic eye disease. Visit an ophthalmologist for vision problems, eye pain, or routine eye exams.",
        searchTerms: ["eye doctor", "vision specialist", "cataract surgeon", "glaucoma specialist", "eye exam doctor"]
      }
    },
    symptomMapping: [
      {
        medical: "Cephalalgia",
        common: "Headache, migraine, head pain",
        primary: "Neurologist",
        secondary: "General Practitioner"
      },
      {
        medical: "Dyspnea",
        common: "Shortness of breath, difficulty breathing",
        primary: "Pulmonologist",
        secondary: "Cardiologist"
      },
      {
        medical: "Arthralgia",
        common: "Joint pain, achy joints",
        primary: "Rheumatologist",
        secondary: "Orthopedist"
      },
      {
        medical: "Vertigo",
        common: "Dizziness, spinning sensation",
        primary: "Otolaryngologist (ENT)",
        secondary: "Neurologist"
      },
      {
        medical: "Pruritus",
        common: "Itchy skin, skin irritation",
        primary: "Dermatologist",
        secondary: "Allergist"
      },
      {
        medical: "Tachycardia",
        common: "Rapid heart rate, heart racing",
        primary: "Cardiologist",
        secondary: "General Practitioner"
      },
      {
        medical: "Insomnia",
        common: "Trouble sleeping, sleeplessness",
        primary: "Sleep Specialist",
        secondary: "Psychiatrist"
      },
      {
        medical: "Dorsalgia",
        common: "Back pain, backache",
        primary: "Orthopedist",
        secondary: "Neurologist"
      },
      {
        medical: "Dysuria",
        common: "Painful urination, burning when peeing",
        primary: "Urologist",
        secondary: "Gynecologist (for women)"
      },
      {
        medical: "Xerophthalmia",
        common: "Dry eyes, eye irritation",
        primary: "Ophthalmologist",
        secondary: "Allergist"
      },
      {
        medical: "Dyspepsia",
        common: "Indigestion, upset stomach",
        primary: "Gastroenterologist",
        secondary: "General Practitioner"
      },
      {
        medical: "Fatigue",
        common: "Extreme tiredness, exhaustion",
        primary: "General Practitioner",
        secondary: "Endocrinologist"
      },
      {
        medical: "Erythema",
        common: "Skin redness, rash",
        primary: "Dermatologist",
        secondary: "Allergist"
      },
      {
        medical: "Otalgia",
        common: "Ear pain, earache",
        primary: "Otolaryngologist (ENT)",
        secondary: "General Practitioner"
      },
      {
        medical: "Anxiety",
        common: "Worry, nervousness, panic",
        primary: "Psychiatrist",
        secondary: "Psychologist"
      },
      {
        medical: "Edema",
        common: "Swelling, fluid retention",
        primary: "Cardiologist",
        secondary: "Nephrologist"
      },
      {
        medical: "Amenorrhea",
        common: "Missed periods, absence of menstruation",
        primary: "Gynecologist",
        secondary: "Endocrinologist"
      },
      {
        medical: "Hypertension",
        common: "High blood pressure",
        primary: "Cardiologist",
        secondary: "General Practitioner"
      },
      {
        medical: "Alopecia",
        common: "Hair loss, balding",
        primary: "Dermatologist",
        secondary: "Endocrinologist"
      },
      {
        medical: "Pharyngitis",
        common: "Sore throat, throat pain",
        primary: "Otolaryngologist (ENT)",
        secondary: "General Practitioner"
      }
    ]
  },
  contact: {
    title: "Contact MediLingua",
    body: "Have a question or want to reach out? Fill in the form and we'll get back to you!",
    name: "Your name",
    email: "Your email",
    message: "Your message",
    send: "Send message",
    info: "Your information is safe with us."
  },
  navbar: {
    home: "Home",
    about: "About",
    findDoctors: "Find Doctors",
    contact: "Contact",
  },
  findDoctors: {
    title: "Find a Doctor or Specialist",
    subtitle: "Search for doctors by language, specialty, and your location.",
    search: "Search for Doctors",
    specialty: "Specialty",
    namePlaceholder: "Doctor or clinic name",
    locationPlaceholder: "Location",
    specialtyPlaceholder: "Specialty",
    language: "Language",
    searchResults: "Search results will appear here.",
    availability: {
      title: "Availability",
      showOnlyAvailable: "Show only doctors accepting new patients",
      all: "All doctors",
      available: "Accepting new patients",
      full: "Currently full",
      moreInfo: "More information",
      modal: {
        title: "About Doctor Availability",
        subtitle: "Information about the availability system",
        description: "Many medical practices in the area have a patient stop due to high workload. MediLingua works with medical associations to provide real-time information about which doctors still have room for new patients. This information is regularly updated by the doctors themselves.",
        warning: "Note",
        warningText: "Availability can change quickly. We recommend contacting the practice directly to confirm current status."
      },
      badge: {
        available: "Accepting new patients",
        full: "Practice full"
      },
      spots: "spots available"
    },
    filters: {
      hideFilters: "Hide filters",
      showFilters: "Show filters",
      hideMap: "Hide map",
      showMap: "Show map"
    },
    map: {
      title: "Doctor Locations",
      loadingText: "Loading map...",
      errorText: "Error loading map. Please check your API key.",
      noResultsText: "No doctors found in this area."
    }
  },
  languageSelector: {
    tooltip: "Select your preferred language. This changes the website's language.",
    ariaLabel: "Select language"
  }
};
export default en;
