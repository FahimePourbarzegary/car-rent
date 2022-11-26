import AdapterJalaali from "@date-io/jalaali";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
const DatePicker = ({ title, data, setData }) => {
  const selectTown = ["تهران", "اصفهان", "مشهد", "تبریز", "بندرعباس", "گیلان"];
  const handleTownChange = (e) => setData({ ...data, town: e.target.value });
  const handleDateChange = (newDate) => {
    setData({ ...data, date: newDate });
  };
  const handleTimeChange = (newDate) => {
    setData({ ...data, time: newDate });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterJalaali}>
      <Stack spacing={1}>
        <div className=" w-80 h-32 bg-white   p-4 rounded-lg mb-2 md:w-full md:h-32 self-center">
          <p className=" font-semibold text-base mb-2"> {title}</p>
          <div className="flex gap-4 items-center justify-between text-slate-500">
            <select
              className=" h-14 w-16 md:w-24 bg-white border border-gray-400 rounded hover:border-slate-700 focus:border-blue-600 focus:border-2"
              onChange={handleTownChange}
            >
              {selectTown.map((town, index) => (
                <option value={index} key={index}>
                  {town}
                </option>
              ))}
            </select>
            <DesktopDatePicker
              label=""
              inputFormat="MM/DD/YYYY"
              value={data.date}
              onChange={handleDateChange}
              renderInput={(params) => <TextField {...params} />}
            />
            <TimePicker
              label=""
              value={data.time}
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
