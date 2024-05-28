import React, { useState, useEffect, useRef } from "react";
import "./Navbar.scss";
import { Link, useNavigate } from "react-router-dom";
import Web3 from "web3";
import logo from "../../../public/logo-no-background.png";

const lists = [
  { tag: "About", path: "/about" },
  { tag: "EarthFi", path: "/token" },
  { tag: "Profile", path: "/profile" },
];

const dropDownList = [
  { tag: "Create", path: "/order-creation" },
  { tag: "Market Place", path: "/market-place" },
  { tag: "Buy Asset", path: "/buy-asset" },
  { tag: "Confirm", path: null },
];

const confirmList = [{ tag: "Transaction", path: "/confirm-transaction" }];
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [account, setAccount] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [web3, setWeb3] = useState(null);
  const navbarRef = useRef(null);

  const launch = () => {
    alert("Launching Soon!!!");
  };

  useEffect(() => {
    checkConnectionOnMount();
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("isConnected", isConnected);
    localStorage.setItem("account", account);
  }, [isConnected, account]);

  const home = () => navigate("/");

  const toggleNavbar = () => setIsOpen(!isOpen);

  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const checkConnectionOnMount = async () => {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      setWeb3(web3);
      const accounts = await web3.eth.getAccounts();
      if (accounts.length > 0) {
        setAccount(accounts[0]);
        setIsConnected(true);
      }
    }
  };

  const connectWallet = async () => {
    if (!isConnected) {
      if (window.ethereum) {
        try {
          await window.ethereum.request({ method: "eth_requestAccounts" });
          const accounts = await web3.eth.getAccounts();
          setAccount(accounts[0]);
          setIsConnected(true);
        } catch (error) {
          console.error("User denied account access");
        }
      } else if (window.web3) {
        const web3 = new Web3(window.web3.currentProvider);
        setWeb3(web3);
        setIsConnected(true);
      } else {
        console.log("Non-Ethereum browser detected. Consider MetaMask!");
      }
    } else {
      disconnectWallet();
    }
  };

  const disconnectWallet = () => {
    setIsConnected(false);
    setAccount(null);
    setWeb3(null);
  };

  return (
    <nav className="navbar" ref={navbarRef}>
      <div className="navbar-container">
        <div className="navbar-logo" onClick={home}>
          <img src={logo} alt="Logo" />
        </div>

        <div className={`navbar-links ${isOpen ? "active" : ""}`}>
          {lists.map(({ tag, path }, i) => (
            <Link to={path} key={i}>
              {tag}
            </Link>
          ))}
          <ul>
            <li className="dropdown">
              <a href="#" className="dropbtn">
                Pages
              </a>
              <div className="dropdown-content">
                {dropDownList.map(({ tag, path }, i) => (
                  <>
                    <Link to={path} key={i}>
                      {tag}
                    </Link>
                  </>
                ))}
              </div>
            </li>
          </ul>
        </div>

        <button className="--btn --btn-success btn" onClick={launch}>
          Expired Connect Wallet
        </button>

        <div className="navbar-toggle" onClick={toggleNavbar}>
          <span className={`bar ${isOpen ? "open" : ""}`}></span>
          <span className={`bar ${isOpen ? "open" : ""}`}></span>
          <span className={`bar ${isOpen ? "open" : ""}`}></span>
        </div>
      </div>
    </nav>
  );
};

export const shortenText = (text, n) => {
  if (text.length > n) {
    const shoretenedText = text.substring(0, n).concat("...");
    return shoretenedText;
  }
  return text;
};

export default Navbar;
