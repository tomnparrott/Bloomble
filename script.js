const wordBank = [
    { word: 'abaci', definition: 'Plural of abacus, an ancient counting device.' },
    { word: 'abase', definition: 'To lower in rank, office, prestige, or esteem.' },
    { word: 'abode', definition: 'A place of residence; a house or home.' },
    { word: 'abyss', definition: 'A deep or seemingly bottomless chasm.' },
    { word: 'acrid', definition: 'Having an irritatingly strong and unpleasant taste or smell, often used in chemistry.' },
    { word: 'acute', definition: 'An angle less than 90° in geometry.' },
    { word: 'agate', definition: 'A fine-grained, variegated chalcedony, having its colors arranged in stripes, blended in clouds, or showing mosslike forms.' },
    { word: 'algae', definition: 'A simple nonflowering plant of a large group that includes the seaweeds and many single-celled forms.' },
    { word: 'alias', definition: 'A shortcut that allows a user to more easily access a program or data location.' },
    { word: 'alloy', definition: 'A metal made by combining two or more metallic elements.' },
    { word: 'alpha', definition: 'The first star in a constellation, usually the brightest.' },
    { word: 'amino', definition: 'Relating to an amine or its derivatives, especially an amino acid.' },
    { word: 'anode', definition: 'The positively charged electrode by which the electrons leave a device.' },
    { word: 'argon', definition: 'A noble gas element with symbol Ar and atomic number 18.' },
    { word: 'array', definition: 'A data structure consisting of a collection of elements, each identified by at least one array index or key.' },
    { word: 'asset', definition: 'An item of property owned by a person or company, regarded as having value.' },
    { word: 'atlas', definition: 'A book or collection of maps; in astronomy, it may refer to a collection of star maps or charts.' },
    { word: 'axiom', definition: 'A statement or proposition which is regarded as being established, accepted, or self-evidently true.' },
    { word: 'babel', definition: 'A confused noise made by a number of voices.' },
    { word: 'banks', definition: 'Financial institutions licensed to receive deposits and make loans.' },
    { word: 'barge', definition: 'A flat-bottomed boat for carrying freight on rivers and canals.' },
    { word: 'basal', definition: 'Forming or belonging to a bottom layer or base.' },
    { word: 'basin', definition: 'A large or small depression in the surface of the land or in the ocean floor.' },
    { word: 'basis', definition: 'A set of linearly independent vectors in a vector space that spans that space.' },
    { word: 'batch', definition: 'A method of organizing data to be processed or a set of jobs to be executed.' },
    { word: 'beach', definition: 'A pebbly or sandy shore, especially by the sea between high- and low-water marks.' },
    { word: 'Betel', definition: 'Short for Betelgeuse, a red supergiant star in the constellation Orion.' },
    { word: 'bezel', definition: 'A grooved ring holding the glass or plastic cover of a watch face or other instrument.' },
    { word: 'bicep', definition: 'A large muscle in the upper arm which turns the hand to face palm uppermost and flexes the arm and forearm.' },
    { word: 'bison', definition: 'A large, humpbacked, shaggy-haired wild ox native to North America and Europe.' },
    { word: 'black', definition: 'Referring to a black hole, a region of space having a gravitational field so intense that no matter or radiation can escape.' },
    { word: 'bloat', definition: 'To swell or cause to swell by pressure from inside.' },
    { word: 'bonds', definition: 'A thing used to tie something or to fasten things together, often used in chemistry to describe atomic connections.' },
    { word: 'boyle', definition: 'Referring to Boyle\'s law, a gas law stating that the pressure and volume of a gas have an inverse relationship.' },
    { word: 'bytes', definition: 'A group of binary digits or bits (usually eight) operated on as a unit.' },
    { word: 'cache', definition: 'A collection of items stored in a hidden or inaccessible place.' },
    { word: 'cacti', definition: 'Plural of cactus, a plant adapted to hot, dry climates.' },
    { word: 'cadre', definition: 'A small group of people specially trained for a particular purpose or profession.' },
    { word: 'carve', definition: 'Cut (a hard material) in order to produce an aesthetically pleasing object or design.' },
    { word: 'cedis', definition: 'The currency of Ghana, divided into one hundred pesewas.' },
    { word: 'cella', definition: 'The inner area of an ancient temple, in architectural terms.' },
    { word: 'cello', definition: 'A bass instrument of the violin family, held upright on the floor.' },
    { word: 'chalk', definition: 'A soft white limestone (calcium carbonate) formed from the skeletal remains of sea creatures.' },
    { word: 'chaos', definition: 'Behavior in dynamical systems that is highly sensitive to initial conditions, leading to seemingly random behavior.' },
    { word: 'cliff', definition: 'A high, steep face of rock or earth.' },
    { word: 'clone', definition: 'An organism or cell, or group of organisms or cells, produced asexually from one ancestor.' },
    { word: 'codec', definition: 'A device or computer program which encodes or decodes a digital data stream or signal.' },
    { word: 'comet', definition: 'A celestial object consisting of a nucleus of ice and dust and, when near the sun, a “tail” of gas and dust particles pointing away from the sun.' },
    { word: 'conic', definition: 'Relating to conic sections: the circle, ellipse, parabola, and hyperbola.' },
    { word: 'costs', definition: 'The amount that must be paid or spent to buy or obtain something.' },
    { word: 'cubit', definition: 'An ancient measure of length, approximately equal to the length of a forearm.' },
    { word: 'cycle', definition: 'A series of events that are regularly repeated in the same order.' },
    { word: 'datum', definition: 'A piece of information, often a basis for reasoning or calculation in various fields.' },
    { word: 'debug', definition: 'The process of finding and resolving defects or problems within a computer program.' },
    { word: 'decoy', definition: 'A bird or mammal, or an imitation of one, used by hunters to attract other birds or mammals.' },
    { word: 'deity', definition: 'A god or goddess, often used metaphorically in astronomy to describe celestial bodies with powerful or unique attributes.' },
    { word: 'delta', definition: 'The fourth letter of the Greek alphabet, often representing change in mathematics.' },
    { word: 'diode', definition: 'A semiconductor device with two terminals, allowing the flow of current in one direction.' },
    { word: 'dowel', definition: 'A pin, usually round, fitting into holes in two adjacent pieces to prevent their movement relative to each other.' },
    { word: 'draft', definition: 'A preliminary version of a piece of writing or design.' },
    { word: 'draft', definition: 'A written order to pay a specified amount of money on a certain date.' },
    { word: 'drone', definition: 'An unmanned aircraft or ship guided by remote control or onboard computers.' },
    { word: 'dulse', definition: 'A red seaweed that grows on the northern coasts of the Atlantic and Pacific oceans.' },
    { word: 'dunes', definition: 'A mound or ridge of sand or other loose sediment formed by the wind, especially on the sea coast or in a desert.' },
    { word: 'duvet', definition: 'A soft quilt filled with down, feathers, or a synthetic fiber, used instead of an upper sheet and blankets.' },
    { word: 'dwarf', definition: 'A star of relatively small size and low luminosity.' },
    { word: 'earth', definition: 'The planet on which we live; the world, or the substance of the land surface; soil.' },
    { word: 'easel', definition: 'A self-supporting wooden frame for holding an artist\'s work while it is being painted or drawn.' },
    { word: 'eclat', definition: 'Brilliance of success or effort; splendor.' },
    { word: 'eigen', definition: 'Relating to eigenvalues and eigenvectors, important in solving systems of linear equations.' },
    { word: 'eject', definition: 'Force or throw something out, typically in a violent or sudden way.' },
    { word: 'ennui', definition: 'A feeling of listlessness and dissatisfaction arising from a lack of occupation or excitement.' },
    { word: 'epoch', definition: 'A particular period of time in computing from which a computer measures system time.' },
    { word: 'epoxy', definition: 'An adhesive, plastic, or other material made from a class of synthetic thermosetting polymers.' },
    { word: 'equity', definition: 'The value of the shares issued by a company.' },
    { word: 'erode', definition: 'Gradually wear away (soil, rock, or land).' },
    { word: 'ether', definition: 'A class of organic compounds characterized by an oxygen atom bridged by two alkyl groups.' },
    { word: 'event', definition: 'An action or occurrence recognized by software that may be handled by the software.' },
    { word: 'exert', definition: 'Apply or bring to bear (a force, influence, or quality).' },
    { word: 'faint', definition: 'Lacking brightness, vividness, clearness, loudness, strength, etc.' },
    { word: 'fault', definition: 'A fracture or zone of fractures between two blocks of rock.' },
    { word: 'femur', definition: 'The bone of the thigh or upper hind limb, articulating at the hip and the knee.' },
    { word: 'fermi', definition: 'Relating to Enrico Fermi, a physicist known for his work on the Manhattan Project and the development of quantum theory.' },
    { word: 'fetch', definition: 'To retrieve data from a memory location in computer science.' },
    { word: 'fiche', definition: 'A flat piece of microfilm containing a series of microphotographs of the pages of a book, catalog, or other document.' },
    { word: 'field', definition: 'A set in which addition, subtraction, multiplication, and division are well-defined and behave as expected.' },
    { word: 'firms', definition: 'Business organizations or entities formed by a group of people.' },
    { word: 'fjord', definition: 'A long, narrow, deep inlet of the sea between high cliffs, as in Norway and Iceland, typically formed by submergence of a glaciated valley.' },
    { word: 'flare', definition: 'A sudden eruption of intense high-energy radiation from the sun’s surface.' },
    { word: 'flask', definition: 'A container or bottle, typically with a narrow neck, used for storing drinks or other liquids.' },
    { word: 'flood', definition: 'An overflowing of a large amount of water beyond its normal confines, especially over what is normally dry land.' },
    { word: 'flora', definition: 'The plants of a particular region, habitat, or geological period.' },
    { word: 'fluid', definition: 'A substance that has no fixed shape and yields easily to external pressure; can be a subject of study in differential equations.' },
    { word: 'fluke', definition: 'An unlikely chance occurrence, especially a surprising piece of luck.' },
    { word: 'frame', definition: 'A digital data transmission unit in computer networking and telecommunication.' },
    { word: 'funds', definition: 'A sum of money saved or made available for a particular purpose.' },
    { word: 'gauge', definition: 'An instrument or device for measuring the magnitude, amount, or contents of something.' },
    { word: 'gauss', definition: 'Carl Friedrich Gauss, a German mathematician who contributed significantly to many fields, including number theory, algebra, statistics, analysis, differential geometry, geophysics, electrostatics, astronomy, and optics.' },
    { word: 'gecko', definition: 'A nocturnal and often highly vocal lizard that has adhesive pads on the feet to aid in climbing on smooth surfaces.' },
    { word: 'genes', definition: 'A unit of heredity which is transferred from a parent to offspring and is held to determine some characteristic of the offspring.' },
    { word: 'giant', definition: 'A large star with a diameter much larger than that of the sun.' },
    { word: 'gigas', definition: 'Referring to gigabyte, a unit of digital information equal to 1,073,741,824 bytes or 1,024 megabytes.' },
    { word: 'girth', definition: 'The measurement around the middle of something, especially a person\'s waist.' },
    { word: 'gland', definition: 'An organ in the human or animal body which secretes particular chemical substances for use in the body or for discharge into the surroundings.' },
    { word: 'glide', definition: 'To move smoothly and continuously along, as if without effort or resistance, used in physics and engineering.' },
    { word: 'gneis', definition: 'A metamorphic rock with a banded or foliated structure, typically coarse-grained and consisting mainly of feldspar, quartz, and mica.' },
    { word: 'goods', definition: 'Merchandise or possessions.' },
    { word: 'gouge', definition: 'A chisel with a concave blade, used in carpentry, sculpture, and surgery.' },
    { word: 'grant', definition: 'Agree to give or allow (something requested) to.' },
    { word: 'graph', definition: 'A diagram showing the relation between variable quantities, typically of two variables, each measured along one of a pair of axes at right angles.' },
    { word: 'gulch', definition: 'A narrow and steep-sided ravine marking the course of a fast stream.' },
    { word: 'halon', definition: 'A type of brominated hydrocarbon used in fire extinguishers.' },
    { word: 'heave', definition: 'Lift or haul with great effort.' },
    { word: 'hedge', definition: 'An investment position intended to offset potential losses or gains.' },
    { word: 'hertz', definition: 'A unit of frequency in the International System of Units (SI), equal to one cycle per second.' },
    { word: 'hexad', definition: 'A group or set of six.' },
    { word: 'hilum', definition: 'The point of attachment of a plant organ or seed.' },
    { word: 'hoard', definition: 'Amass (money or valued objects) and hide or store away.' },
    { word: 'humus', definition: 'The organic component of soil, formed by the decomposition of leaves and other plant material.' },
    { word: 'hydro', definition: 'Relating to water.' },
    { word: 'hyper', definition: 'A prefix meaning over, above or beyond, used in computing to denote an enhanced version of something.' },
    { word: 'ideal', definition: 'A subset of a ring that is closed under addition and multiplication by any element of the ring.' },
    { word: 'ileum', definition: 'The third portion of the small intestine, between the jejunum and the cecum.' },
    { word: 'image', definition: 'A representation of the external form of a person or thing in art or photography.' },
    { word: 'incur', definition: 'Become subject to (something unwelcome or unpleasant) as a result of one\'s own behavior or actions.' },
    { word: 'index', definition: 'An indicator or measure of something.' },
    { word: 'inert', definition: 'Lacking the ability or strength to move, often used in chemistry to describe elements with little chemical reactivity.' },
    { word: 'infra', definition: 'Below, especially when used in referring to parts of a text.' },
    { word: 'inner', definition: 'Situated inside or further in; often used to describe the inner planets of our solar system.' },
    { word: 'inode', definition: 'A data structure on a filesystem on Unix and Unix-like operating systems that stores information about a file or a directory.' },
    { word: 'ionic', definition: 'Relating to, composed of, or using ions.' },
    { word: 'irony', definition: 'Containing or resembling iron.' },
    { word: 'isost', definition: 'Short for isostasy; the equilibrium that exists between parts of the earth\'s crust, which behaves as if it consists of blocks floating on the underlying mantle.' },
    { word: 'joint', definition: 'In computer science, particularly in robotics, a point of connection between two elements or segments.' },
    { word: 'joule', definition: 'A unit of work or energy.' },
    { word: 'jovin', definition: 'Pertaining to Jupiter or the gods of Roman mythology of which Jupiter was the chief.' },
    { word: 'jumbo', definition: 'Very large or powerful and impressively successful.' },
    { word: 'jumps', definition: 'Discontinuities in the graph of a function.' },
    { word: 'junta', definition: 'A military or political group that rules a country after taking power by force.' },
    { word: 'kappa', definition: 'The 10th letter of the Greek alphabet, used in mathematics and engineering.' },
    { word: 'karst', definition: 'A landscape underlain by limestone that has been eroded by dissolution, producing ridges, towers, fissures, sinkholes, and other characteristic landforms.' },
    { word: 'kerns', definition: 'Adjusting the spacing between characters in a proportional font, usually to achieve a visually pleasing result.' },
    { word: 'kiosk', definition: 'A small structure in a public area used for providing information or displaying advertisements, often incorporating an interactive display screen or screens.' },
    { word: 'klein', definition: 'Felix Klein, a German mathematician known for his work in group theory, complex analysis, and non-Euclidean geometry.' },
    { word: 'knack', definition: 'An acquired or natural skill at doing something.' },
    { word: 'knead', definition: 'Work (moistened flour or clay) into dough or paste with the hands.' },
    { word: 'kneel', definition: 'Be in or assume a position in which the body is supported by a knee or the knees, as when praying or showing submission.' },
    { word: 'knoll', definition: 'A small hill or mound.' },
    { word: 'knots', definition: 'A mathematical concept that studies the embedding of a circle in 3-dimensional Euclidean space.' },
    { word: 'labor', definition: 'Work, especially hard physical work.' },
    { word: 'larva', definition: 'The active immature form of an insect, especially one that differs greatly from the adult and forms the stage between egg and pupa, e.g., a caterpillar or grub.' },
    { word: 'laser', definition: 'A device that emits light through a process of optical amplification.' },
    { word: 'latch', definition: 'A type of digital storage circuit used in electronic devices.' },
    { word: 'lease', definition: 'A contract by which one party conveys land, property, services, etc., to another for a specified time, usually in return for a periodic payment.' },
    { word: 'levee', definition: 'An embankment built to prevent the overflow of a river.' },
    { word: 'lever', definition: 'A rigid bar resting on a pivot, used to help move a heavy or firmly fixed load with one end when pressure is applied to the other.' },
    { word: 'light', definition: 'Electromagnetic radiation that makes things visible.' },
    { word: 'limit', definition: 'The value that a function or sequence "approaches" as the input or index approaches some value.' },
    { word: 'locus', definition: 'A set of points satisfying a certain condition in geometry.' },
    { word: 'loess', definition: 'A loosely compacted yellowish-gray deposit of wind-blown sediment of which extensive deposits occur.' },
    { word: 'logic', definition: 'The systematic study of the form of valid inference, and the most general laws of truth.' },
    { word: 'lumen', definition: 'The SI unit of luminous flux, a measure of the total quantity of visible light emitted by a source.' },
    { word: 'lunar', definition: 'Of, determined by, relating to, or resembling the moon.' },
    { word: 'lymph', definition: 'A colorless fluid containing white blood cells, which bathes the tissues and drains through the lymphatic system into the bloodstream.' },
    { word: 'macro', definition: 'A rule or pattern that specifies how a certain input sequence should be mapped to an output sequence according to a defined procedure.' },
    { word: 'magma', definition: 'Molten material beneath or within the earths crust.' },
    { word: 'maize', definition: 'A central American cereal plant which yields large grains set in rows on a cob; corn.' },
    { word: 'marsh', definition: 'An area of low-lying land which is flooded in wet seasons or at high tide, and typically remains waterlogged at all times.' },
    { word: 'merge', definition: 'To combine or join together, or to cause things to do this, in computing, often related to databases.' },
    { word: 'midge', definition: 'A small two-winged fly that is often a carrier of disease.' },
    { word: 'minim', definition: 'A unit of liquid measure equal to one sixtieth of a fluid dram, roughly one drop.' },
    { word: 'molds', definition: 'A hollow container used to give shape to molten or hot liquid material when it cools and hardens.' },
    { word: 'money', definition: 'A current medium of exchange in the form of coins and banknotes.' },
    { word: 'morse', definition: 'Relating to Morse code, an early form of digital communication.' },
    { word: 'nadir', definition: 'The lowest point in the fortunes of a person or organization.' },
    { word: 'naiad', definition: 'A water nymph said to inhabit rivers and springs.' },
    { word: 'nebul', definition: 'Short for nebula, a cloud of gas and dust in outer space.' },
    { word: 'nerve', definition: 'A whitish fiber or bundle of fibers that transmits impulses of sensation to the brain or spinal cord, and impulses from these to the muscles and organs.' },
    { word: 'nexus', definition: 'A connection or series of connections linking two or more things in computer networking.' },
    { word: 'niche', definition: 'A specialized segment of the market for a particular kind of product or service.' },
    { word: 'nitro', definition: 'Chemical compound containing the nitro group, a functional group consisting of nitrogen and oxygen.' },
    { word: 'noble', definition: 'Relating to noble gases, elements with very low chemical reactivity.' },
    { word: 'nodal', definition: 'Relating to points at which the value of a wave is zero.' },
    { word: 'nodes', definition: 'A basic unit used in computer science to construct a data structure such as linked lists and tree structures.' },
    { word: 'nomad', definition: 'A person who does not stay long in the same place; a wanderer.' },
    { word: 'norms', definition: 'Functions that assign a strictly positive length or size to each vector in a vector space, except for the zero vector.' },
    { word: 'nylon', definition: 'A tough, lightweight, elastic synthetic polymer with a protein-like chemical structure.' },
    { word: 'occur', definition: 'Happen; take place.' },
    { word: 'ocean', definition: 'A very large expanse of sea, in particular, each of the main areas into which the sea is divided geographically.' },
    { word: 'octal', definition: 'Of, relating to, or using a system of numerical notation that has 8 rather than 10 as a base.' },
    { word: 'octet', definition: 'A group of eight bits, especially in computer networking.' },
    { word: 'offer', definition: 'Present or proffer (something) for (someone) to accept or reject.' },
    { word: 'ohmic', definition: 'Relating to or based on Ohm\'s Law.' },
    { word: 'omega', definition: 'The 24th and last letter of the Greek alphabet, used in science to denote the last, the end, or a final limit.' },
    { word: 'onset', definition: 'The beginning of something, especially something unpleasant.' },
    { word: 'oozes', definition: 'A soft, slimy mud or sediment, especially on the ocean floor.' },
    { word: 'opals', definition: 'A gemstone consisting of a form of hydrated silica, typically semitransparent and showing many small points of shifting color against a pale or dark ground.' },
    { word: 'opera', definition: 'A web browser developed by Opera Software.' },
    { word: 'orbit', definition: 'The curved path of a celestial object or spacecraft around a star, planet, or moon.' },
    { word: 'order', definition: 'The arrangement or disposition of people or things in relation to each other.' },
    { word: 'oxide', definition: 'A binary compound of oxygen with another element or group.' },
    { word: 'patch', definition: 'A piece of software designed to update a computer program or its supporting data, to fix or improve it.' },
    { word: 'peaks', definition: 'The pointed tops of mountains.' },
    { word: 'pesos', definition: 'The basic monetary unit of several Latin American countries.' },
    { word: 'phase', definition: 'A distinct period or stage in a process of change or forming part of something\'s development in science.' },
    { word: 'pithy', definition: 'Concise and forcefully expressive, especially in language or style.' },
    { word: 'pixel', definition: 'The smallest unit of a digital image or graphic that can be displayed and represented on a digital display device.' },
    { word: 'plumb', definition: 'Measure (the depth of a body of water).' },
    { word: 'polar', definition: 'Relating to the North or South Pole.' },
    { word: 'price', definition: 'The amount of money expected, required, or given in payment for something.' },
    { word: 'prime', definition: 'A natural number greater than 1 that has no positive divisors other than 1 and itself.' },
    { word: 'prism', definition: 'A solid geometric figure whose two end faces are similar, equal, and parallel rectilinear figures, and whose sides are parallelograms.' },
    { word: 'pumic', definition: 'A very light and porous volcanic rock formed when a gas-rich froth of glassy lava solidifies rapidly.' },
    { word: 'pupal', definition: 'Relating to or characteristic of a pupa.' },
    { word: 'quaky', definition: 'Shaky or trembling, like during an earthquake.' },
    { word: 'quark', definition: 'A type of elementary particle and a fundamental constituent of matter.' },
    { word: 'quart', definition: 'A unit of liquid capacity equal to a quarter of a gallon or two pints, used in both the UK and the US.' },
    { word: 'quasi', definition: 'Seemingly; apparently but not really; being partly or almost.' },
    { word: 'query', definition: 'A request for information from a database.' },
    { word: 'quilt', definition: 'A warm bed covering made of padding enclosed between layers of fabric and kept in place by lines of stitching.' },
    { word: 'quota', definition: 'A fixed share of something that a person or group is entitled to receive or is bound to contribute.' },
    { word: 'radar', definition: 'A system for detecting the presence, direction, distance, and speed of aircraft, ships, and other objects, by sending out pulses of high-frequency electromagnetic waves that are reflected off the object back to the source.' },
    { word: 'radio', definition: 'The use of radio waves for communication, especially in astronomy for observing celestial objects.' },
    { word: 'radix', definition: 'The base or root, especially of a number in mathematics.' },
    { word: 'rally', definition: 'A recovery in the price of a stock or other securities or commodities.' },
    { word: 'react', definition: 'To act in response to an agent or condition in chemistry.' },
    { word: 'remit', definition: 'Cancel or refrain from exacting or inflicting (a debt or punishment).' },
    { word: 'retro', definition: 'Short for retrograde, referring to an apparent backward motion of a planet.' },
    { word: 'rheum', definition: 'A watery fluid that collects in or drips from the nose or eyes.' },
    { word: 'ridge', definition: 'A long, narrow hilltop, mountain range, or watershed.' },
    { word: 'rings', definition: 'Algebraic structures that generalize fields: addition, subtraction, and multiplication are defined and behave as expected.' },
    { word: 'robot', definition: 'A machine capable of carrying out a complex series of actions automatically.' },
    { word: 'rocks', definition: 'The solid mineral material forming part of the surface of the earth and other similar planets, exposed on the surface or underlying the soil or oceans.' },
    { word: 'route', definition: 'A way or course taken in getting from a starting point to a destination, especially in network routing.' },
    { word: 'ruler', definition: 'A person exercising government or dominion.' },
    { word: 'rural', definition: 'In, relating to, or characteristic of the countryside rather than the town.' },
    { word: 'sable', definition: 'A small carnivorous mammal of the weasel family, Mustelidae.' },
    { word: 'salty', definition: 'Tasting of, containing, or preserved with salt.' },
    { word: 'scale', definition: 'A device used for measuring weight, or a series of marks at regular intervals in a line used in measuring.' },
    { word: 'scope', definition: 'The extent of the area or subject matter that something deals with or to which it is relevant.' },
    { word: 'scrum', definition: 'An agile framework for managing knowledge work, with an emphasis on software development.' },
    { word: 'shale', definition: 'A soft, finely stratified sedimentary rock that formed from consolidated mud or clay and can be split easily into fragile slabs.' },
    { word: 'share', definition: 'One of the equal parts into which a company\'s capital is divided, entitling the holder to a proportion of the profits.' },
    { word: 'siege', definition: 'A military operation in which enemy forces surround a town or building, cutting off essential supplies.' },
    { word: 'sieve', definition: 'A utensil consisting of a wire or plastic mesh held in a frame, used for straining solids from liquids.' },
    { word: 'sigma', definition: 'A symbol (Σ) denoting summation of a set or series.' },
    { word: 'slate', definition: 'A fine-grained gray, green, or bluish metamorphic rock easily split into smooth, flat pieces.' },
    { word: 'slope', definition: 'The steepness of a line, particularly in a linear equation.' },
    { word: 'solar', definition: 'Relating to or determined by the sun.' },
    { word: 'stack', definition: 'A linear data structure which follows a particular order in which the operations are performed.' },
    { word: 'stock', definition: 'The capital raised by a business or corporation through the issue and subscription of shares.' },
    { word: 'table', definition: 'In relational databases, a set of data elements that is organized using a model of vertical columns and horizontal rows.' },
    { word: 'talon', definition: 'A claw, especially one belonging to a bird of prey.' },
    { word: 'tapir', definition: 'A large, herbivorous, chiefly nocturnal mammal of tropical America, with a short flexible proboscis.' },
    { word: 'taxes', definition: 'Compulsory contributions to state revenue, levied by the government on workers\' income and business profits.' },
    { word: 'terra', definition: 'The Latin term for earth or land.' },
    { word: 'tetra', definition: 'A prefix meaning four, often used in geometry and algebra.' },
    { word: 'theta', definition: 'The eighth letter of the Greek alphabet, used in mathematics and science.' },
    { word: 'tibia', definition: 'The inner and typically larger of the two bones between the knee and the ankle in vertebrates, parallel with the fibula.' },
    { word: 'tides', definition: 'The alternate rising and falling of the sea, usually twice in each lunar day at a particular place, due to the attraction of the moon and sun.' },
    { word: 'token', definition: 'A piece of data representing a fact or a unit, often used in authentication processes in computing.' },
    { word: 'torus', definition: 'A surface or solid formed by rotating a circle about an external axis.' },
    { word: 'total', definition: 'Referring to a type of eclipse where the entire surface is obscured.' },
    { word: 'towel', definition: 'A piece of absorbent fabric or paper used for drying or wiping a body or a surface.' },
    { word: 'trade', definition: 'The action of buying and selling goods and services.' },
    { word: 'ulcer', definition: 'An open sore on an external or internal surface of the body, caused by a break in the skin or mucous membrane that fails to heal.' },
    { word: 'ulnar', definition: 'Relating to the ulna, a bone in the arm.' },
    { word: 'ultra', definition: 'Beyond in degree or quality, often used in science (like ultraviolet).' },
    { word: 'umbra', definition: 'The fully shaded inner region of a shadow cast by an opaque object.' },
    { word: 'union', definition: 'An organized association of workers formed to protect and further their rights and interests.' },
    { word: 'unite', definition: 'Come or bring together for a common purpose or action.' },
    { word: 'units', definition: 'An entity regarded as an elementary constituent of a field or a ring.' },
    { word: 'unity', definition: 'The state of forming a complete and harmonious whole, especially in mathematics.' },
    { word: 'unzip', definition: 'To extract the contents of a compressed file.' },
    { word: 'uplift', definition: 'A structural elevation of the earth\'s crust.' },
    { word: 'ursch', definition: 'Urschleim, a hypothetical organic material in alchemical, pre-Darwinian, evolutionary theories about the origins of life.' },
    { word: 'usage', definition: 'The action of using something or the fact of being used.' },
    { word: 'usurp', definition: 'Take (a position of power or importance) illegally or by force.' },
    { word: 'value', definition: 'The regard that something is held to deserve; the importance, worth, or usefulness of something.' },
    { word: 'vapor', definition: 'A substance diffused or suspended in the air, especially one normally liquid or solid.' },
    { word: 'varia', definition: 'Short for variable, an element, feature, or factor that is liable to vary or change.' },
    { word: 'veins', definition: 'A fracture in rock containing a deposit of minerals or ore.' },
    { word: 'venue', definition: 'The place where something happens, especially an organized event such as a concert, conference, or sports event.' },
    { word: 'venus', definition: 'The second planet from the sun in our solar system, known for its brightness.' },
    { word: 'virgo', definition: 'A constellation in the zodiac, representing a maiden.' },
    { word: 'virus', definition: 'A type of malicious software that, when executed, replicates itself by modifying other computer programs and inserting its own code.' },
    { word: 'vital', definition: 'Absolutely necessary or important; essential.' },
    { word: 'vivid', definition: 'Producing powerful feelings or strong, clear images in the mind.' },
    { word: 'vocal', definition: 'Relating to the human voice.' },
    { word: 'volts', definition: 'The SI unit of electromotive force, the difference of potential that would drive one ampere of current against one ohm resistance.' },
    { word: 'vowel', definition: 'A speech sound made with the vocal tract open.' },
    { word: 'wacky', definition: 'Funny or amusing in a slightly odd or peculiar way.' },
    { word: 'wadis', definition: 'A valley, ravine, or channel that is dry except in the rainy season.' },
    { word: 'wages', definition: 'A fixed regular payment earned for work or services.' },
    { word: 'waste', definition: 'Use or expend carelessly, extravagantly, or to no purpose.' },
    { word: 'water', definition: 'A colorless, transparent, odorless liquid that forms the seas, lakes, rivers, and rain, and is the basis of the fluids of living organisms.' },
    { word: 'watts', definition: 'A unit of power in the International System of Units, equal to one joule per second.' },
    { word: 'wedge', definition: 'A piece of wood, metal, or other material with a thick end tapering to a thin edge, used to secure or split something.' },
    { word: 'whack', definition: 'Strike forcefully with a sharp blow.' },
    { word: 'whale', definition: 'A very large marine mammal with a streamlined hairless body, a horizontal tail fin, and a blowhole on top of the head for breathing.' },
    { word: 'wharf', definition: 'A level quayside area to which a ship may be moored to load and unload.' },
    { word: 'while', definition: 'A control flow statement that allows code to be executed repeatedly based on a given Boolean condition.' },
    { word: 'whorl', definition: 'A pattern of spirals or concentric circles.' },
    { word: 'width', definition: 'The measurement or extent of something from side to side; the lesser of two or the least of three dimensions of a body.' },
    { word: 'world', definition: 'Another term for a planet, especially when considered as a physical entity independent of other planets.' },
    { word: 'worms', definition: 'Used metaphorically in astronomy to describe wormholes, hypothetical passages through space-time.' },
    { word: 'xebec', definition: 'A small three-masted Mediterranean vessel with long overhanging bow and stern.' },
    { word: 'xenic', definition: 'Pertaining to xenon; in mathematics, it can refer to exotic or unusual structures or properties.' },
    { word: 'xenon', definition: 'A chemical element with the symbol Xe and atomic number 54, used in some types of space propulsion systems.' },
    { word: 'xeric', definition: 'Characterized by or adapted to a dry habitat.' },
    { word: 'xhtml', definition: 'A hybrid between HTML and XML specifically designed for Net device displays.' },
    { word: 'xterm', definition: 'A terminal emulator for the X Window System.' },
    { word: 'xylem', definition: 'The vascular tissue in plants that conducts water and dissolved nutrients upward from the root and also helps to form the woody element in the stem.' },
    { word: 'yacht', definition: 'A medium-sized sailboat equipped for cruising or racing.' },
    { word: 'yearn', definition: 'To have an intense feeling of longing for something, typically something that one has lost or been separated from.' },
    { word: 'years', definition: 'The length of time that a person has lived or a thing has existed.' },
    { word: 'yeast', definition: 'A microscopic fungus consisting of single oval cells that reproduce by budding, and capable of converting sugar into alcohol and carbon dioxide.' },
    { word: 'yield', definition: 'In computer science, it is a way of pausing and resuming functions in programming languages.' },
    { word: 'yotta', definition: 'The largest decimal unit prefix in the metric system, denoting a factor of 10^24.' },
    { word: 'youth', definition: 'The period between childhood and adult age.' },
    { word: 'yucca', definition: 'A plant of the agave family with stiff, sword-shaped leaves, native to the southern US and Latin America.' },
    { word: 'zebra', definition: 'A silicate mineral, zirconium silicate, occurring in small tetragonal crystals or grains of various colors, used as a gemstone.' },
    { word: 'zener', definition: 'Relating to a Zener diode, a semiconductor device that allows current to flow in the reverse direction when a certain voltage is reached.' },
    { word: 'zeros', definition: 'The points at which a function or equation equals zero.' },
    { word: 'zesty', definition: 'Having a strong, pleasant, and somewhat spicy flavor.' },
    { word: 'zetta', definition: 'A numerical prefix in the metric system denoting a factor of 10^21 or 1,000,000,000,000,000,000,000.' },
    { word: 'zonal', definition: 'Relating to a zone, especially in planetary geology and astronomy.' },
    { word: 'zones', definition: 'Areas or stretches of land having a particular characteristic, purpose, or use, or subject to particular restrictions.' }
    ];
    
    // const targetWordObject = wordBank[Math.floor(Math.random() * wordBank.length)];
    // const targetWord = targetWordObject.word;
    const keyboardRows = ['QWERTYUIOP', 'ASDFGHJKL', 'ZXCVBNM'];
    let guesses = [];
    let currentGuess = '';
    const maxGuesses = 6;
    let gameWon = false;
    
    const dailyWordIndex = window.dailyWord.getDailyWordIndex(wordBank.length);
    const targetWordObject = wordBank[dailyWordIndex];
    const targetWord = targetWordObject.word;
    
    function isValidGuess(word) {
        return wordList.includes(word.toLowerCase()) || wordBank.some(wb => wb.word === word.toLowerCase());
    }
    
    function createGrid() {
        const grid = document.getElementById('wordleGrid');
        for (let i = 0; i < maxGuesses * 5; i++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            grid.appendChild(cell);
        }
    }
    
    function createKeyboard() {
        const keyboard = document.getElementById('keyboard');
        keyboardRows.forEach(row => {
            const rowDiv = document.createElement('div');
            rowDiv.className = 'keyboard-row';
            for (let key of row) {
                const button = document.createElement('button');
                button.textContent = key;
                button.className = 'key';
                button.setAttribute('data-key', key);
                button.addEventListener('click', () => handleKey(key));
                rowDiv.appendChild(button);
            }
            keyboard.appendChild(rowDiv);
        });
    
        // Add Enter and Backspace keys
        const enterKey = document.createElement('button');
        enterKey.textContent = 'Enter';
        enterKey.setAttribute('data-key', 'Enter');
        enterKey.className = 'key wide';
        enterKey.addEventListener('click', handleGuessSubmission);
        keyboard.appendChild(enterKey);
    
        const backspaceKey = document.createElement('button');
        backspaceKey.textContent = '⌫';
        backspaceKey.setAttribute('data-key', 'Backspace');
        backspaceKey.className = 'key wide';
        backspaceKey.addEventListener('click', () => {
            currentGuess = currentGuess.slice(0, -1);
            updateGrid();
        });
        keyboard.appendChild(backspaceKey);
    }
    
    function handleKey(key) {
        if (gameWon) return;
        if (key === 'Enter') {
            handleGuessSubmission();
            return;
        }
        if (key === 'Backspace') {
            currentGuess = currentGuess.slice(0, -1);
        } else if (currentGuess.length < 5) {
            currentGuess += key.toLowerCase();
        }
        updateGrid();
        highlightActiveCell();
    }
    
    function highlightActiveCell() {
        const cells = document.querySelectorAll('.cell');
        // Remove active class from all cells
        cells.forEach(cell => cell.classList.remove('active'));
    
        // Add active class to the next empty cell
        const nextEmptyCell = [...cells].find(cell => !cell.textContent);
        if (nextEmptyCell) {
            nextEmptyCell.classList.add('active');
        }
    }
    
    function updateGrid() {
        const cells = document.querySelectorAll('.cell');
        
        // Clear all cells before updating the grid
        cells.forEach(cell => {
            cell.textContent = '';
            cell.className = 'cell';
        });
    
        // Update cells with guesses
        guesses.forEach((guess, guessIndex) => {
            guess.split('').forEach((letter, letterIndex) => {
                const cell = cells[guessIndex * 5 + letterIndex];
                cell.textContent = letter.toUpperCase();
                cell.className = 'cell';
                if (letter === targetWord[letterIndex]) {
                    cell.classList.add('correct');
                } else if (targetWord.includes(letter)) {
                    cell.classList.add('present');
                } else {
                    cell.classList.add('absent');
                }
            });
        });
    
        // Update cells with current guess in progress
        currentGuess.split('').forEach((letter, index) => {
            cells[guesses.length * 5 + index].textContent = letter.toUpperCase();
            cells[guesses.length * 5 + index].className = 'cell';
        });
    
        if (guesses.length > 0) {
            updateKeyboard(guesses[guesses.length - 1]);
        }
    }
    
    function updateKeyboard(guess) {
        guess.split('').forEach((letter, index) => {
            const key = document.querySelector(`.key[data-key="${letter.toUpperCase()}"]`);
            if (!key) return;
    
            if (letter === targetWord[index]) {
                key.classList.add('correct');
            } else if (targetWord.includes(letter)) {
                if (!key.classList.contains('correct')) {
                    key.classList.add('present');
                }
            } else {
                key.classList.add('absent');
            }
        });
    }
    
    // Separate function to handle keydown events
    function handleKeyDown(e) {
        if (gameWon) return; // Ignore key presses if the game is won
        
        const isLetter = /^[a-zA-Z]$/.test(e.key);
        if (isLetter && currentGuess.length < 5) {
            handleKey(e.key.toUpperCase());
        } else if (e.key === 'Enter') {
            handleGuessSubmission();
        } else if (e.key === 'Backspace') {
            handleKey('Backspace');
        }
        
        const keyElement = document.querySelector(`.key[data-key="${e.key.toUpperCase()}"]`);
        if (keyElement) {
            keyElement.classList.add('active');
            setTimeout(() => keyElement.classList.remove('active'), 200);
        }
    }
    
    document.addEventListener('keydown', handleKeyDown);
    
    function displayStatistics() {
        const stats = window.statistics.getStatistics();
    
        // Update the DOM elements with the new statistics
        document.getElementById('playedCount').textContent = stats.played;
        document.getElementById('winsCount').textContent = stats.wins;
        document.getElementById('winPercent').textContent = ((stats.wins / stats.played) * 100).toFixed(0) + '%';
        document.getElementById('currentStreakCount').textContent = stats.currentStreak;
        document.getElementById('maxStreakCount').textContent = stats.maxStreak;
    
        // Update the progress bars for attempts
        for (let i = 0; i < 6; i++) { // Adjust the loop to iterate from 0 to 5
            const progressBar = document.getElementById(`try${i+1}`);
            const countSpan = document.getElementById(`tryCount${i+1}`);
            if (progressBar && countSpan) {
                progressBar.value = stats.guessDistribution[i];
                progressBar.max = stats.played;
                countSpan.textContent = stats.guessDistribution[i];
            }
        }
    
        // Update the 'fails' progress bar
        const failProgressBar = document.getElementById('fail');
        const failCountSpan = document.getElementById('failCount');
        if (failProgressBar && failCountSpan) {
            const totalFails = stats.guessDistribution[6]; // Index 6 is for fails
            failProgressBar.value = totalFails;
            failProgressBar.max = stats.played;
            failCountSpan.textContent = totalFails;
        }
    }
    
      
      function handleGuessSubmission() {
        if (!gameWon && currentGuess.length === 5 && guesses.length < maxGuesses) {
          if (!isValidGuess(currentGuess)) {
            alert('Not a valid word. Try again.');
            currentGuess = ''; // Reset current guess to allow new input
            updateGrid();
            highlightActiveCell(); // Re-highlight the first cell
            return;
          }
      
          guesses.push(currentGuess);
          currentGuess = '';
          updateGrid();
      
          const won = guesses[guesses.length - 1] === targetWord;
          if (won) {
            gameWon = true;
            window.statistics.updateStatistics(true, guesses.length); // Update the statistics with the result
            displayStatistics(); // Update statistics before showing the modal
            showModal('Congratulations, you guessed today\'s word!', targetWord, targetWordObject.definition);
            window.dailyWord.setLastPlayDate(); // Mark the game as played today
            } else if (guesses.length === maxGuesses) {
            gameWon = true;
            window.statistics.updateStatistics(false, 7); // Indicate a lost game with 7 as the "fail" index
            displayStatistics(); // Update statistics before showing the modal
            showModal('Better luck tomorrow!', targetWord, targetWordObject.definition);
            window.dailyWord.setLastPlayDate(); // Mark the game as played today
          } else {
            highlightActiveCell(); // Highlight next active cell only if the game is not over
          }
        }
    }
      
    // Function to close the explanation modal
    function closeExplanationModal() {
            const modal = document.getElementById('explanationModal');
            modal.style.display = "none";
    }
    
    // Event listener for the explanation modal close button
    document.addEventListener('DOMContentLoaded', () => {
        const closeBtn = document.querySelector('#explanationModal .close-button');
        closeBtn.addEventListener('click', closeExplanationModal);
    });
    
        // Optionally set a timeout to automatically close the explanation modal after a few seconds
        setTimeout(closeExplanationModal, 600000); // Closes after 10 seconds
    
    
    function showModal(title, word, definition) {
            const modal = document.getElementById('gameModal');
            if (!modal) return; // Ensure the modal element exists
          
            // Update the modal content
            const modalTitle = document.getElementById('modalTitle');
            const wordDisplay = document.getElementById('wordDisplay');
            const definitionDisplay = document.getElementById('definitionDisplay');
            modalTitle.textContent = title;
            wordDisplay.textContent = `The word was: ${word}`;
            definitionDisplay.textContent = `Definition: ${definition}`;
          
            // Show the modal with updated statistics
            modal.style.display = "block";
            setTimeout(() => {
              modal.classList.add('show'); // Fade in the modal
            }, 500); // Delay to allow for any previous animations to complete
    }
    
    function closeModal() {
            const modal = document.getElementById('gameModal');
            modal.classList.remove('show'); // Remove the 'show' class to hide the modal
            setTimeout(() => {
                modal.style.display = "none"; // Hide the modal after the fade-out completes
            }, 400); // Should match the duration of the fade-out transition
    }
    
    function generateResultsString() {
        let resultsString = 'Can you beat my Bloomble score:\n';
        guesses.forEach(guess => {
            for (let i = 0; i < guess.length; i++) {
                if (guess[i] === targetWord[i]) {
                    resultsString += '🟩'; // Correct
                } else if (targetWord.includes(guess[i])) {
                    resultsString += '🟨'; // Present
                } else {
                    resultsString += '⬜'; // Absent
                }
            }
            resultsString += '\n';
        });
        return resultsString;
    }
    
    function copyResultsToClipboard() {
        const results = generateResultsString();
        navigator.clipboard.writeText(results).then(() => {
            alert('Results copied to clipboard!');
        }, err => {
            console.error('Could not copy text: ', err);
        });
    }
    
    // Set the event listener for the close button of the modal
    // This should be done after the modal HTML is in place
    document.addEventListener('DOMContentLoaded', () => {
        const closeButton = document.querySelector('.close-button');
        closeButton.addEventListener('click', closeModal);
    
        const closeButton1 = document.querySelector('.close-button1');
        closeButton.addEventListener('click', closeModal);
    
        const shareButton = document.getElementById('shareButton');
        shareButton.addEventListener('click', copyResultsToClipboard);  
    
          // Help button event listener
      const helpButton = document.getElementById('helpButton');
      helpButton.addEventListener('click', () => {
        const explanationModal = document.getElementById('explanationModal');
        explanationModal.style.display = 'block';
      });
    
      const closeButtons = document.querySelectorAll('.close-button');
      closeButtons.forEach(button => {
        button.addEventListener('click', () => {
          button.closest('.modal').style.display = 'none';
        });
      });
    
      const closeButtons1 = document.querySelectorAll('.close-button1');
      closeButtons1.forEach(button => {
        button.addEventListener('click', () => {
          button.closest('.modal').style.display = 'none';
        });
      });
    });
    
    // ... the rest of your script.js code ...
    
    function createOverlay() {
        const overlay = document.createElement('div');
        overlay.id = 'gameOverlay';
        overlay.className = 'overlay hidden'; // Start as hidden
    
        const message = document.createElement('p');
        message.textContent = "Sorry! You've already played today. Come back tomorrow for a new word! The clock resets at midnight...";
        overlay.appendChild(message);
    
        document.body.appendChild(overlay); // Assuming you want it to cover the whole page
    }
    
    
    window.onload = function() {
        createOverlay(); // Initialize the overlay
    
        if (window.dailyWord.hasPlayedToday()) {
            document.getElementById('gameOverlay').classList.remove('hidden');
            // If already played, don't allow further interactions
            return;
        } else {
          createGrid();
          createKeyboard();
          highlightActiveCell(); // Initially highlight the first cell
        }
      
        // Show the explanation modal immediately on page load
        const explanationModal = document.getElementById('explanationModal');
        if (explanationModal) {
          explanationModal.style.display = "block";
          explanationModal.classList.add('show');
        }
      };
    