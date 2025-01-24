import { CSSProperties } from "react";

const navbarStyle: CSSProperties = {
    display: 'flex', 
    justifyContent: 'space-around', 
    padding: 10,
}

const itemStyle = (withBorder: boolean = true): CSSProperties => {
    return {
    flex: 1,
    textAlign: 'center',
    borderRight: withBorder ? '1px solid black' : 'none',
    }
}



export { navbarStyle, itemStyle };