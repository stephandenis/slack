import styled from "styled-components";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import SidebarOption from "./SidebarOption";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AppsIcon from "@material-ui/icons/Apps";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import { useCollection } from "react-firebase-hooks/firestore";
import { auth, db } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Sidebar = () => {
  const [channels] = useCollection(db.collection("rooms"));
  const [user] = useAuthState(auth);
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>Deni Community</h2>
          <h3>
            <FiberManualRecordIcon />
            {user.displayName}
          </h3>
        </SidebarInfo>
        <CreateIcon />
      </SidebarHeader>

      <SidebarOption Icon={InsertCommentIcon} title="Threads" />
      <SidebarOption Icon={InboxIcon} title="Mentions" />
      <SidebarOption Icon={DraftsIcon} title="Saved" />
      <SidebarOption Icon={BookmarkBorderIcon} title="Channel" />
      <SidebarOption Icon={FileCopyIcon} title="Files" />
      <SidebarOption Icon={PeopleAltIcon} title="People" />
      <SidebarOption Icon={AppsIcon} title="Apps" />
      <SidebarOption Icon={ExpandLessIcon} title="Show less" />
      <hr />
      <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
      <hr />
      <SidebarOption Icon={AddIcon} addChannelOption title="Add Channel" />

      {channels?.docs.map((doc) => (
        <SidebarOption key={doc.id} id={doc.id} title={doc.data().name} />
      ))}
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  background-color: var(--slack-color);
  color: white;
  flex: 0.3;
  border-top: 1px solid #49274b;
  max-width: 260px;
  margin-top: 60px;

  hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #49274b;
  }
`;

const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  padding: 13px;

  > .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background-color: white;
    border-radius: 1rem;
  }
`;

const SidebarInfo = styled.div`
  flex: 1;

  h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }

  h3 {
    display: flex;
    font-size: 13px;
    align-items: center;
    font-weight: 400;

    .MuiSvgIcon-root {
      color: green;
      font-size: 14px;
      margin-right: 2px;
      margin-top: 1px;
    }
  }
`;
