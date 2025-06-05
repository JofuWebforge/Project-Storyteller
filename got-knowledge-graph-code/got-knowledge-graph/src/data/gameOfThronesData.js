// gameOfThronesData.js - Westeros Knowledge Graph
export const graphData = {
nodes: [
// Major Characters
{ id: 1, label: "Jon Snow", type: "character", house: "Stark", title: "King in the North", status: "Alive", color: "#c0392b" },
{ id: 2, label: "Daenerys Targaryen", type: "character", house: "Targaryen", title: "Mother of Dragons", status: "Deceased", color: "#c0392b" },
{ id: 3, label: "Tyrion Lannister", type: "character", house: "Lannister", title: "Hand of the Queen", status: "Alive", color: "#c0392b" },
{ id: 4, label: "Arya Stark", type: "character", house: "Stark", title: "No One", status: "Alive", color: "#c0392b" },
{ id: 5, label: "Sansa Stark", type: "character", house: "Stark", title: "Queen in the North", status: "Alive", color: "#c0392b" },
{ id: 6, label: "Cersei Lannister", type: "character", house: "Lannister", title: "Queen of the Seven Kingdoms", status: "Deceased", color: "#c0392b" },
{ id: 7, label: "Jaime Lannister", type: "character", house: "Lannister", title: "Ser Jaime", status: "Deceased", color: "#c0392b" },
{ id: 8, label: "Ned Stark", type: "character", house: "Stark", title: "Lord of Winterfell", status: "Deceased", color: "#c0392b" },
{ id: 9, label: "Catelyn Stark", type: "character", house: "Stark", title: "Lady of Winterfell", status: "Deceased", color: "#c0392b" },
{ id: 10, label: "Robb Stark", type: "character", house: "Stark", title: "King in the North", status: "Deceased", color: "#c0392b" },
{ id: 11, label: "Bran Stark", type: "character", house: "Stark", title: "King of the Six Kingdoms", status: "Alive", color: "#c0392b" },
{ id: 12, label: "Joffrey Baratheon", type: "character", house: "Baratheon", title: "King of the Seven Kingdoms", status: "Deceased", color: "#c0392b" },
{ id: 13, label: "Robert Baratheon", type: "character", house: "Baratheon", title: "King of the Seven Kingdoms", status: "Deceased", color: "#c0392b" },
{ id: 14, label: "Stannis Baratheon", type: "character", house: "Baratheon", title: "King of Dragonstone", status: "Deceased", color: "#c0392b" },
{ id: 15, label: "Renly Baratheon", type: "character", house: "Baratheon", title: "Lord of Storm's End", status: "Deceased", color: "#c0392b" },
{ id: 16, label: "Tywin Lannister", type: "character", house: "Lannister", title: "Lord of Casterly Rock", status: "Deceased", color: "#c0392b" },
{ id: 17, label: "Theon Greyjoy", type: "character", house: "Greyjoy", title: "Prince of the Iron Islands", status: "Deceased", color: "#c0392b" },
{ id: 18, label: "Samwell Tarly", type: "character", house: "Tarly", title: "Grand Maester", status: "Alive", color: "#c0392b" },
{ id: 19, label: "Night King", type: "character", house: "White Walkers", title: "Leader of the Dead", status: "Deceased", color: "#c0392b" },
{ id: 20, label: "Sandor Clegane", type: "character", house: "Clegane", title: "The Hound", status: "Alive", color: "#c0392b" },


// Great Houses
{ id: 30, label: "House Stark", type: "house", seat: "Winterfell", words: "Winter is Coming", sigil: "🐺", color: "#f39c12" },
{ id: 31, label: "House Lannister", type: "house", seat: "Casterly Rock", words: "Hear Me Roar", sigil: "🦁", color: "#f39c12" },
{ id: 32, label: "House Targaryen", type: "house", seat: "Dragonstone", words: "Fire and Blood", sigil: "🐉", color: "#f39c12" },
{ id: 33, label: "House Baratheon", type: "house", seat: "Storm's End", words: "Ours is the Fury", sigil: "🦌", color: "#f39c12" },
{ id: 34, label: "House Greyjoy", type: "house", seat: "Pyke", words: "We Do Not Sow", sigil: "🐙", color: "#f39c12" },
{ id: 35, label: "House Tarly", type: "house", seat: "Horn Hill", words: "First in Battle", sigil: "🏹", color: "#f39c12" },
{ id: 36, label: "House Clegane", type: "house", seat: "Clegane's Keep", words: "Sworn to Lannister", sigil: "🐕", color: "#f39c12" },

// Locations
{ id: 50, label: "King's Landing", type: "location", region: "Crownlands", description: "Capital of the Seven Kingdoms", color: "#2980b9" },
{ id: 51, label: "Winterfell", type: "location", region: "The North", description: "Seat of House Stark", color: "#2980b9" },
{ id: 52, label: "Casterly Rock", type: "location", region: "Westerlands", description: "Seat of House Lannister", color: "#2980b9" },
{ id: 53, label: "Dragonstone", type: "location", region: "Crownlands", description: "Ancient Targaryen stronghold", color: "#2980b9" },
{ id: 54, label: "The Wall", type: "location", region: "The North", description: "Ancient ice barrier", color: "#2980b9" },
{ id: 55, label: "Braavos", type: "location", region: "Free Cities", description: "Free city across the Narrow Sea", color: "#2980b9" },
{ id: 56, label: "Storm's End", type: "location", region: "Stormlands", description: "Seat of House Baratheon", color: "#2980b9" },
{ id: 57, label: "Pyke", type: "location", region: "Iron Islands", description: "Seat of House Greyjoy", color: "#2980b9" },
{ id: 58, label: "The Twins", type: "location", region: "Riverlands", description: "Seat of House Frey", color: "#2980b9" },
{ id: 59, label: "Harrenhal", type: "location", region: "Riverlands", description: "Cursed castle", color: "#2980b9" },

// Major Events
{ id: 70, label: "Red Wedding", type: "event", season: "Season 3", date: "299 AC", description: "Massacre at The Twins", color: "#8e44ad" },
{ id: 71, label: "Battle of Blackwater", type: "event", season: "Season 2", date: "299 AC", description: "Stannis attacks King's Landing", color: "#8e44ad" },
{ id: 72, label: "Purple Wedding", type: "event", season: "Season 4", date: "300 AC", description: "Joffrey's death", color: "#8e44ad" },
{ id: 73, label: "Battle of the Bastards", type: "event", season: "Season 6", date: "300 AC", description: "Jon Snow vs Ramsay Bolton", color: "#8e44ad" },
{ id: 74, label: "Robert's Rebellion", type: "event", season: "Backstory", date: "282-283 AC", description: "War that put Robert on throne", color: "#8e44ad" },
{ id: 75, label: "Battle of Winterfell", type: "event", season: "Season 8", date: "305 AC", description: "The living vs the dead", color: "#8e44ad" },
{ id: 76, label: "Destruction of King's Landing", type: "event", season: "Season 8", date: "305 AC", description: "Daenerys burns the capital", color: "#8e44ad" },
{ id: 77, label: "War of Five Kings", type: "event", season: "Seasons 1-4", date: "298-300 AC", description: "Civil war for the Iron Throne", color: "#8e44ad" },

// Important Concepts
{ id: 90, label: "Iron Throne", type: "concept", category: "Symbol of Power", description: "Throne of the Seven Kingdoms", color: "#27ae60" },
{ id: 91, label: "Night's Watch", type: "concept", category: "Organization", description: "Guardians of the Wall", color: "#27ae60" },
{ id: 92, label: "Faceless Men", type: "concept", category: "Organization", description: "Assassins of Braavos", color: "#27ae60" },
{ id: 93, label: "White Walkers", type: "concept", category: "Supernatural", description: "Ancient enemies of the living", color: "#27ae60" },
{ id: 94, label: "Dragons", type: "concept", category: "Creatures", description: "Targaryen dragons", color: "#27ae60" },
{ id: 95, label: "Valyrian Steel", type: "concept", category: "Magic", description: "Rare magical steel", color: "#27ae60" },
{ id: 96, label: "Wildfire", type: "concept", category: "Weapon", description: "Explosive green substance", color: "#27ae60" },
{ id: 97, label: "Three-Eyed Raven", type: "concept", category: "Supernatural", description: "Ancient magical entity", color: "#27ae60" },
],

edges: [
// Family Relationships
{ from: 8, to: 1, label: "father of", weight: 3 },
{ from: 8, to: 4, label: "father of", weight: 3 },
{ from: 8, to: 5, label: "father of", weight: 3 },
{ from: 8, to: 10, label: "father of", weight: 3 },
{ from: 8, to: 11, label: "father of", weight: 3 },
{ from: 9, to: 4, label: "mother of", weight: 3 },
{ from: 9, to: 5, label: "mother of", weight: 3 },
{ from: 9, to: 10, label: "mother of", weight: 3 },
{ from: 9, to: 11, label: "mother of", weight: 3 },
{ from: 16, to: 3, label: "father of", weight: 3 },
{ from: 16, to: 6, label: "father of", weight: 3 },
{ from: 16, to: 7, label: "father of", weight: 3 },
{ from: 6, to: 7, label: "twin of", weight: 3 },
{ from: 6, to: 12, label: "mother of", weight: 3 },
{ from: 13, to: 14, label: "brother of", weight: 2 },
{ from: 13, to: 15, label: "brother of", weight: 2 },


// House Allegiances
{ from: 1, to: 30, label: "member of", weight: 3 },
{ from: 4, to: 30, label: "member of", weight: 3 },
{ from: 5, to: 30, label: "member of", weight: 3 },
{ from: 8, to: 30, label: "lord of", weight: 3 },
{ from: 10, to: 30, label: "member of", weight: 3 },
{ from: 11, to: 30, label: "member of", weight: 3 },
{ from: 3, to: 31, label: "member of", weight: 3 },
{ from: 6, to: 31, label: "member of", weight: 3 },
{ from: 7, to: 31, label: "member of", weight: 3 },
{ from: 16, to: 31, label: "lord of", weight: 3 },
{ from: 2, to: 32, label: "member of", weight: 3 },
{ from: 12, to: 33, label: "member of", weight: 3 },
{ from: 13, to: 33, label: "lord of", weight: 3 },
{ from: 14, to: 33, label: "member of", weight: 3 },
{ from: 15, to: 33, label: "member of", weight: 3 },
{ from: 17, to: 34, label: "member of", weight: 3 },
{ from: 18, to: 35, label: "member of", weight: 3 },
{ from: 20, to: 36, label: "member of", weight: 3 },

// Location Relationships
{ from: 30, to: 51, label: "rules from", weight: 3 },
{ from: 31, to: 52, label: "rules from", weight: 3 },
{ from: 32, to: 53, label: "ancestral seat", weight: 3 },
{ from: 33, to: 56, label: "rules from", weight: 3 },
{ from: 34, to: 57, label: "rules from", weight: 3 },
{ from: 1, to: 54, label: "serves at", weight: 2 },
{ from: 18, to: 54, label: "serves at", weight: 2 },
{ from: 4, to: 55, label: "trained in", weight: 2 },
{ from: 13, to: 50, label: "ruled from", weight: 3 },
{ from: 6, to: 50, label: "ruled from", weight: 3 },

// Event Participation
{ from: 10, to: 70, label: "died in", weight: 3 },
{ from: 9, to: 70, label: "died in", weight: 3 },
{ from: 70, to: 58, label: "occurred at", weight: 3 },
{ from: 3, to: 71, label: "fought in", weight: 2 },
{ from: 14, to: 71, label: "led", weight: 3 },
{ from: 71, to: 50, label: "occurred at", weight: 3 },
{ from: 12, to: 72, label: "died in", weight: 3 },
{ from: 72, to: 50, label: "occurred at", weight: 3 },
{ from: 1, to: 73, label: "fought in", weight: 3 },
{ from: 73, to: 51, label: "occurred at", weight: 3 },
{ from: 8, to: 74, label: "fought in", weight: 2 },
{ from: 13, to: 74, label: "led", weight: 3 },
{ from: 1, to: 75, label: "fought in", weight: 3 },
{ from: 4, to: 75, label: "fought in", weight: 3 },
{ from: 19, to: 75, label: "died in", weight: 3 },
{ from: 75, to: 51, label: "occurred at", weight: 3 },
{ from: 2, to: 76, label: "caused", weight: 3 },
{ from: 76, to: 50, label: "occurred at", weight: 3 },

// Concept Relationships
{ from: 13, to: 90, label: "sat on", weight: 3 },
{ from: 6, to: 90, label: "sat on", weight: 3 },
{ from: 12, to: 90, label: "sat on", weight: 3 },
{ from: 1, to: 91, label: "member of", weight: 3 },
{ from: 18, to: 91, label: "member of", weight: 3 },
{ from: 4, to: 92, label: "trained with", weight: 2 },
{ from: 92, to: 55, label: "based in", weight: 2 },
{ from: 19, to: 93, label: "leads", weight: 3 },
{ from: 2, to: 94, label: "mother of", weight: 3 },
{ from: 32, to: 94, label: "associated with", weight: 3 },
{ from: 1, to: 95, label: "wielded", weight: 2 },
{ from: 4, to: 95, label: "wielded", weight: 2 },
{ from: 6, to: 96, label: "used", weight: 2 },
{ from: 11, to: 97, label: "became", weight: 3 },

// Kills and Deaths
{ from: 4, to: 19, label: "killed", weight: 3 },
{ from: 3, to: 16, label: "killed", weight: 3 },
{ from: 6, to: 13, label: "killed", weight: 3 },
{ from: 1, to: 2, label: "killed", weight: 3 },

// Marriages and Alliances
{ from: 8, to: 9, label: "married to", weight: 2 },
{ from: 13, to: 6, label: "married to", weight: 2 },
{ from: 5, to: 10, label: "was married to", weight: 2 },

// Mentorship and Training
{ from: 3, to: 1, label: "advised", weight: 2 },
{ from: 3, to: 2, label: "advised", weight: 2 },
{ from: 20, to: 4, label: "trained", weight: 2 },
{ from: 1, to: 18, label: "befriended", weight: 2 },
]
};

// Node type configurations
export const nodeTypes = {
  character: { color: "#c0392b", icon: "👤", size: 25 },
  house: { color: "#f39c12", icon: "🏰", size: 30 },
  location: { color: "#2980b9", icon: "🏛️", size: 20 },
  event: { color: "#8e44ad", icon: "⚔️", size: 20 },
  concept: { color: "#27ae60", icon: "💭", size: 15 }
};

// Sample queries for testing
export const sampleQueries = [
  "Who are the members of House Stark?",
  "What events happened at King's Landing?",
  "Which characters died in the Red Wedding?",
  "Who wielded Valyrian Steel?",
  "What locations are associated with House Lannister?",
  "Which characters served in the Night's Watch?"
];

// House filter options
export const houses = [
  "All Houses",
  "House Stark",
  "House Lannister",
  "House Targaryen",
  "House Baratheon",
  "House Greyjoy",
  "House Tarly",
  "House Clegane"
];
