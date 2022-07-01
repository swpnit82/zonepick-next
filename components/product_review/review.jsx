import { Button, Card, Col, Row } from "react-bootstrap";
import StarRatings from "react-star-ratings";
import common from "../../services/commonService";
const Review = ({ comments = [] }) => {
 // console.log(comments);

  const calculateRating = (data) => {
    const ProductRating = parseInt(data.ProductRating);
    const ProductDeliveryRating = parseInt(data.ProductDeliveryRating);
    const ProductQualityRating = parseInt(data.ProductQualityRating);
    const ProductPackagingRating = parseInt(data.ProductPackagingRating);
    const SellerRating = parseInt(data.SellerRating);
    const SellerCommunicationRating = parseInt(data.SellerCommunicationRating);

    const ovarall =
      (ProductRating + ProductDeliveryRating + ProductQualityRating + ProductPackagingRating + SellerRating + SellerCommunicationRating) / 6;

    return parseInt(ovarall);
  };

  return (
    <>
      <Row className="mt-2">
        <Col>
          <Card className="shadow-sm">
            <Card.Header className="border-bottom-0 bg-transparent">
              <Card.Title className="fs-5">
                <span className="border-bottom border-deep-purple-900 border-2">Review(s)</span>
              </Card.Title>
            </Card.Header>
            <Card.Body>
              {comments.length > 0 &&
                comments.map((data, i) => {
                  return (
                    <Card key={i} className="mb-4 shadow-sm border-0">
                      <Card.Body>
                        <Row>
                          <Col md={9}>
                            <span className="fs-6 fw-bold">{data.reviewerName}</span>
                            <small className="d-block text-muted">{common.DateFromTimeStampTime(data.createdAt)}</small>
                          </Col>
                          <Col md={3}>
                            <StarRatings
                              starDimension="17px"
                              rating={calculateRating(data) | 0}
                              starRatedColor="#311b92"
                              numberOfStars={5}
                              name="usertRating"
                            />
                          </Col>
                        </Row>
                        <Row className="mt-3 ms-md-2 mb-2">
                          <Col className="text-blue-gray-800">{data.remarks}</Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  );
                })}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Review;