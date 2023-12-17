import type { ReactNode } from "react"
import Header from "./Header"

type Props = {
  children: ReactNode
}

export const Hero = ({children}: Props) => {
  return (
    <div style={{background: "#E2E2E2"}}>
      <Header />
      {children}
    </div>
  )
}
