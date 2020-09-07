import React, { useState } from "react";
import LayoutAsuransi from "../../layout/KategoriAsuransi";
import { useParams } from "react-router-dom";
import { Form, Select, Button, InputNumber, Input, Divider } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import NavDesktop from "../../components/NavDesktop";
const { Option } = Select;

function Pendidikan() {
  const { kategori } = useParams();

  const [usia, setUsia] = useState(0);
  const [pekerjaan, setPekerjaan] = useState([
    "Karyawan Swasta",
    "Pegawai Negeri Sipil",
  ]);
  const [selectedPekerjaan, setSelectedPekerjaan] = useState("");

  const onNameChange = (event) => {
    setSelectedPekerjaan(event.target.value);
  };

  const addItem = () => {
    setPekerjaan([...pekerjaan, selectedPekerjaan]);
    setSelectedPekerjaan("");
  };

  const setMinimumPendapatan = () => {
    return kategori === "regular" ? 3000000 : 5000000;
  };

  return (
    <React.Fragment>
      <NavDesktop />
      <LayoutAsuransi kategori={kategori} tipe="pendidikan">
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
          <Input
            addonBefore="+62"
            style={{ width: "100%" }}
            placeholder="82212345678"
          />
        </Form.Item>
        <Form.Item label="Usia">
          <Form.Item
            name={["user", "usia"]}
            rules={[{ required: true, type: "number", min: "3", max: "55" }]}
            label="Usia"
            noStyle
          >
            <InputNumber
              min="3"
              max="55"
              value={usia}
              onChange={(value) => {
                setUsia(value);
              }}
            />
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

        <Form.Item
          name={["user", "pekerjaan"]}
          label="Pekerjaan Orang Tua"
          rules={[{ required: true }]}
        >
          <Select
            style={{ width: 240 }}
            placeholder="Pilih Pekerjaan"
            dropdownRender={(menu) => (
              <div>
                {menu}
                <Divider style={{ margin: "4px 0" }} />
                <div
                  style={{ display: "flex", flexWrap: "nowrap", padding: 8 }}
                >
                  <Input
                    style={{ flex: "auto" }}
                    value={selectedPekerjaan}
                    onChange={onNameChange}
                    placeholder="Lainnya"
                  />
                  <Button
                    type="text"
                    style={{
                      flex: "none",
                      padding: "8px",
                      display: "block",
                      cursor: "pointer",
                    }}
                    onClick={addItem}
                  >
                    <PlusOutlined />
                    Tambah
                  </Button>
                </div>
              </div>
            )}
          >
            {pekerjaan.map((item) => (
              <Option key={item}>{item}</Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          name={["user", "pembayaran"]}
          label="Pembayaran"
          rules={[{ required: true }]}
        >
          <Select placeholder="Pilih salah satu" allowClear>
            <Option value="Orang Tua">Pendapatan Orang Tua</Option>
            {usia >= 22 && <Option value="Pribadi">Pendapatan Pribadi</Option>}
          </Select>
        </Form.Item>

        <Form.Item
          name={["user", "pendapatan"]}
          rules={[{ required: true, type: "number", min: "3", max: "55" }]}
          label="Pendapatan per bulan"
        >
          <InputNumber
            min={setMinimumPendapatan()}
            step="100000"
            formatter={(value) =>
              `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
            style={{ width: "40%" }}
          />
        </Form.Item>

        <Form.Item wrapperCol={{ span: 4, offset: 20 }}>
          <Button type="primary" htmlType="submit">
            Simpan
          </Button>
        </Form.Item>
      </LayoutAsuransi>
    </React.Fragment>
  );
}

export default Pendidikan;
