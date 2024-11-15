import React,{createContext, useMemo} from 'react';
import { io } from 'socket.io-client';
import { apiLink } from "../Constants";
import { useSelector } from 'react-redux';
const SocketContext=createContext(null);
export const useSocket=()=>{
    return React.useContext(SocketContext);
}

export const SocketProvider=(props)=>{
     const { token } = useSelector((state) => state.auth.local);
    const socket = useMemo(
      () =>
        io(apiLink, {
          auth: {
            token:
              token ||
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiQ2tDaGF0IiwiaWF0IjoxNzMxNjg3NTgyfQ.ISUKLqUZH4BXfkQ2WRW30prcG8Hn7TOM0aN_yGz4634",
            //    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiQ2tDaGF0IiwiaWF0IjoxNzAzODU5MzE0fQ.Da4q9bPn4sa0B4sGq6TLy3k5ZqW4mBzifGPjHIx8E-g",
          },
        }),
      [token]
    );
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