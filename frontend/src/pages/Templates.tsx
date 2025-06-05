export default function Templates() {
  const templates = [
    {
      id: 1,
      title: "Educational Course",
      description: "Structure a complete educational course with topics, subtopics, and learning objectives.",
      category: "Education",
      nodeCount: 25,
      premium: false
    },
    {
      id: 2,
      title: "Project Planning",
      description: "Organize project phases, tasks, dependencies, and milestones.",
      category: "Business",
      nodeCount: 20,
      premium: false
    },
    {
      id: 3,
      title: "Story World Building",
      description: "Create rich fictional worlds with characters, locations, and plot elements.",
      category: "Creative",
      nodeCount: 30,
      premium: true
    },
    {
      id: 4,
      title: "Research Paper",
      description: "Map out research topics, sources, arguments, and conclusions.",
      category: "Academic",
      nodeCount: 15,
      premium: false
    }
  ]

  return (
    <div className="py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Knowledge Graph Templates</h1>
        <p className="mt-2 text-gray-600">
          Start with pre-built templates to quickly create knowledge graphs for common use cases.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template) => (
          <div key={template.id} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900">{template.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{template.description}</p>
              </div>
              {template.premium && (
                <span className="ml-2 px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded">
                  Premium
                </span>
              )}
            </div>
            
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span className="bg-gray-100 px-2 py-1 rounded text-xs">{template.category}</span>
                <span>{template.nodeCount} nodes</span>
              </div>
            </div>

            <div className="mt-6">
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                Use Template
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}