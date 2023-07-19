import { Button } from "antd";
import '@/assets/scss/baseButton.scss'
const BaseButton = ({text, close}: {text: string, close: boolean}) => {
    return <Button className={`base-button ${close ? 'close' : 'submit'}`}>{text}</Button>;
};

export default BaseButton;
