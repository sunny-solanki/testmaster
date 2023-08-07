import React, { useState } from 'react';
import './Styles/style.css'
import Home from './components/Home';
import Form1 from './components/Form1';
import Form2 from './components/Form2';
import Form3 from './components/Form3';
import Form4 from './components/Form4';

const App = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    testName: '',
    testDescription: '',
    duration: '',
    numOfQuestions: '',
    testImage: null,
    testLifeCycleHandler: '',
    testSequenceNo: '1',
    instruction: '',
    selectedTest: '',
    categoryName: '',
    numOfCategoryQuestions: '',
    questionImage: null,
    questionText: '',
    questionTime: '',
    questionWeightage: '',
    MCQ1: '',
    MCQ2: '',
    MCQ3: '',
    MCQ4: '',
    MCQ1Weightage: '',
    MCQ2Weightage: '',
    MCQ3Weightage: '',
    MCQ4Weightage: '',



    // Add other fields
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'file' ? files[0] : value,
    }));

  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleNext = () => {
    if (step < 5) {
      setStep(step + 1);
    }
  };

  const handleSaveAndContinue = () => {
    // Implement your logic here for saving form data
    handleNext();
  };

  return (
    <div>
      {step === 1 && <Home onNext={handleNext} />}
      {step === 2 && <Form1 data={formData} onNext={handleNext} handleChange={handleChange} />}
      {step === 3 && <Form2 data={formData} onBack={handleBack} onNext={handleNext} handleChange={handleChange} />}
      {step === 4 && <Form3 data={formData} onBack={handleBack} onNext={handleNext} handleChange={handleChange} />}
      {step === 5 && <Form4 data={formData} onBack={handleBack} onSaveContinue={handleSaveAndContinue} handleChange={handleChange} />}
    </div>
  );
};

export default App;

