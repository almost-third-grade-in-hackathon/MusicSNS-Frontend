import React from 'react'
import "../../components/playlist-menu"
import PlaylistMenu from '../../components/playlist-menu'

const page = () => {
  return (
    <>
        <div style={{position:"relative"}}>
            {/* 本当は楽曲一覧画面に戻る */}
            <a href='/'>
                <img src="./arrow-image.png" style={{position:"absolute", top:"5vh",left:"30px"}}></img>
            </a>
            <a href="https://twitter.com/share?url={URL}" rel="nofollow noopener" target="_blank">
                <img src='./export-image.png' style={{position:"absolute",top:"5vh",right:"30px"}}></img>
            </a>
            <div style={{
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                flexDirection:"column",
                margin:"5px"
                }}>
                <img src='./sample/Himawari.jpg' style={{width:"30%", borderRadius:"10%",marginTop:"10vh"}} />
                <p style={{fontWeight:"bold",fontSize:"30px"}}>プレイリスト名</p>
            </div>
            <div style={{marginTop:"10px"}}>
                {/* 要調整 */}
                <PlaylistMenu />
            </div>
        </div>
    </>
  )
}

export default page