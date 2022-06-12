import React from "react"
import { Link } from "react-router-dom"
import { Card, CardBody } from "../../components/Card"
import Stamp from "../../components/Stamp"
import { Col, Row } from "../../grid"
import { SettingsGroup } from "../../types"

const SettingsGridItem: React.FC<SettingsGroup> = ({
  icon,
  color,
  link,
  name,
  description,
}) => (
  <Card>
    <CardBody>
      <Link className="card-fill-link" to={link}>
        <Row spacing="half">
          <Col>
            <Stamp color={color} icon={icon} />
          </Col>
          <Col width="max">
            <h5 className="item-title">{name}</h5>
            {description && <p className="item-description">{description}</p>}
          </Col>
        </Row>
      </Link>
    </CardBody>
  </Card>
)

export default SettingsGridItem
