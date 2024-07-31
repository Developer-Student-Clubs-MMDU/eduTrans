import React from 'react';
import { useParams } from 'react-router-dom';
import './CourseDetails.css';

const courses = {
  '1': {
    title: 'Data Structures and Algorithms',
    description: 'Hello and welcome to my channel, Vishal Gupta Computer Science! Here, we will delve into the fascinating world of data structures and algorithms...',
    videoLinks: [
      'https://youtu.be/LTZ4Mbe4vlw?si=wJmGEVe03esrUfQa',
      'https://youtu.be/rSEP5aLZ5Fg?si=ncvyd9L8R-fQv3hn'
    ]
  },
  '2': {
    title: 'Theory of Computation and Formal Languages',
    description: 'Join us on this channel as we delve into the fascinating realm of Theory of Computation and Formal Languages...',
    videoLinks: [
      'https://youtu.be/LTZ4Mbe4vlw?si=wJmGEVe03esrUfQa',
      'https://youtu.be/rSEP5aLZ5Fg?si=ncvyd9L8R-fQv3hn'
    ]
  }
};

function CourseDetails() {
  const { courseId } = useParams();
  const course = courses[courseId];

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="course-details">
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      <div className="video-list">
        {course.videoLinks.map((link, index) => (
          <div key={index} className="video-item">
            <iframe
              width="560"
              height="315"
              src={link}
              title={`Video ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseDetails;
