import CenteredLayout from "."

export default {
  title: "Layouts",
}

export const Centered = () => (
  <CenteredLayout>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Centered Layout</h5>
        <p className="card-text">This card is vertically centered.</p>
      </div>
    </div>
  </CenteredLayout>
)
