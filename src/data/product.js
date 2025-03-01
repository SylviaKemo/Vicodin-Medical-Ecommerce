const products = [
  {
    id: 1,
    category: "Aches and pain",
    name: "Voltaren Gel 50g",
    price: 996,
    description:
      "Voltaren Emulgel is used to treat pain and inflammation of muscles, joints, tendons and ligaments, due to sprains and strains, sports injuries (eg. tennis elbow) and soft tissue rheumatism (eg. bursitis; tendinitis).",
    img: "https://www.goodlife.co.ke/wp-content/smush-webp/2021/09/VOLTAREN-GEL-50G.jpg.webp",
  },
  {
    id: 2,
    category: "Aches and pain",
    name: "Panadol Syrup Child 5-12 Years",
    price: 586,
    description:
      "Children?s panadol (5-12years) is an elixir which relieves pain and fever associated with teething, toothache, sore throat, childhood infections and vaccinations",
    img: "https://www.goodlife.co.ke/wp-content/smush-webp/2021/09/PANADOL-SYRUP-CHILD-5-12-YEARS-2-scaled-1.jpg.webp",
  },
  {
    id: 3,
    category: "Aches and pain",
    name: "Epsom Salt 100Gm",
    price: 133,
    description:
      "Epsom Salt 100G Provides Magnesium. As A Result, It Promotes Sleep And Stress Reduction. Helps With Constipation. In Addition, It Works To Reduce Pain And Swelling.",
    img: "https://www.goodlife.co.ke/wp-content/smush-webp/2022/05/EPSOM-SALT.jpg.webp",
  },
  {
    id: 4,
    category: "Aches and pain",
    name: "Deep Heat Period Pain Patch 1S",
    price: 150,
    description:
      "Deep Heat Period Pain Patch is a long-lasting deep penetrating heat therapy which provides soothing relief from menstrual cramps and pain for up to 12 hours.Warming Soothing Relief for Muscular pain & menstrual cramps",
    img: "https://www.goodlife.co.ke/wp-content/smush-webp/2023/08/Deep-Heat-Period-Pain-Patch.png.webp",
  },
  {
    id: 5,
    category: "Bites and Stings",
    name: "Anthisan Bite and Sting Cream 20g",
    price: 1365,
    description:
      "Relief from pain, itching and inflammation cause by insect bites, insect stings & stinging nettle rash",
    img: "https://www.goodlife.co.ke/wp-content/smush-webp/2021/07/anthisan-bite-sting-cream.jpg.webp",
  },
  {
    id: 6,
    category: "Bites and Stings",
    name: "Savlon Antiseptic Liquid 75Ml",
    price: 219,
    description:
      "Savlon Antiseptic Liquid is a strong antiseptic liquid and it protects against infections by washing out dirt and debris on the skin and killing bacteria or microbes in skin wounds without the need to touch the sore skin.",
    img: "https://www.goodlife.co.ke/wp-content/smush-webp/2023/08/1109442.jpg.webp",
  },
  {
    id: 7,
    category: "Bites and Stings",
    name: "Dettol Liquid 250ml",
    price: 1005,
    description:
      " This versatile and trusted Dettol product provides all-round family protection against germs and has been recommended by medical professionals for generations. Use Dettol Antiseptic Disinfectant Liquid to kill germs on the skin, help protect against infection from cuts, scratches and insect bites and it can also be used as a household disinfectant on surfaces or in laundry",
    img: "https://www.goodlife.co.ke/wp-content/smush-webp/2021/09/250ml-dettol.jpg.webp",
  },
  {
    id: 8,
    category: "Bites and Stings",
    name: "Health Aid Eucalyptus Oil 10Ml",
    price: 2159,
    description:
      "Eucalyptus Oil (Eucalyptus globulus) Oil Safety Warning For external use only. Do not use undiluted on the skin. Keep out of reach of children. Avoid contact with sensitive areas such as eyes. Always use pure oils with caution.",
    img: "https://www.goodlife.co.ke/wp-content/smush-webp/2023/08/1105074.jpg.webp",
  },
  {
    id: 9,
    category: "Skin Treatment",
    name: "La Roche-Posay Lipikar Baume AP+ M 400ml",
    price: 3730,
    description:
      "La Roche-Posay Lipikar Baume AP+ M 400ml Anti-Irritation, Anti-Scratching Balm 200ml",
    img: "https://www.goodlife.co.ke/wp-content/smush-webp/2021/09/la-roche-posay-lipikar-ap-m-balm-400ml.jpg.webp",
  },
  {
    id: 10,
    category: "Skin Treatment",
    name: "Sebamed Clear Face Care Gel 50ml",
    price: 1820,
    description:
      "Get rid of pimples with the Sebamed Clear Face Care Gel it targets your breakouts, help to heal your acne without damaging or drying out your skin. Specially formulated to balance out your skin’s pH level, it hydrates and moisturizes your facial skin while protecting it against bacteria.",
    img: "https://www.goodlife.co.ke/wp-content/smush-webp/2021/09/SEBAMED-CLEAR-FACE-GEL.jpg.webp",
  },
  {
    id: 11,
    category: "Skin Treatment",
    name: "Oatveen Eczema Cream 400Ml",
    price: 2895,
    description:
      "To enhance repair, hydration and moisturization while restoring the skin’s protective layer. Suitable for moderate to severe case of Atopic Eczema. Stabilized at lower pH of around 4.9 to help balance the elevated pH in AD skin.",
    img: "https://www.goodlife.co.ke/wp-content/smush-webp/2023/06/1134008-Oatveen-Eczema-Cream-400Ml.jpg.webp",
  },
  {
    id: 12,
    category: "Skin Treatment",
    name: "Epimol-B Plus Emollient Cream 400g",
    price: 1944,
    description:
      "Epimol-B Plus Cream is specifically formulated with a higher concentration of functional ingredients such as Cetomacrogol, Glycerin, Niacinamide and Urea tomoisturizevery dry skin and restore the skin?s protective barrier function",
    img: "https://www.goodlife.co.ke/wp-content/smush-webp/2021/09/Epimol-B-Plus-Emollient-Cream-400g.jpg.webp",
  },
  {
    id: 13,
    category: "Eye and Ear Care",
    name: "Tears Naturale Ii",
    price: 1039,
    description:
      "Replacement Of The Missing Natural Tears With An Artificial Tear Helps To Soothe And Lubricate Your Eyes And Provide Relief From Irritation",
    img: "https://www.goodlife.co.ke/wp-content/smush-webp/2022/05/tears.jpg.webp",
  },
  {
    id: 14,
    category: "Eye and Ear Care",
    name: "Refresh Tears 15mls",
    price: 1201,
    description:
      "Refresh Tears is a lubricating formulation similar to normal tears, containing a mild non-sensitising preservative that, when used, ultimately changes into components of natural tears.",
    img: "https://www.goodlife.co.ke/wp-content/smush-webp/2021/09/REFRESH-TEARS-15MLS.jpg.webp",
  },
  {
    id: 15,
    category: "Eye and Ear Care",
    name: "Fixodent Denture Cream Original 47Ml",
    price: 1244,
    description:
      "Fixodent Denture Adhesive with light mint flavor especially designed for extra; complete solution with three benefits: (strong hold texture, improved comfort and Foodseal — 10x stronger hold vs. no adhesive; for full and partial dentures;",
    img: "https://www.goodlife.co.ke/wp-content/smush-webp/2023/08/1104292-300x300.jpg.webp",
  },
  {
    id: 16,
    category: "Eye and Ear Care",
    name: "Opticrom Eye Drops 10Ml",
    price: 2178,
    description:
      "The prevention and treatment of acute, seasonal and perennial allergic conjunctivitis.",
    img: "https://www.goodlife.co.ke/wp-content/smush-webp/2022/08/Opticrom-allergy-eye-drops_pharmhealth-compressor1.jpg.webp",
  },
  {
    id: 17,
    category:"Oral Care",
    name:"Betadine Mouthwash 250ml",
    price: 1410,
    description:"Betadine Gargle and Mouthwash contains povidone iodine which kills a wide range of ger",
    img:"https://www.goodlife.co.ke/wp-content/smush-webp/2021/09/BETADINE_MOUTHWASG-GARGLE_250ML_1-768x768-1-300x300.jpg.webp",
  },
   {
    id:18,
    category:"Oral Care",
    name:"Andolex C Mouth Wash 200ml",
    price:2668,
    description:"Andolex -C gives temporarily relieves painful inflamed conditions of the mouth including mouth and denture ulcers and sore gums",
    img:"https://www.goodlife.co.ke/wp-content/smush-webp/2021/09/Andolex-C-MouthWash-200ml.jpeg.webp",
  },
   {
    id:19,
    category:"Oral Care",
    name:"Listerine Cool Mint Mouth Wash 500ml",
    price:2578,
    description:"COOL MINT is not only a germ killer but also a people pleaser. Its been Americas favorite for years. Just 30 seconds of rinsing, twice a day. That’s all it takes when you use LISTERINE COOL MINT Antiseptic Mouthwash. You’ll get 24-hour protection with clinically proven health benefits.",
    img:"https://www.goodlife.co.ke/wp-content/smush-webp/2021/09/LISTERINE-COOL-MINT-MWASH-250ML-1-1.jpg.webp",
  },
   {
    id:20,
    category:"Oral Care",
    name:"Sensodyne Toothpaste Repair & Protect 75ml",
    price: 1139,
    description:"New Sensodyne Advanced Repair & Protect with NOVAMIN is different from other Sensodyne toothpastes. It has a unique, clinically proven concentrated calcium formula that helps repair vulnerable areas with the natural building blocks of your teeth.With twice daily brushing, Sensodyne Advanced Repair & Protect helps repair sensitive areas and strengthen your teeth. It also has a fresh minty taste to leave your mouth feeling clean and fresh. Now available online on Kasha Kenya and at affordable prices ever!!",
    img:"https://www.goodlife.co.ke/wp-content/smush-webp/2021/09/senso-repair-and-protect-scaled-1.jpg.webp",
  },
];

export default products;