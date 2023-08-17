
import React , {useState} from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function SelectBox(props) {
  const { options , onChange} = props;
  const { msg } = props;

  

  const [isChecked, setIsChecked] = useState(false);
  const [farmData , setfaramData]= useState([]);

  const handleCheckboxChange = (farm , lat ,long) => {
    // setIsChecked(event.target.checked);
    // const farm = event.target.value;
    setfaramData([...farmData , {farmName: farm,latitude:lat ,longitude: long}]);
    onChange(farmData)
  };

  
  return (
    <>
      <div className="dropdown">
        <button className="dropbtn">
          {msg}
          <RiArrowDropDownLine />
        </button>
        <div className="dropdown-content">
          {options.map((option, index) => {
            return (
              <label key={index}>
                <input
                  type="checkbox"
                  key={option}
                  // value={{
                  //   latitude: option.latitude,
                  //   longitude: option.longitude,
                  // }}
                  // checked={isChecked}
                  onChange={()=>handleCheckboxChange(option.farmName , option.latitude , option.longitude)}
                />{" "}
                {option.farmName}
              </label>
            );
          })}
        </div>
      </div>
  
    </>
  );
}
