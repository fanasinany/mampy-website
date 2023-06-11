import React, { FC, useState } from "react";
import "./style.scss";

type InputCustomProps = {
  label: string;
  name: string;
};

const InputCustom: FC<InputCustomProps & React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>> = ({label, name, ...inputProps}) => {
    const [value, setValue] = useState("");

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        if(e.target.value !== ""){
            e.currentTarget.classList.add('not-vide')
        }
        else{
            e.currentTarget.classList.remove('not-vide')
        }
        setValue(e.target.value)
    }
  return (
    <div className="input-container">
      <input type="text" name={name} value={value} onChange={handleChange}  {...inputProps}/>
      <label htmlFor={name}>{label} *</label>
    </div>
  );
};

export default InputCustom;
