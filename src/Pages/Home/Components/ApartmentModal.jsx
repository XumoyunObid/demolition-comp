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
import { toast } from "react-toastify";
import useSendEmail from "../../Services/Mutation/useSendEmail";
import useSendSmS from "../../Services/Mutation/useSendSmS";

const MainModal = () => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [locationFilled, setLocationFilled] = useState(false);
  const [contactFilled, setContactFilled] = useState(false);

  const formData = useSelector((state) => state.form);
  const { mutate: sendEmail } = useSendEmail();
  const { mutate: sendSMS } = useSendSmS();

  const showModal = () => {
    setOpen(true);
  };

  const constructEmailBody = () => {
    return `
    <table style="border-collapse: collapse; width: 100%;">
      <tr>
        <th style="border: 1px solid black; padding: 8px;">項目</th>
        <th style="border: 1px solid black; padding: 8px;">内容</th>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px;">建物の種類</td>
        <td style="border: 1px solid black; padding: 8px;">${
          formData.buildingType
        }</td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px;">年</td>
        <td style="border: 1px solid black; padding: 8px;">${formData.year}</td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px;">開始日</td>
        <td style="border: 1px solid black; padding: 8px;">${
          formData.startDate
        }</td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px;">作業内容</td>
        <td style="border: 1px solid black; padding: 8px;">${
          formData.workDetails
        }</td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px;">説明</td>
        <td style="border: 1px solid black; padding: 8px;">${
          formData.description
        }</td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px;">場所</td>
        <td style="border: 1px solid black; padding: 8px;">${
          formData.location.location
        }</td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px;">顧客名</td>
        <td style="border: 1px solid black; padding: 8px;">${
          formData.contact.firstName
        } ${formData.contact.lastName}</td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px;">メール</td>
        <td style="border: 1px solid black; padding: 8px;">${
          formData.contact.email
        }</td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px;">電話番号</td>
        <td style="border: 1px solid black; padding: 8px;">${
          formData.contact.phone
        }</td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px;">予約日</td>
        <td style="border: 1px solid black; padding: 8px;">${
          formData.selectedDate || "未定"
        }</td>
      </tr>
    </table>
    `;
  };

  const constructSmSBody = () => {
    return `
    建物の種類: ${formData.buildingType},
    年: ${formData.year},
    開始日: ${formData.startDate},
    作業内容: ${formData.workDetails},
    説明: ${formData.description},
    場所: ${formData.location.location},
    顧客名: ${formData.contact.firstName} ${formData.contact.lastName},
    メール: ${formData.contact.email},
    電話番号: ${formData.contact.phone},
    予約日: ${formData.selectedDate}
    `;
  };

  const handleOk = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setLoading(true);
      sendEmail({
        email: "shikkarikaitai@gmail.com",
        message: constructEmailBody(),
        subject: "New email from customer",
      });
      sendSMS({
        phoneNumber: "+818056737627",
        message: constructSmSBody(),
      });
      setTimeout(() => {
        setLoading(false);
        setOpen(false);
        setCurrentStep(0);
      }, 3000);
      toast.success("メールアドレスが正常に送信されました！");
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
      <h1 className="text-xl font-bold text-blue-500">予約をする</h1>
      <GoogleCalendarModal />
    </div>,
    <div className="py-[50px] md:w-[450px] flex flex-col gap-5 items-center h-[450px] justify-center">
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
        className="flex md:flex-col gap-3 p-[18px] items-center justify-between w-[280px] text-lg h-auto"
      >
        <i className="fa-solid fa-building text-4xl text-blue-500 ml-[10px] md:ml-[-0px]"></i>
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
