
import "./feed.css";
import Share from '../share/share.jsx';
import Post from '../post/post.jsx'; 


export default function Feed(){

	return(
		<div className='feedContainer'>
		<div className="feedWrapper">
			<Share/>
			<Post/>
			<Post/>
			<Post/>
			<Post/>
			<Post/>
			<Post/>
			<Post/>
		</div>
		</div>
		)
}