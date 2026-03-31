
import "./rightbar.css";
import Online from '../online/online.jsx';
import {Users} from '../../dummyData.js';



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
			{
				Users.map(u=>(
					<Online key={u.id} user={u}/>))
			}				
				
			</ul>

		</div>
	

	</div>
	)
}




