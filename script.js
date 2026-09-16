// New York practice bank; coursework refresh 2026-09-15.
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
    "explanation": "Loyalty means putting the client's interests ahead of the agent's own interests."
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
    "explanation": "Special agency grants limited authority for a specific act or transaction."
  },
  {
    "category": "Agency",
    "question": "An agent represents both the buyer and seller in the same transaction with the informed consent of both parties. What type of agency exists?",
    "answers": [
      "Universal agency",
      "Single agency",
      "Dual agency",
      "Subagency"
    ],
    "correct": 2,
    "explanation": "Dual agency involves representing both sides with the required informed consent."
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
    "explanation": "Accounting requires safeguarding and properly accounting for entrusted property and funds."
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
    "explanation": "Mixing client funds with brokerage operating funds is commingling."
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
    "explanation": "Inducing sales by exploiting fears about protected groups entering an area is blockbusting."
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
    "explanation": "Steering limits housing choices based on protected characteristics."
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
    "explanation": "Familial status is a federally protected housing characteristic, subject to applicable exemptions."
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
    "explanation": "A real property sales contract generally falls within the Statute of Frauds writing requirement."
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
    "explanation": "Consideration is legally valuable exchange, including reciprocal promises."
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
    "explanation": "The obsolete layout is a functional problem, and the $45,000 benefit exceeds the $30,000 correction cost."
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
    "explanation": "Substitution links value to the cost of a comparable alternative."
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
    "explanation": "An outdated design or layout is functional obsolescence rather than physical wear."
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
    "explanation": "Divide the $400,000 loan by the $500,000 price: 0.80, or 80%."
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
    "explanation": "One point equals 1% of the loan principal, not 1% of the property price."
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
    "explanation": "APR expresses the annual cost of credit, incorporating interest and certain financing charges."
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
    "explanation": "Tenants in common can hold unequal interests and have no automatic survivorship right."
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
    "explanation": "An appurtenant easement benefits a dominant parcel and burdens a servient parcel."
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
    "explanation": "A physical intrusion onto another parcel is an encroachment."
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
    "explanation": "Using a 20% add-on load factor: 8,000 × 1.20 = 9,600 rentable square feet."
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
    "explanation": "Usable area generally represents space the tenant can occupy for its own use."
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
    "explanation": "Rentable area adds an allocated common-area share to usable area."
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
    "explanation": "Triple-net leases generally allocate property taxes, insurance, and maintenance or operating costs to the tenant, as the lease specifies."
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
    "explanation": "CAM means common area maintenance; the lease defines the expenses and allocation."
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
    "explanation": "Retail percentage leases may combine base rent with rent based on tenant sales."
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
    "explanation": "Capitalization rate = $800,000 NOI ÷ $10,000,000 value = 8%."
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
    "explanation": "NOI reflects property operations before financing costs such as debt service."
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
    "explanation": "Debt service coverage = $600,000 ÷ $450,000 = approximately 1.33."
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
    "explanation": "Clear height measures usable vertical clearance beneath overhead obstructions."
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
    "explanation": "Forced-air systems distribute conditioned air through ducts and registers."
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
    "explanation": "The blower moves air through the furnace and ductwork."
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
    "explanation": "A furnace heats air; a boiler generally heats water for hot-water or steam distribution."
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
    "explanation": "A heat pump moves heat and can typically reverse operation to provide heating and cooling."
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
    "explanation": "Radon arises naturally from radioactive decay in soil and rock and can enter through foundation openings."
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
    "explanation": "Radon cannot be reliably identified by sight or smell; testing measures the level."
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
    "explanation": "Sub-slab depressurization draws soil gas out from below the slab and vents it outside."
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
    "explanation": "The trap retains a water seal that blocks sewer gases from entering occupied space."
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
    "explanation": "A GFCI interrupts power when it detects a ground-fault imbalance, reducing shock risk."
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
    "explanation": "Flashing channels water away from vulnerable joints, intersections, and roof penetrations."
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
    "explanation": "Foundations transmit structural loads to supporting soil."
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
    "explanation": "Joists are repeated horizontal framing members that commonly support floors or ceilings."
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
    "explanation": "Insulation slows heat flow through building assemblies."
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
    "explanation": "R-value measures resistance to heat flow; higher values mean greater resistance."
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
    "explanation": "Condensation creates moisture that can support mold and damage materials."
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
    "explanation": "Federal residential lead-based-paint restrictions date to 1978; older housing warrants particular attention."
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
    "explanation": "Moisture is a key condition for mold growth."
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
    "explanation": "Carbon monoxide cannot be seen or smelled, so appropriate alarms are essential."
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
    "explanation": "Studs run vertically between wall plates. Joists typically support floors or ceilings."
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
    "explanation": "A beam carries loads across a span and transfers them to its supports."
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
    "explanation": "A girder is a principal beam supporting other framing members."
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
    "explanation": "A header transfers loads above an opening to supporting framing at its sides."
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
    "explanation": "A lintel spans a door or window opening and supports masonry above it."
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
    "explanation": "The sill plate forms a connection between the foundation and the wood framing above."
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
    "explanation": "The top plate runs along the top of a framed wall."
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
    "explanation": "The sole or bottom plate supports the bottom ends of wall studs."
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
    "explanation": "Rafters follow the roof slope. Floor joists are generally horizontal."
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
    "explanation": "A ridge board is not automatically a load-bearing ridge beam; their structural roles differ."
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
    "explanation": "Blocking can provide bracing, support, or attachment points between framing members."
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
    "explanation": "Bridging helps stabilize joists against twisting and supports the floor framing system."
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
    "explanation": "Fascia covers the roof edge or rafter ends and often provides a gutter attachment surface."
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
    "explanation": "General agency covers continuing duties within a particular business or property-management role."
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
    "explanation": "A client's negotiating position is confidential information, unlike a material property defect."
  },
  {
    "category": "Real Estate Practice",
    "question": "Under New York Real Property Law §442-a, from whom may a salesperson receive compensation for licensed real estate services?",
    "answers": [
      "The duly licensed broker with whom the salesperson is associated",
      "Any buyer who offers a tip",
      "Any seller directly",
      "Any unrelated brokerage without the associated broker"
    ],
    "correct": 0,
    "explanation": "Section 442-a directs salesperson compensation through the associated licensed broker."
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
    "explanation": "Conversion is unauthorized use of another person's funds; commingling is mixing those funds with personal or business money."
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
    "explanation": "Competing firms must not agree to fix commissions. Each firm sets its fees independently and negotiates with clients."
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
    "explanation": "An agency relationship does not authorize unlawful discrimination."
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
    "explanation": "An amendment changes an existing agreement; a counteroffer responds to an offer before agreement."
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
    "explanation": "Novation replaces an obligation or party with agreement and releases the replaced party; assignment alone does not necessarily release liability."
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
    "explanation": "Rescission undoes the agreement rather than merely changing one term."
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
    "explanation": "Changing a material term is a counteroffer rather than acceptance of the original offer."
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
    "explanation": "A minor's lack of full contractual capacity generally makes such an agreement voidable, subject to applicable exceptions."
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
    "explanation": "Subtract a superior comparable feature: $540,000 − $20,000 = $520,000. Adjust the comparable to the subject."
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
    "explanation": "NOI = $120,000 − $40,000 = $80,000. Value = NOI ÷ 0.08 = $1,000,000."
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
    "explanation": "Comparable sales provide direct market evidence when sufficiently similar recent sales exist."
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
    "explanation": "External obsolescence arises from influences outside the property, unlike physical wear or internal functional problems."
  },
  {
    "category": "Property Ownership",
    "question": "In a New York municipality using the Article 19 homestead tax option, a factory devoted to manufacturing generally belongs to which class?",
    "answers": [
      "Non-homestead",
      "Homestead because it is owner-occupied",
      "Tax-exempt automatically",
      "Residential solely because an individual owns it"
    ],
    "correct": 0,
    "explanation": "Industrial property is generally non-homestead under this local tax option. Classification is not simply whether the owner lives at a primary residence."
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
    "explanation": "Agreement on price alone does not establish agreement on all material terms."
  }
];


