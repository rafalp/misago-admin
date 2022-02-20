import { Card, CardBody, CardFooter, CardHeader } from "."

export default {
  title: "Components/Card",
}

export const WithHeaderAndFooter = () => (
  <Card>
    <CardHeader>Card Title</CardHeader>
    <CardBody>This is some text within a card body</CardBody>
    <CardFooter>Card Footer</CardFooter>
  </Card>
)

export const Minimal = () => (
  <Card>
    <CardBody>This is some text within a card body</CardBody>
  </Card>
)
