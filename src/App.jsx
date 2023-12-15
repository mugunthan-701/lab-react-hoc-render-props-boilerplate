import './App.css';
import LikeImage from './components/LikeImage';
import LikeImagePart2 from './components/LikeImagePart2';
import LikePost from './components/LikePost';
import LikePostPart2 from './components/LikePostPart2';
import Render from './components/Render';

function App() {
  return (
    <div>
      <h3>Some Blog</h3>
      <div className='buttons'>
        {/* <LikePost/>
        <LikeImage/> */}
        {/* <LikeImagePart2 />
        <LikePostPart2  /> */}
        <Render render={(likeImageCounter,handleLikeImageCount)=> <LikeImagePart2 likeImageCounter={likeImageCounter} handleLikeImageCount={handleLikeImageCount}/>} />
        <Render render={(likeImageCounter,handleLikeImageCount)=> <LikePostPart2 likeImageCounter={likeImageCounter} handleLikeImageCount={handleLikeImageCount}/>}/>
      </div>
    </div>
  );
}

export default App;
