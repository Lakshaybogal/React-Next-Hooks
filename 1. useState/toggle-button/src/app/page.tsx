"use client"
import { useState } from "react"
import { FaGithubSquare } from "react-icons/fa"
import "@/utils/page.css"
import Link from "next/link";
export default function Home() {

  const [mode, setMode] = useState<boolean>(true);

  const toggle = () => {
    setMode(!mode)
  }

  return (
    <section className={mode ? "DARK" : "LIGHT"}>
      <h1 className="font-mono text-5xl font-extrabold p-10 flex justify-center">
        Toggle Button
      </h1>
      <h2 className="font-mono text-3xl font-semibold flex justify-center">
        {mode ? "DARK" : "LIGHT"} MODE
      </h2>
      <h4 className="font-mono px-44 pt-10 text-center ">
        The dark-light toggle button, built using the useState hook in Next.js/React,
        adds a user-friendly theme-switching feature to web applications with ease.
      </h4>


      <div className="py-5 flex flex-col justify-center items-center">
        <h3 className="pb-5">
          Change to {mode ? "Light" : "Dark"}
        </h3>
        <label className="switch ">
          <input type="checkbox" onClick={toggle} />
          <span className="slider round"></span>
        </label>
      </div>

      <h2 className="flex justify-center font-medium">
        <Link rel="stylesheet" href="https://github.com/Lakshaybogal" >
          <span className="flex justify-center items-center text-5xl font-normal pb-2">
            <FaGithubSquare />
          </span>

          Github Link
        </Link>
      </h2>
    </section>

  )
}
