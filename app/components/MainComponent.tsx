"use client";

import Image from "next/image";
import { useState } from "react";
import { FaBeer } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";

type Laptop = {
  model: string;
  cpu: string;
  ram: number;
  storage: number;
};

export default function MainComponent() {
  const [cpu, setCpu] = useState("");
  const [ram, setRam] = useState<number>(4);
  const [storage, setStorage] = useState<number>(256);
  const [budget, setBudget] = useState<number>(1500);
  const [os, setOs] = useState("");
  const [displaySize, setDisplaySize] = useState("");
  const [intendedUse, setIntendedUse] = useState("");

  const [laptops, setLaptops] = useState<Laptop[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const fetchedLaptops: Laptop[] = [
      { model: "Laptop 1", cpu, ram, storage },
      { model: "Laptop 2", cpu, ram, storage },
    ];

    setLaptops(fetchedLaptops);
  };

  return (
    <main className="flex min-h-[100svh] flex-col items-center p-24 gap-10">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <Image
            src="/specmatch-logo.jpeg"
            alt="SpecMatch Logo"
            className="dark:invert rounded-full"
            width={100}
            height={24}
            priority
          />
        </div>
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Find Your Ideal Laptop&nbsp;
        </p>
      </div>

      <div className="flex-1 mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-2 gap-10 lg:text-left bg-red-100 rounded-2xl p-5">
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="input-container">
            <div className="flex justify-between items-center w-full">
              <label className="label-styles">Budget (USD)</label>
              <span className="label-styles">${budget}</span>
            </div>
            <input
              type="range"
              min="500"
              max="3000"
              value={budget}
              onChange={(e) => setBudget(+e.target.value)}
              className="input-slider-styles"
            />
          </div>

          <div className="input-container">
            <label className="label-styles">Operating System</label>
            <div className="w-full relative">
              <select
                value={os}
                onChange={(e) => setOs(e.target.value)}
                className="input-select-unique-styles">
                <option value="">Select OS</option>
                <option value="windows">Windows</option>
                <option value="macos">macOS</option>
                <option value="linux">Linux</option>
              </select>
              <div className="input-select-icon-styles">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20">
                  <path d="M5.305 7.695l4.95 4.949 4.95-4.95.707.707-5.657 5.657-5.657-5.657z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="input-container">
            <label className="label-styles">Processor</label>
            <div className="w-full relative">
              <select
                value={cpu}
                onChange={(e) => setCpu(e.target.value)}
                className="input-select-unique-styles">
                <option value="">Select CPU</option>
                <option value="intel-core-i5">Intel Core i5</option>
                <option value="intel-core-i7">Intel Core i7</option>
                <option value="intel-core-i9">Intel Core i9</option>
                <option value="amd-ryzen-5">AMD Ryzen 5</option>
                <option value="amd-ryzen-7">AMD Ryzen 7</option>
                <option value="amd-ryzen-9">AMD Ryzen 9</option>
              </select>
              <div className="input-select-icon-styles">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20">
                  <path d="M5.305 7.695l4.95 4.949 4.95-4.95.707.707-5.657 5.657-5.657-5.657z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="input-container">
            <label className="label-styles">RAM (GB)</label>
            <input
              type="number"
              value={ram}
              onChange={(e) => setRam(Number(e.target.value))}
              className="input-styles"
            />
          </div>

          <div className="input-container">
            <label className="label-styles">Storage (GB)</label>
            <input
              type="number"
              value={storage}
              onChange={(e) => setStorage(Number(e.target.value))}
              className="input-styles"
            />
          </div>

          <div className="input-container">
            <label className="label-styles">Display Size</label>
            <div className="w-full relative">
              <select
                value={displaySize}
                onChange={(e) => setDisplaySize(e.target.value)}
                className="input-select-unique-styles">
                <option value="">Select Display Size</option>
                <option value="13-inch">13-inch</option>
                <option value="14-inch">14-inch</option>
                <option value="15-inch">15-inch</option>
                <option value="17-inch">17-inch</option>
              </select>
              <div className="input-select-icon-styles">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20">
                  <path d="M5.305 7.695l4.95 4.949 4.95-4.95.707.707-5.657 5.657-5.657-5.657z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="input-container">
            <label className="label-styles">Intended Use</label>
            <div className="w-full relative">
              <select
                value={intendedUse}
                onChange={(e) => setIntendedUse(e.target.value)}
                className="input-select-unique-styles">
                <option value="">Select Intended Use</option>
                <option value="gaming">Gaming</option>
                <option value="video-editing">Video Editing</option>
                <option value="programming">Programming</option>
                <option value="general-use">General Use</option>
              </select>
              <div className="input-select-icon-styles">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20">
                  <path d="M5.305 7.695l4.95 4.949 4.95-4.95.707.707-5.657 5.657-5.657-5.657z" />
                </svg>
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={
              !cpu || !ram || !storage || !os || !displaySize || !intendedUse
            }
            className={`${
              !cpu || !ram || !storage || !os || !displaySize || !intendedUse
                ? "button-styles-disabled"
                : "button-styles-enabled"
            } `}>
            Search
          </button>
        </form>

        <div>
          {laptops.map((laptop, index) => (
            <div key={index} className="p-2 mb-2">
              <h2 className="font-bold">{laptop.model}</h2>
              <p>CPU: {laptop.cpu}</p>
              <p>RAM: {laptop.ram}GB</p>
              <p>Storage: {laptop.storage}GB</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
