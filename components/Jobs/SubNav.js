import React from 'react'

const SubNav = () => {
  return (
    <div className="flex items-center -mx-4 space-x-2 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap dark:bg-gray-800 dark:text-gray-100">
	<a rel="noopener noreferrer" href="/jobs" className="flex items-center flex-shrink-0 px-5 py-2 border-b-4 dark:border-gray-700 dark:text-gray-400">Job Listings</a>
	<a rel="noopener noreferrer" href="/jobs/applications" className="flex items-center flex-shrink-0 px-5 py-2 border-b-4 dark:border-gray-700 dark:text-gray-400">My Applications</a>
</div>
  )
}

export default SubNav