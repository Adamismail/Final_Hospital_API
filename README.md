API Information:
Project Overview:
This API is designed to cater to the needs of doctors and patients in a hospital designated by the government for testing, quarantine, and well-being of COVID-19 patients. The system supports two types of users: doctors and patients.

User Roles:
Doctors: Authorized doctors can log in to the system.
Patients: Patients are registered by doctors for further management.
Doctor's Workflow:
Doctor Registration: To register a doctor, make a POST request to http://localhost:5000/api/v1/doctors/register. 

Doctor Registration

Doctor Login: Log in as a doctor using the endpoint http://localhost:5000/api/v1/doctors/login. 

Doctor Login

Patient's Workflow:
Patient Registration: To register a patient, you need a doctor token obtained from the doctor's login. Make a POST request to http://localhost:5000/api/v1/patients/register. Include the doctor token in the authorization area. 

Patient Registration

Creating Patient Reports: After patient checkup, doctors can create patient reports by making a POST request to http://localhost:5000/api/v1/patients/{patient_id}/create_report. Replace {patient_id} with the actual patient's ID. Include the desired report status (e.g., Negative, Travelled-Quarantine, Symptoms-Quarantine, Positive-Admit) in the request body, along with other relevant details.

Creating Patient Reports

Viewing All Patient Reports: To retrieve all reports for a specific patient, use the endpoint http://localhost:5000/api/v1/patients/{patient_id}/all_reports. Replace {patient_id} with the actual patient's ID. This will provide you with a list of all reports associated with that patient.

Viewing All Patient Reports

Setup Instructions:
Download the code and navigate to the project directory.
Open your code editor and run npm install to install all dependencies.
Ensure you have MongoDB set up on your computer.
Download and install Postman to test the API endpoints.
Follow the steps outlined above for doctor and patient workflows using the provided endpoints.
Please note that this README is a paraphrased version of the original, providing the same information in a more structured and concise manner.