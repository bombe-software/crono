export default (props) => {
    return (
        <div>
        <div class="ui fixed menu">
            <div class="ui container">
                <a href="#" class="header item">
                    <img class="logo" src="" />
                    Crono
                </a>
                <a href="#" class="item">Home</a>
                <div class="ui simple dropdown item">
                    Dropdown <i class="dropdown icon"></i>
                    <div class="menu">
                        <a class="item" href="#">Link Item</a>
                        <a class="item" href="#">Link Item</a>
                        <div class="divider"></div>
                        <div class="header">Header Item</div>
                        <div class="item">
                            <i class="dropdown icon"></i>
                            Sub Menu
                            <div class="menu">
                                <a class="item" href="#">Link Item</a>
                                <a class="item" href="#">Link Item</a>
                            </div>
                        </div>
                        <a class="item" href="#">Link Item</a>
                    </div>
                </div>
            </div>
        </div>
        <br></br>
        <br />
        <br />
        </div>
    );
}