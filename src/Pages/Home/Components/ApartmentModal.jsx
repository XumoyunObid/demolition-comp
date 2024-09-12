import React, { useState } from "react";
import { Button, Modal, Progress } from "antd";
import YearModal from "./YearModal";
import StartDateModal from "./StartdateModal";
import WorkModal from "./WorkModal";
import AdditionalModal from "./AdditionalModal";
import LocationModal from "./LocationModal";
import CustomerModal from "./CustomerModal";
import ConfirmModal from "./ConfirmModal";
import CalendlyModal from "./CalendlyModal";

const MainModal = () => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setOpen(false);
        setCurrentStep(0);
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
    <div className="py-[50px] md:w-[450px] flex flex-col gap-5 items-center h-[400px] justify-center">
      <h1 className="text-xl font-bold text-blue-500 text-center">
        次に続く質問にご回答ください
      </h1>
      <p className="text-md font-bold text-center">
        回答をもとに、あなたに合った解体工事のプロをご紹介します。
      </p>
    </div>,
    <div className="py-[50px] md:w-[450px] flex flex-col gap-5 items-center h-[400px] justify-center">
      <h1 className="text-xl font-bold text-blue-500">築何年ですか？</h1>
      <YearModal />
    </div>,
    <div className="py-[50px] md:w-[450px] flex flex-col gap-5 items-center h-[450px] justify-center">
      <h1 className="text-xl font-bold text-blue-500">
        いつ頃工事を始めたいですか？
      </h1>
      <StartDateModal />
    </div>,
    <div className="py-[50px] md:w-450px] flex flex-col gap-5 items-center h-[450px] justify-center">
      <h1 className="text-xl font-bold text-blue-500">
        解体工事の内容を教えてください
      </h1>
      <WorkModal />
    </div>,
    <div className="py-[50px] md:w-[450px] flex flex-col gap-5 items-center h-[450px] justify-center">
      <h1 className="text-xl font-bold text-blue-500">
        その他、事業者に伝えたい事はありますか？{" "}
        <Button type="default" disabled className="font-bold">
          任意
        </Button>
      </h1>
      <h2 className="">
        詳しい内容を書くことで、ぴったりのプロが見つかりやすくなります。
      </h2>
      <br />
      <AdditionalModal />
    </div>,
    <div className="py-[50px] md:w-450px] flex flex-col gap-5 items-center h-[450px] overflow-y-auto">
      <h1 className="text-xl font-bold text-blue-500">
        解体工事の内容を教えてください
      </h1>
      <h2 className="pl-[10px]">
        郵便番号・駅名もしくは市区町村までご入力いただくと、更に条件に合ったプロが見つかります。
      </h2>
      <LocationModal />
    </div>,
    <div className="py-[50px] md:w-[450px] flex flex-col gap-5 items-center h-[450px] justify-center">
      <h1 className="text-xl font-bold text-blue-500">
        お客様情報を入力してください
      </h1>
      <CustomerModal />
    </div>,
    <div className="py-[50px] md:w-[450px] flex flex-col gap-5 items-center h-[450px] justify-center">
      <h1 className="text-xl font-bold text-blue-500">Calendly</h1>
      <CalendlyModal />
    </div>,
    <div className="py-[50px] md:w-[450px] flex flex-col gap-5 items-center h-[450px] justify-center">
      <h1 className="text-xl font-bold text-blue-500">Confirm</h1>
      <ConfirmModal />
    </div>,
  ];

  return (
    <>
      <Button
        type="default"
        onClick={showModal}
        className="flex md:flex-col gap-3 p-[18px] items-center justify-between w-[280px] text-lg h-auto"
      >
        <i className="fa-solid fa-building text-4xl text-blue-500"></i>
        <span className="text-sm">
          集合住宅 <br />
          （マンション・アパート）
        </span>
      </Button>
      <Modal
        open={open}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleBack} disabled={currentStep === 0}>
            戻る
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            {currentStep < steps.length - 1 ? "次へ" : "提出する"}
          </Button>,
        ]}
      >
        {/* Progress Bar */}
        <div className="mb-4">
          <Progress
            className="w-[300px] md:w-[400px]"
            percent={Math.round((currentStep / (steps.length - 1)) * 100)}
          />
        </div>

        {/* Display the current step content */}
        {steps[currentStep]}
      </Modal>
    </>
  );
};

export default MainModal;
