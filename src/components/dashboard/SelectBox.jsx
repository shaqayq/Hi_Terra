
import React , {useState} from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import {useGetFarmsQuery , useGetTasksQuery, useGetTaskByIdQuery} from "../../features/apiSlice";
export default function SelectBox(props) {
  const { onChange} = props;
  

  const { data: totalTask, isLoading: taskLoading, isSuccess} = useGetTasksQuery();
  const { data: totalFarm, error, isLoading: farmLoading, isSuccess: farmSuccess } = useGetFarmsQuery();
  // [ getTaskById, {isLoading: getTaskLoading, isSuccess: getTaskSuccess }] = useGetTaskByIdQuery();

 
  const [isChecked, setIsChecked] = useState(false);
  const [farmData , setfaramData]= useState([]);

  const handleCheckboxChange = (farm , lat ,long) => {
    setfaramData([...farmData , {farmName: farm,latitude:lat ,longitude: long}]);
    onChange(farmData)
  };

  const getTask=(id) => {
    // const task = getTaskById(id);
    // setfaramData(task);
    // onChange(farmData)
  }

  if(taskLoading || farmLoading){
    return <p>Loading</p>
  }
  
  return (
    <>
       <div className="dropdown">
        <button className="dropbtn">
          Farm
          <RiArrowDropDownLine />
        </button>
        <div className="dropdown-content">
          {totalFarm.farmsResult?.map((option, index) => {
            return (
              <label key={index}>
                <input
                  type="checkbox"
                  key={option}
                  onChange={()=>handleCheckboxChange(option.farmName , option.latitude , option.longitude)}          
                />{" "}
              {option.farmName}
              </label>
            );
          })}
        </div>
      </div>

      <div className="dropdown">
        <button className="dropbtn">
          Task
          <RiArrowDropDownLine />
        </button>
        <div className="dropdown-content">
          {totalTask.task?.map((option, index) => {
            return (
              <label key={index}>
                <input
                  type="checkbox"
                  key={option}
                  onChange={()=>getTask(option.id)}
                />{" "}
              {option.taskType}
              </label>
            );
          })}
        </div>
      </div>
           
     
      <div className="dropdown">
        <button className="dropbtn">
          CROP
          <RiArrowDropDownLine />
        </button>
        <div className="dropdown-content">
         
        </div>
      </div>
  
    </>
  );
}
