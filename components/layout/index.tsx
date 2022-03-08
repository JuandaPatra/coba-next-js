import { ReactNode } from "react";
import Header from "../header"
import Navibar from "../navbar";

interface LayoutProps{
    children : ReactNode
}
export default function Layout(props : LayoutProps) {
    const {children} = props;
  return (
    <div>
        <Navibar/>
        <Header />
        <div>
            {children}
        </div>

    </div>
  )
}


