import React from 'react'

const PlaylistMenu = () => {
  return (
    <>
    <div style={{width:"100vw",height:1,background:"gray"}} />
    <div 
    style={{
       display:"flex", 
       justifyContent:"space-between",
       alignItems:"center",
       margin:"10px 0px 10px 0px"
       }}>
        <img src='./sample/Himawari.jpg' alt='曲の画像' 
        style={{
          width:"50px",
          borderRadius:"10%",
          marginLeft:"10%"
          }} />
        <p>曲名</p>
        <div className="dropdown dropdown-end" 
        style={{marginRight:"10%"}} >
            <div tabIndex={0} role="button"><img src='./menu-button.png' /></div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                <li><a>情報を見る</a></li>
                {/* 曲の情報ページ作った方がいいかも */}
                <li><a href='../create'>投稿する</a></li>
                <li><a>共有する</a></li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default PlaylistMenu