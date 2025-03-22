import PageButton from "../Components/PageButton";
import backyard from "../Assets/backyard.png";
import "./Scenes.css"

const Backyard = () => {
    return (
        <div>
            < PageButton />
            <div class="image-container">
                <div class="image">
                    <img src={backyard} alt="classroom"/>
                </div>
            </div>
        </div>
    );
};

export default Backyard;