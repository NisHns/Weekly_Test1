import React, { useState } from 'react';
import Options from './Options';
import { MdContentCopy } from 'react-icons/md';
import './App.css';

const Passgenerator = () => {
    const [password, setPassword] = useState('');
    const [Uppcase, setUppcase] = useState(false);
    const [Lowcase, setLowcase] = useState(false);
    const [num, setnum] = useState(false);
    const [Symbols, setSymbols] = useState(false);

    const generatePassword = () => {
        const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
        const numberChars = '0123456789';
        const symbolChars = '!@#$%^&*()-_=+[]{}|;:",.<>?/';

        let x = '';

        if (Uppcase) x += uppercaseChars;
        if (Lowcase) x += lowercaseChars;
        if (num) x += numberChars;
        if (Symbols) x += symbolChars;

        if (x === '') {
            alert('Please select at least one option.');
            return;
        }

        let genpass = '';
        const length = 12;

        for (let i = 0; i < length; i++) {
            const idx = Math.floor(Math.random() * x.length);
            genpass += x[idx];
        }
        setPassword(genpass);
    };

    const copyclip = () => {
        const passs = document.getElementById('passs');

        if (passs) {
            passs.select();
            document.exeCommand('copy');
            alert('Password copied to clipboard!');
        }
    };

    return (
        <div>
            <div className='top'>
                <h1>Password Generator</h1>
                <Options
                    label="Include Upper Case"
                    checked={Uppcase}
                    onChange={() => setUppcase(!Uppcase)}
                />
                <Options
                    label="Include Lower Case"
                    checked={Lowcase}
                    onChange={() => setLowcase(!Lowcase)}
                />
                <Options
                    label="Include Numbers"
                    checked={num}
                    onChange={() => setnum(!num)}
                />
                <Options
                    label="Include Symbols"
                    checked={Symbols}
                    onChange={() => setSymbols(!Symbols)}
                />
            </div>
            <button className='box' onClick={generatePassword}>Generate Password</button>
            <div className='pass'>
                <strong>Password:</strong>
                <input id="passs" type="text" value={password} readOnly />
                {password && (
                    <button onClick={copyclip}>
                        <MdContentCopy />
                    </button>
                )}
            </div>
        </div>
    );
};

export default Passgenerator;