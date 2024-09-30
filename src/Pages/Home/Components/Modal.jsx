import React, { useState } from "react";
import { Button, Modal, Progress } from "antd";
import YearModal from "./YearModal";
import StartDateModal from "./StartdateModal";
import WorkModal from "./WorkModal";
import AdditionalModal from "./AdditionalModal";
import LocationModal from "./LocationModal";
import CustomerModal from "./CustomerModal";
import ConfirmModal from "./ConfirmModal";
import GoogleCalendarModal from "./CalendlyModal";
import { useSelector } from "react-redux";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

const MainModal = () => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [locationFilled, setLocationFilled] = useState(false);
  const [contactFilled, setContactFilled] = useState(false);

  const formData = useSelector((state) => state.form);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setLoading(true);
      sendEmail();
      setTimeout(() => {
        setLoading(false);
        setOpen(false);
        setCurrentStep(0);
      }, 3000);
    }
  };

  const sendEmail = () => {
    const emailParams = {
      buildingType: formData.buildingType,
      buildingAge: formData.year,
      startDate: formData.startDate,
      workDetails: formData.workDetails,
      description: formData.description,
      location: formData.location.location,
      name: `${formData.contact.firstName} ${formData.contact.lastName}`,
      email: formData.contact.email,
      phone: formData.contact.phone,
      selectedDate: formData.selectedDate,
    };
  
    // Send email
    emailjs
      .send(
        "service_8u34gpb",
        "template_smgqomh",
        emailParams,
        "4t0mVFkL5snSt8fWo"
      )
      .then(() => {
        console.log("Email sent successfully!");
        toast.success("Form sent successfully!");
  
        // Now send SMS
        sendSMS();
      })
      .catch((error) => {
        console.log("Failed to send email:", error.text);
        toast.error("Failed to send form.");
      });
  };
  
  const sendSMS = () => {
    const smsData = {
      phone: "+998914766621", // Replace with the recipient's phone number
      appointmentDate: "2024-10-01", // Replace with the actual appointment date
    };
  
    fetch("https://newservice-7652.twil.io/path_1", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(smsData),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return response.text(); // If not JSON, return the response as text
        }
      })
      .then((data) => {
        if (typeof data === "string") {
          console.error("Error sending SMS:", data); // This will log the error page HTML
        } else {
          console.log("SMS sent successfully:", data);
          toast.success("SMS sent successfully!");
        }
      })
      .catch((error) => {
        console.error("Error sending SMS:", error);
      });
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
    <div className="py-[50px] md:w-450px flex flex-col gap-5 items-center h-[450px] justify-center">
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
    <div className="py-[50px] md:w-450px flex flex-col gap-5 items-center h-[450px] overflow-y-auto">
      <h1 className="text-xl font-bold text-blue-500">
        解体工事の内容を教えてください
      </h1>
      <h2 className="pl-[10px]">
        郵便番号・駅名もしくは市区町村までご入力いただくと、更に条件に合ったプロが見つかります。
      </h2>
      <LocationModal setLocationFilled={setLocationFilled} />
    </div>,
    <div className="py-[50px] md:w-[450px] flex flex-col gap-5 items-center h-[450px] justify-center">
      <h1 className="text-xl font-bold text-blue-500">
        お客様情報を入力してください
      </h1>
      <CustomerModal setContactFilled={setContactFilled} />
    </div>,
    <div className="py-[50px] md:w-[450px] flex flex-col gap-5 items-center h-[450px] justify-center">
      <h1 className="text-xl font-bold text-blue-500">Calendar</h1>
      <GoogleCalendarModal />
    </div>,
    <div className="py-[50px] md:w-[450px] flex flex-col gap-5 items-center h-[450px] justify-center">
      <h1 className="text-xl font-bold text-blue-500">Confirm</h1>
      <ConfirmModal />
    </div>,
  ];

  const isNextDisabled = () => {
    if (currentStep === 5) return !locationFilled;
    if (currentStep === 6) return !contactFilled;
    return false;
  };

  return (
    <>
      <Button
        type="default"
        onClick={showModal}
        className="flex md:flex-col gap-3 p-6 items-center justify-between w-[280px] h-auto"
      >
        <i className="fa-solid fa-house text-4xl text-blue-500"></i>
        <span className="text-lg mr-[40px] md:mr-[-0px]">戸建住宅</span>
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
            disabled={isNextDisabled()}
          >
            {currentStep < steps.length - 1 ? "次へ" : "提出する"}
          </Button>,
        ]}
      >
        <div className="mb-4">
          <Progress
            className="w-[300px] md:w-[400px]"
            percent={Math.round((currentStep / (steps.length - 1)) * 100)}
          />
        </div>

        {steps[currentStep]}
      </Modal>
    </>
  );
};

export default MainModal;
