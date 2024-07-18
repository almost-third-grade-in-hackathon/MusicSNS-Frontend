import React from 'react'

const PlaylistMenu = () => {
  return (
    <>
    <div style={{width:"100vw",height:1,background:"gray"}} />
    <div style={{position:"relative", display:"flex", justifyContent:"center",alignItems:"center"}}>
        <img src='./sample/Himawari.jpg' style={{width:"50px",position:"absolute",left:"10vw",marginTop:"30px",borderRadius:"10%"}} />
        <p style={{marginTop:"30px"}}>曲名</p>
        <div className="dropdown dropdown-end" style={{position:"absolute",right:"10vh",marginTop:"30px"}} >
            <div tabIndex={0} role="button" className="d"><img src='./menu-button.png' /></div>
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