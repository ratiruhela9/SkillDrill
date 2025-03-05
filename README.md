# SkillDrill
Developed a website and added a model which generates you resume basis on your skills. It also helps in preparing for your interview by generating interview questions on the basis of the uploaded resume.

##Front-end Development (HTML, CSS, JavaScript):-
Created an HTML form where users can upload their resumes in PDF format.
 Designed the user interface with CSS to ensure a user-friendly and visually appealing
 experience. Implemented JavaScript to handle user interactions, such as uploading files and displaying
 progress indicators.
 ## Backend Development (Python with Flask):- 
 Set up a Flask application to handle HTTP requests from the front-end. Defined routes to handle file uploads and data retrieval. Configured the application to serve HTML templates and 
 static assets (CSS and JavaScript files).
 ## PDF Text Extraction (pdfminer):-
 Used the pdfminer library to extract text from the uploaded PDF resume. This involves parsing the PDF content to obtain plain text.- Implement error handling to deal with various PDF 
 formats and potential extraction issues.
 ## Natural Language Processing (NLP) for Question Prediction:
 Utilized NLP techniques to process the extracted text. This may involve tokenization,
 part-of-speech tagging, and named entity recognition.
 Developed a model or algorithm to analyze the resume's content and generate interview
 questions. The NLP model can be trained on a dataset of sample questions and resumes to
 make predictions.- Consider using libraries like spaCy or NLTK for NLP tasks.
 ## Response Generation:- 
 After analysing the resume, generate a list of predicted interview questions based on the
 candidate's qualifications and experiences.- Format the questions in a structured manner, making them easy for recruiters to review. 
 ## Integration with Front-end:- 
 Send the generated interview questions back to the front-end using Flask. You may use
 AJAX requests or standard form submissions for this purpose.- Display the predicted questions to the user, providing them with valuable insights into what
 questions they may encounter during an interview
