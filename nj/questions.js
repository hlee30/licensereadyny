// Original questions based on study concepts reviewed in RealEstateU.
const questions = [
  {
    "category": "Property Characteristics",
    "question": "Which characteristic explains why two parcels cannot be identical in every respect?",
    "answers": [
      "Non-homogeneity",
      "Liquidity",
      "Depreciation",
      "Mobility"
    ],
    "correct": 0,
    "explanation": "Every parcel has a unique location and combination of characteristics."
  },
  {
    "category": "Property Characteristics",
    "question": "The lasting nature of land is described as what?",
    "answers": [
      "Durability",
      "Obsolescence",
      "Rentability",
      "Severability"
    ],
    "correct": 0,
    "explanation": "Durability refers to the enduring nature of land itself."
  },
  {
    "category": "Property Characteristics",
    "question": "Two lots have equal dimensions but different locations. Which statement is accurate?",
    "answers": [
      "They are still unique parcels",
      "They must have equal values",
      "They are interchangeable",
      "Their locations do not affect their characteristics"
    ],
    "correct": 0,
    "explanation": "Equal dimensions do not eliminate differences in location and surroundings."
  },
  {
    "category": "Legal Descriptions",
    "question": "Which description method follows boundary distances and directions?",
    "answers": [
      "Metes and bounds",
      "Lot and block only",
      "A street address",
      "A room schedule"
    ],
    "correct": 0,
    "explanation": "Metes and bounds traces boundaries using measurements and directions."
  },
  {
    "category": "Legal Descriptions",
    "question": "A description identifies Lot 8, Block 3 on a recorded subdivision map. Which method is being used?",
    "answers": [
      "Lot and block",
      "Metes and bounds",
      "Income capitalization",
      "Square-foot pricing"
    ],
    "correct": 0,
    "explanation": "Lot and block references lots and blocks on a recorded plat."
  },
  {
    "category": "Legal Descriptions",
    "question": "What is the map used with a lot-and-block description called?",
    "answers": [
      "A plat map",
      "An amortization table",
      "An inspection report",
      "A rent roll"
    ],
    "correct": 0,
    "explanation": "A recorded plat shows the subdivision and its numbered lots and blocks."
  },
  {
    "category": "Legal Descriptions",
    "question": "A metes-and-bounds description returns to which starting reference?",
    "answers": [
      "Point of Beginning",
      "Center of the nearest highway",
      "Highest point of the parcel",
      "County courthouse"
    ],
    "correct": 0,
    "explanation": "The boundary description closes by returning to its Point of Beginning."
  },
  {
    "category": "Legal Descriptions",
    "question": "In the rectangular government survey system, a principal meridian runs in which direction?",
    "answers": [
      "North–south",
      "East–west",
      "Only diagonally",
      "Along every parcel boundary"
    ],
    "correct": 0,
    "explanation": "Principal meridians run north–south; base lines run east–west."
  },
  {
    "category": "Legal Descriptions",
    "question": "Which land-description system uses townships, ranges, and sections?",
    "answers": [
      "Government survey",
      "Lot and block only",
      "Street numbering",
      "Building measurement"
    ],
    "correct": 0,
    "explanation": "The rectangular government survey system organizes land into a grid."
  },
  {
    "category": "Property Math",
    "question": "A rectangular parcel measures 85 feet by 140 feet. What is its area?",
    "answers": [
      "11,900 square feet",
      "450 square feet",
      "5,950 square feet",
      "23,800 square feet"
    ],
    "correct": 0,
    "explanation": "Area = length × width = 85 × 140 = 11,900 square feet."
  },
  {
    "category": "Property Math",
    "question": "A triangular parcel has a base of 160 feet and a perpendicular height of 75 feet. What is its area?",
    "answers": [
      "6,000 square feet",
      "12,000 square feet",
      "235 square feet",
      "3,000 square feet"
    ],
    "correct": 0,
    "explanation": "Triangle area = ½ × base × perpendicular height = ½ × 160 × 75 = 6,000."
  },
  {
    "category": "Property Math",
    "question": "How many square feet are in 250 square yards?",
    "answers": [
      "2,250",
      "750",
      "83.33",
      "27.78"
    ],
    "correct": 0,
    "explanation": "A square yard contains 3 × 3 = 9 square feet. Multiply 250 by 9."
  },
  {
    "category": "Property Math",
    "question": "A rectangular lot is 90 feet by 150 feet. What is its perimeter?",
    "answers": [
      "480 feet",
      "13,500 feet",
      "240 feet",
      "960 feet"
    ],
    "correct": 0,
    "explanation": "Perimeter = 2 × (90 + 150) = 480 feet."
  },
  {
    "category": "Property Math",
    "question": "A fence is 540 feet long. How many yards is that?",
    "answers": [
      "180 yards",
      "1,620 yards",
      "60 yards",
      "540 yards"
    ],
    "correct": 0,
    "explanation": "There are 3 feet in a yard. Divide 540 by 3."
  },
  {
    "category": "Property Math",
    "question": "An L-shaped parcel consists of two non-overlapping rectangles: 100 × 80 feet and 60 × 40 feet. What is the total area?",
    "answers": [
      "10,400 square feet",
      "8,000 square feet",
      "5,600 square feet",
      "19,200 square feet"
    ],
    "correct": 0,
    "explanation": "Add the two areas: 8,000 + 2,400 = 10,400 square feet."
  },
  {
    "category": "Space Measurement",
    "question": "Which term describes office space occupied exclusively by a tenant?",
    "answers": [
      "Usable area",
      "Rentable area including shared space",
      "Total site acreage",
      "Building footprint"
    ],
    "correct": 0,
    "explanation": "Usable area refers to the space for the tenant’s exclusive use."
  },
  {
    "category": "Space Measurement",
    "question": "Which measurement adds an allocated share of common areas to usable office space?",
    "answers": [
      "Rentable area",
      "Usable area",
      "Lot area",
      "Residential living area"
    ],
    "correct": 0,
    "explanation": "Rentable area includes usable space plus an allocated share of common areas."
  },
  {
    "category": "Space Measurement",
    "question": "An office has 900 usable square feet and 135 square feet of allocated common area. What is its rentable area?",
    "answers": [
      "1,035 square feet",
      "900 square feet",
      "765 square feet",
      "135 square feet"
    ],
    "correct": 0,
    "explanation": "Rentable area = 900 + 135 = 1,035 square feet."
  },
  {
    "category": "Space Measurement",
    "question": "Which area term is generally associated with the space used for living in a residence?",
    "answers": [
      "Livable area",
      "Rentable office area",
      "Allocated lobby area",
      "Subdivision area"
    ],
    "correct": 0,
    "explanation": "Livable area describes residential living space; exact measurement rules depend on the applicable standard."
  },
  {
    "category": "Fixtures and Personal Property",
    "question": "Which item is most likely personal property rather than a fixture?",
    "answers": [
      "A freestanding portable fan",
      "A built-in kitchen cabinet",
      "A hardwired ceiling light",
      "A permanently installed sink"
    ],
    "correct": 0,
    "explanation": "A portable fan is movable and is not permanently attached."
  },
  {
    "category": "Fixtures and Personal Property",
    "question": "Custom shelving is fastened to a wall and built to fit an alcove. Which two fixture factors are illustrated?",
    "answers": [
      "Attachment and adaptability",
      "Rent and interest",
      "Area and perimeter",
      "Scarcity and demand"
    ],
    "correct": 0,
    "explanation": "Physical attachment and customization to the space support fixture classification."
  },
  {
    "category": "Fixtures and Personal Property",
    "question": "Which contract approach best clarifies whether a disputed item stays with a property?",
    "answers": [
      "Specifically list the item as included or excluded",
      "Rely on an unrecorded assumption",
      "Wait until after closing",
      "Ignore it because all movable items stay"
    ],
    "correct": 0,
    "explanation": "Written inclusion and exclusion terms clarify the parties’ agreement."
  },
  {
    "category": "Fixtures and Personal Property",
    "question": "Which item most clearly shows permanent attachment?",
    "answers": [
      "A light fixture wired into the ceiling",
      "A table lamp on a desk",
      "A folding chair",
      "A rug lying loose on the floor"
    ],
    "correct": 0,
    "explanation": "Hardwiring is evidence of attachment, unlike ordinary movable furniture."
  },
  {
    "category": "Fixtures and Personal Property",
    "question": "A seller wishes to keep a built-in decorative fixture. What should the agreement clearly state?",
    "answers": [
      "That the identified fixture is excluded from the sale",
      "Only the seller’s preferred moving date",
      "The brand of the buyer’s furniture",
      "Nothing about the fixture"
    ],
    "correct": 0,
    "explanation": "A specific written exclusion makes the intended treatment clear."
  }
];
