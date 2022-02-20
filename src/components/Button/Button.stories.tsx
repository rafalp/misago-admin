import { ButtonDanger, ButtonLight, ButtonPrimary, ButtonSuccess } from "."

export default {
  title: "Components/Button",
}

const Template = {
  children: "Button",
  disabled: false,
  small: false,
  spinner: false,
}

export const Danger = (args: typeof Template) => <ButtonDanger {...args} />
Danger.args = { ...Template, children: "Danger button" }

export const Light = (args: typeof Template) => <ButtonLight {...args} />
Light.args = { ...Template, children: "Light button" }

export const Primary = (args: typeof Template) => <ButtonPrimary {...args} />
Primary.args = { ...Template, children: "Primary button" }

export const Success = (args: typeof Template) => <ButtonSuccess {...args} />
Success.args = { ...Template, children: "Success button" }

export const WithIcon = (args: typeof Template) => (
  <ButtonPrimary icon="far fa-message" {...args} />
)
WithIcon.args = { ...Template, children: "With icon" }
