import { Button } from "antd";
import '@/assets/scss/baseButton.scss'
const BaseButton = ({text, close, handleClickButton}: {text: string, close: boolean, handleClickButton: any}) => {
    return <Button htmlType={`${close ? 'button' : 'submit'}`} className={`base-button ${close ? 'close' : 'submit'}`} onClick={handleClickButton}>{text}</Button>;
};

export default BaseButton;
