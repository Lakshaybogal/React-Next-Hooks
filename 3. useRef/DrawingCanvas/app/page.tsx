'use client'
import Link from 'next/link';
import React, { useRef, useEffect, useState } from 'react';
import { FaGithubSquare } from 'react-icons/fa';
import "@utils/drawingCanvas.css";

const DrawingCanvas = () => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const isDrawing = useRef(false);
  const [eraser, setEraser] = useState(false);
  const [currentColor, setCurrentColor] = useState('#000'); // Default color is black
  const [drawingPaths, setDrawingPaths] = useState([]);
  const [size,setSize] = useState(5);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 0.8;
    canvas.height = window.innerHeight * 0.6;

    const context = canvas.getContext('2d');
    context.lineCap = 'round';
    contextRef.current = context;
  }, []);

  useEffect(() => {
    contextRef.current.strokeStyle = eraser ? 'white' : currentColor;
    contextRef.current.lineWidth =  size;
  }, [eraser, currentColor,size]);

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    isDrawing.current = true;
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing.current) return;
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  const endDrawing = () => {
    contextRef.current.closePath();
    isDrawing.current = false;
    if (!eraser) {
      setDrawingPaths([...drawingPaths, contextRef.current.getImageData(0, 0, canvasRef.current.width, canvasRef.current.height)]);
    }
  };

  const handleClear = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    setDrawingPaths([]);
  };

  const handleColorChange = (color) => {
    setCurrentColor(color);
  };

  const changeSize = (e)=>{
      setSize(e.target.value)
  }

  useEffect(() => {
    if (drawingPaths.length > 0) {
      drawingPaths.forEach((path) => {
        contextRef.current.putImageData(path, 0, 0);
      });
    }
  }, [drawingPaths]);

  return (
    <section className="flex justify-center flex-col items-center font-mono">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center py-5">Drawing Canvas</h1>
      <canvas
        className='canvas'
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={endDrawing}
        onMouseOut={endDrawing}
      />
      <div className='flex justify-center items-center pt-5 gap-14'>
        <button onClick={handleClear}>Clear</button>
        
        <div className='flex gap-5'>
          <span>Colors: </span>
          <button className='w-20' onClick={() => setEraser(!eraser)}>{eraser ? 'Draw' : 'Eraser'}</button>
          <button onClick={() => handleColorChange('#000')}>Black</button>
          <button onClick={() => handleColorChange('#ff0000')}>Red</button>
          <button onClick={() => handleColorChange('#00ff00')}>Green</button>
          <button onClick={() => handleColorChange('#0000ff')}>Blue</button>
          <div>
            <label >Size</label>
            <select value = {size} onChange={changeSize} id="eraserSize">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
          </select>
          </div>
          
        </div>
      </div>
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

export default DrawingCanvas;
