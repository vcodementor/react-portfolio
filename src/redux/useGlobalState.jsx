import  { useState } from 'react';

const useGlobalState = () => {
  const [state, setState] = useState({
    darkMode: true,
    activeSection: 'home',
    isMenuOpen: false
  });

  const dispatch = (action) => {
    switch (action.type) {
      case 'TOGGLE_THEME':
        setState(prev => ({ ...prev, darkMode: !prev.darkMode }));
        break;
      case 'SET_ACTIVE_SECTION':
        setState(prev => ({ ...prev, activeSection: action.payload }));
        break;
      case 'TOGGLE_MENU':
        setState(prev => ({ ...prev, isMenuOpen: !prev.isMenuOpen }));
        break;
      default:
        break;
    }
  };

  return [state, dispatch];
};

export default useGlobalState;