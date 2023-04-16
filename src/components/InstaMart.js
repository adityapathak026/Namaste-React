import { useState, useContext } from "react";
import { dummyData } from "../utils/constatnts"
import { UserContext } from "../utils/UserContext";

const Section = ({ isVisible, setIsVisible, item }) => {

    return (
        <div className="section_container">
            <h1>{item.title}</h1>
            {isVisible === item.id ?
                <>
                    <h3>{item.description}</h3>
                    <button className="filter_btn" onClick={() => { setIsVisible(null) }}>Hide</button>
                </>
                :
                <button className="filter_btn" onClick={() => { setIsVisible(item.id) }}>Show</button>
            }
        </div>
    )
}

const InstaMart = () => {


    const { user } = useContext(UserContext);
    console.log(user)

    const [configure, setConfigure] = useState(null);

    return (
        <div>
            <h1>{user.name}</h1>
            {dummyData.map((item) => (
                <Section
                    isVisible={configure}
                    setIsVisible={(id) => setConfigure(id)}
                    key={item.id}
                    item={item} />
            ))}

        </div>
    )
};

export default InstaMart;