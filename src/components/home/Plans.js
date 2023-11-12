import "../../css/plans.css"

function Plans() {

    return (
        <div className="flex gap-2 plan-container">
            <div className="plan rounded bg flex col glow">
                <h4 className="spacer-0">Gold Plan</h4>
                <p className="spacer-1 text-sm">For those of you who like simple</p>

                <div className="price flex spacer-2"><h3>$4.99</h3><i>/month</i></div>
                <ul className="spacer-1 text-sm">
                    <li className="spacer-0">Unlimited Movies</li>
                    <li className="spacer-0">No Ads</li>
                    <li className="spacer-0">25 Downloading Movies</li>
                    <li className="spacer-0">10 TV Channel</li>
                </ul>

                <button className="secondary_btn btn rounded spacer-0 text">Choose Plan</button>
                <a className="text-sm" href="#1">About this plan</a>
            </div>

            <div className="plan rounded bg-light flex col glow glass-reflection" style={{flex: "1.2"}}>
                <h4 className="spacer-0">Diamond Plan</h4>
                <p className="spacer-1 text-sm">The best plan for all needs</p>

                <div className="price flex spacer-2"><h3>$9.99</h3><i>/month</i></div>
                <ul className="spacer-1 text-sm">
                    <li className="spacer-0">Unlimited Movies</li>
                    <li className="spacer-0">No Ads</li>
                    <li className="spacer-0">100 Downloading Movies</li>
                    <li className="spacer-0">25 TV Channel</li>
                </ul>

                <button className="main_btn btn rounded spacer-0 text">Choose Plan</button>
                <a className="text-sm" href="#1">About this plan</a>
            </div>

            <div className="plan rounded bg flex col glow ">
                <h4 className="spacer-0">Platinum Plan</h4>
                <p className="spacer-1 text-sm">Enjoy the full featured service</p>

                <div className="price flex spacer-2"><h3>$19.99</h3><i>/month</i></div>
                <ul className="spacer-1 text-sm">
                    <li className="spacer-0">Unlimited Movies</li>
                    <li className="spacer-0">No Ads</li>
                    <li className="spacer-0">300 Downloading Movies</li>
                    <li className="spacer-0">100 TV Channel</li>
                </ul>

                <button className="secondary_btn btn rounded spacer-0 text">Choose Plan</button>
                <a className="text-sm" href="#1">About this plan</a>
            </div>
        </div>
    )
}

export default Plans
