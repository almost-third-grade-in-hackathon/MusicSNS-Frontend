"use client";

import React from 'react';
import "../style.css"
import { couldStartTrivia } from 'typescript';
import { useRouter } from "next/navigation";

const Page = () => {
  let albumImageUrl: string = '/sample/Himawari.jpg';
  let musicTitle: string = 'Music title';
  let Aritist: string = 'Artist name';
  let title:string = 'Title';
  let comment:string = 'Comment comment comment';
  let countHeart:number = 20;
  let tag:string = 'pop';
  const router = useRouter();

  return (
    <div className="outer-container">
        <div className="max-w-screen-lg w-full p-8">
        <div className="flex items-center">
            {/* < アイコン */} 
            <div className="flex items-center mb-4">
                <button className="btn btn-ghost hover:bg-transparent ">
                    <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/></svg>
                </button>
            </div>

            {/* 画像表示 */}
            <div className="w-80 h-80 rounded-xl overflow-hidden mr-4 flex-shrink-0 mb-5">
                <img className="w-full h-full object-cover" src={albumImageUrl} alt="Album Image" />
            </div>


            {/* テキスト表示 */}
            <div className="text-left mb-4">
                <h2 className="card-title text-lg font-bold">{musicTitle}</h2>
                <p className="text-sm texy-gray-500">{Aritist}</p>
            </div>
        </div>
            {/* 再生 */}

            <div className="flex justify-center px-5 safari-hack w-full">
                <div className="flex items-center mb-4">
                    <button className="btn btn-ghost hover:bg-transparent ">
                    <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000"><path d="M860-240 500-480l360-240v480Zm-400 0L100-480l360-240v480Zm-80-240Zm400 0Zm-400 90v-180l-136 90 136 90Zm400 0v-180l-136 90 136 90Z"/></svg>            </button>
                </div>

                <div className="flex items-center mb-4">
                    <button className="btn btn-ghost hover:bg-transparent ">
                        <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#000000"><path d="m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                    </button>
                </div>

                <div className="flex items-center mb-4">
                    <button className="btn btn-ghost hover:bg-transparent ">
                    <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000"><path d="M100-240v-480l360 240-360 240Zm400 0v-480l360 240-360 240ZM180-480Zm400 0Zm-400 90 136-90-136-90v180Zm400 0 136-90-136-90v180Z"/></svg>            </button>
                </div>
            </div>

            <div className="flex items-center mb-4">
                <button className="btn btn-ghost hover:bg-transparent ">
                <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="32px" fill="#000000"><path d="M560-131v-82q90-26 145-100t55-168q0-94-55-168T560-749v-82q124 28 202 125.5T840-481q0 127-78 224.5T560-131ZM120-360v-240h160l200-200v640L280-360H120Zm440 40v-322q47 22 73.5 66t26.5 96q0 51-26.5 94.5T560-320ZM400-606l-86 86H200v80h114l86 86v-252ZM300-480Z"/></svg>            </button>
            </div>
    

                        
            {/* ボタン */}
            <div className="flex flex-col space-y-4 items-center">
                <button className="btn btn-outline w-60" type="button" onClick={() => router.back()}>
                     戻る
                 </button>
            </div>
            
            </div>
      </div>
  );
};

export default Page;
