
  const userData = [
    {
        "username": "jeet",
        "password": "jeet",
        "email": "jeet@example.com",
        "report_id": 1,
        "pdf_key": "abcd1234"
    },
    {
        "username": "admin",
        "password": "admin",
        "email": "admin@example.com",
        "report_id": 2,
        "pdf_key": "efgh5678"
    }
  ];
  
  const reportData = [
    {
        "user_id": 1,
        "skillset_analysis": "Excellent",
        "technical_analysis": "Proficient",
        "interview_date": "2024-03-18",
        "feedback": "Great performance"
    },
    {
        "user_id": 2,
        "skillset_analysis": "Good",
        "technical_analysis": "Intermediate",
        "interview_date": "2024-03-19",
        "feedback": "Needs improvement in communication skills"
    }
  ];
  
  const questionSetData = [
    {
        "skillset": "JavaScript",
        "technical_knowledge": "Node.js",
        "question_content": "What is event-driven programming?",
        "difficulty_level": "Medium"
    },
    {
        "skillset": "Python",
        "technical_knowledge": "Django",
        "question_content": "Explain MVC architecture.",
        "difficulty_level": "Hard"
    }
  ];
  
  const userAnswersData = [
    {
        "user_id": 1,
        "question_id": 1,
        "answer_content": "Event-driven programming is a programming paradigm in which the flow of the program is determined by events such as user actions (clicks, keypresses) or messages from other programs.",
        "answer_time": "2024-03-18T10:30:00"
    },
    {
        "user_id": 2,
        "question_id": 2,
        "answer_content": "MVC stands for Model-View-Controller. It is a software design pattern commonly used for developing user interfaces that divides the related program logic into three interconnected elements.",
        "answer_time": "2024-03-19T11:00:00"
    }
  ];

 const candidateData = [
    { name: 'Candidate 1', email: 'candidate1@example.com', resume: 'http://example.com/resume1.pdf', report: 'http://example.com/report1.pdf', status: "Pending"},
    { name: 'Candidate 2', email: 'candidate2@example.com', resume: 'http://example.com/resume2.pdf', report: 'http://example.com/report2.pdf', status: "Selected" },
    { name: 'Candidate 3', email: 'candidate3@example.com', resume: 'http://example.com/resume3.pdf', report: 'http://example.com/report3.pdf', status: "Interview Complete"},
    { name: 'Candidate 4', email: 'candidate4@example.com', resume: 'http://example.com/resume4.pdf', report: 'http://example.com/report4.pdf', status: "Pending" },
    { name: 'Candidate 5', email: 'candidate5@example.com', resume: 'http://example.com/resume5.pdf', report: 'http://example.com/report5.pdf', status: "Selected"},
    { name: 'Candidate 6', email: 'candidate6@example.com', resume: 'http://example.com/resume6.pdf', report: 'http://example.com/report6.pdf', status: "Pending" },
    { name: 'Candidate 7', email: 'candidate7@example.com', resume: 'http://example.com/resume7.pdf', report: 'http://example.com/report7.pdf', status: "Rejected"},
    { name: 'Candidate 8', email: 'candidate8@example.com', resume: 'http://example.com/resume8.pdf', report: 'http://example.com/report8.pdf', status: "Pending" },
    { name: 'Candidate 9', email: 'candidate9@example.com', resume: 'http://example.com/resume9.pdf', report: 'http://example.com/report9.pdf', status: "Review Submit"},
    { name: 'Candidate 10', email: 'candidate10@example.com', resume: 'http://example.com/resume10.pdf', report: 'http://example.com/report10.pdf', status: "Pending" },
    { name: 'Candidate 11', email: 'candidate11@example.com', resume: 'http://example.com/resume11.pdf', report: 'http://example.com/report11.pdf', status: "Rejected"},
    { name: 'Candidate 12', email: 'candidate12@example.com', resume: 'http://example.com/resume12.pdf', report: 'http://example.com/report12.pdf', status: "Pending" },

  ];

  
  module.exports = {
    userData,
    reportData,
    questionSetData,
    userAnswersData,
    candidateData
  };