import React, { Fragment } from "react";
import { Form, Input, InputNumber, Select } from "antd";

const { Option } = Select;

function Biodata() {
  return (
    <Fragment>
      <Form.Item
        name={["user", "nama"]}
        label="Nama Lengkap"
        rules={[{ required: true }]}
      >
        <Input autoFocus autoComplete="off" />
      </Form.Item>
      <Form.Item
        name={["user", "telepon"]}
        label="Nomor Telepon"
        rules={[{ required: true, message: "Nomor Telepon harap diisi" }]}
      >
        <Input addonBefore="+62" placeholder="82212345678" />
      </Form.Item>
      <Form.Item label="Usia">
        <Form.Item
          name={["user", "usia"]}
          rules={[{ required: true, type: "number", min: "3", max: "80" }]}
          label="Usia"
          noStyle
        >
          <InputNumber min="3" max="55" />
        </Form.Item>
        <span> Tahun</span>
      </Form.Item>
      <Form.Item
        name={["user", "gender"]}
        label="Jenis Kelamin"
        rules={[{ required: true, message: "Jenis Kelamin harap diisi" }]}
      >
        <Select placeholder="Pilih salah satu" allowClear>
          <Option value="Laki-Laki">Laki-Laki</Option>
          <Option value="Perempuan">Perempuan</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name={["user", "email"]}
        label="E-mail"
        rules={[{ required: true, type: "email" }]}
      >
        <Input placeholder="abcd@mail.com" />
      </Form.Item>
      <Form.Item
        name={["user", "alamat"]}
        label="Alamat"
        rules={[{ required: true }]}
      >
        <Input.TextArea />
      </Form.Item>
    </Fragment>
  );
}

export default Biodata;
