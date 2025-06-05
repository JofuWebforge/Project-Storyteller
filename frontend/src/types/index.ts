export interface User {
  id: string
  email: string
  name?: string
  avatar_url?: string
  created_at: string
  updated_at: string
}

export interface Graph {
  id: string
  user_id: string
  title: string
  description?: string
  is_public: boolean
  template_id?: string
  created_at: string
  updated_at: string
}

export interface Node {
  id: string
  graph_id: string
  x: number
  y: number
  label: string
  content?: string
  image_url?: string
  color?: string
  shape?: string
  size?: number
  metadata?: Record<string, any>
  created_at: string
  updated_at: string
}

export interface Edge {
  id: string
  graph_id: string
  from_node_id: string
  to_node_id: string
  label?: string
  arrows?: string
  color?: string
  width?: number
  metadata?: Record<string, any>
  created_at: string
  updated_at: string
}

export interface Story {
  id: string
  graph_id: string
  user_id: string
  title: string
  content: string
  voice_url?: string
  selected_node_ids: string[]
  story_type: 'narrative' | 'educational' | 'creative' | 'summary'
  story_mode: 'sequential' | 'thematic' | 'exploratory'
  images?: StoryImage[]
  is_public: boolean
  created_at: string
  updated_at: string
}

export interface StoryImage {
  id: string
  story_id: string
  image_url: string
  prompt: string
  position: number
  created_at: string
}

export interface Template {
  id: string
  name: string
  description: string
  category: string
  preview_image_url?: string
  graph_data: {
    nodes: Partial<Node>[]
    edges: Partial<Edge>[]
  }
  is_premium: boolean
  created_at: string
  updated_at: string
}