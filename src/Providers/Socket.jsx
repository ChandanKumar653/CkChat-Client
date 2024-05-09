import React,{createContext, useMemo} from 'react';
import { io } from 'socket.io-client';
import { apiLink } from "../Constants";

const SocketContext=createContext(null);
export const useSocket=()=>{
    return React.useContext(SocketContext);
}

export const SocketProvider=(props)=>{
    const socket=useMemo(()=> io(apiLink, {
       auth: {
         token:
           "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiQ2tDaGF0IiwiaWF0IjoxNzAzODU5MzE0fQ.Da4q9bPn4sa0B4sGq6TLy3k5ZqW4mBzifGPjHIx8E-g",
       },
     }),[])
    // const socket = useMemo(
    //   () =>
    //     io("https://ckchat-server.onrender.com/", {
    //       auth: {
    //         token:
    //           "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiQ2tDaGF0IiwiaWF0IjoxNzAzODU5MzE0fQ.Da4q9bPn4sa0B4sGq6TLy3k5ZqW4mBzifGPjHIx8E-g",
    //       },
    //     }),
    //   []
    // );
    //  const socket = io("http://localhost:3001", {
    //    auth: {
    //      token:
    //        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiQ2tDaGF0IiwiaWF0IjoxNzAzODU5MzE0fQ.Da4q9bPn4sa0B4sGq6TLy3k5ZqW4mBzifGPjHIx8E-g",
    //    },
    //  });
    return(
        <SocketContext.Provider value={{socket}}>
            {props.children}
        </SocketContext.Provider>
    )
}