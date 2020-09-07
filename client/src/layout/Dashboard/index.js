import React, { useEffect } from "react";
import { connect } from "react-redux";
import NavDesktop from "../../components/NavDesktop";
import { Table } from "antd";
import { getProducts } from "../../redux/actions/productAction";
import { rupiahFormatter } from "../../util/insurance";
export const Dashboard = ({ product: { products }, getProducts, kategori }) => {
  useEffect(() => {
    async function fetchProduct() {
      await getProducts(kategori);
    }
    fetchProduct();
  }, [getProducts, kategori]);

  const columns = [
    { title: "Nama", dataIndex: "nama", key: "nama" },
    { title: "Jenis Kelamin", dataIndex: "gender", key: "gender" },
    { title: "Program", dataIndex: "kategori", key: "kategori" },
  ];

  for (let i = 0; i < products.length; i++) {
    products[i].key = i;
  }

  const data = products;

  const markUpExpand = (kategori, record) =>
    kategori === "kesehatan" ? (
      <p>
        <strong>Lama Pengajuan: </strong>
        <span>{record.pengajuan}</span>
      </p>
    ) : (
      <>
        <p>
          <strong>Pekerjaan Orang tua: </strong>
          <span>{record.pekerjaan}</span>
        </p>
        <p>
          <strong>Sumber Pembayaran: </strong>
          <span>{record.pembayaran}</span>
        </p>
        <p>
          <strong>Besar Pendapatan: </strong>
          <span>{rupiahFormatter(record.pendapatan)}</span>
        </p>
      </>
    );
  return (
    <>
      <NavDesktop />
      <div className="dashboard-wrapper">
        <h3 style={{ textAlign: "center", textTransform: "capitalize" }}>
          Data Peserta {kategori}
        </h3>
        <Table
          columns={columns}
          expandable={{
            expandedRowRender: (record) => (
              <>
                <p>
                  <strong>Usia: </strong>
                  <span>{record.usia}</span>
                </p>
                <p>
                  <strong>Alamat: </strong>
                  <span>{record.alamat}</span>
                </p>
                <p>
                  <strong>Email: </strong>
                  <span>{record.email}</span>
                </p>
                {markUpExpand(kategori, record)}
              </>
            ),
          }}
          dataSource={data}
        />
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  product: state.product,
});

const mapDispatchToProps = {
  getProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
