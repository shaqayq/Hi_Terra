import React from "react";
import "../../style/dashboard/card.css";
import { GiFarmTractor, GiPalmTree } from "react-icons/gi";
import { LuWheat } from "react-icons/lu";
import { GrInProgress } from "react-icons/gr";
export default function Card(props) {

  const {farms , msg , field} = props
    

  return (
    <>
      <div className="MuiBox-root css-t4xawo">
        <div className="MuiBox-root css-tdvis7">
          <div className="icon1">
            <GiFarmTractor />
          </div>
          <div className="MuiBox-root css-gg4vpm">
            <div className="MuiBox-root css-0">
              <h6 className="MuiTypography-root MuiTypography-h6 css-f06xdt">
                Total Farm
              </h6>
            </div>
            <div className="MuiBox-root css-0">
              <div className="MuiBox-root css-1ff8hsa"></div>
            </div>
          </div>
          <div className="MuiBox-root css-15goea3">
            <p className="MuiTypography-root MuiTypography-h6 css-1anx036">
            {msg ? <>...</> : farms.totalFarms} <small>4545</small>
            </p>
          </div>
        </div>
      </div>
      <div className="MuiBox-root css-t4xawo">
        <div className="MuiBox-root css-tdvis7">
          <div className="icon2">
            <GiPalmTree />
          </div>
          <div className="MuiBox-root css-gg4vpm">
            <div className="MuiBox-root css-0">
              <h6 className="MuiTypography-root MuiTypography-h6 css-f06xdt">
                Total Field
              </h6>
            </div>
            <div className="MuiBox-root css-0">
              <div className="MuiBox-root css-1ff8hsa"></div>
            </div>
          </div>
          <div className="MuiBox-root css-15goea3">
            <p className="MuiTypography-root MuiTypography-h6 css-1anx036">
            {msg ? <>...</> : field.totalField} <small>4545</small>
            </p>
          </div>
        </div>
      </div>
      <div className="MuiBox-root css-t4xawo">
        <div className="MuiBox-root css-tdvis7">
          <div className="icon3">
            <LuWheat />
          </div>
          <div className="MuiBox-root css-gg4vpm">
            <div className="MuiBox-root css-0">
              <h6 className="MuiTypography-root MuiTypography-h6 css-f06xdt">
                Ready to Harvest
              </h6>
            </div>
            <div className="MuiBox-root css-0">
              <div className="MuiBox-root css-1ff8hsa"></div>
            </div>
          </div>
          <div className="MuiBox-root css-15goea3">
            <h6 className="MuiTypography-root MuiTypography-h6 css-1anx036">
              120ha
            </h6>
          </div>
        </div>
      </div>
      <div className="MuiBox-root css-t4xawo">
        <div className="MuiBox-root css-tdvis7">
          <div className="icon4">
            <GrInProgress />
          </div>
          <div className="MuiBox-root css-gg4vpm">
            <div className="MuiBox-root css-0">
              <h6 className="MuiTypography-root MuiTypography-h6 css-f06xdt">
                Consumpation (In Progress)
              </h6>
            </div>
            <div className="MuiBox-root css-0">
              <div className="MuiBox-root css-1ff8hsa"></div>
            </div>
          </div>
          <div className="MuiBox-root css-15goea3">
            <h6 className="MuiTypography-root MuiTypography-h6 css-1anx036">
              120ha
            </h6>
          </div>
        </div>
      </div>
    </>
  );
}
