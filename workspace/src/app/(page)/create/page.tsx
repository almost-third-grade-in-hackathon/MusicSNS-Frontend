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
          <form className="create-page">
            {/* カード */}
            <div className="flex justify-center">
              <div className="card w-80 sm:w-96 my-4 mx-2 bg-white">
                <div className="flex items-center">
                  {/* 画像表示 */}
                  <div className="w-24 h-24 rounded-xl overflow-hidden mr-4 flex-shrink-0">
                    <img
                      className="w-full h-full object-cover"
                      src={albumImageUrl}
                      alt="Album Image"
                    />
                  </div>

                  {/* 曲の名前 */}
                  <div className="card-body p-4 flex-1 bg-gray-200 text-black rounded-xl">
                    <div className="text-left">
                      <h2 className="card-title text-lg font-bold">
                        {musicTitle}
                      </h2>
                      <p className="text-sm">{Aritist}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* タイトル入力 */}
            <div className="mb-4">
              <h2 className="text-left mb-2">タイトル</h2>
              <input
                type="text"
                placeholder="タイトルを入力"
                className="input input-bordered w-full max-w-xs bg-white border-2 border-black focus:bg-sky-700"
              />
            </div>

            {/* コメント入力 */}
            <div className="mb-4">
              <h2 className="text-left mb-2">コメント</h2>
              <textarea
                className="textarea textarea-bordered w-full bg-white border-2 border-black focus:bg-sky-700 mb-4"
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
