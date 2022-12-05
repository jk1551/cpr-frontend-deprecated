import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {
  InstantSearch,
  InfiniteHits,
  SearchBox,
  Stats,
  Highlight
} from "react-instantsearch-dom";
import { instantMeiliSearch } from "@meilisearch/instant-meilisearch";

const searchClient = instantMeiliSearch(
  "http://127.0.0.1:7700",
  "MASTER_KEY"
);


const items = ({ items }) => {

  return (
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
    {items.map(item => {
          return (
            <div key={item.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link href='/marketplace[id]' as={`/marketplace/items/${item.id}`} className="block relative h-48 rounded overflow-hidden">
          <Image height={150} width={400} alt="ecommerce" className="object-cover object-center w-full h-full block" src="/vercel.svg" />
        </Link>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">{item.attributes.title}</h2>
          <p className="mt-1">$16.00</p>
        </div>
      </div>
          )
        })}
    </div>
  </div>
</section>
  )
}

export default items

export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/items`)
  const data = await res.json();
  console.log(data);

  return {
      props: {
          items: data.data
      }
  }
}