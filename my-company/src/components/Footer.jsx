import React from 'react';

export default function Footer() {
  const footerStyle = {
    backgroundColor: '#2c3e50',
    color: 'white',
    textAlign: 'center',
    padding: '1rem',
    position: 'relative',
    bottom: 0,
    width: '100%',
    marginTop: 'auto',
  };

  return (
    <footer style={footerStyle}>
      <p>© All rights reserved.</p>
    </footer>
  );
}