import React from "react";
import { Widget } from "../../../widget";
import { SendMessageWrapper } from "./styled";
import { useFormik } from "formik";
import { Input } from "../../../components/form-input";
import { Button } from "../../../components/form-button";
import { DropdownList } from "../../../components/dropdown-list";
import { useAppSelector } from "../../../../redux/hooks";
import { sendMessage } from "../../services/data";
import * as Yup from "yup";
import { mapper } from "../../services/helpers";

export const SendMessageWidget = () => {
  const validationSchema = Yup.object().shape({
    selectedChats: Yup.array().of(Yup.number()).required("select any chat"),
    message: Yup.string().required(),
    pin: Yup.boolean(),
  });
  const { list } = useAppSelector((state) => state.chats);
  const mappedList = mapper(list);
  const { handleSubmit, handleChange, values, resetForm, errors } = useFormik({
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
      resetForm({
        values: {
          selectedChats: values.selectedChats,
          message: "",
          pin: false,
        },
      });
    },
  });
  console.log(values);
  return (
    <Widget name={"Send message widget"}>
      <SendMessageWrapper onSubmit={handleSubmit}>
        <DropdownList
          handleChange={handleChange}
          list={mappedList}
          nameList={"selectedChats"}
          values={values.selectedChats}
          placeHolder={"Select chat"}
        />
        <Input
          onChange={handleChange}
          id={"message"}
          name={"message"}
          value={values.message}
          errors={errors.message}
        />
        <Input
          type={"checkbox"}
          onChange={handleChange}
          id={"pin"}
          name={"pin"}
          checked={values.pin}
        />
        <Button label={"Отправить"} type={"submit"} />
      </SendMessageWrapper>
    </Widget>
  );
};
