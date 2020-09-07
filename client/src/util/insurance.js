import React from "react";
import { Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

import HealthImage from "../assets/image/health.svg";
import EducationImage from "../assets/image/learning.svg";

const { confirm } = Modal;

export const insuranceCategory = [
  {
    name: "Kesehatan",
    image: HealthImage,
    category: [
      {
        title: "Regular",
        price: 300000,
        benefit: ["Fasilitas Kelas 1", "1 Ruangan 2 Tempat Tidur"],
        link: "kesehatan/regular",
      },
      {
        title: "Premium",
        price: 500000,
        benefit: ["Fasilitas Kelas 1", "1 Ruangan 1 Tempat Tidur"],
        link: "kesehatan/premium",
      },
      {
        title: "VIP",
        price: 1000000,
        benefit: ["Fasilitas VIP di Rumah Sakit manapun"],
        link: "kesehatan/vip",
      },
    ],
  },
  {
    name: "Pendidikan",
    image: EducationImage,
    category: [
      {
        title: "regular",
        price: 500000,
        benefit: ["Pendidikan Terlindungi hingga SMA"],
        link: "pendidikan/regular",
      },
      {
        title: "premium",
        price: 1000000,
        benefit: ["Pendidikan Terlindungi hingga S2"],
        link: "pendidikan/premium",
      },
    ],
  },
];

export const rupiahFormatter = (item) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  })
    .format(item)
    .slice(0, -3);
};

const kategoriPendidikan = (kategori) => {
  return kategori === "regular" ? 3000000 : 5000000;
};

const showCancel = (kategori) => {
  Modal.error({
    title: "Proses Terhenti",
    content: `Dibutuhkan pendapatan minimal ${rupiahFormatter(
      kategoriPendidikan(kategori)
    )} untuk mendaftar produk ini`,
  });
};

export const showConfirm = (kategori) => {
  confirm({
    title: `Pendidikan - ${kategori}`,
    icon: <ExclamationCircleOutlined />,
    content: `Apakah pendapatan anda / orang tua lebih dari ${rupiahFormatter(
      kategoriPendidikan(kategori)
    )} ?`,
    onOk() {
      window.location.href = `/pendidikan/${kategori}`;
    },
    onCancel() {
      showCancel(kategori);
    },
    cancelText: "Tidak",
    okText: "Ya",
  });
};
