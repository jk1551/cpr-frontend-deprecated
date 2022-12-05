import React from 'react'
import Link from 'next/link'
import SubNav from '../../components/Jobs/SubNav'
import JobList from '../../components/Jobs/JobList'

const jobs = ({ jobs }) => {

  return (
    <>
    <SubNav />
    <JobList />
    </>
  )
}

export default jobs

export async function getServerSideProps() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/jobs`)
    const data = await res.json();
  
    return {
        props: {
            jobs: data.data
        }
    }
  }