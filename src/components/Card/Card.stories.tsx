import { Card, CardBody, CardFooter, CardHeader, CardTitle } from "."

export default {
  title: "Components/Card",
}

export const Minimal = () => (
  <Card>
    <CardBody>This is some text within a card body</CardBody>
  </Card>
)

export const WithHeaderAndFooter = () => (
  <Card>
    <CardHeader>
      <CardTitle>Card Title</CardTitle>
    </CardHeader>
    <CardBody>This is some text within a card body</CardBody>
    <CardFooter>Card Footer</CardFooter>
  </Card>
)