import React from "react";
import LayoutAsuransi from "../../layout/KategoriAsuransi";
import { useParams } from "react-router-dom";
import { Form, InputNumber, Button } from "antd";
import Biodata from "../../components/Biodata";

function Kesehatan() {
  const { kategori } = useParams();

  // const markUpBiaya = () => {
  //   if (kategori === "regular") {
  //     return rupiahFormatter(300000);
  //   } else if (kategori === "premium") {
  //     return rupiahFormatter(500000);
  //   } else {
  //     return rupiahFormatter(1000000);
  //   }
  // };

  return (
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
  );
}

export default Kesehatan;
