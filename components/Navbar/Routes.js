import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import routes from './Routes.json'

const Routes = ({navigation, loggedIn}) => {
  // Use this later to show active link const router = useRouter();
  
  

  return (
    <ul className="items-stretch hidden space-x-3 lg:flex">
      {loggedIn ? 
      routes.map(item => {
        return (
          <li key={item.id} className="flex">
          <Link rel="noopener noreferrer" href={item.slug} className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-lime-400 dark:border-lime-400">{item.title}</Link>
        </li>
        )
      }) :
      routes.filter(opt => !opt.authenticated).map(item => {
        return (
          <li key={item.id} className="flex">
          <Link rel="noopener noreferrer" href={item.slug} className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-lime-400 dark:border-lime-400">{item.title}</Link>
        </li>
        )
      })
      
      }
		</ul>
  )
}

export default Routes

