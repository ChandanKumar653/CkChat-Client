import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { verifyUser } from "../../Redux/Slices/AuthSlice";
import { CircularProgress, Typography, Card, CardContent } from "@mui/material";

export default function Verify() {
  const { token } = useParams();
  const dispatch = useDispatch();
  const res = useSelector((state) => state.auth);

  useEffect(() => {
    const verify = async () => {
      await dispatch(verifyUser({ token: token }));
    };
    if (token) verify();
  }, [dispatch, token]);

  if (res?.verify?.status === "loading") {
    return (
      <div className="flex justify-center items-center h-screen">
        <CircularProgress />
      </div>
    );
  }

  if (res?.verify?.status === "error") {
    return (
      <div className="flex justify-center items-center h-screen text-black">
        <Card>
          <CardContent>
            <Typography variant="h3" style={{ color: "red" }}>
              Verification Error
            </Typography>
            <Typography>{res?.verify?.error}</Typography>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (res?.verify?.status === "success") {
    return (
      <div className="flex justify-center items-center h-screen text-green-500">
        <Card>
          <CardContent>
            <Typography variant="h3" sx={{color:"green"}}>Verification Successful</Typography>
            <Typography>
              Your account has been successfully verified.
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }

  // If none of the above conditions are met, just return an empty div or a loading state
  return (
    <div className="flex justify-center items-center h-screen">
      {/* <CircularProgress /> */}
    </div>
  );
}
