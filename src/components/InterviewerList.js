import React from 'react';

import InterviewerListItem from 'components/InterviewerListItem';

import "components/InterviewerList.scss"

export default function InterviewerList(props) {
  const interviewer = props.interviewers;
  const allInterviewers = interviewer.map(inter => {
    return (
      <InterviewerListItem
        key={inter.id}
        name={inter.name}
        avatar={inter.avatar}
        selected={inter.id === props.interviewer}
        setInterviewer={event => props.setInterviewer(inter.id)}
      />
    )
  })
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {allInterviewers}
      </ul>
    </section>
  );
}