import React, { useEffect } from 'react';

function WebXR() {
  useEffect(() => {
    window.location.href = '/vr.html';
  }, []);

  return null;
}

export default WebXR;
