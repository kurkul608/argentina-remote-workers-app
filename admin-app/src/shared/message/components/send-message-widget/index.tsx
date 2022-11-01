import React from "react";
import { Widget } from "../../../widget";
import { SendMessageWrapper } from "./styled";
import { useFormik } from "formik";
import { Input } from "../../../components/form-input";
import { Button } from "../../../components/form-button";
import { DropdownList } from "../../../components/dropdown-list";
import { useAppSelector } from "../../../../redux/hooks";
import { sendMessage } from "../../services/data";
import { IChat } from "../../../../interfaces/chat.interface";
import * as Yup from "yup";

export interface IMapped {
  [id: number]: string;
}

export const SendMessageWidget = () => {
  const validationSchema = Yup.object().shape({
    selectedChats: Yup.array().of(Yup.number()).required("select any chat"),
    message: Yup.string().required(),
    pin: Yup.boolean(),
  });
  const { list } = useAppSelector((state) => state.chats);
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      selectedChats: [],
      message: "",
      pin: false,
    },
    validationSchema: validationSchema,
    onSubmit: async () => {
      await sendMessage({
        message: values.message,
        pin_message: values.pin,
        chat_ids: values.selectedChats,
      });
    },
  });

  function mapper(list: IChat[]) {
    const mappedList: IMapped = {};
    list.map((item) => (mappedList[item.id] = item.title));
    return mappedList;
  }

  const mappedList = mapper(list);
  return (
    <Widget name={"Send message widget"}>
      <SendMessageWrapper onSubmit={handleSubmit}>
        <DropdownList
          handleChange={handleChange}
          list={list}
          nameList={"selectedChats"}
          values={values.selectedChats}
          placeHolder={mappedList}
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
