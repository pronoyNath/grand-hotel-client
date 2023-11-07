import { DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;

export default function DatePickerCalender({filterByDate}) {
  return (
    <div className='text-black'>
        <RangePicker className='text-left border-[#dbb878]' format={'DD-MM-YY'} onChange={filterByDate}/>
    </div>
  );
}
