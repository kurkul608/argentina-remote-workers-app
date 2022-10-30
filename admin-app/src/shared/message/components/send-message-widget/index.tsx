import React from "react";
import { Widget } from "../../../widget";
import { SendMessageWrapper } from "./styled";
import { useFormik } from "formik";
import { Input } from "../../../components/form-input";
import { Button } from "../../../components/form-button";
import { DropdownList } from "../../../components/dropdown-list";

export const SendMessageWidget = () => {
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      selectedChats: [],
      message: "",
      pin: false,
    },
    onSubmit: async (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const list = [
    { title: "Popit", _id: 1 },
    { title: "Ochko", _id: 2 },
    { title: "Zalupa", _id: 3 },
    { title: "Xer", _id: 4 },
  ];
  console.log(values.selectedChats);
  return (
    <Widget name={"Send message widget"}>
      <SendMessageWrapper onSubmit={handleSubmit}>
        <DropdownList
          handleChange={handleChange}
          list={list}
          nameList={"selectedChats"}
        ></DropdownList>
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
