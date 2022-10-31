import React from "react";
import { Widget } from "../../../widget";
import { SendMessageWrapper } from "./styled";
import { useFormik } from "formik";
import { Input } from "../../../components/form-input";
import { Button } from "../../../components/form-button";
import { DropdownList } from "../../../components/dropdown-list";
import { useAppSelector } from "../../../../redux/hooks";
import { sendMessage } from "../../services/data";

export const SendMessageWidget = () => {
  const { list } = useAppSelector((state) => state.chats);
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      selectedChats: [],
      message: "",
      pin: false,
    },
    onSubmit: async (values) => {
      console.log(values);
      await sendMessage({
        message: values.message,
        pin_message: values.pin,
        chat_ids: values.selectedChats,
      });
    },
  });

  console.log(list);
  return (
    <Widget name={"Send message widget"}>
      <SendMessageWrapper onSubmit={handleSubmit}>
        <DropdownList
          handleChange={handleChange}
          list={list}
          nameList={"selectedChats"}
        />
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
