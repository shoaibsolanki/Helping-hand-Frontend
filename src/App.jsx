import React, { useEffect } from "react";
import { Routes, Route, useNavigationType, useLocation } from "react-router-dom";
import LayOut from "./pages/LayOut";
import Layout from "./Layout/Layout";
import RootLayout from "./Layout/RootLayout";
import Account from "./components/Account";
import LevelWiseLinkChart from "./components/LevelWiseLinkChart";
import Network from "./components/Network";
import { useThemeContext } from './ThemeContext';

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <RootLayout>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/account" element={<Account />} />
        <Route path="/givetakehelp" element={<LevelWiseLinkChart />} />
        <Route path="/network" element={<Network />} />
      </Routes>
    </RootLayout>
  );
}

export default App;
