import React, { Dispatch, SetStateAction, useState } from "react";
import { Divider, Form, Input, Modal } from "antd";
import BaseButton from "./BaseButton";
import { Checkbox } from "antd";
interface HeaderProps {
    isModalOpen: boolean;
    setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

const ModalRegisterPackage = ({ isModalOpen, setIsModalOpen }: HeaderProps) => {
    const onFinish = (value: any) => {
        console.log("value: ", value);
        // setIsModalOpen(false);
    };
    const [donate, setDonate] = useState(false);

    // const handleChangePackage = () => {};
    const handleDonate = () => {
        setDonate(!donate);
    };
    const handleClickButton = () => {
        setIsModalOpen(false);
    };
    const handleClickButtonSubmit = () => {};

    return (
        <>
            <Modal
                title={
                    <p className="text-center text-2xl text-black font-bold font-nunito">ĐĂNG KÝ</p>
                }
                open={isModalOpen}
                closeIcon={false}
                footer={null}
            >
                <Divider />
                <Form name="filter" onFinish={onFinish} layout="vertical">
                    <Form.Item name="package">
                        <Checkbox
                            className="font-base font-normal text-black"
                            onChange={handleDonate}
                        >
                            Gửi tặng gói cước
                        </Checkbox>
                    </Form.Item>
                    {donate ? (
                        <>
                            <Form.Item label="Số điện thoại người gửi tặng" name="time">
                                <Input style={{ width: "100%" }} />
                            </Form.Item>
                            <Form.Item label="Số điện thoại người nhận" name="time">
                                <Input style={{ width: "100%" }} />
                            </Form.Item>
                        </>
                    ) : (
                        <Form.Item
                            label="Số điện thoại đăng ký gói cước"
                            name="myPhone"
                            rules={[
                                {
                                    required: true,
                                    message: "Số điện không được để trống",
                                },
                            ]}
                        >
                            <Input style={{ width: "100%" }} />
                        </Form.Item>
                    )}

                    <div className="flex justify-between gap-7.5">
                        <BaseButton
                            text="ĐÓNG"
                            close={true}
                            handleClickButton={handleClickButton}
                        />
                        <BaseButton
                            text="LỌC"
                            close={false}
                            handleClickButton={handleClickButtonSubmit}
                        />
                    </div>
                </Form>
            </Modal>
        </>
    );
};

export default ModalRegisterPackage;
