"use client"
import { useState } from "react"
import '@/utils/page.css'
import { FaGithubSquare } from "react-icons/fa";
import Link from "next/link";
export default function Home() {
  const [tab, setTab] = useState<number>(1);
  return (
    <section className="flex justify-center flex-col items-center ">
      <h1 className="font-mono font-black text-6xl pt-10 text-center">
        TABS COMPONENT
      </h1>
      <div className="flex justify-center  flex-row gap-4 font-mono font-semibold text-sm py-6">
        <button
          onClick={() => setTab(1)}
          className={` rounded-md bg-btn px-6 py-2.5 md:px-10 ${tab === 1 ? "Active" : ""}`}
        >
          Tab 1
        </button>
        <button
          onClick={() => setTab(2)}
          className={`rounded-md bg-btn px-6 py-2.5 md:px-10 ${tab === 2 ? "Active" : ""}`}
        >
          Tab 2
        </button>
        <button
          onClick={() => setTab(3)}
          className={` rounded-md bg-btn px-6 py-2.5 md:px-10 ${tab === 3 ? "Active" : ""}`}
        >
          Tab 3
        </button>
      </div>
      <div className="flex items-center justify-center py-10 text-left px-8 w-full lg:w-2/4 m-auto">
        {
          tab === 1 && (
            <div  >
              <h3 className="font-semibold text-2xl pb-3">Organizing Content</h3>
              <p className="">
               Tabs components are essential for creating clean and organized user interfaces. They allow developers to present diverse content, such as product details, settings, or different views of data, within a single container. Each tab represents a distinct category or piece of information, making it straightforward for users to find and access what they need without overwhelming the screen with excessive information.
              </p>
            </div>
          )
        }

        {
          tab === 2 && (
            <div>
              <h3 className="font-semibold text-2xl pb-3">User-Friendly Navigation</h3>
              <p className="">
               Tabs enhance user experience by simplifying navigation. Instead of having to scroll through lengthy pages or search for links, users can simply click on the relevant tab to switch to the content they want to view. This intuitive interaction pattern is especially valuable for mobile devices, where screen space is limited, as it conserves space while maintaining accessibility.
              </p>
            </div>
          )}
        {
          tab === 3 && (
            <div>
              <h3 className="font-semibold text-2xl pb-3">Dynamic State Management</h3>
              <p className="">
               Under the hood, Tabs Components often utilize state management techniques, like React's useState, to keep track of which tab is currently active. This dynamic state handling ensures that the content displayed matches the selected tab, creating a responsive and seamless user experience. Developers can customize the appearance and behavior of tab components to fit the design and functionality requirements of their projects, making them a versatile tool in web development.
              </p>
            </div>
          )}

      </div>
      <h2 className="flex justify-center font-medium">
        <Link rel="stylesheet" href="https://github.com/Lakshaybogal" >
          <span className="flex justify-center items-center text-5xl font-normal pb-2">
            <FaGithubSquare />
          </span>

          Github Link
        </Link>
      </h2>
    </section >

  )
}
