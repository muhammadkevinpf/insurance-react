import React from "react";
import { Form, Modal } from "antd";
import { connect } from "react-redux";
import { orderProduct } from "../../redux/actions/productAction";

import "./style.scss";
const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};

const validateMessages = {
  // eslint-disable-next-line
  required: "${label} harap diisi",
  types: {
    // eslint-disable-next-line
    email: "${label} tidak valid! ex: abcdefg@gmail.com",
    // eslint-disable-next-line
    number: "${label} tidak valid!",
    // eslint-disable-next-line
    phone: "${label} tidak valid!",
  },
  number: {
    // eslint-disable-next-line
    range: "${label} minimal ${min} Tahun",
  },
};

function KategoriAsuransi({ children, kategori, tipe, orderProduct }) {
  const onFinish = (values) => {
    let detailOrder;
    if (tipe === "kesehatan") {
      detailOrder = {
        ...values.user,
        pengajuan: values.user.pengajuan + " Tahun",
        usia: values.user.usia + " Tahun",
        kategori,
      };
    } else {
      detailOrder = {
        ...values.user,
        usia: values.user.usia + " Tahun",
        kategori,
      };
    }

    showModal();
    orderProduct(tipe, detailOrder);
  };

  const showModal = () => {
    Modal.success({
      title: "Registrasi Berhasil",
      content:
        "Terima kasih telah menggunakan produk kami, Tim kami akan menghubungi Anda dalam waktu dekat",
      onOk() {
        setTimeout(() => {
          window.location.href = "/";
        }, 500);
      },
    });
  };

  return (
    <div className="wrapper">
      <div className="kesehatan-container">
        <h1>
          {tipe} - {kategori}
        </h1>
        <p>
          Silahkan isi Data Diri dibawah untuk melanjutkan proses pendaftaran
          Asuransi Anda.
        </p>
      </div>
      <div className="form-container">
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
          className="form-biodata"
        >
          <h3>Data Diri Tertanggung</h3>
          {children}
        </Form>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  product: state.product,
});

export default connect(mapStateToProps, { orderProduct })(KategoriAsuransi);
