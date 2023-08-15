import React from 'react'
import {GiBowlOfRice} from 'react-icons/gi'
import '../../style/dashboard/task.css'
export default function Tasks() {
  return (
   <>
    <div className='tasks-section'>
        <section id='header'>
            <div>
                <h5>Cycle Task Ongoing</h5>
                <p id='detail'>All Frame</p>
            </div>
            <button>See All</button>
        </section>
        <section id='task-list'>
            <div id='task'>
            <span>
                <GiBowlOfRice/>
            </span>
                <div >
                <h6>TM Cereal</h6>
                <p id='detail'>Farm ABC Field-T123 Cycle 2</p>
                </div>
                <p id='detail'>02-Aug</p>
            </div>
            <div id='task'>
            <span>
                <GiBowlOfRice/>
            </span>
                <div >
                <h6>TM Cereal</h6>
                <p id='detail'>Farm ABC Field-T123 Cycle 2</p>
                </div>
                <p id='detail'>02-Aug</p>
            </div>
            <div id='task'>
            <span>
                <GiBowlOfRice/>
            </span>
                <div >
                <h6>TM Cereal</h6>
                <p id='detail'>Farm ABC Field-T123 Cycle 2</p>
                </div>
                <p id='detail'>02-Aug</p>
            </div>
            <div id='task'>
            <span>
                <GiBowlOfRice/>
            </span>
                <div >
                <h6>TM Cereal</h6>
                <p id='detail'>Farm ABC Field-T123 Cycle 2</p>
                </div>
                <p id='detail'>02-Aug</p>
            </div>
        </section>
    </div>
   </>
  )
}
