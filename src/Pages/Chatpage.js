import { Box } from "@chakra-ui/layout";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Chatbox from "../components/Chatbox";
import MyChats from "../components/MyChats";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import { ChatState } from "../Context/ChatProvider";

const Chatpage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();
  // window.re
  // const history = useHistory();
  // const info = localStorage.getItem("userInfo");
  // useEffect(() => {
  //   window.location.reload();
  // }, [info]);

  return (
    <div style={{ width: "100%" }}>
      {user ? <SideDrawer /> : null}
      <Box d="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {user ? <MyChats fetchAgain={fetchAgain} /> : null}
        {user ? (
          <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        ) : null}
      </Box>
    </div>
  );
};

export default Chatpage;
