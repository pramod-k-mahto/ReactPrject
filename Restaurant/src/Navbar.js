
import "./Nav.css";


function Navbar({ choose, uq }) {
    return (
        <div className="Navbar">
            {uq.map((pkm) => {
                return (
                    <div>
                        <section className="btn">
                            <button onClick={() => choose(pkm)} className="Navbar" >{pkm}</button>
                        </section>
                    </div>
                )
            })}







        </div>
    )
}
export default Navbar;