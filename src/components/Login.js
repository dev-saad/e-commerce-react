import { Button } from "@material-ui/core";
import db, { auth, provider } from "../firebase";

const Login = ({ setUser, user }) => {
  const logIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        let userDet = result.user;
        let userInfo = {
          name: userDet.displayName,
          email: userDet.email,
          photo: userDet.photoURL,
        };
        localStorage.setItem("user", JSON.stringify(userInfo));
        setUser(userInfo);
        window.location.reload();
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="max-w-lg w-96 min-w-min h-80 min-h-0 shadow-xl p-5 bg-gray-300 bg-opacity-10 flex justify-evenly items-center flex-col">
        <h1 className="font-mono text-primary font-bold text-5xl flex-shrink w-1/2 leading-none">
          Rainbow
        </h1>
        <span className="block font-medium text-lg text-secondary">
          Sign into Rainbow
        </span>
        <Button
          className="w-full py-3 bg-yellow-300 text-base font-semibold"
          onClick={logIn}
        >
          Log in with google
        </Button>
      </div>
    </div>
  );
};

export default Login;
