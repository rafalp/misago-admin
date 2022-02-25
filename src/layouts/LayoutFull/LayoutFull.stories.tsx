import LayoutFull from "."

export default {
  title: "Layouts",
  parameters: {
    layout: 'fullscreen',
  },
}

export const Full = () => (
  <LayoutFull>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Full Layout</h5>
        <p className="card-text">Used for authenticated users.</p>
      </div>
    </div>
  </LayoutFull>
)
