import React, { useState } from "react";
import { Button, Modal } from "antd";

const MainModal = () => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    if (currentStep < steps.length - 1) {
      // Go to the next step
      setCurrentStep(currentStep + 1);
    } else {
      // Complete the process
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setOpen(false);
        setCurrentStep(0); // Reset to the first step when closing
      }, 3000);
    }
  };

  const handleCancel = () => {
    setOpen(false);
    setCurrentStep(0); 
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const steps = [
    <div className="py-[150px] w-[350px] flex flex-col gap-2 items-center">
      <h1 className="text-xl font-bold text-blue-500">次に続く質問にご回答ください</h1>
      <h2 className="font-bold text-blue-500 text-center">あなたに合った解体工事のプロをご紹介します。</h2>
      <p>Step 1 content goes here...</p>
    </div>,
    <div className="py-[150px] w-[350px] flex flex-col gap-2 items-center">
      <h1 className="text-xl font-bold text-blue-500">追加の質問 2</h1>
      <p>Step 2 content goes here...</p>
    </div>,
    <div className="py-[150px] w-[350px] flex flex-col gap-2 items-center">
      <h1 className="text-xl font-bold text-blue-500">最終質問 3</h1>
      <p>Step 3 content goes here...</p>
    </div>
  ];

  return (
    <>
      <Button
        type="default"
        onClick={showModal}
        className="flex md:flex-col gap-3 p-6 items-center justify-between w-[200px] text-lg h-auto"
      >
        <i className="fa-solid fa-house text-4xl text-blue-500"></i>
        戸建住宅
      </Button>
      <Modal
        open={open}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleBack} disabled={currentStep === 0}>
            Back
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            {currentStep < steps.length - 1 ? "Next" : "Submit"}
          </Button>,
        ]}
      >
        {/* Display the current step content */}
        {steps[currentStep]}
      </Modal>
    </>
  );
};

export default MainModal;
