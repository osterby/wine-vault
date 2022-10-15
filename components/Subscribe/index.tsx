import React from 'react';

export default function Subscribe() {
  return (
    <div className="flex flex-col md:flex-row gap-3 z-10">
      <input
        className="appearance-none border-2 border-black rounded p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-skin-button-yellow focus:ring-2 focus:ring-offset-transparent focus:ring-offset-2"
        id="email"
        type="text"
        placeholder="your@email.com"
      />
      <button className="shadow-[4px_4px_0_0_rgba(30,30,30)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all p-3 rounded-md border-2 border-black text-sm font-semibold bg-skin-button-yellow  hover:bg-white normal-case">
        Join our mailing list.
      </button>
    </div>
  );
}
