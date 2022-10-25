import React from "react";
import { Widget } from "../../../widget";
import { SendMessageWrapper } from "./styled";
import { useFormik } from "formik";
import { Input } from "../../../components/form-input";
import { Button } from "../../../components/form-button";
import { sendMessage } from "../../services/data";

export const SendMessageWidget = () => {
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      message: "",
      pin: false,
    },
    onSubmit: async (values) => {
      await sendMessage({
        message: values.message,
        pin_message: values.pin,
        chat_id: -586327836,
      });
    },
  });

  return (
    <Widget name={"Send message widget"}>
      <SendMessageWrapper onSubmit={handleSubmit}>
        <Input
          onChange={handleChange}
          id={"message"}
          name={"message"}
          value={values.message}
        />
        <Input
          type={"checkbox"}
          onChange={handleChange}
          id={"pin"}
          name={"pin"}
        />
        <Button label={"Отправить"} type={"submit"} />
      </SendMessageWrapper>
    </Widget>
  );
};
