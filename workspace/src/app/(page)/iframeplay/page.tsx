"use client";

import React from 'react';
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  return (
    <div className="outer-container bg-white">
      <div className="max-w-screen-lg w-full p-8">
        <div className="flex items-center mb-4">
            <button className="btn btn-ghost hover:bg-transparent ">
                <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/></svg>
            </button>
        </div>

        <div className="flex justify-center items-center mb-4">
          <iframe
            className="rounded-lg"
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/78W4mTLIh4qoLu92W4IQhO?utm_source=generator&theme=0"
            width="100%"
            height="352"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Spotify Embed"
          ></iframe>
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
