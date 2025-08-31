import React from 'react';
import { useTheme } from '../components/themecontext';

const Theme = ({ show, onClose }) => {
  const { changeTheme } = useTheme();

  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl h-52 w-96  shadow-lg relative">
        <div className='flex justify-between border-b px-4'>
        <h2 className="text-lg font-semibold pl-10 pt-4">Choose Theme</h2>
        <button onClick={onClose} className="text-5xl text-zinc-600">&times;</button>
        </div>
        <div className='flex justify-center items-center pt-10'>
        <div className="flex space-x-7">
          <button
            onClick={() => { changeTheme('#F472B6'); onClose(); }}
            className="w-20 h-20 rounded-full bg-pink-400 focus:outline-none focus:ring-1 focus:ring-black focus:ring-offset-2"
          ></button>
          <button
            onClick={() => { changeTheme('#60A5FA'); onClose(); }}
            className="w-20 h-20 rounded-full bg-blue-400 focus:outline-none focus:ring-1 focus:ring-black focus:ring-offset-2"
          ></button>
          <button
            onClick={() => { changeTheme('#FBBF24'); onClose(); }}
            className="w-20 h-20 rounded-full bg-yellow-400 focus:outline-none focus:ring-1 focus:ring-black focus:ring-offset-2"
          ></button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Theme;