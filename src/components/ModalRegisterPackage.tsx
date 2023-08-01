
import React, { Dispatch, SetStateAction, useState } from "react";
import { Divider, Form, Input, Modal } from "antd";
import BaseButton from "./BaseButton";
import { Checkbox } from "antd";
import { ModalRegister } from "@/constants";
interface HeaderProps {
    popupRegister: ModalRegister;
    setPopupRegister: Dispatch<SetStateAction< ModalRegister>>;
}

const ModalRegisterPackage = ({ popupRegister, setPopupRegister }: HeaderProps) => {
    const [donate, setDonate] = useState(false);

    /* @typescript-eslint/no-explicit-any */
    const phoneValidator = (a: any, value: string) => {
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(value) && value) {
          return Promise.reject("Số thuê bao không hợp lệ");
        }
        return Promise.resolve();
      };
    
    const onFinish = (value: any) => {
        
        phoneValidator(null, value?.myPhone);
        // setPopupRegister(false);
    };
   

    const handleDonate = () => {
        setDonate(!donate);
    };
    const handleClickButton = () => {
        setPopupRegister({
            status: false
        });
    };
    const handleClickButtonSubmit = () => {};

   

    return (
        <>
            <Modal
                title={
                    <p className="text-center text-2xl text-black font-bold font-nunito">ĐĂNG KÝ</p>
                }
                open={popupRegister?.status}
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
                            <Form.Item 
                                label="Số điện thoại người gửi tặng" 
                                name="sender"  
                                rules={[
                                {
                                    required: true,
                                    message: "Số điện không được để trống",
                                },
                                { validator: phoneValidator, validateTrigger: "unKnown" },
                            ]}>
                                <Input style={{ width: "100%" }} />
                            </Form.Item>
                            <Form.Item 
                                label="Số điện thoại người nhận" 
                                name="receiver"  
                                rules={[
                                {
                                    required: true,
                                    message: "Số điện không được để trống",
                                },
                                { validator: phoneValidator, validateTrigger: "unKnown" },
                            ]}>
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
                                { validator: phoneValidator, validateTrigger: "unKnown" },
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
                            text="ĐĂNG KÝ"
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
