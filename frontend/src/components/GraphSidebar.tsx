import { useState } from 'react'
import { demoGraphData, nodeColors, nodeIcons } from '../data/demoGraphData'

interface GraphSidebarProps {
  selectedNode: typeof demoGraphData.nodes[0] | null
  onSearch: (searchTerm: string) => void
  onFilterType: (types: string[]) => void
  onFilterHouse?: (house: string | null) => void
}

export default function GraphSidebar({ 
  selectedNode, 
  onSearch, 
  onFilterType,
  onFilterHouse 
}: GraphSidebarProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTypes, setSelectedTypes] = useState<string[]>(['character', 'house', 'location', 'event', 'concept'])
  const [selectedHouse, setSelectedHouse] = useState<string | null>(null)

  const houses = ['Stark', 'Targaryen', 'Lannister']

  const handleSearch = (value: string) => {
    setSearchTerm(value)
    onSearch(value)
  }

  const handleTypeToggle = (type: string) => {
    const newTypes = selectedTypes.includes(type)
      ? selectedTypes.filter(t => t !== type)
      : [...selectedTypes, type]
    setSelectedTypes(newTypes)
    onFilterType(newTypes)
  }

  const handleHouseChange = (house: string | null) => {
    setSelectedHouse(house)
    onFilterHouse?.(house)
  }

  return (
    <div className="w-80 bg-white h-full shadow-lg flex flex-col">
      {/* Header */}
      <div className="p-6 border-b">
        <h2 className="text-2xl font-bold text-gray-900">Knowledge Graph</h2>
        <p className="text-sm text-gray-600 mt-1">Explore connections and relationships</p>
      </div>

      {/* Search */}
      <div className="p-4 border-b">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Search Nodes
        </label>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search by name..."
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Type Filters */}
      <div className="p-4 border-b">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Filter by Type
        </label>
        <div className="space-y-2">
          {Object.entries(nodeColors).map(([type, color]) => (
            <button
              key={type}
              onClick={() => handleTypeToggle(type)}
              className={`w-full flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                selectedTypes.includes(type)
                  ? 'bg-gray-100 text-gray-900'
                  : 'bg-gray-50 text-gray-400'
              }`}
            >
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ 
                  backgroundColor: selectedTypes.includes(type) ? color : '#ccc' 
                }}
              />
              <span className="flex-1 text-left capitalize">
                {nodeIcons[type as keyof typeof nodeIcons]} {type}
              </span>
              <span className="text-xs">
                ({demoGraphData.nodes.filter(n => n.type === type).length})
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* House Filter */}
      {onFilterHouse && (
        <div className="p-4 border-b">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Filter by House
          </label>
          <select
            value={selectedHouse || ''}
            onChange={(e) => handleHouseChange(e.target.value || null)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Houses</option>
            {houses.map(house => (
              <option key={house} value={house}>{house}</option>
            ))}
          </select>
        </div>
      )}

      {/* Selected Node Details */}
      <div className="flex-1 p-4 overflow-y-auto">
        {selectedNode ? (
          <div>
            <h3 className="text-lg font-semibold mb-3">Node Details</h3>
            <div className="space-y-3">
              <div>
                <span className="text-sm font-medium text-gray-500">Name</span>
                <p className="text-gray-900">{selectedNode.label}</p>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-500">Type</span>
                <p className="text-gray-900 capitalize">
                  {nodeIcons[selectedNode.type as keyof typeof nodeIcons]} {selectedNode.type}
                </p>
              </div>
              {selectedNode.house && (
                <div>
                  <span className="text-sm font-medium text-gray-500">House</span>
                  <p className="text-gray-900">{selectedNode.house}</p>
                </div>
              )}
              {selectedNode.title && (
                <div>
                  <span className="text-sm font-medium text-gray-500">Title</span>
                  <p className="text-gray-900">{selectedNode.title}</p>
                </div>
              )}
              {selectedNode.words && (
                <div>
                  <span className="text-sm font-medium text-gray-500">Words</span>
                  <p className="text-gray-900 italic">"{selectedNode.words}"</p>
                </div>
              )}
              {selectedNode.region && (
                <div>
                  <span className="text-sm font-medium text-gray-500">Region</span>
                  <p className="text-gray-900">{selectedNode.region}</p>
                </div>
              )}
              {selectedNode.year && (
                <div>
                  <span className="text-sm font-medium text-gray-500">Year</span>
                  <p className="text-gray-900">{selectedNode.year}</p>
                </div>
              )}
              {selectedNode.description && (
                <div>
                  <span className="text-sm font-medium text-gray-500">Description</span>
                  <p className="text-gray-900">{selectedNode.description}</p>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="text-center text-gray-500 mt-8">
            <p>Click on a node to view details</p>
          </div>
        )}
      </div>
    </div>
  )
}