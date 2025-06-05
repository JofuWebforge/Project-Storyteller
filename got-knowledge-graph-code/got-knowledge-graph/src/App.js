import React, { useState, useEffect, useRef } from 'react';
import { Network } from 'vis-network/standalone';
import { graphData, nodeTypes, houses } from './data/gameOfThronesData';
import './styles/index.css';

const App = () => {
  const [selectedNode, setSelectedNode] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleTypes, setVisibleTypes] = useState({
    character: true,
    house: true,
    location: true,
    event: true,
    concept: true
  });
  const [selectedHouse, setSelectedHouse] = useState('All Houses');
  
  const networkContainer = useRef(null);
  const network = useRef(null);
  
  // Initialize network
  useEffect(() => {
    if (networkContainer.current) {
      // Filter nodes based on current filters
      const filteredNodes = graphData.nodes.filter(node => {
        // Filter by type
        if (!visibleTypes[node.type]) return false;
        
        // Filter by house
        if (selectedHouse !== 'All Houses' && node.house && node.house !== selectedHouse.replace('House ', '')) {
          return false;
        }
        
        // Filter by search query
        if (searchQuery && !node.label.toLowerCase().includes(searchQuery.toLowerCase())) {
          return false;
        }
        
        return true;
      });
      
      // Get IDs of filtered nodes
      const filteredNodeIds = filteredNodes.map(node => node.id);
      
      // Filter edges to only include connections between visible nodes
      const filteredEdges = graphData.edges.filter(edge => 
        filteredNodeIds.includes(edge.from) && filteredNodeIds.includes(edge.to)
      );
      
      // Create network data
      const data = {
        nodes: filteredNodes,
        edges: filteredEdges
      };
      
      // Network options
      const options = {
        nodes: {
          shape: 'dot',
          font: {
            face: 'Cinzel',
            color: '#e0e0e0'
          },
          borderWidth: 2,
          shadow: {
            enabled: true,
            color: 'rgba(0,0,0,0.5)',
            size: 10
          }
        },
        edges: {
          width: 2,
          color: {
            color: '#d5b26c',
            highlight: '#ffffff',
            hover: '#ffffff'
          },
          font: {
            face: 'Lato',
            color: '#e0e0e0',
            strokeWidth: 3,
            strokeColor: 'rgba(0,0,0,0.7)'
          },
          smooth: {
            type: 'continuous',
            roundness: 0.5
          }
        },
        physics: {
          stabilization: {
            iterations: 200
          },
          barnesHut: {
            gravitationalConstant: -10000,
            centralGravity: 0.3,
            springLength: 150,
            springConstant: 0.04,
            damping: 0.09
          }
        },
        interaction: {
          hover: true,
          tooltipDelay: 200,
          zoomView: true,
          dragView: true
        }
      };
      
      // Create network
      network.current = new Network(networkContainer.current, data, options);
      
      // Add event listeners
      network.current.on('click', (params) => {
        if (params.nodes.length > 0) {
          const nodeId = params.nodes[0];
          const node = graphData.nodes.find(n => n.id === nodeId);
          setSelectedNode(node);
        } else {
          setSelectedNode(null);
        }
      });
    }
  }, [visibleTypes, selectedHouse, searchQuery]);
  
  // Handle type filter change
  const handleTypeFilterChange = (type) => {
    setVisibleTypes(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };
  
  // Handle house filter change
  const handleHouseChange = (e) => {
    setSelectedHouse(e.target.value);
  };
  
  // Handle search query change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  
  // Render node information
  const renderNodeInfo = () => {
    if (!selectedNode) {
      return (
        <div className="node-info">
          <h2>Game of Thrones Knowledge Graph</h2>
          <p>Click on a node to view detailed information.</p>
          <p>Use the filters and search to explore the network.</p>
        </div>
      );
    }
    
    switch (selectedNode.type) {
      case 'character':
        return (
          <div className="node-info">
            <h2>{selectedNode.label}</h2>
            <div className="node-info-section">
              <div className="node-info-item">
                <span className="node-info-label">House:</span>
                <span className="node-info-value">{selectedNode.house}</span>
              </div>
              <div className="node-info-item">
                <span className="node-info-label">Title:</span>
                <span className="node-info-value">{selectedNode.title}</span>
              </div>
              <div className="node-info-item">
                <span className="node-info-label">Status:</span>
                <span className="node-info-value">{selectedNode.status}</span>
              </div>
            </div>
            <div className="node-info-section">
              <h3>Connections</h3>
              <ul>
                {graphData.edges
                  .filter(edge => edge.from === selectedNode.id || edge.to === selectedNode.id)
                  .map((edge, index) => {
                    const otherNodeId = edge.from === selectedNode.id ? edge.to : edge.from;
                    const otherNode = graphData.nodes.find(n => n.id === otherNodeId);
                    const relationship = edge.from === selectedNode.id ? edge.label : reverseRelationship(edge.label);
                    
                    return (
                      <li key={index}>
                        {edge.from === selectedNode.id ? (
                          <span>{relationship} <strong>{otherNode.label}</strong></span>
                        ) : (
                          <span><strong>{otherNode.label}</strong> {relationship}</span>
                        )}
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        );
      
      case 'house':
        return (
          <div className="node-info">
            <h2>{selectedNode.label} {selectedNode.sigil}</h2>
            <div className="node-info-section">
              <div className="node-info-item">
                <span className="node-info-label">Words:</span>
                <span className="node-info-value">"{selectedNode.words}"</span>
              </div>
              <div className="node-info-item">
                <span className="node-info-label">Seat:</span>
                <span className="node-info-value">{selectedNode.seat}</span>
              </div>
            </div>
            <div className="node-info-section">
              <h3>Members</h3>
              <ul>
                {graphData.edges
                  .filter(edge => edge.to === selectedNode.id && edge.label.includes('member'))
                  .map((edge, index) => {
                    const characterNode = graphData.nodes.find(n => n.id === edge.from);
                    return (
                      <li key={index}>
                        <strong>{characterNode.label}</strong> - {characterNode.title}
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        );
      
      case 'location':
        return (
          <div className="node-info">
            <h2>{selectedNode.label}</h2>
            <div className="node-info-section">
              <div className="node-info-item">
                <span className="node-info-label">Region:</span>
                <span className="node-info-value">{selectedNode.region}</span>
              </div>
              <div className="node-info-item">
                <span className="node-info-label">Description:</span>
                <span className="node-info-value">{selectedNode.description}</span>
              </div>
            </div>
            <div className="node-info-section">
              <h3>Notable Events</h3>
              <ul>
                {graphData.edges
                  .filter(edge => edge.to === selectedNode.id && edge.label === 'occurred at')
                  .map((edge, index) => {
                    const eventNode = graphData.nodes.find(n => n.id === edge.from);
                    return (
                      <li key={index}>
                        <strong>{eventNode.label}</strong> - {eventNode.description}
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        );
      
      case 'event':
        return (
          <div className="node-info">
            <h2>{selectedNode.label}</h2>
            <div className="node-info-section">
              <div className="node-info-item">
                <span className="node-info-label">Season:</span>
                <span className="node-info-value">{selectedNode.season}</span>
              </div>
              <div className="node-info-item">
                <span className="node-info-label">Date:</span>
                <span className="node-info-value">{selectedNode.date}</span>
              </div>
              <div className="node-info-item">
                <span className="node-info-label">Description:</span>
                <span className="node-info-value">{selectedNode.description}</span>
              </div>
            </div>
            <div className="node-info-section">
              <h3>Participants</h3>
              <ul>
                {graphData.edges
                  .filter(edge => edge.to === selectedNode.id)
                  .map((edge, index) => {
                    const characterNode = graphData.nodes.find(n => n.id === edge.from);
                    return (
                      <li key={index}>
                        <strong>{characterNode.label}</strong> - {edge.label}
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        );
      
      case 'concept':
        return (
          <div className="node-info">
            <h2>{selectedNode.label}</h2>
            <div className="node-info-section">
              <div className="node-info-item">
                <span className="node-info-label">Category:</span>
                <span className="node-info-value">{selectedNode.category}</span>
              </div>
              <div className="node-info-item">
                <span className="node-info-label">Description:</span>
                <span className="node-info-value">{selectedNode.description}</span>
              </div>
            </div>
            <div className="node-info-section">
              <h3>Related Characters</h3>
              <ul>
                {graphData.edges
                  .filter(edge => (edge.from === selectedNode.id || edge.to === selectedNode.id) && 
                           graphData.nodes.find(n => n.id === (edge.from === selectedNode.id ? edge.to : edge.from)).type === 'character')
                  .map((edge, index) => {
                    const characterId = edge.from === selectedNode.id ? edge.to : edge.from;
                    const characterNode = graphData.nodes.find(n => n.id === characterId);
                    const relationship = edge.from === selectedNode.id ? edge.label : reverseRelationship(edge.label);
                    
                    return (
                      <li key={index}>
                        <strong>{characterNode.label}</strong> - {relationship}
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };
  
  // Helper function to reverse relationship descriptions
  const reverseRelationship = (relationship) => {
    const reversals = {
      'father of': 'child of',
      'mother of': 'child of',
      'killed': 'killed by',
      'married to': 'married to',
      'member of': 'includes',
      'trained': 'trained by',
      'advised': 'advised by',
      'led': 'led by',
      'wielded': 'wielded by',
      'used': 'used by',
      'became': 'embodied by'
    };
    
    return reversals[relationship] || relationship;
  };
  
  return (
    <div className="app-container">
      <header className="header">
        <h1>Game of Thrones Knowledge Graph</h1>
      </header>
      
      <div className="main-content">
        <div className="sidebar">
          <div className="controls">
            <input
              type="text"
              className="search-box"
              placeholder="Search nodes..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
            
            <div className="filter-group">
              <h3>Filter by Type</h3>
              <div className="filter-buttons">
                {Object.keys(nodeTypes).map(type => (
                  <button
                    key={type}
                    className={`filter-button ${visibleTypes[type] ? 'active' : ''}`}
                    onClick={() => handleTypeFilterChange(type)}
                    style={{ borderColor: nodeTypes[type].color }}
                  >
                    {nodeTypes[type].icon} {type.charAt(0).toUpperCase() + type.slice(1)}s
                  </button>
                ))}
              </div>
            </div>
            
            <div className="filter-group">
              <h3>Filter by House</h3>
              <select
                className="house-select"
                value={selectedHouse}
                onChange={handleHouseChange}
              >
                {houses.map(house => (
                  <option key={house} value={house}>
                    {house}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          {renderNodeInfo()}
        </div>
        
        <div className="graph-container">
          <div ref={networkContainer} style={{ width: '100%', height: '100%' }}></div>
          
          <div className="legend">
            <h3>Legend</h3>
            {Object.entries(nodeTypes).map(([type, config]) => (
              <div key={type} className="legend-item">
                <div className="legend-color" style={{ backgroundColor: config.color }}></div>
                <div className="legend-label">{config.icon} {type.charAt(0).toUpperCase() + type.slice(1)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
