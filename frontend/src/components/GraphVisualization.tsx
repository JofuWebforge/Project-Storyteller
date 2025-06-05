import { useEffect, useRef, useState } from 'react'
import { Network } from 'vis-network/standalone'
import type { Options, Data } from 'vis-network/standalone'
import { demoGraphData, nodeColors, nodeIcons } from '../data/demoGraphData'

interface GraphVisualizationProps {
  graphData?: typeof demoGraphData
  onNodeSelect?: (nodeId: number | null) => void
  selectedNodeId?: number | null
}

export default function GraphVisualization({ 
  graphData = demoGraphData, 
  onNodeSelect,
  selectedNodeId 
}: GraphVisualizationProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [network, setNetwork] = useState<Network | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Format nodes with colors and shapes
    const formattedNodes = graphData.nodes.map(node => ({
      ...node,
      color: {
        background: nodeColors[node.type as keyof typeof nodeColors],
        border: nodeColors[node.type as keyof typeof nodeColors],
        highlight: {
          background: nodeColors[node.type as keyof typeof nodeColors],
          border: '#333'
        }
      },
      font: {
        color: '#333',
        size: 14,
        face: 'Arial'
      },
      shape: 'dot',
      size: 25,
      borderWidth: 2,
      shadow: true,
      chosen: true
    }))

    // Format edges
    const formattedEdges = graphData.edges.map(edge => ({
      ...edge,
      color: {
        color: '#848484',
        highlight: '#333'
      },
      font: {
        color: '#333',
        size: 12,
        align: 'middle'
      },
      arrows: {
        to: {
          enabled: true,
          scaleFactor: 0.5
        }
      },
      smooth: {
        enabled: true,
        type: 'curvedCW',
        roundness: 0.2
      }
    }))

    const data: Data = {
      nodes: formattedNodes as any,
      edges: formattedEdges as any
    }

    const options: Options = {
      physics: {
        forceAtlas2Based: {
          gravitationalConstant: -26,
          centralGravity: 0.005,
          springLength: 230,
          springConstant: 0.18
        },
        maxVelocity: 146,
        solver: 'forceAtlas2Based',
        timestep: 0.35,
        stabilization: { iterations: 150 }
      },
      interaction: {
        hover: true,
        tooltipDelay: 200,
        hideEdgesOnDrag: true,
        hideEdgesOnZoom: true
      },
      nodes: {
        chosen: true
      },
      edges: {
        width: 2,
        chosen: true
      }
    }

    const net = new Network(containerRef.current, data, options)
    
    // Handle node selection
    net.on('click', (params) => {
      if (params.nodes.length > 0) {
        onNodeSelect?.(params.nodes[0])
      } else {
        onNodeSelect?.(null)
      }
    })

    // Add hover effect
    net.on('hoverNode', () => {
      containerRef.current!.style.cursor = 'pointer'
    })

    net.on('blurNode', () => {
      containerRef.current!.style.cursor = 'default'
    })

    setNetwork(net)

    return () => {
      net.destroy()
    }
  }, [graphData, onNodeSelect])

  // Handle external selection changes
  useEffect(() => {
    if (network && selectedNodeId !== undefined) {
      if (selectedNodeId !== null) {
        network.selectNodes([selectedNodeId])
      } else {
        network.unselectAll()
      }
    }
  }, [network, selectedNodeId])

  return (
    <div className="relative w-full h-full bg-gray-50 rounded-lg shadow-inner">
      <div ref={containerRef} className="w-full h-full" />
      
      {/* Legend */}
      <div className="absolute bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg">
        <h3 className="text-sm font-semibold mb-2">Node Types</h3>
        <div className="space-y-1">
          {Object.entries(nodeColors).map(([type, color]) => (
            <div key={type} className="flex items-center space-x-2">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: color }}
              />
              <span className="text-xs capitalize">
                {nodeIcons[type as keyof typeof nodeIcons]} {type}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}