import { useAppStore } from "@/store"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Chat = () => {

  const {userInfo} = useAppStore();
  const nagative = useNavigate();

  useEffect(() => {
    if(!userInfo.profileSetup){
      toast("Please setup profile to continue.");
      nagative("/profile");
    }
  }, [userInfo, nagative])
  
  return (
    <div>
      Chat
    </div>
  )
}

export default Chat
