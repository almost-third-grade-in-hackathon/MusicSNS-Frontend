import React from 'react';
import "../style.css"

const Page = () => {
  const albumImageUrl = '/sample/Himawari.jpg';

  return (
    <div className="outer-container flex flex-wrap justify-center items-start space-x-4">
      <div className="card  w-80 sm:w-96  my-4 mx-2 flex  bg-white">
        <div className="flex items-center">
          {/* 画像表示 */}
          <div className="w-24 h-24 rounded-xl overflow-hidden mr-4 flex-shrink-0">
            <img className="w-full h-full object-cover" src={albumImageUrl} alt="Album Image" />
          </div>

          {/* テキストエリア */}
          <div className="card-body p-4 rounded-xl flex items-center h-24 bg-gray-200 text-black">
            <div className="text-left">
              <h2 className="card-title text-lg font-bold">Music title</h2>
              <p className="text-sm">Artist name, Artist name</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;