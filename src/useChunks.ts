import React from "react"

const useChunks = <T>(arr: Array<T>, length: number) => {
  return React.useMemo(() => {
    const chunks: Array<Array<T>> = []
    const limit = arr.length

    let i = 0
    while (i < limit) {
      chunks.push(arr.slice(i, (i += length)))
    }

    return chunks
  }, [arr, length])
}

export default useChunks
