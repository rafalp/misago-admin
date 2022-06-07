import { Card, CardBody, CardFooter, CardHeader, CardList, CardListItem, CardTitle } from "."

export default {
  title: "Components/Card",
}

export const BasicStory = () => (
  <Card>
    <CardBody>This is some text within a card body</CardBody>
  </Card>
)
BasicStory.storyName = "Basic"

export const WithHeaderAndFooterStory = () => (
  <Card>
    <CardHeader>
      <CardTitle>Card Title</CardTitle>
    </CardHeader>
    <CardBody>This is some text within a card body</CardBody>
    <CardFooter>Card Footer</CardFooter>
  </Card>
)
WithHeaderAndFooterStory.storyName = "Header and Footer"

export const ListStory = () => (
  <Card>
    <CardList>
      <CardListItem>Lorem ipsum</CardListItem>
      <CardListItem>Dolor met</CardListItem>
      <CardListItem>Sit amet</CardListItem>
    </CardList>
  </Card>
)
ListStory.storyName = "List"

export const HeaderFooterListStory = () => (
  <Card>
    <CardHeader>
      <CardTitle>Card Title</CardTitle>
    </CardHeader>
    <CardList>
      <CardListItem>Lorem ipsum</CardListItem>
      <CardListItem>Dolor met</CardListItem>
      <CardListItem>Sit amet</CardListItem>
    </CardList>
    <CardFooter>Card Footer</CardFooter>
  </Card>
)
HeaderFooterListStory.storyName = "List with Header and Footer"