import React from 'react'
import './Sidebar.css'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import SideBarOption from './SidebarOption'
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';



function Sidebar() {
    return  <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>Inverted St</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        Telis Ntouros
                    </h3>
                </div>
                <CreateIcon />
            </div>
            <SideBarOption Icon={InsertCommentIcon} title='Threads' />
            <SideBarOption Icon={InboxIcon} title='Mentions' />
            <SideBarOption Icon={DraftsIcon} title='Saved Items' />
            <SideBarOption Icon={PeopleAltIcon} title='People' />
            <SideBarOption Icon={AppsIcon} title='Apps' />
            <SideBarOption Icon={FileCopyIcon} title='File browser' />
            <SideBarOption Icon={ExpandLessIcon} title='Show less' />
            <hr />
            <SideBarOption Icon={ExpandMoreIcon} title='Channels' />
            <hr />
            <SideBarOption Icon={AddIcon} title='Add Channel' />

            {/* Connect DB and list all the Channels */}
            {/* SideBarOption again and again */}
        </div>
    
}

export default Sidebar


