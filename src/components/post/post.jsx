import './post.css';
import * as MuiIcons from "@mui/icons-material";

export default function Post(){
	const MoreVertIcon=MuiIcons.MoreVert;

return(
	<div className="postContainer">
		<div className="postWrapper">
			<div className="postWrapperTop">
				<div className="postWrapperTopLeft">
				<img src="/assets/person/1.jpeg" alt="" className="postWrapperTopLeftImg"/>
				<span className="postWrapperTopLeftText">Jane Doe</span>
				<span className="postWrapperTopLeftDate">5 mins ago</span>
				</div>
				<div className="postWrapperTopRight">
					<MoreVertIcon className="postWrapperTopRightIcon"/>
				</div>
			</div>
			<div className="postWrapperCenter">
			<span className="postWrapperCenterText">
				hy this is my irst post
			</span>
			<img src="assets/post/1.jpeg" alt="" className="postWrapperCenterImg"/>
			</div>
			<div className="postWrapperBottom">
				<div className="postWrapperBottomLeft">
					<img src="assets/like.png" alt="" className="likeIcon"/>
					<img src="assets/heart.png" alt="" className="likeIcon"/>
					<span className="postLikeCounter">
						32 people liked it
					</span>
				</div>
				<div className="postWrapperBottomRight">
					<span className="postCommentText">9 comments</span>
				</div>
			</div>
		</div>


	</div>
	)
}