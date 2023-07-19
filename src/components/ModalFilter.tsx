import React, { Dispatch, SetStateAction, useState } from 'react';
import { Divider, Form, Modal, Select } from 'antd';
import BaseButton from './BaseButton';

interface HeaderProps {
  isModalOpen: boolean,
  setIsModalOpen: Dispatch<SetStateAction<boolean>>
}

const ModalFilter = ({isModalOpen, setIsModalOpen}: HeaderProps) => {
  const onFinish = (value: any) => {
    console.log(value)
    setIsModalOpen(false);
  }

  const handleChangePackage = () => {}
  const handleChangeTime = () => {}


  return (
    <>
      <Modal title={<p className='text-center text-2xl text-black font-bold font-nunito'>BỘ LỌC</p>} open={isModalOpen} closeIcon={false} footer={null}>
      <Divider />
        <Form name="filter"  onFinish={onFinish}>
        <Form.Item
          label="Loại gói cước"
          name="package" 
        >
        <Select
          defaultValue="entertainment"
          style={{ width: "100%" }}
          onChange={handleChangePackage}
          options={[
            { value: 'entertainment', label: 'Giải trí' },
            { value: 'game', label: 'Chơi game' },
            { value: 'surfing', label: 'Lướt Web' },
            { value: 'music', label: 'Nghe nhạc' },
          ]}
        />
        </Form.Item>
        <Form.Item
          label="Thời gian sử dụng"
          name="time" 
        >
        <Select
          defaultValue="day"
          style={{ width: "100%" }}
          onChange={handleChangeTime}
          options={[
            { value: 'hour', label: '1 Giờ' },
            { value: 'day', label: '1 Ngày' },
            { value: 'week', label: '1 Tuần' },
            { value: 'month', label: '1 Tháng' },
          ]}
        />
        </Form.Item>
        <Form.Item
          label="Sắp xếp theo"
          name="order" 
        >
        <Select
          defaultValue="asc"
          style={{ width: "100%" }}
          onChange={handleChangeTime}
          options={[
            { value: 'asc', label: 'Giá tăng dần' },
            { value: 'desc', label: 'Giá giảm dần' },
          ]}
        />
        </Form.Item>
        <div className='flex justify-between'>
          <BaseButton text="Đóng" close={true}/>
          <BaseButton text="Đăng ký" close={false}/>
        </div>
        </Form>
      </Modal>
    </>
  );
};

export default ModalFilter;