import React from 'react'
import { useParams } from 'react-router';
import data from '../data/db';

export const Course = () => {

    const { id } = useParams();
    const course = data.courses[id-1];

    return (
        <div className="container card p-5 my-4">
            <h2>{course.title}</h2>
            <p><strong>Desc: </strong>{course.description}</p>
            <p><strong>Author: </strong>{course.author}</p>
        </div>
    )
}
