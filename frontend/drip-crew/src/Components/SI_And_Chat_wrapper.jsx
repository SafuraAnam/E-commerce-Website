import Chat from "../routes/Chat"
import StyleIcon from "../routes/StyleIcon"
import { useState } from "react";

 const SI_And_Chat_wapper=()=>{
    const [selectedContact, setSelectedContact] = useState(null);
    return(
        <>
        <Chat selectedContact={selectedContact} setSelectedContact={setSelectedContact}/>
        <StyleIcon/>
        </>
    )
}
export default SI_And_Chat_wapper