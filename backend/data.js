
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
  
  module.exports = {
    userData,
    reportData,
    questionSetData,
    userAnswersData
  };