import LayoutMinimal from "."

export default {
  title: "Layouts",
  parameters: {
    layout: 'fullscreen',
  },
}

export const Minimal = () => (
  <LayoutMinimal>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Minimal Layout</h5>
        <p className="card-text">Used when user is not authenticated.</p>
      </div>
    </div>
  </LayoutMinimal>
)
