import { Button } from "antd";
import useBaseButton from "./BaseButtonHook";

const BaseButton = () => {
    const {} = useBaseButton();
    return <Button>Base Button</Button>;
};

export default BaseButton;
