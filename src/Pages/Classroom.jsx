import PageButton from "../Components/PageButton";
import classroom from "../Assets/classroom.png";
import './Scenes.css';
<asset></asset>
const Classroom = () => {
    return (
        <div>
            < PageButton />
            <div class="image-container">
                <div class="image">
                    <img src={classroom} alt="classroom"/>
                </div>
            </div>
        </div>
    );
};

export default Classroom;