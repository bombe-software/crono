export default (props) => {
    return (
    <div className="ui vertical footer segment">
        <div className="ui section divider"></div>
        <div className="ui center aligned container">
            <div className="ui stackable divided grid">
                <div className="three wide column">
                    <h4 className="ui header">Group 1</h4>
                <div className="ui link list">
                <a href="#" className="item">Link One</a>
                <a href="#" className="item">Link Two</a>
                <a href="#" className="item">Link Three</a>
                <a href="#" className="item">Link Four</a>
            </div>
        </div>
        <div className="three wide column">
          <h4 className="ui header">Group 2</h4>
          <div className="ui link list">
            <a href="#" className="item">Link One</a>
            <a href="#" className="item">Link Two</a>
            <a href="#" className="item">Link Three</a>
            <a href="#" className="item">Link Four</a>
          </div>
        </div>
        <div className="three wide column">
          <h4 className="ui header">Group 3</h4>
          <div className="ui link list">
            <a href="#" className="item">Link One</a>
            <a href="#" className="item">Link Two</a>
            <a href="#" className="item">Link Three</a>
            <a href="#" className="item">Link Four</a>
          </div>
        </div>
        <div className="seven wide column">
          <h4 className="ui header">Un producto de: </h4>
          <img src="/static/img/bombe-text-logo.png" className="ui centered small image" />
          <p>Make it simple, make it great</p>
        </div>
      </div>
      <div className="ui section divider"></div>
        <div className="ui horizontal small divided link list">
                <a className="item" href="#">Site Map</a>
                <a className="item" href="#">Contact Us</a>
                <a className="item" href="#">Terms and Conditions</a>
                <a className="item" href="#">Privacy Policy</a>
            </div>
        </div>
    </div>
    );
}
