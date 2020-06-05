import React, { ChangeEvent } from "react"
import "./search-box.styles.css"

export const SearchBox = ({
  placeholder,
  handleChange,
}: {
  placeholder: string
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}) => {
  return <input className="search" type="search" placeholder={placeholder} onChange={handleChange} />
}
