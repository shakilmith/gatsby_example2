import * as React from "react"


const Layout =({children})=>{

    //styles
    const pageStyle={
    fontFamily:"Verdana, Geneva, Tahoma, sans-serif",

    padding: "20px 20px 60px",
      maxWidth: "680px",
      margin: "0 auto"
    


    }


    return(
        <div style={pageStyle}>
            {children}
        </div>
    )
}

export default Layout;