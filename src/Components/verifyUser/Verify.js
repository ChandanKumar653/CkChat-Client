import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux';
import { verifyUser } from '../../Redux/Slices/AuthSlice';
import { CircularProgress, Typography, Card, CardContent } from '@mui/material';

export default function Verify() {
  const { token } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    if (token) {
      dispatch(verifyUser({ token: token }));
    }
  }, [dispatch, token]); 

  const res = useSelector((state) => state.auth);
  console.log("res", res);
  if (res?.verify?.status === "loading") {
    return (
      <div className="flex justify-center items-center h-screen">
        <CircularProgress />
      </div>
    );
  }

  if (res?.verify?.status === "error") {
    return (
      <div className="flex justify-center items-center h-screen">
        <Card>
          <CardContent>
            <Typography variant="h3" style={{color:"white"}}>Verification Error</Typography>
            <Typography>{res?.verify?.error}</Typography>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (res?.verify?.status === "success") {
    return (
      <div className="flex justify-center items-center h-screen">
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
  return <div className="h-screen text-white"></div>;
}
