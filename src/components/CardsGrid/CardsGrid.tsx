import React from "react"
import useChunks from "../../useChunks"

type CardsGridProps = {
  items: Array<React.ReactNode>
}

const CardsGrid: React.FC<CardsGridProps> = ({ items }) => {
  const rows = useChunks(items, 2)
  return (
    <div className="cards-grid">
      {rows.map((row, r) => (
        <div className="row align-items-stretch" key={r}>
          {row.map((item, i) => (
            <div className="col-12 col-lg-6 mb-4" key={i}>
              {item}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default CardsGrid
