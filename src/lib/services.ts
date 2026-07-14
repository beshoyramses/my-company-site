export interface ServiceFaq {
  question: string;
  questionAr?: string;
  answer: string;
  answerAr?: string;
}

export interface Service {
  slug: string;
  title: string;
  titleAr?: string;
  shortDesc: string;
  shortDescAr?: string;
  description: string;
  descriptionAr?: string;
  features: string[];
  featuresAr?: string[];
  discount?: string;
  discountAr?: string;
  images: string[];
  icon: string;
  locationLabel?: string;
  seoTitle?: string;
  seoDescription?: string;
  keywords?: string[];
  longDescription?: string;
  longDescriptionAr?: string;
  faqs?: ServiceFaq[];
}

export const services: Service[] = [
  {
    slug: "marble-polishing",
    title: "Marble Polishing",
    titleAr: "تلميع الرخام",
    shortDesc: "Restore the mirror finish to your marble surfaces.",
    shortDescAr: "أعد اللمعة البراقة إلى أسطحك الرخامية.",
    description:
      "We use industrial diamond abrasives to remove scratches, etch marks, and stains, leaving your marble floors, countertops, and stairs with a showroom shine. Our process includes honing, polishing, and sealing for long‑lasting protection.",
    descriptionAr:
      "نستخدم مواد كاشطة ماسية صناعية لإزالة الخدوش والعلامات والاتساخات، تاركين أرضياتك ورقائقك وسلالمك براقة كالمعرض. يشمل العمل الصقل والتلميع والت sealing للحماية طويلة الأمد.",
    features: [
      "Diamond polishing",
      "Stain removal",
      "Sealing & protection",
      "Residential & commercial",
    ],
    featuresAr: [
      "تلميع بالماس",
      "إزالة البقع",
      "الت sealing والحماية",
      "سكني وتجاري",
    ],
    images: [
      "/og-images/marble-polshing (1).jpeg",
      "/og-images/marble-polshing (2).jpeg",
      "/og-images/marble-polshing (3).jpeg",
      "/og-images/marble-polshing (4).jpeg",
      "/og-images/marble-polshing (5).jpeg",
      "/og-images/marble-polshing (6).jpeg",
      "/og-images/marble-polshing (7).jpeg",
      "/og-images/marble-polshing (8).jpeg",
    ],
    icon: "✨",
    locationLabel: "El Gouna",
    seoTitle: "Marble Polishing in El Gouna | Professional Floor Restoration",
    seoDescription:
      "Professional marble polishing in El Gouna. Diamond honing, stain removal, and sealing for villas, hotels, and apartments in G-Cribs and Hurghada. Free quote — call +20 128 173 7377.",
    keywords: [
      "marble polishing El Gouna",
      "marble polishing in El Gouna",
      "marble restoration El Gouna",
      "floor polishing El Gouna",
      "marble sealing El Gouna",
      "تلميع الرخام في الجونة",
    ],
    longDescription:
      "El Gouna villas, chalets, and hotels rely on marble floors and countertops to create a premium feel — but Red Sea humidity, sand, and daily foot traffic quickly dull the shine. Our marble polishing service in El Gouna restores that mirror finish using industrial diamond abrasives, professional honing, and long-lasting sealants.\n\nWe work across El Gouna, G-Cribs, Abu Tig, Kafr El Gouna, and nearby Hurghada properties. Whether you need a single bathroom countertop refreshed or an entire villa floor restored, our team handles residential and commercial projects with minimal disruption.\n\nEvery job includes a full assessment, scratch and etch mark removal, diamond polishing, and protective sealing so your marble stays brilliant for years. Contact us today for a free on-site quote in El Gouna.",
    longDescriptionAr:
      "تعتمد فلل وشاليهات وفنادق الجونة على أرضيات وأسطح رخامية لإضفاء طابع فاخر، لكن رطوبة البحر الأحمر والرمال والاستخدام اليومي تسرّع من بهتان اللمعة. خدمة تلميع الرخام لدينا في الجونة تعيد اللمعان باستخدام مواد كاشطة ماسية صناعية وصقل احترافي ومواد حماية طويلة الأمد.\n\nنعمل في الجونة وG-Cribs وأبو تيج وكفر الجونة وممتلكات الغردقة القريبة. سواء كنت بحاجة إلى تجديد رخام حمام واحد أو استعادة أرضية فيلا كاملة، يتولى فريقنا المشاريع السكنية والتجارية بأقل قدر من الإزعاج.\n\nيشمل كل مشروع تقييمًا كاملاً وإزالة الخدوش والعلامات والتلميع بالماس والحماية بالـ sealing. تواصل معنا اليوم للحصول على عرض سعر مجاني في الجونة.",
    faqs: [
      {
        question: "How much does marble polishing cost in El Gouna?",
        questionAr: "كم تكلفة تلميع الرخام في الجونة؟",
        answer:
          "Pricing depends on the area size, marble condition, and whether honing or sealing is required. We provide free on-site quotes across El Gouna and G-Cribs — contact us at +20 128 173 7377 for an accurate estimate.",
        answerAr:
          "تعتمد التكلفة على مساحة السطح وحالة الرخام وما إذا كان الصقل أو الـ sealing مطلوبًا. نقدم عروض أسعار مجانية في موقعك في الجونة وG-Cribs — تواصل معنا على +20 128 173 7377.",
      },
      {
        question: "How long does marble polishing take?",
        questionAr: "كم يستغرق تلميع الرخام؟",
        answer:
          "A typical villa living area takes one to two days including honing, polishing, and sealing. Smaller surfaces like bathroom countertops can often be completed in a few hours.",
        answerAr:
          "تستغرق صالة فيلا نموذجية من يوم إلى يومين تشمل الصقل والتلميع والحماية. الأسطح الأصغر مثل رخام الحمامات يمكن إنجازها غالبًا في بضع ساعات.",
      },
      {
        question: "Do you serve G-Cribs and Hurghada as well as El Gouna?",
        questionAr: "هل تخدمون G-Cribs والغردقة بالإضافة إلى الجونة؟",
        answer:
          "Yes. We provide marble polishing throughout El Gouna, G-Cribs, Abu Tig, and Hurghada. Our team travels to your property for assessment and service.",
        answerAr:
          "نعم. نقدم تلميع الرخام في جميع أنحاء الجونة وG-Cribs وأبو تيج والغردقة. يتنقل فريقنا إلى ممتلكاتك للتقييم والخدمة.",
      },
      {
        question: "What is included in your marble polishing service?",
        questionAr: "ماذا يتضمن خدمة تلميع الرخام لديكم؟",
        answer:
          "Every service includes surface assessment, scratch and stain removal, diamond honing and polishing, and a protective sealant application. We work on floors, stairs, countertops, and bathroom marble.",
        answerAr:
          "تشمل كل خدمة تقييم السطح وإزالة الخدوش والبقع والصقل والتلميع بالماس وتطبيق مادة حماية. نعمل على الأرضيات والسلالم وأسطح المطبخ والرخام في الحمامات.",
      },
    ],
  },
  {
    slug: "chalet-rent-weekly-discount",
    title: "Chalet Rental – 20% Weekly Discount",
    titleAr: "إيجار شاليه – خصم 20% للإقامة الأسبوعية",
    shortDesc: "Cozy one-bedroom studio in G-Cribs with free pool access.",
    shortDescAr:
      "استوديو دافئ بغرفة نوم واحدة في G-Cribs مع دخول مجاني إلى المسبح.",
    description:
      "This cozy one-bedroom studio is located in G-Cribs and includes free access to the swimming pool. The studio features an open kitchenette, a comfortable sofa, a king-size bed, a dining table, and a 43-inch Smart TV.",
    descriptionAr:
      "يقع هذا الاستوديو الدافئ المكون من غرفة نوم واحدة في G-Cribs ويشمل دخولًا مجانيًا إلى المسبح. يتميز الاستوديو بمطبخ مفتوح وأريكة مريحة وسرير ملكي الحجم وطاولة طعام وتلفزيون ذكي 43 بوصة.",
    features: [
      "King-size bed",
      "Sofa bed",
      "Central air conditioning",
      "43-inch Smart TV",
      "Free Wi-Fi",
      "Fully equipped kitchen",
      "Full bathroom",
      "Washing machine",
      "Private balcony with pool view",
      "Free access to the swimming pool",
    ],
    featuresAr: [
      "سرير ملكي الحجم",
      "سرير أريكة",
      "تكييف مركزي",
      "تلفزيون ذكي 43 بوصة",
      "واي فاي مجاني",
      "مطبخ مجهز بالكامل",
      "حمام كامل",
      "غسالة",
      "شرفة خاصة بإطلالة على المسبح",
      "دخول مجاني إلى المسبح",
    ],
    discount: "20% off for weekly stays",
    discountAr: "خصم 20% للإقامات الأسبوعية",
    images: [
      "/og-images/gcribs (1).jpeg",
      "/og-images/gcribs (2).jpeg",
      "/og-images/gcribs (3).jpeg",
      "/og-images/gcribs (4).jpeg",
      "/og-images/gcribs (5).jpeg",
      "/og-images/gcribs (6).jpeg",
      "/og-images/gcribs (7).jpeg",
      "/og-images/gcribs (8).jpeg",
    ],
    icon: "🏡",
  },
  {
    slug: "chalet-sale-rent",
    title: "Chalet For Sale & Rent — 9,000,000 EGP",
    titleAr: "شاليه للشراء أو الإيجار — 9,000,000 جنيه",
    shortDesc:
      "Cozy one-bedroom apartment in Scarab, El Gouna for short or long stays.",
    shortDescAr:
      "شقة مريحة بغرفة نوم واحدة في Scarab، الجونة للإقامة القصيرة أو الطويلة.",
    description:
      "Relax in this cozy one-bedroom apartment located in Scarab, El Gouna. The apartment features a separate bedroom, a spacious living room, a fully equipped kitchen, and two bathrooms. Its comfortable and practical design makes it an excellent choice for both short and long stays.",
    descriptionAr:
      "استرخِ في هذه الشقة المريحة المكونة من غرفة نوم واحدة في Scarab، الجونة. تتميز الشقة بغرفة نوم منفصلة وصالة واسعة ومطبخ مجهز بالكامل وحمامين. يجعلها تصميمها المريح والعملي خيارًا ممتازًا للإقامة القصيرة أو الطويلة.",
    features: [
      "Bedroom with king-size bed",
      "Private en-suite bathroom",
      "Air conditioning in bedroom and living room",
      "Spacious living room with sofa bed",
      "Dining table",
      "Smart TV",
      "Fully equipped kitchen",
      "Washing machine",
      "Guest bathroom",
      "Comfortable private balcony",
    ],
    featuresAr: [
      "غرفة نوم بسرير ملكي الحجم",
      "حمام خاص داخلي",
      "تكييف في غرفة النوم والصالة",
      "صالة واسعة مع سرير أريكة",
      "طاولة طعام",
      "تلفزيون ذكي",
      "مطبخ مجهز بالكامل",
      "غسالة",
      "حمام للضيوف",
      "شرفة خاصة مريحة",
    ],
    images: [
      "/og-images/scarab (1).jpeg",
      "/og-images/scarab (2).jpeg",
      "/og-images/scarab (3).jpeg",
      "/og-images/scarab (4).jpeg",
      "/og-images/scarab (5).jpeg",
      "/og-images/scarab (6).jpeg",
      "/og-images/scarab (7).jpeg",
      "/og-images/scarab (8).jpeg",
    ],
    icon: "🏖️",
  },
  {
    slug: "airport-transfer",
    title: "Airport Transfer (Go & Return)",
    titleAr: "نقل المطار (ذهابًا وإيابًا)",
    shortDesc: "Comfortable go & return transfers to/from the airport.",
    shortDescAr: "نقل مريح ذهابًا وإيابًا من وإلى المطار.",
    description:
      "Travel stress‑free with our private transfer service. We monitor your flight, meet you at arrivals, and drive you directly to your destination. Return trips included.",
    descriptionAr:
      "سافر بخفة بالغة مع خدمة النقل الخاصة لدينا. نتابع رحلتك ونستقبلك عند الوصول ونقلك مباشرة إلى وجهتك. تشمل الرحلات العودة.",
    features: [
      "Flight monitoring",
      "Meet & greet",
      "Luxury vehicles",
      "Fixed pricing",
    ],
    featuresAr: [
      "متابعة الرحلة",
      "استقبال ومرافقة",
      "مركبات فاخرة",
      "أسعار ثابتة",
    ],
    images: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop",
    ],
    icon: "🛫",
  },
  {
    slug: "general-finishing",
    title: "General Finishing",
    titleAr: "التشطيبات العامة",
    shortDesc: "Complete interior & exterior finishing works.",
    shortDescAr: "أعمال تشطيب كاملة للداخلي والخارجي.",
    description:
      "From plastering and painting to carpentry and flooring, we deliver high‑quality finishing for new builds and renovations. One‑stop solution for a flawless handover.",
    descriptionAr:
      "من الجص والدهان إلى النجارة والأرضيات، نقدم تشطيبات عالية الجودة للمشاريع الجديدة والتجديدات. حل واحد متكامل لتسليم مثالي.",
    features: ["Plastering & painting", "Carpentry", "Flooring", "Renovation"],
    featuresAr: ["الجص والدهان", "النجارة", "الأرضيات", "التجديد"],
    images: [
      "/og-images/general-finishing (1).jpeg",
      "/og-images/general-finishing (2).jpeg",
      "/og-images/general-finishing (3).jpeg",
      "/og-images/general-finishing (4).jpeg",
      "/og-images/general-finishing (5).jpeg",
      "/og-images/general-finishing (6).jpeg",
      "/og-images/general-finishing (7).jpeg",
      "/og-images/general-finishing (8).jpeg",
    ],
    icon: "🔨",
  },
];
