import {useState} from 'react';
import Input from './Input';
import lockIcon from '../assets/login/lock.svg';
import eyeIcon from '../assets/login/eye.svg';

export default function PasswordInput(props) {
    const [visible, setVisible] = useState(false);
    return (
        <Input
            {...props}
            type={visible ? "text" : "password"}
            icon={lockIcon}
            trailing={
                <button
                    type="button"
                    onClick={() => setVisible(!visible)}
                    aria-label={visible ? `Hide ${props.label.toLowerCase()}` : `Show ${props.label.toLowerCase()}`}
                    aria-pressed={visible}
                    className={`shrink-0 rounded transition ${visible ? "opacity-100" : "opacity-80 hover:opacity-100"}`}
                >
                    <img src={eyeIcon} alt="" width="20" height="20" />
                </button>
            }
        />
    );
}
