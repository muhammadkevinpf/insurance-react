import React from "react";
import LayoutAsuransi from "../../layout/KategoriAsuransi";
import { useParams } from "react-router-dom";
import { Form, InputNumber, Button } from "antd";
import Biodata from "../../components/Biodata";
import NavDesktop from "../../components/NavDesktop";

function Kesehatan() {
  const { kategori } = useParams();

  return (
    <React.Fragment>
      <NavDesktop />
      <LayoutAsuransi kategori={kategori} tipe="kesehatan">
        <Biodata />

        <Form.Item label="Lama Pengajuan">
          <Form.Item
            name={["user", "pengajuan"]}
            rules={[{ required: true, type: "number", min: "10", max: "20" }]}
            label="Lama Pengajuan"
            noStyle
          >
            <InputNumber min="10" max="20" />
          </Form.Item>
          <span> Tahun</span>
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

export default Kesehatan;
