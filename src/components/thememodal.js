import React from 'react';
import { useTheme } from '../components/themecontext';

const Theme = ({ show, onClose }) => {
  const { changeTheme } = useTheme();

  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-zinc-500 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-zinc-600">&times;</button>
        <h2 className="text-lg font-semibold mb-4">Choose Theme</h2>
        <div className="flex space-x-4">
          <button
            onClick={() => changeTheme('#F472B6')}
            className="w-10 h-10 rounded-full bg-pink-400 focus:outline-none"
          ></button>
          <button
            onClick={() => changeTheme('#60A5FA')}
            className="w-10 h-10 rounded-full bg-blue-400 focus:outline-none"
          ></button>
          <button
            onClick={() => changeTheme('#FBBF24')}
            className="w-10 h-10 rounded-full bg-yellow-400 focus:outline-none"
          ></button>
        </div>
      </div>
    </div>
  );
};

export default Theme;
