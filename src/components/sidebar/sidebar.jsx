
import './sidebar.css';
import * as MuiIcons from "@mui/icons-material";


export default function SideBar(){
	const ChatIcon=MuiIcons.Chat;

return(
<div className='sidebar'>
	<div className="sidebarWrapper">
		<ul className="sidebarList">
			<li className="sidebarListItem">
				<ChatIcon className="sidebarListItemIcon"/>
				<span className="sidebarListItemText">Feed
				</span>
			</li>
			<li className="sidebarListItem">
				<ChatIcon className="sidebarListItemIcon"/>
				<span className="sidebarListItemText">Chats
				</span>
			</li>
			<li className="sidebarListItem">
				<ChatIcon className="sidebarListItemIcon"/>
				<span className="sidebarListItemText">Videos
				</span>
			</li>
			<li className="sidebarListItem">
				<ChatIcon className="sidebarListItemIcon"/>
				<span className="sidebarListItemText">Groups
				</span>
			</li>
			<li className="sidebarListItem">
				<ChatIcon className="sidebarListItemIcon"/>
				<span className="sidebarListItemText">Bookmarks
				</span>
			</li>
			<li className="sidebarListItem">
				<ChatIcon className="sidebarListItemIcon"/>
				<span className="sidebarListItemText">Questions
				</span>
			</li>
			<li className="sidebarListItem">
				<ChatIcon className="sidebarListItemIcon"/>
				<span className="sidebarListItemText">Jobs
				</span>
			</li>
			<li className="sidebarListItem">
				<ChatIcon className="sidebarListItemIcon"/>
				<span className="sidebarListItemText">Events
				</span>
			</li>
			<li className="sidebarListItem">
				<ChatIcon className="sidebarListItemIcon"/>
				<span className="sidebarListItemText">Courses
				</span>
			</li>
		</ul>
		<button className="sidebarButton">Show more
		</button>
		<hr className="sidebarHr"/>
		<ul className="sidebarFriendList">
			<li className="sidebarFriendListItem">
			<img src="/assets/person/2.jpeg" alt="image" className="sidebarFriendListItemImage"/>
			<span className="sidebarFriendListItemName">Jane Doe</span>
			</li>
			<li className="sidebarFriendListItem">
			<img src="/assets/person/2.jpeg" alt="image" className="sidebarFriendListItemImage"/>
			<span className="sidebarFriendListItemName">Jane Doe</span>
			</li>
			<li className="sidebarFriendListItem">
			<img src="/assets/person/2.jpeg" alt="image" className="sidebarFriendListItemImage"/>
			<span className="sidebarFriendListItemName">Jane Doe</span>
			</li>
			<li className="sidebarFriendListItem">
			<img src="/assets/person/2.jpeg" alt="image" className="sidebarFriendListItemImage"/>
			<span className="sidebarFriendListItemName">Jane Doe</span>
			</li>
			<li className="sidebarFriendListItem">
			<img src="/assets/person/2.jpeg" alt="image" className="sidebarFriendListItemImage"/>
			<span className="sidebarFriendListItemName">Jane Doe</span>
			</li>
			<li className="sidebarFriendListItem">
			<img src="/assets/person/2.jpeg" alt="image" className="sidebarFriendListItemImage"/>
			<span className="sidebarFriendListItemName">Jane Doe</span>
			</li>
			<li className="sidebarFriendListItem">
			<img src="/assets/person/2.jpeg" alt="image" className="sidebarFriendListItemImage"/>
			<span className="sidebarFriendListItemName">Jane Doe</span>
			</li>
			<li className="sidebarFriendListItem">
			<img src="/assets/person/2.jpeg" alt="image" className="sidebarFriendListItemImage"/>
			<span className="sidebarFriendListItemName">Jane Doe</span>
			</li>
		</ul>
	</div>
</div>
	)
}



























