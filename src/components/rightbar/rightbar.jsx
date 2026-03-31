
import "./rightbar.css";

export default function RightBar(){

return(
	<div className='rightBar'>
		<div className="rightbarWrapper">
			<div className="birthdayContainer">
				<img src="assets/gift.png" alt="" className="birthdayImg"/>
				<span className="birthdayReminder"><b>Jacky Short </b>and <b>3 others</b> have birthday today.</span>
				
			</div>
			<img src="assets/ad.png" alt="" className="rightbarAd"/>
			<h4 className="onlineTitle">Online Friends</h4>
			<ul className="onlineFriendsList">
				<li className="onlineFriendsItem">
				<div className="rightbarOnlineContainer">
				<img src="assets/person/3.jpeg" className="rightbarOnlineImg"/> 
				<span className="onlineBadge"></span>
				</div>
				<span className="rightbarOnlineFriendName">Jake Carter</span>
				</li>
				<li className="onlineFriendsItem">
				<div className="rightbarOnlineContainer">
				<img src="assets/person/3.jpeg" className="rightbarOnlineImg"/> 
				<span className="onlineBadge"></span>
				</div>
				<span className="rightbarOnlineFriendName">Jake Carter</span>
				</li>
				<li className="onlineFriendsItem">
				<div className="rightbarOnlineContainer">
				<img src="assets/person/3.jpeg" className="rightbarOnlineImg"/> 
				<span className="onlineBadge"></span>
				</div>
				<span className="rightbarOnlineFriendName">Jake Carter</span>
				</li>
				<li className="onlineFriendsItem">
				<div className="rightbarOnlineContainer">
				<img src="assets/person/3.jpeg" className="rightbarOnlineImg"/> 
				<span className="onlineBadge"></span>
				</div>
				<span className="rightbarOnlineFriendName">Jake Carter</span>
				</li>
				<li className="onlineFriendsItem">
				<div className="rightbarOnlineContainer">
				<img src="assets/person/3.jpeg" className="rightbarOnlineImg"/> 
				<span className="onlineBadge"></span>
				</div>
				<span className="rightbarOnlineFriendName">Jake Carter</span>
				</li>
				<li className="onlineFriendsItem">
				<div className="rightbarOnlineContainer">
				<img src="assets/person/3.jpeg" className="rightbarOnlineImg"/> 
				<span className="onlineBadge"></span>
				</div>
				<span className="rightbarOnlineFriendName">Jake Carter</span>
				</li>
			</ul>

		</div>
	

	</div>
	)
}




