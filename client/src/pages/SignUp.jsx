import React from "react";
import { TextInput, Button } from "flowbite-react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex justify-center min-h-screen">
      <div className="w-[400px]">
        <div className="border mt-2 flex flex-col items-center">
          <div className="mt-10 flex flex-col items-center border-b w-[300px]">
            <h1 className="text-3xl text-center">Instagram</h1>
            <p className="mt-5 text-center text-l">Sign up to see photos and videos <br />from your friends.</p>
            <Button className="w-full mt-5">Log in with Facebook</Button>
            <h3 className="relative -bottom-3 bg-white w-20 text-center">OR</h3>
          </div>
          <form className="mt-10 w-[300px] flex flex-col items-center border-b gap-3">
            <TextInput
              placeholder="Phone number, username, or email"
              className="w-full"
            />
            <TextInput
              placeholder="Full name"
              className="w-full"
            />
            <TextInput
              placeholder="User name"
              className="w-full"
            />
            <TextInput
              placeholder="Password"
              type="password"
              className="w-full"
            />
            <p className="text-xs text-center">
              People who use our service may have uploaded <br /> your contact
              information to Instagram. Learn <br /> More
            </p>
            <p className="text-xs text-center">
              By signing up, you agree to our Terms , Privacy <br />Policy and Cookies
              Policy .
            </p>
            <Button className="w-full bg-blue-500">Sign up</Button>
          </form>
        </div>
        <div className="border mt-3 text-center pt-5 pb-5">
          <Link to="/signin">
            Have an account?<span className="text-blue-500">Log in</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
