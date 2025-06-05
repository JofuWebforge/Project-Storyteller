export const demoGraphData = {
  nodes: [
    // Characters
    { id: 1, label: "Jon Snow", type: "character", group: "character", house: "Stark", title: "King in the North" },
    { id: 2, label: "Daenerys Targaryen", type: "character", group: "character", house: "Targaryen", title: "Mother of Dragons" },
    { id: 3, label: "Tyrion Lannister", type: "character", group: "character", house: "Lannister", title: "Hand of the Queen" },
    { id: 4, label: "Arya Stark", type: "character", group: "character", house: "Stark", title: "No One" },
    { id: 5, label: "Sansa Stark", type: "character", group: "character", house: "Stark", title: "Lady of Winterfell" },
    
    // Houses
    { id: 10, label: "House Stark", type: "house", group: "house", words: "Winter is Coming" },
    { id: 11, label: "House Targaryen", type: "house", group: "house", words: "Fire and Blood" },
    { id: 12, label: "House Lannister", type: "house", group: "house", words: "Hear Me Roar" },
    
    // Locations
    { id: 20, label: "Winterfell", type: "location", group: "location", region: "The North" },
    { id: 21, label: "King's Landing", type: "location", group: "location", region: "The Crownlands" },
    { id: 22, label: "The Wall", type: "location", group: "location", region: "The North" },
    
    // Events
    { id: 30, label: "Battle of the Bastards", type: "event", group: "event", year: "303 AC" },
    { id: 31, label: "Red Wedding", type: "event", group: "event", year: "299 AC" },
    
    // Concepts
    { id: 40, label: "The Iron Throne", type: "concept", group: "concept", description: "The seat of power in Westeros" },
    { id: 41, label: "White Walkers", type: "concept", group: "concept", description: "Ancient enemy from beyond the Wall" }
  ],
  edges: [
    // Character relationships
    { from: 1, to: 4, label: "siblings" },
    { from: 1, to: 5, label: "siblings" },
    { from: 4, to: 5, label: "siblings" },
    { from: 1, to: 2, label: "lovers" },
    { from: 3, to: 2, label: "advisor to" },
    
    // Character to House
    { from: 1, to: 10, label: "member of" },
    { from: 4, to: 10, label: "member of" },
    { from: 5, to: 10, label: "member of" },
    { from: 2, to: 11, label: "member of" },
    { from: 3, to: 12, label: "member of" },
    
    // Character to Location
    { from: 1, to: 20, label: "from" },
    { from: 1, to: 22, label: "served at" },
    { from: 3, to: 21, label: "lives in" },
    
    // Character to Event
    { from: 1, to: 30, label: "fought in" },
    { from: 5, to: 30, label: "witnessed" },
    
    // Location relationships
    { from: 20, to: 10, label: "seat of" },
    { from: 21, to: 40, label: "location of" },
    
    // Concept relationships
    { from: 1, to: 41, label: "fought against" },
    { from: 2, to: 40, label: "claims" }
  ]
}

export const nodeColors = {
  character: "#4A90E2",
  house: "#7B68EE",
  location: "#50C878",
  event: "#FFB84D",
  concept: "#FF6B6B"
}

export const nodeIcons = {
  character: "👤",
  house: "🏰",
  location: "📍",
  event: "⚔️",
  concept: "💡"
}