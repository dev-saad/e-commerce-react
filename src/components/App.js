import { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import db, { auth } from "../firebase";
import Checkout from "./Checkout";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [cartItems, setCartItems] = useState([]);

  const getCartItems = () => {
    db.collection("cartItems").onSnapshot((snapshot) => {
      const tempItems = snapshot.docs.map((doc) => ({
        id: doc.id,
        product: doc.data(),
      }));
      setCartItems(tempItems);
    });
  };

  const signOut = () => {
    auth.signOut().then(() => {
      localStorage.removeItem("user");
      setUser(null);
    });
  };

  useEffect(() => {
    getCartItems();
  }, []);

  return (
    <Router>
      {user ? (
        <>
          <Header user={user} cartItems={cartItems} signOut={signOut} />
          <Switch>
            <Route path="/" exact>
              <Home cartItems={cartItems} />
            </Route>
            <Route path="/checkout">
              <Checkout cartItems={cartItems} />
            </Route>
          </Switch>
        </>
      ) : (
        <Login setUser={setUser} />
      )}
    </Router>
  );
}

export default App;
