'use client';
import Link from 'next/link';
import React, { useRef, useEffect, useState } from 'react';
import { FaGithubSquare } from 'react-icons/fa';
import { useGlobalContext } from '../context/context';
import "@utils/toggleButton.css"
import { useRouter } from 'next/navigation';

const page2 = () => {

  // const buttonJSON: string[] =
  //   ["toggleButton", "timer", "drawingCanvas","tabsComponent"];

  const { state, setState } = useGlobalContext();
  const route = useRouter();
  return (
    <section className={`font-mono ${state ? "DARK" : "LIGHT"} flex flex-col items-center`}>
      <h1 className="text-4xl md:text-5xl font-extrabold text-center py-5">Page 2</h1>
      {
        state ? <h1>
          Context is True
        </h1> :
          <h1>
            Context is False
          </h1>
      }
      <button onClick={(e) => { setState(!state) }}>
        {state
          ? "False" : "True"}
      </button>
      <button
            
            onClick={() => route.push('/')}>
            Page 1
          </button>
          <button
            
            onClick={() => route.push('page-3')}>
        Page 3
          </button>
      {/* {
        buttonJSON.map((button, i) => 
          <button
            key={i}
            onClick={() => route.push(button)}>
            {
              button
            }
          </button>
        )
      } */}


      <h2 className="flex flex-col justify-center font-medium pt-4">
        <Link href="https://github.com/Lakshaybogal">
          <span className="flex justify-center items-center text-6xl font-normal pb-2">
            <FaGithubSquare />
          </span>
        </Link>
        Github Link
      </h2>
    </section>
  );
};

export default page2;
