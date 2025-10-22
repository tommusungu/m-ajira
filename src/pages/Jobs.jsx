import { useState } from 'react';
import { Search, MapPin, Filter, Briefcase } from 'lucide-react';

import { jobs } from '../data/jobs';

export default function Jobs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = locationFilter === '' || job.location === locationFilter;
    const matchesCategory = categoryFilter === '' || job.category === categoryFilter;
    return matchesSearch && matchesLocation && matchesCategory;
  });

  const locations = [...new Set(jobs.map(job => job.location))];
  const categories = [...new Set(jobs.map(job => job.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="pt-32 pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center my-8">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Find Your Dream Job
            </h1>
            <p className="text-xl text-blue-600">
              Explore {jobs.length}+ opportunities across the world.
            </p>
          </div>

          
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-6">
          <aside className="lg:w-1/4">
            <div className="bg-white rounded-2xl shadow-md p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900 flex items-center">
                  <Filter className="w-5 h-5 mr-2" />
                  Filters
                </h2>
                <button
                  onClick={() => {
                    setLocationFilter('');
                    setCategoryFilter('');
                    setSearchTerm('');
                  }}
                  className="text-sm text-blue-500 hover:text-blue-600"
                >
                  Clear All
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Location
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 p-2 rounded-lg">
                      <input
                        type="radio"
                        name="location"
                        checked={locationFilter === ''}
                        onChange={() => setLocationFilter('')}
                        className="text-blue-500"
                      />
                      <span className="text-gray-700">All Locations</span>
                    </label>
                    {locations.map((location) => (
                      <label
                        key={location}
                        className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 p-2 rounded-lg"
                      >
                        <input
                          type="radio"
                          name="location"
                          checked={locationFilter === location}
                          onChange={() => setLocationFilter(location)}
                          className="text-blue-500"
                        />
                        <span className="text-gray-700">{location}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="border-t pt-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Category
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 p-2 rounded-lg">
                      <input
                        type="radio"
                        name="category"
                        checked={categoryFilter === ''}
                        onChange={() => setCategoryFilter('')}
                        className="text-blue-500"
                      />
                      <span className="text-gray-700">All Categories</span>
                    </label>
                    {categories.map((category) => (
                      <label
                        key={category}
                        className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 p-2 rounded-lg"
                      >
                        <input
                          type="radio"
                          name="category"
                          checked={categoryFilter === category}
                          onChange={() => setCategoryFilter(category)}
                          className="text-blue-500"
                        />
                        <span className="text-gray-700">{category}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <div className="lg:w-3/4">


          <div className="bg-white pb-4 border border-gray-200 rounded-2xl hover:shadow-xl p-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Job title or keyword"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Location"
                  value={locationFilter}
                  onChange={(e) => setLocationFilter(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary transition-colors flex items-center justify-center space-x-2">
                <Search className="w-5 h-5" />
                <span>Search Jobs</span>
              </button>
            </div>
          </div>

          
            <div className="flex items-center justify-between my-6">
              <p className="text-gray-600">
                Showing <span className="font-semibold text-gray-900">{filteredJobs.length}</span> jobs
              </p>
              <button className="lg:hidden flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg">
                <Filter className="w-4 h-4" />
                <span>Filters</span>
              </button>
            </div>

            <div className="gap-4 grid md:grid-cols-2 lg:grid-cols-3">
              {filteredJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>

            {filteredJobs.length === 0 && (
              <div className="text-center py-16 bg-white rounded-2xl shadow-md">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">No jobs found</h3>
                <p className="text-gray-600">Try adjusting your filters or search terms</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function JobCard({ job }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all cursor-pointer hover:-translate-y-2">
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
          <Briefcase className="w-6 h-6 text-white" />
        </div>
        <span className="text-xs font-medium px-3 py-1 bg-green-100 text-green-700 rounded-full">
          Full-time
        </span>
      </div>

      <h3 className="text-lg font-bold text-gray-900 mb-2">{job.title}</h3>
      <p className="text-sm text-gray-600 mb-4 line-clamp-2">{job.description}</p>

      <div className="flex items-center text-sm text-gray-500 mb-4">
        <MapPin className="w-4 h-4 mr-1" />
        <span>{job.location}</span>
      </div>

      <div className="flex items-center justify-between pt-4 border-t">
        <div />
        <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary transition-colors">
          View Job
        </button>
      </div>
    </div>
  );
}