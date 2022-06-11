import React from "react"
import AttrsList from "../../components/AttrsList"
import { CardList, CardListItem } from "../../components/Card"
import { SkeletonSentence, SkeletonText } from "../../components/Skeleton"
import Stamp from "../../components/Stamp"
import { Col, Row } from "../../grid"

const PluginsLoading: React.FC = () => (
  <CardList>
    <CardListItem>
      <Row spacing="half">
        <Col>
          <Stamp color="#457b9d" icon="fas fa-cube" />
        </Col>
        <Col width="max">
          <Row spacing="quarter">
            <Col width="max">
              <div className="text-title">
                <SkeletonSentence words={[100, 80]} />
              </div>
              <div className="text-muted">
                <small>
                  <SkeletonSentence words={[70, 110, 80]} />
                </small>
              </div>
            </Col>
          </Row>
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
    </CardListItem>
    <CardListItem>
      <Row spacing="half">
        <Col>
          <Stamp color="#2d6a4f" icon="fas fa-cube" />
        </Col>
        <Col width="max">
          <Row spacing="quarter">
            <Col width="max">
              <div className="text-title">
                <SkeletonSentence words={[60, 120]} />
              </div>
              <div className="text-muted">
                <small>
                  <SkeletonSentence words={[50, 100, 30, 80]} />
                </small>
              </div>
            </Col>
          </Row>
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
    </CardListItem>
  </CardList>
)

export default PluginsLoading
