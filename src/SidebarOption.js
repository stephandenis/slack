import { useDispatch } from "react-redux";
import styled from "styled-components";
import { enterRoom } from "./features/appSlice";
import { db } from "./firebase";

const SidebarOption = ({ Icon, title, addChannelOption, id }) => {
  const dispatch = useDispatch();
  const addChannel = () => {
    const channelName = prompt("Please enter the channel name");

    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
      });
    }
  };

  const selectChannel = () => {
    if (id) {
      dispatch(
        enterRoom({
          roomId: id,
        })
      );
    }
  };

  return (
    <OptionContainer onClick={addChannelOption ? addChannel : selectChannel}>
      {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <OptionChannel>
          <span>#</span> {title}
        </OptionChannel>
      )}
    </OptionContainer>
  );
};

export default SidebarOption;

const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: small;
  padding-left: 2px;
  cursor: pointer;
  :hover {
    opacity: 0.9;
    background-color: #340e36;
  }

  h3 {
    font-weight: 400;

    span {
      padding: 15px;
    }
  }
`;

const OptionChannel = styled.h3`
  padding: 10px 0;
  font-weight: 300;
`;
