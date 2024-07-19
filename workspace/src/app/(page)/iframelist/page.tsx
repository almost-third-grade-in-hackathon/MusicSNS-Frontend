"use client";

import React from "react";
import IframeCard from "../../../components/ifamecard";
import "../style.css";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const cardData = [
    {
        musicUrl: "https://open.spotify.com/embed/track/78W4mTLIh4qoLu92W4IQhO?utm_source=generator&theme=0",
        commentTitle: "Comment for Music Title 1",
    },
    {
        musicUrl: "https://open.spotify.com/embed/track/78W4mTLIh4qoLu92W4IQhO?utm_source=generator&theme=0",
        commentTitle: "Comment for Music Title 2",
    },
    {
        musicUrl: "https://open.spotify.com/embed/track/78W4mTLIh4qoLu92W4IQhO?utm_source=generator&theme=0",
        commentTitle: "Comment for Music Title 3",
    },
  ];

  return (
    <div className="outer-container bg-white">
      <div className="flex justify-center px-5 safari-hack">
        <div className="max-w-screen-lg p-8">
          <div className="flex items-center mb-4">
            <button className="btn btn-ghost bg-transparent border-none hover:bg-transparent hover:opacity-100">
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
              投稿一覧
            </h1>
          </div>

          <div className="flex flex-wrap justify-center">
            {cardData.map((card, index) => (
              <IframeCard
                key={index}
                musicUrl={card.musicUrl}
                commentTitle={card.commentTitle}
              />
            ))}
          </div>

          {/*ペジネーション*/}
          <div className="mb-10" />
          <div className="flex justify-center mt-4">
            <div className="join">
              <button className="join-item btn">1</button>
              <button className="join-item btn">2</button>
              <button className="join-item btn btn-disabled">...</button>
              <button className="join-item btn">99</button>
              <button className="join-item btn">100</button>
            </div>
          </div>
          <div className="mb-10" />
          <div className="flex justify-center">
            <button className="btn btn-outline w-60" type="button" onClick={() => router.back()}>
                  戻る
            </button> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
