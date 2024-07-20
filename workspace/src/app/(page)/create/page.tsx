"use client";

import React from "react";
import "../style.css";
import { useRouter } from "next/navigation";

const Page = () => {
  // const albumImageUrl: string = "/sample/Himawari.jpg";
  // const musicTitle: string = "Music title";
  // const aritist: string = "Artist name";
  let musicUrl = "https://open.spotify.com/embed/track/78W4mTLIh4qoLu92W4IQhO?utm_source=generator&theme=0";
  const router = useRouter();

  return (
    <div className="outer-container h-screen bg-white">
      <div className="flex justify-center px-5 safari-hack w-full">
        <div className="max-w-screen-lg w-full p-8">

          <div className="flex items-center mb-4">
            <button className="btn btn-ghost hover:bg-transparent " onClick={() => router.back()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="40px"
                viewBox="0 -960 960 960"
                width="40px"
                fill="#000000"
              >
                <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
              </svg>
            </button>
            <h1 className="text-2xl font-bold text-left text-black">
              投稿作成
            </h1>
          </div>
          
          {/* 埋め込みカード */}
          <div className="flex justify-center items-center mb-4">
            <iframe
              className="rounded-lg"
              style={{ borderRadius: '12px' }}
              src={musicUrl}
              width="90%"
              height="170"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Spotify Embed"
            ></iframe>
           </div>


          {/*　埋め込みではなく、必要情報だけを取得しようとした（断念）

          <form className="create-page">
            <div className="flex justify-center">
              <div className="card w-80 sm:w-96 my-4 mx-2 bg-white">
                <div className="flex items-center">

                  <div className="w-24 h-24 rounded-xl overflow-hidden mr-4 flex-shrink-0">
                    <img
                      className="w-full h-full object-cover"
                      src={albumImageUrl}
                      alt="Album Image"
                    />
                  </div>


                  <div className="card-body p-4 flex-1 bg-gray-200 text-black rounded-xl">
                    <div className="text-left">
                      <h2 className="card-title text-lg font-bold">
                        {musicTitle}
                      </h2>
                      <p className="text-sm">{aritist}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            */}

            {/* タイトル入力 */}
            <div className="mb-4">
              <h2 className="text-left mb-2">タイトル</h2>
              <input
                type="text"
                placeholder="タイトルを入力"
                className="input input-bordered w-full max-w-xs bg-white border-2 border-black"
              />
            </div>

            {/* コメント入力 */}
            <div className="mb-4">
              <h2 className="text-left mb-2">コメント</h2>
              <textarea
                className="textarea textarea-bordered w-full bg-white border-2 border-black mb-4"
                placeholder="コメントを入力"
              ></textarea>
            </div>

            {/* ボタン */}
            <div className="flex flex-col space-y-4 items-center">
              <button
                type="submit"
                className="btn btn-active btn-neutral w-60 bg-gray-200 text-black hover:bg-sky-700 hover:text-white mb-4"
              >
                投稿
              </button>
               
               {/* 前のページに戻る */}
              <button className="btn btn-outline w-60" type="button" onClick={() => router.back()}>
                戻る
              </button>
            </div>
          {/* </form> */}
        </div>
      </div>
    </div>
  );
};

export default Page;
