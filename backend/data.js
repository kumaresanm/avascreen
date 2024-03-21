
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
  {
    "Name": "Yogesh",
    "Email": "yogesh@gmail.com",
    "Resume": "yogesh_cv.pdf",
    "Report": "interview_report_yogesh.pdf",
    "Status": "SELECTED",
    "CompletedDate": "2024-03-18",
    "NextInterviewDate": "2024-04-01"
  },
  {
    "Name": "Kumar",
    "Email": "kumar@gmail.com",
    "Resume": "Kumar_resume.pdf",
    "Report": "interview_report_Kumar.pdf",
    "Status": "COMPLETED",
    "CompletedDate": "2024-03-15",
    "NextInterviewDate": null
  },
  {
    "Name": "Jeet",
    "Email": "Jeet@gmail.com",
    "Resume": "Jeet_resume.pdf",
    "Report": "interview_report_Jeet.pdf",
    "Status": "PENDING",
    "CompletedDate": null,
    "NextInterviewDate": "2024-03-25"
  },
  {
    "Name": "Dablu",
    "Email": "Dablu@gmail.com",
    "Resume": "Dablu_resume.pdf",
    "Report": "interview_report_Dablu.pdf",
    "Status": "COMPLETED",
    "CompletedDate": "2024-03-12",
    "NextInterviewDate": null
  },
  {
    "Name": "John Doe",
    "Email": "john.doe@example.com",
    "Resume": "john_doe_resume.pdf",
    "Report": "interview_report_JohnDoe.pdf",
    "Status": "PENDING",
    "CompletedDate": null,
    "NextInterviewDate": "2024-04-05"
  },
  {
    "Name": "Alice Smith",
    "Email": "alice.smith@example.com",
    "Resume": "alice_smith_resume.pdf",
    "Report": "interview_report_AliceSmith.pdf",
    "Status": "SELECTED",
    "CompletedDate": "2024-03-10",
    "NextInterviewDate": "2024-03-20"
  },
  {
    "Name": "Emily Jones",
    "Email": "emily.jones@example.com",
    "Resume": "emily_jones_resume.pdf",
    "Report": "interview_report_EmilyJones.pdf",
    "Status": "COMPLETED",
    "CompletedDate": "2024-03-05",
    "NextInterviewDate": null
  },
  {
    "Name": "Michael Johnson",
    "Email": "michael.johnson@example.com",
    "Resume": "michael_johnson_resume.pdf",
    "Report": "interview_report_MichaelJohnson.pdf",
    "Status": "PENDING",
    "CompletedDate": null,
    "NextInterviewDate": "2024-03-29"
  },
  {
    "Name": "Sophia Brown",
    "Email": "sophia.brown@example.com",
    "Resume": "sophia_brown_resume.pdf",
    "Report": "interview_report_SophiaBrown.pdf",
    "Status": "SELECTED",
    "CompletedDate": "2024-03-20",
    "NextInterviewDate": "2024-04-05"
  },
  {
    "Name": "David Wilson",
    "Email": "david.wilson@example.com",
    "Resume": "david_wilson_resume.pdf",
    "Report": "interview_report_DavidWilson.pdf",
    "Status": "COMPLETED",
    "CompletedDate": "2024-03-18",
    "NextInterviewDate": null
  },
  {
    "Name": "Emma Taylor",
    "Email": "emma.taylor@example.com",
    "Resume": "emma_taylor_resume.pdf",
    "Report": "interview_report_EmmaTaylor.pdf",
    "Status": "PENDING",
    "CompletedDate": null,
    "NextInterviewDate": "2024-04-10"
  },
  {
    "Name": "Daniel Martinez",
    "Email": "daniel.martinez@example.com",
    "Resume": "daniel_martinez_resume.pdf",
    "Report": "interview_report_DanielMartinez.pdf",
    "Status": "SELECTED",
    "CompletedDate": "2024-03-10",
    "NextInterviewDate": "2024-03-25"
  }
];

  const candidateReport = {
    "candidateInfo": {
      "name": "Pratik Patel",
      "email": "pratik.patel4057@gmail.com",
      "role": "Full Stack Web Developer",
      "yearsOfExperience": 4,
      "skillsAssessed": ["Bootstrap", "CSS", "Git", "HTML", "JavaScript", "Laravel", "MySQL", "Webpack"],
      "languageCommunication": "CEFR grade: B2",
      "interviewScore": 75,
      "avatarUrl": "https://path-to-avatar/avatar.jpg"
    },
    "recordedResponses": [
      {
        question: "Could you help me understand more about your background by giving a brief introduction of yourself?",
        videoUrl: "/assets/interview.mp4",
        thumbnailUrl: "https://images.vexels.com/media/users/3/139567/isolated/preview/582aca4000ab46231333a1df893c947e-apple-logo-by-vexels.png",
        score: 8,
        maxScore: 10,
        duration: new Date(120000), // This represents a duration of 2 minutes
        transcript: "Here would be the transcript of the candidate's response."
      },
      {
        question: "Could you help me understand more about your background by giving a brief introduction of yourself?",
        videoUrl: "/assets/interview.mp4",
        thumbnailUrl: "https://images.vexels.com/media/users/3/139567/isolated/preview/582aca4000ab46231333a1df893c947e-apple-logo-by-vexels.png",
        score: 8,
        maxScore: 10,
        duration: new Date(120000), // This represents a duration of 2 minutes
        transcript: "Here would be the transcript of the candidate's response."
      },
      {
        question: "Could you help me understand more about your background by giving a brief introduction of yourself?",
        videoUrl: "/assets/interview.mp4",
        thumbnailUrl: "https://images.vexels.com/media/users/3/139567/isolated/preview/582aca4000ab46231333a1df893c947e-apple-logo-by-vexels.png",
        score: 8,
        maxScore: 10,
        duration: new Date(120000), // This represents a duration of 2 minutes
        transcript: "Here would be the transcript of the candidate's response."
      },
      {
        question: "Could you help me understand more about your background by giving a brief introduction of yourself?",
        videoUrl: "/assets/interview.mp4",
        thumbnailUrl: "https://images.vexels.com/media/users/3/139567/isolated/preview/582aca4000ab46231333a1df893c947e-apple-logo-by-vexels.png",
        score: 8,
        maxScore: 10,
        duration: new Date(120000), // This represents a duration of 2 minutes
        transcript: "Here would be the transcript of the candidate's response."
      }
      // You can add more response objects here
    ],
    "transcriptLines": [
      "Sure, I'd be happy to provide some background about myself.",
      "I have a bachelor's degree in Computer Science from XYZ University.",
      "After graduation, I worked as a software engineer at ABC Company for three years.",
      "During my time there, I developed expertise in web development and database management.",
      "I'm passionate about leveraging technology to solve real-world problems.",
      "In my free time, I enjoy hiking, reading, and volunteering at a local animal shelter."
    ],
    "questionCards": [
      {
        "questionNumber": "Question 1",
        "question": "How do you manage security vulnerabilities inherent to using third-party CSS frameworks like Bootstrap? Give an example.",
        "reviewSummary": "The candidate understands Bootstrap's integration but failed to explain detailed measures to manage security vulnerabilities.",
        "progressBarValue": 50,
        "score": "5/10"
      },
      {
        "questionNumber": "Question 2",
        "question": "Another question text here",
        "reviewSummary": "Review summary of the second question.",
        "progressBarValue": 75,
        "score": "7.5/10"
      }]
    };
  module.exports = {
    userData,
    reportData,
    questionSetData,
    userAnswersData,
    candidateData,
    candidateReport
  };