import { useState, useMemo } from 'react'
import { useAuth } from '../contexts/AuthContext'
import GraphVisualization from '../components/GraphVisualization'
import GraphSidebar from '../components/GraphSidebar'
import { demoGraphData } from '../data/demoGraphData'

export default function Graphs() {
  const { user, isDemoMode } = useAuth()
  const [selectedNodeId, setSelectedNodeId] = useState<number | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTypes, setSelectedTypes] = useState<string[]>(['character', 'house', 'location', 'event', 'concept'])
  const [selectedHouse, setSelectedHouse] = useState<string | null>(null)

  // Filter graph data based on search and filters
  const filteredGraphData = useMemo(() => {
    let filteredNodes = demoGraphData.nodes

    // Apply type filter
    filteredNodes = filteredNodes.filter(node => selectedTypes.includes(node.type))

    // Apply search filter
    if (searchTerm) {
      filteredNodes = filteredNodes.filter(node => 
        node.label.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Apply house filter
    if (selectedHouse) {
      filteredNodes = filteredNodes.filter(node => 
        node.house === selectedHouse || node.type === 'house'
      )
    }

    // Get filtered node IDs
    const filteredNodeIds = filteredNodes.map(n => n.id)

    // Filter edges to only include those between visible nodes
    const filteredEdges = demoGraphData.edges.filter(edge => 
      filteredNodeIds.includes(edge.from) && filteredNodeIds.includes(edge.to)
    )

    return {
      nodes: filteredNodes,
      edges: filteredEdges
    }
  }, [searchTerm, selectedTypes, selectedHouse])

  const selectedNode = demoGraphData.nodes.find(n => n.id === selectedNodeId) || null

  return (
    <div className="h-screen -mt-8 -mx-4 sm:-mx-6 lg:-mx-8 flex">
      {/* Sidebar */}
      <GraphSidebar
        selectedNode={selectedNode}
        onSearch={setSearchTerm}
        onFilterType={setSelectedTypes}
        onFilterHouse={setSelectedHouse}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white border-b px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {isDemoMode ? 'Demo Knowledge Graph' : 'My Knowledge Graphs'}
              </h1>
              <p className="text-sm text-gray-600">
                {isDemoMode 
                  ? 'Exploring Game of Thrones relationships' 
                  : `Welcome back, ${user?.user_metadata?.name || user?.email}!`
                }
              </p>
            </div>
            <div className="flex space-x-3">
              <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50">
                Export Graph
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                {isDemoMode ? 'View Full Demo' : 'Create New Graph'}
              </button>
            </div>
          </div>
        </div>

        {/* Graph Visualization */}
        <div className="flex-1 p-6">
          <GraphVisualization
            graphData={filteredGraphData}
            onNodeSelect={setSelectedNodeId}
            selectedNodeId={selectedNodeId}
          />
        </div>
      </div>
    </div>
  )
}