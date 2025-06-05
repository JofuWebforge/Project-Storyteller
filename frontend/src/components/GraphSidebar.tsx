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
  const [expandedSections, setExpandedSections] = useState({
    filters: true,
    details: true,
    connections: true
  })

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

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const getNodeConnections = () => {
    if (!selectedNode) return []
    
    return demoGraphData.edges
      .filter(edge => edge.from === selectedNode.id || edge.to === selectedNode.id)
      .map(edge => {
        const otherNodeId = edge.from === selectedNode.id ? edge.to : edge.from
        const otherNode = demoGraphData.nodes.find(n => n.id === otherNodeId)
        const relationship = edge.from === selectedNode.id ? edge.label : reverseRelationship(edge.label)
        
        return {
          node: otherNode,
          relationship
        }
      })
  }

  const reverseRelationship = (relationship: string) => {
    const reversals: Record<string, string> = {
      'father of': 'child of',
      'mother of': 'child of',
      'killed': 'killed by',
      'married to': 'married to',
      'member of': 'includes',
      'trained': 'trained by',
      'advised': 'advised by',
      'led': 'led by'
    }
    return reversals[relationship] || relationship
  }

  return (
    <div className="w-80 bg-gray-900 h-full shadow-lg flex flex-col text-gray-100">
      {/* Header */}
      <div className="p-6 border-b border-gray-700 bg-gray-800">
        <h2 className="text-2xl font-bold text-gray-100">Knowledge Graph</h2>
        <p className="text-sm text-gray-400 mt-1">Explore connections and relationships</p>
      </div>

      {/* Search */}
      <div className="p-4 border-b border-gray-700">
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search nodes..."
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-100 placeholder-gray-500"
          />
          <span className="absolute right-3 top-2.5 text-gray-500">🔍</span>
        </div>
      </div>

      {/* Filters Section */}
      <div className="border-b border-gray-700">
        <button
          onClick={() => toggleSection('filters')}
          className="w-full p-4 flex justify-between items-center hover:bg-gray-800"
        >
          <span className="font-medium">Filters</span>
          <span className="transform transition-transform duration-200" style={{
            transform: expandedSections.filters ? 'rotate(180deg)' : 'none'
          }}>▼</span>
        </button>
        
        {expandedSections.filters && (
          <div className="p-4 space-y-4">
            {/* Type Filters */}
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Node Types
              </label>
              <div className="space-y-2">
                {Object.entries(nodeColors).map(([type, color]) => (
                  <button
                    key={type}
                    onClick={() => handleTypeToggle(type)}
                    className={`w-full flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                      selectedTypes.includes(type)
                        ? 'bg-gray-700 text-gray-100'
                        : 'bg-gray-800 text-gray-500'
                    }`}
                  >
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ 
                        backgroundColor: selectedTypes.includes(type) ? color : '#4a5568' 
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
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  House Filter
                </label>
                <select
                  value={selectedHouse || ''}
                  onChange={(e) => handleHouseChange(e.target.value || null)}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-100"
                >
                  <option value="">All Houses</option>
                  {houses.map(house => (
                    <option key={house} value={house}>{house}</option>
                  ))}
                </select>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Node Details */}
      {selectedNode && (
        <>
          <div className="border-b border-gray-700">
            <button
              onClick={() => toggleSection('details')}
              className="w-full p-4 flex justify-between items-center hover:bg-gray-800"
            >
              <span className="font-medium">Node Details</span>
              <span className="transform transition-transform duration-200" style={{
                transform: expandedSections.details ? 'rotate(180deg)' : 'none'
              }}>▼</span>
            </button>
            
            {expandedSections.details && (
              <div className="p-4 space-y-4">
                <div className="flex items-center space-x-2 mb-4">
                  <div 
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: nodeColors[selectedNode.type as keyof typeof nodeColors] }}
                  />
                  <span className="text-lg font-medium">{selectedNode.label}</span>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between py-2 border-b border-gray-700">
                    <span className="text-gray-400">Type</span>
                    <span className="capitalize">
                      {nodeIcons[selectedNode.type as keyof typeof nodeIcons]} {selectedNode.type}
                    </span>
                  </div>
                  
                  {selectedNode.house && (
                    <div className="flex justify-between py-2 border-b border-gray-700">
                      <span className="text-gray-400">House</span>
                      <span>{selectedNode.house}</span>
                    </div>
                  )}
                  
                  {selectedNode.title && (
                    <div className="flex justify-between py-2 border-b border-gray-700">
                      <span className="text-gray-400">Title</span>
                      <span>{selectedNode.title}</span>
                    </div>
                  )}
                  
                  {selectedNode.words && (
                    <div className="flex justify-between py-2 border-b border-gray-700">
                      <span className="text-gray-400">Words</span>
                      <span className="italic">"{selectedNode.words}"</span>
                    </div>
                  )}
                  
                  {selectedNode.region && (
                    <div className="flex justify-between py-2 border-b border-gray-700">
                      <span className="text-gray-400">Region</span>
                      <span>{selectedNode.region}</span>
                    </div>
                  )}
                  
                  {selectedNode.description && (
                    <div className="py-2 border-b border-gray-700">
                      <span className="block text-gray-400 mb-1">Description</span>
                      <span className="block text-sm">{selectedNode.description}</span>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Connections */}
          <div className="border-b border-gray-700">
            <button
              onClick={() => toggleSection('connections')}
              className="w-full p-4 flex justify-between items-center hover:bg-gray-800"
            >
              <span className="font-medium">Connections</span>
              <span className="transform transition-transform duration-200" style={{
                transform: expandedSections.connections ? 'rotate(180deg)' : 'none'
              }}>▼</span>
            </button>
            
            {expandedSections.connections && (
              <div className="p-4">
                <div className="space-y-2">
                  {getNodeConnections().map((connection, index) => (
                    <div 
                      key={index}
                      className="p-2 rounded bg-gray-800 text-sm"
                    >
                      <div className="flex items-center space-x-2">
                        <div 
                          className="w-2 h-2 rounded-full"
                          style={{ 
                            backgroundColor: connection.node 
                              ? nodeColors[connection.node.type as keyof typeof nodeColors]
                              : '#4a5568'
                          }}
                        />
                        <span className="font-medium">{connection.node?.label}</span>
                      </div>
                      <span className="block text-gray-400 text-xs mt-1">
                        {connection.relationship}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </>
      )}

      {/* Empty State */}
      {!selectedNode && (
        <div className="flex-1 flex items-center justify-center p-8 text-center text-gray-500">
          <div>
            <div className="text-4xl mb-2">🎯</div>
            <p>Select a node in the graph to view its details</p>
          </div>
        </div>
      )}
    </div>
  )
}