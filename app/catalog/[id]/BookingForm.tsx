"use client"

import { useState } from "react";
import css from "./BookingForm.module.css"
import DatePicker from "react-datepicker";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import "react-datepicker/dist/react-datepicker.css";
interface FormValues {
  userName: string;
  userEmail: string;
  date: string,
  comment?: string
}

export default function BookingForm() {
  const [startDate, setStartDate] = useState<Date | null>(null);


  const handleSubmit = (formData: FormData) => {
    const date = startDate ? startDate.toISOString().slice(0, 10) : "";

    const formValues: FormValues = {
      userName: formData.get("name") as string,
      userEmail: formData.get("email") as string,
      date,
      comment: formData.get("comment") as string || undefined,
    };

   
    if (formValues.userName || formValues.userEmail || formValues.date) {
      iziToast.success({
        title: "Success",
        message: "Your booking has been successfully sent! ✅",
        position: "topRight",
        timeout: 4000,
      });
    }
    setStartDate(null)
  }
  return (
    <div className={css.container}>
      <h2 className={css.title}>Book your campervan now</h2>
      <p className={css.descr}>Stay connected! We are always ready to help you.</p>
      <form className={css.form} action={handleSubmit}>
        <input className={css.input} type="text" name="name" placeholder="Name*" required />
        <input className={css.input} type="email" name="email" placeholder="Email*" required />
        <DatePicker
          className={css.input}
          name="date"
          placeholderText="Booking date*"
          selected={startDate}
          minDate={new Date()} 
          dateFormat="yyyy-MM-dd"
          onChange={(date: Date | null) => setStartDate(date)}
        />
        <textarea className={css.inputcomment} name="comment" placeholder="Comment" />
        <button className={css.btn} >Send</button>

      </form>
    </div>
    
  )
}