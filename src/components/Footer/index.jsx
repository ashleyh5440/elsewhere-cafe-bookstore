// import footerLogo from '../../../public/images/footer-logo.png';

function Footer() {
    return(
        <section>
            <div style={{backgroundColor: "rgb(7, 64, 7)", height: "50px", textAlign: "center", padding: "1%", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center"}}>
                <p>Designed and developed by <a href="https://ashleycreates.org/" target="_blank">ashleycreates.org</a></p>
                {/* <img src={footerLogo} style={{width: "35px", height:"15px", marginLeft: "10px"}}/> */}
            </div>
        </section>
    )
}

export default Footer;