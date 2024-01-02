import React from 'react'
import ShowTodosCheckBox from './ShowTodosCheckBox'

const ShowTodos = ({title,description}) => {
  return (
    <>
      <section>
        <div className="card border border-1 border-black rounded-md p-3">
            <div className="flex items-center justify-between">
                <div><h2 className="text-md font-bold text-capitalize">{title}</h2></div>
                <div className="flex items-center">
                    
                    {/* Here we have buttons and checkbox  */}
                    <ShowTodosCheckBox completed={true} />
                </div>
            </div>

            {/* description of the todos  */}
            <p>{description}</p>
        </div>
      </section>
    </>
  )
}

export default ShowTodos
