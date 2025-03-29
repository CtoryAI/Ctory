import React from 'react';
import { Link } from 'react-router-dom';
import { useWeb3 } from '../../hooks/useWeb3';

const Navbar = () => {
  const { account, connect, disconnect } = useWeb3();

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <img src="/logo.svg" alt="Ctory Logo" className="logo" />
        </Link>
      </div>
      <div className="navbar-menu">
        <Link to="/studio" className="nav-item">Studio</Link>
        <Link to="/marketplace" className="nav-item">Marketplace</Link>
        <Link to="/profile" className="nav-item">Profile</Link>
      </div>
      <div className="navbar-end">
        {account ? (
          <button onClick={disconnect} className="wallet-button">
            {account.slice(0, 6)}...{account.slice(-4)}
          </button>
        ) : (
          <button onClick={connect} className="wallet-button">
            Connect Wallet
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 