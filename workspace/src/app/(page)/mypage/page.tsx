import NameId from '../../../components/name-id'
import PostsView from '../../../components/posts-view'
import Genre from '../../../components/genre'
import Recent from '../../../components/recent'

const page = () => {
  return (
    <>
    <div style={{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column"
        }}>
        <div style={{display:"flex",alignItems:"center"}}>
            <img  src='./arrow-black-image.png'/>
                <p  className=" w-screen flex justify-center items-center"
                style={{
                    fontWeight:"bold", 
                    fontSize:"30px",
                    marginTop:"20px"
                    }}>
                    マイページ
                </p>
        </div>
        <NameId name="名前" id="id"/>
        <PostsView />
        <div className='mt-10'>
         <Genre />
        </div>
        <Recent />
        <button className="btn"
        style={{
          fontWeight:"lighter",
           margin:"100px"
          }}
        >アカウントを編集する</button>
        <a style={{color:"red",marginBottom:"100px"}} href='./login'>ログアウト</a>

        </div>
  </>
        
    
  )
}

export default page