import React from 'react'
import { useParams } from 'react-router';
import data from '../data/db';

export const Course = () => {

    const { id } = useParams();
    const course = data.courses[id - 1];

    return (
        <div className="container my-4">
            <div className="card p-5">
                <h2>{course.title}</h2>
                <p><strong>Desc: </strong>{course.description}</p>
                <p><strong>Author: </strong>{course.author}</p>
            </div>
        </div>
    )
}
