export default function Stories() {
  return (
    <div className="py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">My Stories</h1>
        <p className="mt-2 text-gray-600">
          View and manage your AI-generated stories from knowledge graphs.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="text-center py-12">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-purple-100">
            <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h3 className="mt-4 text-lg font-medium text-gray-900">No stories yet</h3>
          <p className="mt-2 text-sm text-gray-500">
            Create knowledge graphs and generate stories from them using AI.
          </p>
          <div className="mt-6">
            <button className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-700">
              Create Your First Graph
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}