import React from 'react'
import { Link } from 'react-router-dom'
import data from '../data/db'

export const Courses = () => {


    return (
        <div className="container my-4">
            {data.courses.map((course) => {
                return (
                    <Link className="text-decoration-none text-reset"  key={course.id} to={`/course/${course.id}`}>
                        <div className="card my-3 p-5">
                            <h2>{course.title}</h2>
                            {/* <p><strong>Author: </strong>{course.author}</p> */}
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}
