import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";

import { Form } from "antd";
import React, { useState } from "react";
import {
  DashboardOutlined,
  HeartOutlined,
  HomeOutlined,
  MobileOutlined,
  UnorderedListOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { Menu } from "antd";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        height: "100vh",
      }}
    >
      {/* <Header /> */}
      <div style={{ display: "flex", flexDirection: "row", flex: 1 }}>
        <SideMenu />
        <div
          style={{
            margin: "auto",
          }}
        >
          <Content />
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

function Home() {
  return <div>Home</div>;
}

// function Header() {
//   return (
//     <div
//       style={{
//         height: 60,
//         backgroundColor: "lightskyblue",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         fontSize: "20px",
//         fontWeight: "bold",
//       }}
//     >
//       Header
//     </div>
//   );
// }

// function Footer() {
//   return (
//     <div
//       style={{
//         height: 60,
//         backgroundColor: "lightgray",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         fontSize: "20px",
//         fontWeight: "bold",
//       }}
//     >
//       Footer
//     </div>
//   );
// }

function SideMenu() {
  const navigate = useNavigate();
  return (
    <Menu
      onClick={({ key }) => {
        navigate(key);
      }}
      defaultSelectedKeys={[window.location.pathname]}
      items={[
        {
          label: "Properties",
          key: "/",
          icon: <HomeOutlined />,
          children: [
            { label: "For Sale: House & Apartments", key: "/fs" },
            { label: "For Rent: House & Apartments", key: "/fr" },
          ],
        },
        {
          label: "Mobile",
          key: "/mobile",
          icon: <MobileOutlined />,
          children: [
            { label: "For Sale: House & Apartments", key: "/fs" },
            { label: "For Rent: House & Apartments", key: "/fr" },
          ],
        },
        {
          label: "Jobs",
          key: "/jobs",
          icon: <HeartOutlined />,
          children: [
            { label: "For Sale: House & Apartments", key: "/fs" },
            { label: "For Rent: House & Apartments", key: "/fr" },
          ],
        },
      ]}
    ></Menu>
  );
}

function Properties() {
  return <div>Properties</div>;
}
function Mobile() {
  return <div>Mobile</div>;
}
function Jobs() {
  return <div>Jobs</div>;
}

function ForRent() {
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div
      style={{
        border: "2px solid gray",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h3>Selected Category</h3>
      <Form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <label>Property Type*</label>
            <select>
              <option disabled>--select--</option>
              <option>select 1</option>
              <option>select 2</option>
              <option>select 3</option>
              <option>select 4</option>
            </select>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <label>Bedrooms</label>
            <input type="number" placeholder="0" />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <label>Bathrooms</label>
            <input type="number" placeholder="0" />
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <label>Construction Status</label>
            <select>
              <option disabled>--select--</option>
              <option>select 1</option>
              <option>select 2</option>
              <option>select 3</option>
              <option>select 4</option>
            </select>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <label>Furnishing</label>
            <select>
              <option disabled>--select--</option>
              <option>select 1</option>
              <option>select 2</option>
              <option>select 3</option>
              <option>select 4</option>
            </select>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <label>Listed By</label>
            <select>
              <option disabled>--select--</option>
              <option>select 1</option>
              <option>select 2</option>
              <option>select 3</option>
              <option>select 4</option>
            </select>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <label>Super Builtup Area</label>
            <input type="number" placeholder="0" />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <label>Carpet Area</label>
            <input type="number" placeholder="0" />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <label>Maintenance (Monthly)</label>
            <input type="number" placeholder="0" />
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <label>Total Floors</label>
            <input type="number" placeholder="0" />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <label>Floor No</label>
            <input type="number" placeholder="0" />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <label>Car Parking</label>
            <input type="number" placeholder="0" />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            <label>Facing</label>
            <select>
              <option disabled>--Select--</option>
              <option>East</option>
              <option>West</option>
              <option>North</option>
              <option>South</option>
            </select>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <label>Title*</label>
            <input type="text" placeholder="Name" />
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <label>Description</label>
            <textarea type="text" placeholder="Description" />
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <label>Set Price*</label>
            <input type="number" placeholder="1" />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <label>Security*</label>
            <input type="number" placeholder="1" />
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <label>Add Photo</label>
            <input type="file" onChange={handleChange} />
            <p>
              <img src={file} id="output" width="100" />
            </p>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <label>State* </label>
            <select>
              <option disabled>--select--</option>
              <option>select 1</option>
              <option>select 2</option>
              <option>select 3</option>
              <option>select 4</option>
            </select>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <label>City</label>
            <select>
              <option disabled>--select--</option>
              <option>select 1</option>
              <option>select 2</option>
              <option>select 3</option>
              <option>select 4</option>
            </select>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <label>Neighbourhood</label>
            <select>
              <option disabled>--select--</option>
              <option>select 1</option>
              <option>select 2</option>
              <option>select 3</option>
              <option>select 4</option>
            </select>
          </div>
        </div>

        <div>
          <button
            type="submit"
            style={{
              padding: "9px 100px",
              fontWeight: "bold",
              fontSize: "15px",

              background: "transparent",
              border: "2px solid brown",
              borderRadius: "5px",
            }}
          >
            Submit
          </button>
        </div>
      </Form>
    </div>
  );
}

function ForSale() {
  return <div>ForSale</div>;
}

function Content() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Properties />}></Route>
        <Route path="/activeUsers" element={<Mobile />}></Route>
        <Route path="/fr" element={<ForRent />}></Route>
        <Route path="/fs" element={<ForSale />}></Route>
        <Route path="/disabledUsers" element={<Jobs />}></Route>
      </Routes>
    </div>
  );
}

export default App;
