// Original practice questions; scope reviewed 2026-09-29.
const questions = [
  {
    "category": "Agency",
    "question": "Which fiduciary duty requires a real estate agent to place the client's interests above the agent's own interests?",
    "answers": [
      "Accounting",
      "Disclosure",
      "Loyalty",
      "Reasonable Care"
    ],
    "correct": 2,
    "explanation": "Loyalty means putting the client's interests ahead of the agent's own interests.",
    "id": "ny-course-001",
    "scope": "general"
  },
  {
    "category": "Agency",
    "question": "Which type of agent is authorized to perform one specific act or a limited number of acts for a principal?",
    "answers": [
      "Universal agent",
      "General agent",
      "Special agent",
      "Dual agent"
    ],
    "correct": 2,
    "explanation": "Special agency grants limited authority for a specific act or transaction.",
    "id": "ny-course-002",
    "scope": "general"
  },
  {
    "category": "Agency",
    "question": "In agency terminology, what is representation of both buyer and seller in the same transaction called?",
    "answers": [
      "Universal agency",
      "Single agency",
      "Dual agency",
      "Subagency"
    ],
    "correct": 2,
    "explanation": "This is dual agency. Whether it is permitted, and the required disclosures and consent, depend on state law.",
    "id": "ny-course-003",
    "scope": "general"
  },
  {
    "category": "Agency",
    "question": "Which fiduciary duty requires an agent to properly safeguard and account for money or property belonging to a client?",
    "answers": [
      "Obedience",
      "Accounting",
      "Loyalty",
      "Confidentiality"
    ],
    "correct": 1,
    "explanation": "Accounting requires safeguarding and properly accounting for entrusted property and funds.",
    "id": "ny-course-004",
    "scope": "general"
  },
  {
    "category": "Real Estate Practice",
    "question": "A broker receives a buyer's earnest-money deposit and places it into the brokerage's operating account along with the broker's own funds. What violation has occurred?",
    "answers": [
      "Conversion",
      "Commingling",
      "Puffing",
      "Blockbusting"
    ],
    "correct": 1,
    "explanation": "Mixing client funds with brokerage operating funds is commingling.",
    "id": "ny-course-005",
    "scope": "general"
  },
  {
    "category": "Real Estate Practice",
    "question": "A salesperson tells homeowners that members of a protected class are moving into the neighborhood and encourages the homeowners to sell. What is this practice called?",
    "answers": [
      "Steering",
      "Redlining",
      "Blockbusting",
      "Puffing"
    ],
    "correct": 2,
    "explanation": "Inducing sales by exploiting fears about protected groups entering an area is blockbusting.",
    "id": "ny-course-006",
    "scope": "general"
  },
  {
    "category": "Fair Housing",
    "question": "Which practice occurs when a real estate professional directs buyers toward or away from neighborhoods based on a protected characteristic?",
    "answers": [
      "Blockbusting",
      "Steering",
      "Puffing",
      "Conversion"
    ],
    "correct": 1,
    "explanation": "Steering limits housing choices based on protected characteristics.",
    "id": "ny-course-007",
    "scope": "general"
  },
  {
    "category": "Fair Housing",
    "question": "Which of the following is protected under the federal Fair Housing Act?",
    "answers": [
      "Occupation",
      "Familial status",
      "Credit score",
      "Education level"
    ],
    "correct": 1,
    "explanation": "Familial status is a federally protected housing characteristic, subject to applicable exemptions.",
    "id": "ny-course-008",
    "scope": "general"
  },
  {
    "category": "Contracts",
    "question": "Under the Statute of Frauds, which agreement generally must be in writing to be enforceable?",
    "answers": [
      "A contract for the sale of real property",
      "A request to schedule a showing",
      "A casual conversation about moving",
      "A verbal opinion about a property"
    ],
    "correct": 0,
    "explanation": "A real property sales contract generally falls within the Statute of Frauds writing requirement. This tests the general concept; state law and applicable exceptions control a real transaction.",
    "id": "ny-course-009",
    "scope": "general"
  },
  {
    "category": "Contracts",
    "question": "What is the legal term for something of value exchanged by the parties to a contract?",
    "answers": [
      "Consideration",
      "Estoppel",
      "Novation",
      "Accession"
    ],
    "correct": 0,
    "explanation": "Consideration is legally valuable exchange, including reciprocal promises.",
    "id": "ny-course-010",
    "scope": "general"
  },
  {
    "category": "Valuation",
    "question": "A 25-year-old house has a kitchen with an outdated layout. It could be remodeled for $30,000, and the remodeling would increase the property's value by $45,000. How should an appraiser classify this depreciation?",
    "answers": [
      "Curable physical deterioration",
      "Incurable physical deterioration",
      "Curable functional obsolescence",
      "External obsolescence"
    ],
    "correct": 2,
    "explanation": "The obsolete layout is a functional problem, and the $45,000 benefit exceeds the $30,000 correction cost.",
    "id": "ny-course-011",
    "scope": "general"
  },
  {
    "category": "Valuation",
    "question": "Which appraisal principle says a buyer will not pay more for a property than the cost of acquiring a comparable substitute?",
    "answers": [
      "Contribution",
      "Conformity",
      "Substitution",
      "Progression"
    ],
    "correct": 2,
    "explanation": "Substitution links value to the cost of a comparable alternative.",
    "id": "ny-course-012",
    "scope": "general"
  },
  {
    "category": "Valuation",
    "question": "An outdated floor plan that reduces a property's desirability is an example of what type of depreciation?",
    "answers": [
      "Physical deterioration",
      "Functional obsolescence",
      "External obsolescence",
      "Economic appreciation"
    ],
    "correct": 1,
    "explanation": "An outdated design or layout is functional obsolescence rather than physical wear.",
    "id": "ny-course-013",
    "scope": "general"
  },
  {
    "category": "Finance",
    "question": "A buyer purchases a home for $500,000 and obtains a $400,000 mortgage. What is the loan-to-value ratio?",
    "answers": [
      "20%",
      "40%",
      "80%",
      "125%"
    ],
    "correct": 2,
    "explanation": "Divide the $400,000 loan by the $500,000 price: 0.80, or 80%.",
    "id": "ny-course-014",
    "scope": "general"
  },
  {
    "category": "Finance",
    "question": "One discount point on a mortgage is equal to what percentage of the loan amount?",
    "answers": [
      "0.1%",
      "0.5%",
      "1%",
      "10%"
    ],
    "correct": 2,
    "explanation": "One point equals 1% of the loan principal, not 1% of the property price.",
    "id": "ny-course-015",
    "scope": "general"
  },
  {
    "category": "Finance",
    "question": "Under Regulation Z, which item is used to express the cost of consumer credit as a yearly rate?",
    "answers": [
      "Annual Percentage Rate",
      "Property tax rate",
      "Broker commission",
      "Seller's net proceeds"
    ],
    "correct": 0,
    "explanation": "APR expresses the annual cost of credit, incorporating interest and certain financing charges.",
    "id": "ny-course-016",
    "scope": "general"
  },
  {
    "category": "Property Ownership",
    "question": "Which form of ownership allows two or more people to own unequal shares of the same property without an automatic right of survivorship?",
    "answers": [
      "Tenancy in common",
      "Joint tenancy",
      "Tenancy by the entirety",
      "Life estate"
    ],
    "correct": 0,
    "explanation": "Tenants in common can hold unequal interests and have no automatic survivorship right. This tests the general concept; state law and applicable exceptions control a real transaction.",
    "id": "ny-course-017",
    "scope": "general"
  },
  {
    "category": "Property Ownership",
    "question": "An easement that benefits one parcel of land and burdens another parcel is generally called what?",
    "answers": [
      "Easement in gross",
      "Easement appurtenant",
      "License",
      "Encroachment"
    ],
    "correct": 1,
    "explanation": "An appurtenant easement benefits a dominant parcel and burdens a servient parcel. This tests the general concept; state law and applicable exceptions control a real transaction.",
    "id": "ny-course-018",
    "scope": "general"
  },
  {
    "category": "Property Ownership",
    "question": "A neighbor's fence extends two feet onto another owner's property. This is an example of what?",
    "answers": [
      "Easement",
      "Encroachment",
      "Variance",
      "Lien"
    ],
    "correct": 1,
    "explanation": "A physical intrusion onto another parcel is an encroachment.",
    "id": "ny-course-019",
    "scope": "general"
  },
  {
    "category": "Commercial Real Estate",
    "question": "A tenant occupies 8,000 usable square feet in an office building with a 20% load factor. Approximately how many rentable square feet does the tenant pay rent on?",
    "answers": [
      "8,000 square feet",
      "9,600 square feet",
      "10,000 square feet",
      "12,000 square feet"
    ],
    "correct": 1,
    "explanation": "Using a 20% add-on load factor: 8,000 × 1.20 = 9,600 rentable square feet.",
    "id": "ny-course-020",
    "scope": "general"
  },
  {
    "category": "Commercial Real Estate",
    "question": "What does usable square footage generally measure in an office lease?",
    "answers": [
      "The tenant's actual occupiable area",
      "The entire building including parking",
      "Only the common hallways",
      "The total land area"
    ],
    "correct": 0,
    "explanation": "Usable area generally represents space the tenant can occupy for its own use.",
    "id": "ny-course-021",
    "scope": "general"
  },
  {
    "category": "Commercial Real Estate",
    "question": "Rentable square footage generally includes the tenant's usable area plus what?",
    "answers": [
      "A share of common areas",
      "Only exterior parking",
      "The landlord's mortgage balance",
      "Only the property tax bill"
    ],
    "correct": 0,
    "explanation": "Rentable area adds an allocated common-area share to usable area.",
    "id": "ny-course-022",
    "scope": "general"
  },
  {
    "category": "Commercial Real Estate",
    "question": "In a triple-net lease, the tenant typically pays base rent plus its share of which expenses?",
    "answers": [
      "Taxes, insurance, and operating expenses",
      "Only utilities",
      "Only the landlord's mortgage",
      "Only depreciation"
    ],
    "correct": 0,
    "explanation": "Triple-net leases generally allocate property taxes, insurance, and maintenance or operating costs to the tenant, as the lease specifies.",
    "id": "ny-course-023",
    "scope": "general"
  },
  {
    "category": "Commercial Real Estate",
    "question": "What are CAM charges?",
    "answers": [
      "Common area maintenance charges",
      "Commercial asset mortgage charges",
      "Capital amortization measurements",
      "Consumer appraisal management charges"
    ],
    "correct": 0,
    "explanation": "CAM means common area maintenance; the lease defines the expenses and allocation.",
    "id": "ny-course-024",
    "scope": "general"
  },
  {
    "category": "Commercial Real Estate",
    "question": "Which commercial property type most commonly uses percentage rent based partly on tenant sales?",
    "answers": [
      "Industrial",
      "Office",
      "Retail",
      "Multifamily"
    ],
    "correct": 2,
    "explanation": "Retail percentage leases may combine base rent with rent based on tenant sales.",
    "id": "ny-course-025",
    "scope": "general"
  },
  {
    "category": "Commercial Real Estate",
    "question": "A commercial property has annual net operating income of $800,000 and a value of $10,000,000. What is its capitalization rate?",
    "answers": [
      "5%",
      "6%",
      "8%",
      "10%"
    ],
    "correct": 2,
    "explanation": "Cap rate = $800,000 NOI ÷ $10,000,000 value = 8%.",
    "id": "ny-course-026",
    "scope": "general"
  },
  {
    "category": "Commercial Real Estate",
    "question": "Net operating income is generally calculated before deducting which expense?",
    "answers": [
      "Property management expenses",
      "Insurance",
      "Debt service",
      "Property taxes"
    ],
    "correct": 2,
    "explanation": "NOI reflects property operations before financing costs such as debt service.",
    "id": "ny-course-027",
    "scope": "general"
  },
  {
    "category": "Commercial Real Estate",
    "question": "A property has NOI of $600,000 and annual debt service of $450,000. What is the approximate debt service coverage ratio?",
    "answers": [
      "0.75",
      "1.00",
      "1.33",
      "2.50"
    ],
    "correct": 2,
    "explanation": "Debt service coverage = $600,000 ÷ $450,000 = approximately 1.33.",
    "id": "ny-course-028",
    "scope": "general"
  },
  {
    "category": "Commercial Real Estate",
    "question": "Which industrial-building feature refers to the unobstructed vertical distance available inside a warehouse?",
    "answers": [
      "Clear height",
      "Load factor",
      "Floor area ratio",
      "Expense stop"
    ],
    "correct": 0,
    "explanation": "Clear height measures usable vertical clearance beneath overhead obstructions.",
    "id": "ny-course-029",
    "scope": "general"
  },
  {
    "category": "Materials & Construction",
    "question": "In a forced-air HVAC system, heated or cooled air is distributed throughout the building primarily by:",
    "answers": [
      "Ductwork and supply registers",
      "Steam radiators",
      "Domestic water pipes",
      "Electrical conduit"
    ],
    "correct": 0,
    "explanation": "Forced-air systems distribute conditioned air through ducts and registers.",
    "id": "ny-course-030",
    "scope": "general"
  },
  {
    "category": "Materials & Construction",
    "question": "Which component in a forced-air furnace moves conditioned air through the duct system?",
    "answers": [
      "Blower fan",
      "Expansion tank",
      "Sump pump",
      "Pressure-reducing valve"
    ],
    "correct": 0,
    "explanation": "The blower moves air through the furnace and ductwork.",
    "id": "ny-course-031",
    "scope": "general"
  },
  {
    "category": "Materials & Construction",
    "question": "A furnace differs from a boiler because a furnace typically heats:",
    "answers": [
      "Air",
      "Water",
      "Concrete",
      "Electrical conductors"
    ],
    "correct": 0,
    "explanation": "A furnace heats air; a boiler generally heats water for hot-water or steam distribution.",
    "id": "ny-course-032",
    "scope": "general"
  },
  {
    "category": "Materials & Construction",
    "question": "Which statement best describes a heat pump?",
    "answers": [
      "It can typically provide both heating and cooling",
      "It provides only domestic hot water",
      "It works only with steam radiators",
      "It is part of the plumbing drainage system"
    ],
    "correct": 0,
    "explanation": "A heat pump moves heat and can typically reverse operation to provide heating and cooling.",
    "id": "ny-course-033",
    "scope": "general"
  },
  {
    "category": "Materials & Construction",
    "question": "Radon is a naturally occurring radioactive gas that can enter a building primarily from:",
    "answers": [
      "Soil and rock beneath or around the building",
      "Household cleaning products",
      "Electrical wiring",
      "Roof shingles"
    ],
    "correct": 0,
    "explanation": "Radon arises naturally from radioactive decay in soil and rock and can enter through foundation openings.",
    "id": "ny-course-034",
    "scope": "general"
  },
  {
    "category": "Materials & Construction",
    "question": "What is the most reliable way to determine whether a property has elevated radon levels?",
    "answers": [
      "Inspect the roof",
      "Measure water pressure",
      "Test for radon",
      "Look for visible staining"
    ],
    "correct": 2,
    "explanation": "Radon cannot be reliably identified by sight or smell; testing measures the level.",
    "id": "ny-course-035",
    "scope": "general"
  },
  {
    "category": "Materials & Construction",
    "question": "Which common radon mitigation method uses a fan and piping to draw soil gas from beneath a foundation and exhaust it outdoors?",
    "answers": [
      "Sub-slab depressurization",
      "Forced-air ventilation",
      "Hydronic heating",
      "French drainage"
    ],
    "correct": 0,
    "explanation": "Sub-slab depressurization draws soil gas out from below the slab and vents it outside.",
    "id": "ny-course-036",
    "scope": "general"
  },
  {
    "category": "Materials & Construction",
    "question": "A plumbing trap below a sink is designed primarily to:",
    "answers": [
      "Hold water that blocks sewer gases",
      "Increase water pressure",
      "Heat incoming water",
      "Filter electrical current"
    ],
    "correct": 0,
    "explanation": "The trap retains a water seal that blocks sewer gases from entering occupied space.",
    "id": "ny-course-037",
    "scope": "general"
  },
  {
    "category": "Materials & Construction",
    "question": "A GFCI receptacle is designed primarily to reduce the risk of:",
    "answers": [
      "Electrical shock",
      "Radon exposure",
      "Roof leakage",
      "Foundation settlement"
    ],
    "correct": 0,
    "explanation": "A GFCI interrupts power when it detects a ground-fault imbalance, reducing shock risk.",
    "id": "ny-course-038",
    "scope": "general"
  },
  {
    "category": "Materials & Construction",
    "question": "What is the primary purpose of flashing around a roof penetration?",
    "answers": [
      "Increase insulation",
      "Direct water away from joints and penetrations",
      "Support the roof structure",
      "Vent the attic"
    ],
    "correct": 1,
    "explanation": "Flashing channels water away from vulnerable joints, intersections, and roof penetrations.",
    "id": "ny-course-039",
    "scope": "general"
  },
  {
    "category": "Materials & Construction",
    "question": "A foundation's primary purpose is to:",
    "answers": [
      "Transfer building loads safely to the soil",
      "Distribute conditioned air",
      "Carry wastewater",
      "Generate electricity"
    ],
    "correct": 0,
    "explanation": "Foundations transmit structural loads to supporting soil.",
    "id": "ny-course-040",
    "scope": "general"
  },
  {
    "category": "Materials & Construction",
    "question": "Floor joists are generally:",
    "answers": [
      "Horizontal structural members supporting floors",
      "Vertical plumbing pipes",
      "Roof shingles",
      "Electrical conduits"
    ],
    "correct": 0,
    "explanation": "Joists are repeated horizontal framing members that commonly support floors or ceilings.",
    "id": "ny-course-041",
    "scope": "general"
  },
  {
    "category": "Materials & Construction",
    "question": "Insulation primarily reduces:",
    "answers": [
      "Heat transfer",
      "Electrical grounding",
      "Water pressure",
      "Structural settlement"
    ],
    "correct": 0,
    "explanation": "Insulation slows heat flow through building assemblies.",
    "id": "ny-course-042",
    "scope": "general"
  },
  {
    "category": "Materials & Construction",
    "question": "A higher insulation R-value generally indicates:",
    "answers": [
      "Greater resistance to heat flow",
      "Lower insulation performance",
      "Higher water pressure",
      "Lower roof slope"
    ],
    "correct": 0,
    "explanation": "R-value measures resistance to heat flow; higher values mean greater resistance.",
    "id": "ny-course-043",
    "scope": "general"
  },
  {
    "category": "Materials & Construction",
    "question": "Persistent condensation on cold building surfaces can contribute to:",
    "answers": [
      "Mold growth and material deterioration",
      "Higher insulation value",
      "Improved indoor air quality",
      "Stronger structural framing"
    ],
    "correct": 0,
    "explanation": "Condensation creates moisture that can support mold and damage materials.",
    "id": "ny-course-044",
    "scope": "general"
  },
  {
    "category": "Materials & Construction",
    "question": "Lead-based paint is most commonly associated with housing built before:",
    "answers": [
      "1965",
      "1978",
      "1990",
      "2000"
    ],
    "correct": 1,
    "explanation": "Federal residential lead-based-paint restrictions date to 1978; older housing warrants particular attention.",
    "id": "ny-course-045",
    "scope": "general"
  },
  {
    "category": "Materials & Construction",
    "question": "Mold growth generally requires the presence of:",
    "answers": [
      "Moisture",
      "High electrical voltage",
      "Low roof pitch",
      "Concrete reinforcement"
    ],
    "correct": 0,
    "explanation": "Moisture is a key condition for mold growth.",
    "id": "ny-course-046",
    "scope": "general"
  },
  {
    "category": "Materials & Construction",
    "question": "Carbon monoxide is especially dangerous because it is:",
    "answers": [
      "Colorless and odorless",
      "Brightly colored",
      "Produced only by electrical appliances",
      "Easy to detect without an alarm"
    ],
    "correct": 0,
    "explanation": "Carbon monoxide cannot be seen or smelled, so appropriate alarms are essential.",
    "id": "ny-course-047",
    "scope": "general"
  },
  {
    "category": "Materials & Construction",
    "question": "Which repeated vertical members form the framework of a typical wood wall?",
    "answers": [
      "Studs",
      "Joists",
      "Rafters",
      "Headers"
    ],
    "correct": 0,
    "explanation": "Studs run vertically between wall plates. Joists typically support floors or ceilings.",
    "id": "ny-course-048",
    "scope": "general"
  },
  {
    "category": "Materials & Construction",
    "question": "What is the general name for a horizontal structural member that carries loads across a span?",
    "answers": [
      "Beam",
      "Stud",
      "Downspout",
      "Flashing"
    ],
    "correct": 0,
    "explanation": "A beam carries loads across a span and transfers them to its supports.",
    "id": "ny-course-049",
    "scope": "general"
  },
  {
    "category": "Materials & Construction",
    "question": "A main horizontal support carries several smaller beams. What is it commonly called?",
    "answers": [
      "Girder",
      "Fascia",
      "Stud",
      "Sole plate"
    ],
    "correct": 0,
    "explanation": "A girder is a principal beam supporting other framing members.",
    "id": "ny-course-050",
    "scope": "general"
  },
  {
    "category": "Materials & Construction",
    "question": "In a wood-framed load-bearing wall, what normally spans above a window opening to carry the load?",
    "answers": [
      "Header",
      "Stud",
      "Ridge board",
      "Sill gasket"
    ],
    "correct": 0,
    "explanation": "A header transfers loads above an opening to supporting framing at its sides.",
    "id": "ny-course-051",
    "scope": "general"
  },
  {
    "category": "Materials & Construction",
    "question": "What term commonly describes the structural support over an opening in a masonry wall?",
    "answers": [
      "Lintel",
      "Joist",
      "Fascia",
      "Sole plate"
    ],
    "correct": 0,
    "explanation": "A lintel spans a door or window opening and supports masonry above it.",
    "id": "ny-course-052",
    "scope": "general"
  },
  {
    "category": "Materials & Construction",
    "question": "Which wood framing member is commonly anchored on top of a foundation wall?",
    "answers": [
      "Sill plate",
      "Ridge board",
      "Rafter",
      "Fascia"
    ],
    "correct": 0,
    "explanation": "The sill plate forms a connection between the foundation and the wood framing above.",
    "id": "ny-course-053",
    "scope": "general"
  },
  {
    "category": "Materials & Construction",
    "question": "Which horizontal member connects the upper ends of wall studs?",
    "answers": [
      "Top plate",
      "Bottom plate",
      "Lintel",
      "Rafter"
    ],
    "correct": 0,
    "explanation": "The top plate runs along the top of a framed wall.",
    "id": "ny-course-054",
    "scope": "general"
  },
  {
    "category": "Materials & Construction",
    "question": "The horizontal member at the base of an interior framed wall is commonly the:",
    "answers": [
      "Sole plate",
      "Ridge beam",
      "Header",
      "Purlin"
    ],
    "correct": 0,
    "explanation": "The sole or bottom plate supports the bottom ends of wall studs.",
    "id": "ny-course-055",
    "scope": "general"
  },
  {
    "category": "Materials & Construction",
    "question": "Which conventional roof member slopes from the ridge toward the exterior wall?",
    "answers": [
      "Rafter",
      "Floor joist",
      "Stud",
      "Sill plate"
    ],
    "correct": 0,
    "explanation": "Rafters follow the roof slope. Floor joists are generally horizontal.",
    "id": "ny-course-056",
    "scope": "general"
  },
  {
    "category": "Materials & Construction",
    "question": "Which statement correctly distinguishes a ridge board from a structural ridge beam?",
    "answers": [
      "A ridge board aligns rafters; a structural ridge beam is designed to carry roof loads",
      "They always have identical load-carrying roles",
      "Both are vertical wall members",
      "A ridge board is a plumbing component"
    ],
    "correct": 0,
    "explanation": "A ridge board is not automatically a load-bearing ridge beam; their structural roles differ.",
    "id": "ny-course-057",
    "scope": "general"
  },
  {
    "category": "Materials & Construction",
    "question": "Short wood pieces fitted between adjacent framing members are commonly called:",
    "answers": [
      "Blocking",
      "Flashing",
      "Gutters",
      "Shingles"
    ],
    "correct": 0,
    "explanation": "Blocking can provide bracing, support, or attachment points between framing members.",
    "id": "ny-course-058",
    "scope": "general"
  },
  {
    "category": "Materials & Construction",
    "question": "Cross bracing between adjacent floor joists is commonly called:",
    "answers": [
      "Bridging",
      "Coping",
      "Cladding",
      "Underlayment"
    ],
    "correct": 0,
    "explanation": "Bridging helps stabilize joists against twisting and supports the floor framing system.",
    "id": "ny-course-059",
    "scope": "general"
  },
  {
    "category": "Materials & Construction",
    "question": "Which roof-edge component is generally a finish board rather than a primary structural support?",
    "answers": [
      "Fascia",
      "Load-bearing header",
      "Girder",
      "Floor beam"
    ],
    "correct": 0,
    "explanation": "Fascia covers the roof edge or rafter ends and often provides a gutter attachment surface.",
    "id": "ny-course-060",
    "scope": "general"
  },
  {
    "category": "Agency",
    "question": "An owner authorizes a manager to collect rents and coordinate repairs on an ongoing basis. What agency is illustrated?",
    "answers": [
      "General agency",
      "Special agency for a single sale",
      "Universal authority over all personal affairs",
      "Dual agency by definition"
    ],
    "correct": 0,
    "explanation": "General agency covers continuing duties within a particular business or property-management role.",
    "id": "ny-course-061",
    "scope": "general"
  },
  {
    "category": "Agency",
    "question": "A seller privately tells an agent the lowest price they would accept. A buyer asks for that figure. What should the agent do?",
    "answers": [
      "Keep it confidential unless disclosure is authorized or legally required",
      "Reveal it to speed up the sale",
      "Publish it with the listing",
      "Treat it as a physical property defect"
    ],
    "correct": 0,
    "explanation": "A client's negotiating position is confidential information, unlike a material property defect.",
    "id": "ny-course-062",
    "scope": "general"
  },
  {
    "category": "Real Estate Practice",
    "question": "A licensee takes escrow money to pay a personal utility bill without authorization. What is this called?",
    "answers": [
      "Conversion",
      "Puffing",
      "Steering",
      "Accretion"
    ],
    "correct": 0,
    "explanation": "Conversion is unauthorized use of another person's funds; commingling is mixing those funds with personal or business money.",
    "id": "ny-course-064",
    "scope": "general"
  },
  {
    "category": "Real Estate Practice",
    "question": "Competing brokers agree that none will charge less than a stated commission. What problem does this create?",
    "answers": [
      "Price fixing",
      "An independent fee policy",
      "A required state commission schedule",
      "A lawful appraisal adjustment"
    ],
    "correct": 0,
    "explanation": "Competing firms must not agree to fix commissions. Each firm sets its fees independently and negotiates with clients.",
    "id": "ny-course-065",
    "scope": "general"
  },
  {
    "category": "Agency",
    "question": "A client directs an agent to violate fair housing law. Does the duty of obedience require compliance?",
    "answers": [
      "No; obedience applies to lawful instructions",
      "Yes, if the direction is written",
      "Yes, if commission depends on it",
      "Only when the buyer agrees"
    ],
    "correct": 0,
    "explanation": "An agency relationship does not authorize unlawful discrimination.",
    "id": "ny-course-066",
    "scope": "general"
  },
  {
    "category": "Contracts",
    "question": "After signing a contract, both parties agree in writing to change only the closing date. What is this?",
    "answers": [
      "Amendment",
      "Counteroffer before acceptance",
      "Rescission",
      "Assignment of ownership"
    ],
    "correct": 0,
    "explanation": "An amendment changes an existing agreement; a counteroffer responds to an offer before agreement.",
    "id": "ny-course-067",
    "scope": "general"
  },
  {
    "category": "Contracts",
    "question": "All parties substitute a new buyer and expressly release the original buyer from the contractual obligation. What is illustrated?",
    "answers": [
      "Novation",
      "An assignment that automatically releases everyone",
      "Rescission with no replacement",
      "An easement"
    ],
    "correct": 0,
    "explanation": "Novation replaces an obligation or party with agreement and releases the replaced party; assignment alone does not necessarily release liability.",
    "id": "ny-course-068",
    "scope": "general"
  },
  {
    "category": "Contracts",
    "question": "Parties agree to unwind a contract and restore their precontract positions. What is this called?",
    "answers": [
      "Rescission",
      "Ratification",
      "Amendment",
      "Performance"
    ],
    "correct": 0,
    "explanation": "Rescission undoes the agreement rather than merely changing one term.",
    "id": "ny-course-069",
    "scope": "general"
  },
  {
    "category": "Contracts",
    "question": "Before a contract exists, a seller responds to an offer by requiring a different closing date. What is the response?",
    "answers": [
      "Counteroffer",
      "Unconditional acceptance",
      "Amendment to an executed contract",
      "Novation"
    ],
    "correct": 0,
    "explanation": "Changing a material term is a counteroffer rather than acceptance of the original offer.",
    "id": "ny-course-070",
    "scope": "general"
  },
  {
    "category": "Contracts",
    "question": "A minor enters an ordinary real estate purchase agreement, with no special statutory exception. How is the agreement generally classified?",
    "answers": [
      "Voidable by the minor",
      "Automatically fully performed",
      "Always void from inception",
      "An illegal-purpose contract"
    ],
    "correct": 0,
    "explanation": "A minor's lack of full contractual capacity generally makes such an agreement voidable, subject to applicable exceptions. This tests the general concept; state law and applicable exceptions control a real transaction.",
    "id": "ny-course-071",
    "scope": "general"
  },
  {
    "category": "Valuation",
    "question": "A comparable sold for $540,000 and has a feature worth $20,000 that the subject lacks. What is its adjusted price, with no other differences?",
    "answers": [
      "$520,000",
      "$560,000",
      "$540,000",
      "$20,000"
    ],
    "correct": 0,
    "explanation": "Subtract a superior comparable feature: $540,000 − $20,000 = $520,000. Adjust the comparable to the subject.",
    "id": "ny-course-072",
    "scope": "general"
  },
  {
    "category": "Valuation",
    "question": "An income property has effective gross income of $120,000 and operating expenses of $40,000. At an 8% cap rate, what is its indicated value?",
    "answers": [
      "$1,000,000",
      "$1,500,000",
      "$640,000",
      "$80,000"
    ],
    "correct": 0,
    "explanation": "NOI = $120,000 − $40,000 = $80,000. Value = NOI ÷ 0.08 = $1,000,000.",
    "id": "ny-course-073",
    "scope": "general"
  },
  {
    "category": "Valuation",
    "question": "Which approach usually best fits a typical home with several recent, similar neighborhood sales?",
    "answers": [
      "Sales comparison",
      "Income capitalization exclusively",
      "Book value",
      "Replacement cost without depreciation"
    ],
    "correct": 0,
    "explanation": "Comparable sales provide direct market evidence when sufficiently similar recent sales exist.",
    "id": "ny-course-074",
    "scope": "general"
  },
  {
    "category": "Valuation",
    "question": "Noise from a newly expanded highway outside a property reduces its value. Which depreciation category fits?",
    "answers": [
      "External obsolescence",
      "Physical deterioration of the roof",
      "An outdated interior layout",
      "Accrued loan interest"
    ],
    "correct": 0,
    "explanation": "External obsolescence arises from influences outside the property, unlike physical wear or internal functional problems.",
    "id": "ny-course-075",
    "scope": "general"
  },
  {
    "category": "Contracts",
    "question": "Buyer and seller agree on price but have not agreed on a material financing term. Which contract concept is still unresolved?",
    "answers": [
      "Mutual assent to the material terms",
      "Physical possession",
      "Recording of the deed",
      "Depreciation"
    ],
    "correct": 0,
    "explanation": "Agreement on price alone does not establish agreement on all material terms.",
    "id": "ny-course-077",
    "scope": "general"
  },
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
    "explanation": "Every parcel has a unique location and combination of characteristics.",
    "id": "reu-001",
    "scope": "general"
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
    "explanation": "Durability refers to the enduring nature of land itself.",
    "id": "reu-002",
    "scope": "general"
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
    "explanation": "Equal dimensions do not eliminate differences in location and surroundings.",
    "id": "reu-003",
    "scope": "general"
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
    "explanation": "Metes and bounds traces boundaries using measurements and directions.",
    "id": "reu-004",
    "scope": "general"
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
    "explanation": "Lot and block references lots and blocks on a recorded plat.",
    "id": "reu-005",
    "scope": "general"
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
    "explanation": "A recorded plat shows the subdivision and its numbered lots and blocks.",
    "id": "reu-006",
    "scope": "general"
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
    "explanation": "The boundary description closes by returning to its Point of Beginning.",
    "id": "reu-007",
    "scope": "general"
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
    "explanation": "Principal meridians run north–south; base lines run east–west.",
    "id": "reu-008",
    "scope": "general"
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
    "explanation": "The rectangular government survey system organizes land into a grid.",
    "id": "reu-009",
    "scope": "general"
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
    "explanation": "Area = length × width = 85 × 140 = 11,900 square feet.",
    "id": "reu-010",
    "scope": "general"
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
    "explanation": "Triangle area = ½ × base × perpendicular height = ½ × 160 × 75 = 6,000.",
    "id": "reu-011",
    "scope": "general"
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
    "explanation": "A square yard contains 3 × 3 = 9 square feet. Multiply 250 by 9.",
    "id": "reu-012",
    "scope": "general"
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
    "explanation": "Perimeter = 2 × (90 + 150) = 480 feet.",
    "id": "reu-013",
    "scope": "general"
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
    "explanation": "There are 3 feet in a yard. Divide 540 by 3.",
    "id": "reu-014",
    "scope": "general"
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
    "explanation": "Add the two areas: 8,000 + 2,400 = 10,400 square feet.",
    "id": "reu-015",
    "scope": "general"
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
    "explanation": "Rentable area = 900 + 135 = 1,035 square feet.",
    "id": "reu-018",
    "scope": "general"
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
    "explanation": "Livable area describes residential living space; exact measurement rules depend on the applicable standard.",
    "id": "reu-019",
    "scope": "general"
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
    "explanation": "A portable fan is movable and is not permanently attached.",
    "id": "reu-020",
    "scope": "general"
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
    "explanation": "Physical attachment and customization to the space support fixture classification.",
    "id": "reu-021",
    "scope": "general"
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
    "explanation": "Written inclusion and exclusion terms clarify the parties’ agreement.",
    "id": "reu-022",
    "scope": "general"
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
    "explanation": "Hardwiring is evidence of attachment, unlike ordinary movable furniture.",
    "id": "reu-023",
    "scope": "general"
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
    "explanation": "A specific written exclusion makes the intended treatment clear.",
    "id": "reu-024",
    "scope": "general"
  },
  {
    "category": "Offers and Negotiation",
    "question": "A buyer is represented and the seller has a listing agent. Where does the buyer's agent normally send the written offer?",
    "answers": [
      "To the listing agent for presentation to the seller",
      "Directly to the county recorder",
      "Only to the appraiser",
      "To an unrelated brokerage"
    ],
    "correct": 0,
    "explanation": "The normal route is buyer's agent to listing agent to seller, following authorized delivery arrangements.",
    "id": "reu-025",
    "scope": "general"
  },
  {
    "category": "Offers and Negotiation",
    "question": "A brokerage accepts offers through a transaction platform. What is essential to proper submission?",
    "answers": [
      "Make the complete offer accessible to the receiving agent and seller as arranged",
      "Upload only the purchase price",
      "Leave it in a private draft folder",
      "Assume uploading replaces the seller's decision"
    ],
    "correct": 0,
    "explanation": "A delivery method must actually communicate the offer; a private draft does not submit it.",
    "id": "reu-026",
    "scope": "general"
  },
  {
    "category": "Offers and Negotiation",
    "question": "Three buyers submit offers. Who chooses which offer to accept?",
    "answers": [
      "The seller",
      "The listing agent acting alone",
      "The highest bidder automatically",
      "The mortgage lender"
    ],
    "correct": 0,
    "explanation": "The agent explains the terms; the seller makes the decision, subject to applicable law and existing obligations.",
    "id": "reu-029",
    "scope": "general"
  },
  {
    "category": "Offers and Negotiation",
    "question": "Two offers differ in price, financing, contingencies, and closing date. How should the agent help compare them?",
    "answers": [
      "Compare the complete terms and risks against the seller's priorities",
      "Compare only price",
      "Guarantee the financed offer will close",
      "Hide the offer with more contingencies"
    ],
    "correct": 0,
    "explanation": "Price is one factor. Financing reliability, conditions, and timing can also matter.",
    "id": "reu-030",
    "scope": "general"
  },
  {
    "category": "Contracts and Contingencies",
    "question": "A financing clause requires a timely loan application and written notice if financing fails. What should the buyer do?",
    "answers": [
      "Make a good-faith application and follow the clause's notice requirements",
      "Avoid applying to force a cancellation",
      "Assume rejection cancels every contract automatically",
      "Wait until after closing to notify the seller"
    ],
    "correct": 0,
    "explanation": "Contingency protection depends on the agreed terms, including effort, deadlines, and notice.",
    "id": "reu-035",
    "scope": "general"
  },
  {
    "category": "Contracts and Contingencies",
    "question": "A buyer with a mortgage contingency is denied a loan despite timely, good-faith efforts. What determines available cancellation rights?",
    "answers": [
      "The contingency wording and compliance with its deadlines and notice rules",
      "The buyer's verbal wish alone",
      "The listing photo",
      "The agent's commission rate"
    ],
    "correct": 0,
    "explanation": "A loan denial is not an automatic cancellation in every transaction; apply the actual contract clause.",
    "id": "reu-036",
    "scope": "general"
  },
  {
    "category": "Contracts and Contingencies",
    "question": "An inspection finds major defects. What should a buyer review first to understand the available contractual remedies?",
    "answers": [
      "The inspection contingency and its deadlines",
      "Only the advertised square footage",
      "Only the seller's asking price",
      "The listing agent's business card"
    ],
    "correct": 0,
    "explanation": "Inspection clauses vary and may provide repair requests, negotiation, or cancellation subject to specific conditions.",
    "id": "reu-037",
    "scope": "general"
  },
  {
    "category": "Contracts and Contingencies",
    "question": "A contingency deadline is approaching and more time is needed. What is the appropriate approach?",
    "answers": [
      "Seek a written extension agreed to by the necessary parties before the deadline",
      "Unilaterally erase the date",
      "Assume silence extends the deadline",
      "Ignore all notice provisions"
    ],
    "correct": 0,
    "explanation": "An agreed written extension documents the change; one party cannot assume the other has consented.",
    "id": "reu-038",
    "scope": "general"
  },
  {
    "category": "Contracts and Contingencies",
    "question": "A document expressly says it is a nonbinding summary of proposed sale terms. What is its main function?",
    "answers": [
      "Guide further negotiation of the proposed transaction",
      "Automatically transfer title",
      "Replace every later contract",
      "Guarantee financing"
    ],
    "correct": 0,
    "explanation": "A nonbinding term summary records proposed terms. The wording, not merely the document's title, determines its effect.",
    "id": "reu-039",
    "scope": "general"
  },
  {
    "category": "Contracts and Contingencies",
    "question": "A buyer asks an agent to invent complex legal language for a custom contract clause. What should the agent do?",
    "answers": [
      "Refer the legal drafting to an attorney",
      "Draft it because a salesperson license authorizes legal practice",
      "Copy an unrelated clause and guarantee it works",
      "Leave the parties' obligations intentionally unclear"
    ],
    "correct": 0,
    "explanation": "A real estate license does not authorize unrestricted legal drafting; custom legal terms need appropriate counsel.",
    "id": "reu-040",
    "scope": "general"
  },
  {
    "category": "Contracts and Contingencies",
    "question": "A proposed offer contains only a price and omits financing, included items, and timing. What is the main concern?",
    "answers": [
      "Important terms remain unresolved or unclear",
      "Price alone always settles every term",
      "The deed is already recorded",
      "The lender must supply all missing terms automatically"
    ],
    "correct": 0,
    "explanation": "A clear offer addresses the material terms so the parties can evaluate the actual proposal.",
    "id": "reu-041",
    "scope": "general"
  },
  {
    "category": "Buyer Representation Agreements",
    "question": "What is the main purpose of a buyer representation agreement?",
    "answers": [
      "To establish the agency relationship between the buyer and the brokerage",
      "To transfer legal title from the seller to the buyer",
      "To replace the purchase contract at closing",
      "To create a property tax assessment"
    ],
    "correct": 0,
    "explanation": "A buyer representation agreement forms the agency relationship on the buying side. The buyer becomes the client and the broker acts as the buyer's agent under the agreement.",
    "id": "reu-045",
    "scope": "general"
  },
  {
    "category": "Buyer Representation Agreements",
    "question": "Which compensation information should a buyer representation agreement clearly address?",
    "answers": [
      "The conditions for compensation, the buyer's payment responsibility, and the amount and timing",
      "Only the seller's original asking price",
      "Only the assessed value of the property",
      "Only the buyer's mortgage interest rate"
    ],
    "correct": 0,
    "explanation": "The agreement should address when compensation is earned, whether the buyer is responsible for paying it under the agreement, and the amount, timing, and applicable conditions.",
    "id": "reu-047",
    "scope": "general"
  },
  {
    "category": "Buyer Representation Agreements",
    "question": "Which provision identifies when a buyer representation agreement ends unless the parties renew or replace it?",
    "answers": [
      "The expiration date",
      "The property tax rate",
      "The listing photograph",
      "The mortgage amortization schedule"
    ],
    "correct": 0,
    "explanation": "An expiration date sets the end of the representation period.",
    "id": "reu-048",
    "scope": "general"
  },
  {
    "id": "general-added-112",
    "scope": "general",
    "category": "Valuation",
    "question": "A property has effective gross income of $96,000 and operating expenses of $36,000. What is NOI?",
    "answers": [
      "$60,000",
      "$132,000",
      "$96,000",
      "$36,000"
    ],
    "correct": 0,
    "explanation": "NOI = effective gross income minus operating expenses: $96,000 − $36,000 = $60,000. Debt service is excluded."
  },
  {
    "id": "general-added-113",
    "scope": "general",
    "category": "Valuation",
    "question": "Annual gross rent is $32,000. Using an annual gross rent multiplier of 10, what is the indicated value?",
    "answers": [
      "$320,000",
      "$3,200",
      "$32,010",
      "$384,000"
    ],
    "correct": 0,
    "explanation": "Use matching annual periods: $32,000 × 10 = $320,000. GRM uses gross rent, not NOI."
  },
  {
    "id": "general-added-114",
    "scope": "general",
    "category": "Professional Ethics",
    "question": "Which statement correctly describes the NAR Code of Ethics?",
    "answers": [
      "It sets professional obligations for REALTORS®",
      "It is a state licensing statute for every salesperson",
      "It replaces fair housing law",
      "It guarantees commission rates"
    ],
    "correct": 0,
    "explanation": "REALTOR® membership carries Code obligations. Do not assume every licensed salesperson is a REALTOR®.",
    "source": "https://www.nar.realtor/about-nar/governing-documents/code-of-ethics/2026-code-of-ethics-standards-of-practice"
  },
  {
    "id": "general-added-115",
    "scope": "general",
    "category": "Professional Ethics",
    "question": "Under NAR Article 1, protecting a client’s interests still requires a REALTOR® to do what?",
    "answers": [
      "Treat all parties honestly",
      "Guarantee the highest price",
      "Conceal all defects",
      "Set competitors’ commissions"
    ],
    "correct": 0,
    "explanation": "Client advocacy does not remove the obligation of honesty to other parties.",
    "source": "https://www.nar.realtor/about-nar/governing-documents/code-of-ethics/2026-code-of-ethics-standards-of-practice"
  },
  {
    "category": "NY License Law",
    "question": "Under New York Real Property Law §442-a, from whom may a salesperson receive compensation for licensed real estate services?",
    "answers": [
      "The duly licensed broker with whom the salesperson is associated",
      "Any buyer who offers a tip",
      "Any seller directly",
      "Any unrelated brokerage without the associated broker"
    ],
    "correct": 0,
    "explanation": "Section 442-a directs salesperson compensation through the associated licensed broker.",
    "id": "ny-course-063",
    "scope": "ny",
    "source": "https://www.nysenate.gov/legislation/laws/RPP/442-A"
  },
  {
    "category": "NY Property Tax",
    "question": "In a New York municipality using the Article 19 homestead tax option, a factory devoted to manufacturing generally belongs to which class?",
    "answers": [
      "Non-homestead",
      "Homestead because it is owner-occupied",
      "Tax-exempt automatically",
      "Residential solely because an individual owns it"
    ],
    "correct": 0,
    "explanation": "Industrial property is generally non-homestead under this local tax option. Classification is not simply whether the owner lives at a primary residence.",
    "id": "ny-course-076",
    "scope": "ny",
    "source": "https://www.tax.ny.gov/pit/property/contest/completegriev.htm"
  },
  {
    "id": "ny-added-003",
    "scope": "ny",
    "category": "NY Agency Disclosure",
    "question": "In a residential transaction covered by NY RPL §443, what is the statutory agency disclosure form?",
    "answers": [
      "A disclosure of the agency relationship",
      "The purchase contract",
      "A deed",
      "A mortgage commitment"
    ],
    "correct": 0,
    "explanation": "It explains representation; it is not a contract.",
    "source": "https://www.nysenate.gov/legislation/laws/RPP/443"
  },
  {
    "id": "ny-added-004",
    "scope": "ny",
    "category": "NY Agency Disclosure",
    "question": "For a covered NY transaction, when must a listing agent give the seller the agency disclosure form?",
    "answers": [
      "Before entering the listing agreement",
      "Only at closing",
      "After recording",
      "Only if requested"
    ],
    "correct": 0,
    "explanation": "Section 443 requires disclosure before the listing agreement.",
    "source": "https://www.nysenate.gov/legislation/laws/RPP/443"
  },
  {
    "id": "ny-added-005",
    "scope": "ny",
    "category": "NY Agency Disclosure",
    "question": "Under NY RPL §443, what consent is required for a broker to act as a dual agent for buyer and seller?",
    "answers": [
      "Informed consent in writing from both",
      "Only the seller’s verbal consent",
      "No consent",
      "Only lender approval"
    ],
    "correct": 0,
    "explanation": "Both parties must consent in writing; undivided loyalty is limited.",
    "source": "https://www.nysenate.gov/legislation/laws/RPP/443"
  },
  {
    "id": "ny-added-006",
    "scope": "ny",
    "category": "NY Agency Disclosure",
    "question": "How long must a NY agent retain the signed agency-disclosure acknowledgment under RPL §443?",
    "answers": [
      "At least three years",
      "Thirty days",
      "Six months",
      "Until closing only"
    ],
    "correct": 0,
    "explanation": "Section 443 specifies at least three years.",
    "source": "https://www.nysenate.gov/legislation/laws/RPP/443"
  },
  {
    "id": "ny-added-007",
    "scope": "ny",
    "category": "NY Licensing & Education",
    "question": "What is the standard NY salesperson qualifying-course requirement for a new applicant without a waiver?",
    "answers": [
      "77 hours",
      "30 hours",
      "45 hours",
      "120 hours"
    ],
    "correct": 0,
    "explanation": "The standard qualifying course is 77 hours; approved exceptions may apply.",
    "source": "https://dos.ny.gov/real-estate-salesperson-frequently-asked-questions"
  },
  {
    "id": "ny-added-008",
    "scope": "ny",
    "category": "NY Licensing & Education",
    "question": "For a NY salesperson subject to continuing education requirements, how many total approved hours are required each two-year term?",
    "answers": [
      "22.5 hours",
      "7 hours",
      "15 hours",
      "77 hours"
    ],
    "correct": 0,
    "explanation": "The total is 22.5 hours, including required subject areas.",
    "source": "https://dos.ny.gov/real-estate-salesperson-frequently-asked-questions"
  },
  {
    "id": "ny-added-009",
    "scope": "ny",
    "category": "NY Licensing & Education",
    "question": "During a NY salesperson’s initial two-year term, how much agency continuing education is required?",
    "answers": [
      "At least two hours",
      "None",
      "Thirty minutes",
      "Ten hours"
    ],
    "correct": 0,
    "explanation": "The first term requires two agency hours; later terms require at least one.",
    "source": "https://dos.ny.gov/real-estate-salesperson-frequently-asked-questions"
  },
  {
    "id": "ny-added-010",
    "scope": "ny",
    "category": "NY Licensing & Education",
    "question": "Does passing the NY school’s qualifying-course exam replace the Department of State licensing exam?",
    "answers": [
      "No; both examinations are required",
      "Yes, always",
      "Only for online students",
      "Only if the school agrees"
    ],
    "correct": 0,
    "explanation": "School and state examinations are separate requirements.",
    "source": "https://dos.ny.gov/real-estate-salesperson-frequently-asked-questions"
  }
];
