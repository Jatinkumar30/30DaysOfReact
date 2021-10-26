import React from "react"

let today = new Date()
let year = today.getFullYear()

function Footer(){
    return(
        <footer><p>{year}</p></footer>
    )
}

export default Footer;