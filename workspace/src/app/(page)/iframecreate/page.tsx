// createでも適用したため、このコードは不要

import React from "react";
import "../style.css";

const Page = () => {
  const albumImageUrl: string = "/sample/Himawari.jpg";
  const musicTitle: string = "Music title";
  const Aritist: string = "Artist name";

  return (
    <div className="outer-container">
      <div className="flex justify-center px-5 safari-hack w-full">
        <div className="max-w-screen-lg w-full p-8">
          <div className="flex items-center mb-4">
            <button className="btn btn-ghost hover:bg-transparent ">
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

        <div className="flex justify-center items-center mb-4">
            <iframe
                className="rounded-lg"
                style={{ borderRadius: '12px' }}
                src="https://open.spotify.com/embed/track/78W4mTLIh4qoLu92W4IQhO?utm_source=generator&theme=0"
                width="300"
                height="80"
                allowFullScreen
                allow="encrypted-media"
                title="Spotify Embed"
            ></iframe>
        </div>

         <iframe     
            className="rounded-lg"
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/78W4mTLIh4qoLu92W4IQhO?utm_source=generator&theme=0"
            width="100%"
            height="200"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Spotify Embed"
          ></iframe>



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
              <button className="btn btn-outline w-60">戻る</button>
            </div>
        
        </div>
      </div>
    </div>
  );
};

export default Page;