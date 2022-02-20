import Icon from "."

export default {
  title: "Components/Icon",
}

export const Regular = () => <Icon name="far fa-address-card" />

export const Solid = () => <Icon name="fas fa-address-card" />

export const FixedWidth = () => (
  <>
    <Icon name="fas fa-address-card" fixedWidth />
    <br />
    <Icon name="far fa-lemon" fixedWidth />
    <br />
    <Icon name="far fa-square-check" fixedWidth />
    <br />
    <Icon name="fas fa-bandage" fixedWidth />
  </>
)