/* Shared quiz behavior; question content remains in the original state bank. */
(() => {
    'use strict';
    const state = location.pathname.startsWith('/nj') ? 'NJ' : 'NY';
    const home = state === 'NJ' ? '/nj/' : '/';
    const categories = [...new Set(questions.map(q => q.category))];
    const requested = new URLSearchParams(location.search).get('category');
    const category = categories.includes(requested) ? requested : null;
    const bank = category ? questions.filter(q => q.category === category) : questions;
    const $ = id => document.getElementById(id);
    const question = $('question'), answers = $('answers'), feedback = $('feedback');
    if (!question || !answers) return;
    let queue = [], current, answered = 0, correct = 0, number = 0, locked = false;
    function shuffle(items) {
        const copy = [...items];
        for (let i = copy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [copy[i], copy[j]] = [copy[j], copy[i]];
        }
        return copy;
    }
    if (category) {
        $('active-filter').textContent = category;
        $('active-filter-wrap').hidden = false;
    }
    const select = $('practice-topic');
    if (select) {
        for (const name of categories) {
            const option = document.createElement('option');
            option.value = name; option.textContent = name; select.appendChild(option);
        }
        select.value = category || '';
        $('topic-form').addEventListener('submit', event => {
            event.preventDefault();
            window.lrTopicSelect?.(select.value || 'Mixed');
            location.href = home + (select.value ? '?category=' + encodeURIComponent(select.value) : '') + '#practice-quiz';
        });
    }
    function load(focus = false) {
        if (!queue.length) queue = shuffle(bank);
        current = queue.shift(); locked = false; number++;
        question.textContent = current.question;
        $('question-category').textContent = current.category;
        $('question-number').textContent = `Question ${number}`;
        feedback.textContent = ''; feedback.className = '';
        $('next-button').hidden = true; $('contact-button').hidden = true;
        answers.replaceChildren();
        for (const item of shuffle(current.answers.map((text, index) => ({text, index})))) {
            const button = document.createElement('button');
            button.type = 'button'; button.className = 'answer-button'; button.textContent = item.text;
            button.dataset.correct = String(item.index === current.correct);
            button.addEventListener('click', () => {
                if (locked) return;
                locked = true; answered++;
                const right = item.index === current.correct;
                if (right) correct++;
                for (const answer of answers.children) {
                    answer.disabled = true;
                    if (answer.dataset.correct === 'true') answer.classList.add('correct');
                }
                button.classList.add(right ? 'correct' : 'incorrect');
                feedback.textContent = right ? '✓ Correct!' : `✗ Incorrect. The correct answer is ${current.answers[current.correct]}.`;
                if (current.explanation) feedback.textContent += ' ' + current.explanation;
                feedback.className = right ? 'feedback-correct' : 'feedback-incorrect';
                $('score').textContent = `Score: ${correct} / ${answered} (${Math.round(correct / answered * 100)}%)`;
                $('practice-progress').textContent = answered < 10
                    ? `${answered} of 10 practice answers completed.`
                    : `${answered} answers completed. ${correct} correct. Keep going or try another topic.`;
                $('practice-meter').value = Math.min(answered, 10);
                $('practice-followup').hidden = answered < 10;
                $('next-button').hidden = false; $('contact-button').hidden = false;
                window.lrQuizAnswer?.({exam_state: state, practice_topic: category || 'Mixed',
                    question_topic: current.category, correct: right, answered});
            });
            answers.appendChild(button);
        }
        if (focus) question.focus();
    }
    $('next-button').addEventListener('click', () => { if (locked) load(true); });
    $('contact-button').addEventListener('click', () => {
        if (!current) return;
        const body = `Hi,\n\nPlease review this ${state} practice question.\n\nCategory: ${current.category}\nQuestion: ${current.question}\n\n${current.answers.map((a, i) => `${String.fromCharCode(65+i)}. ${a}`).join('\n')}\n\nListed correct answer: ${current.answers[current.correct]}\n\nMy comment:\n`;
        location.href = 'mailto:nyrealestatequiz@gmail.com?subject=' + encodeURIComponent('License Ready ' + state + ' — Question Review') + '&body=' + encodeURIComponent(body);
    });
    load();
    const ready = () => window.lrQuizReady?.({practice_topic: category || 'Mixed', question_count: bank.length});
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', ready, {once: true});
    else ready();
})();
