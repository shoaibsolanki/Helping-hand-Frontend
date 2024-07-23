import React from "react";
import PropTypes from "prop-types";
import { Button, InputAdornment, TextField } from "@mui/material";

const Login = ({ className = "" }) => {
  return (
    <div
      className={`w-[365px] rounded-10xs flex flex-col items-start justify-start pt-[30px] px-5 pb-7 box-border gap-[16px] bg-[url('/background@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full z-[1] text-left text-smi-5 text-dimgray-100 font-inter mq450:pt-5 mq450:pb-5 mq450:box-border ${className}`}
    >
      <img
        className="w-[361px] h-[358px] relative rounded-10xs object-cover hidden max-w-full"
        alt=""
        src="/background@2x.png"
      />
      <div className="self-stretch flex flex-row items-start justify-center pt-0 pb-[7px] pr-0 pl-0.5 text-lgi">
        <div className="w-[135px] flex flex-col items-start justify-start gap-[1px]">
          <div className="flex flex-row items-start justify-start py-0 pr-[43px] pl-[42px]">
            <img
              className="h-[45px] w-[50px] relative object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/image@2x.png"
            />
          </div>
          <div className="self-stretch relative font-light z-[1]">
            Samaj Kalyan
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-2.5 pr-[68px] pl-[71px] text-gray-200 mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div className="flex-1 relative font-semibold z-[1]">
          Sign in to start your session
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0.5 pl-[3px] text-dimgray-200">
        <TextField
          className="flex-1 z-[1]"
          variant="outlined"
          label="Username"
          InputProps={{
             endAdornment: (
              <InputAdornment position="start">
       <img
          className="h-4 w-3.5 relative object-contain z-[2]"
          loading="lazy"
          alt=""
          src="/image-1@2x.png"
        />
              </InputAdornment>
            ),

            style: { height: 38, backgroundColor: '#f0f0f0' },
            classes: { notchedOutline: 'border-gainsboro' },
          }}
        />
     
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[10px] text-7xs text-darkgray">
        <div className="self-stretch flex flex-col items-end justify-start gap-[13px]">
          <div className="self-stretch flex flex-row items-start justify-end py-0 pr-0.5 pl-[3px]">
            <TextField
              className="flex-1 z-[1]"
              variant="outlined"
              label="Password"
              type="password"
              InputProps={{
                style: { height: 38, backgroundColor: '#f0f0f0' },
                classes: { notchedOutline: 'border-lightgray' },
              }}
            />
          </div>
          <Button
            className="self-stretch h-[43px] z-[1] mq450:pl-5 mq450:pr-5 mq450:box-border"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#2f0500",
              fontSize: "12.5px",
              background: "#db9a06",
              border: "#c89d2f solid 1px",
              borderRadius: "0px 0px 0px 0px",
              "&:hover": { background: "#db9a06" },
              height: 43,
            }}
          >
            Login
          </Button>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[76px] pl-[79px] text-smi-5 text-slategray mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="flex-1 relative font-semibold z-[1]">
            Not Registered? Join Now
          </div>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  className: PropTypes.string,
};

export default Login;
