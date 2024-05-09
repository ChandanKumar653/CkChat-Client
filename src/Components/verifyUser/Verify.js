import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux';
import { verifyUser } from '../../Redux/Slices/AuthSlice';
import { CircularProgress, Typography, Card, CardContent } from '@mui/material';

export default function Verify() {
    const { token } = useParams();
    const dispatch=useDispatch();
    useEffect(()=>{

        dispatch(verifyUser({token:token}));


    },[dispatch,token])
    const res = useSelector((state) => state.auth);
    if(res?.auth?.verify?.state==="loading"){
        return <div className='flex justify-center items-center'>
            <CircularProgress/>
        </div>
    }


    if (res?.auth?.verify?.state === "error") {
      return (
        <div className="flex justify-center items-center">
          <Card>
            <CardContent>
              <Typography variant="h3">Verification Error</Typography>
              <Typography>{res?.auth?.verify?.error}</Typography>
            </CardContent>
          </Card>
        </div>
      );
    }

    if (res?.auth?.verify?.state === "success") {
      return (
        <div className="flex justify-center items-center">
          <Card>
            <CardContent>
              <Typography variant="h3">Verification Successful</Typography>
              <Typography>
                Your account has been successfully verified.
              </Typography>
            </CardContent>
          </Card>
        </div>
      );
    }
  return (
    <div className='h-screen text-white'></div>
  )
}
