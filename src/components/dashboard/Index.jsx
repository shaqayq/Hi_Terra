import React from "react";
import Card from "./Card";
import Map from "./Map";
import Chart from "./Chart";
import Tasks from "./Tasks";
import { useCountFarmsQuery , useCountFieldQuery} from "../../features/apiSlice";


export default function Index() {
  
  const { data: farms, isLoading: farmsLoading } = useCountFarmsQuery();
  const { data: field, isLoading: fieldLoading } = useCountFieldQuery();


  

  return (
    <>
   
      <div className="MuiBox-root css-ists20">
      {farmsLoading || fieldLoading ? 
      <Card msg={true} /> : (
      <Card farms={farms} field={field} />
      )}
      </div>
      <Map/>
      <div className="report">
        <Chart />
        <Tasks/>
      </div>
    </>
  );
}
