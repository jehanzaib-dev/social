import './post.css';
import * as MuiIcons from "@mui/icons-material";
import {Users} from '../../dummyData.js';


export default function Post({post}){
	const MoreVertIcon=MuiIcons.MoreVert;

return(
	<div className="postContainer">
		<div className="postWrapper">
			<div className="postWrapperTop">
				<div className="postWrapperTopLeft">
				<img src={Users.filter((u)=>u.id===post.userId)[0].profilePicture} alt="" className="postWrapperTopLeftImg"/>
				<span className="postWrapperTopLeftText">
					{Users.filter((u)=>u.id===post.userId)[0].username}
				</span>
				<span className="postWrapperTopLeftDate">{post.date}</span>
				</div>
				<div className="postWrapperTopRight">
					<MoreVertIcon className="postWrapperTopRightIcon"/>
				</div>
			</div>
			<div className="postWrapperCenter">
			<span className="postWrapperCenterText">
				{post?.desc}
			</span>
			<img src={post.photo} alt="" className="postWrapperCenterImg"/>
			</div>
			<div className="postWrapperBottom">
				<div className="postWrapperBottomLeft">
					<img src="assets/like.png" alt="" className="likeIcon"/>
					<img src="assets/heart.png" alt="" className="likeIcon"/>
					<span className="postLikeCounter">
						{post.like} people liked it
					</span>
				</div>
				<div className="postWrapperBottomRight">
					<span className="postCommentText">{post.comment} comments</span>
				</div>
			</div>
		</div>


	</div>
	)
}