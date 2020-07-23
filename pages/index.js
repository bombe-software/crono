function Home(props) {
    return (
        <div className="landing">
            <div className="ui fluid image contenedor">
                <img className="" src="/images/landing.jpg" style={{width: "100%", filter:"grayscale(70%) blur(0.8px)"}} />
                <div className="ui huge header centered" style={{fontSize: "50px", color:"white"}}><span style={{color:"rgb(58,164,222)"}}>C</span>ronos</div>
            </div>
        </div>
    );
}

export default Home;