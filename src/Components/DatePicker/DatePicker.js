import AdapterJalaali from "@date-io/jalaali";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { useState } from "react";
const DatePicker = () => {
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const handleDateChange = (newDate) => {
    setDate(newDate);
  };
  const handleTimeChange = (newDate) => {
    setTime(newDate);
  };
  return (
    <LocalizationProvider dateAdapter={AdapterJalaali}>
      <Stack spacing={1}>
        <div className=" w-80 h-32 bg-white   p-4 rounded-lg mb-2 md:w-full md:h-32 self-center">
          <p className=" font-semibold text-base mb-2">دریافت خودرو</p>
          <div className="flex gap-4 items-center justify-between text-slate-500">
            <select className=" h-14 w-16 md:w-24 bg-white border border-gray-400 rounded hover:border-slate-700 focus:border-blue-600 focus:border-2">
              <option className="">موقعیت مکانی</option>
            </select>
            <DesktopDatePicker
              label=""
              inputFormat="MM/DD/YYYY"
              value={date}
              onChange={handleDateChange}
              renderInput={(params) => <TextField {...params} />}
            />
            <TimePicker
              label=""
              value={time}
              onChange={handleTimeChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </div>
        </div>
      </Stack>
    </LocalizationProvider>
  );
};

export default DatePicker;
