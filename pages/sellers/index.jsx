/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Breadcrumb, Card, Col, Image, Row } from "react-bootstrap";
import StarRatings from "react-star-ratings";
import { toast } from "react-toastify";
import Layout from "../../components/Layout/layout";
import axios from "../../utils/axios.interceptor";
import common from "../../utils/commonService";
const SellerPage = () => {
  const router = useRouter();
  const [sellerList, setSellerList] = useState([]);
  const [profileName, setProfileName] = useState("");

  useEffect(() => {
    getSellerItems();
  }, []);

  const getSellerItems = async () => {
    try {
      let resp = await axios.get("profile");
      if (resp.data && resp.data.data.length > 0) {
        setSellerList(resp.data.data);
      }
      console.log(resp.data);
    } catch (error) {
      console.log(error);
      toast.error("Fail");
    }
  };

  const onSellerClick = (item) => {
    sessionStorage.setItem("products", JSON.stringify(item));
    router.push("/sellers/" + item.id);
  };

  const onSearchProfileName = async () => {
    setSellerList([]);
    try {
      let resp = await axios.get(`profile/name?name=${profileName}`);
      if (resp.data) {
        setSellerList(resp.data);
      }
    } catch (error) {
      console.log(error);
      toast.error("Fail");
    }
  };

  return (
    <>
      <Layout title="Our Sellers">
        <div id="pageContainer" className="container">
          <Breadcrumb className="m-2">
            <Link href="/" passHref>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
            </Link>

            <Breadcrumb.Item active>Our Sellers</Breadcrumb.Item>
          </Breadcrumb>
          <Row>
            <Col lg={8} md={6}></Col>
            <Col md={6} lg={4}>
              <div className="input-group mb-3 mt-lg-0 ">
                <input
                  type="search"
                  className="form-control"
                  value={profileName}
                  onChange={(e) => setProfileName(e.target.value)}
                  aria-label="Dollar amount (with dot and two decimal places)"
                />
                <span className="input-group-text">
                  <i className="fas fa-search" style={{ cursor: "pointer" }} onClick={onSearchProfileName}></i>
                </span>
              </div>
            </Col>
          </Row>
          <Row>
            {sellerList.length > 0 &&
              sellerList.map((data, i) => {
                return (
                  <Col key={i} md={6} lg={4} className="mb-3">
                    <Card className="shadow-sm product-row">
                      <Card.Body className="p-0">
                        <Row>
                          <Col md={5}>
                            <div className="image-container">
                              <img
                                src={common.avatorUrl + data?.profileImage}
                                className="img-responsive-orderhistory w-100"
                                alt="dd"
                                onError={(e) => {
                                  e.currentTarget.src = "/img/avator/no-image-icon.jpg";
                                }}
                              />
                              <div className={["top-left bg-secondary"].join(" ")}>{data.products.length} Products</div>
                            </div>
                          </Col>
                          <Col md={7} className="pt-2">
                            <span className="d-flex fw-bold fs-6">{data?.name}</span>
                            <div className="d-flex mt-1">
                              <StarRatings
                                starDimension="14px"
                                rating={parseInt(data?.avgSellerRating) | 0}
                                starRatedColor="#311b92"
                                numberOfStars={5}
                                name="usertRating"
                              />
                            </div>
                            {/*
                            <div className="d-block mb-2">
                              <i className="fa fa-mobile-retro me-3"></i>{" "}
                              <Link href={"tel:" + data.phone}>{data.phone}</Link>
                            </div>
                            */}
                            <div className="d-block text-nowrap mt-2 small">
                              <i className="fa fa-envelope me-2"></i>
                              <Link href={"mailto:" + data.email} style>
                                <span>{data.email}</span>
                              </Link>
                            </div>
                            <div
                              className="d-block mt-4 float-end me-3 animate-i text-deep-purple-900"
                              style={{ cursor: "pointer" }}
                              onClick={(e) => {
                                onSellerClick(data);
                              }}
                            >
                              View Products{" "}
                              <span className="lefttoright">
                                <i className="fas fa-arrow-right"></i>
                              </span>
                            </div>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
          </Row>

          <Row>
            <Col md={4}>
              <Card
                className="p-0" style={{cursor: "pointer"}}
                onClick={() => {
                  router.push("/virtual-shop/mobile-shop");
                }}
              >
                <Card.Body>
                  <Row>
                    <Col md={2}>
                      <Image src={"/images/Mobile3.jpg"} alt="image" style={{ width: 60, height: 60, objectFit: "scale-down" }}></Image>
                    </Col>
                    <Col md={10} className="d-flex align-items-center">
                      <h5> Mobile Shop</h5>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card
                className="p-0" style={{cursor: "pointer"}}
                onClick={() => {
                  router.push("/virtual-shop/electronic-shop");
                }}
              >
                <Card.Body>
                  <Row>
                    <Col md={2}>
                      <Image src={"/images/Laptop.jpg"} alt="image" style={{ width: 60, height: 60, objectFit: "scale-down" }}></Image>
                    </Col>
                    <Col md={10} className="d-flex align-items-center">
                      <h5> Electronic Shop</h5>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card
                className="p-0" style={{cursor: "pointer"}}
                onClick={() => {
                  router.push("/virtual-shop/car-shop");
                }}
              >
                <Card.Body>
                  <Row>
                    <Col md={2}>
                      <Image src={"/images/Car2.jpg"} alt="image" style={{ width: 60, height: 60, objectFit: "scale-down" }}></Image>
                    </Col>
                    <Col md={10} className="d-flex align-items-center">
                      <h5> Car Shop</h5>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Layout>
    </>
  );
};

export default SellerPage;
