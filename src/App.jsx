import { useCallback, useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export function App() {
  let [length, setLength] = useState(8);
  let [numberAllowed, setNumberAllowed] = useState(false);
  let [characterAllowed, setCharactersAllowed] = useState(false);
  let [password, setPassword] = useState('');

  let passwordGenerator = useCallback(
    function () {
      let pass = '';
      let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
      if (numberAllowed) str += '1234567890';
      if (characterAllowed) str += '!@#$%^&*()_+|";:?/>.<,`~]}[{=-';

      for (let i = 1; i <= array.length; i++) {
        let char = Math.floor(Math.random() * str.length + 1);
        pass = str.charAt(char);
      }
      setPassword(pass);
    },
    [length, numberAllowed, characterAllowed, setPassword]
  );

  return (
    <div className='font-[Roboto] min-h-screen w-full flex flex-col items-center justify-center bg-neutral-900 text-neutral-50'>
      <Toaster />
      <h1 className='text-center text-2xl font-bold tracking-widest'>
        Random Password Generator
      </h1>

      <div className='w-110 shadow-sm shadow-white rounded-sm m-5 flex items-center justify-center h-18 overflow-hidden'>
        <input
          readOnly
          type='text'
          value={password}
          placeholder='Password Generated Here'
          className='flex min-w-80 text-white p-5 text-lg h-full w-full focus:outline-none tracking-wide'
        />
        <button
          onClick={() => toast.success('Password Copied to Clipboard')}
          className='w-30 h-full hover:bg-neutral-200 hover:text-black font-semibold transition-all duration-200 cursor-pointer tracking-wide'>
          Copy
        </button>
      </div>

      <div className='flex items-center justify-center mt-2 h-20 shadow-xs gap-x-5'>
        <label
          htmlFor='length'
          className='flex items-center justify-center tracking-wide gap-3'>
          <input
            id='length'
            type='range'
            min={6}
            max={100}
            value={length}
            class='w-full h-2 rounded-lg cursor-pointer accent-gray-400'
            onChange={e => {
              setLength(e.target.value);
            }}
          />
          Length : {length}
        </label>

        <label
          htmlFor='numberAllowed'
          className='flex items-center justify-center gap-1.5 tracking-wide'>
          <input
            id='numberAllowed'
            type='checkbox'
            value={numberAllowed}
            class='size-5 cursor-pointer accent-gray-300'
          />
          Numbers
        </label>

        <label
          htmlFor='characterAllowed'
          className='flex items-center justify-center gap-1.5 tracking-wide'>
          <input
            id='characterAllowed'
            type='checkbox'
            value={characterAllowed}
            class='size-5 cursor-pointer accent-gray-300'
          />
          CharactersAllowed
        </label>
      </div>
    </div>
  );
}
