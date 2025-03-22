import PageButton from "../Components/PageButton";
import "./Scenes.css";
import kitchen from "../Assets/kitchen.png"

const Kitchen = () => {
    return (
        <div>
            < PageButton />
            <div class="image-container">
                <div class="image">
                    <img src={kitchen} alt="kitchen"/>
                </div>
            </div>
        </div>
    );
};

export default Kitchen;