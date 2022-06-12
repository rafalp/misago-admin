import React from "react"
import AttrsList from "../../components/AttrsList"
import { Card, CardBody, CardFooter } from "../../components/Card"
import CardsGrid from "../../components/CardsGrid"
import Icon from "../../components/Icon"
import { SkeletonSentence, SkeletonText } from "../../components/Skeleton"
import Stamp from "../../components/Stamp"
import { Col, Row } from "../../grid"

const PluginsLoading: React.FC = () => (
  <CardsGrid
    items={[
      <Card>
        <CardBody>
          <Row spacing="half">
            <Col>
              <Stamp color="#9b59b6" icon="fas fa-cube" />
            </Col>
            <Col width="max">
              <h5 className="item-title">
                <SkeletonSentence words={[100, 80]} />
              </h5>
              <p className="item-description">
                <SkeletonSentence words={[70, 110, 80]} />
              </p>
              <AttrsList
                items={[
                  {
                    icon: "far fa-folder",
                    text: <SkeletonText width={90} />,
                  },
                  {
                    icon: "fas fa-code",
                    text: <SkeletonText width={30} />,
                  },
                  {
                    icon: "fas fa-medal",
                    text: <SkeletonText width={40} />,
                  },
                  {
                    icon: "far fa-user",
                    text: <SkeletonSentence words={[70, 80]} />,
                  },
                ]}
              />
            </Col>
          </Row>
        </CardBody>
        <CardFooter>
          <Row>
            <div className="col-12 col-md-6">
              <div className="btn btn-light btn-sm has-text w-100 text-truncate">
                <Icon name="fas fa-link" />
                <SkeletonText width={90} />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="btn btn-light btn-sm has-text w-100 text-truncate">
                <Icon name="fas fa-code-branch" />
                <SkeletonText width={100} />
              </div>
            </div>
          </Row>
        </CardFooter>
      </Card>,
      <Card>
        <CardBody>
          <Row spacing="half">
            <Col>
              <Stamp color="#2ecc71" icon="fas fa-cube" />
            </Col>
            <Col width="max">
              <h5 className="item-title">
                <SkeletonSentence words={[60, 120]} />
              </h5>
              <p className="item-description">
                <SkeletonSentence words={[100, 50, 30, 80]} />
              </p>
              <AttrsList
                items={[
                  {
                    icon: "far fa-folder",
                    text: <SkeletonText width={80} />,
                  },
                  {
                    icon: "fas fa-code",
                    text: <SkeletonText width={40} />,
                  },
                  {
                    icon: "fas fa-medal",
                    text: <SkeletonText width={30} />,
                  },
                  {
                    icon: "far fa-user",
                    text: <SkeletonSentence words={[90, 60]} />,
                  },
                ]}
              />
            </Col>
          </Row>
        </CardBody>
        <CardFooter>
          <Row>
            <div className="col-12 col-md-6">
              <div className="btn btn-light btn-sm has-text w-100 text-truncate">
                <Icon name="fas fa-link" />
                <SkeletonText width={100} />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="btn btn-light btn-sm has-text w-100 text-truncate">
                <Icon name="fas fa-code-branch" />
                <SkeletonText width={80} />
              </div>
            </div>
          </Row>
        </CardFooter>
      </Card>,
    ]}
  />
)

export default PluginsLoading
